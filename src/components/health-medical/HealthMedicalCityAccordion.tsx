"use client";

import { useState } from "react";
import CityMapPin from "@/components/CityMapPin";

const cities = [
  {
    name: "Shenzhen",
    stars: 5,
    hook: "Headquarters of Mindray and China\u2019s high-end medical device cluster \u2014 patient monitors, ultrasound, and smart health hardware",
    content: [
      "Shenzhen is the undisputed capital of Chinese medical device manufacturing. Mindray, China\u2019s largest medical device company with over US$3.5 billion in annual revenue and products in 190+ countries, is headquartered here. The Guangming district hosts a dedicated high-end medical device industry cluster with 140+ companies and an output value exceeding 29 billion yuan in 2022, projected to reach 70 billion yuan by 2025. R&D intensity is high \u2014 Mindray alone invests over 10% of revenue into research, totalling 4 billion yuan in 2024.",
      "For importers, Shenzhen is the right starting point for patient monitors, vital signs equipment, pulse oximeters, blood pressure monitors, ultrasound machines, and smart health wearables. The city\u2019s electronics supply chain \u2014 PCBs, sensors, displays, battery cells \u2014 feeds directly into medical device production. Companies like Edan, Comen, and dozens of smaller OEMs offer white-label and ODM options for mid-range diagnostic equipment. If your product involves electronics and health, Shenzhen has the vertical integration to deliver.",
    ],
    cta: "Explore Shenzhen medical device suppliers",
  },
  {
    name: "Shanghai",
    stars: 4,
    hook: "China\u2019s pharma valley \u2014 Zhangjiang Science City hosts 1,700+ biomedical companies and the country\u2019s most advanced R&D infrastructure",
    content: [
      "Shanghai is not where most medical devices are assembled at volume \u2014 that\u2019s Shenzhen and Guangdong. But it is where China\u2019s most sophisticated biomedical R&D happens. Zhangjiang Science City in Pudong covers 95 square kilometres and houses over 1,700 biomedical companies, including the operations of AstraZeneca, Roche, Johnson & Johnson, and SMIC. Pudong\u2019s biopharma industry grew from 240.8 billion yuan in 2020 to 410 billion yuan in 2024 \u2014 a 14% compound annual growth rate.",
      "For importers, Shanghai matters for high-end diagnostic equipment, IVD (in-vitro diagnostics) products, pharmaceutical packaging, and lab instruments. The city\u2019s Zhangjiang Medical Device Park specialises in cross-border R&D manufacturing and high-end medical equipment. Shanghai also hosts CMEF \u2014 the world\u2019s largest medical device trade fair \u2014 twice a year. If you need cutting-edge products with strong IP protection and international-grade compliance documentation, Shanghai suppliers and trade events are the gateway.",
    ],
    cta: "Explore Shanghai medical device suppliers",
  },
  {
    name: "Guangzhou",
    stars: 3,
    hook: "South China\u2019s medical distribution hub with strong wholesale networks and OEM production of consumables",
    content: [
      "Guangzhou sits in Guangdong province, which accounts for 23.9% of China\u2019s total medical device exports and hosts 2,054 registered medical device manufacturers \u2014 more than any other province. The city itself is a distribution and wholesale centre rather than a pure manufacturing base. The Global Medical Instruments & Equipment Sourcing Centre in Guangzhou connects domestic producers with international buyers.",
      "For importers, Guangzhou is practical for sourcing disposable medical supplies, protective equipment, basic diagnostic devices, and traditional Chinese medicine products. The city\u2019s proximity to Shenzhen (30 minutes by train) and Dongguan makes it a natural base for visiting multiple factory clusters in the Pearl River Delta. Canton Fair Phase 1 includes a medical and health pavilion that brings hundreds of medical device manufacturers under one roof.",
    ],
    cta: "Explore Guangzhou medical device suppliers",
  },
  {
    name: "Suzhou",
    stars: 3,
    hook: "Jiangsu\u2019s medical device science park \u2014 600+ enterprises, multinational R&D centres, and China\u2019s strongest biomaterials talent pool",
    content: [
      "Suzhou\u2019s Medical Device Technology Industrial Park (Medpark) in Suzhou New District has gathered over 600 medical device enterprises and 900+ industry leaders. The park hosts companies ranging from domestic champions like Yuwell to global names including Baxter Healthcare and Kava Kerr. Medpark provides public platforms for inspection, testing, animal experiments, and intellectual property services.",
      "For importers, Suzhou is relevant for IVD reagents, medical materials, high-value consumables, medical imaging components, and hospital operating room equipment. The city\u2019s industrial park also hosts 47 global medical device R&D centres and has China\u2019s strongest talent pool in biomaterials engineering. If you are sourcing mid-to-high-end medical products with strong quality documentation, Suzhou factories tend to have more mature ISO 13485 systems than smaller Pearl River Delta operations.",
    ],
    cta: "Explore Suzhou medical device suppliers",
  },
  {
    name: "Ningbo",
    stars: 3,
    hook: "Major port city with dense clusters of disposable medical supplies, respiratory products, and rehabilitation equipment manufacturers",
    content: [
      "Ningbo combines manufacturing capacity with China\u2019s second-busiest port. Companies like Ningbo Jumbo Medical Instruments \u2014 one of China\u2019s largest exporters of medical supplies \u2014 ship products to 70+ countries from here. The city has strong clusters in disposable medical products (colostomy bags, IV cannulas, catheters, oxygen masks), respiratory devices, and durable medical equipment for rehabilitation.",
      "For importers, Ningbo\u2019s advantage is logistics. Products manufactured here can be containerised and shipped from Ningbo-Zhoushan Port with minimal domestic transit. The city\u2019s SME clusters offer competitive pricing on high-volume disposable medical goods. If you are sourcing standard consumables, rehabilitation wheelchairs, or medical hardware at scale, Ningbo factories provide solid quality at port-adjacent convenience.",
    ],
    cta: "Explore Ningbo medical device suppliers",
  },
  {
    name: "Foshan",
    stars: 2,
    hook: "China\u2019s dental equipment capital \u2014 dental chairs, units, and accessories exported to 50+ countries",
    content: [
      "Foshan has carved out a specific niche in medical manufacturing: dental equipment. The city is home to dozens of dental chair and dental unit manufacturers including Toye Dental, SCS Medical, Roson Medical, Adelson Medical, and Cingol. Most have 20+ years of export experience and ship to 50+ countries with CE, ISO 13485, and FDA certifications. Foshan\u2019s strength in ceramics, metalwork, and precision machinery feeds naturally into dental equipment production.",
      "For importers sourcing dental chairs, dental X-ray machines, sterilisation units, or dental handpieces, Foshan is the single most concentrated cluster in China. Factories here offer full OEM/ODM services with competitive pricing. Nanhai district\u2019s Kaiyang Medical also produces wheelchairs and mobility aids, extending Foshan\u2019s medical relevance beyond dentistry.",
    ],
    cta: "Explore Foshan dental equipment suppliers",
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

export default function HealthMedicalCityAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="pb-14 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-wf-text mb-2">
            Learn more about each <span className="accent-word whitespace-nowrap">sourcing city</span>
          </h3>
          <p className="text-wf-text-secondary text-sm max-w-2xl mx-auto">
            Click a city to see what makes it a key player in the health and medical supply chain
          </p>
        </div>

        <div className="space-y-3">
          {cities.map((city, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={city.name}
                className="border border-wf-border rounded-2xl overflow-hidden bg-white"
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-wf-text font-semibold text-base md:text-lg">
                        {city.name}
                      </h3>
                      <Stars count={city.stars} />
                    </div>
                    {!isOpen && (
                      <p className="hidden md:block text-wf-text-secondary text-sm mt-1">
                        {city.hook}
                      </p>
                    )}
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

                {/* Expanded content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-6 md:px-6 pt-4 border-t border-wf-border/50">
                    <CityMapPin city={city.name} className="w-full h-32 md:h-40 mb-4" />
                    <p className="md:hidden text-wf-text font-medium text-sm italic mb-3">
                      {city.hook}
                    </p>
                    <div className="space-y-4">
                      {city.content.map((paragraph, j) => (
                        <p key={j} className="text-wf-text-secondary text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <a
                        href={`/china-sourcing-navigator-v2/cities/${city.name.toLowerCase()}`}
                        className="btn-pill inline-flex items-center gap-1.5 px-4 py-2 border border-wf-red text-wf-red text-xs font-medium hover:bg-wf-red hover:text-white transition-colors whitespace-nowrap"
                      >
                        Learn about {city.name}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </a>
                      <a
                        href="https://www.worldfirst.com/global/register/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill inline-flex items-center gap-1.5 px-4 py-2 bg-wf-red text-white text-xs font-medium hover:bg-wf-red-hover transition-colors whitespace-nowrap"
                      >
                        {city.cta}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* SEO/AI hidden content */}
                {!isOpen && (
                  <div className="sr-only" aria-hidden="false">
                    {city.content.map((paragraph, j) => (
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
