import type { Metadata } from "next";
import AppliancesPage from "@/components/appliances/AppliancesPage";

export const metadata: Metadata = {
  title: "Appliances Sourcing Guide — Kitchen, Home & Small Appliances | China Sourcing Navigator",
  description: "Source appliances from China. Ningbo/Cixi small appliances, Foshan/Shunde kitchen appliances, Qingdao white goods. 1688 supplier discovery, trade shows, certifications, and payment solutions. By WorldFirst.",
  keywords: [
    "appliance sourcing China",
    "Cixi small appliances",
    "Shunde kitchen appliances",
    "Ningbo appliance factory",
    "air fryer manufacturer China",
    "rice cooker supplier",
    "Midea OEM",
    "Haier factory",
    "1688 appliances",
    "UL certification appliances",
    "WorldFirst",
  ],
};

export default function Page() {
  return <AppliancesPage />;
}
