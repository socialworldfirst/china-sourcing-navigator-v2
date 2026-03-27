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
    category: "Getting started with outdoor gear sourcing",
    faqs: [
      { q: "Which Chinese city should I source outdoor equipment from?", a: "It depends on the product. For camping tents, sleeping bags, and camping furniture, Ningbo is the clear leader \u2014 home to Naturehike and 20+ export-focused outdoor factories with direct access to the world\u2019s busiest port. For low-MOQ camping accessories and mixed containers, Yiwu\u2019s District 2 covers everything from camping lamps to picnic mats at MOQs from 10 pieces. For outdoor furniture (rattan, aluminium, patio sets), Foshan is the global capital with 7,000+ factories. For outdoor clothing and bags, Guangzhou offers the best quality-to-price ratio." },
      { q: "What is the minimum order quantity for camping gear from China?", a: "MOQs vary by product and whether you buy stock or custom. Typical ranges: camping tents (custom) 200\u2013500 pieces, camping tents (stock/trial) 50\u2013100 pieces. Sleeping bags 100\u2013300 pieces. Folding camping chairs/tables 200\u2013500 pieces. Outdoor furniture (rattan/aluminium sets) 50\u2013200 sets. Hiking backpacks 300\u2013500 pieces. Camping accessories at Yiwu 10\u2013100 pieces for stock items. Published MOQs are typically inflated by 30\u201350% as a starting position, and slow-season orders (December\u2013February) can unlock 50% MOQ reductions." },
      { q: "How much does camping equipment from China cost?", a: "Factory-gate (FOB) pricing by product type: 2-person camping tent US$15\u201360, family tent (4\u20136 person) US$30\u2013150, glamping tent US$200\u20131,500+, sleeping bag (3-season) US$8\u201335, folding camping chair US$3\u201315, folding camping table US$8\u201330, rattan outdoor sofa set US$150\u2013800, aluminium patio dining set US$200\u2013600, hiking backpack (40\u201360L) US$8\u201330, trekking poles (pair) US$3\u201315, camping lantern (rechargeable LED) US$3\u201312, hammock US$3\u201315. FOB prices add 10\u201315% for packaging, logistics to port, and export documentation." },
      { q: "How long does production take?", a: "Realistic timeline: Days 1\u20135 sourcing and supplier selection. Days 6\u201314 sampling (stock samples 2\u20133 days; custom samples 10\u201421 days \u2014 longer for tents with custom prints or outdoor furniture with new moulds). Days 15\u201345 bulk production (15\u201320 days for stock designs; 30\u201345 days for custom tents or branded outdoor furniture). Days 46\u201350 quality inspection and testing. Days 51+ shipping (3\u20137 days air freight; 25\u201340 days sea freight). Total: 45\u201390 days from first contact to delivery." },
    ],
  },
  {
    category: "Quality and compliance",
    faqs: [
      { q: "What are the biggest quality risks with tents from China?", a: "Seam tape delamination is the number-one issue. Factory tape may be applied but coverage is sometimes incomplete at complex junctions \u2014 pole sleeves, vestibule corners, and the fly-to-floor junction. Most \u2018waterproof\u2019 failures in warranty repairs are seam tape problems, not fabric breaches. The second risk is waterproof rating inflation: a factory claims 3000mm hydrostatic head but delivers 1500mm. Always request third-party lab reports. Third: material substitution \u2014 a factory agrees to ripstop nylon in the sample then switches to cheaper polyester in bulk. Write fabric specifications (denier, coating type, weight per sqm) into your purchase order." },
      { q: "What about outdoor furniture quality risks?", a: "Rust is the main concern. Powder-coated aluminium frames hold up well, but some factories substitute steel with thin coatings that rust within one season. Specify material grade (6061 or 6063 aluminium) and coating thickness in your order. UV degradation is the second issue \u2014 outdoor fabrics without proper UV treatment fade and weaken quickly. Specify UV resistance standards (500+ hours exposure). For rattan furniture, check weave tightness and whether the rattan is PE or natural \u2014 PE rattan is more weather-resistant but lower cost." },
      { q: "What certifications do I need for outdoor equipment?", a: "EU: CE marking is mandatory for some categories. EN ISO 5912 for camping tents. REACH compliance for chemical limits. EN 581 for outdoor furniture. Fire retardancy: CPAI-84 (US camping industry standard), BS 7837 (UK). UV resistance: AS/NZS 4399 (Australia). Children\u2019s products: CPSIA (US), EN 71 (EU). Waterproof ratings: request hydrostatic head testing to EN 20811. The importer is legally responsible regardless of where the product was manufactured." },
    ],
  },
  {
    category: "Shipping and logistics",
    faqs: [
      { q: "How do I ship tents and outdoor furniture from China?", a: "Sea freight is the only cost-effective option for bulky outdoor products. A 20ft container costs US$2,000\u20134,500 from East China ports (Ningbo, Shanghai) to the US West Coast (25\u201340 days transit). Outdoor furniture is especially volume-sensitive \u2014 a rattan sofa set may weigh only 30kg but occupy significant container space. Key ports by region: Ningbo-Zhoushan (tents, camping gear), Nansha/Guangzhou (outdoor furniture from Foshan), Yiwu uses Ningbo port. For samples under 30kg, express courier (DHL/FedEx, 3\u20135 days) works but costs 5\u201310x per kg." },
      { q: "What import duties apply to outdoor equipment from China?", a: "Tariff rates depend on the HS code and destination market. US: typical base rate 0\u201312% for most outdoor products, but Section 301 tariffs can add 25\u201350% on Chinese imports. EU: 0\u201312% on most categories. Australia: 5% on most items. Tents, outdoor furniture, and camping accessories each have different HS codes. Get a binding ruling on HS classification before placing large orders. Outdoor furniture (HS 9403) may attract different rates than camping equipment (HS 6306 for tents)." },
      { q: "What hidden costs should I expect?", a: "Sample costs: US$30\u2013300+ per product depending on complexity, plus international shipping (US$50\u2013200 per sample via courier). Third-party inspection: 1,000\u20132,500 RMB per inspection day. Waterproof testing: US$200\u2013500 per tent model (hydrostatic head, seam tape integrity). Freight forwarding: US$150\u2013300 per shipment. Import duties: 0\u201350% depending on product and tariff regime. Custom moulds for furniture or tent components: US$1,000\u201310,000+. Inland freight from factory to Chinese port: US$20\u2013200 per pallet." },
    ],
  },
  {
    category: "Payment and WorldFirst",
    faqs: [
      { q: "How should I structure payment to minimise risk?", a: "Standard structure: 30% deposit on order confirmation, 70% balance after third-party inspection passes and before shipping. Never pay 100% upfront. For wholesale market purchases in Yiwu, payment is immediate (WeChat Pay, Alipay, or cash). For factory orders, wire transfer to the company\u2019s registered business bank account \u2014 never to a personal account. Use WorldFirst to pay in RMB directly to suppliers\u2019 Chinese bank accounts; this avoids the 2\u20133% FX markup from traditional banks and unlocks 1688 purchasing via 1688 World Pay." },
      { q: "Can I buy outdoor gear on 1688 as an international buyer?", a: "Yes, but 1688 only accepts CNY from Chinese payment methods. WorldFirst\u2019s 1688 World Pay solves this \u2014 you can browse 1688, add items to your cart, and pay at checkout through your WorldFirst account. Prices on 1688 are typically 20\u201340% lower than Alibaba.com for identical products because it is the domestic wholesale platform. Key search terms: \u6237\u5916\u7528\u54C1 (outdoor products), \u5E10\u7BF7 (tent), \u9732\u8425\u88C5\u5907 (camping equipment), \u6237\u5916\u5BB6\u5177 (outdoor furniture), \u7761\u888B (sleeping bag), \u767B\u5C71\u5305 (hiking backpack)." },
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
            Outdoor gear sourcing <span className="accent-word">FAQ</span>
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
