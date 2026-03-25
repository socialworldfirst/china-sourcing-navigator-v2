import CantonFairBanner from "@/components/CantonFairBanner";

const foshanShows = [
  { month: "MAR", startDay: "17", endDay: "20", name: "Longjiang International Furniture Expo", focus: "Furniture, materials, 90,000+ buyers from 120 countries" },
  { month: "MAR", startDay: "18", endDay: "21", name: "CIFF Phase 1 (Guangzhou)", focus: "Home furniture, outdoor, decor" },
  { month: "MAR", startDay: "28", endDay: "31", name: "CIFF Phase 2 (Guangzhou)", focus: "Office furniture, commercial, CIFM/interzum" },
  { month: "APR", startDay: "18", endDay: "23", name: "CeramBath (3 Foshan venues)", focus: "Ceramics, sanitary ware, bathroom \u2014 Asia\u2019s No. 1" },
  { month: "APR", startDay: "20", endDay: "23", name: "Uniceramics Expo", focus: "Full ceramic value chain, 96,000 sqm, 600+ exhibitors" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Canton Fair — nearby in Guangzhou ── */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          <span className="text-xs font-medium text-amber-700">Canton Fair is in Guangzhou, 45 minutes from Foshan by metro. CIFF runs from the same complex.</span>
        </div>
        <CantonFairBanner />
      </div>

      {/* ── Foshan & Regional Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Foshan trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Furniture buyers: combine Longjiang Expo + CIFF in one March trip. Ceramics buyers: CeramBath + Uniceramics overlap in April.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {foshanShows.map((show) => (
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
    </div>
  );
}
