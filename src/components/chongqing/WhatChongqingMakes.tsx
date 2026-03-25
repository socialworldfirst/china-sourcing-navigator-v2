"use client";

import { useState } from "react";

const categories = [
  {
    name: "Laptops & Computing",
    stars: 5,
    hook: "30% of the world's laptops — HP, Acer, ASUS, Toshiba, Lenovo all manufacture here",
    images: [
      { src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80", alt: "Laptop manufacturing production" },
      { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80", alt: "Computer hardware components" },
    ],
    content: [
      "Chongqing produces roughly 30% of the world's laptops — over 55 million units annually, ranking #1 globally for seven consecutive years. It started in May 2008 when Chongqing's mayor visited HP headquarters in Palo Alto and persuaded them to set up a manufacturing base. Acer followed in 2011. Today, approximately 60% of HP's global laptop orders, 85%+ of Acer's exports, and 80% of ASUS laptops are produced here.",
      "Like Zhengzhou's Foxconn, the laptop factories are contract manufacturing for specific brands — you cannot source finished branded laptops directly. However, the peripheral ecosystem is genuinely accessible. Laptop bags, cases, keyboards, mice, cooling pads, stands, docking stations, and accessories are all manufactured by the supply chain that grew around the major brands. 1688 search terms: 重庆笔记本电脑, 重庆电脑配件.",
    ],
    cta: "Explore Chongqing computing suppliers",
  },
  {
    name: "Automotive",
    stars: 5,
    hook: "Changan Auto HQ + BYD assembly + Sokon/SERES + Ford JV — 220,000+ vehicles exported in H1 2024",
    images: [
      { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", alt: "Automotive manufacturing" },
      { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", alt: "Auto parts production line" },
    ],
    content: [
      "Changan Automobile — one of China's 'Big Four' automakers — is headquartered in Jiangbei, Chongqing. With 45 years of manufacturing history, 21 manufacturing bases, and 76 plants worldwide, it anchors a complete automotive supply chain. BYD has assembly operations here. Sokon (maker of SERES/AITO with Huawei) is Chongqing-based. The Changan Ford joint venture adds international brand manufacturing.",
      "In the first half of 2024, Chongqing exported over 220,000 vehicles. The auto parts supply chain is deep and diversified — engines, transmissions, chassis components, electronics, interior trim, and aftermarket parts are all locally sourced. If you're in the auto parts import business, this is one of China's primary production clusters. 1688 search terms: 重庆汽车配件, 长安汽车配件.",
    ],
    cta: "Explore Chongqing automotive suppliers",
  },
  {
    name: "Motorcycles",
    stars: 4,
    hook: "China's motorcycle capital — Zongshen, Lifan, Loncin, Jialing all headquartered here",
    images: [
      { src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80", alt: "Motorcycle manufacturing" },
      { src: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80", alt: "Motorcycle assembly line" },
    ],
    content: [
      "Chongqing is genuinely open for motorcycle sourcing — unlike the closed laptop and auto ecosystems. Four major brands are headquartered here: Zongshen (宗申, 30,000+ employees, 50 billion+ yuan revenue, exports to 100+ countries), Lifan (力帆, factories in Vietnam, Thailand, Turkey, exports to 117 countries), Loncin (隆鑫), and Jialing (嘉陵). The complete manufacturing chain — engines, frames, electronics, accessories — is all local.",
      "CIMAMotor (China International Motorcycle Trade Exhibition), held September 19–22, 2026 at the Chongqing International Expo Center, is the must-attend event for motorcycle sourcing. It's China's premier motorcycle show, now in its 24th edition. Dozens of brands, complete supply chain, and established export infrastructure make Chongqing the starting point for motorcycle imports from China. 1688 search terms: 重庆摩托车, 摩托车发动机 重庆, 摩托车配件 重庆, 宗申摩托, 隆鑫摩托.",
    ],
    cta: "Explore Chongqing motorcycle suppliers",
  },
  {
    name: "Food & Condiments",
    stars: 3,
    hook: "Hotpot capital of China — 7,000+ tonnes of hotpot condiments per month, exported to 20+ countries",
    images: [
      { src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80", alt: "Chinese hotpot ingredients" },
      { src: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=800&q=80", alt: "Food condiment production" },
    ],
    content: [
      "Chongqing's hotpot industry is not just a restaurant phenomenon — it's a manufacturing economy. Industrial parks produce 7,000+ tonnes of hotpot condiments per month, with a government target of 70 billion yuan contribution to GDP by 2027. Chongqing has 849 large food and agricultural product processing enterprises with 109 billion yuan in total output. Key companies include Zhoujunji (周君记, est. 1993) and Qinma (秦妈).",
      "Hotpot products are an emerging export category, already shipped to 20+ countries. If you're in the food import business, Chongqing hotpot bases, Sichuan peppercorn products, fermented bean paste, and chilli oils are increasingly popular globally. Visit Panxi Wholesale Market (盘溪批发市场) for ingredient sourcing — 3 floors of spices, dried chilies, Sichuan peppercorns, and dried goods. 1688 search terms: 火锅底料 重庆, 重庆调味品, 花椒 重庆, 重庆火锅材料批发.",
    ],
    cta: "Explore Chongqing food suppliers",
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

export default function WhatChongqingMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-chongqing-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Chongqing</span> Makes
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
