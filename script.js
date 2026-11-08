/* =====================================================================
   Lotus — conteúdo editável
   ===================================================================== */

// Número do WhatsApp com DDI e DDD, só dígitos. Ex.: '5551999999999'.
// Vazio = os botões abrem o WhatsApp sem destinatário e aparece um aviso.
const WHATSAPP = '';

// Lista de massagens. Preencha com os dados reais da Lotus.
// `regioes` liga a massagem às partes do mapa do corpo:
// cabeca, ombros, costas, bracos, lombar, pernas, pes
// Exemplo de formato (não é dado real):
// { nome: 'Nome da massagem', descricao: 'Uma frase sobre a sessão.', duracao: '60 min', preco: 'R$ 000', regioes: ['costas', 'lombar'] },
const MASSAGENS = [];

// Regiões do mapa. x/y no desenho (600 × 660); lado do rótulo.
const REGIOES = [
  { id: 'cabeca', curto: 'Cabeça', nome: 'Cabeça', x: 300, y: 50, lado: 'left',
    sente: 'Testa franzida, mandíbula travada, a cabeça que não desliga.' },
  { id: 'ombros', curto: 'Ombros', nome: 'Pescoço e ombros', x: 346, y: 132, lado: 'right',
    sente: 'Onde o computador e o celular se acumulam: ombros subindo perto das orelhas, dificuldade de virar o pescoço.' },
  { id: 'costas', curto: 'Costas', nome: 'Costas', x: 300, y: 190, lado: 'left',
    sente: 'Peso entre as escápulas, a sensação de carregar o dia nas costas.' },
  { id: 'bracos', curto: 'Braços', nome: 'Braços e mãos', x: 396, y: 312, lado: 'right',
    sente: 'Antebraços cansados de digitar, mãos que trabalham o dia inteiro.' },
  { id: 'lombar', curto: 'Lombar', nome: 'Lombar', x: 300, y: 290, lado: 'left',
    sente: 'Muito tempo sentado, ou em pé, e a parte de baixo das costas reclama.' },
  { id: 'pernas', curto: 'Pernas', nome: 'Pernas', x: 334, y: 455, lado: 'right',
    sente: 'Pernas pesadas no fim do dia, panturrilhas que pedem pausa.' },
  { id: 'pes', curto: 'Pés', nome: 'Pés', x: 272, y: 628, lado: 'left',
    sente: 'Horas em pé ou de sapato apertado. Os pés sustentam todo o resto.' },
];

/* ===================================================================== */

const BASE_MSG = 'Olá! Gostaria de agendar uma massagem na Lotus.';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
let escolha = null;

function waLink(text) {
  const t = encodeURIComponent(text);
  return WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${t}` : `https://wa.me/?text=${t}`;
}

function mensagem() {
  return escolha ? `${BASE_MSG} Sinto mais em: ${escolha.nome.toLowerCase()}.` : BASE_MSG;
}

function atualizarLinks() {
  document.querySelectorAll('.js-whatsapp').forEach((a) => {
    // Sem número: os botões levam ao fechamento, onde o aviso provisório explica.
    // Só o botão do fechamento abre o WhatsApp (sem destinatário) enquanto isso.
    if (!WHATSAPP && !a.classList.contains('js-whatsapp-final')) {
      a.href = '#agendar';
      a.removeAttribute('target');
      return;
    }
    a.href = waLink(mensagem());
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

function tag() {
  return '<span class="tag-provisorio">provisório</span>';
}

/* ---------- Hero intro: copy arrives when the lotus is drawn ---------- */
function setupHero() {
  const video = document.querySelector('.hero__video');
  let bloomed = false;
  const bloom = () => {
    if (bloomed) return;
    bloomed = true;
    root.classList.add('is-bloomed');
  };
  const holdFinalFrame = () => {
    const seek = () => { try { video.currentTime = Math.max(0, video.duration - 0.4); } catch (e) {} };
    if (video.readyState >= 1) seek(); else video.addEventListener('loadedmetadata', seek, { once: true });
  };

  if (reduceMotion) {
    holdFinalFrame();
    bloom();
    return;
  }

  video.addEventListener('timeupdate', () => { if (video.currentTime >= 2.1) bloom(); });
  video.addEventListener('error', () => bloom());
  // Once playback starts, the copy follows the drawing; if the film is slow to arrive, never hold the page.
  video.addEventListener('playing', () => setTimeout(bloom, 2600), { once: true });
  const p = video.play();
  if (p && p.catch) p.catch(() => { holdFinalFrame(); bloom(); });
  setTimeout(bloom, 3400);

  setupLightLoop(video, document.querySelector('.hero__video--relay'));
}

/* The lotus is drawn once. After that, its lights keep moving forever: two copies of the
   film take turns playing the light phase (flower complete, particles drifting) and
   cross-fade into each other, so the drawing never restarts and nothing jumps. */
const LIGHT_PHASE_START = 3.4; // s: the flower is fully drawn from here on
const HANDOFF_LEAD = 1.8;      // s before the end where the next copy takes over
const FADE_MS = 1600;          // matches .hero__video opacity transition

function setupLightLoop(first, second) {
  if (!second) return;
  let active = first;
  let resting = second;
  let handingOff = false;

  const handOff = () => {
    handingOff = true;
    const next = resting;
    const prev = active;
    const start = () => {
      // The incoming copy fades in on top while the outgoing one stays fully lit underneath,
      // so the flower never dims mid-fade.
      next.style.zIndex = '2';
      prev.style.zIndex = '1';
      next.classList.remove('is-resting');
      setTimeout(() => {
        prev.classList.add('is-resting');
        prev.pause();
        active = next;
        resting = prev;
        handingOff = false;
      }, FADE_MS + 100);
    };
    try { next.currentTime = LIGHT_PHASE_START; } catch (e) {}
    const playing = next.play();
    if (playing && playing.then) playing.then(start, () => { handingOff = false; });
    else start();
  };

  const watch = () => {
    const v = active;
    if (!handingOff && v.duration && !v.paused && v.currentTime >= v.duration - HANDOFF_LEAD) handOff();
    requestAnimationFrame(watch);
  };
  requestAnimationFrame(watch);

  // If a copy still reaches its end (a throttled background tab), carry on from the light phase.
  [first, second].forEach((v) => v.addEventListener('ended', () => {
    if (v === active && !handingOff) handOff();
  }));
}

/* ---------- Body map ---------- */
function setupMap() {
  const map = document.querySelector('.body-map');
  const pointsBox = map.querySelector('.body-map__points');
  const leaders = map.querySelector('.body-map__leaders');
  const panel = document.querySelector('.map-panel__inner');
  const NS = 'http://www.w3.org/2000/svg';
  const narrow = window.matchMedia('(max-width: 560px)').matches;
  const LEFT_X = narrow ? 150 : 118;
  const RIGHT_X = narrow ? 455 : 482;

  REGIOES.forEach((r, i) => {
    const lx = r.lado === 'left' ? LEFT_X : RIGHT_X;
    const delay = `${2.0 + i * 0.12}s`;

    const line = document.createElementNS(NS, 'path');
    line.setAttribute('d', `M${r.x},${r.y} L${lx},${r.y}`);
    line.setAttribute('pathLength', '1');
    line.setAttribute('class', 'leader');
    line.style.setProperty('--d', delay);
    line.dataset.id = r.id;
    leaders.appendChild(line);

    const node = document.createElementNS(NS, 'circle');
    node.setAttribute('cx', r.x);
    node.setAttribute('cy', r.y);
    node.setAttribute('r', '3');
    node.setAttribute('class', 'anchor');
    node.dataset.id = r.id;
    leaders.appendChild(node);

    const b = document.createElement('button');
    b.type = 'button';
    b.className = `point point--${r.lado}`;
    b.style.left = `${(lx / 600) * 100}%`;
    b.style.top = `${(r.y / 660) * 100}%`;
    b.style.setProperty('--d', delay);
    b.setAttribute('aria-pressed', 'false');
    b.dataset.id = r.id;
    b.innerHTML = `<span class="point__dot" aria-hidden="true"></span><span>${r.curto}</span>`;
    b.setAttribute('aria-label', r.nome);
    b.addEventListener('click', () => escolher(r.id));
    pointsBox.appendChild(b);
  });

  function escolher(id) {
    escolha = REGIOES.find((r) => r.id === id);
    map.querySelectorAll('.point').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.id === id)));
    leaders.querySelectorAll('[data-id]').forEach((el) => el.classList.toggle('is-active', el.dataset.id === id));

    const indicadas = MASSAGENS.filter((m) => (m.regioes || []).includes(id));
    const rx = indicadas.length
      ? indicadas.map((m) => `
          <div class="map-panel__rx">
            <span class="map-panel__rx-label">Massagem indicada</span>
            <span class="map-panel__rx-name">${m.nome}</span>
            <span class="map-panel__rx-meta">${[m.duracao, m.preco].filter(Boolean).join(' · ')}</span>
          </div>`).join('')
      : `<div class="map-panel__rx">
            <span class="map-panel__rx-label">Massagem indicada</span>
            <span class="map-panel__rx-name">Entra aqui a massagem da Lotus para essa região ${tag()}</span>
            <span class="map-panel__rx-meta">Duração · valor</span>
          </div>`;

    panel.innerHTML = `
      <h3 class="map-panel__title">${escolha.nome}</h3>
      <p class="map-panel__feel">${escolha.sente}</p>
      ${rx}
      <a class="btn btn--light js-whatsapp" href="#agendar">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-chat"/></svg>
        Agendar para ${escolha.curto.toLowerCase()}
      </a>`;
    panel.classList.remove('is-swapping');
    void panel.offsetWidth;
    panel.classList.add('is-swapping');
    if (window.matchMedia('(max-width: 900px)').matches) {
      panel.parentElement.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    }

    const choice = document.querySelector('.close__choice');
    if (choice) {
      choice.hidden = false;
      choice.querySelector('strong').textContent = escolha.nome;
    }
    atualizarLinks();
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        map.classList.add('is-drawn');
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(map);
}

/* ---------- Treatments ---------- */
function setupMenu() {
  const list = document.querySelector('.menu__list');
  const nomes = Object.fromEntries(REGIOES.map((r) => [r.id, r.curto]));
  const rows = MASSAGENS.length
    ? MASSAGENS.map((m) => `
        <li class="menu__row rule-bottom">
          <h3 class="menu__name">${m.nome}</h3>
          <span class="menu__time">${m.duracao || ''}</span>
          <span class="menu__price">${m.preco || ''}</span>
          ${m.descricao ? `<p class="menu__desc">${m.descricao}</p>` : ''}
          ${(m.regioes || []).length ? `<div class="menu__regions">${m.regioes.map((id) => `<span class="menu__region">${nomes[id] || id}</span>`).join('')}</div>` : ''}
        </li>`)
    : [1, 2, 3].map(() => `
        <li class="menu__row rule-bottom">
          <h3 class="menu__name">Nome da massagem ${tag()}</h3>
          <span class="menu__time">— min</span>
          <span class="menu__price">R$ —</span>
          <p class="menu__desc">Uma frase sobre a sessão, enviada pela Lotus.</p>
        </li>`);
  list.innerHTML = rows.join('');
}

/* ---------- Entrances and mobile dock ---------- */
// One grammar below the hero: the line is traced first, then the text arrives by light.
function setupRise() {
  const traced = document.querySelectorAll('.rule-top, .rule-bottom, .credentials, .frame, .close__mark');
  const texts = document.querySelectorAll('.section-head, .menu__row > *, .about__text, .voices .display, .voice, .space__grid > div, .space__address, .close__inner > :not(.close__mark):not([hidden])');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    traced.forEach((el) => el.classList.add('is-traced'));
    return;
  }
  texts.forEach((el) => el.setAttribute('data-rise', ''));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add(e.target.hasAttribute('data-rise') ? 'is-in' : 'is-traced');
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  traced.forEach((el) => io.observe(el));
  texts.forEach((el) => io.observe(el));
}

function setupDock() {
  const dock = document.querySelector('.dock');
  const hero = document.querySelector('.hero');
  const close = document.querySelector('.close');
  const panel = document.querySelector('.map-panel');
  const state = { hero: true, close: false, panel: false };
  const key = (el) => (el === hero ? 'hero' : el === close ? 'close' : 'panel');
  const update = () => {
    const show = !state.hero && !state.close && !state.panel;
    dock.classList.toggle('is-visible', show);
    dock.setAttribute('aria-hidden', String(!show));
    dock.tabIndex = show ? 0 : -1;
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { state[key(e.target)] = e.isIntersecting; });
    update();
  }, { threshold: 0.05 });
  io.observe(hero);
  io.observe(close);
  io.observe(panel);

  // Over the light fields (areia, creme) the dock turns ink so it never dissolves.
  const light = [...document.querySelectorAll('.about, .voices, .space')];
  let ticking = false;
  const tone = () => {
    ticking = false;
    const y = window.innerHeight - 40;
    const onLight = light.some((s) => { const r = s.getBoundingClientRect(); return r.top <= y && r.bottom >= y; });
    dock.classList.toggle('is-on-light', onLight);
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(tone); } }, { passive: true });
  tone();
}

function setupNote() {
  if (!WHATSAPP) document.querySelector('.close__note').hidden = false;
}

setupHero();
setupMap();
setupMenu();
setupNote();
atualizarLinks();
setupRise();
setupDock();
