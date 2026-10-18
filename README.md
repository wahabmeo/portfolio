# Abdul Wahab — Biology Teacher Portfolio

Personal portfolio for an IGCSE & O Level Biology teacher in Manas, Kyrgyzstan.
Built with React, React Router and Vite.

## Pages

- **Home** — introduction, experience, simulators, topics, resources, testimonials, gallery
- **Teaching** — IGCSE 0610 and O Level 5090 topics
- **Simulators** — 12 interactive biology labs (files in `public/simulators/`)
- **Resources** — searchable notes, worksheets and lesson plans
- **Gallery**, **About**, **Contact**

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Edit content

All text, photos and links live in [`src/data.js`](src/data.js).
To add a simulator, put its HTML file in `public/simulators/` and add an entry to `simulators` in `src/data.js`.

## Build

```bash
npm run build
```

The finished site is written to `dist/`.
