import type { Metadata } from "next";
import CantonFairToolkitPage from "@/components/canton-fair/CantonFairToolkitPage";

export const metadata: Metadata = {
  title: "Canton Fair 2026 Toolkit — Everything You Need | China Sourcing Navigator",
  description:
    "Your complete toolkit for Canton Fair 2026. Phase dates, venue maps, registration, hotels, apps, payment setup, and a downloadable checklist. Built for buyers attending in person.",
  keywords: [
    "Canton Fair 2026",
    "Canton Fair toolkit",
    "Canton Fair guide",
    "Canton Fair registration",
    "Canton Fair dates",
    "Canton Fair phases",
    "Guangzhou trade fair",
    "China sourcing",
    "WorldFirst",
    "pay Chinese suppliers",
  ],
};

export default function Page() {
  return <CantonFairToolkitPage />;
}
