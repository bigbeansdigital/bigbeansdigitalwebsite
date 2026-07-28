import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialMediaMarketing from "@/components/Services/SocialMediaMarketing";

export const metadata: Metadata = {
  title:
    "Best Social Media Marketing Agency for Startups | BIGBEANS DIGITAL",
  description:
    "Grow your startup with BIGBEANS DIGITAL's Social Media Marketing Services. We help businesses across India, London and the USA with content creation, social media management, branding, audience growth and performance-driven marketing.",
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      <Header />
      <SocialMediaMarketing />
      <Footer />
    </>
  );
}