import Image from "next/image";
import {
  IconFolderOff,
  IconClock,
  IconTrendingDown,
  IconLayoutOff,
  IconCircleOff,
  IconAlertTriangle,
} from "@tabler/icons-react";

const STATS = [
  { value: "15+",  label: "hours wasted", sub: "every week on manual prospecting" },
  { value: "60%",  label: "leads lost",   sub: "never followed up due to disorganization" },
  { value: "3×",   label: "longer cycles", sub: "without a structured outreach system" },
];

const PAIN_POINTS = [
  {
    icon: <IconFolderOff size={18} />,
    title: "No structured company database",
    desc: "Prospecting is scattered across Google, LinkedIn, and guesswork — no single source of truth.",
  },
  {
    icon: <IconClock size={18} />,
    title: "Manual prospecting eats your day",
    desc: "Your team spends hours tracking down contacts that should take minutes to find.",
  },
  {
    icon: <IconTrendingDown size={18} />,
    title: "Low-quality, unverified leads",
    desc: "Wrong numbers and dead emails kill deal momentum before a conversation even starts.",
  },
  {
    icon: <IconLayoutOff size={18} />,
    title: "No centralized system",
    desc: "Leads live in spreadsheets, WhatsApp, and inboxes — follow-up is inconsistent and messy.",
  },
  {
    icon: <IconCircleOff size={18} />,
    title: "Zero automation in the pipeline",
    desc: "Every step — discovery, enrichment, outreach — is done manually, one contact at a time.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center mb-14">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-[#FEF2F2] border border-[#EF4444]/20 text-[#EF4444] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <IconAlertTriangle size={12} />
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] leading-snug">
              Your team spends more time{" "}
              <span className="text-[#EF4444]">searching for leads</span>{" "}
              than closing them
            </h2>
            <p className="mt-4 text-[#888888] text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Most B2B sales teams in Nigeria are still running a 2005 pipeline in 2025.
              Here's what that's actually costing you.
            </p>
          </div>
          <div className="relative hidden lg:block rounded-2xl overflow-hidden shadow-lg h-64">
            <Image
              src="/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
              alt="A team buried in laptops, spreadsheets, and manual prospecting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Stats — 3 bold callouts */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-14">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="relative bg-white rounded-2xl border border-[#E5E7EB] p-6 text-center overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EF4444] to-[#F97316]" />
              <p className="text-4xl sm:text-5xl font-black text-[#EF4444] leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-[#0A1628] font-bold text-sm mb-1">{stat.label}</p>
              <p className="text-[#888888] text-xs leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Pain points — 3-col list */}
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PAIN_POINTS.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white border border-[#E5E7EB] rounded-xl p-5 hover:border-[#EF4444]/25 hover:shadow-sm transition-all"
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-[#EF4444]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1A3A5C] text-sm mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* CTA card — fills the 5-item grid */}
            <div className="flex items-center justify-between bg-gradient-to-br from-[#006285] to-[#0099CC] rounded-xl p-5 sm:col-span-1">
              <div>
                <p className="text-white font-bold text-sm leading-snug mb-1">
                  Your competitors are already automating this
                </p>
                <p className="text-white/60 text-xs leading-relaxed">
                  Companies using automation generate 5× more qualified leads every week.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
