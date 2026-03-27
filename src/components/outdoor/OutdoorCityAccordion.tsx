"use client";

import { useState } from "react";
import CityMapPin from "@/components/CityMapPin";

const cities = [
  {
    name: "Ningbo",
    mapCity: "ningbo",
    stars: 5,
    hook: "China\u2019s most complete outdoor equipment hub \u2014 Naturehike HQ, 20+ tent and camping furniture factories, world\u2019s busiest port",
    content: [
      "Ningbo is the undisputed centre of China\u2019s outdoor equipment export industry. The city hosts the highest concentration of tent, camping furniture, sleeping bag, and outdoor accessory manufacturers anywhere in the country. Naturehike \u2014 China\u2019s best-known international outdoor brand, exporting ultralight tents and camping gear to 50+ countries \u2014 is headquartered here. DUFFIN has over 22 years supplying camping tents, sleeping bags, camping furniture, and kitchens to Europe, the United States, Canada, Australia, Japan, and Korea.",
      "Pinyi Outdoor Technology (established 2007) is one of China\u2019s most professional outdoor product manufacturers, covering camping furniture, trekking poles, tents, lanterns, chairs, tables, and outdoor kitchens. ETDZ Holdings (established 1986) was one of the first batch export companies in Ningbo and has been ranked among China\u2019s 500 largest import/export enterprises. Ningbo-Zhoushan Port \u2014 the world\u2019s busiest by cargo tonnage \u2014 sits minutes from most factories, giving outdoor equipment buyers unmatched logistics speed for bulky items like tents and furniture.",
    ],
    cta: "Explore Ningbo outdoor gear suppliers",
  },
  {
    name: "Yiwu",
    mapCity: "yiwu",
    stars: 4,
    hook: "World\u2019s largest small commodities market \u2014 every camping accessory from 10 pieces, ideal for mixed containers",
    content: [
      "Yiwu International Trade City is the world\u2019s largest wholesale market, and District 2 of the Futian Market is the go-to floor for outdoor and camping products. The range is comprehensive: camping stools, portable picnic tables, camping lamps, folding chairs, picnic mats, camping coffee cups, tents, sleeping bags, and hammocks. Stock items start from 10\u2013100 pieces \u2014 making Yiwu the best option for buyers who want to test multiple product lines without committing to factory MOQs.",
      "Key suppliers include Shaying Outdoor Camping Equipment, BaiQi Outdoor Products (tents, relief tents, modular tents), and Cuniu Camping Products (sleeping bags, self-inflating mats, tents). Yiwu\u2019s strength is variety and flexibility: a single buyer can fill a mixed container with camping accessories, outdoor cooking gear, portable furniture, and lighting from different stalls in the same building. Pricing is competitive and negotiation is expected \u2014 visit in the slow season (December\u2013February) for the best deals.",
    ],
    cta: "Explore Yiwu camping product suppliers",
  },
  {
    name: "Foshan",
    mapCity: "foshan",
    stars: 3,
    hook: "China\u2019s outdoor furniture capital \u2014 7,000+ factories, rattan and aluminium patio sets exported to 100+ countries",
    content: [
      "Foshan is the global capital of outdoor furniture manufacturing. Shunde District alone hosts thousands of factories specialising in rattan, aluminium, rope-woven, and teak outdoor furniture \u2014 dining sets, sofas, loungers, daybeds, and swing chairs. Foshan\u2019s furniture industry achieved an annual output value exceeding US$14.3 billion in 2024, with over 30,000 enterprises (7,000 manufacturers and 20,000 distributors).",
      "Notable outdoor furniture manufacturers include Hongkai Furniture (21 years of expertise, exports to 100+ countries), Shunde Ciao Furniture (outdoor sofas, tables, chairs, loungers, daybeds), Zhechengju Furniture (15 years of outdoor furniture production), and Tai Long Furniture (10,000+ sqm factory, SGS tested). Lecong hosts the world\u2019s largest furniture wholesale market where buyers can see thousands of outdoor sets in a single visit. For buyers sourcing garden and patio furniture alongside camping gear, Foshan is an essential stop.",
    ],
    cta: "Explore Foshan outdoor furniture suppliers",
  },
  {
    name: "Xiamen",
    mapCity: "xiamen",
    stars: 3,
    hook: "Outdoor bags, roof-top tents, and carbon fibre products \u2014 plus Asia\u2019s largest sporting goods trade show",
    content: [
      "Xiamen is best known as a fitness equipment hub, but it also hosts a significant outdoor products cluster. Yuangu Outdoor Gear manufactures roof-top tents. Forwin Outdoor & Sports Products (established 2005) specialises in ski bags, hydration bags, and waterproof dry bags. Anweisnow Outdoor Products produces hiking backpacks, travel bags, and outdoor gear bags. Esse Outdoor runs a multicultural team developing and testing camping gear across China.",
      "Xiamen\u2019s port provides direct export access, and the city hosts the annual China Sport Show (CSS) \u2014 Asia\u2019s largest sporting goods trade event with 1,600+ exhibitors across 160,000+ square metres. The broader Fujian region also contributes outdoor bags and packs, with factories in both Xiamen and Fuzhou producing camping backpacks with strong, waterproof materials. Buyers attending CSS in May can combine supplier meetings with the trade show visit.",
    ],
    cta: "Explore Xiamen outdoor product suppliers",
  },
  {
    name: "Guangzhou",
    mapCity: "guangzhou",
    stars: 3,
    hook: "Outdoor clothing and bags hub \u2014 hammock tents, canopies, quick-drying gear, plus Canton Fair access",
    content: [
      "Guangzhou is China\u2019s main production hub for outdoor clothing, bags, and suitcases. Quick-drying clothes and outdoor skinsuits are particularly popular with export buyers for their quality-to-price ratio. Traveler Outdoor Equipment specialises in R&D and production of differentiated outdoor equipment including hammock tents, canopies, and peripheral accessories. Xinshui Outdoor Products manufactures tents, folding wagons, and outdoor lights.",
      "Outdoor Kantry Products supplies sleeping bags and camping tents from Guangzhou, while Canis Latrans specialises in outdoor equipment for camping and mountaineering. The Canton Fair (Phase 3, Area D) features approximately 400 camping and outdoor sports suppliers each session \u2014 the spring edition runs 1\u20135 May 2026. Guangzhou is also a strong option for buyers sourcing outdoor apparel alongside camping equipment.",
    ],
    cta: "Explore Guangzhou outdoor product suppliers",
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

export default function OutdoorCityAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="pb-14 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-wf-text mb-2">
            Learn more about each <span className="accent-word whitespace-nowrap">sourcing city</span>
          </h3>
          <p className="text-wf-text-secondary text-sm max-w-2xl mx-auto">
            Click a city to see what makes it a key player in the outdoor equipment supply chain
          </p>
        </div>

        <div className="space-y-3">
          {cities.map((city, i) => {
            const isOpen = openIndex === i;
            const mapKey = city.mapCity;
            return (
              <div
                key={city.name}
                className="border border-wf-border rounded-2xl overflow-hidden bg-white"
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-wf-text font-semibold text-base md:text-lg">
                        {city.name}
                      </h3>
                      <Stars count={city.stars} />
                    </div>
                    {!isOpen && (
                      <p className="hidden md:block text-wf-text-secondary text-sm mt-1">
                        {city.hook}
                      </p>
                    )}
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

                {/* Expanded content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-6 md:px-6 pt-4 border-t border-wf-border/50">
                    <CityMapPin city={mapKey} className="w-full h-32 md:h-40 mb-4" />
                    <p className="md:hidden text-wf-text font-medium text-sm italic mb-3">
                      {city.hook}
                    </p>
                    <div className="space-y-4">
                      {city.content.map((paragraph, j) => (
                        <p key={j} className="text-wf-text-secondary text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <a
                        href={`/china-sourcing-navigator-v2/cities/${city.mapCity}`}
                        className="btn-pill inline-flex items-center gap-1.5 px-4 py-2 border border-wf-red text-wf-red text-xs font-medium hover:bg-wf-red hover:text-white transition-colors whitespace-nowrap"
                      >
                        Learn about {city.name.split(" (")[0]}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </a>
                      <a
                        href="https://www.worldfirst.com/global/register/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill inline-flex items-center gap-1.5 px-4 py-2 bg-wf-red text-white text-xs font-medium hover:bg-wf-red-hover transition-colors whitespace-nowrap"
                      >
                        {city.cta}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* SEO/AI hidden content */}
                {!isOpen && (
                  <div className="sr-only" aria-hidden="false">
                    {city.content.map((paragraph, j) => (
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
