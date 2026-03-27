import type { Metadata } from "next";
import HomeFurniturePage from "@/components/home-furniture/HomeFurniturePage";

export const metadata: Metadata = {
  title:
    "Home & Furniture Sourcing Guide — Markets, Factories & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing furniture and home goods from China. Foshan Lecong market, Longjiang factories, CIFF trade fair, 1688 supplier discovery, and payment solutions. By WorldFirst.",
  keywords: [
    "furniture sourcing China",
    "Foshan furniture market",
    "Lecong furniture wholesale",
    "China furniture factory",
    "Longjiang sofa manufacturer",
    "CIFF Guangzhou 2026",
    "1688 furniture",
    "home decor China wholesale",
    "Dongguan office furniture",
    "WorldFirst",
  ],
};

export default function Page() {
  return <HomeFurniturePage />;
}
