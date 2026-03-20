import basePath from "@/lib/basePath";

const tradeShows = [
  { month: "APR", startDay: "9", endDay: "11", name: "CITE \u2014 China Information Technology Expo", focus: "AI, computing, data centres, electronic components" },
  { month: "MAY", startDay: "13", endDay: "15", name: "CIBF \u2014 China International Battery Fair", focus: "Batteries, energy storage, EV power systems" },
  { month: "AUG", startDay: "26", endDay: "28", name: "IOTE \u2014 Internet of Things Exhibition", focus: "RFID, smart retail, sensors, intelligent payment" },
  { month: "SEP", startDay: "9", endDay: "11", name: "CIOE + ELEXCON", focus: "Optoelectronics, lasers, electronics, embedded systems" },
  { month: "NOV", startDay: "26", endDay: "28", name: "CHTF \u2014 China Hi-Tech Fair", focus: "AI, NEV, manufacturing, medical devices. 400,000 sqm" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Shenzhen Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Shenzhen trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Shenzhen Convention Center (Futian) and Shenzhen World Exhibition Center (Bao&apos;an)</p>
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

      {/* ── Canton Fair note ── */}
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
            <h5 className="text-sm font-semibold text-wf-text mb-1">Canton Fair (Guangzhou) &mdash; 29 minutes by high-speed rail</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              Phase 1 (Apr 15-19) covers electronics, hardware, and lighting. Many importers combine a Canton Fair
              visit with Shenzhen factory tours. Take the Guangzhou-Shenzhen-Hong Kong Express Rail from Shenzhen North
              to Guangzhou South in 29 minutes.
            </p>
            <a
              href={`${basePath}/canton-fair-2026`}
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-wf-red hover:text-wf-red-hover transition-colors"
            >
              Learn more about Canton Fair
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
