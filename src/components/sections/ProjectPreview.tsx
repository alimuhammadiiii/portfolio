import type { CSSProperties } from "react";
import type { ProjectPreviewKind } from "../../data/projects";

interface ProjectPreviewProps {
  kind: ProjectPreviewKind;
  accent: string;
}

/**
 * Abstract, clearly illustrative UI mockups — decorative only, never
 * presented as real product screenshots.
 */
export function ProjectPreview({ kind, accent }: ProjectPreviewProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden p-4 select-none sm:p-6"
    >
      <div className="h-full w-full overflow-hidden rounded-xl border border-white/10 bg-night-800/90 shadow-2xl shadow-black/40">
        {/* Window title bar */}
        <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-2 h-1.5 w-20 rounded-full bg-white/10 sm:w-28" />
        </div>
        {kind === "booking" && <BookingMock accent={accent} />}
        {kind === "listings" && <ListingsMock accent={accent} />}
        {kind === "admin" && <AdminMock accent={accent} />}
        {kind === "files" && <FilesMock accent={accent} />}
      </div>
    </div>
  );
}

function tinted(accent: string): CSSProperties {
  return { backgroundColor: `${accent}26`, borderColor: `${accent}4d` };
}

function Bar({ className }: { className?: string }) {
  return <span className={`block rounded-full bg-white/10 ${className ?? ""}`} />;
}

function BookingMock({ accent }: { accent: string }) {
  const activeDays = new Set([9, 10, 16, 17, 23]);
  return (
    <div className="flex h-[calc(100%-2.4rem)] gap-3 p-3">
      <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.03] p-2.5">
        <Bar className="mb-2.5 h-1.5 w-14" />
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }, (_, index) => (
            <span
              key={index}
              className={`h-3 rounded-[4px] sm:h-3.5 ${
                activeDays.has(index) ? "" : "bg-white/8"
              }`}
              style={activeDays.has(index) ? tinted(accent) : undefined}
            />
          ))}
        </div>
      </div>
      <div className="w-[36%] space-y-1.5">
        <Bar className="mb-2 h-1.5 w-10" />
        {[0, 1, 2, 3, 4].map((slot) => (
          <div
            key={slot}
            className={`h-5 rounded-md border sm:h-6 ${slot === 1 ? "" : "border-white/8 bg-white/[0.03]"}`}
            style={slot === 1 ? tinted(accent) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function ListingsMock({ accent }: { accent: string }) {
  return (
    <div className="h-[calc(100%-2.4rem)] space-y-2.5 p-3">
      <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-2">
        <span className="h-2.5 w-2.5 rounded-full border border-white/25" />
        <Bar className="h-1.5 w-20 sm:w-28" />
        <span
          className="ml-auto h-4 w-10 rounded-md border"
          style={tinted(accent)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[0, 1].map((card) => (
          <div key={card} className="rounded-lg border border-white/8 bg-white/[0.03] p-2">
            <div
              className="h-12 rounded-md sm:h-14"
              style={{
                backgroundImage: `linear-gradient(135deg, ${accent}2e, transparent 70%), linear-gradient(45deg, rgba(255,255,255,0.04), transparent 60%)`,
              }}
            />
            <Bar className="mt-2 h-1.5 w-3/4" />
            <div className="mt-1.5 flex items-center justify-between">
              <Bar className="h-1.5 w-1/3" />
              <span
                className="h-2 w-8 rounded-full"
                style={{ backgroundColor: `${accent}59` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-[calc(100%-2.4rem)]">
      <div className="w-9 space-y-2 border-r border-white/8 p-2 sm:w-11">
        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            className={`block h-2 rounded-full ${item === 0 ? "" : "bg-white/10"}`}
            style={item === 0 ? { backgroundColor: `${accent}8c` } : undefined}
          />
        ))}
      </div>
      <div className="flex-1 space-y-2.5 p-3">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((stat) => (
            <div key={stat} className="h-8 rounded-lg border border-white/8 bg-white/[0.03] p-1.5">
              <Bar className="h-1 w-2/3" />
              <Bar className="mt-1.5 h-1.5 w-1/2" />
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/8">
          <div className="border-b border-white/8 px-2.5 py-1.5">
            <Bar className="h-1.5 w-12" />
          </div>
          {[0, 1, 2, 3].map((row) => (
            <div
              key={row}
              className="flex items-center justify-between border-b border-white/5 px-2.5 py-1.5 last:border-b-0"
            >
              <Bar className="h-1.5 w-1/3" />
              <span
                className="h-1.5 w-6 rounded-full"
                style={{ backgroundColor: row === 0 ? `${accent}8c` : "rgba(255,255,255,0.12)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilesMock({ accent }: { accent: string }) {
  return (
    <div className="h-[calc(100%-2.4rem)] p-3">
      <div className="mb-2.5 flex gap-1.5">
        {[0, 1, 2].map((tab) => (
          <span
            key={tab}
            className={`h-4 w-10 rounded-full sm:w-12 ${tab === 0 ? "" : "bg-white/8"}`}
            style={tab === 0 ? tinted(accent) : undefined}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((tile) => (
          <div
            key={tile}
            className="relative h-9 rounded-lg border bg-white/[0.03] sm:h-11"
            style={tile === 1 ? tinted(accent) : { borderColor: "rgba(255,255,255,0.08)" }}
          >
            <span
              className="absolute top-1.5 left-1.5 h-1.5 w-4 rounded-full"
              style={{
                backgroundColor:
                  tile === 1 ? `${accent}8c` : "rgba(255,255,255,0.15)",
              }}
            />
            <span className="absolute bottom-1.5 left-1.5 h-1 w-6 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center gap-2">
        <Bar className="h-1.5 flex-1" />
        <span
          className="h-1.5 w-1/2 rounded-full"
          style={{ backgroundColor: `${accent}8c` }}
        />
      </div>
    </div>
  );
}
