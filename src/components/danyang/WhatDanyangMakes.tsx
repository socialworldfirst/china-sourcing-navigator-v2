"use client";

import { useState } from "react";

const categories = [
  {
    name: "Eyewear & Optical Lenses",
    stars: 5,
    hook: "75% of China's lenses, 50% of the world's — 400 million spectacle lenses a year",
    images: [
      { src: "https://images.unsplash.com/photo-1574258495973-f7e5dab80fd0?w=800&q=80", alt: "Optical lenses manufacturing" },
      { src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80", alt: "Eyewear display" },
    ],
    content: [
      "Danyang produces 400 million+ spectacle lenses annually — roughly 75% of China's total output and 50% of the world's. The city has 1,600+ enterprises in the eyewear ecosystem, including 600+ manufacturers and 1,000+ supporting merchants. The industry employs 50,000+ people and generates 20 billion yuan (~US$2.8 billion) in annual revenue.",
      "What started as a cottage industry in the 1980s has evolved into a sophisticated manufacturing hub. Danyang factories produce everything from basic resin lenses to advanced progressive multifocals, photochromic lenses, and anti-blue-light coatings. The full supply chain sits within the city: raw optical materials, lens grinding, coating, frame manufacturing, and finished assembly. This vertical integration is why Danyang lenses consistently undercut European brands by 60–80% on equivalent quality tiers.",
    ],
    cta: "Explore Danyang eyewear suppliers",
  },
  {
    name: "Optical Frames",
    stars: 5,
    hook: "100 million+ frames per year — metal, acetate, titanium, TR90",
    images: [
      { src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80", alt: "Spectacle frames variety" },
      { src: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80", alt: "Eyeglass frame manufacturing" },
    ],
    content: [
      "Danyang produces over 100 million pairs of spectacle frames annually — roughly a third of China's total output. The range covers every material: metal alloy, pure titanium, beta-titanium, acetate (板材), TR90, ultem, and stainless steel. Many factories handle both lenses and frames, but the specialisation is deep enough that dedicated frame factories offer better quality and pricing.",
      "For fashion-forward acetate frames, Danyang competes with Wenzhou and Shenzhen. For titanium and metal frames, Danyang has a strong position. MOQs for stock frames start at 100–300 pieces. Custom mould tooling for new frame designs runs $2,000–$8,000 depending on complexity. OEM/ODM is standard — most factories are set up to produce under your brand.",
    ],
    cta: "Explore Danyang frame suppliers",
  },
  {
    name: "Sunglasses",
    stars: 4,
    hook: "Strong overlap with optical manufacturing — polarised, photochromic, fashion sunglasses",
    images: [
      { src: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80", alt: "Sunglasses production" },
      { src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80", alt: "Sunglasses wholesale" },
    ],
    content: [
      "Many Danyang factories produce both prescription eyewear and non-prescription sunglasses on the same production lines. The city has particular strength in polarised lenses and photochromic sunglasses, leveraging the same coating technology used for optical lenses. Budget polarised sunglasses wholesale from $1.50–$3 FOB.",
      "For high-fashion sunglasses with complex acetate frames, Wenzhou and Shenzhen may offer more design variety. But for volume production of polarised, sport, and mid-range fashion sunglasses, Danyang's lens expertise gives it a cost advantage that's hard to beat.",
    ],
    cta: "Explore Danyang sunglasses suppliers",
  },
  {
    name: "Precision Tools & Optical Equipment",
    stars: 3,
    hook: "Lens grinding machines, coating equipment, optical instruments — the tools that make the lenses",
    images: [
      { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", alt: "Precision optical equipment" },
      { src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", alt: "Lens manufacturing machinery" },
    ],
    content: [
      "Danyang's eyewear dominance created a secondary cluster in optical manufacturing equipment. Local companies produce lens grinding machines, AR/anti-reflective coating systems, edging machines, and quality inspection instruments. This equipment is used domestically and exported to emerging eyewear markets in Southeast Asia and Africa.",
      "For buyers sourcing optical equipment rather than eyewear itself, Danyang offers factory-direct pricing on machines that would cost 3–5x more from European or Japanese manufacturers. Quality varies — specify ISO standards and request performance guarantees before ordering.",
    ],
    cta: "Explore Danyang optical equipment suppliers",
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

export default function WhatDanyangMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-danyang-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Danyang</span> Makes
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
