import type { Metadata } from "next";
import Header from "@/components/Header";
import Viral80sAiPhotoTrendAndPrompt from "@/components/blogs/viral-80s-ai-photo-trend-and-prompt";
import Footer from "@/components/Footer";
import InstagramButton from "@/components/InstagramButton";

export const metadata: Metadata = {
  title:
    "Viral '80s Trend: Why Is it Suddenly popular and also the Prompt for 1980 image generation",
  description:
    "The 1980s AI photo trend is taking over social media. Here's what it is, why everyone's obsessed, and how your brand can use it with real ChatGPT prompts included.",

  openGraph: {
    title:
      "Viral '80s Trend: Why Is it Suddenly popular and also the Prompt for 1980 image generation",
    description:
      "The 1980s AI photo trend is taking over social media. Here's what it is, why everyone's obsessed, and how your brand can use it with real ChatGPT prompts included.",
    url: "https://bigbeansdigital.com/blog/viral-80s-ai-photo-trend-and-prompt",
    siteName: "BigBeans Digital",
    images: [
      {
        url: "https://bigbeansdigital.com/assets/blog/singleblogs/viral-80s-ai-photo-trend-and-prompt.webp",
        width: 1350,
        height: 1080,
        alt: "Viral '80s AI Photo Trend and Prompt - BigBeans Digital",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
};

export default function Viral80sAiPhotoTrendAndPromptPage() {
  return (
    <>
      <Header />
      <Viral80sAiPhotoTrendAndPrompt />
      <Footer />
      <InstagramButton />
    </>
  );
}