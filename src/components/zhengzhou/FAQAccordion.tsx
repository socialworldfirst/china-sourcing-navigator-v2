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
    category: "Getting started in Zhengzhou",
    faqs: [
      { q: "Why is Zhengzhou called \"iPhone City\"?", a: "Zhengzhou's Foxconn facility is the world's largest iPhone assembly plant. The campus spans 5.6 square kilometres and at peak capacity employs 200,000 workers producing 500,000 iPhones per day. Depending on the model cycle, 50–70% of global iPhone production runs through this single facility." },
      { q: "Can I source electronics from Zhengzhou?", a: "Not iPhones — the Foxconn plant is a closed Apple supply chain facility. However, the surrounding electronics ecosystem is accessible. Phone cases, screen protectors, chargers, cables, packaging, and accessories are all manufactured by the supplier cluster that grew around Foxconn. Search 郑州手机配件 on 1688." },
      { q: "Is Zhengzhou a good base for sourcing trips to central China?", a: "Excellent. Zhengzhou is the most connected city in China by rail. It sits at the junction of the Beijing–Guangzhou and Lianyungang–Lanzhou railways. You can reach Beijing in 2 hours, Guangzhou in 4 hours, and any major Chinese city within a day by high-speed rail. Use it as a hub for visiting multiple manufacturing regions." },
      { q: "How does Zhengzhou compare to coastal cities for sourcing?", a: "Zhengzhou is not a factory-floor city like Shenzhen or Guangzhou. You don't come here to walk factory floors. You come for the logistics infrastructure (CR Express, rail hub, cargo airport), food processing supply chain, and the electronics accessories ecosystem. For general consumer goods sourcing, coastal cities remain stronger." },
    ],
  },
  {
    category: "CR Express & logistics",
    faqs: [
      { q: "What is CR Express and how does Zhengzhou connect to Europe by rail?", a: "China Railway Express (CR Express or 中欧班列) is the freight rail service linking Chinese cities to European destinations. Zhengzhou's route runs 10,245 km to Hamburg via Alashankou, Kazakhstan, Russia, Belarus, and Poland. Transit time is approximately 15 days — less than half the 36-day sea freight timeline. In 2023, 1,881 CR Express trains departed Zhengzhou." },
      { q: "How long does shipping from Zhengzhou to Europe take by rail vs sea?", a: "Rail via CR Express: approximately 15 days to Hamburg. Sea freight from Chinese coastal ports: 36+ days. Air freight: 3-5 days but 5-10x the cost. CR Express offers the middle ground — significantly faster than sea at a fraction of air freight prices. Ideal for time-sensitive goods that don't justify air shipment." },
      { q: "What are the logistics advantages of Zhengzhou for exporters?", a: "Three-mode integration: rail (CR Express + domestic HSR network), air (Zhengzhou Xinzheng International Airport, CGO — China's 6th busiest cargo airport with 8 intercontinental routes), and road (national highway junction). Products assembled in Zhengzhou can reach any major Chinese city within 24 hours by rail and Europe within 15 days." },
      { q: "Is Zhengzhou airport good for cargo shipments?", a: "Yes. Zhengzhou Xinzheng International Airport (CGO) is China's 6th busiest cargo airport, with 8 intercontinental cargo routes connecting 100+ cities across 24 countries. It handles significant air freight volume, partly driven by the iPhone logistics demand from the nearby Foxconn campus." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 search terms should I use for Zhengzhou products?", a: "Key terms: 郑州电子产品 (electronic products), 郑州手机配件 (phone accessories), 郑州食品加工 (food processing), 速冻食品 郑州 (frozen food), 方便面 河南 (instant noodles Henan), 郑州鞋子批发 (shoes wholesale), 郑州服装批发 (clothing wholesale), 宇通客车 配件 (Yutong bus parts), 郑州汽车配件 (auto parts), 郑州物流 (logistics), 中欧班列 郑州 (CR Express)." },
      { q: "How do I pay Zhengzhou suppliers on 1688?", a: "1688 payments are in CNY. Use 1688 World Pay (WorldFirst's integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via WorldFirst's World Account. For food products, ensure the supplier has valid food production licences before ordering." },
    ],
  },
  {
    category: "Food processing & specialties",
    faqs: [
      { q: "What food products are manufactured in Zhengzhou?", a: "Henan is China's #1 wheat-producing province. Zhengzhou is a major production base for frozen dumplings (三全 Sanquan, 思念 Sinian — both headquartered here), instant noodles, flour products, and snack foods. The city also hosts the Zhengzhou Commodity Exchange, one of China's three national commodity futures exchanges." },
      { q: "What frozen food brands are manufactured in Zhengzhou?", a: "The two largest are Sanquan (三全, founded 1987) and Sinian (思念, founded 1997). Both are headquartered in Zhengzhou and are publicly listed companies. Together they dominate China's frozen food market with products including dumplings, tangyuan (汤圆), steamed buns, and spring rolls." },
      { q: "Who is Yutong and why are they important for Zhengzhou manufacturing?", a: "Yutong Bus (宇通客车) is the world's largest bus and coach manufacturer by volume, headquartered in Zhengzhou. They produce approximately 150,000 vehicles per year. The Yutong supply chain supports a substantial local auto parts and commercial vehicle components industry." },
    ],
  },
  {
    category: "Practical & logistics",
    faqs: [
      { q: "How do I get to Zhengzhou from Beijing, Shanghai, or Guangzhou?", a: "By high-speed rail: Beijing to Zhengzhou East in 2 hours, Guangzhou to Zhengzhou East in 4 hours, Shanghai to Zhengzhou in approximately 4 hours. By air: Zhengzhou Xinzheng International Airport (CGO) has domestic flights to all major Chinese cities and international flights to Asian hubs. Metro connects the airport to the city centre." },
      { q: "What's the best time of year to visit Zhengzhou for business?", a: "Spring (April–May) or autumn (September–October). Zhengzhou has a temperate continental monsoon climate with four distinct seasons. Avoid extreme summer heat (July–August, often exceeding 38°C) and cold winters. The spring window overlaps with Canton Fair in Guangzhou for a combined trip." },
      { q: "Do I need a translator in Zhengzhou?", a: "Strongly recommended. English is less commonly spoken in Zhengzhou than in coastal cities like Guangzhou or Shenzhen. Hire a local interpreter (approximately 400–600 CNY/day) or use translation apps. Have your product specifications written in Chinese before arriving." },
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
            Zhengzhou Sourcing <span className="accent-word">FAQ</span>
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
