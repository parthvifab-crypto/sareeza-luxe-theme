document.documentElement.classList.remove('no-js');

(function () {
  const buttons = document.querySelectorAll('[data-quantity-button]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const wrapper = button.closest('[data-quantity-wrapper]');
      const input = wrapper ? wrapper.querySelector('input') : null;
      if (!input) return;
      const current = Number(input.value || 1);
      const next = button.dataset.quantityButton === 'plus' ? current + 1 : Math.max(1, current - 1);
      input.value = next;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
})();

(function () {
  const toggles = document.querySelectorAll('[data-menu-toggle]');
  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  });
})();
