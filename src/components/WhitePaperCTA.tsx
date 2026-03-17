import basePath from "@/lib/basePath";

export default function WhitePaperCTA() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* LEFT: Book cover — controlled size */}
      <div className="flex-shrink-0 order-1 lg:order-1 flex justify-center">
        <div className="relative w-48 md:w-56 lg:w-64 h-auto">
          <img
            src={`${basePath}/images/china-sourcing-map-cover-16.jpg`}
            alt="China Sourcing Map Report — WorldFirst"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* RIGHT: Content + bullets + CTA */}
      <div className="flex-1 order-2 lg:order-2 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold text-wf-text mb-3 whitespace-nowrap">
          Download the <span className="accent-word">China Sourcing Map</span>
        </h3>
        <p className="text-wf-text-secondary text-sm mb-6 leading-relaxed">
          A 300+ page sourcing report covering 6 regions, 20 sourcing cities,
          and 24 product categories &mdash; built from real supplier data
          and WorldFirst&apos;s 150,000+ factory network. Free for importers.
        </p>

        {/* What's inside */}
        <ul className="space-y-2 mb-6 inline-block text-left">
          {[
            "20 city deep dives with industrial cluster maps",
            "24 category guides with pricing benchmarks",
            "6 regional shipping and logistics guides",
            "Supplier verification frameworks",
            "Payment protection and landed cost guides",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-wf-text-secondary">
              <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* CTA — clean, no email */}
        <div className="lg:text-left text-center">
          <a
            href="#"
            className="btn-pill inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover"
          >
            Download Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
