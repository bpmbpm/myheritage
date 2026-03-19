/**
 * generate_example.js
 *
 * Generates example_data.xlsx with sample genealogy data.
 * Run with Node.js: node generate_example.js
 * Requires SheetJS: npm install xlsx
 *
 * The generated file can be imported directly into the MyHeritage app
 * via the "Import Excel" button.
 */

const XLSX = require('xlsx');

// ---- Sample People ----
const people = [
  { id:'p001', firstName:'Alexander', lastName:'Petrov', maidenName:'', gender:'male',
    birthDate:'1920-05-10', birthPlace:'St. Petersburg, Russia',
    deathDate:'1985-11-22', deathPlace:'Moscow, Russia',
    occupation:'Engineer', nationality:'Russian', religion:'Orthodox', education:'University',
    fatherId:'', motherId:'', notes:'Participated in WWII 1941-1945' },

  { id:'p002', firstName:'Maria', lastName:'Petrova', maidenName:'Ivanova', gender:'female',
    birthDate:'1923-08-30', birthPlace:'Moscow, Russia',
    deathDate:'2001-03-14', deathPlace:'Moscow, Russia',
    occupation:'Teacher', nationality:'Russian', religion:'Orthodox', education:'University',
    fatherId:'', motherId:'', notes:'Taught history at school #42' },

  { id:'p003', firstName:'Nikolai', lastName:'Petrov', maidenName:'', gender:'male',
    birthDate:'1948-02-14', birthPlace:'Moscow, Russia',
    deathDate:'', deathPlace:'',
    occupation:'Programmer', nationality:'Russian', religion:'', education:'University',
    fatherId:'p001', motherId:'p002', notes:'' },

  { id:'p004', firstName:'Elena', lastName:'Petrova', maidenName:'Sokolova', gender:'female',
    birthDate:'1950-07-01', birthPlace:'Leningrad, Russia',
    deathDate:'', deathPlace:'',
    occupation:'Doctor', nationality:'Russian', religion:'', education:'Medical Institute',
    fatherId:'', motherId:'', notes:'' },

  { id:'p005', firstName:'Dmitry', lastName:'Petrov', maidenName:'', gender:'male',
    birthDate:'1975-11-03', birthPlace:'Moscow, Russia',
    deathDate:'', deathPlace:'',
    occupation:'Software Developer', nationality:'Russian', religion:'', education:'University',
    fatherId:'p003', motherId:'p004', notes:'Lives in Berlin' },

  { id:'p006', firstName:'Anna', lastName:'Petrova', maidenName:'', gender:'female',
    birthDate:'1978-04-22', birthPlace:'Moscow, Russia',
    deathDate:'', deathPlace:'',
    occupation:'Architect', nationality:'Russian', religion:'', education:'Architecture Institute',
    fatherId:'p003', motherId:'p004', notes:'' },

  { id:'p007', firstName:'Ivan', lastName:'Sokolov', maidenName:'', gender:'male',
    birthDate:'1918-09-05', birthPlace:'Kazan, Russia',
    deathDate:'1943-07-12', deathPlace:'Kursk, Russia',
    occupation:'Soldier', nationality:'Russian', religion:'Orthodox', education:'High School',
    fatherId:'', motherId:'', notes:'Killed in Battle of Kursk' },

  { id:'p008', firstName:'Olga', lastName:'Sokolova', maidenName:'Volkova', gender:'female',
    birthDate:'1920-12-20', birthPlace:'Kazan, Russia',
    deathDate:'1999-06-08', deathPlace:'Kazan, Russia',
    occupation:'Nurse', nationality:'Russian', religion:'Orthodox', education:'Medical College',
    fatherId:'', motherId:'', notes:'' },
];

// ---- Sample Families ----
const families = [
  { id:'f001', fatherId:'p001', motherId:'p002',
    marriageDate:'1946-09-15', marriagePlace:'Moscow, Russia',
    divorceDate:'', childrenIds:'p003' },

  { id:'f002', fatherId:'p003', motherId:'p004',
    marriageDate:'1973-06-20', marriagePlace:'Moscow, Russia',
    divorceDate:'', childrenIds:'p005;p006' },

  { id:'f003', fatherId:'p007', motherId:'p008',
    marriageDate:'1940-05-01', marriagePlace:'Kazan, Russia',
    divorceDate:'', childrenIds:'p004' },
];

// ---- Sample Events ----
const events = [
  { id:'e001', personId:'p001', type:'birth',      date:'1920-05-10', place:'St. Petersburg, Russia', description:'' },
  { id:'e002', personId:'p001', type:'military',   date:'1941-06-22', place:'Soviet Union',           description:'Mobilized on the first day of WWII' },
  { id:'e003', personId:'p001', type:'death',       date:'1985-11-22', place:'Moscow, Russia',         description:'' },
  { id:'e004', personId:'p002', type:'birth',       date:'1923-08-30', place:'Moscow, Russia',         description:'' },
  { id:'e005', personId:'p002', type:'graduation',  date:'1945-06-01', place:'Moscow State University', description:'History Faculty' },
  { id:'e006', personId:'p003', type:'birth',       date:'1948-02-14', place:'Moscow, Russia',         description:'' },
  { id:'e007', personId:'p003', type:'graduation',  date:'1970-07-01', place:'Moscow Technical University', description:'Computer Science' },
  { id:'e008', personId:'p005', type:'birth',       date:'1975-11-03', place:'Moscow, Russia',         description:'' },
  { id:'e009', personId:'p005', type:'immigration', date:'2005-03-15', place:'Berlin, Germany',        description:'Relocated for work' },
  { id:'e010', personId:'p007', type:'death',       date:'1943-07-12', place:'Kursk, Russia',          description:'Battle of Kursk' },
];

// ---- Build workbook ----
const wb = XLSX.utils.book_new();

// People sheet
const peopleHeaders = [
  'ID','First Name','Last Name','Maiden Name','Gender',
  'Birth Date','Birth Place','Death Date','Death Place',
  'Occupation','Nationality','Religion','Education',
  'Father ID','Mother ID','Notes'
];
const peopleRows = people.map(p => [
  p.id, p.firstName, p.lastName, p.maidenName, p.gender,
  p.birthDate, p.birthPlace, p.deathDate, p.deathPlace,
  p.occupation, p.nationality, p.religion, p.education,
  p.fatherId, p.motherId, p.notes,
]);
const wsP = XLSX.utils.aoa_to_sheet([peopleHeaders, ...peopleRows]);
XLSX.utils.book_append_sheet(wb, wsP, 'People');

// Families sheet
const famHeaders = ['ID','Father ID','Mother ID','Marriage Date','Marriage Place','Divorce Date','Children IDs (semicolon-separated)'];
const famRows = families.map(f => [
  f.id, f.fatherId, f.motherId, f.marriageDate, f.marriagePlace, f.divorceDate, f.childrenIds
]);
const wsF = XLSX.utils.aoa_to_sheet([famHeaders, ...famRows]);
XLSX.utils.book_append_sheet(wb, wsF, 'Families');

// Events sheet
const evtHeaders = ['ID','Person ID','Type','Date','Place','Description'];
const evtRows = events.map(e => [
  e.id, e.personId, e.type, e.date, e.place, e.description
]);
const wsE = XLSX.utils.aoa_to_sheet([evtHeaders, ...evtRows]);
XLSX.utils.book_append_sheet(wb, wsE, 'Events');

XLSX.writeFile(wb, 'example_data.xlsx');
console.log('example_data.xlsx generated successfully.');
