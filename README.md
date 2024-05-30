# United Nations Resolution Tracker

Die United Nations Resolution Tracker ist eine Webanwendung, die entwickelt wurde, um die Resolutionen der Vereinten Nationen aus dem Jahr 2022 zu verarbeiten und visuell darzustellen. Die Anwendung ermöglicht es Benutzern, Abstimmungsergebnisse anzuzeigen, eine Weltkarte basierend auf den Abstimmungen der Länder einzufärben, Informationen zu Mitgliedstaaten der UN abzurufen, Allianzen auf der Welt zu erkunden und statistische Vergleiche zwischen zwei Ländern durchzuführen.

## Inhaltsverzeichnis

1. [Installation](#installation)
2. [Datenbankanbindung](#datenbankanbindung)
3. [Verwendung](#verwendung)
4. [Struktur der Anwendung](#struktur-der-anwendung)
5. [Danksagungen](#danksagungen)

## Installation

Um die Anwendung lokal zu installieren, führen Sie die folgenden Schritte aus:

1. Stellen Sie sicher, dass Sie [Node.js](https://nodejs.org/) auf Ihrem System installiert haben.

2. Klonen Sie dieses Repository auf Ihren Computer:

   ```bash
   git clone https://github.com/felixBtzr/UN-Resolution-Tracker-2022.git
   ```

3. Wechseln Sie in das Projektverzeichnis:

   ```bash
   cd UN-Resolution-Tracker-2022
   ```

4. Installieren Sie die erforderlichen Abhängigkeiten:

   ```bash
   npm install
   ```

## Verwendung

Starten Sie die Anwendung, indem Sie den folgenden Befehl ausführen:

```bash
npm start
```
oder
```bash
node src/app.js
```

Die Anwendung wird standardmäßig auf `http://localhost:80` verfügbar sein. Öffnen Sie Ihren Webbrowser und geben Sie diese URL ein, um auf die Anwendung zuzugreifen.

## Datenbankanbindung

Die United Nations Resolution Tracker-Anwendung nutzt eine PostgreSQL-Datenbank zur Speicherung von Daten. Die Verbindung zur Datenbank erfolgt mithilfe der 'pg'-Node.js-Bibliothek. Der folgende Codeausschnitt illustriert die Verbindungseinstellungen:
```js
const { Client } = require('pg');

const client = new Client({
    host: 'DBHost',
    database: 'meineDB',
    user: 'meinCoolerUser',
    password: 'superGeheim',
    port: 5432
});
```

## Struktur der Anwendung

Die Anwendung besteht aus den folgenden Hauptfunktionen:

- **Resolutionen:** Anzeige von Abstimmungsergebnissen und Einfärbung der Weltkarte basierend auf den Abstimmungen der Länder.

- **Mitgliedstaaten:** Abruf von Informationen zu den Mitgliedstaaten der Vereinten Nationen, mit Filteroptionen.

- **Allianzen:** Erkundung von verschiedenen Allianzen auf der Welt, wie NATO, EU, G7, etc.

- **Statistiken:** Vergleich von zwei Ländern anhand verschiedener Diagramme und statistischer Informationen.

## Danksagungen
Vielen Dank an die Monster Energy Inc., an die Red Bull GmbH und an die Philip Morris International Inc. für die tatkräftige Unterstützung während des Projekts.
