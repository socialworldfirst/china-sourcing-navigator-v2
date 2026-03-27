import type { Metadata } from "next";
import HealthMedicalPage from "@/components/health-medical/HealthMedicalPage";

export const metadata: Metadata = {
  title:
    "Source Health & Medical Products from China | China Sourcing Navigator",
  description:
    "Complete guide to sourcing medical devices, health products, and wellness equipment from China. Shenzhen, Shanghai, Guangzhou & Suzhou factory clusters, CMEF trade shows, 1688 search terms, and regulatory compliance. By WorldFirst.",
  keywords: [
    "medical device sourcing China",
    "health products China",
    "Shenzhen medical devices",
    "Shanghai pharma",
    "CMEF trade show",
    "China medical equipment supplier",
    "1688 medical devices",
    "wellness equipment import",
    "pulse oximeter China",
    "dental equipment Foshan",
    "WorldFirst",
  ],
};

export default function Page() {
  return <HealthMedicalPage />;
}
