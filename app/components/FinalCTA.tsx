import Image from "next/image";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <Image
        src="/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#006285]/93 via-[#0099CC]/90 to-[#00A86B]/93" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto">
          Ready to grow your business with automated lead generation?
        </h2>
        <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
          Join forward-thinking Nigerian companies already using <span className="text-[#00C48C]">OsC</span>Finder.
          Setup takes just 48 hours.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@oscfinder.com"
            className="inline-flex items-center justify-center gap-2 bg-[#00C48C] hover:bg-[#00A86B] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Book Demo
          </a>
          <a
            href="mailto:contact@oscfinder.com"
            className="inline-flex items-center justify-center gap-2 bg-[#006285] hover:bg-[#004a66] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Get Access
          </a>
          <a
            href="mailto:contact@oscfinder.com"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base border border-white/20 transition-colors"
          >
            Talk to Sales
          </a>
        </div>

        <p className="mt-8 text-white/40 text-sm">
          &ldquo;We set this up for your company in 48 hours.
        </p>
      </div>
    </section>
  );
}
