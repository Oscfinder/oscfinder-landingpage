const STARTER_FEATURES = [
  "Lead generation (volume by agreement)",
  "Basic dashboard",
  "Limited Export to Excel",
  "Email support",
];
const BUSINESS_FEATURES = [
  "Higher lead generation volume",
  "Email outreach automation",
  "Advanced filters",
  "Analytics dashboard",
  "Priority support",
];
const ENTERPRISE_FEATURES = [
  "Full system access",
  "Unlimited lead generation",
  "Full outreach automation",
  "Unlimited scaling options",
  "Dedicated account manager",
  "Setup completed in 48 hours",
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
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-white via-[#f0faff] to-[#edfaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-[#006285] font-semibold text-sm uppercase tracking-widest">
            Flexible Pricing
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628]">
            One new client covers the entire cost
          </h2>
          <p className="mt-4 text-[#888888] text-lg">
            We work with you to find a price that fits your business. Setup in 48 hours.
          </p>
        </div>

        {/* Callout banner */}
        <div className="max-w-5xl mx-auto mb-10 bg-gradient-to-r from-[#f0faff] to-[#edfaf5] border border-[#006285]/15 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-xl">💬</span>
          <p className="text-sm text-[#1A3A5C] leading-relaxed">
            <strong>Pricing built around your needs. </strong> Choose the plan that fits
            your team, reach out, and we&apos;ll assess your requirements and send you
            an invoice based on your industry, team size, and goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Starter */}
          <div className="border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-[#1A3A5C]">Starter</h3>
              <p className="text-[#888888] text-sm mt-1 mb-6">For teams getting started</p>

              <div className="mb-1">
                <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider">
                  Starting from
                </span>
              </div>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-[#0A1628]">Custom</span>
              </div>

              <ul className="space-y-3 mb-8">
                {STARTER_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#1A3A5C]">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href="#contact-form"
                className="block text-center border-2 border-[#006285] text-[#006285] font-semibold px-6 py-3 rounded-xl hover:bg-[#006285] hover:text-white transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Business */}
          <div className="border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-[#1A3A5C]">Business</h3>
              <p className="text-[#888888] text-sm mt-1 mb-6">For growing sales teams</p>

              <div className="mb-1">
                <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider">
                  Starting from
                </span>
              </div>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-[#0A1628]">Custom</span>
              </div>

              <ul className="space-y-3 mb-8">
                {BUSINESS_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#1A3A5C]">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href="#contact-form"
                className="block text-center border-2 border-[#006285] text-[#006285] font-semibold px-6 py-3 rounded-xl hover:bg-[#006285] hover:text-white transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="relative bg-gradient-to-br from-[#006285] to-[#004a66] border-2 border-[#00C48C] rounded-2xl p-8 shadow-xl flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#00C48C] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">Enterprise</h3>
              <p className="text-white/60 text-sm mt-1 mb-6">For serious growth teams</p>

              <div className="mb-1">
                <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Custom invoice
                </span>
              </div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-3xl font-bold text-white">Let&apos;s Talk</span>
              </div>
              <p className="text-[#00C48C] text-sm font-medium mb-6">
                We assess your needs and send a tailored invoice
              </p>

              <ul className="space-y-3 mb-8">
                {ENTERPRISE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckIcon dark />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href="#contact-form"
                className="block text-center bg-[#00C48C] hover:bg-[#00A86B] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>

        </div>

        {/* Footer note */}
        <div className="max-w-5xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#888888] text-sm text-center sm:text-left">
            All plans include a <strong className="text-[#1A3A5C]">free demo</strong> before any
            commitment. System activated within{" "}
            <strong className="text-[#1A3A5C]">48 hours</strong> of agreement.
          </p>
          <a
            href="#contact-form"
            className="flex-shrink-0 text-sm font-semibold text-[#006285] hover:underline whitespace-nowrap"
          >
            Compare plans with our team →
          </a>
        </div>

      </div>
    </section>
  );
}
