import type { Metadata } from "next";
import Header from "@/components/Header";
import DigitalMarketingAgencyLondon from "@/components/landingpage/digital-marketing-agency-london";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in London | Big Beans Digital",
  description:
    "We’re a specialist Digital Marketing Agency in London, scaling SMEs to household names and major players across the London. Get in touch today.",

  openGraph: {
    title: "Digital Marketing Agency in London | Big Beans Digital",
    description:
      "We’re a specialist Digital Marketing Agency in London, scaling SMEs to household names and major players across the London. Get in touch today.",
    url: "https://bigbeansdigital.com/digital-marketing-agency-london",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/citylandingpage/london.webp",
        width: 1350,
        height: 1080,
        alt: "Digital Marketing Agency in London - Big Beans Digital",
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