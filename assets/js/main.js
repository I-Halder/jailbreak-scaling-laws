function activateTab(tabGroup, targetId) {
  const buttons = tabGroup.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll(`.tab-panel[data-tab-group="${tabGroup.dataset.tabGroup}"]`);
  buttons.forEach((button) => {
    const isSelected = button.getAttribute('aria-controls') === targetId;
    button.setAttribute('aria-selected', String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });
  panels.forEach((panel) => {
    panel.hidden = panel.id !== targetId;
  });
}

document.querySelectorAll('.tabs').forEach((tabGroup) => {
  tabGroup.addEventListener('click', (event) => {
    const button = event.target.closest('[role="tab"]');
    if (!button) return;
    activateTab(tabGroup, button.getAttribute('aria-controls'));
  });

  tabGroup.addEventListener('keydown', (event) => {
    const tabs = Array.from(tabGroup.querySelectorAll('[role="tab"]'));
    const current = tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
    const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    const next = tabs[(current + direction + tabs.length) % tabs.length];
    next.focus();
    activateTab(tabGroup, next.getAttribute('aria-controls'));
  });
});
