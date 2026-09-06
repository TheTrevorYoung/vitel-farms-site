(() => {
  'use strict';
  const q = (s, r=document) => r.querySelector(s);
  const qa = (s, r=document) => [...r.querySelectorAll(s)];

  qa('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const toggle = q('.menu-toggle');
  const nav = q('.main-nav');
  if (toggle && nav) {
    const closeNav = () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      document.body.classList.remove('nav-open');
    };
    toggle.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('nav-open', open);
    });
    qa('.main-nav a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
  }

  const cfg = window.VITEL_CONFIG || {};
  qa('[data-contact-label]').forEach(el => {
    el.textContent = cfg.contactEmail || cfg.contactLabel || 'Official email pending activation';
  });

  const modal = q('#inquiry-modal');
  const form = q('#inquiry-form');
  const feedback = q('#form-feedback');
  let opener = null;

  const closeModal = () => {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (opener) opener.focus();
  };
  const openModal = (button) => {
    if (!modal) return;
    opener = button;
    const subject = button?.dataset?.subject || 'Vitel Farms inquiry';
    const subjectField = q('#inquiry-subject');
    if (subjectField) subjectField.value = subject;
    const title = q('#modal-title');
    if (title) title.textContent = subject;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    setTimeout(() => q('#inquiry-name')?.focus(), 40);
  };

  qa('.inquiry').forEach(btn => btn.addEventListener('click', () => openModal(btn)));
  qa('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal?.getAttribute('aria-hidden') === 'false') closeModal(); });

  function buildMessage() {
    const subject = q('#inquiry-subject')?.value || 'Vitel Farms inquiry';
    const name = q('#inquiry-name')?.value.trim() || '';
    const org = q('#inquiry-org')?.value.trim() || '';
    const phone = q('#inquiry-phone')?.value.trim() || '';
    const location = q('#inquiry-location')?.value.trim() || '';
    const message = q('#inquiry-message')?.value.trim() || '';
    const body = [
      `Name: ${name}`,
      org ? `Organization / group: ${org}` : '',
      phone ? `Phone / WhatsApp: ${phone}` : '',
      location ? `Location: ${location}` : '',
      '',
      message,
      '',
      'Sent from the Vitel Farms website inquiry builder.'
    ].filter((line, i, arr) => line !== '' || (i > 0 && arr[i-1] !== '')).join('\n');
    return { subject, body };
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const {subject, body} = buildMessage();
      if (cfg.contactEmail) {
        window.location.href = `mailto:${encodeURIComponent(cfg.contactEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (feedback) feedback.textContent = 'Opening your email app…';
      } else if (feedback) {
        feedback.textContent = 'Official Vitel email is not active yet. Use “Copy message” to save this inquiry.';
      }
    });
  }

  const copyBtn = q('#copy-inquiry');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const {subject, body} = buildMessage();
      const full = `Subject: ${subject}\n\n${body}`;
      try {
        await navigator.clipboard.writeText(full);
        if (feedback) feedback.textContent = 'Inquiry copied to clipboard.';
      } catch {
        const ta = document.createElement('textarea');
        ta.value = full; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); ta.remove();
        if (feedback) feedback.textContent = 'Inquiry copied to clipboard.';
      }
    });
  }

  const reveals = qa('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, {threshold: .12});
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('in'));
})();
