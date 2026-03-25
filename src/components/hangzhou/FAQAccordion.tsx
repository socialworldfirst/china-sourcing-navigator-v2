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
    category: "Getting started in Hangzhou",
    faqs: [
      { q: "Is Hangzhou good for sourcing?", a: "Yes. Hangzhou is China’s e-commerce capital and the headquarters of Alibaba, 1688, and Ant Group. It’s the best city for understanding China’s digital supply chain, connecting with platform-native suppliers, and accessing the 1688 ecosystem directly. It also has China’s largest silk market and the Sijiqing clothing wholesale district. GDP reached 2.18 trillion yuan in 2024, with exports of 595 billion yuan." },
      { q: "What products is Hangzhou best known for?", a: "Hangzhou’s strongest categories are e-commerce and digital trade infrastructure (1688, cross-border platforms), textiles and silk (Sijiqing fashion market, Chinese Silk City, Wensli), small appliances (ROBAM, Supor, Joyoung), and IoT and smart home (Hikvision, Dahua, EZVIZ). The Xiaoshan district also produces 60% of China’s down and feather exports." },
      { q: "How is Hangzhou different from Guangzhou for sourcing?", a: "Guangzhou is the physical wholesale and trade capital — densest markets, broadest product range. Hangzhou is the digital supply chain command centre — platform-first, e-commerce infrastructure, and higher-tech. Hangzhou is where 1688 and Alibaba are headquartered. Guangzhou hosts Canton Fair. Many importers visit both: Guangzhou for physical markets and Hangzhou for digital-first sourcing and silk." },
      { q: "Can I combine Hangzhou with a Yiwu trip?", a: "Absolutely. The fastest high-speed train from Hangzhou East to Yiwu takes just 34 minutes. There are 40+ daily trains between the two cities. Many buyers do a 2-3 day Hangzhou trip (fashion, silk, tech) followed by 1-2 days in Yiwu (small commodities). It’s one of the most efficient sourcing combinations in China." },
      { q: "Do I need to speak Chinese in Hangzhou?", a: "It helps significantly. Hangzhou has more ‘tech English’ than ‘trade English’ — people in Alibaba’s ecosystem speak English but market vendors generally do not. Bring a translation app, have your product specifications written in Chinese, and consider hiring a local sourcing agent who can negotiate in Hangzhou dialect (杭州话) for better prices." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "Why is 1688 especially relevant in Hangzhou?", a: "1688.com is headquartered in Hangzhou. The platform has 120 million+ registered users and 100 million+ active buyers. Many Hangzhou suppliers are platform-native — they prefer WeChat and 1688 communication over in-person visits. Searching 1688 with a Hangzhou location filter gives you direct access to the city’s supplier base, including silk, fashion, appliances, and cross-border e-commerce operators." },
      { q: "How do I pay suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Options include: 1688 World Pay (WorldFirst’s integrated payment), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY. WorldFirst’s World Account lets you hold, convert, and send CNY without a Chinese bank account." },
      { q: "What is the 88 Check tool on 1688?", a: "88 Check is 1688’s enterprise inquiry tool powered by DeepSeek AI (also headquartered in Hangzhou). It helps buyers verify supplier credentials, check business registrations, and assess reliability before placing orders. It’s part of 1688’s AI-integrated sourcing features." },
      { q: "Is 1688 safe for international buyers?", a: "1688 has domestic buyer protections (Alipay escrow) but limited international protections. WorldFirst mitigates key risks through: AI Sourcing Agent (English search), 1688 World Pay (CNY payments), and WorldTrade escrow (payment held until shipment confirmed)." },
    ],
  },
  {
    category: "Markets & silk sourcing",
    faqs: [
      { q: "What is Sijiqing and how does it work?", a: "Sijiqing (四季青) is China’s “Garment First Street” — a 1.6 km stretch in Jianggan district with 20+ wholesale buildings and 15,000 vendors. It divides into first-batch (一批, factory-direct) and second-batch (二批, resellers). First-batch offers better pricing for volume; second-batch allows mixed sizes/colours and returns. Go early — morning prices are wholesale rates, afternoon prices go up." },
      { q: "Where is the best place to buy silk in Hangzhou?", a: "Chinese Silk City (中国丝绸城) on Xinhua Road is the premier destination — 600+ silk enterprises, the largest silk market in China. For bulk buyers seeking better value, Huanbei Silk City (环北丝绸服装城) on Fengqi Road has dedicated silk floors (5-6). Tip: check water-wash labels and composition tags to verify real mulberry silk (桑蚕丝). Always compare 3-4 shops before buying." },
      { q: "What are first-batch vs second-batch markets?", a: "First-batch (一批) markets like Old Yifa and New Yifa are factory-direct showrooms. Higher quality, better prices for volume, but stricter MOQs. Second-batch (二批) markets are resellers who buy from first-batch. They allow mixed colours and sizes, offer return windows, and work for beginners and small e-commerce sellers. Both operate within Sijiqing." },
      { q: "When is the best time to visit Hangzhou for sourcing?", a: "March to May and September to November are optimal. Spring offers new collections and Longjing tea season; autumn has clear skies and comfortable temperatures. Avoid June-July (plum rain season/梅雨, frequent disruptions), July-August (extreme heat), Chinese New Year (markets closed 2-4 weeks), May 1-5 (Labour Day crowds), and October 1-7 (National Day crowds)." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "What are typical wholesale prices in Hangzhou?", a: "At Sijiqing, basic cotton T-shirts start around 33 RMB per piece on multi-buy deals. Men’s trousers run about 100 RMB per pair for 5+ units. General wholesale fashion is 60-85 yuan ($10-15) per piece. Under 10 pieces gives limited bargaining power. Silk prices vary widely by quality — always verify mulberry silk content." },
      { q: "How do I pay Chinese suppliers safely?", a: "Never wire money without verification. Use WorldFirst’s beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better rates. Always pay to the company’s registered business account, not personal accounts." },
      { q: "What payment terms are standard in Hangzhou?", a: "Market purchases at Sijiqing and Silk City are typically cash, WeChat Pay, or Alipay on the spot. For factory orders: 30% deposit to start production, 70% balance before shipment (against inspection report or photos). Many Hangzhou suppliers prefer digital payment — reflecting the city’s e-commerce DNA." },
      { q: "How do I verify a Hangzhou supplier is legitimate?", a: "Cross-reference their business licence with the National Enterprise Credit Information System. Verify their 1688 store registration matches their market booth licence. Use WorldFirst’s beneficiary verification to check their bank account against their business registration. For silk, verify the product composition tags match claimed mulberry silk content." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I ship goods from Hangzhou?", a: "Sea freight ships from Ningbo-Zhoushan Port (~220 km, 2 hours by road) — the world’s number-one port by cargo tonnage, with 191 berths trading with 560+ ports in 90+ countries. Shanghai Port is also accessible (~170 km). Air freight departs from Hangzhou Xiaoshan International Airport (HGH) with 131 destinations and 52 airlines, including direct flights to Los Angeles, Dubai, Doha, and Cairo." },
      { q: "How do I get to Sijiqing market?", a: "Metro Line 7 to Moye Tang (莫邪塘) station or Line 9 to Guanyin Tang (观音塘) station (2 minute walk from C2 exit). Do not drive — parking is a nightmare in the area. Arrive early in the morning for wholesale pricing." },
      { q: "Where should I stay in Hangzhou for sourcing?", a: "For Sijiqing: JI Hotel Sijiqing (from $19/night) or Home Inn Sijiqing (from $16/night, rated 8.7). For silk markets: near Fengqi Road or Xinhua Road. For business meetings: Sofitel Hangzhou Westlake has meeting rooms. Budget hotels run $16-30/night; mid-range business hotels $50-100/night. Always book near a metro station." },
      { q: "Can I do a day trip to Yiwu from Hangzhou?", a: "Yes. Take the high-speed train from Hangzhou East Station — fastest service is 34 minutes, typical journey about 1 hour. There are 40+ daily trains. You can spend a full day at Yiwu International Trade City and return the same evening. Many experienced buyers combine 3 days in Hangzhou with 1-2 days in Yiwu." },
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
            Hangzhou Sourcing <span className="accent-word">FAQ</span>
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
