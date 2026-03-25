"use client";

import { useState } from "react";

const categories = [
  {
    name: "Trade Services",
    stars: 5,
    hook: "World's busiest port, China's first FTZ, and HQ of every major freight forwarder and inspection agency",
    images: [
      { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80", alt: "Shanghai container port at Yangshan" },
      { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", alt: "Freight forwarding and logistics" },
    ],
    content: [
      "Shanghai isn't where you go to find cheap factories — it's where you go to command and control a sophisticated sourcing operation. The Port of Shanghai handled 55+ million TEU in 2025, making it the world's busiest container port for the 16th consecutive year. Yangshan Deep Water Port alone moved 28.71 million TEU, with an 84% utilization rate that leads the world.",
      "The China (Shanghai) Pilot Free Trade Zone — China's first, established in 2013 — halves customs approval time and removes minimum registration capital requirements. Waigaoqiao, the largest FTZ area in mainland China, runs 10 professional trade platforms covering everything from automobiles to medical devices to cosmetics. Most suppliers you'll meet in Shanghai are trading companies or representative offices of manufacturers in Zhejiang and Jiangsu provinces — and that's the point. Shanghai aggregates the entire Yangtze River Delta into one city.",
    ],
    cta: "Explore Shanghai trade services",
  },
  {
    name: "Fashion & Design",
    stars: 4,
    hook: "China's fashion capital — Shanghai Fashion Week, South Bund bespoke tailoring, and Qipu Road wholesale",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Shanghai fashion design studio" },
      { src: "https://images.unsplash.com/photo-1503342217505-b0a15ec7a77c?w=800&q=80", alt: "Fabric and textile sourcing" },
    ],
    content: [
      "Shanghai Fashion Week is Asia's premier fashion event — 100+ runway shows, 1,000+ participating brands, with MODE Shanghai connecting designers, retailers, and global brands at the Crystal Bridge venue in Changning. The ecosystem includes OnTimeShow, Notes Shanghai, Tube Showroom, and HAI550, a 7-storey fashion collective near Xintiandi featuring young Chinese designer brands.",
      "The South Bund Fabric Market (南外滩面料市场) at 399 Lujiabang Road is world-famous — 285 tailor shops across 3 floors offering custom suits at 2,000–4,000 yuan, roughly a third of comparable European bespoke pricing. It's rated #2 of 1,412 things to do in Shanghai on TripAdvisor, behind only the Bund itself. For wholesale volume, Qipu Road (七浦路) is Shanghai's largest clothing market — a 680-metre stretch with 10+ mall buildings and 100+ years of wholesale history, open from 4 AM for the real wholesale action.",
    ],
    cta: "Explore Shanghai fashion suppliers",
  },
  {
    name: "Automotive Parts",
    stars: 4,
    hook: "Home to SAIC Motor, Tesla Gigafactory, and a complete auto supply chain built from scratch",
    images: [
      { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", alt: "Automotive manufacturing line" },
      { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", alt: "Electric vehicle production" },
    ],
    content: [
      "Shanghai is home to SAIC Motor — China's largest automaker — and has the deepest Sino-foreign joint venture history in the country. SAIC Volkswagen in Anting, Jiading was China's first JV car company (1985). When it started, the only local parts in the VW Santana were tires, a radio, and an antenna. By 1998, over 90% of components were locally sourced. That's how Shanghai built a complete modern automotive supply chain from zero.",
      "Today, HASCO (Shanghai HQ) is one of China's largest auto parts manufacturers, covering interior components, chassis, powertrain systems, and electronics. The Tesla Shanghai Gigafactory in Lingang was Tesla's first overseas plant. Jiading hosts the National Intelligent Connected Vehicle Pilot Zone (opened 2016), while Jinqiao in Pudong runs SAIC-GM's major production base. Automechanika Shanghai 2026 (December 2–5, NECC) is the largest edition in history — 7,000 exhibitors across 383,000 m².",
    ],
    cta: "Explore Shanghai auto parts suppliers",
  },
  {
    name: "Semiconductors & IC",
    stars: 4,
    hook: "Zhangjiang: 307 IC companies, 6 of the world's top 10 chip designers, 480 billion yuan revenue",
    images: [
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", alt: "Semiconductor chip manufacturing" },
      { src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", alt: "IC design and testing" },
    ],
    content: [
      "Zhangjiang Hi-Tech Park in Pudong is China's semiconductor capital — 307 IC enterprises with the most complete industrial chain in the country: design, manufacturing, packaging, testing, materials, and technical services. Six of the world's top 10 chip designers have regional HQ or R&D centres in Zhangjiang, and three of China's top 10 are headquartered there. Zhangjiang's IC design output accounts for 70% of Shanghai's total.",
      "Shanghai's IC industry generated 480+ billion yuan in 2025 revenue, with manufacturing output growing 15.1% year-on-year. SMIC — China's largest foundry — has its Shanghai HQ, running at 89.6% utilization with $2.247 billion in Q1 2025 revenue. Hua Hong Semiconductor, Montage Technology, GigaDevice, and Will Semiconductor round out the major players. The Lingang Special Area offers 15% corporate income tax for qualifying IC enterprises, with a target of 100 billion yuan in semiconductor output.",
    ],
    cta: "Explore Shanghai semiconductor suppliers",
  },
  {
    name: "Chemicals",
    stars: 3,
    hook: "One of China's 7 major petrochemical bases — BASF, Covestro, Sinopec all in one park",
    images: [
      { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", alt: "Chemical production facility" },
      { src: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80", alt: "Industrial chemical plant" },
    ],
    content: [
      "Shanghai Chemical Industry Park (SCIP) in Jinshan/Fengxian district is one of China's 'Seven Major Petrochemical Industry Bases' — a 36.1 km² state-level development zone founded in 1996, aiming to rank among the largest, most integrated, and most advanced petrochemical bases in Asia. The circular economic industrial chain centres on ethylene, producing petroleum chemicals, refined petroleum products, chemical new materials, isocyanate, and polycarbonate.",
      "The tenant list reads like a who's who of global chemicals: Sinopec anchors the refinery, BASF runs a major integrated production site, Covestro handles polymers, Evonik covers specialty chemicals, Huntsman does polyurethanes, and Mitsubishi Gas Chemical and Mitsui Chemicals round out the roster. SCIP sits 55 km from Yangshan Deep Water Port and 50 km from Pudong International Airport — good logistics, but this is more of a production base than a sourcing market for foreign buyers.",
    ],
    cta: "Explore Shanghai chemical suppliers",
  },
  {
    name: "Food & Beverage Equipment",
    stars: 3,
    hook: "Asia's largest F&B trade show (SIAL) and major hospitality expos, plus specialist equipment makers",
    images: [
      { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80", alt: "Food processing equipment" },
      { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Food and beverage trade show" },
    ],
    content: [
      "Shanghai is Asia's trade show capital for food and beverage. SIAL Shanghai 2026 (May 18–20, SNIEC) is Asia's largest F&B trade show — 5,000+ exhibitors from 75+ countries, 180,000 visitors, 200,000 m² covering imported foods, dairy, meat, seafood, snacks, health foods, beverages, condiments, convenience foods, and food tech. HOTELEX Shanghai 2026 (March 30 – April 2, NECC) adds another 3,000+ exhibitors across 400,000 m² for hospitality equipment and foodservice.",
      "On the manufacturing side, Shanghai has specialist F&B equipment makers: Joygoal Food Machinery (cutting-edge food machinery), Longyu Electro-Mechanic Technology (encrusting machines, mooncake and steamed bun production lines), and Maxsen Machinery (customized conveyor equipment for food, beverage, and pharmaceutical sectors). The city is more of a commercial hub than a manufacturing base for this category, but the trade show concentration makes it the best place to discover suppliers from across China.",
    ],
    cta: "Explore Shanghai F&B equipment suppliers",
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

export default function WhatShanghaiMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-shanghai-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Shanghai</span> Makes
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
