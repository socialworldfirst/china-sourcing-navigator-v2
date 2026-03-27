"use client";

import { useState } from "react";
import Unlock1688Section from "@/components/Unlock1688Section";

export default function OnlineDiscoveryLayer() {
  const [showUnlock, setShowUnlock] = useState(false);

  return (
    <div className="space-y-8">
      {/* ── How to find jewelry suppliers on 1688 + YouTube ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-4">How to find jewelry suppliers on 1688</h4>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Steps */}
          <div className="space-y-4">
            {[
              { step: "1", title: "Search in Chinese", desc: "Use product names in Chinese: \u9970\u54c1 (accessories/jewelry), \u9879\u94fe (necklace), \u624b\u8868 (watch), \u592a\u9633\u955c (sunglasses), \u8033\u73af (earrings), \u624b\u93c8 (bracelet). WorldFirst\u2019s AI Sourcing Agent translates for you." },
              { step: "2", title: "Filter by jewelry hubs", desc: "Set supplier location to \u4e49\u4e4c (Yiwu) for fashion jewelry, \u756a\u79ba (Panyu) for fine jewelry, \u6df1\u5733 (Shenzhen) for gold/diamonds, or \u4e1c\u839e (Dongguan) for stainless steel." },
              { step: "3", title: "Check factory badges", desc: "Look for \u5b9e\u529b\u5546\u5bb6 (verified merchant) and \u6e90\u5934\u5de5\u5382 (source factory) tags. For fine jewelry, also check for \u6709\u8d28\u68c0\u62a5\u544a (has quality inspection report) and \u73e0\u5b9d\u9274\u5b9a (jewelry appraisal)." },
              { step: "4", title: "Verify before paying", desc: "Cross-check the business registration. For precious metals, verify hallmarking and assay certificates. Pay through 1688 World Pay for CNY payment protection." },
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
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
        <h5 className="text-sm font-semibold text-wf-text mb-3">Quick 1688 search terms for jewelry &amp; accessories</h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {[
            { cn: "\u9970\u54c1", en: "Accessories / jewelry" },
            { cn: "\u9879\u94fe", en: "Necklace" },
            { cn: "\u8033\u73af", en: "Earrings" },
            { cn: "\u624b\u93c8", en: "Bracelet" },
            { cn: "\u6212\u6307", en: "Ring" },
            { cn: "\u624b\u8868", en: "Watch" },
            { cn: "\u592a\u9633\u955c", en: "Sunglasses" },
            { cn: "\u53d1\u9970", en: "Hair accessories" },
            { cn: "\u80f8\u9488", en: "Brooch" },
            { cn: "\u73e0\u5b9d\u9996\u9970", en: "Precious jewelry" },
            { cn: "\u4e0d\u9508\u94a2\u9970\u54c1", en: "Stainless steel jewelry" },
            { cn: "\u94f6\u9970", en: "Silver jewelry" },
          ].map((term) => (
            <div key={term.cn} className="bg-white rounded-lg px-3 py-2 border border-gray-100">
              <span className="text-sm font-medium text-wf-text">{term.cn}</span>
              <span className="text-xs text-wf-text-muted ml-2">{term.en}</span>
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
