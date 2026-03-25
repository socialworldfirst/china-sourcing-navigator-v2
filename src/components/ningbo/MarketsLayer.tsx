import MarketCard from "@/components/MarketCard";

const factoryDistricts = [
  {
    nameEn: "Cixi Small Appliance Cluster",
    nameCn: "慈溪小家电产业集群",
    address: "慈溪市周巷镇、观海卫镇、横河镇一带",
    specialty: "World capital of small appliances. ~60% of global small appliance output. 2,000 whole-machine factories + 10,000 component suppliers. Air fryers, hair dryers, irons, blenders, vacuums.",
    gradient: "market-grad-appliances",
    bestFor: "Small home appliances, OEM/ODM manufacturing",
  },
  {
    nameEn: "Yuyao Plastic Industrial Zone",
    nameCn: "余姚中国塑料城",
    address: "余姚市城东新区中国塑料城",
    specialty: "\"China Plastic City\" — 2,000+ plastic manufacturers. Plastic kitchenware, food containers, lunch boxes, storage solutions, injection molds.",
    gradient: "market-grad-plastics",
    bestFor: "Plastic housewares, food containers, storage",
  },
  {
    nameEn: "Cixi Kitchenware & Cookware Zone",
    nameCn: "慈溪三北工业区厨具制造",
    address: "慈溪市三北工业区（龙山镇、三北镇）",
    specialty: "Non-stick cookware, frying pans, kitchen tools, kitchen storage. Sanbei Industrial Zone is the core production base.",
    gradient: "market-grad-kitchenware",
    bestFor: "Non-stick cookware, kitchen tools, bakeware",
  },
  {
    nameEn: "Beilun Die-Casting Mold Base",
    nameCn: "北仑压铸模具基地",
    address: "宁波市北仑区大碶街道、小港街道",
    specialty: "25% of China's die-casting mold output. 372+ mold enterprises, 60+ die-casting production companies with 400+ machines. Auto parts, hardware components.",
    gradient: "market-grad-molds",
    bestFor: "Die-casting molds, precision components, auto parts",
  },
  {
    nameEn: "Yinzhou Hardware & Tools Zone",
    nameCn: "鄞州五金工具产业区",
    address: "宁波市鄞州区姜山镇、云龙镇一带",
    specialty: "Hand tools hub: sockets, screwdrivers, hex keys, locking pliers, wire strippers, electric tools. Many global brands source here.",
    gradient: "market-grad-hardware",
    bestFor: "Hand tools, sockets, precision hardware",
  },
  {
    nameEn: "Cixi Stationery Cluster (Guanhaiwei)",
    nameCn: "慈溪观海卫文具产业群",
    address: "慈溪市观海卫镇、慈东工业区",
    specialty: "\"Capital of Chinese Stationery\" — pens, gel ink pens, markers, mechanical pencils. ~20% of China's stationery output.",
    gradient: "market-grad-stationery",
    bestFor: "Pens, markers, gel ink, stationery OEM",
  },
  {
    nameEn: "Yuyao Mold & Tooling Hub",
    nameCn: "余姚模具之乡",
    address: "余姚市阳明街道、泗门镇一带",
    specialty: "\"Hometown of Moulds\" — precision injection molds, plastic tooling, rapid prototyping. Part of Ningbo's 3,000+ mold manufacturer base.",
    gradient: "market-grad-molds",
    bestFor: "Injection molds, plastic tooling, prototyping",
  },
  {
    nameEn: "Yinzhou General Houseware Zone",
    nameCn: "鄞州家居用品制造区",
    address: "宁波市鄞州区横溪镇、东吴镇一带",
    specialty: "General houseware manufacturing, bathroom accessories, home storage. Serves both domestic and export markets.",
    gradient: "market-grad-kitchenware",
    bestFor: "Bathroom accessories, home storage, housewares",
  },
  {
    nameEn: "Fenghua Accessories & Garments",
    nameCn: "奉化服装辅料产业区",
    address: "宁波市奉化区西坞街道、尚田街道",
    specialty: "Accessories manufacturing, garment production, suits, workwear, uniforms. Niche but established export cluster.",
    gradient: "market-grad-apparel",
    bestFor: "Suits, workwear, uniforms, garment accessories",
  },
  {
    nameEn: "Beilun Port & Free Trade Zone",
    nameCn: "北仑保税区/自贸区",
    address: "宁波市北仑区保税区",
    specialty: "World's #1 port by cargo throughput. 3,500+ international trading enterprises. Bonded logistics, cross-border e-commerce, processing & manufacturing.",
    gradient: "market-grad-default",
    bestFor: "Logistics, bonded warehousing, cross-border trade",
  },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayDistricts = limit ? factoryDistricts.slice(0, limit) : factoryDistricts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayDistricts.map((m) => (
        <MarketCard key={m.nameEn} {...m} />
      ))}
    </div>
  );
}
