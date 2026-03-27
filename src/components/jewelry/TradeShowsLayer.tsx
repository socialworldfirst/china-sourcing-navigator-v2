import CantonFairBanner from "@/components/CantonFairBanner";

const jewelryShows = [
  { month: "MAR", startDay: "2", endDay: "6", name: "HKTDC Hong Kong International Jewellery Show", focus: "Fine jewelry, gemstones, diamonds, pearls, watches", region: "Hong Kong" },
  { month: "JUN", startDay: "18", endDay: "21", name: "Jewellery & Gem ASIA Hong Kong", focus: "Loose stones, finished jewelry, packaging, equipment", region: "Hong Kong" },
  { month: "SEP", startDay: "14", endDay: "18", name: "Jewellery & Gem WORLD Hong Kong", focus: "Global fine jewelry, luxury watches, gemstones", region: "Hong Kong" },
  { month: "SEP", startDay: "11", endDay: "15", name: "Shenzhen International Jewellery Fair", focus: "Gold, diamond, jade, pearl, equipment, packaging", region: "Shenzhen" },
  { month: "APR", startDay: "23", endDay: "27", name: "Canton Fair Phase 2 (Spring)", focus: "Consumer goods, gifts, jewelry, accessories", region: "Guangzhou" },
  { month: "OCT", startDay: "23", endDay: "27", name: "Canton Fair Phase 2 (Autumn)", focus: "Consumer goods, gifts, jewelry, accessories", region: "Guangzhou" },
];

function RegionBadge({ region }: { region: string }) {
  const colors: Record<string, string> = {
    Guangzhou: "bg-wf-red/10 text-wf-red border-wf-red/20",
    "Hong Kong": "bg-amber-50 text-amber-600 border-amber-200",
    Shenzhen: "bg-blue-50 text-blue-600 border-blue-200",
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
      {/* ── Canton Fair ── */}
      <CantonFairBanner />

      {/* ── Other jewelry trade shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Jewelry trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Key exhibitions for jewelry, gemstones, watches, and accessories sourcing</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {jewelryShows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
              {/* Date range */}
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
