export default function HeroSection() {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-end overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Shenzhen_CBD_and_Futian_District.jpg/1280px-Shenzhen_CBD_and_Futian_District.jpg"
        alt="Shenzhen skyline"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-white mb-4 tracking-[-0.02em] lg:whitespace-nowrap">
            Sourcing from Shenzhen
          </h1>
          <p className="text-sm md:text-lg text-white/70 leading-relaxed">
            China&apos;s hardware capital. Home to Huaqiangbei, the world&apos;s largest
            electronics market district, and the densest concentration of PCB, consumer
            electronics, and smart hardware factories on earth.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#find-suppliers"
              className="btn-pill px-7 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
            >
              Find Shenzhen Suppliers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
