import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Sailun Qingdao Tire Technology", specialty: "PCR, TBR, OTR tires, rubber compounds, conveyor belts", since: "2015", initials: "SL", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Dinghai Hengtong Beauty Products", specialty: "False eyelashes, eyelash extensions, OEM/ODM beauty products", since: "2017", initials: "DH", gradientFrom: "#EC4899", gradientTo: "#DB2777" },
  { companyName: "Jimo Rongsheng Textile", specialty: "Knitwear, children's clothing, Korean-style women's fashion", since: "2016", initials: "RS", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Qingdao Haiwan Marine Equipment", specialty: "Marine components, port equipment, offshore engineering parts", since: "2014", initials: "HW", gradientFrom: "#0EA5E9", gradientTo: "#0284C7" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance across Qingdao&apos;s tire, beauty, textile, and marine sectors.
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
