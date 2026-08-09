import { CATS, PATHS, BADGES } from './data.js';

const state = { query: '', active: new Set() };
const $ = s => document.querySelector(s);
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const label = k => BADGES[k].label.toLowerCase().replace('open-src', 'open source');
const pad = n => String(n).padStart(2, '0');

const applyTheme = t => {
  document.documentElement.dataset.theme = t;
  $('#theme-toggle').textContent = t === 'ink' ? 'Light' : 'Dark';
};
let theme = 'ink';
try { const s = localStorage.getItem('aat-theme'); if (s === 'ink' || s === 'paper') theme = s; } catch (e) {}
applyTheme(theme);
$('#theme-toggle').addEventListener('click', () => {
  theme = theme === 'ink' ? 'paper' : 'ink';
  applyTheme(theme);
  try { localStorage.setItem('aat-theme', theme); } catch (e) {}
});

const TOTAL = CATS.reduce((n, c) => n + c.tools.length, 0);
const counts = {};
CATS.forEach(c => c.tools.forEach(t => t.b.forEach(b => counts[b] = (counts[b] || 0) + 1)));
const pass = t =>
  (!state.query || t.n.toLowerCase().includes(state.query) || t.d.toLowerCase().includes(state.query)) &&
  [...state.active].every(a => t.b.includes(a));

$('#stat-tools').textContent = TOTAL;
$('#stat-cats').textContent = CATS.length;
$('#foot-stats').textContent = `${TOTAL} tools · ${CATS.length} categories`;

$('#filters').innerHTML = Object.keys(BADGES).map(k =>
  `<button class="chip" data-badge="${k}">${label(k)} <span class="n">${counts[k] || 0}</span></button>`
).join('') + `<button class="link-btn" id="clear-btn" hidden>clear</button>`;

$('#paths').innerHTML = PATHS.map(p =>
  `<button class="path-btn" data-cat="${p.cat}">${esc(p.label.toLowerCase())} ↓</button>`
).join('');

$('#contents').innerHTML = CATS.map((c, i) =>
  `<button class="toc-btn" data-cat="${c.id}"><span class="num">${pad(i + 1)}</span> ${esc(c.name)}</button>`
).join('');

function render() {
  let shown = 0;
  $('#sections').innerHTML = CATS.map((c, ci) => {
    const matched = c.tools.filter(pass);
    shown += matched.length;
    if (!matched.length) return '';
    const countLabel = (matched.length === c.tools.length ? c.tools.length : `${matched.length} of ${c.tools.length}`) + (c.tools.length === 1 ? ' tool' : ' tools');
    const rows = matched.map((t, ti) => `
      <a class="row" id="it-${c.id}-${ti}" href="${esc(t.u)}" target="_blank" rel="noreferrer">
        <span class="row-name">${esc(t.n)}</span>
        <span class="row-badges">${t.b.map(b => `<span class="badge"><span class="dot" style="background:var(--dot-${b})"></span>${label(b)}</span>`).join('')}</span>
        <span class="row-desc">${esc(t.d)}${t.note ? ` <span class="note">${esc(t.note)}</span>` : ''}</span>
        <span class="row-arrow">↗</span>
      </a>`).join('');
    return `
      <section class="cat" id="sec-${c.id}">
        <div class="cat-head">
          <span class="cat-num">${pad(ci + 1)}</span>
          <h2>${esc(c.name)}</h2>
          <span class="cat-count">${countLabel}</span>
        </div>
        <div class="rows">${rows}</div>
      </section>`;
  }).join('');
  $('#shown-label').textContent = shown === TOTAL ? `${TOTAL} listed` : `${shown} of ${TOTAL}`;
  $('#empty').hidden = shown !== 0;
  $('#clear-btn').hidden = !(state.query || state.active.size);
}

const jump = id => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
};
const clearAll = () => {
  state.query = ''; state.active.clear();
  $('#search').value = '';
  document.querySelectorAll('.chip.active').forEach(c => c.classList.remove('active'));
  render();
};

$('#search').addEventListener('input', e => { state.query = e.target.value.trim().toLowerCase(); render(); });
$('#filters').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (chip) {
    const k = chip.dataset.badge;
    state.active.has(k) ? state.active.delete(k) : state.active.add(k);
    chip.classList.toggle('active');
    render();
  }
  if (e.target.closest('#clear-btn')) clearAll();
});
$('#reset-btn').addEventListener('click', clearAll);
document.addEventListener('click', e => {
  const nav = e.target.closest('[data-cat]');
  if (nav && !nav.classList.contains('chip')) jump('sec-' + nav.dataset.cat);
});
$('#random-btn').addEventListener('click', () => {
  const pool = [];
  CATS.forEach(c => c.tools.filter(pass).forEach((t, ti) => pool.push(`it-${c.id}-${ti}`)));
  if (!pool.length) return;
  const id = pool[Math.floor(Math.random() * pool.length)];
  jump(id);
  const el = document.getElementById(id);
  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
});

render();
