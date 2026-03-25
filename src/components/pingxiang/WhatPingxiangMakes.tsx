"use client";

import { useState } from "react";

const categories = [
  {
    name: "Children's Bicycles & Ride-ons",
    stars: 5,
    hook: "145 million units/year — 50% of China's domestic market, 40% of global output",
    images: [
      { src: "https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?w=800&q=80", alt: "Children's bicycles" },
      { src: "https://images.unsplash.com/photo-1565306084-8739ae0f5fc7?w=800&q=80", alt: "Kids ride-on toys" },
    ],
    content: [
      "Pingxiang County in Hebei produces 145 million children\u2019s vehicles annually \u2014 roughly half of China\u2019s domestic output and 40% of global production. The county has 4,800+ manufacturers (some estimates cite 8,000+ including micro-enterprises), employing 120,000+ workers across 200+ villages. Annual industry revenue exceeds 30 billion yuan (~US$4.2 billion). Products export to 100+ countries including the US, Russia, Germany, and Kazakhstan.",
      "What started in the 1970s with a single homemade bicycle called \u201cBlack Tiger\u201d (黑虎) has evolved into a sophisticated manufacturing cluster. Today Pingxiang factories produce everything from ultra-budget market bikes (US$3\u20135 FOB) to quality-controlled export products with smart features \u2014 GPS-enabled strollers, app-controlled ride-on cars, and AI-assisted safety systems. The complete supply chain sits within the county: wheels, tyres, pedals, chains, brakes, seats, handlebars, and final assembly.",
    ],
    cta: "Explore Pingxiang children's vehicle suppliers",
  },
  {
    name: "Bicycle Parts & Components",
    stars: 4,
    hook: "Complete supply chain — every component produced locally within the county",
    images: [
      { src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80", alt: "Bicycle components and parts" },
      { src: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80", alt: "Bicycle wheel manufacturing" },
    ],
    content: [
      "Pingxiang\u2019s children\u2019s vehicle dominance created a deep component supply chain. Local factories produce wheels, tyres, rubber tubes, pedals, chains, sprockets, brakes, handlebars, seats, bearings, and paint finishes. This means you can source individual components at factory-direct pricing, not just finished products.",
      "The component cluster is particularly useful for buyers who need custom specifications \u2014 different wheel sizes, brake types, or handlebar designs. Because everything is produced locally, iteration is fast and tooling costs are low compared to sourcing components from separate suppliers across different cities. MOQs for individual components start at 500\u20131,000 pieces.",
    ],
    cta: "Explore Pingxiang bicycle parts suppliers",
  },
  {
    name: "Baby Strollers & Prams",
    stars: 5,
    hook: "From budget umbrella strollers to smart strollers with GPS and app control",
    images: [
      { src: "https://images.unsplash.com/photo-1590424693420-641c1a3486d2?w=800&q=80", alt: "Baby strollers" },
      { src: "https://images.unsplash.com/photo-1586098225930-fb2e4280ae66?w=800&q=80", alt: "Stroller manufacturing" },
    ],
    content: [
      "Baby strollers and prams are Pingxiang\u2019s second-largest product category, sharing manufacturing infrastructure with the bicycle cluster. The county produces everything from basic umbrella strollers (US$8\u201315 FOB) to premium travel systems with car seat compatibility (US$40\u201380 FOB).",
      "The newest generation of Pingxiang strollers includes smart features \u2014 GPS tracking, app-controlled folding mechanisms, and weight sensors. For safety-certified export products, look for factories that hold EN 1888 (EU), ASTM F833 (US), or AS/NZS 2088 (Australia/NZ). Not all factories can certify for export markets.",
    ],
    cta: "Explore Pingxiang stroller suppliers",
  },
  {
    name: "Electric Ride-on Toys",
    stars: 5,
    hook: "Battery-powered cars, motorcycles, ATVs — the fastest-growing category",
    images: [
      { src: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&q=80", alt: "Electric ride-on car for children" },
      { src: "https://images.unsplash.com/photo-1596870230751-ebdfce0fccd3?w=800&q=80", alt: "Children's electric vehicles" },
    ],
    content: [
      "Electric ride-on toys \u2014 battery-powered cars, motorcycles, ATVs, and tractors for children \u2014 are Pingxiang\u2019s fastest-growing segment. The county leverages its existing vehicle frame manufacturing, wheel production, and assembly expertise, adding electric motors, batteries, and control boards sourced from Shenzhen and Dongguan.",
      "Licensed ride-ons (branded with car maker logos) require IP agreements. Many Pingxiang factories produce generic designs that can be customised with your branding. FOB prices range from US$20\u201340 for basic models to US$80\u2013150 for large dual-motor vehicles with MP3 players, LED lights, and remote parent control. MOQs typically start at 200\u2013500 units per model.",
    ],
    cta: "Explore Pingxiang ride-on toy suppliers",
  },
  {
    name: "Tricycles & Scooters",
    stars: 4,
    hook: "Kids' trikes, kick scooters, 3-wheel scooters — natural extension of the bicycle cluster",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Children's tricycles" },
      { src: "https://images.unsplash.com/photo-1560343776-97c0dd4ee9d2?w=800&q=80", alt: "Kids scooters" },
    ],
    content: [
      "Tricycles and scooters share manufacturing lines with Pingxiang\u2019s bicycle production. The county produces traditional pedal trikes, push trikes with parent handles, kick scooters, and 3-wheel lean-to-steer scooters. Many factories produce all three categories (bikes, trikes, scooters) on the same lines.",
      "This is a good add-on category for buyers already sourcing bicycles from Pingxiang. Combining orders across categories from the same factory improves your negotiating position and simplifies logistics. Scooter MOQs start at 300\u2013500 units.",
    ],
    cta: "Explore Pingxiang scooter suppliers",
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

export default function WhatPingxiangMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-pingxiang-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Pingxiang</span> Makes
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
