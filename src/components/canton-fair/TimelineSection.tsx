/* ─── Reusable wrapper for each timeline stage ─── */

export default function TimelineSection({
  id,
  badge,
  title,
  subtitle,
  children,
  bg = "bg-white",
}: {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section id={id} className={`py-14 md:py-20 ${bg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stage header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wf-red/10 text-wf-red text-xs font-semibold mb-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-wf-text mb-2">
            {title}
          </h2>
          <p className="text-wf-text-secondary text-sm max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Section content */}
        {children}
      </div>
    </section>
  );
}
