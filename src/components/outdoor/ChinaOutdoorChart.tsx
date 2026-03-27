export default function ChinaOutdoorChart() {
  const data = [
    { label: "Global camping equipment production (by volume)", pct: 48, color: "#FF0051" },
    { label: "Global tent production (by volume)", pct: 55, color: "#E0004A" },
    { label: "Global furniture exports (by value)", pct: 34, color: "#C00040" },
    { label: "Outdoor gear retail revenue growth (annual, 3-year avg)", pct: 30, color: "#A00038" },
  ];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
      <p className="text-sm text-wf-text font-semibold uppercase tracking-wider mb-5">
        China&apos;s share of global outdoor &amp; camping
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
        Industry data, 2024&ndash;2025. China produced 1.3M tonnes of camping goods (US$5.8B), exported 904K tonnes (US$4B). Tent output 620K tonnes, exports 425K tonnes (US$2B). 200M+ domestic camping participants. Outdoor gear retailer revenue up 30% annually over three years.
      </p>
    </div>
  );
}
