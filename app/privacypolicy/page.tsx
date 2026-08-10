import type { Metadata } from "next";
import Header from "@/components/Header";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | BIGBEANS DIGITAL",
  description:
    "Read the Privacy Policy of BIGBEANS DIGITAL to understand how we collect, use, protect, and manage your information.",
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