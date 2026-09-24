import { SIGNUP_URL, COMPANY_WHATSAPP } from "./index";

export type TermKey = "1" | "3" | "6" | "12";

export const TERMS: { key: TermKey; label: string; suffix: string; months: number }[] = [
  { key: "1",  label: "1 month",   suffix: "/month",         months: 1  },
  { key: "3",  label: "3 months",  suffix: "every 3 months", months: 3  },
  { key: "6",  label: "6 months",  suffix: "every 6 months", months: 6  },
  { key: "12", label: "1 year",    suffix: "/year",          months: 12 },
];

export const PLANS = [
  {
    key: "free",
    name: "Free",
    tagline: "Get started — no credit card needed",
    features: [
      "5 scrapes/month",
      "10 emails/month",
      "2 exports/month",
      "20 leads storage",
      "1 user",
      "WhatsApp outreach",
      "7-day trial",
    ],
    price: { "1": 0, "3": 0, "6": 0, "12": 0 } as Record<TermKey, number>,
    cta: { label: "Start Free Trial", href: SIGNUP_URL },
    highlight: false,
  },
  {
    key: "starter",
    name: "Starter",
    tagline: "Solo founders starting outreach",
    features: [
      "50 scrapes/month",
      "1,000 emails/month",
      "20 exports/month",
      "600 leads storage",
      "1 user",
      "10 email templates",
      "Basic email designs",
      "WhatsApp outreach",
      "Email support",
      "Self-serve onboarding",
    ],
    price: { "1": 60000, "3": 150000, "6": 250000, "12": 450000 } as Record<TermKey, number>,
    cta: { label: "Start Free Trial", href: SIGNUP_URL },
    highlight: false,
  },
  {
    key: "business",
    name: "Business",
    badge: "★ Most Popular",
    tagline: "Growing sales teams",
    features: [
      "120 scrapes/month",
      "3,000 emails/month",
      "Unlimited exports",
      "3,000 leads storage",
      "3 users",
      "Unlimited email templates",
      "All 7 email designs",
      "WhatsApp outreach",
      "Priority email support",
      "30-min setup call",
    ],
    price: { "1": 160000, "3": 400000, "6": 650000, "12": 1100000 } as Record<TermKey, number>,
    cta: { label: "Start Free Trial", href: SIGNUP_URL },
    highlight: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    tagline: "Agencies and large teams",
    features: [
      "300 scrapes/month",
      "10,000 emails/month",
      "Unlimited exports",
      "Unlimited leads storage",
      "10 users",
      "Unlimited email templates",
      "All 7 + custom email designs",
      "WhatsApp outreach",
      "Dedicated account manager",
      "Full onboarding session",
    ],
    price: { "1": 300000, "3": 750000, "6": 1200000, "12": 2000000 } as Record<TermKey, number>,
    cta: { label: "Contact Us", href: COMPANY_WHATSAPP },
    highlight: false,
  },
];

export function savingsPct(plan: (typeof PLANS)[number], term: (typeof TERMS)[number]) {
  if (term.months === 1) return null;
  const equivMonthly = plan.price["1"] * term.months;
  if (equivMonthly === 0) return null;
  const actual = plan.price[term.key];
  const pct = Math.round((1 - actual / equivMonthly) * 100);
  return pct > 0 ? pct : null;
}
