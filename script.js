const bikesProducts = [
  {
    title: 'Talon 2',
    url: 'https://www.giant-bicycles.com/us/talon-2-2025',
    description:
      'A versatile aluminum hardtail built for quick trail laps, everyday dirt rides, and confident off-road progression.',
    price: {
      mode: 'regular',
      amount: '$800'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: {
      type: 'new',
      label: 'New'
    },
    colors: [
      {
        key: 'asphalt-green',
        label: 'Asphalt Green',
        colors: ['#004814'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/wajuq4zawnoylmfywmcs/MY25Talon292_ColorAAsphaltGreen.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/igussvzity3zjfmvlzsx/MY25Talon292_ColorAAsphaltGreen-Rear.jpg'
        ]
      },
      {
        key: 'pure-red',
        label: 'Pure Red',
        colors: ['#ff170d'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/mmrtbbejknbooj2vjy9v/MY25Talon292_ColorBPureRed.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/lth4txd1pn9dh3jh0ryc/MY25Talon292_ColorBPureRed-Front.jpg'
        ]
      },
      {
        key: 'dried-matcha',
        label: 'Dried Matcha',
        colors: ['#97936b'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/msj8gqqp6hbexmlqcumz/MY25Talon292_ColorCDriedMatcha.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/rdjipsgbjkai8cy6qezy/MY25Talon292_ColorCDriedMatcha-Rear.jpg'
        ]
      }
    ]
  },
  {
    title: 'Anthem Advanced SL Frameset',
    url: 'https://www.giant-bicycles.com/us/anthem-advanced-sl-frameset',
    description:
      'A race-focused carbon frameset made for lightweight XC builds with sharp handling and efficient suspension response.',
    price: {
      mode: 'regular',
      amount: '$4,500'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: null,
    award: {
      src: './badge.png',
      alt: 'Best Climbing Bike 2024 Winner'
    },
    colors: [
      {
        key: 'color-a',
        label: 'Color A',
        colors: ['#00649F'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/hbvjwoxk3fv7xa1qoxtw/MY26AnthemAdvancedSL-FR_ColorA.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/itufccwqmvcmgxqi2rd3/MY26AnthemAdvancedSL-FR_ColorA-Front.jpg'
        ]
      }
    ]
  },
  {
    title: 'Anthem X Advanced SL 1',
    url: 'https://www.giant-bicycles.com/us/anthem-x-advanced-sl-1',
    description:
      'A premium XC machine tuned for explosive climbing, fast descents, and all-out speed on modern race courses.',
    price: {
      mode: 'regular',
      amount: '$8,000'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: {
      type: 'best-seller',
      label: 'Best Seller'
    },
    award: {
      src: './badge.png',
      alt: 'Best Climbing Bike 2024 Winner'
    },
    colors: [
      {
        key: 'solar-prominence',
        label: 'Solar Prominence',
        colors: ['#0F0F11', '#D53700'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/qbyplgjseicqyfzptegh/MY26AnthemXAdvancedSL1_ColorASolarProminence.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/cmmc7cebz92rqvfanzqn/MY26AnthemXAdvancedSL1_ColorASolarProminence-Front.jpg'
        ]
      }
    ]
  },
  {
    title: 'XTC Advanced 29 1',
    url: 'https://www.giant-bicycles.com/us/xtc-advanced-29-1',
    description:
      'A lightweight 29er hardtail that blends direct power transfer, precise steering, and race-day-ready efficiency.',
    price: {
      mode: 'discount',
      amount: '$3,200',
      oldAmount: '$4,000'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: {
      type: 'sale',
      label: 'Save 20%'
    },
    colors: [
      {
        key: 'abyss-black-steampunk',
        label: 'Abyss Black / Steampunk',
        colors: ['#111111', '#8c6133'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/qrpefgqfjrzq6x21nwsw/MY26XTCAdvanced291_ColorAAbyssBlack_Bronze.jpg'
        ]
      }
    ]
  },
  {
    title: 'Anthem X Advanced SL 2',
    url: 'https://www.giant-bicycles.com/us/anthem-x-advanced-sl-2',
    description:
      'A fast, capable XC trail bike designed to balance climbing efficiency with extra confidence on rough singletrack.',
    price: {
      mode: 'regular',
      amount: '$5,600'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: {
      type: 'new',
      label: 'New'
    },
    colors: [
      {
        key: 'dark-jungle',
        label: 'Dark Jungle',
        colors: ['#2f3a34'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/qrpwlnj9j1d6wfjiv5mc/MY26AnthemXAdvancedSL2_ColorADarkJungle.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/vov07sjl11zhthvh6ret/MY26AnthemXAdvancedSL2_ColorADarkJungle-Rear.jpg'
        ]
      }
    ]
  }
];

function createGearImage(label, accent, secondaryAccent = accent) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="936" height="624" viewBox="0 0 936 624">
      <rect width="936" height="624" rx="36" fill="#ffffff"/>
      <rect x="128" y="112" width="680" height="400" rx="32" fill="#f8f8fa" stroke="#dedee0" stroke-width="10"/>
      <rect x="184" y="168" width="568" height="288" rx="24" fill="${accent}" opacity="0.12"/>
      <circle cx="256" cy="312" r="76" fill="${accent}" opacity="0.22"/>
      <circle cx="680" cy="312" r="76" fill="${secondaryAccent}" opacity="0.22"/>
      <rect x="280" y="246" width="376" height="132" rx="24" fill="#ffffff"/>
      <text x="468" y="302" text-anchor="middle" font-family="Open Sans, Arial, sans-serif" font-size="34" font-weight="700" fill="#111111">${label}</text>
      <text x="468" y="350" text-anchor="middle" font-family="Open Sans, Arial, sans-serif" font-size="24" fill="#58626e">GIANT GEAR</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const gearProducts = [
  {
    title: 'CXR X1',
    url: 'https://www.giant-bicycles.com/us/cxr-x1-2023',
    description:
      'A lightweight carbon wheel option built for gravel speed, responsive handling, and confident mixed-terrain control.',
    price: {
      mode: 'discount',
      amount: '$660',
      oldAmount: '$1,100'
    },
    secondary: 'MSRP excluding sales tax, shipping & handling, and dealer-installed options',
    tag: {
      type: 'new',
      label: 'New'
    },
    selectorType: 'variants',
    variants: [
      {
        key: 'front',
        label: 'Front',
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/wsmr1wm4rliqbca7wp6w/GIANT-CXR-X1-HOOKLESS-DB-FW-350000307-1.jpg'
        ],
        price: {
          mode: 'discount',
          amount: '$660',
          oldAmount: '$1,100'
        },
        secondary: 'MSRP excluding sales tax, shipping & handling, and dealer-installed options'
      },
      {
        key: 'rear-hg',
        label: 'Rear HG',
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/xevhtoiwixxqyra4xtqz/GIANT-CXR-X1-HOOKLESS-DB-RW-350000325-1.jpg'
        ],
        price: {
          mode: 'discount',
          amount: '$660',
          oldAmount: '$1,100'
        },
        secondary: 'MSRP excluding sales tax, shipping & handling, and dealer-installed options'
      }
    ]
  },
  {
    title: 'Maxxis Minion DHF Mountain Bike Tire',
    url: 'https://www.giant-bicycles.com/us/maxxis-minion-dhf-mountain-bike-tire-2023',
    description:
      'A benchmark trail tire built to balance rolling speed with strong braking bite and confident cornering traction.',
    price: {
      mode: 'from-discount',
      amount: '$42',
      oldAmount: '$105'
    },
    secondary:
      'MSRP excluding sales tax, shipping & handling, destination fees, e-bike battery recycling fees and dealer-installed options. Dealer prices and fees may vary.',
    tag: {
      type: 'sale',
      label: 'Save 60%'
    },
    images: [
      'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/nm6xmgxfkxteh0j2oye4/Minion-DHF-3Q-Tanwall.jpg',
      'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/jaaasal4mh5f9ixcw5mc/Minion-DHF-Tread.jpg'
    ]
  }
];

const row = document.getElementById('card-row');
const tabs = Array.from(document.querySelectorAll('.plp-tab'));
const MAX_COMPARE_ITEMS = 3;
const TOUCH_QUERY = '(hover: none), (pointer: coarse)';
const catalogs = {
  bikes: bikesProducts,
  gear: gearProducts
};
let activeCatalogKey = 'bikes';

function isTouchInteractionMode() {
  return window.matchMedia(TOUCH_QUERY).matches;
}

function createSwatch(color, selected, onSelect) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `swatch${selected ? ' is-selected' : ''}`;
  const [colorA, colorB] = color.colors;
  button.style.setProperty('--swatch-color-a', colorA);
  if (colorB) {
    button.style.setProperty('--swatch-color-b', colorB);
  } else {
    button.style.removeProperty('--swatch-color-b');
  }
  button.setAttribute('aria-label', color.label);
  button.setAttribute('aria-pressed', String(selected));
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    onSelect(color.key);
    button.blur();
    document.activeElement?.blur?.();
  });
  return button;
}

function createVariantPill(variant, selected, onSelect) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `variant-pill${selected ? ' is-selected' : ''}`;
  button.innerHTML = `<span class="variant-pill__label">${variant.label}</span>`;
  button.setAttribute('aria-pressed', String(selected));
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    onSelect(variant.key);
    button.blur();
    document.activeElement?.blur?.();
  });
  return button;
}

function renderPriceMarkup(price) {
  if (!price) {
    return '';
  }

  if (price.mode === 'discount') {
    return `
      <div class="price-line price-line--discounted">
        <span class="price-current price-current--sale">${price.amount}</span>
        <span class="price-old">${price.oldAmount}</span>
      </div>
    `;
  }

  if (price.mode === 'from') {
    return `
      <div class="price-line price-line--from">
        <span class="price-current">From ${price.amount}</span>
      </div>
    `;
  }

  if (price.mode === 'from-discount') {
    return `
      <div class="price-line price-line--from-discount">
        <span class="price-prefix">From</span>
        <span class="price-current price-current--sale">${price.amount}</span>
        <span class="price-old">${price.oldAmount}</span>
      </div>
    `;
  }

  return `
    <div class="price-line">
      <span class="price-current">${price.amount}</span>
    </div>
  `;
}

function renderSecondaryMarkup(product) {
  const parts = [];

  if (product.secondary) {
    parts.push(`<p class="finance-copy">${product.secondary}</p>`);
  }

  (product.disclaimers || []).forEach((line) => {
    parts.push(`<p class="disclaimer">${line}</p>`);
  });

  return parts.join('');
}

function renderTagMarkup(tag) {
  if (!tag) {
    return '';
  }

  return `<div class="card-tag card-tag--${tag.type}"><span class="card-tag__label">${tag.label}</span></div>`;
}

function createCard(product) {
  const article = document.createElement('article');
  article.className = 'product-card has-hover-media';
  article.setAttribute('aria-label', `${product.title} product tile`);
  const showCompare = activeCatalogKey === 'bikes';

  article.innerHTML = `
    <a class="product-card__link" href="${product.url}" aria-label="Open ${product.title} product page"></a>
    <div class="product-card__badges">
      ${renderTagMarkup(product.tag)}
      ${product.award ? `<div class="award-badge-wrap"><img class="award-badge" src="${product.award.src}" alt="${product.award.alt}" /></div>` : ''}
    </div>
    <div class="product-card__media">
      <div class="product-card__media-frame">
        <img class="product-card__image" alt="" />
        <img class="product-card__hover-image" alt="" />
      </div>
    </div>
    <div class="product-card__topline">
      <div class="selector-group" aria-label="Available options"></div>
      ${showCompare ? `
      <label class="compare-toggle">
        <span>Compare</span>
        <span class="compare-toggle__box">
          <input type="checkbox" name="compare" />
          <span class="checkbox-ui" aria-hidden="true"></span>
          <span class="compare-tooltip" role="tooltip">
            You can compare up to 3 products. Deselect one to add this item.
          </span>
        </span>
      </label>
      ` : '<span class="compare-toggle compare-toggle--ghost" aria-hidden="true"></span>'}
    </div>
    <div class="product-card__copy">
      <a class="product-card__text-link" href="${product.url}" aria-label="Read more about ${product.title}">
        <div class="title-group">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
        </div>
      </a>
      <div class="product-card__pricing">
        ${renderPriceMarkup(product.price)}
        ${renderSecondaryMarkup(product)}
      </div>
    </div>
  `;

  const selectorGroup = article.querySelector('.selector-group');
  const mainImage = article.querySelector('.product-card__image');
  const hoverImage = article.querySelector('.product-card__hover-image');
  const pricingContainer = article.querySelector('.product-card__pricing');

  function applySelection(optionKey) {
    const usesVariants = product.selectorType === 'variants';
    const entries = usesVariants ? product.variants : product.colors;
    const selectedEntry = entries.find((entry) => entry.key === optionKey) || entries[0];
    const [primaryImage, secondaryImage] = selectedEntry.images;

    mainImage.src = primaryImage;
    mainImage.alt = `${product.title} in ${selectedEntry.label}`;

    if (secondaryImage) {
      hoverImage.src = secondaryImage;
      hoverImage.alt = `${product.title} alternate view in ${selectedEntry.label}`;
      article.classList.add('has-hover-media');
    } else {
      hoverImage.removeAttribute('src');
      hoverImage.alt = '';
      article.classList.remove('has-hover-media');
    }

    if (usesVariants) {
      pricingContainer.innerHTML = `
        ${renderPriceMarkup(selectedEntry.price || product.price)}
        ${renderSecondaryMarkup({
          secondary: selectedEntry.secondary || product.secondary,
          disclaimers: selectedEntry.disclaimers || product.disclaimers
        })}
      `;
    }

    selectorGroup.querySelectorAll('button').forEach((button) => {
      const isSelected = button.dataset.option === selectedEntry.key;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
  }

  if (product.selectorType === 'variants') {
    selectorGroup.classList.add('selector-group--variants');
    selectorGroup.setAttribute('aria-label', 'Available product variants');
    product.variants.forEach((variant, index) => {
      const pill = createVariantPill(variant, index === 0, applySelection);
      pill.dataset.option = variant.key;
      selectorGroup.appendChild(pill);
    });
    applySelection(product.variants[0].key);
    return article;
  }

  if (!product.colors?.length) {
    selectorGroup.classList.add('selector-group--ghost');

    const [primaryImage, secondaryImage] = product.images || [];
    mainImage.src = primaryImage;
    mainImage.alt = product.title;

    if (secondaryImage) {
      hoverImage.src = secondaryImage;
      hoverImage.alt = `${product.title} alternate view`;
      article.classList.add('has-hover-media');
    } else {
      hoverImage.removeAttribute('src');
      hoverImage.alt = '';
      article.classList.remove('has-hover-media');
    }

    return article;
  }

  selectorGroup.classList.add('swatches');
  selectorGroup.setAttribute('aria-label', 'Available colors');
  product.colors.forEach((color, index) => {
    const swatch = createSwatch(color, index === 0, applySelection);
    swatch.dataset.option = color.key;
    selectorGroup.appendChild(swatch);
  });

  applySelection(product.colors[0].key);
  return article;
}

function renderCatalog(catalogKey) {
  activeCatalogKey = catalogKey;
  row.innerHTML = '';

  catalogs[catalogKey].forEach((product) => {
    row.appendChild(createCard(product));
  });

  updateCompareAvailability();
  updateTooltipEdgeAlignment();
}

function updateCompareAvailability() {
  const compareInputs = Array.from(row.querySelectorAll('input[name="compare"]'));
  const selectedCount = compareInputs.filter((input) => input.checked).length;

  compareInputs.forEach((input) => {
    const toggle = input.closest('.compare-toggle');
    const shouldDisable = selectedCount >= MAX_COMPARE_ITEMS && !input.checked;

    input.disabled = shouldDisable;

    if (shouldDisable) {
      toggle.classList.add('is-disabled');
      toggle.setAttribute('aria-disabled', 'true');
      return;
    }

    toggle.classList.remove('is-disabled', 'show-tooltip');
    toggle.removeAttribute('aria-disabled');
  });
}

function updateTooltipEdgeAlignment() {
  const cards = Array.from(row.querySelectorAll('.product-card'));
  const rows = new Map();

  cards.forEach((card) => {
    const top = Math.round(card.getBoundingClientRect().top);
    const matches = Array.from(rows.keys()).find((value) => Math.abs(value - top) <= 2);
    const rowKey = matches ?? top;

    if (!rows.has(rowKey)) {
      rows.set(rowKey, []);
    }

    rows.get(rowKey).push(card);
  });

  rows.forEach((rowCards) => {
    rowCards.forEach((card) => card.classList.remove('product-card--edge-right'));
    rowCards[rowCards.length - 1]?.classList.add('product-card--edge-right');
  });
}

function positionCompareTooltip(toggle) {
  const tooltip = toggle.querySelector('.compare-tooltip');
  const card = toggle.closest('.product-card');

  if (!tooltip || !card) {
    return;
  }

  toggle.style.setProperty('--tooltip-shift', '0px');
  if (!isTouchInteractionMode() && !card.classList.contains('product-card--edge-right')) {
    return;
  }

  const tooltipRect = tooltip.getBoundingClientRect();
  const viewportPadding = 16;
  let shift = 0;

  if (tooltipRect.right > window.innerWidth - viewportPadding) {
    shift -= tooltipRect.right - (window.innerWidth - viewportPadding);
  }

  if (tooltipRect.left < viewportPadding) {
    shift += viewportPadding - tooltipRect.left;
  }

  toggle.style.setProperty('--tooltip-shift', `${Math.round(shift)}px`);
}

function showDisabledCompareTooltip(toggle) {
  row.querySelectorAll('.compare-toggle.show-tooltip').forEach((entry) => {
    if (entry !== toggle) {
      entry.classList.remove('show-tooltip');
    }
  });

  toggle.classList.add('show-tooltip');
  positionCompareTooltip(toggle);
}

row.addEventListener('change', (event) => {
  if (event.target.matches('input[name="compare"]')) {
    updateCompareAvailability();

    if (isTouchInteractionMode()) {
      event.target.blur();
      document.activeElement?.blur?.();
    }
  }
});

row.addEventListener('click', (event) => {
  const compareToggle = event.target.closest('.compare-toggle');
  const disabledToggle = event.target.closest('.compare-toggle.is-disabled');
  const swatch = event.target.closest('.swatch');

  if (swatch) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  if (compareToggle) {
    event.stopPropagation();
  }

  if (!disabledToggle) {
    row.querySelectorAll('.compare-toggle.show-tooltip').forEach((toggle) => {
      toggle.classList.remove('show-tooltip');
    });
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  showDisabledCompareTooltip(disabledToggle);
});

row.addEventListener('touchstart', (event) => {
  if (event.target.closest('.compare-toggle.is-disabled')) {
    event.preventDefault();
  }
}, { passive: false });

row.addEventListener('touchend', (event) => {
  const disabledToggle = event.target.closest('.compare-toggle.is-disabled');

  if (!disabledToggle) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  showDisabledCompareTooltip(disabledToggle);
}, { passive: false });

row.addEventListener('mouseleave', (event) => {
  const toggle = event.target.closest('.compare-toggle.show-tooltip');

  if (toggle) {
    toggle.classList.remove('show-tooltip');
  }
}, true);

row.addEventListener('mouseenter', (event) => {
  const toggle = event.target.closest('.compare-toggle.is-disabled');

  if (toggle) {
    positionCompareTooltip(toggle);
  }
}, true);

window.addEventListener('resize', updateTooltipEdgeAlignment);
window.addEventListener('resize', () => {
  row.querySelectorAll('.compare-toggle.is-disabled').forEach((toggle) => {
    positionCompareTooltip(toggle);
  });
});

updateCompareAvailability();
updateTooltipEdgeAlignment();

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const nextKey = tab.dataset.tab;

    if (!nextKey || nextKey === activeCatalogKey) {
      return;
    }

    tabs.forEach((entry) => {
      const isActive = entry === tab;
      entry.classList.toggle('is-active', isActive);
      entry.setAttribute('aria-selected', String(isActive));
    });

    renderCatalog(nextKey);
  });
});

renderCatalog(activeCatalogKey);
