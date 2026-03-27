import ChinaOutdoorChart from "./ChinaOutdoorChart";

export default function OutdoorIntro() {
  return (
    <section className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-4">
              Outdoor &amp; camping gear manufacturing in <span className="accent-word">China</span>
            </h2>
            <div className="space-y-4">
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                China produces 48% of the world&apos;s camping equipment by volume
                &mdash; more than six times the output of South Korea, the
                second-largest producer. In 2024, Chinese factories turned out 1.3
                million tonnes of camping goods valued at US$5.8 billion, with
                904,000 tonnes exported (US$4 billion). Tents alone accounted for
                620,000 tonnes of output and US$2 billion in exports &mdash;
                primarily to the United States.
              </p>
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                What sets China&apos;s outdoor supply chain apart is regional
                specialisation. Ningbo is the most complete outdoor equipment hub
                &mdash; home to Naturehike and dozens of tent, camping furniture,
                and sleeping bag manufacturers with direct access to the world&apos;s
                busiest port. Yiwu&apos;s Futian Market covers every camping accessory
                at MOQs as low as 10 pieces. Foshan is the outdoor furniture capital
                &mdash; over 7,000 factories producing rattan, aluminium, and patio
                sets for gardens worldwide. Over 200 million Chinese consumers now
                participate in camping domestically, fuelling a 30% annual revenue
                spike for outdoor gear retailers.
              </p>
            </div>
          </div>

          {/* Right: Chart */}
          <div>
            <ChinaOutdoorChart />
          </div>
        </div>
      </div>
    </section>
  );
}
