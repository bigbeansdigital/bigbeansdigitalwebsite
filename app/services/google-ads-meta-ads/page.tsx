import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAdsMetaAds from "@/components/Services/googleads&metaads";


export const metadata: Metadata = {
  title:
    "Best Google Ads & Meta Ads Agency for Startups | BIGBEANS DIGITAL",
  description:
    "Generate more leads and sales with the Best Google Ads & Meta Ads Agency for Startups. BIGBEANS DIGITAL creates ROI-driven Performance Marketing campaigns that help startups and businesses scale faster across London, India, USA & Dubai.",
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