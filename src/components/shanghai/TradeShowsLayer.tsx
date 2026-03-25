const shows = [
  { month: "MAR", startDay: "1", endDay: "4", name: "East China Fair (华交会)", focus: "Multi-industry import/export", venue: "SNIEC" },
  { month: "MAR", startDay: "12", endDay: "15", name: "AWE (Appliance & Electronics World)", focus: "Home appliances, consumer electronics", venue: "SNIEC" },
  { month: "MAR", startDay: "30", endDay: "2", endMonth: "APR", name: "HOTELEX Shanghai", focus: "Hospitality, foodservice equipment — 3,000+ exhibitors, 400,000 m²", venue: "NECC" },
  { month: "MAY", startDay: "18", endDay: "20", name: "SIAL Shanghai", focus: "Food & beverage — Asia's largest, 5,000+ exhibitors, 200,000 m²", venue: "SNIEC" },
  { month: "JUN", startDay: "24", endDay: "26", name: "MWC Shanghai", focus: "Mobile, telecom, connectivity", venue: "SNIEC" },
  { month: "OCT", startDay: "12", endDay: "16", name: "CIIF (China International Industry Fair)", focus: "Industrial automation, robotics, manufacturing", venue: "NECC" },
  { month: "NOV", startDay: "5", endDay: "10", name: "CIIE (China International Import Expo)", focus: "Multi-industry imports into China — government-hosted, 200,000 m²", venue: "NECC" },
  { month: "DEC", startDay: "2", endDay: "5", name: "Automechanika Shanghai", focus: "Automotive parts, equipment — 7,000 exhibitors, 383,000 m²", venue: "NECC" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Venue key ── */}
      <div className="bg-wf-bg-light rounded-xl p-4 border border-wf-border/50">
        <h4 className="text-sm font-semibold text-wf-text mb-2">Shanghai Exhibition Venues</h4>
        <div className="space-y-1.5">
          <p className="text-xs text-wf-text-secondary">
            <span className="font-medium text-wf-text">NECC</span> — National Exhibition and Convention Center (Hongqiao/Qingpu). World&apos;s largest single-block exhibition building — 500,000 m² exhibition space. Metro Lines 2 &amp; 17.
          </p>
          <p className="text-xs text-wf-text-secondary">
            <span className="font-medium text-wf-text">SNIEC</span> — Shanghai New International Expo Centre (Pudong). Major international venue for tech and specialty shows.
          </p>
        </div>
      </div>

      {/* ── Trade Shows Grid ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Major Shanghai trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Shanghai hosts more major international trade shows than any other Chinese city</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {shows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
              {/* Date range: two boxes with dash */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                  <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                  <div className="text-base font-bold leading-none text-wf-text">{show.startDay}</div>
                </div>
                <span className="text-wf-text-muted text-xs font-medium">&ndash;</span>
                <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                  <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.endMonth || show.month}</div>
                  <div className="text-base font-bold leading-none text-wf-text">{show.endDay}</div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium text-wf-text leading-tight">{show.name}</h5>
                <p className="text-xs text-wf-text-muted mt-0.5">{show.focus}</p>
                <span className="inline-block mt-1 text-[10px] font-medium text-wf-text-muted bg-white px-1.5 py-0.5 rounded border border-wf-border">{show.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CIIE special note ── */}
      <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div>
            <h5 className="text-sm font-semibold text-amber-900 mb-1">CIIE is unique</h5>
            <p className="text-xs text-amber-800 leading-relaxed">
              The China International Import Expo is specifically for <span className="font-medium">imports into China</span>, hosted by the Ministry of Commerce. It&apos;s relevant if you want to sell into China, understand what China is importing, or network with Chinese distributors. It&apos;s not a typical sourcing show.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
