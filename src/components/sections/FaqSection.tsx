import type { Section } from "@/site.config";

type FaqSectionProps = {
  section: Extract<Section, { type: "faq" }>;
};

export default function FaqSection({ section }: FaqSectionProps) {
  const { eyebrow, heading, items } = section;

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
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

        {/* FAQ list */}
        <div className="mt-8 rounded-3xl border border-border bg-bg shadow-soft overflow-hidden">
          <div className="divide-y divide-border">
            {items.map((it, idx) => (
              <details key={`${it.q}-${idx}`} className="group p-6 sm:p-8">
                <summary className="cursor-pointer list-none select-none">
                  <div className="flex items-start justify-between gap-6">
                    <div className="text-sm sm:text-base font-semibold text-fg">
                      {it.q}
                    </div>

                    {/* Plus / minus indicator */}
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-muted/40 text-fg/70">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">–</span>
                    </div>
                  </div>
                </summary>

                <div className="mt-3 text-sm text-fg/70 leading-relaxed max-w-prose">
                  {it.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
