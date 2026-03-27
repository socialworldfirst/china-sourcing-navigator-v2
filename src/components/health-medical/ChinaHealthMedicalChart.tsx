export default function ChinaHealthMedicalChart() {
  const data = [
    { label: "Medical devices (global export share)", pct: 25, color: "#FF0051" },
    { label: "Patient monitors", pct: 65, color: "#E0004A" },
    { label: "Blood pressure monitors", pct: 50, color: "#C00040" },
    { label: "Disposable medical supplies", pct: 60, color: "#A00038" },
    { label: "Massage and wellness equipment", pct: 45, color: "#800030" },
  ];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
      <p className="text-sm text-wf-text font-semibold uppercase tracking-wider mb-5">
        China&apos;s share of global production
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
        Sources: Industry data, 2024&ndash;2025 estimates
      </p>
    </div>
  );
}
