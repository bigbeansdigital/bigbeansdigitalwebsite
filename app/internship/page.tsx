import type { Metadata } from "next";
import Header from "@/components/Header";
import Internship from "@/components/Internship";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Best Online Internship Program | Digital Marketing Internship | Best Online Social Media Marketing Internship",
  description:
    "Join the BIGBEANS DIGITAL Online Internship Program and gain hands-on experience in AI, Digital Marketing, Social Media Marketing, Graphic Design, Branding, Google Ads, Meta Ads, and Content Creation through live projects and industry-focused training.",
};


export default function InternshipPage() {
  return (
    <>
      <Header />
      <Internship />
      <Footer />
    </>
  );
}