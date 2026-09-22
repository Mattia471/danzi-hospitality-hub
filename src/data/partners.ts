import type { Partner } from '../types/partner';

/**
 * I nomi sotto provengono dalla presentazione aziendale.
 * I dati di contatto, sito, indirizzo e coordinate NON erano presenti nei PDF
 * e devono essere confermati prima della pubblicazione.
 */
export const partners: Partner[] = [
  {
    id: 'amonn',
    name: 'AMONN',
    category: 'Linee cortesia',
    description: 'Linee cortesia raffinate e funzionali, con formulazioni delicate e packaging elegante.',
  },
  {
    id: 'bimar',
    name: 'BIMAR',
    category: 'Arredo',
    description: 'Soluzioni d’arredo funzionali e moderne per ambienti alberghieri.',
  },
  {
    id: 'calligaris',
    name: 'Calligaris',
    category: 'Arredo',
    description: 'Design italiano contemporaneo per arredi versatili e confortevoli.',
  },
  {
    id: 'cisa',
    name: 'CISA',
    category: 'Sicurezza',
    description: 'Sistemi di sicurezza e chiusura per l’hotellerie.',
  },
  {
    id: 'ki-life',
    name: 'KI LIFE',
    category: 'Wellness',
    description: 'Soluzioni ingegnerizzate per spa, saune e bagni turchi, con attenzione al design.',
  },
  {
    id: 'ginori',
    name: 'Ginori',
    category: 'Porcellane',
    description: 'Porcellane di lusso veneziane, sinonimo di artigianalità e raffinatezza.',
  },
  {
    id: 'mepra',
    name: 'MEPRA',
    category: 'Tavola',
    description: 'Posateria e stoviglie di alta qualità, funzionali e resistenti.',
  },
  {
    id: 'perdormire',
    name: 'PerDormire Hotel',
    category: 'Bedding',
    description: 'Materassi e sistemi letto innovativi pensati per un comfort eccellente.',
  },
  {
    id: 'porcellane-artigianali',
    name: 'Partner porcellane artigianali',
    category: 'Porcellane',
    description: 'Porcellane artigianali di alta gamma per hotel e ristoranti.',
  },
  {
    id: 'stark',
    name: 'STARK',
    category: 'Sicurezza & minibar',
    description: 'Cassetteforti e frigobar professionali, sicuri e dal design funzionale.',
  },
];
