import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { constructMetadata } from "../constants/seoContants";

export const metadata = constructMetadata("privacy");

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "information", label: "Information We Collect" },
  { id: "use", label: "How We Use Information" },
  { id: "storage", label: "Data Storage & Security" },
  { id: "sharing", label: "Sharing of Information" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "cookies", label: "Cookies" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Changes to This Policy" },
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

export default function PrivacyPage() {
  const effective = "1 June 2026";

  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#006285] to-[#0099CC] py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#00C48C] text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
            <p className="text-white/50 text-sm">
              Effective date: <span className="text-white/70">{effective}</span>
              &nbsp;·&nbsp;
              Also read our{" "}
              <Link href="/terms" className="text-[#00C48C] hover:underline">Terms of Service</Link>
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

              <Section id="overview" title="1. Overview">
                <P>
                  OsCompanyFinder Technologies (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                  &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy
                  explains what information we collect, why we collect it, how we store and
                  protect it, and the choices you have regarding your information.
                </P>
                <P>
                  This Policy applies to all visitors and users of the OsCompanyFinder
                  Technologies website and platform. By using our services, you agree to the
                  collection and use of information as described in this Policy.
                </P>
                <P>
                  We operate in compliance with the Nigeria Data Protection Act (NDPA) 2023 and
                  endeavour to follow internationally recognised best practices for data privacy.
                </P>
              </Section>

              <Section id="information" title="2. Information We Collect">
                <p className="font-semibold text-[#1A3A5C]">Information you provide directly</p>
                <P>When you register, contact us, or use the Platform, you may provide:</P>
                <Ul items={[
                  "Full name",
                  "Business email address",
                  "Phone number",
                  "Company name and industry",
                  "Billing and payment information (processed securely by third-party payment providers)",
                  "Messages and communications submitted through contact forms",
                ]} />

                <p className="font-semibold text-[#1A3A5C] mt-4">Information collected automatically</p>
                <P>When you use the Platform, we may automatically collect:</P>
                <Ul items={[
                  "IP address and approximate geographic location",
                  "Browser type and version",
                  "Device type and operating system",
                  "Pages visited and features used within the Platform",
                  "Session duration and interaction data",
                  "Referral source (how you arrived at the website)",
                ]} />

                <p className="font-semibold text-[#1A3A5C] mt-4">Business data aggregated by the Platform</p>
                <P>
                  The Platform aggregates publicly available business information for the purpose
                  of lead generation. This includes company names, business addresses, publicly
                  listed phone numbers, business email addresses, and industry details sourced
                  from public directories and websites. This data relates to businesses, not
                  private individuals.
                </P>

                <p className="font-semibold text-[#1A3A5C] mt-4">Information we do not collect</p>
                <P>We do not intentionally collect:</P>
                <Ul items={[
                  "Bank account numbers or financial account details",
                  "National Identification Numbers (NIN) or Bank Verification Numbers (BVN)",
                  "Passwords or private authentication credentials",
                  "Private personal communications",
                  "Medical or health-related information",
                  "Sensitive personal data as defined under the NDPA",
                ]} />
              </Section>

              <Section id="use" title="3. How We Use Information">
                <P>We use the information we collect to:</P>
                <Ul items={[
                  "Create and manage your account",
                  "Deliver and improve the Platform and its features",
                  "Process payments and manage subscriptions",
                  "Respond to support enquiries and communications",
                  "Send service-related notifications (e.g., account updates, invoices)",
                  "Send marketing communications where you have given consent (you may opt out at any time)",
                  "Monitor and analyse usage to improve Platform performance",
                  "Detect, investigate, and prevent fraud or abuse",
                  "Comply with applicable legal obligations",
                ]} />
                <P>
                  We will not use your personal information for any purpose that is incompatible
                  with the purposes described in this Policy without your explicit consent.
                </P>
              </Section>

              <Section id="storage" title="4. Data Storage & Security">
                <P>
                  Your data is stored on secure cloud infrastructure. We implement
                  industry-standard technical and organisational measures to protect your
                  information against unauthorised access, disclosure, alteration, or destruction,
                  including:
                </P>
                <Ul items={[
                  "Encryption of data in transit using TLS/HTTPS",
                  "Encryption of sensitive data at rest",
                  "Access controls limiting who within our team can access personal data",
                  "Regular security reviews and vulnerability assessments",
                ]} />
                <P>
                  While we take reasonable steps to protect your data, no system is completely
                  secure. In the event of a data breach that is likely to affect your rights, we
                  will notify you as required by applicable law.
                </P>
              </Section>

              <Section id="sharing" title="5. Sharing of Information">
                <P>
                  We do not sell your personal information to third parties. We may share your
                  information only in the following circumstances:
                </P>
                <Ul items={[
                  "Service providers: with trusted third-party vendors who process data on our behalf (e.g., cloud hosting, payment processing, email delivery) under data processing agreements",
                  "Legal compliance: where required by law, court order, or regulatory authority",
                  "Business transfers: in connection with a merger, acquisition, or sale of assets, where the acquiring party agrees to be bound by this Privacy Policy",
                  "With your consent: for any other purpose you have explicitly authorised",
                ]} />
              </Section>

              <Section id="retention" title="6. Data Retention">
                <P>
                  We retain your personal information for as long as your account is active or
                  as necessary to provide services. After termination of your account, we may
                  retain anonymised or aggregated data for internal analytics.
                </P>
                <P>
                  Specific retention periods:
                </P>
                <Ul items={[
                  "Account data: retained for the duration of the subscription and up to 2 years after termination",
                  "Payment records: retained for 7 years as required by Nigerian tax law",
                  "Support communications: retained for 3 years",
                  "Marketing consent records: retained until consent is withdrawn",
                ]} />
                <P>
                  You may request deletion of your personal data at any time (see Your Rights
                  below). Some data may be retained where required by law.
                </P>
              </Section>

              <Section id="rights" title="7. Your Rights">
                <P>
                  Under the Nigeria Data Protection Act (NDPA) 2023, you have the following rights
                  regarding your personal data:
                </P>
                <Ul items={[
                  "Right to access: request a copy of the personal data we hold about you",
                  "Right to rectification: request correction of inaccurate or incomplete data",
                  "Right to erasure: request deletion of your personal data where there is no legitimate reason for us to retain it",
                  "Right to restrict processing: request that we limit how we use your data",
                  "Right to data portability: receive your data in a structured, machine-readable format",
                  "Right to object: object to processing based on legitimate interests or for direct marketing",
                  "Right to withdraw consent: withdraw consent for marketing at any time without affecting prior lawful processing",
                ]} />
                <P>
                  To exercise any of these rights, please email{" "}
                  <a href="mailto:contact@oscfinder.com" className="text-[#006285] hover:underline">
                    contact@oscfinder.com
                  </a>
                  . We will respond within 30 days.
                </P>
              </Section>

              <Section id="cookies" title="8. Cookies">
                <P>
                  We use cookies and similar tracking technologies to improve your experience on
                  the Platform. Cookies we use include:
                </P>
                <Ul items={[
                  "Essential cookies: required for the Platform to function (e.g., authentication sessions)",
                  "Analytics cookies: help us understand how the Platform is used so we can improve it",
                  "Preference cookies: remember your settings and preferences",
                ]} />
                <P>
                  You can control cookies through your browser settings. Disabling essential
                  cookies may affect Platform functionality. We do not use cookies for third-party
                  advertising.
                </P>
              </Section>

              <Section id="children" title="9. Children's Privacy">
                <P>
                  The Platform is intended for business use only and is not directed at
                  individuals under the age of 18. We do not knowingly collect personal data from
                  minors. If you believe a minor has provided us with personal information, please
                  contact us and we will delete it promptly.
                </P>
              </Section>

              <Section id="changes" title="10. Changes to This Policy">
                <P>
                  We may update this Privacy Policy from time to time. Where changes are
                  material, we will notify you by email or by posting a notice on the Platform at
                  least fourteen (14) days before the changes take effect. Your continued use of
                  the Platform after that date constitutes acceptance of the updated Policy.
                </P>
                <P>
                  We encourage you to review this Policy periodically to stay informed about how
                  we protect your information.
                </P>
              </Section>

              <Section id="contact" title="11. Contact Us">
                <P>
                  If you have any questions, concerns, or requests regarding this Privacy Policy
                  or our data practices, please contact our Data Protection contact:
                </P>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 mt-2">
                  <p className="font-semibold text-[#1A3A5C] mb-2">OsCompanyFinder Technologies</p>
                  <p>Email:{" "}
                    <a href="mailto:contact@oscfinder.com" className="text-[#006285] hover:underline">
                      contact@oscfinder.com
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-[#888888]">
                    We aim to respond to all privacy-related requests within 30 days.
                  </p>
                </div>
              </Section>

              {/* Bottom nav */}
              <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-xs text-[#888888]">Last updated: {effective}</p>
                <Link
                  href="/terms"
                  className="text-sm text-[#006285] font-semibold hover:underline"
                >
                  Read our Terms of Service →
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
