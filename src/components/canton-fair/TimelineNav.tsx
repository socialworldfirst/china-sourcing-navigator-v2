"use client";

/* ─── Sticky timeline navigation bar ─── */

const stages = [
  { label: "8–12 Weeks Before", href: "#weeks-12" },
  { label: "2–4 Weeks Before", href: "#weeks-4" },
  { label: "1 Week Before", href: "#weeks-1" },
  { label: "At the Fair", href: "#at-fair" },
  { label: "After the Fair", href: "#after-fair" },
];

export default function TimelineNav() {
  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-wf-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-1 overflow-x-auto scrollbar-hide py-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {stages.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="btn-pill flex-shrink-0 px-4 py-2 text-xs font-medium text-wf-text-secondary hover:text-wf-red hover:bg-wf-red/5 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
