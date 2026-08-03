import Image from "next/image";
import Link from "next/link";
import {
  IconSearch,
  IconPhoneCall,
  IconFilter,
  IconBolt,
  IconFileExport,
  IconChartBar,
  IconMailFast,
  IconFileText,
  IconArrowRight,
  IconCircleCheck,
  IconSparkles,
  IconPlayerPlay,
} from "@tabler/icons-react";

const FEATURES = [
  {
    icon: <IconSearch size={20} />,
    title: "Company Discovery Engine",
    desc: "Search and discover real companies by industry and location across Nigeria instantly.",
    outcome: "100+ leads per search",
    gradient: "from-[#006285] to-[#0099CC]",
    num: "01",
  },
  {
    icon: <IconPhoneCall size={20} />,
    title: "Email + Phone Extraction",
    desc: "Automatically extract verified emails and phone numbers from decision-makers.",
    outcome: "Verified contacts only",
    gradient: "from-[#00A86B] to-[#00C48C]",
    num: "02",
  },
  {
    icon: <IconFilter size={20} />,
    title: "Lead Filtering System",
    desc: "Filter leads by location, industry, company size, and contact status.",
    outcome: "Zero wasted outreach",
    gradient: "from-[#6366f1] to-[#8B5CF6]",
    num: "03",
  },
  {
    icon: <IconBolt size={20} />,
    title: "Outreach Automation",
    desc: "Send personalized email campaigns to verified leads directly from the platform.",
    outcome: "5× faster pipeline",
    gradient: "from-[#F97316] to-[#EF4444]",
    num: "04",
  },
  {
    icon: <IconFileExport size={20} />,
    title: "Export to Excel",
    desc: "Download your entire lead list as Excel files ready for your CRM or team.",
    outcome: "CRM-ready in seconds",
    gradient: "from-[#006285] to-[#004a66]",
    num: "05",
  },
  {
    icon: <IconChartBar size={20} />,
    title: "Usage Tracking Dashboard",
    desc: "Monitor leads generated, emails sent, and conversion rates in real time.",
    outcome: "Live performance data",
    gradient: "from-[#0099CC] to-[#006285]",
    num: "06",
  },
  {
    icon: <IconMailFast size={20} />,
    title: "Bulk Email Sending",
    desc: "Send hundreds of personalized outreach emails to verified leads in one click.",
    outcome: "1-click mass outreach",
    gradient: "from-[#00A86B] to-[#006285]",
    num: "07",
  },
  {
    icon: <IconFileText size={20} />,
    title: "Saved Email Templates",
    desc: "Build and save reusable outreach templates for different industries.",
    outcome: "Write once, use forever",
    gradient: "from-[#8B5CF6] to-[#F97316]",
    num: "08",
  },
];

const STRIP_STATS = [
  { n: "8",  label: "Core features" },
  { n: "1",  label: "Platform"      },
  { n: "∞",  label: "Leads found"   },
];

export default function Features({ preview = false }: { preview?: boolean }) {
  const items = preview ? FEATURES.slice(0, 4) : FEATURES;

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#f0faff] via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-[#edfaf5] border border-[#00C48C]/25 text-[#00A86B] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <IconSparkles size={12} />
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] leading-snug">
              A complete system for{" "}
              <span className="text-[#006285]">finding, enriching,</span>{" "}
              and contacting companies
            </h2>
            <p className="mt-4 text-[#888888] text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Everything your sales team needs to go from cold research to warm conversation —
              in one platform built for the Nigerian market.
            </p>

            {/* Stats strip */}
            <div className="mt-8 inline-flex items-center gap-5 bg-white border border-[#E5E7EB] rounded-full px-6 py-2.5 shadow-sm">
              {STRIP_STATS.map((item, i) => (
                <div key={item.label} className="flex items-center gap-5">
                  {i > 0 && <span className="w-px h-4 bg-[#E5E7EB]" />}
                  <div className="flex items-center gap-2">
                    <span className="font-black text-[#006285] text-base leading-none">{item.n}</span>
                    <span className="text-[#888888] text-xs">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block rounded-2xl overflow-hidden shadow-lg h-72">
            <Image
              src="/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
              alt="A clean, modern workspace running the OsCFinder platform"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#006285]/25 hover:shadow-lg hover:shadow-[#006285]/5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover gradient wash */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`}
              />

              {/* Icon + number */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-sm`}
                >
                  {feature.icon}
                </div>
                <span className="text-[11px] font-black text-[#E5E7EB] tracking-widest select-none">
                  {feature.num}
                </span>
              </div>

              <h3 className="font-bold text-[#0A1628] text-[15px] leading-snug mb-2">
                {feature.title}
              </h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-5">
                {feature.desc}
              </p>

              {/* Outcome tag */}
              <div className="flex items-center gap-1.5 pt-4 border-t border-[#F1F5F9]">
                <IconCircleCheck size={13} className="text-[#00A86B] flex-shrink-0" />
                <span className="text-xs font-semibold text-[#00A86B]">{feature.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Preview CTA banner */}
        {preview && (
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/features"
              className="group flex items-center justify-between flex-1 bg-gradient-to-r from-[#f0faff] to-[#edfaf5] border border-[#006285]/15 rounded-2xl px-7 py-5 hover:border-[#006285]/30 hover:shadow-md transition-all duration-200"
            >
              <div>
                <p className="font-bold text-[#0A1628] text-sm">
                  Explore all {FEATURES.length} features
                </p>
                <p className="text-[#888888] text-xs mt-0.5">
                  Export tools, bulk email, analytics dashboard, and more
                </p>
              </div>
              <span className="flex items-center gap-2 text-sm font-semibold text-[#006285] group-hover:gap-3 transition-all duration-200">
                See all features
                <IconArrowRight size={16} />
              </span>
            </Link>

            <a
              href="#demo"
              className="group flex items-center justify-center gap-2.5 bg-[#006285] hover:bg-[#004a66] text-white font-bold text-sm px-7 py-5 rounded-2xl transition-colors duration-200 whitespace-nowrap"
            >
              <IconPlayerPlay size={16} />
              Watch demo
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
