export const site = {
  /** Live GitHub Pages URL. Replace if the site moves to a custom domain. */
  url: "https://alimuhammadiiii.github.io/ali-muhammadi-portfolio",
  title: "Ali Muhammadi — Frontend Developer",
  description:
    "Portfolio of Ali Muhammadi, a Frontend Developer with 3+ years of experience building fast, accessible, and user-friendly web applications with React, Next.js, and TypeScript.",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks: NavLink[] = [
  ...navLinks.slice(0, 4),
  { label: "Education", href: "#education" },
  ...navLinks.slice(4),
];
