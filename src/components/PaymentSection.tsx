import basePath from "@/lib/basePath";

export default function PaymentSection() {
  return (
    <>
      {/* ============================================================
          SECTION 1 — Benefits (WorldFirst-to-WorldFirst features)
          Dark purple, 3 cards + qualifier + CTA
          ============================================================ */}
      <section id="payment" className="py-16 md:py-24 bg-wf-purple-glow relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-wf-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Instant &amp; Free Payments to{' '}
              <span className="text-wf-red whitespace-nowrap">Verified Suppliers</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto">
              When both you and your supplier hold a WorldFirst account, payments are faster, cheaper, and safer.
            </p>
          </div>

          {/* 3 benefit cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {/* Instant Arrival */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-wf-red/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Instant Arrival</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Between WorldFirst accounts, payments arrive instantly. No middleman banks, no waiting.
              </p>
            </div>

            {/* Zero Transfer Fees */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Zero Transfer Fees</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                No transfer fees between WorldFirst accounts. Keep more of your margin on every order.
              </p>
            </div>

            {/* Verified Suppliers */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Verified Suppliers</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We verify your supplier holds a valid business license and export license before processing your payment.
              </p>
            </div>
          </div>

          {/* WorldFirst-to-WorldFirst qualifier */}
          <p className="text-white/30 text-xs text-center mb-8 max-w-lg mx-auto">
            Instant arrival and zero transfer fees apply to payments between WorldFirst accounts. Standard international transfers are also supported.
          </p>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://www.worldfirst.com/global/register/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover"
            >
              Open a free WorldFirst account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <p className="text-white/40 text-sm mt-3">No monthly fees &middot; No minimum balance</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — Payment Network (Ant International infrastructure)
          ============================================================ */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#0F0A14' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Your Supplier Is Probably{' '}
              <span className="text-wf-red">Already Here</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
              WorldFirst is part of Ant International &mdash; one of the largest payment networks in Asia. Your money moves through local rails, not slow international wires.
            </p>
          </div>

          {/* Logos row — WorldFirst × Ant International */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-12">
            {/* WorldFirst logo */}
            <div className="flex flex-col items-center">
              <img
                src={`${basePath}/images/wf-logo-reversed.webp`}
                alt="WorldFirst"
                className="h-6 md:h-7 w-auto"
              />
            </div>
            {/* Connector */}
            <div className="text-white/20 text-2xl font-light">&times;</div>
            {/* Ant International logo */}
            <div className="flex flex-col items-center">
              <img
                src={`${basePath}/images/ant-international-logo.png`}
                alt="Ant International"
                className="h-7 md:h-9 w-auto"
              />
            </div>
          </div>

          {/* Network stats */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
              {[
                { stat: "1.5M+", label: "Businesses on WorldFirst" },
                { stat: "150k+", label: "Verified Chinese suppliers" },
                { stat: "200+", label: "Countries & regions served" },
                { stat: "20+", label: "Currencies supported" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold stat-number mb-1">{stat}</div>
                  <div className="text-white/50 text-xs">{label}</div>
                </div>
              ))}
            </div>

            <p className="text-white/50 text-sm text-center leading-relaxed max-w-xl mx-auto mb-6">
              With 150,000+ verified Chinese suppliers already connected, chances are yours is too. When they are, your payments arrive instantly with zero transfer fees.
            </p>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://www.worldfirst.com/global/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 px-6 py-2.5 bg-wf-red/20 border border-wf-red/40 text-wf-red text-sm font-medium hover:bg-wf-red/30 transition-colors"
              >
                Join the network
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — How It Works (steps + video)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-wf-purple-glow relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-wf-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* Steps */}
            <div className="space-y-7">
              {[
                {
                  step: "1",
                  title: "Add your supplier\u2019s details",
                  desc: "Enter their company name and Chinese bank account number. We verify it against their business registration before your money moves.",
                },
                {
                  step: "2",
                  title: "Lock in your rate",
                  desc: "See exactly what you\u2019ll pay in your currency. The rate you see is the rate you get \u2014 no hidden deductions.",
                },
                {
                  step: "3",
                  title: "Send and confirm",
                  desc: "Hit send. If they\u2019re on WorldFirst, they see it instantly. You get a confirmation \u2014 no more chasing on WeChat.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-wf-red/20 border border-wf-red/30 flex items-center justify-center">
                    <span className="text-wf-red font-semibold">{step}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">{title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* YouTube embed */}
            <div className="relative rounded-2xl overflow-hidden bg-black min-h-[280px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/r6SSaaOXOUY"
                title="How to pay Chinese suppliers with WorldFirst"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <a
              href="https://www.worldfirst.com/global/register/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover"
            >
              Open a free WorldFirst account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <p className="text-white/40 text-sm mt-3">No monthly fees &middot; No minimum balance</p>
          </div>
        </div>
      </section>
    </>
  );
}
