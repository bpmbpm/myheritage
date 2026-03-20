# MyHeritage — Browser Genealogy App

A full-featured, browser-based genealogy application inspired by [MyHeritage](https://www.myheritage.com).

**Live demo (GitHub Pages):**  
RUN https://bpmbpm.github.io/myheritage/ver1/

---

## Features

- 🌳 **Family Tree** — interactive SVG family tree visualization
- 👥 **People** — manage persons with full biographical details
- 👨‍👩‍👧 **Families** — link spouses and children into family units
- 📅 **Events** — record life events (birth, death, marriage, graduation, immigration, etc.)
- 🌐 **Bilingual** — full English and Russian UI
- 💾 **RDF Storage** — data stored as Turtle / TriG triples in browser localStorage
- 📖 **Ontology** — `ontology.ttl` based on FOAF, BIO, schema.org, GEDCOM
- 📊 **Excel Export/Import** — 3-sheet XLSX with example data
- 🗑️ **Clear All** — one-click data reset with confirmation
- 📋 **RDF View** — live Turtle/TriG serialization, copy or download

---

## Files

| File | Description |
|---|---|
| `index.html` | Main application (single-page app) |
| `style.css` | Application styles |
| `app.js` | Application logic (i18n, RDF, Excel, tree rendering) |
| `ontology.ttl` | Genealogy ontology (Turtle/RDF) |
| `manual.md` | Detailed user manual (EN + RU) |
| `example_data.xlsx` | Sample family tree data for import |
| `generate_example.js` | Node.js script to regenerate example_data.xlsx |

---

## Quick Start

1. Open `index.html` in a modern browser (Chrome, Firefox, Edge, Safari).
2. Click **"+ Add Person"** and fill in the form.
3. Add more people and create **Families** to link them.
4. Export with **"Export Excel"** or **"Export RDF"**.

See [manual.md](manual.md) for the full user guide in English and Russian.

---

## Import Example Data

1. Click **"⬆ Import Excel"** in the header.
2. Select `example_data.xlsx` from this folder.
3. The Petrov family tree (3 generations, 8 people) will be loaded.

---

## Data Format

Data is serialized as **TriG** (a named-graph extension of Turtle):

```turtle
@prefix mhg: <https://bpmbpm.github.io/myheritage/ontology#> .
@prefix :    <https://bpmbpm.github.io/myheritage/data/> .

:familyTree {
  :person_p001
    a mhg:Person ;
    mhg:firstName "Alexander" ;
    mhg:lastName "Petrov" ;
    mhg:gender "male" ;
    mhg:birthDate "1920-05-10"^^xsd:date .
}
```

---

## Technology

- Pure browser JavaScript (no framework, no server)
- [SheetJS (xlsx)](https://sheetjs.com/) for Excel export/import (CDN)
- SVG for family tree rendering
- localStorage for persistence
- RDF/Turtle/TriG for data representation

---

## License

MIT
