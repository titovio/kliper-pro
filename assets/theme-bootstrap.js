(() => {
  const queryTheme = new URLSearchParams(window.location.search).get('theme');
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('kliper-theme');
  } catch (error) {
    savedTheme = null;
  }
  const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.dataset.theme = queryTheme === 'dark' || queryTheme === 'light'
    ? queryTheme
    : savedTheme || systemTheme;
})();
