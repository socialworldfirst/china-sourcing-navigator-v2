"use client";

import basePath from "@/lib/basePath";

/* ─── Card type definitions ─── */

type WebsiteCard = {
  type: "website";
  title: string;
  desc: string;
  href: string;
  domain: string;
  screenshot: string;
};

type AppCard = {
  type: "app";
  title: string;
  desc: string;
  screenshot: string;
  stores: string; // e.g. "iOS & Android"
};

type GuidanceCard = {
  type: "guidance";
  title: string;
  desc: string;
};

type ToolkitCard = WebsiteCard | AppCard | GuidanceCard;

type Category = {
  title: string;
  subtitle?: string;
  cards: ToolkitCard[];
};

/* ─── Data ─── */

const categories: Category[] = [
  {
    title: "Register for Canton Fair",
    cards: [
      {
        type: "website",
        title: "Canton Fair Registration",
        desc: "Pre-register online for free. Walk-in registration costs 100 RMB. You will need your passport number and a photo.",
        href: "https://www.cantonfair.org.cn/en-US/register/index",
        domain: "cantonfair.org.cn",
        screenshot: "toolkit-cantonfair-register.jpg",
      },
    ],
  },
  {
    title: "Book Your Stay",
    subtitle:
      "Hotel prices near Pazhou double within 30 days of the fair. Book early.",
    cards: [
      {
        type: "website",
        title: "Booking.com",
        desc: "Largest global hotel platform. Filter by Pazhou / Canton Fair area for walking-distance options.",
        href: "https://www.booking.com/searchresults.html?ss=Guangzhou+Pazhou",
        domain: "booking.com",
        screenshot: "toolkit-booking-guangzhou.jpg",
      },
      {
        type: "website",
        title: "Agoda",
        desc: "Popular with travellers to Asia. Often has better rates for extended stays near the Canton Fair complex.",
        href: "https://www.agoda.com/search?city=17163",
        domain: "agoda.com",
        screenshot: "toolkit-agoda-guangzhou.jpg",
      },
      {
        type: "website",
        title: "Trip.com",
        desc: "China-based booking platform. Especially useful if you are also booking domestic flights or trains within China.",
        href: "https://www.trip.com/hotels/list?city=32",
        domain: "trip.com",
        screenshot: "toolkit-trip-guangzhou.jpg",
      },
    ],
  },
  {
    title: "Navigate the Venue",
    subtitle:
      "The Canton Fair covers 1.1 million sqm across 4 exhibition areas.",
    cards: [
      {
        type: "website",
        title: "Venue Map & Buyer Guide",
        desc: "See which halls match your product categories. Download the floor plan before you arrive so you can plan your route.",
        href: "https://www.cantonfair.org.cn/en-US/customPages/buyerGuide",
        domain: "cantonfair.org.cn",
        screenshot: "toolkit-cantonfair-map.jpg",
      },
      {
        type: "website",
        title: "Exhibitor Search",
        desc: "Browse 48,000+ exhibitors by category. Pre-schedule meetings so you are not wandering the halls without a plan.",
        href: "https://www.cantonfair.org.cn/en-US/",
        domain: "cantonfair.org.cn",
        screenshot: "toolkit-cantonfair-exhibitors.jpg",
      },
    ],
  },
  {
    title: "Get Around Guangzhou",
    subtitle:
      "Google Maps does not work well in China. Download these before you fly.",
    cards: [
      {
        type: "app",
        title: "Baidu Maps",
        desc: "China's most-used navigation app. Has English mode. Covers metro, bus, taxi, and walking directions. This is what locals use.",
        screenshot: "toolkit-app-baidumaps.jpg",
        stores: "iOS & Android",
      },
      {
        type: "app",
        title: "Gaode Maps (Amap)",
        desc: "Another popular Chinese map app. Very accurate for walking navigation around the Canton Fair complex. Also supports English.",
        screenshot: "toolkit-app-gaode.jpg",
        stores: "iOS & Android",
      },
    ],
  },
  {
    title: "Essential Apps",
    subtitle: "Set these up before you land. They run on everything in China.",
    cards: [
      {
        type: "app",
        title: "Canton Fair App",
        desc: "The official buyer app. Use it for badge scanning, exhibitor search, hall navigation, and booking interpreter services on-site.",
        screenshot: "toolkit-app-cantonfair.jpg",
        stores: "iOS & Android",
      },
      {
        type: "app",
        title: "WeChat",
        desc: "China's super-app. Every supplier uses it for messaging. You will also use it for mobile payments, QR codes, and metro tickets.",
        screenshot: "toolkit-app-wechat.jpg",
        stores: "iOS & Android",
      },
      {
        type: "app",
        title: "Alipay",
        desc: "Mobile payments for restaurants, metro rides, shared bikes, and taxis. International visitors can now link a foreign credit card.",
        screenshot: "toolkit-app-alipay.jpg",
        stores: "iOS & Android",
      },
    ],
  },
  {
    title: "Prepare Your Trip",
    cards: [
      {
        type: "guidance",
        title: "Visa & Invitation Letter",
        desc: "You need a Business (M) visa to attend. After registering on cantonfair.org.cn, download an official invitation letter from your account to support your visa application. Apply at least 6 weeks before the fair — processing times vary by country.",
      },
      {
        type: "guidance",
        title: "Set Up a VPN Before You Travel",
        desc: "Google, WhatsApp, Instagram, and many other services are blocked in China. Search for 'best VPN for China' on Google and download one before you leave. Test it at home to make sure it works. You cannot easily download a VPN after you arrive.",
      },
      {
        type: "guidance",
        title: "Need an Interpreter?",
        desc: "You can book an interpreter through the Canton Fair App once you arrive. Interpreters are also available at the International Business Center inside the venue. Many suppliers at larger booths speak basic English.",
      },
    ],
  },
];

/* ─── Card Components ─── */

function WebsiteCardComponent({ card }: { card: WebsiteCard }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl border border-wf-border overflow-hidden card-hover block"
    >
      {/* Screenshot */}
      <div className="aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={`${basePath}/images/toolkit/${card.screenshot}`}
          alt={`${card.title} — ${card.domain}`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="p-4">
        <h4 className="font-semibold text-sm text-wf-text mb-1">
          {card.title}
        </h4>
        <p className="text-xs text-wf-text-muted leading-relaxed mb-3">
          {card.desc}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-wf-red group-hover:underline">
          Visit {card.domain}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function AppCardComponent({ card }: { card: AppCard }) {
  return (
    <div className="bg-white rounded-xl border border-wf-border p-4 card-hover flex gap-4 items-start">
      {/* App icon from screenshot (cropped to icon area) */}
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 border border-wf-border">
        <img
          src={`${basePath}/images/toolkit/${card.screenshot}`}
          alt={card.title}
          className="w-full h-full object-cover object-[15%_25%]"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-wf-text mb-1">
          {card.title}
        </h4>
        <p className="text-xs text-wf-text-muted leading-relaxed mb-2">
          {card.desc}
        </p>
        <span className="text-[11px] text-wf-text-muted/70 font-medium">
          {card.stores}
        </span>
      </div>
    </div>
  );
}

function GuidanceCardComponent({ card }: { card: GuidanceCard }) {
  return (
    <div className="bg-wf-bg-warm rounded-xl border border-dashed border-wf-border p-5">
      <div className="flex items-start gap-3">
        {/* Info icon */}
        <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-wf-text mb-1">
            {card.title}
          </h4>
          <p className="text-xs text-wf-text-muted leading-relaxed">
            {card.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function CardRenderer({ card }: { card: ToolkitCard }) {
  switch (card.type) {
    case "website":
      return <WebsiteCardComponent card={card} />;
    case "app":
      return <AppCardComponent card={card} />;
    case "guidance":
      return <GuidanceCardComponent card={card} />;
  }
}

/* ─── Main Section ─── */

export default function EssentialLinks() {
  return (
    <section id="essentials" className="py-14 md:py-20 bg-wf-bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
            Your Canton Fair{" "}
            <span className="accent-word">Toolkit</span>
          </h2>
          <p className="text-wf-text-secondary text-sm max-w-lg mx-auto">
            Recommended tools, apps, and resources to get things done before
            and during the fair.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              {/* Category header */}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-wf-text">
                  {cat.title}
                </h3>
                {cat.subtitle && (
                  <p className="text-sm text-wf-text-muted mt-0.5">
                    {cat.subtitle}
                  </p>
                )}
              </div>

              {/* Cards grid — adapt columns to card count and type */}
              <div
                className={`grid gap-4 ${
                  cat.cards.length === 1
                    ? "max-w-md"
                    : cat.cards.length === 2
                      ? "sm:grid-cols-2 max-w-3xl"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {cat.cards.map((card) => (
                  <CardRenderer key={card.title} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
