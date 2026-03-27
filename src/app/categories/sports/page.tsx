import type { Metadata } from "next";
import SportsPage from "@/components/sports/SportsPage";

export const metadata: Metadata = {
  title:
    "Sports Equipment Sourcing Guide — Fitness Gear, Gym Equipment, Athletic Products | China Sourcing Navigator",
  description:
    "Complete guide to sourcing sports equipment from China. Quanzhou/Jinjiang sports brands capital, Xiamen fitness machines (60% of global treadmills), Ningbo gym accessories, Qingdao rubber weights, Ningjin commercial equipment, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "sports equipment sourcing China",
    "gym equipment manufacturer China",
    "fitness equipment factory China",
    "treadmill manufacturer Xiamen",
    "dumbbell supplier China",
    "Jinjiang sports shoes",
    "Quanzhou sportswear",
    "yoga mat wholesale China",
    "1688 sports equipment",
    "commercial gym equipment China",
    "WorldFirst",
  ],
};

export default function Page() {
  return <SportsPage />;
}
