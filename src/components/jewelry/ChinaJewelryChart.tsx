export default function ChinaJewelryChart() {
  const data = [
    { label: "Watch production by volume (806M units)", pct: 76, color: "#FF0051" },
    { label: "Spectacle lenses (Danyang alone)", pct: 50, color: "#E0004A" },
    { label: "Fashion jewelry global exports", pct: 33, color: "#C00040" },
    { label: "Fine jewelry processing (Panyu district)", pct: 25, color: "#A00038" },
    { label: "Gold jewelry wholesale (Shuibei district)", pct: 60, color: "#800030" },
  ];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
      <p className="text-sm text-wf-text font-semibold uppercase tracking-wider mb-5">
        China&apos;s share of global jewelry &amp; accessories
      </p>
      <div className="space-y-4">
        {data.map((d) => (
          <div key={d.label}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-sm font-medium text-wf-text">{d.label}</span>
              <span className="text-sm font-semibold text-wf-text">{d.pct}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${d.pct}%`, backgroundColor: d.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-wf-text-muted mt-4">
        Industry data, 2024&ndash;2025. China exported US$4.7B in fashion jewelry (+14.85% YoY), US$7.6B+ in eyewear, and produced 806M watches (76% of global volume). Panyu district accounts for 60% of China&apos;s fine jewelry output. Shuibei handles 60% of China&apos;s gold jewelry trade.
      </p>
    </div>
  );
}
