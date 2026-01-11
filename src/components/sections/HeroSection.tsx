import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/site.config';
import { Section } from '@/site.config';

type HeroSectionProps = {
  section: Extract<Section, { type: "hero" }>;
};

export default function HeroSection({ section }: HeroSectionProps) {
  const {
    eyebrow,
    headline,
    subhead,
    image,
    pills,
    primaryCta,
    secondaryCta,
  } = section;

  return (
    <>
      {/* HERO (Desktop: overlay + fade + sticky scroll) */}
      <section className="relative border-b border-border hidden sm:block translate-y-5">
        {/* Sticky background */}
        <div className="sticky top-16 h-[75vh] z-0">
          {/* This is the CLIP boundary: same width as Header */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6 h-full overflow-hidden">
            {/* This can translate without creating horizontal scroll */}
            <div className="relative h-full translate-x-20 scale-[0.99]">
              {image && (
                <Image
                  src={image}
                  alt="Hero"
                  fill
                  priority
                  className="object-cover sm:object-[70%_center]"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/30 via-65% to-transparent" />
              <div className="absolute inset-0 bg-bg/1" />
            </div>
          </div>
        </div>

        {/* Desktop overlay content */}
        <div className="relative z-10 -mt-[75vh] -translate-y-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28">
            <div className="max-w-[clamp(20rem,45vw,36rem)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                {eyebrow}
              </p>

              <h1 className="font-heading mt-3 text-3xl sm:text-5xl font-semibold tracking-tight max-w-[18ch] sm:max-w-none">
                {headline}
              </h1>

              <p className="mt-5 text-base sm:text-lg text-fg/70">
                {subhead}
              </p>

              {/* Pills: lighter + a bit more breathing room */}
              <div className="mt-8 flex flex-wrap gap-2">
                {pills && pills.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-full border bg-bg/50 border-border/50 px-3 py-1 text-xs font-semibold text-fg/70 shadow-sm backdrop-blur"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* CTAs: more separation + secondary slightly quieter */}
              <div className="mt-9 flex flex-wrap gap-4">
                {primaryCta && <Link
                  href={primaryCta.href}
                  className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                >
                  {primaryCta.label}
                </Link>}

                {secondaryCta && <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-border/80 bg-bg/70 px-5 py-3 text-sm font-semibold text-fg/90 hover:bg-muted/70 backdrop-blur"
                >
                  {secondaryCta.label}
                </Link>}
              </div>
            </div>

            {/* Sticky-scroll spacer (desktop: medium) */}
            <div className="h-[clamp(16rem,24vh,22rem)]" />
          </div>
        </div>
      </section>

      {/* HERO (Mobile: no overlay, no fade, normal flow) */}
      <section className="sm:hidden border-b border-border">
        {/* Image */}
        <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
          {image && <Image
            src={image}
            alt="Hero"
            fill
            priority
            className="object-cover"
          />}
        </div>

        {/* Text below image */}
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            {headline}
          </h1>

          <p className="mt-5 text-base text-fg/70">{subhead}</p>

          {/* Pills: lighter, consistent with desktop */}
          <div className="mt-8 flex flex-wrap gap-2">
            {pills && pills.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full border border-border/60 bg-bg/70 px-3 py-1 text-xs font-semibold text-fg/70 shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>

          {/* CTAs: more separation + secondary quieter */}
          <div className="mt-9 flex flex-wrap gap-4">
            {primaryCta && <Link
              href={primaryCta.href}
              className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
            >
              {primaryCta.label}
            </Link>}

            {secondaryCta && <Link
              href={secondaryCta.href}
              className="rounded-full border border-border/80 bg-bg/70 px-5 py-3 text-sm font-semibold text-fg/90 hover:bg-muted/70"
            >
              {secondaryCta.label}
            </Link>}
          </div>
        </div>
      </section>
    </>
  )
}