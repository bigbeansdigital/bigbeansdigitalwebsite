import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAdsMetaAds from "@/components/Services/googleads&metaads";


export const metadata: Metadata = {
  title:
    "Performance Marketing Agency for Startups | India USA & UK",
  description:
    "Drive measurable growth with performance marketing for startups in India & UK. Maximize campaigns, leads, conversions, and ROI with BIGBEANS DIGITAL.",
};

export default function GoogleAdsMetaAdsPage() {
  return (
    <>
      <Header />
      <GoogleAdsMetaAds />
      <Footer />
    </>
  );
}