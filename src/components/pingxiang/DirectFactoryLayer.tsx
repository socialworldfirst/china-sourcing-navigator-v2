import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Hebei Tongxing Children's Vehicle Co.", specialty: "Children's bicycles, balance bikes, training wheel bikes, BMX kids' bikes", since: "2016", initials: "TX", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Xingtai Longcheng Baby Products", specialty: "Baby strollers, prams, travel systems, smart strollers with GPS", since: "2017", initials: "LC", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Pingxiang Ruida Ride-on Toys", specialty: "Electric ride-on cars, battery-powered motorcycles, kids' ATVs", since: "2018", initials: "RD", gradientFrom: "#F97316", gradientTo: "#EA580C" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Pingxiang&apos;s children&apos;s vehicle sector.
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
