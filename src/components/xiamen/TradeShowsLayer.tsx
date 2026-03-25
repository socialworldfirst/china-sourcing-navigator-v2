import basePath from "@/lib/basePath";

const tradeShows = [
  { month: "MAR", startDay: "16", endDay: "19", name: "China Xiamen International Stone Fair (26th)", focus: "World's premier stone fair. 2,000+ exhibitors, 150K+ attendees. XICEC" },
  { month: "APR", startDay: "9", endDay: "12", name: "Xiamen Industry Expo + Cross-Strait Mechanical & Electronic Fair", focus: "CNC, robotics, automation, digital economy. EXPO Center" },
  { month: "APR", startDay: "17", endDay: "20", name: "China Xiamen International Tea Fair (Spring)", focus: "Tea sourcing — oolong, Tieguanyin, white tea, pu'erh. XICEC" },
  { month: "MAY", startDay: "21", endDay: "24", name: "China International Sporting Goods Expo (43rd)", focus: "Fitness equipment, sporting goods, gym fit-outs. XICEC" },
  { month: "JUN", startDay: "8", endDay: "10", name: "Cross-border E-commerce Expo (6th)", focus: "E-commerce, supply chain, cross-border logistics. XICEC" },
  { month: "JUN", startDay: "23", endDay: "25", name: "China Xiamen International Optics Fair (26th)", focus: "Eyewear, sunglasses, optical lenses, frames. XICEC" },
  { month: "SEP", startDay: "8", endDay: "11", name: "CIFIT — China International Fair for Investment & Trade (26th)", focus: "China's premier investment fair, visitors from 120+ countries. EXPO Center" },
  { month: "OCT", startDay: "15", endDay: "19", name: "Tea Industry Fair (Autumn) + Buddhist Items Fair", focus: "Autumn tea sourcing, crafts, Buddhist items. XICEC" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Xiamen Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Xiamen trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">XICEC = Xiamen International Conference & Exhibition Center. EXPO Center = Xiamen International EXPO Center.</p>
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
            <h5 className="text-sm font-semibold text-wf-text mb-1">Canton Fair (Guangzhou) &mdash; 3.5 hours by high-speed rail</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              Canton Fair Phase 2 (Apr 23-27) covers ceramics, home decor, and building materials &mdash;
              relevant for Xiamen stone buyers. Phase 1 (Apr 15-19) covers electronics and lighting.
              Many importers combine Canton Fair with Xiamen trade show visits and factory tours
              in Tong&apos;an (fitness) or Haicang (eyewear).
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
