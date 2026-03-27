import type { Metadata } from "next";
import ToysPage from "@/components/toys/ToysPage";

export const metadata: Metadata = {
  title:
    "Toy Sourcing Guide — Markets, Factories & Safety Compliance | China Sourcing Navigator",
  description:
    "Complete guide to sourcing toys from China. Dongguan, Yiwu, Guangzhou & Qingdao factories, safety compliance (CPSIA, EN71, ASTM F963), 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "toy sourcing China",
    "China toy factory",
    "CPSIA toy compliance",
    "Yiwu toy market",
    "Dongguan toy manufacturer",
    "EN71 toy testing",
    "1688 toys",
    "Guangzhou toy wholesale",
    "plush toy China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <ToysPage />;
}
