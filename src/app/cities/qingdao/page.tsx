import type { Metadata } from "next";
import QingdaoPage from "@/components/qingdao/QingdaoPage";

export const metadata: Metadata = {
  title:
    "Qingdao Sourcing Guide — Tires, Appliances & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Qingdao. Home to Haier and Hisense, China's tire and rubber capital, the world's eyelash production hub, and 7th busiest port globally. By WorldFirst.",
  keywords: [
    "Qingdao sourcing",
    "Qingdao tires",
    "Haier appliances",
    "Hisense electronics",
    "Qingdao eyelashes",
    "China sourcing guide",
    "1688 suppliers",
    "Shandong manufacturing",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <QingdaoPage />;
}
