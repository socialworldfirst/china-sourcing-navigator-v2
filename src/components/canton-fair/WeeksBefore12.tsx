"use client";

import TimelineSection from "./TimelineSection";
import {
  WebsiteCardComponent,
  GuidanceCardComponent,
  CardGrid,
} from "./ToolkitCards";

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
  },
];

export default function WeeksBefore12() {
  return (
    <TimelineSection
      id="weeks-12"
      badge="8–12 Weeks Before"
      title="Get the Basics Done"
      subtitle="These are the things that take time — visa processing, hotel availability, registration. Start here so nothing blocks you later. The importers who come home with real supplier relationships are the ones who did their homework before boarding the plane."
    >
      <div className="space-y-12">
        {/* Registration */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Register for Canton Fair
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            Online registration is free. Walk-in registration at the venue costs 100 RMB. You will need your passport number and a photo.
          </p>
          <CardGrid count={1}>
            <WebsiteCardComponent
              card={{
                type: "website",
                title: "Canton Fair Registration",
                desc: "Pre-register online to skip the walk-in queue. Takes about 10 minutes.",
                href: "https://www.cantonfair.org.cn/en-US/register/index",
                domain: "cantonfair.org.cn",
                screenshot: "toolkit-cantonfair-register.jpg",
              }}
            />
          </CardGrid>
        </div>

        {/* Visa */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Apply for your visa
          </h3>
          <CardGrid count={1}>
            <GuidanceCardComponent
              card={{
                type: "guidance",
                title: "You Need a Business (M) Visa",
                desc: "After registering, download an official invitation letter from your Canton Fair account to support your visa application. Apply at least 6 weeks before the fair — processing times vary by country. Tourist visas may work but the Business (M) visa is recommended.",
              }}
            />
          </CardGrid>
        </div>

        {/* Hotels */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Book your hotel
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            Do this early. Seriously. Hotel prices near Pazhou spike 8-10x during fair weeks. The Westin Pazhou is directly connected to the venue and books out fast. Budget alternative: stay in Yuexiu District and metro in — about 40 minutes each way, 5 RMB per ride. Not glamorous, but it saves hundreds per night.
          </p>
          <CardGrid count={3}>
            <WebsiteCardComponent
              card={{
                type: "website",
                title: "Booking.com",
                desc: "Largest global hotel platform. Filter by Pazhou / Canton Fair area for walking-distance options.",
                href: "https://www.booking.com/searchresults.html?ss=Guangzhou+Pazhou",
                domain: "booking.com",
                screenshot: "toolkit-booking-guangzhou.jpg",
              }}
            />
            <WebsiteCardComponent
              card={{
                type: "website",
                title: "Agoda",
                desc: "Popular with travellers to Asia. Often has better rates for extended stays near the Canton Fair complex.",
                href: "https://www.agoda.com/search?city=17163",
                domain: "agoda.com",
                screenshot: "toolkit-agoda-guangzhou.jpg",
              }}
            />
            <WebsiteCardComponent
              card={{
                type: "website",
                title: "Trip.com",
                desc: "China-based booking platform. Especially useful if you are also booking domestic flights or trains within China.",
                href: "https://www.trip.com/hotels/list?city=32",
                domain: "trip.com",
                screenshot: "toolkit-trip-guangzhou.jpg",
              }}
            />
          </CardGrid>
        </div>

        {/* Phase dates */}
        <div>
          <h3 className="text-lg font-semibold text-wf-text mb-2">
            Check which phase you need
          </h3>
          <p className="text-sm text-wf-text-muted mb-4">
            The fair runs in 3 phases, each covering different product categories. Most first-timers attend one phase. Going to the wrong phase is one of the most common regrets.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {phases.map((p) => (
              <div
                key={p.phase}
                className="rounded-xl border border-wf-border bg-white p-5"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-wf-red" />
                  <span className="font-semibold text-wf-text">{p.phase}</span>
                </div>
                <p className="text-sm text-wf-text-muted mb-3 font-medium">
                  {p.dates}
                </p>
                <ul className="space-y-1.5">
                  {p.categories.map((cat) => (
                    <li key={cat} className="text-xs text-wf-text-secondary flex items-start gap-1.5">
                      <span className="text-wf-red mt-0.5">›</span>
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cost reality */}
        <div className="bg-wf-bg-warm rounded-xl p-6 md:p-8 border border-wf-border">
          <h3 className="text-lg font-semibold text-wf-text mb-3">
            Let&apos;s be honest about what this trip costs
          </h3>
          <p className="text-sm text-wf-text-secondary leading-relaxed mb-5">
            Especially if you&apos;re a smaller buyer wondering whether the fair is even for you. Here&apos;s the truth: it is. But only if you go prepared.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: "Flights", range: "$500 – $1,500" },
              { label: "Hotel (1 week)", range: "$350 – $1,000" },
              { label: "Visa", range: "$50 – $160" },
              { label: "Daily expenses", range: "~$50/day" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg p-3 border border-wf-border text-center">
                <div className="text-xs text-wf-text-muted mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-wf-text">{item.range}</div>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1 h-full min-h-[40px] bg-wf-red/30 rounded-full flex-shrink-0" />
            <p className="text-sm text-wf-text font-medium leading-relaxed">
              Total: $1,000 – $4,000 per person. That&apos;s real money. The rest of this guide is about making sure you come home with real results — not just a pile of business cards.
            </p>
          </div>
        </div>
      </div>
    </TimelineSection>
  );
}
