import { useEffect } from 'react';

export function PageSeo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = descriptionMeta?.content;

    document.title = title;
    if (descriptionMeta) descriptionMeta.content = description;

    return () => {
      document.title = previousTitle;
      if (descriptionMeta && previousDescription) descriptionMeta.content = previousDescription;
    };
  }, [description, title]);

  return null;
}
