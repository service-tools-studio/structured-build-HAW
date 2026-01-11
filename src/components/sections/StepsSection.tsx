import type { Section } from "@/site.config";

type StepsSectionProps = {
  section: Extract<Section, { type: "steps" }>;
};

export default function StepsSection({ section }: StepsSectionProps) {
  const { eyebrow, heading, steps, description } = section;

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-bg shadow-soft overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-border">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                {eyebrow}
              </p>
            )}

            <h2 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight">
              {heading}
            </h2>

            {description && <p className="mt-2 text-sm text-fg/70 max-w-prose">
              {description}
            </p>}
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {steps.map((s, idx) => (
                <div
                  key={`${s.title}-${idx}`}
                  className="rounded-2xl border border-border bg-muted/40 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-bg border border-border flex items-center justify-center text-sm font-semibold">
                      {idx + 1}
                    </div>
                    <div className="text-sm font-semibold">{s.title}</div>
                  </div>
                  <div className="mt-3 text-sm text-fg/70">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
