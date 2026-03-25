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
    category: "Getting started in Yiwu",
    faqs: [
      { q: "What is Yiwu International Trade City?", a: "The world’s largest wholesale market for small commodities, with 75,000+ booths and 2.1 million products across 5 districts plus the new Global Digital Trade Centre. Located in Yiwu, Zhejiang Province. The World Bank designated it the world’s largest small commodities market in 2005." },
      { q: "How big is Yiwu Market?", a: "6.4 million square metres of trading space across 5 districts plus the new 1.25 million sqm Global Digital Trade Centre. 75,000+ booths, 200,000+ business operators, 220,000 daily visitors. It takes a minimum of 5 days to cover the relevant sections properly." },
      { q: "Are Yiwu Market suppliers factories or trading companies?", a: "The vast majority are trading companies, not factories. This is the defining feature of Yiwu’s model. Trading companies aggregate products from factories throughout Zhejiang and neighbouring provinces. They add value through product curation, mixed-container consolidation, quality sorting, and small-MOQ flexibility. Floor 4 in each district has factory direct-sale centres if you need manufacturer access." },
      { q: "Do I need a sourcing agent in Yiwu?", a: "Highly recommended for first-time visitors. Agents cost 3–10% of order value and handle translation, negotiation, quality inspection, shipping coordination, and container consolidation. The market is too large and too Chinese-language-dependent to navigate efficiently without help on your first trip." },
      { q: "Is Yiwu better than Guangzhou for sourcing?", a: "They serve different buyers. Yiwu is better for low MOQs (50–100 pieces), mixed containers, general merchandise, and budget goods across many categories. Guangzhou is better for fashion, leather, beauty, electronics, customisation, and higher-quality goods with deeper factory access. Many experienced importers source from both." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What is 1688 and how does it relate to Yiwu?", a: "1688.com is Alibaba’s domestic Chinese wholesale platform. Prices are 20–50% lower than international Alibaba because there’s no export markup. Many Yiwu market suppliers also list on 1688. You can cross-reference a supplier’s booth number on Yiwugo (en.yiwugo.com) with their 1688 store to verify they’re the same business." },
      { q: "What is Yiwugo and how do I use it?", a: "Yiwugo (义乌购) is the official online directory of all 75,000+ International Trade City booths. Available at en.yiwugo.com with English interface. Use it to browse products by district and floor, identify suppliers before visiting, and check booth contact details and product ranges. It lists 4 million+ products." },
      { q: "What is Chinagoods?", a: "Chinagoods (义乌小商品城平台) is the newer digital trade platform at en.chinagoods.com. It covers 80,000+ booths and includes interactive market maps, real-time booth information, and integration with the Global Digital Trade Centre. Yiwu Pay digital settlement is built in." },
      { q: "How do I pay suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Options include: 1688 World Pay (WorldFirst’s integrated payment), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY. WorldFirst’s World Account lets you hold, convert, and send CNY without a Chinese bank account." },
      { q: "What is the difference between 1688 and Yiwu Market?", a: "1688 is an online platform (Chinese-language only). Yiwu Market is a physical wholesale hub. Many suppliers list on both. Yiwu offers physical inspection, immediate sample access, and face-to-face negotiation. 1688 offers remote browsing, broader search, and the convenience of ordering without travelling." },
    ],
  },
  {
    category: "International Trade City guide",
    faqs: [
      { q: "What are the 5 districts of Yiwu International Trade City?", a: "District 1: Toys, Jewelry, Crafts (10,000+ booths). District 2: Bags, Hardware, Electronics (8,000+ booths). District 3: Stationery, Office, Cosmetics (7,000+ booths). District 4: Socks, Textiles, Daily Goods (16,000+ booths — the largest). District 5: Imports, Bedding, Auto Parts (7,000+ booths). Plus the new Global Digital Trade Centre (1.25 million sqm)." },
      { q: "What are the market opening hours?", a: "Monday to Friday 09:00–17:00, Saturday until 16:30, closed Sundays (except holidays). Best visiting window is 09:00–16:30. The market is a working wholesale environment, not a tourist attraction — arrive early for the full day." },
      { q: "What is a mixed container and why does it matter in Yiwu?", a: "A mixed container combines products from multiple Yiwu suppliers into one shipping container. This is Yiwu’s signature model. It reduces risk, allows broader product range, and lets small importers buy across dozens of categories without committing to full-container volumes from each supplier. Yiwu’s consolidation warehouses, freight forwarders, and container yards are built for exactly this workflow." },
      { q: "Why is Yiwu famous for socks?", a: "Nearby Datang Town in Zhuji produces 27 billion pairs of socks annually — 70% of China’s domestic market and 35% of all socks worn worldwide. The connection is summed up in four characters: 大唐产、义乌卖 (Datang produces, Yiwu sells). The socks flow to District 4 Floor 1 for global distribution." },
      { q: "What is the Global Digital Trade Centre?", a: "Yiwu’s 6th-generation market, opened October 2025. 1.25 million sqm integrating physical trade with AI-powered digital commerce. 3,700+ merchants use AI-powered tools. Drawing 66,000–71,000 daily visitors including 7,000 foreign buyers, with 170 million+ RMB in daily transactions." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "What is the minimum order quantity (MOQ) at Yiwu?", a: "Typically 50–100 units for most products. Some jewelry and accessory suppliers go as low as 6–12 pieces. This is significantly lower than factory-direct sourcing, where MOQs start at 500–1,000 units. Low MOQs are possible because most Yiwu suppliers are trading companies that aggregate from multiple factories." },
      { q: "How do I negotiate in Yiwu Market?", a: "Never accept the first price. Compare 3+ suppliers for the same item — the market’s scale makes this easy. Use volume as leverage even if you’re combining into a mixed container. Be polite but firm. Walking away often triggers a better offer. Cash payments can unlock additional discounts." },
      { q: "How do I verify a Yiwu supplier is legitimate?", a: "Cross-reference their business licence with the National Enterprise Credit Information System. Check their booth number on Yiwugo or Chinagoods. Use WorldFirst’s beneficiary verification to match their bank account against their business registration. Ask for the Unified Social Credit Code (USCC) and verify it." },
      { q: "How do I pay Chinese suppliers safely?", a: "Never wire money without verification. Use WorldFirst’s beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better rates. Always pay to the company’s registered business account, not personal accounts." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I get to Yiwu?", a: "Fly to Shanghai Pudong or Hongqiao, then take a high-speed train (1.5–2 hours, from ~169 CNY). Hangzhou is closer at 1 hour by train. Yiwu Airport has domestic flights plus limited international routes to Hong Kong, Taipei, and Daegu. The Yiwu–Madrid railway (13,000 km) also ships goods to Europe." },
      { q: "How do I ship goods from Yiwu?", a: "Sea freight via Ningbo-Zhoushan Port (connected by the new Suxi International Port handling 660,000 TEUs/year). Air freight from Yiwu Airport. Rail freight to Europe via the Yiwu–Madrid railway. Yiwu has massive logistics infrastructure with consolidation warehouses, container yards, and customs clearance all within the city." },
      { q: "When is the best time to visit Yiwu?", a: "March–May: new product launches, factories at full capacity. September–November: peak export season, best product selection, busiest. July–August: quieter, easier negotiation, hot weather. Avoid mid-January to mid-February (Chinese New Year — 15-day market closure, factories close even longer)." },
      { q: "Where should I stay in Yiwu?", a: "Shangri-La (directly across from District 1, 800–2,000 CNY/night), Marriott (500m from Shangri-La), or Yiwu Ocean Hotel (connected to District 2). Budget hotels from 100–300 CNY/night ($15–40) are plentiful near the market. Book near District 1–3 for the shortest commute." },
      { q: "Why are there so many Arab traders in Yiwu?", a: "Yiwu’s low prices and wide product range attracted Middle Eastern and North African traders from the early 2000s. Roughly 4,000 MENA traders now live permanently in Yiwu, and 200,000+ visit annually. The community centres on Exotic Street (三毛区), with Arabic signage, halal restaurants, and freight-forwarding agencies. Arab traders serve as intermediaries for buyers across the MENA region." },
      { q: "What are the most common mistakes when sourcing from Yiwu?", a: "Going without a plan (75,000 booths cannot be wandered). Assuming all booths are factories (most are trading companies). Accepting the cheapest price without checking quality. Ordering too much on the first trip. Making only verbal agreements instead of written PIs. Skipping a sourcing agent to save money, then making more expensive mistakes." },
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
            Yiwu Sourcing <span className="accent-word">FAQ</span>
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
