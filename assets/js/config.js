window.VITEL_CONFIG = {
  contactEmail: "",
  contactLabel: "Public contact channels being finalized"
};

(() => {
  const q = (s, r=document) => r.querySelector(s);
  const qa = (s, r=document) => [...r.querySelectorAll(s)];
  const nav = q('.main-nav');
  const order = ['index.html','about.html','mission.html','model.html','cassava.html','markets.html','updates.html'];
  const labels = {'about.html':'Our Story','mission.html':'Current Mission'};
  if (nav) {
    const cta = q('.nav-cta', nav);
    const links = qa('a:not(.nav-cta)', nav);
    const byHref = new Map(links.map(a => [a.getAttribute('href'), a]));
    if (cta) byHref.get('contact.html')?.remove();
    order.forEach(href => {
      const a = byHref.get(href);
      if (!a || !a.isConnected) return;
      if (labels[href]) a.textContent = labels[href];
      nav.insertBefore(a, cta || null);
    });
    if (cta) cta.textContent = 'Work with Vitel';
  }

  qa('.footer-brand').forEach(b => {
    const p = b.nextElementSibling;
    if (p) p.textContent = 'Growing more value from Sierra Leonean agriculture.';
  });
  qa('.site-footer a[href="mission.html"]').forEach(a => a.textContent = 'Current cassava mission');
  qa('.site-footer a[href="contact.html"]').forEach(a => a.textContent = 'Work with Vitel');
  qa('.site-footer').forEach(f => {
    const box = q('.footer-grid > div:nth-child(2)', f);
    if (!box) return;
    const model = q('a[href="model.html"]', box);
    if (model) model.remove();
    if (!q('a[href="about.html"]', box)) {
      const about = document.createElement('a');
      about.href = 'about.html';
      about.textContent = 'Our story';
      const heading = q('h3', box);
      heading?.insertAdjacentElement('afterend', about);
    }
  });

  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'cassava.html') {
    const e = q('.page-hero .eyebrow'); if (e) e.textContent = 'CURRENT FLAGSHIP CROP';
    const p = q('.page-hero p'); if (p) p.textContent = 'Cassava is where Vitel is concentrating its operating attention now. The aim is reliable production for real market demand, with stronger yields, supply, processing and value captured inside Sierra Leone.';
  }
  if (page === 'model.html') {
    const p = q('.page-hero p'); if (p) p.textContent = 'A nucleus farm. A verified producer network. Technical support. Market intelligence. Processing only where demand and economics justify it. Cassava is the current implementation; the operating discipline is designed to outlast one crop.';
  }
})();