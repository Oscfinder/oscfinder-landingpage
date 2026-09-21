import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import FeatureStrip from "../components/FeatureStrip";
import ProductScreenshots from "../components/ProductScreenshots";
import DemoVideo from "../components/DemoVideo";
import { constructMetadata } from "../constants/seoContants";
import { SIGNUP_URL } from "../constants";

export const metadata = constructMetadata("features");

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#006285] to-[#0099CC] py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#00C48C] text-xs font-bold uppercase tracking-widest mb-3">Platform Features</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything you need to generate leads in Nigeria
            </h1>
            <p className="text-white/55 text-base max-w-2xl leading-relaxed mb-6">
              From company discovery to outreach automation — OsCFinder gives your
              sales team one platform to find, contact, and convert Nigerian businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-[#00C48C] hover:bg-[#00A86B] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border border-white/30 text-white/80 hover:text-white hover:border-white/60 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Feature strip */}
        <FeatureStrip />

        {/* Full feature cards */}
        <Features />

        {/* Product screenshots */}
        <ProductScreenshots />

        {/* Demo video */}
        <DemoVideo />

        {/* Bottom CTA */}
        <section className="py-16 bg-[#F8FAFC] border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-3">
              Ready to see it in action?
            </h2>
            <p className="text-[#888888] mb-6">
              Start your free 14-day trial in minutes, or book a live demo and we&apos;ll
              walk you through the platform with real data for your industry.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-[#006285] hover:bg-[#004a66] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/#contact-form"
                className="inline-flex items-center gap-2 border-2 border-[#006285] text-[#006285] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[#006285] hover:text-white transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
