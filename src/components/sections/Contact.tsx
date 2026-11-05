import type { ComponentType } from "react";
import { Download, Mail, Phone } from "lucide-react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

interface ContactCard {
  label: string;
  value: string;
  href: string;
  external: boolean;
  icon: ComponentType<{ className?: string }>;
}

const contactCards: ContactCard[] = [
  {
    label: "Email",
    value: profile.email,
    href: profile.emailHref,
    external: false,
    icon: ({ className }) => <Mail size={20} aria-hidden="true" className={className} />,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: profile.phoneHref,
    external: false,
    icon: ({ className }) => <Phone size={20} aria-hidden="true" className={className} />,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
    icon: ({ className }) => <LinkedInIcon className={className} />,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    external: true,
    icon: ({ className }) => <GitHubIcon className={className} />,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        center
        index="06"
        eyebrow="Contact"
        title="Let's connect."
        description="I'm interested in connecting with teams and professionals who value thoughtful design, clean code, and great user experiences."
      />

      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactCards.map((card, index) => (
          <Reveal key={card.label} delay={index * 0.06} className="h-full">
            <a
              href={card.href}
              {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass glass-hover flex h-full flex-col gap-2.5 rounded-2xl p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/12 text-violet-300 ring-1 ring-white/10">
                <card.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-mist-100">{card.label}</span>
              <span className="text-sm break-all text-mist-400">{card.value}</span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12 text-center">
        {profile.resumeUrl ? (
          <Button href={profile.resumeUrl} variant="secondary" size="lg">
            <Download size={18} aria-hidden="true" />
            Download Résumé
          </Button>
        ) : (
          <p className="text-sm text-mist-500">Résumé available on request.</p>
        )}
      </Reveal>
    </Section>
  );
}
