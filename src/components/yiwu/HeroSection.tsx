export default function HeroSection() {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-end overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Yiwu_International_Trade_City.jpg/1280px-Yiwu_International_Trade_City.jpg"
        alt="Yiwu International Trade City"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-white mb-4 tracking-[-0.02em] lg:whitespace-nowrap">
            Sourcing from Yiwu
          </h1>
          <p className="text-sm md:text-lg text-white/70 leading-relaxed">
            The world&apos;s largest small commodities market. 75,000 booths,
            2.1 million products, and the infrastructure to fill a mixed
            container from a single building.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#find-suppliers"
              className="btn-pill px-7 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
            >
              Find Yiwu Suppliers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
