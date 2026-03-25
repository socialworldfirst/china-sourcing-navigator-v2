"use client";

import { useState } from "react";

const categories = [
  {
    name: "Lighting & LED",
    stars: 5,
    hook: "Guzhen produces 70% of China’s lighting — 30,000+ companies, from LED chips to crystal chandeliers",
    images: [
      { src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80", alt: "Crystal chandelier showroom in Guzhen" },
      { src: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80", alt: "LED lighting production line" },
    ],
    content: [
      "Guzhen town in Zhongshan produces roughly 70% of China’s and around half the world’s lighting products. 30,000+ registered lighting companies operate within this single town. The supply chain is completely vertical: LED chips, drivers, wire and cable, glass, acrylic, metal housings, and finished fixtures are all manufactured within a few kilometres of each other. Factory-direct prices run 10–20% of Western retail.",
      "The product range covers residential lighting (chandeliers, pendants, ceiling lights, wall sconces, table lamps), commercial lighting (track, downlights, panel lights, spotlights), outdoor and landscape lighting (street lights, garden lights, flood lights, solar), LED strip and rope lighting, smart lighting systems, and crystal chandeliers. Together with Henglan and Xiaolan, the cluster produces over 100 billion RMB in lighting output annually. 1688 search terms: 古镇灯饰, 中山LED灯具, 古镇吃顶灯.",
    ],
    cta: "Explore Zhongshan lighting suppliers",
  },
  {
    name: "Electrical Appliances",
    stars: 4,
    hook: "Three specialized towns — Dongfeng, Huangpu, and Nantou — each with a national designation for home appliances",
    images: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Small home appliance production" },
      { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", alt: "Kitchen appliance assembly line" },
    ],
    content: [
      "Zhongshan has three towns nationally designated for home appliance manufacturing. Dongfeng is China’s “Innovation Base of Small Home Appliances”. Huangpu holds the “Manufacturing Base of Chinese Home Appliances” title. Nantou is the “Base for Home Appliance Brands in China”. Each town has its own vertically integrated supply chain with part suppliers, assembly lines, and testing facilities within walking distance.",
      "Products include kitchen appliances (range hoods, ovens, disinfection cabinets), small appliances (electric kettles, multi-function pots, egg boilers, blenders, hand mixers), power supplies, adapters, transformers, and chargers. Major factories produce 300,000–500,000 units per year per product line. The cluster is part of the broader Guangdong smart home appliance ecosystem alongside Foshan and Shenzhen. 1688 search terms: 中山小家电, 中山厨房电器, 东凤电器.",
    ],
    cta: "Explore Zhongshan appliance suppliers",
  },
  {
    name: "Locks & Hardware",
    stars: 4,
    hook: "Xiaolan: China’s lock capital — one-third of China’s lock exports, 150+ smart lock manufacturers",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Precision hardware manufacturing" },
      { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", alt: "Smart lock assembly" },
    ],
    content: [
      "Xiaolan town is designated as both “China Hardware Manufacture Base” and “China Lock Export Base”. The cluster produces roughly one-third of China’s total lock exports and holds around 50% domestic market share. Annual output exceeds 10 billion RMB, with 150+ intelligent lock manufacturers producing 2 million smart lock sets per year. The supply chain runs from lock cylinders and cases through to finished biometric, keypad, and app-connected smart locks.",
      "Products include door locks (lever, mortise, electronic, fingerprint), smart and intelligent locks (biometric, keypad, Bluetooth and WiFi-connected), hinges, handles, architectural hardware, lock cylinders, door accessories, and security hardware. Notable manufacturers include Fuyu Hardware Products, Yangguang Lock Industry, and Legu Intelligent Technology. 1688 search terms: 小榄锁具, 中山智能锁, 小榄五金.",
    ],
    cta: "Explore Zhongshan hardware suppliers",
  },
  {
    name: "Furniture",
    stars: 3,
    hook: "Dachong: China’s mahogany furniture capital — rosewood craftsmanship since the 1970s",
    images: [
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", alt: "Traditional Chinese furniture showroom" },
      { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", alt: "Rosewood furniture craftsmanship" },
    ],
    content: [
      "Dachong town is officially designated as China’s “Specialized Town of Mahogany Furniture Production” and “Hometown for China Rosewood Sculpture.” The tradition traces back to workshops in the late 1970s. At its peak, Dachong controlled 60% of national mahogany furniture production. The town specializes in traditional Chinese-style furniture using rosewood and other premium hardwoods, with skilled artisan carving that combines furniture with sculpture.",
      "Products include mahogany and rosewood furniture (dining sets, cabinets, beds, desks), rosewood carvings and sculptures, and classical Chinese furniture reproductions. Export markets include the US, Japan, Canada, and Russia. Note: for modern or Western-style furniture, nearby Foshan (Lecong and Longjiang, 30 minutes away) is the dominant hub. Zhongshan’s strength is specifically in the traditional and high-craft segment. 1688 search terms: 大涌红木家具, 中山红木, 大涌家具.",
    ],
    cta: "Explore Zhongshan furniture suppliers",
  },
  {
    name: "Apparel",
    stars: 3,
    hook: "Shaxi: China’s most famous town for casual wear — 4,000+ clothing companies, Levi’s OEM base",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Casual wear production facility" },
      { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt: "Denim manufacturing" },
    ],
    content: [
      "Shaxi town holds the “China’s Most Famous Town for Casual Wear” designation, awarded in 2002. Over 4,000 clothing companies operate here, including 710 manufacturers employing roughly 43,000 workers. The town hosts the annual Chinese International Casual Wear Trade Show and specializes in casual wear, blue jeans, and shirts. Adjacent Dachong is a world jeans manufacturing centre — Levi’s has OEM operations here.",
      "The industry is upgrading toward fashion, branding, and what the government calls a “Modern Fashion Industry Cluster Fleet.” For buyers, Shaxi offers competitive pricing on casual basics with factory-direct access. However, for high-fashion, premium garments, or broad apparel sourcing, Guangzhou (Shisanhang, Baima, Shahe) remains the dominant hub. Zhongshan’s apparel strength is specifically in casual wear and denim. 1688 search terms: 沙溪休闲装, 中山牛仔裤, 沙溪服装.",
    ],
    cta: "Explore Zhongshan apparel suppliers",
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

export default function WhatZhongshanMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-zhongshan-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Zhongshan</span> Makes
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
