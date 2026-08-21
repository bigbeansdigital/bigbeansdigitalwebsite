import type { Metadata } from "next";
import Header from "@/components/Header";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Social Media Marketing Agency for Startups | Contact BIGBEANS DIGITAL ",
  description:
    "Contact BIGBEANS DIGITAL for social media marketing, branding, and digital marketing services for startups in India & UK. Get in touch today.",
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