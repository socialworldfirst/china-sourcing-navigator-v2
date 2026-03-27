import type { Metadata } from "next";
import LightingPage from "@/components/lighting/LightingPage";

export const metadata: Metadata = {
  title:
    "Lighting Sourcing Guide — Factories, Markets & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing lighting from China. Zhongshan Guzhen decorative lighting, Foshan commercial LED, Shenzhen smart lighting, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "lighting sourcing China",
    "Guzhen lighting market",
    "Zhongshan lighting capital",
    "LED sourcing China",
    "China lighting supplier",
    "1688 lighting",
    "smart lighting China",
    "decorative lighting wholesale",
    "WorldFirst",
  ],
};

export default function Page() {
  return <LightingPage />;
}
