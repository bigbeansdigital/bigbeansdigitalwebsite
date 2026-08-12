import type { Metadata } from "next";
import Header from "@/components/Header";
import WebsiteSeoAudit from "@/components/blog/allblogs/website-seo-audit";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Do a Website SEO Audit Before Hiring an Agency",
  description:
    "Learn how to do a website SEO audit yourself. Use this DIY SEO audit checklist to find speed, indexing, keyword, and technical SEO issues.",
};

export default function WebsiteSeoAuditPage() {
  return (
    <>
      <Header />
      <WebsiteSeoAudit />
      <Footer />
    </>
  );
}