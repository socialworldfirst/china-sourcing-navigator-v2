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
    label: "Wholesale markets in Guangzhou",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    ),
  },
  {
    id: "tradeshows",
    label: "Trade shows in Guangzhou",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
    ),
  },
  {
    id: "factories",
    label: "WorldFirst verified suppliers in Guangzhou",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20" /><path d="M5 20V8l5-4v16" /><path d="M10 20V4l9 4v12" /></svg>
    ),
  },
];

export default function SourcingLayersTabs() {
  const [showAllMarkets, setShowAllMarkets] = useState(false);

  return (
    <section id="find-suppliers" className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-3">
          How to Find <span className="accent-word">Suppliers</span> in Guangzhou
        </h2>
        <p className="hidden md:block text-wf-text-secondary mb-10 max-w-2xl">
          Four ways to find Guangzhou suppliers. Most successful importers use multiple approaches at different stages.
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
                      1688 is where you find the source of the source — Alibaba&apos;s domestic B2B
                      marketplace where Chinese factories actually trade with each other. Prices are
                      20-40% lower because there&apos;s no international middleman markup.
                    </p>
                    <OnlineDiscoveryLayer />
                  </div>
                )}

                {/* ── Markets ── */}
                {section.id === "markets" && (
                  <div>
                    <MarketsLayer limit={showAllMarkets ? undefined : 3} />
                    {!showAllMarkets && (
                      <div className="text-center mt-6">
                        <button
                          onClick={() => setShowAllMarkets(true)}
                          className="btn-pill inline-flex items-center gap-2 px-6 py-2.5 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
                        >
                          Show all 11 markets
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                        </button>
                      </div>
                    )}
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
