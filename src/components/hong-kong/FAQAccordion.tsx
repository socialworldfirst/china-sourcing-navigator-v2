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
    category: "Why Hong Kong for sourcing",
    faqs: [
      { q: "Why is Hong Kong important for China sourcing even though nothing is manufactured there?", a: "Hong Kong is the sourcing control tower. It doesn't make products — it orchestrates deals, verifies quality, structures trade finance, and protects contracts under common law. Thousands of trading companies, buying offices, and sourcing agents coordinate manufacturing across mainland China and Southeast Asia from Hong Kong. The city's common law legal system, stronger IP protection, and international banking infrastructure give it advantages no mainland city can match." },
      { q: "What is Hong Kong's role in China's supply chain?", a: "Trade orchestration and governance. Hong Kong handles the 'business wrapper' — contracts, compliance, quality control coordination, trade finance, and logistics management. Manufacturing happens in mainland China (Shenzhen, Dongguan, Guangzhou), but the commercial and legal framework often runs through Hong Kong. Many international companies register HK entities specifically for China sourcing operations." },
      { q: "Should I set up a Hong Kong company for sourcing from China?", a: "If you source regularly from China, yes. An HK company costs approximately HK$10,000 to register, gives you a legal entity under common law, and provides a jurisdiction with stronger IP protection and transparent regulations. You can sign contracts, receive goods documentation, manage trade finance, and hold an HKD account (pegged to USD, eliminating FX risk). Corporate tax is 16.5% with no VAT, no GST, and no capital gains tax." },
      { q: "How does Hong Kong's legal system protect sourcing buyers?", a: "Hong Kong uses common law (English-based legal system), which means enforceable English-language contracts and international arbitration through HKIAC. IP protection is significantly stronger than mainland China. Contract disputes are resolved in a transparent judicial system familiar to Western businesses. This is why many sourcing companies register in HK even though their manufacturing happens across the border in Shenzhen or Dongguan." },
    ],
  },
  {
    category: "Hong Kong vs Shenzhen",
    faqs: [
      { q: "Hong Kong vs Shenzhen — which is better for sourcing?", a: "They serve different functions. Use Hong Kong for the 'business wrapper': contracts, compliance, trade finance, QC coordination, and IP-sensitive deals. Use Shenzhen for the 'production wrapper': factory visits, R&D prototyping, and large-volume manufacturing. Many sourcing companies register in HK and manufacture in Shenzhen. The two cities are 14–23 minutes apart by high-speed rail (West Kowloon to Futian)." },
      { q: "Is it cheaper to ship goods through Hong Kong or Shenzhen?", a: "For small shipments under US$5,000, Hong Kong transit can be more cost-effective. For large shipments above $500,000, Shenzhen's Free Trade Zone is roughly 7x cheaper on transit costs ($158 vs $1,087). Hong Kong's advantage is zero customs tariffs on most goods, a sophisticated banking system, and the world's busiest international cargo airport. Shenzhen's advantage is lower fixed costs for bulk shipments and direct factory proximity." },
      { q: "Can I do a day trip from Hong Kong to Shenzhen for factory visits?", a: "Yes, easily. West Kowloon Station to Shenzhen Futian takes 14 minutes by high-speed rail. Visit Huaqiangbei electronics markets or Shenzhen factories, then return to HK the same evening. Recent visa-free transit policies make border crossing simpler for most passport holders. Five land border crossings also connect the two cities, with Luohu and Futian being the busiest." },
      { q: "Should I base my sourcing operation in Hong Kong or Shenzhen?", a: "If your priority is legal protection, trade finance, and QC coordination: Hong Kong. If your priority is factory proximity, hands-on manufacturing oversight, and lower operating costs: Shenzhen. Many successful operations split: a small HK office for contracts and finance, with purchasing staff based in Shenzhen for factory management." },
    ],
  },
  {
    category: "Trade shows & HKTDC",
    faqs: [
      { q: "What HKTDC trade shows should I attend in 2026?", a: "Depends on your product category. Jewellery Show (Mar 4–8): fine jewelry, gems, diamonds. Electronics Fair Spring (Apr 13–16): co-located with Lighting and ICT Expo. Gifts & Premium Fair + Home InStyle (Apr 27–30): gifts, promotional products, home decor. Watch & Clock Fair (Sep 1–5): watches, smart wearables. Electronics Fair Autumn (Oct 13–16): typically larger than spring edition. All held at HKCEC, Wan Chai." },
      { q: "What is HKTDC and how do they help buyers?", a: "The Hong Kong Trade Development Council (HKTDC) is Hong Kong's official trade promotion body. They organise 30+ trade fairs annually, operate sourcing.hktdc.com (a verified supplier directory), and provide the EXHIBITION+ hybrid format for online-offline engagement. HKTDC-verified exhibitors have passed basic vetting, offering significantly higher trust than cold-sourcing on Alibaba. Registration for most HKTDC fairs is free." },
      { q: "When is the Hong Kong Electronics Fair?", a: "Two editions annually: Spring (April 13–16, 2026) and Autumn (October 13–16, 2026). Both at HKCEC. The Spring edition co-locates with the International Lighting Fair and ICT Expo. The Autumn edition is typically larger. Use Spring for innovation scouting and Autumn for volume sourcing. Many Shenzhen electronics manufacturers exhibit at both editions." },
      { q: "When is the Hong Kong International Jewellery Show?", a: "March 4–8, 2026 at HKCEC. Features fine jewelry, loose gems, diamonds, and pearls in the EXHIBITION+ hybrid format. This is the premier jewelry sourcing event in Asia. Combine it with a visit to the Jade Market in Yau Ma Tei for loose stones and jade." },
    ],
  },
  {
    category: "Trade finance & banking",
    faqs: [
      { q: "What are the advantages of using Hong Kong for trade finance?", a: "Free port (no customs tariffs on most goods), HKD pegged to USD (eliminates FX risk), deep pool of trade finance expertise at HSBC, Standard Chartered, and Bank of China (HK), efficient letter of credit issuance accepted across 175+ countries, 16.5% corporate tax with no VAT/GST, and the world's busiest international cargo airport. The HKMA's Project Cargox (published January 2026) is further modernising trade finance infrastructure." },
      { q: "How do letters of credit work for China sourcing through Hong Kong?", a: "Your HK bank issues an LC guaranteeing payment to the supplier upon documented proof of shipment. The supplier's mainland bank confirms receipt. LCs issued from Hong Kong banks (HSBC, Standard Chartered) are widely accepted globally because of the jurisdiction's regulatory reputation. For first-time supplier relationships, LCs reduce risk for both parties. HK banking expertise makes LC issuance faster and more reliable than many other jurisdictions." },
      { q: "What is Project Cargox and how will it affect trade finance?", a: "Project Cargox is the HKMA's (Hong Kong Monetary Authority) initiative to modernise trade finance infrastructure. 20 recommendations were published in January 2026. It aims to digitise trade documents, reduce fraud risk, and speed up LC processing. For importers, this means faster, cheaper, and more secure trade finance operations through Hong Kong banks — further strengthening the city's role as a trade finance hub." },
    ],
  },
  {
    category: "Jewelry sourcing",
    faqs: [
      { q: "Where can I source jewelry in Hong Kong?", a: "Three main channels: HKTDC International Jewellery Show (March 4–8 at HKCEC) for fine jewelry, gems, and diamonds. Jade Market in Yau Ma Tei (Kansu Street, near Jordan MTR, open daily ~10:00–18:00) for jade, pearls, and precious stones. Rise Shopping Arcade in Tsim Sha Tsui for boutique jewelry and local designers. For volume buying, attend the HKTDC show and connect with exhibitors who source from Shenzhen's Shuibei district and Guangzhou's Panyu." },
      { q: "What is the Jade Market in Hong Kong?", a: "The Jade Market is located on Kansu Street in Yau Ma Tei, Kowloon (near Jordan MTR Station). Hundreds of jewellers sell jade, pearls, precious and semi-precious stones at wholesale and retail prices. Open daily approximately 10:00–18:00. It's a good starting point for understanding jade grading and pricing before committing to larger orders through trade show contacts." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I get to Hong Kong?", a: "Fly into Hong Kong International Airport (HKG) — one of the world's busiest, with direct flights from virtually every major global city. Airport Express to Central takes approximately 40 minutes. No visa required for most Western passport holders (90 days for UK, 14 days for US business visa waiver). Note: Hong Kong has separate immigration from mainland China." },
      { q: "How do I get from Hong Kong to Shenzhen factories?", a: "High-speed rail: West Kowloon Station to Shenzhen Futian (14 min) or Shenzhen North (23 min). MTR East Rail Line from Lo Wu or Lok Ma Chau border crossings (~1 hour total). From Guangzhou: high-speed rail from Guangzhou South to West Kowloon Station (47 min). West Kowloon Station also connects to China's national HSR network (Beijing, Shanghai, etc.)." },
      { q: "Where should I stay in Hong Kong for sourcing?", a: "For HKTDC trade fairs: Wan Chai area near HKCEC. Book months ahead during fair season — hotels near HKCEC can exceed HK$2,000/night. For Jade Market: Yau Ma Tei or Jordan (Kowloon side). For general business and Shenzhen day trips: Tsim Sha Tsui (convenient for West Kowloon HSR station). Cost of living is significantly higher than mainland China — budget accordingly." },
      { q: "What are Hong Kong's tax advantages for trade companies?", a: "Corporate tax: 16.5%. No VAT or GST. No capital gains tax. No customs tariffs on most imported/exported goods (free port status). HKD pegged to USD eliminates currency risk for USD-denominated deals. Company registration costs approximately HK$10,000. These structural advantages are why many international importers route their China sourcing through HK entities." },
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
            Hong Kong Sourcing <span className="accent-word">FAQ</span>
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
