document.querySelectorAll('[data-showcase]').forEach((showcase) => {
  const tabs = Array.from(showcase.querySelectorAll('[role="tab"]'));
  const panels = Array.from(showcase.querySelectorAll('[role="tabpanel"]'));

  function activate(tab) {
    const panelId = tab.getAttribute('aria-controls');
    tabs.forEach((item) => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.id === panelId;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      tabs[nextIndex].focus();
      activate(tabs[nextIndex]);
    });
  });

  const initial = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
  if (initial) activate(initial);
});

document.addEventListener('click', (event) => {
  document.querySelectorAll('.product-switcher[open]').forEach((details) => {
    if (!details.contains(event.target)) details.removeAttribute('open');
  });
});

// Production-only MAP metrics. Fill these values from the real data source before publication.
const mapMetrics = {
  objects: null,
  searchParameters: null,
  advertisingEnvironments: null,
};

document.querySelectorAll('[data-map-metric]').forEach((element) => {
  const value = mapMetrics[element.dataset.mapMetric];
  if (value == null) return;
  const output = element.querySelector('[data-map-metric-value]');
  if (output) output.textContent = String(value);
  element.hidden = false;
});
