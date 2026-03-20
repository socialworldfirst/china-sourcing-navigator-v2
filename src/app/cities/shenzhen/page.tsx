import type { Metadata } from "next";
import ShenzhenPage from "@/components/shenzhen/ShenzhenPage";

export const metadata: Metadata = {
  title:
    "Shenzhen Sourcing Guide — Electronics, Hardware & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Shenzhen. Electronics markets, Huaqiangbei, factory zones, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "Shenzhen sourcing",
    "Shenzhen electronics",
    "Huaqiangbei market",
    "China sourcing guide",
    "1688 suppliers",
    "Shenzhen factories",
    "PCB manufacturing",
    "smart hardware China",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <ShenzhenPage />;
}
