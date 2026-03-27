"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import basePath from "@/lib/basePath";

/* ── 10 cities ranked for electronics sourcing ── */
const electronicsCities = [
  { name: "Shenzhen",  slug: "shenzhen",  stars: 5, imageUrl: `${basePath}/images/shenzhen.webp` },
  { name: "Dongguan",  slug: "dongguan",  stars: 5, imageUrl: `${basePath}/images/dongguan.webp` },
  { name: "Guangzhou",  slug: "guangzhou",  stars: 4, imageUrl: `${basePath}/images/guangzhou.webp` },
  { name: "Shanghai",  slug: "shanghai",  stars: 3, imageUrl: `${basePath}/images/shanghai.webp` },
  { name: "Hangzhou",  slug: "hangzhou",  stars: 3, imageUrl: `${basePath}/images/hangzhou.jpg` },
  { name: "Ningbo",    slug: "ningbo",    stars: 3, imageUrl: `${basePath}/images/ningbo.webp` },
  { name: "Suzhou",    slug: "suzhou",    stars: 3, imageUrl: `${basePath}/images/suzhou.jpg` },
  { name: "Xiamen",    slug: "xiamen",    stars: 2, imageUrl: `${basePath}/images/xiamen.jpg` },
  { name: "Foshan",    slug: "foshan",    stars: 2, imageUrl: `${basePath}/images/foshan.webp` },
  { name: "Yiwu",      slug: "yiwu",      stars: 1, imageUrl: `${basePath}/images/yiwu.webp` },
];

/* Placeholder gradient for cities without images */
const placeholderGradient = "linear-gradient(135deg, #1C1422 0%, #3b2d4a 50%, #1C1422 100%)";

/* ── Star rating — always white (overlaid on images) ── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i <= count ? "#ffffff" : "none"}
          stroke={i <= count ? "#ffffff" : "rgba(255,255,255,0.4)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ── City card — mirrors CityCard.tsx but with stars instead of tags ── */
function ElectronicsCityCard({ name, slug, stars, imageUrl }: typeof electronicsCities[number]) {
  return (
    <Link href={`/cities/${slug}`}>
      <div className="city-card group relative overflow-hidden cursor-pointer rounded-2xl w-full" style={{ aspectRatio: "3/4" }}>
        {/* Background image or gradient placeholder */}
        {imageUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{ background: placeholderGradient }}
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 group-hover:to-black/85 transition-all duration-300" />

        {/* TOP: Star rating */}
        <div className="absolute top-4 left-4">
          <Stars count={stars} />
        </div>

        {/* BOTTOM: City name + CTA on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-xl tracking-wide transform transition-transform duration-300 group-hover:-translate-y-9">
            {name}
          </h3>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-white text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Sourcing guide
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Scrollable carousel with left/right arrows ── */
function CityCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const GAP = 12;
  const [cardsVisible, setCardsVisible] = useState(5);

  useEffect(() => {
    const update = () => setCardsVisible(window.innerWidth < 768 ? 2 : 5);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getCardWidth = useCallback(() => {
    if (!scrollRef.current) return 220;
    return scrollRef.current.clientWidth / cardsVisible;
  }, [cardsVisible]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardW = getCardWidth();
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardW : cardW,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-container"
        style={{ scrollbarWidth: "none", gap: `${GAP}px` }}
      >
        {electronicsCities.map((city) => (
          <div
            key={city.slug}
            className="flex-shrink-0"
            style={{ width: `calc((100% - ${(cardsVisible - 1) * GAP}px) / ${cardsVisible})` }}
          >
            <ElectronicsCityCard {...city} />
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-wf-text hover:bg-wf-red hover:text-white transition-all duration-200"
        aria-label="Scroll left"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-wf-text hover:bg-wf-red hover:text-white transition-all duration-200"
        aria-label="Scroll right"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

/* ── Hero section (just the hero image) ── */
export default function HeroSection() {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1588508065123-287b28e013da?w=1600&q=80"
        alt="Electronics components and circuit boards"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-white mb-4 tracking-[-0.02em] lg:whitespace-nowrap">
            Source Electronics from China
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            From Shenzhen&apos;s Huaqiangbei — the world&apos;s largest electronics
            market — to the assembly lines of Dongguan. This is where hardware ideas
            become products.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#source-electronics"
              className="btn-pill px-7 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
            >
              Find Electronics Suppliers in China
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Exported city carousel for use in page layout ── */
export { CityCarousel as ElectronicsCityCarousel };
