const swatchData = [
  {
    fill:
      "linear-gradient(110.973deg, rgb(16, 15, 15) 50.022%, rgb(250, 250, 250) 50.071%)",
    selected: true,
  },
  {
    fill:
      "linear-gradient(110.973deg, rgb(217, 63, 171) 50.022%, rgb(112, 197, 59) 50.071%)",
    selected: false,
  },
  {
    fill:
      "linear-gradient(110.973deg, rgb(91, 44, 24) 50.022%, rgb(218, 99, 2) 50.071%)",
    selected: false,
  },
];

const swatchContainer = document.querySelector(".swatches");

function renderSwatches() {
  if (!swatchContainer) {
    return;
  }

  swatchContainer.innerHTML = "";

  swatchData.forEach((swatch, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `swatch${swatch.selected ? " is-selected" : ""}`;
    button.style.setProperty("--swatch-fill", swatch.fill);
    button.setAttribute("aria-label", `Select color option ${index + 1}`);
    button.setAttribute("aria-pressed", String(swatch.selected));

    button.addEventListener("click", () => {
      swatchData.forEach((item) => {
        item.selected = false;
      });
      swatch.selected = true;
      renderSwatches();
    });

    swatchContainer.appendChild(button);
  });
}

renderSwatches();
