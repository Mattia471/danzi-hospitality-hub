/**
 * Cataloghi PDF ospitati su Google Drive.
 *
 * Aggiungi qui il link pubblico di condivisione (Chiunque abbia il link -> Visualizzatore).
 * Ogni catalogo apparirà automaticamente nella scheda del partner e sarà
 * sfogliabile in una pagina del sito senza spostare i PDF su altri servizi.
 *
 * Esempio, da attivare soltanto con un URL reale:
 *
 * amonn: [
 *   {
 *     id: 'catalogo-hotel',
 *     title: 'Catalogo Hospitality',
 *     driveUrl: 'https://drive.google.com/file/d/ID_REALE_DEL_PDF/view?usp=sharing',
 *   },
 * ],
 *
 * Per aggiornare un catalogo senza modificare il sito, il cliente deve usare
 * "Gestisci versioni" -> "Carica nuova versione" sullo STESSO file di Drive.
 * Cancellare il file e ricaricarlo come nuovo cambia l'ID e interrompe il link.
 */

export type PartnerCatalog = {
  id: string;
  title: string;
  driveUrl: string;
  description?: string;
};

/** Associazione partner ID -> cataloghi pubblicati. Nessun PDF fittizio. */
export const partnerCatalogs: Record<string, PartnerCatalog[]> = {
  amonn: [],
  bimar: [],
  calligaris: [],
  cisa: [],
  'ki-life': [],
  'perdormire-hotel': [],
  'glt-urmet': [],
  grattoni: [],
  stark: [],
};

/** Accetta solo link a file Drive validi, mai URL arbitrari nell'iframe. */
export function getDriveFileId(driveUrl: string): string | null {
  try {
    const url = new URL(driveUrl);
    if (url.protocol !== 'https:' || url.hostname !== 'drive.google.com') return null;

    const match = url.pathname.match(/^\/file\/d\/([A-Za-z0-9_-]+)(?:\/|$)/);
    const id = match?.[1] ?? url.searchParams.get('id');
    return id && /^[A-Za-z0-9_-]{10,}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

export function getCatalogsForPartner(partnerId: string): PartnerCatalog[] {
  return (partnerCatalogs[partnerId] ?? []).filter(
    (catalog) => Boolean(catalog.id.trim() && catalog.title.trim() && getDriveFileId(catalog.driveUrl)),
  );
}

export function getDrivePreviewUrl(driveUrl: string): string | null {
  const id = getDriveFileId(driveUrl);
  return id ? `https://drive.google.com/file/d/${id}/preview` : null;
}

export function getDriveViewUrl(driveUrl: string): string | null {
  const id = getDriveFileId(driveUrl);
  return id ? `https://drive.google.com/file/d/${id}/view` : null;
}
