export type SkillGroupIcon = "code" | "layers" | "palette" | "shield" | "wrench";

export interface SkillGroup {
  title: string;
  icon: SkillGroupIcon;
  /** Visually wider group in the skills grid. */
  wide?: boolean;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SASS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "layers",
    wide: true,
    skills: [
      "React",
      "Next.js",
      "Redux",
      "React Query",
      "React Router",
      "TanStack Table",
      "TanStack Router",
      "React Aria",
    ],
  },
  {
    title: "UI & Styling",
    icon: "palette",
    skills: ["Tailwind CSS", "Material UI", "Untitled UI"],
  },
  {
    title: "Validation",
    icon: "shield",
    skills: ["Zod", "Valibot"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Vite", "Figma", "Zeplin"],
  },
];
