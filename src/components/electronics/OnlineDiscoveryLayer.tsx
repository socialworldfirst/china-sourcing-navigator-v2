"use client";

import { useState } from "react";
import Unlock1688Section from "@/components/Unlock1688Section";

export default function OnlineDiscoveryLayer() {
  const [showUnlock, setShowUnlock] = useState(false);

  return (
    <div className="space-y-8">
      {/* ── How to find electronics suppliers on 1688 + YouTube ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-4">How to find electronics suppliers on 1688</h4>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Steps */}
          <div className="space-y-4">
            {[
              { step: "1", title: "Search in Chinese", desc: "Use product names in Chinese (e.g. 蓝牙耳机 for Bluetooth earphones, 充电器 for chargers). WorldFirst's AI Sourcing Agent translates for you." },
              { step: "2", title: "Filter by electronics hubs", desc: "Set the supplier location filter to Shenzhen (深圳), Dongguan (东莞), or Guangdong (广东) province." },
              { step: "3", title: "Check factory badges", desc: "Look for 实力商家 (verified merchant) and 源头工厂 (source factory) tags. For electronics, also check if they list SMT production lines." },
              { step: "4", title: "Verify before paying", desc: "Cross-check the business registration. Pay through 1688 World Pay for CNY payment protection." },
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
