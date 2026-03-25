"use client";

import { useState } from "react";

const categories = [
  {
    name: "E-commerce & Digital Trade",
    stars: 5,
    hook: "Alibaba HQ, 1688 platform, 65,000+ cross-border sellers — China’s undisputed e-commerce capital",
    images: [
      { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", alt: "E-commerce logistics warehouse" },
      { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", alt: "Online marketplace interface" },
    ],
    content: [
      "Hangzhou is not just a sourcing city — it is the command centre of China’s entire digital supply chain. Alibaba Group’s global headquarters sits in Yuhang district, a 1-million-square-metre campus with 30,000 employees. 1688.com, China’s dominant B2B wholesale platform with 100 million+ active buyers, is built and run here. 70% of China’s cross-border payment settlement flows through Hangzhou.",
      "The city was China’s first cross-border e-commerce comprehensive pilot zone, approved in 2015. Since then, export volume has grown 1,266 times. There are 65,000+ active cross-border sellers, 300,000+ suppliers, and a complete ecosystem spanning platforms, logistics, fintech, and data services. DeepSeek — the AI company that shook the global tech world — is headquartered here too. For buyers, Hangzhou is where you go to understand the digital backbone of Chinese trade and connect with platform-native suppliers.",
    ],
    cta: "Explore Hangzhou e-commerce suppliers",
  },
  {
    name: "Textiles & Silk",
    stars: 4,
    hook: "China’s “Garment First Street” plus 2,000 years of silk heritage",
    images: [
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Silk fabric rolls" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Hangzhou fashion wholesale" },
    ],
    content: [
      "Sijiqing (四季青) is China’s “Garment First Street” — a 1.6 km stretch with 20+ wholesale buildings, 15,000 vendors, and 1,200 clothing manufacturers. It dominates women’s fashion wholesale nationally. The market divides into first-batch (一批, factory-direct showrooms) and second-batch (二批, resellers offering lower MOQs and return windows). Prices start around 33 RMB for basic cotton tees and 60–85 yuan per piece for general wholesale.",
      "Hangzhou’s silk heritage spans 2,000+ years. Chinese Silk City (中国丝绸城) on Xinhua Road has 600+ enterprises — China’s largest silk market. Wensli Group, China’s premier luxury silk brand, acquired French firm Marc Rozier in Lyon. Linping district produces 80% of Hangzhou’s women’s fashion brands. The Xiaoshan down and feather cluster contributes 60% of China’s total down exports from 100+ enterprises with 10 billion yuan annual output. Silk sourcing is unique to Hangzhou — nowhere else in China has this depth.",
    ],
    cta: "Explore Hangzhou textile suppliers",
  },
  {
    name: "Small Appliances",
    stars: 3,
    hook: "ROBAM, Supor, Joyoung — brand HQs and 50+ large-scale manufacturers",
    images: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Kitchen appliances production" },
      { src: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=800&q=80", alt: "Small appliance manufacturing line" },
    ],
    content: [
      "Hangzhou is home to several of China’s leading appliance brands. ROBAM (老板) is the premium kitchen appliance maker and was the official supplier for the Hangzhou Asian Games. Supor (苏泊尔) is a major small appliance brand headquartered here. Joyoung (九阳) leads in kitchen innovation. Between them, Hangzhou has 50+ large-scale appliance businesses.",
      "Hangzhou Yongyao Technology operates a 200,000 sqm manufacturing base with 3,000 employees producing 40 categories and 400+ SKUs — rice cookers, air fryers, pressure cookers, and ovens. Zhejiang Province broadly excels in electrical components and OEM production. The sourcing angle here is connecting with brand-name companies and their OEM arms — the R&D and design headquarters are in Hangzhou, while some assembly lines sit further south in Shaoxing or Yuhuan.",
    ],
    cta: "Explore Hangzhou appliance suppliers",
  },
  {
    name: "IoT & Smart Home",
    stars: 3,
    hook: "Hikvision, Dahua, EZVIZ — world-class R&D hub for smart devices",
    images: [
      { src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", alt: "Smart home devices" },
      { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", alt: "IoT technology development" },
    ],
    content: [
      "Hangzhou is where smart home and IoT product design happens at a world-class level. Hikvision (海康威视) is the world’s number-one video surveillance manufacturer and runs the EZVIZ smart home brand, with 5.3 billion yuan invested in smart factories. Dahua Technology (大华科技) operates a 512-acre Smart IoT Industrial Park. Binjiang High-Tech Zone alone contains 20,000+ tech enterprises.",
      "The city’s emerging tech scene includes Unitree Robotics (humanoid robots), DeepSeek (AI and large language models), and BrainCo (brain-machine interfaces) — collectively known as Hangzhou’s “Six Little Dragons.” For buyers sourcing smart home products, Hangzhou offers access to engineering talent and platform integration via Alibaba’s Tmall Genie ecosystem. Physical manufacturing often happens in Shenzhen or Dongguan factories, but the design, firmware, and cloud services originate in Hangzhou.",
    ],
    cta: "Explore Hangzhou IoT suppliers",
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

export default function WhatHangzhouMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-hangzhou-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Hangzhou</span> Makes
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
