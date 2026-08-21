import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata: Metadata = {
  title:
    "Best Digital Marketing Agency India |  BIGBEANS DIGITAL",
  description:
    "Meet BIGBEANS DIGITAL, a digital marketing agency helping startups in India & UK build brands, grow online, and reach more customers.",
};


export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Footer />
      <WhatsAppButton />
    </>
  );
}