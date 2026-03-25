"use client";

import { useState } from "react";

const categories = [
  {
    name: "IT & Software",
    stars: 5,
    hook: "Tianfu Software Park: 600+ companies, 34 Fortune 500 tenants, 60,000 IT workers",
    images: [
      { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80", alt: "Software development and IT services" },
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", alt: "Data centre and cloud computing" },
    ],
    content: [
      "Chengdu is China's #2 software city after Beijing, and the premier IT outsourcing destination in Western China. Tianfu Software Park alone houses 600+ companies including IBM, SAP, Siemens, Wipro, Dell, Huawei, Alibaba, and Tencent. 34 Fortune 500 companies operate from the park. The Hi-Tech Zone has 3,315 approved high-tech enterprises and a talent pool of 700,000+.",
      "The opportunity for international buyers isn't hardware — it's services. Software development, BPO, shared services centres, IC design, and digital entertainment. Chengdu's labour costs run 30–40% below Beijing and Shanghai for equivalent skill levels, which is why multinationals have been moving back-office and R&D operations here since 2005. The city also tests 50% of the world's CPUs and manufactures 60% of iPads through Foxconn's local campus.",
    ],
    cta: "Explore Chengdu IT partners",
  },
  {
    name: "Aerospace & Defence",
    stars: 4,
    hook: "Chengdu Aircraft Corporation — J-10, J-20, plus Boeing and Airbus commercial parts",
    images: [
      { src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80", alt: "Aerospace manufacturing" },
      { src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80", alt: "Precision engineering components" },
    ],
    content: [
      "Chengdu Aircraft Corporation (CAC), founded in 1958, is China's second-largest fighter aircraft facility and produces roughly a third of national output. Key platforms include the J-10 light multi-role fighter, the J-20 fifth-generation stealth fighter, and the JF-17 Thunder co-developed with Pakistan. The Chengdu Engine Group is a major aero-engine manufacturer with 31 billion+ yuan in assets and 50,000+ employees.",
      "Most aerospace production is state-controlled and off-limits to commercial sourcing. However, Chengdu also produces Boeing 757 empennage sections and Airbus component parts, creating civilian aerospace supply chain opportunities. Precision machining, CNC parts, titanium alloy processing, and avionics sub-assemblies are the accessible categories for international buyers. Siemens has established a Smart Manufacturing Innovation Center in the Hi-Tech Zone.",
    ],
    cta: "Explore Chengdu aerospace suppliers",
  },
  {
    name: "Biotech & Pharma",
    stars: 4,
    hook: "FDA-certified peptide manufacturing, growing API cluster, Takeda innovation centre",
    images: [
      { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", alt: "Pharmaceutical laboratory" },
      { src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80", alt: "Biotech research facility" },
    ],
    content: [
      "Chengdu's biotech cluster is growing fast. Kanghong Pharmaceutical (founded 1996, Shenzhen-listed, ~$6 billion market cap) leads in ophthalmic and CNS medicines. Shengnuo Biopharm specialises in large-scale peptide and amino acid drug production with US FDA certification. Kelun-Biotech has 30+ innovative drug projects with 4 approved for marketing and 10+ in clinical trials covering solid tumours, autoimmune, and metabolic diseases.",
      "For international pharmaceutical buyers, the opportunity is in API (Active Pharmaceutical Ingredient) sourcing, contract peptide manufacturing, and CDMO services. Shengnuo's FDA certification means their production meets Western regulatory standards. Takeda announced a China Innovation Center in Chengdu in January 2025, further validating the cluster. The Chengdu Hi-Tech Zone is designated as a national biotech industry base.",
    ],
    cta: "Explore Chengdu biotech suppliers",
  },
  {
    name: "Food & Agriculture",
    stars: 3,
    hook: "Sichuan peppercorns, doubanjiang, tea — the flavours that built one of China's Eight Great Cuisines",
    images: [
      { src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80", alt: "Sichuan peppercorns and spices" },
      { src: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80", alt: "Chinese tea production" },
    ],
    content: [
      "Food is Chengdu's most accessible sourcing category for general importers. Sichuan cuisine is one of China's Eight Great Cuisines, and the ingredients that define it are exported globally. Pixian doubanjiang (郫县豆瓣酱) — the fermented chili bean paste from Pixian district — is the foundation ingredient. Sichuan peppercorns (花椒) are the region's signature spice. Sichuan province is also one of China's top tea-producing regions, with Chengdu as the distribution hub.",
      "Wukuaishi Market handles tea, spices, dried goods, and chili products at wholesale scale. The China Food & Drinks Fair (CFDF), held in Chengdu each March, is Asia's largest F&B exhibition — 6,500+ exhibitors, 320,000+ visitors, 320,000+ sqm. Processed foods, preserved meats, dried foods, and ready-to-cook seasoning packets are all available for export sourcing through 1688 and direct from Chengdu-based manufacturers.",
    ],
    cta: "Explore Chengdu food suppliers",
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

export default function WhatChengduMakes() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="what-chengdu-makes" className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            What <span className="accent-word">Chengdu</span> Makes
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
