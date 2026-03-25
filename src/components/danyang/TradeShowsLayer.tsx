import basePath from "@/lib/basePath";

const tradeShows = [
  { month: "MAR", startDay: "18", endDay: "20", name: "SIOF — Shanghai International Optics Fair", focus: "900 exhibitors, 70,000 visitors, 110,000 sqm. Major Danyang manufacturer attendance. Shanghai SNIEC" },
  { month: "MAY", startDay: "8", endDay: "10", name: "WOF — Wenzhou International Optics Fair", focus: "Features all 4 China Eyewear Production Bases: Wenzhou, Danyang, Shenzhen, Xiamen" },
  { month: "SEP", startDay: "8", endDay: "10", name: "CIOF — China International Optics Fair", focus: "37th edition. China's largest optical trade show. Beijing" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Optical Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Optical trade shows for Danyang suppliers 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Danyang manufacturers exhibit heavily at these national optical fairs</p>
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

      {/* ── Danyang local fair note ── */}
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
            <h5 className="text-sm font-semibold text-wf-text mb-1">Danyang Eyewear Expo &mdash; local event</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              Danyang has historically hosted local eyewear exhibitions. 2026 dates have not been confirmed &mdash;
              check the Danyang city government site (丹阳市人民政府) for announcements. SIOF in Shanghai (March)
              is the most efficient way to meet Danyang manufacturers if the local expo dates do not align with your trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
