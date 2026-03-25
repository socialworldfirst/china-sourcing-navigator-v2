import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "International Trade City — District 1", nameCn: "国际商贸城一区", address: "义乌市稠州北路555号一区", specialty: "Toys, jewelry, crafts. 10,000+ booths. Floor 1: plush/plastic/electric toys (450,000+ styles). Floor 2: hair ornaments, fashion jewelry. Floor 3: festival crafts, holiday decorations.", gradient: "market-grad-toys", bestFor: "Toys, fashion jewelry, holiday crafts" },
  { nameEn: "International Trade City — District 2", nameCn: "国际商贸城二区", address: "义乌市稠州北路555号二区", specialty: "Bags, hardware, electronics. 8,000+ booths. Floor 1: bags, suitcases, umbrellas, gift packaging. Floor 2: hardware tools, locks, vehicles. Floor 3: kitchen/bath hardware, appliances, watches.", gradient: "market-grad-hardware", bestFor: "Bags, hardware tools, small electronics" },
  { nameEn: "International Trade City — District 3", nameCn: "国际商贸城三区", address: "义乌市稠州北路555号三区", specialty: "Stationery, office supplies, cosmetics. 7,000+ booths. Floor 1: pens, ink, paper, eyeglasses. Floor 2: office/school supplies, sports goods. Floor 3: cosmetics, beauty, zippers, buttons.", gradient: "market-grad-stationery", bestFor: "Stationery, cosmetics, office supplies" },
  { nameEn: "International Trade City — District 4", nameCn: "国际商贸城四区", address: "义乌市稠州北路555号四区", specialty: "Socks, textiles, daily necessities. 16,000+ booths — the largest single district. Floor 1: socks and hosiery (the world’s most important sock trading floor). Floor 2: daily goods, gloves, hats. Floor 3: shoes, towels, neckties.", gradient: "market-grad-socks", bestFor: "Socks, hosiery, daily necessities, textiles" },
  { nameEn: "International Trade City — District 5", nameCn: "国际商贸城五区", address: "义乌市稠州北路555号五区", specialty: "Imports, bedding, auto parts. 7,000+ booths. Floor 1: imported food, clothing, crafts, African products exhibition. Floor 2: bedding, wedding supplies, wigs, pet supplies. Floor 3: curtain fabrics, knitted textiles.", gradient: "market-grad-imports", bestFor: "Imported goods, bedding, auto accessories" },
  { nameEn: "Global Digital Trade Centre", nameCn: "全球数贸中心", address: "义乌市全球数贸中心", specialty: "6th-generation smart market. 1.25 million sqm. Opened October 2025. Integrates physical trade with AI-powered digital commerce. 66,000–71,000 daily visitors, 170 million+ RMB daily transaction volume.", gradient: "market-grad-electronics", bestFor: "Digital trade, AI-powered sourcing, new market experience" },
  { nameEn: "Huangyuan Garment Market", nameCn: "篡园服装市场", address: "义乌市篡园路238号", specialty: "Clothing and garments. A complementary market to the International Trade City, focused on apparel. Open 07:30–20:30, longer hours than the main complex.", gradient: "market-grad-apparel", bestFor: "Clothing, garments, extended hours shopping" },
  { nameEn: "Xingzhong Jewelry & Accessories Market", nameCn: "兴中饰品市场", address: "义乌市兴中村（福田市场附近）", specialty: "Fashion accessories complex. 3,000+ shops across 5 blocks. Yiwu’s earliest-developed jewelry market. Hair accessories, costume jewelry, DIY craft components.", gradient: "market-grad-jewelry", bestFor: "Fashion accessories, hair ornaments, DIY components" },
  { nameEn: "Binwang Night Market", nameCn: "宾王夜市", address: "义乌市宾王路158号", specialty: "10,730 sqm, 800+ stalls. Daily necessities, clothes, crafts, food stalls. Opens after the main market closes — summer 18:30, winter 17:30. A working market, not a tourist attraction.", gradient: "market-grad-nightmarket", bestFor: "Evening sourcing, daily necessities, street food" },
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
