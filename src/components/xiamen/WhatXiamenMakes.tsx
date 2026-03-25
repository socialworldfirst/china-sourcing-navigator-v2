"use client";

import { useState } from "react";

const categories = [
  {
    name: "Eyewear & Sunglasses",
    stars: 5,
    hook: "80% of the world's sunglasses are made in Xiamen — the largest global manufacturer",
    images: [
      { src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80", alt: "Sunglasses wholesale display" },
      { src: "https://images.unsplash.com/photo-1574258495973-f7e5cc4ed77d?w=800&q=80", alt: "Eyewear manufacturing" },
    ],
    content: [
      "Xiamen's eyewear industry traces back to Taiwanese investment in the late 1980s, when optical manufacturers relocated across the strait to Haicang district. That early cluster matured into the world's largest sunglasses production base — 80% of global output now comes from Xiamen. The city produces everything from budget promotional sunglasses to mid-range branded frames for Bolon and Helen Keller.",
      "The wholesale side centres on Jingshang Eyewear Market in Mingfa Commercial Plaza B1, Siming district. For factory-direct sourcing, visit Haicang where companies like Langxue Spectacles, Jiayu Optical, Sun Haven Optical, and Necos Optical run full OEM/ODM operations. The annual China Xiamen International Optics Fair (June) draws buyers from 50+ countries. 1688 search terms: 厦门太阳镜, 厦门眼镜批发, 厦门光学镜架.",
    ],
    cta: "Explore Xiamen eyewear suppliers",
  },
  {
    name: "Fitness Equipment",
    stars: 5,
    hook: "6 out of 10 home treadmills globally are 'Made in Xiamen' — Tong'an is the world capital",
    images: [
      { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Treadmill manufacturing" },
      { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80", alt: "Fitness equipment production line" },
    ],
    content: [
      "China produces roughly 60% of the world's fitness equipment, and most of it comes from Xiamen. Tong'an district is the epicentre — a national demonstration zone for quality and safety of exported fitness equipment. The cluster includes 80+ fitness equipment enterprises and 500+ sporting goods-related factories. 90% of materials and parts are sourced within a 30-minute drive, which keeps lead times short and costs competitive.",
      "Key manufacturers include MYDO Sports (103,000 m² facility, 800,000 units per year), CJH Sports (20,000 m²), Renhe Sports Equipment, and Everesports. Products span treadmills, exercise bikes, rowing machines, home gyms, resistance equipment, and commercial gym fit-outs. The China International Sporting Goods Expo (May, XICEC) is the annual showcase. 1688 search terms: 厦门跑步机, 厦门健身器材, 同安运动器材.",
    ],
    cta: "Explore Xiamen fitness equipment suppliers",
  },
  {
    name: "Stone & Building Materials",
    stars: 4,
    hook: "Xiamen Port is the world's #1 stone import/export port — and hosts the world's premier stone fair",
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Stone slabs warehouse" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Marble and granite processing" },
    ],
    content: [
      "Xiamen Port handles more stone import/export volume than any other port on earth. The processing happens 1-2 hours south in Nan'an/Shuitou (Quanzhou), where 700 companies employ 100,000 workers and turn over 20 billion RMB annually processing granite, marble, quartz, limestone, travertine, and engineered stone. 150+ companies in the Shuitou cluster exceed 20 million RMB in annual sales. Xiamen provides the port, the trading companies, and the trade fair.",
      "The China Xiamen International Stone Fair (March, XICEC) is the world's premier stone industry exhibition — 2,000+ exhibitors, 150,000+ attendees, with country pavilions from Turkey, Italy, Iran, and Tuscany. Xiamen International Stone Center on Fanghu Road 289 in Huli district has 56,000 m² of showroom space. Hundreds of stone export companies are based in Xiamen, with leading exporters handling 1,000+ containers annually. 1688 search terms: 厦门石材, 厦门大理石, 厦门花岗岩.",
    ],
    cta: "Explore Xiamen stone suppliers",
  },
  {
    name: "LED & Lighting",
    stars: 4,
    hook: "China's largest LED lighting export base — 40% of national LED exports ship from Xiamen",
    images: [
      { src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80", alt: "LED lighting products" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "LED manufacturing facility" },
    ],
    content: [
      "Xiamen's Huli district is China's largest LED lighting export base, accounting for 40% of national LED exports and roughly one-third of global LED lighting production. The industrial chain runs deep: San'an Optoelectronics is one of China's leading LED chip manufacturers, while Topstar Lighting and Jumplight Technology handle finished products and export logistics.",
      "The Xiashang (Wucun) Lighting Wholesale City in Siming district serves as the local trade hub for lighting products, fixtures, and LED components. Products span LED bulbs, tubes, panels, strips, commercial lighting, outdoor fixtures, and smart lighting systems. The complete supply chain — from LED chips to drivers to finished fixtures — sits within the city. 1688 search terms: 厦门LED灯, 厦门照明, 厦门LED芯片.",
    ],
    cta: "Explore Xiamen LED suppliers",
  },
  {
    name: "Tea & Food Products",
    stars: 3,
    hook: "Historic gateway for Chinese tea exports since 1689 — adjacent to Anxi, birthplace of Tieguanyin",
    images: [
      { src: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80", alt: "Chinese tea ceremony" },
      { src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80", alt: "Tea plantation in Fujian" },
    ],
    content: [
      "Xiamen has been China's tea export gateway since 1689, when the first commercial tea shipments left for Europe. Nearby Anxi County (1.5 hours inland) is the birthplace of oolong tea and the Tieguanyin variety — with a brand value of 143.2 billion RMB. The Xiamen Tea Import & Export Company (Seawall brand) has exported to 58 countries. The FAO designated the Anxi Tea System as a Globally Important Agricultural Heritage.",
      "Xiamen North Station International Tea Port City in Jimei district is the dedicated tea trading hub. The city hosts biannual tea industry fairs — the China Xiamen International Tea Fair in April and October at XICEC. Beyond tea, Xiamen's Free Trade Zone has become a hub for aquatic products trading, imported Taiwan fruits (#1 on the Chinese mainland), and edible bird's nest trading. 1688 search terms: 厦门铁观音, 厦门乌龙茶, 安溪茶叶.",
    ],
    cta: "Explore Xiamen tea suppliers",
  },
  {
    name: "Tungsten & Rare Minerals",
    stars: 3,
    hook: "Home to Xiamen Tungsten Co. — China's most complete tungsten industrial chain, $6.4B revenue",
    images: [
      { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", alt: "Industrial mineral processing" },
      { src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80", alt: "Rare earth materials" },
    ],
    content: [
      "Xiamen Tungsten Co. (XTC) is a state-owned enterprise founded in 1958 that runs the most complete tungsten industrial chain in China — from mining through separation, metal processing, and deep processing to finished products including cemented carbides and battery cathode materials. In 2025, XTC reported record revenue of 46.5 billion RMB ($6.4B) and became the first Xiamen company to exceed 1 trillion RMB in market capitalisation.",
      "The mining operations sit inland in Longyan (3+ hours from Xiamen), but Xiamen serves as the corporate headquarters, R&D centre, and trading hub. Subsidiary Fujian Jinlong Rare Earth is expanding NdFeB magnet production. A joint venture with China Rare Earth Group (51/49 split) targets 200,000+ tons of minable rare earth reserves across Fujian, which holds top-3 national reserves of ion-absorbed heavy rare earths. Strategic importance is rising amid US-China tech competition and export controls.",
    ],
    cta: "Explore Xiamen mineral suppliers",
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

export default function WhatXiamenMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-xiamen-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Xiamen</span> Makes
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
