import type { Metadata } from "next";
import Header from "@/components/Header";
import WebsiteSeoAudit from "@/components/blogs/website-seo-audit";
import Footer from "@/components/Footer";
import InstagramButton from "@/components/InstagramButton";

export const metadata: Metadata = {
  title: "How to Do a Website SEO Audit Before Hiring an Agency",
  description:
    "Learn how to do a website SEO audit yourself. Use this DIY SEO audit checklist to find speed, indexing, keyword, and technical SEO issues.",

  openGraph: {
    title: "How to Do a Website SEO Audit Before Hiring an Agency",
    description:
      "Learn how to do a website SEO audit yourself. Use this DIY SEO audit checklist to find speed, indexing, keyword, and technical SEO issues.",
    url: "https://bigbeansdigital.com/blog/website-seo-audit",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/website-seo-audit.webp",
        width: 1350,
        height: 1080,
        alt: "How to Do a Website SEO Audit Before Hiring an Agency - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function WebsiteSeoAuditPage() {
  return (
    <>
      <Header />
      <WebsiteSeoAudit />
      <Footer />
      <InstagramButton />
    </>
  );
}