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
    category: "Getting started in Pingxiang",
    faqs: [
      { q: "Why is Pingxiang called the children's bicycle capital of the world?", a: "Pingxiang County in Hebei produces 145 million children\u2019s vehicles annually \u2014 roughly 50% of China\u2019s domestic market and 40% of global output. With 4,800+ manufacturers and 120,000+ employees, it has the world\u2019s deepest children\u2019s vehicle supply chain. The entire production chain sits within the county: wheels, tyres, pedals, chains, brakes, frames, and final assembly." },
      { q: "What types of children's vehicles does Pingxiang produce?", a: "Children\u2019s bicycles (balance bikes, training wheel bikes, BMX-style), baby strollers and prams, electric ride-on toys (battery-powered cars, motorcycles, ATVs), tricycles, kick scooters, and 3-wheel scooters. The newest products include GPS-enabled strollers, app-controlled ride-on cars, and AI-assisted safety features. Bicycle parts and components are also a major category." },
      { q: "How did Pingxiang go from poverty to global manufacturing hub?", a: "In the 1970s, two local residents built the first homemade bicycle called \u201cBlack Tiger\u201d (黑虎). A cottage industry grew from this single prototype. For decades Pingxiang was a national-level poverty-stricken county. Over 40+ years, the children\u2019s vehicle industry transformed it into a global production and R&D centre. Today the industry generates 30 billion+ yuan annually and has lifted 200+ surrounding villages out of poverty." },
      { q: "Is there a wholesale market in Pingxiang?", a: "No traditional wholesale market like Guangzhou or Yiwu. Pingxiang operates as a distributed factory cluster \u2014 factories and showrooms are spread across the county, concentrated in Hegumiao Town (河古庙镇). There is a Children\u2019s Vehicle Exhibition Center for product displays. This is a factory town, not a showroom city. Arrange visits in advance through 1688 contacts or a sourcing agent." },
      { q: "Do I need a sourcing agent for Pingxiang?", a: "Strongly recommended. English is extremely limited in Pingxiang \u2014 even more so than other Chinese manufacturing areas. A Mandarin-speaking agent is essential for factory visits, quality negotiations, and certification discussions. Many agents based in Beijing, Shijiazhuang, or Xingtai cover the Pingxiang cluster." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 search terms should I use for Pingxiang?", a: "平乡童车 (Pingxiang children\u2019s vehicles) for general search. 儿童自行车 平乡 (children\u2019s bicycle Pingxiang) for pedal bikes. 平衡车 平乡 (balance bike Pingxiang) for trending products. 儿童电动车 平乡 (electric ride-on Pingxiang) for battery vehicles. 婴儿推车 平乡 (baby stroller Pingxiang) for strollers. 河古庙 童车 (Hegumiao children\u2019s vehicles) to search by primary township." },
      { q: "How do I pay Pingxiang suppliers on 1688?", a: "1688 payments are in CNY. Use 1688 World Pay (WorldFirst\u2019s integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via WorldFirst\u2019s World Account. For bulk bicycle orders, deposits can be significant \u2014 use WorldTrade escrow to hold payment until shipment is confirmed." },
      { q: "Is 1688 cheaper than Alibaba for Pingxiang products?", a: "Yes. 1688 prices for Pingxiang children\u2019s vehicles are typically 30\u201350% lower than Alibaba.com listings from the same factories. A children\u2019s bicycle listed at $12 on Alibaba may sell for $5\u20137 on 1688 at domestic wholesale pricing. The tradeoff: Chinese-only interface, CNY payment required, and no built-in international buyer protection." },
    ],
  },
  {
    category: "Trade shows & visiting",
    faqs: [
      { q: "What is the Pingxiang International Bicycles Fair?", a: "Pingxiang hosts a bi-annual International Bicycles, Baby Strollers and Toys Fair (approximately spring + autumn). The 18th edition in October 2024 attracted 1,500+ companies and generated 4.15 billion yuan in orders. This is the most efficient way to see the cluster \u2014 1,500+ exhibitors in one location. 2026 dates have not been confirmed; check the Pingxiang county government site." },
      { q: "Where exactly is Pingxiang and how do I get there?", a: "Pingxiang County is in Hebei province, about 350 km southwest of Beijing and 40 km south of Xingtai city. The nearest high-speed rail station is Xingtai East (邢台东站) on the Beijing\u2013Guangzhou line, then 40 minutes by taxi to Pingxiang. Nearest major airport is Shijiazhuang Zhengding (SJW), about 2.5 hours by car. Base yourself in Xingtai for better hotels and restaurants." },
      { q: "What's the best time of year to visit Pingxiang?", a: "March\u2013May (spring) or September\u2013November (autumn). Factories ramp up production March\u2013August for the global selling season, so spring visits catch peak capacity. Align with the Pingxiang Fair (if dates allow) or China Cycle in Shanghai (May 5\u20138). Avoid Chinese New Year (January\u2013February), the first week of October (National Day), and July\u2013August (extreme heat and humidity)." },
      { q: "Where should I stay when visiting Pingxiang?", a: "Stay in Xingtai city (40 km north) \u2014 better hotels, restaurants, and international-standard accommodation. Pingxiang county itself has limited options for international visitors. Day-trip to Pingxiang for factory visits. If you need to stay overnight in the county, there are basic business hotels near Hegumiao town." },
    ],
  },
  {
    category: "Pricing, quality & certification",
    faqs: [
      { q: "What are the minimum order quantities for Pingxiang bicycle factories?", a: "Small factories: 100\u2013500 units. Larger factories: 1,000\u20135,000+ units per SKU. Electric ride-ons: 200\u2013500 units per model. Components (wheels, pedals, chains): 500\u20131,000 pieces. Many factories are flexible on MOQs for first orders. Custom branding (your logo, colours, packaging) typically requires higher minimums." },
      { q: "What are typical FOB prices for children's bicycles from Pingxiang?", a: "Ultra-budget market bikes: US$3\u20135 FOB. Standard quality children\u2019s bicycles: US$8\u201315 FOB. Quality-controlled export products: US$15\u201330+ FOB. Electric ride-on cars: US$20\u201340 (basic) to US$80\u2013150 (large dual-motor). Baby strollers: US$8\u201315 (umbrella) to US$40\u201380 (travel system). Prices vary significantly with material quality, certification, and order volume." },
      { q: "What safety certifications do I need for importing kids' bikes from China?", a: "EU: EN 71 (toys), EN 14765 (children\u2019s bicycles). US: ASTM F963 (toys), CPSIA (Consumer Product Safety Improvement Act), CPSC requirements. Australia/NZ: AS/NZS 2088 (bicycles). Not all Pingxiang factories hold these certifications \u2014 verify before ordering. Larger export-oriented factories will have them; smaller producers often will not." },
      { q: "What quality issues should I watch for with Pingxiang products?", a: "Quality tiers vary enormously \u2014 Pingxiang produces everything from ultra-cheap to export-grade. Common issues with budget producers: inconsistent weld quality on frames, poor paint adhesion, cheap bearings that fail quickly, brakes that don\u2019t meet international standards, and packaging that doesn\u2019t protect during shipping. Third-party inspection (SGS, Bureau Veritas, or similar) is strongly recommended. Inspect personally or hire QC before shipping." },
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
            Pingxiang Sourcing <span className="accent-word">FAQ</span>
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
