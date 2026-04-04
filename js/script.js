/* ============================================================
   END HOSTING — MAIN JAVASCRIPT v3
   ============================================================ */
'use strict';

/* ── SVG ICON REGISTRY ───────────────────────────────────────
   Small inline SVG helpers. Usage: icon('shield', 20)
   ─────────────────────────────────────────────────────────── */
const ICONS = {
  shield:       '<path d="M12 2L4 6v6c0 5 3.8 9.7 8 10.9C16.2 21.7 20 17 20 12V6L12 2z"/>',
  zap:          '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  globe:        '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  server:       '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
  cpu:          '<rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3M3 3l18 0 0 18H3z"/>',
  database:     '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  headphones:   '<path d="M3 18v-6a9 9 0 0 1 18 0v6M3 18a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0v2zm14-2a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2z"/>',
  clock:        '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  check:        '<polyline points="20 6 9 17 4 12"/>',
  checkCircle:  '<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><polyline points="22 4 12 14.01 9 11.01"/>',
  chevronDown:  '<polyline points="6 9 12 15 18 9"/>',
  chevronRight: '<polyline points="9 18 15 12 9 6"/>',
  chevronLeft:  '<polyline points="15 18 9 12 15 6"/>',
  menu:         '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  x:            '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  sun:          '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  moon:         '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  arrowRight:   '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  arrowLeft:    '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  users:        '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  gamepad:      '<line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.3 5H6.7C4.1 5 2 7 2 9.5v5C2 17 4.1 19 6.7 19h10.6C19.9 19 22 17 22 14.5v-5C22 7 19.9 5 17.3 5z"/>',
  discord:      '<path d="M20.3 4.4A19.2 19.2 0 0 0 15.6 3c-.2.4-.5 1-.7 1.4a17.8 17.8 0 0 0-5.8 0C8.9 4 8.5 3.4 8.3 3A19 19 0 0 0 3.7 4.4C.5 9.4-.3 14.2.1 18.9a19.4 19.4 0 0 0 6 3c.5-.7 1-1.4 1.3-2.2-.7-.3-1.4-.6-2-1l.5-.4c3.8 1.8 8 1.8 11.8 0l.5.4c-.7.4-1.3.8-2 1 .3.8.8 1.5 1.3 2.2 2.2-.7 4.3-1.8 6-3 .5-5.4-.9-10.1-3.2-14.5zM8 15.5c-1.3 0-2.3-1.2-2.3-2.6 0-1.4 1-2.6 2.3-2.6s2.3 1.1 2.3 2.6c0 1.4-1 2.6-2.3 2.6zm7.9 0c-1.3 0-2.3-1.2-2.3-2.6 0-1.4 1-2.6 2.3-2.6s2.3 1.1 2.3 2.6c0 1.4-1 2.6-2.3 2.6z"/>',
  star:         '<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/>',
  package:      '<line x1="12" y1="3" x2="12" y2="15"/><path d="M4.5 9l7.5-6 7.5 6M2 9l10 6 10-6M2 21l10 6 10-6M2 15l10 6 10-6"/>',
  mapPin:       '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  trending:     '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  layers:       '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
};

function icon(name, size = 20, cls = '') {
  const paths = ICONS[name] || '';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true">${paths}</svg>`;
}

/* ── THEME (init before DOMContentLoaded to prevent flash) ── */
(function() {
  const t = localStorage.getItem('eh-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();

function toggleTheme() {
  const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('eh-theme', t);
  updateThemeUI();
}

function updateThemeUI() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.querySelectorAll('.theme-btn').forEach(b => {
    b.innerHTML = dark ? icon('sun', 18) : icon('moon', 18);
    b.setAttribute('aria-label', dark ? 'Ativar modo claro' : 'Ativar modo escuro');
  });
}

/* ── COMPONENT INIT ─────────────────────────────────────────
   Header/footer are inlined in each HTML page — no fetch needed.
   This function boots all nav-dependent features immediately.
   ─────────────────────────────────────────────────────────── */
function loadComponents() {
  initNav();
  initMobileMenu();
  initDropdowns();
  updateThemeUI();
  markActiveNav();
}

/* ── SCROLL PROGRESS ────────────────────────────────────────*/
function initScrollProgress() {
  const bar = document.getElementById('scroll-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    bar.style.width = ((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100) + '%';
  }, { passive: true });
}

/* ── NAV SCROLL ─────────────────────────────────────────────*/
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const tick = () => nav.classList.toggle('scrolled', window.scrollY > 44);
  window.addEventListener('scroll', tick, { passive: true });
  tick();
}

/* ── MOBILE MENU ────────────────────────────────────────────*/
function initMobileMenu() {
  const burger = document.querySelector('.hamburger');
  const menu   = document.querySelector('.mobile-menu');
  const nav    = document.querySelector('.nav');
  if (!burger || !menu) return;

  function close() {
    burger.classList.remove('open');
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('click', e => {
    if (nav && !nav.contains(e.target)) close();
  });
}

/* ── DROPDOWN (hover handled by CSS, but also keyboard) ─────*/
function initDropdowns() {
  document.querySelectorAll('.nav-dropdown').forEach(d => {
    const btn  = d.querySelector('.nav-link');
    const menu = d.querySelector('.dropdown-menu');
    if (!btn || !menu) return;
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const vis = menu.style.opacity === '1';
        menu.style.opacity = vis ? '' : '1';
        menu.style.pointerEvents = vis ? '' : 'all';
        menu.style.transform = vis ? '' : 'translateY(0)';
      }
      if (e.key === 'Escape') {
        menu.style.opacity = '';
        menu.style.pointerEvents = '';
      }
    });
  });
}

/* ── ACTIVE NAV ─────────────────────────────────────────────*/
function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-item, .footer-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── FAQ ────────────────────────────────────────────────────*/
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;

    function toggle() {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = '0';
        o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    }

    q.addEventListener('click', toggle);
    q.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    q.setAttribute('role', 'button');
    q.setAttribute('tabindex', '0');
    q.setAttribute('aria-expanded', 'false');
  });
}

/* ── FAQ CATEGORY FILTER ─────────────────────────────────────*/
window.filterFAQ = function(cat, btn) {
  document.querySelectorAll('.faq-cat').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  document.querySelectorAll('.faq-item').forEach(item => {
    const show = cat === 'all' || item.dataset.cat === cat;
    item.style.display = show ? '' : 'none';
    // Close open items when hidden
    if (!show && item.classList.contains('open')) {
      item.classList.remove('open');
      const a = item.querySelector('.faq-a');
      if (a) a.style.maxHeight = '0';
    }
  });
};

/* ── INTERSECTION OBSERVER ANIMATIONS ──────────────────────*/
function initAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('.fade-up, .stagger').forEach(el => obs.observe(el));
}

/* ── COUNTERS ────────────────────────────────────────────────*/
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const float  = el.dataset.count.includes('.');
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = target / (1800 / 16);
      const t = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(t); }
        el.textContent = (float ? cur.toFixed(1) : Math.floor(cur)) + suffix;
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

/* ── PARTICLE CANVAS ─────────────────────────────────────────*/
function initParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }

  class P {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x = init ? Math.random() * (W || 1200) : -5;
      this.y = Math.random() * (H || 700);
      this.r = Math.random() * 1.3 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.32;
      this.vy = (Math.random() - 0.5) * 0.32;
      this.a = Math.random() * 0.42 + 0.07;
      // Blue-to-purple hue range
      this.hue = 210 + Math.floor(Math.random() * 60); // 210–270
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < -10 || this.x > W + 10 || this.y < -10 || this.y > H + 10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue},90%,70%,${this.a})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    const n = Math.min(Math.floor((W * H) / 7200), 140);
    particles = Array.from({ length: n }, () => new P());
  }

  function drawLines() {
    const max = 115;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < max) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,93,245,${0.09 * (1 - d / max)})`;
          ctx.lineWidth = 0.8; ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(init, 250); });
  init(); loop();
}

/* ── TYPEWRITER ─────────────────────────────────────────────*/
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const words = ['Minecraft Java', 'Minecraft Bedrock', 'Modpacks', 'Networks', 'VPS Linux'];
  let wi = 0, ci = 0, del = false;
  function tick() {
    const w = words[wi];
    if (!del) {
      el.textContent = w.slice(0, ++ci);
      if (ci === w.length) { del = true; return setTimeout(tick, 1800); }
      return setTimeout(tick, 88);
    }
    el.textContent = w.slice(0, --ci);
    if (ci === 0) { del = false; wi = (wi + 1) % words.length; return setTimeout(tick, 380); }
    setTimeout(tick, 50);
  }
  setTimeout(tick, 700);
}

/* ── PLAN TAB SWITCHER ──────────────────────────────────────*/
function initPlanTabs() {
  document.querySelectorAll('.plan-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.plan-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.target;
      document.querySelectorAll('.plan-group').forEach(g => {
        g.style.display = g.dataset.group === target ? '' : 'none';
      });
    });
  });
}

/* ── FLOATING BUTTON ────────────────────────────────────────*/
function initFloat() {
  const btn = document.getElementById('float-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
}

/* ── CARD TILT ──────────────────────────────────────────────*/
function initTilt() {
  document.querySelectorAll('.plan-card, .feature-card').forEach(c => {
    c.addEventListener('mousemove', e => {
      const r  = c.getBoundingClientRect();
      const rx = ((e.clientY - r.top  - r.height/2) / r.height) * 4;
      const ry = ((e.clientX - r.left - r.width/2)  / r.width)  * -4;
      c.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
    });
    c.addEventListener('mouseleave', () => { c.style.transform = ''; });
  });
}

/* ── WIZARD ─────────────────────────────────────────────────*/
const PLANS = {
  starter: { name:'Xeon Starter',   price:'19,90', ram:'2 GB DDR4', cpu:'Xeon · 2 vCPU', disk:'15 GB NVMe', players:'até 20', type:'xeon', page:'planos-xeon.html' },
  standard:{ name:'Xeon Standard',  price:'39,90', ram:'4 GB DDR4', cpu:'Xeon · 4 vCPU', disk:'30 GB NVMe', players:'até 50', type:'xeon', page:'planos-xeon.html' },
  advanced:{ name:'Xeon Advanced',  price:'69,90', ram:'8 GB DDR4', cpu:'Xeon · 6 vCPU', disk:'60 GB NVMe', players:'até 120', type:'xeon', page:'planos-xeon.html' },
  rpro:    { name:'Ryzen 7 Pro',    price:'99,90', ram:'8 GB DDR5', cpu:'Ryzen 7 · 4 vCPU', disk:'80 GB NVMe Gen4', players:'até 150', type:'ryzen', page:'planos-ryzen7.html' },
  relite:  { name:'Ryzen 7 Elite',  price:'179,90', ram:'16 GB DDR5', cpu:'Ryzen 7 · 8 vCPU', disk:'160 GB NVMe Gen4', players:'300+', type:'ryzen', page:'planos-ryzen7.html' },
};

function recommendPlan(serverType, players, perf) {
  if (perf === 'ryzen') {
    return players > 100 ? 'relite' : 'rpro';
  }
  if (players <= 20)  return 'starter';
  if (players <= 60)  return 'standard';
  if (players <= 120) return 'advanced';
  return perf === 'ryzen' ? 'rpro' : 'advanced';
}

function initWizard() {
  const w = document.getElementById('wizard');
  if (!w) return;

  let state = { step: 1, serverType: null, players: 20, perf: null };
  const totalSteps = 4;

  function update() {
    // Panels
    document.querySelectorAll('.wizard-panel').forEach(p => {
      p.classList.toggle('active', +p.dataset.step === state.step);
    });

    // Steps indicator
    document.querySelectorAll('.wiz-step').forEach(s => {
      const n = +s.dataset.step;
      s.classList.toggle('active', n === state.step);
      s.classList.toggle('done',   n < state.step);
    });

    // Progress track
    const track = document.querySelector('.progress-track');
    if (track) {
      const pct = ((state.step - 1) / (totalSteps - 1)) * 100;
      track.style.width = pct + '%';
    }

    // Back button
    const back = document.getElementById('wiz-back');
    if (back) back.disabled = state.step === 1;

    // Render result on step 4
    if (state.step === 4) renderResult();

    // Sync slider display
    updateSliderDisplay();
  }

  function updateSliderDisplay() {
    const vEl = document.getElementById('player-val');
    if (vEl) vEl.textContent = state.players;
    const sl = document.getElementById('player-slider');
    if (sl) {
      const pct = ((state.players - +sl.min) / (+sl.max - +sl.min)) * 100;
      sl.style.background = `linear-gradient(90deg, var(--blue) ${pct}%, rgba(0,93,245,0.20) ${pct}%)`;
    }
  }

  function renderResult() {
    const key  = recommendPlan(state.serverType, state.players, state.perf);
    const plan = PLANS[key];
    const r    = document.getElementById('result-content');
    if (!r || !plan) return;

    r.innerHTML = `
      <div class="result-badge">${icon('star',14)} Plano Recomendado</div>
      <div class="result-name">${plan.name}</div>
      <div class="result-tagline">Configuração ideal para ${state.players} jogadores com ${state.serverType === 'network' ? 'rede de servidores' : state.serverType === 'modpack' ? 'modpacks' : 'Minecraft Survival'}</div>
      <div class="result-price">R$&nbsp;${plan.price}<span>/mês</span></div>
      <div class="result-specs">
        <div class="result-spec">${icon('cpu',16)}<div class="result-spec-info"><div class="k">Processador</div><div class="v">${plan.cpu}</div></div></div>
        <div class="result-spec">${icon('database',16)}<div class="result-spec-info"><div class="k">Memória RAM</div><div class="v">${plan.ram}</div></div></div>
        <div class="result-spec">${icon('server',16)}<div class="result-spec-info"><div class="k">Armazenamento</div><div class="v">${plan.disk}</div></div></div>
        <div class="result-spec">${icon('users',16)}<div class="result-spec-info"><div class="k">Jogadores</div><div class="v">${plan.players}</div></div></div>
      </div>
      <div class="result-actions">
        <a href="${plan.page}" class="btn btn-primary btn-lg">${icon('zap',18)} Contratar este plano</a>
        <a href="${plan.page}" class="btn btn-ghost">Ver todos os planos</a>
      </div>
    `;
  }

  // Option selection
  w.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      const group = card.dataset.group;
      const val   = card.dataset.val;
      // Deselect siblings
      w.querySelectorAll(`.option-card[data-group="${group}"]`).forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      if (group === 'serverType') state.serverType = val;
      if (group === 'perf')       state.perf = val;

      // Auto-advance
      setTimeout(() => {
        if (state.step < totalSteps - 1) { state.step++; update(); }
        else if (state.step === 3)       { state.step++; update(); }
      }, 300);
    });
  });

  // Slider
  const slider = document.getElementById('player-slider');
  if (slider) {
    slider.addEventListener('input', () => {
      state.players = +slider.value;
      updateSliderDisplay();
    });
  }

  // Next
  document.getElementById('wiz-next')?.addEventListener('click', () => {
    if (state.step < totalSteps) { state.step++; update(); }
  });

  // Back
  document.getElementById('wiz-back')?.addEventListener('click', () => {
    if (state.step > 1) { state.step--; update(); }
  });

  // Step click
  document.querySelectorAll('.wiz-step').forEach(s => {
    s.addEventListener('click', () => {
      const n = +s.dataset.step;
      if (n < state.step) { state.step = n; update(); }
    });
  });

  update();
}

/* ── INIT ALL ───────────────────────────────────────────────*/
document.addEventListener('DOMContentLoaded', () => {
  // Init nav + header/footer features (header is inlined — no fetch)
  loadComponents();

  initScrollProgress();
  initAnimations();
  initParticles();
  initCounters();
  initTypewriter();
  initFAQ();
  initPlanTabs();
  initFloat();
  initTilt();
  initWizard();

  // Expose globals
  window.toggleTheme = toggleTheme;
  window.icon        = icon;
});
