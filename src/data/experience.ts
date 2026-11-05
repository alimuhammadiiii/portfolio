export interface ExperienceItem {
  company: string;
  position: string;
  /** Approximate Gregorian month/year label. Omitted when not supplied. */
  period?: string;
  website?: string;
  current?: boolean;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Nobateki",
    position: "Frontend Developer",
    period: "March 2025 — Present",
    website: "https://nobateki.ir/",
    current: true,
    bullets: [
      "Built responsive customer-facing booking flows and business management dashboards for desktop and mobile devices.",
      "Developed core product features, including online appointment booking, appointment management, business settings, and reporting.",
      "Applied UI/UX principles, responsive design, accessibility, and reusable design patterns throughout the product.",
      "Contributed to product planning, user flows, and feature definition.",
      "Used AI-assisted development workflows for implementation, debugging, and technical investigation.",
    ],
  },
  {
    company: "Giatec",
    position: "Frontend Developer",
    period: "March 2024 — May 2024",
    bullets: [
      "Designed and implemented a standalone design system with reusable, accessible, and responsive React components.",
      "Implemented components with a focus on accessibility, consistency, and reusability.",
    ],
  },
  {
    company: "MelkRadar Company",
    position: "Frontend Developer",
    period: "August 2022 — March 2024",
    bullets: [
      "Collaborated with designers and backend developers to implement UI designs and integrate frontend functionality.",
      "Participated in code reviews and contributed to frontend implementation strategies.",
      "Developed and maintained browser extensions.",
    ],
  },
  {
    company: "CS Internship",
    position: "Mentor",
    bullets: [
      "Mentored students in web development and programming fundamentals.",
      "Supported students in developing programming and professional skills.",
    ],
  },
];
