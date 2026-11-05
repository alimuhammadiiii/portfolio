import { ArrowUpRight } from "lucide-react";
import { experience } from "../../data/experience";
import { cn } from "../../lib/utils";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        eyebrow="Career"
        title="Work Experience"
        description="Frontend roles focused on product development, design systems, and collaboration across disciplines."
      />
      <ol className="relative ml-2 space-y-12 border-l border-white/10 pl-8 sm:pl-10">
        {experience.map((item, index) => (
          <li key={item.company} className="relative">
            <Reveal delay={index * 0.05}>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-2 -left-[2.4rem] h-3 w-3 rounded-full border-2 sm:-left-[2.9rem]",
                  item.current
                    ? "border-violet-400 bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                    : "border-mist-500 bg-night-900",
                )}
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {item.period ? (
                  <span className="glass rounded-full px-3 py-1 font-mono text-xs text-mist-300">
                    {item.period}
                  </span>
                ) : null}
                {item.current ? (
                  <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300 ring-1 ring-violet-400/30">
                    Current
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 text-lg font-semibold text-mist-100">
                {item.website ? (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-violet-300"
                  >
                    {item.company}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : (
                  item.company
                )}
              </h3>
              <p className="mt-1 text-sm font-medium text-violet-300">{item.position}</p>

              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-mist-400">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-mist-500"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
