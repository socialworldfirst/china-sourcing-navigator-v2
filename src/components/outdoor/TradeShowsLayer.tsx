import CantonFairBanner from "@/components/CantonFairBanner";

const outdoorShows = [
  { month: "JAN", startDay: "9", endDay: "11", name: "ISPO Beijing", focus: "Asia\u2019s leading sports trade platform. Outdoor, snowsports, running, camping lifestyle, urban sports. Well-known local and international brands.", region: "Beijing" },
  { month: "MAY", startDay: "21", endDay: "24", name: "China Sport Show (CSS)", focus: "Asia\u2019s largest sporting goods trade event. 1,600+ exhibitors, 120,000+ visitors, 160,000+ sqm. Outdoor gear, fitness equipment, sportswear, wearables.", region: "Xiamen" },
  { month: "MAY", startDay: "1", endDay: "5", name: "Canton Fair Phase 3 (Spring)", focus: "Area D: Camping, hiking, outdoor sports \u2014 tents, sleeping bags, backpacks, camping furniture, outdoor lighting. ~400 outdoor suppliers.", region: "Guangzhou" },
  { month: "JUL", startDay: "8", endDay: "10", name: "Shanghai Outdoor Camping Expo", focus: "Professional exhibition for outdoor camping equipment and sports equipment. Gathers more than half of China\u2019s outdoor camping brands.", region: "Shanghai" },
  { month: "TBC", startDay: "TBC", endDay: "TBC", name: "Asia Outdoor Trade Show", focus: "Asia\u2019s first and biggest professional outdoor trade show. 600+ international exhibitors. UFI approved. Camping, RV, outdoor clubs.", region: "Nanjing" },
  { month: "TBC", startDay: "TBC", endDay: "TBC", name: "CIOE \u2014 China International Outdoor & Camping Exhibition", focus: "China\u2019s biggest camping gear exhibition. 3,800+ exhibitors showcasing tents, outdoor furniture, camping accessories, and innovation.", region: "Shenzhen" },
];

function RegionBadge({ region }: { region: string }) {
  const colors: Record<string, string> = {
    Beijing: "bg-amber-50 text-amber-600 border-amber-200",
    Xiamen: "bg-emerald-50 text-emerald-600 border-emerald-200",
    Shanghai: "bg-blue-50 text-blue-600 border-blue-200",
    Guangzhou: "bg-wf-red/10 text-wf-red border-wf-red/20",
    Nanjing: "bg-purple-50 text-purple-600 border-purple-200",
    Shenzhen: "bg-cyan-50 text-cyan-600 border-cyan-200",
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

      {/* ── Other outdoor trade shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Other outdoor &amp; camping trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Key exhibitions across China for camping gear, outdoor furniture, and recreation products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {outdoorShows.map((show) => (
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

      {/* ── CIOE highlight note ── */}
      <div className="bg-cyan-50/50 border border-cyan-200/50 rounded-xl p-4">
        <p className="text-sm text-cyan-800">
          <span className="font-semibold">Key show: CIOE in Shenzhen</span> &mdash; China&apos;s biggest camping gear exhibition with 3,800+ exhibitors. If you source camping tents, outdoor furniture, or camping accessories, CIOE covers every product category in a single venue. Combine with Asia Outdoor in Nanjing (UFI approved, 600+ exhibitors) for the most comprehensive supplier discovery trip.
        </p>
      </div>
    </div>
  );
}
