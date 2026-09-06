import Image from "next/image";
import { IconStar, IconQuote, IconUser } from "@tabler/icons-react";

const TESTIMONIALS = [
  {
    name: "Emmanuel Joseph",
    title: "Founder",
    company: "Dexcreed Group",
    gradient: "from-[#006285] to-[#0099CC]",
    stars: 5,
    quote:
      "Finding the right companies to reach out to used to eat up our week. With OsCFinder we get verified leads in minutes and our team spends that time actually closing deals.",
    tag: "Business Services",
    featured: true,
  },
  {
    name: "Theresa Onyido Osime",
    title: "Managing Partner",
    company: "Tessaaattorneys",
    gradient: "from-[#1A3A5C] to-[#006285]",
    stars: 5,
    quote:
      "As a law firm, our growth depends on reaching the right corporate clients. OsCFinder makes it easy to identify and connect with decision-makers we'd never have found on our own.",
    tag: "Law",
  },
  {
    name: "Favour Williams",
    title: "Founder",
    company: "KXN Botanics",
    gradient: "from-[#00A86B] to-[#00C48C]",
    stars: 5,
    quote:
      "Selling cosmetics B2B meant constantly hunting for retailers and distributors. OsCFinder gave us a steady list of verified businesses to pitch, and our outreach finally started converting.",
    tag: "Cosmetics",
  },
];

// ─── Avatar: real clients, no photos — shown as a plain human icon ─────────
function Avatar({
  gradient,
  size,
}: {
  gradient: string;
  size: "sm" | "lg";
}) {
  const dim    = size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const icon   = size === "lg" ? 30 : 22;
  const radius = size === "lg" ? "rounded-2xl" : "rounded-xl";

  return (
    <div
      className={`bg-gradient-to-br ${gradient} ${dim} ${radius} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
    >
      <IconUser size={icon} />
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const featuredItem = TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[1];
  const others       = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#f0faff] via-white to-[#edfaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-[#006285]/8 border border-[#006285]/15 text-[#006285] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] leading-tight">
              Nigerian businesses are already winning with <span className="text-[#00C48C]">OsC</span>Finder
            </h2>
            <p className="mt-4 text-[#888888] text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              From law to cosmetics to business services — see how teams across Nigeria are closing more deals.
            </p>
          </div>

          <div className="relative hidden lg:block rounded-2xl overflow-hidden shadow-lg h-72">
            <Image
              src="/images/maximalfocus-VT4rx775FT4-unsplash.jpg"
              alt="A business owner working from home, closing deals with OsCFinder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/45 via-transparent to-transparent" />
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-[#006285] via-[#0077a0] to-[#1A3A5C] p-8 sm:p-10 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ background: "radial-gradient(circle, #00C48C, transparent)" }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
            <Avatar
              gradient={featuredItem.gradient}
              size="lg"
            />
            <div className="flex-1">
              <IconQuote size={32} className="text-[#00C48C] mb-3 opacity-60" />
              <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-5">
                &ldquo;{featuredItem.quote}&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-white font-bold">{featuredItem.name}</p>
                  <p className="text-white/50 text-sm">
                    {featuredItem.title} · {featuredItem.company}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Stars count={featuredItem.stars} />
                  <span className="text-xs font-semibold text-[#00C48C] bg-[#00C48C]/10 border border-[#00C48C]/20 px-2.5 py-1 rounded-full">
                    {featuredItem.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other testimonials */}
        <div className="grid sm:grid-cols-2 gap-6">
          {others.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[#E5E7EB] bg-gradient-to-br from-white to-[#f0faff] p-6 hover:border-[#006285]/30 hover:shadow-md hover:to-[#e6f5fb] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <Avatar
                  gradient={t.gradient}
                  size="sm"
                />
                <span className="text-xs font-semibold text-[#006285] bg-[#006285]/8 border border-[#006285]/15 px-2 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>

              <IconQuote size={20} className="text-[#006285] mb-2 opacity-40" />
              <p className="text-[#1A3A5C] text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-[#E5E7EB] pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[#0A1628] font-bold text-sm">{t.name}</p>
                  <p className="text-[#888888] text-xs mt-0.5">
                    {t.title} · {t.company}
                  </p>
                </div>
                <Stars count={t.stars} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 flex items-center justify-center py-7 px-8 rounded-2xl bg-gradient-to-r from-[#f0faff] to-[#edfaf5] border border-[#006285]/10">
          <p className="text-[#1A3A5C] text-sm font-semibold text-center">
            Currently in private beta with select companies across Nigeria
          </p>
        </div>

      </div>
    </section>
  );
}
