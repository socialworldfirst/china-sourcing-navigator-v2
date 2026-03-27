export default function ChinaSportsChart() {
  const data = [
    { label: "Global gym and fitness equipment production (by volume)", pct: 76, color: "#FF0051" },
    { label: "Home treadmills worldwide (made in Xiamen)", pct: 60, color: "#E0004A" },
    { label: "Global sports goods exports", pct: 40, color: "#C00040" },
    { label: "Domestic commercial fitness equipment (Ningjin alone)", pct: 70, color: "#A00038" },
  ];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
      <p className="text-sm text-wf-text font-semibold uppercase tracking-wider mb-5">
        China&apos;s share of global sports equipment
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
        Industry data, 2024&ndash;2025. China exported US$28.4 billion in sporting goods (+6.77% YoY). 63,000+ sports equipment enterprises, 1.5 trillion yuan industry output. Fitness equipment exports reached US$5.05 billion. Ningjin County (Shandong) produced 13.9 billion yuan in fitness equipment alone.
      </p>
    </div>
  );
}
