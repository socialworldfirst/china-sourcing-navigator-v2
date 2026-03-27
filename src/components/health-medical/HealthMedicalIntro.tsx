import ChinaHealthMedicalChart from "./ChinaHealthMedicalChart";

export default function HealthMedicalIntro() {
  return (
    <section className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-4">
              Health &amp; medical manufacturing in <span className="accent-word">China</span>
            </h2>
            <div className="space-y-4">
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                China&apos;s medical device exports reached US$48.75 billion in 2024, growing 7.3%
                year-on-year and accounting for roughly a quarter of global medical product trade.
                The domestic market exceeded CNY 1,200 billion the same year. This is not a cottage
                industry &mdash; it is a fully industrialised supply chain spanning patient monitors,
                imaging equipment, disposable consumables, rehabilitation devices, and wellness
                products, concentrated in a handful of cities with distinct specialisations.
              </p>
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                Guangdong province alone accounts for 23.9% of China&apos;s medical device exports.
                Shenzhen is the headquarters of Mindray, China&apos;s largest medical device
                company, and hosts over 140 high-end medical device firms in its Guangming
                district cluster. Shanghai&apos;s Zhangjiang Science City &mdash; dubbed
                &ldquo;China&apos;s Pharma Valley&rdquo; &mdash; houses 1,700+ biomedical
                companies. For importers, the opportunity is real &mdash; but so is the regulatory
                complexity. FDA, CE, and NMPA compliance requirements make due diligence
                non-negotiable.
              </p>
            </div>
          </div>

          {/* Right: Chart */}
          <div>
            <ChinaHealthMedicalChart />
          </div>
        </div>
      </div>
    </section>
  );
}
