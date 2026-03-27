"use client";

import basePath from "@/lib/basePath";
import TimelineSection from "./TimelineSection";

export default function AfterTheFair() {
  return (
    <TimelineSection
      id="after-fair"
      badge="After the Fair"
      title="Close the Deal"
      subtitle="You met suppliers, collected cards, took photos. Now the real work starts. The next 48 hours decide whether this trip was worth the investment."
    >
      <div className="space-y-12">
        {/* 48-hour rule */}
        <div className="bg-white rounded-xl border-2 border-wf-red/20 p-6 md:p-8">
          <div className="flex items-start gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-wf-red/10 text-wf-red flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-wf-text">
                The 48-hour rule
              </h3>
              <p className="text-sm text-wf-text-secondary mt-1">
                Suppliers meet thousands of buyers at the fair. Wait a week to follow up and they will not remember your conversation.
              </p>
            </div>
          </div>

          <div className="space-y-4 ml-[52px]">
            <div className="flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-wf-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              <p className="text-sm text-wf-text">
                <strong>Send a follow-up within 48 hours</strong> via WeChat or email. Confirm the products you discussed, the pricing, the MOQ, and any samples you requested.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-wf-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-sm text-wf-text">
                <strong>Attach the photo of their business card</strong> so they can identify you quickly among the hundreds of buyers they met.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-wf-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              <p className="text-sm text-wf-text">
                <strong>Get everything in writing.</strong> Suppliers have been known to deny previously agreed prices without documentation. Confirm price, MOQ, lead time, and payment terms in writing before any money moves.
              </p>
            </div>
          </div>
        </div>

        {/* Verify before you pay */}
        <div>
          <h3 className="text-xl font-semibold text-wf-text mb-2">
            Verify before you pay
          </h3>
          <p className="text-sm text-wf-text-secondary leading-relaxed mb-6">
            Standard payment terms are 30% deposit with 70% before shipping — but only after samples are approved and contracts are signed. Never wire money to an unverified supplier. Ghost suppliers target first-time buyers specifically: temporary registrations, professional-looking booths, then silence after the deposit clears. This is where most first-timers lose money.
          </p>

          {/* WorldFirst verification — natural integration */}
          <div className="bg-wf-purple-glow rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-4">
                  How WorldFirst helps
                </span>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Verify your supplier before wiring money
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Before your payment moves, WorldFirst cross-checks your supplier&apos;s bank account against their registered business name. We verify whether they are a factory or trading company, and WorldTrade holds your payment in escrow until shipment is confirmed.
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Bank account cross-checked against business registration",
                    "Factory vs trading company status verified",
                    "Funds held in escrow until shipment confirmed",
                    "Free with every World Account",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                      <svg className="mt-0.5 flex-shrink-0 text-wf-red" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.worldfirst.com/uk/worldtrade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
                >
                  Learn about WorldTrade
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>

              {/* Verification cards */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm font-semibold">Supplier Verified</span>
                  </div>
                  <div className="space-y-2 text-xs text-white/60">
                    <div className="flex justify-between">
                      <span>Business name match</span>
                      <span className="text-green-400">Confirmed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bank account match</span>
                      <span className="text-green-400">Confirmed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type</span>
                      <span className="text-white/80">Factory (est. 2014)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm font-semibold">Payment in Escrow</span>
                  </div>
                  <div className="space-y-2 text-xs text-white/60">
                    <div className="flex justify-between">
                      <span>Amount</span>
                      <span className="text-white/80">¥145,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status</span>
                      <span className="text-blue-400">Held until shipment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Protection</span>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pay your supplier */}
        <div>
          <h3 className="text-xl font-semibold text-wf-text mb-2">
            Pay your supplier
          </h3>
          <p className="text-sm text-wf-text-secondary leading-relaxed mb-6">
            Once your supplier is verified and terms are agreed, you need to move money to China — fast, cheap, and safe.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl border border-wf-border p-5 text-center">
              <div className="text-3xl font-bold text-wf-red mb-1">80%</div>
              <div className="text-xs font-medium text-wf-text mb-2">same-day arrival</div>
              <p className="text-xs text-wf-text-muted">CNY payments via Chinese domestic banking rails.</p>
            </div>
            <div className="bg-white rounded-xl border border-wf-border p-5 text-center">
              <div className="text-3xl font-bold text-wf-red mb-1">2–4%</div>
              <div className="text-xs font-medium text-wf-text mb-2">saved on bank FX margins</div>
              <p className="text-xs text-wf-text-muted">Competitive mid-market rates. Lock rates with forwards.</p>
            </div>
            <div className="bg-white rounded-xl border border-wf-border p-5 text-center">
              <div className="text-3xl font-bold text-wf-red mb-1">150k+</div>
              <div className="text-xs font-medium text-wf-text mb-2">verified suppliers in Asia</div>
              <p className="text-xs text-wf-text-muted">Payments between WorldFirst accounts are instant and free.</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.worldfirst.com/uk/register/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 bg-wf-red text-white font-medium hover:bg-wf-red-hover"
            >
              Open your WorldFirst account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="text-xs text-wf-text-muted mt-2">
              It&apos;s free
            </p>
          </div>
        </div>
      </div>
    </TimelineSection>
  );
}
