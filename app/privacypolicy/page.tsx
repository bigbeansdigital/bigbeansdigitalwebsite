import type { Metadata } from "next";
import Header from "@/components/Header";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | BIGBEANS DIGITAL | India & United Kingdom",
  description:
    "Read BIGBEANS DIGITAL’s Privacy Policy to understand how we collect, use, protect, and manage your personal information across India & UK.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}