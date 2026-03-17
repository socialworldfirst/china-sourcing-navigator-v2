import Link from "next/link";

interface CityCardProps {
  name: string;
  slug: string;
  region?: string;
  topCategories: string[];
  description: string;
  imageUrl: string;
}

export default function CityCard({
  name,
  slug,
  topCategories,
  imageUrl,
}: CityCardProps) {
  return (
    <Link href={`/cities/${slug}`}>
      <div className="city-card group relative overflow-hidden cursor-pointer rounded-2xl w-full" style={{ aspectRatio: '3/4' }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 group-hover:to-black/85 transition-all duration-300" />

        {/* TOP: Category tags — left aligned */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5">
          {topCategories.map((cat) => (
            <span
              key={cat}
              className="text-[11px] px-2.5 py-0.5 bg-white/20 text-white/90 rounded-full backdrop-blur-sm"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* BOTTOM: City name + CTA on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* City name — shifts up on hover */}
          <h3 className="text-white font-semibold text-xl tracking-wide transform transition-transform duration-300 group-hover:-translate-y-9">
            {name}
          </h3>

          {/* CTA — slides in from below on hover */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-white text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Sourcing guide
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
