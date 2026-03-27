"use client";

import { useState } from "react";
import CityMapPin from "@/components/CityMapPin";

const cities = [
  {
    name: "Ningbo (+ Yongkang / Haiyan)",
    mapCity: "ningbo",
    stars: 5,
    hook: "China\u2019s fastener export powerhouse and gateway to Yongkang \u2014 the hardware capital with 30,000+ enterprises producing 100,000+ product types",
    content: [
      "Ningbo anchors the eastern end of China\u2019s hardware belt. The city itself is a major hand tool and fastener manufacturing centre, with companies like Ningbo Fastenwell, Yonggang Fasteners (a Sino-US joint venture producing 20,000+ tonnes annually, 90% exported), and dozens of specialist wrench, plier, and socket set factories across Yinzhou and Cixi districts. Ningbo-Zhoushan Port \u2014 the world\u2019s busiest by cargo tonnage \u2014 sits minutes from most factories, giving hardware exporters a direct logistics advantage.",
      "Ningbo\u2019s real superpower is proximity to two satellite clusters. Yongkang, a county-level city 2.5 hours south-west under Jinhua, is universally called the hardware capital of China. It hosts 30,000+ enterprises producing over 100,000 product types, including 1,700 power tool manufacturers, 650+ product categories, and 150,000 workers. The city\u2019s industrial output reached 80 billion yuan. East of Ningbo, Haiyan County (under Jiaxing) is one of China\u2019s top three fastener production bases \u2014 400+ enterprises achieved output exceeding 12 billion yuan, with self-operated exports accounting for 9% of the national total. Buyers visiting Ningbo can cover all three clusters within a day\u2019s drive.",
    ],
    cta: "Explore Ningbo hardware suppliers",
  },
  {
    name: "Yiwu",
    mapCity: "yiwu",
    stars: 4,
    hook: "World\u2019s largest small commodities market \u2014 3,000 hardware booths in District 2, open 365 days, MOQs from 10 pieces",
    content: [
      "Yiwu International Trade City District 2 is the single largest walk-in hardware marketplace on earth. The second floor alone houses approximately 3,000 booths across sections G2 and F2, covering hand tools, power tools, cutting tools, locks, fittings, plumbing hardware, and electrical accessories. The ground floor adds more hardware, locks, and fastener stalls. The market operates 09:00\u201317:00, seven days a week, 365 days a year (except a 15-day Spring Festival closure).",
      "Yiwu\u2019s advantage for hardware buyers is flexibility. Stock items start from 10\u2013100 pieces per SKU \u2014 a fraction of factory MOQs. Buyers can walk the market, collect samples from dozens of suppliers in a single day, and negotiate mixed-container orders combining hand tools, fasteners, and fittings. Many Yiwu booth holders are agents for Yongkang factories, so pricing is close to factory gate. For buyers not ready to commit to factory MOQs of 500\u20131,000 units, Yiwu is the natural starting point.",
    ],
    cta: "Explore Yiwu hardware market suppliers",
  },
  {
    name: "Qingdao",
    mapCity: "qingdao",
    stars: 3,
    hook: "Shandong\u2019s fastener and industrial hardware hub \u2014 3,000+ tonnes annual output, strong export infrastructure to Europe and North America",
    content: [
      "Qingdao is Shandong\u2019s primary hardware export hub, with particular strength in fasteners and industrial-grade tools. Qingdao Xinhua Hardware (established 1987) produces 3,000+ tonnes of standard and non-standard fasteners annually using 100+ production machines. Qingdao Jinrui Fastener specialises in washers, nuts, and bolts exported to Germany, Greece, and across the Middle East. Qingdao Join Rising brings 20 years of experience in railway fasteners, hex bolts, and structural bolts.",
      "Qingdao\u2019s geographic position gives it a shipping advantage to European and North American markets \u2014 transit times from Qingdao port are typically 2\u20133 days shorter than from southern Chinese ports when heading to Northern Europe or the US East Coast. The city\u2019s heavy industrial heritage (Haier, Hisense) means deep expertise in metal processing, heat treatment, and precision manufacturing. For buyers sourcing industrial fasteners, structural hardware, or marine-grade fittings, Qingdao offers a compelling combination of quality and logistics efficiency.",
    ],
    cta: "Explore Qingdao fastener suppliers",
  },
  {
    name: "Dongguan",
    mapCity: "dongguan",
    stars: 3,
    hook: "Precision hardware and metal parts \u2014 CNC machining, die-casting, and OEM tool accessories for global brands",
    content: [
      "Dongguan\u2019s role in hardware is less about finished tools and more about precision components that go into them. The city\u2019s CNC machining, die-casting, and metal stamping infrastructure \u2014 built to serve electronics and automotive industries \u2014 translates directly to hardware fittings, tool components, and specialty fasteners. Qixin Hardware Tools Factory in Zhongtang specialises in allen keys, hex wrenches, and hardware hand tools.",
      "Dongguan excels at OEM/ODM hardware work: custom brackets, hinges, handles, drawer slides, and precision metal parts produced to international specifications with tight tolerances. The city sits 30 minutes from Shenzhen\u2019s Yantian port and an hour from Hong Kong, making it ideal for buyers who need precision hardware components with fast export access. Many global tool brands source metal components from Dongguan factories even when final assembly happens elsewhere.",
    ],
    cta: "Explore Dongguan hardware suppliers",
  },
  {
    name: "Guangzhou",
    mapCity: "guangzhou",
    stars: 3,
    hook: "Canton Fair host city and southern China\u2019s largest hardware wholesale district \u2014 Tianping Architecture Hardware City",
    content: [
      "Guangzhou\u2019s hardware strength centres on its role as Canton Fair host (Phase 1 covers hardware and tools every April and October) and several dedicated wholesale markets. Tianping Architecture Hardware City in Haizhu district is the largest hardware wholesale centre in southern China, covering architectural hardware, locks, hinges, handles, and building fittings. Xiran Hardware Co. specialises in high-end furniture and decorative hardware fittings.",
      "For international buyers, Guangzhou functions as the trade show gateway. Canton Fair Phase 1 brings together thousands of hardware and tools exhibitors across categories including manual tools, electric tools, pneumatic tools, fasteners, locks, wire mesh, welding materials, and sundry hardware. Buyers who attend Canton Fair in Guangzhou can then extend their trip to Yongkang (2 hours by high-speed rail to Jinhua) or Yiwu (1.5 hours) to visit factories and markets directly.",
    ],
    cta: "Explore Guangzhou hardware suppliers",
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

export default function HardwareCityAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="pb-14 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-wf-text mb-2">
            Learn more about each <span className="accent-word whitespace-nowrap">sourcing city</span>
          </h3>
          <p className="text-wf-text-secondary text-sm max-w-2xl mx-auto">
            Click a city to see what makes it a key player in the hardware &amp; tools supply chain
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

        {/* Yongkang flag — NOT in Navigator 20-city list but critical for hardware */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div>
              <p className="text-sm font-medium text-amber-800 mb-1">Also important: Yongkang, Jinhua (Zhejiang)</p>
              <p className="text-xs text-amber-700 leading-relaxed">
                Yongkang is universally known as the hardware capital of China. The county-level city hosts
                30,000+ hardware enterprises producing 100,000+ product types, with 1,700 power tool
                manufacturers, 650+ product categories, and nearly 150,000 workers. Industrial output reached
                80 billion yuan. Yongkang is not in the Navigator&apos;s 20-city list but is reachable in
                2.5 hours from Ningbo or 1.5 hours from Yiwu &mdash; many buyers combine all three in a
                single sourcing trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
