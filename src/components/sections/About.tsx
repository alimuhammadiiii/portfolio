import { Briefcase, Check } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";

const focusAreas = [
  "UI/UX principles",
  "Accessibility",
  "Reusable component architecture",
  "Modern frontend practices",
  "Cross-functional collaboration",
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow="About" title="About Me" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal className="space-y-5 text-base leading-relaxed text-mist-400 sm:text-lg">
          <p>
            I'm a Frontend Developer with about 3 years of experience building fast, responsive,
            and user-friendly web applications.
          </p>
          <p>
            I enjoy improving user experience, writing clean and maintainable code, and
            collaborating with designers and backend developers to deliver reliable products.
          </p>
          <p>
            I'm familiar with UI/UX principles, accessibility, reusable component architecture,
            and modern frontend development practices.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <GlassCard className="h-full p-7 sm:p-8">
            <h3 className="text-sm font-semibold tracking-[0.2em] text-mist-100 uppercase">
              What I focus on
            </h3>
            <ul className="mt-6 space-y-4">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 text-sm text-mist-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
                    <Check size={13} aria-hidden="true" />
                  </span>
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center gap-3 border-t border-white/8 pt-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Briefcase size={16} aria-hidden="true" />
              </span>
              <p className="text-sm text-mist-400">
                Currently{" "}
                <span className="font-medium text-mist-100">
                  Frontend Developer at Nobateki
                </span>
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
