import type { Metadata } from "next";
import Header from "@/components/Header";
import DigitalMarketingAgencymumbai from "@/components/landingpage/digital-marketing-agency-mumbai";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Mumbai | Big Beans Digital",
  description:
    "Looking for the best digital marketing agency in Mumbai? BigBeans offers expert digital marketing, advertising, branding and growth solutions for businesses in Mumbai.",

  openGraph: {
    title: "Best Creative Social Media Marketing Agency in Kolkata",
    description:
      "Looking for the best digital marketing agency in Mumbai? BigBeans offers expert digital marketing, advertising, branding and growth solutions for businesses in Mumbai.",
    url: "https://bigbeansdigital.com/digital-marketing-agency-mumbai",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/landingpage/hero.webp",
        width: 1350,
        height: 1080,
        alt: "Best Creative Social Media Marketing Agency in Mumbai - Big Beans Digital",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function DigitalMarketingAgencyLondonPage() {
  return (
    <>
      <Header />
      <DigitalMarketingAgencymumbai />
      <Footer />
      <WhatsAppButton />
    </>
  );
}