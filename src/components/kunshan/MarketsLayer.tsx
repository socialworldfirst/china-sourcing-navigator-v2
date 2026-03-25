import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Kunshan Economic & Technological Development Zone (KETD)", nameCn: "昆山经济技术开发区", address: "昆山市经济技术开发区", specialty: "115 km², 2,360+ foreign companies from 51 countries. US$39.6B total foreign investment. Foxconn, Compal, electronics information, optoelectronics.", gradient: "market-grad-electronics", bestFor: "Electronics assembly, optoelectronics, ODM partnerships" },
  { nameEn: "Kunshan Comprehensive Bonded Zone", nameCn: "昆山综合保税区", address: "昆山市综合保税区", specialty: "China’s first state-level export processing zone. Duty-free imports, VAT exemptions, export rebates. US$48B trade volume.", gradient: "market-grad-electronics", bestFor: "Export manufacturing, duty-free processing, re-export" },
  { nameEn: "Kunshan New & Hi-tech Industrial Development Zone", nameCn: "昆山高新技术产业开发区", address: "昆山市高新区", specialty: "First county-level city to receive national hi-tech zone status. Yangcheng Lake Technology Park, Wusong River Industrial Park.", gradient: "market-grad-electronics", bestFor: "Hi-tech R&D, new materials, advanced manufacturing" },
  { nameEn: "Huaqiao Economic Development Zone", nameCn: "花桥经济开发区", address: "昆山市花桥经济开发区", specialty: "Connected to Shanghai Metro Line 11. Cross-border e-commerce, service outsourcing, Taiwanese Goods Exhibition Hall.", gradient: "market-grad-electronics", bestFor: "Cross-border e-commerce, Shanghai integration" },
  { nameEn: "Smart Factory Kunshan / German Industrial Park", nameCn: "昆山智能工厂 / 德国工业园", address: "昆山市张浦镇德普路", specialty: "Industry 4.0 demo center. Collaborative robots, remote monitoring, IIoT testbeds. Sino-German cooperation.", gradient: "market-grad-electronics", bestFor: "Industry 4.0, automation, smart manufacturing" },
  { nameEn: "National Kunshan Opto-Electronics Industrial Park", nameCn: "昆山光电产业园", address: "昆山经济技术开发区内", specialty: "InfoVision Optoelectronics (TFT-LCD), Visionox (OLED). Display panel manufacturing cluster within KETD.", gradient: "market-grad-electronics", bestFor: "Display panels, TFT-LCD, OLED sourcing" },
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
