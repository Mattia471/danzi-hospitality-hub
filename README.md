# D'Anzi Hospitality Hub

Starter completo del nuovo sito vetrina D'Anzi Hospitality Hub.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Leaflet + React Leaflet
- Lucide React
- pnpm

Non sono presenti Supabase, database, React Query, FullCalendar, Recharts, XLSX o altre dipendenze della precedente web app che non servono a un sito vetrina.

## Avvio

```bash
pnpm install
pnpm dev
```

Build produzione:

```bash
pnpm build
pnpm preview
```

## Pagine

- `/` Home
- `/partner` Partner + mappa
- `/chi-siamo` Chi siamo
- `/realizzazioni` Realizzazioni
- `/prodotti-e-servizi` Prodotti e servizi

## Dove modificare i contenuti

- `src/data/partners.ts`: partner, indirizzi, siti, email e coordinate
- `src/data/projects.ts`: realizzazioni
- `src/data/services.ts`: servizi e categorie prodotto
- `src/config/site.ts`: dati aziendali e contatti

## Partner e mappa

La mappa usa OpenStreetMap e non richiede API key.

Per ogni partner puoi inserire:

```ts
{
  id: 'partner-id',
  name: 'Nome Partner',
  description: 'Descrizione',
  website: 'https://...',
  email: 'info@...',
  phone: '+39 ...',
  address: 'Via ..., Roma',
  location: {
    latitude: 41.9028,
    longitude: 12.4964,
  }
}
```

Quando sono presenti indirizzo o coordinate, la card mostra automaticamente il link **Indicazioni** verso Google Maps. Quando sono presenti sito/email/telefono, i relativi collegamenti compaiono automaticamente.

## Identità visiva

La base grafica segue la presentazione fornita:

- arancio Pantone Orange 021C, convertito nel progetto in una **approssimazione web** `#FF5A00`
- Gray 432C, convertito nel progetto in una **approssimazione web** `#333F48`
- nero e bianco
- font Arial
- molto spazio bianco, linee sottili e grandi elementi di punteggiatura/arancio

Se vengono forniti i valori RGB/HEX ufficiali del brand, sostituire le approssimazioni in `src/styles.css`.

## Informazioni da confermare prima del go-live

1. Logo ufficiale in SVG o PNG trasparente
2. Dominio definitivo
3. Indirizzo aziendale attuale
4. Link social ufficiali
5. Dati completi dei partner: indirizzo, sito, email, telefono, coordinate
6. Loghi partner autorizzati
7. Fotografie e schede delle realizzazioni
8. Categorie/prodotti definitivi
9. Privacy policy / cookie policy
10. Eventuale sistema analytics
11. Favicon e immagini Open Graph

## Nota privacy / cookie

Lo starter non inserisce analytics, pixel, form con salvataggio dati o cookie non tecnici. Se verranno aggiunti strumenti di tracciamento, sarà necessario introdurre la relativa gestione consenso e aggiornare le informative.

## Modulo "Richiedi una consulenza"

La Home include una sezione `#consulenza` con form inline, senza popup o modali. Il pulsante nell’header porta direttamente alla sezione.

Il frontend invia il form con `fetch` a un endpoint configurabile tramite variabile ambiente, quindi non sono richiesti Supabase o un backend applicativo dedicato.

1. Copia `.env.example` in `.env.local`.
2. Crea un endpoint presso il provider scelto, ad esempio Formspree.
3. Inserisci l’endpoint:

```env
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Il form invia nome, struttura/azienda, email, telefono, argomento e messaggio. Include inoltre consenso privacy obbligatorio, feedback di invio e un campo honeypot anti-spam.

> Prima della pubblicazione va collegata la pagina/privacy policy definitiva e va configurato il provider email con l’indirizzo destinatario aziendale.
