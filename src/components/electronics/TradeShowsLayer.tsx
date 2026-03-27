import CantonFairBanner from "@/components/CantonFairBanner";

const electronicsShows = [
  { month: "APR", startDay: "11", endDay: "14", name: "Hong Kong Electronics Fair (Spring)", focus: "Consumer electronics, components, mobile accessories", region: "Hong Kong" },
  { month: "APR", startDay: "11", endDay: "14", name: "Global Sources Electronics", focus: "Smart home, audio, wearables, components", region: "Hong Kong" },
  { month: "JUN", startDay: "9", endDay: "12", name: "GILE Lighting Exhibition", focus: "All lighting — 3,200+ exhibitors", region: "Guangzhou" },
  { month: "OCT", startDay: "15", endDay: "19", name: "Canton Fair Phase 1 (Autumn)", focus: "Electronics, hardware, tools", region: "Guangzhou" },
  { month: "OCT", startDay: "13", endDay: "16", name: "Hong Kong Electronics Fair (Autumn)", focus: "Consumer electronics, components", region: "Hong Kong" },
  { month: "NOV", startDay: "11", endDay: "13", name: "Electronica China", focus: "Semiconductors, components, embedded systems", region: "Shanghai" },
];

function RegionBadge({ region }: { region: string }) {
  const colors: Record<string, string> = {
    Guangzhou: "bg-wf-red/10 text-wf-red border-wf-red/20",
    "Hong Kong": "bg-amber-50 text-amber-600 border-amber-200",
    Shanghai: "bg-blue-50 text-blue-600 border-blue-200",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${colors[region] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
      {region}
    </span>
  );
}

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Canton Fair — shared component ── */}
      <CantonFairBanner />

      {/* ── Other Electronics Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Other electronics trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Key exhibitions across China and Hong Kong for electronics sourcing</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {electronicsShows.map((show) => (
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
                <div className="mt-1.5">
                  <RegionBadge region={show.region} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
