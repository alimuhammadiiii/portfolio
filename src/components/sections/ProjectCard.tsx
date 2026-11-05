import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ProjectScreenshot } from "./ProjectScreenshot";

export interface ProjectCardProps {
  project: Project;
  delay?: number;
}

/** Typographic panel shown for projects without a screenshot. */
function ProjectWordmark({ name, category }: { name: string; category: string }) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-2.5 overflow-hidden px-6 text-center">
      <span
        aria-hidden="true"
        className="absolute text-7xl font-bold tracking-tight text-transparent uppercase select-none [-webkit-text-stroke:1px_rgba(244,244,244,0.1)]"
      >
        {name}
      </span>
      <p className="relative text-xl font-semibold text-mist-100">{name}</p>
      <p className="relative font-mono text-[11px] tracking-[0.18em] text-mist-500 uppercase">
        {category}
      </p>
    </div>
  );
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative h-44 overflow-hidden border-b border-white/12 bg-night-800/50">
          {project.image ? (
            <>
              <ProjectScreenshot
                image={project.image}
                className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-night-900/50 to-transparent"
              />
            </>
          ) : (
            <ProjectWordmark name={project.name} category={project.category} />
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-mono text-xs tracking-[0.2em] text-mist-500 uppercase">
            {project.category}
          </h3>
          <p className="mt-2 text-lg font-semibold text-mist-100">{project.name}</p>
          <p className="mt-0.5 text-xs font-medium text-violet-300">{project.role}</p>

          <p className="mt-3 text-sm leading-relaxed text-mist-400">{project.description}</p>

          <ul className="mt-4 space-y-2">
            {project.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex gap-2 text-[13px] leading-relaxed text-mist-400"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-violet-400"
                />
                {responsibility}
              </li>
            ))}
          </ul>

          {project.technologies ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <Tag>{technology}</Tag>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-auto pt-5">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-1 py-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              {project.urlLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
