"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhitePaperCTA from "@/components/WhitePaperCTA";
import PaymentSection from "@/components/PaymentSection";
import WhyWorldFirstSection from "@/components/WhyWorldFirstSection";
import HeroSection, { PackagingCityCarousel } from "./HeroSection";
import PackagingIntro from "./PackagingIntro";
import PackagingCityAccordion from "./PackagingCityAccordion";
import SourcingLayersTabs from "./SourcingLayersTabs";
import FAQAccordion from "./FAQAccordion";

export default function PackagingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PackagingIntro />

      {/* Top packaging sourcing cities -- carousel */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
              Top <span className="accent-word">packaging</span> sourcing cities
            </h2>
            <p className="text-wf-text-secondary text-base max-w-lg mx-auto">
              Ranked by factory density, print capability, and packaging export volume
            </p>
          </div>
          <PackagingCityCarousel />
        </div>
      </section>

      <PackagingCityAccordion />
      <SourcingLayersTabs />

      {/* ── Download the China Sourcing Map ── */}
      <section id="download" className="py-16 md:py-24 bg-wf-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhitePaperCTA />
        </div>
      </section>

      <FAQAccordion />

      {/* ── Payment + Why WorldFirst -- shared components ── */}
      <PaymentSection />
      <WhyWorldFirstSection />

      <Footer />
    </main>
  );
}
