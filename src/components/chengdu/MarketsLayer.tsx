import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Hehuachi Wholesale Market (荷花池批发市场)", nameCn: "荷花池批发市场", address: "成都市金牛区北站东一路28号", specialty: "Largest wholesale market in Southwest China. Clothing, shoes, housewares, textiles, accessories, sporting goods, toys, arts & crafts.", gradient: "market-grad-apparel", bestFor: "General merchandise, clothing, housewares" },
  { nameEn: "Wukuaishi Tea & Spice Market (五块石茶叶市场)", nameCn: "五块石茶叶市场", address: "成都市金牛区蓉北商贸大道一段", specialty: "Tea, spices, dried goods, Sichuan peppercorns, chili products. Primary wholesale source for Sichuan's signature ingredients.", gradient: "market-grad-toys", bestFor: "Tea, spices, Sichuan peppercorns, dried goods" },
  { nameEn: "Kowloon Plaza (九龙广场)", nameCn: "九龙广场", address: "成都市锦江区春熙路附近", specialty: "11-story building near Chunxi Road. Clothing (wholesale + retail), electronics, suitcases, leather goods, food.", gradient: "market-grad-leather", bestFor: "Clothing, electronics, leather goods" },
  { nameEn: "Tianfu Software Park (天府软件园)", nameCn: "天府软件园", address: "成都高新区天府软件园", specialty: "IT/software companies, R&D centres, BPO operations. Not a walk-in retail market — business meetings by appointment only. 600+ companies including 34 Fortune 500 tenants.", gradient: "market-grad-electronics", bestFor: "IT outsourcing partnerships, software development" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayMarkets.map((m) => (
        <MarketCard key={m.nameEn} {...m} />
      ))}
    </div>
  );
}
