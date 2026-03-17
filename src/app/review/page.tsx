"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import CityCarousel from "@/components/CityCarousel";
import PaymentSection from "@/components/PaymentSection";
import basePath from "@/lib/basePath";
import { cities, categories } from "@/lib/data";

export default function ReviewPage() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const allCategories = showAllCategories
    ? categories
    : categories.slice(0, 12);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1225 0%, #201535 50%, #1c1425 100%)' }}>
        <div
          className="absolute top-0 bottom-0 w-[55%] bg-contain bg-no-repeat bg-center pointer-events-none hidden lg:block"
          style={{
            right: '12%',
            backgroundImage: `url('${basePath}/images/hero-china-map.webp')`,
            opacity: 0.8,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[40px] sm:text-[48px] md:text-[52px] font-semibold leading-[1.1] mb-5 tracking-[-0.02em] text-white">
              China Sourcing Navigator
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Your city-by-city guide to sourcing directly from Chinese suppliers
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#cities" className="btn-pill px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover text-center">
                Explore by City
              </a>
              <a href="#categories" className="btn-pill px-8 py-3.5 border border-white/30 text-white font-medium text-sm hover:bg-white/10 text-center transition-colors">
                Explore by Category
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section id="cities" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
              Where Things Are <span className="accent-word">Made</span>
            </h2>
            <p className="text-wf-text-secondary text-base">
              Click a city to see what it makes and how to source there
            </p>
          </div>
        </div>
        <CityCarousel cities={cities} />
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-16 md:py-24 bg-wf-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-3">
              Explore by <span className="accent-word">Category</span>
            </h2>
            <p className="text-wf-text-secondary text-base max-w-lg mx-auto">
              Find the right sourcing region for your product
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {allCategories.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
          {!showAllCategories && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllCategories(true)}
                className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 border border-wf-red text-wf-red font-medium text-sm hover:bg-wf-red hover:text-white transition-colors"
              >
                See all categories
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PAY INTO CHINA — Shared component */}
      <PaymentSection />
    </main>
  );
}
