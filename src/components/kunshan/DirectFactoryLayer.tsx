import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Wus Printed Circuit (Kunshan)", specialty: "PCB, optical-electrical PCB for AI systems, multi-layer boards", since: "2014", initials: "WS", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Kunshan Yangyu Precision Components", specialty: "Antenna shrapnel, connectors, precision metal parts (±1μm)", since: "2015", initials: "YY", gradientFrom: "#0EA5E9", gradientTo: "#0284C7" },
  { companyName: "Kersen Science & Technology", specialty: "Precision metal/plastic components for electronics, automotive, industrial", since: "2016", initials: "KS", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "SuperMix Printing Technology", specialty: "Colour boxes, display packaging, sustainable packaging solutions", since: "2017", initials: "SM", gradientFrom: "#10B981", gradientTo: "#059669" },
  { companyName: "InfoVision Optoelectronics", specialty: "TFT-LCD displays, privacy anti-peek panels, automotive panels", since: "2013", initials: "IV", gradientFrom: "#F97316", gradientTo: "#EA580C" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Kunshan&apos;s electronics and precision manufacturing sectors.
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
