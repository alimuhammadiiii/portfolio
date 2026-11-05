import type { ProjectImage } from "../../data/projects";
import { asset, cn } from "../../lib/utils";

interface ProjectScreenshotProps {
  image: ProjectImage;
  className?: string;
  eager?: boolean;
}

/**
 * Renders a real product screenshot. Defaults to a full-height,
 * naturally-proportioned image; pass sizing classes via `className`.
 */
export function ProjectScreenshot({ image, className, eager = false }: ProjectScreenshotProps) {
  return (
    <img
      src={asset(image.src)}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("object-cover object-top", className)}
    />
  );
}
