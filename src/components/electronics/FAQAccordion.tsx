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
    category: "Getting started with electronics sourcing",
    faqs: [
      { q: "Is it realistic to source electronics from China as a small importer?", a: "Yes, but electronics is more capital-intensive than most categories. Budget $5,000\u201315,000 for a first order including samples, tooling, and production. Start with simpler products (phone accessories, cables, chargers) before moving to custom-designed devices. Many successful importers started with accessories and graduated to more complex products." },
      { q: "Should I start on Alibaba or go direct to factories?", a: "Start on Alibaba or 1688 to understand pricing and the supplier landscape. Use it as a lead generator \u2014 shortlist 5\u201310 suppliers, request samples, then negotiate directly. Many importers attend Canton Fair Phase 1 to meet Alibaba suppliers face-to-face, then transition to factory-direct ordering through their 1688 store." },
      { q: "What\u2019s the difference between OEM and ODM for electronics?", a: "OEM = you design it, the factory makes it (you need full specs, moulds, and tooling). ODM = the factory has existing designs you can customise (logo, colour, packaging, minor features). ODM is faster and cheaper to start. OEM gives you full control and IP ownership but requires higher MOQs and tooling investment ($3,000\u201320,000+)." },
      { q: "Do I need technical knowledge to source electronics?", a: "Basic understanding of components, certifications, and BOM structure helps enormously. You don\u2019t need to be an engineer, but you need to know enough to evaluate whether a supplier\u2019s claims are realistic. If sourcing complex devices, consider hiring a sourcing agent with electronics expertise or a product development consultant." },
    ],
  },
  {
    category: "Finding & evaluating suppliers",
    faqs: [
      { q: "How do I tell if an electronics supplier is a factory or trading company?", a: "Factories have their own SMT (Surface Mount Technology) lines, assembly floors, and testing labs. Ask for a factory tour video showing actual production \u2014 not just a showroom. Check if they can explain the BOM (Bill of Materials) in detail. Trading companies often claim to \u201cmanufacture everything\u201d \u2014 a real factory specialises in specific product types." },
      { q: "What certifications should an electronics factory have?", a: "ISO 9001 (quality management) is the baseline. For products entering the EU: CE marking is mandatory. For the US: FCC (radio emissions), UL (safety). RoHS (hazardous substances) and WEEE (waste electronics) are non-negotiable for most markets. Ask for existing certificates before sampling \u2014 retrofitting compliance after production costs 5\u201310x more." },
      { q: "How do I check for counterfeit components?", a: "Request the full BOM with component brand names (not just specs). Ask for component purchase invoices from authorised distributors. For high-value chips, request traceability documentation. If a supplier won\u2019t share BOM details or component brands, that\u2019s a red flag \u2014 they may be using counterfeit or refurbished parts." },
      { q: "Should I visit the factory in person?", a: "For orders over $10,000 or custom products \u2014 yes, strongly recommended. A factory visit reveals what photos and video calls can\u2019t: actual production capacity, quality control processes, worker conditions, and whether they\u2019re a real factory or an assembly-only operation. Most electronics factories are concentrated in Shenzhen and Dongguan \u2014 you can visit 3\u20134 in a single day." },
    ],
  },
  {
    category: "Pricing & payment",
    faqs: [
      { q: "How is electronics pricing structured?", a: "Typical FOB breakdown for consumer electronics: Components 40\u201370% (chipset choice drives the biggest variance), assembly labour 10\u201315%, housing/packaging 10\u201315%, factory overhead 5\u201310%, margin 5\u201315%. Always ask suppliers to quote with 2\u20133 chipset options to understand price sensitivity." },
      { q: "What payment terms are standard for electronics orders?", a: "Standard: 30% T/T deposit before production, 70% balance before shipment against inspection report. First orders or custom products: 50/50 is common. Some factories require 100% prepayment for orders under $5,000. Never pay 100% upfront on orders over $5,000 \u2014 regardless of how good the price is." },
      { q: "What are typical tooling and mould costs?", a: "Injection moulds for custom housings: $3,000\u201320,000+ depending on complexity, material, and number of cavities. Clarify upfront: who owns the mould, what\u2019s the mould life (shots), and is the tooling cost refundable after X units? Always get mould ownership in writing \u2014 this is your IP." },
      { q: "How do I protect my deposit on electronics orders?", a: "Use WorldTrade escrow \u2014 it holds your deposit until the supplier confirms shipment with tracking. For electronics, where deposits regularly exceed $10,000, this removes the single biggest risk in the transaction: sending money and hoping. WorldFirst also verifies the supplier\u2019s bank account against their business registration before payment." },
      { q: "What are the pricing red flags?", a: "If a supplier quotes significantly below market and pushes for full payment upfront, walk away. In electronics specifically, rock-bottom prices usually mean counterfeit components, refurbished parts, or skipped testing \u2014 all of which create liability when products reach consumers. Also watch for quotes that match your exact enquiry quantity as MOQ \u2014 common bait-and-switch tactic." },
    ],
  },
  {
    category: "Shipping & compliance",
    faqs: [
      { q: "Can I air-freight electronics with lithium batteries?", a: "Yes, but with strict regulations. Lithium batteries are classified as IATA DGR Class 9 dangerous goods. You need proper MSDS (Material Safety Data Sheet) documentation, UN38.3 test reports, and packaging that meets Section II requirements. Many freight forwarders won\u2019t handle batteries without these documents. Plan for this early \u2014 getting the documentation takes 2\u20134 weeks." },
      { q: "What Incoterms should I use for electronics?", a: "FOB Shenzhen or FOB Dongguan is standard for electronics. EXW saves 3\u20135% but you handle everything from factory gate including domestic transport. CIF/DDP adds convenience but hides the logistics cost. For first orders, FOB gives you the best balance of control and transparency." },
      { q: "How do I calculate landed cost for electronics?", a: "EXW price + domestic transport to port + freight (sea/air) + insurance + customs duties + destination handling + last-mile delivery. Typical multiplier: US ~1.7\u20131.9x the EXW price. EU ~1.9\u20132.1x. UK ~1.9\u20132.0x. The free China Sourcing Map includes a full 10-step landed cost breakdown with a worked example." },
      { q: "What\u2019s the container configuration for electronics?", a: "20ft container holds approximately 28 CBM / 22,000 kg. For consumer electronics: ~2,000\u20134,000 units per pallet depending on product size. Start with LCL (less-than-container load) for initial orders, transition to FCL when volume justifies it. Always request photographs of container loading \u2014 damage claims are nearly impossible without them." },
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
            Electronics Sourcing <span className="accent-word">FAQ</span>
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
