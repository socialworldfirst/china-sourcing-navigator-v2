import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Jingshang Eyewear Wholesale Market (精商眼镜批发)", nameCn: "精商眼镜批发市场", address: "厦门市思明区明发商业广场B1层", specialty: "Sunglasses, prescription glasses, optical frames, eyewear accessories. Xiamen's dedicated eyewear trading hub.", gradient: "market-grad-electronics", bestFor: "Eyewear wholesale, sunglasses, optical frames" },
  { nameEn: "Xiamen International Stone Center (厦门国际石材中心)", nameCn: "厦门国际石材中心", address: "厦门市湖里区方湖路289号", specialty: "56,000 m² showroom for stone slabs, granite, marble, quartz, engineered stone. Premium international and domestic suppliers.", gradient: "market-grad-electronics", bestFor: "Stone materials, granite, marble, quartz slabs" },
  { nameEn: "Xiashang Wucun Lighting City (夏商五村灯饰城)", nameCn: "夏商五村灯饰城", address: "厦门市思明区五村", specialty: "LED products, lighting fixtures, commercial lighting, decorative lighting. Xiamen's primary lighting wholesale hub.", gradient: "market-grad-electronics", bestFor: "LED lighting, fixtures, commercial lighting" },
  { nameEn: "Xiashang Huguang Smallware Market (夏商湖光小商品市场)", nameCn: "夏商湖光小商品批发市场", address: "厦门市思明区湖光路101号", specialty: "Stationery, toys, holiday gifts, decorations, small commodities. Xiamen's main general wholesale market.", gradient: "market-grad-toys", bestFor: "Stationery, toys, gifts, small commodities" },
  { nameEn: "Xiamen Jiangtou Clothing Market (厦门江头服装市场)", nameCn: "厦门江头服装批发市场", address: "厦门市湖里区江头", specialty: "Clothing wholesale. For large-scale apparel sourcing, buyers often combine with nearby Shishi (石狮) in Quanzhou.", gradient: "market-grad-apparel", bestFor: "Clothing wholesale, casual wear" },
  { nameEn: "Xiamen North Station Tea Port City (厦门北站国际茶港城)", nameCn: "厦门北站国际茶港城", address: "厦门市集美区厦门北站", specialty: "Tea wholesale — oolong, Tieguanyin, white tea, black tea. Adjacent to HSR station for easy access.", gradient: "market-grad-electronics", bestFor: "Tea sourcing, Tieguanyin, oolong tea" },
  { nameEn: "Zhongshan Road Pedestrian Street (中山路步行街)", nameCn: "中山路步行街", address: "厦门市思明区中山路", specialty: "Built 1925, oldest commercial street in Xiamen. 1 million m², one-third of Xiamen's total commercial space. Mix of Western and Chinese architecture.", gradient: "market-grad-apparel", bestFor: "Retail shopping, local specialties, trend spotting" },
  { nameEn: "Xiashang Seafood & Aquatic Products Market (夏商水产品市场)", nameCn: "夏商水产品批发市场", address: "厦门市湖里区高崎北路", specialty: "Seafood, marine products, aquatic goods. One of Xiamen's largest food wholesale centres.", gradient: "market-grad-electronics", bestFor: "Seafood, aquatic products, marine goods" },
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
