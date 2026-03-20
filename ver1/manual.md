# MyHeritage — User Manual / Руководство пользователя

---

## English

### Overview

**MyHeritage** is a browser-based genealogy application that lets you build and manage your family tree entirely in the browser — no server required. Data is stored locally using [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and represented as **RDF Turtle / TriG** triples, following an ontology based on FOAF, BIO, schema.org, and GEDCOM standards.

---

### Quick Start

1. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
   _For GitHub Pages: navigate to `https://<your-username>.github.io/myheritage/ver1/`._
2. Click **"+ Add Person"** on the Family Tree or People tab.
3. Enter at least a **First Name** and click **Save**.
4. Add more people, then add **Families** to link spouses and children.
5. Use the **Events** tab to record life events (births, deaths, marriages, etc.).
6. Export at any time using **"Export Excel"** or **"Export RDF"**.

---

### Navigation Tabs

| Tab | Description |
|---|---|
| **Family Tree** | Graphical SVG visualization of parent–child relationships |
| **People** | Card grid of all persons, with search |
| **Families** | List of family units (couples + children) |
| **Events** | Timeline of life events for all people |
| **RDF Data** | Live Turtle/TriG serialization of all data |

---

### Adding a Person

1. Click **"+ Add Person"** (on the Tree or People tab).
2. Fill in the form:
   - **First Name** _(required)_
   - Last Name, Maiden Name
   - Gender (Male / Female / Other)
   - Birth Date, Birth Place
   - Death Date, Death Place
   - Occupation, Nationality, Religion, Education
   - Father, Mother _(select from already-added people)_
   - Notes
3. Click **Save**.

**Example:**
```
First Name: Ivan
Last Name:  Petrov
Gender:     Male
Birth Date: 1945-03-15
Birth Place: Moscow, Russia
Occupation:  Engineer
```

---

### Adding a Family

A *Family* represents a couple (and optionally their children).

1. Click **"+ Add Family"** on the Families tab.
2. Select **Father / Partner 1** and **Mother / Partner 2**.
3. Optionally enter a Marriage Date and Place, Divorce Date.
4. In the **Children** multi-select, hold **Ctrl** (Windows/Linux) or **Cmd** (Mac) and click to select multiple children.
5. Click **Save**.

---

### Adding a Life Event

Events capture key moments: births, deaths, marriages, graduations, immigration, military service, or any other event.

1. Click **"+ Add Event"** on the Events tab.
2. Select the **Person** this event relates to.
3. Choose the **Event Type**.
4. Enter the **Date** and **Place**.
5. Optionally add a **Description**.
6. Click **Save**.

---

### Family Tree Visualization

The **Family Tree** tab renders an SVG graph:
- Each person is a colored box (blue for male, pink for female, grey for other).
- Lines connect parents to children.
- Click any box to see full person details.
- The tree auto-scales to fit all people.

> **Tip:** If the tree looks cluttered, try organizing people into Families and use parent–child links via the Person form's Father/Mother fields.

---

### Editing & Deleting

- On the **People** tab, click **Edit** on a person card, or click the card to open details, then click **Edit**.
- Click **Delete** to remove a person. This also removes associated family memberships and events.
- On the **Families** and **Events** tabs, each item has **Edit** and **Delete** buttons.

---

### Switching Language

Click the language selector in the top-right corner:
- 🇬🇧 **English**
- 🇷🇺 **Русский**

The language preference is saved in the browser.

---

### Exporting to Excel

Click **"⬇ Export Excel"** in the header. An `.xlsx` file named `myheritage_export.xlsx` is downloaded with three sheets:

| Sheet | Contents |
|---|---|
| **People** | All persons with all attributes |
| **Families** | All family records |
| **Events** | All life events |

**Column layout — People sheet:**

| Column | Field |
|---|---|
| A | ID |
| B | First Name |
| C | Last Name |
| D | Maiden Name |
| E | Gender |
| F | Birth Date |
| G | Birth Place |
| H | Death Date |
| I | Death Place |
| J | Occupation |
| K | Nationality |
| L | Religion |
| M | Education |
| N | Father ID |
| O | Mother ID |
| P | Notes |

> **Note:** Children in the Families sheet are stored as semicolon-separated IDs (column G, e.g. `p1a2b;p3c4d`).

---

### Importing from Excel

1. Prepare an `.xlsx` file with the same column layout as described above (see `example_data.xlsx`).
2. Click **"⬆ Import Excel"** and select the file.
3. Existing data is **replaced** by the imported data.

> **Important:** IDs in the file must be consistent across sheets (Person IDs in People must match Father ID / Mother ID references in Families, etc.).

---

### Exporting RDF (Turtle/TriG)

Click **"⬇ Export RDF"** to download a `.trig` file containing all data as named-graph Turtle triples, following the `mhg:` ontology.

Example output:
```turtle
@prefix mhg: <https://bpmbpm.github.io/myheritage/ontology#> .
@prefix :    <https://bpmbpm.github.io/myheritage/data/> .

:familyTree {
  :person_p1a2b
    a mhg:Person ;
    mhg:firstName "Ivan" ;
    mhg:lastName "Petrov" ;
    mhg:gender "male" ;
    mhg:birthDate "1945-03-15"^^xsd:date .
}
```

---

### Importing RDF

1. Click the **"⬆ Import RDF"** button on the **RDF Data** tab.
2. Select a `.ttl` or `.trig` file that was previously exported from this application.
3. The data is parsed and loaded into the application.

---

### Clearing All Data

Click **"🗑 Clear All"** in the header. A confirmation dialog appears. Confirm to delete **all** people, families, and events from localStorage.

> ⚠️ This action is **irreversible**. Export your data first if you want to keep it.

---

### Data Persistence

- All data is stored in **browser localStorage** under the key `mhg_data`.
- Data persists between browser sessions on the same device and browser.
- Data is **not** shared between browsers or devices unless you export/import.
- For GitHub Pages deployments: the repository owner's data is stored in their own browser; no server-side storage is used.

---

### Ontology

The data schema follows `ontology.ttl` in the same folder, which defines classes and properties based on:
- **FOAF** (Friend of a Friend) — `foaf:Person`, `foaf:firstName`, `foaf:familyName`
- **BIO** (Biographical ontology) — `bio:Birth`, `bio:Death`, `bio:Marriage`
- **schema.org** — `schema:Person`, `schema:birthDate`, `schema:Place`
- **Wikidata** — cross-reference concepts

Key classes:
- `mhg:Person` — a human being
- `mhg:Family` — a family unit (couple + children)
- `mhg:Event` — a life event (birth, death, marriage, etc.)
- `mhg:Place` — a geographical location
- `mhg:Document` — a supporting document

---

### Troubleshooting

| Problem | Solution |
|---|---|
| Tree is empty after adding people | Make sure you set Father/Mother links, or add a Family record |
| Import fails | Check that the Excel file has the correct sheet names: `People`, `Families`, `Events` |
| Data disappeared | Data is in localStorage — check a different browser/device or restore from export |
| RDF does not parse | Only files exported by this app are supported for re-import |

---

---

## Русский

### Обзор

**MyHeritage** — браузерное приложение для генеалогии. Все данные хранятся локально в **localStorage** браузера в формате **RDF Turtle / TriG**, в соответствии с онтологией на основе FOAF, BIO, schema.org и стандарта GEDCOM. Для работы не требуется сервер.

---

### Быстрый старт

1. Откройте `index.html` в браузере (Chrome, Firefox, Edge, Safari).
   _GitHub Pages: `https://<ваш-логин>.github.io/myheritage/ver1/`._
2. Нажмите **«+ Добавить персону»** на вкладке «Семейное дерево» или «Персоны».
3. Введите хотя бы **Имя** и нажмите **«Сохранить»**.
4. Добавьте ещё людей, затем создайте **Семьи**, чтобы связать супругов и детей.
5. На вкладке **События** записывайте жизненные события.
6. Используйте **«Экспорт Excel»** или **«Экспорт RDF»** для сохранения данных.

---

### Вкладки навигации

| Вкладка | Описание |
|---|---|
| **Семейное дерево** | SVG-граф связей родитель–ребёнок |
| **Персоны** | Карточки всех людей с поиском |
| **Семьи** | Семейные единицы (пары + дети) |
| **События** | Хронология жизненных событий |
| **RDF Данные** | Turtle/TriG-сериализация всех данных |

---

### Добавление персоны

1. Нажмите **«+ Добавить персону»**.
2. Заполните форму:
   - **Имя** _(обязательно)_
   - Фамилия, Девичья фамилия
   - Пол (Мужской / Женский / Другой)
   - Дата и место рождения
   - Дата и место смерти
   - Профессия, Национальность, Религия, Образование
   - Отец, Мать _(выбрать из уже добавленных)_
   - Примечания
3. Нажмите **«Сохранить»**.

**Пример:**
```
Имя:              Иван
Фамилия:          Петров
Пол:              Мужской
Дата рождения:    1945-03-15
Место рождения:   Москва, Россия
Профессия:        Инженер
```

---

### Добавление семьи

*Семья* — пара супругов и, возможно, их дети.

1. Нажмите **«+ Добавить семью»** на вкладке «Семьи».
2. Выберите **Отца / Партнёра 1** и **Мать / Партнёра 2**.
3. При желании укажите Дату свадьбы, Место и Дату развода.
4. В списке **«Дети»** удерживайте **Ctrl** (Windows/Linux) или **Cmd** (Mac) и кликайте для выбора нескольких детей.
5. Нажмите **«Сохранить»**.

---

### Добавление события

1. Нажмите **«+ Добавить событие»** на вкладке «События».
2. Выберите **Персону**.
3. Укажите **Тип события**: Рождение, Смерть, Бракосочетание, Развод, Окончание учёбы, Эмиграция, Военная служба, Другое.
4. Введите **Дату** и **Место**.
5. При желании добавьте **Описание**.
6. Нажмите **«Сохранить»**.

---

### Редактирование и удаление

- На вкладке «Персоны» нажмите **«Редактировать»** или кликните по карточке → **«Редактировать»**.
- **«Удалить»** убирает персону вместе со связанными семьями и событиями.
- На вкладках «Семьи» и «События» у каждой записи есть кнопки **«Редактировать»** и **«Удалить»**.

---

### Смена языка

Нажмите на выпадающий список в правом верхнем углу:
- 🇬🇧 **English**
- 🇷🇺 **Русский**

Выбор языка сохраняется в браузере.

---

### Экспорт в Excel

Нажмите **«⬇ Экспорт Excel»**. Скачается файл `myheritage_export.xlsx` с тремя листами:

| Лист | Содержание |
|---|---|
| **People** | Все персоны со всеми атрибутами |
| **Families** | Все записи о семьях |
| **Events** | Все жизненные события |

**Колонки листа People:**

| Колонка | Поле |
|---|---|
| A | ID |
| B | Имя |
| C | Фамилия |
| D | Девичья фамилия |
| E | Пол |
| F | Дата рождения |
| G | Место рождения |
| H | Дата смерти |
| I | Место смерти |
| J | Профессия |
| K | Национальность |
| L | Религия |
| M | Образование |
| N | ID Отца |
| O | ID Матери |
| P | Примечания |

> **Примечание:** дети в листе Families указаны через точку с запятой в колонке G (например, `p1a2b;p3c4d`).

---

### Импорт из Excel

1. Подготовьте `.xlsx` файл в формате, описанном выше (см. `example_data.xlsx`).
2. Нажмите **«⬆ Импорт Excel»** и выберите файл.
3. Существующие данные **заменяются** импортированными.

> **Важно:** ID в файле должны быть согласованными — ID персон из листа People должны совпадать с Father ID / Mother ID в листе Families.

---

### Экспорт RDF

Нажмите **«⬇ Экспорт RDF»** — скачается файл `.trig` со всеми данными в виде троек именованного графа Turtle.

---

### Импорт RDF

1. На вкладке **«RDF Данные»** нажмите **«⬆ Импорт RDF»**.
2. Выберите файл `.ttl` или `.trig`, экспортированный из этого приложения.
3. Данные загружаются в приложение.

---

### Очистка всех данных

Нажмите **«🗑 Очистить всё»** в шапке. В диалоге подтвердите удаление — все персоны, семьи и события будут стёрты из localStorage.

> ⚠️ Действие **необратимо**. Предварительно экспортируйте данные.

---

### Хранение данных

- Данные хранятся в **localStorage** под ключом `mhg_data`.
- Данные сохраняются между сеансами в одном браузере на одном устройстве.
- Между браузерами и устройствами данные **не синхронизируются** — только через экспорт/импорт.
- При деплое на GitHub Pages данные хранятся в браузере владельца; серверное хранилище не используется.

---

### Онтология

Файл `ontology.ttl` определяет схему данных на основе:
- **FOAF** — `foaf:Person`, `foaf:firstName`
- **BIO** — `bio:Birth`, `bio:Death`, `bio:Marriage`
- **schema.org** — `schema:Person`, `schema:birthDate`, `schema:Place`

Основные классы:
- `mhg:Person` — человек
- `mhg:Family` — семья
- `mhg:Event` — жизненное событие
- `mhg:Place` — место
- `mhg:Document` — документ

---

### Устранение проблем

| Проблема | Решение |
|---|---|
| Дерево пустое после добавления людей | Укажите Отца/Мать в форме персоны или создайте Семью |
| Импорт не работает | Проверьте названия листов: `People`, `Families`, `Events` |
| Данные исчезли | Данные в localStorage — проверьте другой браузер или восстановите из экспорта |
| RDF не разбирается | Поддерживаются только файлы, экспортированные из этого приложения |
