import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  topCities: string[];
}

export default function CategoryCard({
  name,
  slug,
  topCities,
}: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="group flex items-center justify-between bg-white border border-wf-border rounded-xl px-3 py-2.5 md:px-5 md:py-4 hover:border-wf-red/30 hover:shadow-sm transition-all duration-200 cursor-pointer min-h-[52px] md:min-h-0">
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-wf-text font-medium text-xs md:text-[15px] group-hover:text-wf-red transition-colors line-clamp-1 leading-tight">
            {name}
          </span>
          {topCities && topCities.length > 0 && (
            <span className="text-wf-text-muted text-[10px] md:text-xs truncate">
              {topCities.slice(0, 2).join(", ")}
            </span>
          )}
        </div>
        <svg
          className="text-wf-text-muted group-hover:text-wf-red group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-1"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
