"use client";

import { useState } from "react";
import basePath from "@/lib/basePath";

export default function OnlineDiscoveryLayer() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="space-y-0 px-2 md:px-4">
      {/* ── How to Find DG Suppliers on 1688 + YouTube ── */}
      <div className="py-6">
        <h4 className="text-xl md:text-2xl font-semibold text-wf-text mb-4">How to find Dongguan suppliers on 1688</h4>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Steps */}
          <div className="space-y-4">
            {[
              { step: "1", title: "Search in Chinese", desc: "Use 东莞工厂直销 (Dongguan factory direct) or category-specific terms like 东莞塑胶模具 (Dongguan plastic moulds) or 大朗毛衣 (Dalang sweaters)." },
              { step: "2", title: "Use the Dongguan Industrial Belt", desc: "1688 has a dedicated 东莞产业带 section. Or filter by supplier location: Dongguan (东莞) or specific towns like 厚街 (Houjie), 虎门 (Humen)." },
              { step: "3", title: "Check factory badges", desc: "Look for 实力商家 (verified merchant) and 源头工厂 (source factory) tags. Dongguan listings are overwhelmingly factory-direct." },
              { step: "4", title: "Verify before paying", desc: "Cross-check the business registration, then pay through 1688 World Pay for protection." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-wf-red/10 border border-wf-red/20 flex items-center justify-center">
                  <span className="text-wf-red font-semibold text-xs">{s.step}</span>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-wf-text">{s.title}</h5>
                  <p className="text-xs text-wf-text-muted mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}

            {/* Chinese search terms reference */}
            <div className="mt-4 p-4 bg-wf-bg-light rounded-xl border border-wf-border">
              <h5 className="text-sm font-medium text-wf-text mb-2">Dongguan search terms for 1688</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { cn: "东莞电子配件", en: "Electronics parts" },
                  { cn: "东莞注塑加工", en: "Injection moulding" },
                  { cn: "东莞PCBA加工", en: "PCB assembly" },
                  { cn: "东莞鞋厂", en: "Shoe factory" },
                  { cn: "东莞家具厂", en: "Furniture factory" },
                  { cn: "大朗毛织加工", en: "Dalang knitwear OEM" },
                  { cn: "虎门女装批发", en: "Humen women’s wear" },
                  { cn: "东莞玩具厂", en: "Toy factory" },
                  { cn: "东莞印刷包装", en: "Printing & packaging" },
                  { cn: "东莞五金冲压", en: "Hardware stamping" },
                ].map((term) => (
                  <div key={term.cn} className="flex items-center gap-1.5">
                    <span className="text-wf-text font-medium">{term.cn}</span>
                    <span className="text-wf-text-muted">{term.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: YouTube video */}
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video w-full md:max-w-sm md:ml-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4FrzaW_WfWY"
              title="Sourcing from 1688: The Ultimate Guide - WorldFirst"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* ── How to Pay 1688 Suppliers ── */}
      {!showPayment ? (
        <div className="text-center md:text-left py-6 border-t border-wf-border/50">
          <button
            type="button"
            onClick={() => setShowPayment(true)}
            className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-[#FF6A00] text-white text-sm font-medium hover:bg-[#E55E00] cursor-pointer transition-colors"
          >
            How to Pay 1688 Suppliers
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
        </div>
      ) : (
        <div className="py-8 border-t border-wf-border/50">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
            {/* LEFT: Payment-focused content */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <h4 className="text-xl md:text-2xl font-semibold text-wf-text mb-3">
                Pay 1688 Suppliers with WorldFirst
              </h4>
              <p className="text-wf-text-secondary text-sm mb-5 leading-relaxed">
                1688 only accepts CNY from Chinese bank accounts. With{' '}
                <span className="text-wf-text font-medium">1688 World Pay</span>,
                you pay directly from your WorldFirst account at checkout &mdash;
                no intermediary, no Chinese bank account needed.
              </p>

              <div className="space-y-3 mb-6 text-left">
                {[
                  { label: "Pay at checkout", desc: "Select WorldFirst as payment method on 1688. Your order is confirmed instantly." },
                  { label: "Supplier gets paid in CNY", desc: "Your supplier sees CNY in their account. No conversion confusion, no delays." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <div>
                      <span className="text-sm font-medium text-wf-text">{item.label}</span>
                      <span className="text-sm text-wf-text-secondary"> &mdash; {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:text-left text-center">
                <a
                  href="https://www.worldfirst.com/global/product/pay/1688-world-pay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill inline-flex items-center gap-2 px-7 py-3 bg-[#FF6A00] text-white text-sm font-medium hover:bg-[#E55E00] transition-colors"
                >
                  Set up 1688 World Pay
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* RIGHT: 1688 screenshot with WorldFirst overlay */}
            <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center">
              <div className="relative w-[20rem] md:w-[24rem] lg:w-[26rem] h-auto">
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="bg-[#FF6A00] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    1688.com
                  </div>
                </div>
                <img
                  src={`${basePath}/images/1688.webp`}
                  alt="1688 marketplace — pay with WorldFirst"
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-wf-border"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 z-10 w-[70%]">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-wf-red flex items-center justify-center">
                          <span className="text-white text-[8px] font-bold">WF</span>
                        </div>
                        <span className="text-xs font-semibold text-gray-800">WorldFirst</span>
                      </div>
                      <span className="text-[10px] text-green-600 font-medium">&#10003; Verified</span>
                    </div>
                    <button className="w-full bg-wf-red text-white text-xs font-semibold py-2 rounded-lg">
                      Pay with 1688 World Pay
                    </button>
                    <p className="text-[9px] text-gray-400 text-center mt-1.5">Official payment partner of 1688</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
