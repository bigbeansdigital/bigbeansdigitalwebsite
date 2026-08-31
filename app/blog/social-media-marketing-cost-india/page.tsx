import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialMediaMarketingCostIndia from "@/components/blogs/social-media-marketing-cost-india";
import Footer from "@/components/Footer";
import InstagramButton from "@/components/InstagramButton";

export const metadata: Metadata = {
  title: "Social Media Marketing Cost in India | BigBeans Digital",
  description:
    "Discover social media marketing costs in India, what agencies charge, package pricing, and what affects your budget. Plan smarter with BigBeans Digital.",

  openGraph: {
    title: "Social Media Marketing Cost in India | BigBeans Digital",
    description:
      "Discover social media marketing costs in India, what agencies charge, package pricing, and what affects your budget. Plan smarter with BigBeans Digital.",
    url: "https://bigbeansdigital.com/blog/social-media-marketing-cost-india",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/social-media-marketing-cost-india.webp",
        width: 1350,
        height: 1080,
        alt: "Social Media Marketing Cost in India - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function SocialMediaMarketingCostIndiaPage() {
  return (
    <>
      <Header />
      <SocialMediaMarketingCostIndia />
      <Footer />
      <InstagramButton />
    </>
  );
}