import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { constructMetadata } from "../constants/seoContants";

export const metadata = constructMetadata("terms");

const SECTIONS = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Description of Services" },
  { id: "account", label: "Account Usage" },
  { id: "prohibited", label: "Prohibited Activities" },
  { id: "data", label: "Data Usage Policy" },
  { id: "email", label: "Email Compliance" },
  { id: "availability", label: "Service Availability" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "ip", label: "Intellectual Property" },
  { id: "termination", label: "Termination" },
  { id: "governing", label: "Governing Law" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact Us" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-xl font-bold text-[#0A1628] mb-4 pb-3 border-b border-[#E5E7EB]">
        {title}
      </h2>
      <div className="space-y-4 text-[#444] text-sm leading-[1.85]">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function TermsPage() {
  const effective = "1 June 2026";

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#006285] to-[#0099CC] py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#00C48C] text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms of Service</h1>
            <p className="text-white/50 text-sm">
              Effective date: <span className="text-white/70">{effective}</span>
              &nbsp;·&nbsp;
              Also read our{" "}
              <Link href="/privacy" className="text-[#00C48C] hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">

            {/* Sidebar TOC */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <p className="text-xs font-bold text-[#888888] uppercase tracking-widest mb-4">
                  Table of Contents
                </p>
                <nav className="space-y-1">
                  {SECTIONS.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-[#888888] hover:text-[#006285] py-1 border-l-2 border-transparent hover:border-[#006285] pl-3 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <article className="lg:col-span-3">

              <Section id="acceptance" title="1. Acceptance of Terms">
                <P>
                  By accessing or using the OsCompanyFinder Technologies platform (the
                  &ldquo;Platform&rdquo;), website, or any related services, you agree to be bound
                  by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these
                  Terms, you must not access or use the Platform.
                </P>
                <P>
                  These Terms constitute a legally binding agreement between you
                  (&ldquo;User&rdquo; or &ldquo;Client&rdquo;) and OsCompanyFinder Technologies
                  (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
                </P>
              </Section>

              <Section id="services" title="2. Description of Services">
                <P>
                  OsCompanyFinder Technologies provides a B2B intelligence and lead generation
                  platform that enables users to:
                </P>
                <Ul items={[
                  "Search and discover Nigerian companies by industry and location",
                  "Access aggregated publicly available business contact information",
                  "Filter and manage lead lists",
                  "Send bulk outreach emails to verified business contacts",
                  "Save and reuse email templates",
                  "Automate outreach campaigns",
                  "Export lead data to Excel",
                  "Track usage metrics via a dashboard",
                ]} />
                <P>
                  Services are provided under the subscription plan selected by the Client, as
                  set out in the applicable Service Order Form. Features and limits vary by plan.
                </P>
              </Section>

              <Section id="account" title="3. Account Usage">
                <P>To access the Platform, you must register for an account. You agree to:</P>
                <Ul items={[
                  "Provide accurate, current, and complete information during registration",
                  "Keep your login credentials secure and confidential",
                  "Notify us immediately of any unauthorised use of your account",
                  "Not share account access with individuals outside your organisation",
                  "Use the Platform solely for lawful business purposes",
                  "Ensure all users within your organisation comply with these Terms",
                ]} />
                <P>
                  You are solely responsible for all activities that occur under your account.
                  OsCompanyFinder Technologies will not be liable for any loss arising from
                  unauthorised use of your account.
                </P>
              </Section>

              <Section id="prohibited" title="4. Prohibited Activities">
                <P>You must not use the Platform to:</P>
                <Ul items={[
                  "Hack, probe, or attempt to gain unauthorised access to any part of the Platform or its infrastructure",
                  "Reverse engineer, decompile, or disassemble any part of the software",
                  "Bypass, circumvent, or abuse usage limits or API rate controls",
                  "Resell, sublicense, or redistribute access to the Platform without written consent",
                  "Send spam, unsolicited bulk communications, or deceptive messages",
                  "Harass, threaten, or intimidate any individual using data obtained through the Platform",
                  "Use the Platform for any fraudulent, illegal, or unlawful activity",
                  "Upload or transmit malware, viruses, or malicious code",
                  "Scrape or automate data extraction from the Platform beyond permitted API usage",
                  "Use the Platform in any way that violates applicable Nigerian law or international regulation",
                ]} />
                <P>
                  Violation of these prohibitions may result in immediate account suspension or
                  termination without refund.
                </P>
              </Section>

              <Section id="data" title="5. Data Usage Policy">
                <p className="font-semibold text-[#1A3A5C]">What data the Platform aggregates</p>
                <P>
                  The Platform aggregates publicly available business information from lawful
                  sources, including public websites, business directories, and publicly available
                  company listings. This may include:
                </P>
                <Ul items={[
                  "Company name and trading name",
                  "Business website and social media profiles",
                  "Business phone numbers",
                  "Business email addresses",
                  "Company address and location",
                  "Industry category and employee size range",
                ]} />
                <p className="font-semibold text-[#1A3A5C] mt-4">What the Platform does not collect</p>
                <P>
                  The Platform is not designed or intended to collect the following categories of
                  personal data:
                </P>
                <Ul items={[
                  "Bank account or financial details",
                  "Passwords or authentication credentials",
                  "Private personal communications",
                  "Medical or health information",
                  "Government identification data (e.g., NIN, BVN)",
                ]} />
                <p className="font-semibold text-[#1A3A5C] mt-4">Accuracy disclaimer</p>
                <P>
                  Business information aggregated through the Platform may change over time.
                  OsCompanyFinder Technologies does not warrant that data is accurate, complete,
                  or current. Users are responsible for verifying information before acting on it.
                </P>
                <p className="font-semibold text-[#1A3A5C] mt-4">User responsibility</p>
                <P>
                  You agree to use data obtained through the Platform in compliance with all
                  applicable laws, including the Nigeria Data Protection Act (NDPA) 2023. You
                  must respect any third-party website terms of service and must not use contact
                  data for unlawful purposes.
                </P>
              </Section>

              <Section id="email" title="6. Email Compliance">
                <P>
                  The Platform includes bulk email and outreach automation features. By using
                  these features, you agree to:
                </P>
                <Ul items={[
                  "Include a clear unsubscribe or opt-out mechanism in every outreach email",
                  "Identify yourself clearly as the sender with your company name and contact information",
                  "Not use deceptive subject lines or misleading sender identities",
                  "Not send emails to individuals who have opted out or unsubscribed",
                  "Comply with the Nigeria Spam Act and any other applicable anti-spam legislation",
                  "Operate within the daily and monthly email send limits set by your subscription plan",
                ]} />
                <P>
                  OsCompanyFinder Technologies reserves the right to suspend outreach features
                  for accounts that generate excessive spam complaints or violate email compliance
                  rules, to protect the shared sending reputation of the Platform.
                </P>
              </Section>

              <Section id="availability" title="7. Service Availability">
                <P>
                  OsCompanyFinder Technologies will make reasonable efforts to maintain Platform
                  availability and performance. However, we do not guarantee uninterrupted,
                  error-free, or continuous operation of the Platform.
                </P>
                <P>
                  The Platform relies on third-party services including but not limited to cloud
                  hosting providers, database services, email delivery providers, and external
                  data APIs. Downtime or degradation caused by third-party service failures is
                  outside our control, and we shall not be liable for such interruptions.
                </P>
                <P>
                  We will endeavour to provide advance notice of scheduled maintenance where
                  possible.
                </P>
              </Section>

              <Section id="liability" title="8. Limitation of Liability">
                <P>
                  To the fullest extent permitted by applicable law, OsCompanyFinder Technologies
                  shall not be liable for:
                </P>
                <Ul items={[
                  "Loss of revenue, profits, or business opportunities",
                  "Failure to generate leads, close sales, or acquire customers",
                  "Indirect, incidental, consequential, or punitive damages",
                  "Loss or corruption of data",
                  "Damages arising from third-party service failures",
                  "Losses resulting from your use or inability to use the Platform",
                ]} />
                <P>
                  Use of the Platform does not guarantee any specific business outcome. Results
                  depend on factors including your industry, product quality, outreach strategy,
                  and market conditions, which are outside our control.
                </P>
                <P>
                  Our total aggregate liability for any claim arising under these Terms shall not
                  exceed the total fees paid by you to OsCompanyFinder Technologies in the three
                  (3) months preceding the claim.
                </P>
              </Section>

              <Section id="ip" title="9. Intellectual Property">
                <P>
                  All intellectual property rights in the Platform — including but not limited to
                  source code, backend architecture, database design, user interface design,
                  logos, documentation, and marketing materials — are and shall remain the
                  exclusive property of OsCompanyFinder Technologies.
                </P>
                <P>
                  Your subscription grants you a limited, non-exclusive, non-transferable,
                  revocable licence to access and use the Platform for your internal business
                  purposes only. This licence does not constitute a transfer of ownership.
                </P>
                <P>
                  You must not copy, modify, distribute, sell, sublicense, or create derivative
                  works based on any part of the Platform without our prior written consent.
                </P>
              </Section>

              <Section id="termination" title="10. Termination">
                <P>
                  Either party may terminate a subscription at the end of the current billing
                  period by providing written notice. OsCompanyFinder Technologies may terminate
                  or suspend your access immediately and without notice if:
                </P>
                <Ul items={[
                  "You breach any provision of these Terms",
                  "You engage in prohibited activities as defined in Section 4",
                  "You fail to make payment when due",
                  "We are required to do so by applicable law",
                ]} />
                <P>
                  Upon termination, your right to access the Platform ceases immediately. We
                  reserve the right to retain anonymised usage data for internal analytics
                  purposes following termination.
                </P>
              </Section>

              <Section id="governing" title="11. Governing Law">
                <P>
                  These Terms shall be governed by and construed in accordance with the laws of
                  the Federal Republic of Nigeria. Any dispute arising out of or in connection
                  with these Terms shall be subject to the exclusive jurisdiction of the courts of
                  Nigeria.
                </P>
                <P>
                  We encourage clients to resolve disputes informally by contacting us at{" "}
                  <a href="mailto:oscfinder@gmail.com" className="text-[#006285] hover:underline">
                    oscfinder@gmail.com
                  </a>{" "}
                  before initiating formal proceedings.
                </P>
              </Section>

              <Section id="changes" title="12. Changes to These Terms">
                <P>
                  We reserve the right to update or modify these Terms at any time. Where changes
                  are material, we will provide at least fourteen (14) days&apos; notice by email or
                  by posting a prominent notice on the Platform. Continued use of the Platform
                  after the effective date of any changes constitutes acceptance of the revised
                  Terms.
                </P>
              </Section>

              <Section id="contact" title="13. Contact Us">
                <P>If you have questions about these Terms, please contact us:</P>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 mt-2">
                  <p className="font-semibold text-[#1A3A5C] mb-2">OsCompanyFinder Technologies</p>
                  <p>Email:{" "}
                    <a href="mailto:oscfinder@gmail.com" className="text-[#006285] hover:underline">
                      oscfinder@gmail.com
                    </a>
                  </p>
                  <p>Website:{" "}
                    <a href="/" className="text-[#006285] hover:underline">
                      oscompanyfinder.com
                    </a>
                  </p>
                </div>
              </Section>

              {/* Bottom nav */}
              <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-xs text-[#888888]">Last updated: {effective}</p>
                <Link
                  href="/privacy"
                  className="text-sm text-[#006285] font-semibold hover:underline"
                >
                  Read our Privacy Policy →
                </Link>
              </div>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
