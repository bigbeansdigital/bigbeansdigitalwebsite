import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DigitalMarketingMastery from "@/components/academy/coursedetails/DigitalMarketingMastery";

export const metadata: Metadata = {
  title:
    "Best Social Media Marketing  Course with AI, Google Ads & Meta Ads | BIGBEANS Academy",
  description:
    "Learn Social Media Marketing  from industry experts with practical training in AI, Social Media Marketing, Google Ads, Meta Ads, Performance Marketing, Branding, Graphic Design, and Content Creation through hands-on projects and certification.",
};

export default function Page() {
  return (
    <>
      <Header />
      <DigitalMarketingMastery />
      <Footer />
    </>
  );
}