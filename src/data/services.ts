import type { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'fornitura',
    title: 'Fornitura prodotti e attrezzature',
    description: 'Selezione di prodotti e attrezzature per strutture ricettive e ristorazione.',
  },
  {
    id: 'progetti',
    title: 'Progetti su misura',
    description: 'Soluzioni personalizzate costruite sulle esigenze, sugli spazi e sull’identità della struttura.',
  },
  {
    id: 'consulenza',
    title: 'Consulenza specializzata',
    description: 'Affiancamento nella scelta delle soluzioni più adatte, con attenzione a qualità e funzionalità.',
  },
  {
    id: 'approvvigionamenti',
    title: 'Approvvigionamenti e riassortimenti',
    description: 'Supporto alla gestione delle forniture e dei riassortimenti per semplificare l’operatività.',
  },
];

export const productCategories = [
  'Linee cortesia',
  'Arredo',
  'Wellness',
  'Sicurezza',
  'Tavola e porcellane',
  'Bedding',
  'Frigobar e cassetteforti',
];
