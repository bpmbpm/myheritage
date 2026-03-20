/**
 * MyHeritage - Browser-based Genealogy Application
 * Storage: TriG / Turtle RDF in localStorage
 * Export/Import: Excel (via SheetJS), RDF (Turtle/TriG)
 * Languages: English, Russian
 */

// ================================================================
// i18n — Translations
// ================================================================
const I18N = {
  en: {
    appTitle: 'MyHeritage',
    navTree: 'Family Tree',
    navPeople: 'People',
    navFamilies: 'Families',
    navEvents: 'Events',
    navData: 'RDF Data',
    btnImport: '⬆ Import Excel',
    btnExport: '⬇ Export Excel',
    btnExportRDF: '⬇ Export RDF',
    btnClearAll: '🗑 Clear All',
    btnCopyRDF: '📋 Copy',
    btnImportRDF: '⬆ Import RDF',
    addPerson: '+ Add Person',
    addFamily: '+ Add Family',
    addEvent: '+ Add Event',
    editPerson: 'Edit Person',
    editFamily: 'Edit Family',
    editEvent: 'Edit Event',
    firstName: 'First Name *',
    lastName: 'Last Name',
    maidenName: 'Maiden Name',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    birthDate: 'Birth Date',
    birthPlace: 'Birth Place',
    deathDate: 'Death Date',
    deathPlace: 'Death Place',
    occupation: 'Occupation',
    nationality: 'Nationality',
    religion: 'Religion',
    education: 'Education',
    notes: 'Notes',
    father: 'Father',
    mother: 'Mother',
    marriageDate: 'Marriage Date',
    marriagePlace: 'Marriage Place',
    divorceDate: 'Divorce Date',
    children: 'Children',
    multiSelectHint: 'Hold Ctrl/Cmd to select multiple',
    eventPerson: 'Person',
    eventType: 'Event Type',
    eventDate: 'Date',
    eventPlace: 'Place',
    eventDesc: 'Description',
    evtBirth: 'Birth',
    evtDeath: 'Death',
    evtMarriage: 'Marriage',
    evtDivorce: 'Divorce',
    evtGraduation: 'Graduation',
    evtImmigration: 'Immigration',
    evtMilitary: 'Military Service',
    searchPeople: 'Search people…',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    confirmTitle: 'Confirm Action',
    confirmClearAll: 'This will delete ALL data (people, families, events). This action cannot be undone. Are you sure?',
    confirmDeletePerson: 'Delete this person? Related families and events will also be removed.',
    confirmDeleteFamily: 'Delete this family record?',
    confirmDeleteEvent: 'Delete this event?',
    treeEmpty: 'No people in your family tree yet. Click "+ Add Person" to get started.',
    peopleEmpty: 'No people added yet.',
    familiesEmpty: 'No families added yet.',
    eventsEmpty: 'No events added yet.',
    savedOK: 'Saved successfully.',
    deletedOK: 'Deleted.',
    clearedOK: 'All data cleared.',
    importOK: 'Import completed.',
    importError: 'Import failed. Check the file format.',
    rdfCopied: 'RDF copied to clipboard.',
    noFirstName: 'First name is required.',
    personDetail: 'Person Details',
    detailRelatives: 'Relatives',
    detailEvents: 'Events',
    parents: 'Parents',
    spouse: 'Spouse / Partner',
    siblings: 'Siblings',
    alive: 'Living',
    deceased: 'Deceased',
    unknown: 'Unknown',
    years: 'years',
    familyOf: 'Family of',
    and: 'and',
  },
  ru: {
    appTitle: 'МоёНаследие',
    navTree: 'Семейное дерево',
    navPeople: 'Персоны',
    navFamilies: 'Семьи',
    navEvents: 'События',
    navData: 'RDF Данные',
    btnImport: '⬆ Импорт Excel',
    btnExport: '⬇ Экспорт Excel',
    btnExportRDF: '⬇ Экспорт RDF',
    btnClearAll: '🗑 Очистить всё',
    btnCopyRDF: '📋 Копировать',
    btnImportRDF: '⬆ Импорт RDF',
    addPerson: '+ Добавить персону',
    addFamily: '+ Добавить семью',
    addEvent: '+ Добавить событие',
    editPerson: 'Редактировать персону',
    editFamily: 'Редактировать семью',
    editEvent: 'Редактировать событие',
    firstName: 'Имя *',
    lastName: 'Фамилия',
    maidenName: 'Девичья фамилия',
    gender: 'Пол',
    male: 'Мужской',
    female: 'Женский',
    other: 'Другой',
    birthDate: 'Дата рождения',
    birthPlace: 'Место рождения',
    deathDate: 'Дата смерти',
    deathPlace: 'Место смерти',
    occupation: 'Профессия',
    nationality: 'Национальность',
    religion: 'Религия',
    education: 'Образование',
    notes: 'Примечания',
    father: 'Отец',
    mother: 'Мать',
    marriageDate: 'Дата свадьбы',
    marriagePlace: 'Место свадьбы',
    divorceDate: 'Дата развода',
    children: 'Дети',
    multiSelectHint: 'Удерживайте Ctrl/Cmd для выбора нескольких',
    eventPerson: 'Персона',
    eventType: 'Тип события',
    eventDate: 'Дата',
    eventPlace: 'Место',
    eventDesc: 'Описание',
    evtBirth: 'Рождение',
    evtDeath: 'Смерть',
    evtMarriage: 'Бракосочетание',
    evtDivorce: 'Развод',
    evtGraduation: 'Окончание учёбы',
    evtImmigration: 'Эмиграция',
    evtMilitary: 'Военная служба',
    searchPeople: 'Поиск персон…',
    save: 'Сохранить',
    cancel: 'Отмена',
    close: 'Закрыть',
    edit: 'Редактировать',
    delete: 'Удалить',
    confirm: 'Подтвердить',
    confirmTitle: 'Подтверждение',
    confirmClearAll: 'Это удалит ВСЕ данные (персоны, семьи, события). Действие необратимо. Вы уверены?',
    confirmDeletePerson: 'Удалить эту персону? Связанные семьи и события тоже будут удалены.',
    confirmDeleteFamily: 'Удалить запись о семье?',
    confirmDeleteEvent: 'Удалить это событие?',
    treeEmpty: 'В вашем семейном дереве ещё нет людей. Нажмите «+ Добавить персону», чтобы начать.',
    peopleEmpty: 'Персоны не добавлены.',
    familiesEmpty: 'Семьи не добавлены.',
    eventsEmpty: 'События не добавлены.',
    savedOK: 'Сохранено.',
    deletedOK: 'Удалено.',
    clearedOK: 'Все данные очищены.',
    importOK: 'Импорт выполнен.',
    importError: 'Ошибка импорта. Проверьте формат файла.',
    rdfCopied: 'RDF скопирован в буфер.',
    noFirstName: 'Введите имя.',
    personDetail: 'Данные персоны',
    detailRelatives: 'Родственники',
    detailEvents: 'События',
    parents: 'Родители',
    spouse: 'Супруг(а) / Партнёр',
    siblings: 'Братья / Сёстры',
    alive: 'Жив(а)',
    deceased: 'Умер(ла)',
    unknown: 'Неизвестно',
    years: 'лет',
    familyOf: 'Семья',
    and: 'и',
  }
};

// ================================================================
// State
// ================================================================
const STATE = {
  lang: localStorage.getItem('mhg_lang') || 'en',
  people: [],     // [{id, firstName, lastName, maidenName, gender, birthDate, birthPlace, deathDate, deathPlace, occupation, nationality, religion, education, notes, fatherId, motherId}]
  families: [],   // [{id, fatherId, motherId, marriageDate, marriagePlace, divorceDate, childrenIds:[]}]
  events: [],     // [{id, personId, type, date, place, description}]
  currentView: 'tree',
  editingPersonId: null,
  editingFamilyId: null,
  editingEventId: null,
  confirmCallback: null,
};

const LS_KEY = 'mhg_data';

// ================================================================
// Persistence (localStorage)
// ================================================================
function loadData() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const d = JSON.parse(raw);
      STATE.people   = d.people   || [];
      STATE.families = d.families || [];
      STATE.events   = d.events   || [];
    }
  } catch(e) { console.warn('Load error', e); }
}

function saveData() {
  localStorage.setItem(LS_KEY, JSON.stringify({
    people:   STATE.people,
    families: STATE.families,
    events:   STATE.events,
  }));
}

// ================================================================
// Helpers
// ================================================================
function uid() {
  return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function t(key) {
  return (I18N[STATE.lang] || I18N.en)[key] || key;
}

function personName(p) {
  if (!p) return '?';
  return [p.firstName, p.lastName].filter(Boolean).join(' ') || p.firstName || '?';
}

function personById(id) { return STATE.people.find(p => p.id === id); }
function familyById(id) { return STATE.families.find(f => f.id === id); }
function eventById(id)  { return STATE.events.find(e => e.id === id); }

function showToast(msg, type='') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast' + (type ? ' ' + type : '');
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 2600);
}

function genderIcon(g) {
  if (g === 'male')   return '👨';
  if (g === 'female') return '👩';
  return '🧑';
}

function formatDate(d) {
  if (!d) return '';
  return d; // ISO date string shown as-is
}

function calcAge(birthDate, deathDate) {
  if (!birthDate) return null;
  const end = deathDate ? new Date(deathDate) : new Date();
  const start = new Date(birthDate);
  const age = end.getFullYear() - start.getFullYear() -
    (end.getMonth() < start.getMonth() ||
     (end.getMonth() === start.getMonth() && end.getDate() < start.getDate()) ? 1 : 0);
  return age;
}

// ================================================================
// i18n application
// ================================================================
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = t(key);
    if (el.tagName === 'OPTION') { el.textContent = txt; }
    else { el.textContent = txt; }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.title = t('appTitle') + ' — Family Tree';
}

// ================================================================
// Navigation
// ================================================================
function switchView(view) {
  STATE.currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.querySelector(`.nav-btn[data-view="${view}"]`).classList.add('active');
  renderView(view);
}

function renderView(view) {
  if (view === 'tree')     renderTree();
  if (view === 'people')   renderPeople();
  if (view === 'families') renderFamilies();
  if (view === 'events')   renderEvents();
  if (view === 'data')     renderRDF();
}

// ================================================================
// PEOPLE VIEW
// ================================================================
function renderPeople(filter='') {
  const grid  = document.getElementById('people-grid');
  const empty = document.getElementById('people-empty');
  const people = STATE.people.filter(p =>
    !filter || personName(p).toLowerCase().includes(filter.toLowerCase())
  );
  if (!people.length) { grid.innerHTML = ''; empty.style.display = ''; return; }
  empty.style.display = 'none';
  grid.innerHTML = people.map(p => {
    const age    = calcAge(p.birthDate, p.deathDate);
    const dates  = [p.birthDate, p.deathDate].filter(Boolean).join(' – ') || '';
    const gender = p.gender || 'other';
    return `<div class="person-card ${gender}" data-id="${p.id}">
      <div class="card-avatar">${genderIcon(p.gender)}</div>
      <div class="card-name">${escHtml(personName(p))}</div>
      <div class="card-dates">${escHtml(dates)}${age !== null ? ` (${age} ${t('years')})` : ''}</div>
      <div class="card-actions">
        <button class="card-btn" onclick="openPersonDetail('${p.id}')">${t('edit')}</button>
        <button class="card-btn danger" onclick="confirmDeletePerson('${p.id}')">${t('delete')}</button>
      </div>
    </div>`;
  }).join('');
}

// ================================================================
// FAMILIES VIEW
// ================================================================
function renderFamilies() {
  const grid  = document.getElementById('families-grid');
  const empty = document.getElementById('families-empty');
  if (!STATE.families.length) { grid.innerHTML = ''; empty.style.display = ''; return; }
  empty.style.display = 'none';
  grid.innerHTML = STATE.families.map(f => {
    const p1 = personById(f.fatherId);
    const p2 = personById(f.motherId);
    const names = [p1, p2].filter(Boolean).map(personName);
    const title = names.length
      ? `${t('familyOf')} ${names.join(' ' + t('and') + ' ')}`
      : t('navFamilies');
    const children = (f.childrenIds || []).map(cid => personById(cid)).filter(Boolean);
    const childList = children.map(personName).join(', ');
    return `<div class="family-card" data-id="${f.id}">
      <div class="family-title">👨‍👩‍👧 ${escHtml(title)}</div>
      <div class="family-meta">${f.marriageDate ? '💍 ' + f.marriageDate : ''}${f.marriagePlace ? ' · ' + escHtml(f.marriagePlace) : ''}</div>
      ${childList ? `<div class="family-meta">👶 ${escHtml(childList)}</div>` : ''}
      <div class="card-actions">
        <button class="card-btn" onclick="openFamilyModal('${f.id}')">${t('edit')}</button>
        <button class="card-btn danger" onclick="confirmDeleteFamily('${f.id}')">${t('delete')}</button>
      </div>
    </div>`;
  }).join('');
}

// ================================================================
// EVENTS VIEW
// ================================================================
const EVENT_ICONS = {
  birth:'🎂', death:'⚰️', marriage:'💍', divorce:'💔',
  graduation:'🎓', immigration:'✈️', military:'🎖️', other:'📌'
};

function renderEvents() {
  const list  = document.getElementById('events-list');
  const empty = document.getElementById('events-empty');
  if (!STATE.events.length) { list.innerHTML = ''; empty.style.display = ''; return; }
  empty.style.display = 'none';
  const sorted = [...STATE.events].sort((a,b) => (a.date||'') < (b.date||'') ? -1 : 1);
  list.innerHTML = sorted.map(e => {
    const person = personById(e.personId);
    const icon   = EVENT_ICONS[e.type] || '📌';
    const typeLabel = t('evt' + capitalize(e.type)) || e.type;
    return `<div class="event-item ${e.type}">
      <div class="event-icon">${icon}</div>
      <div class="event-info">
        <div class="event-title">${typeLabel}${person ? ': ' + escHtml(personName(person)) : ''}</div>
        <div class="event-meta">${e.date ? '📅 ' + e.date : ''}${e.place ? ' · 📍 ' + escHtml(e.place) : ''}</div>
        ${e.description ? `<div class="event-meta">${escHtml(e.description)}</div>` : ''}
      </div>
      <div class="event-actions">
        <button class="card-btn" onclick="openEventModal('${e.id}')">${t('edit')}</button>
        <button class="card-btn danger" onclick="confirmDeleteEvent('${e.id}')">${t('delete')}</button>
      </div>
    </div>`;
  }).join('');
}

// ================================================================
// TREE VIEW — SVG-based family tree
// ================================================================
function renderTree() {
  const svg    = document.getElementById('tree-svg');
  const empty  = document.getElementById('tree-empty');
  const container = document.getElementById('tree-container');

  if (!STATE.people.length) {
    svg.style.display = 'none';
    empty.style.display = '';
    return;
  }
  empty.style.display = 'none';
  svg.style.display = '';

  const NODE_W = 140, NODE_H = 60, GAP_X = 30, GAP_Y = 80;

  // Build tree layout using simple generational approach
  // Find roots: people with no known parents in STATE
  function getParentsOf(p) {
    const ids = [];
    if (p.fatherId) ids.push(p.fatherId);
    if (p.motherId) ids.push(p.motherId);
    return ids;
  }
  function getChildrenOf(pid) {
    const direct = STATE.people.filter(p => p.fatherId === pid || p.motherId === pid);
    const fromFamilies = STATE.families
      .filter(f => f.fatherId === pid || f.motherId === pid)
      .flatMap(f => (f.childrenIds||[]).map(cid => personById(cid)).filter(Boolean));
    const all = [...direct, ...fromFamilies];
    return [...new Map(all.map(p => [p.id, p])).values()];
  }

  // Assign generation levels via BFS
  const levels = {};
  const roots  = STATE.people.filter(p => !p.fatherId && !p.motherId);
  const queue  = roots.map(p => ({ p, gen: 0 }));
  const visited = new Set();
  while (queue.length) {
    const { p, gen } = queue.shift();
    if (visited.has(p.id)) continue;
    visited.add(p.id);
    levels[p.id] = gen;
    getChildrenOf(p.id).forEach(c => {
      if (!visited.has(c.id)) queue.push({ p: c, gen: gen + 1 });
    });
  }
  // Anyone not yet placed
  STATE.people.forEach(p => { if (levels[p.id] === undefined) levels[p.id] = 0; });

  // Group by generation
  const gens = {};
  STATE.people.forEach(p => {
    const g = levels[p.id] || 0;
    if (!gens[g]) gens[g] = [];
    gens[g].push(p);
  });

  // Layout positions
  const pos = {};
  const genKeys = Object.keys(gens).map(Number).sort((a,b)=>a-b);
  let maxWidth = 0;
  genKeys.forEach((g, gi) => {
    const row = gens[g];
    const rowW = row.length * (NODE_W + GAP_X);
    if (rowW > maxWidth) maxWidth = rowW;
    row.forEach((p, i) => {
      pos[p.id] = {
        x: i * (NODE_W + GAP_X) + 10,
        y: gi * (NODE_H + GAP_Y) + 10,
      };
    });
  });

  const totalH = genKeys.length * (NODE_H + GAP_Y) + 40;
  svg.setAttribute('viewBox', `0 0 ${Math.max(maxWidth + 20, 400)} ${totalH}`);
  svg.setAttribute('height', totalH);

  // Draw edges
  let edgesHTML = '';
  STATE.people.forEach(p => {
    const pPos = pos[p.id];
    if (!pPos) return;
    if (p.fatherId && pos[p.fatherId]) {
      const fp = pos[p.fatherId];
      edgesHTML += `<path class="tree-link" d="M${fp.x+NODE_W/2},${fp.y+NODE_H} C${fp.x+NODE_W/2},${fp.y+NODE_H+GAP_Y/2} ${pPos.x+NODE_W/2},${pPos.y-GAP_Y/2} ${pPos.x+NODE_W/2},${pPos.y}" />`;
    }
    if (p.motherId && pos[p.motherId]) {
      const mp = pos[p.motherId];
      edgesHTML += `<path class="tree-link" d="M${mp.x+NODE_W/2},${mp.y+NODE_H} C${mp.x+NODE_W/2},${mp.y+NODE_H+GAP_Y/2} ${pPos.x+NODE_W/2},${pPos.y-GAP_Y/2} ${pPos.x+NODE_W/2},${pPos.y}" />`;
    }
  });
  // Family children edges
  STATE.families.forEach(f => {
    const p1 = pos[f.fatherId], p2 = pos[f.motherId];
    (f.childrenIds||[]).forEach(cid => {
      const cp = pos[cid];
      if (p1 && cp) edgesHTML += `<path class="tree-link" d="M${p1.x+NODE_W/2},${p1.y+NODE_H} C${p1.x+NODE_W/2},${p1.y+NODE_H+GAP_Y/2} ${cp.x+NODE_W/2},${cp.y-GAP_Y/2} ${cp.x+NODE_W/2},${cp.y}" />`;
      if (p2 && cp) edgesHTML += `<path class="tree-link" d="M${p2.x+NODE_W/2},${p2.y+NODE_H} C${p2.x+NODE_W/2},${p2.y+NODE_H+GAP_Y/2} ${cp.x+NODE_W/2},${cp.y-GAP_Y/2} ${cp.x+NODE_W/2},${cp.y}" />`;
    });
  });

  // Draw nodes
  let nodesHTML = '';
  STATE.people.forEach(p => {
    const px = pos[p.id];
    if (!px) return;
    const fill = p.gender === 'male' ? '#dbeafe'
               : p.gender === 'female' ? '#fce7f3'
               : '#f0f0f0';
    const stroke = p.gender === 'male' ? '#4a90d9'
                 : p.gender === 'female' ? '#e07b9a'
                 : '#aaa';
    const name = personName(p);
    const shortName = name.length > 16 ? name.slice(0,15) + '…' : name;
    const year = p.birthDate ? p.birthDate.slice(0,4) : '';
    const deathYear = p.deathDate ? p.deathDate.slice(0,4) : '';
    const yearStr = year + (deathYear ? '–' + deathYear : '');
    nodesHTML += `<g class="tree-node" onclick="openPersonDetail('${p.id}')" style="cursor:pointer">
      <rect x="${px.x}" y="${px.y}" width="${NODE_W}" height="${NODE_H}"
            fill="${fill}" stroke="${stroke}" stroke-width="2" rx="8"/>
      <text x="${px.x+NODE_W/2}" y="${px.y+22}" text-anchor="middle"
            font-size="12" font-weight="bold" fill="#212529">${escHtml(shortName)}</text>
      <text x="${px.x+NODE_W/2}" y="${px.y+40}" text-anchor="middle"
            font-size="11" fill="#6c757d">${escHtml(yearStr)}</text>
    </g>`;
  });

  svg.innerHTML = edgesHTML + nodesHTML;
}

// ================================================================
// RDF / Turtle serialization
// ================================================================
const MHG = 'https://bpmbpm.github.io/myheritage/ontology#';
const BASE = 'https://bpmbpm.github.io/myheritage/data/';

function escTurtle(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function generateRDF() {
  const lines = [];
  lines.push(`@prefix rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .`);
  lines.push(`@prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#> .`);
  lines.push(`@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .`);
  lines.push(`@prefix foaf:   <http://xmlns.com/foaf/0.1/> .`);
  lines.push(`@prefix mhg:    <${MHG}> .`);
  lines.push(`@prefix :       <${BASE}> .`);
  lines.push('');
  lines.push(`# Named graph for this family tree`);
  lines.push(`:familyTree {`);
  lines.push('');

  STATE.people.forEach(p => {
    lines.push(`  :person_${p.id}`);
    lines.push(`    a mhg:Person ;`);
    lines.push(`    mhg:personId "${escTurtle(p.id)}" ;`);
    if (p.firstName)   lines.push(`    mhg:firstName "${escTurtle(p.firstName)}" ;`);
    if (p.lastName)    lines.push(`    mhg:lastName "${escTurtle(p.lastName)}" ;`);
    if (p.maidenName)  lines.push(`    mhg:maidenName "${escTurtle(p.maidenName)}" ;`);
    if (p.gender)      lines.push(`    mhg:gender "${p.gender}" ;`);
    if (p.birthDate)   lines.push(`    mhg:birthDate "${p.birthDate}"^^xsd:date ;`);
    if (p.birthPlace)  lines.push(`    mhg:birthPlace "${escTurtle(p.birthPlace)}" ;`);
    if (p.deathDate)   lines.push(`    mhg:deathDate "${p.deathDate}"^^xsd:date ;`);
    if (p.deathPlace)  lines.push(`    mhg:deathPlace "${escTurtle(p.deathPlace)}" ;`);
    if (p.occupation)  lines.push(`    mhg:occupation "${escTurtle(p.occupation)}" ;`);
    if (p.nationality) lines.push(`    mhg:nationality "${escTurtle(p.nationality)}" ;`);
    if (p.religion)    lines.push(`    mhg:religion "${escTurtle(p.religion)}" ;`);
    if (p.education)   lines.push(`    mhg:education "${escTurtle(p.education)}" ;`);
    if (p.notes)       lines.push(`    mhg:notes "${escTurtle(p.notes)}" ;`);
    if (p.fatherId)    lines.push(`    mhg:hasFather :person_${p.fatherId} ;`);
    if (p.motherId)    lines.push(`    mhg:hasMother :person_${p.motherId} ;`);
    // Remove trailing semicolon on last property
    const last = lines[lines.length - 1];
    lines[lines.length - 1] = last.replace(/ ;$/, ' .') ;
    lines.push('');
  });

  STATE.families.forEach(f => {
    lines.push(`  :family_${f.id}`);
    lines.push(`    a mhg:Family ;`);
    lines.push(`    mhg:familyId "${escTurtle(f.id)}" ;`);
    if (f.fatherId)      lines.push(`    mhg:familyMember :person_${f.fatherId} ;`);
    if (f.motherId)      lines.push(`    mhg:familyMember :person_${f.motherId} ;`);
    if (f.marriageDate)  lines.push(`    mhg:marriageDate "${f.marriageDate}"^^xsd:date ;`);
    if (f.marriagePlace) lines.push(`    mhg:marriagePlace "${escTurtle(f.marriagePlace)}" ;`);
    if (f.divorceDate)   lines.push(`    mhg:divorceDate "${f.divorceDate}"^^xsd:date ;`);
    (f.childrenIds||[]).forEach(cid => {
      lines.push(`    mhg:familyMember :person_${cid} ;`);
    });
    const last2 = lines[lines.length - 1];
    lines[lines.length - 1] = last2.replace(/ ;$/, ' .');
    lines.push('');
  });

  STATE.events.forEach(e => {
    const typeClass = capitalize(e.type);
    lines.push(`  :event_${e.id}`);
    lines.push(`    a mhg:${typeClass === 'Other' ? 'Event' : typeClass} ;`);
    if (e.personId)     lines.push(`    mhg:participant :person_${e.personId} ;`);
    if (e.date)         lines.push(`    mhg:eventDate "${e.date}"^^xsd:date ;`);
    if (e.place)        lines.push(`    mhg:eventPlace "${escTurtle(e.place)}" ;`);
    if (e.description)  lines.push(`    mhg:eventDescription "${escTurtle(e.description)}" ;`);
    const last3 = lines[lines.length - 1];
    lines[lines.length - 1] = last3.replace(/ ;$/, ' .');
    lines.push('');
  });

  lines.push('}');
  return lines.join('\n');
}

function renderRDF() {
  document.getElementById('rdf-output').textContent = generateRDF();
}

// ================================================================
// RDF Import (basic Turtle parser for our own format)
// ================================================================
function importRDF(text) {
  // Simple regex-based parser for our own generated Turtle/TriG
  try {
    const people = [], families = [], events = [];

    function extractBlock(type, id) {
      const re = new RegExp(`:${type}_${id}[\\s\\S]*?(?=\\s*:\\w|\\s*}|$)`, 'g');
      return text.match(re) || [];
    }

    function val(block, prop) {
      const m = block.match(new RegExp(`mhg:${prop}\\s+"([^"]*)"(?:\\^\\^[^;.]*)?\\s*[;.]`));
      return m ? m[1] : '';
    }
    function ref(block, prop) {
      const m = block.match(new RegExp(`mhg:${prop}\\s+:person_(\\w+)`));
      return m ? m[1] : '';
    }
    function allRefs(block, prop) {
      const re = new RegExp(`mhg:${prop}\\s+:person_(\\w+)`, 'g');
      const ids = [];
      let m;
      while ((m = re.exec(block)) !== null) ids.push(m[1]);
      return ids;
    }

    // Extract person IDs
    const personIds = [...text.matchAll(/:person_(\w+)\s/g)].map(m=>m[1]);
    const uniquePersonIds = [...new Set(personIds)];
    uniquePersonIds.forEach(id => {
      const re = new RegExp(`:person_${id}[\\s\\S]*?(?=\\n\\s*:\\w|\\n\\s*}|$)`);
      const m = text.match(re);
      if (!m) return;
      const block = m[0];
      if (!block.includes('mhg:Person')) return;
      people.push({
        id,
        firstName:   val(block, 'firstName'),
        lastName:    val(block, 'lastName'),
        maidenName:  val(block, 'maidenName'),
        gender:      val(block, 'gender'),
        birthDate:   val(block, 'birthDate'),
        birthPlace:  val(block, 'birthPlace'),
        deathDate:   val(block, 'deathDate'),
        deathPlace:  val(block, 'deathPlace'),
        occupation:  val(block, 'occupation'),
        nationality: val(block, 'nationality'),
        religion:    val(block, 'religion'),
        education:   val(block, 'education'),
        notes:       val(block, 'notes'),
        fatherId:    ref(block, 'hasFather'),
        motherId:    ref(block, 'hasMother'),
      });
    });

    const familyIds = [...text.matchAll(/:family_(\w+)\s/g)].map(m=>m[1]);
    const uniqueFamilyIds = [...new Set(familyIds)];
    uniqueFamilyIds.forEach(id => {
      const re = new RegExp(`:family_${id}[\\s\\S]*?(?=\\n\\s*:\\w|\\n\\s*}|$)`);
      const m = text.match(re);
      if (!m) return;
      const block = m[0];
      const members = allRefs(block, 'familyMember');
      families.push({
        id,
        fatherId:      members[0] || '',
        motherId:      members[1] || '',
        marriageDate:  val(block, 'marriageDate'),
        marriagePlace: val(block, 'marriagePlace'),
        divorceDate:   val(block, 'divorceDate'),
        childrenIds:   members.slice(2),
      });
    });

    STATE.people   = people;
    STATE.families = families;
    STATE.events   = events;
    saveData();
    renderView(STATE.currentView);
    showToast(t('importOK'), 'success');
  } catch(e) {
    console.error(e);
    showToast(t('importError'), 'error');
  }
}

// ================================================================
// Excel Export / Import
// ================================================================
function exportExcel() {
  const wb = XLSX.utils.book_new();

  // Sheet 1: People
  const peopleHeaders = ['ID','First Name','Last Name','Maiden Name','Gender',
    'Birth Date','Birth Place','Death Date','Death Place',
    'Occupation','Nationality','Religion','Education',
    'Father ID','Mother ID','Notes'];
  const peopleRows = STATE.people.map(p => [
    p.id, p.firstName, p.lastName, p.maidenName, p.gender,
    p.birthDate, p.birthPlace, p.deathDate, p.deathPlace,
    p.occupation, p.nationality, p.religion, p.education,
    p.fatherId, p.motherId, p.notes,
  ]);
  const wsP = XLSX.utils.aoa_to_sheet([peopleHeaders, ...peopleRows]);
  XLSX.utils.book_append_sheet(wb, wsP, 'People');

  // Sheet 2: Families
  const famHeaders = ['ID','Father ID','Mother ID','Marriage Date','Marriage Place','Divorce Date','Children IDs (semicolon-separated)'];
  const famRows = STATE.families.map(f => [
    f.id, f.fatherId, f.motherId, f.marriageDate, f.marriagePlace, f.divorceDate,
    (f.childrenIds||[]).join(';'),
  ]);
  const wsF = XLSX.utils.aoa_to_sheet([famHeaders, ...famRows]);
  XLSX.utils.book_append_sheet(wb, wsF, 'Families');

  // Sheet 3: Events
  const evtHeaders = ['ID','Person ID','Type','Date','Place','Description'];
  const evtRows = STATE.events.map(e => [
    e.id, e.personId, e.type, e.date, e.place, e.description,
  ]);
  const wsE = XLSX.utils.aoa_to_sheet([evtHeaders, ...evtRows]);
  XLSX.utils.book_append_sheet(wb, wsE, 'Events');

  XLSX.writeFile(wb, 'myheritage_export.xlsx');
}

function importExcel(file) {
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = new Uint8Array(ev.target.result);
      const wb   = XLSX.read(data, { type: 'array' });

      // People sheet
      const wsP = wb.Sheets['People'] || wb.Sheets[wb.SheetNames[0]];
      const peopleRows = XLSX.utils.sheet_to_json(wsP, { header: 1, defval: '' });
      const people = [];
      for (let i = 1; i < peopleRows.length; i++) {
        const r = peopleRows[i];
        if (!r[0] && !r[1]) continue;
        people.push({
          id:          String(r[0] || uid()),
          firstName:   String(r[1] || ''),
          lastName:    String(r[2] || ''),
          maidenName:  String(r[3] || ''),
          gender:      String(r[4] || ''),
          birthDate:   String(r[5] || ''),
          birthPlace:  String(r[6] || ''),
          deathDate:   String(r[7] || ''),
          deathPlace:  String(r[8] || ''),
          occupation:  String(r[9] || ''),
          nationality: String(r[10] || ''),
          religion:    String(r[11] || ''),
          education:   String(r[12] || ''),
          fatherId:    String(r[13] || ''),
          motherId:    String(r[14] || ''),
          notes:       String(r[15] || ''),
        });
      }

      // Families sheet
      const wsF = wb.Sheets['Families'];
      const families = [];
      if (wsF) {
        const famRows = XLSX.utils.sheet_to_json(wsF, { header: 1, defval: '' });
        for (let i = 1; i < famRows.length; i++) {
          const r = famRows[i];
          if (!r[0]) continue;
          families.push({
            id:           String(r[0] || uid()),
            fatherId:     String(r[1] || ''),
            motherId:     String(r[2] || ''),
            marriageDate: String(r[3] || ''),
            marriagePlace:String(r[4] || ''),
            divorceDate:  String(r[5] || ''),
            childrenIds:  String(r[6] || '').split(';').filter(Boolean),
          });
        }
      }

      // Events sheet
      const wsE = wb.Sheets['Events'];
      const events = [];
      if (wsE) {
        const evtRows = XLSX.utils.sheet_to_json(wsE, { header: 1, defval: '' });
        for (let i = 1; i < evtRows.length; i++) {
          const r = evtRows[i];
          if (!r[0]) continue;
          events.push({
            id:          String(r[0] || uid()),
            personId:    String(r[1] || ''),
            type:        String(r[2] || 'other'),
            date:        String(r[3] || ''),
            place:       String(r[4] || ''),
            description: String(r[5] || ''),
          });
        }
      }

      STATE.people   = people;
      STATE.families = families;
      STATE.events   = events;
      saveData();
      renderView(STATE.currentView);
      showToast(t('importOK'), 'success');
    } catch(e) {
      console.error(e);
      showToast(t('importError'), 'error');
    }
  };
  reader.readAsArrayBuffer(file);
}

// ================================================================
// Person Modal
// ================================================================
function openPersonModal(personId) {
  STATE.editingPersonId = personId || null;
  const p = personId ? personById(personId) : null;

  document.getElementById('modal-person-title').textContent = p ? t('editPerson') : t('addPerson');

  // Populate dropdowns with all people except current
  const others = STATE.people.filter(x => x.id !== personId);
  const opts = '<option value="">--</option>' + others.map(x =>
    `<option value="${x.id}">${escHtml(personName(x))}</option>`).join('');
  document.getElementById('p-father').innerHTML = opts;
  document.getElementById('p-mother').innerHTML = opts;

  // Fill form
  const fields = ['firstName','lastName','maidenName','gender','birthDate','birthPlace',
    'deathDate','deathPlace','occupation','nationality','religion','education','notes'];
  fields.forEach(f => {
    const el = document.getElementById('p-' + f);
    if (el) el.value = p ? (p[f] || '') : '';
  });
  if (p && p.fatherId) document.getElementById('p-father').value = p.fatherId;
  if (p && p.motherId) document.getElementById('p-mother').value = p.motherId;

  document.getElementById('modal-person').style.display = '';
  document.getElementById('p-firstName').focus();
}

function savePerson() {
  const firstName = document.getElementById('p-firstName').value.trim();
  if (!firstName) { showToast(t('noFirstName'), 'error'); return; }

  const fields = ['firstName','lastName','maidenName','gender','birthDate','birthPlace',
    'deathDate','deathPlace','occupation','nationality','religion','education','notes'];
  const data = {};
  fields.forEach(f => { data[f] = document.getElementById('p-' + f).value.trim(); });
  data.fatherId = document.getElementById('p-father').value;
  data.motherId = document.getElementById('p-mother').value;

  if (STATE.editingPersonId) {
    const idx = STATE.people.findIndex(p => p.id === STATE.editingPersonId);
    if (idx >= 0) STATE.people[idx] = { ...STATE.people[idx], ...data };
  } else {
    data.id = uid();
    STATE.people.push(data);
  }

  saveData();
  closeModal('modal-person');
  renderView(STATE.currentView);
  showToast(t('savedOK'), 'success');
}

// ================================================================
// Family Modal
// ================================================================
function openFamilyModal(familyId) {
  STATE.editingFamilyId = familyId || null;
  const f = familyId ? familyById(familyId) : null;

  document.getElementById('modal-family-title').textContent = f ? t('editFamily') : t('addFamily');

  const opts = '<option value="">--</option>' + STATE.people.map(p =>
    `<option value="${p.id}">${escHtml(personName(p))}</option>`).join('');
  document.getElementById('f-father').innerHTML = opts;
  document.getElementById('f-mother').innerHTML = opts;

  const childOpts = STATE.people.map(p =>
    `<option value="${p.id}">${escHtml(personName(p))}</option>`).join('');
  document.getElementById('f-children').innerHTML = childOpts;

  if (f) {
    document.getElementById('f-father').value = f.fatherId || '';
    document.getElementById('f-mother').value = f.motherId || '';
    document.getElementById('f-marriageDate').value = f.marriageDate || '';
    document.getElementById('f-marriagePlace').value = f.marriagePlace || '';
    document.getElementById('f-divorceDate').value = f.divorceDate || '';
    // Select children
    const childSel = document.getElementById('f-children');
    Array.from(childSel.options).forEach(opt => {
      opt.selected = (f.childrenIds||[]).includes(opt.value);
    });
  } else {
    document.getElementById('f-father').value = '';
    document.getElementById('f-mother').value = '';
    document.getElementById('f-marriageDate').value = '';
    document.getElementById('f-marriagePlace').value = '';
    document.getElementById('f-divorceDate').value = '';
    Array.from(document.getElementById('f-children').options).forEach(o => o.selected = false);
  }

  document.getElementById('modal-family').style.display = '';
}

function saveFamily() {
  const childSel = document.getElementById('f-children');
  const childrenIds = Array.from(childSel.selectedOptions).map(o => o.value);
  const data = {
    fatherId:      document.getElementById('f-father').value,
    motherId:      document.getElementById('f-mother').value,
    marriageDate:  document.getElementById('f-marriageDate').value,
    marriagePlace: document.getElementById('f-marriagePlace').value.trim(),
    divorceDate:   document.getElementById('f-divorceDate').value,
    childrenIds,
  };

  if (STATE.editingFamilyId) {
    const idx = STATE.families.findIndex(f => f.id === STATE.editingFamilyId);
    if (idx >= 0) STATE.families[idx] = { ...STATE.families[idx], ...data };
  } else {
    data.id = uid();
    STATE.families.push(data);
  }

  saveData();
  closeModal('modal-family');
  renderView(STATE.currentView);
  showToast(t('savedOK'), 'success');
}

// ================================================================
// Event Modal
// ================================================================
function openEventModal(eventId) {
  STATE.editingEventId = eventId || null;
  const e = eventId ? eventById(eventId) : null;

  document.getElementById('modal-event-title').textContent = e ? t('editEvent') : t('addEvent');

  const opts = '<option value="">--</option>' + STATE.people.map(p =>
    `<option value="${p.id}">${escHtml(personName(p))}</option>`).join('');
  document.getElementById('e-person').innerHTML = opts;

  if (e) {
    document.getElementById('e-person').value = e.personId || '';
    document.getElementById('e-type').value   = e.type     || 'other';
    document.getElementById('e-date').value   = e.date     || '';
    document.getElementById('e-place').value  = e.place    || '';
    document.getElementById('e-desc').value   = e.description || '';
  } else {
    document.getElementById('e-person').value = '';
    document.getElementById('e-type').value   = 'birth';
    document.getElementById('e-date').value   = '';
    document.getElementById('e-place').value  = '';
    document.getElementById('e-desc').value   = '';
  }

  document.getElementById('modal-event').style.display = '';
}

function saveEvent() {
  const data = {
    personId:    document.getElementById('e-person').value,
    type:        document.getElementById('e-type').value,
    date:        document.getElementById('e-date').value,
    place:       document.getElementById('e-place').value.trim(),
    description: document.getElementById('e-desc').value.trim(),
  };

  if (STATE.editingEventId) {
    const idx = STATE.events.findIndex(e => e.id === STATE.editingEventId);
    if (idx >= 0) STATE.events[idx] = { ...STATE.events[idx], ...data };
  } else {
    data.id = uid();
    STATE.events.push(data);
  }

  saveData();
  closeModal('modal-event');
  renderView(STATE.currentView);
  showToast(t('savedOK'), 'success');
}

// ================================================================
// Person Detail Modal
// ================================================================
function openPersonDetail(personId) {
  const p = personById(personId);
  if (!p) return;

  STATE.editingPersonId = personId;
  document.getElementById('detail-name').textContent = personName(p);

  const father   = personById(p.fatherId);
  const mother   = personById(p.motherId);
  const children = STATE.people.filter(x => x.fatherId === p.id || x.motherId === p.id);
  const famChildren = STATE.families
    .filter(f => f.fatherId === p.id || f.motherId === p.id)
    .flatMap(f => (f.childrenIds||[]).map(cid => personById(cid)).filter(Boolean));
  const allChildren = [...new Map([...children, ...famChildren].map(x=>[x.id,x])).values()];

  const spouses = STATE.families
    .filter(f => f.fatherId === p.id || f.motherId === p.id)
    .map(f => personById(f.fatherId === p.id ? f.motherId : f.fatherId))
    .filter(Boolean);

  const personEvents = STATE.events.filter(e => e.personId === p.id);
  const age = calcAge(p.birthDate, p.deathDate);

  const rows = [
    [t('gender'),      p.gender ? t(p.gender) : ''],
    [t('birthDate'),   p.birthDate || ''],
    [t('birthPlace'),  p.birthPlace || ''],
    [p.deathDate ? t('deathDate') : '',  p.deathDate || ''],
    [p.deathDate ? t('deathPlace') : '', p.deathPlace || ''],
    [t('occupation'),  p.occupation || ''],
    [t('nationality'), p.nationality || ''],
    [t('religion'),    p.religion || ''],
    [t('education'),   p.education || ''],
    [p.maidenName ? t('maidenName') : '', p.maidenName || ''],
    [age !== null ? (p.deathDate ? t('years') : t('alive')) : '', age !== null ? age + ' ' + t('years') : ''],
    [t('notes'),       p.notes || ''],
  ].filter(r => r[0] && r[1]);

  let html = `<table>${rows.map(r => `<tr><td>${escHtml(r[0])}</td><td>${escHtml(r[1])}</td></tr>`).join('')}</table>`;

  html += `<div class="detail-section"><h4>${t('detailRelatives')}</h4><table>`;
  if (father) html += `<tr><td>${t('father')}</td><td>${escHtml(personName(father))}</td></tr>`;
  if (mother) html += `<tr><td>${t('mother')}</td><td>${escHtml(personName(mother))}</td></tr>`;
  spouses.forEach(s => {
    html += `<tr><td>${t('spouse')}</td><td>${escHtml(personName(s))}</td></tr>`;
  });
  allChildren.forEach(c => {
    html += `<tr><td>Child</td><td>${escHtml(personName(c))}</td></tr>`;
  });
  html += `</table></div>`;

  if (personEvents.length) {
    html += `<div class="detail-section"><h4>${t('detailEvents')}</h4><table>`;
    personEvents.forEach(e => {
      const icon = EVENT_ICONS[e.type] || '📌';
      const label = t('evt' + capitalize(e.type)) || e.type;
      html += `<tr><td>${icon} ${label}</td><td>${e.date || ''} ${e.place ? '· ' + escHtml(e.place) : ''}</td></tr>`;
    });
    html += `</table></div>`;
  }

  document.getElementById('detail-body').innerHTML = html;
  document.getElementById('modal-person-detail').style.display = '';
}

// ================================================================
// Delete operations
// ================================================================
function confirmDeletePerson(id) {
  STATE.confirmCallback = () => deletePerson(id);
  document.getElementById('confirm-message').textContent = t('confirmDeletePerson');
  document.getElementById('modal-confirm').style.display = '';
}

function deletePerson(id) {
  STATE.people   = STATE.people.filter(p => p.id !== id);
  STATE.families = STATE.families.filter(f => f.fatherId !== id && f.motherId !== id);
  STATE.families.forEach(f => { f.childrenIds = (f.childrenIds||[]).filter(c => c !== id); });
  STATE.events   = STATE.events.filter(e => e.personId !== id);
  saveData();
  closeModal('modal-person-detail');
  renderView(STATE.currentView);
  showToast(t('deletedOK'));
}

function confirmDeleteFamily(id) {
  STATE.confirmCallback = () => deleteFamily(id);
  document.getElementById('confirm-message').textContent = t('confirmDeleteFamily');
  document.getElementById('modal-confirm').style.display = '';
}

function deleteFamily(id) {
  STATE.families = STATE.families.filter(f => f.id !== id);
  saveData();
  renderView(STATE.currentView);
  showToast(t('deletedOK'));
}

function confirmDeleteEvent(id) {
  STATE.confirmCallback = () => deleteEvent(id);
  document.getElementById('confirm-message').textContent = t('confirmDeleteEvent');
  document.getElementById('modal-confirm').style.display = '';
}

function deleteEvent(id) {
  STATE.events = STATE.events.filter(e => e.id !== id);
  saveData();
  renderView(STATE.currentView);
  showToast(t('deletedOK'));
}

function clearAll() {
  STATE.confirmCallback = () => {
    STATE.people   = [];
    STATE.families = [];
    STATE.events   = [];
    saveData();
    renderView(STATE.currentView);
    showToast(t('clearedOK'));
  };
  document.getElementById('confirm-message').textContent = t('confirmClearAll');
  document.getElementById('modal-confirm').style.display = '';
}

// ================================================================
// Modal helpers
// ================================================================
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// ================================================================
// Utility
// ================================================================
function escHtml(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

// ================================================================
// Event Listeners
// ================================================================
function bindEvents() {
  // Nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  // Language
  document.getElementById('lang-select').addEventListener('change', (e) => {
    STATE.lang = e.target.value;
    localStorage.setItem('mhg_lang', STATE.lang);
    applyI18n();
    renderView(STATE.currentView);
  });

  // Add person buttons
  document.getElementById('btn-add-person').addEventListener('click', () => openPersonModal(null));
  document.getElementById('btn-add-person2').addEventListener('click', () => openPersonModal(null));
  document.getElementById('btn-add-family').addEventListener('click', () => openFamilyModal(null));
  document.getElementById('btn-add-event').addEventListener('click', () => openEventModal(null));

  // Save buttons
  document.getElementById('btn-save-person').addEventListener('click', savePerson);
  document.getElementById('btn-save-family').addEventListener('click', saveFamily);
  document.getElementById('btn-save-event').addEventListener('click', saveEvent);

  // Detail modal actions
  document.getElementById('btn-edit-person').addEventListener('click', () => {
    const id = STATE.editingPersonId;
    closeModal('modal-person-detail');
    openPersonModal(id);
  });
  document.getElementById('btn-delete-person').addEventListener('click', () => {
    confirmDeletePerson(STATE.editingPersonId);
  });

  // Confirm modal
  document.getElementById('btn-confirm-ok').addEventListener('click', () => {
    closeModal('modal-confirm');
    if (STATE.confirmCallback) { STATE.confirmCallback(); STATE.confirmCallback = null; }
  });

  // Clear all
  document.getElementById('btn-clear-all').addEventListener('click', clearAll);

  // Export Excel
  document.getElementById('btn-export-excel').addEventListener('click', exportExcel);

  // Import Excel
  document.getElementById('btn-import-excel').addEventListener('click', () => {
    document.getElementById('file-import-excel').click();
  });
  document.getElementById('file-import-excel').addEventListener('change', (e) => {
    if (e.target.files[0]) { importExcel(e.target.files[0]); e.target.value = ''; }
  });

  // Export RDF
  document.getElementById('btn-export-rdf').addEventListener('click', () => {
    const blob = new Blob([generateRDF()], { type: 'text/turtle' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'myheritage.trig';
    a.click();
  });

  // Copy RDF
  document.getElementById('btn-copy-rdf').addEventListener('click', () => {
    navigator.clipboard.writeText(generateRDF()).then(() => showToast(t('rdfCopied'), 'success'));
  });

  // Import RDF
  document.getElementById('btn-import-rdf').addEventListener('click', () => {
    document.getElementById('file-import-rdf').click();
  });
  document.getElementById('file-import-rdf').addEventListener('change', (e) => {
    if (!e.target.files[0]) return;
    const reader = new FileReader();
    reader.onload = ev => { importRDF(ev.target.result); };
    reader.readAsText(e.target.files[0]);
    e.target.value = '';
  });

  // Close modals via close buttons
  document.querySelectorAll('.modal-close, [data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.modal;
      if (id) closeModal(id);
    });
  });

  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.style.display = 'none';
    });
  });

  // People search
  document.getElementById('people-search').addEventListener('input', (e) => {
    renderPeople(e.target.value);
  });

  // Keyboard: Enter to save in person modal
  document.getElementById('modal-person').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') savePerson();
    if (e.key === 'Escape') closeModal('modal-person');
  });
}

// ================================================================
// Bootstrap
// ================================================================
function init() {
  loadData();
  // Set language selector
  document.getElementById('lang-select').value = STATE.lang;
  applyI18n();
  bindEvents();
  renderView('tree');
}

document.addEventListener('DOMContentLoaded', init);
