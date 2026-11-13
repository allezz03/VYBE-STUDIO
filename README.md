# VYBE STUDIO — Streetwear E-commerce Demo

Demo e-commerce portfolio realizzato con React, Vite e React Router.

## Avvio
```bash
npm install
npm run dev
```
Build:
```bash
npm run build
npm run preview
```

## Funzionalità
- Homepage streetwear editoriale, responsive e dark/high-contrast
- Catalogo con categorie, ricerca e ordinamento prezzi
- Schede prodotto con scelta taglia e colore
- Pulsante di aggiunta rapida al carrello direttamente dal catalogo
- Carrello interattivo: quantità, rimozione e riepilogo
- Checkout dimostrativo, senza pagamento né salvataggio ordini
- Nessuna autenticazione e nessun backend necessario
- Navigazione client-side con React Router
- Routing Vercel configurato in `vercel.json`

## Nota sul carrello
Il carrello resta disponibile mentre si naviga tra le pagine dell'app. Non viene salvato in localStorage: ricaricando il sito o chiudendo la scheda viene svuotato, come richiesto per la demo.

## GitHub
```bash
git add .
git commit -m "Improve VYBE navigation, cart and visual identity"
git push
```

## Vercel
Framework Preset: **Vite** · Root Directory: `./` · Build: `npm run build` · Output: `dist` · Install: `npm install`.
