import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Ningbo Future Houseware Co., Ltd", specialty: "Kitchen & bath products, storage solutions, housewares (US$300M+ annual revenue)", since: "2014", initials: "FH", gradientFrom: "#F97316", gradientTo: "#EA580C" },
  { companyName: "Ningbo Better Kitchenware Co., Ltd", specialty: "Non-stick cookware, frying pans, bakeware (Sanbei Industrial Zone)", since: "2016", initials: "BK", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Ningbo Yinzhou Rilong Hardware Tools", specialty: "Locking pliers, hex key sets, wire strippers, hand tools", since: "2018", initials: "RL", gradientFrom: "#6366F1", gradientTo: "#4F46E5" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in the Ningbo region.
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
