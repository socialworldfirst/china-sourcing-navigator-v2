import type { Metadata } from "next";
import ApparelPage from "@/components/apparel/ApparelPage";

export const metadata: Metadata = {
  title:
    "Apparel & Textiles Sourcing Guide — Markets, Factories & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing apparel and textiles from China. Guangzhou, Dongguan, Hangzhou & Keqiao markets, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "apparel sourcing China",
    "Guangzhou clothing market",
    "Keqiao textile market",
    "China garment factory",
    "clothing wholesale Guangzhou",
    "1688 apparel",
    "fabric sourcing China",
    "Shisanhang market",
    "WorldFirst",
  ],
};

export default function Page() {
  return <ApparelPage />;
}
