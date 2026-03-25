import type { Metadata } from "next";
import FoshanPage from "@/components/foshan/FoshanPage";

export const metadata: Metadata = {
  title:
    "Foshan Sourcing Guide — Furniture, Ceramics & Building Materials | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Foshan. Lecong furniture market, Nanzhuang ceramics, Dali aluminium, trade shows, 1688 supplier discovery, and payment solutions. By WorldFirst.",
  keywords: [
    "Foshan sourcing",
    "Lecong furniture market",
    "Foshan ceramics",
    "Nanzhuang tiles",
    "Foshan aluminium",
    "China furniture sourcing",
    "Foshan trade shows",
    "1688 suppliers",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <FoshanPage />;
}
