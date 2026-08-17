import type { Metadata } from "next";
import Header from "@/components/Header";
import RealEstateVideoMarketingIdeasForReels from "@/components/blogs/real-estate-video-marketing-ideas-for-reels";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "Real Estate Video Marketing Ideas By Big Beans Digital | Best Social Media Marketing Agency for Real Estate",
  description:
    "Discover Real Estate Video Marketing ideas for Reels that generate property leads, site visits and sales. Learn strategies for builders, brokers, developers and realtors in India | Big Beans Digital | Best Social Media Marketing Agency for Real Estate",

  openGraph: {
    title:
      "Real Estate Video Marketing Ideas By Big Beans Digital | Best Social Media Marketing Agency for Real Estate",
    description:
      "Discover Real Estate Video Marketing ideas for Reels that generate property leads, site visits and sales. Learn strategies for builders, brokers, developers and realtors in India.",
    url: "https://bigbeansdigital.com/blog/real-estate-video-marketing-ideas-for-reels",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/real-estate-video-marketing-ideas-for-reels.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Video Marketing Ideas for Reels - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function RealEstateVideoMarketingIdeasForReelsPage() {
  return (
    <>
      <Header />
      <RealEstateVideoMarketingIdeasForReels />
      <Footer />
      <WhatsAppButton />
    </>
  );
}