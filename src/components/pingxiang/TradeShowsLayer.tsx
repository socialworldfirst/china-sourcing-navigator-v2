import basePath from "@/lib/basePath";

const tradeShows = [
  { month: "MAY", startDay: "5", endDay: "8", name: "China Cycle — China International Bicycle Fair", focus: "34th edition. Major annual bicycle industry event. Pingxiang manufacturers attend. Shanghai SNIEC" },
  { month: "OCT", startDay: "TBC", endDay: "", name: "CKE — China Kids Expo", focus: "Baby & children's products including bicycles, strollers, ride-ons. Shanghai" },
];

export default function TradeShowsLayer() {
  return (
    <div className="space-y-8">
      {/* ── National Trade Shows ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">National trade shows for Pingxiang products 2026</h4>
        <p className="text-sm text-wf-text-muted mb-4">Pingxiang manufacturers exhibit at these major industry fairs</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tradeShows.map((show) => (
            <div key={show.name} className="flex items-center gap-3 p-4 rounded-xl border border-wf-border bg-wf-bg-light">
              {/* Date range: two boxes with dash */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                  <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                  <div className="text-base font-bold leading-none text-wf-text">{show.startDay}</div>
                </div>
                {show.endDay && (
                  <>
                    <span className="text-wf-text-muted text-xs font-medium">&ndash;</span>
                    <div className="w-11 text-center py-1.5 rounded-lg bg-white border border-wf-border">
                      <div className="text-[9px] uppercase font-semibold leading-none mb-1 text-wf-text-muted tracking-wide">{show.month}</div>
                      <div className="text-base font-bold leading-none text-wf-text">{show.endDay}</div>
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
      </div>

      {/* ── Pingxiang local fair ── */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-wf-red/10 border border-wf-red/20 flex items-center justify-center mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-wf-text mb-1">Pingxiang International Bicycles, Baby Strollers and Toys Fair</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              Pingxiang hosts its own bi-annual fair (spring + autumn). The 18th edition in October 2024 attracted 1,500+
              companies and generated 4.15 billion yuan in orders. 2026 dates are not yet confirmed &mdash; expect editions
              around April/May and October. Check the Pingxiang county government site (平乡县人民政府) for announcements.
              This is the most efficient way to see the entire cluster in one visit.
            </p>
          </div>
        </div>
      </div>

      {/* ── Canton Fair note ── */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-wf-red/10 border border-wf-red/20 flex items-center justify-center mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-wf-text mb-1">Canton Fair (Guangzhou) &mdash; Phase 2 covers children&apos;s products</h5>
            <p className="text-sm text-wf-text-secondary leading-relaxed">
              Canton Fair Phase 2 (Apr 23&ndash;27) covers consumer goods including children&apos;s products.
              Many importers source at the Canton Fair first, then visit shortlisted Pingxiang factories
              for production discussions and pricing negotiation.
            </p>
            <a
              href={`${basePath}/canton-fair-2026`}
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-wf-red hover:text-wf-red-hover transition-colors"
            >
              Learn more about Canton Fair
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
