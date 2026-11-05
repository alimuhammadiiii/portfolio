import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { asset } from "../../lib/utils";
import { Button } from "../ui/Button";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";

const socialLinks = [
  {
    label: "GitHub",
    title: `${profile.name} on GitHub`,
    href: profile.github,
    external: true,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    title: `${profile.name} on LinkedIn`,
    href: profile.linkedin,
    external: true,
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    title: `Email ${profile.name}`,
    href: profile.emailHref,
    external: false,
    icon: null,
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-6">
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
              className="mt-7 text-[clamp(3.25rem,9vw,6.25rem)] leading-[1.02] font-semibold tracking-tight text-mist-100"
            >
              Hi, I&rsquo;m <span className="text-gradient">Ali</span>.
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
              <span aria-hidden="true" className="h-px w-10 bg-white/12" />
              <ul className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.title}
                      title={social.title}
                      {...(social.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="glass flex h-11 w-11 items-center justify-center rounded-xl text-mist-400 transition-colors hover:border-white/25 hover:text-mist-100"
                    >
                      {social.icon ? (
                        <social.icon className="h-5 w-5" />
                      ) : (
                        <Mail size={20} aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={32}>
          <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[24rem] lg:max-w-[27rem]">
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] font-bold tracking-tight whitespace-nowrap text-transparent uppercase select-none sm:text-[5.5rem] lg:text-[6.5rem] [-webkit-text-stroke:1px_rgba(244,244,244,0.10)]"
            >
              Frontend
            </span>
            <div
              aria-hidden="true"
              className="absolute inset-x-2 bottom-4 h-3/5"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 70% 55% at 50% 70%, rgba(139, 92, 246, 0.14), transparent 70%)",
              }}
            />
            <img
              src={asset("images/ali-profile.png")}
              alt="Portrait of Ali Muhammadi"
              width={871}
              height={900}
              fetchPriority="high"
              decoding="async"
              className="portrait-fade relative z-10 mx-auto h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
