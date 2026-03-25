"use client";

import { useState } from "react";

const categories = [
  {
    name: "Home Products & Kitchenware",
    stars: 5,
    hook: "Yuyao and Cixi produce for global housewares brands \u2014 15\u201330% cheaper than competing regions",
    images: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Kitchenware manufacturing in Ningbo" },
      { src: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80", alt: "Plastic houseware production line" },
    ],
    content: [
      "Ningbo is one of China\u2019s dominant houseware manufacturing regions. Yuyao\u2019s Plastic Industrial Zone leads plastic houseware production \u2014 food containers, lunch boxes, storage solutions \u2014 with over 2,000 plastic manufacturers earning it the title \u201cChina Plastic City.\u201d Cixi\u2019s Small Commodities Manufacturing Base focuses on kitchen tools, storage, and decorative items. Sanbei Industrial Zone in Cixi specializes in non-stick cookware and frying pans.",
      "The advantages are structural: port proximity gives Ningbo 200+ container routes globally. 70% of suppliers offer product development within 15 days. Costs run 15\u201330% below competing regions. Certifications are standard \u2014 ISO 9001, BSCI, LFGB for food-contact, UL for electrical. Companies like Ningbo Future Houseware (annual revenue over US$300 million) anchor the cluster.",
    ],
    cta: "Explore Ningbo kitchenware suppliers",
  },
  {
    name: "Hardware & Tools",
    stars: 5,
    hook: "25% of China\u2019s die-casting mold output comes from Beilun district alone",
    images: [
      { src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80", alt: "Hardware tools manufacturing" },
      { src: "https://images.unsplash.com/photo-1530124566582-a45a7c05589f?w=800&q=80", alt: "Die casting mold production" },
    ],
    content: [
      "Ningbo is synonymous with high-quality hardware and tools. Many global brands source here for the combination of quality and competitive pricing. Yinzhou district anchors hand tools \u2014 sockets, screwdrivers, hex keys, locking pliers, wire strippers. Beilun district is China\u2019s die-casting mold capital: 372+ mold enterprises, 60+ die-casting production companies with 400+ machines, producing 25% of the entire nation\u2019s die-casting mold output.",
      "Yuyao adds precision injection molds and plastic tooling, earning the title \u201cHometown of Moulds.\u201d Across the broader Ningbo region there are 3,000+ mold manufacturers \u2014 making it one of China\u2019s three major mold production bases. Beilun alone has 34 enterprises with mold output value exceeding \u00a510 million each.",
    ],
    cta: "Explore Ningbo hardware suppliers",
  },
  {
    name: "Small Appliances",
    stars: 4,
    hook: "Cixi makes ~60% of the world\u2019s small home appliances \u2014 2,000 factories, 10,000 component suppliers",
    images: [
      { src: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80", alt: "Small appliance assembly line" },
      { src: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&q=80", alt: "Kitchen appliance manufacturing" },
    ],
    content: [
      "Cixi is China\u2019s undisputed \u201cSmall Appliance Capital.\u201d Roughly 60% of the world\u2019s small home appliances are manufactured here. The cluster runs deep: approximately 2,000 whole-machine enterprises and 10,000+ component factories, with a total home appliance industry exceeding \u00a51 trillion in market scale. 40% of Cixi\u2019s exports are small appliances, primarily to the EU and US.",
      "The product range covers everything: air fryers, blenders, juicers, coffee makers, toasters, vacuum cleaners, robotic cleaners, hair dryers, electric irons, humidifiers, and electric kettles. Standout manufacturers include Month-Li Group (world\u2019s largest hair dryer maker, 13.14 million units in 2022), Zhuo Li Electric Group (20 million electric irons annually, global #1), and Fotile (premium kitchen appliances). The key advantage: 99% of parts for any small appliance can be sourced within Cixi\u2019s local supply chain. There is no professional wholesale market \u2014 buyers visit factories directly in townships.",
    ],
    cta: "Explore Ningbo appliance suppliers",
  },
  {
    name: "Stationery & Office Supplies",
    stars: 4,
    hook: "The \u201cCapital of Chinese Stationery\u201d \u2014 ~20% of China\u2019s total stationery output",
    images: [
      { src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80", alt: "Stationery manufacturing" },
      { src: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&q=80", alt: "Pen and marker production" },
    ],
    content: [
      "Ningbo is known as the \u201cCapital of Chinese Stationery\u201d \u2014 the industry accounts for roughly one-fifth of China\u2019s total stationery output. The manufacturing clusters centre on Cixi and Yuyao. Guanhaiwei Town and Cidong Industrial Zone in Cixi specialize in pens, markers, and gel ink pens. Yuyao adds medium and small-scale pen manufacturing, file folders, pen holders, staplers, and whiteboards.",
      "Key manufacturers include Ningbo Zhengyang Stationery (ball pens, gel ink pens, pencils, markers), Ningbo Chosch Stationery (gel ink pens, mechanical pencils), and Ningbo Zhengya Stationery under the ZEYAR brand (markers, based in Cixi High-Tech Industrial Development Zone). The annual CNISE \u2014 China Ningbo International Stationery Fair \u2014 draws 1,872 exhibitors across 60,000 sqm, making it the go-to event for stationery sourcing.",
    ],
    cta: "Explore Ningbo stationery suppliers",
  },
  {
    name: "Auto Parts",
    stars: 3,
    hook: "China\u2019s largest auto aftermarket cluster \u2014 CAPAFAIR draws 1,776 manufacturers",
    images: [
      { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", alt: "Auto parts manufacturing" },
      { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", alt: "Automotive components" },
    ],
    content: [
      "Ningbo sits at the centre of China\u2019s largest auto parts industry cluster. The city\u2019s strength is aftermarket parts, replacement components, and accessories across the full automotive supply chain. Manufacturing is spread city-wide rather than concentrated in a single district.",
      "The key trade event is CAPAFAIR \u2014 the China Ningbo International Auto Parts & Aftermarket Fair \u2014 China\u2019s only export-oriented auto aftermarket trade fair. The 2025 edition attracted 1,776 manufacturers from 21 provinces, showcased over 100,000 products, and drew nearly 28,000 trade visitors. The next edition runs August 12\u201314, 2026 at the Ningbo International Convention & Exhibition Center.",
    ],
    cta: "Explore Ningbo auto parts suppliers",
  },
  {
    name: "Textiles & Garments",
    stars: 3,
    hook: "Suits, workwear, and uniforms \u2014 significant but not dominant vs. Guangzhou or Shaoxing",
    images: [
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Textile fabric production" },
      { src: "https://images.unsplash.com/photo-1503342217505-b0a15ec7a77c?w=800&q=80", alt: "Garment manufacturing" },
    ],
    content: [
      "Ningbo has a significant textile manufacturing presence, though it doesn\u2019t match Guangzhou or Shaoxing in scale. Fenghua district and Cixi are the primary garment areas. The product focus is narrower: suits, workwear, student uniforms, overcoats, and garment accessories rather than fast fashion.",
      "Ningbo Aiyimei Garment (established 1992) is representative \u2014 a 16,000 sqm factory with 800 employees producing suits, student outfits, and overcoats, with a 70%+ export rate. GYJ Textile in Cixi focuses on jacquard fabric, french terry, and jersey fabric. The fabric market infrastructure is modest: Qingfang Center and Rainbow Cloth Plaza in Haishu district serve local needs but are not destination markets for international buyers.",
    ],
    cta: "Explore Ningbo textile suppliers",
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

export default function WhatNingboMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-ningbo-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Ningbo</span> Makes
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
