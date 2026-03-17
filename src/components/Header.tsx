"use client";

import { useState } from "react";
import Link from "next/link";
import basePath from "@/lib/basePath";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-wf-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo — real WorldFirst logo */}
          <Link href="/" className="flex items-center">
            <img
              src={`${basePath}/images/wf-logo-nav.webp`}
              alt="WorldFirst"
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#cities"
              className="text-[15px] text-wf-text hover:text-wf-red transition-colors"
            >
              Sourcing Cities
            </Link>
            <Link
              href="#categories"
              className="text-[15px] text-wf-text hover:text-wf-red transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#payment"
              className="text-[15px] text-wf-text hover:text-wf-red transition-colors"
            >
              Pay Suppliers
            </Link>
            <Link
              href="#download"
              className="text-[15px] text-wf-text hover:text-wf-red transition-colors"
            >
              Free Guide
            </Link>
            {/* Canton Fair — highlighted with WF red, special treatment */}
            <Link
              href="/canton-fair-2026"
              className="flex items-center gap-1.5 text-[15px] font-medium text-wf-red hover:text-wf-red-dark transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-wf-red canton-pulse" />
              Canton Fair 2026
            </Link>
          </nav>

          {/* CTA Buttons — global URLs */}
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
            {[
              { label: "Sourcing Cities", href: "#cities" },
              { label: "Categories", href: "#categories" },
              { label: "Pay Suppliers", href: "#payment" },
              { label: "Free Guide", href: "#download" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block py-2.5 text-[15px] text-wf-text hover:text-wf-red" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/canton-fair-2026" className="flex items-center gap-1.5 py-2.5 text-[15px] text-wf-red font-medium" onClick={() => setMobileOpen(false)}>
              <span className="w-1.5 h-1.5 rounded-full bg-wf-red" />
              Canton Fair 2026
            </Link>
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
