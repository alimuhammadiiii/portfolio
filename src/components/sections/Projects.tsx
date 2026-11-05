import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { projects } from "../../data/projects";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectScreenshot } from "./ProjectScreenshot";

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="glass group overflow-hidden rounded-3xl">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300 ring-1 ring-violet-400/30">
                Featured Project
              </span>
              <span className="font-mono text-xs tracking-[0.2em] text-mist-500 uppercase">
                {project.category}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-mist-100 sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-violet-300">{project.role}</p>

            <p className="mt-4 leading-relaxed text-mist-400">{project.description}</p>

            <ul className="mt-6 space-y-2.5">
              {project.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex gap-2.5 text-sm leading-relaxed text-mist-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-violet-400"
                  />
                  {responsibility}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-4 pt-9">
              <Button href={project.url} external variant="secondary">
                {project.urlLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>

          {project.image ? (
            <div className="relative flex min-h-[22rem] items-center justify-center overflow-hidden border-t border-white/12 bg-night-800/50 p-8 lg:min-h-[30rem] lg:border-t-0 lg:border-l">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(139, 92, 246, 0.1), transparent 70%)",
                }}
              />
              <div className="relative h-64 transition-transform duration-500 group-hover:-translate-y-1.5 sm:h-72 lg:h-[24rem]">
                <div className="h-full overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl shadow-black/60">
                  <ProjectScreenshot image={project.image} className="h-full w-auto" />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="projects">
      <SectionHeading
        index="02"
        eyebrow="Portfolio"
        title="Selected Projects"
        description="Real products I've helped build as a frontend developer — from booking platforms to real-estate and file-management applications."
      />
      {featured ? <FeaturedProject project={featured} /> : null}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.08} />
        ))}
      </div>
    </Section>
  );
}
