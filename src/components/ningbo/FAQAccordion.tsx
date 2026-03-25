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
    category: "Getting started in Ningbo",
    faqs: [
      { q: "Is Ningbo good for sourcing?", a: "Yes, for specific categories. Ningbo is China\u2019s factory-direct manufacturing powerhouse, especially strong in home products, kitchenware, hardware tools, small appliances, and stationery. It has the world\u2019s busiest port by cargo throughput (1.4 billion tonnes in 2025), meaning faster and cheaper shipping than inland manufacturing cities. However, it\u2019s not a walk-in market city \u2014 you need to pre-arrange factory visits." },
      { q: "What products is Ningbo best known for?", a: "Ningbo\u2019s top categories are home products and kitchenware (Yuyao and Cixi), hardware tools and die-casting molds (Yinzhou and Beilun \u2014 25% of China\u2019s national die-casting output), small appliances (Cixi produces ~60% of global small appliances), stationery and office supplies (Cixi, ~20% of China\u2019s total), and auto parts (China\u2019s largest aftermarket cluster)." },
      { q: "How is Ningbo different from Yiwu?", a: "They serve completely different models. Ningbo is factory-direct \u2014 you visit manufacturers in industrial townships like Cixi and Yuyao, minimum orders are higher, and you get OEM/ODM capability. Yiwu is market-based \u2014 you walk through massive wholesale buildings, MOQs are very low, and goods are ready-made. Many buyers combine both cities on one trip (2 hours apart)." },
      { q: "Can I source from Ningbo without visiting?", a: "Yes. Many Ningbo factories list on 1688.com and Alibaba.com (1,603+ Ningbo suppliers listed). WorldFirst\u2019s AI Sourcing Agent lets you search 1688 in English. Filter by location to 宁波 (Ningbo), 慈溪 (Cixi), or 余姚 (Yuyao). However, factory visits are strongly recommended for OEM/ODM projects to verify capability." },
      { q: "Do I need a sourcing agent in Ningbo?", a: "More so than in Guangzhou or Shenzhen. English proficiency is lower in Ningbo\u2019s factory areas. Several agents are based locally: Dong Sourcing (household goods, hardware), B2C Sourcing (full-service QC and shipping), Skylark (multilingual), and Greentime (plastics, small appliances). A local interpreter costs around 500\u2013800 CNY per day." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What Ningbo products are strong on 1688?", a: "Ningbo is a key 1688 industrial belt (产业带) hub. Strong categories include plastic housewares, hardware tools, kitchenware, small home appliances, stationery, lighting, and industrial machinery. Many Cixi and Yuyao factories have 1688 stores for domestic wholesale." },
      { q: "How do I pay 1688 suppliers in Ningbo?", a: "Same as any 1688 purchase \u2014 payments are in CNY. Use 1688 World Pay (WorldFirst\u2019s integrated payment at checkout), or pay via WorldFirst\u2019s World Account which lets you hold, convert, and send CNY without a Chinese bank account. Never wire money without verifying the supplier first." },
      { q: "Is 1688 safe for international buyers sourcing from Ningbo?", a: "1688 has domestic buyer protections (Alipay escrow) but limited international protections. WorldFirst mitigates key risks: AI Sourcing Agent for English search, 1688 World Pay for CNY payments, and WorldTrade escrow where payment is held until shipment is confirmed. Always verify factory badges before ordering." },
    ],
  },
  {
    category: "Trade shows in Ningbo",
    faqs: [
      { q: "What are the main trade shows in Ningbo?", a: "Key events include CNISE (China Ningbo International Stationery Fair, March, 1,872 exhibitors, 60,000 sqm), CHAE (Cixi Home Appliances Expo, March, 500+ exhibitors), CAPAFAIR (Auto Parts & Aftermarket Fair, August, 1,900+ exhibitors), the Mold Capital Expo (May), and the Cross-Border E-Commerce Expo (May). All are held at or near the Ningbo International Convention & Exhibition Center (NICEC)." },
      { q: "Is it worth attending Ningbo trade shows vs. Canton Fair?", a: "They serve different purposes. Canton Fair is the broadest trade event in China (25,000+ exhibitors across all categories). Ningbo\u2019s shows are specialist \u2014 CNISE is the top stationery fair in China, CHAE is the best small appliance expo, and CAPAFAIR is China\u2019s only export-oriented auto aftermarket fair. Attend Ningbo shows if those specific categories are your focus." },
      { q: "When is the best time to visit Ningbo?", a: "March\u2013May (post-Chinese New Year, new products released, multiple trade shows) and September\u2013November (pleasant weather). Avoid January\u2013February (Chinese New Year factory shutdown) and July\u2013August (hot, humid, 28\u00b0C average, typhoon risk). Ningbo has a subtropical monsoon climate with distinct rainy seasons in March\u2013June and August\u2013September." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How do Ningbo factory prices compare?", a: "Ningbo factory-direct prices are typically 15\u201330% lower than competing regions for housewares and hardware, according to local industry data. Compared to Alibaba.com export pricing, sourcing through 1688 or factory-direct can save 20\u201350%. The port advantage also reduces shipping costs \u2014 Ningbo-Zhoushan Port has 300+ routes to 700+ ports in 200+ countries." },
      { q: "How do I verify a Ningbo supplier?", a: "Cross-reference their business licence with China\u2019s National Enterprise Credit Information System. Verify their 1688 store registration matches their factory details. Use WorldFirst\u2019s beneficiary verification to check their bank account against business registration. For first orders, use third-party inspection services like SGS or T\u00dcV for pre-shipment checks." },
      { q: "What MOQs should I expect in Ningbo?", a: "Higher than Yiwu but negotiable. Standard factory MOQs range from 500\u20135,000 units depending on the product and customization level. Some suppliers accept trial runs as low as 500 units for new customers. Stationery and small housewares tend toward lower MOQs; appliances and hardware molds require larger commitments." },
      { q: "How do I pay Ningbo suppliers safely?", a: "Never wire money without verification. Use WorldFirst\u2019s beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better rates. Standard terms: 30% deposit to start production, 70% balance before shipment against inspection report." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I ship goods from Ningbo?", a: "Ningbo-Zhoushan Port is the world\u2019s #1 port by cargo throughput \u2014 300+ shipping routes to 700+ ports in 200+ countries. Container throughput hit 43 million TEU in 2025 (3rd globally). Sea freight is the primary method, with faster lead times and more route options than most Chinese ports. Ningbo Lishe Airport handles air freight for samples and urgent orders." },
      { q: "How do I get to Ningbo?", a: "High-speed rail from Shanghai takes 1.5\u20132.5 hours (56 trains daily, every 20 minutes, \u00a5103\u2013276). From Hangzhou it\u2019s about 1 hour. Ningbo Lishe Airport (NGB) has domestic flights and limited international routes to Seoul, Taipei, Kuala Lumpur, Hong Kong, Singapore, and Tokyo." },
      { q: "Where should I stay in Ningbo?", a: "Haishu District (downtown core) \u2014 55%+ of visitors stay here. Near the railway station, airport, and city-centre wholesale markets. Hotels range from budget (ibis, ~US$44/night) to mid-range (Crowne Plaza, Holiday Inn Express) to high-end (Sheraton in Yinzhou). If visiting Cixi or Yuyao factories intensively, consider staying there instead to save commute time." },
      { q: "Does the metro reach Cixi and Yuyao?", a: "No. Ningbo\u2019s metro system (7 lines as of 2025) serves the urban districts only \u2014 Haishu, Jiangbei, Zhenhai, Beilun, and Yinzhou. Cixi and Yuyao require a taxi or hired car, approximately 45\u201360 minutes from central Ningbo. Plan no more than 2 factory visits per day when visiting these townships." },
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
            Ningbo Sourcing <span className="accent-word">FAQ</span>
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

              {/* Questions */}
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
