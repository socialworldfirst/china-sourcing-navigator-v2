import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "SEG Electronics Market (\u8D5B\u683C\u7535\u5B50\u5E02\u573A)", nameCn: "\u8D5B\u683C\u7535\u5B50\u5E02\u573A", address: "\u6DF1\u5733\u5E02\u798F\u7530\u533A\u534E\u5F3A\u5317\u8DEF1002\u53F7\u8D5B\u683C\u5E7F\u573A", specialty: "Electronic components across 10 floors of the 72-storey SEG Plaza. 3,000+ shops selling capacitors, resistors, connectors, cables, ICs, and modules.", gradient: "market-grad-electronics", bestFor: "Electronic components, BOM fulfilment, prototyping parts" },
  { nameEn: "Huaqiang Electronics World (\u534E\u5F3A\u7535\u5B50\u4E16\u754C)", nameCn: "\u534E\u5F3A\u7535\u5B50\u4E16\u754C", address: "\u6DF1\u5733\u5E02\u798F\u7530\u533A\u534E\u5F3A\u5317\u8DEF1007-1015\u53F7", specialty: "Computer components, mobile phones, repairs. 4 floors, 3,000+ stores. Mix of new and refurbished goods.", gradient: "market-grad-electronics", bestFor: "Computer parts, mobile phones, refurbished devices" },
  { nameEn: "Yuanwang Digital Mall (\u8FDC\u671B\u6570\u7801\u57CE)", nameCn: "\u8FDC\u671B\u6570\u7801\u57CE", address: "\u6DF1\u5733\u5E02\u798F\u7530\u533A\u534E\u5F3A\u5317\u8DEF2006\u53F7\u534E\u8054\u53D1\u7EFC\u5408\u697C\u5927\u53A6", specialty: "Mobile phones (new and refurbished), batteries, phone cases, screen protectors. Handles ~60% of China's wholesale refurbished iPhones.", gradient: "market-grad-electronics", bestFor: "Phone wholesale, accessories, refurbished devices" },
  { nameEn: "Shuibei Jewelry Trade Center (\u6C34\u8D1D\u56FD\u9645\u73E0\u5B9D\u4EA4\u6613\u4E2D\u5FC3)", nameCn: "\u6C34\u8D1D\u56FD\u9645\u73E0\u5B9D\u4EA4\u6613\u4E2D\u5FC3", address: "\u6DF1\u5733\u5E02\u7F57\u6E56\u533A\u8D1D\u4E3D\u5317\u8DEF99\u53F7", specialty: "China's largest jewelry trading hub. Gold, diamonds, jade, gemstones. 9,000+ merchants. Gold at 24% below retail.", gradient: "market-grad-jewelry", bestFor: "Gold, diamonds, jade, gemstone wholesale" },
  { nameEn: "Bolin International Jewelry (\u5B9D\u7433\u56FD\u9645\u73E0\u5B9D\u4EA4\u6613\u4E2D\u5FC3)", nameCn: "\u5B9D\u7433\u56FD\u9645\u73E0\u5B9D\u4EA4\u6613\u4E2D\u5FC3", address: "\u6DF1\u5733\u5E02\u7F57\u6E56\u533A\u6C34\u8D1D\u4E8C\u8DEF", specialty: "High-volume jewelry wholesale. 50B RMB annual transaction volume. Gemstones, gold, silver, fashion jewelry.", gradient: "market-grad-jewelry", bestFor: "Volume jewelry buying, gemstones" },
  { nameEn: "Nanyou Fashion Wholesale (\u5357\u6CB9\u670D\u88C5\u6279\u53D1\u5E02\u573A)", nameCn: "\u5357\u6CB9\u670D\u88C5\u6279\u53D1\u5E02\u573A", address: "\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u5357\u6D77\u5927\u9053\u4E0E\u4E1C\u6EE8\u8DEF\u4EA4\u6C47\u5904", specialty: "Mid to high-end original design women's fashion. 4,000+ merchants across 20+ buildings. Designer-adjacent, trend-forward.", gradient: "market-grad-apparel", bestFor: "High-end women's fashion, original Chinese designer brands" },
  { nameEn: "Luohu Commercial City (\u7F57\u6E56\u5546\u4E1A\u57CE)", nameCn: "\u7F57\u6E56\u5546\u4E1A\u57CE", address: "\u6DF1\u5733\u5E02\u7F57\u6E56\u533A\u5E7F\u573A\u8DEF25\u53F7", specialty: "1,200 retail stalls across 7 floors. Fashion, electronics, toys, watches, tailoring. Right at the Hong Kong border crossing.", gradient: "market-grad-apparel", bestFor: "Budget shopping, tailoring, samples near HK border" },
  { nameEn: "Dongmen Pedestrian Street (\u4E1C\u95E8\u6B65\u884C\u8857)", nameCn: "\u4E1C\u95E8\u6B65\u884C\u8857", address: "\u6DF1\u5733\u5E02\u7F57\u6E56\u533A\u4E1C\u95E8\u5546\u4E1A\u533A", specialty: "Fast fashion street market. Trading since the Ming Dynasty. Budget clothing, shoes, accessories.", gradient: "market-grad-apparel", bestFor: "Budget fashion, street shopping, trend spotting" },
  { nameEn: "Gabo Optical City (\u9AD8\u535A\u5149\u5B66\u57CE)", nameCn: "\u9AD8\u535A\u5149\u5B66\u57CE", address: "\u6DF1\u5733\u5E02\u7F57\u6E56\u533A\u6DF1\u5357\u4E1C\u8DEF", specialty: "Eyewear, lenses, optical equipment. Wholesale frames, sunglasses, prescription lenses.", gradient: "market-grad-electronics", bestFor: "Eyewear wholesale, optical lenses, frames" },
  { nameEn: "Sungang Stationery & Toys (\u7B0B\u5C97\u6587\u5177\u73A9\u5177\u57CE)", nameCn: "\u7B0B\u5C97\u6587\u5177\u73A9\u5177\u57CE", address: "\u6DF1\u5733\u5E02\u7F57\u6E56\u533A\u7B0B\u5C97\u8DEF", specialty: "Stationery, toys, gifts, promotional goods wholesale. Multiple buildings in the Sungang warehouse district.", gradient: "market-grad-toys", bestFor: "Stationery, toys, gift items, promotional goods" },
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
