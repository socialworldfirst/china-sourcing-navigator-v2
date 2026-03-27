import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Yiwu Shenghui Jewelry", specialty: "Fashion jewelry wholesale, necklaces, earrings, bracelets, hair accessories", since: "2015", initials: "SH", gradientFrom: "#EC4899", gradientTo: "#BE185D" },
  { companyName: "Panyu Jiuzuan Jewelry Factory", specialty: "Fine jewelry processing, diamonds, gold, gemstone OEM/ODM", since: "2012", initials: "JZ", gradientFrom: "#F59E0B", gradientTo: "#D97706" },
  { companyName: "Dongguan HonHo Jewelry", specialty: "Stainless steel jewelry, earrings, necklaces, PVD plating", since: "2016", initials: "HH", gradientFrom: "#6366F1", gradientTo: "#4338CA" },
  { companyName: "Shijin Watch Manufacturing", specialty: "OEM/ODM watches, quartz and mechanical, custom dials", since: "1996", initials: "SJ", gradientFrom: "#0EA5E9", gradientTo: "#0284C7" },
  { companyName: "Halife Jewelry Group", specialty: "Cross-city production, fashion and fine jewelry, 700K pcs/month capacity", since: "2010", initials: "HL", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Guangzhou Kathaina Jewelry", specialty: "Panyu-based fine jewelry, custom design, precious metals and gemstones", since: "2014", initials: "KT", gradientFrom: "#10B981", gradientTo: "#059669" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in jewelry and accessories manufacturing.
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
