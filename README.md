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

# Barrierefreiheit

Bei der Umsetzung wurde auf semantisches HTML, aussagekräftige Alt-Texte, sichtbare Fokuszustände, einen Skip-Link zum Hauptinhalt sowie durchgängige Tastaturbedienbarkeit geachtet.
Als grobe Orientierung dienten die Richtlinien von W3C.
([Web Content Accessibility Guidelines - WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/))

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
