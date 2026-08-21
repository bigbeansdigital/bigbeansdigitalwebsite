import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebsiteDevelopment from "@/components/Services/WebsiteDevelopment";

export const metadata: Metadata = {
  title:
    "Best Website Development Services for Startups | India USA & UK",
  description:
    "Build fast, modern websites with website development services for startups in India USA & UK. Create a powerful online presence with BIGBEANS DIGITAL.",
};


export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Header />
      <WebsiteDevelopment />
      <Footer />
    </>
  );
}