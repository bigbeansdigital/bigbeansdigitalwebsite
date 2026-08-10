import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata: Metadata = {
  title:
    "About BIGBEANS DIGITAL | Best Social Media Marketing  Agency for Startups",
  description:
    "Learn about BIGBEANS DIGITAL, a results-driven Best Social Media Marketing  Agency helping startups and growing businesses with Social Media Marketing, Website Development, Branding, Google Ads, Meta Ads, and Performance Marketing across London, India, USA & Dubai.",
};


export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Footer />
      <WhatsAppButton />
    </>
  );
}