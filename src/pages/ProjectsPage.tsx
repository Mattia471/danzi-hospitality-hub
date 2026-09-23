import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/projects";
import { PageSeo } from "../components/ui/PageSeo";

export function ProjectsPage() {
  return (
    <>
      <PageSeo
        title="Realizzazioni | D'Anzi Hospitality Hub"
        description="Una selezione di realizzazioni e progetti D'Anzi Hospitality Hub."
      />

      {/* HERO */}
      <section className="border-b border-black/5 bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Realizzazioni"
            title="Progetti, ambienti, dettagli."
            description="Una selezione di spazi, ambienti e progetti realizzati nel mondo dell'hospitality."
          />
        </Container>
      </section>

      {/* PROJECTS GRID */}
      <section className="bg-white py-12 lg:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative min-h-[460px] overflow-hidden bg-brand-stone"
            >
              {/* IMAGE */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
              )}

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/15
                  to-black/5
                  transition-colors
                  duration-500
                  group-hover:from-black/85
                "
              />

              {/* NUMBER */}
              <span
                className="
                  absolute left-6 top-6
                  z-10
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white/80
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* CONTENT */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  z-10
                  p-6
                  text-white
                  lg:p-8
                "
              >
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-brand-orange
                  "
                >
                  {project.category}
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-medium
                    tracking-[-0.03em]
                    lg:text-4xl
                  "
                >
                  {project.title}
                </h2>

                {(project.location || project.year) && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-white/75">
                    {project.location && <span>{project.location}</span>}

                    {project.location && project.year && (
                      <span className="text-brand-orange">•</span>
                    )}

                    {project.year && <span>{project.year}</span>}
                  </div>
                )}

                {project.description && (
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/80">
                    {project.description}
                  </p>
                )}

                <div
                  className="
                    mt-6
                    h-px
                    w-10
                    bg-brand-orange
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
