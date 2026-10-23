(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const papers = [...document.querySelectorAll('.publication')];
  const tabs = [...document.querySelectorAll('[data-filter]')];
  const search = document.getElementById('publication-search');
  const year = document.getElementById('publication-year');
  const status = document.getElementById('publication-status');
  let filter = 'selected';
  const updatePapers = () => {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    papers.forEach(paper => {
      const visible = (filter === 'all' || paper.dataset.selected === 'true') &&
        (year.value === 'all' || paper.dataset.year === year.value) &&
        (!query || paper.textContent.toLowerCase().includes(query));
      paper.hidden = !visible;
      if (visible) count += 1;
    });
    tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab.dataset.filter === filter)));
    status.textContent = `${count} ${filter === 'selected' ? 'selected ' : ''}publication${count === 1 ? '' : 's'}${year.value === 'all' ? '' : ` · ${year.value}`}${query ? ` · matching “${search.value.trim()}”` : ''}`;
    document.getElementById('no-results').hidden = count !== 0;
  };
  tabs.forEach(tab => tab.addEventListener('click', () => { filter = tab.dataset.filter; updatePapers(); }));
  search.addEventListener('input', () => { if (search.value.trim()) filter = 'all'; updatePapers(); });
  year.addEventListener('change', () => { if (year.value !== 'all') filter = 'all'; updatePapers(); });
  document.getElementById('reset-filters').addEventListener('click', () => {
    filter = 'all'; search.value = ''; year.value = 'all'; updatePapers(); search.focus();
  });
  updatePapers();
  document.querySelectorAll('a[href^="#paper-"]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target?.hidden) {
        filter = 'all'; search.value = ''; year.value = 'all'; updatePapers();
      }
    });
  });

  const dialog = document.getElementById('citation-dialog');
  const citationText = document.getElementById('citation-text');
  const copyStatus = document.getElementById('copy-status');
  const citations = JSON.parse(document.getElementById('citation-data').textContent);
  document.querySelectorAll('[data-citation]').forEach(button => {
    button.addEventListener('click', () => {
      const data = citations[button.dataset.citation];
      document.getElementById('citation-title').textContent = data.title;
      citationText.value = data.bibtex;
      copyStatus.textContent = '';
      dialog.showModal();
    });
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    }
  });
  document.getElementById('copy-citation').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citationText.value);
      copyStatus.textContent = 'Citation copied.';
    } catch {
      citationText.focus(); citationText.select();
      copyStatus.textContent = 'Citation selected. Press Ctrl+C (or ⌘C) to copy.';
    }
  });
  const navLinks = [...document.querySelectorAll('.section-nav a')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
  const backToTop = document.getElementById('back-to-top');
  const syncNavigation = () => {
    let current = sections[0].id;
    sections.forEach(section => { if (section.getBoundingClientRect().top <= 160) current = section.id; });
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    backToTop.hidden = window.scrollY < 700;
  };
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(() => { syncNavigation(); scheduled = false; }); }
  }, { passive: true });
  syncNavigation();
})();
