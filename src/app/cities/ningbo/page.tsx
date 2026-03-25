import type { Metadata } from "next";
import NingboPage from "@/components/ningbo/NingboPage";

export const metadata: Metadata = {
  title:
    "Ningbo Sourcing Guide — Factories, Industrial Zones & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Ningbo. Factory-direct kitchenware, hardware, small appliances, stationery, and auto parts. World's busiest port. By WorldFirst.",
  keywords: [
    "Ningbo sourcing",
    "Ningbo factories",
    "Cixi small appliances",
    "Yuyao plastics",
    "Ningbo kitchenware",
    "Ningbo hardware tools",
    "Ningbo-Zhoushan port",
    "China sourcing guide",
    "1688 suppliers",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <NingboPage />;
}
