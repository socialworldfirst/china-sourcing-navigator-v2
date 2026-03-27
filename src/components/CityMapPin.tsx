export default function CityMapPin({ city, className }: { city: string; className?: string }) {
  return (
    <div className={`bg-gray-100 rounded-xl flex items-center justify-center ${className || ""}`}>
      <span className="text-sm text-wf-text-muted">{city}</span>
    </div>
  );
}
