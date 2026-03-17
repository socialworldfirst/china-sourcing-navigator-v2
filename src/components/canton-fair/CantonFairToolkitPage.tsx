"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import TimelineNav from "./TimelineNav";
import WeeksBefore12 from "./WeeksBefore12";
import WeeksBefore4 from "./WeeksBefore4";
import WeeksBefore1 from "./WeeksBefore1";
import AtTheFair from "./AtTheFair";
import AfterTheFair from "./AfterTheFair";
import WhitePaperCTA from "@/components/WhitePaperCTA";
import WhyWorldFirstSection from "@/components/WhyWorldFirstSection";

export default function CantonFairToolkitPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TimelineNav />

        {/* ─── Timeline Sections ─── */}
        <WeeksBefore12 />
        <WeeksBefore4 />
        <WeeksBefore1 />
        <AtTheFair />
        <AfterTheFair />

        {/* ─── Downloads & Trust ─── */}
        <section id="sourcing-map" className="py-14 md:py-20 bg-wf-bg-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhitePaperCTA />
          </div>
        </section>

        <WhyWorldFirstSection />
      </main>

      <Footer />
    </>
  );
}
