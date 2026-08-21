import type { Metadata } from "next";
import Header from "@/components/Header";
import SpiderManSocialMediaMarketingTrend from "@/components/blogs/spider-man-social-media-marketing-trend";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "Why Are Brands Suddenly Using Spider-Man in Social Media Marketing?",
  description:
    "Discover why brands are suddenly using Spider-Man-inspired visuals on social media and how moment marketing, viral trends and pop culture are shaping brand creativity in 2026.",

  openGraph: {
    title:
      "Why Are Brands Suddenly Using Spider-Man in Social Media Marketing?",
    description:
      "Discover why brands are suddenly using Spider-Man-inspired visuals on social media and how moment marketing, viral trends and pop culture are shaping brand creativity in 2026.",
    url: "https://bigbeansdigital.com/blog/spider-man-social-media-marketing-trend",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/Spider-Man-inspired-social-media-marketing-creative.webp",
        width: 1350,
        height: 1080,
        alt: "Spider-Man-inspired social media marketing creative - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function SpiderManSocialMediaMarketingTrendPage() {
  return (
    <>
      <Header />
      <SpiderManSocialMediaMarketingTrend />
      <Footer />
      <WhatsAppButton />
    </>
  );
}