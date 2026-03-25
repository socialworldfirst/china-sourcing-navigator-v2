import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Jinjiang International Shoe & Textile City (晋江国际鞋纺城)", nameCn: "晋江国际鞋纺城", address: "晋江市陈埭镇晋新北路888号", specialty: "China's largest professional shoe wholesale market. 1,014 merchants, ¥49.5B turnover (2024), 60% foreign trade. Finished footwear, shoe materials, moulds, machinery.", gradient: "market-grad-apparel", bestFor: "Sports shoes, shoe materials, moulds, OEM footwear" },
  { nameEn: "Shishi Garment City (石狮服装城)", nameCn: "石狮服装城", address: "石狮市石龙路267号", specialty: "600,000 sqm across 8 trading zones. 4,782 shops, 3,200+ merchants. Top 10 garment market in China. Men's suits, casual, swimwear, children's wear.", gradient: "market-grad-apparel", bestFor: "Menswear wholesale, formal and casual" },
  { nameEn: "Qingchuang City International Online Wholesale (青创城)", nameCn: "青创城国际网批中心", address: "石狮市西灵路", specialty: "Online wholesale focus. 1,000+ stalls specialising in menswear for e-commerce sellers. Factory-direct pricing.", gradient: "market-grad-apparel", bestFor: "Online wholesale menswear, e-commerce sellers" },
  { nameEn: "China Menswear City (中国男装城)", nameCn: "中国男装城", address: "石狮市西灵路", specialty: "Formal and casual menswear. 1,000+ stalls. Suits, blazers, trousers, leather jackets, padded jackets.", gradient: "market-grad-apparel", bestFor: "Formal menswear, suits, blazers" },
  { nameEn: "Chendai Shoe Materials Market", nameCn: "陈埭鞋材市场", address: "晋江市陈埭镇", specialty: "Covers 10 building blocks with thousands of producers and vendors. Shoe components: soles, uppers, textiles, synthetic leather, hardware.", gradient: "market-grad-electronics", bestFor: "Shoe components, soles, uppers, raw materials" },
  { nameEn: "South China Children's Clothing Market", nameCn: "南华儿童服装批发市场", address: "石狮市", specialty: "Children's wear wholesale. Connected to Shishi's garment supply chain. Competitive pricing for kids' fashion.", gradient: "market-grad-apparel", bestFor: "Children's clothing wholesale" },
  { nameEn: "China Haosin Food Market (中国豪新食品市场)", nameCn: "中国豪新食品市场", address: "晋江市侨晖路", specialty: "312 acres, 450,000 sqm. Food ingredients, packaging, machinery. Also covers toy and gift packaging materials.", gradient: "market-grad-toys", bestFor: "Food ingredients, packaging, gift materials" },
  { nameEn: "China Grain City (中国粮食城)", nameCn: "中国粮食城", address: "南安市莲湖路64号", specialty: "1,300 acres. Grain and oil products. Nan'an's agricultural trading hub.", gradient: "market-grad-toys", bestFor: "Grain, oil, agricultural products" },
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
