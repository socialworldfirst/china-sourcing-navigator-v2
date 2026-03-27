import ChinaJewelryChart from "./ChinaJewelryChart";

export default function JewelryIntro() {
  return (
    <section className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-4">
              Jewelry &amp; accessories manufacturing in <span className="accent-word">China</span>
            </h2>
            <div className="space-y-4">
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                China exported US$4.7 billion in fashion jewelry in 2024, up 14.85%
                year-on-year, and commands roughly 33% of the global jewelry market by
                value. Add watches (806 million units &mdash; 76% of global volume)
                and eyewear (US$7.6 billion in exports), and the combined accessories
                sector makes China the undisputed production engine for everything
                buyers wear that is not clothing or footwear.
              </p>
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                What sets this category apart is city-level specialisation. Yiwu
                dominates fashion jewelry with 5,000+ booths in District 1 alone.
                Panyu (Guangzhou) processes 60% of China&apos;s fine jewelry &mdash;
                the same workshops that manufacture for Tiffany and Cartier also take
                OEM orders. Shenzhen&apos;s Shuibei district handles 60% of the
                country&apos;s gold wholesale trade. And Danyang produces half the
                world&apos;s spectacle lenses. Each city owns a different rung of the
                value ladder, from US$0.10 Yiwu earrings to six-figure Panyu diamond
                commissions.
              </p>
            </div>
          </div>

          {/* Right: Chart */}
          <div>
            <ChinaJewelryChart />
          </div>
        </div>
      </div>
    </section>
  );
}
