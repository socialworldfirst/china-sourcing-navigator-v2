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
    category: "Getting started with medical device sourcing",
    faqs: [
      { q: "Can small importers realistically source medical devices from China?", a: "Yes, but this is the most regulation-heavy category in sourcing. Budget US$10,000\u201330,000 for a first order including samples, testing, and compliance documentation. Start with Class I devices (basic consumables, manual instruments) that have simpler regulatory pathways. Blood pressure monitors, pulse oximeters, and basic rehabilitation aids are common entry points. Never skip regulatory homework \u2014 selling non-compliant medical devices carries serious legal liability." },
      { q: "What is the difference between Class I, Class II, and Class III medical devices?", a: "Class I = lowest risk (bandages, tongue depressors, manual stethoscopes). Class II = moderate risk (blood pressure monitors, ultrasound, powered wheelchairs). Class III = highest risk (implants, defibrillators, ventilators). The higher the class, the more testing, documentation, and regulatory approval needed before you can legally sell in your market. Most first-time importers start with Class I or low-risk Class II devices." },
      { q: "Should I use Alibaba or go direct to factories for medical products?", a: "Use Alibaba and 1688 as discovery tools to identify potential suppliers, then move to direct communication quickly. For medical devices specifically, you need to verify NMPA production licences, ISO 13485 certification, and existing CE/FDA approvals before placing any order. Many Alibaba listings for medical devices are from trading companies, not factories \u2014 always confirm the actual manufacturer and visit if possible." },
      { q: "What is NMPA and why does it matter for sourcing?", a: "NMPA (National Medical Products Administration) is China\u2019s equivalent of the FDA. Any medical device manufactured in China must hold an NMPA production licence. This matters for importers because a factory without proper NMPA licensing is operating illegally \u2014 their products may not meet safety standards and will likely fail customs inspection in your destination country. Always ask for the NMPA registration number and verify it on the NMPA database." },
    ],
  },
  {
    category: "Finding and evaluating suppliers",
    faqs: [
      { q: "How do I verify a medical device supplier is legitimate?", a: "A review of 140+ Chinese medical suppliers found 42% lacked required qualifications, 37% could not meet claimed capacity, and 27% had regulatory issues. Check three things: (1) NMPA production licence number \u2014 verify on the official NMPA database, (2) ISO 13485 quality management certification \u2014 confirm with the issuing body, (3) existing CE or FDA registrations for products similar to yours. If a supplier cannot provide all three, walk away regardless of pricing." },
      { q: "What certifications should a medical device factory have?", a: "ISO 13485 (medical device quality management) is the baseline \u2014 non-negotiable. For EU markets: CE marking under MDR 2017/745. For the US: FDA 510(k) clearance or registration. NMPA production licence for domestic manufacturing. Additional certifications vary by product: IEC 60601 for electrical medical equipment, biocompatibility testing (ISO 10993) for devices that contact the body. Retrofitting compliance after production costs 5\u201310\u00D7 more than building it in from the start." },
      { q: "How do I spot counterfeit certifications?", a: "Counterfeit quality certificates are a documented problem in Chinese medical device sourcing. Red flags: certificates with no verifiable issuing body, CE marks without a four-digit Notified Body number, FDA registration numbers that do not appear in the FDA database, and ISO certificates with expired validity dates. Always cross-reference certificate numbers directly with the issuing authority \u2014 never rely on PDF copies provided by the supplier alone." },
      { q: "Should I visit medical device factories in person?", a: "For orders exceeding US$15,000 or any custom/OEM medical product \u2014 yes. A factory visit reveals whether they have a genuine clean room, quality control lab, and testing equipment. Many medical device \u2018factories\u2019 are actually assembly operations buying components elsewhere. Shenzhen and Suzhou are the best cities for factory visit efficiency \u2014 you can visit 3\u20134 manufacturers in a single day in either city." },
    ],
  },
  {
    category: "Regulatory compliance and quality",
    faqs: [
      { q: "What regulatory approvals do I need to import medical devices?", a: "It depends on your destination market. US: FDA registration and, for Class II+ devices, 510(k) clearance. EU: CE marking under MDR, with a Declaration of Conformity and technical file. UK: UKCA marking (transition period from CE). Australia: TGA registration. The factory\u2019s existing approvals for other markets do not automatically cover yours. Budget US$5,000\u201320,000 and 3\u201312 months for new market registrations depending on device class." },
      { q: "What are the biggest quality risks when sourcing medical devices from China?", a: "Three risks dominate: (1) Component substitution \u2014 factories swapping specified components for cheaper alternatives without disclosure. (2) Inconsistent quality between samples and production runs \u2014 the golden sample problem. (3) Counterfeit or expired raw materials, particularly for disposable supplies. Mitigate with pre-shipment inspection by an independent third party, retain samples from every production batch, and include material traceability requirements in your purchase contract." },
      { q: "Do I need in-country testing for Chinese medical devices?", a: "For NMPA registration (selling within China): yes, testing must be conducted at NMPA-designated labs, typically costing US$5,000\u201320,000 per device family with a 2\u20134 week timeline. For export: your destination regulator\u2019s testing requirements apply. CE marking requires testing per harmonised standards. FDA may require testing at an accredited lab. Some Chinese factories have in-house labs accredited for certain tests \u2014 verify accreditation status independently." },
      { q: "How should I handle product liability for imported medical devices?", a: "You are legally the \u2018importer of record\u2019 and bear responsibility for any product defects in your market. Three essential steps: (1) Secure product liability insurance before importing \u2014 premiums vary by device class but typically run 1\u20133% of revenue. (2) Include indemnification clauses in your supplier contract. (3) Maintain complete traceability documentation for every batch. For Class II+ devices, consider engaging a local regulatory consultant before your first shipment." },
    ],
  },
  {
    category: "Pricing, payment, and logistics",
    faqs: [
      { q: "How is medical device pricing structured?", a: "Typical FOB breakdown for medical equipment: components 40\u201360% (sensors, chips, and displays drive the biggest variance), assembly and testing 15\u201325% (medical devices require more QC than consumer electronics), housing and packaging 10\u201315%, regulatory compliance costs 5\u201310%, factory margin 10\u201320%. Medical device margins are higher than consumer electronics because of certification overhead and smaller production volumes." },
      { q: "What payment terms are standard for medical device orders?", a: "Standard: 30% T/T deposit before production, 70% balance before shipment against third-party inspection report. First orders: 50/50 is common. For orders under US$10,000, some factories require 100% prepayment. For ongoing relationships, 30/70 or even net-30 terms become possible. WorldFirst\u2019s WorldTrade escrow holds your deposit until the supplier confirms shipment with tracking, removing the single biggest risk in cross-border medical device procurement." },
      { q: "What are MOQs like for medical devices?", a: "Highly variable by product type. Disposable medical supplies (gloves, syringes, masks): 10,000\u201350,000 units. Diagnostic devices (blood pressure monitors, pulse oximeters): 500\u20132,000 units. Complex equipment (patient monitors, dental chairs): 10\u201350 units. Rehabilitation equipment (wheelchairs, walkers): 100\u2013500 units. OEM/private label orders typically require higher MOQs than standard catalogue products. Negotiation room exists \u2014 offering 10\u201320% higher unit pricing can reduce MOQs significantly." },
      { q: "Are there special shipping requirements for medical devices?", a: "Yes. Medical devices often require temperature-controlled containers (for certain reagents and biologics), special packaging to prevent contamination, and documentation including Certificates of Free Sale, export health certificates, and fumigation certificates. Lithium battery-powered devices (defibrillators, portable monitors) are classified as dangerous goods for air freight. Plan 2\u20134 weeks extra for documentation compared to non-medical products. Always use a freight forwarder experienced with medical cargo." },
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
            Health &amp; medical sourcing <span className="accent-word">FAQ</span>
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
