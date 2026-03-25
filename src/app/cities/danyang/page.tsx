import type { Metadata } from "next";
import DanyangPage from "@/components/danyang/DanyangPage";

export const metadata: Metadata = {
  title:
    "Danyang Sourcing Guide — Eyewear, Lenses & Optical Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Danyang, China's eyewear capital. 50% of the world's lenses, optical markets, factory zones, 1688 supplier discovery, and payment solutions. By WorldFirst.",
  keywords: [
    "Danyang sourcing",
    "Danyang eyewear",
    "Danyang lenses",
    "Danyang glasses",
    "China eyewear capital",
    "optical lenses China",
    "1688 suppliers",
    "Danyang factories",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <DanyangPage />;
}
