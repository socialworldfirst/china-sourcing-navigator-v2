"use client";

import { useState } from "react";
import OnlineDiscoveryLayer from "./OnlineDiscoveryLayer";
import MarketsLayer from "./MarketsLayer";
import TradeShowsLayer from "./TradeShowsLayer";
import DirectFactoryLayer from "./DirectFactoryLayer";

const sections = [
  {
    id: "online",
    label: "Search on 1688",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
    ),
  },
  {
    id: "markets",
    label: "Factory zones in Pingxiang",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20" /><path d="M5 20V8l5-4v16" /><path d="M10 20V4l9 4v12" /></svg>
    ),
  },
  {
    id: "tradeshows",
    label: "Trade shows for Pingxiang products",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
    ),
  },
  {
    id: "factories",
    label: "WorldFirst verified suppliers in Pingxiang",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    ),
  },
];

export default function SourcingLayersTabs() {
  return (
    <section id="find-suppliers" className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-3">
          How to Find <span className="accent-word">Suppliers</span> in Pingxiang
        </h2>
        <p className="hidden md:block text-wf-text-secondary mb-10 max-w-2xl">
          Four ways to find Pingxiang suppliers. This is a factory town, not a showroom city &mdash; arrange visits in advance.
        </p>

        {/* All sections — always visible */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white border border-wf-border rounded-2xl overflow-hidden">
              {/* Dark purple header */}
              <div className="flex items-center gap-4 px-6 py-5 bg-wf-purple-deep rounded-t-2xl">
                <span className="text-white">{section.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white flex-1">{section.label}</h3>
              </div>

              {/* Content area */}
              <div className="px-6 pb-6 pt-5">
                {/* ── Search on 1688 ── */}
                {section.id === "online" && (
                  <div>
                    <p className="text-sm text-wf-text-secondary leading-relaxed mb-6">
                      Pingxiang has thousands of children&apos;s vehicle manufacturers on 1688. Search
                      平乡童车 (Pingxiang children&apos;s vehicles) or 儿童自行车 平乡 (children&apos;s bicycle Pingxiang)
                      and filter by Hebei province to find source factories.
                    </p>
                    <OnlineDiscoveryLayer />
                  </div>
                )}

                {/* ── Factory Zones (no traditional market) ── */}
                {section.id === "markets" && (
                  <div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200/60 mb-5">
                      <div className="flex items-start gap-2.5">
                        <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        <p className="text-sm text-amber-800">
                          <span className="font-medium">No traditional wholesale market.</span> Pingxiang is a distributed factory cluster, not a showroom city. Factories and showrooms are spread across the county. Arrange visits in advance through 1688 contacts or a sourcing agent.
                        </p>
                      </div>
                    </div>
                    <MarketsLayer />
                  </div>
                )}

                {/* ── Trade Shows ── */}
                {section.id === "tradeshows" && <TradeShowsLayer />}

                {/* ── Direct Factory ── */}
                {section.id === "factories" && <DirectFactoryLayer />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
