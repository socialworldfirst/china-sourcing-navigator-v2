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
    category: "Getting started in Qingdao",
    faqs: [
      { q: "What products is Qingdao best for sourcing?", a: "Tires and rubber products (700+ enterprises, 35+ plants), home appliance components (Haier and Hisense supply chain), false eyelashes (70% of global output from Pingdu), marine equipment, seafood, and textiles/knitwear from Jimo district. Qingdao is the most overlooked major manufacturing city in China sourcing — it has Fortune Global 500 anchor companies, genuine global monopolies, and world-class port infrastructure." },
      { q: "Is Qingdao better than Guangzhou for sourcing?", a: "For different categories, yes. Qingdao dominates tires/rubber, has a genuine global monopoly on eyelashes, and offers the Haier/Hisense component ecosystem. It also has more flexible MOQs than Guangzhou and fewer foreign buyers competing for supplier attention. Guangzhou is better for fashion, leather, beauty, textiles, and general consumer goods. The two cities serve very different sourcing needs." },
      { q: "Can I source from Qingdao without visiting?", a: "Yes. Start on 1688 using location filter 青岛 (Qingdao) or 山东 (Shandong). For eyelashes especially, Pingdu suppliers are very active on 1688 and Alibaba with strong OEM/ODM capabilities and virtual factory tours available. For tires, the annual CTF trade show (July) is the best single event for discovery." },
      { q: "How do I get to Qingdao?", a: "Fly into Qingdao Jiaodong International Airport (TAO) — opened 2021, 35 million passenger capacity, 130+ domestic cities, 50+ international routes (strong Japan/Korea connections). Metro Line 8 connects to city centre. High-speed rail from Jinan in ~1 hour (308 km). The airport is in Jiaozhou City, 48 km from the Sino-German Ecopark." },
      { q: "Is there a language barrier in Qingdao?", a: "More so than Guangzhou or Shenzhen but less than interior cities. Qingdao has a large Korean business community, so Korean language is actually useful. For factory visits in Pingdu (eyelashes/rubber) or Jimo (textiles), bring a translator or sourcing agent. The Sino-German Ecopark area has better English-language infrastructure due to international investment." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What should I search for on 1688 to find Qingdao factories?", a: "For tires: 青岛轮胎 (Qingdao tires), 青岛橡胶 (Qingdao rubber). For eyelashes: 平度假睫毛 (Pingdu false eyelashes), 青岛美妆睡毛 (Qingdao beauty eyelashes). For textiles: 即墨服装批发 (Jimo clothing wholesale), 即墨针织 (Jimo knitwear). For seafood: 青岛海鲜 (Qingdao seafood). Set location to 青岛 or 山东." },
      { q: "How do I pay suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Options include: 1688 World Pay (WorldFirst’s integrated payment), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY. WorldFirst’s World Account lets you hold, convert, and send CNY without a Chinese bank account." },
      { q: "Are Qingdao suppliers more flexible on MOQs?", a: "Generally yes. Qingdao suppliers are more accommodating of small and test orders compared to Guangzhou or Shenzhen. With fewer foreign buyers competing for attention, you may also get better pricing and more dedicated service. This makes Qingdao a good starting point for importers testing new product categories." },
      { q: "How do I find eyelash manufacturers on 1688?", a: "Search 平度假睫毛 or 青岛美化睫毛 and filter by 源头工厂 (source factory). Major suppliers include Qingdao Dinghai Hengtong, Qingdao Lashbeauty Cosmetic, Qingdao Bameier, Heart Girl, and Huierya. Most offer OEM/ODM with custom branding, packaging, and private labelling. MOQs are typically low (50–500 pairs for samples, 1,000+ for production)." },
    ],
  },
  {
    category: "Trade shows & exhibitions",
    faqs: [
      { q: "What is the CTF Tire Fair?", a: "The China International Tire & Wheel Fair (CTF) has been held annually in Qingdao since 2004. The 2026 edition runs July 8–11 at Qingdao World Expo City. It attracts 350+ tire enterprises and 200+ source manufacturers covering the entire tire industry chain: PCR, TBR, OTR, agricultural tires, wheels, rubber compounds, and machinery." },
      { q: "What is the CFSE Seafood Expo?", a: "The China Fisheries & Seafood Expo (CFSE) runs October 28–30, 2026 at Hongdao International Convention & Exhibition Center. It is the world’s largest seafood trade show at 45,000+ sqm. Qingdao’s seafood import/export exceeds US$8 billion per year, representing over one-third of China’s total international seafood trade." },
      { q: "Which Qingdao trade shows should I prioritise?", a: "For tires/rubber: CTF (July 8–11). For seafood: CFSE (October 28–30). For metal/machinery: CAIE (March 26–29) or Machine Tool Exhibition (June). For industrial equipment generally, the Qingdao International Convention Center hosts regular industrial fairs. Combine the CTF with the Beer Festival (July 17 – August 16) for a dual-purpose trip." },
      { q: "Where are Qingdao's exhibition centres?", a: "Three main venues: Qingdao International Convention Center (QICC) in the central area — 250,000 sqm, largest in Shandong, 6,000+ standard booths. Qingdao World Expo City with 200,000 sqm exhibition space (hosts CTF). Hongdao International Convention & Exhibition Center — largest in northern China (hosts CFSE)." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How much cheaper is sourcing from Qingdao vs Alibaba?", a: "Direct factory in Qingdao is typically 30–60% cheaper than Alibaba export pricing. For tires, direct factory pricing can undercut Alibaba by 40–50% on the same specifications. For eyelashes, 1688 prices are significantly lower than Alibaba.com because the products are identical but without export markup and English sales overhead." },
      { q: "How do I pay Chinese suppliers safely?", a: "Never wire money without verification. Use WorldFirst’s beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better rates. Always pay to the company’s registered business account, not personal accounts." },
      { q: "What payment terms are standard in Qingdao?", a: "Standard terms: 30% deposit to start production, 70% balance before shipment (against inspection report or photos). For tire orders (high value), 50/50 splits are common. First orders are typically full payment. Market purchases are usually cash or WeChat Pay. After building trust, some factories offer better terms." },
      { q: "How do I verify a Qingdao supplier?", a: "Cross-reference their business licence with the National Enterprise Credit Information System (gsxt.gov.cn). Check district addresses: Huangdao/West Coast = heavy industry, Pingdu = eyelashes/rubber, Jimo = textiles, Chengyang = rail/electronics, Jiaozhou = appliances/food. Use WorldFirst’s beneficiary verification to check their bank account before any deposit." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How good is Qingdao Port for shipping?", a: "World-class. 7th busiest container port globally with 32.17 million TEUs (2024), 694 million tons cargo throughput, 230+ international shipping routes (most extensive in northern China), and ranked 6th globally in connectivity by the World Bank. #1 in China for crude oil imports and the largest grain import base. Far superior port infrastructure to most sourcing cities." },
      { q: "Where should I stay in Qingdao for sourcing?", a: "Shibei District for central access to markets and short commute to Jimo and Chengyang. Licang District for proximity to wholesale markets and logistics hubs. For factory visits in Pingdu (eyelash/rubber), plan 1.5–2 hours from downtown — consider staying a night in Pingdu if doing multiple factory visits." },
      { q: "When is the best time to visit Qingdao?", a: "Spring (March–May) or Fall (September–November) for mild weather and full factory capacity. July for CTF tire fair + Beer Festival. October for CFSE seafood expo. Avoid January–February (Chinese New Year, cold winters). Summers are more comfortable than southern China but still warm." },
      { q: "What districts should I visit for which products?", a: "Pingdu: eyelashes, rubber/tire factories (1.5–2 hrs from centre). Jimo: textiles and knitwear (Jimo Clothing Market). Huangdao/West Coast: shipbuilding, petrochemicals, heavy industry. Chengyang: rail transit (CRRC), electronics. Laoshan: Haier HQ and smart home ecosystem. Jiaozhou: smart appliances, food processing. Shibei/Licang: wholesale markets." },
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
            Qingdao Sourcing <span className="accent-word">FAQ</span>
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
