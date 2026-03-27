import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Ningbo Fastenwell Metal Technology", specialty: "High-quality hex bolts, structural bolts, custom fasteners. Ningbo-based, exports to 50+ countries.", since: "2006", initials: "FW", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Yongkang Runtai Tools Co.", specialty: "Electric tools and lithium battery tools. 8,000 sqm facility, 100,000 units/month output. 20 years in production.", since: "2005", initials: "RT", gradientFrom: "#F97316", gradientTo: "#EA580C" },
  { companyName: "Qingdao Xinhua Hardware Product Co.", specialty: "Standard and non-standard fasteners \u2014 bolts, nuts, screws, washers. 3,000+ tonnes annual output, 100+ machines. Est. 1987.", since: "1987", initials: "XH", gradientFrom: "#10B981", gradientTo: "#059669" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="text-sm text-wf-text-secondary mb-5 max-w-2xl hidden md:block">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredSuppliers.map((s) => (
          <SupplierCard key={s.companyName} {...s} />
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://www.worldfirst.com/uk/register/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill inline-flex items-center gap-2 px-6 py-2.5 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
        >
          Find more verified suppliers
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  );
}
