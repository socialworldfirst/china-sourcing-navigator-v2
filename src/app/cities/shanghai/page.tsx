import type { Metadata } from "next";
import ShanghaiPage from "@/components/shanghai/ShanghaiPage";

export const metadata: Metadata = {
  title:
    "Shanghai Sourcing Guide — Trade Services, Fashion, Auto Parts & Semiconductors | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Shanghai. Trade services, fashion markets, automotive parts, semiconductors, chemicals, and food & beverage equipment. By WorldFirst.",
  keywords: [
    "Shanghai sourcing",
    "Shanghai trade services",
    "Shanghai fashion",
    "South Bund Fabric Market",
    "Qipu Road wholesale",
    "Shanghai automotive parts",
    "Zhangjiang semiconductors",
    "SAIC Motor",
    "Shanghai Chemical Industry Park",
    "CIIE",
    "Automechanika Shanghai",
    "SIAL Shanghai",
    "China sourcing guide",
    "1688 suppliers",
    "WorldFirst",
  ],
};

export default function Page() {
  return <ShanghaiPage />;
}
