import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Yiwu International Trade City (Hardware)", nameCn: "\u4E49\u4E4C\u56FD\u9645\u5546\u8D38\u57CE\u4E8C\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u5DDE\u533A\u56FD\u9645\u5546\u8D38\u57CE\u4E8C\u533A", specialty: "District 2, floors 1\u20132. Approximately 3,000 booths across G2 and F2 sections covering hand tools, power tools, cutting tools, locks, fittings, plumbing hardware, and electrical accessories. MOQs from 10\u2013100 pieces for stock items. Open 365 days.", gradient: "market-grad-bags", bestFor: "Low-MOQ mixed hardware, sampling, quick comparison" },
  { nameEn: "Yongkang Hardware City", nameCn: "\u6C38\u5EB7\u4E94\u91D1\u57CE", address: "\u6D59\u6C5F\u7701\u91D1\u534E\u5E02\u6C38\u5EB7\u5E02", specialty: "China\u2019s hardware capital. 30,000+ enterprises across power tools, hand tools, doors, locks, cups, cookware, and electric garden tools. 1,700 power tool factories alone. Annual industrial output of 80 billion yuan. The country\u2019s biggest concentration of hardware manufacturers.", gradient: "market-grad-electronics", bestFor: "Power tools, hand tools, factory-direct sourcing" },
  { nameEn: "Haiyan Fastener Industrial Park", nameCn: "\u6D77\u76D0\u7D27\u56FA\u4EF6\u4EA7\u4E1A\u56ED", address: "\u6D59\u6C5F\u7701\u5609\u5174\u5E02\u6D77\u76D0\u53BF", specialty: "One of China\u2019s top three fastener production bases. 400+ enterprises with output exceeding 12 billion yuan. Self-operated exports account for 9% of the national total. Bolts, nuts, screws, washers, threaded rods, and structural fasteners.", gradient: "market-grad-electronics", bestFor: "Standard and custom fasteners, bulk orders" },
  { nameEn: "Tianping Architecture Hardware City", nameCn: "\u5929\u5E73\u5EFA\u7B51\u4E94\u91D1\u57CE", address: "\u5E7F\u5DDE\u5E02\u6D77\u73E0\u533A\u5929\u5E73\u67B6", specialty: "Southern China\u2019s largest wholesale centre for architectural and decorative hardware. Locks, hinges, handles, door closers, drawer slides, and building fittings. Strong selection of furniture hardware and cabinet accessories.", gradient: "market-grad-default", bestFor: "Architectural hardware, furniture fittings, locks" },
  { nameEn: "Ningbo Fastener & Hand Tools Zone", nameCn: "\u5B81\u6CE2\u7D27\u56FA\u4EF6\u4E0E\u624B\u5DE5\u5177\u533A", address: "\u6D59\u6C5F\u7701\u5B81\u6CE2\u5E02\u911E\u5DDE\u533A", specialty: "Dense cluster of wrench, socket set, plier, and fastener manufacturers in Yinzhou and Cixi districts. Yonggang Fasteners alone produces 20,000+ tonnes annually (90% exported). Ningbo-Zhoushan Port gives direct logistics access.", gradient: "market-grad-leather", bestFor: "Hand tools, wrenches, socket sets, fasteners" },
  { nameEn: "Canton Fair Complex (Phase 1)", nameCn: "\u5E7F\u4EA4\u4F1A\u7B2C\u4E00\u671F", address: "\u5E7F\u5DDE\u5E02\u6D77\u73E0\u533A\u9610\u6E2F\u4E1C\u8DEF380\u53F7", specialty: "Biannual trade fair. Phase 1 covers hardware, tools, machinery, and equipment. Categories include manual tools, electric tools, pneumatic tools, hydraulic tools, fasteners, locks, wire mesh, welding materials, and sundry hardware.", gradient: "market-grad-bags", bestFor: "Trade fair sourcing, comparing suppliers, new products" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div>
      <p className="text-sm text-wf-text-secondary leading-relaxed mb-6 max-w-3xl">
        China&apos;s hardware wholesale clusters span three regions: Yongkang in Zhejiang
        (power tools and hand tools), Ningbo/Haiyan (fasteners and hand tools), and Yiwu
        (low-MOQ mixed hardware). Here are the key sourcing locations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayMarkets.map((m) => (
          <MarketCard key={m.nameEn} {...m} />
        ))}
      </div>
    </div>
  );
}
