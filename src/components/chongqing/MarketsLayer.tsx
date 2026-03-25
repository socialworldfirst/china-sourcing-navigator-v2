import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Chaotianmen Wholesale Market (朝天门批发市场)", nameCn: "朝天门批发市场", address: "重庆市渝中区陕西路/草街子巷交叉口东北80米", specialty: "370,000 sqm, 26 trading zones, 15,000+ stalls. Opened 1991. Clothing, footwear, hats, daily chemicals, accessories, bags.", gradient: "market-grad-apparel", bestFor: "Clothing, footwear, accessories, general merchandise" },
  { nameEn: "Panxi Wholesale Market (盘溪批发市场)", nameCn: "盘溪批发市场", address: "重庆市江北区盘溪", specialty: "3 floors of spices, dried chilies, Sichuan peppercorns, dried goods. Essential for hotpot and food ingredient sourcing.", gradient: "market-grad-apparel", bestFor: "Spices, dried chilies, Sichuan peppercorns, hotpot ingredients" },
  { nameEn: "New Chongqing International Small Commodity Center", nameCn: "新重庆国际小商品批发中心", address: "重庆市渝北区", specialty: "Large, organised wholesale complex for household items, daily necessities, and small commodities.", gradient: "market-grad-toys", bestFor: "Household items, daily necessities, small commodities" },
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
