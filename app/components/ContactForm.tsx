"use client";

import { useState } from "react";
import { IconMail, IconPhone, IconBuilding, IconUser, IconMessageDots, IconCircleCheck, IconSend, IconRocket } from "@tabler/icons-react";
import { SIGNUP_URL } from "../constants";

const INTERESTS = [
  "Start a Free Trial",
  "Get a Demo",
  "Book a Strategy Call",
  "Starter Plan",
  "Business Plan",
  "Enterprise Plan",
  "General Inquiry",
];

type Field = "name" | "company" | "email" | "phone" | "interest" | "message";

const INITIAL: Record<Field, string> = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(field: Field, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const next: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) next.name = "Full name is required";
    if (!form.company.trim()) next.company = "Company name is required";
    if (!form.email.trim()) next.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (!form.interest) next.interest = "Please select what you need";
    return next;
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate async submission — swap this for a real API call / Resend / Formspree
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  if (submitted) {
    return (
      <section id="contact-form" className="py-20 bg-gradient-to-br from-[#edfaf5] via-[#f0faff] to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-12 shadow-sm">
            <div className="w-16 h-16 bg-[#e6f7f1] rounded-full flex items-center justify-center mx-auto mb-5">
              <IconCircleCheck size={32} color="#00A86B" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A1628] mb-3">Request received!</h3>
            <p className="text-[#888888] leading-relaxed mb-6">
              Thanks, <strong className="text-[#1A3A5C]">{form.name}</strong>. We&apos;ll reach out
              to you at <strong className="text-[#1A3A5C]">{form.email}</strong> within{" "}
              <strong className="text-[#1A3A5C]">24 hours</strong> to confirm your request.
            </p>
            <button
              onClick={() => { setForm(INITIAL); setSubmitted(false); }}
              className="text-sm text-[#006285] font-semibold hover:underline"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-[#edfaf5] via-[#f0faff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left — info panel ── */}
          <div className="lg:col-span-2">
            <span className="text-[#006285] font-semibold text-xs uppercase tracking-widest">
              Get in touch
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0A1628] leading-snug">
              Ready to start generating leads?
            </h2>
            <p className="mt-4 text-[#888888] leading-relaxed">
              Tell us what you need and we&apos;ll get back to you within 24 hours. No pressure,
              no hard sell — just a straight conversation about your pipeline.
            </p>

            <a
              href={SIGNUP_URL}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#00C48C] hover:bg-[#00A86B] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              <IconRocket size={15} />
              Or start your free trial now
            </a>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: <IconCircleCheck size={18} color="#00A86B" />,
                  text: "System setup completed within 48 hours",
                },
                {
                  icon: <IconCircleCheck size={18} color="#00A86B" />,
                  text: "Free demo before any commitment",
                },
                {
                  icon: <IconCircleCheck size={18} color="#00A86B" />,
                  text: "Dedicated support from day one",
                },
                {
                  icon: <IconCircleCheck size={18} color="#00A86B" />,
                  text: "Tailored onboarding for your industry",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                  <p className="text-[#1A3A5C] text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-gradient-to-br from-[#006285] to-[#004a66] rounded-xl">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Direct contact</p>
              <a
                href="mailto:support@oscfinder.com"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm mb-2 transition-colors"
              >
                <IconMail size={15} />
                support@oscfinder.com
              </a>
              <a
                href="tel:+2348139304329"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <IconPhone size={15} />
                +234 813 930 4329
              </a>
              <a
                href="https://wa.me/2348139304329"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#00C48C] hover:text-white text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: +234 813 930 4329
              </a>
            </div>
          </div>

          {/* ── Right — form ── */}
          <div className="lg:col-span-3 bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-[#0A1628] mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Row 1 — name + company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A3A5C] mb-1.5">
                    Full name <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <IconUser size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent transition ${errors.name ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E7EB]"}`}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-[#EF4444]">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A3A5C] mb-1.5">
                    Company name <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <IconBuilding size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
                    <input
                      type="text"
                      placeholder="Acme Ltd"
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent transition ${errors.company ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E7EB]"}`}
                    />
                  </div>
                  {errors.company && <p className="mt-1 text-xs text-[#EF4444]">{errors.company}</p>}
                </div>
              </div>

              {/* Row 2 — email + phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A3A5C] mb-1.5">
                    Email address <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <IconMail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent transition ${errors.email ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E7EB]"}`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-[#EF4444]">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A3A5C] mb-1.5">
                    Phone number <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <IconPhone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent transition ${errors.phone ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E7EB]"}`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-[#EF4444]">{errors.phone}</p>}
                </div>
              </div>

              {/* Interest dropdown */}
              <div>
                <label className="block text-xs font-semibold text-[#1A3A5C] mb-1.5">
                  What are you interested in? <span className="text-[#EF4444]">*</span>
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => set("interest", e.target.value)}
                  className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent transition appearance-none bg-white ${errors.interest ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E7EB]"} ${!form.interest ? "text-[#888888]" : "text-[#0A1628]"}`}
                >
                  <option value="" disabled>Select an option…</option>
                  {INTERESTS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.interest && <p className="mt-1 text-xs text-[#EF4444]">{errors.interest}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#1A3A5C] mb-1.5">
                  Message{" "}
                  <span className="text-[#888888] font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <IconMessageDots size={15} className="absolute left-3 top-3 text-[#888888]" />
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business, your industry, how many leads you need…"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent transition resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#006285] hover:bg-[#004a66] disabled:bg-[#006285]/60 text-white font-bold py-3.5 rounded-xl text-sm transition-colors"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <IconSend size={15} />
                    Send Request
                  </>
                )}
              </button>

              <p className="text-center text-xs text-[#888888]">
                We respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
