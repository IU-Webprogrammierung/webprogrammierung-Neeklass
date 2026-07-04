# Einleitung

Dieses Repository enthält eine statische Website zum Thema Trading Card Games.
Die Seite wurde für den Kurs `DLBUXPWP01` an der IU Internationale Hochschule erstellt.

# Techstack

Mein Projekt basiert auf dem Web-Framework [Astro](https://astro.build/).
Ich habe Astro gewählt, weil es komponentenbasiertes Arbeiten ermöglicht. Gleichzeitig kann ich weiterhin normale HTML-Syntax schreiben und CSS gezielt einsetzen.

> The `.astro` UI language is a superset of HTML: any valid HTML is valid Astro templating syntax! So, if you can write HTML, you can write Astro components!

(siehe [Astro Docs](https://docs.astro.build/en/concepts/why-astro/#easy-to-use))

**Liste des Stacks:**
- **Astro** ^5.0.0 als Framework
- **HTML** für semantische Seitenstruktur
- **CSS** für Styling, Layout und Responsiveness
- **npm** als Paketmanager
- **Node.js** als Laufzeitumgebung

Die zentrale Konfiguration befindet sich in `astro.config.mjs`.
Dort ist `srcDir: "."` gesetzt.
Dadurch verwendet Astro das Repository-Root als Quellverzeichnis, statt wie üblich einen separaten `src/`-Ordner zu erwarten.

# Struktur

- `pages/`: alle Seiten der Website, u. a. `index.astro` (Startseite), `ygo.astro`, `lor.astro`, `mtg.astro` (Inhaltsseiten je Spiel), `*-decklist.astro` (Decklisten), `legal.astro` (Impressum) und `404.astro` (Fehlerseite)
- `components/`: wiederverwendbare Bausteine, u. a. `Header.astro` (Hauptnavigation) und `Footer.astro` (Footer-Navigation)
- `layouts/`: `BaseLayout.astro` als gemeinsames Seitengerüst (Kopf-/Fußbereich, eingebundene Styles)
- `styles/`: `base.css`, `components.css`, `layout.css` für Farbvariablen, Grundlayout, Navigation und Kartenraster
- `public/img/`: Bilder und Logos der Website
- `public/js/`: Kleine, eigenständige JavaScript-Dateien (z. B. für den Theme-Umschalter)
- `astro.config.mjs`: zentrale Astro-Konfiguration (`srcDir`, `base`)

# Errungenschaften und Erkenntnisse

Diese Auflistung fasst die im Rahmen der Aufgabe eingesetzten Technologien, Methoden und Erkenntnisse stichpunktartig zusammen

## Responsive Design / Breakpoints

- Mobile-First-Ansatz: Basis-Layout ist einspaltig, ab einem Breakpoint bei `768px` (`@media (min-width: 768px)`) wird auf mehrspaltige Layouts umgeschaltet (`site-header` wird zur Zeile, `game-grid` auf 3 Spalten, `deck-grid` auf breitere Kacheln)
- `game-grid` und `deck-grid` nutzen zusätzlich `grid-template-columns: repeat(auto-fit, minmax(...))`, wodurch das Rasterlayout auch zwischen den definierten Breakpoints flüssig auf die verfügbare Breite reagiert
- Bilder sind grundsätzlich fluid (`max-width: 100%; height: auto`), damit sie sich ohne zusätzliche Media Queries an ihren Container anpassen

## Interaktionsmöglichkeiten

- Umschalten zwischen Hell- und Dunkelmodus über einen Button in der Kopfzeile (`#theme-toggle`), inklusive Speicherung der Auswahl in `localStorage` und automatischer Erkennung der Systemeinstellung via `prefers-color-scheme`
- Hover- und Fokuszustände für Navigation, Karten und Buttons (Farb-, Rahmen- und Hebe-Effekte), die auch per Tastatur über `:focus-visible` erreichbar sind
- Skip-Link ("Zum Hauptinhalt springen"), der erst bei Tastaturfokus sichtbar wird, für schnellen Zugriff auf den Hauptinhalt
- "Nach oben"-Link im Footer, der per Anker-Sprung (`href="#top"`) zurück zum Seitenanfang führt
- Aktive Seite wird in der Navigation über `aria-current="page"` visuell hervorgehoben, auch bei verschachtelten Unterseiten (z. B. Deckliste zeigt die zugehörige Übersichtsseite als aktiv an)

## Animationen und Übergänge

- Sanfte CSS-`transition`-Effekte (Farben, Rahmen, `transform`, `box-shadow`) bei Hover/Fokus auf Navigationselementen, Buttons und Karten, u. a. leichtes Anheben (`translateY`) und Skalieren (`scale`) von Kartenbildern
- Übergang zwischen Hell- und Dunkelmodus wird ebenfalls animiert (`background-color`/`color`-Transition auf `body`)
- Alle Animationen respektieren `prefers-reduced-motion: reduce` und werden für Nutzer:innen mit entsprechender Systemeinstellung deaktiviert

##  HTML-Features

- Semantisches HTML5 (`header`, `nav`, `main`, `footer`, `section`, `figure`) statt generischer `div`-Strukturen
- Native `loading="lazy"` und `decoding="async"` Attribute auf allen Deckkarten-Bildern zur Performance-Optimierung beim Laden vieler Bilder
- Verwendung von `aria-labelledby`, `aria-label`, `aria-current` und `aria-pressed` zur semantischen Auszeichnung von Abschnitten, Navigation und dem Theme-Toggle-Button
- Eigene 404-Fehlerseite (`404.astro`) sowie ein Impressum (`legal.astro`) mit Quellenangaben zu verwendeten Marken/Bildern

## CSS-Features

- CSS Custom Properties (`--color-*`) für ein zentrales Farbschema, das für den Dark Mode einfach über `html[data-theme="dark"]` überschrieben wird
- Natives CSS-Nesting (verschachtelte Selektoren ohne Präprozessor wie Sass) in allen Stylesheets
- `color-mix()` für dynamisch berechnete, halbtransparente Akzentfarben in Fokus-/Hover-Schatten
- CSS Grid mit `repeat(auto-fit, minmax(...))` für automatisch umbrechende, responsive Kartenraster
- Gezielte Media Queries für Breakpoints (`min-width: 768px`) und Nutzerpräferenzen (`prefers-reduced-motion`)

## Barrierefreiheit

- Semantisches HTML, aussagekräftige Alt-Texte für alle Bilder, sichtbare Fokuszustände (`:focus-visible`) und durchgängige Tastaturbedienbarkeit
- Skip-Link zum Hauptinhalt sowie sinnvolle Sprungmarken/IDs für Überschriften (`aria-labelledby`)
- Klickflächen (Navigation, Theme-Toggle, Footer-Links) mit einer Mindesthöhe von `44px` gemäß Empfehlungen für Touch-Bedienbarkeit
- Unterstützung von `prefers-reduced-motion`, damit Animationen bei entsprechender Systemeinstellung deaktiviert werden
- Orientierung an den [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C

## JavaScript

- Eine einzige, schlanke Vanilla-JS-Datei (`public/js/theme-toggle.js`), keine externen JS-Bibliotheken oder Frameworks im Client (z. B. kein jQuery/React)
- Persistenz der Theme-Wahl über `localStorage` mit Fallback, falls diese nicht verfügbar ist (`try/catch`)
- Erkennung der bevorzugten Farbeinstellung über `window.matchMedia("(prefers-color-scheme: dark)")`, sofern noch keine explizite Nutzer:innenwahl gespeichert ist
- Aktualisierung von Button-Text und `aria-pressed`-Status passend zum aktuellen Theme für Screenreader-Nutzer:innen

## Framework

- Einziges eingesetztes Framework ist [Astro](https://astro.build/) (`^5.0.0`) für komponentenbasiertes Arbeiten mit klassischem HTML/CSS
- Bewusster Verzicht auf zusätzliche UI-/CSS-Frameworks (z. B. Bootstrap, Tailwind) oder JS-Bibliotheken, um die Seite möglichst schlank zu halten

## Refactorings

- Migration der ursprünglich statischen HTML-Seiten auf Astro-Komponenten (`feat: migrate homepage to astro`, `feat: migrate yugioh decklist to astro`, u. a.), um Header, Footer und Layout zentral in `components/` bzw. `layouts/` zu pflegen statt sie auf jeder Seite zu duplizieren
- Umstellung der Kartenraster von generischen `div`-Strukturen auf semantische Listen (`refactor: convert deck grids to semantic lists`)
- Überführung der Stylesheets auf natives CSS-Nesting (`refactor: organize css with native nesting`) zur besseren Lesbarkeit verwandter Selektoren
- Nachträgliche Verbesserung der Navigations-Barrierefreiheit in mehreren Iterationen (`fix: improve navigation accessibility`)

## Git-Workflow

- Arbeiten in eigenen Feature-Branches je Projektphase bzw. Teilbereich (u. a. `feat/frontpage-phase1`, `feat/decklist-phase1`, `feat/phase-2`, `feat/phase-3`, `cleanup-phase-1`), die anschließend per Merge in `main` zusammengeführt wurden
- Konsistente, präfixierte Commit-Nachrichten nach dem Muster `feat:`, `fix:`, `style:`, `refactor:`, `chore:`, `docs:` und `performance:`, um Änderungen klar zu kategorisieren
- Kleine, thematisch abgegrenzte Commits statt weniger großer Commits, um die Historie nachvollziehbar zu halten

## Deployment / CI

- Automatisiertes Deployment über eine GitHub-Actions-Workflow-Datei (`.github/workflows/deploy.yml`), die bei jedem Push auf `main` automatisch `npm ci`, `astro build` sowie den Upload und das Deployment auf GitHub Pages ausführt

# Entwicklung / Lokale Ausführung

Alle folgenden Befehle werden im Repository-Root ausgeführt, also in dem Ordner, in dem auch `package.json` liegt. Es ist kein Wechsel in einen Unterordner nötig.

Voraussetzung ist eine installierte Node.js-Version mit npm.

## Installation

```bash
npm install
```

Installiert alle Abhängigkeiten (u. a. Astro) gemäß `package.json`.

## Entwicklungsserver

```bash
npm run dev
```

Startet den lokalen Entwicklungsserver mit Hot-Reload. Die URL wird im Terminal ausgegeben.

Da in `astro.config.mjs` `base: "/webprogrammierung-Neeklass"` gesetzt ist, ist die Seite nicht direkt unter `http://localhost:4321/`, sondern unter `http://localhost:4321/webprogrammierung-Neeklass/` erreichbar.

## Produktionsbuild

```bash
npm run build
```

Erzeugt den statischen Produktionsbuild im Ordner `dist/`.

## Preview des Builds

```bash
npm run preview
```

Zeigt den zuvor erzeugten Produktionsbuild lokal an (ebenfalls unter dem Pfad `/webprogrammierung-Neeklass/`).

# Sonstiges

[LinkedIn](https://www.linkedin.com/in/niklasdittmann/)
