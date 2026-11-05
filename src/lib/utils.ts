export type ClassValue = string | false | null | undefined;

/** Join conditional class names into a single string. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Prefix a public/ asset path with the deploy base so it works both in
 * dev ("/") and on GitHub Pages ("/portfolio/").
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base.endsWith("/") ? base.slice(0, -1) : base}/${path.replace(/^\//, "")}`;
}
