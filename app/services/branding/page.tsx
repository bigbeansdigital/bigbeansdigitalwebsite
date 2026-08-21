import type { Metadata } from "next";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Branding from "@/components/Services/Branding";

export const metadata: Metadata = {
  title:
    "Best Branding Agency for Startups | India & United Kingdom",
  description:
    "Build a powerful brand with BIGBEANS DIGITAL, a branding agency for startups in India & UK. Create a memorable identity and grow your brand.",
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