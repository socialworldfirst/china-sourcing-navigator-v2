import CantonFairBanner from "@/components/CantonFairBanner";

const hardwareShows = [
  { month: "MAR", startDay: "24", endDay: "26", name: "China International Hardware Fair (CIHF)", focus: "China\u2019s leading spring hardware fair. Hand tools, power tools, fasteners, locks, building hardware, garden tools, abrasives. National Convention & Exhibition Center.", region: "Shanghai" },
  { month: "SEP", startDay: "28", endDay: "30", name: "China International Hardware Show (CIHS)", focus: "The autumn edition. Tools, DIY & building hardware, locks, work safety, accessories, processing equipment, and garden tools. SNIEC venue.", region: "Shanghai" },
  { month: "SEP", startDay: "TBC", endDay: "TBC", name: "China Yongkang Hardware Fair", focus: "Held in Yongkang, the hardware capital. Power tools, hand tools, electric garden tools, locks, doors, cups, and cookware. Direct access to 30,000+ local manufacturers.", region: "Yongkang" },
  { month: "OCT", startDay: "15", endDay: "19", name: "Canton Fair Phase 1 (Autumn)", focus: "Hardware, tools, machinery, equipment. Manual tools, electric tools, pneumatic tools, fasteners, locks, wire mesh, welding materials.", region: "Guangzhou" },
  { month: "MAR", startDay: "TBC", endDay: "TBC", name: "Fastener Expo Shanghai", focus: "Specialist fastener exhibition. Bolts, nuts, screws, washers, threaded rods, fastener manufacturing equipment, testing instruments.", region: "Shanghai" },
];

function RegionBadge({ region }: { region: string }) {
  const colors: Record<string, string> = {
    Shanghai: "bg-blue-50 text-blue-600 border-blue-200",
    Guangzhou: "bg-wf-red/10 text-wf-red border-wf-red/20",
    Yongkang: "bg-amber-50 text-amber-600 border-amber-200",
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

      {/* ── Other hardware trade shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Other hardware &amp; tools trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Key exhibitions across China for hardware, tools, and fasteners</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {hardwareShows.map((show) => (
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

      {/* ── Canton Fair Phase 1 highlight note ── */}
      <div className="bg-red-50/50 border border-red-200/50 rounded-xl p-4">
        <p className="text-sm text-red-800">
          <span className="font-semibold">Canton Fair Phase 1 is the big one for hardware:</span> Unlike most categories that fall under Phase 2 or 3, hardware and tools are covered in Phase 1 (Apr 15&ndash;19 and Oct 15&ndash;19). This phase also includes machinery and equipment, so buyers can source tools and the machines that make them in one trip.
        </p>
      </div>
    </div>
  );
}
