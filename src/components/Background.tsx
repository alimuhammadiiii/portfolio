/**
 * Fixed, purely decorative atmospheric background.
 * Static gradients only — no blur filters or animation, so it never
 * competes with content or hurts performance.
 */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 78% -5%, rgba(139, 92, 246, 0.08), transparent 65%), radial-gradient(ellipse 45% 35% at 8% 45%, rgba(99, 102, 241, 0.05), transparent 65%)",
        }}
      />
    </div>
  );
}
