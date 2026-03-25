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
    category: "Getting started in Foshan",
    faqs: [
      { q: "What is Foshan known for manufacturing?", a: "Foshan is China\u2019s building materials capital. Its strongest categories are furniture (50\u201375% of China\u2019s output via Lecong and Longjiang), ceramic tiles (54% of China\u2019s production, 25% of global output), aluminium profiles (Dali is China\u2019s No. 1 aluminium town), home appliances (Midea and Galanz HQ in Shunde), mattresses (Jiujiang ships 1 in 10 mattresses sold worldwide), and lighting." },
      { q: "How do I get from Guangzhou to Foshan?", a: "Three options. High-speed rail: 20 minutes, RMB 12, roughly 80 daily trains between the two cities. Guangfo Metro: 60 minutes end-to-end, RMB 8, connects to Guangzhou Metro at Xilang (Line 1) and Lijiao (Line 2). Taxi: about 60 minutes, RMB 90+. Most buyers fly into Guangzhou Baiyun Airport and take a taxi or metro to Foshan." },
      { q: "What is the Lecong Furniture Market and how big is it?", a: "Lecong is the world\u2019s largest furniture wholesale market \u2014 a 10km strip in Shunde district with 20 million+ sqm of showroom space, 3,450+ shops, and 200,000+ furniture types. Key venues include Louvre International (380,000 sqm, premium), Red Star Macalline (120,000 sqm, wholesale), Sunlink North (200,000 sqm, themed zones), and IEC (100,000 sqm, branded). It receives 2 million+ visitors per year." },
      { q: "What is the difference between Lecong and Longjiang?", a: "Lecong is the \u201cfront shop\u201d \u2014 showrooms, exhibitions, and wholesale trading. Longjiang is the \u201cback factory\u201d \u2014 7,000+ furniture factories where production actually happens. The two towns sit next to each other in Shunde district. Visit Lecong to browse and compare. Visit Longjiang to see production lines and negotiate factory-direct pricing." },
      { q: "How long should I plan for a Foshan sourcing trip?", a: "Minimum 4 full days excluding travel. Furniture buyers need 2\u20133 days for Lecong showrooms plus 1\u20132 days for factory visits in Longjiang. Ceramics buyers should budget 2 days for Nanzhuang and Shiwan markets. If combining furniture and ceramics, plan 5\u20136 days. Visit during March\u2013April to overlap with trade shows." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "How do I find Foshan suppliers on 1688?", a: "Search using Chinese terms specific to Foshan\u2019s industries: \u4F5B\u5C71\u5BB6\u5177 (Foshan furniture), \u4F5B\u5C71\u74F7\u7816 (Foshan tiles), \u5357\u6D77\u94DD\u578B\u6750 (Nanhai aluminium profiles), \u4E50\u4ECE\u5BB6\u5177\u6279\u53D1 (Lecong furniture wholesale). Filter by supplier location: \u4F5B\u5C71. WorldFirst\u2019s AI Sourcing Agent handles the translation." },
      { q: "How do I match a Lecong showroom vendor to their 1688 store?", a: "Get the vendor\u2019s business card during your showroom visit. Search their company name on 1688. Cross-check the registered address and Unified Social Credit Code against their business licence. Many vendors list their Lecong showroom location in their 1688 store description. This lets you reorder at domestic wholesale prices after your trip." },
      { q: "What are the key 1688 industry pages for Foshan?", a: "Three cluster pages are worth bookmarking. \u4F5B\u5C71\u5BB6\u5177\u9986 (Foshan Furniture Hall) on home.1688.com for furniture. \u5357\u6D77\u4EA7\u4E1A\u5E26 (Nanhai Industrial Belt) on nanhai.1688.com for aluminium and hardware. \u5BB6\u88C5\u5EFA\u6750\u5E02\u573A (Home Decoration Building Materials Market) on jiazhuang.1688.com for building materials." },
      { q: "How do I pay 1688 suppliers in Foshan?", a: "1688 requires CNY payment. WorldFirst\u2019s 1688 World Pay lets you pay at checkout from your WorldFirst account \u2014 no Chinese bank account needed. Select WorldFirst as payment method, your supplier receives CNY instantly. For factory-direct orders outside 1688, use WorldFirst\u2019s World Account to convert and send CNY via bank transfer." },
    ],
  },
  {
    category: "Trade shows & showrooms",
    faqs: [
      { q: "What are the best trade shows in Foshan in 2026?", a: "Furniture: Longjiang International Furniture Expo (March 17\u201320, 40,000 sqm, 90,000+ buyers). Ceramics: CeramBath (April 18\u201323, 3 Foshan venues, 800+ brands) and Uniceramics Expo (April 20\u201323, Tanzhou Convention Center, 96,000 sqm). Also attend CIFF in nearby Guangzhou (March 18\u201321 and 28\u201331, 850,000 sqm, 4,900+ brands)." },
      { q: "Is it worth attending CIFF if I\u2019m sourcing in Foshan?", a: "Yes. CIFF (China International Furniture Fair) runs at the Canton Fair Complex in Guangzhou, 45 minutes from Foshan by metro. It\u2019s the largest furniture fair in Asia at 850,000 sqm with 4,900+ brands. Many Foshan manufacturers exhibit there. Combine a CIFF visit with Lecong showroom visits and Longjiang factory tours in one trip." },
      { q: "What is CeramBath?", a: "CeramBath (China International Ceramic & Bathroom Fair) is Asia\u2019s No. 1 professional ceramic and bathroom exhibition, running since 1989. The 44th edition in April 2026 uses three Foshan venues simultaneously: China Ceramics City, China Ceramics & Sanitaryware Industry HQ, and Foshan International Conference Center. It covers porcelain tiles, large slabs, sanitary units, faucets, shower enclosures, mosaics, and smart home solutions." },
      { q: "Should I buy at trade shows or in the markets?", a: "Use trade shows for discovery and comparison \u2014 identify potential suppliers, collect catalogs, and see new products. Then visit their Lecong or Nanzhuang showrooms for detailed negotiation. Factory visits in Longjiang or the ceramics production zones follow after narrowing your shortlist. Trade show pricing is typically higher than factory-direct." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How much can I save buying furniture from Foshan?", a: "International buyers typically report 30\u201370% savings versus home market retail, including shipping costs. Within Foshan, factory-direct pricing in Longjiang runs 30\u201340% below Lecong showroom prices. 1688 domestic wholesale prices are another 20\u201330% below export platform pricing. Always factor in shipping, customs, and quality inspection costs." },
      { q: "How do I verify a Foshan supplier is legitimate?", a: "Cross-reference their business licence with China\u2019s National Enterprise Credit Information System. Verify their 1688 store registration matches their physical showroom or factory licence. Use WorldFirst\u2019s beneficiary verification to check bank accounts against business registration. Visit the factory floor \u2014 showroom quality can differ from mass production quality." },
      { q: "What payment terms are standard in Foshan?", a: "Standard: 30% deposit to start production, 70% balance before shipment against inspection report or photos. Lecong showroom purchases are typically cash, WeChat Pay, or Alipay on the spot. First orders usually require full payment upfront. After building trust over multiple orders, some factories offer 60/40 or better terms." },
      { q: "What quality issues should I watch out for?", a: "Material substitution is the top risk. Factories often produce a \u201cGolden Sample\u201d with premium materials, then use cheaper alternatives in mass production. For tiles, check consistent colour matching across batches. For furniture, verify wood species and hardware quality. Always order production samples (not showroom pieces) and invest in third-party pre-shipment inspection." },
      { q: "How do I spot a trader pretending to be a factory?", a: "In Lecong, real factory-direct sellers specialise in one category \u2014 a bed maker only makes beds, a sofa maker does sofas and coffee tables but not beds. If someone offers everything, they\u2019re a trader adding 15\u201330% margin. Ask to visit the production facility. True factories welcome visits; traders make excuses." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I ship furniture from Foshan?", a: "Sea freight from Nansha Port in Guangzhou (30\u201360 minutes away) is standard for bulk furniture orders. Container loads take 3\u20136 weeks to most destinations. Many Lecong markets have integrated logistics centres that handle domestic transport to the port. For samples and small orders, use air freight from Guangzhou Baiyun Airport or express courier." },
      { q: "Do I need a sourcing agent in Foshan?", a: "Strongly recommended for first-time visitors. Most showroom staff and factory workers do not speak English. Specialised Foshan sourcing agents charge 3\u20135% of total purchase value. Quality inspections run USD 300\u2013800 per inspection depending on order size. Key agencies include Foshan Sourcing, Owl Sourcing, Morefar Global, and Tanndy." },
      { q: "What is the best time of year to visit Foshan?", a: "October through April for comfortable weather (mild, low humidity). March and April are peak sourcing season \u2014 Longjiang Furniture Expo, CIFF, CeramBath, and Uniceramics all run in this window. Avoid January\u2013February (Chinese New Year shutdown) and June\u2013August (extreme heat, 28\u201335\u00b0C, heavy rain, typhoon season)." },
      { q: "Where should I stay in Foshan?", a: "For furniture sourcing: Sofitel Foshan in Lecong (next to Louvre Exhibition Center), Aishang Hotel (inside Lecong Furniture Mall, budget), or Yunpu International Hotel. For ceramics and building materials: Hilton Foshan or Crowne Plaza in Chancheng district, near Zumiao Metro and the ceramics markets. Budget from RMB 200/night, luxury from RMB 800/night." },
      { q: "Do I need WeChat for sourcing in Foshan?", a: "Yes. All business communication, payments, product catalogs, price lists, and follow-up happens on WeChat. Download and set up your account before arriving. Most vendors will scan your QR code to add you on the spot. WeChat Pay is also the dominant payment method for showroom purchases." },
      { q: "What is Foshan\u2019s Shiwan ceramics district?", a: "Shiwan in Chancheng district has a 5,000-year ceramics heritage. The ancient Nanfeng Kiln, built in 1506 during the Ming Dynasty, still fires with wood today. Shiwan produces art ceramics, decorative pieces, sanitary ceramics, and architectural ceramics. Shiwan ware is a national intangible cultural heritage. The Shiwan Zhiye Ceramic Wholesale Market (470,000 sqm) is the main trading venue." },
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
            Foshan Sourcing <span className="accent-word">FAQ</span>
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
