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
    category: "Getting started with hardware sourcing",
    faqs: [
      { q: "Which Chinese city should I source hardware and tools from?", a: "It depends on the product. For power tools and hand tools, Yongkang (Zhejiang) is the hardware capital of China \u2014 30,000+ enterprises and 1,700 power tool manufacturers. For fasteners (bolts, screws, nuts), Ningbo and nearby Haiyan County dominate, with Haiyan alone accounting for 9% of China\u2019s fastener exports. For low-MOQ mixed hardware orders, Yiwu\u2019s District 2 has 3,000 hardware booths open 365 days. For architectural and furniture hardware (hinges, locks, handles), Guangzhou\u2019s Tianping market is the largest in southern China. Qingdao is strong in industrial fasteners with good shipping access to Europe." },
      { q: "What is the minimum order quantity for tools from China?", a: "MOQs vary by product type and whether you want stock or custom. Typical ranges: pliers 200 units per SKU. Screwdriver sets 500 units. Power tools 500\u20131,000 units. Custom hand tool sets 500 units. Hammers with custom grip 300 units. At Yiwu market, stock items start from 10\u2013100 pieces. Published factory MOQs are often inflated by 30\u201350% as a negotiation starting point. Trial orders of 500\u2013800 units are usually negotiable, particularly if you communicate repeat order potential. Slow-season orders (December\u2013February) can unlock further MOQ reductions." },
      { q: "How much do tools from China cost?", a: "Factory-gate pricing varies by product category. Hand tools (wrenches, pliers, screwdrivers): US$0.30\u20135.00 per piece depending on material and finish. Power tools (drills, grinders, circular saws): US$8\u201360 per unit for mid-range quality. Socket sets (10\u201320 piece): US$3\u201315 per set. Fasteners (bolts, screws): US$0.80\u20132.50/kg for standard grades. Tape measures: US$0.50\u20132.00 each. China\u2019s average export price for power tools is US$28 per unit \u2014 compared to US$118 for German-made tools. FOB prices add 10\u201315% for packaging, logistics to port, and export documentation." },
      { q: "How long does production take?", a: "Typical timeline: Days 1\u20135 sourcing and supplier selection. Days 6\u201314 sampling (stock samples 2\u20133 days; custom samples 10\u201421 days with logo and packaging). Days 15\u201345 bulk production (15\u201320 days for standard designs; 30\u201345 days for custom tools or OEM power tools). Days 46\u201350 quality inspection and testing. Days 51+ shipping (3\u20137 days air freight; 25\u201340 days sea freight). Total: 45\u201390 days from first contact to delivery. Custom moulds for tool housings or grips add 15\u201325 days." },
    ],
  },
  {
    category: "Quality and compliance",
    faqs: [
      { q: "What are the biggest quality risks with tools from China?", a: "Steel grade substitution is the number-one issue. A factory quotes chromium-vanadium (CrV) steel in the sample, then switches to lower-grade carbon steel in bulk production \u2014 the tools look identical but fail under load. For power tools, motor winding quality varies enormously: copper windings outperform aluminium but cost more, and some factories substitute without disclosure. Heat treatment inconsistency (quenching and tempering) affects hardness and fatigue life. For fasteners, thread tolerance and tensile strength grade (e.g. 8.8 vs 10.9) must be specified and tested independently. Always write material specifications into your purchase order and inspect raw materials before production begins." },
      { q: "What certifications do I need for hardware and tools?", a: "EU: CE marking is mandatory for power tools (EN 62841 series). GS mark (Germany) is not legally required but is the de facto quality benchmark \u2014 German buyers expect it. For hand tools, EN standards apply by product type (e.g. EN 13236 for abrasive tools). US: UL certification (tested against UL 62841) through a Nationally Recognised Testing Laboratory is expected for power tools. ANSI standards for hand tools. RoHS and REACH apply to tools entering EU markets. For fasteners, ISO 898 covers mechanical properties of bolts and screws. The importer is legally responsible regardless of where the product was manufactured." },
      { q: "How do I verify a hardware factory is legitimate?", a: "Ask production-specific questions: \u2018What steel grade do you use for wrench jaws?\u2019, \u2018What is your daily output of angle grinders?\u2019, \u2018Do you do in-house heat treatment or outsource?\u2019 Trading companies struggle with manufacturing specifics. On 1688, look for the \u8D85\u7EA7\u5DE5\u5382 (Super Factory) badge. Request factory floor photos with timestamps. Cross-check the business registration on Tianyancha. For hardware, check if they display ISO 9001, GS, or CE certificates and ask for copies. If a price is significantly below competitors, the supplier may be using inferior steel grades or skipping heat treatment." },
    ],
  },
  {
    category: "Shipping and logistics",
    faqs: [
      { q: "How do I ship heavy hardware from China?", a: "Sea freight is the standard for hardware and tools. A 20ft container costs US$2,000\u20134,500 from East China ports (Ningbo, Shanghai) to the US West Coast (25\u201340 days transit). Hardware is dense and heavy, so container weight limits (22,000 kg for a 20ft) are often reached before volume limits (28 CBM). Key ports: Ningbo-Zhoushan (Zhejiang tools and fasteners), Shanghai (general), Qingdao (Shandong fasteners). For samples and small orders under 100 kg, express courier (DHL/FedEx, 3\u20135 days) works but costs 5\u201310x per kg." },
      { q: "What import duties apply to hardware and tools from China?", a: "Tariff rates vary by HS code and destination. US: base rates 0\u20138% for most hand tools and fasteners, but Section 301 tariffs can add 25% on Chinese imports. EU: 0\u20136.5% for most categories. Australia: 5% on most hardware items. Power tools and hand tools have different HS codes. Fasteners have their own tariff classifications (HS 7318 for bolts/screws/nuts). Get a binding ruling on HS classification before placing large orders \u2014 misclassification is the most common customs penalty trigger." },
      { q: "What are the hidden costs?", a: "Sample costs: US$5\u201350 per tool, plus international shipping (US$30\u2013150 per sample batch via courier). Third-party inspection: 1,000\u20132,500 RMB per inspection day. Safety testing (GS, CE, UL): US$500\u20133,000 per product depending on certification type. Freight forwarding: US$150\u2013300 per shipment. Import duties: 0\u201325%+ depending on product and tariff regime. Custom moulds for tool handles or power tool housings: US$1,000\u201310,000. Inland freight from factory to Chinese port: US$15\u2013150 per pallet." },
    ],
  },
  {
    category: "Payment and WorldFirst",
    faqs: [
      { q: "How should I structure payment to minimise risk?", a: "Standard structure: 30% deposit on order confirmation, 70% balance after third-party inspection passes and before shipping. Never pay 100% upfront. For Yiwu market purchases, payment is immediate (WeChat Pay, Alipay, or cash). For factory orders, wire transfer to the company\u2019s registered business bank account \u2014 never to a personal account. Use WorldFirst to pay in RMB directly to suppliers\u2019 Chinese bank accounts, which avoids the 2\u20133% FX markup from traditional banks and unlocks 1688 purchasing via 1688 World Pay." },
      { q: "Can I buy hardware on 1688 as an international buyer?", a: "Yes, but 1688 only accepts CNY from Chinese payment methods. WorldFirst\u2019s 1688 World Pay solves this \u2014 browse 1688, add items to your cart, and pay at checkout through your WorldFirst account. Prices on 1688 are typically 20\u201340% lower than Alibaba.com for identical products because it is the domestic wholesale platform. Key search terms: \u4E94\u91D1\u5DE5\u5177 (hardware tools), \u7535\u52A8\u5DE5\u5177 (power tools), \u87BA\u4E1D (screws), \u6273\u624B (wrench), \u7D27\u56FA\u4EF6 (fasteners)." },
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
            Hardware &amp; tools sourcing <span className="accent-word">FAQ</span>
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
