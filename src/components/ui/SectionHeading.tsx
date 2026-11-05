import { cn } from "../../lib/utils";
import { Reveal } from "./Reveal";

export interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 sm:mb-16", center && "text-center")}>
      <p
        className={cn(
          "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-400",
          center && "justify-center",
        )}
      >
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-violet-400/50" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-mist-100 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 max-w-2xl text-base leading-relaxed text-mist-400", center && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
