import CantonFairBanner from "@/components/CantonFairBanner";

const otherShows = [
  { month: "MAR", startDay: "4", endDay: "6", name: "Sino-Pack / PACKINNO", focus: "Packaging, printing, labelling" },
  { month: "MAR", startDay: "10", endDay: "12", name: "CIBE Beauty Expo", focus: "Cosmetics, skincare, salon equipment" },
  { month: "MAR", startDay: "18", endDay: "21", name: "CIFF Phase 1", focus: "Home furniture, outdoor, decor" },
  { month: "MAR", startDay: "28", endDay: "31", name: "CIFF Phase 2", focus: "Office furniture, commercial" },
  { month: "JUN", startDay: "9", endDay: "12", name: "GILE Lighting Exhibition", focus: "All lighting, 3,200+ exhibitors" },
  { month: "SEP", startDay: "4", endDay: "6", name: "CIBE Autumn Beauty", focus: "Cosmetics, beauty (autumn)" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Canton Fair — exact landing page component ── */}
      <CantonFairBanner />

      {/* ── Other Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Other Guangzhou trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">All at or near Canton Fair Complex, Pazhou</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {otherShows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
              {/* Date range: two boxes with dash */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                  <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                  <div className="text-base font-bold leading-none text-wf-text">{show.startDay}</div>
                </div>
                <span className="text-wf-text-muted text-xs font-medium">–</span>
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
    </div>
  );
}
