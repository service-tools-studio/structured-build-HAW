import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Be_Vietnam_Pro,
  Inter,
  Manrope,
  Instrument_Serif,
  Montserrat,
} from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/site.config";

export const recoleta = localFont({
  src: [
    {
      path: "../fonts/Recoleta Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Recoleta Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Recoleta SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-recoleta",
  display: "swap",
});

export const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
});

export const fonts = {
  beVietnam,
  montserrat,
  inter,
  manrope,
  instrument,
  recoleta,
};

export type FontKey = keyof typeof fonts;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const c = site.theme.colors;
  const { bodyFont, headingFont } = site.theme;
  const headingFontObj = fonts[headingFont as keyof typeof fonts];
  const bodyFontObj = fonts[bodyFont as keyof typeof fonts];

  return (
    <html
      lang="en"
      className={`${bodyFontObj.variable} ${headingFontObj.variable} bg-bg text-fg`} // must set body font first, then heading
      style={{
        ["--font-sans" as any]: `var(--font-${site.theme.bodyFont})`,
        ["--font-heading" as any]: `var(--font-${site.theme.headingFont})`,

        ["--bg" as any]: c.bg,
        ["--fg" as any]: c.fg,
        ["--muted" as any]: c.muted,
        ["--border" as any]: c.border,
        ["--primary" as any]: c.primary,
        ["--accent" as any]: c.accent,
      }}
    >
      <body className="min-h-screen font-sans">
        <Header nav={site.pages.map((p) => ({ label: p.navLabel, href: `/${p.slug}` }))} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
