import Image from "next/image";
import {
  IconRocket,
  IconPlayerPlay,
  IconSearch,
  IconBuilding,
  IconChevronRight,
} from "@tabler/icons-react";
import { SIGNUP_URL } from "../constants";

const COMPANIES = [
  { name: "Acme Industries", meta: "Lagos · Manufacturing · 500+ employees", color: "#006285" },
  { name: "Sunrise Logistics Ltd", meta: "Lagos · Logistics · 200+ employees", color: "#0099CC" },
  { name: "GreenField Manufacturing", meta: "Lagos · Manufacturing · 300+ employees", color: "#00A86B" },
];

export default function Hero() {
  return (
    <section className="relative pt-20 pb-0 overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e6f7f1] border border-[#00A86B]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C]" />
              <span className="text-[#00A86B] text-xs font-bold tracking-widest uppercase">
                Africa&apos;s #1 B2B Intelligence Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-[42px] font-bold text-[#0A1628] leading-[1.22] mb-5">
              Find your next{" "}
              <span className="text-[#006285]">enterprise client</span>{" "}
              faster than ever
            </h1>

            <p className="text-white text-base font-semibold leading-[1.75] mb-8 max-w-[420px]">
              <span className="text-[#00C48C]">OsC</span>Finder gives you verified sales leads, decision-maker contacts, and
              automated outreach — all in one platform built for Africa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-[#00C48C] hover:bg-[#00A86B] text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-colors"
              >
                <IconRocket size={15} />
                Start free trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-white border-[1.5px] border-[#006285] text-[#006285] font-bold px-7 py-3.5 rounded-lg text-sm hover:bg-[#006285]/5 transition-colors"
              >
                <IconPlayerPlay size={15} />
                Watch demo
              </a>
            </div>

            {/* Stats */}
            <div className="inline-flex items-center gap-7 px-5 py-3.5">
              <div>
                <p className="text-white text-2xl font-bold leading-none mb-0.5">12</p>
                <p className="text-white/70 text-xs">Industries covered</p>
              </div>
              <div className="w-px h-9 bg-white/25" />
              <div>
                <p className="text-white text-2xl font-bold leading-none mb-0.5">48hr</p>
                <p className="text-white/70 text-xs">Setup time</p>
              </div>
            </div>
          </div>

          {/* ── Right column — dashboard mock ── */}
          <div className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-lg">
            {/* Search bar */}
            <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 mb-3.5">
              <IconSearch size={15} className="text-[#888888] flex-shrink-0" />
              <span className="text-[#888888] text-sm flex-1">Search companies in Nigeria...</span>
              <div className="bg-[#006285] text-white text-xs font-bold px-3 py-1 rounded-md cursor-pointer">
                Search
              </div>
            </div>

            {/* Results header */}
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-xs font-bold text-[#1A3A5C]">Search results</p>
              <span className="bg-[#e6f7f1] text-[#00A86B] text-xs font-bold px-3 py-0.5 rounded-full">
                247 companies found
              </span>
            </div>

            {/* Company rows */}
            <div className="flex flex-col gap-2 mb-3.5">
              {COMPANIES.map((company) => (
                <div
                  key={company.name}
                  className="flex items-center justify-between px-3 py-2.5 bg-[#F8FAFC] rounded-lg border border-[#E5E7EB]/80"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: company.color }}
                    >
                      <IconBuilding size={14} color="white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0A1628] leading-none mb-0.5">
                        {company.name}
                      </p>
                      <p className="text-[11px] text-[#888888]">{company.meta}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#e6f7f1] text-[#00A86B] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                    <IconChevronRight size={14} className="text-[#888888]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#006285] rounded-lg px-3.5 py-3">
                <p className="text-white/65 text-[11px] mb-1">Leads this month</p>
                <p className="text-[#00C48C] text-xl font-bold leading-none">1,284</p>
              </div>
              <div className="bg-gradient-to-br from-[#006285] to-[#004a66] rounded-lg px-3.5 py-3">
                <p className="text-white/65 text-[11px] mb-1">Emails sent</p>
                <p className="text-[#00C48C] text-xl font-bold leading-none">3,941</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
