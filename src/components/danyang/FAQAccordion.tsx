"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    category: "Getting started in Danyang",
    faqs: [
      { q: "What makes Danyang the eyewear capital of the world?", a: "Danyang produces 400 million+ spectacle lenses annually \u2014 75% of China\u2019s total and roughly 50% of global output. The city also produces 100 million+ frames per year. With 1,600+ enterprises, 600+ manufacturers, and 50,000+ industry employees, Danyang has the world\u2019s deepest eyewear supply chain. The full production chain sits within the city: raw optical materials, lens grinding, coating, frame manufacturing, and finished assembly." },
      { q: "What products is Danyang best known for?", a: "Spectacle lenses are Danyang\u2019s core strength \u2014 resin lenses, progressive multifocals, photochromic lenses, anti-blue-light coatings, and polarised lenses. The city also produces metal, titanium, acetate, and TR90 frames, sunglasses, and optical manufacturing equipment. The lens category is where Danyang has no competition globally." },
      { q: "What\u2019s the difference between Danyang lenses and premium brands like Essilor or Zeiss?", a: "Many Danyang factories produce lenses that meet the same optical standards as European brands. The price difference (60\u201380% lower) comes from lower labour costs, vertical integration, and the absence of brand markup. Some Danyang factories are OEM suppliers to international brands. That said, the cheapest Danyang lenses cut corners on coating quality and optical consistency \u2014 specify your quality tier clearly." },
      { q: "Can I visit Danyang as a day trip from Shanghai or Nanjing?", a: "Yes. Danyang is 1.5 hours from Shanghai Hongqiao by bullet train (G-train) and about 1 hour from Nanjing by high-speed rail. Danyang Station is on the Shanghai\u2013Nanjing intercity railway. Many buyers base themselves in Shanghai or Nanjing and day-trip to Danyang for the Optical Center and pre-arranged factory visits." },
      { q: "Do I need to speak Chinese to source from Danyang?", a: "English is very limited in Danyang, even more so than major cities. Export-focused factories may have basic English-speaking staff, but for market visits and factory negotiations, a Mandarin-speaking agent or translator is essential. Budget 500\u2013800 CNY/day for a local interpreter." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 search terms should I use for Danyang eyewear?", a: "丹阳眼镜 (Danyang glasses) for general search. 丹阳镜片 (Danyang lenses) for lens sourcing. 丹阳镜架 (Danyang frames) for frames. 树脂镜片 丹阳 (resin lenses Danyang) for the most common lens type. 防蓝光镜片 (anti-blue-light lenses) for trending products. 变色镜片 丹阳 (photochromic lenses) for smart lenses. 眼镜工厂 丹阳 OEM for OEM sourcing." },
      { q: "How do I pay Danyang suppliers on 1688?", a: "1688 payments are in CNY. Use 1688 World Pay (WorldFirst\u2019s integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via WorldFirst\u2019s World Account. For eyewear orders, always pay to the company\u2019s registered business account, not personal accounts." },
      { q: "Is 1688 cheaper than Alibaba for Danyang eyewear?", a: "Yes. 1688 prices are typically 30\u201360% lower than Alibaba.com for the same products from the same Danyang factories. The savings come from removing export markups, English sales team overhead, and platform fees. The tradeoff: Chinese-only interface, CNY payment required, and no built-in international buyer protection." },
    ],
  },
  {
    category: "Trade shows & visiting",
    faqs: [
      { q: "What optical trade shows should I attend for Danyang sourcing?", a: "SIOF (Shanghai International Optics Fair, March) is the most important \u2014 900 exhibitors, 70,000 visitors, and heavy Danyang manufacturer attendance. WOF (Wenzhou, May 8\u201310) features all four China Eyewear Production Bases. CIOF (Beijing, September 8\u201310) is China\u2019s largest optical trade show. Some Danyang companies also exhibit at MIDO in Milan." },
      { q: "Where is Danyang Glasses City and how do I get there?", a: "Danyang International Optical Center (丹阳国际眼镜城) is in Danyang city centre. Take a G-train to Danyang Station, then taxi to the Optical Center (approximately 15 minutes). The center has 600+ shops and receives 2 million+ visitors annually. Search 丹阳眼镜城 on Baidu Maps or Amap for navigation." },
      { q: "What\u2019s the best time of year to visit Danyang?", a: "Spring (March\u2013May) or autumn (September\u2013November) for pleasant weather and active production. March aligns with SIOF in Shanghai \u2014 visit the fair then take the train to Danyang. Avoid Chinese New Year (January\u2013February) and the first week of October (National Day holiday)." },
      { q: "Where should I stay when visiting Danyang?", a: "Danyang city centre (near the Optical Center) for convenience. Alternatively, base yourself in Zhenjiang (30 minutes by car) for better hotel options, or Nanjing (1 hour by train) or Shanghai (1.5 hours) for international-standard accommodation. Always arrange factory visits in advance \u2014 most are not walk-in friendly." },
    ],
  },
  {
    category: "Pricing, quality & certification",
    faqs: [
      { q: "What are the minimum order quantities for Danyang lens factories?", a: "Stock lenses (standard prescriptions): 100\u2013500 pieces. Custom prescription lenses: higher minimums, typically 500\u20131,000+. Stock frames: 100\u2013300 pieces. Custom mould tooling for new frame designs: $2,000\u2013$8,000 depending on complexity. Many factories are flexible on MOQs for first orders." },
      { q: "What certifications should I look for when sourcing lenses from Danyang?", a: "For EU export: CE marking, EN ISO 12312-1 (sunglasses), EN ISO 14889 (ophthalmic lenses). For US: FDA registration (21 CFR 801.410). For medical devices: ISO 13485. Not all Danyang factories hold these certifications \u2014 verify before ordering. Premium factories that supply international brands will have them; budget producers often will not." },
      { q: "Is Danyang better for lenses or frames?", a: "Lenses are Danyang\u2019s undisputed strength \u2014 no city on earth produces more spectacle lenses. For frames, Danyang is strong in metal and titanium but competes with Wenzhou (acetate/fashion frames) and Shenzhen (tech-forward designs). Many buyers source lenses from Danyang and frames from Wenzhou or Shenzhen." },
      { q: "What should I watch out for when sourcing eyewear from Danyang?", a: "Quality tiers vary enormously \u2014 specify standards in writing. Counterfeiting of brand names and lens coatings has historically been an issue \u2014 verify OEM legitimacy and demand original certification documents. The cheapest lenses may have inconsistent optical centres or poor coating adhesion. Always request samples before bulk ordering and consider third-party inspection." },
    ],
  },
];

export default function FAQAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenQuestion(null);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section id="faq" className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-3">
            Danyang Sourcing <span className="accent-word">FAQ</span>
          </h2>
          <p className="text-wf-text-secondary max-w-lg mx-auto">
            {faqData.reduce((sum, cat) => sum + cat.faqs.length, 0)} answers organised by topic
          </p>
        </div>

        {/* Category cards — CategoryCard-like style */}
        <div className="space-y-2">
          {faqData.map((cat) => (
            <div key={cat.category} className="bg-white border border-wf-border rounded-xl overflow-hidden">
              {/* Category header — looks like CategoryCard */}
              <button
                onClick={() => toggleCategory(cat.category)}
                className="group w-full flex items-center justify-between px-5 py-4 text-left hover:bg-wf-bg-light/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[15px] font-medium text-wf-text group-hover:text-wf-red transition-colors">
                    {cat.category}
                  </span>
                  <span className="text-[11px] text-wf-text-muted bg-wf-bg-light px-2 py-0.5 rounded-full">
                    {cat.faqs.length}
                  </span>
                </div>
                <svg
                  className={`flex-shrink-0 text-wf-text-muted group-hover:text-wf-red transition-all duration-200 ${
                    openCategory === cat.category ? "rotate-180" : ""
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Questions — collapsed by default */}
              {openCategory === cat.category && (
                <div className="px-5 pb-4 space-y-1 border-t border-wf-border/50">
                  <div className="pt-2" />
                  {cat.faqs.map((faq) => (
                    <div key={faq.q} className="rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleQuestion(faq.q)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-wf-bg-light/50 rounded-lg transition-colors"
                      >
                        <span className={`text-sm pr-4 ${openQuestion === faq.q ? 'text-wf-red font-medium' : 'text-wf-text'}`}>{faq.q}</span>
                        <svg
                          className={`flex-shrink-0 text-wf-text-muted transition-all duration-200 ${
                            openQuestion === faq.q ? "rotate-180" : ""
                          }`}
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {openQuestion === faq.q && (
                        <div className="px-3 pb-3">
                          <p className="text-sm text-wf-text-secondary leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
