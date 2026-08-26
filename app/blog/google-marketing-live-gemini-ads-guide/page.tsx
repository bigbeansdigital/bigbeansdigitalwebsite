import type { Metadata } from "next";
import Header from "@/components/Header";
import GoogleMarketingLiveGeminiAdsGuide from "@/components/blogs/google-marketing-live-gemini-ads-guide";
import Footer from "@/components/Footer";
import InstagramButton from "@/components/InstagramButton";

export const metadata: Metadata = {
  title: "Google Marketing Live 2026: Gemini Ads Guide | Big Beans Digital",
  description:
    "Discover how Gemini-powered ad formats from Google Marketing Live 2026 reshape PPC. Learn key strategies for Conversational Ads, AEO & GEO growth.",

  openGraph: {
    title: "Google Marketing Live 2026: Gemini Ads Guide | Big Beans Digital",
    description:
      "Discover how Gemini-powered ad formats from Google Marketing Live 2026 reshape PPC. Learn key strategies for Conversational Ads, AEO & GEO growth.",
    url: "https://bigbeansdigital.com/blog/google-marketing-live-gemini-ads-guide",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/google-marketing-live-gemini-ads-guide.webp",
        width: 1350,
        height: 1080,
        alt: "Google Marketing Live 2026: Gemini Ads Guide - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function GoogleMarketingLiveGeminiAdsGuidePage() {
  return (
    <>
      <Header />
      <GoogleMarketingLiveGeminiAdsGuide />
      <Footer />
      <InstagramButton />
    </>
  );
}