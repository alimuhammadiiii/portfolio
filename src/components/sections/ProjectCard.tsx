import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "../../data/projects";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ProjectPreview } from "./ProjectPreview";

export interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl">
        <div
          className="relative h-44 border-b border-white/8"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 15%, ${project.accent}1f, transparent 60%)`,
          }}
        >
          <ProjectPreview kind={project.preview} accent={project.accent} />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-mono text-xs tracking-[0.2em] text-mist-500 uppercase">
            {project.category}
          </h3>
          <p className="mt-2 text-lg font-semibold text-white">{project.name}</p>
          <p className="mt-0.5 text-xs font-medium text-violet-300">{project.role}</p>

          <p className="mt-3 text-sm leading-relaxed text-mist-400">{project.description}</p>

          <ul className="mt-4 space-y-2">
            {project.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex gap-2 text-[13px] leading-relaxed text-mist-400"
              >
                <Check size={14} aria-hidden="true" className="mt-1 shrink-0 text-violet-400" />
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
