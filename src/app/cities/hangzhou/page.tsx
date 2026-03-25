import type { Metadata } from "next";
import HangzhouPage from "@/components/hangzhou/HangzhouPage";

export const metadata: Metadata = {
  title:
    "Hangzhou Sourcing Guide — E-Commerce, Silk, Markets & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing from Hangzhou. Home to Alibaba and 1688, China's e-commerce capital. Silk markets, Sijiqing fashion wholesale, cross-border trade, and payment solutions. By WorldFirst.",
  keywords: [
    "Hangzhou sourcing",
    "Hangzhou wholesale markets",
    "Sijiqing clothing market",
    "Chinese Silk City",
    "1688 suppliers",
    "Alibaba headquarters",
    "Hangzhou factories",
    "cross-border e-commerce",
    "import from China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <HangzhouPage />;
}
