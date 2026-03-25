import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Danyang International Optical Center (丹阳国际眼镜城)", nameCn: "丹阳国际眼镜城", address: "丹阳市眼镜城 (搜索 丹阳眼镜城 导航)", specialty: "600+ retail/wholesale shops. Finished glasses, lenses (single vision, progressive, photochromic), frames, sunglasses, contact lenses, optical equipment. 6 billion+ yuan annual sales.", gradient: "market-grad-electronics", bestFor: "Complete eyewear sourcing, price comparison, supplier discovery" },
  { nameEn: "Danyang Eyewear Industrial Park (丹阳眼镜产业园)", nameCn: "丹阳眼镜产业园", address: "丹阳市司徒镇工业区", specialty: "Manufacturing cluster — OEM/ODM lens factories, frame production, lens coating facilities, optical equipment manufacturers. 600+ factories in the wider area.", gradient: "market-grad-electronics", bestFor: "Factory-direct sourcing, OEM/ODM orders, bulk production" },
  { nameEn: "Situ Town Manufacturing Zone (司徒镇制造区)", nameCn: "司徒镇眼镜制造基地", address: "丹阳市司徒镇", specialty: "Highest concentration of lens manufacturing. Raw material suppliers, lens grinding, coating lines, and finished lens production all within the township.", gradient: "market-grad-electronics", bestFor: "Lens manufacturing, raw optical materials, coating services" },
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
