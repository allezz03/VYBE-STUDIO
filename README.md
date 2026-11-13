# VYBE STUDIO — Streetwear E-commerce Demo

Progetto portfolio realizzato con React, Vite e React Router.

## Avvio locale
```bash
npm install
npm run dev
```

## Build di produzione
```bash
npm run build
npm run preview
```

## Funzionalità demo
- Homepage e catalogo streetwear responsive.
- Filtri per categoria, ricerca e ordinamento.
- Schede prodotto con selezione di taglia e colore.
- Carrello condiviso tra le pagine: aggiunta, quantità, rimozione e totale.
- Checkout dimostrativo, senza pagamenti e senza salvataggio ordini.
- Nessun account e nessun database.
- Carrello in memoria: rimane disponibile durante la navigazione client-side e si svuota al refresh, come richiesto.

## Stack e versioni
Le versioni principali sono fissate in `package.json` per evitare aggiornamenti automatici inattesi:
- React 18.3.1
- React DOM 18.3.1
- React Router DOM 6.28.2
- Vite 6.4.6

## Pubblicazione su Vercel
- Framework Preset: Vite
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

`vercel.json` contiene il rewrite SPA per consentire l'apertura diretta delle pagine interne.
`vite.config.js` abilita le Source Maps per la diagnosi.

## Aggiornamento GitHub
Sostituire i file del repository con il contenuto di questo archivio, quindi eseguire il commit sulla branch `main`. Vercel avvierà il deployment collegato.

Nota: il progetto non richiede variabili d'ambiente.
