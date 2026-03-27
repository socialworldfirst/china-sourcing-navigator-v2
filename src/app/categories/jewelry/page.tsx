import type { Metadata } from "next";
import JewelryPage from "@/components/jewelry/JewelryPage";

export const metadata: Metadata = {
  title:
    "Jewelry & Accessories Sourcing Guide — Fashion Jewelry, Watches, Sunglasses | China Sourcing Navigator",
  description:
    "Complete guide to sourcing jewelry and accessories from China. Yiwu fashion jewelry market (5,000+ booths), Guangzhou Panyu fine jewelry processing (60% of national output), Shenzhen Shuibei gold wholesale (60% of China's trade), Danyang eyewear (50% of global lenses), Zhanxi watch markets, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "jewelry sourcing China",
    "fashion jewelry wholesale Yiwu",
    "Panyu jewelry factory",
    "Shuibei gold wholesale",
    "China watch manufacturer",
    "sunglasses supplier China",
    "Danyang eyewear",
    "1688 jewelry",
    "jewelry trade show Hong Kong",
    "stainless steel jewelry Dongguan",
    "Liwan Plaza jade",
    "WorldFirst",
  ],
};

export default function Page() {
  return <JewelryPage />;
}
