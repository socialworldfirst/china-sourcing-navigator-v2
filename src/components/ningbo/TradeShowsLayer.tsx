const tradeShows = [
  { month: "MAR", startDay: "12", endDay: "14", name: "China Electronics & Home Appliances Expo", focus: "Consumer electronics, home appliances", highlight: false },
  { month: "MAR", startDay: "16", endDay: "18", name: "CHAE \u2014 Cixi Home Appliances Expo", focus: "Small appliances, kitchen, bathroom", highlight: true },
  { month: "MAR", startDay: "19", endDay: "22", name: "ChinaMach Machinery Exhibition", focus: "Machinery, industrial equipment", highlight: false },
  { month: "MAR", startDay: "25", endDay: "27", name: "CNISE \u2014 Stationery Fair", focus: "Stationery, office, school, art supplies", highlight: true },
  { month: "MAY", startDay: "13", endDay: "15", name: "Ningbo International Lighting Expo", focus: "Lighting products, LED, smart lighting", highlight: false },
  { month: "MAY", startDay: "21", endDay: "24", name: "Mold Capital Expo", focus: "Molds, machine tools, smart factory", highlight: true },
  { month: "MAY", startDay: "27", endDay: "29", name: "Cross-Border E-Commerce Expo", focus: "Cross-border export, logistics, platforms", highlight: false },
  { month: "MAY", startDay: "TBC", endDay: "", name: "CICGF \u2014 Consumer Goods Fair", focus: "Consumer goods, international trade", highlight: true },
  { month: "AUG", startDay: "12", endDay: "14", name: "CAPAFAIR \u2014 Auto Parts Fair", focus: "Auto parts, aftermarket, accessories", highlight: true },
  { month: "DEC", startDay: "TBC", endDay: "", name: "Kitchen & Bathroom Facilities Expo", focus: "Kitchen cabinetry, sanitary ware, smart appliances", highlight: false },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Intro ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Ningbo trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">All at or near Ningbo International Convention & Exhibition Center (NICEC)</p>
      </div>

      {/* ── Trade Show Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tradeShows.map((show) => (
          <div key={show.name} className={`flex items-center gap-3 p-4 rounded-xl border ${show.highlight ? "bg-wf-red/5 border-wf-red/20" : "bg-wf-bg-light border-wf-border"}`}>
            {/* Date range */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <div className={`w-11 text-center py-1.5 rounded-lg ${show.highlight ? "bg-wf-red text-white" : "bg-white border border-wf-border"}`}>
                <div className={`text-[9px] uppercase font-semibold leading-none mb-1 tracking-wide ${show.highlight ? "text-white/70" : "text-wf-text-muted"}`}>{show.month}</div>
                <div className={`text-base font-bold leading-none ${show.highlight ? "text-white" : "text-wf-text"}`}>{show.startDay}</div>
              </div>
              {show.endDay && (
                <>
                  <span className="text-wf-text-muted text-xs font-medium">&ndash;</span>
                  <div className={`w-11 text-center py-1.5 rounded-lg ${show.highlight ? "bg-wf-red text-white" : "bg-white border border-wf-border"}`}>
                    <div className={`text-[9px] uppercase font-semibold leading-none mb-1 tracking-wide ${show.highlight ? "text-white/70" : "text-wf-text-muted"}`}>{show.month}</div>
                    <div className={`text-base font-bold leading-none ${show.highlight ? "text-white" : "text-wf-text"}`}>{show.endDay}</div>
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

      {/* ── Ningbo Sourcing Tips ── */}
      <div className="bg-wf-bg-light rounded-2xl p-6 md:p-8">
        <h4 className="text-base font-semibold text-wf-text mb-4">Tips for Visiting Ningbo Factories</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Book appointments 2\u20134 weeks ahead", desc: "Ningbo is factory-direct. Walk-ins are rarely possible. Email or WeChat the factory in advance." },
            { title: "Plan max 2 factory visits per day", desc: "Cixi and Yuyao factories are spread across townships. Transport between them takes 30\u201360 minutes." },
            { title: "Cixi/Yuyao have no metro", desc: "The metro covers central Ningbo only. You\u2019ll need a taxi or hired car for the 45\u201360 minute trip to factory zones." },
            { title: "Bring samples and specs", desc: "Ningbo factories are OEM/ODM specialists. Bring reference products, drawings, or spec sheets for productive meetings." },
            { title: "Hire an interpreter", desc: "English proficiency is lower than Guangzhou or Shenzhen. A local interpreter (500\u2013800 CNY/day) is strongly recommended." },
            { title: "Combine with Yiwu", desc: "Yiwu is 2 hours by car. Many buyers combine Ningbo factory visits with Yiwu market sourcing on the same trip." },
          ].map((tip) => (
            <div key={tip.title} className="flex items-start gap-3">
              <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              <div>
                <span className="text-sm font-medium text-wf-text">{tip.title}</span>
                <p className="text-xs text-wf-text-muted mt-0.5">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
