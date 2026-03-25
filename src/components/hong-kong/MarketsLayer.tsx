import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "HKCEC — Hong Kong Convention & Exhibition Centre", nameCn: "香港会议展览中心", address: "1 Expo Drive, Wan Chai, Hong Kong", specialty: "Primary venue for HKTDC trade fairs. 91,500 sqm of rentable space. Iconic harbourside location. Electronics Fair, Jewellery Show, Gifts Fair, Watch & Clock Fair.", gradient: "market-grad-electronics", bestFor: "HKTDC trade fairs, sourcing events" },
  { nameEn: "Jade Market (玉器市场)", nameCn: "玉器市场", address: "Kansu Street, Yau Ma Tei, Kowloon (near Jordan MTR Station)", specialty: "Hundreds of jewellers selling jade, pearls, precious and semi-precious stones. Wholesale and retail. Open daily ~10:00–18:00.", gradient: "market-grad-jewelry", bestFor: "Jade, pearls, gemstones, precious stones" },
  { nameEn: "Rise Shopping Arcade", nameCn: "利時商場", address: "Granville Road, Tsim Sha Tsui, Kowloon", specialty: "Jewelry boutiques, local designers, accessories. Retail and small wholesale. Good for sourcing Hong Kong-designed pieces.", gradient: "market-grad-jewelry", bestFor: "Designer jewelry, accessories, boutique sourcing" },
  { nameEn: "AsiaWorld-Expo", nameCn: "亞洲國際博覽館", address: "Hong Kong International Airport, Lantau Island", specialty: "Major exhibition venue near the airport. Hosts Global Sources trade shows (Electronics, Fashion, Home Products). 70,000 sqm.", gradient: "market-grad-electronics", bestFor: "Global Sources trade shows, large exhibitions" },
  { nameEn: "HKTDC Design Gallery", nameCn: "香港貿發局設計廊", address: "Convention Plaza, 1 Harbour Road, Wan Chai", specialty: "Curated showroom of Hong Kong-designed products. Operated by HKTDC. Good for discovering local brands and design-led manufacturers.", gradient: "market-grad-apparel", bestFor: "Hong Kong-designed products, design-led sourcing" },
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
