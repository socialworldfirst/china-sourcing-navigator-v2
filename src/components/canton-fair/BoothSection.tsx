"use client";

import basePath from "@/lib/basePath";

export default function BoothSection() {
  return (
    <section id="booth" className="py-14 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-wf-purple-glow rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left: Text (40%) */}
            <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-wf-red canton-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Come say hi
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Find the{" "}
                <span className="text-wf-red">WorldFirst</span> Booth
              </h2>

              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Come talk to us face-to-face about your supplier payment needs.
                Our team can walk you through same-day CNY payments, supplier
                verification, and how to protect your money when working with
                new factories.
              </p>

              <div className="space-y-2 text-sm text-white/50 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                  </svg>
                  <span>
                    Location:{" "}
                    <span className="text-white font-medium">Coming soon</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>
                    Available{" "}
                    <span className="text-white font-medium">
                      all 3 phases
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Booth photo (60%) */}
            <div className="md:col-span-3">
              <img
                src={`${basePath}/images/wf-booth-canton.jpg`}
                alt="WorldFirst team at their Canton Fair booth"
                className="w-full h-full object-cover min-h-[280px] md:min-h-[400px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
