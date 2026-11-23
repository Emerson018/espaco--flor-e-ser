/* =====================================================================
   Flor e Ser · Espaço Terapêutico — conteúdo editável
   ===================================================================== */

// Número do WhatsApp com DDI e DDD, só dígitos.
const WHATSAPP = '5551992981851';

// Links oficiais
const MAPS_URL = 'https://maps.app.goo.gl/R5CZ1Vu2cix8McBp9';
const INSTAGRAM_URL = 'https://www.instagram.com/espacofloreserpoa/';

// Lista de serviços e rituais do Espaço Flor e Ser.
const MASSAGENS = [
  {
    nome: 'Meu momento... Relaxamento Profundo',
    subtitulo: 'Massagem suave para desacelerar corpo e mente.',
    descricao: [
      'Cada movimento é pensado para acalmar o corpo, silenciar a mente e conduzir você a um estado profundo de relaxamento.',
      'Perfeita para quem deseja reduzir o estresse do dia a dia e respirar com mais leveza.',
    ],
    opcoes: [
      { rotulo: 'Sessão avulsa', duracao: '60min', preco: 'R$ 160' },
      { rotulo: 'Pacote 5 sessões', preco: 'R$ 700', detalhe: 'R$ 140 cada' },
    ],
  },
  {
    nome: 'Terapia Corporal Integrativa',
    subtitulo: 'Foco em dores, tensões e liberação muscular.',
    descricao: [
      'Sinta seu corpo mais solto, leve e em equilíbrio. Este ritual combina técnicas terapêuticas com um toque sensível e consciente, promovendo um alívio gradual e eficaz.',
      'Cada manobra é direcionada às necessidades do seu corpo, liberando pontos de tensão, melhorando a mobilidade e restaurando a sensação de bem-estar físico.',
    ],
    opcoes: [
      { rotulo: 'Sessão avulsa', duracao: '60min', preco: 'R$ 160' },
      { rotulo: 'Pacote 5 sessões', preco: 'R$ 750', detalhe: 'R$ 150 cada' },
    ],
  },
  {
    nome: 'Ritual de Leveza',
    subtitulo: 'Drenagem linfática: menos inchaço e mais bem-estar',
    descricao: [
      'Estimula o sistema linfático, reduz a retenção de líquidos, promove leveza corporal, ativa a circulação e contribui para o equilíbrio do organismo.',
      'Ideal para quem busca eliminar inchaços, edemas, e remover o excesso de fluidos retidos nos tecidos.',
    ],
    opcoes: [
      { rotulo: 'Sessão avulsa', duracao: '60min', preco: 'R$ 160' },
      { rotulo: 'Pacote 5 sessões', preco: 'R$ 750', detalhe: 'R$ 150 cada' },
    ],
  },
  {
    nome: 'Ritual Esculpir',
    subtitulo: 'Massagem modeladora + Lipoplastia transdérmica',
    descricao: [
      'A massagem estética auxilia na redução de medidas, modela o corpo e valoriza os contornos naturais.',
      'Nosso protocolo com enzimas transdérmicas redutoras de medidas entrega resultados com a mesma performance de procedimentos injetáveis, mas de forma totalmente não invasiva, segura e indolor.',
      'Atua em regiões como abdômen, pernas e glúteos, estimulando a circulação e promovendo efeito lifting.',
    ],
    opcoes: [
      { rotulo: 'Sessão avulsa', duracao: '60min', preco: 'R$ 180' },
      { rotulo: 'Pacote 5 sessões', preco: 'R$ 850', detalhe: 'R$ 170 cada' },
    ],
  },
  {
    nome: 'Shape Express',
    subtitulo: 'Massagem modeladora + Lipocavitação',
    descricao: [
      'Um protocolo intensivo que une massagem modeladora e lipocavitação para potencializar a perda de medidas, gordura localizada e valorizar suas curvas de forma mais rápida e eficiente.',
      'O ultrassom cavitacional atua na quebra da membrana da célula de gordura, facilitando sua eliminação através da urina e suor.',
      'Após a lipocavitação é feita a drenagem na região tratada para potencializar os resultados.',
    ],
    opcoes: [
      { rotulo: 'Sessão avulsa', duracao: '60min', preco: 'R$ 230' },
      { rotulo: 'Pacote 5 sessões', preco: 'R$ 1.100', detalhe: 'R$ 220 cada' },
    ],
  },
  {
    categoria: 'Experiências Diferenciadas',
    nome: 'Ritual Completo',
    subtitulo: 'Relaxamento e pontos terapêuticos',
    descricao: [
      'Mais do que uma massagem, é um momento de cuidado profundo, onde o tempo desacelera e você se permite simplesmente sentir.',
      'Através de uma massagem suave, com toques contínuos e envolventes, o corpo é gentilmente levado a liberar tensões, enquanto a mente encontra descanso.',
    ],
    opcoes: [
      { rotulo: 'Sessão', duracao: '90min', preco: 'R$ 200' },
    ],
  },
  {
    categoria: 'Experiências Diferenciadas',
    nome: 'Ritual Premium',
    subtitulo: 'SPA dos pés para promover relaxamento profundo, aliviar o estresse e a tensão acumulada ao longo do dia.',
    descricao: [
      'Aromaterapia com massagem relaxante ou candle massage.',
    ],
    opcoes: [
      { rotulo: 'Sessão', duracao: '120min', preco: 'R$ 260' },
    ],
  },
];

/* ===================================================================== */

const BASE_MSG = 'Olá! Gostaria de agendar uma massagem no Flor e Ser.';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

function waLink(text) {
  const t = encodeURIComponent(text);
  return WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${t}` : `https://wa.me/?text=${t}`;
}

function mensagem(customService) {
  if (customService) {
    return `Olá! Gostaria de agendar o serviço "${customService}" no Flor e Ser.`;
  }
  return BASE_MSG;
}

function atualizarLinks() {
  document.querySelectorAll('.js-whatsapp').forEach((a) => {
    if (!WHATSAPP && !a.classList.contains('js-whatsapp-final')) {
      a.href = '#agendar';
      a.removeAttribute('target');
      return;
    }
    const service = a.dataset.service || '';
    const customMsg = a.dataset.message || '';
    const text = service ? mensagem(service) : (customMsg || BASE_MSG);
    a.href = waLink(text);
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

function tag() {
  return '<span class="tag-provisorio">provisório</span>';
}

/* ---------- Hero intro: lotus emblem traces & blooms, then copy arrives ---------- */
function setupHero() {
  let bloomed = false;
  const bloom = () => {
    if (bloomed) return;
    bloomed = true;
    root.classList.add('is-drawing', 'is-bloomed');
  };

  if (reduceMotion) {
    bloom();
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.add('is-drawing');
    });
  });

  setTimeout(bloom, 1350);
}

/* ---------- Treatments ---------- */
function renderRow(m) {
  const paragraphs = Array.isArray(m.descricao)
    ? m.descricao.map((p) => `<p class="menu__desc">${p}</p>`).join('')
    : (m.descricao ? `<p class="menu__desc">${m.descricao}</p>` : '');

  const opcoesHtml = (m.opcoes || []).map((op) => `
    <div class="menu__option">
      <span class="menu__option-label">
        ${op.rotulo}${op.duracao ? ` <span class="menu__option-duration">(${op.duracao})</span>` : ''}:
      </span>
      <span class="menu__option-price">${op.preco}</span>
      ${op.detalhe ? `<span class="menu__option-detail">(${op.detalhe})</span>` : ''}
    </div>
  `).join('');

  return `
    <li class="menu__row rule-bottom">
      <div class="menu__main">
        <h3 class="menu__name">${m.nome}</h3>
        ${m.subtitulo ? `<p class="menu__subtitle">${m.subtitulo}</p>` : ''}
        <div class="menu__descriptions">${paragraphs}</div>
      </div>
      <div class="menu__aside">
        <div class="menu__options">${opcoesHtml}</div>
        <a class="menu__cta js-whatsapp" data-service="${m.nome}" href="https://wa.me/${WHATSAPP}">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-chat"/></svg>
          <span>Agendar</span>
        </a>
      </div>
    </li>`;
}

function setupMenu() {
  const container = document.querySelector('.menu__container');
  if (!container) return;

  container.innerHTML = `<ol class="menu__list rule-top" role="list">${MASSAGENS.map(renderRow).join('')}</ol>`;
}

/* ---------- Space & Location Tabs + Opening Hours Highlight ---------- */
function setupLocationAndHours() {
  const today = new Date().getDay();
  const row = document.querySelector(`.hours__row[data-day="${today}"]`);
  if (row) {
    row.classList.add('is-today');
    const dt = row.querySelector('dt');
    if (dt) {
      const badge = document.createElement('span');
      badge.className = 'hours__today-badge';
      badge.textContent = 'Hoje';
      dt.appendChild(badge);
    }
  }

  const tabs = document.querySelectorAll('.space__tab');
  const setTab = (target) => {
    tabs.forEach((t) => {
      const active = t.dataset.tabTarget === target;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      setTab(tab.dataset.tabTarget);
    });
  });

  const locSection = document.getElementById('localizacao');
  const spaceSection = document.getElementById('espaco');
  if (locSection && spaceSection && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTab(e.target.id === 'localizacao' ? 'mapa' : 'fotos');
        }
      });
    }, { threshold: 0.35 });
    io.observe(spaceSection);
    io.observe(locSection);
  }
}

/* ---------- Entrances and mobile dock ---------- */
function setupRise() {
  const traced = document.querySelectorAll('.rule-top, .rule-bottom, .credentials, .frame, .close__mark');
  const texts = document.querySelectorAll('.section-head, .menu__group-head, .menu__row > *, .about__text, .voices__header, .voice, .space__top, .location__head, .location__address, .hours, .close__inner > :not(.close__mark):not([hidden])');
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
  const state = { hero: true, close: false };
  const key = (el) => (el === hero ? 'hero' : 'close');
  const update = () => {
    const show = !state.hero && !state.close;
    dock.classList.toggle('is-visible', show);
    dock.setAttribute('aria-hidden', String(!show));
    dock.tabIndex = show ? 0 : -1;
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { state[key(e.target)] = e.isIntersecting; });
    update();
  }, { threshold: 0.05 });
  if (hero) io.observe(hero);
  if (close) io.observe(close);

  const light = [...document.querySelectorAll('.hero, .about, .voices, .space, .location')];
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
  const note = document.querySelector('.close__note');
  if (note) note.hidden = Boolean(WHATSAPP);
}

function setupSmoothNav() {
  const topbar = document.querySelector('.topbar');
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      if (hash === '#topo') {
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        history.pushState(null, '', hash);
        return;
      }

      const topbarH = topbar ? topbar.getBoundingClientRect().height : 68;
      const sectionTop = target.getBoundingClientRect().top + window.scrollY;
      const sectionH = target.getBoundingClientRect().height;
      const wrap = target.querySelector('.wrap') || target;
      const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
      const wrapH = wrap.getBoundingClientRect().height;
      const availH = window.innerHeight - topbarH;

      let scrollTarget = sectionTop;
      if (wrapH < availH - 32) {
        // Center the content vertically in the area below the fixed header,
        // while never scrolling less than sectionTop (so the previous section never peeks above)
        const centeredY = wrapTop - topbarH - (availH - wrapH) / 2;
        const maxSectionScroll = sectionTop + Math.max(0, sectionH - window.innerHeight);
        scrollTarget = Math.min(Math.max(sectionTop, centeredY), Math.max(sectionTop, maxSectionScroll));
      }

      window.scrollTo({ top: Math.round(scrollTarget), behavior: reduceMotion ? 'auto' : 'smooth' });
      history.pushState(null, '', hash);
    });
  });
}

setupHero();
setupMenu();
setupLocationAndHours();
setupNote();
atualizarLinks();
setupRise();
setupDock();
setupSmoothNav();
