import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import ROI from "../components/ROI";
import { constructMetadata } from "../constants/seoContants";
import { SIGNUP_URL } from "../constants";

export const metadata = constructMetadata("pricingPage");

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#006285] to-[#0099CC] py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#00C48C] text-xs font-bold uppercase tracking-widest mb-3">Pricing</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple pricing that scales with your team
            </h1>
            <p className="text-white/55 text-base max-w-2xl leading-relaxed">
              Start free, no credit card required. Upgrade whenever your team is ready
              for more scrapes, emails, and leads.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <Pricing />

        {/* ROI section */}
        <ROI />

        {/* FAQ teaser */}
        <section className="py-14 bg-[#F8FAFC] border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-3">
              Questions about pricing?
            </h2>
            <p className="text-[#888888] mb-6 leading-relaxed">
              Every paid plan starts with a free 14-day trial, no credit card required.
              Still have questions? Check the FAQ or reach out directly.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-[#006285] hover:bg-[#004a66] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 border-2 border-[#006285] text-[#006285] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[#006285] hover:text-white transition-all"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
