import type { Metadata } from "next";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Branding from "@/components/Services/Branding";

export const metadata: Metadata = {
  title:
    "Best Logo Designing and Branding Services for Startups In India UK USA",
  description:
    "Big Beans Digital builds brands that startups and early-stage businesses are proud of. Logo design, packaging, brand identity built to rank, convert, and last.",
};



export default function BrandingPage() {
  return (
    <>
      <Header />
      <Branding />
      <Footer />
      <WhatsAppButton />
    </>
  );
}