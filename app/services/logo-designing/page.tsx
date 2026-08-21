import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoDesigning from "@/components/Services/logo-designing";

export const metadata: Metadata = {
  title:
    "Best Logo Designing Services for Startups | India USA & UK",
  description:
    "Get professional logo designing services for startups in India & UK. Create a memorable brand identity with creative, strategic logo design.",
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