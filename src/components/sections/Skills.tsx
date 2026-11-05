import type { ComponentType } from "react";
import { CodeXml, Layers, Palette, ShieldCheck, Wrench } from "lucide-react";
import type { SkillGroup, SkillGroupIcon } from "../../data/skills";
import { skillGroups } from "../../data/skills";
import { cn } from "../../lib/utils";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";

const groupIcons: Record<SkillGroupIcon, ComponentType<{ size?: number; className?: string }>> = {
  code: CodeXml,
  layers: Layers,
  palette: Palette,
  shield: ShieldCheck,
  wrench: Wrench,
};

function SkillGroupCard({ group, delay }: { group: SkillGroup; delay: number }) {
  const Icon = groupIcons[group.icon];
  return (
    <Reveal delay={delay} className={cn("h-full", group.wide && "sm:col-span-2 lg:col-span-1")}>
      <GlassCard hover className="h-full p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/12 text-violet-300 ring-1 ring-white/10">
            <Icon size={18} />
          </span>
          <h3 className="text-base font-semibold text-mist-100">{group.title}</h3>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <li key={skill}>
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      </GlassCard>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="04"
        eyebrow="Toolbox"
        title="Technical Skills"
        description="The technologies I work with day to day, organized by category."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <SkillGroupCard key={group.title} group={group} delay={index * 0.06} />
        ))}
      </div>
    </Section>
  );
}
