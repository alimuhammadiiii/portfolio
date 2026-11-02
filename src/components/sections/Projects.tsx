import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "../../data/projects";
import { projects } from "../../data/projects";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectPreview } from "./ProjectPreview";

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

            <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">{project.name}</h3>
            <p className="mt-2 text-sm font-medium text-violet-300">{project.role}</p>

            <p className="mt-4 leading-relaxed text-mist-400">{project.description}</p>

            <ul className="mt-6 space-y-2.5">
              {project.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-2.5 text-sm leading-relaxed text-mist-400">
                  <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-violet-400" />
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

          <div
            className="relative min-h-[15rem] border-t border-white/8 lg:min-h-0 lg:border-t-0 lg:border-l"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 15%, ${project.accent}1f, transparent 55%)`,
            }}
          >
            <ProjectPreview kind={project.preview} accent={project.accent} />
          </div>
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
      <div className={cn("mt-8 grid gap-6 sm:grid-cols-2", "lg:grid-cols-3")}>
        {rest.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.08} />
        ))}
      </div>
    </Section>
  );
}
