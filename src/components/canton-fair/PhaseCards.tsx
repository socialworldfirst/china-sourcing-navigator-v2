"use client";

const phases = [
  {
    phase: "Phase 1",
    dates: "Apr 15 – 19",
    categories: [
      "Electronics & Information",
      "Household Appliances",
      "Machinery & Vehicles",
      "Lighting & Energy",
      "Hardware & Tools",
      "New Materials & Chemicals",
    ],
    areas: "Areas A, B, C, D",
  },
  {
    phase: "Phase 2",
    dates: "Apr 23 – 27",
    categories: [
      "Consumer Goods & Gifts",
      "Home Decorations",
      "Ceramics & Kitchenware",
      "Furniture",
      "Building Materials",
      "Sanitary & Bathroom",
    ],
    areas: "Areas A, B, C, D",
  },
  {
    phase: "Phase 3",
    dates: "May 1 – 5",
    categories: [
      "Apparel & Fashion",
      "Textiles & Fabrics",
      "Shoes, Bags & Leather",
      "Toys & Children's Products",
      "Health & Personal Care",
      "Food & Pet Products",
    ],
    areas: "Areas A, B, C, D",
  },
];

export default function PhaseCards() {
  return (
    <section id="phases" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            Three <span className="accent-word">Phases</span>, Three Weeks
          </h2>
          <p className="text-wf-text-secondary text-sm max-w-lg mx-auto">
            Each phase runs 5 days and focuses on different product categories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="rounded-2xl border border-wf-border bg-white p-6 transition-all hover:border-wf-red/20 hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-wf-red" />
                <span className="font-semibold text-wf-text text-lg">
                  {p.phase}
                </span>
              </div>
              <p className="text-sm text-wf-text-muted mb-4 font-medium">
                {p.dates}
              </p>

              <ul className="space-y-2">
                {p.categories.map((cat) => (
                  <li
                    key={cat}
                    className="flex items-start gap-2 text-sm text-wf-text-secondary"
                  >
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    {cat}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-wf-text-muted mt-4 pt-3 border-t border-wf-border">
                {p.areas}
              </p>
            </div>
          ))}
        </div>

        {/* CTA for first-timers */}
        <div className="mt-10 text-center">
          <p className="text-wf-text-secondary text-sm mb-3">
            First time at Canton Fair?
          </p>
          <a
            href="#"
            className="btn-pill inline-flex items-center gap-2 px-6 py-3 border-2 border-wf-red text-wf-red text-sm font-medium hover:bg-wf-red hover:text-white transition-colors"
          >
            Read the Canton Fair Introduction
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-xs text-wf-text-muted mt-2">
            A beginner-friendly overview of how the fair works — coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
