# Architettura

D’Anzi Hospitality Hub è una **Single Page Application (SPA)**, non un CMS. I contenuti editoriali sono dati TypeScript importati dai componenti React e vengono inclusi nella build Vite.

## Flusso dei dati

```text
src/data/* ───────> pagine React ───────> build Vite (dist/)
src/config/* ─────> componenti React ────────────┘
public/* ────────────────────────────────────────┘

Browser ──> Leaflet / tile OpenStreetMap
Browser ──> iframe Google Drive (solo cataloghi configurati)
Browser ──> endpoint esterno form (se configurato)
```

Non sono presenti database, API proprietarie, login, storage server-side o pannello amministrativo.

## Componenti principali

| Area | File |
| --- | --- |
| Routing SPA | `src/routes/router.tsx` |
| Shell, header, footer | `src/components/layout/` |
| Hero, preview e form | `src/components/home/` |
| Mappa partner | `src/components/partners/PartnersMap.tsx` |
| Dati partner | `src/data/partners.ts` |
| Cataloghi Google Drive | `src/data/partnerCatalogs.ts` |
| Progetti | `src/data/projects.ts` |
| Prodotti e categorie | `src/data/productCatalog.ts` |
| Configurazione aziendale | `src/config/site.ts` |
| SEO build-time | `vite.config.ts`, `scripts/generate-seo.mjs` |
| SEO client-side | `src/components/ui/PageSeo.tsx` |

## Cataloghi PDF

Il viewer usa l'anteprima di un **file pubblico Google Drive**, non trasferisce il PDF sul server del sito. Il file deve essere condiviso con accesso di lettura tramite link; in caso di restrizioni Google, un iframe può non funzionare. Il sito valida che il link appartenga a `drive.google.com` ed estrapola l'ID del documento.

La sostituzione di una versione su Drive preserva l'ID e quindi il link. Un nuovo documento con un ID differente richiede modificare il dataset e distribuire una nuova build.

## Mappe

Leaflet utilizza coordinate presenti in `partners.ts`. Un partner senza coordinate può rimanere nella lista con un collegamento alle indicazioni calcolato dall'indirizzo; non vengono inventati marker geografici.

## Form

Se `VITE_CONTACT_FORM_ENDPOINT` è configurata, il browser invia JSON al servizio esterno. Il campo honeypot e i controlli client-side **non costituiscono una protezione anti-spam server-side**; la protezione e la consegna spettano al provider. Senza endpoint il form tenta un `mailto:`, che richiede un client email installato e non conferma la consegna.

## Decisioni progettuali

- **Nessun backend** per contenere manutenzione e complessità.
- **Dati versionati** per revisioni editoriali controllate e tracciabili.
- **Asset statici ottimizzati** sotto `public/`.
- **SEO ibrido**: metadati base nella pagina HTML; i meta delle route vengono aggiornati nel browser, non necessariamente letti dai crawler che non eseguono JavaScript.
- **Vercel SPA rewrite** in `vercel.json` per permettere accesso diretto e refresh delle route.
