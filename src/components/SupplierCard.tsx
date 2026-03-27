import Link from "next/link";

interface SupplierCardProps {
  companyName: string;
  specialty: string;
  since: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function SupplierCard({ companyName, specialty, since, initials, gradientFrom, gradientTo }: SupplierCardProps) {
  return (
    <Link href="/suppliers/dongguan-hengfeng-garments" target="_blank">
      <div className="relative bg-white border border-wf-border rounded-2xl overflow-hidden cursor-pointer hover:shadow-md hover:border-wf-red/30 transition-all">
        {/* Gradient header */}
        <div
          className="h-32 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
        >
          <span className="text-4xl font-bold text-white/30">{initials}</span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-sm font-semibold text-wf-text leading-tight pr-2">{companyName}</h4>
            <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full text-[10px] text-emerald-600 font-medium whitespace-nowrap">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              Verified
            </span>
          </div>
          <p className="text-xs text-wf-text-secondary mb-2">{specialty}</p>
          <p className="text-[11px] text-wf-text-muted">Active since {since} · High trading volume</p>
        </div>
      </div>
    </Link>
  );
}
