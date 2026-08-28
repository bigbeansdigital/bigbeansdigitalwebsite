import type { Metadata } from "next";
import Header from "@/components/Header";
import DigitalMarketingAgencykolkata from "@/components/landingpage/digital-marketing-agency-kolkata";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Best Creative Social Media Marketing Agency in Kolkata",
  description:
    "We’re a specialist Digital Marketing Agency in Kolkata, scaling SMEs to household names and major players across the London. Get in touch today.",

  openGraph: {
    title: "Best Creative Social Media Marketing Agency in Kolkata",
    description:
      "We’re a specialist Digital Marketing Agency in Kolkata, scaling SMEs to household names and major players across the London. Get in touch today.",
    url: "https://bigbeansdigital.com/digital-marketing-agency-kolkata",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/citylandingpage/london.webp",
        width: 1350,
        height: 1080,
        alt: "Best Creative Social Media Marketing Agency in Kolkata - Big Beans Digital",
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
      <DigitalMarketingAgencykolkata />
      <Footer />
      <WhatsAppButton />
    </>
  );
}