import Link from "next/link";
import type { Section } from "@/site.config";

type CtaSectionProps = {
  section: Extract<Section, { type: "cta" }>;
};

export default function CtaSection({ section }: CtaSectionProps) {
  const { eyebrow, heading, blurb, button } = section;

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 shadow-soft">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                  {eyebrow}
                </p>
              )}
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-fg">
                {heading}
              </h2>
              {blurb && (
                <p className="mt-2 text-sm text-fg/70 leading-relaxed">
                  {blurb}
                </p>
              )}
            </div>

            <div className="shrink-0">
              <Link
                href={button.href}
                className="inline-flex w-full sm:w-auto justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                {button.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
