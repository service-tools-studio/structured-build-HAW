"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/site.config";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header({ nav }: { nav?: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll when menu is open (optional but nice)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src={site.brand.logo}
            alt={`${site.brand.name} logo`}
            className="h-9 w-9 rounded-xl object-contain"
          />
          <div className="leading-tight">
            <div className="text-sm font-heading font-semibold">{site.brand.name}</div>
            <div className="text-xs text-fg/60">{site.brand.tagline}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav && nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-fg/70 hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-bg shadow-soft hover:opacity-95"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-border bg-bg p-2 text-fg shadow-sm hover:bg-muted"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
            <div className="grid gap-2">
              {nav && nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm font-semibold text-fg/80 hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-bg shadow-soft hover:opacity-95"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Optional: tap-to-close overlay behind panel */}
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 top-16 z-[-1] bg-black/10"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
