import type { Metadata } from "next";
import ZhengzhouPage from "@/components/zhengzhou/ZhengzhouPage";

export const metadata: Metadata = {
  title:
    "Zhengzhou Sourcing Guide — Electronics, Logistics & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Zhengzhou. iPhone City, CR Express logistics gateway, food processing hub, 1688 supplier discovery, and payment solutions. By WorldFirst.",
  keywords: [
    "Zhengzhou sourcing",
    "iPhone City",
    "CR Express",
    "China-Europe railway",
    "China sourcing guide",
    "1688 suppliers",
    "Zhengzhou factories",
    "Henan manufacturing",
    "Foxconn Zhengzhou",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <ZhengzhouPage />;
}
