import type { Metadata } from "next";
import BeautyPage from "@/components/beauty/BeautyPage";

export const metadata: Metadata = {
  title: "Beauty Sourcing Guide — Cosmetics, Skincare & Personal Care | China Sourcing Navigator",
  description: "Source beauty and cosmetics from China. Guangzhou, Shanghai, Qingdao markets, 1688 supplier discovery, trade shows, and OEM/ODM guidance. By WorldFirst.",
};

export default function Page() {
  return <BeautyPage />;
}
