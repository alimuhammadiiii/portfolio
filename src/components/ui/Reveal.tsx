import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../../lib/utils";

export interface RevealProps extends PropsWithChildren {
  className?: string;
  /** Delay in seconds before the entrance animation starts. */
  delay?: number;
  /** Vertical offset (px) the content animates from. */
  y?: number;
}

/**
 * Fades and slides content in when it enters the viewport.
 * Renders plain markup (no animation) when the user prefers reduced motion.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
