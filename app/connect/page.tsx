import type { Metadata } from "next";
import Header from "@/components/Header";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Contact BIGBEANS DIGITAL | Best Social Media Marketing  Agency for Startups",
  description:
    "Connect with BIGBEANS DIGITAL for the best Social Media Marketing , Social Media Marketing, Website Development, Branding, Google Ads, Meta Ads, and Performance Marketing services for startups across London, India, USA & Dubai.",
};

export default function ConnectPage() {
  return (
    <>
      <Header />
      <Connect />
      <Footer />
    </>
  );
}