import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/projects';
import { PageSeo } from '../components/ui/PageSeo';

export function ProjectsPage() {
  return (
    <>
      <PageSeo
        title="Realizzazioni | D'Anzi Hospitality Hub"
        description="Hotel, residenze, suite, wellness e food & beverage: scopri una selezione di realizzazioni D'Anzi Hospitality Hub."
      />

      <section className="relative overflow-hidden bg-brand-ink py-20 text-white lg:py-28">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-orange/[0.06]" />
        <Container className="relative">
          <p className="text-xs uppercase tracking-[0.24em] text-brand-orange">
            Realizzazioni
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Progetti, ambienti, dettagli che diventano esperienza.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60">
            Una selezione di progetti reali per raccontare il nostro approccio attraverso
            camere, spazi comuni, ristorazione, wellness, materiali e soluzioni su misura.
          </p>
        </Container>
      </section>

      <section className="bg-white py-10 lg:py-14">
        <Container>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="whitespace-nowrap border border-black/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-muted transition hover:border-brand-orange hover:text-brand-orange"
              >
                {String(index + 1).padStart(2, '0')} · {project.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-brand-canvas">
        {projects.map((project, index) => (
          <section
            key={project.id}
            id={project.id}
            className="scroll-mt-24 border-t border-black/5 py-16 lg:py-24"
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </p>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                    {project.category}
                  </p>
                  <h2 className="mt-3 text-4xl font-medium leading-none tracking-[-0.045em] text-brand-ink sm:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-6 max-w-md text-sm leading-7 text-brand-muted">
                    {project.description}
                  </p>
                  <div className="mt-8 h-px w-16 bg-brand-orange" />
                </div>

                <div className="lg:col-span-8">
                  <div className="relative min-h-[420px] overflow-hidden bg-brand-stone sm:min-h-[520px]">
                    <img
                      src={project.gallery[0]}
                      alt={`${project.title}, vista principale`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-6 pt-20 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {project.gallery.slice(1, 4).map((image, imageIndex) => (
                      <div
                        key={image}
                        className={`relative overflow-hidden bg-brand-stone ${
                          imageIndex === 0 ? 'min-h-[300px]' : 'min-h-[260px]'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title}, dettaglio ${imageIndex + 2}`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </>
  );
}
