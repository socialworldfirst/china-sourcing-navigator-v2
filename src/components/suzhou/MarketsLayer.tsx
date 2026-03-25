import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Eastern Silk Market (东方丝绸市场)", nameCn: "东方丝绸市场", address: "盛泽镇, 吴江区, 苏州市", specialty: "China\u2019s premier chemical fiber fabric hub. 7,000+ booths, RMB 100 billion annual transaction volume. Polyester, nylon, chiffon, spandex, satin, functional fabrics.", gradient: "market-grad-textiles", bestFor: "Bulk fabric sourcing, technical textiles, custom dyeing" },
  { nameEn: "Changshu China Garment City", nameCn: "常熟招商城", address: "商城中路, 常熟市, 苏州市", specialty: "China\u2019s largest specialised clothing wholesale market. 9,000+ shops across 35 sub-markets. Men\u2019s, women\u2019s, children\u2019s wear, footwear, accessories.", gradient: "market-grad-apparel", bestFor: "Wholesale clothing, seasonal fashion, bulk orders" },
  { nameEn: "Huqiu Bridal City (虎丘婚纱城)", nameCn: "虎丘婚纱城", address: "虎丘山南侧, 虎丘区, 苏州市", specialty: "China\u2019s largest wedding dress wholesale hub. 70\u201380% of China\u2019s bridal market. 1,200 factories. $200\u2013560 per gown vs $2,000 US retail.", gradient: "market-grad-apparel", bestFor: "Wedding dresses, evening gowns, bridal accessories" },
  { nameEn: "Suzhou Silk Street (丝绸街)", nameCn: "丝绸街", address: "观前街附近, 姑苏区, 苏州市", specialty: "Traditional silk shops near the historic Guanqian Street. Silk clothing, scarves, accessories, and handcrafted embroidery.", gradient: "market-grad-textiles", bestFor: "Traditional silk products, souvenirs, small orders" },
  { nameEn: "Qian Tai Xiang Silk Shop (乾泰祥)", nameCn: "乾泰祥丝绸店", address: "观前街136-138号, 平江区, 苏州市", specialty: "Heritage silk retailer established in 1863. Authentic mulberry silk products, traditional Suzhou silk fabrics.", gradient: "market-grad-textiles", bestFor: "Authentic traditional silk, premium quality" },
  { nameEn: "Changshu China Footwear Center", nameCn: "常熟中国鞋城", address: "招商南路88号, 常熟市, 苏州市", specialty: "One of China\u2019s largest footwear wholesale distribution centres. Co-located with Changshu Garment City.", gradient: "market-grad-apparel", bestFor: "Wholesale footwear, shoes, boots" },
  { nameEn: "Likou Furniture Market (蠡口家具城)", nameCn: "蠡口家具城", address: "蠡口镇, 相城区, 苏州市", specialty: "Largest furniture wholesale market in Eastern China. 45+ furniture malls, 1.5 million+ m\u00b2 display area, 4,000+ suppliers. More affordable than Guangdong.", gradient: "market-grad-textiles", bestFor: "Furniture wholesale, home furnishings" },
  { nameEn: "Zhongxiang Commercial City (中翔商贸城)", nameCn: "中翔商贸城", address: "相城大道728号, 相城区, 苏州市", specialty: "Small commodities wholesale market. General merchandise, household goods, and daily necessities.", gradient: "market-grad-textiles", bestFor: "Small commodities, household goods" },
  { nameEn: "Nanmen Business District (南门商圈)", nameCn: "南门商圈", address: "南门西二路7-8号, 苏州市", specialty: "Mixed wholesale district covering electronics, tea, produce, and general merchandise.", gradient: "market-grad-electronics", bestFor: "Electronics, tea, general merchandise" },
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
