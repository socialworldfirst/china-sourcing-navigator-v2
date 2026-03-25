"use client";

import { useState } from "react";

const categories = [
  {
    name: "Small Commodities",
    stars: 5,
    hook: "75,000 booths, 2.1 million products across 26 categories in one market",
    images: [
      { src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80", alt: "Yiwu International Trade City interior" },
      { src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80", alt: "Small commodities wholesale display" },
    ],
    content: [
      "Yiwu International Trade City is the physical centre of global small commodity trade. Five districts plus the new Global Digital Trade Centre span 6.4 million square metres of trading space. 200,000 business operators serve 220,000 daily visitors, of whom roughly 3,900 are foreign buyers. The World Bank designated it the world’s largest small commodities market in 2005, and it has expanded every year since.",
      "The product range is difficult to overstate: artificial flowers, umbrellas, rain gear, gift packaging, daily necessities, cosmetics, stationery, sports equipment, pet supplies, auto accessories, bedding, curtain fabrics, and wedding supplies — all under one complex. Yiwu’s exports reached 836.5 billion yuan in 2025, shipped to 210+ countries. The mixed container model is the default: buyers combine products from dozens of suppliers into a single shipment, and Yiwu’s consolidation warehouses are built for exactly this.",
    ],
    cta: "Explore Yiwu small commodity suppliers",
  },
  {
    name: "Hosiery & Socks",
    stars: 5,
    hook: "Datang produces 27 billion pairs a year — Yiwu sells them to the world",
    images: [
      { src: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80", alt: "Sock manufacturing production line" },
      { src: "https://images.unsplash.com/photo-1631749875665-78fa6e50bd8d?w=800&q=80", alt: "Wholesale sock display" },
    ],
    content: [
      "District 4 Floor 1 of the International Trade City is the world’s most important sock trading floor. The supply comes from Datang Town in Zhuji, roughly 90 minutes northwest of Yiwu. Datang produces 27 billion pairs of socks annually — 70% of China’s domestic market and 35% of all socks worn on the planet. The industry cluster employs world-class hosiery machinery from Lonati, Sangiacomo, and Matec, and counts Nike, Adidas, and Puma among its clients.",
      "The relationship is summed up in four characters: 大唐产、义乌卖 (Datang produces, Yiwu sells). Factories in Datang focus on production while Yiwu handles global distribution. The Datang–Yiwu corridor gives buyers access to 35% of global sock production without visiting a single factory. Cluster economics reduce per-unit costs by 25–33% compared to standalone production, which is why Yiwu sock pricing undercuts nearly every competitor worldwide.",
    ],
    cta: "Explore Yiwu hosiery suppliers",
  },
  {
    name: "Packaging & Print",
    stars: 4,
    hook: "Full supply chain from paper bags to label printing to packaging machinery",
    images: [
      { src: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80", alt: "Packaging production" },
      { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80", alt: "Printed gift boxes" },
    ],
    content: [
      "Yiwu has a concentrated cluster of paper bag, gift box, label, and packaging machinery manufacturers. District 2 Floor 1 covers bags, suitcases, packing bags, and gift packaging. The International Production Materials Market on Xuefeng West Road adds 800 showrooms for raw materials and printing equipment. The chain runs from raw paper stock through die-cutting, printing, and finishing to finished retail packaging.",
      "Because so many Yiwu products ship as consumer-ready goods, the packaging industry evolved alongside the commodity trade. Buyers can source the product and its packaging from the same building. MOQs for printed packaging start at 500–1,000 units, and turnaround on custom gift boxes runs 7–10 days from approved artwork.",
    ],
    cta: "Explore Yiwu packaging suppliers",
  },
  {
    name: "Jewelry & Accessories",
    stars: 4,
    hook: "District 1 + Xingzhong Market — 3,000+ shops, MOQs as low as 6 pieces",
    images: [
      { src: "https://images.unsplash.com/photo-1515562141589-67f0d569b6c4?w=800&q=80", alt: "Fashion jewelry wholesale display" },
      { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80", alt: "Hair accessories and costume jewelry" },
    ],
    content: [
      "District 1 Floor 2 handles hair ornaments, jewelry, and fashion accessories. Just outside the main complex, Xingzhong Market adds another 3,000+ shops across roughly five blocks, making it Yiwu’s earliest-developed jewelry market. The combined cluster covers fashion jewelry, hair accessories, body jewelry, costume jewelry, and DIY craft components.",
      "What sets Yiwu apart from dedicated jewelry centres like Shenzhen’s Shuibei is accessibility. MOQs drop as low as 6–12 pieces for fashion jewelry, compared to 100+ in factory-direct sourcing. This makes Yiwu the starting point for Amazon sellers, boutique owners, and market traders who need variety without volume commitments. The trade-off is limited customisation — most offerings are stock or catalogue items.",
    ],
    cta: "Explore Yiwu jewelry suppliers",
  },
  {
    name: "Toys & Novelties",
    stars: 4,
    hook: "2,000+ suppliers, 450,000+ styles — China’s largest wholesale toy market",
    images: [
      { src: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80", alt: "Toy wholesale market" },
      { src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80", alt: "Toy manufacturing display" },
    ],
    content: [
      "District 1 Floor 1 is the largest wholesale toy market in China. Over 2,000 suppliers stock more than 450,000 styles: plush toys, plastic toys, inflatable toys, electric and remote-control toys, educational toys, and seasonal novelties. Floor 3 adds festival crafts, holiday decorations, and promotional items. The adjacent Yiwu International Toy & Hobby Expo (TOYEXPO) runs every May, drawing manufacturers and buyers to the same city.",
      "Yiwu’s toy cluster serves a different buyer than Shantou’s Chenghai factory zone. Chenghai is where the toys are manufactured. Yiwu is where they’re traded at low MOQs. A buyer who needs 200 units of 50 different toys will find Yiwu more practical than driving between factories. The blind-box and trading-card segment has grown fast since 2024, with IP-licensed novelties now occupying a growing section of the toy floors.",
    ],
    cta: "Explore Yiwu toy suppliers",
  },
  {
    name: "Hardware & Tools",
    stars: 3,
    hook: "District 2 Floor 2 — hand tools, power tools, locks, construction materials",
    images: [
      { src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80", alt: "Hardware tools display" },
      { src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80", alt: "Tools wholesale market" },
    ],
    content: [
      "District 2 Floor 2 covers hardware tools, electrical products, locks, and vehicles including bicycles and children’s vehicles. Floor 3 adds kitchen and bath hardware, small home appliances, and lighting. The annual China Yiwu International Hardware & Electrical Appliances Fair brings additional manufacturers to the city every April.",
      "Hardware is solid in Yiwu but not its core strength. For industrial-grade tools and heavy hardware, Yongkang (90 minutes northwest) is the dedicated manufacturing base. Yiwu’s hardware section works best for general merchandise buyers who need hand tools, locks, or household hardware alongside their main commodity orders.",
    ],
    cta: "Explore Yiwu hardware suppliers",
  },
  {
    name: "Christmas & Seasonal",
    stars: 3,
    hook: "600+ factories producing an estimated 60–80% of the world’s Christmas decorations",
    images: [
      { src: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=800&q=80", alt: "Christmas decorations production" },
      { src: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800&q=80", alt: "Christmas ornaments wholesale" },
    ],
    content: [
      "Yiwu and its surrounding factory towns produce an estimated 60–80% of the world’s Christmas decorations. Over 600 businesses manufacture trees, ornaments, lights, Santa figures, wreaths, stockings, garlands, and artificial snow. District 1 Floor 3 is the main trading floor for festival and holiday crafts. Peak export season runs July through September, when containers ship to arrive before the retail season in Western markets.",
      "The seasonal business is concentrated but predictable. Orders placed in Q1 go into production in Q2 and ship by Q3. Yiwu’s Christmas cluster has been covered by the Irish Times, Al Jazeera, and ABC News, all pointing to the same phenomenon: a city in subtropical Zhejiang that dresses the Northern Hemisphere for winter. The 3-star rating reflects seasonality, not scale — outside the July–September window, this category goes quiet.",
    ],
    cta: "Explore Yiwu seasonal suppliers",
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

export default function WhatYiwuMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-yiwu-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Yiwu</span> Makes
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
