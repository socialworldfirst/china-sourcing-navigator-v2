"use client";

import { useState } from "react";

const categories = [
  {
    name: "Plastics & Moulds",
    stars: 5,
    hook: "South China\u2019s largest plastic manufacturing cluster \u2014 precision mould capital",
    images: [
      { src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80", alt: "Plastic injection moulding machine" },
      { src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80", alt: "Precision mould workshop" },
    ],
    content: [
      "Dongguan is the precision mould capital of southern China. Changping, Hengli, and Chang\u2019an house thousands of factories specializing in plastic injection moulding, die-casting, and CNC machining. Mould costs range from US$2,000 for simple two-part moulds to US$15,000+ for multi-cavity production tooling. Hengli alone has built an entire mould industry cluster with dedicated government support and shared testing facilities.",
      "The reason Dongguan dominates: the full supply chain sits within 30 minutes. Raw plastic pellets, mould steel, CNC machining centres, surface treatment workshops, and assembly lines all cluster in the same towns. A prototype mould can be cut in 7\u201310 days. Production moulds take 3\u20135 weeks. MOQs start at 1,000\u20135,000 pieces, though overcapacity since 2023 has pushed many factories to accept 600\u2013800 units.",
    ],
    cta: "Explore Dongguan plastics suppliers",
  },
  {
    name: "Electronics Assembly",
    stars: 5,
    hook: "Trillion-yuan cluster \u2014 1 in 5 smartphones worldwide built here",
    images: [
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", alt: "Electronics assembly line" },
      { src: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800&q=80", alt: "PCB circuit board manufacturing" },
    ],
    content: [
      "Dongguan\u2019s electronic information industry crossed the \u00A51 trillion mark, making it the city\u2019s largest sector. Chang\u2019an, Tangxia, Shijie, Liaobu, Fenggang, and Qingxi collectively house 10,000+ electronics factories. This is where Huawei runs its Ox Horn Campus R&D centre, and where OPPO and Vivo have major production lines. Smartphones and mechanical products account for 80%+ of Dongguan\u2019s export value.",
      "For importers, Dongguan\u2019s electronics cluster is strongest in PCBA assembly, power supplies, connectors, cables, Bluetooth modules, and consumer device assembly. Unlike Shenzhen\u2019s Huaqiangbei (which is a trading hub), Dongguan is where the actual manufacturing happens. MOQs for electronics assembly run 500\u20135,000 pieces, and have dropped 15\u201325% since 2023 due to overcapacity.",
    ],
    cta: "Explore Dongguan electronics suppliers",
  },
  {
    name: "Furniture & Home",
    stars: 4,
    hook: "2,000+ brands on a 5 km Furniture Avenue \u2014 China\u2019s #1 furniture export town nearby",
    images: [
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", alt: "Furniture showroom" },
      { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", alt: "Modern furniture manufacturing" },
    ],
    content: [
      "Houjie town is the furniture trade centre: a 5 km Furniture Avenue lined with 600+ furniture companies, showrooms, and raw material suppliers employing 100,000+ people. The Dongguan Furniture Expo Center on Furniture Avenue hosts the annual Famous Furniture Fair (3F) \u2014 1,000+ brands across multiple halls covering home, bedroom, living, dining, mattresses, and wood machinery.",
      "Dalingshan town handles the export manufacturing side. Designated \u201cChina\u2019s #1 Furniture Export Town,\u201d Dalingshan has 500+ export-oriented furniture factories. The split is clear: visit Houjie to compare finished products and attend the 3F Fair, then place production orders with Dalingshan factories at 20\u201330% below showroom prices. MOQs run 50\u2013200 pieces for stock items, higher for custom work.",
    ],
    cta: "Explore Dongguan furniture suppliers",
  },
  {
    name: "Toys & Games",
    stars: 4,
    hook: "Largest toy export base in China \u2014 1 in 3 Barbie dolls made here",
    images: [
      { src: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80", alt: "Toy manufacturing facility" },
      { src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80", alt: "Toy production line" },
    ],
    content: [
      "Dongguan is China\u2019s largest toy export base. One in three Barbie dolls worldwide is manufactured here. 75% of global toy exports pass through the city. Chang\u2019an and Changping are the primary toy manufacturing towns, producing everything from plastic action figures and board games to plush toys and electronic learning devices. Major international toy brands have contracted Dongguan factories for decades.",
      "The toy sector here is factory-direct, not trading-company driven. Most factories handle their own production from raw material (plastic pellets, fabric, electronics) through assembly, painting, and packaging. MOQs typically run 1,000\u20135,000 pieces, higher for licensed or branded products. The advantage over Chenghai (Shantou) \u2014 China\u2019s other toy capital \u2014 is that Dongguan factories are better set up for international compliance testing and export documentation.",
    ],
    cta: "Explore Dongguan toy suppliers",
  },
  {
    name: "Footwear",
    stars: 4,
    hook: "China\u2019s largest shoe-making base \u2014 500 million+ pairs exported annually",
    images: [
      { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", alt: "Shoe manufacturing" },
      { src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", alt: "Footwear production line" },
    ],
    content: [
      "Houjie town is designated the \u201cWorld Footwear HQ Base\u201d by the Asian Footwear Industry Association. Dongguan exports 500 million+ pairs of shoes annually \u2014 roughly 1 in 10 pairs of sports shoes worldwide. Houjie concentrates shoe factories, shoe material suppliers, and shoe machinery manufacturers in one district. Haopan Shoe Plaza on Houjie Road is the main trading centre for finished shoes and raw materials.",
      "The footwear supply chain in Houjie covers every stage: synthetic leather, rubber soles, textile uppers, adhesives, shoe moulds, stitching, and final assembly. Sports shoes, casual shoes, and work boots are the strongest categories. MOQs run 300\u20131,000 pairs per style and size. The annual DFM (Greater Bay Area International Footwear Machinery & Material Industry Fair) in March draws 550 exhibitors across 50,000 sqm.",
    ],
    cta: "Explore Dongguan footwear suppliers",
  },
  {
    name: "Apparel & Knitwear",
    stars: 3,
    hook: "Humen: Southern China\u2019s Clothing Kingdom. Dalang: 900 million sweaters a year",
    content: [],
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Clothing wholesale market" },
      { src: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800&q=80", alt: "Knitwear production" },
    ],
    cta: "Explore Dongguan apparel suppliers",
  },
  {
    name: "Paper & Packaging",
    stars: 3,
    hook: "Zhongtang and Machong \u2014 established printing and custom packaging cluster",
    content: [],
    images: [
      { src: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&q=80", alt: "Paper packaging production" },
      { src: "https://images.unsplash.com/photo-1607166452427-7e4477c5e768?w=800&q=80", alt: "Printing and packaging facility" },
    ],
    cta: "Explore Dongguan packaging suppliers",
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

export default function WhatDongguanMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-dongguan-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Dongguan</span> Makes
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
