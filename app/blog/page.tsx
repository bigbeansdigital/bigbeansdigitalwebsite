import type { Metadata } from "next";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import InstagramButton from "@/components/InstagramButton";


export const metadata: Metadata = {
  title:
    "Digital Marketing & Social Media Marketing Blog | India & UK",
  description:
    "Explore digital marketing, social media, branding, SEO, and AI insights for startups and businesses in India & UK. Read expert tips and strategies.",
};







export default function BlogPage() {
  return (
    <>
      <Header />
      <Blog />
      <Footer />
      <InstagramButton />
    </>
  );
}