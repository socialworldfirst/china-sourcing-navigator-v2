const dongguanShows = [
  { month: "MAR", startDay: "8", endDay: "10", name: "DPE \u2014 Power Supply & Electronic Switches Exhibition", focus: "Power supplies, transformers, electronic switches" },
  { month: "MAR", startDay: "15", endDay: "19", name: "55th Famous Furniture Fair (3F)", focus: "Home furniture, bedroom, mattresses, wood machinery. 1,000+ brands" },
  { month: "MAR", startDay: "25", endDay: "27", name: "DTC \u2014 Textile & Clothing Industry Fair", focus: "Textile, clothing, sewing machinery, digital printing" },
  { month: "MAR", startDay: "25", endDay: "27", name: "DFM \u2014 Footwear Machinery & Material Fair", focus: "Footwear machinery, leather, fly knit, injection. 550 exhibitors, 50,000 sqm" },
  { month: "MAR", startDay: "25", endDay: "27", name: "SCISMA \u2014 Sewing Machinery & Accessories Show", focus: "Sewing machinery, production accessories" },
  { month: "MAY", startDay: "23", endDay: "25", name: "Dongguan Int\u2019l Cutting Industry Equipment Expo", focus: "Cutting tools, automation, CNC machining. 200+ exhibitors" },
];

const annualShows = [
  { name: "China (Dalang) International Woolen Knitwear Fair", timing: "Usually November", focus: "Knitwear, yarn, knitting machinery. 30,000+ attendees from 20+ countries" },
  { name: "Humen International E-Commerce Festival", timing: "Variable", focus: "Digital commerce, fashion e-commerce" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Canton Fair note ── */}
      <div className="rounded-xl border border-wf-border bg-wf-bg-light p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-wf-red/10 flex items-center justify-center mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-wf-text mb-1">Canton Fair is 1 hour away</h4>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              The Canton Fair runs April 15 &ndash; May 5 in Guangzhou, reachable from Dongguan in under
              an hour via HSR (Humen Station &rarr; Guangzhou South, 30 min). Many Dongguan
              factories exhibit at the Canton Fair. Combine a Dongguan factory visit with Canton
              Fair attendance for maximum coverage.
            </p>
          </div>
        </div>
      </div>

      {/* ── Confirmed 2026 Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Dongguan trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">
          Guangdong Modern International Exhibition Center (GDE), Houjie Town
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {dongguanShows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
              {/* Date range: two boxes with dash */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                  <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                  <div className="text-base font-bold leading-none text-wf-text">{show.startDay}</div>
                </div>
                <span className="text-wf-text-muted text-xs font-medium">&ndash;</span>
                <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                  <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                  <div className="text-base font-bold leading-none text-wf-text">{show.endDay}</div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium text-wf-text leading-tight">{show.name}</h5>
                <p className="text-xs text-wf-text-muted mt-0.5">{show.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Annual Events ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Annual events (2026 dates TBC)</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {annualShows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
              <div className="flex-shrink-0 w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">TBC</div>
                <div className="text-xs font-bold leading-none text-wf-text-muted">&mdash;</div>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium text-wf-text leading-tight">{show.name}</h5>
                <p className="text-xs text-wf-text-muted mt-0.5">{show.timing} &mdash; {show.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
