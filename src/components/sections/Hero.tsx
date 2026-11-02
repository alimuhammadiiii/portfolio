import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "Email", href: profile.emailHref, external: false },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center pt-32 pb-20 sm:pt-36"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <p className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-mist-300">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              {profile.role} · {profile.experienceYears} Years of Experience
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="mt-6 max-w-2xl text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Frontend Developer crafting{" "}
              <span className="text-gradient">modern, responsive web experiences.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#projects" size="lg">
                Explore My Work
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex items-center gap-4">
              <span className="text-xs tracking-[0.2em] uppercase text-mist-500">Find me on</span>
              <span aria-hidden="true" className="h-px w-10 bg-white/10" />
              <ul className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={`${profile.name} on ${social.label}`}
                      {...(social.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="glass flex h-11 w-11 items-center justify-center rounded-xl text-mist-400 transition-colors hover:border-white/25 hover:text-white"
                    >
                      {social.label === "LinkedIn" && <LinkedInIcon className="h-5 w-5" />}
                      {social.label === "GitHub" && <GitHubIcon className="h-5 w-5" />}
                      {social.label === "Email" && <Mail size={20} aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="hidden lg:block">
          <div className="relative mx-auto w-full max-w-[24rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-600/25 via-transparent to-cyan-400/15 blur-2xl"
            />
            <div className="glass relative flex aspect-square items-center justify-center rounded-[2.5rem]">
              <span
                aria-hidden="true"
                className="text-gradient text-8xl font-semibold tracking-tight select-none"
              >
                {profile.initials}
              </span>
              <span className="sr-only">
                {profile.name} — {profile.role}
              </span>
            </div>
            <div className="glass absolute top-10 -left-8 animate-float rounded-xl px-3.5 py-2 text-sm font-medium text-mist-100">
              React
            </div>
            <div className="glass absolute top-1/3 -right-6 animate-float rounded-xl px-3.5 py-2 text-sm font-medium text-mist-100 [animation-delay:1.5s]">
              Next.js
            </div>
            <div className="glass absolute bottom-12 -left-4 animate-float rounded-xl px-3.5 py-2 text-sm font-medium text-mist-100 [animation-delay:3s]">
              TypeScript
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
