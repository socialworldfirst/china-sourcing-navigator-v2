import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Longjiang Solid Wood Furniture Co.", specialty: "Solid wood dining tables, bedroom sets, custom hotel furniture", since: "2016", initials: "LJ", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Dongpeng Ceramics Trading", specialty: "Porcelain tiles, large-format slabs, exterior cladding", since: "2018", initials: "DP", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Nanhai Aluminium Profiles Manufacturing", specialty: "Aluminium extrusions, curtain walls, doors and window systems", since: "2015", initials: "NA", gradientFrom: "#6366F1", gradientTo: "#4338CA" },
  { companyName: "Shunde Kitchen & Bath Equipment", specialty: "Sanitary ware, faucets, shower enclosures, kitchen fittings", since: "2019", initials: "SK", gradientFrom: "#EC4899", gradientTo: "#DB2777" },
  { companyName: "Danzao LED Lighting Technology", specialty: "LED panels, commercial downlights, architectural lighting fixtures", since: "2017", initials: "DZ", gradientFrom: "#F59E0B", gradientTo: "#D97706" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Foshan.
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
