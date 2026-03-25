import type { Metadata } from "next";
import YiwuPage from "@/components/yiwu/YiwuPage";

export const metadata: Metadata = {
  title:
    "Yiwu Sourcing Guide — Small Commodities, Markets & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Yiwu. International Trade City, 75,000+ booths, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "Yiwu sourcing",
    "Yiwu market",
    "Yiwu International Trade City",
    "China sourcing guide",
    "1688 suppliers",
    "Yiwu wholesale",
    "small commodities",
    "Yiwu suppliers",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <YiwuPage />;
}
