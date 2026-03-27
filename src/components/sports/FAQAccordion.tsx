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
    category: "Getting started with sports equipment sourcing",
    faqs: [
      { q: "Which Chinese city should I source sports equipment from?", a: "It depends on the product. For fitness machines (treadmills, bikes, ellipticals), Xiamen is the global leader \u2014 six out of ten home treadmills worldwide come from there. For commercial gym equipment (strength machines, cable systems), Ningjin County in Shandong commands 70%+ of China\u2019s market. For sports footwear and sportswear, Jinjiang in Quanzhou is unmatched \u2014 5,000+ shoe producers and HQ to Anta, Xtep, and 361 Degrees. For free weights and rubber products, Qingdao is the hub. For low-MOQ mixed orders, Yiwu\u2019s District 3 covers everything from dumbbells to yoga mats." },
      { q: "What is the minimum order quantity for sports equipment from China?", a: "MOQs vary by product and whether you are buying stock or custom. Typical ranges: yoga mats 100\u2013200 pieces per colour. Dumbbells and kettlebells \u2014 no MOQ for trial orders, 1\u00d720ft container for bulk. Home treadmills 50\u2013100 units. Commercial gym machines 20\u201350 units. Sports shoes 500\u20131,000 pairs per style. Resistance bands 500\u20131,000 sets. Footballs and basketballs 500\u20132,000 pieces. At Yiwu, stock items start from 10\u2013100 pieces. Published MOQs are often negotiable \u2014 most suppliers inflate them by 30\u201350% as a starting position, and slow-season orders (Dec\u2013Feb) can unlock 50% MOQ reductions." },
      { q: "How much does sports equipment from China cost?", a: "Factory-gate pricing varies by product type. Yoga mats (TPE/PVC): US$2\u20138 per piece. Rubber hex dumbbells: US$1.20\u20134.50/kg. Kettlebells (cast iron): US$1.50\u20133.00/kg. Rubber bumper plates: US$1.00\u20132.50/kg. Home treadmills: US$150\u2013500 FOB. Commercial treadmills: US$800\u20133,000 FOB. Exercise bikes: US$80\u2013300 FOB. Sports shoes (OEM): US$8\u201325 per pair. Sportswear (custom): US$5\u201315 per piece. Footballs/basketballs: US$2\u201312. FOB prices add 10\u201315% for packaging, logistics to port, and export documentation." },
      { q: "How long does production take?", a: "Realistic timeline: Days 1\u20135 sourcing and supplier selection. Days 6\u201314 sampling (stock samples 2\u20133 days; custom samples 10\u201421 days). Days 15\u201345 bulk production (15\u201320 days for stock designs; 30\u201345 days for custom equipment or branded sportswear). Days 46\u201350 quality inspection and testing. Days 51+ shipping (3\u20137 days air freight; 25\u201340 days sea freight). Total: 45\u201390 days from first contact to delivery. Custom moulds for equipment parts or shoe lasts add 15\u201325 days." },
    ],
  },
  {
    category: "Quality and compliance",
    faqs: [
      { q: "What are the biggest quality risks with gym equipment from China?", a: "Steel thickness is the number-one differentiator. A factory agrees to 3mm frame tubes in the sample, then switches to 2mm in bulk production \u2014 reducing cost but creating structural failure risk. For treadmills, AC motors outperform DC motors but cost more; some factories substitute without disclosure. Welding quality (robotic vs manual) varies enormously. For rubber products (bumper plates, dumbbells), the risk is toxic off-gassing from cheaper rubber compounds. Mitigation: write material specifications into your purchase order, inspect raw materials before production starts, and test finished products through an independent lab." },
      { q: "What certifications do I need for sports equipment?", a: "EU: CE marking is mandatory. EN 957 and EN ISO 20957 for stationary fitness equipment. REACH compliance for chemical limits. US: no mandatory federal certification for most fitness equipment, but CPSC compliance and ASTM standards are expected by retailers. For sports footwear: EU REACH, US CPSIA for children\u2019s products. For free weights: check weight tolerance (\u00b13% is acceptable). Australia: relevant AS/NZS standards. The importer is legally responsible regardless of where the product was manufactured." },
      { q: "How do I verify a sports equipment factory is legitimate?", a: "Ask production-specific questions: \u2018What welding equipment do you use?\u2019, \u2018What is your daily treadmill assembly capacity?\u2019, \u2018What steel grade do you use for frames?\u2019 Trading companies struggle with manufacturing specifics. On 1688, look for the \u8D85\u7EA7\u5DE5\u5382 (Super Factory) badge. Request factory floor photos with timestamps. Cross-check the business registration on Tianyancha. For fitness equipment, check if they display ISO 9001, CE, or SGS certifications. If a supplier\u2019s quote is far below competitors, they may be using inferior materials or bait pricing." },
    ],
  },
  {
    category: "Shipping and logistics",
    faqs: [
      { q: "How do I ship heavy gym equipment from China?", a: "Sea freight is the only cost-effective option for heavy equipment. A 20ft container costs US$2,000\u20134,500 from South China ports to the US West Coast (25\u201340 days transit). Total landed cost on heavy equipment adds roughly 20% on top of the product price. Key ports by region: Xiamen (Fujian fitness equipment), Ningbo-Zhoushan (Zhejiang), Qingdao (Shandong \u2014 Ningjin equipment), Nansha/Guangzhou (Pearl River Delta). For samples and small orders under 100kg, express courier (DHL/FedEx, 3\u20135 days) works but is 5\u201310x the cost per kg." },
      { q: "What import duties apply to sports equipment from China?", a: "Tariff rates depend on the HS code and destination market. US: typical base rate 0\u201310% for most gym equipment, but Section 301 tariffs can add 25\u201350% on Chinese imports. EU: 0\u20139% on most categories. Australia: 5% on most items. Specific rates vary \u2014 treadmills, free weights, and exercise machines each have different HS codes. Get a binding ruling on HS classification before placing large orders. Misclassification is the biggest customs penalty risk." },
      { q: "What hidden costs should I expect?", a: "Sample costs: US$50\u2013500+ per product depending on complexity, plus international shipping (US$50\u2013200 per sample via courier). Third-party inspection: 1,000\u20132,500 RMB per inspection day. Safety testing: US$200\u20131,500 per product for CE, EN 957, or ASTM testing. Freight forwarding: US$150\u2013300 per shipment. Import duties: 0\u201350% depending on product and tariff regime. Custom moulds for equipment parts: US$2,000\u201315,000+. Inland freight from factory to Chinese port: US$20\u2013200 per pallet." },
    ],
  },
  {
    category: "Payment and WorldFirst",
    faqs: [
      { q: "How should I structure payment to minimise risk?", a: "Standard structure: 30% deposit on order confirmation, 70% balance after third-party inspection passes and before shipping. Never pay 100% upfront. For wholesale market purchases in Yiwu, payment is immediate (WeChat Pay, Alipay, or cash). For factory orders, wire transfer to the company\u2019s registered business bank account \u2014 never to a personal account. Use WorldFirst to pay in RMB directly to suppliers\u2019 Chinese bank accounts; this avoids the 2\u20133% FX markup from traditional banks and unlocks 1688 purchasing via 1688 World Pay." },
      { q: "Can I buy sports equipment on 1688 as an international buyer?", a: "Yes, but 1688 only accepts CNY from Chinese payment methods. WorldFirst\u2019s 1688 World Pay solves this \u2014 you can browse 1688, add items to your cart, and pay at checkout through your WorldFirst account. Prices on 1688 are typically 20\u201340% lower than Alibaba.com for identical products because it is the domestic wholesale platform. Key search terms: \u8FD0\u52A8\u5668\u6750 (sports equipment), \u5065\u8EAB\u5668\u6750 (fitness equipment), \u54D1\u94C3 (dumbbell), \u745C\u4F3D\u57AB (yoga mat), \u8DD1\u6B65\u673A (treadmill)." },
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
            Sports equipment sourcing <span className="accent-word">FAQ</span>
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
