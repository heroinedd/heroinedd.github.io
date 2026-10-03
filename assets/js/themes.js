/* Navigation theme picker; preferences are saved locally. */
(() => {
  const palettes = [
    { id: 'plum', label: 'Plum · balanced', color: '#804394' },
    { id: 'violet', label: 'Violet · vivid', color: '#7441b0' },
    { id: 'iris', label: 'Iris · muted', color: '#6861a3' },
    { id: 'blue', label: 'Blue', color: '#3399cc' },
  ];
  const root = document.documentElement;
  const query = new URLSearchParams(location.search);
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const selected = query.get('theme') || read('homepage-theme');
  root.dataset.theme = palettes.some(p => p.id === selected) ? selected : 'violet';
  const mode = read('homepage-appearance');
  root.dataset.appearance = ['light', 'dark'].includes(mode) ? mode : 'auto';
  document.addEventListener('DOMContentLoaded', () => {
    const picker = document.getElementById('theme-picker');
    if (!picker) return;
    picker.hidden = false;
    const options = document.getElementById('theme-options');
    const refresh = () => {
      options.querySelectorAll('button').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.palette === root.dataset.theme));
      });
    };
    palettes.forEach(palette => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.palette = palette.id;
      const swatch = document.createElement('span');
      swatch.className = 'swatch';
      swatch.style.setProperty('--swatch', palette.color);
      swatch.setAttribute('aria-hidden', 'true');
      button.append(swatch, document.createTextNode(palette.label));
      button.addEventListener('click', () => {
        root.dataset.theme = palette.id;
        save('homepage-theme', palette.id);
        refresh();
      });
      options.append(button);
    });
    const appearance = document.getElementById('theme-appearance');
    appearance.value = root.dataset.appearance;
    appearance.addEventListener('change', () => {
      root.dataset.appearance = appearance.value;
      save('homepage-appearance', appearance.value);
    });
    refresh();
    const menu = document.querySelector('.theme-menu');
    menu.open = false;
    window.addEventListener('pageshow', () => { menu.open = false; });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target)) menu.open = false;
    });
    menu.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
    const nav = document.querySelector('.top-nav');
    const updateOffset = () => root.style.setProperty('--nav-offset', `${nav.getBoundingClientRect().height + 20}px`);
    new ResizeObserver(updateOffset).observe(nav);
    updateOffset();
  });
})();
