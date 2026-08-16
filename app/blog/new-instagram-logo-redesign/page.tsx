import type { Metadata } from "next";
import Header from "@/components/Header";
import NewInstagramLogoRedesign from "@/components/blogs/new-instagram-logo-redesign";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Instagram Logo 2026: What Brands Need to Know | BigBeans",
  description:
    "Discover what the Instagram Logo 2026 redesign means for brands, marketers, and social media strategy, plus how to adapt your visual identity with BigBeans Digital.",

  openGraph: {
    title: "Instagram Logo 2026: What Brands Need to Know | BigBeans",
    description:
      "Discover what the Instagram Logo 2026 redesign means for brands, marketers, and social media strategy.",
    url: "https://bigbeansdigital.com/blog/new-instagram-logo-redesign",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/new-instagram-logo-redesign.png",
        width: 1200,
        height: 630,
        alt: "Instagram Logo 2026: What Brands Need to Know - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function NewInstagramLogoRedesignPage() {
  return (
    <>
      <Header />
      <NewInstagramLogoRedesign />
      <Footer />
      <WhatsAppButton />
    </>
  );
}