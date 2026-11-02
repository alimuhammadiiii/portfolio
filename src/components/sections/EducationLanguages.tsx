import { GraduationCap, Languages } from "lucide-react";
import { education, languages } from "../../data/education";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationLanguages() {
  return (
    <Section id="education">
      <SectionHeading index="05" eyebrow="Background" title="Education & Languages" />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="h-full">
          <GlassCard hover className="h-full p-7 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/12 text-violet-300 ring-1 ring-white/10">
              <GraduationCap size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-white">{education.school}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{education.degree}</p>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <GlassCard hover className="h-full p-7 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/12 text-violet-300 ring-1 ring-white/10">
              <Languages size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-white">Languages</h3>
            <ul className="mt-4 space-y-3">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <span className="text-mist-300">{language.name}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mist-300">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
