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
    category: "Getting started in Suzhou",
    faqs: [
      { q: "Is Suzhou good for sourcing?", a: "Yes. Suzhou is China’s sixth-largest city by GDP and the number-one prefecture-level city for industrial output. It has a unique dual advantage: 4,700 years of silk and textile heritage combined with a world-class high-tech manufacturing ecosystem. Shengze produces 50% of China’s chemical fiber fabrics. Suzhou Industrial Park hosts 5,200+ foreign enterprises. It’s excellent for textiles, precision components, and electronics." },
      { q: "What products is Suzhou best known for?", a: "Suzhou’s strongest categories are silk and textiles (Shengze fabrics, traditional silk, wedding dresses from Huqiu, garments from Changshu), precision manufacturing (CNC parts, medical devices, automotive components from SIP/SND), electronics assembly (laptops from Kunshan, semiconductors, automotive electronics), and metal fabrication. The textile supply chain is complete — from silkworm to runway, all within the metro area." },
      { q: "Is Suzhou better than Guangzhou for sourcing?", a: "They serve different needs. Suzhou is stronger for silk, technical fabrics, precision engineering, and electronics assembly. Guangzhou is better for fashion, leather, beauty, and walk-in wholesale market variety. Suzhou’s SIP offers stronger IP protection. Guangzhou has more diverse wholesale markets. Many importers source textiles in Suzhou and finished fashion goods in Guangzhou." },
      { q: "Can I source from Suzhou without visiting?", a: "Yes. Many Shengze textile suppliers and SIP manufacturers are active on 1688.com. WorldFirst’s AI Sourcing Agent lets you search in English. However, for textiles especially, visiting is valuable — you need to touch fabric, check drape and hand feel, and verify dyeing quality in person. For precision parts, request samples from the exact production line before committing to bulk orders." },
      { q: "How do I get to Suzhou?", a: "Suzhou has no major commercial airport. Fly into Shanghai Hongqiao (SHA) and take the high-speed rail — 25 minutes, trains every 10 minutes, ~400 trains per day. Alternatively, Wuxi Sunan Shuofang Airport is 30 km north. Within Suzhou, 9 metro lines cover the city. Metro Line 11 connects to Shanghai Metro for intercity travel via Kunshan." },
    ],
  },
  {
    category: "Key markets & districts",
    faqs: [
      { q: "What is Shengze and why is it important?", a: "Shengze (盛泽) is a town in Wujiang district, known as the “Silk Capital of China” (中国绸都). It has 5,000+ textile production enterprises and 7,000+ trading companies. The Eastern Silk Market has 7,000+ booths with RMB 100 billion in annual transactions. Two Fortune 500 companies — Hengli Group and Shenghong Group — are headquartered here. Shengze produces 50% of China’s chemical fiber fabrics." },
      { q: "What is Changshu Garment City?", a: "Changshu China Garment City (常熟招商城) is China’s largest specialised wholesale market for clothing and accessories. It covers 3.71 km² with 9,000+ shops and 50,000+ product varieties across 35 specialised markets, including 6 national-level centres for men’s wear, women’s wear, children’s wear, footwear, trousers, and garment accessories." },
      { q: "What is Huqiu Bridal City?", a: "Huqiu Bridal City (虎丘婚纱城) is the largest wedding dress production and wholesale base in China, accounting for 70–80% of the national market. Around 1,200 wedding dress factories operate in the Suzhou area. A gown retailing at $2,000 in the US costs $200–560 here. There are no listed prices — negotiation is calculator-based. Start at 50% of the asking price." },
      { q: "What is SIP and why does it matter for sourcing?", a: "Suzhou Industrial Park (SIP, 苏州工业园区) is a China-Singapore joint venture established in 1994. It’s one of China’s most successful development zones with RMB 400.2 billion GDP. SIP has 5,200+ foreign-invested enterprises, stronger IP protection than most Chinese zones, and high concentrations of ISO/CE/FDA certified manufacturers. It’s best for precision components, electronics, and medical devices." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What is 1688 and how is it different from Alibaba?", a: "1688.com is Alibaba’s domestic Chinese wholesale platform. Prices are 20–50% lower than Alibaba.com because there’s no export markup, no English sales team overhead, and no Trade Assurance fees. The tradeoff: the platform is entirely in Chinese, payment requires CNY, and there’s no built-in international buyer protection." },
      { q: "How do I find Suzhou textile suppliers on 1688?", a: "Search “苏州丝绸” (Suzhou silk), “盛泽面料” (Shengze fabric), or “苏州精密加工” (Suzhou precision machining). Set the location filter to Suzhou or Jiangsu province. Look for 实力商家 (verified merchant) and 源头工厂 (source factory) badges. Shengze textile suppliers are heavily represented on 1688 for fabric wholesale." },
      { q: "How do I pay suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Options include: 1688 World Pay (WorldFirst’s integrated payment), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY. WorldFirst’s World Account lets you hold, convert, and send CNY without a Chinese bank account." },
      { q: "Is 1688 safe for international buyers?", a: "1688 has domestic buyer protections (Alipay escrow) but limited international protections. WorldFirst mitigates key risks through: AI Sourcing Agent (English search), 1688 World Pay (CNY payments), and WorldTrade escrow (payment held until shipment confirmed)." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How do I pay Chinese suppliers safely?", a: "Never wire money without verification. Use WorldFirst’s beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better rates. Always pay to the company’s registered business account, not personal accounts." },
      { q: "How do I verify a Suzhou supplier is legitimate?", a: "Cross-reference their business licence with the National Enterprise Credit Information System. Use QICHACHA or Tianyancha to verify company registration, capitalisation, and legal status. For SIP/SND manufacturers, check for ISO 9001, ISO 13485, IATF 16949, AS9100D, CE, or FDA certifications. Use WorldFirst’s beneficiary verification to check their bank account against their business registration." },
      { q: "How do I negotiate in Shengze fabric markets?", a: "Collect samples, business cards, and unit prices from multiple stalls before negotiating. All pricing is MOQ-dependent — larger orders get significantly better rates. Professional fabric sample-finding services are available for approximately RMB 10,000 per year. For custom dyeing, printing, and finishing, get written specifications agreed before production." },
      { q: "How do I negotiate for wedding dresses at Huqiu?", a: "Huqiu Bridal City uses calculator-based negotiation — there are no verbal or listed prices. Start at 50% of the asking price and work up. Quality varies dramatically between vendors, so inspect stitching, fabric weight, beading quality, and lining carefully. Many dresses sold here are actually manufactured in Dingji town, Anhui Province." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I ship goods from Suzhou?", a: "The Port of Suzhou (Taicang, Zhangjiagang, Changshu) handles 4.45 million TEU per year — the world’s busiest inland river port. Alternatively, Shanghai’s ports are easily accessible. For samples and urgent orders, ship via air from Shanghai Hongqiao or Pudong airports. Many suppliers handle domestic shipping to port; you arrange international freight." },
      { q: "What’s the best time to visit Suzhou for sourcing?", a: "March to May (spring, pleasant weather, aligns with spring trade shows) and September to November (autumn, comfortable temperatures, post-National Day sourcing season). Avoid Chinese New Year (late January/early February), National Day Golden Week (October 1–7), and the summer peak (July–August, hot and humid)." },
      { q: "Where should I stay in Suzhou for sourcing?", a: "For SIP/electronics sourcing: W Suzhou or Crowne Plaza Suzhou SIP (lakeside, near Jinji Lake). For traditional silk sourcing: old city near Guanqian Street. For Shengze textile sourcing: stay in Shengze town itself (about 2 hours from Shanghai). SIP has the best luxury and business accommodation. Budget ranges from $31/night to $200+/night." },
      { q: "Do I need to speak Chinese in Suzhou?", a: "English is more common in SIP (multinational environment) than in traditional markets. Shengze, Changshu, and Huqiu are dominated by Mandarin and local dialect. Bring a translation app, have product specifications written in Chinese, and consider hiring a local interpreter. Business cards are essential — in Shengze especially, collecting supplier cards and samples is the primary activity." },
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
            Suzhou Sourcing <span className="accent-word">FAQ</span>
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
