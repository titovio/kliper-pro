const sunIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const moonIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 14.2A8 8 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

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
    if(!image.dataset.darkSrc) image.dataset.darkSrc = image.getAttribute('src');
    image.src = theme === 'light' ? 'assets/kliper-logo-light.png' : image.dataset.darkSrc;
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
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('[data-menu-toggle]');
const authTabs = Array.from(document.querySelectorAll('[data-auth-tab]'));
const authPanels = {
  login: document.getElementById('auth-login'),
  register: document.getElementById('auth-register')
};

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
  authModal.classList.add('active');
  authModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal(){
  if(!authModal) return;
  authModal.classList.remove('active');
  authModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setAuthTab(name){
  authTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.authTab === name));
  Object.entries(authPanels).forEach(([key, panel]) => {
    if(panel) panel.classList.toggle('active', key === name);
  });
}

document.querySelectorAll('[data-auth-open]').forEach(button => button.addEventListener('click', openAuthModal));
if(menuToggle && nav){
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
  nav.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Открыть меню');
  }));
}
if(closeAuth) closeAuth.addEventListener('click', closeAuthModal);
if(authModal){
  authModal.addEventListener('click', (e) => {
    if(e.target === authModal) closeAuthModal();
  });
}
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeAuthModal();
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
