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
    category: "Getting started in Dongguan",
    faqs: [
      { q: "What products is Dongguan famous for manufacturing?", a: "Dongguan is the world\u2019s factory floor. Its strongest sectors are plastics and precision moulds (Changping, Hengli, Chang\u2019an), electronics assembly (trillion-yuan cluster \u2014 1 in 5 smartphones worldwide), furniture (Houjie for trade, Dalingshan for export manufacturing), toys (China\u2019s largest toy export base \u2014 1 in 3 Barbie dolls), footwear (Houjie \u2014 500M+ pairs exported annually), knitwear (Dalang \u2014 the World\u2019s Sweater Capital), and paper/packaging (Zhongtang, Machong)." },
      { q: "How is Dongguan different from Shenzhen for sourcing?", a: "Shenzhen is a trading and innovation hub \u2014 Huaqiangbei markets are where you find components and samples. Dongguan is where the actual manufacturing happens. Dongguan has 210,000+ industrial enterprises, overwhelmingly factory-direct. If you need OEM/ODM production at scale, Dongguan is the better choice. If you need small-batch prototyping or electronic components from market stalls, start in Shenzhen." },
      { q: "Is Dongguan suitable for small importers or only large brands?", a: "Both. Dongguan factories historically served large brands (Nike, Samsung, Huawei), but overcapacity since 2023 has pushed MOQs down 15\u201325%. Factories that once required 1,000-piece minimums now accept 600\u2013800 units. Knitwear in Dalang starts at 200\u2013500 pieces. Clothing from Humen markets can be as low as 50\u2013200 pieces. The city is more accessible to smaller buyers than it was five years ago." },
      { q: "What is the minimum order quantity for Dongguan factories?", a: "It varies by sector. Electronics assembly: 500\u20135,000 pieces. Plastic injection: 1,000\u20135,000 pieces (plus mould cost of US$2,000\u201315,000+). Furniture: 50\u2013200 pieces. Shoes: 300\u20131,000 pairs per style. Knitwear: 200\u2013500 pieces. Clothing (Humen): 50\u2013200 pieces. Toys: 1,000\u20135,000 pieces. Paper/packaging: 5,000\u201310,000 pieces. These are typical ranges \u2014 individual factories may negotiate lower for first orders." },
      { q: "Do I need a sourcing agent to buy from Dongguan?", a: "Not required, but recommended for first-time visitors. Dongguan is a factory city, not a tourist-friendly market city like Guangzhou. The 32 towns are spread across 2,500 km\u00B2 and public transport between them is limited. A sourcing agent handles factory appointments, translation, quality inspection, and logistics. Budget 500\u20131,000 CNY/day for a local agent. After your first visit, many importers switch to managing directly via 1688 and WeChat." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "How do I find Dongguan factories on 1688?", a: "Search using Chinese terms with the Dongguan prefix. Examples: \u4E1C\u839E\u5851\u80F6\u6A21\u5177 (Dongguan plastic moulds), \u4E1C\u839E\u7535\u5B50\u914D\u4EF6 (Dongguan electronics parts), \u5927\u6717\u6BDB\u8863 (Dalang sweaters), \u864E\u95E8\u5973\u88C5\u6279\u53D1 (Humen women\u2019s wear). 1688 has a dedicated Dongguan Industrial Belt (\u4E1C\u839E\u4EA7\u4E1A\u5E26) section. You can also use the factory search (\u627E\u5DE5\u5382) feature and filter by Dongguan location." },
      { q: "Are Dongguan 1688 listings factory-direct or trading companies?", a: "Overwhelmingly factory-direct. Unlike Guangzhou or Yiwu where trading companies are common, Dongguan\u2019s 1688 presence is dominated by actual manufacturers. Look for the \u6E90\u5934\u5DE5\u5382 (source factory) badge and \u5B9E\u529B\u5546\u5BB6 (verified merchant) tag. Cross-reference the registered address \u2014 if it\u2019s in an industrial zone in Changping, Houjie, or Tangxia rather than a commercial building, it\u2019s almost certainly a real factory." },
      { q: "How do I pay Dongguan suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Options: 1688 World Pay (WorldFirst\u2019s integrated payment \u2014 pay at checkout without a Chinese bank account), Alipay (requires Chinese bank or international Alipay), or direct bank transfer in CNY. WorldFirst\u2019s World Account lets you hold, convert, and send CNY with competitive exchange rates." },
      { q: "Do Dongguan factories list lower MOQs on 1688 than Alibaba?", a: "Yes. Many Dongguan factories list significantly lower MOQs on their 1688 stores than their Alibaba.com international storefronts. The domestic platform has more competition and Chinese domestic buyers expect smaller quantities. It\u2019s common to find a factory quoting 3,000 MOQ on Alibaba but accepting 500\u2013800 on 1688." },
    ],
  },
  {
    category: "Factory selection & visits",
    faqs: [
      { q: "How do I verify if a Dongguan supplier is a real factory?", a: "Cross-reference their business licence with the National Enterprise Credit Information System (gsxt.gov.cn). Check that their registered address is in an industrial zone, not a residential or commercial building. On 1688, look for the \u6E90\u5934\u5DE5\u5382 badge. Use WorldFirst\u2019s beneficiary verification to check their bank account against their business registration. If visiting, always check the warehouse \u2014 it reveals true production capacity and inventory levels." },
      { q: "Which Dongguan town should I visit for my product?", a: "Electronics: Chang\u2019an, Tangxia, Shijie, Liaobu, Fenggang, Qingxi. Plastics and moulds: Changping, Hengli, Chang\u2019an. Furniture: Houjie (showrooms/trade), Dalingshan (export factories). Shoes: Houjie. Knitwear: Dalang. Clothing: Humen. Toys: Chang\u2019an, Changping. Paper/packaging: Zhongtang, Machong. Each town has its own industrial identity \u2014 target the right one to avoid wasting days in transit." },
      { q: "Can I get OEM/ODM services directly from Dongguan factories?", a: "Yes. OEM and ODM is Dongguan\u2019s core business. The city built its reputation as a contract manufacturer for international brands. Most factories have dedicated OEM departments with design engineers, mould makers, and sample production lines. Expect 2\u20134 weeks for a first sample, 4\u20138 weeks for production. Bring physical reference samples \u2014 they communicate your quality expectations better than photos." },
      { q: "What\u2019s the difference between Houjie and Dalingshan for furniture?", a: "Houjie is the trade and showroom centre: Furniture Avenue, the 3F Fair venue, 600+ companies for comparison shopping. Dalingshan is the export manufacturing hub: 500+ factories focused on production for international buyers, designated \u2018China\u2019s #1 Furniture Export Town.\u2019 Visit Houjie to compare and select, place production orders in Dalingshan at 20\u201330% below showroom pricing." },
      { q: "How long should I plan for a Dongguan factory visit?", a: "Minimum 3\u20135 days for serious sourcing. Experienced importers often spend 1\u20132 weeks. Schedule factory visits 2\u20133 months in advance. Plan 2\u20133 factory visits per day maximum \u2014 traffic between towns can be severe. Ask the factory to arrange pickup; don\u2019t rely on taxis between towns. Always request to see the warehouse, QC area, and raw material storage, not just the showroom." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "Are Dongguan factories more expensive than Yiwu or Zhejiang?", a: "Yes \u2014 Guangdong (including Dongguan) commands a 12\u201318% price premium over Zhejiang. But that premium buys approximately 22% fewer defects. For products where quality matters (electronics, furniture, branded goods), the net cost is often lower after accounting for returns, replacements, and reputation damage from defective goods." },
      { q: "How do I pay Chinese suppliers safely?", a: "Never wire money without verification. Use WorldFirst\u2019s beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better exchange rates. Always pay to the company\u2019s registered business account, not personal accounts." },
      { q: "What payment terms are standard in Dongguan?", a: "Standard terms: 30% deposit to start production, 70% balance before shipment (against inspection report or photos). First orders are typically full payment upfront. Mould costs are usually paid in full before mould cutting begins. After building trust over 3\u20135 orders, some factories offer NET 30 or better terms. Market purchases in Humen are cash or WeChat Pay on the spot." },
      { q: "Can I negotiate lower MOQs during factory low season?", a: "Yes. Post-Chinese New Year (March\u2013April) and post-Golden Week (late October\u2013November) are the best negotiation windows. Overcapacity since 2023 has made factories more flexible year-round. Many factories that once insisted on 1,000-piece minimums now accept 600\u2013800 units. Frame your request as a trial order with clear repeat-order potential \u2014 factories respond better to a growth story than a one-off ask." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I get from Shenzhen or Guangzhou to Dongguan?", a: "HSR is the fastest option. Shenzhen North \u2192 Humen Station: 20 minutes, \u00A550\u201375. Guangzhou South \u2192 Humen Station: 30 minutes, \u00A575\u2013100. Hong Kong West Kowloon \u2192 Humen: 45 minutes, HK$200+. Shenzhen Bao\u2019an Airport \u2192 Humen East Station: 36 minutes by rail. There\u2019s also a direct ferry from Hong Kong Airport to Humen Port." },
      { q: "Does Dongguan have a metro system?", a: "Yes. Line 2 runs from Dongguan Station (Shilong) to Humen Station, 15 stations across 37.7 km, operating since 2016. Line 1 opened November 2025 with 25 stations across 57.5 km. A Line 2 extension south from Humen (9 stations) is under construction for 2027. Between towns not on metro lines, arrange factory car pickup or use ride-hailing apps (DiDi)." },
      { q: "How do I ship goods from Dongguan?", a: "Sea freight from Dongguan Port (Shatian): deep-water port handling 4.5 million tons, near-sea routes to Southeast Asia, 20\u201340 days to the US. Air freight via HKIA Dongguan Logistics Park: a sea-air intermodal facility connecting directly to Hong Kong International Airport for faster air freight access. Express courier (DHL, FedEx) for samples. Many factories handle domestic shipping to port; you arrange international freight or use a freight forwarder." },
      { q: "What\u2019s the best time of year to visit Dongguan?", a: "September\u2013November is ideal: clear skies, low humidity, 21\u201329\u00B0C, and factories are in full production ahead of year-end orders. March\u2013May is also good (post-CNY restart, trade shows running). Avoid Chinese New Year (6\u20138 week slowdown from late January to mid-March), Golden Week (October 1\u20137), and June\u2013August (30\u00B0C+, high humidity, frequent thunderstorms)." },
      { q: "Where should I stay in Dongguan for a sourcing trip?", a: "Stay near your primary factory town. For Humen clothing markets: hotels near Humen HSR Station. For Houjie furniture/shoes: Furniture Avenue area. For Dalang knitwear: near Dalang metro station. For electronics (Chang\u2019an, Tangxia): near Humen or Changping HSR stations. Dongguan is not a single city centre \u2014 it\u2019s 32 towns spread over 2,500 km\u00B2. Staying in the wrong town means hours in traffic." },
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
            Dongguan Sourcing <span className="accent-word">FAQ</span>
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
