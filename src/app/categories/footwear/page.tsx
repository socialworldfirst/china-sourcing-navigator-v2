import type { Metadata } from "next";
import FootwearPage from "@/components/footwear/FootwearPage";

export const metadata: Metadata = {
  title:
    "Footwear Sourcing Guide — Factories, Markets & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing footwear from China. Jinjiang sneaker factories, Guangzhou Zhanxi wholesale markets, Dongguan export shoes, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "footwear sourcing China",
    "Jinjiang sneakers",
    "Quanzhou shoe factory",
    "Guangzhou shoe market",
    "Zhanxi shoes",
    "Dongguan shoe factory",
    "China shoe supplier",
    "1688 shoes",
    "sneaker sourcing",
    "WorldFirst",
  ],
};

export default function Page() {
  return <FootwearPage />;
}
