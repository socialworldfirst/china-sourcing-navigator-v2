import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Guangming Medical Device Cluster", nameCn: "\u5149\u660E\u533B\u7597\u5668\u68B0\u4EA7\u4E1A\u96C6\u7FA4", address: "\u6DF1\u5733\u5E02\u5149\u660E\u533A\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED", specialty: "Shenzhen\u2019s dedicated high-end medical device zone. 140+ companies including Mindray, producing patient monitors, imaging systems, and smart health devices.", gradient: "market-grad-medical", bestFor: "Patient monitors, ultrasound, diagnostic devices" },
  { nameEn: "Zhangjiang Medical Device Park", nameCn: "\u5F20\u6C5F\u533B\u7597\u5668\u68B0\u4EA7\u4E1A\u56ED", address: "\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A\u5F20\u6C5F\u9AD8\u79D1\u6280\u56ED\u533A", specialty: "China\u2019s pharma valley. 1,700+ biomedical companies, multinational R&D centres, cross-border manufacturing zone for high-end medical equipment.", gradient: "market-grad-medical", bestFor: "IVD, pharma, lab instruments, high-end devices" },
  { nameEn: "Suzhou Medpark", nameCn: "\u82CF\u5DDE\u533B\u7597\u5668\u68B0\u79D1\u6280\u4EA7\u4E1A\u56ED", address: "\u82CF\u5DDE\u5E02\u65B0\u533A\u79D1\u6280\u57CE", specialty: "600+ medical device enterprises with public testing platforms, IP services, and animal experiment facilities. China\u2019s strongest biomaterials talent pool.", gradient: "market-grad-medical", bestFor: "IVD reagents, consumables, medical imaging" },
  { nameEn: "Foshan Dental Equipment Cluster", nameCn: "\u4F5B\u5C71\u7259\u79D1\u8BBE\u5907\u96C6\u7FA4", address: "\u4F5B\u5C71\u5E02\u5357\u6D77\u533A\u5927\u6CA5\u9547", specialty: "Dozens of dental chair manufacturers with 20+ years of export experience. Full dental unit production from chairs to X-ray machines.", gradient: "market-grad-medical", bestFor: "Dental chairs, dental units, sterilisation" },
  { nameEn: "Global Medical Instruments Centre", nameCn: "\u5168\u7403\u533B\u7597\u5668\u68B0\u91C7\u8D2D\u4E2D\u5FC3", address: "\u5E7F\u5DDE\u5E02\u5357\u6C99\u533A\u4E07\u8FBE\u5E7F\u573A", specialty: "Guangzhou\u2019s B2B sourcing centre connecting domestic medical device producers with international buyers. Good for comparing products and pricing across categories.", gradient: "market-grad-medical", bestFor: "Disposable supplies, PPE, comparison shopping" },
  { nameEn: "Ningbo Medical Manufacturing Zone", nameCn: "\u5B81\u6CE2\u533B\u7597\u5236\u9020\u4E1A\u533A", address: "\u5B81\u6CE2\u5E02\u9104\u5DDE\u533A\u6295\u8D44\u521B\u4E1A\u4E2D\u5FC3", specialty: "Dense SME cluster producing disposable medical goods, respiratory products, and rehabilitation equipment. Port-adjacent for direct container loading.", gradient: "market-grad-medical", bestFor: "Disposable consumables, respiratory, wheelchairs" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div>
      <p className="text-sm text-wf-text-secondary leading-relaxed mb-6 max-w-3xl">
        Medical device sourcing in China revolves around dedicated industrial parks and government-designated
        clusters rather than traditional wholesale markets. These are the key locations where manufacturers,
        testing facilities, and export infrastructure converge.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayMarkets.map((m) => (
          <MarketCard key={m.nameEn} {...m} />
        ))}
      </div>
    </div>
  );
}
