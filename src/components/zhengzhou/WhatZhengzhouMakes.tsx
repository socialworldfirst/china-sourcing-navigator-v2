"use client";

import { useState } from "react";

const categories = [
  {
    name: "Smartphone Assembly",
    stars: 5,
    hook: "Foxconn's largest campus — 500,000 iPhones per day, roughly half the world's supply",
    images: [
      { src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80", alt: "Smartphone assembly production" },
      { src: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80", alt: "Mobile phone accessories" },
    ],
    content: [
      "Zhengzhou's Foxconn facility spans 5.6 square kilometres — roughly one-tenth the size of Manhattan. At peak capacity, 200,000 workers produce 500,000 iPhones per day, accounting for 50–70% of global iPhone output depending on the model cycle. During the August 2024 iPhone 16 ramp-up, Foxconn hired 50,000 additional workers in a two-week period.",
      "The Foxconn campus itself is a closed Apple supply chain facility — you cannot source iPhones or components from it directly. However, the surrounding ecosystem is accessible. Zhengzhou has developed a substantial cluster of phone accessory manufacturers: cases, screen protectors, packaging, chargers, and cables. These suppliers benefit from proximity to Foxconn's quality standards and logistics infrastructure. 1688 search terms: 郑州手机配件, 郑州电子产品.",
    ],
    cta: "Explore Zhengzhou electronics suppliers",
  },
  {
    name: "Logistics & Distribution",
    stars: 4,
    hook: "China's #1 rail freight hub — CR Express to Hamburg in 15 days vs 36 by sea",
    images: [
      { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", alt: "Rail freight logistics" },
      { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80", alt: "Container freight yard" },
    ],
    content: [
      "Zhengzhou sits at the junction of the Beijing–Guangzhou and Lianyungang–Lanzhou railways — China's two most important north-south and east-west rail corridors. This makes it the country's most connected city by rail. In 2023, 1,881 CR Express trains departed Zhengzhou, running the 10,245 km route to Hamburg in approximately 15 days — less than half the 36-day sea freight timeline.",
      "The logistics advantage is real for European-bound exporters. Rail freight costs a fraction of air freight while cutting transit time by more than half compared to sea. Zhengzhou Xinzheng International Airport (CGO) adds 8 intercontinental cargo routes connecting 100+ cities across 24 countries. If you're building a China-to-Europe supply chain, visit the Zhengzhou International Hub (郑州国际陆港) to understand rail freight operations. 1688 terms: 郑州物流, 中欧班列 郑州.",
    ],
    cta: "Explore Zhengzhou logistics services",
  },
  {
    name: "Food Processing",
    stars: 3,
    hook: "China's breadbasket — #1 wheat province, frozen dumplings, instant noodles, snack foods",
    images: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Food processing production line" },
      { src: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&q=80", alt: "Packaged food products" },
    ],
    content: [
      "Henan is China's #1 wheat-producing province, and Zhengzhou is the processing capital. Two of China's largest frozen food companies — Sanquan (三全) and Sinian (思念) — are headquartered here. The city is a major production base for instant noodles, frozen dumplings, flour products, and snack foods. The Zhengzhou Commodity Exchange, founded in 1990, is one of China's three national commodity futures exchanges.",
      "Food processing is Zhengzhou's hidden gem for sourcing. If you're in the food import business, this is a primary production base with established export capabilities. The Zhengzhou Grain Wholesale Market connects to the commodity exchange, giving you access to both spot and futures pricing. 1688 search terms: 郑州食品加工, 速冻食品 郑州, 方便面 河南.",
    ],
    cta: "Explore Zhengzhou food suppliers",
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

export default function WhatZhengzhouMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-zhengzhou-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Zhengzhou</span> Makes
          </h2>
          <p className="text-wf-text-secondary text-base max-w-lg mx-auto">
            Ranked by supply chain depth, supplier density, and export track record
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
