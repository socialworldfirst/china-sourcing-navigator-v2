import basePath from "@/lib/basePath";

const tradeShows = [
  { month: "MAR", startDay: "11", endDay: "13", name: "CDIIF — Chengdu International Industry Fair", focus: "Industrial automation, robotics, machine vision, new materials, digital factory" },
  { month: "MAR", startDay: "26", endDay: "28", name: "CFDF — China Food & Drinks Fair (114th)", focus: "Asia's largest F&B exhibition. 6,500+ exhibitors, 320,000+ sqm" },
  { month: "MAY", startDay: "21", endDay: "23", name: "CAPAS — Automotive Parts & Aftermarket", focus: "Auto parts, maintenance equipment, aftermarket services" },
  { month: "JUL", startDay: "15", endDay: "17", name: "CEF — China Electronics Fair (Chengdu)", focus: "XR, IoT, robotics, e-sports, mobile electronics" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Chengdu Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Chengdu trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Western China International Expo City and Century City New International Convention &amp; Exhibition Center</p>
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
            <h5 className="text-sm font-semibold text-wf-text mb-1">Canton Fair (Guangzhou) &mdash; 2 hours by direct flight</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              The world&apos;s largest trade fair runs three phases in April-May. Chengdu Tianfu Airport
              has direct flights to Guangzhou Baiyun in approximately 2 hours. Many Western China-based
              importers combine Canton Fair attendance with Chengdu supplier meetings.
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
