import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { site } from "@/site.config";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative border-b border-border">
          {/* Sticky background (stays pinned) */}
          <div className="sticky top-16 h-[75vh] z-0">
            <div className="relative h-full overflow-hidden">
              <Image
                src={site.hero.image}
                alt="Hero"
                fill
                priority
                className="object-cover"
              />

              {/* Fade from left → transparent */}
              <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/30 via-90% to-transparent" />
            </div>
          </div>

          {/* Content overlays the sticky background */}
          <div className="relative z-10 -mt-[75vh] pt-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-28">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60">
                  Structured Build
                </p>

                <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
                  {site.hero.headline}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-fg/70">
                  {site.hero.subhead}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {site.hero.pills.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center rounded-full border border-border bg-bg/90 px-3 py-1 text-xs font-semibold text-fg/70 shadow-sm backdrop-blur"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={site.hero.primaryCta.href}
                    className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                  >
                    {site.hero.primaryCta.label}
                  </Link>
                  <Link
                    href={site.hero.secondaryCta.href}
                    className="rounded-full border border-border bg-bg/90 px-5 py-3 text-sm font-semibold text-fg hover:bg-muted backdrop-blur"
                  >
                    {site.hero.secondaryCta.label}
                  </Link>
                </div>
              </div>

              {/* This is the "scroll for a bit" amount */}
              <div className="h-[clamp(24rem,40vh,36rem)] sm:h-[clamp(20rem,30vh,28rem)]" />
            </div>
          </div>
        </section>

        <ScopeCard />
      </main>

      <Footer />
    </div>
  );
}


function ScopeCard() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-bg shadow-soft overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-border">
              <h2 className="text-xl font-semibold tracking-tight">{site.services.title}</h2>
              <div className="mt-6 grid gap-4">
                {site.services.items.map((it) => (
                  <div key={it.title} className="rounded-2xl border border-border bg-muted/40 p-4">
                    <div className="text-sm font-semibold">{it.title}</div>
                    <div className="mt-1 text-sm text-fg/70">{it.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {site.services.addOns.length > 0 && (
                <><h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-fg/60">
                  Add-ons
                </h3><ul className="mt-4 grid gap-2 text-sm text-fg/70">
                    {site.services.addOns.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-accent" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul></>)}
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-fg/60">
                Handled separately
              </h3>
              <small className="italic text-fg/60">(by your agency or team)</small>
              <ul className="mt-4 grid gap-2 text-sm text-fg/70">
                {site.services.handledSeparately.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-accent" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-fg/70"> <span className="font-semibold text-fg">Note:</span> The structured build has a defined scope and fast timeline. Requests beyond that scope are discussed and quoted separately to ensure clarity and alignment. </div>

              <div className="mt-6">
                <Link href="/contact" className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95">
                  Start your build
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-fg/60">
        {site.footer.finePrint}
      </div>
    </footer>
  );
}
