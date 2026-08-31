import type { Metadata } from "next";
import Header from "@/components/Header";
import HowToChooseABusinessNameGuideForStartups from "@/components/blogs/how-to-choose-a-business-name-guide-for-startups";
import Footer from "@/components/Footer";
import InstagramButton from "@/components/InstagramButton";

export const metadata: Metadata = {
  title: "How to Choose a Business Name: A Complete Guide for Startups",
  description:
    "A practical, step-by-step guide to choosing a business name — brainstorming methods, legal checks for India and the UK, and a scoring framework to help you commit.",

  openGraph: {
    title: "How to Choose a Business Name: A Complete Guide for Startups",
    description:
      "A practical, step-by-step guide to choosing a business name — brainstorming methods, legal checks for India and the UK, and a scoring framework to help you commit.",
    url: "https://bigbeansdigital.com/blog/how-to-choose-a-business-name-guide-for-startups",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/how-to-choose-a-business-name-guide-for-startups.webp",
        width: 1350,
        height: 1080,
        alt: "How to Choose a Business Name: A Complete Guide for Startups - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function HowToChooseABusinessNameGuideForStartupsPage() {
  return (
    <>
      <Header />
      <HowToChooseABusinessNameGuideForStartups />
      <Footer />
      <InstagramButton />
    </>
  );
}