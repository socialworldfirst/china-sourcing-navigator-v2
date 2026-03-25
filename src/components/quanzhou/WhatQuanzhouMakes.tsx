"use client";

import { useState } from "react";

const categories = [
  {
    name: "Footwear",
    stars: 5,
    hook: "1 in 5 global sneakers made here — 7,000+ enterprises, over 1 billion pairs a year from Chendai Town alone",
    images: [
      { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", alt: "Sports shoes manufacturing in Jinjiang" },
      { src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80", alt: "Sneaker production line" },
    ],
    content: [
      "Chendai Town in Jinjiang covers just 38 square kilometres but produces over a billion pairs of sneakers every year. The local saying is: \"You can gather every component for a shoe within 30 minutes.\" Leather, textiles, synthetics, foams, rubber soles, hardware, moulds, and machinery — the entire supply chain sits within a 50 km radius.",
      "This is where Anta (¥62.4 billion revenue — surpassing Nike China), Xtep, Peak, 361°, and Hongxing Erke were all born. Jinjiang International Shoe & Textile City (晋江国际鞋纺城) anchors the trading side: 1,014 merchants, ¥49.5 billion in transactions in 2024, with 60% going to foreign trade. Typical factory MOQs run 500–3,000 pairs per style.",
    ],
    cta: "Explore Quanzhou footwear suppliers",
  },
  {
    name: "Menswear & Apparel",
    stars: 5,
    hook: "Asia's largest garment city — 4,782 shops, ¥30 billion annual transactions, and 1,300 factory-direct stores",
    images: [
      { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", alt: "Menswear wholesale market in Shishi" },
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Garment production in Quanzhou" },
    ],
    content: [
      "Shishi Garment City is one of China's \"Top 10 Garment Wholesale Markets\" — 600,000 sqm across 8 trading zones with 4,782 shops and 3,200+ merchants. Annual transaction value hits ¥30 billion. This is one of China's five major multinational garment procurement bases. Quanzhou's textiles and garments account for 10% of China's total output.",
      "The market runs along Xiling Road in Shishi, 25 km south of Quanzhou city centre and 12 km from Jinjiang Airport. Three adjacent markets cover the range: Qingchuang City (青创城) for online wholesale, China Menswear City (中国男装城) for formal and casual, and Shishi Wanghong Wangpi Market for trendy influencer styles. Combined, roughly 3,000 stalls with 1,300 factory-direct shops.",
    ],
    cta: "Explore Quanzhou menswear suppliers",
  },
  {
    name: "Stone & Plumbing",
    stars: 4,
    hook: "65% of China's stone slabs and 70% of its plumbing valves come from Nan'an — 'one in three taps is Nan'an-made'",
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Stone materials processing in Nan'an" },
      { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", alt: "Plumbing fixtures manufacturing" },
    ],
    content: [
      "Nan'an is the world's leading stone production and trading hub. The saying goes: \"Global stone focuses on China, Chinese stone focuses on Nan'an\" (世界石材看中国，中国石材看南安). 1,700+ stone companies, 250,000+ employees, 60% of China's stone slab production, and 70% domestic market share. It's Nan'an's first trillion-yuan industrial cluster.",
      "The plumbing side is equally dominant. Luncang Town (仑苍镇) is \"China's Plumbing Township\" and Yingdu Town (英都镇) is \"China's Plumbing Valve Base Town.\" 700+ sanitary ware enterprises, 100,000+ workers, 70%+ national market share for plumbing valves. One in three taps in China is Nan'an-made. Notable brands include HHSN / Huihuang (辉煌水暖, founded 1988) and JOYOU (中宇, founded 1979).",
    ],
    cta: "Explore Quanzhou stone & plumbing suppliers",
  },
  {
    name: "Sports Equipment & Brands",
    stars: 4,
    hook: "Anta (¥62.4B revenue), Peak, 361°, Xtep — China's biggest sports brands all born in one city",
    images: [
      { src: "https://images.unsplash.com/photo-1461896836934-bd45ba24e308?w=800&q=80", alt: "Sports equipment manufacturing" },
      { src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80", alt: "Athletic gear production" },
    ],
    content: [
      "Quanzhou is where China's domestic sportswear revolution began. Anta Sports (founded 1991, ¥62.36 billion revenue in 2023 — surpassing Nike China and Adidas China) is headquartered here, alongside Xtep (~¥14 billion, marathon/running focus), Peak Sports (~¥5 billion+, NBA partnerships with Dwight Howard and Tony Parker), 361 Degrees (~¥8 billion), and Hongxing Erke (~¥3 billion+).",
      "The sports equipment cluster extends beyond footwear into athletic apparel, sportswear accessories, gym equipment, and performance textiles. The factories that supply these brands also take OEM/ODM orders. Strong investment in automation and smart manufacturing, with intelligent production lines and IoT integration across the newer facilities.",
    ],
    cta: "Explore Quanzhou sports equipment suppliers",
  },
  {
    name: "Bags & Luggage",
    stars: 3,
    hook: "Multiple OEM/ODM factories with 15+ years of export experience in Jinjiang and Licheng",
    images: [
      { src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80", alt: "Bag manufacturing in Quanzhou" },
      { src: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80", alt: "Luggage production line" },
    ],
    content: [
      "Jinjiang and Licheng districts host a growing cluster of bag and luggage factories, many with 15+ years of export experience. Product range covers backpacks, travel bags, luggage, cooler bags, sports bags, and school bags. Typical factories run 200–400 workers with strong OEM/ODM capability.",
      "The proximity to raw material suppliers — textiles, hardware, zippers (SBS Zipper Science & Technology is based in Jinjiang) — keeps costs competitive. Key companies include Dankinbags (~320 workers), Xinwang Bags (10+ years), Flywon (15+ years), and Quanzhou Worldwide Bags.",
    ],
    cta: "Explore Quanzhou bag suppliers",
  },
  {
    name: "Toys",
    stars: 3,
    hook: "Growing cluster in Jinjiang — less dominant than Shantou, but competitive on sports-adjacent toys",
    images: [
      { src: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80", alt: "Toy manufacturing in Jinjiang" },
      { src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80", alt: "Toy production line" },
    ],
    content: [
      "Jinjiang has a growing toy manufacturing cluster, particularly strong in sports-adjacent products like balls, outdoor play equipment, and action figures. While it does not rival Shantou (Chenghai) as China's toy capital, the factories benefit from Quanzhou's broader manufacturing ecosystem — shared logistics, raw materials, and labour pool.",
      "China Haosin Food Market in Jinjiang (312 acres, 450,000 sqm) also covers toy and gift packaging materials, making it a useful one-stop for buyers combining food and toy sourcing.",
    ],
    cta: "Explore Quanzhou toy suppliers",
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

export default function WhatQuanzhouMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-quanzhou-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Quanzhou</span> Makes
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
