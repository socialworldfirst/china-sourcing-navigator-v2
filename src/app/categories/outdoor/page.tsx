import type { Metadata } from "next";
import OutdoorPage from "@/components/outdoor/OutdoorPage";

export const metadata: Metadata = {
  title:
    "Outdoor & Camping Gear Sourcing Guide — Tents, Camping Furniture, Hiking Equipment | China Sourcing Navigator",
  description:
    "Complete guide to sourcing outdoor and camping gear from China. Ningbo tent factories (Naturehike HQ), Yiwu camping accessories, Foshan outdoor furniture, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "outdoor gear sourcing China",
    "camping equipment manufacturer China",
    "tent factory China",
    "Ningbo outdoor products",
    "camping furniture supplier",
    "outdoor furniture Foshan",
    "Yiwu camping accessories",
    "hiking gear wholesale China",
    "1688 outdoor equipment",
    "glamping tent manufacturer",
    "WorldFirst",
  ],
};

export default function Page() {
  return <OutdoorPage />;
}
