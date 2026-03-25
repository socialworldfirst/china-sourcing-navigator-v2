import CantonFairBanner from "@/components/CantonFairBanner";

const otherShows = [
  { month: "MAR", startDay: "8", endDay: "10", name: "Global New E-Commerce Expo", focus: "E-commerce, food, apparel, live-streaming; 2,000+ exhibitors" },
  { month: "APR", startDay: "15", endDay: "17", name: "CHINASHOP Retail Trade Fair", focus: "Smart retail, IoT, supply chain logistics; 900+ exhibitors" },
  { month: "APR", startDay: "22", endDay: "24", name: "TSCI Textile Supply Chain Expo", focus: "Digital printing, POD, clothing tech" },
  { month: "JUN", startDay: "9", endDay: "11", name: "Internet Celebrity Brand Expo", focus: "Live-streaming, private domain, multi-channel" },
  { month: "JUL", startDay: "9", endDay: "11", name: "ICBE Cross-Border E-Commerce Expo", focus: "Cross-border e-commerce, product selection" },
  { month: "OCT", startDay: "22", endDay: "24", name: "RACC Air Conditioning & Cold Chain", focus: "HVAC, refrigeration, cold chain; 300+ exhibitors" },
  { month: "NOV", startDay: "3", endDay: "5", name: "IEE E-Commerce Ecosystem Expo", focus: "Full e-commerce ecosystem; 60,000 sqm" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── Canton Fair connection ── */}
      <CantonFairBanner />

      {/* ── Hangzhou connection note ── */}
      <div className="bg-wf-bg-light border border-wf-border rounded-xl p-4">
        <p className="text-sm text-wf-text-secondary leading-relaxed">
          <span className="font-semibold text-wf-text">Hangzhou to Canton Fair:</span> 2-hour direct flight (20+ daily) or 6-7.5 hour high-speed train. Zhejiang exhibitors are a major presence across all three phases. Many Sijiqing vendors use Canton Fair as their primary international showcase.
        </p>
      </div>

      {/* ── Hangzhou Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Hangzhou trade shows 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">At Hangzhou International Expo Center and Hangzhou Grand Convention Center</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {otherShows.map((show) => (
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
