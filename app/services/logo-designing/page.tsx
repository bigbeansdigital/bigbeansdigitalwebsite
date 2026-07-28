import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoDesigning from "@/components/Services/logo-designing";

export const metadata: Metadata = {
  title:
    "Best Logo Design & Branding Agency for Startups | BIGBEANS DIGITAL",
  description:
    "Build a memorable brand with BIGBEANS DIGITAL, the Best Logo Design & Branding Agency for Startups. We create professional logos, brand identities, and creative branding solutions that help businesses stand out across London, India, USA & Dubai.",
};

export default function LogoDesigningPage() {
  return (
    <>
      <Header />
      <LogoDesigning />
      <Footer />
    </>
  );
}