import ChinaSportsChart from "./ChinaSportsChart";

export default function SportsIntro() {
  return (
    <section className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-4">
              Sports equipment manufacturing in <span className="accent-word">China</span>
            </h2>
            <div className="space-y-4">
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                China produces 76% of the world&apos;s gym and fitness equipment by
                volume &mdash; more than ten times the output of the United States.
                In 2024, China exported US$28.4 billion in sporting goods, with
                fitness equipment alone reaching US$5.05 billion (+22% year on year).
                Over 63,000 sports equipment enterprises generate a combined industry
                output exceeding 1.5 trillion yuan.
              </p>
              <p className="text-wf-text-secondary text-sm leading-relaxed">
                What makes China&apos;s sports supply chain different from competitors
                is geographic specialisation. Jinjiang (Quanzhou) is the global sports
                brands capital &mdash; home to Anta, Xtep, and 361 Degrees, producing
                10 billion pairs of sneakers a year. Xiamen is Asia&apos;s largest export
                base for fitness and massage equipment &mdash; six out of ten home
                treadmills on earth start there. Ningjin County in Shandong commands
                70% of China&apos;s commercial gym equipment market. Qingdao dominates
                rubber fitness products. Each city owns a different part of the sports
                supply chain.
              </p>
            </div>
          </div>

          {/* Right: Chart */}
          <div>
            <ChinaSportsChart />
          </div>
        </div>
      </div>
    </section>
  );
}
