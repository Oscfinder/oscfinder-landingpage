import { formatAmountToCurrency, COMPANY_EMAIL } from "../constants";
import { PLANS, TERMS } from "../constants/pricingPlans";

const COMPARISON_ROWS: { label: string; values: string[] }[] = [
  { label: "Who it's for",      values: ["Get started, no credit card needed", "Solo founders starting outreach", "Growing sales teams", "Agencies and large teams"] },
  { label: "Scrapes / month",   values: ["5", "50", "120", "300"] },
  { label: "Emails / month",    values: ["10", "1,000", "3,000", "10,000"] },
  { label: "Exports / month",   values: ["2", "20", "Unlimited", "Unlimited"] },
  { label: "Leads storage",     values: ["20", "600", "3,000", "Unlimited"] },
  { label: "Users",             values: ["1", "1", "3", "10"] },
  { label: "WhatsApp outreach", values: ["Included", "Included", "Included", "Included"] },
  { label: "Email templates",   values: ["—", "10", "Unlimited", "Unlimited"] },
  { label: "Email designs",     values: ["—", "Basic only", "All 7", "All 7 + custom"] },
  { label: "Support",           values: ["—", "Email", "Priority email", "Dedicated account manager"] },
  { label: "Onboarding",        values: ["Self-serve (7-day trial)", "Self-serve", "30-min setup call", "Full onboarding session"] },
];

// Derived from the same PLANS pricing used in the cards, so the two never drift apart.
const PRICING_SCHEDULE = TERMS.map((term) => ({
  term: term.label,
  values: PLANS.map((plan) => plan.price[term.key]),
}));

const COLUMN_LABELS = PLANS.map((plan) => plan.badge ? `${plan.name} ${plan.badge.split(" ")[0]}` : plan.name);

export default function PricingTables() {
  return (
    <section className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Plan comparison */}
        <div>
          <div className="text-center mb-8">
            <span className="text-[#006285] font-semibold text-sm uppercase tracking-widest">
              Plan Comparison
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0A1628]">
              Every feature, side by side
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="text-left font-semibold text-[#888888] px-5 py-3.5 whitespace-nowrap">Feature</th>
                  {COLUMN_LABELS.map((c) => (
                    <th key={c} className="text-left font-bold text-[#1A3A5C] px-5 py-3.5 whitespace-nowrap">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 1 ? "bg-[#F8FAFC]/60" : ""}>
                    <td className="px-5 py-3 font-semibold text-[#1A3A5C] border-t border-[#E5E7EB] whitespace-nowrap">
                      {row.label}
                    </td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-5 py-3 text-[#444] border-t border-[#E5E7EB]">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing schedule */}
        <div>
          <div className="text-center mb-8">
            <span className="text-[#006285] font-semibold text-sm uppercase tracking-widest">
              Pricing Schedule
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0A1628]">
              Prices by billing term
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB]">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="text-left font-semibold text-[#888888] px-5 py-3.5 whitespace-nowrap">Subscription Term</th>
                  {COLUMN_LABELS.map((c) => (
                    <th key={c} className="text-left font-bold text-[#1A3A5C] px-5 py-3.5 whitespace-nowrap">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICING_SCHEDULE.map((row, i) => (
                  <tr key={row.term} className={i % 2 === 1 ? "bg-[#F8FAFC]/60" : ""}>
                    <td className="px-5 py-3 font-semibold text-[#1A3A5C] border-t border-[#E5E7EB] whitespace-nowrap">
                      {row.term}
                    </td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-5 py-3 text-[#444] border-t border-[#E5E7EB] whitespace-nowrap">
                        {v === 0 ? "Free" : formatAmountToCurrency(v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-[#888888] text-sm">
            Need a different volume or a custom arrangement? Contact us at{" "}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-[#006285] font-semibold hover:underline">
              {COMPANY_EMAIL}
            </a>{" "}
            for a tailored quote.
          </p>
        </div>

      </div>
    </section>
  );
}
