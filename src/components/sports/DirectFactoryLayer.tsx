import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Xiamen K-Power Sports Co.", specialty: "600+ varieties of fitness equipment \u2014 bikes, ellipticals, treadmills, rowing machines, step machines. 70% export. Major exporter in Fujian.", since: "2005", initials: "KP", gradientFrom: "#10B981", gradientTo: "#059669" },
  { companyName: "Shandong DHZ Fitness Equipment", specialty: "340,000 sqm facility, 500,000 units annually. Commercial treadmills, strength machines, ellipticals. 70%+ exports, 170+ countries.", since: "2004", initials: "DH", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Qingdao Modun Industry & Trade", specialty: "Rubber bumper plates, cast iron plates, hex dumbbells, kettlebells, barbells, benches, power racks. 60 vulcanising machines.", since: "2012", initials: "MD", gradientFrom: "#F97316", gradientTo: "#EA580C" },
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
