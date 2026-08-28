const sunIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const moonIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 14.2A8 8 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

const legacyRoutes = {
  '/about.html': '/about/',
  '/cabinet.html': '/for-whom/',
  '/contacts.html': '/contacts/',
  '/services.html': '/solutions/',
  '/privacy.html': '/privacy/',
  '/terms.html': '/terms/',
  '/consent.html': '/consent/',
  '/kliper-pro.html': '/products/kliper-pro/',
  '/kliper-city.html': '/products/kliper-city/',
  '/kliper-map.html': '/products/kliper-map/'
};
const cleanRoute = legacyRoutes[window.location.pathname];
if(cleanRoute){
  window.history.replaceState(null, '', `${cleanRoute}${window.location.search}${window.location.hash}`);
}

function createThemeToggle(className, mobile = false){
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.dataset.themeToggle = '';
  if(mobile) button.dataset.mobileThemeToggle = '';
  return button;
}

const pageNav = document.querySelector('.nav');
const pageNavActions = document.querySelector('.nav-actions');
const pageNavLinks = document.querySelector('.nav-links');
if(pageNavActions){
  pageNavActions.prepend(createThemeToggle('theme-toggle theme-toggle-desktop'));
  if(pageNavLinks) pageNavLinks.append(createThemeToggle('theme-toggle-menu', true));
}else if(pageNav){
  const backLink = pageNav.querySelector('.back');
  if(backLink) pageNav.insertBefore(createThemeToggle('legal-theme-toggle'), backLink);
}

function updateThemeLogos(theme){
  document.querySelectorAll('.brand img,.logo,.auth-logo').forEach(image => {
    if(image.closest('.v2-footer')) return;
    if(!image.dataset.darkSrc) image.dataset.darkSrc = image.getAttribute('src');
    image.src = theme === 'light' ? '/assets/kliper-logo-light.png' : image.dataset.darkSrc;
  });
}

function setPageTheme(theme){
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  try{
    localStorage.setItem('kliper-theme', nextTheme);
  }catch(error){
    // The selected theme still applies for this page when storage is unavailable.
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(button => {
    const action = nextTheme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему';
    button.setAttribute('aria-label', action);
    button.setAttribute('title', action);
    button.innerHTML = button.hasAttribute('data-mobile-theme-toggle')
      ? (nextTheme === 'dark' ? 'Светлая тема' : 'Тёмная тема')
      : (nextTheme === 'dark' ? sunIcon : moonIcon);
  });
  updateThemeLogos(nextTheme);
}

setPageTheme(document.documentElement.dataset.theme);
document.querySelectorAll('[data-theme-toggle]').forEach(button => {
  button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setPageTheme(nextTheme);
    if(pageNav){
      pageNav.classList.remove('open');
      const pageMenuToggle = pageNav.querySelector('[data-menu-toggle]');
      if(pageMenuToggle){
        pageMenuToggle.setAttribute('aria-expanded', 'false');
        pageMenuToggle.setAttribute('aria-label', 'Открыть меню');
      }
    }
  });
});

const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');
const authDialog = authModal?.querySelector('[role="dialog"]');
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('[data-menu-toggle]');
const authTabs = Array.from(document.querySelectorAll('[data-auth-tab]'));
const authPanels = {
  login: document.getElementById('auth-login'),
  register: document.getElementById('auth-register')
};
let authPreviousFocus = null;

document.body.classList.remove('page-exit');
document.body.classList.add('page-ready');

function isLocalPageLink(link){
  if(!link || link.target || link.hasAttribute('download')) return false;
  const href = link.getAttribute('href') || '';
  if(!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  try{
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin && /\.html($|[?#])/.test(url.pathname);
  }catch(error){
    return false;
  }
}

function prepareReveals(){
  document.querySelectorAll('.doc').forEach(doc => {
    if(doc.dataset.grouped === 'true') return;
    const children = Array.from(doc.children);
    let section = null;
    children.forEach(child => {
      if(child.tagName === 'H2'){
        section = document.createElement('section');
        section.className = 'doc-section';
        doc.insertBefore(section, child);
      }
      if(section && child.tagName !== 'H1' && !child.classList.contains('meta')){
        section.appendChild(child);
      }
    });
    doc.dataset.grouped = 'true';
  });

  document.querySelectorAll('.hero,.section,.card,.wide-card,.footer,.doc,.doc-section').forEach((element, index) => {
    element.dataset.reveal = '';
    element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12, rootMargin: '0px 0px -8% 0px'});

  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
}

function openAuthModal(){
  if(!authModal) return;
  authPreviousFocus = document.activeElement;
  authModal.classList.add('active');
  authModal.setAttribute('aria-hidden', 'false');
  if(authDialog && !authDialog.hasAttribute('aria-label') && !authDialog.hasAttribute('aria-labelledby')){
    authDialog.setAttribute('aria-label', 'Вход и регистрация');
  }
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    const activePanel = authModal.querySelector('.auth-panel.active');
    (activePanel?.querySelector('input') || closeAuth)?.focus();
  });
}

function closeAuthModal(){
  if(!authModal || !authModal.classList.contains('active')) return;
  authModal.classList.remove('active');
  authModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if(authPreviousFocus instanceof HTMLElement) authPreviousFocus.focus();
}

function setAuthTab(name){
  authTabs.forEach(tab => {
    const isActive = tab.dataset.authTab === name;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });
  Object.entries(authPanels).forEach(([key, panel]) => {
    if(!panel) return;
    const isActive = key === name;
    panel.classList.toggle('active', isActive);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-hidden', String(!isActive));
  });
}

authTabs.forEach((tab, index) => {
  const name = tab.dataset.authTab;
  const panel = authPanels[name];
  if(!tab.id) tab.id = `auth-tab-${name || index}`;
  if(panel){
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('aria-labelledby', tab.id);
  }
});
document.querySelector('.auth-tabs')?.setAttribute('role', 'tablist');
document.querySelectorAll('.auth-form input').forEach(input => {
  if(!input.hasAttribute('aria-label') && input.placeholder) input.setAttribute('aria-label', input.placeholder);
});
setAuthTab(authTabs.find(tab => tab.classList.contains('active'))?.dataset.authTab || 'login');

function setupDragScroll(){
  document.querySelectorAll('[data-drag-scroll]').forEach(scroller => {
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let dragDistance = 0;
    let suppressClick = false;

    const stop = event => {
      if(!dragging) return;
      dragging = false;
      scroller.classList.remove('is-dragging');
      suppressClick = dragDistance > 6;
      if(event?.pointerId !== undefined && scroller.hasPointerCapture(event.pointerId)){
        scroller.releasePointerCapture(event.pointerId);
      }
    };

    scroller.addEventListener('pointerdown', event => {
      if(event.pointerType !== 'mouse' || event.button !== 0 || scroller.scrollWidth <= scroller.clientWidth) return;
      dragging = true;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      dragDistance = 0;
      suppressClick = false;
      scroller.classList.add('is-dragging');
      scroller.setPointerCapture(event.pointerId);
    });
    scroller.addEventListener('pointermove', event => {
      if(!dragging) return;
      dragDistance = Math.abs(event.clientX - startX);
      event.preventDefault();
      scroller.scrollLeft = startScroll - (event.clientX - startX);
    });
    scroller.addEventListener('pointerup', stop);
    scroller.addEventListener('pointercancel', stop);
    scroller.addEventListener('click', event => {
      if(!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }, true);
    scroller.addEventListener('keydown', event => {
      if(event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const card = scroller.querySelector('.fw-audience-card');
      const gap = Number.parseFloat(getComputedStyle(scroller).gap) || 0;
      const step = (card?.getBoundingClientRect().width || scroller.clientWidth) + gap;
      scroller.scrollBy({left: event.key === 'ArrowLeft' ? -step : step, behavior: 'smooth'});
    });
  });
}

document.querySelectorAll('[data-auth-open]').forEach(button => button.addEventListener('click', () => {
  const targetTab = button.dataset.authTarget;
  if(targetTab === 'login' || targetTab === 'register') setAuthTab(targetTab);
  openAuthModal();
}));
if(menuToggle && nav){
  const navLinks = nav.querySelector('.nav-links');
  const navBrand = nav.querySelector('.brand');
  const navActions = nav.querySelector('.nav-actions');
  const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Открыть меню');
  };

  let navResizeFrame = 0;
  const updateNavMode = () => {
    cancelAnimationFrame(navResizeFrame);
    navResizeFrame = requestAnimationFrame(() => {
      if(!navLinks || !navBrand || !navActions) return;
      nav.classList.remove('is-compact');
      const styles = getComputedStyle(nav);
      const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
      const paddingRight = Number.parseFloat(styles.paddingRight) || 0;
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      const available = nav.clientWidth - paddingLeft - paddingRight;
      const required = navBrand.getBoundingClientRect().width
        + navLinks.scrollWidth
        + navActions.getBoundingClientRect().width
        + gap * 2
        + 8;
      const navRect = nav.getBoundingClientRect();
      const brandRect = navBrand.getBoundingClientRect();
      const linksRect = navLinks.getBoundingClientRect();
      const actionsRect = navActions.getBoundingClientRect();
      const overlaps = brandRect.right + gap > linksRect.left
        || linksRect.right + gap > actionsRect.left
        || actionsRect.right > navRect.right - paddingRight + 1;
      const isCompact = window.matchMedia('(max-width: 640px)').matches
        || required > available
        || overlaps;
      nav.classList.toggle('is-compact', isCompact);
      if(!isCompact) closeMenu();
    });
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
  nav.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', event => {
    if(event.key === 'Escape' && nav.classList.contains('open')) closeMenu();
  });

  if('ResizeObserver' in window){
    new ResizeObserver(updateNavMode).observe(nav);
  }else{
    window.addEventListener('resize', updateNavMode);
  }
  updateNavMode();
}
if(closeAuth) closeAuth.addEventListener('click', closeAuthModal);
if(authModal){
  authModal.addEventListener('click', (e) => {
    if(e.target === authModal) closeAuthModal();
  });
}
window.addEventListener('keydown', (e) => {
  if(!authModal?.classList.contains('active')) return;
  if(e.key === 'Escape'){
    closeAuthModal();
    return;
  }
  if(e.key !== 'Tab') return;
  const focusable = Array.from(authModal.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href]'))
    .filter(element => element.offsetParent !== null);
  if(!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if(e.shiftKey && document.activeElement === first){
    e.preventDefault();
    last.focus();
  }else if(!e.shiftKey && document.activeElement === last){
    e.preventDefault();
    first.focus();
  }
});
authTabs.forEach(tab => tab.addEventListener('click', () => setAuthTab(tab.dataset.authTab)));

const requestedAuthTab = new URLSearchParams(window.location.search).get('auth');
if(requestedAuthTab === 'login' || requestedAuthTab === 'register'){
  setAuthTab(requestedAuthTab);
  openAuthModal();
}

document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', event => {
    if(event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if(!isLocalPageLink(link)) return;
    event.preventDefault();
    document.body.classList.add('page-exit');
    window.setTimeout(() => {
      window.location.href = link.href;
    }, 180);
  });
});

prepareReveals();
setupDragScroll();
