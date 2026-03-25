import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Hengrui Electronics Technology", specialty: "Smartphone accessories, phone cases, screen protectors, packaging", since: "2017", initials: "HR", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Yutong Parts & Components", specialty: "Bus components, commercial vehicle parts, aftermarket accessories", since: "2015", initials: "YT", gradientFrom: "#10B981", gradientTo: "#059669" },
  { companyName: "Sanhe Food Processing", specialty: "Frozen dumplings, flour products, instant noodles, snack foods", since: "2018", initials: "SH", gradientFrom: "#F97316", gradientTo: "#EA580C" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Zhengzhou&apos;s electronics, logistics, and food processing sectors.
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
