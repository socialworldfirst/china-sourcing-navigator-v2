import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { category: "electronics" },
    { category: "home-kitchen" },
    { category: "apparel" },
    { category: "beauty" },
    { category: "packaging" },
    { category: "toys" },
    { category: "lighting" },
    { category: "building-materials" },
  ];
}

const categoryData: Record<
  string,
  {
    name: string;
    icon: string;
    exportValue: string;
    topCities: { name: string; slug: string; speciality: string }[];
    moqRange: string;
    leadTimes: string;
    description: string;
    whereToSource: {
      city: string;
      slug: string;
      detail: string;
    }[];
    beforeSourcing: {
      title: string;
      detail: string;
    }[];
    supplierEvaluation: {
      lookFor: string[];
      redFlags: string[];
    };
    pricing: {
      fobBreakdown: string;
      depositSplit: string;
      redFlags: string;
      worldTradeHook: string;
    };
    logistics: {
      shippingNotes: string;
      containerConfig: string;
      incoterms: string;
    };
    relatedCategories: string[];
  }
> = {
  electronics: {
    name: "Electronics",
    icon: "⚡",
    exportValue: "$420B+ annually",
    topCities: [
      {
        name: "Shenzhen",
        slug: "shenzhen",
        speciality: "Consumer electronics, components, PCBs",
      },
      {
        name: "Dongguan",
        slug: "dongguan",
        speciality: "Assembly, peripherals, audio equipment",
      },
      {
        name: "Guangzhou",
        slug: "guangzhou",
        speciality: "Components, consumer appliances",
      },
    ],
    moqRange: "100-5,000 units (varies by product complexity)",
    leadTimes: "15-45 days production, 7-14 days for samples",
    description:
      "China produces over 80% of the world's consumer electronics. From Shenzhen's Huaqiangbei — the world's largest electronics market — to the factory parks of Dongguan, the Pearl River Delta is where hardware ideas become products. Whether you're sourcing phone accessories or designing custom PCBs, this guide maps the entire electronics sourcing landscape.",
    whereToSource: [
      {
        city: "Shenzhen",
        slug: "shenzhen",
        detail:
          "The epicentre. Huaqiangbei for components and off-the-shelf products. Baoan and Longhua districts for custom manufacturing. Shenzhen has the deepest supply chain for electronics — you can source every component for a consumer device within a 30km radius.",
      },
      {
        city: "Dongguan",
        slug: "dongguan",
        detail:
          "Where assembly happens at scale. Many Shenzhen-designed products are assembled in Dongguan's factory parks. Lower rents than Shenzhen mean better pricing on high-volume orders. Key areas: Chang'an (hardware), Tangxia (electronics).",
      },
      {
        city: "Guangzhou",
        slug: "guangzhou",
        detail:
          "Secondary hub for electronics — stronger in components and consumer appliances than in cutting-edge tech. Panyu district hosts factories focused on kitchen electronics, personal care devices, and home automation.",
      },
    ],
    beforeSourcing: [
      {
        title: "Certifications matter more in electronics",
        detail:
          "CE (Europe), FCC (US), UL (safety), RoHS (hazardous substances), and WEEE (waste electronics) are non-negotiable for most markets. Ask for existing certifications before sampling — retrofitting compliance after production costs 5-10x more.",
      },
      {
        title: "Understand the BOM (Bill of Materials)",
        detail:
          "Electronics pricing lives and dies on the BOM. Get a detailed component breakdown before negotiating. Key variables: chipsets (60-70% of cost for smart devices), housing material (ABS vs PC), battery (lithium polymer vs lithium ion), and display type.",
      },
      {
        title: "Tooling and mould costs",
        detail:
          "Custom electronics often require injection moulds ($3,000-$20,000+). Clarify upfront: who owns the mould, what's the mould life (shots), and is the tooling cost refundable after X units? Get mould ownership in writing.",
      },
      {
        title: "Sample before you scale",
        detail:
          "Always order golden samples AND production samples. A golden sample proves the design works. A production sample proves the factory can replicate it at scale. These are not the same thing — don't skip either.",
      },
    ],
    supplierEvaluation: {
      lookFor: [
        "Own SMT (Surface Mount Technology) production line — not outsourced",
        "ISO 9001 certification and documented QC processes",
        "In-house testing lab with ESD protection",
        "Can provide existing client references in your target market",
        "Willing to sign NDA and IP protection agreement",
        "Transparent BOM with component brand names",
        "Factory tour welcome, not just showroom visits",
      ],
      redFlags: [
        "Claims to manufacture everything — no one factory makes screens, PCBs, and housings",
        "Won't share BOM details or component brands",
        "No certifications or offers to 'arrange' them after order",
        "Factory tour shows assembly only, no manufacturing",
        "Minimum order matches your exact enquiry quantity (common bait)",
        "Price significantly below market — likely cutting corners on components",
      ],
    },
    pricing: {
      fobBreakdown:
        "Typical FOB breakdown for consumer electronics: Components (40-70%), Assembly labour (10-15%), Housing/packaging (10-15%), Factory overhead (5-10%), Margin (5-15%). Chipset choice drives the biggest price variance. Ask suppliers to quote with 2-3 chipset options.",
      depositSplit:
        "Standard: 30% T/T deposit, 70% before shipment. For first orders or custom products: 50/50 is common. Some factories require 100% prepayment for orders under $5,000. Never pay 100% upfront on orders over $5,000 — regardless of how good the price is.",
      redFlags:
        "If a supplier quotes significantly below market and pushes for full payment upfront, walk away. In electronics specifically, rock-bottom prices usually mean counterfeit components, refurbished parts, or skipped testing — all of which create liability when products reach consumers.",
      worldTradeHook:
        "WorldTrade escrow holds your deposit and balance payments until the supplier confirms shipment with tracking. For electronics — where deposit amounts regularly exceed $10,000 — escrow removes the single biggest risk in the transaction: sending money and hoping.",
    },
    logistics: {
      shippingNotes:
        "Electronics are sensitive cargo. Ensure suppliers pack with anti-static bags, foam inserts, and moisture-proof packaging. Battery products (lithium ion/polymer) have strict air freight and sea freight regulations — IATA DGR Class 9. Many freight forwarders won't handle batteries without proper MSDS documentation.",
      containerConfig:
        "20ft container holds approximately 28 CBM / 22,000 kg. For consumer electronics: ~2,000-4,000 units per pallet depending on product size. Mix LCL for initial orders, transition to FCL when volume justifies it. Always request photographs of container loading.",
      incoterms:
        "FOB Shenzhen/Dongguan is standard. EXW saves 3-5% but you handle everything from factory gate. CIF/DDP adds convenience but hides the logistics cost. For first orders, FOB gives you the best balance of control and transparency.",
    },
    relatedCategories: ["lighting", "toys", "home-kitchen"],
  },
};

function getDefaultCategory(slug: string) {
  const names: Record<string, string> = {
    "home-kitchen": "Home & Kitchen",
    apparel: "Apparel & Textiles",
    beauty: "Beauty & Personal Care",
    packaging: "Packaging & Print",
    toys: "Toys & Games",
    lighting: "Lighting",
    "building-materials": "Building Materials",
  };
  return {
    name: names[slug] || slug.charAt(0).toUpperCase() + slug.slice(1),
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = categoryData[categorySlug];

  if (!category) {
    const { name } = getDefaultCategory(categorySlug);
    return (
      <main className="min-h-screen bg-wf-navy">
        <Header />
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {name} Sourcing Guide
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              This guide is coming soon. We&apos;re compiling city-by-city breakdowns,
              pricing benchmarks, and supplier evaluation criteria for {name}.
            </p>
            <Link
              href="/"
              className="text-wf-accent hover:underline text-sm"
            >
              ← Back to Navigator
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-wf-navy">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-20 bg-wf-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-wf-accent transition-colors">
              China Sourcing Navigator
            </Link>
            <span>›</span>
            <span className="text-slate-400">Categories</span>
            <span>›</span>
            <span className="text-white">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* ====== SECTION 1: CATEGORY HERO ====== */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{category.icon}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Sourcing {category.name} from China
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                {category.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-row md:flex-col gap-4 md:gap-3">
              {[
                { label: "Export value", value: category.exportValue },
                { label: "MOQ range", value: category.moqRange },
                { label: "Lead times", value: category.leadTimes },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-5 py-3 bg-wf-dark/60 border border-wf-border rounded-xl min-w-[160px]"
                >
                  <div className="text-white font-bold text-sm">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top cities bar */}
          <div className="mt-10 flex flex-wrap gap-3">
            {category.topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-wf-dark/60 border border-wf-border rounded-xl hover:border-wf-accent transition-colors group"
              >
                <span className="text-xs text-slate-500">📍</span>
                <span className="text-sm text-slate-300 group-hover:text-white font-medium">
                  {city.name}
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  — {city.speciality}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: WHERE TO SOURCE ====== */}
      <section className="py-16 bg-wf-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Where to Source {category.name}
          </h2>
          <div className="space-y-6">
            {category.whereToSource.map((source) => (
              <div
                key={source.slug}
                className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl flex flex-col md:flex-row gap-6"
              >
                <div className="flex-1">
                  <Link
                    href={`/cities/${source.slug}`}
                  >
                    <h3 className="text-white font-semibold text-lg mb-2 hover:text-wf-accent transition-colors">
                      📍 {source.city}
                    </h3>
                  </Link>
                  <p className="text-slate-400 text-sm">{source.detail}</p>
                </div>
                <Link
                  href={`/cities/${source.slug}`}
                  className="self-start px-4 py-2 bg-wf-dark border border-wf-border rounded-lg text-wf-accent text-sm font-medium hover:border-wf-accent transition-colors whitespace-nowrap"
                >
                  City guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: WHAT TO KNOW BEFORE SOURCING ====== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            What to Know Before Sourcing {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.beforeSourcing.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: SUPPLIER EVALUATION ====== */}
      <section className="py-16 bg-wf-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Supplier Evaluation for {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What to look for */}
            <div className="p-6 bg-wf-dark/60 border border-wf-green/20 rounded-xl">
              <h3 className="text-wf-green font-semibold mb-4 flex items-center gap-2">
                <span>✅</span> What to Look For
              </h3>
              <ul className="space-y-3">
                {category.supplierEvaluation.lookFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="text-wf-green mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Red flags */}
            <div className="p-6 bg-wf-dark/60 border border-wf-red/20 rounded-xl">
              <h3 className="text-wf-red font-semibold mb-4 flex items-center gap-2">
                <span>🚩</span> Red Flags
              </h3>
              <ul className="space-y-3">
                {category.supplierEvaluation.redFlags.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="text-wf-red mt-0.5 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-wf-accent/5 border border-wf-accent/20 rounded-xl">
            <p className="text-sm text-slate-300">
              <span className="text-wf-accent font-medium">
                Verification bridge:
              </span>{" "}
              Before any payment, verify the supplier&apos;s business registration
              matches their claimed factory. A legitimate manufacturer will
              provide their 统一社会信用代码 (Unified Social Credit Code) for
              cross-referencing.
            </p>
          </div>
        </div>
      </section>

      {/* ====== SECTION 5: PRICING & PAYMENT ====== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Pricing Structure & Payment
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Protecting your purchase — understanding costs and keeping your money
            safe.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl">
              <h3 className="text-white font-semibold mb-3">
                💰 FOB Price Breakdown
              </h3>
              <p className="text-slate-400 text-sm">
                {category.pricing.fobBreakdown}
              </p>
            </div>

            <div className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl">
              <h3 className="text-white font-semibold mb-3">
                📋 Standard Payment Terms
              </h3>
              <p className="text-slate-400 text-sm">
                {category.pricing.depositSplit}
              </p>
            </div>

            <div className="p-6 bg-wf-red/5 border border-wf-red/20 rounded-xl">
              <h3 className="text-wf-red font-semibold mb-3">⚠️ Price Red Flags</h3>
              <p className="text-slate-400 text-sm">
                {category.pricing.redFlags}
              </p>
            </div>

            <div className="p-6 bg-wf-accent/5 border border-wf-accent/20 rounded-xl">
              <h3 className="text-wf-accent font-semibold mb-3">
                🛡️ Protecting Your Payment
              </h3>
              <p className="text-slate-400 text-sm">
                {category.pricing.worldTradeHook}
              </p>
              <a
                href="https://www.worldfirst.com/worldtrade/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-wf-accent text-sm font-medium hover:underline"
              >
                Learn how WorldTrade escrow works →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 6: LOGISTICS ====== */}
      <section className="py-16 bg-wf-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Logistics for {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl">
              <h3 className="text-white font-semibold mb-3">🚢 Shipping Notes</h3>
              <p className="text-slate-400 text-sm">
                {category.logistics.shippingNotes}
              </p>
            </div>
            <div className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl">
              <h3 className="text-white font-semibold mb-3">
                📦 Container Config
              </h3>
              <p className="text-slate-400 text-sm">
                {category.logistics.containerConfig}
              </p>
            </div>
            <div className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl">
              <h3 className="text-white font-semibold mb-3">📄 Incoterms</h3>
              <p className="text-slate-400 text-sm">
                {category.logistics.incoterms}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 7: RELATED GUIDES ====== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Related Guides
          </h2>
          <div className="flex flex-wrap gap-3">
            {category.relatedCategories.map((slug) => {
              const { name } = getDefaultCategory(slug);
              return (
                <Link
                  key={slug}
                  href={`/categories/${slug}`}
                  className="px-5 py-3 bg-wf-dark/60 border border-wf-border rounded-xl text-slate-300 hover:border-wf-accent hover:text-white transition-colors text-sm font-medium"
                >
                  {name} →
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== SECTION 8: FOOTER CTA ====== */}
      <section className="py-16 bg-wf-dark/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to source {category.name}?
          </h2>
          <p className="text-slate-400 mb-8">
            Get the complete sourcing map with supplier evaluation frameworks,
            pricing benchmarks, and payment safety checklists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#download"
              className="px-8 py-3.5 bg-gradient-to-r from-wf-accent to-wf-teal text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Download the Sourcing Map
            </a>
            <a
              href="https://www.worldfirst.com/worldtrade/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-wf-dark border border-wf-border text-slate-300 font-semibold rounded-xl hover:border-wf-accent hover:text-white transition-colors text-sm"
            >
              Learn about WorldTrade
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
