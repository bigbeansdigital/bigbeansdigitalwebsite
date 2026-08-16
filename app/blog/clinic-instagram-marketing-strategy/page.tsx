import type { Metadata } from "next";
import Header from "@/components/Header";
import ClinicInstagramMarketingStrategy from "@/components/blogs/clinic-instagram-marketing-strategy";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "How to Do SMM for a New Clinic in India | BigBeans",
  description:
    "Learn what to post when launching a clinic on Instagram, from educational content to trust-building posts that attract patients. Get started with BigBeans Digital.",

  openGraph: {
    title: "How to Do SMM for a New Clinic in India | BigBeans",
    description:
      "Learn what to post when launching a clinic on Instagram, from educational content to trust-building posts that attract patients.",
    url: "https://bigbeansdigital.com/blog/clinic-instagram-marketing-strategy",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/allblogs/singleblogs/clinic-instagram-marketing-strategy.png",
        width: 1200,
        height: 630,
        alt: "How to Do SMM for a New Clinic in India - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function ClinicInstagramMarketingStrategyPage() {
  return (
    <>
      <Header />
      <ClinicInstagramMarketingStrategy />
      <Footer />
      <WhatsAppButton />
    </>
  );
}