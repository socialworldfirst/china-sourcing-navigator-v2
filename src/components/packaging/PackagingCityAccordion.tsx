"use client";

import { useState } from "react";

const cityDetails = [
  {
    name: "Yiwu",
    rating: "5 stars",
    strengths: "Gift boxes, paper bags, plastic bags, ribbons, tissue paper, small-run packaging",
    detail: "Yiwu International Trade City District 2, Floor 1, Section F houses thousands of packaging suppliers under one roof. You can walk in, compare samples from dozens of gift box and paper bag vendors, and place orders starting from 500 pieces. The main suppliers come from Wenzhou and Guangzhou, giving you access to two of China\u2019s strongest printing clusters without leaving Zhejiang. Yiwu is unbeatable for standard packaging at volume \u2014 if you need 10,000 identical gift bags with foil stamping, this is the cheapest place on earth to get them.",
  },
  {
    name: "Guangzhou",
    rating: "4 stars",
    strengths: "Custom printed boxes, rigid boxes, folding cartons, labels, packaging design services",
    detail: "Guangzhou is the custom packaging capital of southern China. Factories across Panyu and Baiyun districts specialise in offset-printed folding cartons, magnetic closure boxes, and rigid gift boxes with spot UV, embossing, and foil stamping. The city\u2019s proximity to Canton Fair makes it easy to combine supplier visits with trade fair scouting. MOQs tend to start at 1,000 pieces for custom work. Guangzhou is also home to dedicated label printers serving the cosmetics and food industries.",
  },
  {
    name: "Dongguan",
    rating: "4 stars",
    strengths: "Precision printing, high-end packaging, colour-matched boxes, die-cutting tooling",
    detail: "Dongguan has been a printing and packaging powerhouse for decades, originally serving Hong Kong\u2019s publishing industry before pivoting to product packaging. The city\u2019s factories are strong on technical printing \u2014 Pantone colour matching, multi-layer lamination, window die-cutting, and complex structural designs. If your packaging requires tight tolerances or luxury finishes (think Apple-grade unboxing), Dongguan factories deliver. Tooling and die-making capacity is also concentrated here.",
  },
  {
    name: "Shanghai",
    rating: "3 stars",
    strengths: "Premium and luxury packaging, brand-agency packaging design, trade show access",
    detail: "Shanghai is where packaging meets brand strategy. The city hosts PACKCON and SinoCorrugated \u2014 Asia\u2019s largest packaging exhibitions \u2014 and is home to design agencies that bridge Western brand expectations with Chinese manufacturing capability. Factories in the greater Shanghai area (Kunshan, Suzhou, Jiading) produce luxury packaging for cosmetics, spirits, and premium consumer goods. Costs run 15\u201325% higher than Guangdong, but the design and project management quality is often worth it for brand-critical packaging.",
  },
  {
    name: "Shenzhen",
    rating: "3 stars",
    strengths: "Electronics packaging, insert trays, blister packaging, eco-friendly options",
    detail: "Shenzhen\u2019s packaging factories evolved alongside its electronics industry. The city excels at custom inserts, moulded pulp trays, blister packs, and the kind of precision retail packaging that consumer electronics brands demand. SinoFoldingCarton and SinoCorrugated South both hold their annual exhibitions here. If you\u2019re sourcing packaging for tech products, Shenzhen suppliers already understand the fitment and protection requirements.",
  },
  {
    name: "Ningbo",
    rating: "3 stars",
    strengths: "Export packaging, corrugated boxes, shipping cartons, port proximity",
    detail: "Ningbo is one of the world\u2019s busiest container ports, and its packaging industry reflects that \u2014 heavy on corrugated shipping cartons, master cartons, and export-grade packaging. Factories here serve the dense SME manufacturing clusters across Zhejiang province. For transit packaging (as opposed to retail packaging), Ningbo is hard to beat on logistics efficiency.",
  },
];

export default function PackagingCityAccordion() {
  const [openCity, setOpenCity] = useState<string | null>(null);

  return (
    <section className="pb-14 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-wf-text mb-2">
            Learn more about each <span className="accent-word whitespace-nowrap">sourcing city</span>
          </h3>
          <p className="text-wf-text-secondary text-sm">
            Key packaging hubs with strengths and what to expect on the ground
          </p>
        </div>

        <div className="space-y-2">
          {cityDetails.map((city) => (
            <div key={city.name} className="bg-white border border-wf-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenCity(openCity === city.name ? null : city.name)}
                className="group w-full flex items-center justify-between px-5 py-4 text-left hover:bg-wf-bg-light/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[15px] font-medium text-wf-text group-hover:text-wf-red transition-colors">
                    {city.name}
                  </span>
                  <span className="text-[11px] text-wf-text-muted bg-wf-bg-light px-2 py-0.5 rounded-full">
                    {city.rating}
                  </span>
                </div>
                <svg
                  className={`flex-shrink-0 text-wf-text-muted group-hover:text-wf-red transition-all duration-200 ${
                    openCity === city.name ? "rotate-180" : ""
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

              {openCity === city.name && (
                <div className="px-5 pb-5 border-t border-wf-border/50">
                  <div className="pt-3">
                    <p className="text-xs text-wf-red font-medium mb-2">{city.strengths}</p>
                    <p className="text-sm text-wf-text-secondary leading-relaxed">{city.detail}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
