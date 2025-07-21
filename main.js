document.addEventListener('DOMContentLoaded', function() {
  const selectors = [
    '.product-item',
    '.deal-item',
    '.item-card',
    '.supplier-item'
  ];
  const items = document.querySelectorAll(selectors.join(','));

  items.forEach(item => {
    item.addEventListener('click', function() {
      item.classList.remove('animate-section-item');
      void item.offsetWidth;
      item.classList.add('animate-section-item');
    });
    item.addEventListener('animationend', function() {
      item.classList.remove('animate-section-item');
    });
  });
});

function startDealsTimerFromHTML() {
  const timer = document.querySelector('.deal-timer');
  if (!timer) return;
  const spans = timer.querySelectorAll('.timer-block span');
  if (spans.length !== 4) return;

  let days = parseInt(spans[0].textContent, 10) || 0;
  let hours = parseInt(spans[1].textContent, 10) || 0;
  let minutes = parseInt(spans[2].textContent, 10) || 0;
  let seconds = parseInt(spans[3].textContent, 10) || 0;

  let totalSeconds = days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;

  function updateTimerDisplay(remaining) {
    const d = Math.floor(remaining / (24 * 3600));
    const h = Math.floor((remaining % (24 * 3600)) / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;
    spans[0].textContent = String(d).padStart(2, '0');
    spans[1].textContent = String(h).padStart(2, '0');
    spans[2].textContent = String(m).padStart(2, '0');
    spans[3].textContent = String(s).padStart(2, '0');
  }

  updateTimerDisplay(totalSeconds);
  const interval = setInterval(() => {
    totalSeconds--;
    if (totalSeconds < 0) {
      clearInterval(interval);
      return;
    }
    updateTimerDisplay(totalSeconds);
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
  startDealsTimerFromHTML();
});

const categoryItems = document.querySelectorAll('.categories li');
categoryItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('animate-section-item');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('animate-section-item');
  });
});

const promoBtn = document.querySelector('.promo button');
if (promoBtn) {
  promoBtn.addEventListener('click', () => {
    promoBtn.classList.add('animate-section-item');
    setTimeout(() => promoBtn.classList.remove('animate-section-item'), 400);
  });
}

const dealItems = document.querySelectorAll('.deal-item');
dealItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('animate-section-item');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('animate-section-item');
  });
});

const sourceBtns = document.querySelectorAll('.source-btn');
sourceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('animate-section-item');
    setTimeout(() => btn.classList.remove('animate-section-item'), 400);
  });
});

const supplierForm = document.querySelector('.supplier-form-card form');
if (supplierForm) {
  supplierForm.addEventListener('submit', e => {
    e.preventDefault();
    supplierForm.classList.add('animate-section-item');
    setTimeout(() => supplierForm.classList.remove('animate-section-item'), 600);
  });
}

const itemCards = document.querySelectorAll('.item-card');
itemCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('animate-section-item');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('animate-section-item');
  });
});

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('animate-section-item');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('animate-section-item');
  });
});

const supplierItems = document.querySelectorAll('.supplier-item');
supplierItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('animate-section-item');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('animate-section-item');
  });
});

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    newsletterForm.classList.add('animate-section-item');
    setTimeout(() => newsletterForm.classList.remove('animate-section-item'), 600);
  });
}

const hoverableSelectors = [
  '.product-item',
  '.deal-item',
  '.item-card',
  '.supplier-item',
  '.service-card'
];
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll(hoverableSelectors.join(',')).forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('animate-section-item');
    });
    item.addEventListener('mouseleave', () => {
      item.classList.remove('animate-section-item');
    });
  });
});

const animatedSections = [
  '.deals',
  '.product-sections',
  '.supplier-request',
  '.recommended',
  '.services',
  '.suppliers-region',
  '.newsletter-section'
];

document.addEventListener('DOMContentLoaded', function() {
  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('deals-entrance-animate');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  animatedSections.forEach(selector => {
    document.querySelectorAll(selector).forEach(section => {
      section.classList.remove('deals-entrance-animate');
      observer.observe(section);
    });
  });
});

function setupAddToCartButtons() {
  const selectors = ['.product-item', '.deal-item', '.item-card'];
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(item => {
      if (!item.querySelector('.add-to-cart-btn')) {
        const btn = document.createElement('button');
        btn.className = 'add-to-cart-btn';
        btn.textContent = 'Add to cart';
        item.appendChild(btn);
      }
      item.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) return;
        document.querySelectorAll(selector + '.selected').forEach(sel => sel.classList.remove('selected'));
        item.classList.add('selected');
      });
      item.addEventListener('mouseleave', function() {
        item.classList.remove('selected');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setupAddToCartButtons();
}); 