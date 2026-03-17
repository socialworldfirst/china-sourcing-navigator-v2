import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export function generateStaticParams() {
  return [
    // guangzhou has its own dedicated page at cities/guangzhou/page.tsx
    { city: "shenzhen" },
    { city: "dongguan" },
    { city: "foshan" },
    { city: "zhongshan" },
    { city: "yiwu" },
    { city: "ningbo" },
  ];
}

// City data store
const cityData: Record<
  string,
  {
    name: string;
    heroEmoji: string;
    population: string;
    topCategories: string[];
    cantonFairDistance: string;
    description: string;
    whatItMakes: {
      category: string;
      detail: string;
      slug: string;
    }[];
    districts: {
      name: string;
      specialisation: string;
      howToGet: string;
    }[];
    findingSuppliers: {
      method: string;
      detail: string;
    }[];
    travel: {
      gettingThere: string;
      seasonalNotes: string;
      cantonFairNote?: string;
    };
    paymentInsights: {
      depositNorms: string;
      riskNote: string;
      worldTradeHook: string;
    };
    relatedCities: string[];
    isGuangdong: boolean;
  }
> = {
  guangzhou: {
    name: "Guangzhou",
    heroEmoji: "🏙️",
    population: "18.7 million",
    topCategories: ["Electronics", "Apparel", "Beauty", "Home & Kitchen"],
    cantonFairDistance: "Host city",
    description:
      "South China's trade capital and the host city of Canton Fair. Guangzhou is the gateway to the entire Guangdong manufacturing belt — home to the world's densest cluster of wholesale markets and the starting point for most importers going off-platform.",
    whatItMakes: [
      {
        category: "Electronics & Components",
        detail:
          "Consumer electronics, PCB assembly, and electronic components concentrated in Tianhe and Panyu districts.",
        slug: "electronics",
      },
      {
        category: "Apparel & Textiles",
        detail:
          "Fast fashion, knitwear, and fabric sourcing centred around the Zhongda Fabric Market and Shahe wholesale district.",
        slug: "apparel",
      },
      {
        category: "Beauty & Cosmetics",
        detail:
          "OEM cosmetics manufacturing hub — Baiyun district hosts 2,000+ beauty factories and is China's cosmetics capital.",
        slug: "beauty",
      },
      {
        category: "Home & Kitchen",
        detail:
          "Kitchen appliances, cookware, and home accessories from factories in Panyu and Nansha.",
        slug: "home-kitchen",
      },
    ],
    districts: [
      {
        name: "Baiyun District — Beauty & Cosmetics",
        specialisation:
          "China's largest OEM cosmetics cluster. 2,000+ factories producing skincare, colour cosmetics, and personal care. Walk the industrial parks to compare MOQs in person.",
        howToGet:
          "Metro Line 2 to Baiyun Park, then taxi to Juntai Industrial Zone. 40 min from city centre.",
      },
      {
        name: "Zhongda Fabric Market — Textiles",
        specialisation:
          "Asia's largest fabric wholesale market. 5 interconnected buildings with 10,000+ stalls selling fabric, trims, buttons, and zippers. You can source, cut, and sew within a 2km radius.",
        howToGet:
          "Metro Line 8 to Zhongda station. Exit B, you're inside the market.",
      },
      {
        name: "Panyu District — Electronics & Home",
        specialisation:
          "Consumer electronics assembly, kitchen appliances, and jewellery manufacturing. Less tourist-oriented than Shenzhen — more serious factories, fewer showrooms.",
        howToGet:
          "Metro Line 3 to Panyu Square, then taxi to specific industrial zones. 50 min from Canton Fair complex.",
      },
      {
        name: "Shahe Wholesale District — Fast Fashion",
        specialisation:
          "China's largest ready-made garment wholesale market. Dawn starts (3-4am for wholesale buyers). Copy-to-shelf in 7 days. 2,000+ wholesalers in a 500m radius.",
        howToGet:
          "Metro Line 6 to Shahe station. Walk 5 minutes south.",
      },
      {
        name: "Liwan District — Traditional Trade",
        specialisation:
          "Traditional wholesale markets: dried goods, Chinese medicine, jade, and tea. Qingping Market and Hualin Jade Street are landmarks.",
        howToGet:
          "Metro Line 1 to Changshou Lu. Exit D.",
      },
    ],
    findingSuppliers: [
      {
        method: "Canton Fair (China Import & Export Fair)",
        detail:
          "The world's largest trade fair, held in spring (April) and autumn (October) in Guangzhou. 60,000+ exhibitors. Phase 1 covers electronics, machinery, and lighting. Phase 2 covers consumer goods, home décor, and gifts. Phase 3 covers textiles, apparel, and food. Book your badge early — Phase 1 sells out.",
      },
      {
        method: "Walk the wholesale markets",
        detail:
          "Guangzhou's markets aren't on Alibaba. Zhongda (fabric), Shahe (garments), Baiyun (cosmetics), and the Guangzhou International Sourcing Centre give you direct factory contact that platform sourcing can't match.",
      },
      {
        method: "1688 supplier cross-reference",
        detail:
          "Many Guangzhou factories list on 1688. Use the platform to shortlist, then visit in person. The gap between 1688 prices and direct-visit prices is smaller in Guangzhou than other cities — competition keeps margins tight.",
      },
      {
        method: "Industry-specific exhibitions",
        detail:
          "Beyond Canton Fair: Guangzhou International Lighting Exhibition, China Beauty Expo, and CIFF (furniture fair) all happen in Guangzhou and bring factories you won't find at Canton Fair.",
      },
    ],
    travel: {
      gettingThere:
        "Fly into Guangzhou Baiyun International Airport (CAN). Direct flights from most Asian capitals, Dubai, London, LA, and Sydney. High-speed rail connects to Shenzhen (30 min), Dongguan (40 min), Foshan (20 min), and Hong Kong (50 min).",
      seasonalNotes:
        "Peak season: April (Canton Fair Phase 1) and October (Phase 2). Hotels near Pazhou Exhibition Centre triple in price during fair weeks — book 2-3 months ahead. Summer (June-August) is hot and humid but factory visits are easier with less buyer traffic.",
      cantonFairNote:
        "As the host city, Guangzhou is ground zero for Canton Fair. The Pazhou Complex is in Haizhu district, accessible via Metro Line 8. Most suppliers within the Guangdong Belt can be visited as day trips from Guangzhou.",
    },
    paymentInsights: {
      depositNorms:
        "Standard terms: 30% deposit via T/T before production, 70% balance before shipment against B/L copy. Some Guangzhou suppliers accept 50/50 splits for first orders. For Canton Fair contacts, expect tighter terms (higher deposits) because they know you're a new buyer flying home soon.",
      riskNote:
        "Guangzhou's wholesale markets move fast, and so do scams. Trading companies posing as factories are common around Shahe and Zhongda. Verify the business registration number (统一社会信用代码) before any deposit. If a supplier can't produce a valid registration, walk away.",
      worldTradeHook:
        "WorldTrade holds your deposit in escrow until the supplier confirms production and shipment. Your money doesn't move until the goods do. For first-time factory orders from Canton Fair contacts, this is the difference between a confident deposit and a nervous wire transfer.",
    },
    relatedCities: ["shenzhen", "dongguan", "foshan", "zhongshan"],
    isGuangdong: true,
  },
};

// Fallback for cities without full data
function getDefaultCity(slug: string) {
  const cityNames: Record<string, string> = {
    shenzhen: "Shenzhen",
    dongguan: "Dongguan",
    foshan: "Foshan",
    zhongshan: "Zhongshan",
    yiwu: "Yiwu",
    ningbo: "Ningbo",
  };
  return {
    name: cityNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1),
    slug,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = cityData[citySlug];

  // If no full data yet, show a placeholder
  if (!city) {
    const { name } = getDefaultCity(citySlug);
    return (
      <main className="min-h-screen bg-wf-navy">
        <Header />
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {name} Sourcing Guide
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              This guide is coming soon. We&apos;re mapping every manufacturing
              district, key supplier cluster, and sourcing tip for {name}.
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
            <span className="text-slate-400">Cities</span>
            <span>›</span>
            <span className="text-white">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* ====== SECTION 1: CITY HERO ====== */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{city.heroEmoji}</span>
                {city.isGuangdong && (
                  <span className="text-xs px-3 py-1 bg-wf-accent/10 text-wf-accent rounded-full border border-wf-accent/20">
                    Guangdong Manufacturing Belt
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Sourcing from {city.name}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                {city.description}
              </p>
            </div>

            {/* Stats bar */}
            <div className="flex flex-row md:flex-col gap-4 md:gap-3">
              {[
                { label: "Population", value: city.population },
                { label: "Canton Fair", value: city.cantonFairDistance },
                {
                  label: "Top categories",
                  value: city.topCategories.length.toString(),
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-5 py-3 bg-wf-dark/60 border border-wf-border rounded-xl text-center min-w-[120px]"
                >
                  <div className="text-white font-bold text-lg">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: WHAT CITY MAKES ====== */}
      <section className="py-16 bg-wf-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            What {city.name} Makes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.whatItMakes.map((item) => (
              <Link
                key={item.slug}
                href={`/categories/${item.slug}`}
              >
                <div className="card-hover group p-6 bg-wf-dark/60 border border-wf-border rounded-xl h-full">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-wf-accent transition-colors">
                    {item.category}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.detail}</p>
                  <span className="inline-block mt-3 text-wf-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View category guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: KEY MANUFACTURING DISTRICTS ====== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Key Manufacturing Districts & Markets
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            This is the off-platform advantage. You won&apos;t find these districts
            on Alibaba — you need to walk them.
          </p>
          <div className="space-y-4">
            {city.districts.map((district) => (
              <div
                key={district.name}
                className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {district.name}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  {district.specialisation}
                </p>
                <div className="flex items-start gap-2 text-xs text-wf-accent">
                  <span>📍</span>
                  <span>{district.howToGet}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: HOW TO FIND SUPPLIERS ====== */}
      <section className="py-16 bg-wf-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            How to Find Suppliers in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.findingSuppliers.map((method) => (
              <div
                key={method.method}
                className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl"
              >
                <h3 className="text-white font-semibold mb-2">
                  {method.method}
                </h3>
                <p className="text-slate-400 text-sm">{method.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-wf-accent/5 border border-wf-accent/20 rounded-xl">
            <p className="text-sm text-slate-300">
              <span className="text-wf-accent font-medium">Pro tip:</span>{" "}
              Always verify the supplier&apos;s business registration before you pay.
              A legitimate factory will have a valid 统一社会信用代码 (Unified Social
              Credit Code) matching their company name and registered address.
            </p>
          </div>
        </div>
      </section>

      {/* ====== SECTION 5: GETTING THERE ====== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Getting There & Getting Around
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl">
              <h3 className="text-white font-semibold mb-3">✈️ Getting There</h3>
              <p className="text-slate-400 text-sm">{city.travel.gettingThere}</p>
            </div>
            <div className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl">
              <h3 className="text-white font-semibold mb-3">📅 When to Go</h3>
              <p className="text-slate-400 text-sm">{city.travel.seasonalNotes}</p>
            </div>
          </div>
          {city.travel.cantonFairNote && (
            <div className="mt-6 p-6 bg-wf-orange/5 border border-wf-orange/20 rounded-xl">
              <h3 className="text-wf-orange font-semibold mb-2">
                🏛️ Canton Fair Connection
              </h3>
              <p className="text-slate-400 text-sm">
                {city.travel.cantonFairNote}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ====== SECTION 6: PAYMENT & WORKING WITH SUPPLIERS ====== */}
      <section className="py-16 bg-wf-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Payment & Working with {city.name} Suppliers
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Protecting your purchase — what every importer needs to know before
            sending money.
          </p>

          <div className="space-y-6">
            {/* Deposit norms */}
            <div className="p-6 bg-wf-dark/60 border border-wf-border rounded-xl">
              <h3 className="text-white font-semibold mb-3">
                💰 Deposit & Payment Norms
              </h3>
              <p className="text-slate-400 text-sm">
                {city.paymentInsights.depositNorms}
              </p>
            </div>

            {/* Risk warning */}
            <div className="p-6 bg-wf-red/5 border border-wf-red/20 rounded-xl">
              <h3 className="text-wf-red font-semibold mb-3">
                ⚠️ Risk Awareness
              </h3>
              <p className="text-slate-400 text-sm">
                {city.paymentInsights.riskNote}
              </p>
            </div>

            {/* WorldTrade — earned position */}
            <div className="p-6 bg-wf-accent/5 border border-wf-accent/20 rounded-xl">
              <h3 className="text-wf-accent font-semibold mb-3">
                🛡️ Protecting Your Deposit
              </h3>
              <p className="text-slate-400 text-sm">
                {city.paymentInsights.worldTradeHook}
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

      {/* ====== SECTION 7: RELATED GUIDES ====== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Related Guides
          </h2>

          {/* Related cities */}
          {city.relatedCities.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">
                {city.isGuangdong
                  ? "Nearby Manufacturing Cities"
                  : "Other Key Cities"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {city.relatedCities.map((slug) => {
                  const { name } = getDefaultCity(slug);
                  return (
                    <Link
                      key={slug}
                      href={`/cities/${slug}`}
                      className="px-5 py-3 bg-wf-dark/60 border border-wf-border rounded-xl text-slate-300 hover:border-wf-accent hover:text-white transition-colors text-sm font-medium"
                    >
                      {name} →
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Category Guides for {city.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {city.topCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${cat
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="px-5 py-3 bg-wf-dark/60 border border-wf-border rounded-xl text-slate-300 hover:border-wf-accent hover:text-white transition-colors text-sm font-medium"
                >
                  {cat} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 8: FOOTER CTA ====== */}
      <section className="py-16 bg-wf-dark/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to source from {city.name}?
          </h2>
          <p className="text-slate-400 mb-8">
            Get the complete sourcing map with district details, supplier
            evaluation checklists, and payment safety guides.
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
