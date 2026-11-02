/**
 * Fixed, purely decorative atmospheric background.
 * Static (no animation) so it never competes with content or hurts performance.
 */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-48 right-[-12%] h-[36rem] w-[36rem] rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute top-[38%] left-[-14%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-[-18%] right-[18%] h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-[150px]" />
    </div>
  );
}
