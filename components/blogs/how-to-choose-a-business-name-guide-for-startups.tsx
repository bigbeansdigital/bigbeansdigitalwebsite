
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const thumbnail =
  "/assets/blog/singleblogs/how-to-choose-a-business-name-guide-for-startups.webp";

const pageUrl =
  "https://www.bigbeansdigital.com/blog/how-to-choose-a-business-name-guide-for-startups";

const articleTitle =
  "How to Choose a Business Name: A Complete Guide for Startups";

const aiPrompt = encodeURIComponent(
  `Please summarize this Big Beans Digital blog and also tell me more about Big Beans Digital at last in a clear and practical way. give me a brief about the blog along with what all is there in this blog
Blog title: ${articleTitle}
Page link: ${pageUrl}
Website Link : www.bigbeansdigital.com`
);

const tableOfContents = [
  {
    id: "section-1",
    title: "01. Your Business Name Will Appear Everywhere",
  },
  {
    id: "section-2",
    title: "02. Decide What Your Name Needs to Communicate",
  },
  {
    id: "section-3",
    title: "03. How to Generate Business Name Ideas",
  },
  {
    id: "section-4",
    title: "04. Check Every Name Before You Commit",
  },
  {
    id: "section-5",
    title: "05. Common Business Naming Mistakes",
  },
  {
    id: "section-6",
    title: "06. A Simple Framework for Comparing Your Final Names",
  },
  {
    id: "section-7",
    title: "07. When Professional Naming and Branding Help",
  },
  {
    id: "section-8",
    title: "08. Frequently Asked Questions",
  },
];

// Blog Posts Data
const blogCards = [
  {
    id: 5,
    image: "/assets/blog/singleblogs/clinic-instagram-marketing-strategy.webp",
    date: "August 14, 2026",
    primaryCategory: "Social Media",
    title: "How to Do SMM for a New Clinic in India | BigBeans",
    description:
      "Learn what to post when launching a clinic on Instagram, from educational reels to trust-building posts that attract regular patients.",
    link: "/blog/clinic-instagram-marketing-strategy",
    readTime: "5 min read",
  },
  {
    id: 6,
    image: "/assets/blog/singleblogs/new-instagram-logo-redesign.webp",
    date: "August 17, 2026",
    primaryCategory: "Brand Design",
    title: "New Instagram Logo 2026: Wordmark Redesign & Brand Refresh",
    description:
      "A critical breakdown of the new Instagram typography overhaul, public sentiment shifts, and what dynamic brand refreshes mean for digital marketers.",
    link: "/blog/new-instagram-logo-redesign",
    readTime: "4 min read",
  },
  {
    id: 7,
    image: "/assets/blog/singleblogs/why-is-my-competitor-getting-more-leads.webp",
    date: "August 17, 2026",
    primaryCategory: "Growth Strategy",
    title: "Why Is My Competitor Getting More Leads? | Digital Marketing India",
    description:
      "Your competitor opened later but takes the majority of local leads. Discover how local SEO, reviews, and omnichannel remarketing bridge the gap.",
    link: "/blog/why-is-my-competitor-getting-more-leads",
    readTime: "6 min read",
  },
];

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build relevant, creative and conversion-focused social media campaigns.",
    href: "https://www.bigbeansdigital.com/services/social-media-marketing",
  },
  {
    title: "Branding",
    description:
      "Build a memorable brand identity that stays consistent across every platform.",
    href: "https://www.bigbeansdigital.com/services/branding",
  },
  {
    title: "Google Ads & Meta Ads",
    description:
      "Reach high-intent audiences with targeted performance marketing campaigns.",
    href: "https://www.bigbeansdigital.com/services/google-ads-meta-ads",
  },
  {
    title: "Logo Designing",
    description:
      "Create a distinctive visual identity that makes your brand recognizable.",
    href: "https://www.bigbeansdigital.com/services/logo-designing",
  },
  {
    title: "Website Development",
    description:
      "Build modern websites designed to turn attention into meaningful action.",
    href: "https://www.bigbeansdigital.com/services/website-development",
  },
];

// Helper for yellow keyword links
const KeywordLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-[#F8BC04] hover:underline font-semibold transition-colors"
  >
    {children}
  </Link>
);

function ChatGPTIcon() {
  return (
    <img
      src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openai-chatgpt/default.svg"
      alt="OpenAI (ChatGPT)"
      width="24"
      height="24"
    />
  );
}

function GeminiIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="text-[#171717]"
    >
      <path
        d="M16 3C17.7 10.4 21.6 14.3 29 16C21.6 17.7 17.7 21.6 16 29C14.3 21.6 10.4 17.7 3 16C10.4 14.3 14.3 10.4 16 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================
   SOCIAL SHARE ICONS
========================= */

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="instagramGradient"
          x1="3"
          y1="21"
          x2="21"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.35" stopColor="#FF543E" />
          <stop offset="0.65" stopColor="#C837AB" />
          <stop offset="1" stopColor="#833AB4" />
        </linearGradient>
      </defs>

      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="url(#instagramGradient)"
      />

      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="3"
        stroke="white"
        strokeWidth="1.8"
      />

      <circle cx="12" cy="12" r="2.5" stroke="white" strokeWidth="1.8" />

      <circle cx="17.2" cy="6.9" r="1" fill="white" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#1877F2" />

      <path
        d="M13.5 19V12.8H15.6L15.9 10.4H13.5V8.9C13.5 8.2 13.7 7.7 14.7 7.7H16V5.55C15.4 5.48 14.8 5.43 14.2 5.43C12.3 5.43 11 6.6 11 8.75V10.4H9V12.8H11V19H13.5Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#0A66C2" />

      <path
        d="M8.2 9.8H5.9V17.7H8.2V9.8ZM7.05 6.2C6.3 6.2 5.7 6.8 5.7 7.55C5.7 8.3 6.3 8.9 7.05 8.9C7.8 8.9 8.4 8.3 8.4 7.55C8.4 6.8 7.8 6.2 7.05 6.2ZM18.3 13.15C18.3 10.75 16.95 9.55 15.15 9.55C13.7 9.55 13.05 10.35 12.7 10.85V9.8H10.5V17.7H12.8V13.8C12.8 12.75 13 11.75 14.35 11.75C15.7 11.75 15.7 13 15.7 13.85V17.7H18V13.15H18.3Z"
        fill="white"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#25D366" />

      <path
        d="M17.7 6.35C16.18 4.83 14.16 4 12.01 4C7.58 4 3.98 7.6 3.98 12.03C3.98 13.44 4.35 14.81 5.05 16.02L3.9 20.2L8.18 19.08C9.36 19.72 10.68 20.05 12.01 20.05H12.02C16.45 20.05 20.05 16.45 20.05 12.02C20.05 9.87 19.22 7.87 17.7 6.35ZM12.02 18.7C10.82 18.7 9.65 18.38 8.63 17.78L8.39 17.64L5.85 18.3L6.53 15.82L6.37 15.56C5.69 14.48 5.33 13.26 5.33 12.03C5.33 8.35 8.33 5.35 12.02 5.35C13.8 5.35 15.47 6.04 16.73 7.3C17.99 8.56 18.68 10.23 18.68 12.02C18.68 15.7 15.69 18.7 12.02 18.7ZM15.98 13.7C15.77 13.59 14.75 13.09 14.56 13.02C14.36 12.95 14.22 12.91 14.08 13.12C13.94 13.33 13.55 13.8 13.43 13.94C13.31 14.08 13.18 14.1 12.97 13.99C12.76 13.89 12.09 13.67 11.3 12.96C10.68 12.41 10.26 11.73 10.14 11.52C10.02 11.31 10.13 11.2 10.23 11.1C10.32 11.01 10.44 10.87 10.54 10.75C10.65 10.63 10.68 10.55 10.75 10.41C10.82 10.27 10.78 10.15 10.73 10.04C10.68 9.93 10.27 8.91 10.1 8.5C9.94 8.1 9.77 8.16 9.64 8.15C9.52 8.15 9.38 8.14 9.24 8.14C9.1 8.14 8.87 8.19 8.68 8.4C8.49 8.61 7.96 9.11 7.96 10.13C7.96 11.15 8.7 12.13 8.8 12.26C8.89 12.4 10.25 14.49 12.33 15.39C12.83 15.61 13.22 15.74 13.53 15.84C14.03 16 14.49 15.97 14.86 15.92C15.26 15.86 16.08 15.42 16.25 14.94C16.43 14.46 16.43 14.05 16.37 13.96C16.31 13.86 16.19 13.81 15.98 13.7Z"
        fill="white"
      />
    </svg>
  );
}

/* =========================
   FAQ DATA
========================= */

const faqs = [
  {
    q: "What is the best business name generator to use for a new company?",
    a: "There is no single tool. An AI business name generator is useful for creating large numbers of ideas quickly, but always manually check legal and domain availability.",
  },
  {
    q: "How do I get unique business name ideas without hiring an agency?",
    a: "Combine relevant words, use founder names, metaphors, or foreign-language roots. Use an AI tool to increase output, but filter with human judgment.",
  },
  {
    q: "What's the difference between a business name and a trading name?",
    a: "A registered legal name is on your incorporation documents. A trading name is what you use day-to-day. Both need trademark and domain checks.",
  },
  {
    q: "How do I check if a business name is already taken?",
    a: "Check the company registry, then the trademark database separately, followed by domain and social handles.",
  },
  {
    q: "Should my business name describe exactly what I sell?",
    a: "It depends. A descriptive name is clear immediately, while an evocative name gives you more flexibility to expand later.",
  },
  {
    q: "How long should a good business name be?",
    a: "Shorter is generally easier to remember, spell, and use in domains. Test how a longer name looks in a URL or logo before committing.",
  },
  {
    q: "Can I use an AI-generated name for a serious business?",
    a: "Yes, but do not assume availability. You still need to run manual trademark, registry, and spelling checks.",
  },
  {
    q: "Do I need to register a trademark before I start using a business name?",
    a: "You should check availability before major investments. Legal requirements vary, so consult local trademark authorities or seek legal advice.",
  },
];

export default function BusinessNameGuideBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-[#000000] text-white min-h-screen font-sans selection:bg-[#F8BC04] selection:text-black">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-10">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm md:text-base text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <span>/</span>

          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>

          <span>/</span>

          <span className="text-[#F8BC04] truncate">
            How to Choose a Business Name
          </span>
        </div>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <div>
            <h1 className="text-[28px] md:text-[35px] lg:text-[40px] xl:text-[50px] font-bold leading-tight mb-6">
              How to Choose a{" "}
              <span className="text-[#F8BC04]">Business Name:</span> A Complete
              Guide for Startups
            </h1>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-gray-300 max-w-[75ch] mb-6 text-justify">
              A practical, step-by-step guide to choosing a business name,
              generating strong naming ideas, checking legal availability, and
              building a brand that can grow with your business.
            </p>

            <div className="text-sm md:text-base text-gray-400">
              August 31, 2026 • By Big Beans Digital Team
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative w-full max-w-[773px] aspect-[773/391] rounded-2xl overflow-hidden border border-white">
            <Image
              src={thumbnail}
              alt="How to Choose a Business Name Guide"
              fill
              className="object-cover"
              sizes="(max-width: 773px) 100vw, 773px"
              priority
            />
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT CONTENT AREA */}
          <article className="lg:w-2/3 flex flex-col gap-8 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] max-w-[75ch] text-gray-200">
            {/* AI SUMMARIZE BOX */}
            <div className="bg-white rounded-xl p-4 md:p-6 flex items-center justify-between shadow-lg mb-4">
              <span className="text-black font-bold text-lg md:text-xl">
                Summarize with AI
              </span>

              <div className="flex items-center gap-4">
                <a
                  href={`https://chatgpt.com/?q=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Summarize with ChatGPT"
                >
                  <ChatGPTIcon />
                </a>

                <a
                  href={`https://gemini.google.com/app?text=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Summarize with Gemini"
                >
                  <GeminiIcon />
                </a>
              </div>
            </div>

            <p className="text-justify">
              Choosing a business name sounds simple until you start thinking
              about everything the name has to work with. It will appear on
              your website, social profiles, invoices, advertisements,
              packaging, and customer reviews. A good name should be easy to
              remember, easy to spell, legally usable, and flexible enough to
              work as the business grows.
            </p>

            <p className="text-justify">
              This guide explains how to choose a business name, generate
              ideas, check availability, avoid common naming mistakes, and
              compare your final options before making a decision.
            </p>

            <h2 className="text-[24px] md:text-[30px] font-bold text-white mt-6 mb-2">
              How to Choose a Business Name
            </h2>

            <p className="text-justify">
              Most founders start with a list of names and try to pick the one
              that sounds best. That approach can create problems later.
            </p>

            <p className="text-justify">
              Your name becomes part of every marketing activity you run.
              Whether you work with a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                digital marketing agency
              </KeywordLink>
              , an{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                advertising agency
              </KeywordLink>
              , a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/services/branding">
                branding agency near me
              </KeywordLink>
              , or manage your marketing internally, people need to be able to
              remember and search for your business easily.
            </p>

            <p className="text-justify">
              Changing a name after launch can also be expensive. You may need
              to update your website, domain, social profiles, packaging,
              signage, advertising campaigns, and other branded material. The
              better approach is to treat naming as a business decision first
              and a creative exercise second.
            </p>

            {/* TL;DR BOX */}
            <div className="border border-white bg-[#1a1a1a] rounded-xl p-6 md:p-8 my-6">
              <h3 className="text-[#F8BC04] font-bold text-[20px] md:text-[24px] mb-4">
                TL;DR — How to Choose a Business Name
              </h3>

              <p className="text-[15px] md:text-[17px] leading-[1.6] text-justify">
                Start by defining your audience, category, personality, and
                future plans. Generate a large list of possible names using
                word combinations, founder names, metaphors, foreign-language
                roots, acronyms, and a business company name generator or AI
                tool. Then remove any name that fails a company-registry,
                trademark, domain, social-handle, pronunciation, or spelling
                check. If you're building a brand that will depend heavily on
                digital marketing,{" "}
                <KeywordLink href="https://www.bigbeansdigital.com/services/social-media-marketing">
                  social media marketing services
                </KeywordLink>
                ,{" "}
                <KeywordLink href="https://www.bigbeansdigital.com/services/seo">
                  SEO
                </KeywordLink>
                ,{" "}
                <KeywordLink href="https://www.bigbeansdigital.com/services/google-ads-meta-ads">
                  paid advertising
                </KeywordLink>
                , or content, make sure the name is easy to search and
                communicate.
              </p>
            </div>

            <h2
              id="section-1"
              className="text-[24px] md:text-[30px] font-bold text-white mt-8 mb-2"
            >
              01. Your Business Name Will Appear Everywhere
            </h2>

            <p className="text-justify">
              A business name has several jobs. Customers should be able to
              remember it, search for it, pronounce it, and associate it with
              your business. It also needs to work across your marketing
              channels.
            </p>

            <p className="text-justify">
              If you plan to invest in digital marketing,{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/services/google-ads-meta-ads">
                paid advertising
              </KeywordLink>
              ,{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/services/seo">
                SEO
              </KeywordLink>
              , content marketing, or{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/services/social-media-marketing">
                social media marketing
              </KeywordLink>
              , your name will appear in search results, advertisements,
              social posts, videos, and other digital content.
            </p>

            <p className="text-justify">
              A difficult name creates unnecessary friction. If customers
              cannot spell it after hearing it, they may struggle to find your
              website. If it sounds like another company, your brand may be
              harder to distinguish.
            </p>

            <p className="text-justify">
              The same applies when choosing a name for a company that plans to
              work with{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                marketing agencies
              </KeywordLink>
              ,{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                creative agencies
              </KeywordLink>
              , or other outside partners. Your name should be clear enough
              for people to understand and remember without needing a long
              explanation.
            </p>

            <p className="text-justify">
              Think about where the name will be used five years from now. A
              name that makes sense for one product or one location may become
              restrictive if you expand. For example, a company called "Delhi
              Cupcake Studio" may have trouble if it later sells packaged food
              across India. A broader name gives the business more room to
              change.
            </p>

            <h2
              id="section-2"
              className="text-[24px] md:text-[30px] font-bold text-white mt-8 mb-2"
            >
              02. Decide What Your Name Needs to Communicate
            </h2>

            <p className="text-justify">
              Before opening a business name generator, answer a few basic
              questions.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              Who are you selling to?
            </h3>

            <p className="text-justify">
              Your audience should influence the tone of the name. A B2B
              technology company may need a different style from a fashion
              label, restaurant, healthcare business, or consumer brand. If
              your audience includes businesses looking for digital marketing
              services, for example, a name that sounds clear and professional
              may work better than one based on an obscure joke.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              What category are you in?
            </h3>

            <p className="text-justify">
              Decide whether you want the name to describe what you sell. A
              descriptive name can make your business easier to understand
              immediately. An evocative name can give you more flexibility, but
              customers may need additional context. This distinction matters
              when developing a brand for a digital marketing company,
              advertising company, creative studio, or other service business.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              What should the name sound like?
            </h3>

            <p className="text-justify">
              Think about your brand personality. Do you want the name to sound
              professional, playful, premium, technical, traditional, modern,
              or creative? The name should support that personality before you
              add a logo, website, or advertising campaign.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              Will the name work outside your current location?
            </h3>

            <p className="text-justify">
              A location-based name can work well for a local company. It can
              become restrictive when you expand. If you currently serve one
              city but plan to work across India, think carefully before putting
              the city name into the company name.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              Will it still work in five years?
            </h3>

            <p className="text-justify">
              Avoid names that depend too heavily on temporary slang, memes,
              trends, or short-lived technology terms. A business name should
              have enough flexibility to remain useful as your products,
              services, customers, and markets change.
            </p>

            <h2
              id="section-3"
              className="text-[24px] md:text-[30px] font-bold text-white mt-8 mb-2"
            >
              03. How to Generate Business Name Ideas
            </h2>

            <p className="text-justify">
              Do not expect to find the final name immediately. Start with a
              large list. Aim for 40–60 rough ideas before you begin filtering
              them. You can use several methods.
            </p>

            <ul className="list-disc pl-6 space-y-4 marker:text-[#F8BC04] text-justify">
              <li>
                <strong>Word combinations:</strong> Combine two relevant words
                to create something new. Pinterest, for example, combines "pin"
                and "interest." Instagram was formed from "instant" and
                "telegram."
              </li>

              <li>
                <strong>Founder or personal-name anchoring:</strong> Using a
                founder's name is straightforward and can work particularly
                well for professional services (e.g., "Sharma Consulting").
              </li>

              <li>
                <strong>Metaphor and association:</strong> A business name does
                not always need to describe the product. Amazon takes its name
                from the Amazon River, associating with vast scale.
              </li>

              <li>
                <strong>Foreign-language roots:</strong> Latin, Sanskrit, and
                other language roots can provide premium-sounding ideas. Always
                check actual meanings and pronunciations.
              </li>

              <li>
                <strong>Acronyms and initials:</strong> Works well for
                technical/B2B companies if they are easy to pronounce.
              </li>

              <li>
                <strong>Use an AI business name generator for volume:</strong>{" "}
                Feed specific info about your industry, audience, and keywords
                into AI tools to generate bulk ideas.
              </li>
            </ul>

            <h3 className="text-[22px] md:text-[26px] font-bold text-[#F8BC04] mt-8">
              Naming by Industry
            </h3>

            <h4 className="text-[20px] md:text-[22px] font-semibold text-white mt-4">
              Food and Restaurant Businesses
            </h4>

            <p className="text-justify">
              Food business names should give customers some idea of the
              experience. A descriptive name works well when customers need to
              understand the cuisine quickly. For cloud kitchens and catering,
              avoid names that limit you to one dish.
            </p>

            <h4 className="text-[20px] md:text-[22px] font-semibold text-white mt-4">
              Clothing and Fashion Businesses
            </h4>

            <p className="text-justify">
              Fashion names work better when they suggest a particular look,
              material, or attitude. Avoid generic terms like "Style" and
              "Elegance."
            </p>

            <h4 className="text-[20px] md:text-[22px] font-semibold text-white mt-4">
              Creative Agencies and Studios
            </h4>

            <p className="text-justify">
              Creative businesses have room to experiment with invented words
              and wordplay. If searching for{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                creative agencies near me
              </KeywordLink>{" "}
              or{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                best creative ad agencies
              </KeywordLink>
              , customers still need to quickly understand what the company
              does through context.
            </p>

            <h4 className="text-[20px] md:text-[22px] font-semibold text-white mt-4">
              IT and Technology Companies
            </h4>

            <p className="text-justify">
              Tech companies often need names that are easy for investors to
              pronounce. Short, invented names work well. Avoid restrictive
              names unless intentional.
            </p>

            <h2
              id="section-4"
              className="text-[24px] md:text-[30px] font-bold text-white mt-8 mb-2"
            >
              04. Check Every Name Before You Commit
            </h2>

            <div className="space-y-6">
              <div className="text-justify">
                <strong className="text-white block mb-1">
                  1. Company or business registry check
                </strong>
                <p>
                  In India, check the MCA records before proceeding. In the UK,
                  Companies House provides a checker. Similarity can cause
                  issues even if spelled differently.
                </p>
              </div>

              <div className="text-justify">
                <strong className="text-white block mb-1">
                  2. Trademark search
                </strong>
                <p>
                  Search IP India or UKIPO. A company name can be available for
                  registration while a similar trademark already exists.
                </p>
              </div>

              <div className="text-justify">
                <strong className="text-white block mb-1">
                  3. Trading name check
                </strong>
                <p>
                  If you use a trading name distinct from your legal entity,
                  check its trademark and domain availability too.
                </p>
              </div>

              <div className="text-justify">
                <strong className="text-white block mb-1">
                  4. Domain and social handle availability
                </strong>
                <p>
                  Crucial for businesses depending on{" "}
                  <KeywordLink href="https://www.bigbeansdigital.com/services/social-media-marketing">
                    social media marketing
                  </KeywordLink>{" "}
                  and{" "}
                  <KeywordLink href="https://www.bigbeansdigital.com/services/google-ads-meta-ads">
                    paid advertising
                  </KeywordLink>
                  . Secure the .com or .in early.
                </p>
              </div>

              <div className="text-justify">
                <strong className="text-white block mb-1">
                  5. Pronunciation and spelling test
                </strong>
                <p>
                  Say it to people who have never heard it. If they spell it
                  wrong, it creates a massive barrier for searchability.
                </p>
              </div>
            </div>

            <h2
              id="section-5"
              className="text-[24px] md:text-[30px] font-bold text-white mt-8 mb-2"
            >
              05. Common Business Naming Mistakes
            </h2>

            <ul className="space-y-4 text-justify">
              <li>
                <strong className="text-[#F8BC04]">
                  01. Choosing a name that limits growth:
                </strong>{" "}
                Product-specific names fail when you expand.
              </li>

              <li>
                <strong className="text-[#F8BC04]">
                  02. Choosing a name only your team understands:
                </strong>{" "}
                Internal jokes confuse customers.
              </li>

              <li>
                <strong className="text-[#F8BC04]">
                  03. Copying a competitor:
                </strong>{" "}
                Makes your brand hard to distinguish and risks legal trouble.
              </li>

              <li>
                <strong className="text-[#F8BC04]">
                  04. Ignoring other languages:
                </strong>{" "}
                Ensure it doesn't mean something offensive abroad.
              </li>

              <li>
                <strong className="text-[#F8BC04]">
                  05. Leaving legal checks until later:
                </strong>{" "}
                Never design a logo before the trademark clears.
              </li>

              <li>
                <strong className="text-[#F8BC04]">
                  06. Choosing a name based only on how it looks:
                </strong>{" "}
                It must sound clear for podcasts and voice search.
              </li>
            </ul>

            <h2
              id="section-6"
              className="text-[24px] md:text-[30px] font-bold text-white mt-8 mb-2"
            >
              06. A Simple Framework for Comparing Your Final Names
            </h2>

            <p className="text-justify">
              Score each name from 1–5 across these criteria to make a balanced
              decision:
            </p>

            <div className="overflow-x-auto mt-4 border border-white rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a1a1a] text-[#F8BC04]">
                    <th className="p-4 border-b border-white font-bold">
                      Criterion
                    </th>

                    <th className="p-4 border-b border-white font-bold">
                      Question
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-300">
                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Memorability</td>
                    <td className="p-4">
                      Can someone remember it after hearing it once?
                    </td>
                  </tr>

                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Spelling</td>
                    <td className="p-4">
                      Would a new customer spell it correctly?
                    </td>
                  </tr>

                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Availability</td>
                    <td className="p-4">
                      Are the domain and relevant social handles available?
                    </td>
                  </tr>

                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Legal clearance</td>
                    <td className="p-4">
                      Does it pass the company and trademark checks?
                    </td>
                  </tr>

                  <tr className="border-b border-white">
                    <td className="p-4 font-semibold">Room to grow</td>
                    <td className="p-4">
                      Will it still work if the company expands?
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold">Brand fit</td>
                    <td className="p-4">
                      Does the name match the personality of the business?
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2
              id="section-7"
              className="text-[24px] md:text-[30px] font-bold text-white mt-8 mb-2"
            >
              07. When Professional Naming and Branding Help
            </h2>

            <p className="text-justify">
              You do not always need an agency to choose a business name. If
              you have a shortlist but cannot agree on the final option, an
              outside perspective can help identify practical problems that the
              internal team may have missed.
            </p>

            <p className="text-justify">
              A{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/services/branding">
                branding agency near me
              </KeywordLink>
              ,{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                creative agencies near me
              </KeywordLink>
              , or specialist naming consultant may help with naming,
              positioning, trademark screening, brand strategy, and visual
              identity.
            </p>

            <p className="text-justify">
              For businesses already planning digital marketing, advertising,
              SEO, and social media marketing, it can also help to consider how
              the name will work across those channels before the brand is
              launched. Check actual services and experience rather than just
              choosing based on lists of top branding agencies.
            </p>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:w-1/3 flex flex-col gap-10 order-last lg:order-none">
            {/* TABLE OF CONTENTS */}
            <div className="pt-1">
              <h3 className="text-[12px] md:text-[13px] font-semibold text-white uppercase tracking-wide mb-5">
                IN THIS BLOG :
              </h3>

              <div className="relative ml-0">
                {/* Vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#555555]" />

                <ul className="relative space-y-0">
                  {tableOfContents.map((item, index) => (
                    <li
                      key={item.id}
                      className="relative min-h-[36px] flex items-start"
                    >
                      {/* Yellow active indicator */}
                      {index === 0 && (
                        <span className="absolute left-[-1px] top-0 h-[20px] w-[3px] bg-[#F8BC04] rounded-full" />
                      )}

                      <a
                        href={`#${item.id}`}
                        className={`block pl-[12px] pr-2 py-[6px] text-[12px] md:text-[13px] leading-[1.45] transition-colors ${
                          index === 0
                            ? "text-gray-300"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {item.title.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SHARE ARTICLE */}
              <div className="mt-6">
                <h3 className="text-[12px] md:text-[13px] font-semibold text-gray-300 mb-3">
                  Share Article
                </h3>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Instagram"
                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <InstagramIcon />
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      pageUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      pageUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <LinkedInIcon />
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `${articleTitle} ${pageUrl}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* SERVICES WE PROVIDE */}
            <div className="bg-[#111111] border border-white rounded-2xl p-6">
              <h3 className="text-[20px] font-bold text-white mb-6 uppercase tracking-wider text-sm">
                Services We Provide
              </h3>

              <div className="flex flex-col gap-5">
                {services.map((service, index) => (
                  <Link
                    href={service.href}
                    key={index}
                    className="group block border-b border-white pb-5 last:border-0 last:pb-0"
                  >
                    <h4 className="text-white font-bold text-[16px] group-hover:text-[#F8BC04] transition-colors mb-1">
                      {service.title}
                    </h4>

                    <p className="text-gray-400 text-[14px] leading-snug text-justify">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>



        {/* FAQ Section */}

        <section id="section-8" className="mt-10 w-full">
              {/* FAQ HEADING */}
              <div className="text-center mb-8">
                <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold leading-tight text-white">
                  Frequently Asked{" "}
                  <span className="text-[#F8BC04] italic font-serif font-medium">
                    Questions
                  </span>
                </h2>
              </div>

              {/* FAQ GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-5 gap-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={index}
                      className={`border border-[#292929] rounded-[12px] bg-[#050505] overflow-hidden transition-all duration-300 ${
                        isOpen ? "border-[#3a3a3a]" : ""
                      }`}
                    >
                      {/* QUESTION */}
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        className="w-full min-h-[64px] px-4 md:px-5 py-4 flex items-center justify-between gap-4 text-left"
                      >
                        <span className="text-[13px] md:text-[14px] lg:text-[15px] font-semibold text-white leading-[1.35]">
                          {faq.q}
                        </span>

                        {/* PLUS BUTTON */}
                        <span
                          className={`flex-shrink-0 w-[24px] h-[24px] rounded-full border border-[#383838] bg-[#111111] flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <span className="relative w-[10px] h-[10px]">
                            <span className="absolute left-0 top-[4px] w-[10px] h-[1px] bg-[#bdbdbd]" />
                            <span className="absolute left-[4px] top-0 w-[1px] h-[10px] bg-[#bdbdbd]" />
                          </span>
                        </span>
                      </button>

                      {/* ANSWER */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 md:px-5 pb-5 text-[13px] md:text-[14px] leading-[1.6] text-gray-400">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>


        {/* =========================================================================
          BLOGS SECTION
          ========================================================================= */}
      <section className="relative z-10 py-5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
            <div className="max-w-[1600px]">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mt-2">
                Other Popular <span className="font-serif italic font-normal text-[#F8BC04]">Blogs for You</span>
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-5 py-3 rounded-full hover:border-[#F8BC04] hover:text-[#F8BC04] transition-colors self-start md:self-auto"
            >
              Browse All Blogs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogCards.map((blog) => (
              <Link
                key={blog.id}
                href={blog.link}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#F8BC04]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/70 text-[#F8BC04] border border-[#F8BC04]/30 backdrop-blur-sm">
                      {blog.primaryCategory}
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 sm:right-4 text-[10px] sm:text-[11px] font-medium text-white/70">
                    {blog.readTime}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-white/40 block mb-1.5">{blog.date}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F8BC04] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/60 line-clamp-3 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#F8BC04]">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
                {/* =========================================================================
          FINAL CTA SECTION
          ========================================================================= */}
      <section className="relative z-10 py-5 sm:py-5 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] sm:leading-[1.05]">
            Scale Your Brand
            Today{" "}
            <span
              className="font-serif italic font-normal text-[#F8BC04]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              with Big Beans Digital 
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Ready to turn fragmented tactics into a predictable growth engine? Book your free strategy session with our digital marketing agency now.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/connect"
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#F8BC04] text-black font-extrabold text-sm sm:text-base tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(248,188,4,0.5)]"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://wa.link/pxmrrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/5 hover:border-white/40 transition-colors"
            >
              Quick WhatsApp Chat <ExternalLink className="w-4 h-4 text-white/60" />
            </Link>
          </div>
        </div>
      </section>


      </div>
    </main>
  );
}