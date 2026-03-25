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
    category: "Getting started in Quanzhou",
    faqs: [
      { q: "What products is Quanzhou best for sourcing?", a: "Footwear (especially sports shoes and sneakers from Jinjiang), menswear and apparel (from Shishi), stone materials and plumbing fixtures (from Nan’an), ceramics (from Dehua), and bags and luggage. Quanzhou’s textiles and garments account for 10% of China’s total output. For sports shoes specifically, 1 in 5 sneakers sold globally comes from Jinjiang." },
      { q: "Is Quanzhou better than Guangzhou for sourcing shoes?", a: "For sports shoes and sneakers, yes. Jinjiang has 7,000+ shoe enterprises with the complete supply chain within a 50 km radius. Anta, Xtep, Peak, and 361° are all headquartered here. Factory-gate prices are lower than Guangzhou, and the factories understand international brand standards from decades of OEM work. Guangzhou is better for general wholesale and a wider range of categories." },
      { q: "Can I source from Quanzhou without visiting?", a: "Yes, through 1688. Search 晋江运动鞋 (Jinjiang sports shoes) or 石狮男装 (Shishi menswear). However, Quanzhou has far fewer English speakers than Guangzhou or Yiwu — a sourcing agent is strongly recommended. Most factories welcome WeChat video tours." },
      { q: "Do I need a sourcing agent in Quanzhou?", a: "Strongly recommended. Few factories in Jinjiang or Shishi speak English. A local agent costs around 500–800 CNY/day and handles translation, factory navigation, and quality inspection. English-language sourcing guides (JingSourcing, OwlSourcing, GreenTime) all recommend hiring an agent for Quanzhou." },
      { q: "How do I get to Quanzhou?", a: "Fly into Quanzhou Jinjiang International Airport (JJN) — 12 km from city centre, 37 airlines serving 80 destinations (69 domestic + 11 international including Manila, KL, Hong Kong). Alternatively, fly into Xiamen Gaoqi Airport (80 km south, more international routes) and take a 30–45 minute intercity train. High-speed rail from Guangzhou takes approximately 3.5 hours, from Shanghai 4–5 hours." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What should I search for on 1688 to find Quanzhou factories?", a: "For shoes: 晋江运动鞋 (Jinjiang sports shoes), 陋埭鞋材 (Chendai shoe materials). For menswear: 石狮男装批发 (Shishi menswear wholesale). For plumbing: 南安水暖 (Nan’an plumbing). For ceramics: 德化陶瓷 (Dehua ceramics). Set the location filter to 泉州 or 福建 to find source factories." },
      { q: "How do I pay suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Options include: 1688 World Pay (WorldFirst’s integrated payment), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY. WorldFirst’s World Account lets you hold, convert, and send CNY without a Chinese bank account." },
      { q: "Is 1688 safe for international buyers sourcing from Quanzhou?", a: "1688 has domestic buyer protections (Alipay escrow) but limited international protections. WorldFirst mitigates key risks through: AI Sourcing Agent (English search), 1688 World Pay (CNY payments), and WorldTrade escrow (payment held until shipment confirmed). Also check: Quanzhou’s “侨易邦” (Qiaoyi Bang) cross-border platform has 1,862 brand factories and ¥15 billion+ in transaction volume." },
      { q: "What are typical MOQs for Quanzhou shoe factories?", a: "Most shoe factories require 500–3,000 pairs per style. Larger factories (8+ production lines) may require 1,000+ pairs minimum. Some trading companies on 1688 offer lower MOQs (100–200 pairs) but at higher unit costs. For shoe materials and components, MOQs are more flexible." },
    ],
  },
  {
    category: "Jinjiang footwear",
    faqs: [
      { q: "What types of shoes does Jinjiang produce?", a: "Sports shoes (running, basketball, training), casual sneakers and lifestyle shoes, EVA slippers and sandals, children’s shoes and LED shoes, canvas shoes. The factories also produce shoe materials: moulds, soles, uppers, textiles, synthetic leather, and hardware. Jinjiang’s sports shoes account for 40% of China’s total output and 20% of global output." },
      { q: "What is the Jinjiang International Shoe & Textile City?", a: "China’s largest professional shoe wholesale market, located at No. 888 Jinxin North Road, Chendai Town. 1,014 merchants, ¥49.5 billion transaction volume in 2024, with 60.4% going to foreign trade. It has an International Procurement Service Center and a digital procurement platform called 鞋纺通2.0." },
      { q: "Are counterfeit shoes a risk in Jinjiang?", a: "Yes. Jinjiang has significant counterfeit shoe production (Nike/Adidas copies). Rigorous supplier verification is needed. Check business licences, visit the factory floor, and confirm they have their own brand or legitimate OEM agreements. Working with a sourcing agent helps navigate this risk." },
      { q: "How do Jinjiang prices compare to Putian?", a: "Putian specialises in replica/copy shoes at the lowest price point (MOQ 50–200 pairs). Jinjiang produces legitimate sports shoes and OEM for international brands at a low-to-mid price point (MOQ 500–3,000 pairs). Jinjiang factories have stronger brand pedigree, better quality consistency, and ISO/CE certification. Wenzhou serves the mid-to-high leather shoe segment." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How much cheaper is sourcing from Quanzhou vs Alibaba?", a: "Direct factory in Quanzhou is typically 30–60% cheaper than Alibaba export pricing. Factory-gate prices in Jinjiang undercut Guangzhou trading prices by 20–40% for equivalent quality. The savings come from eliminating middlemen, export markups, and English sales team overhead." },
      { q: "How do I pay Chinese suppliers safely?", a: "Never wire money without verification. Use WorldFirst’s beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better rates. Always pay to the company’s registered business account, not personal accounts." },
      { q: "What payment terms are standard in Quanzhou?", a: "Standard terms: 30% deposit to start production, 70% balance before shipment (against inspection report or photos). Market purchases are usually cash or WeChat Pay on the spot. First orders are typically full payment. After building trust, some factories offer better terms." },
      { q: "How do I verify a Quanzhou supplier is legitimate?", a: "Cross-reference their business licence with the National Enterprise Credit Information System. Verify their 1688 store registration matches their factory address. Use WorldFirst’s beneficiary verification to check their bank account against their business registration. Visit their factory if possible — Jinjiang and Shishi factories generally welcome visits." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I ship goods from Quanzhou?", a: "Quanzhou has its own international airport (JJN) for air freight samples. For sea freight, the nearest major port is Xiamen (80 km south). Many suppliers handle domestic shipping to the port; you arrange international freight or use a freight forwarder. Quanzhou also has strong rail freight connections via Quanzhou East Railway Station to Shanghai and Chengdu." },
      { q: "Where should I stay in Quanzhou for sourcing?", a: "Quanzhou city centre (Wanda Plaza / Fengze Square area) is the best base — ¥300–800/night, good hotels, and you can reach Jinjiang, Shishi, and Nan’an within 30–40 minutes. For footwear sourcing, Jinjiang city centre (~¥62/night average) puts you closest to Chendai factories. For garments, Shishi (~¥43/night average) is the most affordable option." },
      { q: "What's the best time to visit Quanzhou?", a: "April (Jinjiang Footwear Expo, Apr 19–22) is the best single window — you can combine the expo with factory visits and potentially extend to Canton Fair Phase 3 in May. Avoid January–February (Chinese New Year shutdown) and July–August (extreme heat). October–November has good weather and factories at full capacity." },
      { q: "How far apart are the different sourcing districts?", a: "Quanzhou centre to Jinjiang (Chendai): ~15 km, 25 minutes. Quanzhou to Shishi: ~25 km, 35 minutes. Jinjiang to Shishi: ~12 km, 20 minutes. Quanzhou to Nan’an: ~25 km, 30 minutes. Quanzhou to Dehua (ceramics): ~100 km, 1.5 hours. The main clusters are compact, but Dehua requires a dedicated day trip." },
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
            Quanzhou Sourcing <span className="accent-word">FAQ</span>
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
