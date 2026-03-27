import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Ningbo DUFFIN Co., Ltd", specialty: "22+ years. Camping tents, sleeping bags, camping furniture, camping kitchens, accessories. Exports to EU, US, Canada, Australia, Japan, Korea.", since: "2002", initials: "DF", gradientFrom: "#10B981", gradientTo: "#059669" },
  { companyName: "Ningbo Pinyi Outdoor Technology", specialty: "Camping furniture, trekking poles, tents, lanterns, chairs, tables, outdoor kitchens. One of China\u2019s most professional outdoor product manufacturers.", since: "2007", initials: "PY", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Foshan Hongkai Furniture Co.", specialty: "21 years of outdoor furniture expertise. Rattan, aluminium, and rope-woven patio sets. Exports to 100+ countries.", since: "2003", initials: "HK", gradientFrom: "#F97316", gradientTo: "#EA580C" },
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
