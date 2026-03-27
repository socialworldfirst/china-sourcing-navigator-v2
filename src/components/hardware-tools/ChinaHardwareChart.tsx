export default function ChinaHardwareChart() {
  const data = [
    { label: "Global power tool production (by volume)", pct: 80, color: "#FF0051" },
    { label: "Global hand tools market share", pct: 37, color: "#E0004A" },
    { label: "Global fastener exports (by value)", pct: 30, color: "#C00040" },
    { label: "Power tool exports rebounded in 2024", pct: 69, color: "#A00038" },
  ];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
      <p className="text-sm text-wf-text font-semibold uppercase tracking-wider mb-5">
        China&apos;s share of global hardware &amp; tools
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
        Industry data, 2024&ndash;2025. China produced 543 million power tools in 2024 (+19% YoY), exporting 387 million units valued at US$10.9 billion (+30% YoY). Fastener exports totalled approximately US$11.1 billion across 4.98 million tonnes. Yongkang alone hosts 1,700+ power tool enterprises. Haiyan County (near Ningbo) exported 9% of China&apos;s total fastener output.
      </p>
    </div>
  );
}
