"use client";

import { useState } from "react";

const categories = [
  {
    name: "Silk & Textiles",
    stars: 5,
    hook: "City of Silk — 4,700 years of heritage, 50% of China’s chemical fiber fabric, two Fortune 500 textile companies",
    images: [
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Silk fabric rolls in Suzhou textile market" },
      { src: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=800&q=80", alt: "Traditional Chinese silk weaving" },
    ],
    content: [
      "Suzhou is literally the City of Silk — silk production here stretches back 4,700 years to Neolithic fragments excavated near Taihu Lake. During the Ming and Qing dynasties, the imperial court sourced its finest silks exclusively from Suzhou workshops. That heritage is still alive: Suzhou embroidery (苏绣) is one of China’s Four Great Embroideries, and Song brocade (宋锦) is designated as national intangible cultural heritage.",
      "The modern textile engine sits in Shengze, a town in Wujiang district that has earned the title “Silk Capital of China” (中国绸都). Shengze has 5,000+ textile production enterprises and 7,000+ trading companies. Annual fabric output exceeds 13 billion metres, and Shengze controls 50% of China’s chemical fiber fabric market. Two Fortune 500 companies — Hengli Group and Shenghong Group — are both headquartered here. The Eastern Silk Market (东方丝绸市场) has 7,000+ booths doing RMB 100 billion in annual transactions.",
      "Beyond fabrics, Suzhou commands the wedding dress market. Huqiu Bridal City (虎丘婚纱城) accounts for 70–80% of China’s wedding dress wholesale and is the largest bridal hub in Southeast Asia. A $2,000 US gown costs $200–560 here. Changshu Garment City adds another layer — 9,000+ shops across 35 specialised markets covering men’s, women’s, and children’s wear, footwear, and accessories.",
    ],
    cta: "Explore Suzhou textile suppliers",
  },
  {
    name: "Precision Components",
    stars: 4,
    hook: "SIP + SND — ISO 13485, IATF 16949, AS9100D certified manufacturers across medical, auto, and aerospace",
    images: [
      { src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80", alt: "CNC precision machining" },
      { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", alt: "Precision manufacturing facility" },
    ],
    content: [
      "Suzhou Industrial Park (SIP) and Suzhou New District (SND) together create one of China’s strongest precision manufacturing ecosystems. SIP alone hosts 5,200+ foreign-invested enterprises and 189 projects from 108 Fortune Global 500 companies including Samsung, Bosch, Siemens, and Johnson & Johnson. The park was co-developed with Singapore and operates with stronger IP protection than most Chinese manufacturing zones.",
      "Certifications run deep here. ISO 9001, ISO 13485 (medical), IATF 16949 (automotive), and AS9100D (aerospace) are common across the supplier base. Key products include CNC machined parts (3/4/5 axis), precision injection moulding, sheet metal fabrication, semiconductor packaging and testing, and medical device components. Manufacturers like Suzhou Konlida hold 87 core patents with dual ISO 9001/AS9100D certification.",
      "The cost premium is real — SIP/SND manufacturers charge more than inland alternatives — but you get stronger quality control, better IP enforcement, and a talent pool fed by XJTLU, Soochow University, and multiple research institutes.",
    ],
    cta: "Explore Suzhou precision suppliers",
  },
  {
    name: "Electronics Assembly",
    stars: 4,
    hook: "Kunshan built one-third of the world’s laptops — Suzhou’s electronic info sector hit RMB 1,431 billion",
    images: [
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", alt: "Electronics circuit board assembly" },
      { src: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800&q=80", alt: "Semiconductor packaging line" },
    ],
    content: [
      "Suzhou’s electronic information industry is the city’s single largest sector at RMB 1,431.3 billion in output. Kunshan, a county-level city under Suzhou, was the global laptop manufacturing capital for three decades — Foxconn, Pegatron (100,000+ headcount, major Apple supplier), and Compal Electronics all operate major facilities here. At peak, more than half the world’s computers were made in Kunshan.",
      "SIP hosts the semiconductor and automotive electronics cluster: Samsung, Bosch (RMB 10 billion intelligent driving project), Spellman (high-voltage power supplies), TT Electronics (power management and sensors), and EMS providers like Benchmark, NEOTech, and HANZA. SPIL/ASE runs semiconductor packaging and testing. TCL Huaxing acquired Samsung’s Suzhou display panel factory for RMB 7.6 billion.",
      "The geopolitical reality: some multinationals are now splitting operations. R&D and early prototyping stay in Suzhou for precision and IP protection; mass production moves to Vietnam or India. Factor this dual-sourcing trend into long-term planning. Kunshan is connected to Shanghai via Metro Line 11 — making it easy to combine with Shanghai-based operations.",
    ],
    cta: "Explore Suzhou electronics suppliers",
  },
  {
    name: "Steel & Metal Products",
    stars: 3,
    hook: "Precision metal fabrication for electronics, medical, and automotive — plus China’s busiest inland river port",
    images: [
      { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", alt: "Metal fabrication workshop" },
      { src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80", alt: "Steel processing facility" },
    ],
    content: [
      "Suzhou is not a primary steel production centre like Tangshan or Baosteel territory. Its metal sector excels at precision and customisation rather than bulk commodity steel. SIP and SND manufacturers produce precision sheet metal, aluminium profiles, heat sinks, extrusions, switchgear cabinets (0.3–35 kV), and stainless steel components for electronics, medical devices, and automotive applications.",
      "The Port of Suzhou — collectively Taicang, Zhangjiagang, and Changshu ports — handles 4.45 million TEU per year, making it the world’s busiest inland river port. Zhangjiagang specialises in steel imports (ore, coal, timber). For commodity steel, the Zhangjiagang port area offers strong raw material availability. For tight-tolerance components, SIP/SND manufacturers are the better fit.",
      "Notable manufacturers include Suzhou First Sheet Metal Products (est. 2002), Suzhou Zhongxin Metal Manufacturing (est. 1994, switchgear specialist), and Suzhou Suhang Metal (heat sinks, aluminium profiles). Best for buyers who need precision-grade metal components rather than bulk steel orders.",
    ],
    cta: "Explore Suzhou metal suppliers",
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

export default function WhatSuzhouMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-suzhou-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Suzhou</span> Makes
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
