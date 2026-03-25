const suzhouShows = [
  { month: "MAR", startDay: "12", endDay: "15", name: "Suzhou International Jewelry Expo", focus: "Jewelry, accessories, gemstones" },
  { month: "MAR", startDay: "27", endDay: "29", name: "GT Show Suzhou Auto Modification", focus: "Auto parts, aftermarket accessories" },
  { month: "APR", startDay: "8", endDay: "10", name: "CLNB New Energy Industry Expo", focus: "New energy, batteries, solar" },
  { month: "APR", startDay: "9", endDay: "12", name: "SME International Machine Tool Exhibition", focus: "CNC, precision equipment, tooling" },
  { month: "APR", startDay: "15", endDay: "17", name: "Turbine Technology Conference", focus: "Aerospace, turbines, aero engines" },
  { month: "MAY", startDay: "8", endDay: "10", name: "Suzhou Beauty & Cosmetics Expo", focus: "Cosmetics, skincare, beauty tools" },
  { month: "MAY", startDay: "27", endDay: "29", name: "High-Performance Engineering Plastics", focus: "Industrial materials, polymers" },
  { month: "OCT", startDay: "21", endDay: "23", name: "Fastener Trade Show + NEV Auto Parts", focus: "Fasteners, automotive parts" },
];

const shanghaiShows = [
  { month: "MAR", startDay: "25", endDay: "27", name: "SEMICON China (Shanghai)", focus: "Semiconductors, chip manufacturing", travel: "25 min HSR" },
  { month: "JUL", startDay: "1", endDay: "3", name: "electronica China (Shanghai)", focus: "Electronic components, systems", travel: "25 min HSR" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Suzhou Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Suzhou trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">All at Suzhou International Expo Center (苏州国际博览中心) &mdash; 100,000 m&sup2; across 9 halls</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {suzhouShows.map((show) => (
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

      {/* ── Key textile trade show callout ── */}
      <div className="bg-white border border-wf-border rounded-2xl overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-wf-red canton-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-wf-text-muted">Key textile event</span>
          </div>
          <h4 className="text-xl md:text-2xl font-semibold text-wf-text mb-3">
            Jiangsu (Shengze) Textile Expo <span className="text-wf-text-muted text-base font-normal">(江苏盛泽纺织品博览会)</span>
          </h4>
          <p className="text-sm text-wf-text-secondary leading-relaxed mb-4">
            The premier textile trade show in the Yangtze River Delta, held at the Shengze International Convention Center.
            Focuses on chemical fiber fabrics, functional textiles, and cross-border textile trade. Date TBD for 2026 &mdash;
            typically held in autumn to align with sourcing season.
          </p>
          <p className="text-xs text-wf-text-muted">
            Venue: Shengze International Convention Center, Wujiang District, Suzhou
          </p>
        </div>
      </div>

      {/* ── Nearby Shanghai Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Nearby Shanghai trade shows</h4>
        <p className="text-sm text-wf-text-muted mb-4">25 minutes by high-speed rail from Suzhou to Shanghai Hongqiao</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {shanghaiShows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
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
                <p className="text-xs text-wf-text-muted mt-0.5">{show.focus} &middot; {show.travel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
