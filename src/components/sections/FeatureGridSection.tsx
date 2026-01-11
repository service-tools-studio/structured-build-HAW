import type { Section } from "@/site.config";

type FeatureGridSectionProps = {
  section: Extract<Section, { type: "featureGrid" }>;
};

export default function FeatureGridSection({ section }: FeatureGridSectionProps) {
  const { eyebrow, heading, items } = section;

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Optional eyebrow + heading */}
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-muted/40 p-4"
            >
              <div className="text-sm font-semibold">{it.title}</div>
              <div className="mt-1 text-sm text-fg/70">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
