import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Mingyu Lighting Technology", specialty: "LED chandeliers, pendant lights, smart lighting systems", since: "2015", initials: "MY", gradientFrom: "#F59E0B", gradientTo: "#D97706" },
  { companyName: "Hengxin LED Solutions", specialty: "Commercial LED panels, downlights, track lighting", since: "2016", initials: "HX", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Fuyu Hardware Products", specialty: "Door locks, smart locks, architectural hardware", since: "2014", initials: "FY", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Dongfeng Appliance Manufacturing", specialty: "Kitchen appliances, range hoods, small home appliances", since: "2017", initials: "DF", gradientFrom: "#10B981", gradientTo: "#059669" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Zhongshan&apos;s lighting and hardware sectors.
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
