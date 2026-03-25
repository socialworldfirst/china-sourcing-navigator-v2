import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "International Trade City \u2014 District 1", nameCn: "\u56FD\u9645\u5546\u8D38\u57CE\u4E00\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u5DDE\u5317\u8DEF555\u53F7\u4E00\u533A", specialty: "Toys, jewelry, crafts. 10,000+ booths. Floor 1: plush/plastic/electric toys (450,000+ styles). Floor 2: hair ornaments, fashion jewelry. Floor 3: festival crafts, holiday decorations.", gradient: "market-grad-toys", bestFor: "Toys, fashion jewelry, holiday crafts" },
  { nameEn: "International Trade City \u2014 District 2", nameCn: "\u56FD\u9645\u5546\u8D38\u57CE\u4E8C\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u5DDE\u5317\u8DEF555\u53F7\u4E8C\u533A", specialty: "Bags, hardware, electronics. 8,000+ booths. Floor 1: bags, suitcases, umbrellas, gift packaging. Floor 2: hardware tools, locks, vehicles. Floor 3: kitchen/bath hardware, appliances, watches.", gradient: "market-grad-hardware", bestFor: "Bags, hardware tools, small electronics" },
  { nameEn: "International Trade City \u2014 District 3", nameCn: "\u56FD\u9645\u5546\u8D38\u57CE\u4E09\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u5DDE\u5317\u8DEF555\u53F7\u4E09\u533A", specialty: "Stationery, office supplies, cosmetics. 7,000+ booths. Floor 1: pens, ink, paper, eyeglasses. Floor 2: office/school supplies, sports goods. Floor 3: cosmetics, beauty, zippers, buttons.", gradient: "market-grad-stationery", bestFor: "Stationery, cosmetics, office supplies" },
  { nameEn: "International Trade City \u2014 District 4", nameCn: "\u56FD\u9645\u5546\u8D38\u57CE\u56DB\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u5DDE\u5317\u8DEF555\u53F7\u56DB\u533A", specialty: "Socks, textiles, daily necessities. 16,000+ booths \u2014 the largest single district. Floor 1: socks and hosiery (the world\u2019s most important sock trading floor). Floor 2: daily goods, gloves, hats. Floor 3: shoes, towels, neckties.", gradient: "market-grad-socks", bestFor: "Socks, hosiery, daily necessities, textiles" },
  { nameEn: "International Trade City \u2014 District 5", nameCn: "\u56FD\u9645\u5546\u8D38\u57CE\u4E94\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u5DDE\u5317\u8DEF555\u53F7\u4E94\u533A", specialty: "Imports, bedding, auto parts. 7,000+ booths. Floor 1: imported food, clothing, crafts, African products exhibition. Floor 2: bedding, wedding supplies, wigs, pet supplies. Floor 3: curtain fabrics, knitted textiles.", gradient: "market-grad-imports", bestFor: "Imported goods, bedding, auto accessories" },
  { nameEn: "Global Digital Trade Centre", nameCn: "\u5168\u7403\u6570\u8D38\u4E2D\u5FC3", address: "\u4E49\u4E4C\u5E02\u5168\u7403\u6570\u8D38\u4E2D\u5FC3", specialty: "6th-generation smart market. 1.25 million sqm. Opened October 2025. Integrates physical trade with AI-powered digital commerce. 66,000\u201371,000 daily visitors, 170 million+ RMB daily transaction volume.", gradient: "market-grad-electronics", bestFor: "Digital trade, AI-powered sourcing, new market experience" },
  { nameEn: "Huangyuan Garment Market", nameCn: "\u7BE1\u56ED\u670D\u88C5\u5E02\u573A", address: "\u4E49\u4E4C\u5E02\u7BE1\u56ED\u8DEF238\u53F7", specialty: "Clothing and garments. A complementary market to the International Trade City, focused on apparel. Open 07:30\u201320:30, longer hours than the main complex.", gradient: "market-grad-apparel", bestFor: "Clothing, garments, extended hours shopping" },
  { nameEn: "Xingzhong Jewelry & Accessories Market", nameCn: "\u5174\u4E2D\u9970\u54C1\u5E02\u573A", address: "\u4E49\u4E4C\u5E02\u5174\u4E2D\u6751\uFF08\u798F\u7530\u5E02\u573A\u9644\u8FD1\uFF09", specialty: "Fashion accessories complex. 3,000+ shops across 5 blocks. Yiwu\u2019s earliest-developed jewelry market. Hair accessories, costume jewelry, DIY craft components.", gradient: "market-grad-jewelry", bestFor: "Fashion accessories, hair ornaments, DIY components" },
  { nameEn: "Binwang Night Market", nameCn: "\u5BBE\u738B\u591C\u5E02", address: "\u4E49\u4E4C\u5E02\u5BBE\u738B\u8DEF158\u53F7", specialty: "10,730 sqm, 800+ stalls. Daily necessities, clothes, crafts, food stalls. Opens after the main market closes \u2014 summer 18:30, winter 17:30. A working market, not a tourist attraction.", gradient: "market-grad-nightmarket", bestFor: "Evening sourcing, daily necessities, street food" },
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
