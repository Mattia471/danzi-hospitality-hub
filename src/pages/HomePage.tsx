import { AboutPreview } from '../components/home/AboutPreview';
import { Hero } from '../components/home/Hero';
import { Highlights } from '../components/home/Highlights';
import { PartnersPreview } from '../components/home/PartnersPreview';
import { ProjectsPreview } from '../components/home/ProjectsPreview';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { ConsultationSection } from '../components/home/ConsultationSection';
import { PageSeo } from '../components/ui/PageSeo';

export function HomePage() {
  return (
    <>
      <PageSeo title="D'Anzi Hospitality Hub | Soluzioni per l'ospitalità" description="Prodotti, servizi e consulenza per un’ospitalità di qualità, con soluzioni pensate su misura per ogni struttura." />
      <Hero />
      <Highlights />
      <PartnersPreview />
      <AboutPreview />
      <ProjectsPreview />
      <ServicesPreview />
      <ConsultationSection />
    </>
  );
}
