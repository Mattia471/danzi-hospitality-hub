import type { Partner } from "../types/partner";

/**
 * Partner presenti nella presentazione D’Anzi Hospitality Hub.
 *
 * Dati di contatto verificati su fonti pubbliche il 23/09/2026.
 * Le coordinate servono esclusivamente a posizionare i marker sulla mappa e
 * sono state geocodificate a partire dagli indirizzi pubblici delle aziende.
 *
 * Prima di una pubblicazione a lungo termine è consigliabile ricontrollare
 * periodicamente recapiti e sedi, perché possono cambiare.
 */
export const partners: Partner[] = [
  {
    id: "amonn",
    name: "AMONN Hotel",
    category: "Linee cortesia",
    description:
      "Linee cortesia, cosmetica professionale, dispenser, complementi e accessori per hotel. Soluzioni personalizzabili per esprimere lo stile e l’identità di ogni struttura.",
    website: "https://www.amonnhotel.com/",
    address: "Via Altmann, 12, 39100 Bolzano BZ, Italia",
    location: {
      latitude: 46.4722174,
      longitude: 11.3228062,
    },
  },
  {
    id: "bimar",
    name: "BIMAR Arredo Contract",
    category: "Arredo contract",
    description:
      "Soluzioni d’arredo e complementi per il settore hospitality e contract, pensate per coniugare funzionalità, comfort e design negli ambienti dell’ospitalità.",
    website: "https://www.bimararredocontract.it/",
    address: "Via della Fattoria, 37, 06084 Bettona PG, Italia",
    location: {
      latitude: 43.04056,
      longitude: 12.48322,
    },
  },
  {
    id: "calligaris",
    name: "Calligaris",
    category: "Arredo & design",
    description:
      "Design italiano e arredi per ambienti contemporanei, con sedute e complementi pensati per progetti hospitality e contract.",
    website: "https://www.calligaris.com/it-IT/",
    address: "Via Trieste, 12, 33044 Manzano UD, Italia",
    location: {
      latitude: 45.98448,
      longitude: 13.37603,
    },
  },
  {
    id: "cisa",
    support: { phone: "+39 0546 1880070", url: "https://cisa.com/it/contatti-per-professionisti/" },
    name: "CISA",
    category: "Sicurezza & accessi",
    description:
      "Sistemi di chiusura, serrature elettroniche e soluzioni per il controllo degli accessi, pensati per migliorare sicurezza e gestione delle strutture ricettive.",
    website: "https://www.cisa.com/it/",
    address: "Via Oberdan, 42, 48018 Faenza RA, Italia",
    location: {
      latitude: 44.29159,
      longitude: 11.86526,
    },
  },
  {
    id: "ki-life",
    name: "Ki LIFE",
    category: "Wellness & SPA",
    description:
      "Soluzioni dedicate al wellness e al benessere, per arricchire l’offerta di spa, centri benessere e strutture ricettive.",
    website: "https://www.kilife.it/",
    address: "Via Pantanelli, 159, 61025 Montelabbate PU, Italia",
    location: {
      latitude: 43.86871,
      longitude: 12.79944,
    },
  },
  {
    id: "geminiano-cozzi",
    name: "Geminiano Cozzi Venezia 1765",
    category: "Porcellane",
    description:
      "Porcellane di lusso di tradizione veneziana, espressione di artigianalità, eleganza e cultura della tavola.",
    website: "https://www.geminianocozzi1765.com/",
    address: "Via Sant’Antonino, 352/B, 31100 Treviso TV, Italia",
    location: {
      latitude: 45.64166,
      longitude: 12.27441,
    },
  },
  {
    id: "mepra",
    name: "MEPRA",
    category: "Tavola & posateria",
    description:
      "Posateria, pentolame e articoli per la tavola Made in Italy, pensati anche per hotellerie e ristorazione.",
    website: "https://www.mepra.it/",
    address: "Via Virgilio Montini, 176, 25067 Lumezzane BS, Italia",
    location: {
      latitude: 45.64992,
      longitude: 10.27278,
    },
  },
  {
    id: "perdormire-hotel",
    name: "Perdormire Hotel",
    category: "Bedding",
    description:
      "Sistemi letto e soluzioni per il riposo dedicati all’hotellerie, per offrire comfort, qualità e cura del dettaglio in ogni camera.",
    website: "https://perdormirehotel.com/",
    address: "Via S. Pierino Casa al Vescovo, 51100 Pistoia PT, Italia",
    location: {
      latitude: 43.9094,
      longitude: 10.93342,
    },
  },
  {
    id: "radif",
    name: "RADIF 1820",
    category: "Porcellane & tavola",
    description:
      "Forniture per hotellerie e ristorazione, con porcellane e articoli per una tavola professionale e curata.",
    website: "https://www.radif.it/",
    address: "Piazza Giacomo Matteotti, 3, 16123 Genova GE, Italia",
    location: {
      latitude: 44.40709,
      longitude: 8.932279,
    },
  },
  {
    id: "glt-urmet",
    name: "GLT-URMET",
    category: "Domotica & automazione",
    description: "Soluzioni di domotica e automazione alberghiera per gestire accessi, comfort, impianti e servizi della camera, migliorando l’efficienza operativa e l’esperienza degli ospiti.",
    website: "https://www.glt-controlloaccessi.it/",
    address: "Via Bologna, 152, 10154 Torino TO, Italia",
    support: { phone: "+39 011 2339111", email: "assistenza@glt.it", url: "https://www.glt-controlloaccessi.it/" },
  },
  {
    id: "grattoni",
    name: "GRATTONI",
    category: "Arredo outdoor",
    description: "Arredi outdoor per terrazze, giardini, piscine e aree relax, pensati per valorizzare gli spazi esterni di hotel e strutture ricettive.",
    website: "https://grattonisedie.it/",
    address: "Via Braide Matte, 7, 33048 San Giovanni al Natisone UD, Italia",
  },
  {
    id: "stark",
    support: { phone: "+39 0522 653745", email: "assistenza@starksafes.com", url: "https://www.stark-horeca.com/it/assistenza" },
    name: "STARK",
    category: "Forniture alberghiere & sicurezza",
    description:
      "Forniture, attrezzature e accessori per hotel e strutture ricettive, con soluzioni funzionali per la camera, il bagno e i servizi agli ospiti.",
    website: "https://www.stark-horeca.com/it/",
    address: "Strada Provinciale Nord, 36, 42017 Novellara RE, Italia",
    location: {
      latitude: 44.81013,
      longitude: 10.69973,
    },
  },
];
