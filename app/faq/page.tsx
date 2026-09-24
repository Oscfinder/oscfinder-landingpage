"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IconChevronDown, IconArrowRight } from "@tabler/icons-react";

const CATEGORIES = [
  {
    label: "About the Platform",
    items: [
      {
        q: "What is OsCFinder?",
        a: "OsCFinder (OsCompanyFinder Technologies) is a B2B intelligence and lead generation platform built for Nigerian sales teams. It lets you search for companies by industry and location, get verified contact details (emails and phone numbers), send bulk outreach emails, and track your campaigns — all from one dashboard.",
      },
      {
        q: "What industries and locations does the platform cover?",
        a: "The platform covers 20+ industries including Insurance, Real Estate, Fintech, Logistics, Manufacturing, Telecommunications, Healthcare, Retail, and more. Location coverage spans all 36 states and the FCT, with city-level filtering available for major hubs like Lagos, Abuja, Port Harcourt, and Kano.",
      },
      {
        q: "How many companies are in the database?",
        a: "We currently aggregate data on tens of thousands of verified Nigerian businesses, with new records added regularly. The exact count varies by industry and location — you can sign up for a free trial to explore the platform and see exactly what is available for your specific target market.",
      },
      {
        q: "Is the data limited to Nigeria?",
        a: "Our primary coverage is Nigeria, where our data is deepest and most verified. We are actively expanding into other West African markets. If you have specific regional requirements, reach out and we can discuss what is currently available.",
      },
    ],
  },
  {
    label: "Data Quality",
    items: [
      {
        q: "How do you verify contact information?",
        a: "We aggregate data from publicly available business directories, company websites, and official registrations, then run automated and manual verification checks on emails and phone numbers. Contacts flagged as invalid are removed or updated regularly.",
      },
      {
        q: "How often is the database updated?",
        a: "The database is updated on a rolling basis. High-demand industries and major cities are refreshed more frequently. If you encounter a contact that appears outdated, you can flag it from within the platform and our team will review it.",
      },
      {
        q: "What happens if I find incorrect data?",
        a: "You can flag any inaccurate record directly from the platform. Our team reviews all flags within 48 hours and corrects or removes the record. Persistent data quality issues in a specific industry or city can also be reported to our support team.",
      },
    ],
  },
  {
    label: "Features & Usage",
    items: [
      {
        q: "Can I send bulk emails directly from the platform?",
        a: "Yes. The platform includes a built-in bulk email feature that lets you compose, personalise, and send outreach campaigns to your lead list without leaving the dashboard. You can track opens, clicks, and replies in real time.",
      },
      {
        q: "Can I save and reuse email templates?",
        a: "Yes. You can create and save as many email templates as you need. Templates support personalisation tokens (company name, contact name, industry) so each email feels tailored even when sent at scale.",
      },
      {
        q: "Can I export leads to Excel or CSV?",
        a: "Yes. All lead lists can be exported to Excel (.xlsx) or CSV format with a single click, making it easy to use the data in your existing CRM or sales tools.",
      },
      {
        q: "How many users can access one account?",
        a: "User seat limits depend on your subscription plan. Starter plans include access for one user, Business plans include up to three seats, and Enterprise plans support up to ten users. Reach out for details on multi-seat pricing.",
      },
    ],
  },
  {
    label: "Pricing & Getting Started",
    items: [
      {
        q: "How does pricing work?",
        a: "There are no fixed published prices. Reach out and tell us your requirements — we will assess your industry, team size, and goals, then send you a tailored invoice. No surprises, just a price built around what you actually need.",
      },
      {
        q: "Is there a free trial or demo?",
        a: "Yes. We offer a free trial that gives you full access to the platform — search companies, send outreach emails, and export leads — so you can experience it for your specific industry before committing. We also offer a live demo where we walk you through everything. No credit card required.",
      },
      {
        q: "How long does onboarding and setup take?",
        a: "Most clients are fully set up and generating leads within 48 hours of signing up. Our team handles the onboarding process and ensures your account is configured for your target industry and location.",
      },
      {
        q: "Do you offer a refund if I'm not satisfied?",
        a: "We stand behind the quality of our platform and offer a free trial specifically so you can evaluate it before committing. Once a paid subscription is active, refund eligibility is assessed on a case-by-case basis. Contact our team and we will work to make it right.",
      },
    ],
  },
  {
    label: "Compliance & Privacy",
    items: [
      {
        q: "Is using this platform legal?",
        a: "Yes. The platform aggregates publicly available business contact information from lawful sources. Users are responsible for ensuring their outreach activities comply with applicable Nigerian law, including the Nigeria Data Protection Act (NDPA) 2023 and relevant anti-spam regulations.",
      },
      {
        q: "Does the platform include personal (private individual) data?",
        a: "No. The platform is designed exclusively for B2B lead generation. It aggregates business contact information — company emails, business phone numbers, and company profiles — not private personal data of individuals.",
      },
      {
        q: "How does OsCFinder handle my account data?",
        a: "We take your data privacy seriously and operate in compliance with the NDPA 2023. We do not sell your account data to third parties. See our Privacy Policy for full details on how we collect, store, and protect your information.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E5E7EB] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[#0A1628] font-semibold text-sm leading-snug group-hover:text-[#006285] transition-colors">
          {q}
        </span>
        <IconChevronDown
          size={18}
          className={`flex-shrink-0 text-[#888888] transition-transform duration-300 mt-0.5 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#444] text-sm leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#006285] to-[#0099CC] py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#00C48C] text-xs font-bold uppercase tracking-widest mb-3">Support</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-white/50 text-sm max-w-xl">
              Everything you need to know about OsCFinder.
              Can&apos;t find your answer?{" "}
              <Link href="/#contact-form" className="text-[#00C48C] hover:underline">
                Talk to us directly.
              </Link>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">

            {/* Sidebar category tabs */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <p className="text-xs font-bold text-[#888888] uppercase tracking-widest mb-4">
                  Categories
                </p>
                <nav className="space-y-1">
                  {CATEGORIES.map((cat, i) => (
                    <button
                      key={cat.label}
                      onClick={() => setActiveCategory(i)}
                      className={`w-full text-left text-sm py-2 px-3 rounded-lg border-l-2 transition-all duration-150 ${
                        activeCategory === i
                          ? "border-[#006285] text-[#006285] bg-[#006285]/5 font-semibold"
                          : "border-transparent text-[#888888] hover:text-[#006285] hover:border-[#006285]"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile category tabs */}
            <div className="lg:hidden flex gap-2 flex-wrap mb-8">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(i)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                    activeCategory === i
                      ? "bg-[#006285] text-white border-[#006285]"
                      : "text-[#888888] border-[#E5E7EB] hover:border-[#006285] hover:text-[#006285]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ content */}
            <div className="lg:col-span-3">
              {CATEGORIES.map((cat, i) => (
                <div
                  key={cat.label}
                  className={activeCategory === i ? "block" : "hidden lg:block"}
                >
                  {/* On desktop show all categories stacked; on mobile show only active */}
                  <div className={`lg:block ${activeCategory === i ? "block" : "hidden"}`}>
                    <h2 className="text-lg font-bold text-[#0A1628] mb-1 lg:mt-8 first:lg:mt-0">
                      {cat.label}
                    </h2>
                    <div className="mt-2 bg-white border border-[#E5E7EB] rounded-xl px-6 mb-8">
                      {cat.items.map((item) => (
                        <AccordionItem key={item.q} q={item.q} a={item.a} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="mt-4 p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-[#0A1628]">Still have questions?</p>
                  <p className="text-[#888888] text-sm mt-0.5">
                    Our team responds within 24 hours.
                  </p>
                </div>
                <Link
                  href="/#contact-form"
                  className="inline-flex items-center gap-2 bg-[#006285] hover:bg-[#004a66] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors whitespace-nowrap"
                >
                  Contact us
                  <IconArrowRight size={15} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
