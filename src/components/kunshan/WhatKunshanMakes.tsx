"use client";

import { useState } from "react";

const categories = [
  {
    name: "Electronics Assembly",
    stars: 5,
    hook: "One-third of the world’s laptops are manufactured here — Foxconn, Luxshare, Compal, and MSI under one roof",
    images: [
      { src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80", alt: "Electronics assembly production line" },
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", alt: "Circuit board manufacturing" },
    ],
    content: [
      "Kunshan produces approximately one-third of the world’s laptops. The Big Three Taiwanese ODMs all operate here: Foxconn has four campuses, Luxshare-ICT acquired both Wistron’s and Pegatron’s Kunshan plants (making it the #2 iPhone assembler globally), and Compal runs a megaplant capable of 6.5 million units per month. MSI has a major gaming laptop and motherboard manufacturing hub here. The component ecosystem is equally dense — PCB makers like Wus Printed Circuit and Kunshan Huaxin Electronics, connector specialists, and capacitor and diode manufacturers all operate within the same county.",
      "The sector is actively transforming. Foxconn replaced 60,000 workers with robots in one Kunshan facility. AI servers, smart terminals, wearables, and low-altitude economy (drones/eVTOL) are emerging growth verticals. InfoVision Optoelectronics produces TFT-LCD displays and is the global #1 in privacy anti-peek laptop panels. Visionox manufactures OLED display panels. 1688 search terms: 昆山电子, 昆山PCB, 昆山连接器, 昆山显示屏.",
    ],
    cta: "Explore Kunshan electronics suppliers",
  },
  {
    name: "Precision Components",
    stars: 5,
    hook: "Hundreds of CNC and precision manufacturers spawned by the Taiwanese ODM ecosystem — accuracy to ±1μm",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "CNC precision machining" },
      { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", alt: "Precision component inspection" },
    ],
    content: [
      "The Taiwanese ODM ecosystem in Kunshan has spawned hundreds of precision component suppliers. Kunshan Yangyu Precision Components produces 300 million antenna shrapnel pieces and 200 million connectors annually at processing accuracy of ±1μm. Kersen Science & Technology (Shanghai-listed, 603626.SS) handles precision metal and plastic components for consumer electronics, automotive, and industrial applications using CNC, extrusion, stamping, injection moulding, and surface finishing.",
      "The cluster includes JST Precision (CNC machining for medical, aerospace, aviation, electronics, automotive), Kunshan Hopeful Metal Products (custom CNC turning and milling), and Kunshan Prosperity Metal Products (98% exports to Europe and US). Kunshan also hosts a dedicated Opto-Electronics Industrial Park within the KETD zone, with InfoVision and Visionox anchoring the display panel cluster. 1688 search terms: 昆山精密零件, 昆山CNC加工, 昆山模具.",
    ],
    cta: "Explore Kunshan precision suppliers",
  },
  {
    name: "Bicycle & Sports Equipment",
    stars: 4,
    hook: "Giant and Shimano both chose Kunshan as their China manufacturing base — world-class cycling cluster",
    images: [
      { src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80", alt: "Bicycle manufacturing facility" },
      { src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80", alt: "Bicycle components assembly" },
    ],
    content: [
      "Kunshan is the China manufacturing base for two of cycling’s biggest names. Giant (the world’s largest bicycle manufacturer) opened its first China factory here in 1992 and operates a megaplant that is one of its two main global production sites alongside Taichung. Shimano established its first China factory the same year, producing bicycle components and fishing rods, with a ¥500 million fishing rod production facility. Giant EV also manufactures electric bicycles from Kunshan.",
      "The surrounding cluster includes Kunshan Qiyue Outdoor Sports Products (bicycle accessories, mountain bikes, e-bikes, brakes, tubes and tyres), Velo Cycle (saddles and grips), and Kunshan Wanze Textile (functional fabrics for sportswear, raincoats, ski wear). Aluminium components for bicycle frames, tennis racquets, and fishing rods are also sourced locally. Industrial cluster integration reduces production lead times by 15–30% compared to isolated factories. 1688 search terms: 昆山自行车, 昆山运动器材, 昆山电动车.",
    ],
    cta: "Explore Kunshan bicycle suppliers",
  },
  {
    name: "Packaging & Print",
    stars: 3,
    hook: "Solid cluster serving the electronics sector — colour boxes, display packaging, sustainable solutions",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Packaging production facility" },
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Printing and packaging materials" },
    ],
    content: [
      "Kunshan has a solid cluster of packaging and printing companies that grew up serving the massive local electronics sector. SuperMix Printing Technology (established 2001, Penglang Town) invested ¥300 million and produces ¥200 million in output annually, serving global brands with colour boxes, display packaging, and sustainable packaging solutions. Kunshan Yufeng Printing produces colour paper boxes and labels from a 3,000 m² factory.",
      "JingPeng Packaging Materials specializes in laser film and aluminized film from a 20,000 m² headquarters factory plus three subsidiaries, serving alcohol, tobacco, food, pharma, and cosmetics. Tianfeng Printing & Packaging operates from a 15,000 m² modern factory. Yuncheng Plastic Industry produces BOPA (nylon) film from four production bases across China. Ruiyuan Intelligent Equipment manufactures the printing presses themselves. 1688 search terms: 昆山包装, 昆山印刷, 昆山彩盒.",
    ],
    cta: "Explore Kunshan packaging suppliers",
  },
  {
    name: "Metal Products",
    stars: 3,
    hook: "Strong CNC machining cluster driven by electronics demand — engine parts, valves, automotive components",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Metal machining workshop" },
      { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", alt: "Metal components production" },
    ],
    content: [
      "Kunshan’s metal products cluster overlaps significantly with the precision components sector. The electronics ODM ecosystem drives demand for CNC-machined metal parts across consumer electronics, automotive, and industrial applications. Kunshan Yao Zhi Tian Metal Products specializes in engine parts and precision machining. KITZ Corporation of Jiangsu Kunshan (Japanese parent) manufactures valves. Swoboda (German parent) produces automotive components.",
      "The Comprehensive Bonded Zone offers duty-free imports for raw materials and VAT exemptions for export production, making Kunshan particularly competitive for metal products destined for re-export. Most metal product suppliers in Kunshan are Tier 2–3 suppliers feeding the larger ODM assembly lines, but many also accept direct orders for precision CNC machining, turning, and milling. 1688 search terms: 昆山金属加工, 昆山CNC车削, 昆山铝合金.",
    ],
    cta: "Explore Kunshan metal suppliers",
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

export default function WhatKunshanMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-kunshan-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Kunshan</span> Makes
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
