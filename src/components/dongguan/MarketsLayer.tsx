import MarketCard from "@/components/MarketCard";

const markets = [
  // Humen Town — Clothing & Textiles Hub
  { nameEn: "Fumin Clothing Wholesale Market", nameCn: "富民服装批发市场", address: "虎门镇银龙路24号", specialty: "300,000 sqm across 5 commercial floors. Women’s clothing, export wear, kids’ fashion, Humen brands, factory showrooms. Dongguan’s largest garment market.", gradient: "market-grad-apparel", bestFor: "Women’s fashion, children’s wear, factory showrooms" },
  { nameEn: "Yellow River Fashion City", nameCn: "黄河时装城", address: "虎门镇虎门大遐96号", specialty: "Korean-style women’s wear (F1), menswear and casual wear (F2). Integrated wholesale and retail.", gradient: "market-grad-apparel", bestFor: "Korean women’s fashion, menswear" },
  { nameEn: "Dayin Women’s Wear City", nameCn: "大莹女装批发城", address: "虎门大道与银龙路交汇处", specialty: "Mid-range women’s fashion. Major e-commerce supply hub — many vendors ship direct to Douyin and Taobao sellers.", gradient: "market-grad-apparel", bestFor: "Mid-range women’s fashion, e-commerce supply" },
  { nameEn: "HICC Fabric Market", nameCn: "虎门国际布料辅料交易中心", address: "虎门镇人民北路", specialty: "Clothing fabrics, curtain cloth, zippers, buttons, hardware accessories, tags, sequins. Easier sample access than Guangzhou’s Zhongda market.", gradient: "market-grad-textiles", bestFor: "Fabric sourcing, trims, small-batch accessories" },
  { nameEn: "Lane Crawford Fashion Mall", nameCn: "连卡佛时装批发商场", address: "虎门镇仁义路83号", specialty: "Mid-to-high-end women’s fashion. Multi-floor wholesale with brand-oriented vendors.", gradient: "market-grad-apparel", bestFor: "Premium women’s fashion wholesale" },
  { nameEn: "Kimberly Fashion Mall", nameCn: "金百利时装批发商场", address: "虎门镇银龙路商业街18号", specialty: "Mid-to-high-end clothing. T-shirts from ¥20+. Multi-floor wholesale.", gradient: "market-grad-apparel", bestFor: "Mid-high end clothing, T-shirts" },
  { nameEn: "Broadway Shopping Mall", nameCn: "百老汇商场", address: "虎门镇仁义路64-66号", specialty: "Budget-friendly women’s clothing. Mid-range wholesale.", gradient: "market-grad-apparel", bestFor: "Budget women’s clothing" },
  { nameEn: "Fumin Jinhui Kids’ Wear Center", nameCn: "富民金晖童装城", address: "虎门大道", specialty: "Specialized children’s clothing centre. 2.4 km east of the main Humen market cluster.", gradient: "market-grad-apparel", bestFor: "Children’s clothing wholesale" },

  // Houjie Town — Shoes & Furniture
  { nameEn: "Houjie Furniture Avenue", nameCn: "厚街家具大道", address: "厚街镇家具大道", specialty: "5 km road with 600 furniture companies and 100,000+ employees. High-end and export furniture, showrooms, raw materials.", gradient: "market-grad-furniture", bestFor: "Export furniture, showroom visits, raw materials" },
  { nameEn: "Dongguan Furniture Expo Center", nameCn: "东莞家具博览中心", address: "厚街镇家具大道1号", specialty: "Year-round furniture showroom and venue for the annual Famous Furniture Fair (3F). 1,000+ brands.", gradient: "market-grad-furniture", bestFor: "Furniture trade shows, brand comparison" },
  { nameEn: "Haopan Shoe Plaza", nameCn: "豪判鞋业广场", address: "厚街镇厚街路53-55号", specialty: "Shoes, shoe materials, and shoe machinery. Main trading centre for Houjie’s footwear cluster.", gradient: "market-grad-footwear", bestFor: "Finished shoes, shoe materials, machinery" },

  // Dalang Town — Knitwear
  { nameEn: "China Dalang Knitwear Trade Center", nameCn: "中国·大朗毛织贸易中心", address: "大朗镇富民路与富康路交汇处", specialty: "120,000 sqm, 1,000+ shops plus 20,000 sqm plaza. Sweaters, knitwear, yarn, and accessories from the “World’s Sweater Capital.”", gradient: "market-grad-knitwear", bestFor: "Sweaters, knitwear OEM, yarn sourcing" },
  { nameEn: "Global Fashion City", nameCn: "环球时尚城", address: "大朗镇毛织贸易中心北侧", specialty: "Finished knitwear and fashion. Adjacent to the Knitwear Trade Center.", gradient: "market-grad-knitwear", bestFor: "Finished knitwear, fashion knitwear" },

  // Shilong Town
  { nameEn: "Shilong Xihu Garment Wholesale Market", nameCn: "石龙西湖服装批发市场", address: "石龙镇石龙四路", specialty: "5 floors, 10,000+ sqm, 130+ shops. Clothing and accessories near Dongguan Station.", gradient: "market-grad-apparel", bestFor: "Clothing near Dongguan Station" },
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
