import type { Metadata } from "next";
import Header from "@/components/Header";
import Academy from "@/components/Academy";
import Courses from "@/components/academy/Courses";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title:
    "Best Digital Marketing, AI, IT & Graphic Design Courses Institute Online | BIGBEANS Academy",
  description:
    "BIGBEANS Academy helps students go from zero to ₹30K–₹1L/month with online courses in AI, Digital Marketing, Graphic Design, Branding, Social Media Marketing, Google Ads, Meta Ads, Performance Marketing, and Content Creation through practical workshops and certification programs.",
};






export default function AcademyPage() {
  return (
    <>
      <Header />
      <Academy />
      <Footer />
    </>
  );
}