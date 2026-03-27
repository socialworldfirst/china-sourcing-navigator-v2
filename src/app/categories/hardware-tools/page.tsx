import type { Metadata } from "next";
import HardwarePage from "@/components/hardware-tools/HardwarePage";

export const metadata: Metadata = {
  title:
    "Hardware & Tools Sourcing Guide — Hand Tools, Power Tools, Fasteners & Fittings | China Sourcing Navigator",
  description:
    "Complete guide to sourcing hardware and tools from China. Yongkang hardware capital (30,000+ enterprises), Ningbo fasteners, Yiwu 3,000-booth market, 1688 supplier discovery, Canton Fair Phase 1, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "hardware sourcing China",
    "Yongkang hardware capital",
    "power tools manufacturer China",
    "hand tools factory China",
    "fasteners supplier Ningbo",
    "Yiwu hardware market",
    "1688 hardware tools",
    "China tools wholesale",
    "Canton Fair hardware",
    "bolts screws nuts China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <HardwarePage />;
}
