import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Hegumiao Town Industrial Zone (河古庙镇工业区)", nameCn: "河古庙镇工业区", address: "河北省邢台市平乡县河古庙镇工业区", specialty: "Primary manufacturing hub. Highest concentration of children's vehicle factories in Pingxiang. Bicycle assembly, stroller production, ride-on toy manufacturing.", gradient: "market-grad-electronics", bestFor: "Factory visits, bulk sourcing, OEM/ODM production" },
  { nameEn: "Ximiao Village Factory Cluster (西庙村工厂集群)", nameCn: "河古庙镇西庙村", address: "河北省邢台市平乡县河古庙镇西庙村", specialty: "Dense factory cluster within Hegumiao township. Multiple small-to-medium factories specialising in children's bicycles and components.", gradient: "market-grad-electronics", bestFor: "Smaller factories, component sourcing, competitive pricing" },
  { nameEn: "Pingxiang County Industrial Area (平乡县工业区)", nameCn: "平乡县工业区", address: "河北省邢台市平乡县城关区", specialty: "Wider county-level manufacturing zone. Mix of larger export-oriented factories and component suppliers. Some have showroom facilities.", gradient: "market-grad-electronics", bestFor: "Larger export factories, showroom visits, quality-certified production" },
  { nameEn: "Pingxiang Children's Vehicle Exhibition Center (平乡童车展览中心)", nameCn: "平乡童车展览中心", address: "平乡县城区 (搜索 平乡童车展览中心 导航)", specialty: "Showroom and exhibition center for the county's products. Product displays, sample viewing, and trade fair venue.", gradient: "market-grad-electronics", bestFor: "Product comparison, sample viewing, trade fair attendance" },
];

export default function MarketsLayer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {markets.map((m) => (
        <MarketCard key={m.nameEn} {...m} />
      ))}
    </div>
  );
}
