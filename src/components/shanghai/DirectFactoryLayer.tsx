import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Shanghai Zhongtai Logistics", specialty: "Class-A freight forwarding, customs brokerage, bonded warehousing", since: "2016", initials: "ZT", gradientFrom: "#0EA5E9", gradientTo: "#0369A1" },
  { companyName: "Joygoal Food Machinery", specialty: "Food processing equipment, filling lines, packaging machinery", since: "2018", initials: "JG", gradientFrom: "#F59E0B", gradientTo: "#D97706" },
  { companyName: "Shanghai Maxsen Machinery", specialty: "Customized conveyor equipment for food, beverage, pharmaceutical", since: "2019", initials: "MS", gradientFrom: "#10B981", gradientTo: "#047857" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Shanghai.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredSuppliers.map((s) => (
          <SupplierCard key={s.companyName} {...s} />
        ))}
      </div>

      {/* Shanghai-specific note about trading companies */}
      <div className="bg-wf-bg-light rounded-xl p-4 mt-6 border border-wf-border/50">
        <p className="text-xs text-wf-text-secondary leading-relaxed">
          <span className="font-medium text-wf-text">Note:</span> Most suppliers registered in Shanghai
          are trading companies or representative offices of manufacturers in Zhejiang and Jiangsu provinces.
          If direct factory access matters, expect to travel 1–2 hours south to Zhejiang or north to Jiangsu.
          Shanghai&apos;s value is as a command centre — aggregating suppliers, coordinating QC, and managing
          logistics across the entire Yangtze River Delta.
        </p>
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
