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
    category: "Getting started in Kunshan",
    faqs: [
      { q: "What is Kunshan best known for?", a: "Electronics assembly. Kunshan produces approximately one-third of the world’s laptops. Foxconn, Luxshare-ICT, Compal, and MSI all have major manufacturing facilities here. The county has been ranked #1 among China’s ~400 county-level cities for 20+ consecutive years, with a GDP of ¥561.5 billion (roughly US$78 billion). It is known as “Little Taipei” because at its peak, nearly 200,000 Taiwanese residents lived here." },
      { q: "Is Kunshan like Guangzhou or Yiwu for sourcing?", a: "No. Kunshan is a factory city, not a market city. There are no significant buyer-facing wholesale markets. Sourcing here means direct factory engagement, 1688 online discovery, or introductions through trade shows. The buying experience is closer to Dongguan than to Guangzhou or Yiwu. You visit factories, not markets." },
      { q: "What makes Kunshan different from Shenzhen for electronics?", a: "Shenzhen dominates consumer electronics, smart hardware, and rapid prototyping. Kunshan dominates laptop and notebook ODM assembly, precision components, and display panels. Shenzhen has Huaqiangbei for walk-in component sourcing. Kunshan has no equivalent — it’s factory-to-factory. Kunshan also has stronger bicycle and sports equipment clusters (Giant, Shimano) that Shenzhen lacks." },
      { q: "Can I source from Kunshan without visiting?", a: "Yes. Start on 1688 searching for 昆山电子 (Kunshan electronics) or 昆山精密零件 (Kunshan precision parts). Request WeChat video factory tours. For larger ODM partnerships, visiting is strongly recommended — the Taiwanese business culture in Kunshan favours in-person relationship building." },
      { q: "Why is Kunshan called ‘Little Taipei’?", a: "At its peak, nearly 200,000 Taiwanese residents lived in Kunshan, drawn by the massive Taiwanese ODM investment. 6,200+ Taiwan-funded projects with total investment exceeding US$70 billion have been approved. Taiwan-funded firms account for roughly 30% of GDP, 50% of industrial output, 60% of foreign investment, and 70% of imports/exports. The Taiwanese influence means many factories operate with bilingual English/Mandarin management and Western business practices." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 search terms work for Kunshan products?", a: "For electronics: 昆山电子, 昆山PCB, 昆山连接器, 昆山显示屏. For precision parts: 昆山精密零件, 昆山CNC加工, 昆山模具. For bicycles: 昆山自行车, 昆山运动器材. For packaging: 昆山包装, 昆山印刷. Add 源头工厂 (source factory) to filter for actual manufacturers." },
      { q: "How do I pay Kunshan suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Use 1688 World Pay (WorldFirst’s integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via a WorldFirst World Account. For electronics orders, deposits regularly exceed $10,000, so WorldTrade escrow holds your payment until shipment is confirmed." },
      { q: "Is 1688 safe for international buyers?", a: "1688 has domestic buyer protections (Alipay escrow) but limited international protections. WorldFirst mitigates key risks through: AI Sourcing Agent (English search), 1688 World Pay (CNY payments), and WorldTrade escrow (payment held until shipment confirmed)." },
    ],
  },
  {
    category: "Trade shows & factory visits",
    faqs: [
      { q: "Does Kunshan have its own electronics trade show?", a: "No. Kunshan hosts some specialized exhibitions (auto lamp, home expo, smart logistics) at the Kunshan International Convention Center, but no dedicated electronics sourcing trade show. Buyers should plan visits around Shanghai-based electronics expos (Electronica China, SEMICON China) and use Kunshan as a factory-visit base. Shanghai is only 20 minutes away by high-speed rail." },
      { q: "Can I visit Foxconn or Luxshare factories?", a: "Major ODMs like Foxconn and Luxshare do not offer public factory tours. Access requires existing business relationships or introductions through procurement channels. Smaller Tier 2 and Tier 3 component suppliers in the KETD zone are generally more accessible for factory visits and accept walk-in enquiries." },
      { q: "What is the Smart Factory Kunshan?", a: "A Sino-German Industry 4.0 demonstration centre in Zhangpu Town’s German Industrial Park. It offers real production environment demos (not a showroom) featuring collaborative robots, remote monitoring, forklift management, and IIoT testbeds. Useful for buyers interested in automated manufacturing capabilities." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "What are the tax advantages of the Kunshan Bonded Zone?", a: "The Comprehensive Bonded Zone offers: import duties and VAT exempt for infrastructure materials and equipment, domestic goods entering the zone enjoy export rebates, water/electricity/gas VAT exempt for export production, and export goods plus inter-tenant transactions are exempt from VAT and consumption tax. These advantages make Kunshan especially competitive for components destined for re-export." },
      { q: "What are standard payment terms for Kunshan factories?", a: "30% deposit before production, 70% balance before shipment against inspection report. For precision components, 50/50 is common on first orders. Most Kunshan factories have experience with international buyers and accept standard terms. The Taiwanese management culture means contracts and documentation are generally handled professionally." },
      { q: "How do I verify a Kunshan supplier?", a: "Cross-reference their business licence at gsxt.gov.cn. KETD zone, Comprehensive Bonded Zone, or Hi-tech Zone addresses indicate established manufacturers. Use WorldFirst’s beneficiary verification to check their bank account against their business registration. For electronics, verify they are in the supply chain of known brands by checking their listed customers." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I get to Kunshan?", a: "Shanghai Hongqiao Airport to Kunshan is 20–26 minutes by high-speed rail (¥25–60). Shanghai Pudong Airport has direct buses hourly (¥76, ~2 hours). Suzhou is directly adjacent. Shanghai Metro Line 11 extends into Kunshan (Huaqiao Station) — the first cross-provincial metro in China. 120+ pairs of high-speed rail services run daily between Shanghai and Kunshan." },
      { q: "Where should I stay in Kunshan?", a: "Courtyard by Marriott Kunshan (4-star, city centre) for mid-range business travel. Holiday Inn Kunshan from US$42/night. Kunshan Hotel (昆山宾馆) is a 4-star in the commercial centre, 35 minutes from Hongqiao Airport. Average business hotel runs around US$60/night. Stay near Kunshan South Station for easy HSR access to Shanghai." },
      { q: "What’s the best time to visit Kunshan?", a: "March–May and September–November for mild weather and all factories running. Avoid January–February (Chinese New Year shutdown). Time visits to coincide with Shanghai electronics trade shows (Electronica China in March, SEMICON in June) for combined sourcing trips." },
      { q: "How does Kunshan’s logistics work?", a: "JD Logistics operates its Asia No.1 intelligent logistics park in Kunshan, covering 93% same-day/next-day delivery for East China (Jiangsu, Zhejiang, Shanghai, Anhui — 200 million population). ESR operates major logistics facilities in Huaqiao. Proximity to Shanghai Port (60 km) means efficient sea freight access. The Comprehensive Bonded Zone streamlines export processing." },
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
            Kunshan Sourcing <span className="accent-word">FAQ</span>
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
