export default function HeroSection() {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-end overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Quanzhou_Kaiyuan_Temple_-_East_Pagoda_-_DSCF8668.JPG/1280px-Quanzhou_Kaiyuan_Temple_-_East_Pagoda_-_DSCF8668.JPG"
        alt="Quanzhou Kaiyuan Temple skyline"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-white mb-4 tracking-[-0.02em] lg:whitespace-nowrap">
            Sourcing from Quanzhou
          </h1>
          <p className="text-sm md:text-lg text-white/70 leading-relaxed">
            Jinjiang is the world&apos;s sneaker capital &mdash; 1 in 5 sports shoes on earth
            starts here. Shishi is Asia&apos;s largest menswear hub. Together they anchor
            Fujian&apos;s factory-first manufacturing powerhouse.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#find-suppliers"
              className="btn-pill px-7 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
            >
              Find Quanzhou Suppliers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
