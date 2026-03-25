import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Zhengzhou International Shoes City (郑州国际鞋城)", nameCn: "郑州国际鞋城", address: "郑州市二七区京广中路2号", specialty: "~2,500 merchants, 4 billion+ yuan annual transactions. Shoes, boots, sandals — wholesale.", gradient: "market-grad-apparel", bestFor: "Footwear wholesale, bulk shoe orders" },
  { nameEn: "Railway Station Business District (火车站商圈)", nameCn: "火车站商圈", address: "郑州市二七区火车站周边", specialty: "Clothing wholesale concentrated around Zhengzhou Railway Station. Children's clothing, textiles, accessories.", gradient: "market-grad-apparel", bestFor: "Children's clothing, budget fashion, textiles" },
  { nameEn: "Yinhe Wanhuo City (银河万货城)", nameCn: "银河万货城", address: "郑州市南三环路附近", specialty: "Toys, small commodities, household goods wholesale. Functional market serving domestic distribution.", gradient: "market-grad-toys", bestFor: "Toys, household goods, small commodities" },
  { nameEn: "South China International Auto Parts City", nameCn: "华南城国际汽配城", address: "郑州市金水区花园北路与国泰路交叉口西100米", specialty: "Auto parts, maintenance equipment, repair supplies, car accessories.", gradient: "market-grad-electronics", bestFor: "Auto parts, vehicle accessories, repair equipment" },
  { nameEn: "Zhengzhou Grain Wholesale Market (郑州粮食批发市场)", nameCn: "郑州粮食批发市场", address: "郑州市未来路附近", specialty: "Grain, flour, agricultural commodities. Connected to the Zhengzhou Commodity Exchange — one of China's 3 national futures exchanges.", gradient: "market-grad-apparel", bestFor: "Grain sourcing, flour, agricultural commodities" },
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
