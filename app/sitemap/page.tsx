import type { Metadata } from "next";
import Header from "@/components/Header";
import Sitemap from "@/components/sitemap";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Sitemap | BIGBEANS DIGITAL | India & United Kingdom",
  description:
    "Explore the BIGBEANS DIGITAL sitemap to find our services, pages, blogs, academy, and resources for businesses across India & UK.",
};

export default function SitemapPage() {
  return (
    <>
      <Header />
      <Sitemap />
      <Footer />
    </>
  );
}