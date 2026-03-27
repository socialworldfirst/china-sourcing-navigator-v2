"use client";

import { useEffect, useState } from "react";
import basePath from "@/lib/basePath";

function getCountdown() {
  const cantonFair = new Date("2026-04-15T00:00:00+08:00");
  const now = new Date();
  const diff = cantonFair.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function CantonFairBanner() {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border border-wf-border rounded-2xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left: Content — phases, toolkit, CTA */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-wf-red canton-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              <span className="text-wf-red font-bold">Phase 1</span>
              <span className="text-wf-text-muted"> starts in {countdown.days} days</span>
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-wf-text mb-4">
            Going to <span className="accent-word">Canton Fair</span><span className="text-wf-red">?</span>
          </h3>

          {/* Phase breakdown */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <div className="space-y-1">
              {[
                { phase: "Phase 1", dates: "Apr 15 – 19", focus: "Electronics, Machinery, Lighting", active: true },
                { phase: "Phase 2", dates: "Apr 23 – 27", focus: "Consumer Goods, Home, Gifts", active: false },
                { phase: "Phase 3", dates: "May 1 – 5", focus: "Textiles, Apparel, Food", active: false },
              ].map((p) => (
                <div
                  key={p.phase}
                  className={`rounded-lg px-3 py-2.5 ${
                    p.active
                      ? 'bg-red-50/60 border border-red-200/50'
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between md:justify-start md:gap-3">
                    <span className={`font-semibold text-xs ${p.active ? 'text-wf-red' : 'text-wf-text-muted'}`}>{p.phase}</span>
                    <span className="text-xs text-wf-text-muted">{p.dates}</span>
                    <span className="text-xs text-wf-text-secondary hidden md:inline">{p.focus}</span>
                  </div>
                  <p className="text-xs text-wf-text-secondary mt-1 md:hidden">{p.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-wf-text-secondary text-sm mb-6 leading-relaxed">
            The world&apos;s largest trade fair, held biannually in Guangzhou since 1957. Over 25,000 exhibitors across three phases.
          </p>

          <a
            href={`${basePath}/canton-fair-2026`}
            className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover self-start"
          >
            Learn more about Canton Fair
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right: Canton Fair image with countdown overlay */}
        <div className="relative min-h-[320px] md:min-h-0 mx-2 md:mx-0 rounded-xl md:rounded-none overflow-hidden">
          <img
            src={`${basePath}/images/canton.webp`}
            alt="Canton Fair exhibition hall"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Countdown — centered in the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white text-sm uppercase tracking-wider font-semibold drop-shadow-lg text-center leading-relaxed mb-6">
              Countdown to<br />
              <span className="text-lg md:text-xl font-bold">Canton Fair 2026 Spring</span>
            </p>
            <div className="flex gap-3">
              {[
                { val: countdown.days, label: "Days" },
                { val: countdown.hours, label: "Hours" },
                { val: countdown.minutes, label: "Min" },
                { val: countdown.seconds, label: "Sec" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="bg-black/40 backdrop-blur-md border border-white/30 rounded-xl px-4 py-3 shadow-lg min-w-[64px]">
                    <span className="text-3xl font-bold text-white drop-shadow-md">{val}</span>
                  </div>
                  <span className="text-xs text-white font-medium mt-2 block drop-shadow-md">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
