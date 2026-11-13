# VYBE STUDIO — Streetwear E-commerce Demo

Demo React + Vite + React Router. Nessun account, backend o pagamento.

## Avvio locale
```bash
npm install
npm run dev
```

## Funzionalità
- Navigazione client-side con React Router: i link interni cambiano pagina senza refresh completo.
- Carrello condiviso tra tutte le pagine tramite un unico ShopProvider montato alla radice dell'app.
- Aggiunta rapida dal catalogo e aggiunta dalla scheda prodotto dopo aver scelto una taglia.
- Modifica quantità, rimozione articoli, subtotale, spedizione e checkout simulato.
- Il carrello è solo in memoria: si svuota se ricarichi la pagina, come richiesto per la demo.

## Pubblicazione Vercel
Framework preset: Vite
Build command: `npm run build`
Output directory: `dist`
Install command: `npm install`

`vercel.json` contiene il fallback SPA per permettere l'apertura diretta delle route.
Dopo aver sostituito i file su GitHub, attendi che Vercel completi il nuovo deployment. Poi prova in una finestra anonima o con Ctrl+Shift+R per evitare di visualizzare vecchi file in cache.
