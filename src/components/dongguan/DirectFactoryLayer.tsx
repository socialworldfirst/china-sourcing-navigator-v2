import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Changping Precision Mould Co.", specialty: "Plastic injection moulds, die-casting, CNC precision parts", since: "2016", initials: "CP", gradientFrom: "#64748B", gradientTo: "#334155" },
  { companyName: "Tangxia Smartech Electronics", specialty: "PCBA assembly, Bluetooth modules, IoT device manufacturing", since: "2018", initials: "TS", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Houjie Yongsheng Furniture", specialty: "Export furniture, office chairs, bedroom sets, custom woodwork", since: "2015", initials: "YS", gradientFrom: "#F59E0B", gradientTo: "#D97706" },
  { companyName: "Dalang Xinmao Knitwear", specialty: "OEM sweaters, cardigans, knitted accessories", since: "2017", initials: "XM", gradientFrom: "#EC4899", gradientTo: "#DB2777" },
  { companyName: "Chang’an Lida Toy Manufacturing", specialty: "Plastic toys, educational toys, action figures, licensed products", since: "2014", initials: "LD", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Dongguan.
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
