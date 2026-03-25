"use client";

import { useState } from "react";

const categories = [
  {
    name: "Furniture & Home",
    stars: 5,
    hook: "World\u2019s largest furniture wholesale market \u2014 7,000+ factories, 20 million sqm of showrooms",
    images: [
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", alt: "Lecong furniture showroom" },
      { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", alt: "Foshan furniture manufacturing" },
    ],
    content: [
      "Foshan produces 50\u201375% of all furniture made in China. The operation splits across two towns in Shunde district: Lecong handles the selling, Longjiang handles the making. Lecong alone has 20 million+ sqm of showroom space across 3,450+ shops \u2014 a 10km strip from Lanshi Bridge to Longjiang Bridge. Louvre International anchors the premium end with 380,000 sqm and 2,000+ domestic brands. Red Star Macalline runs the only wholesale-format branch in its national chain, with 90%+ factory-direct sales.",
      "Longjiang is where the production happens. 7,000+ furniture factories and 26,000+ proprietary brands. The first modern sofa built in China came out of Longjiang in 1977 when Chenyong Woodworking Group reverse-engineered Hong Kong designs. Today the cluster produces everything from budget panel furniture to pieces that compete with Italian luxury at 40\u201360% lower cost. Nearby Jiujiang adds mattresses \u2014 one in every ten mattresses sold worldwide ships from that single town.",
    ],
    cta: "Explore Foshan furniture suppliers",
  },
  {
    name: "Ceramics & Tiles",
    stars: 5,
    hook: "54% of China\u2019s tile production, 25% of global output \u2014 5,000 years of ceramic heritage",
    images: [
      { src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80", alt: "Ceramic tile production in Foshan" },
      { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", alt: "Foshan ceramic tiles showroom" },
    ],
    content: [
      "Foshan has been making ceramics for 5,000 years. Shiwan\u2019s Nanfeng Kiln, built in 1506 during the Ming Dynasty, still fires with wood today. The modern industry took off in the 1980s when Foshan imported Italy\u2019s first ceramic tile production line. Now the city runs 1,000+ production lines turning out 1.2 billion sqm of tiles annually \u2014 54% of China\u2019s total and roughly a quarter of global output.",
      "The trading hub is Nanzhuang in Chancheng district, designated \u201cChina Building Ceramic First Town.\u201d Its 2,000+ ceramic enterprises and 3+ million sqm of trading space include Cihai International (600+ enterprises), China Ceramics City (200+ brands, export-focused), and Shiwan Zhiye Market (470,000 sqm, 30+ years running). Major brands \u2014 Dongpeng, Monalisa, ARROW, Marco Polo, New Pearl \u2014 all have their roots and factories here.",
    ],
    cta: "Explore Foshan ceramics suppliers",
  },
  {
    name: "Aluminium & Metals",
    stars: 5,
    hook: "Dali: China\u2019s \u201cAluminium No. 1 Town\u201d \u2014 largest aluminium production and distribution centre nationally",
    images: [
      { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", alt: "Aluminium profile extrusion" },
      { src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80", alt: "Aluminium manufacturing Foshan" },
    ],
    content: [
      "Dali town in Nanhai district is China\u2019s largest aluminium profile production and distribution centre. The Foshan Nanhai Aluminum Profile Association (NAPA), established in 2004, is the country\u2019s largest regional aluminium industry body. Bomei Hardware Decorative City \u2014 600+ mu at the intersection of Qilu and Guihe Roads \u2014 is the main trading hub for aluminium profiles, doors, windows, and hardware.",
      "Chencun in Shunde district adds stainless steel, operating as South China\u2019s stainless steel processing centre. The two clusters together supply the raw materials that feed Foshan\u2019s downstream industries: furniture frames, lighting fixtures, building facades, and doors and windows. Key manufacturers include Oriental Aluminium, Hehua Aluminum, and Datong Jinwei.",
    ],
    cta: "Explore Foshan aluminium suppliers",
  },
  {
    name: "Lighting",
    stars: 4,
    hook: "LED and decorative lighting cluster powered by Nanhai\u2019s aluminium supply chain",
    images: [
      { src: "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?w=800&q=80", alt: "LED lighting fixtures" },
      { src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80", alt: "Crystal chandelier showroom" },
    ],
    content: [
      "Danzao town in Nanhai district runs a dedicated LED manufacturing cluster with companies like Lianpu Lighting (500+ employees), Yingpeng Lighting (established 1997), and Land Lighting (300+ workers). The cluster benefits from direct access to Nanhai\u2019s aluminium supply chain for fixture housings and heat sinks.",
      "Trading happens in the Lecong corridor. Sunlink Lighting & Kitchen Cabinet City and Shunle International Lighting City stock crystal chandeliers, ceiling lights, wall sconces, LED panels, floor lamps, and spotlights in styles from modern minimalist to European classical. Foshan\u2019s lighting industry is strong but secondary to Zhongshan\u2019s Guzhen \u2014 China\u2019s designated lighting capital \u2014 about 90 minutes south.",
    ],
    cta: "Explore Foshan lighting suppliers",
  },
  {
    name: "Building Materials",
    stars: 4,
    hook: "330,000 sqm at Huayi alone \u2014 everything from flooring to smart locks under one roof",
    images: [
      { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", alt: "Building materials warehouse" },
      { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", alt: "Interior building materials showroom" },
    ],
    content: [
      "Foshan\u2019s building materials ecosystem covers everything outside the ceramics and aluminium categories that have their own clusters. Huayi International Decoration Expo City is the anchor: 330,000 sqm across 5 floors with 2,000 shops selling tiles, wooden flooring, lighting, doors, windows, sanitaryware, ceilings, hardware, wallpaper, paints, and appliances. Brands like TOTO, ARROW, and Panasonic all have presence here.",
      "Huada Ceramics Sanitarywares Building Materials City (120,000 sqm, 300+ shops) focuses on doors and windows \u2014 about 60% of its suppliers sell aluminium, stainless steel, wooden, and security doors plus smart locks. Meiju International Building Materials Expo Center adds another 280,000 sqm. Casa Ceramics & Sanitaryware Mall, founded in 1994, was one of Foshan\u2019s first ceramic wholesale markets and now stocks mid-to-high-end sanitary ware from TOTO, KOHLER, OPPEIN, and JOMOO.",
    ],
    cta: "Explore Foshan building materials suppliers",
  },
  {
    name: "Appliances",
    stars: 3,
    hook: "Midea and Galanz HQ \u2014 Shunde produces 50%+ of the world\u2019s air conditioners",
    images: [
      { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", alt: "Home appliance manufacturing" },
    ],
    content: [
      "Beijiao town in Shunde district is home to Midea Group \u2014 a Fortune 500 company and one of the world\u2019s largest appliance makers. Galanz, the microwave oven giant, is also based in Shunde. The district\u2019s 3,000+ electrical appliance factories produce over 50% of the world\u2019s air conditioners and refrigerators. Sourcing here is typically direct factory relationships rather than wholesale market browsing.",
    ],
    cta: "Explore Foshan appliance suppliers",
  },
  {
    name: "Textiles",
    stars: 3,
    hook: "Some textile production but secondary to Guangzhou\u2019s Zhongda and Shahe districts",
    images: [
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Textile fabric rolls" },
    ],
    content: [
      "Foshan has textile manufacturing capacity, but it is not a primary cluster. Guangzhou\u2019s Zhongda Fabric Market (23,000+ shops, 30 minutes away) and Shahe clothing district dominate the Pearl River Delta textile supply chain. Foshan\u2019s textile production supports its furniture industry \u2014 upholstery fabrics, curtains, and soft furnishings \u2014 rather than operating as an independent export cluster.",
    ],
    cta: "Explore Guangzhou textile suppliers",
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

export default function WhatFoshanMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-foshan-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Foshan</span> Makes
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
                    <div className={`grid grid-cols-1 ${cat.images.length > 1 ? 'md:grid-cols-2' : ''} gap-3 mb-4`}>
                      <img
                        src={cat.images[0].src}
                        alt={cat.images[0].alt}
                        className="w-full h-36 md:h-44 object-cover rounded-lg"
                        loading="lazy"
                      />
                      {cat.images.length > 1 && (
                        <img
                          src={cat.images[1].src}
                          alt={cat.images[1].alt}
                          className="hidden md:block w-full h-44 object-cover rounded-lg"
                          loading="lazy"
                        />
                      )}
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
