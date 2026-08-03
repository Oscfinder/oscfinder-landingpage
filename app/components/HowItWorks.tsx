import Image from "next/image";
import {
  IconSearch,
  IconBuildingSkyscraper,
  IconMailFast,
  IconMapPin,
  IconSparkles,
  IconChartBar,
  IconCircleCheck,
  IconArrowRight,
} from "@tabler/icons-react";

const STEPS = [
  {
    step: "01",
    color: "#006285",
    glow: "rgba(0,98,133,0.25)",
    icon: <IconSearch size={26} color="#fff" />,
    title: "Search by industry & location",
    desc: "Select your target industry and city. OsCFinder's intelligence engine knows exactly where verified Nigerian companies are.",
    bullets: [
      "Filter by 20+ industries",
      "Narrow by state or city",
      "Set company size range",
    ],
    tag: { icon: <IconMapPin size={13} />, label: "Lagos · 847 companies found" },
  },
  {
    step: "02",
    color: "#0099CC",
    glow: "rgba(0,153,204,0.25)",
    icon: <IconBuildingSkyscraper size={26} color="#fff" />,
    title: "System finds & enriches leads",
    desc: "The platform automatically extracts verified business emails, phone numbers, and company profiles — no manual research.",
    bullets: [
      "Verified emails & phone numbers",
      "Company size & industry data",
      "Instant export to Excel / CSV",
    ],
    tag: { icon: <IconSparkles size={13} />, label: "3,200+ contacts enriched" },
  },
  {
    step: "03",
    color: "#00A86B",
    glow: "rgba(0,168,107,0.25)",
    icon: <IconMailFast size={26} color="#fff" />,
    title: "Contact and convert instantly",
    desc: "Send personalised bulk email campaigns directly from the platform. Track opens, clicks, and replies in real time.",
    bullets: [
      "Bulk email with templates",
      "Open & click tracking",
      "Follow-up sequences",
    ],
    tag: { icon: <IconChartBar size={13} />, label: "42% avg. open rate" },
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 overflow-hidden bg-gradient-to-br from-[#003d54] via-[#005573] to-[#1A3A5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-[#00C48C]/10 border border-[#00C48C]/20 text-[#00C48C] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              From zero to verified leads<br className="hidden sm:block" /> in 3 steps
            </h2>
            <p className="mt-4 text-white/50 text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              No spreadsheets. No manual research. No wasted hours.
              Just a clean pipeline from search to outreach.
            </p>
          </div>

          <div className="relative hidden lg:block rounded-2xl overflow-hidden shadow-lg h-72 border border-white/10">
            <Image
              src="/images/conny-schneider-xuTJZ7uD7PI-unsplash.jpg"
              alt="A connected network of data points, representing the OsCFinder pipeline"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003d54]/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Steps */}
        <div className="relative grid sm:grid-cols-3 gap-6 lg:gap-8">

          {/* Connector line (desktop only) */}
          <div className="hidden sm:block absolute top-[52px] left-[calc(16.667%+24px)] right-[calc(16.667%+24px)] h-px"
            style={{ background: "linear-gradient(to right, #006285, #0099CC, #00A86B)" }}
          />

          {STEPS.map((item, i) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-7 hover:bg-white/12 hover:border-white/25 transition-all duration-300 group"
              style={{ boxShadow: `0 0 40px ${item.glow}` }}
            >
              {/* Top row: step number + icon */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 z-10"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-5xl font-black leading-none select-none text-white/30">
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {item.desc}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white/70">
                    <IconCircleCheck size={15} style={{ color: item.color }} className="flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tag pill */}
              <div className="mt-auto">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: `${item.color}18`, color: item.color }}
                >
                  {item.tag.icon}
                  {item.tag.label}
                </span>
              </div>

              {/* Arrow between cards on mobile */}
              {i < 2 && (
                <div className="sm:hidden flex justify-center mt-6 -mb-2">
                  <IconArrowRight size={20} className="rotate-90 text-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Setup time", value: "48 hours" },
            { label: "First leads", value: "Same day" },
            { label: "Avg. time saved", value: "15 hrs/week" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-5 px-4 rounded-xl border border-white/15 bg-white/8">
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="text-white/40 text-xs mt-1 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-[#00C48C] hover:bg-[#00A86B] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors"
          >
            Get started today
            <IconArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
