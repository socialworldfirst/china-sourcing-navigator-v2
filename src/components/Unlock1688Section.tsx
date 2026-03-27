import basePath from "@/lib/basePath";

export default function Unlock1688Section() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* LEFT: Content + CTA */}
      <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold mb-3">
          <span style={{ color: '#FF6A00' }}>Unlock 1688</span>{' '}
          <span className="text-wf-text">with WorldFirst</span>
        </h3>
        <p className="text-wf-text-secondary text-sm mb-6 leading-relaxed">
          1688 is Alibaba&apos;s domestic B2B marketplace &mdash; where Chinese factories
          trade with each other at 20&ndash;40% less than Alibaba.com. The catch? It only
          accepts CNY from Chinese bank accounts.{' '}
          <span className="text-wf-text font-medium">1688 World Pay</span> lets you
          pay any 1688 supplier directly from your WorldFirst account.
        </p>

        {/* Key benefits — hidden on mobile */}
        <ul className="hidden md:inline-block space-y-2 mb-6 text-left">
          {[
            "20–40% cheaper than Alibaba.com",
            "0.4% payment fee (vs 3% card surcharge)",
            "No Chinese bank account needed",
            "Browse 1688, pay at checkout via WorldFirst",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-wf-text-secondary">
              <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <div className="lg:text-left text-center">
          <a
            href="https://www.worldfirst.com/global/product/pay/1688-world-pay/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6A00] text-white text-sm font-medium hover:bg-[#E55E00] transition-colors"
          >
            Learn about 1688 World Pay
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

      {/* RIGHT: 1688 screenshot — bigger, with WorldFirst pay overlay */}
      <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center mt-4 lg:mt-0">
        <div className="relative w-[22rem] md:w-[26rem] lg:w-[30rem] h-auto">
          {/* 1688.com badge — overflows top-left */}
          <div className="absolute -top-3 -left-3 z-10">
            <div className="bg-[#FF6A00] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              1688.com
            </div>
          </div>
          <img
            src={`${basePath}/images/1688.webp`}
            alt="1688 marketplace — Alibaba's domestic B2B platform"
            className="w-full h-auto object-contain rounded-xl shadow-lg border border-wf-border"
            loading="lazy"
          />
          {/* WorldFirst Pay overlay — bottom-right, overflows the image */}
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
              <button className="w-full bg-wf-red text-white text-xs font-semibold py-2 rounded-lg hover:bg-wf-red-hover transition-colors">
                Pay with 1688 World Pay
              </button>
              <p className="text-[9px] text-gray-400 text-center mt-1.5">Official payment partner of 1688</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
