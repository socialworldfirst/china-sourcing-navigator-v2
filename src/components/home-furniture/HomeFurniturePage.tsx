"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomeFurniturePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold text-wf-text mb-4">HomeFurniture sourcing guide</h1>
          <p className="text-wf-text-secondary">Coming soon.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
