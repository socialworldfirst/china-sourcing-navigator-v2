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
    category: "Getting started in Xiamen",
    faqs: [
      { q: "What products is Xiamen best known for?", a: "Xiamen dominates specific global niches rather than broad categories. Its strongest sectors are eyewear and sunglasses (80% of world production, based in Haicang), fitness equipment (6 of 10 global home treadmills, based in Tong'an), stone and building materials (world's #1 stone trade port, connected to the Nan'an/Shuitou processing cluster), and LED lighting (40% of China's LED exports, based in Huli). It also has significant tea exports and is the corporate hub for China's most complete tungsten industrial chain." },
      { q: "How does Xiamen compare to Guangzhou or Shenzhen for sourcing?", a: "Xiamen is a specialist, not a generalist. Guangzhou covers more product categories at scale. Shenzhen dominates electronics. Xiamen wins in specific niches where it has genuine global leadership — eyewear, fitness equipment, stone, and LED lighting. If your product falls into one of those categories, Xiamen offers deeper supply chains and less competition from other international buyers. Xiamen also has more English speakers than other Fujian cities and excellent port efficiency (ranked #2 worldwide)." },
      { q: "Is Xiamen a Special Economic Zone?", a: "Yes. Xiamen has been a Special Economic Zone since 1980 (one of China's original 4 SEZs) and expanded city-wide in 2010. The China (Fujian) Pilot Free Trade Zone — Xiamen Area covers 43.78 km² and contributes 12.4% of city GDP, 35.5% of foreign trade, and 30.6% of actual FDI. The FTZ has introduced 553 innovative measures, with 142 being nationwide firsts." },
      { q: "Can I source from Xiamen without visiting?", a: "Yes. Xiamen suppliers are active on 1688 and Alibaba.com across eyewear, fitness equipment, LED lighting, and stone. Start online with 1688 filtering by 厦门 (Xiamen) or 福建 (Fujian). However, visiting is especially important for stone sourcing (where quality verification requires in-person inspection) and fitness equipment (where you need to test products and see production lines in Tong'an)." },
      { q: "What language support can I expect in Xiamen?", a: "Xiamen has more English speakers than other Fujian cities — it is the most international city in the province with direct flights to Los Angeles, Amsterdam, London, and Vancouver. Larger markets and trade shows have reasonable English support. However, factory visits in Tong'an and Haicang often require a translator. Budget 500-800 CNY/day for an interpreter." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 search terms should I use for Xiamen products?", a: "Eyewear: 厦门太阳镜 (sunglasses), 厦门眼镜批发 (eyewear wholesale), 厦门光学镜架 (optical frames). Fitness: 厦门跑步机 (treadmills), 厦门健身器材 (fitness equipment), 同安运动器材 (Tong'an sports equipment). Stone: 厦门石材 (stone materials), 厦门大理石 (marble), 厦门花岗岩 (granite). LED: 厦门LED灯 (LED lighting), 厦门照明 (lighting). Tea: 厦门铁观音 (Tieguanyin), 安溪茶叶 (Anxi tea)." },
      { q: "How do I distinguish Xiamen factories from trading companies on 1688?", a: "Check the registered address. Tong'an addresses = fitness equipment factories. Haicang addresses = eyewear and port-side operations. Huli addresses = LED manufacturing. Siming addresses are more likely trading companies. Verify at gsxt.gov.cn — look for 生产 (production) in the 经营范围 (business scope). If a supplier lists eyewear, fitness equipment, AND tea, they are a trader, not a manufacturer." },
      { q: "How do I pay Xiamen suppliers on 1688?", a: "1688 payments are in CNY. Use 1688 World Pay (WorldFirst's integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via WorldFirst's World Account. For stone orders, deposits regularly exceed $10,000, so WorldTrade escrow holds your payment until shipment is confirmed." },
    ],
  },
  {
    category: "Trade shows & events",
    faqs: [
      { q: "Which Xiamen trade shows matter most?", a: "The China Xiamen International Stone Fair (March) is the world's premier stone industry exhibition — 2,000+ exhibitors, 150K+ attendees. CIFIT (September) is China's only UFI-approved international investment promotion event. The International Optics Fair (June) covers eyewear. The Sporting Goods Expo (May) covers fitness equipment. The Tea Fair runs twice yearly (April and October)." },
      { q: "Where are the Xiamen exhibition venues?", a: "XICEC (Xiamen International Conference & Exhibition Center) hosts most trade shows including the Stone Fair, Optics Fair, Tea Fair, and Sporting Goods Expo. The EXPO Center (Xiamen International EXPO Center) hosts CIFIT and the Industry Expo. Both are accessible by metro and well-served by hotels." },
      { q: "Should I attend Canton Fair if I source from Xiamen?", a: "It depends on your category. Canton Fair Phase 2 (Apr 23-27) covers ceramics, home decor, and building materials — relevant if you source stone. Phase 1 (Apr 15-19) covers electronics and lighting — relevant for LED buyers. Guangzhou is 3.5 hours from Xiamen by HSR. Many importers combine Canton Fair with Xiamen factory visits." },
      { q: "What about the Nan'an/Shuitou stone cluster?", a: "The processing happens in Nan'an/Shuitou, 1-2 hours south of Xiamen by road. This cluster has 700 companies, 100,000 employees, and 50+ million m² annual processing capacity. Plan to attend the Xiamen Stone Fair first (March), identify suppliers, then drive south to visit their factories in Shuitou. Many buyers stay in Xiamen and day-trip to Shuitou." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How do I verify a Xiamen supplier is legitimate?", a: "Cross-reference their business licence at gsxt.gov.cn or the National Enterprise Credit Information System. For stone suppliers, distinguish manufacturers (Nan'an/Shuitou address) from trading companies (Xiamen city address). Request a factory visit — especially for stone, where quality varies enormously. Use WorldFirst's beneficiary verification to check their bank account against their business registration before sending deposits." },
      { q: "What payment terms are standard in Xiamen?", a: "Standard terms: 30% deposit to start production, 70% balance before shipment against inspection report or photos. Stone orders often require higher deposits (40-50%) because raw material costs are front-loaded. First orders are typically full payment. After building trust, some factories offer better terms. Always pay to the company's registered business account, not personal accounts." },
      { q: "How much cheaper is sourcing directly from Xiamen vs international platforms?", a: "Direct factory in Xiamen is typically 30-50% cheaper than Alibaba export pricing. 1688 domestic prices for the same products are 20-40% below Alibaba.com. The savings come from removing export markups, English sales team costs, and platform fees. For stone, buying directly from Nan'an/Shuitou factories saves 15-25% vs Xiamen-based trading companies." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I get to Xiamen?", a: "Fly into Xiamen Gaoqi International Airport (XMN) — 40 airlines, 106 destinations including Los Angeles, Amsterdam, London, Vancouver, Melbourne, and Sydney. Note: Xiamen Xiang'an International Airport opens late 2026 with 4x capacity (45 million passengers). By HSR: Fuzhou 1-2.5 hours, Shenzhen 2.5 hours, Shanghai via Southeast Coast Corridor. Metro Line 1 connects the airport to city centre." },
      { q: "Where should I stay in Xiamen for sourcing?", a: "For trade shows and wholesale markets: stay on Xiamen Island (Siming or Huli district). For port visits and eyewear factory tours: stay in Haicang (HUALUXE Xiamen Haicang, Marriott Xiamen Haicang, DoubleTree Hilton Haicang). For HSR connections: Crowne Plaza Jimei Seaview near Xiamen North Station. For fitness equipment factory visits: consider accommodation in Tong'an district." },
      { q: "What's the best time to visit Xiamen for sourcing?", a: "March-May (spring, 15-25 degrees C) and September-November (autumn, pleasant). Align with key trade shows: Stone Fair (March), Tea Fair (April/October), Sporting Goods Expo (May), Optics Fair (June), CIFIT (September). Avoid June-September for the peak of typhoon season (especially August-September). Winter is mild (average 13.3 degrees C) and workable." },
      { q: "Can I combine Xiamen with other Fujian sourcing trips?", a: "Yes. Common combinations: Xiamen to Quanzhou (shoes, textiles, 1 hour by road), Xiamen to Shishi (clothing wholesale, 1.5 hours), Xiamen to Nan'an/Shuitou (stone processing, 1-2 hours), Xiamen to Anxi (tea farms, 1.5 hours). Xiamen is the logical base for all Fujian sourcing because of its international airport, port, and hotel infrastructure." },
      { q: "How do I ship goods from Xiamen?", a: "Sea freight from Haicang Port — 8th-largest port in China, 13th globally, ranked #2 worldwide for berth efficiency. 153 container liner routes including 106 international and 55 Maritime Silk Road routes. Approximately 469 monthly ship calls. Air freight from Gaoqi Airport (or Xiang'an from late 2026). China-Europe rail services also available from Xiamen. Many stone and fitness equipment suppliers handle FOB Xiamen." },
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
            Xiamen Sourcing <span className="accent-word">FAQ</span>
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
