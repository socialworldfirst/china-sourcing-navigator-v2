import basePath from "@/lib/basePath";

const hktdcShows = [
  { month: "MAR", startDay: "4", endDay: "8", name: "HKTDC International Jewellery Show", focus: "Fine jewelry, loose gems, diamonds, pearls. EXHIBITION+ hybrid format" },
  { month: "APR", startDay: "13", endDay: "16", name: "HKTDC Electronics Fair (Spring) + Lighting + ICT Expo", focus: "XR, IoT, robotics, mobile electronics, smart city, AI, fintech" },
  { month: "APR", startDay: "27", endDay: "30", name: "HKTDC Gifts & Premium Fair + Home InStyle", focus: "Gifts, premiums, promotional products, home decor, housewares" },
  { month: "SEP", startDay: "1", endDay: "5", name: "HKTDC Watch & Clock Fair", focus: "Watches, clocks, components, smart wearables" },
  { month: "OCT", startDay: "13", endDay: "16", name: "HKTDC Electronics Fair (Autumn)", focus: "Autumn edition — typically larger. Components, consumer electronics" },
];

const otherShows = [
  { month: "APR", startDay: "TBC", endDay: "", name: "Global Sources Electronics", focus: "Consumer electronics, components. AsiaWorld-Expo venue" },
  { month: "OCT", startDay: "TBC", endDay: "", name: "Global Sources Fashion + Home Products", focus: "Fashion, accessories, home products. AsiaWorld-Expo" },
  { month: "NOV", startDay: "TBC", endDay: "", name: "Cosmoprof Asia", focus: "Beauty, cosmetics, personal care" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── HKTDC Trade Fairs ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">HKTDC trade fairs 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Hong Kong Convention and Exhibition Centre (HKCEC), Wan Chai</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {hktdcShows.map((show) => (
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

      {/* ── Other Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Other Hong Kong trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">AsiaWorld-Expo and HKCEC</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {otherShows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                  <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                  <div className="text-base font-bold leading-none text-wf-text">{show.startDay}</div>
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

      {/* ── Canton Fair + Shenzhen note ── */}
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
            <h5 className="text-sm font-semibold text-wf-text mb-1">Canton Fair (Guangzhou) &mdash; 47 minutes by high-speed rail</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              Take the high-speed rail from West Kowloon Station to Guangzhou South in 47 minutes. Many
              importers combine Hong Kong trade shows with Canton Fair attendance and Shenzhen factory tours.
              Shenzhen Futian is just 14 minutes from West Kowloon by HSR.
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
