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
    category: "Getting started in Zhongshan",
    faqs: [
      { q: "What is Zhongshan best known for sourcing?", a: "Lighting. Guzhen town produces roughly 70% of China’s lighting products and around half the world’s output. 30,000+ registered lighting companies operate within the town. Beyond lighting, Zhongshan has strong clusters in locks and hardware (Xiaolan), electrical appliances (Dongfeng, Huangpu, Nantou), mahogany furniture (Dachong), and casual wear (Shaxi)." },
      { q: "What is the ‘one town, one product’ model?", a: "Zhongshan’s defining economic feature: every town specializes in a single product cluster, with local suppliers providing all parts and components. Guzhen does lighting, Xiaolan does locks, Dongfeng does small appliances, Dachong does mahogany furniture, Shaxi does casual wear. This creates hyper-concentrated, vertically integrated supply chains at the town level — which means deep expertise and competitive pricing within each cluster." },
      { q: "Is Zhongshan hard to get to?", a: "Not anymore. The Shenzhen-Zhongshan Link opened in June 2024, cutting travel from Shenzhen from 2 hours to roughly 30 minutes. Guangzhou Baiyun Airport is about 3 hours by intercity bus (free shuttle during the Guzhen Lighting Fair). Shenzhen Bao’an Airport is now about 1.5 hours by car. Guzhen has its own railway station within walking distance of the main lighting markets." },
      { q: "Can I source lighting from Zhongshan without visiting?", a: "Yes. Many buyers start on 1688.com searching for 古镇灯饰 (Guzhen lighting). WorldFirst’s AI Sourcing Agent lets you search in English. You can also hire a local sourcing agent. However, visiting at least once gives you quality verification — similar-looking LED products from different Guzhen suppliers can vary substantially in quality." },
      { q: "How does Zhongshan compare to Guangzhou for lighting?", a: "Guangzhou has lighting wholesale markets and hosts GILE (the Guangzhou International Lighting Exhibition). But Guzhen is where the factories are. Prices in Guzhen are 30–50% below Guangzhou wholesale. For lighting specifically, Guzhen is the source — Guangzhou is the showroom." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 search terms work for Zhongshan products?", a: "For lighting: 古镇灯饰, 中山LED灯具, 古镇吸顶灯, 古镇射灯. For locks: 小榄锁具, 中山智能锁. For appliances: 中山小家电, 东凤电器. Add 源头工厂 (source factory) to filter for actual manufacturers rather than trading companies." },
      { q: "How do I pay suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Use 1688 World Pay (WorldFirst’s integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via a WorldFirst World Account. Always pay to the company’s registered business account, not personal accounts." },
      { q: "Is 1688 safe for international buyers?", a: "1688 has domestic buyer protections (Alipay escrow) but limited international protections. WorldFirst mitigates key risks through: AI Sourcing Agent (English search), 1688 World Pay (CNY payments), and WorldTrade escrow (payment held until shipment confirmed)." },
    ],
  },
  {
    category: "Guzhen Lighting Fair",
    faqs: [
      { q: "What is the Guzhen International Lighting Fair?", a: "The world’s largest lighting-specific trade fair, held biannually in Guzhen since 1982. The spring edition (March) and autumn edition (October) each attract 200,000+ visits. The 34th edition in March 2026 drew 240,000+ visits from 127 countries across 1.5 million m² of exhibition space. It’s approved by China’s Ministry of Commerce." },
      { q: "How does the fair layout work?", a: "The fair runs across a ‘1+8+N’ layout: 1 main venue (Guzhen Convention and Exhibition Center) + 8 official sub-venues (including Lihe, Huayi, Star Alliance, and Times Lighting Plaza) + N fringe showrooms across town. Free shuttle buses connect all venues. The sub-venues are permanent showroom buildings that operate year-round." },
      { q: "When should I attend?", a: "The spring edition (March) is the larger of the two and showcases the year’s new product launches. The autumn edition (October) is comparable in scale. Book hotels well in advance — Guzhen’s 63+ hotels fill up during fair weeks. The summer edition (May) is smaller and focuses on outdoor and commercial lighting." },
      { q: "Is registration free?", a: "Pre-registration costs 100 RMB less than on-site registration. Register via WeChat, denggle.com, or the 博华灯饰优选 mini-program. The fair offers free shuttle buses from Guzhen and Xiaolan railway stations, Guangzhou Baiyun Airport, and Zhuhai Airport." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How cheap is factory-direct pricing in Guzhen?", a: "Factory-direct prices in Guzhen run 10–20% of Western retail prices for the same category of product. Wholesale prices are 50%+ below import market rates. Street-side wholesale factories offer the lowest prices. Premium showrooms (Star Alliance, Huayi) charge more but offer curated quality. Always compare 3–5+ quotes for the same product." },
      { q: "What are typical MOQs and lead times?", a: "MOQ varies widely. Some factories accept 50–100 pieces, many require 300+. Custom or OEM orders often require 500–1,000+ pieces. Standard lead time is 15–30 days after sample approval and deposit. Sample turnaround is typically 3–7 days. Rush orders are possible for an additional fee." },
      { q: "What certifications should I check for lighting products?", a: "CE (Europe), UL (North America), SAA (Australia), and RoHS. Always verify certifications with the issuing body — counterfeit certifications are a known issue in the Guzhen cluster. Check thermal management design, LED driver longevity, solder joints, wiring quality, and housing materials." },
      { q: "How do I verify a Zhongshan supplier is legitimate?", a: "Cross-reference their business licence with gsxt.gov.cn. Match their 1688 store registration against their market booth licence. Use WorldFirst’s beneficiary verification to check their bank account against their business registration before sending any deposit. Visit their factory if possible." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I ship goods from Zhongshan?", a: "Zhongshan has its own port for container shipping. For larger volumes, goods are trucked to Guangzhou’s Nansha Port (major international container terminal). Sea freight costs approximately 4.5 RMB/kg vs air freight at around 35 RMB/kg. Most lighting merchants handle domestic delivery arrangements. Note that lighting products are bulky and fragile — packaging costs can be significant." },
      { q: "What’s the best time of year to visit Zhongshan?", a: "March (spring Guzhen Lighting Fair) and October (autumn fair). These are peak sourcing seasons. Avoid January–February (Chinese New Year shutdown), July–August (extreme Guangdong heat and humidity), and the first week of October (National Day holiday)." },
      { q: "Where should I stay in Guzhen?", a: "Hilton Garden Inn Zhongshan Guzhen is in the commercial district, adjacent to Lihe Lighting Expo Center and walking distance from Guzhen Railway Station. The Westin Zhongshan Guzhen is about 500 metres from Lihe. Times Lighting Plaza has a hotel on floors 10–25 — literally above the showrooms. Budget options start from around US$11–33/night." },
      { q: "How has the Shenzhen-Zhongshan Link changed things?", a: "The 24 km bridge-tunnel complex opened June 30, 2024, cutting Shenzhen-to-Zhongshan travel from 2 hours to roughly 30 minutes. It cost US$4.83 billion and set 10 world records. For sourcing, it transforms Zhongshan from a relatively isolated western-PRD city into a day trip from Shenzhen. You can now combine Shenzhen electronics sourcing with Guzhen lighting visits in a single trip." },
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
            Zhongshan Sourcing <span className="accent-word">FAQ</span>
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
