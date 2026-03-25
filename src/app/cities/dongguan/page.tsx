import type { Metadata } from "next";
import DongguanPage from "@/components/dongguan/DongguanPage";

export const metadata: Metadata = {
  title:
    "Dongguan Sourcing Guide — Factories, OEM Assembly & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Dongguan. Factory towns, OEM assembly, plastics & moulds, electronics, furniture, knitwear, 1688 supplier discovery, and payment solutions. By WorldFirst.",
  keywords: [
    "Dongguan sourcing",
    "Dongguan factories",
    "Dongguan OEM",
    "China factory direct",
    "Dongguan electronics",
    "Dongguan furniture",
    "Dongguan plastics moulds",
    "Pearl River Delta manufacturing",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <DongguanPage />;
}
