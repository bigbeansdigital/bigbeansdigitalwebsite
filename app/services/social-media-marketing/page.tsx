import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialMediaMarketing from "@/components/Services/SocialMediaMarketing";

export const metadata: Metadata = {
  title:
    "Best Social Media Marketing Agency Services | India USA & UK",
  description:
    "Grow your brand with social media marketing agency services in India & UK. Build engagement, reach customers, and drive business growth.",
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