import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Sijiqing Clothing Market (四季青)", nameCn: "四季青服装市场", address: "杭州市江干区杭海路29-59号", specialty: "China's \"Garment First Street.\" 15,000 vendors, 1,200 manufacturers across 20+ buildings on a 1.6 km street. Women's wear dominant, 80%+ wholesale.", gradient: "market-grad-apparel", bestFor: "Women's fashion, fast-rotating styles, wholesale volume" },
  { nameEn: "Chinese Silk City (中国丝绸城)", nameCn: "中国丝绸城", address: "杭州市拱墅区新华路253号", specialty: "China's largest silk wholesale and retail market. 600+ enterprises. Pure silk fabrics, garments, scarves, ties, home textiles.", gradient: "market-grad-textiles", bestFor: "Silk fabrics, scarves, silk garments, home textiles" },
  { nameEn: "Huanbei Silk & Clothing City (环北丝绸服装城)", nameCn: "环北丝绸服装城", address: "杭州市下城区凤起路273号", specialty: "100,000 sqm across 11 floors. Floors 5-6 dedicated to silk products. Strong value for money on silk scarves, camisoles, and sleepwear.", gradient: "market-grad-textiles", bestFor: "Bulk silk buying, silk sleepwear, value sourcing" },
  { nameEn: "Old Yifa Market (老意法)", nameCn: "老意法服饰城", address: "杭州市江干区杭海路四季青内", specialty: "Top-tier first-batch (一批) market within Sijiqing. Factory-direct showrooms, highest foot traffic, fastest-rotating styles.", gradient: "market-grad-apparel", bestFor: "Factory-direct fashion, first-batch wholesale pricing" },
  { nameEn: "Changqing Market (常青)", nameCn: "常青服装市场", address: "杭州市江干区杭海路四季青内", specialty: "Internet-famous trending styles. Single-piece pickup available. Korean and European casual aesthetics.", gradient: "market-grad-apparel", bestFor: "Trending styles, small-batch e-commerce sellers" },
  { nameEn: "Nine Stars Clothes Market (九星服装市场)", nameCn: "九星服装市场", address: "杭州市江干区杭海路18号", specialty: "Designer labels and fashion at near-factory prices. Part of the greater Sijiqing ecosystem.", gradient: "market-grad-apparel", bestFor: "Designer-style fashion, near-factory pricing" },
  { nameEn: "Hangzhou Digital City (杭州数码城)", nameCn: "杭州数码城", address: "杭州市文三路数码城", specialty: "Electronics and digital product wholesale centre. Components, consumer electronics, phone accessories.", gradient: "market-grad-electronics", bestFor: "Electronics components, digital accessories" },
  { nameEn: "Angier Small Commodities Market", nameCn: "安琪儿小商品市场", address: "杭州市下城区艮山西路168号", specialty: "General small commodities wholesale. Household goods, accessories, daily necessities.", gradient: "market-grad-toys", bestFor: "Household goods, small commodities, accessories" },
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
