const audience = [
  {
    index: "01",
    title: "Жителям",
    icon: "icon-user",
    text: "Выбирайте лучшее в своём городе и получайте больше выгоды.",
    items: ["Компании и услуги города", "Бонусы и спецпредложения", "Рекомендации друзей"],
  },
  {
    index: "02",
    title: "Специалистам по рекламе",
    icon: "icon-briefcase",
    text: "Работайте над проектами, развивайтесь и укрепляйте профессиональную репутацию.",
    items: ["Проекты и заказы", "Профиль и рейтинг", "Рост и новые возможности"],
  },
  {
    index: "03",
    title: "Бизнесу",
    icon: "icon-building",
    text: "Развивайте бизнес с поддержкой специалистов и необходимых инструментов.",
    items: ["Маркетолог и менеджер", "Все услуги и специалисты", "Аналитика и рост"],
  },
  {
    index: "04",
    title: "Подрядчикам в рекламе",
    icon: "icon-contractor",
    text: "Получайте заказы, управляйте работой и повышайте качество услуг.",
    items: ["Заказы и продажи", "Кабинет и инструменты", "Репутация и стабильность"],
  },
];

const currentProducts = [
  {
    title: "KLIPER.PRO",
    text: "Клиенты, сотрудники, специалисты и подрядчики работают в одной системе — от заявки до результата.",
    kind: "Центр управления рекламой",
    icon: "icon-monitor",
    visual: "pro",
    image: "/assets/product-kliper-pro-v1.webp",
    href: "/products/kliper-pro/",
  },
  {
    title: "KLIPER.CITY",
    text: "Находите места, районы, компании и полезные сервисы через городской контекст и рекомендации.",
    kind: "Живой цифровой город",
    icon: "icon-city",
    visual: "city",
    image: "/assets/product-kliper-city-v1.webp",
    href: "/products/kliper-city/",
  },
  {
    title: "KLIPER.MAP",
    text: "Находите рекламные объекты, сравнивайте форматы и переходите к размещению прямо с карты.",
    kind: "Локальная реклама",
    icon: "icon-pin",
    visual: "map",
    image: "/assets/product-kliper-map-v1.webp",
    chips: ["ProCups", "Площадка", "Лифты"],
    href: "/products/kliper-map/",
  },
];

const futureProducts = [
  {
    title: "МОЙ КЛИПЕР",
    text: "Рекламный кабинет с бонусной системой, маркетологом по подписке, личным менеджером и всеми рекламными продуктами в одном окне.",
    icon: "icon-network",
    status: "Следующий",
    nearest: true,
  },
  {
    title: "KLIPER.MARKET",
    text: "Маркетплейс рекламного производства и услуг: типографии, дизайнеры, изготовители, монтажники и специалисты по продвижению.",
    icon: "icon-store",
    status: "В плане",
  },
  {
    title: "KLIPER.SPACE",
    text: "Единое пространство онлайн-рекламы: размещение на картах, таргетированная реклама, блогеры, каналы и цифровые площадки.",
    icon: "icon-space",
    status: "В плане",
  },
  {
    title: "4PACK",
    text: "Комплексная упаковка бизнеса: анализ четырёх направлений, готовая карта развития и все необходимые бизнес-услуги в одном месте.",
    icon: "icon-package",
    status: "В плане",
  },
];

const flow = [
  { title: "Жители", icon: "icon-user" },
  { title: "Специалисты по рекламе", icon: "icon-briefcase" },
  { title: "Бизнес", icon: "icon-building" },
  { title: "Рекламные подрядчики", icon: "icon-contractor" },
];

const iconPaths = {
  "icon-user": '<circle cx="12" cy="8" r="4"></circle><path d="M4.5 21a7.5 7.5 0 0 1 15 0"></path>',
  "icon-briefcase": '<rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12h4"></path>',
  "icon-building": '<path d="M6 21V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17M3 21h18M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 21v-3h4v3"></path>',
  "icon-city": '<path d="M3 21h18M5 21V10l4-3v14M9 21V3h7v18M16 21v-8h3l2 2v6M12 7h1M12 11h1M12 15h1"></path>',
  "icon-chart": '<path d="M3 3v18h18M7 16l4-5 4 3 4-7"></path><path d="M17 7h2v2"></path>',
  "icon-monitor": '<rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8M12 17v4M7 8h10M7 11h6"></path>',
  "icon-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle>',
  "icon-store": '<path d="m3 9 2-5h14l2 5M5 13v8h14v-8M9 21v-6h6v6"></path><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"></path>',
  "icon-trophy": '<path d="M8 3h8v5a4 4 0 0 1-8 0V3ZM8 5H5a2 2 0 0 0 0 4h3M16 5h3a2 2 0 0 1 0 4h-3M12 12v5M8 21h8M9 17h6"></path>',
  "icon-megaphone": '<path d="m4 10 16-5v12L4 13v-3ZM8 14l1.5 6h3L11 15"></path>',
  "icon-contractor": '<path d="M4 21v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2"></path><circle cx="12" cy="8" r="3.5"></circle><path d="M7 7a5 5 0 0 1 10 0M6 7h12M12 3v4"></path>',
  "icon-network": '<circle cx="12" cy="7" r="3"></circle><path d="M7.5 16a4.5 4.5 0 0 1 9 0"></path><circle cx="5" cy="18" r="2"></circle><circle cx="19" cy="18" r="2"></circle><path d="m8.5 13-2 3M15.5 13l2 3M7 18h10"></path>',
  "icon-space": '<ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-28 12 12)"></ellipse><circle cx="12" cy="12" r="3"></circle><path d="M5 5l2 2M17 17l2 2"></path>',
  "icon-package": '<path d="m4 7 8-4 8 4-8 4-8-4Z"></path><path d="m4 7 8 4 8-4v10l-8 4-8-4V7ZM12 11v10"></path>',
  "icon-kliper": '<path d="M6 3v18M18 3 8.5 12 18 21"></path><path d="M10 3 6 7M10 21l-4-4"></path>',
};

const root = document.documentElement;
const queryTheme = new URLSearchParams(window.location.search).get("theme");
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("kliper-theme");
} catch (error) {
  savedTheme = null;
}
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
const initialTheme = queryTheme === "dark" || queryTheme === "light" ? queryTheme : savedTheme || systemTheme;

function setTheme(theme) {
  root.dataset.theme = theme;
  try {
    localStorage.setItem("kliper-theme", theme);
  } catch (error) {
    // The selected theme still applies when storage is unavailable.
  }
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#f51d4f" : "#2c6fff");
  const nextThemeLabel = theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему";
  document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
    toggle.setAttribute("aria-label", nextThemeLabel);
    toggle.setAttribute("title", nextThemeLabel);
  });
}

function createIcon(className) {
  const icon = document.createElement("span");
  icon.className = `mini-icon ${className}`;
  icon.setAttribute("aria-hidden", "true");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("focusable", "false");
  svg.innerHTML = iconPaths[className] || iconPaths["icon-building"];
  icon.appendChild(svg);

  return icon;
}

function renderAudience() {
  const grid = document.querySelector("[data-audience-grid]");
  if (!grid) return;
  grid.innerHTML = "";

  audience.forEach((card) => {
    const article = document.createElement("article");
    article.className = "audience-card reveal";

    const header = document.createElement("header");
    const index = document.createElement("span");
    index.className = "card-index";
    index.textContent = card.index;
    header.append(index, createIcon(card.icon));

    const title = document.createElement("h3");
    title.textContent = card.title;

    const text = document.createElement("p");
    text.textContent = card.text;

    const list = document.createElement("ul");
    card.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    article.append(header, title, text, list);
    grid.appendChild(article);
  });
}

function renderFlow() {
  const container = document.querySelector("[data-ecosystem-flow]");
  if (!container) return;
  container.innerHTML = "";

  const connections = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  connections.classList.add("flow-connections");
  connections.setAttribute("viewBox", "0 0 100 100");
  connections.setAttribute("preserveAspectRatio", "none");
  connections.setAttribute("aria-hidden", "true");
  connections.innerHTML = `
    <line x1="50" y1="50" x2="18" y2="18"></line>
    <line x1="50" y1="50" x2="82" y2="18"></line>
    <line x1="50" y1="50" x2="18" y2="82"></line>
    <line x1="50" y1="50" x2="82" y2="82"></line>
  `;
  container.appendChild(connections);

  const hub = document.createElement("div");
  hub.className = "flow-hub";
  hub.innerHTML = '<span class="flow-hub-mark">K</span><strong>КЛИПЕР</strong><small>Единая среда</small>';
  container.appendChild(hub);

  flow.forEach((item, index) => {
    const node = document.createElement("div");
    node.className = `flow-node flow-node-${index + 1}`;
    node.append(createIcon(item.icon));

    const label = document.createElement("span");
    label.textContent = item.title;
    node.appendChild(label);
    container.appendChild(node);
  });
}

function renderProducts() {
  const currentGrid = document.querySelector("[data-products-current]");
  const futureGrid = document.querySelector("[data-products-future]");
  if (!currentGrid || !futureGrid) return;

  currentGrid.innerHTML = "";
  futureGrid.innerHTML = "";

  currentProducts.forEach((product) => {
    const card = document.createElement("a");
    card.className = `product-card product-card-current product-tone-${product.visual} reveal`;
    card.href = product.href;
    if (product.external) {
      card.target = "_blank";
      card.rel = "noopener";
    }

    const visual = document.createElement("div");
    visual.className = `product-art product-art-${product.visual}`;
    visual.setAttribute("aria-hidden", "true");
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    visual.appendChild(image);

    const icon = createIcon(product.icon);
    icon.classList.add("product-card-icon");

    const status = document.createElement("span");
    status.className = "product-status product-status-live";
    status.textContent = "Доступно сейчас";

    const title = document.createElement("h3");
    title.textContent = product.title;

    const text = document.createElement("p");
    text.textContent = product.text;

    const label = document.createElement("span");
    label.className = "product-label";
    label.textContent = product.kind;

    const chips = document.createElement("div");
    chips.className = "product-chips";
    (product.chips || []).forEach((chip) => {
      const item = document.createElement("span");
      item.textContent = chip;
      chips.appendChild(item);
    });

    const link = document.createElement("span");
    link.className = "product-link";
    link.textContent = "Подробнее";

    const footer = document.createElement("div");
    footer.className = "product-card-footer";
    footer.append(link);

    card.append(visual, icon, status, title, label, text);
    if (product.chips) card.appendChild(chips);
    card.appendChild(footer);
    currentGrid.appendChild(card);
  });

  futureProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = `future-product-card${product.nearest ? " is-nearest" : ""} reveal`;

    const top = document.createElement("div");
    top.className = "future-product-top";
    top.appendChild(createIcon(product.icon));

    const status = document.createElement("span");
    status.className = "product-status product-status-future";
    status.textContent = product.status || "В плане";
    top.appendChild(status);

    const title = document.createElement("h4");
    title.textContent = product.title;

    const text = document.createElement("p");
    text.textContent = product.text;

    card.append(top, title, text);
    futureGrid.appendChild(card);
  });
}

function setupFutureProductsSlider() {
  const slider = document.querySelector("[data-products-future]");
  const previousButton = document.querySelector("[data-future-prev]");
  const nextButton = document.querySelector("[data-future-next]");
  if (!slider || !previousButton || !nextButton) return;

  const getStep = () => {
    const card = slider.querySelector(".future-product-card");
    if (!card) return slider.clientWidth;
    const styles = getComputedStyle(slider);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
    previousButton.disabled = slider.scrollLeft <= 2;
    nextButton.disabled = slider.scrollLeft >= maxScroll - 2;
  };

  const move = (direction) => {
    slider.scrollBy({ left: direction * getStep(), behavior: "smooth" });
  };

  let isDragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;

  const stopDragging = (event) => {
    if (!isDragging) return;
    isDragging = false;
    slider.classList.remove("is-dragging");
    if (event?.pointerId !== undefined && slider.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }
    updateButtons();
  };

  previousButton.addEventListener("click", () => move(-1));
  nextButton.addEventListener("click", () => move(1));
  slider.addEventListener("scroll", updateButtons, { passive: true });
  slider.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    isDragging = true;
    dragStartX = event.clientX;
    dragStartScroll = slider.scrollLeft;
    slider.classList.add("is-dragging");
    slider.setPointerCapture(event.pointerId);
  });
  slider.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    event.preventDefault();
    slider.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
  });
  slider.addEventListener("pointerup", stopDragging);
  slider.addEventListener("pointercancel", stopDragging);
  slider.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowLeft" ? -1 : 1);
  });

  if ("ResizeObserver" in window) {
    new ResizeObserver(updateButtons).observe(slider);
  }
  requestAnimationFrame(updateButtons);
}

function setupMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  });

  nav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Открыть меню");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Открыть меню");
    }
  });
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupAuthModal() {
  const modal = document.getElementById("authModal");
  if (!modal) return;

  const closeButton = document.getElementById("closeAuth");
  const dialog = modal.querySelector('[role="dialog"]');
  const tabs = Array.from(modal.querySelectorAll("[data-auth-tab]"));
  let previousFocus = null;
  const panels = {
    login: document.getElementById("auth-login"),
    register: document.getElementById("auth-register"),
  };

  const setTab = (name) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.authTab === name;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
    Object.entries(panels).forEach(([key, panel]) => {
      const isActive = key === name;
      panel?.classList.toggle("active", isActive);
      panel?.setAttribute("aria-hidden", String(!isActive));
    });
    dialog?.setAttribute("aria-labelledby", `auth-title-${name}`);
  };

  const open = () => {
    previousFocus = document.activeElement;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      const activePanel = modal.querySelector(".auth-panel.active");
      (activePanel?.querySelector("input") || closeButton)?.focus();
    });
  };

  const close = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  };

  document.querySelectorAll("[data-auth-open]").forEach((button) => button.addEventListener("click", open));
  closeButton?.addEventListener("click", close);
  tabs.forEach((tab) => tab.addEventListener("click", () => setTab(tab.dataset.authTab)));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("active")) return;
    if (event.key === "Escape") {
      close();
      return;
    }
    if (event.key === "Tab") {
      const focusable = Array.from(modal.querySelectorAll('button:not([tabindex="-1"]), input, a[href]')).filter(
        (element) => element.offsetParent !== null,
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const requestedTab = new URLSearchParams(window.location.search).get("auth");
  if (requestedTab === "login" || requestedTab === "register") {
    setTab(requestedTab);
    open();
  }
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const staggerGroups = [
    document.querySelectorAll("[data-audience-grid] .reveal"),
    document.querySelectorAll("[data-products-current] .reveal"),
    document.querySelectorAll("[data-products-future] .reveal"),
  ];

  staggerGroups.forEach((group) => {
    group.forEach((element, index) => {
      element.dataset.revealDelay = String(Math.min(index * 70, 280));
    });
  });

  root.classList.add("motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const entersFromTop = entry.boundingClientRect.top < 0;
          entry.target.style.setProperty("--reveal-y", entersFromTop ? "-22px" : "22px");
          entry.target.style.setProperty("--reveal-delay", `${entry.target.dataset.revealDelay || 0}ms`);
          entry.target.classList.add("is-visible");
        } else {
          const exitsAbove = entry.boundingClientRect.bottom <= 0;
          entry.target.style.setProperty("--reveal-y", exitsAbove ? "-18px" : "18px");
          entry.target.style.setProperty("--reveal-delay", "0ms");
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { rootMargin: "-4% 0px -8%", threshold: 0.12 },
  );

  requestAnimationFrame(() => {
    elements.forEach((element) => observer.observe(element));
  });
}

setTheme(initialTheme);
renderAudience();
renderFlow();
renderProducts();
setupFutureProductsSlider();
setupMenu();
setupHeader();
setupAuthModal();
setupReveal();

document.querySelectorAll("[data-theme-toggle]").forEach((themeToggle) => {
  themeToggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    if (themeToggle.classList.contains("mobile-theme-toggle")) {
      const nav = document.querySelector(".nav");
      const menuToggle = document.querySelector("[data-menu-toggle]");
      nav?.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", "Открыть меню");
    }
  });
});
