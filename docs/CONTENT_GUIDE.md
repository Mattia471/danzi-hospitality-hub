# Guida alla gestione dei contenuti

Questa guida è rivolta a chi mantiene il sito e a chi riceve il materiale dal cliente. Tutte le modifiche ai dati TypeScript richiedono un **nuovo deploy**; fa eccezione la sostituzione della **versione** di un PDF Drive con lo stesso ID.

## 1. Partner

Apri `src/data/partners.ts`. I partner approvati sono nove: AMONN Hotel, BIMAR Arredo Contract, CALLIGARIS, CISA, GLT-URMET, GRATTONI, KiLIFE, PERDORMIRE e STARK.

Ogni elemento può contenere `id`, `name`, `category`, `description`, `website`, `address`, `location` e una procedura `support` opzionale. Le coordinate vanno inserite **solo dopo verifica**: se non ci sono, lascia `location` assente.

Gli indirizzi, i link pubblici e le modalità di assistenza devono essere confermati dal cliente. Nella UI non vengono esposti recapiti email/telefono generici dei partner; sono previste soltanto le eccezioni di assistenza approvate per CISA e STARK.

## 2. Cataloghi PDF su Google Drive

Apri `src/data/partnerCatalogs.ts` e configura il catalogo sotto l'ID del partner corrispondente:

```ts
amonn: [
  {
    id: 'catalogo-hotel',
    title: 'Catalogo Hospitality',
    driveUrl: 'https://drive.google.com/file/d/ID_PDF_REALE/view',
  },
],
```

- Carica il PDF sul **Drive del cliente**.
- Imposta il file come *Chiunque abbia il link → Visualizzatore*, soltanto se il materiale è pubblicabile.
- Copia il link condivisibile in `driveUrl`; non usare un URL di cartella.
- Per **sostituire un catalogo** senza deploy: su Drive usa *Gestisci versioni → Carica nuova versione* sul file già collegato, mantenendone l'ID.
- Per **aggiungere o eliminare** un catalogo: modifica l'array e pubblica nuovamente la SPA.
- Verifica sempre la visualizzazione da browser non autenticato e da mobile.

La pagina del catalogo è `/partner/:partnerId/cataloghi/:catalogId`. Se non ci sono link reali, non vengono mostrate schede PDF inventate.

## 3. Realizzazioni

Modifica `src/data/projects.ts`; aggiungi le immagini ottimizzate in `public/images/projects/<slug>/` e usa percorsi assoluti che iniziano con `/images/...`.

Campi principali: `id` (unico e stabile), `title`, `category`, `description`, `image`, `gallery`. Usa `location`, `intervention` e `architect` soltanto se le informazioni sono disponibili e verificate. Anche i crediti fotografici devono essere concordati.

Prima del merge controlla che immagini e titolo descrivano lo **stesso progetto**. Il numero di progetti in home deriva dai dati pubblicati, non da una costante manuale.

## 4. Prodotti e servizi

- `src/data/services.ts`: sezioni e sette voci di navigazione.
- `src/data/productCatalog.ts`: descrizioni, partner associati e `products` di ogni categoria.

Le immagini dei prodotti vanno in `public/images/catalogo/<categoria>/`. Aggiungi soltanto fotografie autorizzate con descrizioni `alt` significative. La scheda e l'ingrandimento compaiono quando sono presenti prodotti reali; non pubblicare voci dimostrative.

## 5. Contatti, logo e fotografia familiare

- Azienda, email e telefoni: `src/config/site.ts`.
- Fotografia e descrizione della Home *Chi siamo*: `src/config/media.ts`.
- Loghi: `public/brand/`.
- Favicon: file `public/favicon-*` e `public/favicon.ico`.
- Anteprima social: `public/og-cover.jpg`.

Non sostituire il logo con una ricostruzione tipografica. Utilizza i file ufficiali del cliente e verifica le varianti per sfondo chiaro/scuro.

## 6. Checklist editoriale

1. Controlla nomi, apostrofi, accenti e denominazioni commerciali.
2. Verifica i collegamenti esterni e i permessi dei PDF.
3. Conferma diritti di utilizzo di loghi, immagini e testi.
4. Esegui `pnpm lint` e `pnpm build`.
5. Verifica Home, Partner, Realizzazioni, categorie e form su desktop e mobile.
6. Aggiorna tramite pull request o commit tracciato, quindi controlla il deploy.
