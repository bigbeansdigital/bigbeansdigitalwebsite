import type { Metadata } from "next";
import Header from "@/components/Header";
import Sitemap from "@/components/sitemap";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Sitemap | BIGBEANS DIGITAL",
  description:
    "Explore the BIGBEANS DIGITAL website sitemap and easily find our services, pages, resources, and other information.",
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