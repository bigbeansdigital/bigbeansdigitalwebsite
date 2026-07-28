import type { Metadata } from "next";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title:
    "Best Digital Marketing Agency | BIGBEANS DIGITAL Blog | AI, Social Media, Branding & Business Growth",
  description:
    "Read the latest insights from BIGBEANS DIGITAL on Digital Marketing, AI, Social Media Marketing, Google Ads, Meta Ads, Branding, Graphic Design, Performance Marketing, startup growth, and business trends to help your business grow.",
};







export default function BlogPage() {
  return (
    <>
      <Header />
      <Blog />
      <Footer />
    </>
  );
}