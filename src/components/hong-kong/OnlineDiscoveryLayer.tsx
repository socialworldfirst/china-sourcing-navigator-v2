"use client";

import { useState } from "react";

export default function OnlineDiscoveryLayer() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-0 px-2 md:px-4">
      {/* ── How to Find Partners via HKTDC ── */}
      <div className="py-6">
        <h4 className="text-xl md:text-2xl font-semibold text-wf-text mb-4">How to find verified suppliers through HKTDC</h4>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Steps */}
          <div className="space-y-4">
            {[
              { step: "1", title: "Search sourcing.hktdc.com", desc: "HKTDC's verified supplier directory. Search by product category, company name, or keyword. All listed suppliers have been vetted through HKTDC's exhibitor verification process." },
              { step: "2", title: "Filter by product & certification", desc: "Narrow results by product type, certification (ISO, CE, FDA), and company type (manufacturer, trading company, sourcing agent). HKTDC profiles include company background and trade show attendance history." },
              { step: "3", title: "Attend HKTDC trade fairs", desc: "HKTDC organises 30+ trade fairs annually at HKCEC. Electronics Fair (April/October), Jewellery Show (March), Gifts Fair (April), Watch & Clock Fair (September). In-person meetings at fairs build trust faster than any platform." },
              { step: "4", title: "Use Global Sources for comparison", desc: "Global Sources runs competing trade shows (typically April + October) at AsiaWorld-Expo. Cross-reference suppliers found on HKTDC with Global Sources listings to verify consistency and pricing." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-wf-red/10 border border-wf-red/20 flex items-center justify-center">
                  <span className="text-wf-red font-semibold text-xs">{s.step}</span>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-wf-text">{s.title}</h5>
                  <p className="text-xs text-wf-text-muted mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: HKTDC info card */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 w-full md:max-w-sm md:ml-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wf-red/10 border border-wf-red/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-wf-text">HKTDC</h5>
                <p className="text-xs text-wf-text-muted">Hong Kong Trade Development Council</p>
              </div>
            </div>
            <p className="text-sm text-wf-text-secondary leading-relaxed mb-4">
              Hong Kong&apos;s official trade promotion body. Organises 30+ trade fairs annually
              and operates the sourcing.hktdc.com verified supplier directory.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-wf-text-secondary">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                Verified exhibitor profiles
              </div>
              <div className="flex items-center gap-2 text-xs text-wf-text-secondary">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                EXHIBITION+ hybrid format (online + offline)
              </div>
              <div className="flex items-center gap-2 text-xs text-wf-text-secondary">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                Free registration for most trade fairs
              </div>
            </div>
            <a
              href="https://sourcing.hktdc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-2 px-5 py-2.5 bg-wf-red text-white text-xs font-medium hover:bg-wf-red-hover transition-colors mt-5"
            >
              Browse HKTDC Suppliers
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── QC Firms ── */}
      {!showMore ? (
        <div className="text-center md:text-left py-6 border-t border-wf-border/50">
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-[#FF6A00] text-white text-sm font-medium hover:bg-[#E55E00] cursor-pointer transition-colors"
          >
            Hong Kong QC &amp; Inspection Firms
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
        </div>
      ) : (
        <div className="py-8 border-t border-wf-border/50">
          <h4 className="text-xl md:text-2xl font-semibold text-wf-text mb-3">
            Quality Control Firms with Hong Kong Offices
          </h4>
          <p className="text-wf-text-secondary text-sm mb-5 leading-relaxed">
            Book inspections through these firms&apos; HK offices. They dispatch inspectors
            to mainland factories across the Pearl River Delta and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "SGS", desc: "Product testing, inspection, certification", tag: "Major regional office" },
              { name: "Bureau Veritas", desc: "QC inspection, factory audit, social compliance", tag: "Regional HQ" },
              { name: "TUV", desc: "Technical inspection, certification, testing", tag: "Office" },
              { name: "Intertek", desc: "Quality assurance, testing, inspection", tag: "Office" },
              { name: "Pro QC International", desc: "Factory audits, QMS audits, social compliance, product inspections", tag: "Office" },
              { name: "QIMA (AsiaInspection)", desc: "Online-booked inspections across China", tag: "HK-founded" },
            ].map((firm) => (
              <div key={firm.name} className="p-4 rounded-xl border border-wf-border bg-wf-bg-light">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-sm font-semibold text-wf-text">{firm.name}</h5>
                  <span className="text-[10px] text-wf-text-muted bg-white px-2 py-0.5 rounded-full border border-wf-border">{firm.tag}</span>
                </div>
                <p className="text-xs text-wf-text-secondary">{firm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
