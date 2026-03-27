"use client";

import { useState } from "react";
import CityMapPin from "@/components/CityMapPin";

const cities = [
  {
    name: "Quanzhou (Jinjiang)",
    mapCity: "quanzhou",
    stars: 5,
    hook: "Sports brands capital of China \u2014 Anta, Xtep, 361 Degrees HQ, 5,000+ shoe producers, 10 billion sneakers a year",
    content: [
      "Jinjiang, a county-level city under Quanzhou in Fujian, is the undisputed sports brands capital of China. Three of China\u2019s four largest sportswear companies are headquartered here: Anta Sports (62.36 billion yuan revenue in 2023, surpassing both Nike China and Adidas China), Xtep International, and 361 Degrees International. The city has over 5,000 shoe producers turning out roughly 10 billion pairs of sneakers annually.",
      "Jinjiang\u2019s footwear and clothing industry output exceeded 300 billion yuan (US$41.4 billion) in 2022, and the city\u2019s GDP hit 336.35 billion yuan in 2023 \u2014 Fujian\u2019s highest-GDP county-level entity for over 15 consecutive years. The supply chain is vertically integrated: factories, EVA and rubber component suppliers, mould makers, and design centres sit within kilometres of each other. Many factories also serve as OEM producers for international brands including Nike, Adidas, and Puma.",
    ],
    cta: "Explore Quanzhou sports suppliers",
  },
  {
    name: "Xiamen",
    mapCity: "xiamen",
    stars: 4,
    hook: "Asia\u2019s largest export base for fitness and massage equipment \u2014 six out of ten home treadmills globally come from Xiamen",
    content: [
      "Xiamen is Asia\u2019s largest production and export base for sports, fitness, and massage therapy equipment. Six out of ten home treadmills sold worldwide are manufactured in Xiamen. K-Power Sports produces over 600 varieties of fitness equipment with 70% destined for export. Everesports (established 1998) exports treadmills, bikes, rowing machines, and strength equipment to 80+ countries. Tongda Smart Tech covers 40+ categories including jump ropes, silicone water bottles, ice skates, and archery gear.",
      "Fujian province exported 7 billion yuan in sports goods in the first seven months of 2024 alone (+15.41% year on year), with exports to RCEP member countries surging 31%. Xiamen also manufactures carbon fibre tennis rackets and composite sports products. The port of Xiamen provides direct export access, and the city hosts the annual China Sport Show \u2014 Asia\u2019s largest sporting goods trade event (1,600+ exhibitors, 120,000+ visitors).",
    ],
    cta: "Explore Xiamen fitness equipment suppliers",
  },
  {
    name: "Ningbo",
    mapCity: "ningbo",
    stars: 4,
    hook: "Dense fitness equipment cluster with world\u2019s busiest port \u2014 treadmills, gym accessories, and sports hardware",
    content: [
      "Ningbo hosts a dense cluster of fitness equipment manufacturers specialising in treadmills, exercise bikes, and gym accessories. Ningbo New Noble Sport Equipment has 30 years of manufacturing experience in commercial and home treadmills. Ningbo Qisheng has 18 years as a treadmill specialist with ISO 9001 certification. Tianjian Fitness and Jada Health Tech round out the cluster with multi-gym and cardio equipment production.",
      "Ningbo-Zhoushan Port \u2014 the world\u2019s busiest by cargo tonnage \u2014 sits minutes from most factories, making it ideal for shipping heavy gym equipment. The broader Zhejiang region excels in compact fitness equipment production with a flexible supply chain. Ningbo also produces sports accessories, outdoor products, and small fitness gear, making it a strong one-stop option for buyers combining equipment with accessories.",
    ],
    cta: "Explore Ningbo sports equipment suppliers",
  },
  {
    name: "Dongguan",
    mapCity: "dongguan",
    stars: 3,
    hook: "OEM/ODM contract manufacturing \u2014 roller skates, helmets, neoprene supports, sports garment accessories",
    content: [
      "Dongguan\u2019s sports equipment cluster grew from the same Hong Kong and Taiwanese investment that built its toy and electronics industries. Chen Tai Yu Sports Equipment produces ice skates, racing shoes, roller skates, helmets, and ski gear. Yonghui Sporting Goods (established 1996) manufactures the DunRun brand product line. JiaNan (established 2000) is one of the largest garment and sport equipment accessory factories in China.",
      "Hui Xin Sports Products in Liao Bu specialises in neoprene products for sports and medical protection. SGL Sports produces high-end sportswear from a 3,500-square-metre factory with 200+ skilled workers. Dongguan\u2019s strength is contract manufacturing with strong QC infrastructure \u2014 ideal for international brands placing OEM/ODM orders with strict specifications. The city sits 30 minutes from Shenzhen\u2019s Yantian port and an hour from Hong Kong.",
    ],
    cta: "Explore Dongguan sports product suppliers",
  },
  {
    name: "Qingdao",
    mapCity: "qingdao",
    stars: 3,
    hook: "Rubber fitness equipment hub \u2014 3,000 tonnes of bumper plates a year, plus martial arts gear and artificial turf",
    content: [
      "Qingdao is China\u2019s rubber fitness equipment capital. DH Sport Equipment produces 3,000 tonnes of rubber bumper plates, rubber-coated dumbbells, and related products annually, with over US$8 million in sales all destined for Europe and America. Modun Industry specialises in rubber bumper plates, cast iron plates, hex dumbbells, kettlebells, barbells, benches, and power racks from a facility with 60 high-temperature vulcanising machines.",
      "CSP Industry (established 2010) covers artificial turf, rubber mats, and fitness equipment across multiple production bases. Qingdao is also a core zone for martial arts equipment \u2014 Tide Sports manufactures taekwondo, karate, boxing, and BJJ equipment alongside EVA/XPE foam floor mats. The Qingdao port provides direct access to North American and European markets, and the city\u2019s rubber processing heritage from tyre manufacturing feeds directly into fitness product quality.",
    ],
    cta: "Explore Qingdao fitness product suppliers",
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

export default function SportsCityAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="pb-14 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-wf-text mb-2">
            Learn more about each <span className="accent-word whitespace-nowrap">sourcing city</span>
          </h3>
          <p className="text-wf-text-secondary text-sm max-w-2xl mx-auto">
            Click a city to see what makes it a key player in the sports equipment supply chain
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

        {/* Ningjin flag — NOT in Navigator but critical for fitness equipment */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div>
              <p className="text-sm font-medium text-amber-800 mb-1">Also important: Ningjin County, Dezhou (Shandong)</p>
              <p className="text-xs text-amber-700 leading-relaxed">
                Ningjin County is China&apos;s commercial fitness equipment capital &mdash; 2,509 enterprises producing
                13.9 billion yuan (US$1.94 billion) in output, employing 40,000+ people. The county commands 70%+ of
                China&apos;s domestic commercial gym equipment market with 1,000+ product variants across 400+ categories.
                DHZ Fitness alone has a 340,000-square-metre facility producing 500,000 units annually. Ningjin is not
                in the Navigator&apos;s 20-city list but is a major sourcing destination for commercial gym equipment buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
