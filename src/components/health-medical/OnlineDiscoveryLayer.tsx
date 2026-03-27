"use client";

import { useState } from "react";
import Unlock1688Section from "@/components/Unlock1688Section";

export default function OnlineDiscoveryLayer() {
  const [showUnlock, setShowUnlock] = useState(false);

  return (
    <div className="space-y-8">
      {/* ── How to find health & medical suppliers on 1688 + YouTube ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-4">How to find health and medical suppliers on 1688</h4>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Steps */}
          <div className="space-y-4">
            {[
              { step: "1", title: "Search in Chinese", desc: "Use product names in Chinese: \u533B\u7597\u5668\u68B0 (medical devices), \u8840\u538B\u8BA1 (blood pressure monitors), \u6309\u6469\u5668 (massage equipment), \u4F53\u6E29\u8BA1 (thermometers), \u8109\u642C\u4EEA (pulse oximeters). WorldFirst\u2019s AI Sourcing Agent translates for you." },
              { step: "2", title: "Filter by medical device hubs", desc: "Set the supplier location filter to Shenzhen (\u6DF1\u5733), Shanghai (\u4E0A\u6D77), Guangdong (\u5E7F\u4E1C) province, or Jiangsu (\u6C5F\u82CF) province." },
              { step: "3", title: "Check certifications carefully", desc: "Look for \u5B9E\u529B\u5546\u5BB6 (verified merchant) and \u6E90\u5934\u5DE5\u5382 (source factory) tags. For medical devices, verify they hold \u533B\u7597\u5668\u68B0\u751F\u4EA7\u8BB8\u53EF\u8BC1 (NMPA production licence) and ISO 13485." },
              { step: "4", title: "Verify regulatory compliance before ordering", desc: "Cross-check NMPA registration number, CE/FDA certificates, and business registration. Pay through 1688 World Pay for CNY payment protection." },
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
      <div className="bg-wf-bg-light border border-wf-border rounded-xl p-5">
        <h4 className="text-sm font-semibold text-wf-text mb-3">Key 1688 search terms for health and medical</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { cn: "\u533B\u7597\u5668\u68B0", en: "Medical devices" },
            { cn: "\u5065\u5EB7\u4EA7\u54C1", en: "Health products" },
            { cn: "\u8840\u538B\u8BA1", en: "Blood pressure monitor" },
            { cn: "\u6309\u6469\u5668", en: "Massage equipment" },
            { cn: "\u4F53\u6E29\u8BA1", en: "Thermometer" },
            { cn: "\u8109\u642C\u4EEA", en: "Pulse oximeter" },
            { cn: "\u8F6E\u6905", en: "Wheelchair" },
            { cn: "\u7259\u79D1\u8BBE\u5907", en: "Dental equipment" },
            { cn: "\u5236\u6C27\u673A", en: "Oxygen concentrator" },
            { cn: "\u96FE\u5316\u5668", en: "Nebuliser" },
            { cn: "\u4E00\u6B21\u6027\u533B\u7597\u7528\u54C1", en: "Disposable medical supplies" },
            { cn: "\u5EB7\u590D\u8BBE\u5907", en: "Rehabilitation equipment" },
          ].map((term) => (
            <div key={term.cn} className="bg-white rounded-lg px-3 py-2 border border-wf-border/50">
              <span className="text-sm font-medium text-wf-text">{term.cn}</span>
              <span className="block text-[11px] text-wf-text-muted">{term.en}</span>
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
