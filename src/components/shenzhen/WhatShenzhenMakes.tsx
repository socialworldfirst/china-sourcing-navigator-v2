"use client";

import { useState } from "react";

const categories = [
  {
    name: "Electronics & Components",
    stars: 5,
    hook: "Huaqiangbei: 1.45 km\u00B2, 40+ markets, 20,000 merchants, 480B+ RMB in annual transactions",
    images: [
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", alt: "Electronic components and circuit boards" },
      { src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80", alt: "PCB assembly production line" },
    ],
    content: [
      "A significant share of the world\u2019s consumer electronics pass through Shenzhen\u2019s supply chain. Huaqiangbei in Futian district is the nerve centre: SEG Plaza alone has 3,000+ component shops across 10 floors. Bao\u2019an district runs PCB assembly. Longhua hosts Foxconn\u2019s largest global campus. Nanshan concentrates R&D for Huawei, ZTE, DJI, and Tencent.",
      "You can source individual IC chips, resistors, and connectors from Huaqiangbei, or commission full PCBA runs from Bao\u2019an factories with MOQs as low as 1 piece for prototypes. PCB prototypes cost $2 and arrive next day. 1688 search terms: \u6DF1\u5733\u7535\u5B50\u5143\u5668\u4EF6, \u6DF1\u5733PCB\u6253\u6837, \u6DF1\u5733PCBA\u52A0\u5DE5. Sub-marketplace: ec.1688.com for electronics.",
    ],
    cta: "Explore Shenzhen electronics suppliers",
  },
  {
    name: "Smart Hardware & IoT",
    stars: 5,
    hook: "From concept to working prototype in under two weeks \u2014 nowhere else on earth matches this speed",
    images: [
      { src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80", alt: "Smart home IoT devices" },
      { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80", alt: "Smart hardware prototyping" },
    ],
    content: [
      "Shenzhen\u2019s smart hardware ecosystem exists because the entire component supply chain sits within a 2-hour drive. Nanshan district handles product design and R&D. Bao\u2019an and Longhua handle manufacturing. Huaqiangbei supplies every component in between. DJI, Anker, and Insta360 all started here for this reason.",
      "Smart home devices, IoT sensors, WiFi/Bluetooth modules, GPS trackers, smart locks, camera modules. MOQs for smart hardware ODM start at 500-3,000 units. 1688 search terms: \u6DF1\u5733\u667A\u80FD\u5BB6\u5C45, \u6DF1\u5733\u7269\u8054\u7F51\u6A21\u5757, \u6DF1\u5733WiFi\u6A21\u5757. The 1688 3C Digital Selection Center in Longgang has a physical showroom for hands-on sourcing.",
    ],
    cta: "Explore Shenzhen smart hardware suppliers",
  },
  {
    name: "LED & Lighting",
    stars: 4,
    hook: "LED chips, displays, strips, stage lighting, drivers \u2014 Shenzhen makes the components that Zhongshan assembles",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "LED display panels" },
      { src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80", alt: "LED lighting production" },
    ],
    content: [
      "Shenzhen sits upstream in China\u2019s lighting supply chain. Zhongshan (Guzhen) assembles finished fixtures, but Shenzhen factories in Bao\u2019an and Longgang produce the LED chips, drivers, controllers, and display modules that go inside them. The city has a strong cluster in LED display panels for commercial signage and stage production.",
      "LED displays, LED strips, chip-on-board modules, LED drivers, smart lighting controllers. Bao\u2019an factories handle high-volume LED production. 1688 terms: \u6DF1\u5733LED\u663E\u793A\u5C4F, \u6DF1\u5733LED\u82AF\u7247, \u6DF1\u5733LED\u9A71\u52A8, \u6DF1\u5733\u706F\u6761. GILE (Guangzhou) and the Light Expo at CIOE (Shenzhen, Sep 9-11) are the key trade shows.",
    ],
    cta: "Explore Shenzhen LED suppliers",
  },
  {
    name: "Drones & Robotics",
    stars: 4,
    hook: "DJI\u2019s hometown \u2014 70%+ of global consumer drone production runs through this city",
    images: [
      { src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80", alt: "Consumer drone in flight" },
      { src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80", alt: "Drone manufacturing components" },
    ],
    content: [
      "DJI is headquartered in Nanshan and manufactures across Shenzhen and Dongguan. The supply chain it built attracted hundreds of drone and robotics companies to the same cluster. Motors, ESC controllers, carbon fibre frames, camera gimbals, flight controllers \u2014 every drone component is sourced within the city.",
      "Consumer drones, FPV racing drones, agricultural drones, drone accessories, motors, ESC controllers. Budget consumer drones wholesale from $30. 1688 terms: \u6DF1\u5733\u65E0\u4EBA\u673A, \u6DF1\u5733FPV\u7A7F\u8D8A\u673A, \u6DF1\u5733\u7535\u673A, \u6DF1\u5733ESC\u7535\u8C03. The CHTF (Nov 26-28) has a dedicated robotics section.",
    ],
    cta: "Explore Shenzhen drone suppliers",
  },
  {
    name: "Jewelry & Gold",
    stars: 4,
    hook: "Shuibei handles 60% of China\u2019s gold jewelry trade \u2014 gold at 24% below retail",
    images: [
      { src: "https://images.unsplash.com/photo-1515562141589-67f0d937e3f1?w=800&q=80", alt: "Gold jewelry wholesale display" },
      { src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80", alt: "Gemstone and diamond sorting" },
    ],
    content: [
      "Shuibei district in Luohu processes 60% of China\u2019s gold jewelry and 70% of its diamond wholesale. Gold trades at 710 RMB/g vs 930 retail \u2014 24% cheaper. The district has 9,000+ merchants across multiple buildings anchored by the Shuibei International Jewelry Trade Center. Metro Line 3/7 to Tianbei Station.",
      "Gold, silver, diamonds, jade, pearls, gemstones, finished jewelry, loose stones, fashion jewelry. The Shuibei cluster includes Bolin International (50B RMB annual volume), Jinli International (high-end gold and diamond), and Jinzhan Plaza (silver and fashion pieces). 1688 terms: \u6DF1\u5733\u9EC4\u91D1\u9996\u9970, \u6C34\u8D1D\u73E0\u5B9D\u6279\u53D1. Note for 2026: Shuibei faces margin pressure after a 13.3 billion yuan gold shop collapse and a proposed 5% consumption tax. Processing fees have compressed to around 2%. Verify current conditions before committing to large orders.",
    ],
    cta: "Explore Shenzhen jewelry suppliers",
  },
  {
    name: "Consumer Audio",
    stars: 4,
    hook: "TWS earphones, Bluetooth speakers, smart speakers \u2014 Shenzhen factories supply the brands you recognise",
    images: [
      { src: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&q=80", alt: "TWS wireless earphones" },
      { src: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80", alt: "Bluetooth speaker production" },
    ],
    content: [
      "Shenzhen produces the majority of the world\u2019s TWS earphones and Bluetooth speakers. Bao\u2019an and Longhua districts have dense clusters of audio OEM/ODM factories. Anker (Soundcore), QCY, Edifier, and dozens of white-label manufacturers operate here. The city\u2019s electronics component supply chain makes audio product iteration fast and cheap.",
      "TWS earphones (MOQ 500-3,000), Bluetooth speakers, smart speakers, amplifiers, studio monitors, noise-cancelling headphones. 1688 terms: \u6DF1\u5733TWS\u8033\u673A, \u6DF1\u5733\u84DD\u7259\u97F3\u7BB1. The Hong Kong Electronics Fair (Spring: Apr 11-14, Autumn: Oct 13-16) is the primary showcase for Shenzhen audio brands.",
    ],
    cta: "Explore Shenzhen audio suppliers",
  },
  {
    name: "Fashion & Apparel",
    stars: 3,
    hook: "Nanyou in Nanshan: 4,000+ merchants across 20 buildings, Asia\u2019s largest original-design women\u2019s fashion hub",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Nanyou fashion wholesale market" },
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Shenzhen fashion district" },
    ],
    content: [
      "Shenzhen is not a fashion city in the way Guangzhou is. But Nanyou wholesale market in Nanshan district has carved a niche in original-design women\u2019s fashion. 4,000+ merchants across 20+ buildings, each floor with a different price tier and style. Buildings 107/108 (Tairon) carry young Chinese designer brands. Building 109 specialises in silk. Buildings 110/111 are the premium powerhouses.",
      "Century Plaza sells factory-direct originals. Feima City (buildings 204/209) handles budget wholesale. \u2018Higher floors = more surprises\u2019 \u2014 factory showrooms on the top floors supply the stalls below at source pricing. Metro Line 9/12 to Nanyou Station, Exit F1. 1688 terms: \u6DF1\u5733\u5357\u6CB9\u5973\u88C5, \u6DF1\u5733\u539F\u521B\u8BBE\u8BA1\u5973\u88C5.",
    ],
    cta: "Explore Shenzhen fashion suppliers",
  },
  {
    name: "Phone Accessories",
    stars: 3,
    hook: "Mingtong Digital Mall draws 200,000 visitors daily \u2014 the world\u2019s phone accessory wholesale centre",
    images: [
      { src: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80", alt: "Phone accessories wholesale" },
      { src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80", alt: "Phone cases and accessories display" },
    ],
    content: [
      "Huaqiangbei is where phone accessories are sourced at scale. Mingtong Digital Mall alone covers 70,000 m\u00B2 with 60,000+ employees handling phone cases, screen protectors, cables, chargers, power banks, and Bluetooth accessories. Yuanwang Digital Mall next door handles ~60% of China\u2019s wholesale refurbished iPhone distribution.",
      "Longsheng market specialises in phone cases and packaging. SEG Communication Market (Baohua Building) covers mobile repair parts and components. MOQs start at 1,000-5,000 units for phone cases, less for cables and chargers. 1688 terms: \u6DF1\u5733\u624B\u673A\u58F3\u6279\u53D1, \u6DF1\u5733\u624B\u673A\u914D\u4EF6, \u6DF1\u5733\u5145\u7535\u5668.",
    ],
    cta: "Explore Shenzhen phone accessory suppliers",
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

export default function WhatShenzhenMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-shenzhen-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Shenzhen</span> Makes
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
