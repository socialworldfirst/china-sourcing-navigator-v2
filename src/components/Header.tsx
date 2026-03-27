"use client";

import { useState } from "react";
import Link from "next/link";
import basePath from "@/lib/basePath";

const topCities = [
  { name: "Guangzhou", slug: "guangzhou" },
  { name: "Shenzhen", slug: "shenzhen" },
  { name: "Dongguan", slug: "dongguan" },
  { name: "Yiwu", slug: "yiwu" },
  { name: "Foshan", slug: "foshan" },
  { name: "Shanghai", slug: "shanghai" },
];

const topCategories = [
  { name: "Electronics", slug: "electronics" },
  { name: "Apparel", slug: "apparel" },
  { name: "Beauty", slug: "beauty" },
  { name: "Toys", slug: "toys" },
  { name: "Home & Furniture", slug: "home-furniture" },
  { name: "Lighting", slug: "lighting" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-wf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={`${basePath}/images/wf-logo-nav.webp`}
              alt="WorldFirst"
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {/* Sourcing Cities — dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCitiesOpen(true)}
              onMouseLeave={() => setCitiesOpen(false)}
            >
              <Link
                href="/#cities"
                className="text-[15px] text-wf-text hover:text-wf-red transition-colors flex items-center gap-1"
              >
                Sourcing Cities
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><polyline points="6 9 12 15 18 9" /></svg>
              </Link>
              {citiesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-white border border-wf-border rounded-xl shadow-lg py-2 min-w-[200px]">
                    {topCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/cities/${city.slug}`}
                        className="block px-4 py-2 text-sm text-wf-text hover:bg-wf-bg-light hover:text-wf-red transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                    <div className="border-t border-wf-border mt-1 pt-1">
                      <Link
                        href="/#cities"
                        className="block px-4 py-2 text-sm text-wf-red font-medium"
                      >
                        View all 20 cities &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Categories — dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <Link
                href="/#categories"
                className="text-[15px] text-wf-text hover:text-wf-red transition-colors flex items-center gap-1"
              >
                Categories
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><polyline points="6 9 12 15 18 9" /></svg>
              </Link>
              {categoriesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-white border border-wf-border rounded-xl shadow-lg py-2 min-w-[220px]">
                    {topCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/categories/${cat.slug}`}
                        className="block px-4 py-2 text-sm text-wf-text hover:bg-wf-bg-light hover:text-wf-red transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <div className="border-t border-wf-border mt-1 pt-1">
                      <Link
                        href="/#categories"
                        className="block px-4 py-2 text-sm text-wf-red font-medium"
                      >
                        View all 18 categories &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#payment"
              className="text-[15px] text-wf-text hover:text-wf-red transition-colors"
            >
              Pay Suppliers
            </Link>
            <Link
              href="/china-sourcing-map"
              className="text-[15px] font-medium text-wf-red hover:text-wf-red-dark transition-colors"
            >
              China Sourcing Map
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.worldfirst.com/global/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill px-5 py-2 text-sm text-wf-red border border-wf-red hover:bg-wf-red hover:text-white"
            >
              Login
            </a>
            <a
              href="https://www.worldfirst.com/global/register/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill px-5 py-2 text-sm text-white bg-wf-red hover:bg-wf-red-hover"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-wf-text-secondary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-wf-border">
          <nav className="px-4 py-3 space-y-1">
            <p className="text-[11px] text-wf-text-muted uppercase tracking-wider font-semibold pt-1 pb-1">Cities</p>
            {topCities.map((city) => (
              <Link key={city.slug} href={`/cities/${city.slug}`} className="block py-1.5 text-[14px] text-wf-text hover:text-wf-red" onClick={() => setMobileOpen(false)}>
                {city.name}
              </Link>
            ))}
            <Link href="/#cities" className="block py-1.5 text-[13px] text-wf-red" onClick={() => setMobileOpen(false)}>All 20 cities &rarr;</Link>

            <p className="text-[11px] text-wf-text-muted uppercase tracking-wider font-semibold pt-3 pb-1">Categories</p>
            {topCategories.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} className="block py-1.5 text-[14px] text-wf-text hover:text-wf-red" onClick={() => setMobileOpen(false)}>
                {cat.name}
              </Link>
            ))}
            <Link href="/#categories" className="block py-1.5 text-[13px] text-wf-red" onClick={() => setMobileOpen(false)}>All 24 categories &rarr;</Link>

            <div className="pt-3 border-t border-wf-border mt-2">
              <Link href="/#payment" className="block py-2 text-[15px] text-wf-text hover:text-wf-red" onClick={() => setMobileOpen(false)}>
                Pay Suppliers
              </Link>
              <Link href="/china-sourcing-map" className="block py-2 text-[15px] text-wf-red font-medium" onClick={() => setMobileOpen(false)}>
                China Sourcing Map
              </Link>
            </div>

            <div className="flex gap-3 pt-3 border-t border-wf-border">
              <a href="https://www.worldfirst.com/global/login/" className="btn-pill flex-1 text-center px-4 py-2.5 text-sm text-wf-red border border-wf-red">Login</a>
              <a href="https://www.worldfirst.com/global/register/" className="btn-pill flex-1 text-center px-4 py-2.5 text-sm text-white bg-wf-red">Sign Up</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
