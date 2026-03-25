import MarketCard from "@/components/MarketCard";

const markets = [
  // Humen Town — Clothing & Textiles Hub
  { nameEn: "Fumin Clothing Wholesale Market", nameCn: "\u5BCC\u6C11\u670D\u88C5\u6279\u53D1\u5E02\u573A", address: "\u864E\u95E8\u9547\u94F6\u9F99\u8DEF24\u53F7", specialty: "300,000 sqm across 5 commercial floors. Women\u2019s clothing, export wear, kids\u2019 fashion, Humen brands, factory showrooms. Dongguan\u2019s largest garment market.", gradient: "market-grad-apparel", bestFor: "Women\u2019s fashion, children\u2019s wear, factory showrooms" },
  { nameEn: "Yellow River Fashion City", nameCn: "\u9EC4\u6CB3\u65F6\u88C5\u57CE", address: "\u864E\u95E8\u9547\u864E\u95E8\u5927\u905096\u53F7", specialty: "Korean-style women\u2019s wear (F1), menswear and casual wear (F2). Integrated wholesale and retail.", gradient: "market-grad-apparel", bestFor: "Korean women\u2019s fashion, menswear" },
  { nameEn: "Dayin Women\u2019s Wear City", nameCn: "\u5927\u83B9\u5973\u88C5\u6279\u53D1\u57CE", address: "\u864E\u95E8\u5927\u9053\u4E0E\u94F6\u9F99\u8DEF\u4EA4\u6C47\u5904", specialty: "Mid-range women\u2019s fashion. Major e-commerce supply hub \u2014 many vendors ship direct to Douyin and Taobao sellers.", gradient: "market-grad-apparel", bestFor: "Mid-range women\u2019s fashion, e-commerce supply" },
  { nameEn: "HICC Fabric Market", nameCn: "\u864E\u95E8\u56FD\u9645\u5E03\u6599\u8F85\u6599\u4EA4\u6613\u4E2D\u5FC3", address: "\u864E\u95E8\u9547\u4EBA\u6C11\u5317\u8DEF", specialty: "Clothing fabrics, curtain cloth, zippers, buttons, hardware accessories, tags, sequins. Easier sample access than Guangzhou\u2019s Zhongda market.", gradient: "market-grad-textiles", bestFor: "Fabric sourcing, trims, small-batch accessories" },
  { nameEn: "Lane Crawford Fashion Mall", nameCn: "\u8FDE\u5361\u4F5B\u65F6\u88C5\u6279\u53D1\u5546\u573A", address: "\u864E\u95E8\u9547\u4EC1\u4E49\u8DEF83\u53F7", specialty: "Mid-to-high-end women\u2019s fashion. Multi-floor wholesale with brand-oriented vendors.", gradient: "market-grad-apparel", bestFor: "Premium women\u2019s fashion wholesale" },
  { nameEn: "Kimberly Fashion Mall", nameCn: "\u91D1\u767E\u5229\u65F6\u88C5\u6279\u53D1\u5546\u573A", address: "\u864E\u95E8\u9547\u94F6\u9F99\u8DEF\u5546\u4E1A\u885718\u53F7", specialty: "Mid-to-high-end clothing. T-shirts from \u00A520+. Multi-floor wholesale.", gradient: "market-grad-apparel", bestFor: "Mid-high end clothing, T-shirts" },
  { nameEn: "Broadway Shopping Mall", nameCn: "\u767E\u8001\u6C47\u5546\u573A", address: "\u864E\u95E8\u9547\u4EC1\u4E49\u8DEF64-66\u53F7", specialty: "Budget-friendly women\u2019s clothing. Mid-range wholesale.", gradient: "market-grad-apparel", bestFor: "Budget women\u2019s clothing" },
  { nameEn: "Fumin Jinhui Kids\u2019 Wear Center", nameCn: "\u5BCC\u6C11\u91D1\u6656\u7AE5\u88C5\u57CE", address: "\u864E\u95E8\u5927\u9053", specialty: "Specialized children\u2019s clothing centre. 2.4 km east of the main Humen market cluster.", gradient: "market-grad-apparel", bestFor: "Children\u2019s clothing wholesale" },

  // Houjie Town — Shoes & Furniture
  { nameEn: "Houjie Furniture Avenue", nameCn: "\u539A\u8857\u5BB6\u5177\u5927\u9053", address: "\u539A\u8857\u9547\u5BB6\u5177\u5927\u9053", specialty: "5 km road with 600 furniture companies and 100,000+ employees. High-end and export furniture, showrooms, raw materials.", gradient: "market-grad-furniture", bestFor: "Export furniture, showroom visits, raw materials" },
  { nameEn: "Dongguan Furniture Expo Center", nameCn: "\u4E1C\u839E\u5BB6\u5177\u535A\u89C8\u4E2D\u5FC3", address: "\u539A\u8857\u9547\u5BB6\u5177\u5927\u90531\u53F7", specialty: "Year-round furniture showroom and venue for the annual Famous Furniture Fair (3F). 1,000+ brands.", gradient: "market-grad-furniture", bestFor: "Furniture trade shows, brand comparison" },
  { nameEn: "Haopan Shoe Plaza", nameCn: "\u8C6A\u5224\u978B\u4E1A\u5E7F\u573A", address: "\u539A\u8857\u9547\u539A\u8857\u8DEF53-55\u53F7", specialty: "Shoes, shoe materials, and shoe machinery. Main trading centre for Houjie\u2019s footwear cluster.", gradient: "market-grad-footwear", bestFor: "Finished shoes, shoe materials, machinery" },

  // Dalang Town — Knitwear
  { nameEn: "China Dalang Knitwear Trade Center", nameCn: "\u4E2D\u56FD\u00B7\u5927\u6717\u6BDB\u7EC7\u8D38\u6613\u4E2D\u5FC3", address: "\u5927\u6717\u9547\u5BCC\u6C11\u8DEF\u4E0E\u5BCC\u5EB7\u8DEF\u4EA4\u6C47\u5904", specialty: "120,000 sqm, 1,000+ shops plus 20,000 sqm plaza. Sweaters, knitwear, yarn, and accessories from the \u201cWorld\u2019s Sweater Capital.\u201d", gradient: "market-grad-knitwear", bestFor: "Sweaters, knitwear OEM, yarn sourcing" },
  { nameEn: "Global Fashion City", nameCn: "\u73AF\u7403\u65F6\u5C1A\u57CE", address: "\u5927\u6717\u9547\u6BDB\u7EC7\u8D38\u6613\u4E2D\u5FC3\u5317\u4FA7", specialty: "Finished knitwear and fashion. Adjacent to the Knitwear Trade Center.", gradient: "market-grad-knitwear", bestFor: "Finished knitwear, fashion knitwear" },

  // Shilong Town
  { nameEn: "Shilong Xihu Garment Wholesale Market", nameCn: "\u77F3\u9F99\u897F\u6E56\u670D\u88C5\u6279\u53D1\u5E02\u573A", address: "\u77F3\u9F99\u9547\u77F3\u9F99\u56DB\u8DEF", specialty: "5 floors, 10,000+ sqm, 130+ shops. Clothing and accessories near Dongguan Station.", gradient: "market-grad-apparel", bestFor: "Clothing near Dongguan Station" },
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
