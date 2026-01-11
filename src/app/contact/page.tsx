import { site } from "@/site.config";

export default function ContactPage() {
  const {
    title,
    blurb,
    email,
    city,
    leftPanel,
  } = site.contact;

  return (
    <>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
            Contact
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-fg/70 max-w-2xl">
            {blurb}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-border bg-bg shadow-soft overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: Guidance */}
              {leftPanel && <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-border">
                <h2 className="text-xl font-semibold tracking-tight">
                  {leftPanel.heading}
                </h2>
                <p className="mt-3 text-sm text-fg/70 max-w-prose">
                  {leftPanel.description}
                </p>

                <ul className="mt-6 grid gap-3 text-sm text-fg/70">
                  {leftPanel.points && leftPanel.points.map((p) => {
                    return <li key={p} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>;
                  })}
                </ul>

                {leftPanel.note && <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-fg/70">
                  <span className="font-semibold text-fg">Note:</span> {leftPanel.note}
                </div>}
              </div>}

              {/* Right: Contact method */}
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-fg/60">
                  Get in touch
                </h3>

                <div className="mt-6 grid gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-fg">Email</div>
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 inline-block text-primary hover:underline"
                    >
                      {email}
                    </a>
                  </div>

                  <div>
                    <div className="font-semibold text-fg">Location</div>
                    <div className="mt-1 text-fg/70">{city}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                  >
                    Send an email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
