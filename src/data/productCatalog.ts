/**
 * Categorie e prodotti del sito. Nessun prodotto inventato: i prodotti e le
 * fotografie verranno aggiunti solo dopo la consegna del materiale approvato.
 * Per aggiungere una foto: copiala in public/images/catalogo/<categoria>/
 * e aggiungi { src, alt } al prodotto corrispondente.
 */
import { productCategories } from './services';

export type CatalogImage = { src: string; alt: string };
export type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  brand?: string;
  images: CatalogImage[];
};
export type CatalogCategory = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  partnerIds: string[];
  products: CatalogProduct[];
};

export const catalogCategories: CatalogCategory[] = [
  {
    slug: 'linee-cortesia', name: 'Linee cortesia', subtitle: 'L’accoglienza inizia dai dettagli.',
    description: 'Cosmetica professionale, dispenser e accessori selezionati per valorizzare l’identità della struttura e l’esperienza degli ospiti.',
    partnerIds: ['amonn'], products: [],
  },
  {
    slug: 'arredo', name: 'Arredo', subtitle: 'Spazi da vivere, progetti da ricordare.',
    description: 'Soluzioni per camere, reception, aree comuni e spazi outdoor. Un approccio su misura che integra comfort, funzionalità e design.',
    partnerIds: ['bimar', 'calligaris', 'grattoni'], products: [],
  },
  {
    slug: 'wellness', name: 'Wellness', subtitle: 'Benessere come esperienza.',
    description: 'Soluzioni dedicate a spa, centri benessere e aree relax, progettate per creare ambienti di comfort e rigenerazione.',
    partnerIds: ['ki-life'], products: [],
  },
  {
    slug: 'sicurezza', name: 'Sicurezza', subtitle: 'Tecnologia al servizio dell’ospitalità.',
    description: 'Sistemi di chiusura, controllo degli accessi e automazione alberghiera per la sicurezza, la gestione e il comfort degli ospiti.',
    partnerIds: ['cisa', 'glt-urmet'], products: [],
  },
  {
    slug: 'tavola-e-porcellane', name: 'Tavola e porcellane', subtitle: 'L’identità passa anche dalla tavola.',
    description: 'Porcellane, posateria e complementi selezionati per il servizio di ristorazione e l’esperienza dining.',
    partnerIds: ['geminiano-cozzi', 'mepra', 'radif'], products: [],
  },
  {
    slug: 'bedding', name: 'Bedding', subtitle: 'Il comfort si sente.',
    description: 'Sistemi letto e soluzioni per il riposo pensati per la qualità dell’accoglienza e il benessere in camera.',
    partnerIds: ['perdormire-hotel'], products: [],
  },
  {
    slug: 'frigobar-e-casseforti', name: 'Frigobar e casseforti', subtitle: 'Funzionalità che semplifica il soggiorno.',
    description: 'Dotazioni per la camera e soluzioni funzionali che coniugano sicurezza, praticità e comfort.',
    partnerIds: ['stark'], products: [],
  },
];

export function getCategorySlug(name: string): string {
  return catalogCategories.find((item) => item.name === name)?.slug ?? '';
}

// Allinea automaticamente le voci della home con la struttura delle pagine.
if (import.meta.env.DEV && productCategories.some((name) => !getCategorySlug(name))) {
  console.warn('Una categoria prodotti non ha una pagina associata.');
}
