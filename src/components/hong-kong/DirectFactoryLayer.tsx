import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Asia Pacific Trading Solutions", specialty: "Sourcing orchestration, vendor management, supply chain coordination", since: "2015", initials: "AP", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Pearl River QC Services", specialty: "Factory audits, product inspection, social compliance verification", since: "2016", initials: "PR", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Golden Harbour Jewelry Trading", specialty: "Fine jewelry sourcing, gemstone wholesale, watch components", since: "2013", initials: "GH", gradientFrom: "#F97316", gradientTo: "#EA580C" },
  { companyName: "HK Trade Finance Advisory", specialty: "Letter of credit structuring, trade finance consulting, FX solutions", since: "2017", initials: "TF", gradientFrom: "#10B981", gradientTo: "#059669" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These partners have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Hong Kong&apos;s trade services sector.
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
          Find more verified partners
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  );
}
