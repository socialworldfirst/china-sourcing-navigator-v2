"use client";

import { useState } from "react";

const categories = [
  {
    name: "Tires & Rubber",
    stars: 5,
    hook: "China's Rubber Valley — 700+ enterprises, 35+ tire plants, 3 listed tire companies, sister city with Akron, Ohio",
    images: [
      { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", alt: "Tire manufacturing in Qingdao" },
      { src: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&q=80", alt: "Rubber processing production line" },
    ],
    content: [
      "Qingdao is the undisputed centre of China’s tire industry. 700+ tire industry enterprises, 35+ tire plants, and 3 publicly listed tire companies are headquartered here. The city earned its sister city relationship with Akron, Ohio (the American rubber capital) in 2011, and both share the \"Polymer Valley\" nickname. Qingdao University of Science & Technology graduates ~400 rubber technologists annually, earning it the nickname \"Huangpu Military Academy of China’s Rubber Industry.\"",
      "Sailun Group (¥31.8 billion revenue, top 10 global) was the first Chinese tire company to build an overseas plant (Vietnam, 2012). Qingdao Doublestar acquired 45% of Korea’s Kumho Tire in 2024 for ¥4.93 billion — the largest outbound M&A by a Chinese tire company ever. Sentury (¥8.51 billion) holds the #1 net profit margin in the global tire industry. Softcontrol is #1 globally in rubber machinery, covering 80% of key tire production equipment needs.",
    ],
    cta: "Explore Qingdao tire suppliers",
  },
  {
    name: "Home Appliances",
    stars: 5,
    hook: "The only city home to both the #1 global appliance brand (Haier) and the #2 global TV brand (Hisense)",
    images: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Home appliance manufacturing" },
      { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", alt: "Smart home devices production" },
    ],
    content: [
      "Haier Group is headquartered in Laoshan District with US$55.9 billion in global revenue (2024) and has been the #1 major appliance brand worldwide for 16 consecutive years (Euromonitor). Over 50% of revenue comes from overseas through brands like GE Appliances, Fisher & Paykel, Candy, and AQUA. Haier is #1 globally in both refrigerators and washing machines by sales volume.",
      "Hisense, also headquartered in Qingdao, is the #2 global TV brand with 29.14 million units shipped in 2024 (14% global share) and controls 58.8% of the 100-inch+ TV market. While direct factory sourcing from these brands is limited (both are vertically integrated), the ecosystem creates a massive supplier cluster for components: compressors, display panels, PCBs, injection-molded parts, and packaging. Tier-2/3 suppliers in Jiaozhou and Chengyang are accessible.",
    ],
    cta: "Explore Qingdao appliance suppliers",
  },
  {
    name: "Eyelashes & Beauty",
    stars: 4,
    hook: "70% of the world's false eyelashes come from Pingdu — 5,000+ companies, 3,000+ styles, a 50-year legacy",
    images: [
      { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80", alt: "False eyelash manufacturing" },
      { src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80", alt: "Beauty products production" },
    ],
    content: [
      "Pingdu district controls 70% of global false eyelash production and 80% of China’s output — a genuine global monopoly. The industry traces back to 1976 when the first processing factory was established in Dazeshan township. Today there are 5,000+ eyelash companies, 20,000+ processing sites, ~60,000 employees, and ¥10 billion+ in annual output value. Over 3,000 product styles and types are available.",
      "Product range covers full strip lashes (34% of Alibaba listings), eyelash extensions (27%), fan eyelashes (6%), plus magnetic, cluster, and plant fiber options. Materials include synthetic fiber, mink-style, and hand-made varieties. The \"Beauty Online New Economy Industrial Park\" (¥3 billion investment) provides e-commerce incubation, brand cultivation, R&D, and logistics. Factories in Pingdu welcome visits; larger ones allow inspection of automated bonding lines, sterilization chambers, and QC labs.",
    ],
    cta: "Explore Qingdao eyelash suppliers",
  },
  {
    name: "Marine Equipment & Shipbuilding",
    stars: 4,
    hook: "One of China's three major shipbuilding bases — Beihai Shipbuilding has orders through 2029",
    images: [
      { src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80", alt: "Shipbuilding at Qingdao Haixiwan" },
      { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80", alt: "Marine equipment manufacturing" },
    ],
    content: [
      "The Haixiwan Bay Shipbuilding and Offshore Engineering Industrial Base in Huangdao district makes Qingdao one of China’s three major shipbuilding centres. Qingdao Beihai Shipbuilding (BSIC) operates on 330+ hectares with 9 km of coastline, two dry docks (500,000 and 300,000 dwt each), and 4x 600-ton gantry cranes. The facility is operating at full capacity with orders booked through 2029.",
      "COSCO Shipping ordered 4x 210,000-ton Capesize vessels at BSIC in 2025. Product range covers bulk carriers, container ships, new energy/environmentally friendly vessels, and offshore engineering equipment. Qingdao Port itself has 230+ international shipping routes (the most extensive in northern China), is #1 in China for crude oil imports, and ranks 6th globally in connectivity.",
    ],
    cta: "Explore Qingdao marine suppliers",
  },
  {
    name: "Food & Beverage",
    stars: 3,
    hook: "Tsingtao Brewery (founded 1903) exports to 120+ countries — plus the world's largest seafood trade show",
    images: [
      { src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80", alt: "Tsingtao Beer brewery" },
      { src: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80", alt: "Seafood processing" },
    ],
    content: [
      "Tsingtao Brewery, founded in 1903 by the Anglo-German Brewery Company, is China’s 2nd largest brewery with ~15% national market share. It produces 50% of China’s beer exports, sells in 120+ countries, and is the 6th largest brewery globally. The water source is Laoshan Mountain spring. It was the first Chinese firm listed on the Hong Kong Stock Exchange (1993).",
      "Qingdao’s seafood import/export exceeds US$8 billion/year, representing over one-third of China’s total international seafood trade. The China Fisheries & Seafood Expo (CFSE, October 28–30, 2026) at Hongdao is the world’s largest seafood trade show at 45,000+ sqm. The Qingdao International Beer Festival (July 17 – August 16) is Asia’s largest annual beer festival with 2,000+ varieties and free admission.",
    ],
    cta: "Explore Qingdao food & beverage suppliers",
  },
  {
    name: "Textiles & Garments",
    stars: 3,
    hook: "Jimo: 'China's Famous Knitting City' — 9,000+ shops, 50,000+ styles, strong Korean fashion influence",
    images: [
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Textile production in Jimo" },
      { src: "https://images.unsplash.com/photo-1503342217505-b0a15ec7a77c?w=800&q=80", alt: "Knitwear manufacturing" },
    ],
    content: [
      "Jimo District holds the national titles of \"China’s Famous Knitting City,\" \"China’s Famous Children’s Clothing City,\" and \"National Textile Model Industrial Cluster.\" Jimo Clothing Wholesale Market covers 354 mu with 365,000 sqm of floor area, 9,000+ individual shops, 8,000+ resident merchants, and ~15,000 daily visitors. Over 50,000 styles are available across clothing, textiles, and knitwear.",
      "The market is zoned by product: Zone A handles Korean-style women’s fashion, B1 covers shoes and bags, Floors 1–2 carry women’s fashion and layering tops, Floor 3 has ~500 children’s wear shops, and Floors 4–5 feature high-end women’s fashion and premium export-quality goods. Distribution reaches 21 provinces in China plus exports to Russia, South Korea, and other markets.",
    ],
    cta: "Explore Qingdao textile suppliers",
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

export default function WhatQingdaoMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-qingdao-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Qingdao</span> Makes
          </h2>
          <p className="text-wf-text-secondary text-base max-w-lg mx-auto">
            Ranked by supply chain depth, supplier density, and export track record
          </p>
        </div>

        <div className="space-y-3">
          {categories.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={cat.name}
                className="border border-wf-border rounded-2xl overflow-hidden bg-white"
              >
                {/* Header — always visible */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-wf-text font-semibold text-base md:text-lg">
                        {cat.name}
                      </h3>
                      <Stars count={cat.stars} />
                    </div>
                    <p className="hidden md:block text-wf-text-secondary text-sm mt-1">
                      {cat.hook}
                    </p>
                  </div>
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
                </button>

                {/* Content — expandable, always in DOM for AI/SEO */}
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

                {/* Hidden content for SEO/AI — always in DOM, visually hidden */}
                {!isOpen && (
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
