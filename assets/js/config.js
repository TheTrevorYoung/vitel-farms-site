window.VITEL_CONFIG = {
  contactEmail: "",
  contactLabel: "Official email pending domain activation"
};

(() => {
  const q = (s, r=document) => r.querySelector(s);
  const qa = (s, r=document) => [...r.querySelectorAll(s)];
  const nav = q('.main-nav');
  const order = ['index.html','about.html','mission.html','model.html','cassava.html','markets.html','updates.html','contact.html'];
  const labels = {'about.html':'Our Story','mission.html':'Current Mission'};
  if (nav) {
    const cta = q('.nav-cta', nav);
    const links = qa('a:not(.nav-cta)', nav);
    const byHref = new Map(links.map(a => [a.getAttribute('href'), a]));
    order.forEach(href => {
      const a = byHref.get(href);
      if (!a) return;
      if (labels[href]) a.textContent = labels[href];
      nav.insertBefore(a, cta || null);
    });
  }
  qa('.footer-brand').forEach(b => {
    const p = b.nextElementSibling;
    if (p) p.textContent = 'Growing more value from Sierra Leonean agriculture.';
  });
  qa('.site-footer a[href="mission.html"]').forEach(a => a.textContent = 'Current mission: From #22 to #1');
  qa('.site-footer').forEach(f => {
    const box = q('.footer-grid > div:nth-child(2)', f);
    if (box && !q('a[href="about.html"]', box)) {
      const a = document.createElement('a');
      a.href = 'about.html'; a.textContent = 'Our story';
      q('h3', box)?.insertAdjacentElement('afterend', a);
      q('a[href="model.html"]', box)?.remove();
    }
  });

  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'cassava.html') {
    const e = q('.page-hero .eyebrow'); if (e) e.textContent = 'CURRENT FLAGSHIP CROP';
    const p = q('.page-hero p'); if (p) p.textContent = 'Cassava is where Vitel is concentrating its operating attention now. The challenge is to turn national scale into stronger yields, reliable supply, better markets and more value captured inside Sierra Leone.';
  }
  if (page === 'model.html') {
    const p = q('.page-hero p'); if (p) p.textContent = 'A nucleus farm. A verified producer network. Technical support. Market intelligence. Processing only where demand and economics justify it. Cassava is the current implementation; the operating discipline is designed to outlast one crop.';
  }
  if (page === 'contact.html') {
    const h = q('.page-hero h1'); if (h) h.textContent = 'Tell us where you fit in Vitel’s current build.';
    const p = q('.page-hero p'); if (p) p.textContent = 'Vitel Farms is building relationships across farming, markets, processing and technical support. Our active operating mission is cassava.';
  }
  if (page === 'updates.html') {
    const card = q('.update-card');
    if (card) {
      const h = q('h2', card); if (h) h.textContent = 'Vitel clarifies its long-term identity and current mission';
      const p = q('p', card); if (p) p.textContent = 'Vitel Farms is now positioned explicitly as a long-term Sierra Leonean agribusiness platform. Cassava remains the concentrated operating focus and the #22→#1 race remains the current flagship mission—not the permanent boundary of the company.';
    }
  }
})();
