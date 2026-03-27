"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import WhitePaperCTA from "@/components/WhitePaperCTA";
import CantonFairBanner from "@/components/CantonFairBanner";
import Footer from "@/components/Footer";
import CityCarousel from "@/components/CityCarousel";
import Unlock1688Section from "@/components/Unlock1688Section";
import PaymentSection from "@/components/PaymentSection";
import WhyWorldFirstSection from "@/components/WhyWorldFirstSection";
import basePath from "@/lib/basePath";
import { cities, categories } from "@/lib/data";

export default function Home() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const displayCategories = showAllCategories ? categories : categories.slice(0, 12);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ================================================
          HERO — Dark purple background with China map
          ================================================ */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: '#1C1422' }}>
        {/* China map — right side on desktop, centered dimmed on mobile */}
        <div
          className="absolute inset-0 lg:inset-auto lg:top-0 lg:bottom-0 lg:w-[55%] bg-contain bg-no-repeat bg-center pointer-events-none"
          style={{
            right: '5%',
            backgroundImage: `url('${basePath}/images/hero-china-map.webp')`,
            opacity: 0.8,
          }}
        />
        {/* Dim overlay on mobile only so text stays readable */}
        <div className="absolute inset-0 bg-[#1C1422]/60 lg:hidden pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[28px] sm:text-[40px] md:text-[52px] font-semibold leading-[1.1] mb-4 md:mb-5 tracking-[-0.02em] text-white">
              China Sourcing Navigator
            </h1>

            <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8 leading-relaxed">
              Your city-by-city guide to sourcing directly from Chinese suppliers
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#cities"
                className="btn-pill px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover text-center"
              >
                Explore by City
              </a>
              <a
                href="#categories"
                className="btn-pill px-8 py-3.5 border border-white/30 text-white font-medium text-sm hover:bg-white/10 text-center transition-colors"
              >
                Explore by Category
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          CITIES — Full-width horizontal carousel (20 cities)
          ================================================ */}
      <section id="cities" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold text-wf-text mb-2">
              Where Things Are <span className="accent-word">Made</span>
            </h2>
            <p className="text-wf-text-secondary text-sm md:text-base">
              20 sourcing cities across 6 regions &mdash; click a city to see what it makes
            </p>
          </div>
        </div>

        {/* Full-bleed carousel — no side padding, images cut off at browser edge */}
        <CityCarousel cities={cities} />
      </section>

      {/* ================================================
          CATEGORIES — all 18, show 12 initially
          ================================================ */}
      <section id="categories" className="py-16 md:py-24 bg-wf-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold text-wf-text mb-3">
              Explore by <span className="accent-word">Category</span>
            </h2>
            <p className="text-wf-text-secondary text-sm md:text-base max-w-lg mx-auto">
              18 product categories mapped to the best sourcing cities
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {displayCategories.map((cat, i) => (
              <div key={cat.slug} className={!showAllCategories && i >= 6 ? 'hidden md:block' : ''}>
                <CategoryCard {...cat} />
              </div>
            ))}
          </div>

          {!showAllCategories && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllCategories(true)}
                className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 border border-wf-red text-wf-red font-medium text-sm hover:bg-wf-red hover:text-white transition-colors"
              >
                See all 18 categories
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================================================
          CANTON FAIR 2026
          ================================================ */}
      <section id="canton-fair" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CantonFairBanner />
        </div>
      </section>

      {/* ================================================
          DOWNLOAD THE SOURCING MAP — clean CTA
          ================================================ */}
      <section id="download" className="py-16 md:py-24 bg-wf-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhitePaperCTA />
        </div>
      </section>

      {/* ================================================
          UNLOCK 1688 — Single clean section, one CTA
          ================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Unlock1688Section />
        </div>
      </section>

      {/* ================================================
          PAY INTO CHINA — Network messaging
          ================================================ */}
      <PaymentSection />

      {/* ================================================
          WHY WORLDFIRST
          ================================================ */}
      <WhyWorldFirstSection />

      <Footer />
    </main>
  );
}
