export interface ProjectImage {
  /** Path relative to the deploy base (public/ asset). */
  src: string;
  width: number;
  height: number;
  alt: string;
}

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
  /** Real product screenshot. Projects without one render a typographic panel. */
  image?: ProjectImage;
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
      "Applied UI/UX principles, accessibility, and reusable design patterns.",
      "Contributed to product planning and user flow improvements.",
    ],
    url: "https://nobateki.ir/",
    urlLabel: "Visit Website",
    featured: true,
    image: {
      src: "images/projects/nobateki.png",
      width: 364,
      height: 611,
      alt: "Nobateki online booking interface on a mobile screen",
    },
  },
  {
    id: "fixsell",
    name: "Fixsell",
    category: "Web & Admin Platform",
    role: "Frontend Developer",
    description:
      "Developed customer-facing and administrative interfaces, focusing on reusable components and complex admin workflows.",
    responsibilities: [
      "Developed customer-facing and administrative interfaces.",
      "Configured Payload CMS and developed custom admin panel functionality.",
      "Worked with complex data structures and administrative workflows.",
      "Maintained reusable component architecture.",
    ],
    technologies: ["React", "Next.js", "React Query", "Payload CMS"],
    url: "https://cafebazaar.ir/app/com.example.fixsell?ref=share",
    urlLabel: "View Project",
    image: {
      src: "images/projects/fixsell.jpg",
      width: 1080,
      height: 2021,
      alt: "Fixsell application screens",
    },
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
    urlLabel: "View Project",
    image: {
      src: "images/projects/functionland.webp",
      width: 648,
      height: 1440,
      alt: "FunctionLand file management application interface",
    },
  },
  {
    id: "melkradar",
    name: "MelkRadar",
    category: "Real-Estate Platform",
    role: "Frontend Developer",
    description:
      "Contributed to a real-estate platform focused on helping users explore and compare property listings.",
    responsibilities: [
      "Collaborated with designers and backend developers to implement UI designs.",
      "Participated in code reviews and frontend implementation strategies.",
      "Developed and maintained browser extensions.",
    ],
    url: "https://melkradar.com/",
    urlLabel: "Visit Website",
  },
];
