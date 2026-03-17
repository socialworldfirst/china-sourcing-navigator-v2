"use client";

import basePath from "@/lib/basePath";

export default function ChecklistBanner() {
  return (
    <section id="checklist" className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-wf-border overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Checklist image preview */}
            <div className="bg-wf-bg-light p-6 md:p-8 flex items-center justify-center">
              <img
                src={`${basePath}/images/canton-fair-checklist.png`}
                alt="Canton Fair 2026 Checklist — printable checklist with 19 items organized by timeline"
                className="w-full max-w-sm rounded-lg border border-wf-border shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Right: CTA */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-wf-text mb-3">
                Save the <span className="accent-word">Checklist</span>
              </h2>
              <p className="text-wf-text-secondary text-sm leading-relaxed mb-6">
                Download this checklist to your phone and check items off as you
                prepare for the fair. It covers everything from visa
                applications to what to pack.
              </p>

              <div className="space-y-3">
                <a
                  href={`${basePath}/images/canton-fair-checklist.png`}
                  download="Canton-Fair-2026-Checklist.png"
                  className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
                >
                  Download Checklist
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
                <p className="text-xs text-wf-text-muted">
                  PNG image — save to your camera roll for easy access at the
                  fair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
