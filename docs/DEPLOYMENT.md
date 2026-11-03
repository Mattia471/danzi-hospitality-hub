# Deployment e go-live su Vercel

La repository è predisposta per **Vercel + Vite**. Il file `vercel.json` gestisce il fallback a `index.html` per le route React Router.

## Configurazione del progetto

1. Collega `Mattia471/danzi-hospitality-hub` a Vercel (oppure mantieni il collegamento esistente).
2. Verifica **Framework Preset: Vite**, **Root Directory: /**, **Build Command: pnpm build**, **Output Directory: dist**.
3. Usa Node.js **22** e il package manager pnpm (versione bloccata in `package.json`).
4. Imposta in *Project Settings → Environment Variables*:
   - `VITE_SITE_URL`: dominio HTTPS definitivo, **senza slash finale** (esempio: `https://www.example.com`).
   - `VITE_CONTACT_FORM_ENDPOINT`: URL HTTPS del provider che gestisce il form.
5. Collega dominio e DNS, poi avvia un nuovo deploy. Non mettere segreti in variabili `VITE_`, perché finiscono nel JavaScript pubblico.

Lo script `scripts/generate-seo.mjs` crea `dist/sitemap.xml` con URL assoluti solo se il dominio è configurato; in assenza di URL genera comunque `robots.txt`, ma **non** la sitemap.

## Verifiche prima della pubblicazione

### Configurazione e contenuti

- [ ] Dominio definitivo e HTTPS corretti; canonical e URL OG coerenti.
- [ ] Email, telefono e altri dati aziendali approvati dal cliente.
- [ ] Informativa privacy reale e collegamento visibile al form; cookie/tracker e servizi esterni valutati secondo gli obblighi applicabili.
- [ ] Diritti di pubblicazione dei loghi e delle fotografie confermati.
- [ ] Nove partner, siti web e indirizzi controllati; coordinate non inventate.
- [ ] Cataloghi Google Drive accessibili senza login quando destinati al pubblico.
- [ ] Assistenza CISA e STARK verificata.

### QA tecnico

- [ ] `pnpm install --frozen-lockfile`.
- [ ] `pnpm lint` senza errori.
- [ ] `pnpm build` senza errori.
- [ ] Aprire in incognito `/`, `/partner`, `/chi-siamo`, `/realizzazioni`, `/prodotti-e-servizi`.
- [ ] Provare accesso diretto/refresh su una categoria e su un catalogo effettivo.
- [ ] Controllare carousel, mappa e link indicazioni.
- [ ] Verificare navigazione e layout a 375px, 768px e desktop.
- [ ] Verificare header mobile, footer e tutti i CTA.
- [ ] Inviare una **richiesta reale** dal form, controllando ricezione, errori e protezione spam sul provider.
- [ ] Controllare tab favicon e anteprima social su un URL pubblico.

### URL di controllo

Con dominio finale già collegato, aprire:

```text
https://www.example.com/robots.txt
https://www.example.com/sitemap.xml
https://www.example.com/favicon.ico
https://www.example.com/og-cover.jpg
https://www.example.com/site.webmanifest
```

L'anteprima Vercel attuale può avere un URL diverso dal dominio di produzione. Non usare il dominio di esempio come URL reale.

## Note sulla privacy e l'indicizzazione

Le tile della mappa e gli iframe PDF possono inviare dati a servizi terzi. Valutare l'informativa e, se applicabile, il meccanismo di consenso prima della pubblicazione.

Le route hanno titoli client-side. Per SEO per-pagina completa sui crawler che non eseguono JavaScript può essere necessaria una futura strategia di prerender o SSR.

## Rollback

In caso di regressione, ripubblica l'ultimo deployment funzionante in Vercel oppure fai revert del commit problematico su GitHub. Non esporre token, password, documenti riservati o materiali non autorizzati nel repository pubblico.
