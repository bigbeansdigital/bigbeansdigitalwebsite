import type { Metadata } from "next";
import Header from "@/components/Header";
import DigitalMarketingAgencyLondon from "@/components/landingpage/digital-marketing-agency-london";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in London | Big Beans Digital",
  description:
    "Looking for a leading digital marketing agency in London? Big Beans Digital delivers digital marketing, advertising, branding and growth solutions for businesses.",

  openGraph: {
    title: "Digital Marketing Agency in London | Big Beans Digital",
    description:
      "Looking for a leading digital marketing agency in London? Big Beans Digital delivers digital marketing, advertising, branding and growth solutions for businesses.",
    url: "https://bigbeansdigital.com/digital-marketing-agency-london",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/landingpage/hero.webp",
        width: 1350,
        height: 1080,
        alt: "Best Digital Marketing Agency in London | Big Beans Digital",
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
      <DigitalMarketingAgencyLondon />
      <Footer />
      <WhatsAppButton />
    </>
  );
}