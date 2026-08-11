import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutBigbeansdigital from "@/components/blog/allblogs/demoblog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About BIGBEANS DIGITAL | BIGBEANS DIGITAL",
  description:
    "Learn more about BIGBEANS DIGITAL, our journey, services, team, and approach to digital marketing and branding.",
};

export default function demo() {
  return (
    <>
      <Header />
      <AboutBigbeansdigital />
      <Footer />
    </>
  );
}