const tradeShows = [
  { month: "MAR", startDay: "26", endDay: "29", name: "CAIE — China International Aluminium Industry Exhibition", focus: "Aluminium products, processing, equipment. Qingdao International Convention Center" },
  { month: "JUN", startDay: "1", endDay: "30", name: "29th Qingdao International Machine Tool Exhibition", focus: "Machine tools, intelligent cutting, automation, 3C/auto parts/mold. QICC" },
  { month: "JUL", startDay: "8", endDay: "11", name: "CTF — China International Tire & Wheel Fair", focus: "350+ tire enterprises, 200+ manufacturers. Entire tire industry chain. World Expo City" },
  { month: "JUL", startDay: "17", endDay: "AUG 16", name: "Qingdao International Beer Festival", focus: "Asia's largest beer festival. 2,000+ varieties, 9 halls. Golden Sands Beach, free admission" },
  { month: "OCT", startDay: "28", endDay: "30", name: "CFSE — China Fisheries & Seafood Expo", focus: "World's largest seafood trade show. 45,000+ sqm. Hongdao Convention Center" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Qingdao Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Qingdao trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Qingdao International Convention Center (QICC), World Expo City, and Hongdao Convention Center</p>
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

      {/* ── Pro tip note ── */}
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
            <h5 className="text-sm font-semibold text-wf-text mb-1">Combine CTF + Beer Festival in July</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              The China International Tire & Wheel Fair (July 8&ndash;11) and the Qingdao International
              Beer Festival (July 17 &ndash; August 16) run back-to-back. Tire importers can combine
              sourcing with Asia&apos;s largest beer festival for a productive and enjoyable July trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
