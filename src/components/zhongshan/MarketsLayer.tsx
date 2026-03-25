import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Star Alliance Global Brand Lighting Center", nameCn: "星光联盟", address: "中山市古镇镇中兴大道6号", specialty: "Mid-to-high-end lighting. 360,000 m². International pavilion, LED experience halls, curated brand showrooms.", gradient: "market-grad-electronics", bestFor: "Premium lighting, international brands, LED" },
  { nameEn: "Huayi International Lighting Plaza", nameCn: "华艺广场", address: "中山市古镇镇奇景路38号", specialty: "200,000 m² complex with five-star hotel, R&D tech park. Mid-to-high-end lighting brands.", gradient: "market-grad-electronics", bestFor: "R&D partnerships, high-end lighting" },
  { nameEn: "Century Lighting Square", nameCn: "世纪灯饰广场", address: "中山市古镇镇新兴中路56号", specialty: "~200,000 m². Mid-to-high-end lighting products across multiple floors.", gradient: "market-grad-electronics", bestFor: "Mid-range lighting, bulk sourcing" },
  { nameEn: "Times Lighting Plaza", nameCn: "时代灯饰广场", address: "中山市古镇镇新兴中路12号", specialty: "79,000 m² across 25 floors. Floors 1-9 retail showrooms, 10-25 hotel. Entertainment facilities.", gradient: "market-grad-electronics", bestFor: "One-stop sourcing and stay" },
  { nameEn: "Lihe Lighting Expo Center", nameCn: "利和灯博中心", address: "中山市古镇镇", specialty: "Major sub-venue for the Guzhen Lighting Fair. Large exhibition and permanent showroom space.", gradient: "market-grad-electronics", bestFor: "Trade fair visits, bulk orders" },
  { nameEn: "Ruifeng Lighting City", nameCn: "瑞丰灯配城", address: "中山市古镇镇中兴大道与曹兴西路交叉口", specialty: "110,000 m². 1,000+ lighting accessory enterprises. Components focus: LED drivers, cables, parts.", gradient: "market-grad-electronics", bestFor: "Lighting components, LED drivers, parts" },
  { nameEn: "Guzhen Lighting Accessories Plaza", nameCn: "古镇灯饰广场", address: "中山市古镇镇东安北路", specialty: "100,000 m². Full range of lighting accessories and finished fixtures. Hours: 8:00–18:00.", gradient: "market-grad-electronics", bestFor: "Accessories, fixtures, bargain hunting" },
  { nameEn: "Xinxing Street Lighting Strip", nameCn: "新兴大道中", address: "中山市古镇镇新兴大道中", specialty: "7 km long, Guzhen’s original “Lighting Street.” Street-side wholesale showrooms with factory-direct prices.", gradient: "market-grad-electronics", bestFor: "Wholesale pricing, street-level factory shops" },
  { nameEn: "Kaiyuan Wholesale City", nameCn: "开元批发城", address: "中山市古镇镇", specialty: "Major supplier hub for lighting components and finished goods. Budget-friendly wholesale.", gradient: "market-grad-electronics", bestFor: "Budget lighting, components wholesale" },
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
