import type { Section } from "@/site.config";
import { Sparkles, HeartHandshake, Leaf, Sun } from "lucide-react";

type StepsSectionProps = {
  section: Extract<Section, { type: "steps" }>;
};

const STEP_ICONS = [Sparkles, HeartHandshake, Leaf, Sun];

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

            {description && (
              <p className="mt-2 text-sm text-fg/70 max-w-prose">
                {description}
              </p>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {steps.map((s, idx) => {
                const Icon = STEP_ICONS[idx % STEP_ICONS.length];

                return (
                  <div
                    key={`${s.title}-${idx}`}
                    className="rounded-2xl border border-border bg-muted/40 p-5"
                  >
                    <div className="flex items-center gap-3">
                      {/* Merged icon + number */}
                      <div className="relative h-10 w-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-bg border border-border text-[10px] font-semibold flex items-center justify-center text-fg">
                          {idx + 1}
                        </span>
                      </div>

                      <div className="text-sm font-semibold">{s.title}</div>
                    </div>

                    <div className="mt-3 text-sm text-fg/70">{s.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
