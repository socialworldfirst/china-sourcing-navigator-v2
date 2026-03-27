"use client";

import { useState } from "react";
import Unlock1688Section from "@/components/Unlock1688Section";

export default function OnlineDiscoveryLayer() {
  const [showUnlock, setShowUnlock] = useState(false);

  return (
    <div className="space-y-8">
      {/* ── How to find hardware suppliers on 1688 + YouTube ── */}
      <div>
        <h4 className="text-xl md:text-2xl font-semibold text-wf-text mb-4">How to find hardware &amp; tools suppliers on 1688</h4>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Steps */}
          <div className="space-y-4">
            {[
              { step: "1", title: "Search in Chinese", desc: "Use Chinese product terms like \u4E94\u91D1\u5DE5\u5177 (hardware tools), \u7535\u52A8\u5DE5\u5177 (power tools), \u87BA\u4E1D (screws), \u6273\u624B (wrenches), or \u94B3\u5B50\u5382\u5BB6 (plier factory)." },
              { step: "2", title: "Filter by hardware hubs", desc: "Set location to \u6C38\u5EB7 (Yongkang) for power tools and hand tools, \u5B81\u6CE2 (Ningbo) for fasteners and hand tools, or \u4E49\u4E4C (Yiwu) for mixed hardware at low MOQs." },
              { step: "3", title: "Check factory badges", desc: "Look for \u8D85\u7EA7\u5DE5\u5382 (Super Factory) and \u5B9E\u529B\u5546\u5BB6 (Power Merchant). For tools, also check whether the supplier lists CrV steel grades and holds GS or CE certifications." },
              { step: "4", title: "Verify before paying", desc: "Cross-check the business registration on Tianyancha. Request sample tools and test hardness, finish quality, and dimensional accuracy before committing to bulk. Use WorldFirst to pay in RMB directly." },
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
        <h5 className="text-sm font-semibold text-wf-text mb-3">Key 1688 search terms for hardware &amp; tools</h5>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            { cn: "\u4E94\u91D1\u5DE5\u5177", en: "Hardware tools" },
            { cn: "\u7535\u52A8\u5DE5\u5177", en: "Power tools" },
            { cn: "\u87BA\u4E1D", en: "Screws" },
            { cn: "\u6273\u624B", en: "Wrench / spanner" },
            { cn: "\u94B3\u5B50", en: "Pliers" },
            { cn: "\u87BA\u6813\u87BA\u6BCD", en: "Bolts and nuts" },
            { cn: "\u7D27\u56FA\u4EF6", en: "Fasteners" },
            { cn: "\u5408\u9875", en: "Hinges" },
            { cn: "\u9501\u5177", en: "Locks" },
            { cn: "\u5207\u5272\u5DE5\u5177", en: "Cutting tools" },
            { cn: "\u6D4B\u91CF\u5DE5\u5177", en: "Measuring tools" },
            { cn: "\u7535\u94BB", en: "Electric drill" },
          ].map((t) => (
            <div key={t.cn} className="bg-white rounded-lg px-3 py-2 border border-wf-border/50">
              <span className="text-xs font-medium text-wf-text block">{t.cn}</span>
              <span className="text-[10px] text-wf-text-muted">{t.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Unlock 1688 dropdown — visually separated ── */}
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
