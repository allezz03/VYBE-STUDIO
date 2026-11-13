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
- Homepage fashion/editorial responsive
- Catalogo con categorie, ricerca e ordinamento prezzi
- Schede prodotto con colori e taglie
- Carrello interattivo durante la sessione
- Checkout dimostrativo con riepilogo ordine
- Pagine About, Shipping & Returns e Privacy
- Routing Vercel configurato in `vercel.json`

## Semplificazioni della demo
Non è previsto login/registrazione e non serve collegare Supabase.
Il carrello non viene salvato: svuotando/ricaricando la pagina o chiudendo la sessione, i prodotti selezionati si perdono.
Il checkout è una simulazione: non salva ordini su un database e non effettua pagamenti.

## GitHub
```bash
git add .
git commit -m "Simplify VYBE demo: remove auth and persistence"
git push
```

## Vercel
Framework Preset: **Vite** · Root Directory: `./` · Build: `npm run build` · Output: `dist` · Install: `npm install`.

Le immagini sono URL Unsplash di esempio: per un uso commerciale sostituiscile con immagini con licenza adeguata.
