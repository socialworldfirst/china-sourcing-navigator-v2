import type { Metadata } from "next";
import SuzhouPage from "@/components/suzhou/SuzhouPage";

export const metadata: Metadata = {
  title:
    "Suzhou Sourcing Guide — Silk, Textiles, Precision Manufacturing & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Suzhou. Shengze silk market, Changshu Garment City, precision manufacturing in SIP, 1688 supplier discovery, and payment solutions. By WorldFirst.",
  keywords: [
    "Suzhou sourcing",
    "Suzhou silk",
    "Shengze textile market",
    "Changshu Garment City",
    "Suzhou Industrial Park",
    "China sourcing guide",
    "1688 suppliers",
    "Suzhou factories",
    "precision manufacturing China",
    "wedding dress wholesale China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <SuzhouPage />;
}
