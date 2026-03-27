import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Yiwu International Trade City (Outdoor)", nameCn: "\u4E49\u4E4C\u56FD\u9645\u5546\u8D38\u57CE\u4E8C\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u5DDE\u533A\u56FD\u9645\u5546\u8D38\u57CE\u4E8C\u533A", specialty: "District 2 of Futian Market covers camping and outdoor products. Thousands of suppliers offering tents, camping stools, portable tables, camping lamps, sleeping bags, picnic mats, hammocks. MOQs from 10\u2013100 pieces for stock items. Open 365 days.", gradient: "market-grad-bags", bestFor: "Low-MOQ camping accessories, mixed containers, trial orders" },
  { nameEn: "Lecong Furniture Market (Outdoor)", nameCn: "\u4E50\u4ECE\u5BB6\u5177\u57CE", address: "\u5E7F\u4E1C\u7701\u4F5B\u5C71\u5E02\u987A\u5FB7\u533A\u4E50\u4ECE\u9547", specialty: "World\u2019s largest furniture wholesale market. Thousands of outdoor furniture showrooms \u2014 rattan sets, aluminium patio dining, teak loungers, garden sofas, swing chairs. See and compare products in person before factory visits.", gradient: "market-grad-electronics", bestFor: "Outdoor furniture, garden sets, patio dining" },
  { nameEn: "Longjiang Furniture Zone", nameCn: "\u9F99\u6C5F\u5BB6\u5177\u4EA7\u4E1A\u57CE", address: "\u5E7F\u4E1C\u7701\u4F5B\u5C71\u5E02\u987A\u5FB7\u533A\u9F99\u6C5F\u9547", specialty: "Manufacturing epicentre for upholstered and outdoor furniture production in Foshan. Factory-direct pricing on outdoor sofas, cushioned loungers, and aluminium-frame seating. Ideal for high-volume buyers negotiating directly with factories.", gradient: "market-grad-default", bestFor: "Bulk outdoor furniture, factory-direct orders" },
  { nameEn: "Ningbo Outdoor Equipment Zone", nameCn: "\u5B81\u6CE2\u6237\u5916\u7528\u54C1\u4EA7\u4E1A\u5E26", address: "\u6D59\u6C5F\u7701\u5B81\u6CE2\u5E02\u4F59\u59DA\u533A", specialty: "Dense cluster of tent, camping furniture, and sleeping bag manufacturers in Yuyao and surrounding areas. Factory visits possible \u2014 most facilities welcome international buyers with advance notice. Naturehike and 20+ export-focused outdoor factories.", gradient: "market-grad-leather", bestFor: "Tents, camping furniture, sleeping bags, outdoor accessories" },
  { nameEn: "Canton Fair Complex (Phase 3 \u2014 Area D)", nameCn: "\u5E7F\u4EA4\u4F1A\u7B2C\u4E09\u671F D\u533A", address: "\u5E7F\u5DDE\u5E02\u6D77\u73E0\u533A\u9610\u6E2F\u4E1C\u8DEF380\u53F7", specialty: "Biannual trade fair. Phase 3 Area D covers camping, hiking, and outdoor sports products: tents, sleeping bags, backpacks, camping furniture, outdoor lighting, hammocks, canopies. Approximately 400 camping and outdoor suppliers each session.", gradient: "market-grad-bags", bestFor: "Trade fair sourcing, comparing suppliers, new products" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div>
      <p className="text-sm text-wf-text-secondary leading-relaxed mb-6 max-w-3xl">
        China&apos;s outdoor equipment wholesale clusters span three main regions: Ningbo
        in Zhejiang (tents and camping gear), Foshan in Guangdong (outdoor furniture),
        and Yiwu (accessories and mixed containers). Here are the key sourcing locations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayMarkets.map((m) => (
          <MarketCard key={m.nameEn} {...m} />
        ))}
      </div>
    </div>
  );
}
