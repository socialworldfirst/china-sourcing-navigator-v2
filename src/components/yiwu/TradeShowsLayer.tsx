const yiwuFair = {
  name: "China Yiwu International Commodities Fair",
  nameCn: "义博会",
  dates: "October 21–24, 2026",
  scale: "100,000 sqm · 2,400+ exhibitors · 180,000+ global buyers",
  description: "China’s 3rd largest trade fair, after Canton Fair and East China Fair. UFI certified, sponsored by the Ministry of Commerce. Running since 1995. Covers consumer products, hardware, electronics, toys, apparel accessories, home goods, socks/hosiery, and stationery.",
  venue: "Yiwu International Expo Center, No. 59 Zongze East Road, Yiwu",
};

const otherShows = [
  { month: "APR", startDay: "20", endDay: "22", name: "Hardware & Electrical Appliances Fair", focus: "Hardware tools, home appliances, electronics" },
  { month: "MAY", startDay: "16", endDay: "18", name: "Gifts, Fashion & Household Goods Expo", focus: "Gifts, fashion accessories, household goods" },
  { month: "MAY", startDay: "28", endDay: "30", name: "TOYEXPO — Toy & Hobby Expo", focus: "Plush, educational, electronic, IP/blind box toys" },
  { month: "JUN", startDay: "3", endDay: "5", name: "Stationery & Gift Exhibition", focus: "Stationery, office supplies, art supplies" },
  { month: "JUN", startDay: "23", endDay: "25", name: "Cross-Border E-Commerce Expo", focus: "Cross-border e-commerce, digital trade, logistics" },
  { month: "NOV", startDay: "TBD", endDay: "", name: "Imported Commodities Fair", focus: "Household, food, garments, e-commerce services" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Yiwu International Commodities Fair — Flagship ── */}
      <div className="bg-white border border-wf-border rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-wf-red canton-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                <span className="text-wf-red font-bold">Flagship Event</span>
                <span className="text-wf-text-muted"> · October 2026</span>
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-wf-text mb-2">
              Yiwu International <span className="accent-word">Commodities Fair</span>
            </h3>
            <p className="text-sm text-wf-text-muted mb-4">{yiwuFair.nameCn}</p>

            <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-wf-red">Dates</span>
                  <span className="text-xs text-wf-text">{yiwuFair.dates}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-wf-red">Scale</span>
                  <span className="text-xs text-wf-text">{yiwuFair.scale}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-wf-red flex-shrink-0">Venue</span>
                  <span className="text-xs text-wf-text">{yiwuFair.venue}</span>
                </div>
              </div>
            </div>

            <p className="text-wf-text-secondary text-sm mb-6 leading-relaxed">
              {yiwuFair.description}
            </p>

            <a
              href="https://en.yiwufair.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover self-start"
            >
              Yiwu Fair official site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Placeholder image area */}
          <div className="relative min-h-[320px] md:min-h-0 mx-2 md:mx-0 rounded-xl md:rounded-none overflow-hidden bg-gradient-to-br from-wf-purple-deep to-purple-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
              <p className="text-white text-sm uppercase tracking-wider font-semibold text-center leading-relaxed mb-4">
                China&apos;s 3rd Largest<br />
                <span className="text-lg md:text-xl font-bold">Trade Fair</span>
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <span className="text-2xl font-bold text-white">100K</span>
                  </div>
                  <span className="text-xs text-white/70 mt-2 block">sqm</span>
                </div>
                <div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <span className="text-2xl font-bold text-white">2.4K</span>
                  </div>
                  <span className="text-xs text-white/70 mt-2 block">exhibitors</span>
                </div>
                <div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <span className="text-2xl font-bold text-white">180K</span>
                  </div>
                  <span className="text-xs text-white/70 mt-2 block">buyers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Other Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Other Yiwu trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">All at Yiwu International Expo Center, No. 59 Zongze East Road</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {otherShows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
              {/* Date range: two boxes with dash */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                  <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                  <div className="text-base font-bold leading-none text-wf-text">{show.startDay}</div>
                </div>
                {show.endDay && (
                  <>
                    <span className="text-wf-text-muted text-xs font-medium">&ndash;</span>
                    <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                      <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                      <div className="text-base font-bold leading-none text-wf-text">{show.endDay}</div>
                    </div>
                  </>
                )}
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
