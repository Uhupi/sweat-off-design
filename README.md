# Sweat-Off Design — Recycling Disposal Modul

Hallo Marianne,


Hier die Lösung der Aufgabe, mit allem was dazu gehört, damit ihr auch unter der Haube einen Einblick bekommt.

## Fragen & Antworten — Technische Entscheidungen

### 1. Wie würdest du das Modul umsetzen, damit das Design-Team Inhalte eigenständig austauschen kann, ohne dass der Code angepasst werden muss?

In der Regel bevorzuge ich, die von WordPress nativ vorgegebenen Felder zu verwenden.

Z.B. könnte "Recycling" der Name der Kategorie sein, in der sich die Seite befindet. Der Titel "So entsorgst du deine Produkte nachhaltig." könnte der Seitentitel sein. Für weitere Werte würde ich "Custom Fields" von WordPress verwenden.

Je nachdem, wie das Modul in WordPress eingesetzt wird z.B. als Block, kann es mit dem Content etwas komplexer werden. In dem Fall würde ich einen Gutenberg Block verwenden. Das Design-Team bearbeitet alles direkt im Gutenberg-Editor, kein Code-Zugriff nötig, und die Bilder werden aus der WordPress-Mediathek ausgewählt.

Die Produktnavigation würde als dynamisch verwaltbares Menü gespeichert werden.

### 2. Welche Maßnahmen würdest du ergreifen, um die Ladezeit des Moduls zu optimieren?

Ich habe ein paar Maßnahmen umgesetzt, die für dieses Projekt relevant sind:

- `loading="lazy"` auf Bildern
- `defer` am Script-Tag — blockiert das HTML-Parsing nicht
- CSS nach Breakpoint aufgeteilt mit `media`-Attribut — der Browser lädt nur das passende Stylesheet (`styles.mobile.css` / `styles.desktop.css`)
- Webpack mit `MiniCssExtractPlugin` extrahiert und minifiziert alle CSS-Dateien (`webpack.config.js`)
- Source Maps werden nur im Development-Mode generiert, nicht im Produktions-Build

**Weitere Maßnahmen, die ich nicht übernommen habe, aber möglich wären:**

- Produktbilder (`roll-on-open.png`, `roll-on-close.png`) im WebP-Format ausliefern für kleinere Dateigrößen
- `font-display: swap` in `_fonts.scss` sicherstellen, damit Text während des Schriftladens sichtbar bleibt
- In WordPress: Block-CSS wird erst eingebunden, wenn das Modul tatsächlich erst im Viewport vorhanden ist (lazyloading)

### 3. Wie würdest du das Modul in eine bestehende WordPress-Seite integrieren?

Ich würde es in einem neuen oder verwandten Plugin integrieren, ohne enge Kopplung an das aktive Theme. Wenn es aber eine stärkere Verbindung mit dem Theme hat, würde ich es als Teil des Themes ergänzen, eventuell als Child-Theme. Sollte für diesen Bereich bereits ein Custom Post Type Template vorhanden sein, macht es gegebenenfalls alles einfacher und ich implementiere einen entsprechenden Template.

### 4. Welche Rolle spielt Versionierung (Git) in deinem Workflow?

In diesem spezifischen Fall zeigt die Commit-Historie einen strukturierten, inkrementellen Ansatz. Du kannst sie hier ansehen https://github.com/Uhupi/sweat-off-design/commits/main/

## Projektstruktur

```
sweat-off-design/
├── src/
│   ├── main.js                  # Nav-Scroll-Logik (Vor/Zurück-Pfeile)
│   ├── styles.scss              # Basis-Styles & gemeinsame Komponenten
│   ├── styles.mobile.scss       # Mobile-spezifische Styles (<768px)
│   ├── styles.desktop.scss      # Desktop-spezifische Styles (>=768px)
│   ├── _fonts.scss              # Geogrotesque Schriftart-Deklarationen
│   └── _variables.scss          # SCSS-Variablen (Farben, Größen)
├── public/
│   ├── index.html               # Prototype-Einstiegspunkt
│   ├── main.js                  # Kompiliertes JS
│   ├── styles.css               # Kompiliertes Basis-CSS
│   ├── styles.mobile.css        # Kompiliertes Mobile-CSS
│   ├── styles.desktop.css       # Kompiliertes Desktop-CSS
│   └── assets/
│       ├── images/              # Produktbilder (roll-on-open.png, roll-on-close.png)
│       └── fonts/               # Geogrotesque Schriftdateien (.woff, .woff2)
├── webpack.config.js
└── package.json
```

## Entwicklung

```bash
npm install
npm run build        # Produktions-Build
npm run dev          # Entwicklungs-Build mit Source Maps
```