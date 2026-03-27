import CantonFairBanner from "@/components/CantonFairBanner";

const sportsShows = [
  { month: "MAY", startDay: "21", endDay: "24", name: "China Sport Show (CSS)", focus: "Asia\u2019s largest sporting goods trade event. 1,600+ exhibitors, 120,000+ visitors, 160,000+ sqm. Fitness equipment, sports venues, wearables, rehab tools, sportswear, outdoor gear.", region: "Xiamen" },
  { month: "MAR", startDay: "13", endDay: "15", name: "IWF Shanghai Fitness Expo", focus: "Asia\u2019s leading fitness trade show. 1,000+ exhibitors, 80,000 sqm. Fitness equipment, smart wearables, nutrition, fitness apparel, club management. Theme: \u201CMore Than Fitness\u201D.", region: "Shanghai" },
  { month: "JUN", startDay: "TBC", endDay: "TBC", name: "ISPO Shanghai", focus: "Multi-segment summer sports show. Water sports, health and fitness, running, sport style, action sports, outdoor. Complements ISPO Beijing\u2019s winter focus.", region: "Shanghai" },
  { month: "MAY", startDay: "1", endDay: "5", name: "Canton Fair Phase 3 (Spring)", focus: "Area D: Indoor and outdoor sports \u2014 balls, boxing, skateboards, fitness equipment, trampolines, archery, bicycles, climbing, sports glasses, sports bags.", region: "Guangzhou" },
  { month: "OCT", startDay: "31", endDay: "4", name: "Canton Fair Phase 3 (Autumn)", focus: "Autumn edition. Textiles, apparel, shoes, sports equipment. Same Area D sports categories as spring phase.", region: "Guangzhou" },
];

function RegionBadge({ region }: { region: string }) {
  const colors: Record<string, string> = {
    Xiamen: "bg-emerald-50 text-emerald-600 border-emerald-200",
    Shanghai: "bg-blue-50 text-blue-600 border-blue-200",
    Guangzhou: "bg-wf-red/10 text-wf-red border-wf-red/20",
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

      {/* ── Other sports trade shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Other sports equipment trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Key exhibitions across China for sports goods, fitness equipment, and athletic products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sportsShows.map((show) => (
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

      {/* ── China Sport Show highlight note ── */}
      <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-xl p-4">
        <p className="text-sm text-emerald-800">
          <span className="font-semibold">Don&apos;t miss China Sport Show in Xiamen (May 21&ndash;24):</span> Organised by the China Sporting Goods Federation, CSS is Asia&apos;s largest and most influential sporting goods trade event. With 1,600+ exhibitors across 160,000+ square metres, it covers every sports product category from commercial gym equipment to wearable tech. If you attend one sports equipment event in China, make it CSS.
        </p>
      </div>
    </div>
  );
}
