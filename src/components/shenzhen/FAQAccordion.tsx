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
    category: "Getting started in Shenzhen",
    faqs: [
      { q: "What products is Shenzhen best for sourcing?", a: "Electronics and hardware. Consumer electronics, PCBs, smart home devices, LED products, drones, audio equipment, phone accessories, and power products. A significant share of the world\u2019s consumer electronics pass through Shenzhen\u2019s supply chain at some point. The city also has China\u2019s largest jewelry district in Shuibei and a growing fashion cluster in Nanyou. For non-electronics categories like apparel, textiles, or beauty, Guangzhou is the better starting point." },
      { q: "Is Shenzhen better than Guangzhou for sourcing?", a: "For electronics, smart hardware, and tech products, Shenzhen has no competition. For fashion, leather, beauty, textiles, and general consumer goods, Guangzhou is stronger. Many importers visit both: Shenzhen for tech, Guangzhou for everything else. The two cities are 29 minutes apart by high-speed rail." },
      { q: "Can I source from Shenzhen without visiting?", a: "Yes. Start on 1688 using the \u641C\u5DE5\u5382 (Search Factory) filter set to \u6DF1\u5733. For electronics specifically, ec.1688.com and 3c.1688.com have dedicated Shenzhen supplier sections. Request WeChat video factory tours. But visiting Huaqiangbei at least once gives you component pricing context you cannot get remotely." },
      { q: "How do I tell if a Shenzhen supplier is a factory or trading company?", a: "Check their registered address. Bao\u2019an, Longhua, or Longgang addresses indicate factories. Futian or Luohu addresses are trading companies. Verify at gsxt.gov.cn \u2014 look for \u751F\u4EA7 (production) vs \u9500\u552E (sales) in the \u7ECF\u8425\u8303\u56F4 (business scope). If they sell LEDs, phone cases, AND furniture, they trade rather than manufacture." },
      { q: "Do I need technical knowledge to source electronics in Shenzhen?", a: "Basic understanding of components and BOM structure helps. You do not need to be an engineer, but you need to know enough to evaluate whether a supplier\u2019s claims are realistic. For custom devices, consider hiring a Shenzhen-based product development consultant or sourcing agent with electronics expertise." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 sub-platforms should I use for Shenzhen electronics?", a: "ec.1688.com (electronics), 3c.1688.com (3C digital products), ee.1688.com (electrical engineering), light.1688.com (lighting). Use the \u6DF1\u5733\u4EA7\u4E1A\u5E26 (Shenzhen Industrial Belt) on industry.1688.com for curated manufacturer listings. The \u641C\u5DE5\u5382 tab filters for verified factories." },
      { q: "How much cheaper is 1688 than Alibaba for Shenzhen electronics?", a: "30-70% cheaper for the same products from the same factories. Alibaba.com prices include export markup, English sales team overhead, and Trade Assurance fees. 1688 is the domestic wholesale price. TWS earphones that cost $8 on Alibaba sell for $3-4 on 1688. The tradeoff: Chinese-only interface, CNY payment required, no built-in international buyer protection." },
      { q: "Is the 1688 3C Digital Selection Center worth visiting?", a: "Yes. Located in Longgang district, it is a physical showroom run by 1688 where you can see and test products from verified Shenzhen electronics suppliers. Good for matching 1688 listings to physical products and building supplier relationships face-to-face." },
      { q: "How do I pay Shenzhen suppliers on 1688?", a: "1688 payments are in CNY. Use 1688 World Pay (WorldFirst\u2019s integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via WorldFirst\u2019s World Account. For electronics orders, deposits regularly exceed $10,000, so WorldTrade escrow holds your payment until shipment is confirmed." },
    ],
  },
  {
    category: "Trade shows & Huaqiangbei",
    faqs: [
      { q: "Which Shenzhen trade shows matter most for electronics sourcing?", a: "CITE (Apr 9-11, Futian Convention Center) covers IT and components. CHTF (Nov 26-28, Bao\u2019an World Exhibition Center) is the largest, covering AI, manufacturing, and medical devices at 400,000 sqm. CIOE + ELEXCON (Sep 9-11) cover optoelectronics and embedded systems. CIBF (May 13-15) covers batteries and energy storage." },
      { q: "What is Huaqiangbei and how do I get there?", a: "Huaqiangbei is the world\u2019s largest electronics market district. 1.45 km\u00B2 in Futian district with 40+ individual markets and 20,000+ merchants. Take Metro Line 2 or 7 to Huaqiang North Station. Start at SEG Plaza (components), then walk north through Huaqiang Electronics World (computers/phones) and Yuanwang Digital Mall (phones/accessories)." },
      { q: "Should I attend Canton Fair for electronics?", a: "Canton Fair Phase 1 (Apr 15-19) covers electronics, hardware, and lighting. It is in Guangzhou, 29 minutes from Shenzhen North by high-speed rail. Many importers combine a Canton Fair visit with Shenzhen factory tours. Attend the Fair for discovery, then visit Shenzhen factories for pricing and production discussions." },
      { q: "What are the two Shenzhen convention centres?", a: "Shenzhen Convention Center (\u6DF1\u5733\u4F1A\u5C55\u4E2D\u5FC3) in Futian is central and older. Metro Line 1 to Convention Center Station. Used by CITE. Shenzhen World Exhibition Center (\u6DF1\u5733\u56FD\u9645\u4F1A\u5C55\u4E2D\u5FC3) in Bao\u2019an is newer and larger. Metro Line 20. Used by CHTF, CIOE, ELEXCON, IOTE, and CIBF." },
    ],
  },
  {
    category: "Pricing, payment & verification",
    faqs: [
      { q: "How much do Shenzhen factories mark up for foreign buyers?", a: "Initial quotes are 200-300% above factory cost. Negotiation is expected. Always get 2-3 competing quotes and mention you are comparing. 1688 domestic prices are the benchmark: if a factory quotes you $8 for an item listed at $3 on their own 1688 store, you know the real floor." },
      { q: "What are standard payment terms for Shenzhen electronics orders?", a: "30% deposit before production, 70% balance before shipment against inspection report. First orders or custom products: 50/50 is common. Some factories require 100% prepayment for orders under $5,000. Never pay 100% upfront on orders over $5,000 regardless of the quoted price." },
      { q: "What are typical MOQs for Shenzhen electronics?", a: "PCB prototypes: from 1 piece ($2, next-day delivery). TWS earphones: 500-3,000 units. Power banks: 1,000+ units. Phone cases: 1,000-5,000 units. Smart hardware ODM: 500-3,000 units. Custom mould tooling: $3,000-$20,000+ depending on complexity. Get mould ownership in writing." },
      { q: "How do I verify a Shenzhen electronics supplier?", a: "Check gsxt.gov.cn for business registration. Cross-reference the registered address against the district map (Bao\u2019an/Longhua = factory, Futian/Luohu = trader). Request a live factory walkthrough via WeChat video. Use WorldFirst\u2019s beneficiary verification to check their bank account against their business registration before sending any deposit." },
      { q: "What are the biggest scam risks in Shenzhen?", a: "Golden sample trap: the sample you receive is hand-picked perfection. Mass production quality runs 10-20% worse unless you specify and inspect. Bluetooth keyboard trick: factory shows a great sample, ships units with cheaper internals (different chip, worse battery). Front company scams average $82,000 in losses. Industrial salt substitution scams have cost importers $77,000. 18% of importers report losing money to scams, with an average loss of $45,000. Always verify the company registration and pay to the registered business account." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I get to Shenzhen?", a: "Fly into Bao\u2019an International Airport (SZX). Metro Line 11 to Futian CBD in 30 minutes. By rail: 29 minutes from Guangzhou South to Shenzhen North (342 daily trains). From Hong Kong: 15 minutes by high-speed rail from West Kowloon to Futian Station. Five land border crossings connect Shenzhen to Hong Kong, with Luohu and Futian being the busiest." },
      { q: "Which metro lines matter for sourcing?", a: "Line 1 (Luobao): Luohu to Bao\u2019an, main east-west corridor. Line 2: connects Huaqiangbei markets. Line 3: Luohu to Shuibei jewelry (Tianbei station) and Longgang. Line 4: Futian to Longhua (Foxconn). Line 7: ring line connecting Huaqiangbei to Shuibei. Line 11: airport express, 30 minutes to Futian." },
      { q: "When is the best time to visit Shenzhen for sourcing?", a: "March-April and October-November. Mild weather, all factories running. Avoid June-September (typhoon season, extreme heat). Avoid February (Chinese New Year \u2014 most factories close 2-4 weeks). 2026 CNY: Feb 15-23. Avoid first week of October (National Day holiday)." },
      { q: "Where should I stay in Shenzhen for sourcing?", a: "For Huaqiangbei: Futian district, near Huaqiang North metro station. For factory visits: Bao\u2019an or Longhua (closer to manufacturing zones but further from central Shenzhen). For jewelry: Luohu near Tianbei station. For Hong Kong day trips: Futian CBD (15 min to HK by rail)." },
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
            Shenzhen Sourcing <span className="accent-word">FAQ</span>
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
