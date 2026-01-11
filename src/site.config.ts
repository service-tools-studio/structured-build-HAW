import { FontKey } from './app/layout';
export type Section =
  | {
    type: "hero";
    eyebrow: string;
    headline: string;
    subhead?: string;
    image?: string;
    pills?: string[];
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  }
  | {
    type: "featureGrid";
    eyebrow?: string;
    heading: string;
    items: { title: string; desc: string }[];
  }
  | {
    type: "steps";
    eyebrow?: string;
    heading: string;
    steps: { title: string; desc: string }[];
    description?: string;
  }
  | {
    type: "testimonials";
    eyebrow?: string;
    heading: string;
    items: { quote: string; name: string; meta?: string }[];
  }
  | {
    type: "faq";
    eyebrow?: string;
    heading: string;
    items: { q: string; a: string }[];
  }
  | {
    type: "cta";
    eyebrow?: string;
    heading: string;
    blurb?: string;
    button: { label: string; href: string };
  };

export type SitePage = {
  slug: string; // "services" -> /services (via /[slug])
  navLabel: string;
  meta?: { title?: string; description?: string };
  sections: Section[];
};

export const site = {
  brand: {
    name: "Heart Aligned Wellness LLC",
    tagline: "Women's wellness support in Portland.",
    logo: "/brand/heart-aligned-logo.png",
  },

  theme: {
    bodyFont: "beVietnam" as FontKey,
    headingFont: "recoleta" as FontKey,
    colors: {
      bg: "330 100% 98%", // pink wash 💗
      fg: "240 10% 8%",
      muted: "330 40% 94%",
      border: "330 25% 85%",
      primary: "330 85% 62%",
      accent: "330 85% 65%",
    },
  },

  pages: [
    {
      slug: "offerings",
      navLabel: "Offerings",
      meta: {
        title: "Offerings",
        description:
          "Women’s circles, crystal bowl sound healing, personal training + supportive nutrition, and a digital product to soften perfectionism.",
      },
      sections: [
        {
          type: "featureGrid",
          eyebrow: "Offerings",
          heading: "What we offer",
          items: [
            {
              title: "Women’s circles (Temple of Nurturing)",
              desc: "Curated evenings of connection, reflection, and grounded sisterhood in the inner NE Portland area.",
            },
            {
              title: "Crystal singing bowl sound healing",
              desc: "Private or small-group sessions designed for deep relaxation, integration, and emotional reset.",
            },
            {
              title: "Personal training + supportive nutrition",
              desc: "Kelsey brings personal training and GAPS-certified nutritional support for sustainable strength, energy, and structure.",
            },
            {
              title: "Get Over Perfectionism - eBook",
              desc: "A self-paced experience to soften self-criticism, build self-trust, and take aligned action without burning out.",
            },
          ],
        } satisfies Extract<Section, { type: "featureGrid" }>,

        {
          type: "featureGrid",
          eyebrow: "Optional",
          heading: "Add-ons",
          items: [
            {
              title: "Private coaching intensives",
              desc: "Deeper, focused support when you want momentum and clarity.",
            },
            {
              title: "Custom event facilitation",
              desc: "For teams, retreats, and private groups — scoped to your space and goals.",
            },
            {
              title: "Email marketing setup",
              desc: "Welcome + nurture sequences to support your community and offers.",
            },
            {
              title: "Payments + scheduling integrations",
              desc: "Stripe, Calendly, and related tools — set up cleanly and simply.",
            },
          ],
        } satisfies Extract<Section, { type: "featureGrid" }>,

        {
          type: "featureGrid",
          eyebrow: "Boundaries",
          heading: "Handled separately",
          items: [
            {
              title: "Clinical or medical care",
              desc: "We are not a replacement for medical or clinical support.",
            },
            {
              title: "Crisis support",
              desc: "If you’re in crisis, please seek immediate local support resources.",
            },
            {
              title: "Diagnosis or treatment",
              desc: "We do not diagnose or treat medical conditions.",
            },
          ],
        } satisfies Extract<Section, { type: "featureGrid" }>,

        {
          type: "cta",
          eyebrow: "Ready to begin?",
          heading: "Reach out with what you’re interested in.",
          blurb:
            "Send a note with what you’re looking for (circles, sound healing, training, or the Get Over Perfectionism eBook). We’ll reply with next steps and availability.",
          button: { label: "Contact", href: "/contact" },
        } satisfies Extract<Section, { type: "cta" }>,
      ],
    },

    {
      slug: "process",
      navLabel: "Process",
      meta: {
        title: "Process",
        description: "A calm, defined process from first contact to integration.",
      },
      sections: [
        {
          type: "steps",
          eyebrow: "How it works",
          heading: "A calm, defined process",
          description:
            "A clear flow that keeps things grounded and practical — so you leave with real integration.",
          steps: [
            {
              title: "Connect",
              desc: "Reach out with what you’re looking for and your timing.",
            },
            {
              title: "Choose an offering",
              desc: "We’ll recommend the best fit: circle, sound healing, training, or digital.",
            },
            {
              title: "Arrive + receive",
              desc: "You’re guided through a grounded experience designed for real integration.",
            },
            {
              title: "Integrate",
              desc: "You’ll leave with practical next steps—not just a good night.",
            },
          ],
        } satisfies Extract<Section, { type: "steps" }>,

        {
          type: "cta",
          eyebrow: "Next step",
          heading: "Want support choosing the right offering?",
          blurb: "Send a note and we’ll point you toward the best fit.",
          button: { label: "Contact", href: "/contact" },
        } satisfies Extract<Section, { type: "cta" }>,
      ],
    },

    {
      slug: "reviews",
      navLabel: "Reviews",
      meta: {
        title: "Reviews",
        description: "What people say after circles and sound healing sessions.",
      },
      sections: [
        {
          type: "testimonials",
          eyebrow: "What people say",
          heading: "Gentle, grounded, and powerful",
          items: [
            {
              quote:
                "I left feeling softer and more present in my body—like my nervous system finally exhaled.",
              name: "Circle attendee",
              meta: "Portland",
            },
            {
              quote:
                "The sound healing was both gentle and powerful. I slept deeply and felt clearer for days after.",
              name: "Client",
              meta: "Sound healing session",
            },
          ],
        } satisfies Extract<Section, { type: "testimonials" }>,

        {
          type: "cta",
          eyebrow: "Join us",
          heading: "Ready to soften and come home to yourself?",
          blurb: "Reach out and we’ll share next steps and availability.",
          button: { label: "Contact", href: "/contact" },
        } satisfies Extract<Section, { type: "cta" }>,
      ],
    },

    {
      slug: "faq",
      navLabel: "FAQ",
      meta: {
        title: "Frequently Asked Questions",
        description: "Common questions about circles, sound healing, and logistics.",
      },
      sections: [
        {
          type: "faq",
          eyebrow: "FAQ",
          heading: "Frequently Asked Questions",
          items: [
            {
              q: "Where are circles hosted?",
              a: "Circles are hosted in the inner NE Portland area. The exact address is shared after registration to keep the space private and intentional.",
            },
            {
              q: "Do I need experience with circles or sound healing?",
              a: "No. You can come exactly as you are—curious, nervous, excited, tender, all of it.",
            },
            {
              q: "Is the Get Over Perfectionism eBook included with circles?",
              a: "Not by default. The Get Over Perfectionism eBook is available separately, and we sometimes offer bundles or seasonal promos.",
            },
            {
              q: "What should I bring?",
              a: "Wear something comfortable. For circles, bring a journal if you’d like. We’ll share any additional guidance after you register.",
            },
          ],
        } satisfies Extract<Section, { type: "faq" }>,

        {
          type: "cta",
          eyebrow: "Still wondering?",
          heading: "Ask a question.",
          blurb: "Send a note and we’ll reply with clarity and care.",
          button: { label: "Contact", href: "/contact" },
        } satisfies Extract<Section, { type: "cta" }>,
      ],
    },
  ] satisfies SitePage[],

  // Home is the dedicated route (/)
  home: {
    sections: [
      {
        type: "hero",
        eyebrow: "A space to soften",
        headline: "Return to your heart. Return to your truth.",
        subhead:
          "Heart Aligned Wellness blends women’s circles, crystal bowl sound healing, and practical support to help you soften perfectionism, build regulation, and live with more ease.",
        primaryCta: { label: "Join a circle", href: "/contact" },
        secondaryCta: { label: "Explore offerings", href: "/offerings" },
        image: "/images/hero.png",
        pills: ["Portland-based", "Women's Community", "Embodied spirituality"],
      },
      {
        type: "featureGrid",
        eyebrow: "Offerings",
        heading: "What we offer",
        items: [
          {
            title: "Women’s circles (Temple of Nurturing)",
            desc: "Curated evenings of connection, reflection, and grounded sisterhood in the inner NE Portland area.",
          },
          {
            title: "Crystal singing bowl sound healing",
            desc: "Private or small-group sessions designed for deep relaxation, integration, and emotional reset.",
          },
          {
            title: "Personal training + supportive nutrition",
            desc: "Kelsey brings personal training and GAPS-certified nutritional support for sustainable strength, energy, and structure.",
          },
          {
            title: "Get Over Perfectionism eBook",
            desc: "A self-paced experience to soften self-criticism, build self-trust, and take aligned action without burning out.",
          },
        ],
      },
      {
        type: "steps",
        eyebrow: "How it works",
        heading: "A calm, defined process",
        description:
          "A clear flow that keeps things grounded and practical — so you leave with real integration.",
        steps: [
          {
            title: "Connect",
            desc: "Reach out with what you’re looking for and your timing.",
          },
          {
            title: "Choose an offering",
            desc: "We’ll recommend the best fit: circle, sound healing, training, or digital.",
          },
          {
            title: "Arrive + receive",
            desc: "You’re guided through a grounded experience designed for real integration.",
          },
          {
            title: "Integrate",
            desc: "You’ll leave with practical next steps—not just a good night.",
          },
        ],
      },
      {
        type: "cta",
        eyebrow: "Ready to begin?",
        heading: "Reach out with what you’re interested in.",
        blurb:
          "Send a note with what you’re interested in (circles, sound healing, training, or the Get Over Perfectionism eBook). We’ll reply with next steps and availability.",
        button: { label: "Contact", href: "/contact" },
      },
    ] satisfies Section[],
  },

  // Contact remains a dedicated route (/contact)
  contact: {
    title: "Ready to begin?",
    blurb:
      "Send a note with what you’re interested in (circles, sound healing, training, or the Get Over Perfectionism eBook). We’ll reply with next steps and availability.",
    email: "being.jasmin.miranda@gmail.com",
    city: "Portland, OR",
    leftPanel: {
      heading: "What to share",
      description:
        "To help us guide you toward the right offering, you can include any of the following:",
      points: [
        "What you’re interested in (women’s circle, sound healing, training, or eBook)",
        "A little about what you’re navigating or seeking support with",
        "Any timing considerations or questions you have"
      ],
      note: 'There’s no “right” way to write — just speak from where you are.',
    }
  },

  footer: {
    finePrint: `© ${new Date().getFullYear()} Heart Aligned Wellness LLC`,
  },
} as const;
