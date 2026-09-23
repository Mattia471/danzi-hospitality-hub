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
      "Linee cortesia raffinate e funzionali, con formulazioni delicate e packaging elegante.",
    website: "https://www.amonnhotel.com/",
    email: "commerciale@amonnhotel.com",
    phone: "+39 045 6083311",
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
      "Soluzioni d’arredo funzionali e moderne per ambienti alberghieri e progetti contract su misura.",
    website: "https://www.bimararredocontract.it/",
    email: "info@bimararredocontract.it",
    phone: "+39 075 9889530",
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
      "Design italiano contemporaneo per arredi versatili, confortevoli e destinati anche al mondo contract.",
    website: "https://www.calligaris.com/it-IT/",
    email: "eshop.italia@calligaris.com",
    phone: "+39 0432 748211",
    address: "Via Trieste, 12, 33044 Manzano UD, Italia",
    location: {
      latitude: 45.98448,
      longitude: 13.37603,
    },
  },
  {
    id: "cisa",
    name: "CISA",
    category: "Sicurezza & accessi",
    description:
      "Sistemi di sicurezza, chiusura e controllo degli accessi per il settore hotellerie.",
    website: "https://www.cisa.com/it/",
    email: "cisa.vendite@allegion.com",
    phone: "+39 0546 677111",
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
      "Soluzioni ingegnerizzate per spa, saune e bagni turchi, con particolare attenzione a tecnologia e design.",
    website: "https://www.kilife.it/",
    email: "info@kilife.it",
    phone: "+39 0721 496077",
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
    email: "info@geminianocozzi1765.it",
    phone: "+39 0422 1916600",
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
    email: "mepra@mepra.it",
    phone: "+39 030 8921441",
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
      "Materassi, letti e sistemi di riposo progettati per offrire comfort e soluzioni dedicate al settore alberghiero.",
    website: "https://perdormirehotel.com/",
    email: "info@perdormirehotel.com",
    phone: "+39 0573 382781",
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
    email: "eshop@radif.it",
    phone: "+39 010 2485528",
    address: "Piazza Giacomo Matteotti, 3, 16123 Genova GE, Italia",
    location: {
      latitude: 44.40709,
      longitude: 8.932279,
    },
  },
  {
    id: "stark",
    name: "STARK",
    category: "Forniture alberghiere & sicurezza",
    description:
      "Cassetteforti, frigobar e forniture professionali per hotel, strutture ricettive e mondo Ho.Re.Ca.",
    website: "https://www.stark-horeca.com/it/",
    email: "info@starksafes.com",
    phone: "+39 0522 653745",
    address: "Strada Provinciale Nord, 36, 42017 Novellara RE, Italia",
    location: {
      latitude: 44.81013,
      longitude: 10.69973,
    },
  },
];
