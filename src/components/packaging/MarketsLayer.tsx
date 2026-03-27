import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Yiwu International Trade City \u2014 Packaging District", nameCn: "\u4E49\u4E4C\u56FD\u9645\u5546\u8D38\u57CE\u4E8C\u533A\u4E00\u697CF\u533A", address: "\u4E49\u4E4C\u5E02\u7A20\u57CE\u8857\u9053\u57CE\u4E2D\u5317\u8DEF\u56FD\u9645\u5546\u8D38\u57CE\u4E8C\u533A", specialty: "Thousands of packaging suppliers in one building. Gift boxes, paper bags, ribbons, tissue paper, plastic bags, and small-commodity packaging. Walk-in sampling and immediate price comparison.", gradient: "market-grad-packaging", bestFor: "Wholesale gift boxes, paper bags, standard packaging" },
  { nameEn: "Guangzhou Panyu Packaging & Printing Zone", nameCn: "\u5E7F\u5DDE\u756A\u79BA\u5370\u5237\u5305\u88C5\u4EA7\u4E1A\u56ED", address: "\u5E7F\u5DDE\u5E02\u756A\u79BA\u533A\u5927\u9F99\u8857\u9053\u5370\u5237\u5305\u88C5\u4EA7\u4E1A\u56ED", specialty: "Dense cluster of offset printing and folding carton factories. Custom rigid boxes, magnetic closure boxes, and retail packaging with spot UV, embossing, and foil stamping. MOQs from 1,000 pieces.", gradient: "market-grad-packaging", bestFor: "Custom rigid boxes, folding cartons, luxury retail packaging" },
  { nameEn: "Dongguan Humen Printing District", nameCn: "\u4E1C\u839E\u864E\u95E8\u5370\u5237\u533A", address: "\u4E1C\u839E\u5E02\u864E\u95E8\u9547\u5370\u5237\u4EA7\u4E1A\u56ED", specialty: "Dongguan\u2019s printing heritage runs deep. Precision colour matching, multi-layer lamination, window die-cuts, and structural packaging. Strong on electronics packaging inserts and premium unboxing experiences.", gradient: "market-grad-packaging", bestFor: "Precision printing, die-cutting, electronics packaging" },
  { nameEn: "Cangnan Longgang Printing City (Wenzhou)", nameCn: "\u82CD\u5357\u9F99\u6E2F\u5370\u5237\u57CE", address: "\u6E29\u5DDE\u5E02\u82CD\u5357\u53BF\u9F99\u6E2F\u9547\u5370\u5237\u57CE", specialty: "China\u2019s printing capital. Self-adhesive labels, stickers, hang tags, flexible packaging, and promotional print materials. Hundreds of label and sticker factories concentrated in one town.", gradient: "market-grad-packaging", bestFor: "Labels, stickers, hang tags, promotional printing" },
  { nameEn: "Shanghai Jiading Packaging Zone", nameCn: "\u4E0A\u6D77\u5609\u5B9A\u5305\u88C5\u4EA7\u4E1A\u533A", address: "\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u5305\u88C5\u4EA7\u4E1A\u56ED", specialty: "Premium and luxury packaging for cosmetics, spirits, and high-end consumer goods. Design-forward factories that bridge Western brand expectations with Chinese manufacturing. Higher cost, higher finish quality.", gradient: "market-grad-packaging", bestFor: "Luxury packaging, cosmetics boxes, brand-critical packaging" },
  { nameEn: "Shantou Flexible Packaging Cluster", nameCn: "\u6C55\u5934\u8F6F\u5305\u88C5\u4EA7\u4E1A\u96C6\u7FA4", address: "\u6C55\u5934\u5E02\u6F6E\u9633\u533A\u548C\u5E73\u9547\u5305\u88C5\u4EA7\u4E1A\u56ED", specialty: "Flexible packaging powerhouse since 1995. Stand-up pouches, vacuum bags, lidding films, and gravure-printed food packaging. Specialises in aluminium-plastic composite printing for food and snack brands.", gradient: "market-grad-packaging", bestFor: "Flexible food packaging, stand-up pouches, vacuum bags" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div>
      <p className="text-sm text-wf-text-secondary leading-relaxed mb-6 max-w-3xl">
        China&apos;s packaging supply chain is spread across specialist clusters. Yiwu dominates
        wholesale volume, the Pearl River Delta leads on custom printing, and Wenzhou&apos;s
        Cangnan county is the undisputed capital of labels and stickers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayMarkets.map((m) => (
          <MarketCard key={m.nameEn} {...m} />
        ))}
      </div>
    </div>
  );
}
