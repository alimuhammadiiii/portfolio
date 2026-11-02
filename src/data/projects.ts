export type ProjectPreviewKind = "booking" | "listings" | "admin" | "files";

export interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  description: string;
  responsibilities: string[];
  /** Only confirmed technologies are listed. */
  technologies?: string[];
  url: string;
  urlLabel: string;
  featured?: boolean;
  preview: ProjectPreviewKind;
  /** Accent color used for the abstract preview tint. */
  accent: string;
}

export const projects: Project[] = [
  {
    id: "nobateki",
    name: "Nobateki",
    category: "Salon Booking & Management Platform",
    role: "Frontend Developer / Product Developer",
    description:
      "Nobateki is a salon booking and management platform designed to simplify appointment scheduling and daily salon operations. It provides customers with an online booking experience and gives salon owners tools to manage appointments, customers, services, business settings, and teams.",
    responsibilities: [
      "Built responsive customer-facing booking flows and business management dashboards.",
      "Developed appointment booking and appointment management features.",
      "Implemented business settings and reporting interfaces.",
      "Applied responsive design, UI/UX principles, accessibility, and reusable design patterns.",
      "Contributed to product planning, user flows, and feature definition.",
    ],
    url: "https://nobateki.ir/",
    urlLabel: "Visit Live Site",
    featured: true,
    preview: "booking",
    accent: "#8b5cf6",
  },
  {
    id: "melkradar",
    name: "MelkRadar",
    category: "Real-Estate Platform",
    role: "Frontend Developer",
    description:
      "Contributed to the development of a real-estate platform focused on helping users explore and compare property listings.",
    responsibilities: [
      "Collaborated with designers and backend developers to implement UI designs and frontend functionality.",
      "Participated in code reviews and frontend implementation decisions.",
      "Developed and maintained browser extensions.",
    ],
    url: "https://melkradar.com/",
    urlLabel: "Visit Live Site",
    preview: "listings",
    accent: "#22d3ee",
  },
  {
    id: "fixsell",
    name: "Fixsell",
    category: "Web & Admin Platform",
    role: "Frontend Developer",
    description:
      "Developed customer-facing and administrative interfaces for Fixsell, focusing on reusable components and complex admin workflows.",
    responsibilities: [
      "Developed customer-facing and administrative interfaces.",
      "Configured Payload CMS and implemented custom admin panel functionality.",
      "Worked with complex data structures and administrative workflows.",
      "Maintained reusable component architecture.",
    ],
    technologies: ["React", "Next.js", "React Query", "Payload CMS"],
    url: "https://cafebazaar.ir/app/com.example.fixsell?ref=share",
    urlLabel: "View on Cafe Bazaar",
    preview: "admin",
    accent: "#60a5fa",
  },
  {
    id: "functionland",
    name: "FunctionLand",
    category: "File Management Application",
    role: "Frontend Developer",
    description:
      "Contributed to a file management application with advanced file management functionality and a responsive user interface.",
    responsibilities: [
      "Developed responsive layouts for different screen sizes.",
      "Implemented reusable frontend components.",
      "Contributed to the application architecture.",
    ],
    url: "https://play.google.com/store/apps/details?id=land.fx.files",
    urlLabel: "View on Google Play",
    preview: "files",
    accent: "#34d399",
  },
];
