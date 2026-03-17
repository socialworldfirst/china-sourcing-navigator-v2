"use client";

import basePath from "@/lib/basePath";
import TimelineSection from "./TimelineSection";

const packingItems = [
  { item: "Passport + visa + invitation letter printout", critical: true },
  { item: "Hotel address written in Chinese (ask the concierge or print it)", critical: true },
  { item: "Bilingual business cards (English + Chinese)", critical: false },
  { item: "USB drive with product specs", critical: false },
  { item: "Comfortable walking shoes (you will walk 20,000+ steps per day)", critical: true },
  { item: "Portable power bank + phone charger", critical: false },
  { item: "Snacks and a water bottle (limited food options inside the venue)", critical: false },
  { item: "Light, breathable clothing (Guangzhou is hot and humid in April/May)", critical: false },
  { item: "Basic medications (pharmacies are hard to navigate without Chinese)", critical: false },
  { item: "Notebook or phone note app for recording booth details", critical: false },
];

export default function WeeksBefore1() {
  return (
    <TimelineSection
      id="weeks-1"
      badge="1 Week Before"
      title="Pack Smart"
      subtitle="You are almost there. Here is what experienced buyers make sure they have in their bag."
    >
      <div className="space-y-8">
        {/* Packing list */}
        <div className="bg-white rounded-xl border border-wf-border p-6 md:p-8">
          <div className="space-y-3">
            {packingItems.map((item) => (
              <div key={item.item} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 ${item.critical ? "border-wf-red bg-wf-red/5" : "border-wf-border"}`}>
                  {item.critical && (
                    <svg className="w-full h-full text-wf-red p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 9v4M12 17h.01" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${item.critical ? "text-wf-text font-medium" : "text-wf-text-secondary"}`}>
                  {item.item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist download */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-wf-bg-light rounded-xl p-6 flex items-center justify-center">
            <img
              src={`${basePath}/images/canton-fair-checklist.png`}
              alt="Canton Fair 2026 Checklist"
              className="w-full max-w-xs rounded-lg border border-wf-border shadow-sm"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-wf-text mb-2">
              Download the Full Checklist
            </h3>
            <p className="text-sm text-wf-text-secondary mb-4 leading-relaxed">
              Save this to your phone camera roll. It covers the complete timeline from visa applications to post-fair follow-ups.
            </p>
            <a
              href={`${basePath}/images/canton-fair-checklist.png`}
              download="Canton-Fair-2026-Checklist.png"
              className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
            >
              Download Checklist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
            <p className="text-xs text-wf-text-muted mt-2">
              PNG image — save to your camera roll for easy access at the fair.
            </p>
          </div>
        </div>
      </div>
    </TimelineSection>
  );
}
