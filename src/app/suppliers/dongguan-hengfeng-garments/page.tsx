"use client";

import { useEffect, useState } from "react";
import basePath from "@/lib/basePath";

export default function SupplierProfilePage() {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const profileUrl = typeof window !== "undefined" ? window.location.href : "";

  function copyLink() {
    navigator.clipboard.writeText(profileUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function shareWhatsApp() {
    window.open("https://wa.me/?text=" + encodeURIComponent("Check out this verified supplier: " + profileUrl), "_blank");
  }

  function shareEmail() {
    window.location.href = "mailto:?subject=" + encodeURIComponent("Verified Supplier Profile") + "&body=" + encodeURIComponent("Take a look at this WorldFirst-verified supplier:\n\n" + profileUrl);
  }

  function nativeShare() {
    if (navigator.share) {
      navigator.share({ title: "Dongguan Hengfeng Garments — WorldFirst Verified", url: profileUrl }).catch(() => {});
    }
  }

  return (
    <div className="min-h-screen bg-[#F0F0F0] flex flex-col items-center py-5 px-4" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>

      {/* Back to Navigator link */}
      <div className="w-full max-w-[420px] mb-3">
        <a href={`${basePath}/`} className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          China Sourcing Navigator
        </a>
      </div>

      {/* Profile card */}
      <div className="w-full max-w-[420px] bg-white rounded-3xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_30px_rgba(0,0,0,0.07)] relative">

        {/* Share button */}
        <button
          onClick={() => setShareOpen(true)}
          className="absolute top-4 right-4 z-10 w-[38px] h-[38px] rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <circle cx="18" cy="5" r="2.5" stroke="#1A1A1A" strokeWidth="1.8"/>
            <circle cx="6" cy="12" r="2.5" stroke="#1A1A1A" strokeWidth="1.8"/>
            <circle cx="18" cy="19" r="2.5" stroke="#1A1A1A" strokeWidth="1.8"/>
            <path d="M8.3 10.8L15.7 6.2M8.3 13.2L15.7 17.8" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {/* ====== SUPPLIER IDENTITY ====== */}
        <div className="pt-8 pb-5 px-6 text-center">
          <div className="w-[72px] h-[72px] rounded-full bg-[#1A1A1A] flex items-center justify-center mx-auto mb-3.5 text-white text-[26px] font-bold tracking-tight">
            HF
          </div>
          <h1 className="text-[21px] font-bold leading-tight mb-1">Dongguan Hengfeng Garments Co., Ltd</h1>
          <p className="text-[13px] text-gray-400 mb-2">东莞恒丰制衣有限公司</p>
          <a
            href="https://maps.google.com/?q=No.+18+Fumin+Industrial+Road,+Humen+Town,+Dongguan,+Guangdong+523900,+China"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-gray-300 leading-relaxed hover:text-gray-500 transition-colors"
          >
            No. 18 Fumin Industrial Road, Humen Town, Dongguan, Guangdong 523900, China
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-2.5 px-6 pb-4">
          {[
            { href: "#", svg: <svg viewBox="0 0 24 24" fill="#1A1A1A"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
            { href: "#", svg: <svg viewBox="0 0 24 24" fill="#1A1A1A"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
          ].map((s, i) => (
            <a key={i} href={s.href} className="w-[34px] h-[34px] rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <span className="w-[15px] h-[15px]">{s.svg}</span>
            </a>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1.5 px-6 pb-3">
          {["Hoodies & Sweats", "Streetwear", "Activewear", "T-Shirts", "Cut & Sew"].map((tag) => (
            <span key={tag} className="bg-gray-100 rounded-md px-2.5 py-1 text-[12px] text-gray-500">{tag}</span>
          ))}
        </div>

        {/* Export markets */}
        <div className="flex items-center justify-center gap-1.5 px-6 pb-5 flex-wrap">
          <span className="text-[11px] text-gray-300 font-medium">Exports to</span>
          {["USA", "UK", "EU", "Australia"].map((m, i) => (
            <span key={m} className="flex items-center gap-1 text-[11px] text-gray-400">
              {i > 0 && <span className="w-[3px] h-[3px] rounded-full bg-gray-200" />}
              {m}
            </span>
          ))}
        </div>

        {/* ====== CONTACT LINKS ====== */}
        <div className="px-6 pb-2 pt-3 border-t border-gray-100">
          <p className="text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-2">Contact directly</p>
        </div>
        <div className="flex flex-col gap-1.5 px-4 pb-4">
          {[
            { icon: "🌐", bg: "bg-[#1A1A1A]", label: "Website", detail: "hongyuapparel.com", href: "https://www.hongyuapparel.com/" },
            { icon: "📱", bg: "bg-[#25D366]", label: "WhatsApp", detail: "+86 188 2670 3155", href: "https://wa.me/8618826703155" },
            { icon: "💬", bg: "bg-[#07C160]", label: "WeChat", detail: "hengfeng_export", href: "#" },
            { icon: "✉️", bg: "bg-gray-500", label: "Email", detail: "export@hengfeng-garments.com", href: "mailto:export@hengfeng-garments.com" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-[14px] font-medium text-gray-800 hover:bg-gray-100 hover:-translate-y-px hover:shadow-sm transition-all relative">
              <div className={`w-[34px] h-[34px] min-w-[34px] rounded-lg ${link.bg} flex items-center justify-center text-white text-[14px]`}>
                {link.icon}
              </div>
              <div>
                {link.label}
                <div className="text-[11px] text-gray-400 font-normal mt-0.5">{link.detail}</div>
              </div>
              <svg className="absolute right-3.5 text-gray-300" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          ))}
        </div>

        {/* More links */}
        <div className="px-6 pb-2 pt-1 border-t border-gray-100">
          <p className="text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-2 pt-3">More</p>
        </div>
        <div className="flex flex-col gap-1.5 px-4 pb-4">
          {[
            { icon: "A", bg: "bg-[#FF6A00]", label: "Alibaba.com", detail: "hengfeng-garments.en.alibaba.com", href: "#" },
            { icon: "M", bg: "bg-[#E63F30]", label: "Made-in-China.com", detail: "hengfeng-garments.made-in-china.com", href: "#" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-[14px] font-medium text-gray-800 hover:bg-gray-100 hover:-translate-y-px hover:shadow-sm transition-all relative">
              <div className={`w-[34px] h-[34px] min-w-[34px] rounded-lg ${link.bg} flex items-center justify-center text-white text-[14px] font-bold`}>
                {link.icon}
              </div>
              <div>
                {link.label}
                <div className="text-[11px] text-gray-400 font-normal mt-0.5">{link.detail}</div>
              </div>
              <svg className="absolute right-3.5 text-gray-300" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          ))}
        </div>

        {/* ====== VERIFICATION TRUST LAYER ====== */}
        <div className="border-t border-gray-100 px-6 py-5">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 min-w-[36px] rounded-[10px] bg-green-50 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5L11 2.8L13.3 2.5L14.3 4.5L16.3 5.5L15.8 7.8L17 9.5L15.5 11.3L15.5 13.6L13.2 14.1L11.8 16L9 15L6.2 16L4.8 14.1L2.5 13.6L2.5 11.3L1 9.5L2.2 7.8L1.7 5.5L3.7 4.5L4.7 2.5L7 2.8L9 1.5Z" fill="#16A34A"/>
                <path d="M6 9.5L8 11.5L12 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-semibold">WorldFirst Verified</div>
              <div className="text-[11px] text-gray-400">Verified business account on WorldFirst</div>
            </div>
          </div>

          {/* Top supplier badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-50 text-[11px] font-semibold text-orange-800">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 0.5L6.3 3.2H9.3L7 5.2L7.8 8.2L5 6.5L2.2 8.2L3 5.2L0.7 3.2H3.7L5 0.5Z" fill="#EA580C"/></svg>
              Top Supplier in Dongguan
            </span>
          </div>

          {/* Data pills */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-gray-50 rounded-[10px] p-3">
              <div className="text-[10px] text-gray-300 uppercase tracking-wide mb-0.5">In business since</div>
              <div className="text-[14px] font-semibold text-gray-800">2009</div>
            </div>
            <div className="bg-gray-50 rounded-[10px] p-3">
              <div className="text-[10px] text-gray-300 uppercase tracking-wide mb-0.5">Status</div>
              <div className="text-[14px] font-semibold text-green-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Active
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-1.5 mb-4">
            {["Business licence verified", "Export licence verified"].map((cred) => (
              <div key={cred} className="flex items-center gap-2 text-[13px] text-gray-600">
                <div className="w-5 h-5 min-w-[20px] rounded-full bg-green-50 flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5L4.5 8L9 3.5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                {cred}
              </div>
            ))}
          </div>

          {/* Payment CTA */}
          <a href="https://www.worldfirst.com/global/register/" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 border-[1.5px] border-[#FF0051] rounded-xl text-[#FF0051] text-[15px] font-semibold hover:bg-[#FF0051] hover:text-white transition-colors">
            Send payment via WorldFirst
          </a>
          <p className="text-center text-[11px] text-gray-400 mt-2">Instant and free between WorldFirst accounts</p>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-100 px-6 py-4">
          <p className="text-[11px] text-gray-300 leading-relaxed">WorldFirst verifies business credentials and payment activity. Product quality and fulfilment are between you and the supplier.</p>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-2 px-6 pb-6">
          <div className="flex items-center gap-3.5">
            <img src={`${basePath}/images/wf-logo-nav.webp`} alt="WorldFirst" className="h-[13px]" />
            <div className="w-px h-3.5 bg-gray-200" />
            <img src={`${basePath}/images/ant-international-logo.png`} alt="Ant International" className="h-5" />
          </div>
          <p className="text-[11px] text-gray-300">The smarter way to pay China</p>
        </div>
      </div>

      {/* Share overlay */}
      {shareOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={() => setShareOpen(false)}>
          <div className="bg-white rounded-t-[20px] p-7 pb-8 max-w-[420px] w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-9 h-1 rounded-full bg-gray-200 mx-auto mb-5" />
            <h3 className="text-[16px] font-bold mb-5">Share this profile</h3>

            {/* URL row */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-[10px] px-3.5 py-2.5 mb-4">
              <p className="flex-1 text-[12px] text-gray-500 truncate text-left">{profileUrl}</p>
              <button onClick={copyLink} className="bg-[#1A1A1A] text-white text-[12px] font-semibold px-3.5 py-2 rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Share buttons */}
            <div className="flex gap-2.5">
              <button onClick={shareWhatsApp} className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-[14px] font-medium hover:bg-gray-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 8C13.5 11 11 13.5 8 13.5C6.94 13.5 5.95 13.21 5.1 12.71L3 13.5L3.8 11.4C3.29 10.55 3 9.56 3 8.5C3 5.19 5.46 2.5 8 2.5C11 2.5 13.5 5 13.5 8Z" stroke="#25D366" strokeWidth="1.3"/></svg>
                WhatsApp
              </button>
              <button onClick={shareEmail} className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-[14px] font-medium hover:bg-gray-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="4" width="11" height="8" rx="1.5" stroke="#888" strokeWidth="1.2"/><path d="M2.5 5.5L8 9.5L13.5 5.5" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/></svg>
                Email
              </button>
              <button onClick={nativeShare} className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-[14px] font-medium hover:bg-gray-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2V10M8 2L5 5M8 2L11 5M3 11V13H13V11" stroke="#1A1A1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
