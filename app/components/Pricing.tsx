"use client";

import { useState } from "react";
import { formatAmountToCurrency, COMPANY_EMAIL } from "../constants";
import { PLANS, TERMS, savingsPct, type TermKey } from "../constants/pricingPlans";

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
  const [termKey, setTermKey] = useState<TermKey>("1");
  const term = TERMS.find((t) => t.key === termKey)!;

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-white via-[#f0faff] to-[#edfaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#006285] font-semibold text-sm uppercase tracking-widest">
            Flexible Pricing
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628]">
            Business prospecting & outreach plans
          </h2>
          <p className="mt-4 text-[#888888] text-lg">
            Start free, then choose 1, 3, 6, or 12-month billing as you grow.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 bg-white border border-[#E5E7EB] rounded-full p-1 shadow-sm">
            {TERMS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTermKey(t.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                  termKey === t.key
                    ? "bg-[#006285] text-white"
                    : "text-[#1A3A5C] hover:bg-[#F8FAFC]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          {PLANS.map((plan) => {
            const amount = plan.price[termKey];
            const isFree = amount === 0;
            const save = savingsPct(plan, term);

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
                          {term.suffix}
                        </span>
                      )}
                    </div>
                    {save && (
                      <span className="inline-block mt-1.5 text-[11px] font-bold text-[#00A86B] bg-[#e6f7f1] px-2 py-0.5 rounded-full">
                        Save {save}%
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-[#888888] text-sm max-w-2xl mx-auto">
          Every plan starts with a free 7-day trial. No credit card required. Need a
          different volume or a custom arrangement? Contact us at{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-[#006285] font-semibold hover:underline">
            {COMPANY_EMAIL}
          </a>
        </p>

      </div>
    </section>
  );
}
