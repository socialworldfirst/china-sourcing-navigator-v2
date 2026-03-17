import type { Metadata } from "next";
import GuangzhouPage from "@/components/guangzhou/GuangzhouPage";

export const metadata: Metadata = {
  title:
    "Guangzhou Sourcing Guide — Markets, Factories & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Guangzhou. Wholesale markets, factory zones, 1688 supplier discovery, Canton Fair, and payment solutions. By WorldFirst.",
  keywords: [
    "Guangzhou sourcing",
    "Guangzhou wholesale markets",
    "Canton Fair 2026",
    "China sourcing guide",
    "1688 suppliers",
    "Guangzhou factories",
    "Pearl River Delta manufacturing",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <GuangzhouPage />;
}
