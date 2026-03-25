import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Louvre International Furniture Expo Center", nameCn: "罗浮宫国际家具博览中心", address: "广东省佛山市顺德区121省道乐从路段", specialty: "Premium furniture. 380,000 sqm, 2,000+ domestic brands, 100+ international luxury brands. 2 million visitors per year.", gradient: "market-grad-apparel", bestFor: "High-end furniture, international brands" },
  { nameEn: "Red Star Macalline Lecong", nameCn: "红星美凯龙乐从批发博览中心", address: "佛山市顺德区325国道水藤路乐从", specialty: "Wholesale furniture. 120,000 sqm, 2,000+ brands. Only Red Star Macalline branch operating as wholesale expo. 90%+ factory-direct.", gradient: "market-grad-apparel", bestFor: "Wholesale furniture, factory-direct pricing" },
  { nameEn: "Sunlink Furniture City — North", nameCn: "顺联家具城北区", address: "佛山市顺德区乐从镇河滨南路1号", specialty: "200,000 sqm across 4 sections, 13 buildings. 10 themed stores: modern, mahogany, Nordic, classical, office.", gradient: "market-grad-apparel", bestFor: "Sofas, living room suites, hotel furniture" },
  { nameEn: "Lecong International Exhibition Center (IEC)", nameCn: "乐从国际会展中心", address: "佛山市顺德区乐从大道南", specialty: "100,000 sqm. Branded furniture: KUKA HOME, LiXing, Dious, Life Master. First market visible when entering Lecong.", gradient: "market-grad-apparel", bestFor: "Branded furniture, first-time buyers" },
  { nameEn: "Empire Furniture City", nameCn: "皇朝家私城", address: "佛山市顺德区乐从325国道乐从路段", specialty: "Multiple blocks with showrooms across floors. Mid-range wholesale furniture, hotel furniture, soft furnishings.", gradient: "market-grad-apparel", bestFor: "Mid-range furniture, hotel projects" },
  { nameEn: "Foshan International Furniture Expo Mall", nameCn: "佛山国际家居博览城", address: "佛山市顺德区乐从-龙江走廪S121省道", specialty: "Panel, upholstered, children’s, outdoor, and office furniture along the Lecong-Longjiang corridor.", gradient: "market-grad-apparel", bestFor: "Office furniture, children’s furniture" },
  { nameEn: "China Ceramics City", nameCn: "佛山国际陶瓷展览中心", address: "广东省佛山市禅城区江湾三路2号", specialty: "Export-focused. 40,000 sqm, 200+ brands. 5-storey building for ceramic tiles, sanitary ware, taps, mosaics.", gradient: "market-grad-textiles", bestFor: "Export buyers, ceramic tiles, sanitary ware" },
  { nameEn: "Cihai International", nameCn: "瓷海国际", address: "广东佛山市禅城区南庄镇季华西路168号", specialty: "1,000 mu, 300,000+ sqm. 600+ ceramic enterprises. Complete tile range with storage and logistics hubs.", gradient: "market-grad-textiles", bestFor: "Wholesale ceramics, bulk orders" },
  { nameEn: "Shiwan Zhiye Ceramic Market", nameCn: "石湾置业陶瓷批发市场", address: "佛山市禅城区石湾镇街道镇中路", specialty: "470,000 sqm, 30+ years established. Tiles, sanitary ware, plumbing, lighting, hardware. On-site warehouses for immediate inspection.", gradient: "market-grad-textiles", bestFor: "Tiles with warehousing, plumbing fittings" },
  { nameEn: "Casa Ceramics & Sanitaryware Mall", nameCn: "嘉莎陶瓷卫浴城", address: "佛山市禅城区季华四路", specialty: "Est. 1994. 650+ suppliers. Mid-to-high-end sanitary ware: TOTO, Monalisa, ARROW, DONGPENG, HEGII, JOMOO.", gradient: "market-grad-textiles", bestFor: "Premium sanitary ware, established brands" },
  { nameEn: "Huayi International Decoration Expo City", nameCn: "华艺国际装饰博览城", address: "佛山市禅城区季华四路与雾岗路口交汇处", specialty: "Foshan’s largest building materials market. 330,000 sqm, 5 floors, 2,000 shops. Tiles, flooring, lighting, doors, sanitaryware, hardware, paint.", gradient: "market-grad-leather", bestFor: "One-stop building materials, interior fit-out" },
  { nameEn: "Meiju International Building Materials Expo", nameCn: "美居国际建材博览中心", address: "佛山市禅城区绿景西路", specialty: "280,000 sqm. Tiles, sanitaryware, kitchen cabinets, doors, windows, lighting, flooring. Brands: TOTO, KOHLER, OPPEIN.", gradient: "market-grad-leather", bestFor: "Kitchen and bathroom fit-out" },
  { nameEn: "Huada Ceramics Building Materials City", nameCn: "华达陶瓷卫浴建材城", address: "佛山市禅城区镇中路", specialty: "120,000 sqm, 300+ shops. 60% focused on doors and windows: aluminium, stainless steel, wooden, security doors, smart locks.", gradient: "market-grad-leather", bestFor: "Doors, windows, smart locks" },
  { nameEn: "Sunlink Lighting & Kitchen Cabinet City", nameCn: "顺联灯饰城 A区", address: "佛山市顺德区乐从镇兴乐路", specialty: "Crystal chandeliers, ceiling lights, wall sconces, LED lighting in the Lecong furniture corridor.", gradient: "market-grad-jewelry", bestFor: "Decorative lighting, chandeliers" },
  { nameEn: "Shunle International Lighting City", nameCn: "顺乐国际灯饰城", address: "佛山市顺德区乐从", specialty: "Commercial and home lighting. Modern minimalist, European classical, and Chinese traditional styles.", gradient: "market-grad-jewelry", bestFor: "Commercial lighting, mixed styles" },
  { nameEn: "Bomei Hardware Decorative City", nameCn: "博美铝材五金城", address: "佛山市南海区大沥镇七路与桂和路交叉路口", specialty: "600+ mu. China’s largest aluminium trading hub. Aluminium profiles, doors, windows, hardware, decorative materials.", gradient: "market-grad-electronics", bestFor: "Aluminium profiles, building hardware" },
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
