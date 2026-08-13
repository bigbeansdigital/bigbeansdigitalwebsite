import type { Metadata } from "next";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Branding from "@/components/Services/Branding";

export const metadata: Metadata = {
  title:
    "Best Branding Agency for Startups in London, India, USA & Dubai | BIGBEANS DIGITAL",
  description:
    "Build a powerful brand with BIGBEANS DIGITAL. We provide the best branding, brand strategy, logo design, graphic design, and visual identity services to help startups and businesses stand out, build trust, and grow across London, India, USA & Dubai.",
};



export default function BrandingPage() {
  return (
    <>
      <Header />
      <Branding />
      <Footer />
    </>
  );
}