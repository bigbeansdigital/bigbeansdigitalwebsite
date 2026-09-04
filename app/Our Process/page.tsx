import type { Metadata } from "next";
import Header from "@/components/Header";
import OurProcess from "@/components/OurProcess";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Our Work | Social Media & Branding Agency | India & UK",
  description:
    "Explore BIGBEANS DIGITAL projects in social media marketing, branding, and digital marketing for startups and businesses across India & UK.",
};

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <OurProcess />
      <Footer />
    </>
  );
}