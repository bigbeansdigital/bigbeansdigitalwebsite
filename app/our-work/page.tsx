import type { Metadata } from "next";
import Header from "@/components/Header";
import OurWork from "@/components/OurWork";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Our Work | Digital Marketing Portfolio | Website Development Portfolio | BIGBEANS DIGITAL",
  description:
    "Explore the portfolio of BIGBEANS DIGITAL featuring Social Media Marketing, Website Development, Branding, Google Ads, Meta Ads, Logo Design, and successful projects delivered for startups and growing businesses.",
};

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <OurWork />
      <Footer />
    </>
  );
}