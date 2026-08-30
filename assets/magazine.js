const packageButtons = document.querySelectorAll('[data-package-select]');
const selectedFormat = document.querySelector('[data-selected-format]');
const requestLink = document.querySelector('[data-request-link]');

packageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const packageName = button.dataset.packageSelect;
    if (!packageName) return;

    if (selectedFormat) {
      selectedFormat.hidden = false;
      selectedFormat.textContent = `Выбран формат: ${packageName}`;
    }

    if (requestLink) {
      const subject = `Размещение в журнале Новостройки Тюмени: ${packageName}`;
      requestLink.href = `mailto:ra@kliper.city?subject=${encodeURIComponent(subject)}`;
    }
  });
});
