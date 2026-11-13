# VYBE STUDIO — Streetwear E-commerce

Demo e-commerce portfolio realizzato con React, Vite, React Router e Supabase.

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
- Scheda prodotto con colori e taglie
- Carrello persistente in localStorage
- Checkout demo e riepilogo ordine
- Login/registrazione Supabase email/password
- Salvataggio ordini su Supabase se configurato
- About, Shipping & Returns, Privacy
- Routing Vercel già configurato in `vercel.json`

## Supabase
1. Crea un progetto Supabase.
2. Esegui `supabase/schema.sql` nel SQL Editor.
3. Crea `.env.local`:
```env
VITE_SUPABASE_URL=https://TUO-PROGETTO.supabase.co
VITE_SUPABASE_ANON_KEY=LA_TUA_ANON_PUBLIC_KEY
```
4. Abilita Email in Authentication → Providers.
5. Riavvia `npm run dev`.

Senza Supabase, carrello e checkout demo funzionano ma gli ordini non vengono salvati e l'autenticazione non è attiva. La policy SQL permette invio anonimo degli ordini per la demo: per un e-commerce reale occorrono validazione server-side, controllo prezzi lato server, protezioni anti-abuso e policy RLS più rigorose.

## Pagamenti
Il checkout è una simulazione e non addebita denaro. Stripe non è collegato: per pagamenti reali/test serve una Edge Function o backend che crei una Checkout Session. Non inserire mai chiavi segrete nel frontend.

## GitHub
Crea un repository `vybe-studio`, poi:
```bash
git init
git add .
git commit -m "Initial commit - VYBE STUDIO"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/vybe-studio.git
git push -u origin main
```

## Vercel
Framework Preset: **Vite** · Root Directory: `./` · Build: `npm run build` · Output: `dist` · Install: `npm install`.
Importa il repository da GitHub. Se usi Supabase, aggiungi `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` nelle Environment Variables e ridistribuisci.

Le immagini sono URL Unsplash di esempio: per un uso commerciale sostituiscile con immagini con licenza adeguata.
