import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebsiteDevelopment from "@/components/Services/WebsiteDevelopment";

export const metadata: Metadata = {
  title:
    "Best Website Development Agency in KOlkata | BIGBEANS DIGITAL",
  description:
    "Grow your startup with BIGBEANS DIGITAL's Social Media Marketing Services. We help businesses across India, London and the USA with content creation, social media management, branding, audience growth and performance-driven marketing.",
};


export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Header />
      <WebsiteDevelopment />
      <Footer />
    </>
  );
}