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
    category: "Getting started in Chengdu",
    faqs: [
      { q: "What makes Chengdu a major tech hub in China?", a: "Chengdu is China's #2 software city after Beijing and the premier IT hub in Western China. Tianfu Software Park houses 600+ companies including IBM, SAP, Siemens, Wipro, Dell, Huawei, Alibaba, and Tencent. The Hi-Tech Zone has 3,315 approved high-tech enterprises, 132 Fortune 500 companies, and a talent pool of 700,000+. Labour costs run 30–40% below Beijing and Shanghai for equivalent skill levels." },
      { q: "Is Chengdu good for IT outsourcing?", a: "Yes — it's China's premier IT outsourcing destination outside Beijing. Software development, BPO, shared services centres, IC design, and digital entertainment are all well-established. IBM, SAP, Wipro, and dozens of domestic firms run operations from Tianfu Software Park. The cost advantage over Beijing and Shanghai (30–40% lower) combined with a deep engineering talent pool makes Chengdu the default choice for Western China IT services." },
      { q: "What products is Chengdu best known for?", a: "Chengdu is not a traditional manufacturing city — it's an R&D and services hub. Its strongest categories are IT outsourcing and software development (Tianfu Software Park), aerospace components (Chengdu Aircraft Corporation, Boeing/Airbus parts), biotech and pharmaceutical APIs (Kanghong, Shengnuo, Kelun-Biotech), and Sichuan food products (doubanjiang, peppercorns, tea). Electronics testing is also significant — 50% of the world's CPUs are tested here and 60% of iPads are manufactured here." },
      { q: "Can I source from Chengdu without visiting?", a: "For food products, yes — use 1688 with Chinese search terms like 四川花椒 or 郫县豆瓣酱. For IT outsourcing partnerships, remote engagement is standard — use LinkedIn, Clutch, and direct outreach. For biotech/pharma APIs, virtual meetings and certifications review are common before visiting. However, a visit builds trust and lets you verify operations firsthand, especially for larger contracts." },
      { q: "How does Chengdu compare to Chongqing for sourcing?", a: "They complement each other. Chengdu is the tech brain (IT, biotech, R&D), while Chongqing is the manufacturing muscle (motorcycles, auto, heavy industry, hotpot seasonings). Chongqing is 1 hour away by high-speed rail. Many importers visit both to cover Western China's full industrial spectrum." },
    ],
  },
  {
    category: "1688 & online sourcing",
    faqs: [
      { q: "What 1688 search terms work for Chengdu products?", a: "Food and seasonings: 四川花椒 (Sichuan peppercorn), 郫县豆瓣酱 (Pixian doubanjiang), 成都调味品 (Chengdu condiments), 四川茶叶 (Sichuan tea), 成都食品加工 (Chengdu food processing). General merchandise: 成都服装批发 (Chengdu clothing wholesale), 成都鞋子批发 (Chengdu shoes wholesale). Industrial: 成都工业设备 (Chengdu industrial equipment). Note: IT outsourcing and biotech sourcing are better handled through B2B platforms, not 1688." },
      { q: "How do I pay Chengdu suppliers on 1688?", a: "1688 payments are in Chinese Yuan (CNY). Use 1688 World Pay (WorldFirst's integrated payment at checkout), Alipay (requires Chinese bank account or international Alipay), or bank transfer in CNY via WorldFirst's World Account. For IT services contracts, payment terms are typically project-based milestones rather than 1688 transactions." },
      { q: "Is 1688 the right platform for Chengdu sourcing?", a: "For food products and general merchandise, yes. For IT outsourcing, biotech APIs, and aerospace components, no. Use LinkedIn, Clutch, and direct B2B outreach for services. For pharma ingredients, specialised platforms like Pharmacompass or direct manufacturer contact are more appropriate. 1688 is best for physical products with straightforward supply chains." },
    ],
  },
  {
    category: "Trade shows",
    faqs: [
      { q: "What trade shows are held in Chengdu in 2026?", a: "CDIIF — Chengdu International Industry Fair (March 11–13): industrial automation, robotics, machine vision, digital factory. CFDF — China Food & Drinks Fair (March 26–28): Asia's largest F&B exhibition with 6,500+ exhibitors, 320,000+ visitors. CAPAS — Automotive Parts (May 21–23): auto parts and aftermarket. CEF — China Electronics Fair (July 15–17): XR, IoT, robotics, mobile electronics." },
      { q: "What are the main exhibition venues in Chengdu?", a: "Western China International Expo City (中国西部国际博览城) in Tianfu New Area is the newest and largest venue. Century City New International Convention & Exhibition Center (世纪城新国际会展中心) is an established venue in the Hi-Tech Zone south. Both are accessible by metro." },
      { q: "Should I attend Canton Fair if I'm based in Chengdu?", a: "Yes, if your product categories overlap with Canton Fair's coverage. Chengdu Tianfu Airport has direct flights to Guangzhou Baiyun in approximately 2 hours. Phase 1 (Apr 15–19) covers electronics, hardware, and lighting. Phase 2 (Apr 23–27) covers consumer goods and gifts. Phase 3 (May 1–5) covers textiles and food. Many Western China importers attend Canton Fair as their main annual supplier discovery event." },
    ],
  },
  {
    category: "Biotech & pharma sourcing",
    faqs: [
      { q: "Can I source pharmaceutical ingredients from Chengdu?", a: "Yes. Shengnuo Biopharm specialises in large-scale peptide and amino acid drug production with US FDA certification. Kelun-Biotech has 30+ innovative drug projects in areas like solid tumours, autoimmune, and metabolic diseases. Kanghong Pharmaceutical leads in ophthalmic and CNS medicines. The Chengdu Hi-Tech Zone is designated as a national biotech industry base." },
      { q: "What biotech companies are based in Chengdu?", a: "Key players include: Kanghong Pharmaceutical (founded 1996, Shenzhen-listed, ~$6B market cap, ophthalmic/CNS medicines), Shengnuo Biopharm (FDA-certified peptide manufacturing, IPO 2021), Kelun-Biotech (30+ drug projects, 4 approved for marketing), and Takeda (announced China Innovation Center in Chengdu, January 2025). The cluster is growing rapidly with strong government support." },
    ],
  },
  {
    category: "Logistics & practical",
    faqs: [
      { q: "How do I get to Chengdu?", a: "Fly into Chengdu Tianfu International Airport (TFU) — opened 2021, major international hub with direct flights to London, Los Angeles, Sydney, Dubai, and more. Chengdu Shuangliu Airport (CTU) still handles some domestic and international routes — confirm which airport when booking. High-speed rail connects to Chongqing (1 hour), Xi'an (3 hours), Wuhan (5 hours), Shanghai (7 hours), and Beijing (7 hours)." },
      { q: "What is the best time to visit Chengdu for sourcing?", a: "Spring (March–May) or autumn (September–November) offer the best weather and align with major trade shows. Summer is warm but less extreme than Chongqing. Avoid January–February (Chinese New Year shutdown) and the first week of October (National Day holiday). March is particularly good — CDIIF and CFDF are both held then." },
      { q: "Where should I stay in Chengdu for sourcing?", a: "For Hi-Tech Zone / Tianfu Software Park meetings: stay in the southern Hi-Tech Zone near Century City metro station. For Hehuachi market: Jinniu district, near Northern Commercial City metro station. For general business: central Chengdu near Chunxi Road offers good access to both areas via metro. Chengdu's metro system has 12+ lines with extensive urban coverage." },
      { q: "What is the Chengdu-Chongqing economic circle?", a: "The Chengdu-Chongqing Twin-City Economic Circle is China's fourth major economic cluster (after the Yangtze Delta, Pearl River Delta, and Beijing-Tianjin-Hebei). Chengdu handles IT, biotech, and R&D; Chongqing handles manufacturing and heavy industry. Together they cover Western China's full industrial spectrum. The 1-hour HSR connection makes same-day visits to both cities routine." },
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
            Chengdu Sourcing <span className="accent-word">FAQ</span>
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
