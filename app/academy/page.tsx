import type { Metadata } from "next";
import Header from "@/components/Header";
import Academy from "@/components/Academy";
import Courses from "@/components/academy/Courses";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata: Metadata = {
  title:
    "Best Digital Marketing Courses in India & UK | BIGBEANS Academy",
  description:
    "Learn digital marketing, social media, branding, and AI skills with Big Beans Academy. Build practical skills for career and business growth.",
};






export default function AcademyPage() {
  return (
    <>
      <Header />
      <Academy />
      <Footer />
      <WhatsAppButton />
    </>
  );
}