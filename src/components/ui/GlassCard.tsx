import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: ReactNode;
}

export function GlassCard({ hover = false, className, children, ...rest }: GlassCardProps) {
  return (
    <div className={cn("glass rounded-2xl", hover && "glass-hover", className)} {...rest}>
      {children}
    </div>
  );
}
