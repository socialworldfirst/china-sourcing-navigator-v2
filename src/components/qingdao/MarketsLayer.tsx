import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Jimo Clothing Wholesale Market (即墨服装批发市场)", nameCn: "即墨服装批发市场", address: "青岛市即墨区鹤山路920号", specialty: "354 mu, 365,000 sqm, 9,000+ shops, 8,000+ merchants. China's Famous Knitting City. Knitwear, children's wear, Korean-style women's fashion.", gradient: "market-grad-apparel", bestFor: "Knitwear, children's clothing, Korean fashion" },
  { nameEn: "Qingdao International Jewellery City (中韩国际小商品城)", nameCn: "青岛国际珠宝城", address: "青岛市城阳区", specialty: "Jewelry, brooches, pearl necklaces, casting materials, gemstones. Korean influence in design and sourcing.", gradient: "market-grad-jewelry", bestFor: "Jewelry, pearls, gemstones" },
  { nameEn: "Qingdao Yiwu Smallware Market (青岛义乌小商品批发市场)", nameCn: "青岛义乌小商品批发市场", address: "青岛市城阳区黑龙江中路702号", specialty: "Small commodities, daily necessities. Budget-friendly wholesale for mixed containers.", gradient: "market-grad-toys", bestFor: "Small commodities, daily necessities" },
  { nameEn: "Liuting International Commodity City (流亭国际商品城)", nameCn: "青岛流亭国际商品城", address: "青岛市城阳区", specialty: "Fresh produce, seafood, organic food. Sourcing hub for food importers.", gradient: "market-grad-toys", bestFor: "Fresh produce, seafood, organic food" },
  { nameEn: "Fushan Road Wholesale Market (抚顺路批发市场)", nameCn: "抚顺路批发市场", address: "青岛市李沧区抚顺路", specialty: "Largest wholesale market in Qingdao. Handles 60%+ of the city's vegetable and fruit wholesale volume.", gradient: "market-grad-toys", bestFor: "Vegetables, fruits, fresh produce" },
  { nameEn: "Chengyang Aquatic Products Market (城阳水产零售交易市场)", nameCn: "城阳水产零售交易市场", address: "青岛市城阳区", specialty: "Largest seafood wholesale market in Chengyang. Fresh, frozen, and processed seafood.", gradient: "market-grad-toys", bestFor: "Seafood wholesale" },
  { nameEn: "Pingdu Xinshiji Shoe City (平度新世纪鞋城)", nameCn: "平度新世纪鞋城", address: "青岛市平度市杭州路78号", specialty: "Shoes wholesale in Pingdu. Connected to the broader Shandong footwear supply chain.", gradient: "market-grad-apparel", bestFor: "Shoes wholesale" },
  { nameEn: "Qicheng Building Materials Market (启城建材批发市场)", nameCn: "启城建材批发市场", address: "青岛市城阳区城子村", specialty: "Ceramics, plumbing, hardware, paint, kitchenware, flooring, steel. One-stop building materials.", gradient: "market-grad-electronics", bestFor: "Building materials, ceramics, plumbing" },
  { nameEn: "Liujin Road Smallware Market (利津路)", nameCn: "利津路小商品市场", address: "青岛市市北区/李沧区交界", specialty: "Small commodities. A budget wholesale strip at the Shibei/Licang district border.", gradient: "market-grad-toys", bestFor: "Budget small commodities" },
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
