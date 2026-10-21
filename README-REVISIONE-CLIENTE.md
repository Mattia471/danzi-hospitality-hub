# D’Anzi Hospitality Hub | Revisione contenuti e struttura

Aggiornamento applicato allo ZIP consegnato il 21/10/2026.

## Modifiche implementate

- Home: headline richiesta con «differenza» in arancione, introduzione, valori.
- Home: sezione partner senza contatori e con vera mappa Leaflet basata sulle coordinate disponibili (non marker fittizi).
- Home: titolo «Tradizione familiare, visione contemporanea»; foto temporanea configurabile in `src/config/media.ts`.
- Home: realizzazioni, slider, foto e CTA preservati.
- Home: «Soluzioni per l’ospitalità», testo e «casseforti» corretti, categorie navigabili.
- Chi siamo: storia preservata; valori e testo referenze aggiornati.
- Partner: descrizioni uniformate; aggiunti GLT-URMET e GRATTONI con siti e indirizzi ufficiali. Le altre schede sono state mantenute.
- Partner: rimossi email e telefoni generici dalle schede; sezione «Assistenza tecnica» specifica per CISA, GLT-URMET e STARK.
- Prodotti e servizi: 7 pagine categoria (`/prodotti-e-servizi/:slug`) con descrizioni, brand collegati e struttura dati per schede prodotto e gallery con lightbox. Nessuna foto prodotto inventata o placeholder pubblico.
- Realizzazioni: campi opzionali `location`, `intervention`, `architect` e contatore basato sul numero effettivo di progetti nel dataset (attualmente 6).
- Consulenza: testo richiesto; contatti uniformati ai riferimenti primari in `src/config/site.ts`.
- Form: se manca `VITE_CONTACT_FORM_ENDPOINT`, apre l'app email dell'utente con messaggio precompilato; **non** segnala un invio completato.
- Brand: eliminata la ricostruzione testuale del logo, sostituita dalle immagini già presenti nello ZIP, ottimizzate in `public/brand`. Il grande segno grafico a destra della hero è ora un apostrofo, non una virgola.
- Footer: credito sviluppatore.

## Come aggiungere le fotografie

### Foto familiare

Apri `src/config/media.ts` e aggiorna `src`, `alt` e `credit` in `homeAboutImage`. Carica il file in `public/images/`. La struttura della Home non va modificata.

### Nuove realizzazioni

Aggiungi oggetti in `src/data/projects.ts`. Campi opzionali:

```ts
location?: string;
intervention?: string;
architect?: string;
```

Se i dati non sono verificati, omettili. Il contatore si aggiorna automaticamente.

### Prodotti e gallery

Carica le immagini in `public/images/catalogo/<categoria>/` e modifica `src/data/productCatalog.ts`:

```ts
products: [
  {
    id: 'identificativo-prodotto',
    name: 'Nome approvato',
    description: 'Descrizione approvata',
    brand: 'Brand confermato',
    images: [
      { src: '/images/catalogo/arredo/prodotto.webp', alt: 'Descrizione accessibile' },
    ],
  },
]
```

La gallery compare soltanto quando esiste almeno un prodotto con immagine. Il clic apre la visualizzazione ingrandita, con frecce ed Esc.

## Dati ancora da approvare prima della pubblicazione

1. **Logo ufficiale**: lo ZIP contiene `logo_full.png` e `logo_full_w.png`, ora usati in header e footer. Confermare che siano quelli ufficiali; in caso contrario sostituire gli asset `public/brand/logo-header.png` e `public/brand/logo-footer.png`.
2. **Foto padre-figlio**: non ancora ricevuta.
3. **Architetti/località/interventi**: non inventati; da completare con dati verificati.
4. **CISA**: sul sito ufficiale è pubblicato il telefono di assistenza `+39 0546 1880070` e il relativo percorso web. Non è stata trovata una email specifica verificata; chiedere a Jessica se serve pubblicarla.
5. **GLT-URMET**: assistenza `+39 011 2339111` e `assistenza@glt.it` pubblicati sul sito GLT.
6. **STARK**: assistenza `+39 0522 653745` e `assistenza@starksafes.com` pubblicati sul sito Stark Safes.
7. **Mappe**: GLT-URMET e GRATTONI hanno indirizzi ufficiali ma non coordinate verificate. Appaiono nelle schede, ma non ancora tra i marker, per evitare posizioni geografiche inventate. Tutti i partner con coordinate nel dataset sono rappresentati sulla mappa Home e Partner.
8. **Recapiti D'Anzi**: `info@danzi1975.it` e `+39 351 755 6654` sono stati uniformati tra Footer e form, ma necessitano di conferma aziendale.
9. **Form contatti**: `VITE_CONTACT_FORM_ENDPOINT` non è configurato nello ZIP. In questa situazione si usa `mailto:` (richiede che il visitatore abbia un'app email); per invio automatico affidabile va configurato un endpoint reale. Test di consegna end-to-end da eseguire dopo configurazione.
10. **Privacy**: il testo del consenso è presente ma manca un link a un'informativa pubblicata. Serve il documento privacy approvato prima del go-live.
11. **Responsive e navigazione**: le modifiche sono responsive nel codice Tailwind. La verifica visiva su dispositivi reali e il test browser finale devono essere eseguiti dopo `pnpm install` e deploy.

## Controlli eseguiti

- Analisi sintattica di 37 file TS/TSX: **nessun errore di parsing** (TypeScript globale).
- 23 riferimenti immagine statici controllati: **nessun file mancante**.
- 7 categorie con route dedicate e 6 progetti conteggiati dai dati.
- Verificati su siti ufficiali i contatti di assistenza per CISA, GLT e STARK e il sito/indirizzo di GRATTONI.
- **Non eseguiti** `pnpm build`, test browser o invio reale del form: le dipendenze non erano presenti nell'archivio e l'installazione in questo ambiente non è andata a buon fine.

## Avvio locale

```bash
pnpm install
pnpm build
pnpm dev
```

Per un modulo di contatto con invio server-side, impostare `VITE_CONTACT_FORM_ENDPOINT` in `.env.local` con un endpoint HTTPS controllato e testato.
