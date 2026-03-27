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
    category: "Getting started in Guangzhou",
    faqs: [
      { q: "Is Guangzhou good for sourcing?", a: "Yes. Guangzhou is China's oldest trade capital and has more wholesale markets than any other Chinese city. It covers more product categories at scale than anywhere else: garments, leather, beauty, textiles, toys, jewelry, electronics accessories, and furniture (via nearby Foshan). It's the most versatile sourcing city for importers who need multiple categories in one trip." },
      { q: "What products is Guangzhou best known for?", a: "Guangzhou's strongest categories are garments and fashion (Shisanhang, Baima, Shahe), leather goods and bags (Shiling, Sanyuanli), beauty and cosmetics (Baiyun district OEM hub), textiles and fabrics (Zhongda, Asia's largest fabric market), and furniture via Foshan's Lecong market (30 minutes away). It also has solid markets for toys, jewelry, and electronics accessories." },
      { q: "Is Guangzhou better than Yiwu for sourcing?", a: "They serve different needs. Guangzhou is better for fashion, leather, beauty, textiles, and higher-quality goods with deeper factory access. Yiwu is better for small commodities, low MOQ variety, and budget goods. Many experienced importers source from both." },
      { q: "Can I source from Guangzhou without visiting?", a: "Yes. Many importers start on 1688.com (Alibaba's domestic platform) or Alibaba.com. WorldFirst's AI Sourcing Agent lets you search 1688 in English. You can also hire a local sourcing agent. However, visiting at least once gives you quality verification, relationship building, and negotiation leverage you can't get remotely." },
      { q: "Do I need to speak Chinese to visit Guangzhou markets?", a: "It helps enormously but isn't strictly required. Most market vendors speak very limited English. Bring a translation app (Google Translate or WeChat's built-in translator), have your product specifications written in Chinese, and consider hiring a local interpreter (around 500-800 CNY/day)." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What is 1688 and how is it different from Alibaba?", a: "1688.com is Alibaba's domestic Chinese wholesale platform. Prices are 20-50% lower than Alibaba.com because there's no export markup, no English sales team overhead, and no Trade Assurance fees. The tradeoff: the platform is entirely in Chinese, payment requires CNY, and there's no built-in international buyer protection." },
      { q: "How do I pay suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Options include: 1688 World Pay (WorldFirst's integrated payment), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY. WorldFirst's World Account lets you hold, convert, and send CNY without a Chinese bank account." },
      { q: "How do I find my Guangzhou market vendor on 1688?", a: "Get the vendor's business card during your market visit. Search their company name on 1688. Match the registered address and Unified Social Credit Code against their booth licence. Many vendors list their market booth location in their 1688 store description. This lets you reorder at domestic prices." },
      { q: "Is 1688 safe for international buyers?", a: "1688 has domestic buyer protections (Alipay escrow) but limited international protections. WorldFirst mitigates key risks through: AI Sourcing Agent (English search), 1688 World Pay (CNY payments), and WorldTrade escrow (payment held until shipment confirmed)." },
    ],
  },
  {
    category: "Canton Fair & trade shows",
    faqs: [
      { q: "What is the Canton Fair?", a: "The China Import and Export Fair (Canton Fair) is the world's largest trade fair, held twice yearly in Guangzhou since 1957. It runs across 3 phases over approximately 3 weeks, with 25,000+ exhibitors covering virtually every product category China exports. Spring edition: April-May. Autumn edition: October-November." },
      { q: "How do I register for Canton Fair?", a: "Registration is free at cantonfair.org.cn. You'll need a passport and business details. Register early for faster entry. The Canton Fair app lets you search exhibitors by product category before arriving and schedule meetings." },
      { q: "Which Canton Fair phase should I attend?", a: "Phase 1 (Apr 15-19): Electronics, hardware, vehicles, tools, lighting, chemicals. Phase 2 (Apr 23-27): Ceramics, home decor, gifts, garden, building materials. Phase 3 (May 1-5): Textiles, garments, shoes, bags, food, medical. Attend the phase that matches your product category." },
      { q: "Is it worth attending if I already source from Guangzhou?", a: "Yes. Even experienced importers attend for new supplier discovery, trend spotting, and meeting factories that don't have market showrooms. The Fair concentrates 25,000+ suppliers in one location. Pro tip: Use the Fair to identify suppliers, then negotiate ongoing supply through their 1688 store or factory direct." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How much cheaper is sourcing from Guangzhou vs Alibaba?", a: "Direct factory in Guangzhou is typically 30-60% cheaper than Alibaba export pricing. Guangzhou wholesale markets are 15-30% cheaper. 1688.com is 20-50% cheaper. The savings come from removing export markups, English sales team costs, and platform fees." },
      { q: "How do I pay Chinese suppliers safely?", a: "Never wire money without verification. Use WorldFirst's beneficiary verification (cross-checks bank account against business registration), WorldTrade escrow (holds payment until shipment confirmed), and pay in CNY through a World Account for better rates. Always pay to the company's registered business account, not personal accounts." },
      { q: "What payment terms are standard in Guangzhou?", a: "Standard terms: 30% deposit to start production, 70% balance before shipment (against inspection report or photos). Market purchases are usually cash or WeChat Pay on the spot. First orders are typically full payment. After building trust, some factories offer better terms." },
      { q: "How do I verify a Guangzhou supplier is legitimate?", a: "Cross-reference their business licence with the National Enterprise Credit Information System. Verify their 1688 store registration matches their market booth licence. Use WorldFirst's beneficiary verification to check their bank account against their business registration. Visit their factory if possible." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I ship goods from Guangzhou?", a: "Sea freight departs from Nansha Port (3-6 weeks to most destinations, cheapest for bulk). Air freight from Baiyun International Airport (5-10 days, best for samples and urgent orders). Express courier (DHL, FedEx) for samples. Many suppliers handle domestic shipping to the port; you arrange international freight or use a freight forwarder." },
      { q: "What Incoterms should I use?", a: "FOB (Free on Board) is the most common for Guangzhou exports. The supplier delivers goods to the port, you arrange and pay for shipping. FOB gives you the best balance of cost control and simplicity for most importers." },
      { q: "What's the best time of year to visit Guangzhou?", a: "October-November (autumn Canton Fair, pleasant weather) and April-May (spring Canton Fair). Avoid January-February (Chinese New Year shutdown), July-August (extreme heat and humidity, 35C+), and the first week of October (National Day holiday)." },
      { q: "Where should I stay in Guangzhou for sourcing?", a: "Near your primary market area. For garment markets: Yuexiu District (near Shisanhang/Baima). For Canton Fair: Pazhou area hotels (book months ahead). For Zhongda fabric market: Haizhu District. Always book near a metro station." },
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
            Guangzhou Sourcing <span className="accent-word">FAQ</span>
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
