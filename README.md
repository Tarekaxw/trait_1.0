# trait_1.0

Dies ist ein einfaches Demo-Projekt, das einen minimalen Prototypen der in der Diskussion beschriebenen App zeigt. Der Server basiert auf Node.js und Express und bietet einfache Endpunkte für Journaling, To-dos und Kalender-Ereignisse.

## Installation

```bash
npm install
```

## Starten des Servers

```bash
node server.js
```

Der Server läuft standardmäßig auf Port `3000`.

## Endpunkte

- `GET /journals` – Liste aller Journaleinträge
- `POST /journals` – Neuen Eintrag anlegen (`{ "text": "..." }`)
- `GET /todos` – Liste aller To-dos
- `POST /todos` – Neues To-do anlegen (`{ "text": "..." }`)
- `GET /events` – Liste aller Kalenderereignisse
- `POST /events` – Neues Ereignis anlegen (`{ "title": "...", "time": "..." }`)

Dies ist nur ein Minimalbeispiel und dient als Ausgangspunkt für eine umfangreichere Umsetzung.
