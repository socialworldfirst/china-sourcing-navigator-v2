"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import CityCard from "./CityCard";

interface City {
  name: string;
  slug: string;
  region: string;
  topCategories: string[];
  description: string;
  imageUrl: string;
}

interface CityCarouselProps {
  cities: City[];
}

export default function CityCarousel({ cities }: CityCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Triple the cities for infinite illusion: [clone-end] [original] [clone-start]
  const extendedCities = [...cities, ...cities, ...cities];

  // Card width calculation — 3 on mobile, 5 on desktop
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

  const getSetWidth = useCallback(() => {
    return getCardWidth() * cities.length;
  }, [cities.length, getCardWidth]);

  // On mount, scroll to the middle set (the "real" cities)
  useEffect(() => {
    if (!scrollRef.current) return;
    const setW = getSetWidth();
    scrollRef.current.scrollLeft = setW;
  }, [getSetWidth]);

  // Watch scroll position and loop back when hitting clone boundaries
  const handleScroll = useCallback(() => {
    if (!scrollRef.current || isTransitioning) return;
    const el = scrollRef.current;
    const setW = getSetWidth();

    // If scrolled past 2nd set into 3rd clone → jump back to 1st set
    if (el.scrollLeft >= setW * 2) {
      setIsTransitioning(true);
      el.style.scrollBehavior = "auto";
      el.scrollLeft = el.scrollLeft - setW;
      el.style.scrollBehavior = "";
      requestAnimationFrame(() => setIsTransitioning(false));
    }
    // If scrolled before 1st set into 0th clone → jump forward to 2nd set
    else if (el.scrollLeft <= 0) {
      setIsTransitioning(true);
      el.style.scrollBehavior = "auto";
      el.scrollLeft = el.scrollLeft + setW;
      el.style.scrollBehavior = "";
      requestAnimationFrame(() => setIsTransitioning(false));
    }
  }, [isTransitioning, getSetWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

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
      {/* Cards container — edge-to-edge, no side padding */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-container"
        style={{ scrollbarWidth: "none", gap: `${GAP}px` }}
      >
        {extendedCities.map((city, i) => (
          <div
            key={`${city.slug}-${i}`}
            className="flex-shrink-0"
            style={{ width: `calc((100vw - ${(cardsVisible - 1) * GAP}px) / ${cardsVisible})` }}
          >
            <CityCard {...city} />
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-wf-text hover:bg-wf-red hover:text-white transition-all duration-200"
        aria-label="Scroll left"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-wf-text hover:bg-wf-red hover:text-white transition-all duration-200"
        aria-label="Scroll right"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
