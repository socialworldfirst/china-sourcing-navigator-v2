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
    category: "Getting started with jewelry sourcing",
    faqs: [
      { q: "What\u2019s the difference between sourcing fashion jewelry and fine jewelry from China?", a: "Fashion jewelry (Yiwu, Dongguan) uses non-precious materials \u2014 stainless steel, zinc alloy, brass, acrylic \u2014 with MOQs of 100\u2013500 pieces per design and prices from US$0.10. Fine jewelry (Panyu, Shuibei) uses gold, silver, diamonds, and gemstones with MOQs typically 30\u2013100 pieces and significantly higher per-unit costs. The supply chains are geographically separate and require different due diligence approaches." },
      { q: "How much capital do I need to start sourcing jewelry from China?", a: "Fashion jewelry: US$1,000\u20135,000 gets you started with a mixed order from Yiwu or 1688 suppliers. Fine jewelry: US$5,000\u201320,000 minimum for a first Panyu order including samples, tooling for custom moulds, and production. Watches: US$3,000\u201310,000 depending on movement type and MOQ. Always budget for samples (US$50\u2013300 for a set) and third-party testing (US$200+ per product for REACH/nickel compliance)." },
      { q: "Should I source through Alibaba, 1688, or visit markets directly?", a: "Start on 1688 to understand domestic wholesale pricing. Use it as a lead generator \u2014 shortlist suppliers, request samples, then negotiate directly. For fashion jewelry, visiting Yiwu District 1 in person is invaluable because you can compare 5,000+ suppliers in a single day. For fine jewelry, Panyu and Shuibei require in-person visits to evaluate craftsmanship. Many importers use Alibaba for initial supplier discovery but transition to 1688 and direct relationships." },
      { q: "Can I source watches and sunglasses from the same suppliers as jewelry?", a: "Rarely. Watch manufacturing (Shenzhen, Guangzhou Zhanxi) requires specialised movement assembly, and sunglasses (Danyang, Wenzhou) need optical-grade lens production. These are different supply chains. However, some Yiwu trading companies consolidate fashion watches and sunglasses alongside jewelry for buyers who want a single shipment. The trade-off is less quality control over each category." },
    ],
  },
  {
    category: "Quality and compliance",
    faqs: [
      { q: "How do I verify plating quality on fashion jewelry?", a: "Ask if the factory has its own PVD (Physical Vapour Deposition) machines \u2014 factories that do their own plating control the entire process. Request plating thickness specifications: standard electroplating gives 0.03\u20130.5 microns (wears within months), while PVD can achieve 2\u20135 microns (lasting 3+ years, matching luxury brand standards). Always request a plating sample and test it yourself \u2014 rub it with an alcohol pad, wear it for a week, check for discolouration." },
      { q: "What compliance certifications do I need for jewelry?", a: "EU: REACH regulation is mandatory, controlling nickel, lead, and cadmium. Nickel migration must be below 0.5 \u03bcg/cm\u00b2/week for skin contact and below 0.2 \u03bcg/cm\u00b2/week for piercing jewelry. The new GPSR (General Product Safety Regulation) adds labelling requirements from 2024. US: CPSIA limits lead content to 100 ppm for children\u2019s jewelry. Both markets require third-party lab testing \u2014 approximately US$200 per product. Retrofitting compliance after production costs 5\u201310x more." },
      { q: "How do I avoid counterfeit or substandard materials?", a: "Request the full materials specification with metal alloy grades (e.g. 316L stainless steel, not just \u201cstainless\u201d). A common scam: quoting 316L stainless steel but using 304 to save money \u2014 undetectable for months until tarnishing starts. For precious metals, request assay certificates and hallmarking. For gemstones, insist on GIA or equivalent grading reports. If a supplier refuses to share material specifications, walk away." },
      { q: "What are the biggest quality risks in jewelry sourcing?", a: "Plating that fades or causes skin reactions within weeks; undisclosed nickel in \u201chickel-free\u201d products; base metals substituted for the quoted alloy; inconsistent sizing across a batch; poor clasp mechanisms that break after minimal wear; and lead or cadmium above legal limits in children\u2019s products. Third-party pre-shipment inspection (US$200\u2013400) catches most of these issues before the container ships." },
    ],
  },
  {
    category: "Pricing and payment",
    faqs: [
      { q: "What does fashion jewelry cost at factory gate?", a: "Yiwu market: US$0.10\u20130.50 for basic earrings and rings, US$0.50\u20132.00 for necklaces and bracelets, US$2\u201328 for statement or multi-piece sets. 1688 factory-direct: typically 10\u201320% below Yiwu market booth prices for equivalent quality. Dongguan stainless steel: US$0.80\u20131.50 per unit wholesale. These prices exclude packaging, testing, and logistics. Most importers achieve retail prices of 5\u201310x their landed cost." },
      { q: "What payment terms are standard for jewelry orders?", a: "Standard: 30% T/T deposit before production, 70% balance before shipment against inspection report. First orders or custom pieces: 50/50 is common. Yiwu ready-stock orders under US$2,000: many suppliers accept full payment on order. For fine jewelry with precious metals, suppliers may require 50\u201370% upfront to cover material costs. Never pay 100% upfront on orders over US$5,000." },
      { q: "How do I protect my deposit on jewelry orders?", a: "Use WorldTrade escrow \u2014 it holds your deposit until the supplier confirms shipment with tracking. For jewelry, where material substitution is a real risk, escrow removes the biggest financial exposure: paying for gold-plated and receiving brass. WorldFirst also verifies the supplier\u2019s bank account against their business registration before payment." },
      { q: "Are there hidden costs I should budget for?", a: "Mould or tooling charges: US$50\u2013500 per design for custom moulds (jewellery casting moulds, watch case tooling). Sample costs: US$50\u2013300 per design set, sometimes refundable against first order. Third-party testing: US$200+ per product for REACH/CPSIA compliance. Packaging: US$0.05\u20130.50 per unit for custom boxes or pouches. Photography: some suppliers charge for product images. Always get a complete cost breakdown before committing." },
    ],
  },
  {
    category: "Shipping and logistics",
    faqs: [
      { q: "What are the shipping considerations for jewelry?", a: "Fashion jewelry is lightweight and compact \u2014 ideal for air freight or express courier for initial orders. A 20ft container can hold enormous quantities (50,000\u2013200,000 pieces depending on packaging). Watches with batteries must comply with IATA battery shipping regulations. Precious metals and gemstones may require insurance certificates and customs declarations of value. Always request individual poly-bagging to prevent scratching and tarnishing." },
      { q: "What customs duties apply to jewelry imports?", a: "Duties vary significantly by material and destination. UK: fashion jewelry (HS 7117) typically 2.5\u20134%, watches (HS 9102) 4.5%, sunglasses (HS 9004) 2.9%. US: fashion jewelry 11%, watches 6.25\u201351.2% (depending on movement type and case material). EU: similar range to UK. Precious jewelry attracts different rates. Always check the exact HS code with your freight forwarder before ordering." },
      { q: "What Incoterms should I use for jewelry?", a: "FOB Yiwu, FOB Shenzhen, or FOB Guangzhou depending on the source city. EXW saves 2\u20135% but you handle domestic transport. For high-value fine jewelry shipments, consider DDP with insurance for full chain-of-custody protection. For fashion jewelry trial orders, many Yiwu suppliers ship via express (EMS, DHL) at the buyer\u2019s cost, bypassing Incoterms entirely." },
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
            Jewelry sourcing <span className="accent-word">FAQ</span>
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
