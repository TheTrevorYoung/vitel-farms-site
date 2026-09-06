window.VITEL_CONFIG = {
  contactEmail: "",
  contactLabel: "Public contact channels being finalized"
};

(() => {
  if (!document.querySelector('link[data-vitel-visual-refresh]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/visual-refresh.css';
    link.dataset.vitelVisualRefresh = 'true';
    document.head.appendChild(link);
  }
})();

(() => {
  const q = (s, r=document) => r.querySelector(s);
  const qa = (s, r=document) => [...r.querySelectorAll(s)];
  const page = location.pathname.split('/').pop() || 'index.html';
  const activePage = ['cassava.html','rice.html'].includes(page) ? 'crops.html' : page;

  const nav = q('.main-nav');
  if (nav) {
    const items = [
      ['index.html','Home'],
      ['about.html','Our Story'],
      ['mission.html','Roadmap'],
      ['model.html','How It Works'],
      ['crops.html','Projects'],
      ['markets.html','Markets'],
      ['updates.html','Build Log']
    ];
    nav.innerHTML = items.map(([href,label]) => `<a href="${href}"${activePage === href ? ' class="active" aria-current="page"' : ''}>${label}</a>`).join('') + `<a class="nav-cta${page === 'contact.html' ? ' active' : ''}"${page === 'contact.html' ? ' aria-current="page"' : ''} href="contact.html">Work with Vitel</a>`;
  }

  qa('.footer-brand').forEach(b => {
    const p = b.nextElementSibling;
    if (p) p.textContent = 'Building the farm in public.';
  });
  qa('.site-footer').forEach(f => {
    const explore = q('.footer-grid > div:nth-child(2)', f);
    if (explore) explore.innerHTML = '<h3>Explore</h3><a href="about.html">Our story</a><a href="mission.html">Roadmap</a><a href="crops.html">Projects</a><a href="updates.html">Build log</a>';
    const trust = q('.footer-grid > div:nth-child(3)', f);
    if (trust) trust.innerHTML = '<h3>Trust</h3><a href="evidence.html">Evidence & methodology</a><a href="privacy.html">Privacy</a><a href="contact.html">Work with Vitel</a>';
  });
})();