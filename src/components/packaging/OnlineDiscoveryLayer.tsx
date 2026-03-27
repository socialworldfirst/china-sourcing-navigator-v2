"use client";

import { useState } from "react";
import Unlock1688Section from "@/components/Unlock1688Section";

export default function OnlineDiscoveryLayer() {
  const [showUnlock, setShowUnlock] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-4">How to find packaging suppliers on 1688</h4>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Steps */}
          <div className="space-y-4">
            {[
              { step: "1", title: "Search in Chinese", desc: "Use product names in Chinese: \u5305\u88C5\u76D2 (packaging box), \u7EB8\u7BB1 (carton), \u793C\u54C1\u76D2 (gift box), \u6807\u7B7E (label), \u585E\u6599\u888B (plastic bag). Add material keywords like \u74E6\u695E\u7EB8 (corrugated) or \u767D\u5361\u7EB8 (white cardboard)." },
              { step: "2", title: "Filter by packaging hubs", desc: "Set the supplier location to Yiwu (\u4E49\u4E4C), Guangzhou (\u5E7F\u5DDE), Dongguan (\u4E1C\u839E), or Wenzhou (\u6E29\u5DDE) depending on your packaging type." },
              { step: "3", title: "Check factory badges", desc: "Look for \u5B9E\u529B\u5546\u5BB6 (verified merchant) and \u6E90\u5934\u5DE5\u5382 (source factory). For printing, check if they show actual press equipment \u2014 offset, flexo, or digital." },
              { step: "4", title: "Request a sample box", desc: "Always order physical samples before committing. Check print sharpness, colour accuracy against your Pantone swatch, structural rigidity, and glue seams. Pay through 1688 World Pay for CNY payment protection." },
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

          {/* Right: YouTube video */}
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video w-full max-w-sm md:ml-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4FrzaW_WfWY"
              title="Sourcing from 1688: The Ultimate Guide - WorldFirst"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* ── 1688 search terms reference ── */}
      <div className="bg-wf-bg-light rounded-xl p-5 border border-wf-border">
        <h4 className="text-sm font-semibold text-wf-text mb-3">Useful 1688 search terms for packaging</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            { cn: "\u5305\u88C5\u76D2", en: "Packaging box" },
            { cn: "\u7EB8\u7BB1", en: "Carton / cardboard box" },
            { cn: "\u793C\u54C1\u76D2", en: "Gift box" },
            { cn: "\u6807\u7B7E", en: "Label / sticker" },
            { cn: "\u585E\u6599\u888B", en: "Plastic bag" },
            { cn: "\u98DE\u673A\u76D2", en: "Mailer box" },
            { cn: "\u74E6\u695E\u7EB8\u7BB1", en: "Corrugated carton" },
            { cn: "\u767D\u5361\u7EB8\u76D2", en: "White cardboard box" },
            { cn: "\u624B\u63D0\u888B", en: "Paper bag with handles" },
            { cn: "\u4E0D\u5E72\u80F6\u6807\u7B7E", en: "Self-adhesive label" },
            { cn: "\u8F6F\u5305\u88C5", en: "Flexible packaging" },
            { cn: "\u5370\u5237\u5305\u88C5", en: "Printed packaging" },
          ].map((term) => (
            <div key={term.cn} className="flex items-center gap-2 text-xs">
              <span className="font-medium text-wf-text">{term.cn}</span>
              <span className="text-wf-text-muted">{term.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Unlock 1688 dropdown ── */}
      <div className="border-t border-wf-border pt-8">
        {!showUnlock ? (
          <div className="text-center">
            <button
              onClick={() => setShowUnlock(true)}
              className="btn-pill inline-flex items-center gap-2 px-6 py-2.5 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
            >
              Unlock 1688 with WorldFirst
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
          </div>
        ) : (
          <Unlock1688Section />
        )}
      </div>
    </div>
  );
}
