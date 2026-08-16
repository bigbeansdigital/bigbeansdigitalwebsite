import type { Metadata } from "next";
import Header from "@/components/Header";
import WhyIsMyCompetitorGettingMoreLeads from "@/components/blogs/why-is-my-competitor-getting-more-leads";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Why Is My Competitor Getting More Leads? | Digital Marketing India",
  description:
    "Your competitor opened later but gets more leads. Discover how SEO, Google Business Profile, social media, reviews and local digital marketing can help Indian businesses grow.",

  openGraph: {
    title: "Why Is My Competitor Getting More Leads? | Digital Marketing India",
    description:
      "Your competitor opened later but gets more leads. Discover how SEO, Google Business Profile, social media, reviews and local digital marketing can help Indian businesses grow.",
    url: "https://bigbeansdigital.com/blog/why-is-my-competitor-getting-more-leads",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/why-is-my-competitor-getting-more-leads.png",
        width: 1200,
        height: 630,
        alt: "Why Is My Competitor Getting More Leads? - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function WhyIsMyCompetitorGettingMoreLeadsPage() {
  return (
    <>
      <Header />
      <WhyIsMyCompetitorGettingMoreLeads />
      <Footer />
      <WhatsAppButton />
    </>
  );
}