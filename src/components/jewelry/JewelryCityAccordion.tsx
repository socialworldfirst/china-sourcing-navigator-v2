"use client";

import { useState } from "react";

const cities = [
  {
    name: "Yiwu",
    mapCity: "yiwu",
    stars: 5,
    hook: "World\u2019s largest fashion jewelry wholesale market \u2014 5,000+ booths in District 1, prices from US$0.10, ready stock for 50%+ of suppliers",
    content: [
      "Yiwu\u2019s International Trade City District 1 is the undisputed global capital of fashion jewelry wholesale. The second floor alone has over 5,000 shops selling rings, earrings, necklaces, bracelets, hair accessories, and jewelry sets. The newer District 1-East expansion adds another 2,500 booths focused on fashion and hair accessories. No other market on earth offers this density of ready-to-ship jewelry at these prices.",
      "Materials are overwhelmingly non-precious: stainless steel, zinc alloy, brass, acrylic, resin, and gold- or silver-plated finishes. Prices start at US$0.10 per piece for basic earrings and top out around US$28 for fashion-forward statement pieces. MOQs typically run 200\u2013500 pieces per design, though roughly half the suppliers carry ready stock \u2014 meaning you can mix designs and ship the same week. The market caters to volume buyers from the Middle East, Africa, South America, and Southeast Asia, and the surrounding industrial zone has thousands of small factories producing within hours of the showrooms.",
    ],
    cta: "Explore Yiwu jewelry suppliers",
  },
  {
    name: "Guangzhou (Panyu)",
    mapCity: "guangzhou",
    stars: 4,
    hook: "China\u2019s fine jewelry processing capital \u2014 Panyu handles 60% of national output, 70% of Hong Kong\u2019s jewelry exports, plus Liwan Plaza and Hualin jade market",
    content: [
      "Panyu district in Guangzhou has quietly become one of the world\u2019s most important fine jewelry manufacturing centres over the past three decades. More than 400 processing and manufacturing companies employ nearly 100,000 workers, accounting for 60% of China\u2019s fine jewelry production and 70% of Hong Kong\u2019s jewelry entrepot trade. Ninety percent of jewelry branded and sold in Hong Kong is manufactured in Panyu. The district also hosts over 1,600 coloured stone cutting factories. Major international brands including Tiffany and Cartier have used Panyu workshops for OEM production.",
      "Beyond Panyu, Guangzhou\u2019s Liwan Plaza is one of China\u2019s largest jade and silver wholesale markets, with 1,500+ shops across eight floors specialising in 925 silver, jade, crystal, pearl, and bead jewelry. Hualin Jade Street nearby has 300+ years of jade trading history and over 1,000 shops across four buildings, accounting for 90% of Guangzhou\u2019s jade transactions. For watches, the Zhanxi Road district near Guangzhou Railway Station has nine major wholesale markets with 3,000+ vendors \u2014 the largest watch wholesale cluster in China.",
    ],
    cta: "Explore Guangzhou jewelry suppliers",
  },
  {
    name: "Shenzhen (Shuibei)",
    mapCity: "shenzhen",
    stars: 4,
    hook: "Gold and precious jewelry capital \u2014 Shuibei handles 60% of China\u2019s gold wholesale and 70% of Shanghai Gold Exchange physical deliveries",
    content: [
      "Shuibei in Luohu district is China\u2019s largest, most advanced gold and jewelry cluster, evolved from an OEM base in the 1980s into a district the government officially promotes as the \u201cJewelry Capital\u201d. Over 7,000 enterprises operate within the 570,000-square-metre Wanshan Shuibei Jewelry Park, generating annual revenue exceeding 100 billion yuan. Shuibei accounts for approximately 50% of China\u2019s gold and jewelry wholesale market, and the physical volume of gold transactions represents roughly 70% of the Shanghai Gold Exchange\u2019s physical deliveries.",
      "The district covers gold, K-gold, diamonds, jade, pearls, and lab-grown stones across more than ten wholesale malls. Gold prices in Shuibei run 200+ yuan per gram below branded retail stores. Orders above 50,000 yuan often unlock 10\u201315% wholesale discounts. Shenzhen is also a major watch manufacturing hub, with OEM/ODM factories concentrated in Bao\u2019an and Luohu districts producing quartz and mechanical timepieces for global brands. Access is straightforward: Metro Line 3 to Tianbei Station, Exit C.",
    ],
    cta: "Explore Shenzhen jewelry suppliers",
  },
  {
    name: "Dongguan",
    mapCity: "dongguan",
    stars: 3,
    hook: "Stainless steel jewelry capital \u2014 5,000+ enterprises, rapid design cycles, strong OEM/ODM for international brands",
    content: [
      "Dongguan has emerged as a global leader in stainless steel jewelry production, with over 5,000 enterprises offering rapid design updates, competitive pricing, and support for small-batch customisation. The city\u2019s strength sits in contract manufacturing with strong quality control infrastructure \u2014 ideal for international brands placing OEM/ODM orders with strict specifications. Factories handle everything from zinc alloy casting and brass casting to CZ crystal setting, PVD plating, polishing, assembly, and packaging.",
      "Yee On, established in Hong Kong in 1978, operates a Dongguan facility covering over 50,000 square metres with more than 4,000 workers, specialising in gemstones, freshwater and Tahitian pearls, turquoise, coral, and shell jewelry with full vertical integration from raw material sourcing to cutting, polishing, and drilling. Dongguan sits 30 minutes from Shenzhen\u2019s Yantian port and an hour from Hong Kong, making logistics straightforward for export orders.",
    ],
    cta: "Explore Dongguan jewelry suppliers",
  },
  {
    name: "Danyang",
    mapCity: "danyang",
    stars: 3,
    hook: "World\u2019s largest spectacle lens production base \u2014 400M+ pairs annually, 50% of global output, 1,600+ eyewear enterprises",
    content: [
      "Danyang in Jiangsu province produces more than 400 million pairs of spectacle lenses each year \u2014 roughly 70% of China\u2019s total and about half of global output. There is a popular saying: \u201cone out of the two people in the world wear glasses with lenses from Danyang.\u201d The city hosts over 1,600 enterprises in the eyewear ecosystem, including 600+ manufacturers and 1,000+ supporting merchants, employing more than 50,000 people and generating annual output approaching 20 billion yuan (US$2.8 billion).",
      "Danyang\u2019s strength extends beyond prescription lenses into sunglasses frames, reading glasses, and optical accessories. The city has a complete industry chain integrating design, R&D, and production. In the first half of 2024, Danyang\u2019s eyewear enterprises reported exports of over 2.57 billion yuan (US$365 million), up 2.8% year-on-year. Danyang currently receives over 15 million custom lens orders annually from international clients. For sunglasses sourcing specifically, Danyang competes with Wenzhou and Xiamen.",
    ],
    cta: "Explore Danyang eyewear suppliers",
  },
  {
    name: "Foshan (Pingzhou)",
    mapCity: "foshan",
    stars: 3,
    hook: "Jade processing heritage stretching centuries \u2014 thousands of workshops for jade carvings, fine handcraft, and semi-precious stone jewelry",
    content: [
      "Pingzhou, part of Foshan city in Guangdong, has a jade-working history spanning centuries. The area grew rapidly in the late twentieth century as demand for jade carvings and jewelry surged. Today Pingzhou hosts thousands of workshops specialising in both large-scale carving and fine handcraft, covering jadeite, nephrite (Hetian jade), and various semi-precious stones. The proximity to Guangzhou (30 minutes by metro) means buyers often combine Pingzhou jade sourcing with visits to Liwan Plaza and Hualin market.",
      "Foshan\u2019s broader manufacturing ecosystem also supports jewelry accessory production \u2014 metal findings, chains, clasps, and packaging materials are produced locally. Halife Jewelry, which operates facilities across Guangzhou, Foshan, Qingdao, Dongguan, and Qingyuan, has a monthly production capacity of 700,000 pieces and yearly exports of US$18\u201321 million, illustrating the cross-city production networks that Foshan anchors.",
    ],
    cta: "Explore Foshan jade suppliers",
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

export default function JewelryCityAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="pb-14 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-wf-text mb-2">
            Learn more about each <span className="accent-word whitespace-nowrap">sourcing city</span>
          </h3>
          <p className="text-wf-text-secondary text-sm max-w-2xl mx-auto">
            Click a city to see what makes it a key player in the jewelry and accessories supply chain
          </p>
        </div>

        <div className="space-y-3">
          {cities.map((city, i) => {
            const isOpen = openIndex === i;
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

        {/* Hong Kong flag */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div>
              <p className="text-sm font-medium text-amber-800 mb-1">Also important: Hong Kong</p>
              <p className="text-xs text-amber-700 leading-relaxed">
                Hong Kong remains the world&apos;s leading jewelry trade orchestration hub.
                The city hosts the HKTDC Hong Kong International Jewellery Show (March) and
                Jewellery &amp; Gem WORLD (September) &mdash; two of the industry&apos;s most
                important trade events. Seventy percent of Hong Kong&apos;s jewelry entrepot
                trade originates from Panyu factories just across the border. For compliance,
                quality governance, and trade finance, Hong Kong is the natural bridge between
                mainland production and international markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
