import SupplierCard from "@/components/SupplierCard";

const featuredSuppliers = [
  { companyName: "Kangju Optical Technology", specialty: "Prescription lenses, progressive multifocals, anti-blue-light coatings", since: "2016", initials: "KJ", gradientFrom: "#3B82F6", gradientTo: "#1D4ED8" },
  { companyName: "Mingyang Optical Lens Co.", specialty: "Resin lenses, photochromic lenses, polarised sunglasses lenses", since: "2015", initials: "MY", gradientFrom: "#8B5CF6", gradientTo: "#6D28D9" },
  { companyName: "Huaguang Frames Manufacturing", specialty: "Metal frames, titanium frames, acetate frames, TR90 frames", since: "2018", initials: "HG", gradientFrom: "#0EA5E9", gradientTo: "#0284C7" },
];

export default function DirectFactoryLayer() {
  return (
    <div>
      <p className="hidden md:block text-sm text-wf-text-secondary mb-5 max-w-2xl">
        These suppliers have been verified through WorldFirst&apos;s beneficiary check programme
        and maintain consistent trading performance in Danyang&apos;s eyewear and optical sectors.
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
