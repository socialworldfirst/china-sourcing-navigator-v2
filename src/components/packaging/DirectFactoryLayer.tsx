import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Jinghong Packing Co.", specialty: "Gift boxes, paper bags, custom retail packaging, ribbon boxes", since: "2015", initials: "JH", gradientFrom: "#F97316", gradientTo: "#EA580C" },
  { companyName: "Huada Packing & Printing", specialty: "Craft paper bags, shopping bags, gift bags, eco-friendly packaging", since: "2012", initials: "HD", gradientFrom: "#10B981", gradientTo: "#059669" },
  { companyName: "Mingyi Printing Co.", specialty: "Magnetic packaging boxes, custom cartons, luxury rigid boxes", since: "2002", initials: "MY", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Canfei Packing Factory", specialty: "Paper bags, gift boxes, jewellery boxes, labels, hang tags", since: "2013", initials: "CF", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Xushang Packaging & Printing", specialty: "Gift boxes, packaging bags, custom festive and seasonal packaging", since: "2016", initials: "XS", gradientFrom: "#EC4899", gradientTo: "#DB2777" },
  { companyName: "HengRun Packaging Co.", specialty: "Flexible packaging, stand-up pouches, lidding films, vacuum bags", since: "2010", initials: "HR", gradientFrom: "#0EA5E9", gradientTo: "#0284C7" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in packaging manufacturing.
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
