import type { Metadata } from "next";
import Header from "@/components/Header";
import InHousevsAgency from "@/components/blogs/In-HousevsAgency";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "In-House vs Agency: Social Media for London Startups",
  description:
    "Should your London startup hire in-house or outsource social media? Discover the key signs, costs, benefits and when an agency is the smarter choice for growth.",
};

export default function InHousevsAgencyPage() {
  return (
    <>
      <Header />
      <InHousevsAgency />
      <Footer />
    </>
  );
}