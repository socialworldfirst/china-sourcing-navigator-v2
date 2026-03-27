"use client";

import { useState } from "react";
import Unlock1688Section from "@/components/Unlock1688Section";

export default function OnlineDiscoveryLayer() {
  const [showUnlock, setShowUnlock] = useState(false);

  return (
    <div className="space-y-8">
      {/* ── How to find outdoor gear suppliers on 1688 + YouTube ── */}
      <div>
        <h4 className="text-xl md:text-2xl font-semibold text-wf-text mb-4">How to find outdoor gear suppliers on 1688</h4>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Steps */}
          <div className="space-y-4">
            {[
              { step: "1", title: "Search in Chinese", desc: "Use Chinese product terms like \u6237\u5916\u7528\u54C1 (outdoor products), \u5E10\u7BF7\u5382\u5BB6 (tent factory), \u9732\u8425\u88C5\u5907\u6279\u53D1 (camping equipment wholesale), or \u6237\u5916\u5BB6\u5177 (outdoor furniture)." },
              { step: "2", title: "Filter by outdoor gear hubs", desc: "Set location to \u5B81\u6CE2 (Ningbo) for tents and camping furniture, \u4E49\u4E4C (Yiwu) for accessories, \u4F5B\u5C71 (Foshan) for outdoor furniture, or \u5E7F\u5DDE (Guangzhou) for outdoor clothing and bags." },
              { step: "3", title: "Check factory badges", desc: "Look for \u8D85\u7EA7\u5DE5\u5382 (Super Factory) and \u5B9E\u529B\u5546\u5BB6 (Power Merchant). For tents, ISO 9001 and CE certification mentions in the shop description indicate export-ready factories." },
              { step: "4", title: "Verify before paying", desc: "Cross-check the business registration on Tianyancha. Request waterproof test reports for tents. Use WorldFirst to pay in RMB directly to the supplier\u2019s 1688/Alipay account." },
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
        <h5 className="text-sm font-semibold text-wf-text mb-3">Key 1688 search terms for outdoor &amp; camping gear</h5>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            { cn: "\u6237\u5916\u7528\u54C1", en: "Outdoor products" },
            { cn: "\u5E10\u7BF7", en: "Tent" },
            { cn: "\u9732\u8425\u88C5\u5907", en: "Camping equipment" },
            { cn: "\u6237\u5916\u5BB6\u5177", en: "Outdoor furniture" },
            { cn: "\u767B\u5C71\u5305", en: "Hiking backpack" },
            { cn: "\u7761\u888B", en: "Sleeping bag" },
            { cn: "\u9732\u8425\u706F", en: "Camping lantern" },
            { cn: "\u6298\u53E0\u6905", en: "Folding chair" },
            { cn: "\u5929\u5E55", en: "Canopy / tarp" },
            { cn: "\u540A\u5E8A", en: "Hammock" },
            { cn: "\u6237\u5916\u7082\u5177", en: "Outdoor cookware" },
            { cn: "\u85E4\u7F16\u5BB6\u5177", en: "Rattan furniture" },
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
