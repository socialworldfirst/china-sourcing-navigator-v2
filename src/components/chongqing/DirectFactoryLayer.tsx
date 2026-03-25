import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Longhui Motorcycle Parts", specialty: "Motorcycle engines, frames, accessories, aftermarket parts", since: "2015", initials: "LH", gradientFrom: "#F97316", gradientTo: "#EA580C" },
  { companyName: "Jiangbei Auto Components", specialty: "Automotive parts, transmission components, chassis systems", since: "2016", initials: "JB", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Yuzhong Food Technology", specialty: "Hotpot bases, Sichuan seasonings, chilli oils, condiments", since: "2018", initials: "YZ", gradientFrom: "#EF4444", gradientTo: "#DC2626" },
  { companyName: "Shapingba Computing Peripherals", specialty: "Laptop accessories, keyboards, mice, cooling solutions", since: "2017", initials: "SP", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Chongqing&apos;s automotive, motorcycle, and food processing sectors.
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
