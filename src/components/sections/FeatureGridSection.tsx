import type { Section } from "@/site.config";
import Link from "next/link";
import { Heart, Waves, Dumbbell, BookOpen, ArrowUpRight } from "lucide-react";

type FeatureGridSectionProps = {
  section: Extract<Section, { type: "featureGrid" }>;
};

const FEATURE_ICONS = [
  Heart, // Women's circles
  Waves, // Sound healing
  Dumbbell, // Personal training + nutrition
  BookOpen, // eBook
];

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

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
          {items.map((it, idx) => {
            const Icon = FEATURE_ICONS[idx % FEATURE_ICONS.length];

            // Treat href as "present" only if it's a non-empty string
            const href = (it.href ?? "").trim();
            const hasHref = href.length > 0;

            const cardClasses = [
              "rounded-2xl border border-border bg-muted/40 p-5",
              "transition will-change-transform",
              hasHref ? "cursor-pointer hover:-translate-y-[1px] hover:shadow-soft" : "",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
            ].join(" ");

            const content = (
              <div className="flex items-start gap-3">
                {/* Icon badge */}
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/15 text-primary flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-semibold">{it.title}</div>
                  <div className="mt-1 text-sm text-fg/70">{it.desc}</div>

                  {hasHref && (
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-fg/60">
                      <span>Tap to view more</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </div>
            );

            const wrapperClasses = ["group block", cardClasses].join(" ");

            if (!hasHref) {
              return (
                <div key={it.title} className={wrapperClasses}>
                  {content}
                </div>
              );
            }

            if (isExternalHref(href)) {
              return (
                <a
                  key={it.title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={wrapperClasses}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={it.title} href={href} className={wrapperClasses}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
