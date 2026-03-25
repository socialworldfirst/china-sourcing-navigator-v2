export default function HeroSection() {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-end overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Zhengzhou_CBD_with_Greenland_Plaza.jpg/1280px-Zhengzhou_CBD_with_Greenland_Plaza.jpg"
        alt="Zhengzhou skyline"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-white mb-4 tracking-[-0.02em] lg:whitespace-nowrap">
            Sourcing from Zhengzhou
          </h1>
          <p className="text-sm md:text-lg text-white/70 leading-relaxed">
            &ldquo;iPhone City&rdquo; &mdash; home to Foxconn&apos;s largest factory campus and
            China&apos;s #1 rail freight hub. The CR Express gateway connecting
            Chinese manufacturing to European markets in 15 days.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#find-suppliers"
              className="btn-pill px-7 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
            >
              Find Zhengzhou Suppliers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
