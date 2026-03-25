"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhitePaperCTA from "@/components/WhitePaperCTA";
import PaymentSection from "@/components/PaymentSection";
import WhyWorldFirstSection from "@/components/WhyWorldFirstSection";
import HeroSection from "./HeroSection";
import WhatQingdaoMakes from "./WhatQingdaoMakes";
import SourcingLayersTabs from "./SourcingLayersTabs";
import FAQAccordion from "./FAQAccordion";

export default function QingdaoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhatQingdaoMakes />
      <SourcingLayersTabs />

      {/* ── Download the China Sourcing Map ── */}
      <section id="download" className="py-16 md:py-24 bg-wf-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhitePaperCTA />
        </div>
      </section>

      <FAQAccordion />

      {/* ── Payment + Why WorldFirst — shared components ── */}
      <PaymentSection />
      <WhyWorldFirstSection />

      <Footer />
    </main>
  );
}
