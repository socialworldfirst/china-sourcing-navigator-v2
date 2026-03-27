import basePath from "@/lib/basePath";

export default function WhyWorldFirstSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="flex items-center justify-center">
            <img
              src={`${basePath}/images/why-worldfirst.webp`}
              alt="Why WorldFirst — pay suppliers with confidence"
              className="rounded-2xl border border-wf-border w-full max-w-md"
              loading="lazy"
            />
          </div>

          {/* Right: Text — thesis-led */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-4">
              Source Smarter, <span className="accent-word">Pay Safer</span>
            </h2>
            <p className="text-wf-text-secondary text-base leading-relaxed mb-5">
              1.5 million businesses have used WorldFirst to pay suppliers since 2004.
              We&apos;ve seen thousands of importers move from Alibaba to direct factory sourcing.
            </p>
            <p className="text-wf-text-secondary text-base leading-relaxed mb-5">
              The ones who do well learn the cities first, verify their suppliers second,
              and sort out payments before wiring a deposit.
            </p>
            <p className="text-wf-text font-medium text-base leading-relaxed mb-8">
              That&apos;s what this guide is for.
            </p>

            <a
              href="https://www.worldfirst.com/uk/world-account/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-2 px-6 py-3 border border-wf-red text-wf-red text-sm font-medium hover:bg-wf-red hover:text-white transition-colors"
            >
              About WorldFirst
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
