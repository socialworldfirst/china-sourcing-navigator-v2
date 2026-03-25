import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Hangzhou Wensli Silk Co.", specialty: "Premium silk scarves, fabrics, garments, home textiles", since: "2016", initials: "WS", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Zhejiang Supor Housewares", specialty: "Small kitchen appliances, cookware, pressure cookers", since: "2018", initials: "SP", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Hangzhou EZVIZ Smart Home", specialty: "Smart cameras, doorbells, sensors, home automation", since: "2020", initials: "EZ", gradientFrom: "#10B981", gradientTo: "#059669" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Hangzhou.
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
