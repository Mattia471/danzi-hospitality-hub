# Sicurezza

## Segnalare una vulnerabilità

Non pubblicare exploit, token o dati personali nelle issue GitHub. Invia una segnalazione **privata** al manutentore del progetto tramite un canale già concordato con il team D’Anzi, includendo impatto e istruzioni di riproduzione. Non è stabilita una SLA pubblica per le risposte.

## Confini di sicurezza

- Il sito è una SPA **senza backend proprietario**.
- Le variabili `VITE_` sono accessibili a chi visita il sito: **mai usarle per segreti**.
- Il form può inviare dati a un provider esterno: la protezione server-side, i limiti anti-spam e la consegna dipendono dal provider.
- Gli URL Google Drive sono destinati esclusivamente a PDF esplicitamente pubblici.
- I link di terze parti, inclusi cataloghi e assistenza, vanno verificati prima di pubblicarli.
- Le dipendenze vanno tenute aggiornate e le segnalazioni di sicurezza valutate periodicamente.

## Prima di andare online

Confermare privacy/cookie policy e trattamento dei dati del form con il cliente; verificare i permessi su documenti, immagini e marchi.
