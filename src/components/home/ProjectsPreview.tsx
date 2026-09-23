import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../../data/projects";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ProjectsPreview() {
  const previewProjects = projects.slice(0, 4);

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Realizzazioni"
            title="Spazi che ispirano."
            description="Una selezione di ambienti e progetti realizzati per il mondo dell'hospitality."
          />

          <Link
            to="/realizzazioni"
            className="
              inline-flex
              items-center
              gap-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.14em]
              text-brand-orange
              transition-all
              hover:gap-4
            "
          >
            Vai alle realizzazioni
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {previewProjects.map((project, index) => (
            <article
              key={project.id}
              className="
                group
                relative
                min-h-[380px]
                overflow-hidden
                bg-brand-stone
              "
            >
              {/* IMAGE */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
              )}

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-black/5
                  transition-all
                  duration-500
                  group-hover:from-black/90
                "
              />

              {/* NUMBER */}
              <span
                className="
                  absolute
                  left-6
                  top-6
                  z-10
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white/80
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* CONTENT */}
              <div className="absolute inset-x-6 bottom-6 z-10">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-brand-orange
                  "
                >
                  {project.category}
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-medium
                    tracking-[-0.02em]
                    text-white
                  "
                >
                  {project.title}
                </h3>

                {(project.location || project.year) && (
                  <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
                    {project.location && <span>{project.location}</span>}

                    {project.location && project.year && (
                      <span className="text-brand-orange">•</span>
                    )}

                    {project.year && <span>{project.year}</span>}
                  </div>
                )}

                <div
                  className="
                    mt-5
                    h-px
                    w-8
                    bg-brand-orange
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
