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
    category: "Getting started in Chongqing",
    faqs: [
      { q: "Why is Chongqing called the global laptop capital?", a: "Chongqing produces roughly 30% of the world's laptops — over 55 million units annually, ranking #1 globally for seven consecutive years. It started when Chongqing's mayor visited HP headquarters in Palo Alto in May 2008 and persuaded them to set up a manufacturing base. Acer followed in 2011. Today HP, Acer, ASUS, Toshiba, and Lenovo all manufacture here." },
      { q: "Can I source laptops directly from Chongqing factories?", a: "No. Like Zhengzhou's Foxconn, Chongqing's laptop factories are contract manufacturing for specific brands (HP, Acer, ASUS, etc.). You cannot source finished branded laptops. However, the peripheral ecosystem is accessible: laptop bags, cases, keyboards, mice, cooling pads, docking stations, and accessories. Search 重庆电脑配件 on 1688." },
      { q: "What products is Chongqing best for sourcing?", a: "Motorcycles are the standout sourcing opportunity — Chongqing has four major brands (Zongshen, Lifan, Loncin, Jialing) with complete supply chains and established export infrastructure. Auto parts are deep and diversified thanks to Changan, BYD, Sokon, and Ford JV. Hotpot products are an emerging export category. Laptop accessories fill a niche. CIMAMotor (September) is the must-attend trade show." },
      { q: "How does Chongqing compare to Guangzhou or Shenzhen for sourcing?", a: "Different strengths entirely. Guangzhou is best for fashion, leather, beauty, textiles. Shenzhen dominates electronics and smart hardware. Chongqing is the place for motorcycles, auto parts, and food products. The cities are complementary, not competing. Many importers visit coastal cities for consumer goods and Chongqing specifically for vehicles and food." },
    ],
  },
  {
    category: "Motorcycles & automotive",
    faqs: [
      { q: "What motorcycle brands are headquartered in Chongqing?", a: "Four major brands: Zongshen (宗申, 30,000+ employees, 50 billion+ yuan revenue, exports to 100+ countries), Lifan (力帆, founded 1992, factories in Vietnam, Thailand, Turkey, exports to 117 countries), Loncin (隆鑫), and Jialing (嘉陵). The complete manufacturing chain — engines, frames, electronics, accessories — is all manufactured locally." },
      { q: "How do I source motorcycles from Chongqing?", a: "Start with CIMAMotor (September 19–22, 2026) — China's premier motorcycle exhibition, held at the Chongqing International Expo Center. On 1688, search 重庆摩托车 (Chongqing motorcycle), 摩托车发动机 重庆 (motorcycle engines), 摩托车配件 重庆 (motorcycle parts). Also try Made-in-China.com and Alibaba for English storefronts with international trade experience." },
      { q: "What is CIMAMotor and when is it held?", a: "CIMAMotor (China International Motorcycle Trade Exhibition) is China's premier motorcycle show, now in its 24th edition. The 2026 edition runs September 19–22 at the Chongqing International Expo Center. It's essential for anyone sourcing motorcycles, motorcycle parts, or related products from China." },
      { q: "What car brands manufacture in Chongqing?", a: "Changan Automobile (one of China's 'Big Four' automakers) is headquartered in Jiangbei, Chongqing, with 21 manufacturing bases and 76 plants worldwide. BYD has assembly operations here. Sokon (maker of SERES/AITO with Huawei) is Chongqing-based. The Changan Ford joint venture adds international brand manufacturing. In H1 2024, Chongqing exported over 220,000 vehicles." },
      { q: "Is Chongqing good for auto parts sourcing?", a: "Yes. With Changan, BYD, Sokon, and Ford JV all manufacturing here, the auto parts supply chain is deep. Engines, transmissions, chassis components, electronics, interior trim, and aftermarket parts are all locally sourced. Search 重庆汽车配件 on 1688. The secondhand car export industry is also growing — 3,743 units worth US$97.17 million exported in H1 2024." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 search terms should I use for Chongqing products?", a: "Key terms: 重庆摩托车 (motorcycles), 摩托车发动机 重庆 (motorcycle engines), 摩托车配件 重庆 (motorcycle parts), 重庆汽车配件 (auto parts), 重庆笔记本电脑 (laptops), 重庆电脑配件 (computer parts), 火锅底料 重庆 (hotpot base), 重庆调味品 (condiments), 花椒 重庆 (Sichuan peppercorn), 宗申摩托 (Zongshen), 隆鑫摩托 (Loncin)." },
      { q: "How do I pay Chongqing suppliers on 1688?", a: "1688 payments are in CNY. Use 1688 World Pay (WorldFirst's integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via WorldFirst's World Account. Standard China payment practices apply: LC, T/T, and Alibaba Trade Assurance are all used for larger orders." },
    ],
  },
  {
    category: "Food & hotpot products",
    faqs: [
      { q: "Can I source hotpot seasonings from Chongqing for export?", a: "Yes. Chongqing hotpot products are an emerging export category, already shipped to 20+ countries. Industrial parks produce 7,000+ tonnes of hotpot condiments per month. Key companies include Zhoujunji (周君记, est. 1993) and Qinma (秦妈). On 1688, search 火锅底料 重庆 (hotpot base), 重庆调味品 (condiments), 花椒 重庆 (Sichuan peppercorn)." },
      { q: "What food products can I source from Chongqing?", a: "Hotpot bases (麻辣, 清汤, 番茄 — spicy, clear broth, tomato flavours), Sichuan peppercorn products, fermented bean paste (豆瓣酱), chilli oils, dried chilies, and preserved foods. Visit Panxi Wholesale Market (盘溪批发市场) for ingredient sourcing — 3 floors of spices and dried goods. The government targets 70 billion yuan contribution from the hotpot industry by 2027." },
      { q: "Where is Panxi Market and what does it sell?", a: "Panxi Wholesale Market (盘溪批发市场) is in Jiangbei district. It has 3 floors dedicated to spices, dried chilies, Sichuan peppercorns, and dried goods. It's essential for anyone sourcing hotpot or food ingredients from Chongqing. The market serves both domestic distribution and export buyers." },
    ],
  },
  {
    category: "CR Express & logistics",
    faqs: [
      { q: "What is the Chongqing to Duisburg CR Express rail route?", a: "The Chongqing–Duisburg route was the FIRST China-Europe freight train ever, launched in March 2011. It covers 11,179 km in 13–16 days via Alashankou/Horgos, Kazakhstan, Russia, Belarus, Poland, to Duisburg, Germany. On November 15, 2024, the 100,000th China-Europe freight train departed from Chongqing to Duisburg." },
      { q: "How long does shipping from Chongqing to Europe take by rail?", a: "13–16 days by CR Express to Duisburg, Germany. Compare: 36+ days by sea freight from Chinese coastal ports, or 3–5 days by air at 5–10x the cost. CR Express offers the middle ground for time-sensitive goods that don't justify air freight pricing." },
    ],
  },
  {
    category: "Practical & travel",
    faqs: [
      { q: "How do I get to Chongqing?", a: "Fly into Chongqing Jiangbei International Airport (CKG) — major hub with domestic and international flights to Seoul, Tokyo, Bangkok, Singapore, Dubai, and more. T3 terminal, approximately 30 km from city centre. By HSR: Chengdu (1 hour), Guangzhou (6 hours), Shanghai (7 hours), Beijing (7.5 hours). Chongqing Rail Transit has 10+ lines including the famous monorail through buildings (Line 2)." },
      { q: "What's the best time of year to visit Chongqing for business?", a: "Spring (March–May) or autumn (September–November). Chongqing is infamously hot — one of China's 'three furnaces' — with July–August temperatures regularly exceeding 40°C. CIMAMotor in September is a good anchor for a motorcycle sourcing trip. Avoid Chinese New Year (February) when most factories close." },
      { q: "What is the Chongqing–Chengdu economic corridor?", a: "Chengdu is just 1 hour from Chongqing by HSR, creating a combined economic zone. The two cities have different but complementary industries. Many importers combine trips to both. Chengdu adds food processing, pharmaceuticals, and consumer electronics to Chongqing's motorcycles and automotive." },
      { q: "Is the terrain in Chongqing difficult for factory visits?", a: "Yes. Chongqing is literally built on mountains at the confluence of the Yangtze and Jialing Rivers. Factory visits may involve steep hills, long drives, and dramatic elevation changes. Plan accordingly and allow extra travel time between meetings. The upside: your factory hosts will likely take you to eat authentic Chongqing hotpot." },
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
            Chongqing Sourcing <span className="accent-word">FAQ</span>
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
