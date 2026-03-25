"use client";

import { useState } from "react";

const categories = [
  {
    name: "Trade Orchestration",
    stars: 5,
    hook: "Thousands of trading companies, buying offices, and sourcing agents coordinating pan-China and pan-Asia manufacturing",
    images: [
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "Hong Kong business district" },
      { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", alt: "Business meeting and trade coordination" },
    ],
    content: [
      "Hong Kong is where sourcing deals are structured, not where products are made. Thousands of trading companies, buying offices, and sourcing agents operate from here, coordinating manufacturing across mainland China and Southeast Asia. The city's common law legal system, transparent regulations, and English-language business environment make it the preferred jurisdiction for international trade contracts.",
      "Many of the world's largest importers run their Asia sourcing operations from Hong Kong. The city offers what no mainland city can: enforceable English-law contracts, international arbitration (HKIAC), stronger IP protection, and a banking system that handles letters of credit efficiently across 175+ countries. Register an HK company for approximately HK$10,000 and you have a legal entity under common law to sign contracts, receive goods documentation, and manage trade finance.",
    ],
    cta: "Set up your HK sourcing operation",
  },
  {
    name: "Quality Control & Compliance",
    stars: 5,
    hook: "SGS, Bureau Veritas, TUV, Intertek, QIMA — every major QC firm operates from Hong Kong",
    images: [
      { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", alt: "Quality inspection and testing" },
      { src: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80", alt: "Compliance and certification documentation" },
    ],
    content: [
      "Every major quality control and inspection firm has Hong Kong offices serving the Pearl River Delta factory base. SGS, Bureau Veritas, TUV, Intertek, Pro QC International, and QIMA (formerly AsiaInspection, founded in HK) all operate from here. They dispatch inspectors to mainland factories while you manage the process from Hong Kong or remotely.",
      "Hong Kong's QC advantage goes beyond inspection firms. The city has deep expertise in ISO, CE, FDA, and REACH compliance. Social compliance auditing (BSCI, Sedex, SA8000) is coordinated from HK offices. Factory audit reports issued from Hong Kong carry more weight with international buyers because of the jurisdiction's regulatory reputation. If your supply chain requires third-party verification, Hong Kong is where you set it up.",
    ],
    cta: "Find QC partners in Hong Kong",
  },
  {
    name: "Trade Finance",
    stars: 4,
    hook: "Free port, USD-pegged currency, deep letter of credit expertise, no customs tariffs on most goods",
    images: [
      { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80", alt: "Financial district Hong Kong" },
      { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80", alt: "International banking and trade finance" },
    ],
    content: [
      "Hong Kong is a free port with no customs tariffs on most imported and exported goods. The HKD is pegged to the USD (7.75–7.85 range), eliminating FX risk for USD-denominated deals. Corporate tax sits at 16.5% with no VAT, no GST, and no capital gains tax. HSBC, Standard Chartered, and Bank of China (HK) have deep trade finance expertise, and letters of credit issued from Hong Kong are widely accepted globally.",
      "For small shipments under US$5,000, Hong Kong transit can be more cost-effective than using Shenzhen's Free Trade Zone. For large shipments above $500,000, Shenzhen FTZ is roughly 7x cheaper on transit costs ($158 vs $1,087). The HKMA's Project Cargox (20 recommendations published January 2026) is modernising Hong Kong's trade finance infrastructure, further strengthening its role. Hong Kong International Airport (HKIA) is the world's busiest international cargo airport, connecting 100+ airlines to 180+ cities.",
    ],
    cta: "Explore trade finance options",
  },
  {
    name: "Jewelry & Watches",
    stars: 4,
    hook: "Historic jewelry trading hub — HKTDC Jewellery Show, Jade Market, Watch & Clock Fair",
    images: [
      { src: "https://images.unsplash.com/photo-1515562141589-67f0d937e3f1?w=800&q=80", alt: "Fine jewelry display" },
      { src: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80", alt: "Luxury watches" },
    ],
    content: [
      "Hong Kong has been a jewelry trading hub for decades. Manufacturing has largely moved to Shenzhen's Shuibei district and Guangzhou's Panyu, but trade offices, design houses, and showrooms remain in Hong Kong. The HKTDC International Jewellery Show (March 4–8, 2026) at HKCEC is the premier event for fine jewelry, loose gems, diamonds, and pearls. The HKTDC Watch & Clock Fair (September 1–5, 2026) covers watches, clocks, components, and smart wearables.",
      "The Jade Market in Yau Ma Tei (Kansu Street, near Jordan MTR Station) has hundreds of jewellers selling jade, pearls, precious and semi-precious stones at wholesale and retail. Rise Shopping Arcade in Tsim Sha Tsui offers jewelry boutiques and local designers. For volume buying, attend the HKTDC show and build relationships with exhibitors who source from Shenzhen and Panyu manufacturing clusters.",
    ],
    cta: "Explore Hong Kong jewelry sourcing",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i <= count ? "#FF0051" : "none"}
          stroke={i <= count ? "#FF0051" : "#d1d5db"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function WhatHongKongMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-hong-kong-does" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Hong Kong</span> Does
          </h2>
          <p className="text-wf-text-secondary text-base max-w-lg mx-auto">
            Ranked by strategic value to international sourcing operations
          </p>
        </div>

        <div className="space-y-3">
          {categories.map((cat, i) => {
            const isOpen = openIndex === i;
            const hasContent = cat.content.length > 0;
            return (
              <div
                key={cat.name}
                className="border border-wf-border rounded-2xl overflow-hidden bg-white"
              >
                {/* Header — always visible */}
                <button
                  onClick={() => hasContent && setOpenIndex(isOpen ? -1 : i)}
                  className={`w-full flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left ${hasContent ? 'hover:bg-gray-50/50 cursor-pointer' : 'cursor-default'} transition-colors`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-wf-text font-semibold text-base md:text-lg">
                        {cat.name}
                      </h3>
                      <Stars count={cat.stars} />
                    </div>
                    {cat.hook && (
                      <p className="hidden md:block text-wf-text-secondary text-sm mt-1">
                        {cat.hook}
                      </p>
                    )}
                  </div>
                  {hasContent && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`flex-shrink-0 text-wf-text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </button>

                {/* Content — expandable, always in DOM for AI/SEO */}
                {hasContent && (
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-5 pb-6 md:px-6 pt-4 border-t border-wf-border/50">
                      {/* Images — 2 on desktop, 1 on mobile */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <img
                          src={cat.images[0].src}
                          alt={cat.images[0].alt}
                          className="w-full h-36 md:h-44 object-cover rounded-lg"
                          loading="lazy"
                        />
                        <img
                          src={cat.images[1].src}
                          alt={cat.images[1].alt}
                          className="hidden md:block w-full h-44 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>

                      <p className="md:hidden text-wf-text font-medium text-sm italic mb-3">
                        {cat.hook}
                      </p>
                      <div className="space-y-4">
                        {cat.content.map((paragraph, j) => (
                          <p key={j} className="text-wf-text-secondary text-sm leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-6">
                        <a
                          href="https://www.worldfirst.com/global/register/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill inline-flex items-center gap-2 px-5 py-2 bg-wf-red text-white text-xs font-medium hover:bg-wf-red-hover transition-colors whitespace-nowrap"
                        >
                          {cat.cta}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hidden content for SEO/AI — always in DOM, visually hidden */}
                {hasContent && !isOpen && (
                  <div className="sr-only" aria-hidden="false">
                    {cat.content.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
