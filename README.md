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

- `pages/index.astro`: Startseite mit Einführung zu TCGs und Navigation zu den drei Spielwelten
- `pages/ygo.astro`, `pages/lor.astro`, `pages/mtg.astro`: Inhaltsseiten zu den einzelnen Spielen
- `pages/*-decklist.astro`: Bildbasierte Decklisten
- `components/Header.astro`: Hauptnavigation mit aktivem Navigationszustand
- `components/Footer.astro`: Footer-Navigation
- `styles/base.css`, `styles/components.css`, `styles/layout.css`: Farbvariablen, Grundlayout, Navigation, Kartenraster und responsive Decklisten
- `pages/legal.astro`: Impressum, Marken-/Bildhinweise, Haftungsausschluss und Datenschutztext

# Barrierefreiheit

Bei der Umsetzung des Projekts wurde sich an die Richtlinien von W3C orientiert.
([Web Content Accessibility Guidelines - WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/))

# Entwicklung

In `package.json` sind drei Skripte definiert:

```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview"
}
```

Skripte:

- `npm run dev`: startet den lokalen Entwicklungsserver
- `npm run build`: erzeugt den statischen Produktionsbuild
- `npm run preview`: zeigt den gebauten Stand lokal an


# Sonstiges

[LinkedIn](https://www.linkedin.com/in/niklasdittmann/)
