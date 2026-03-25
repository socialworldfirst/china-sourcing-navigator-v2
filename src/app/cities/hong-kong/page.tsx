import type { Metadata } from "next";
import HongKongPage from "@/components/hong-kong/HongKongPage";

export const metadata: Metadata = {
  title:
    "Hong Kong Sourcing Guide — Trade Orchestration, QC & Trade Finance | China Sourcing Navigator",
  description:
    "Complete guide to sourcing through Hong Kong. Trade orchestration, quality control, HKTDC trade shows, trade finance, jewelry sourcing, and payment solutions. By WorldFirst.",
  keywords: [
    "Hong Kong sourcing",
    "Hong Kong trade shows",
    "HKTDC",
    "Hong Kong quality control",
    "Hong Kong trade finance",
    "China sourcing guide",
    "Hong Kong jewelry",
    "Hong Kong vs Shenzhen",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <HongKongPage />;
}
