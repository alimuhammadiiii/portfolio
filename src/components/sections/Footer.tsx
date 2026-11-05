import { Mail } from "lucide-react";
import { footerLinks } from "../../data/site";
import { profile } from "../../data/profile";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Email", href: profile.emailHref },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <a
            href="#top"
            aria-label="Ali Muhammadi — back to top"
            className="flex items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-violet-500/5 font-mono text-sm font-semibold text-mist-100 ring-1 ring-white/15">
              AM
            </span>
            <span className="text-sm font-medium text-mist-100">Ali Muhammadi</span>
          </a>
          <p className="mt-3 text-xs text-mist-500">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-mist-400 transition-colors hover:text-mist-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={`${profile.name} on ${social.label}`}
                {...(social.label === "Email"
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-mist-400 transition-colors hover:border-white/25 hover:text-mist-100"
              >
                {social.label === "LinkedIn" && <LinkedInIcon className="h-4.5 w-4.5" />}
                {social.label === "GitHub" && <GitHubIcon className="h-4.5 w-4.5" />}
                {social.label === "Email" && <Mail size={18} aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-mist-500 sm:px-8">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
