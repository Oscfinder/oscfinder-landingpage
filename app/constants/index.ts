// ── Company identity ──────────────────────────────────────────────────────────
export const BRAND_NAME      = "OsCFinder";
export const COMPANY_NAME    = "OsCompanyFinder Technologies";
export const COMPANY_EMAIL   = "contact@oscfinder.com";
export const COMPANY_PHONE   = "+2348139304329";
export const COMPANY_PHONE_DISPLAY = "+234 813 930 4329";
export const COMPANY_WHATSAPP = "https://wa.me/2348139304329";
export const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavLinkProps {
  label: string;
  href: string;
  highlight?: boolean;
}

export const navLinks: NavLinkProps[] = [
  { label: "Features",    href: "/features"       },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Demo",        href: "/#demo"          },
  { label: "Pricing",     href: "/pricing"        },
  { label: "FAQ",         href: "/faq"            },
  { label: "Free Trial",  href: "/#contact-form", highlight: true },
];

// ── Footer columns ────────────────────────────────────────────────────────────
export interface FooterLinkProps {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLinkProps[];
}

export const footerColumns: FooterColumnProps[] = [
  {
    title: "Product",
    links: [
      { label: "Features",     href: "#features"     },
      { label: "Pricing",      href: "#pricing"      },
      { label: "Demo",         href: "#demo"         },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Insurance",   href: "#features" },
      { label: "Real Estate", href: "#features" },
      { label: "Fintech",     href: "#features" },
      { label: "Logistics",   href: "#features" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Get in touch",  href: `mailto:${COMPANY_EMAIL}`  },
      { label: "Book a demo",   href: "#contact-form"            },
      { label: "WhatsApp",      href: COMPANY_WHATSAPP, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms"   },
      { label: "Privacy Policy",   href: "/privacy" },
    ],
  },
];

// ── Utilities ─────────────────────────────────────────────────────────────────
export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const formatAmountToCurrency = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);

export const convertToSlug = (text: string, separator = "-") =>
  text
    ?.toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, separator);
