import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Yiwu International Trade City, District 1 (2F)", nameCn: "\u4e49\u4e4c\u56fd\u9645\u5546\u8d38\u57ce\u4e00\u533a\u4e8c\u697c", address: "\u6d59\u6c5f\u7701\u4e49\u4e4c\u5e02\u7a20\u5dde\u533a\u56fd\u9645\u5546\u8d38\u57ce\u4e00\u533a", specialty: "World\u2019s largest fashion jewelry wholesale market. Over 5,000 booths on the second floor plus 2,500 in the east expansion. Rings, earrings, necklaces, bracelets, hair accessories, and jewelry sets from US$0.10.", gradient: "market-grad-jewelry", bestFor: "Fashion jewelry, hair accessories, budget accessories" },
  { nameEn: "Shuibei Jewelry Park", nameCn: "\u6c34\u8d1d\u73e0\u5b9d\u56ed", address: "\u6df1\u5733\u5e02\u7f57\u6e56\u533a\u8d1d\u4e3d\u5317\u8def99\u53f7\u4e07\u5c71\u73e0\u5b9d\u56ed", specialty: "China\u2019s largest gold and precious jewelry wholesale cluster. 7,000+ enterprises, 570,000 sqm. Handles 60% of China\u2019s gold wholesale and 70% of Shanghai Gold Exchange physical deliveries. Gold, K-gold, diamonds, jade, pearls, lab-grown stones.", gradient: "market-grad-jewelry", bestFor: "Gold jewelry, diamonds, precious stones" },
  { nameEn: "Liwan Plaza", nameCn: "\u8354\u6e7e\u5e7f\u573a", address: "\u5e7f\u5dde\u5e02\u8354\u6e7e\u533a\u4e0a\u4e0b\u4e5d\u6b65\u884c\u8857120\u53f7", specialty: "Guangzhou\u2019s largest jade and silver wholesale market. 1,500+ shops across eight floors. Specialises in 925 silver, jade, crystal, pearl, and bead jewelry. Basement levels focus on bulk beads, chains, and components.", gradient: "market-grad-jewelry", bestFor: "Silver jewelry, jade, pearls, beads, components" },
  { nameEn: "Hualin International Jade Market", nameCn: "\u534e\u6797\u56fd\u9645\u73e0\u5b9d\u57ce", address: "\u5e7f\u5dde\u5e02\u8354\u6e7e\u533a\u534e\u6797\u5bf4\u5386\u53f2\u6587\u5316\u8857\u533a", specialty: "300+ years of jade trading heritage. Over 1,000 shops across four buildings covering jadeite (Burma), nephrite (Hetian), semi-precious stones, carved pendants, bracelets, and rings. Accounts for 90% of Guangzhou\u2019s jade transactions.", gradient: "market-grad-jewelry", bestFor: "Jade, semi-precious stones, carvings" },
  { nameEn: "Zhanxi Watch & Clock Town", nameCn: "\u7ad9\u897f\u949f\u8868\u57ce", address: "\u5e7f\u5dde\u5e02\u8d8a\u79c0\u533a\u7ad9\u897f\u8def65\u53f7", specialty: "China\u2019s largest watch wholesale cluster. Nine major markets, 3,000+ vendors. Founded 1986. Mid-range fashion watches US$2\u201310, women\u2019s watches 80\u201385% of volume. Component sourcing, OEM matching, and repair services.", gradient: "market-grad-jewelry", bestFor: "Watches, watch components, clock accessories" },
  { nameEn: "Danyang Glasses City", nameCn: "\u4e39\u9633\u773c\u955c\u57ce", address: "\u6c5f\u82cf\u7701\u4e39\u9633\u5e02\u5f00\u53d1\u533a\u773c\u955c\u57ce", specialty: "World\u2019s largest spectacle lens production base. 1,600+ eyewear enterprises, 400M+ pairs of lenses annually. Complete supply chain: frames, lenses, sunglasses, reading glasses, and optical accessories. Annual output US$2.8 billion.", gradient: "market-grad-jewelry", bestFor: "Sunglasses, optical lenses, eyewear frames" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div>
      <p className="text-sm text-wf-text-secondary leading-relaxed mb-6 max-w-3xl">
        Jewelry and accessories sourcing happens across specialised wholesale markets, each dominating a different
        material or price tier. Yiwu leads for fashion jewelry volume, Shuibei for gold and precious stones,
        Liwan and Hualin for jade and silver, Zhanxi for watches, and Danyang for eyewear.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayMarkets.map((m) => (
          <MarketCard key={m.nameEn} {...m} />
        ))}
      </div>
    </div>
  );
}
