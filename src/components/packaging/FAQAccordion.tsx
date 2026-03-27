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
    category: "Getting started with packaging sourcing",
    faqs: [
      { q: "What types of packaging can I source from China?", a: "Almost every format: corrugated shipping cartons, folding cartons, rigid gift boxes (magnetic closure, lift-off lid, book-style), mailer boxes, paper bags with handles, poly mailers, stand-up pouches, vacuum bags, blister packs, self-adhesive labels, hang tags, ribbons, tissue paper, and custom inserts. China\u2019s packaging supply chain is the most complete in the world \u2014 whatever you need, there\u2019s a specialist factory making it." },
      { q: "What MOQs should I expect for custom packaging?", a: "Standard custom printed boxes: 500\u20131,000 pieces for digital printing, 1,000\u20133,000 for offset printing. Rigid boxes with hand assembly: 500\u20131,000. Flexible pouches: 5,000\u201310,000 (gravure printing requires cylinder engraving). Stock boxes with a logo sticker: as low as 100\u2013200 pieces. Die-cut tooling is a one-off cost ($50\u2013500 depending on complexity) that you pay once." },
      { q: "How much cheaper is Chinese packaging versus domestic?", a: "Typically 40\u201360% cheaper than UK, US, or European packaging suppliers for the same specification. The savings are largest on labour-intensive formats like rigid boxes with hand assembly, and smallest on commodity items like plain corrugated cartons where shipping cost narrows the gap. Always calculate landed cost (including freight and duties) before comparing." },
      { q: "Should I source packaging separately from my product?", a: "It depends. If your product factory has its own packaging line, bundling can be simpler and cheaper on logistics. But dedicated packaging factories almost always deliver better print quality, more finishing options, and tighter structural tolerances. Most experienced importers source packaging separately once their volumes justify a standalone packaging order." },
    ],
  },
  {
    category: "Finding and evaluating suppliers",
    faqs: [
      { q: "How do I tell if a packaging supplier is a factory or trading company?", a: "Factories have their own printing presses (offset, flexo, or digital), die-cutting machines, and finishing equipment (laminator, foil stamper, gluer). Ask for a factory tour video showing the actual production floor. Trading companies typically can\u2019t explain their equipment specifications or show you the presses running. Also check: factories specialise in specific packaging types, while trading companies offer everything." },
      { q: "What certifications should a packaging factory have?", a: "ISO 9001 (quality management) is the baseline. For food-contact packaging: FDA approval and food-grade material certificates. FSC (Forest Stewardship Council) for sustainable paper sourcing. BRCGS for global safety standards. Disney/SEDEX/BSCI for social compliance if you\u2019re selling to major retailers. G7 Master Printer certification indicates colour management capability." },
      { q: "How do I evaluate print quality from samples?", a: "Request a physical sample \u2014 never judge from photos. Check: colour accuracy against your Pantone swatch under daylight, registration (alignment of different colour layers), dot gain (whether colours appear darker/muddier than expected), surface finish consistency, die-cut edge sharpness, and structural rigidity. Run your fingernail across the print to test adhesion. A good factory will send a colour drawdown with the sample." },
      { q: "Should I visit the packaging factory?", a: "For orders over \u00a35,000 or brand-critical retail packaging \u2014 yes. A factory visit reveals equipment age and maintenance, actual production capacity (versus claimed), quality control process, and material storage conditions. Packaging factories in Guangzhou and Dongguan are concentrated enough that you can visit 3\u20134 in a single day. Combine with Canton Fair if timing works." },
    ],
  },
  {
    category: "Pricing, payment, and tooling",
    faqs: [
      { q: "How is custom packaging pricing structured?", a: "Typical breakdown: materials 40\u201355% (paper grade, coating, lamination drive the biggest variance), printing 15\u201325% (number of colours, Pantone vs CMYK), die-cutting and tooling 5\u201310%, finishing 5\u201315% (foil stamping, embossing, spot UV), assembly and packing 5\u201310%, factory margin 10\u201315%. Always request quotes with 2\u20133 material grade options to understand price sensitivity." },
      { q: "What payment terms are standard?", a: "Standard: 30% T/T deposit before production, 70% balance before shipment. First orders: 50/50 is common. Some factories accept L/C for orders over $10,000. For 1688 orders, use 1688 World Pay which holds funds until delivery confirmation. Never pay 100% upfront to a new supplier regardless of how good the price looks." },
      { q: "Who owns the die-cutting tooling?", a: "Clarify this before production starts. Standard practice: you pay for the die and you own it. Get this in writing. Die costs range from $50 for simple shapes to $500+ for complex multi-piece designs. The die stays at the factory for convenience, but it\u2019s your asset \u2014 you can request it be shipped if you change suppliers. Ask about die life (how many cuts before replacement)." },
      { q: "How do I protect my deposit on packaging orders?", a: "Use WorldTrade escrow \u2014 it holds your deposit until the supplier confirms shipment with tracking. For packaging, where tooling deposits and material prepayments are common, this removes the biggest risk. WorldFirst also verifies the supplier\u2019s bank account against their business registration before payment." },
    ],
  },
  {
    category: "Quality control and shipping",
    faqs: [
      { q: "What are the common quality issues with Chinese packaging?", a: "Colour drift between batches (insist on Pantone matching with a signed colour standard), inconsistent die-cut edges (check blade sharpness on first articles), weak glue adhesion on rigid boxes (test by pulling at joints), warping from moisture in corrugated (request moisture content certification), and ink scuffing on uncoated surfaces (always specify coating/lamination for retail packaging)." },
      { q: "Should I use a third-party inspection for packaging?", a: "For any order over 5,000 pieces or for retail-facing packaging \u2014 yes. A pre-shipment inspection costs $200\u2013400 and checks print quality, colour accuracy, dimensions, structural integrity, and defect rates against your AQL (Acceptable Quality Level). The inspector should use a spectrophotometer for colour matching, not just visual comparison." },
      { q: "How should packaging be shipped to avoid damage?", a: "Flat-packed boxes on pallets wrapped in stretch film, with moisture barrier bags for sea freight. Corrugated cartons can be shipped flat and assembled at destination to save volume. Rigid boxes must be individually wrapped or separated with tissue to prevent scuffing. Always request loading photographs. For high-value retail packaging, consider air freight for the first shipment to verify quality before committing to sea containers." },
      { q: "What are the HS codes and duties for packaging imports?", a: "Common codes: 4819.10 (corrugated boxes), 4819.20 (folding cartons), 4819.40 (paper bags), 3923.21 (polyethylene bags), 4821.10 (printed labels). Duty rates vary by destination country \u2014 typically 0\u20135% for paper packaging, 3\u20138% for plastic. Check your country\u2019s tariff schedule. The free China Sourcing Map includes a full landed cost breakdown methodology." },
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
            Packaging sourcing <span className="accent-word">FAQ</span>
          </h2>
          <p className="text-wf-text-secondary max-w-lg mx-auto">
            {faqData.reduce((sum, cat) => sum + cat.faqs.length, 0)} answers organised by topic
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((cat) => (
            <div key={cat.category} className="bg-white border border-wf-border rounded-xl overflow-hidden">
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
