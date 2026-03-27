import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Shenzhen Mindray Bio-Medical", specialty: "Patient monitors, ultrasound, IVD analysers, defibrillators", since: "2011", initials: "MY", gradientFrom: "#0EA5E9", gradientTo: "#0284C7" },
  { companyName: "Jiangsu Yuwell Medical Equipment", specialty: "Oxygen concentrators, nebulisers, blood pressure monitors, wheelchairs", since: "2014", initials: "YW", gradientFrom: "#10B981", gradientTo: "#059669" },
  { companyName: "Contec Medical Systems", specialty: "Pulse oximeters, ECG machines, patient monitors, ultrasound scanners", since: "2013", initials: "CT", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Foshan Toye Dental Equipment", specialty: "Dental chairs, dental units, oral cameras, sterilisation equipment", since: "2015", initials: "TY", gradientFrom: "#F97316", gradientTo: "#EA580C" },
  { companyName: "Ningbo Jumbo Medical Instruments", specialty: "IV cannulas, oxygen masks, catheters, disposable medical supplies", since: "2012", initials: "JM", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Dongsheng Rehabilitation Technology", specialty: "Electric wheelchairs, walking aids, rehabilitation training equipment", since: "2016", initials: "DS", gradientFrom: "#A855F7", gradientTo: "#7C3AED" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in health and medical manufacturing.
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
