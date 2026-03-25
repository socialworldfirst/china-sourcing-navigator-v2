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
    category: "Getting started in Shanghai",
    faqs: [
      { q: "Is Shanghai good for sourcing?", a: "Yes, but differently from other Chinese cities. Shanghai is China's trade services capital — world's busiest port, largest free trade zone, headquarters of every major freight forwarder and inspection agency. It's the best city for coordinating multi-supplier operations, quality control, trade finance, and logistics across the Yangtze River Delta. It's not the cheapest place to find factories directly." },
      { q: "What products is Shanghai best known for?", a: "Shanghai's strongest categories are trade services (freight forwarding, QC, customs brokerage), fashion and design (South Bund tailoring, Shanghai Fashion Week, Qipu Road wholesale), automotive parts (SAIC Motor, Tesla, HASCO), semiconductors and IC design (Zhangjiang Hi-Tech Park), chemicals (Shanghai Chemical Industry Park), and food & beverage equipment (SIAL, HOTELEX trade shows)." },
      { q: "Is Shanghai better than Guangzhou for sourcing?", a: "They serve very different needs. Shanghai is better for trade services, multi-supplier coordination, high-tech components, fashion design, and international logistics infrastructure. Guangzhou is better for consumer goods manufacturing, wholesale markets, and direct factory access. Shanghai is where you command your supply chain; Guangzhou is where you find the products." },
      { q: "Are Shanghai suppliers actually manufacturers?", a: "Mostly no. The #1 insight from experienced importers: most suppliers in Shanghai are trading companies or representative offices of manufacturers in Zhejiang (south) and Jiangsu (north). Factories can't afford Shanghai real estate. This isn't necessarily bad — trading companies aggregate suppliers and handle logistics — but verify if direct factory access matters to your business." },
      { q: "Do I need to speak Chinese in Shanghai?", a: "Shanghai has the highest English proficiency of any Chinese city, but you'll still need Chinese for wholesale markets and supplier negotiations. The South Bund Fabric Market tailors often speak basic English. For Qipu Road, bring a translation app. For trade shows like CIIE and Automechanika, many exhibitors have English-speaking staff." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "How do Shanghai suppliers on 1688 compare to Guangdong?", a: "Shanghai/YRD suppliers on 1688 are strong in advanced manufacturing, tech components, fashion, and chemicals. About 50% of 1688 merchants are factories; the rest are trading companies. Many Shanghai-listed suppliers on 1688 aggregate from Zhejiang and Jiangsu factories. Tip: Filter by Zhejiang (浙江) or Jiangsu (江苏) if you want direct factory access in the YRD region." },
      { q: "How do I pay suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Options include: 1688 World Pay (WorldFirst's integrated payment), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY. WorldFirst's World Account lets you hold, convert, and send CNY without a Chinese bank account." },
      { q: "How do I verify a Shanghai supplier is legitimate?", a: "Cross-reference their business licence with the National Enterprise Credit Information System. Check if the registered address is in Shanghai proper (likely a trading company) or in an outer district like Songjiang, Fengxian, or Jiading (more likely an actual factory). Use WorldFirst's beneficiary verification to check their bank account against their business registration." },
    ],
  },
  {
    category: "Trade shows in Shanghai",
    faqs: [
      { q: "What are the biggest trade shows in Shanghai?", a: "CIIE (November, 200,000 m² — imports into China), Automechanika Shanghai (December, 383,000 m² — automotive), SIAL Shanghai (May, 200,000 m² — food & beverage), HOTELEX (March/April, 400,000 m² — hospitality), CIIF (October — industrial automation), AWE (March — appliances & electronics), and MWC Shanghai (June — mobile/telecom). Shanghai has more major international trade shows than any other Chinese city." },
      { q: "What is the NECC and where is it?", a: "The National Exhibition and Convention Center (NECC) in Hongqiao/Qingpu is the world's largest single-block exhibition building — 1.5 million m² total, 500,000 m² of exhibition space. It hosts CIIE, Automechanika, HOTELEX, and CIIF. Accessible via Metro Lines 2 and 17. It's about 30 minutes from Hongqiao Airport and 45 minutes from downtown by metro." },
      { q: "What is CIIE and should I attend?", a: "The China International Import Expo is unique — it's specifically for imports INTO China, hosted by the Ministry of Commerce. Attend if you want to sell into China, understand what China is importing, or network with Chinese distributors and importers. It's NOT a typical sourcing show where you find Chinese suppliers." },
      { q: "Which Shanghai trade show is best for first-time sourcing?", a: "It depends on your product. SIAL for food & beverage, Automechanika for automotive parts, AWE for home appliances and electronics, HOTELEX for hospitality equipment. For general industrial sourcing, CIIF covers automation, robotics, and manufacturing technology. Check the dates carefully — Shanghai has shows year-round." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "Is sourcing from Shanghai expensive?", a: "Shanghai has the highest price levels of any Chinese sourcing city. Operating costs (rent, labor, overhead) are significantly higher than Guangzhou, Shenzhen, or Yiwu. However, you're paying for infrastructure — world-class logistics, financial services, legal protections, and the ability to coordinate across the entire YRD manufacturing belt from one city." },
      { q: "How do I pay Chinese suppliers safely?", a: "Never wire money without verification. Use WorldFirst's beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better rates. Always pay to the company's registered business account, not personal accounts." },
      { q: "What payment terms are standard in Shanghai?", a: "Standard terms: 30% deposit to start production, 70% balance before shipment (against inspection report or photos). Trading companies may require different terms than factories. FOB Shanghai is the most common Incoterm — the supplier delivers goods to the port, you arrange shipping. Always clarify Incoterms before agreeing on prices to avoid surprise costs." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I ship goods from Shanghai?", a: "Sea freight from the Port of Shanghai — the world's busiest, 55+ million TEU annually. Yangshan Deep Water Port handles the largest vessels. Air freight from Pudong International Airport (237 destinations, 84 airlines) for urgent orders and samples. Express courier (DHL, FedEx) for samples. FOB Shanghai is the standard Incoterm." },
      { q: "Can I visit factories from Shanghai?", a: "Yes, but expect to travel. Most factories are in outer districts (Songjiang, Fengxian, Jiading — 1-2 hours by car) or in neighboring Zhejiang (Hangzhou is 45 minutes by high-speed rail, Suzhou is 25 minutes). A sourcing agent based in Shanghai can coordinate factory visits across the YRD region." },
      { q: "What's the best time of year to visit Shanghai?", a: "March–May (spring trade shows, pleasant weather) and September–November (autumn trade shows, CIIE in November, CIIF in October). Avoid January–February (Chinese New Year shutdown), June–July (Meiyu/plum rain season — constant rain and humidity), July–August (extreme heat, 35°C+), and the first week of October (National Day holiday)." },
      { q: "Where should I stay in Shanghai for sourcing?", a: "For trade shows at NECC: Hongqiao area (InterContinental Shanghai Hongqiao NECC is inside the venue). For market visits: Jing'an or Huangpu districts (easy access to Qipu Road, South Bund, Yuyuan). For Pudong trade shows (SNIEC): stay near Longyang Road metro. The Maglev train connects Pudong Airport to Longyang Road in 8 minutes at 430 km/h." },
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
            Shanghai Sourcing <span className="accent-word">FAQ</span>
          </h2>
          <p className="text-wf-text-secondary max-w-lg mx-auto">
            {faqData.reduce((sum, cat) => sum + cat.faqs.length, 0)} answers organised by topic
          </p>
        </div>

        {/* Category cards */}
        <div className="space-y-2">
          {faqData.map((cat) => (
            <div key={cat.category} className="bg-white border border-wf-border rounded-xl overflow-hidden">
              {/* Category header */}
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
