import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Qipu Road Clothing Market (七浦路)", nameCn: "七浦路服装批发市场", address: "上海市静安区七浦路303号", specialty: "Shanghai's largest apparel wholesale market. 680m street, 10+ mall buildings, 100+ year history. Real wholesale action starts at 4 AM.", gradient: "market-grad-apparel", bestFor: "Wholesale apparel, budget fashion, e-commerce" },
  { nameEn: "South Bund Fabric Market", nameCn: "南外滩面料市场", address: "上海市黄浦区陆家浜路399号", specialty: "World-famous bespoke tailoring. 285 tailor shops across 3 floors. Custom suits at 2,000–4,000 yuan — ⅓ of European pricing.", gradient: "market-grad-tailoring", bestFor: "Bespoke suits, shirts, qipaos, wedding attire" },
  { nameEn: "Kaixuancheng Clothing Market", nameCn: "凯旋城服装市场", address: "上海市静安区七浦路226号", specialty: "20,000+ m² specialized clothing wholesale. Part of the Qipu Road cluster, focused on mid-range fashion.", gradient: "market-grad-apparel", bestFor: "Mid-range wholesale clothing" },
  { nameEn: "Xinqipu (新七浦)", nameCn: "新七浦服装市场", address: "上海市静安区七浦路168号", specialty: "Brand-focused clothing. Domestic 2nd/3rd-tier brands, 1,100 children's clothing stalls — Shanghai's largest children's wear market.", gradient: "market-grad-apparel", bestFor: "Brand fashion, children's clothing wholesale" },
  { nameEn: "Jiuxing Market", nameCn: "九星市场", address: "上海市闵行区九星路288号", specialty: "Building materials, hardware, kitchen supplies, furniture, hotel supplies. One-stop sourcing for construction and home.", gradient: "market-grad-building", bestFor: "Building materials, hardware, furniture" },
  { nameEn: "A.P. Plaza (亚太盛汇)", nameCn: "亚太盛汇", address: "上海市浦东新区科技馆站附近", specialty: "Shanghai's largest gadget and replica market. Electronics, phone accessories, bags, watches, and souvenirs.", gradient: "market-grad-electronics", bestFor: "Gadgets, phone accessories, novelty items" },
  { nameEn: "Yuyuan Bazaar (豫园商城)", nameCn: "豫园商城", address: "上海市黄浦区福佑路168号", specialty: "Traditional handicrafts, silk, Chinese jewelry, tea, gold, antiques. Tourist-oriented but good for artisan sourcing.", gradient: "market-grad-jewelry", bestFor: "Handicrafts, silk, tea, traditional gifts" },
  { nameEn: "Tongchuan Seafood Market", nameCn: "铜川路水产市场", address: "上海市普陀区铜川路800号", specialty: "All seafood — live, frozen, and dried. Major wholesale hub for restaurants and food businesses.", gradient: "market-grad-seafood", bestFor: "Seafood wholesale, restaurant sourcing" },
  { nameEn: "Shanghai Agricultural Products Center", nameCn: "上海农产品中心批发市场", address: "上海市浦东新区沪南路2000号", specialty: "Largest agricultural wholesale market. 24-hour operation. Vegetables, fruits, meat, and dry goods.", gradient: "market-grad-food", bestFor: "Agricultural wholesale, fresh produce" },
  { nameEn: "Shanghai International Glasses City", nameCn: "上海国际眼镜城", address: "上海市虹口区", specialty: "Eyewear, optical accessories, frames, lenses. Specialized wholesale for the optical industry.", gradient: "market-grad-default", bestFor: "Eyewear, optical accessories" },
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
