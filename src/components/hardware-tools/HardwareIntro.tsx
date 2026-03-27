import ChinaHardwareChart from "./ChinaHardwareChart";

export default function HardwareIntro() {
  return (
    <section className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-4">
              Hardware &amp; tools manufacturing in <span className="accent-word">China</span>
            </h2>
            <div className="space-y-4">
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                China accounts for roughly 80% of the world&apos;s power tool production
                by volume and over 37% of the global hand tools market. In 2024, Chinese
                factories produced 543 million power tools &mdash; up 19% year on year
                &mdash; and exported 387 million units worth US$10.9 billion. On the
                fasteners side, China shipped 4.98 million tonnes of bolts, screws, and
                nuts valued at US$11.1 billion, making it the world&apos;s largest
                fastener exporter by a wide margin.
              </p>
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                What makes China&apos;s hardware supply chain unique is geographic
                clustering. Yongkang (a county-level city under Jinhua, Zhejiang) is
                universally known as the hardware capital of China &mdash; home to
                30,000+ enterprises and 1,700 power tool manufacturers alone. Ningbo,
                just two hours north-east, dominates fastener production with Haiyan
                County accounting for 9% of national fastener exports. Yiwu&apos;s
                District 2 hosts 3,000 hardware booths open 365 days a year. Each city
                owns a different slice of the hardware value chain.
              </p>
            </div>
          </div>

          {/* Right: Chart */}
          <div>
            <ChinaHardwareChart />
          </div>
        </div>
      </div>
    </section>
  );
}
