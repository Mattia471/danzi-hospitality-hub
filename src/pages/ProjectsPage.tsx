import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/projects';
import { PageSeo } from '../components/ui/PageSeo';

export function ProjectsPage() {
  return (
    <>
      <PageSeo title="Realizzazioni | D'Anzi Hospitality Hub" description="Una selezione di realizzazioni e progetti D'Anzi Hospitality Hub." />
      <section className="border-b border-black/5 bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Realizzazioni" title="Progetti, ambienti, dettagli." description="La struttura della gallery è pronta. Le schede qui presenti sono placeholder e vanno sostituite con progetti, fotografie e descrizioni reali." />
        </Container>
      </section>
      <section className="py-12 lg:py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.id} className="group min-h-[460px] overflow-hidden bg-brand-stone p-8">
              <div className="flex h-full flex-col justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-muted">0{index + 1}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-orange">{project.category}</p>
                  <h2 className="mt-2 text-4xl font-medium tracking-[-0.03em]">{project.title}</h2>
                  <p className="mt-3 text-sm text-brand-muted">Fotografia, luogo, anno e descrizione da inserire.</p>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
