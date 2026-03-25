const tradeShows = [
  { month: "MAR", startDay: "25", endDay: "27", name: "ALE — Shanghai International Auto Lamp Exhibition", focus: "Automotive lamps, headlights, taillights, interior lighting. At Kunshan Convention Center" },
  { month: "MAR", startDay: "27", endDay: "29", name: "华夏家博会 Huaxia Home Expo", focus: "Home furnishing, appliances, electronics. At Kunshan Convention Center" },
  { month: "NOV", startDay: "27", endDay: "29", name: "YRD Smart Logistics Expo", focus: "Smart logistics equipment and technology. At Kunshan Convention Center" },
];

const shanghaiShows = [
  { month: "MAR", name: "Electronica China", focus: "Electronic components, systems, applications. 50 km from Kunshan" },
  { month: "APR", name: "Global Sources Consumer Electronics (Hong Kong)", focus: "Consumer electronics, components, accessories" },
  { month: "JUN", name: "SEMICON China (Shanghai)", focus: "Semiconductor equipment, materials, advanced packaging" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Kunshan Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Kunshan trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Kunshan International Convention and Exhibition Center</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tradeShows.map((show) => (
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

      {/* ── Shanghai-based shows note ── */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-wf-red/10 border border-wf-red/20 flex items-center justify-center mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-wf-text mb-1">Shanghai trade shows &mdash; 20 minutes by high-speed rail</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed mb-3">
              Kunshan does not host a dedicated electronics sourcing trade show. Plan visits around Shanghai-based expos
              (50 km away) and use Kunshan as a factory-visit base. Key Shanghai shows for Kunshan buyers:
            </p>
            <div className="space-y-2">
              {shanghaiShows.map((show) => (
                <div key={show.name} className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-wf-red min-w-[32px]">{show.month}</span>
                  <span className="text-sm text-wf-text">{show.name}</span>
                  <span className="text-xs text-wf-text-muted hidden md:inline">&mdash; {show.focus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
