import type { Metadata } from "next";
import ChengduPage from "@/components/chengdu/ChengduPage";

export const metadata: Metadata = {
  title:
    "Chengdu Sourcing Guide — IT, Aerospace, Biotech & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Chengdu. IT outsourcing, Tianfu Software Park, biotech APIs, food products, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "Chengdu sourcing",
    "Chengdu IT outsourcing",
    "Tianfu Software Park",
    "Chengdu biotech",
    "Chengdu aerospace",
    "China sourcing guide",
    "Sichuan food sourcing",
    "Chengdu Hi-Tech Zone",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <ChengduPage />;
}
