import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Yiwu International Trade City (Sports)", nameCn: "\u4E49\u4E4C\u56FD\u9645\u5546\u8D38\u57CE\u4E09\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u5DDE\u533A\u56FD\u9645\u5546\u8D38\u57CE\u4E09\u533A", specialty: "District 3 specialises in sports equipment. Thousands of suppliers offering dumbbells, home fitness, yoga accessories, martial arts equipment, balls, resistance bands. MOQs from 10\u2013100 pieces for stock items. Open 365 days.", gradient: "market-grad-bags", bestFor: "Low-MOQ sports equipment, mixed containers, accessories" },
  { nameEn: "Jinjiang International Shoe & Textile City", nameCn: "\u664B\u6C5F\u56FD\u9645\u978B\u7EBA\u57CE", address: "\u798F\u5EFA\u7701\u6CC9\u5DDE\u5E02\u664B\u6C5F\u5E02", specialty: "China\u2019s sports shoe capital. Thousands of athletic footwear manufacturers, from OEM factories serving Nike and Adidas to domestic brands. Also sportswear, athletic accessories, and sports textiles.", gradient: "market-grad-electronics", bestFor: "Sports footwear, athletic apparel, activewear" },
  { nameEn: "Ningjin Fitness Equipment Industrial Park", nameCn: "\u5B81\u6D25\u5065\u8EAB\u5668\u6750\u4EA7\u4E1A\u56ED", address: "\u5C71\u4E1C\u7701\u5FB7\u5DDE\u5E02\u5B81\u6D25\u53BF", specialty: "China\u2019s commercial fitness equipment capital. 2,509 enterprises, 13.9 billion yuan output. 70%+ domestic commercial gym equipment market share. Treadmills, strength machines, ellipticals, free weights.", gradient: "market-grad-electronics", bestFor: "Commercial gym equipment, bulk fitness machinery" },
  { nameEn: "Xiamen Fitness Equipment Export Zone", nameCn: "\u53A6\u95E8\u5065\u8EAB\u5668\u6750\u51FA\u53E3\u57FA\u5730", address: "\u798F\u5EFA\u7701\u53A6\u95E8\u5E02", specialty: "Asia\u2019s largest production and export base for fitness and massage therapy equipment. Home treadmills, exercise bikes, rowing machines, ellipticals. Six out of ten home treadmills globally come from Xiamen.", gradient: "market-grad-default", bestFor: "Home fitness equipment, cardio machines, massage gear" },
  { nameEn: "Qingdao Rubber Fitness Products Zone", nameCn: "\u9752\u5C9B\u6A61\u80F6\u5065\u8EAB\u4EA7\u54C1\u533A", address: "\u5C71\u4E1C\u7701\u9752\u5C9B\u5E02", specialty: "Rubber fitness equipment hub. Bumper plates, rubber-coated dumbbells, hex dumbbells, kettlebells, barbells, gym flooring. Also martial arts equipment \u2014 taekwondo, boxing, karate, and foam mats.", gradient: "market-grad-leather", bestFor: "Free weights, rubber products, martial arts equipment" },
  { nameEn: "Canton Fair Complex (Phase 3 \u2014 Area D)", nameCn: "\u5E7F\u4EA4\u4F1A\u7B2C\u4E09\u671F D\u533A", address: "\u5E7F\u5DDE\u5E02\u6D77\u73E0\u533A\u9610\u6E2F\u4E1C\u8DEF380\u53F7", specialty: "Biannual trade fair. Phase 3 Area D covers indoor and outdoor sports products: balls, boxing, skating, fitness equipment, trampolines, archery, bicycles, climbing, track and field equipment.", gradient: "market-grad-bags", bestFor: "Trade fair sourcing, comparing suppliers, new products" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div>
      <p className="text-sm text-wf-text-secondary leading-relaxed mb-6 max-w-3xl">
        China&apos;s sports equipment wholesale clusters span four regions: Xiamen and
        Quanzhou in Fujian (fitness machines and sportswear), Ningbo in Zhejiang (gym accessories),
        Ningjin in Shandong (commercial equipment), and Qingdao (rubber weights). Here are the
        key sourcing locations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayMarkets.map((m) => (
          <MarketCard key={m.nameEn} {...m} />
        ))}
      </div>
    </div>
  );
}
