import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import FashionBrandNameIdeas from "@/components/blogs/100-fashion-brand-name-ideas";
import Footer from "@/components/Footer";
import InstagramButton from "@/components/InstagramButton";

export const metadata: Metadata = {
  title:
    "100 Fashion Brand Name Ideas That Actually Sell | Best Fashion Brand Name Ideas",
  description:
    "Get inspired by 100 Fashion Brand Name Ideas proven to sell, plus expert advice to pick a unique, future-ready brand name. | Big Beans Digital | Best Social Media Marketing Agency for Fashion Brand",

  openGraph: {
    title:
      "100 Fashion Brand Name Ideas That Actually Sell | Best Fashion Brand Name Ideas",
    description:
      "Get inspired by 100 Fashion Brand Name Ideas proven to sell, plus expert advice to pick a unique, future-ready brand name.",
    url: "https://bigbeansdigital.com/blog/100-fashion-brand-name-ideas",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/100-Fashion-Brand-Name-Ideas.webp",
        width: 1350,
        height: 1080,
        alt: "100 Fashion Brand Name Ideas That Actually Sell - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function FashionBrandNameIdeasPage() {
  return (
    <>
      <BlogHeader />
      <FashionBrandNameIdeas />
      <Footer />
      <InstagramButton />
    </>
  );
}