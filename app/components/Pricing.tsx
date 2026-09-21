"use client";

import { useState } from "react";
import { formatAmountToCurrency, SIGNUP_URL, COMPANY_WHATSAPP, COMPANY_EMAIL } from "../constants";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

const BILLING_PERIODS: { key: BillingPeriod; label: string; badge?: string }[] = [
  { key: "monthly",   label: "Monthly" },
  { key: "quarterly", label: "Quarterly", badge: "-17%" },
  { key: "yearly",    label: "Yearly",    badge: "-37%" },
];

const PERIOD_SUFFIX: Record<BillingPeriod, string> = {
  monthly: "/month",
  quarterly: "/quarter",
  yearly: "/year",
};

const PERIOD_SAVE: Record<BillingPeriod, string | null> = {
  monthly: null,
  quarterly: "Save 17%",
  yearly: "Save 37%",
};

const PLANS = [
  {
    key: "free",
    name: "Free",
    tagline: "Get started — no credit card needed",
    price: { monthly: 0, quarterly: 0, yearly: 0 },
    features: [
      "5 scrapes/month",
      "10 emails/month",
      "2 exports/month",
      "50 leads storage",
      "1 user",
      "14-day trial",
    ],
    cta: { label: "Start Free Trial", href: SIGNUP_URL },
    subtext: null as string | null,
    highlight: false,
  },
  {
    key: "starter",
    name: "Starter",
    tagline: "Solo founders starting outreach",
    price: { monthly: 60000, quarterly: 150000, yearly: 450000 },
    features: [
      "50 scrapes/month",
      "1,000 emails/month",
      "20 exports/month",
      "600 leads storage",
      "1 user",
      "10 email templates",
      "Email support",
    ],
    cta: { label: "Start Free Trial", href: SIGNUP_URL },
    subtext: "Start with a free trial, upgrade when you're ready",
    highlight: false,
  },
  {
    key: "business",
    name: "Business",
    badge: "★ Most Popular",
    tagline: "Growing sales teams",
    price: { monthly: 160000, quarterly: 400000, yearly: 1100000 },
    features: [
      "120 scrapes/month",
      "3,000 emails/month",
      "Unlimited exports",
      "3,000 leads storage",
      "3 users",
      "Unlimited email templates",
      "Priority email support",
      "30-min setup call",
    ],
    cta: { label: "Start Free Trial", href: SIGNUP_URL },
    subtext: "Start with a free trial, upgrade when you're ready",
    highlight: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    tagline: "Agencies and large teams",
    price: { monthly: 300000, quarterly: 750000, yearly: 2000000 },
    features: [
      "300 scrapes/month",
      "10,000 emails/month",
      "Unlimited exports",
      "Unlimited leads storage",
      "10 users",
      "Unlimited email templates",
      "Dedicated account manager",
      "Full onboarding session",
    ],
    cta: { label: "Contact Us", href: COMPANY_WHATSAPP },
    subtext: "Custom setup for your team",
    highlight: false,
  },
];

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
        className={dark ? "stroke-[#00C48C]" : "stroke-[#00A86B]"}
      />
    </svg>
  );
}

export default function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-white via-[#f0faff] to-[#edfaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#006285] font-semibold text-sm uppercase tracking-widest">
            Flexible Pricing
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628]">
            Start free, upgrade when you&apos;re ready
          </h2>
          <p className="mt-4 text-[#888888] text-lg">
            No sales calls required. Pick a plan and start your free trial in minutes.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 bg-white border border-[#E5E7EB] rounded-full p-1 shadow-sm">
            {BILLING_PERIODS.map((p) => (
              <button
                key={p.key}
                onClick={() => setPeriod(p.key)}
                className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  period === p.key
                    ? "bg-[#006285] text-white"
                    : "text-[#1A3A5C] hover:bg-[#F8FAFC]"
                }`}
              >
                {p.label}
                {p.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      period === p.key ? "bg-white/20 text-white" : "bg-[#e6f7f1] text-[#00A86B]"
                    }`}
                  >
                    {p.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          {PLANS.map((plan) => {
            const amount = plan.price[period];
            const isFree = amount === 0;
            const save = !isFree ? PERIOD_SAVE[period] : null;

            return (
              <div
                key={plan.key}
                className={`relative rounded-2xl p-7 flex flex-col transition-shadow ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#006285] to-[#004a66] border-2 border-[#00C48C] shadow-xl"
                    : "bg-white border border-[#E5E7EB] hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#00C48C] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-[#1A3A5C]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-1 mb-5 ${plan.highlight ? "text-white/60" : "text-[#888888]"}`}>
                    {plan.tagline}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-end gap-1.5 flex-wrap">
                      <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-[#0A1628]"}`}>
                        {isFree ? "Free" : formatAmountToCurrency(amount)}
                      </span>
                      {!isFree && (
                        <span className={`text-sm mb-1 ${plan.highlight ? "text-white/50" : "text-[#888888]"}`}>
                          {PERIOD_SUFFIX[period]}
                        </span>
                      )}
                    </div>
                    {save && (
                      <span className="inline-block mt-1.5 text-[11px] font-bold text-[#00A86B] bg-[#e6f7f1] px-2 py-0.5 rounded-full">
                        {save}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-white/80" : "text-[#1A3A5C]"}`}
                      >
                        <CheckIcon dark={plan.highlight} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href={plan.cta.href}
                    target={plan.cta.href.startsWith("http") ? "_blank" : undefined}
                    rel={plan.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`block text-center font-semibold px-6 py-3 rounded-xl transition-colors ${
                      plan.highlight
                        ? "bg-[#00C48C] hover:bg-[#00A86B] text-white"
                        : "border-2 border-[#006285] text-[#006285] hover:bg-[#006285] hover:text-white"
                    }`}
                  >
                    {plan.cta.label}
                  </a>
                  {plan.subtext && (
                    <p className={`mt-3 text-xs text-center ${plan.highlight ? "text-white/50" : "text-[#888888]"}`}>
                      {plan.subtext}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-[#888888] text-sm max-w-2xl mx-auto">
          All paid plans start with a free 14-day trial. No credit card required. Need a
          custom arrangement? Contact us at{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-[#006285] font-semibold hover:underline">
            {COMPANY_EMAIL}
          </a>
        </p>

      </div>
    </section>
  );
}
