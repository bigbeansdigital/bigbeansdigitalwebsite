"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const thumbnail =
  "/assets/blog/singleblogs/viral-80s-ai-photo-trend-and-prompt.webp";

const pageUrl =
  "https://www.bigbeansdigital.com/blog/viral-80s-ai-photo-trend-and-prompt";

const articleTitle =
  "Viral '80s Trend: Why Is the Internet Suddenly Looking Back at the 1980s?";

const aiPrompt = encodeURIComponent(
  `Please summarize this Big Beans Digital blog and also tell me more about Big Beans Digital at last in a clear and practical way. Give me a brief about the blog along with what all is there in this blog.
Blog title: ${articleTitle}
Page link: ${pageUrl}
Website Link : www.bigbeansdigital.com`
);

const tableOfContents = [
  {
    id: "section-1",
    title: "01. What Is the 1980s AI Photo Trend?",
  },
  {
    id: "section-2",
    title: "02. Why Is It So Popular Right Now?",
  },
  {
    id: "section-3",
    title: "03. Why the '80s Aesthetic Is Going Viral",
  },
  {
    id: "section-4",
    title: "04. How Businesses and Blogs Can Use This Trend",
  },
  {
    id: "section-5",
    title: "05. How to Create Your Own 1980s AI Look",
  },
  {
    id: "section-6",
    title: "06. Sample ChatGPT Prompts for the 1980s AI Photo Trend",
  },
  {
    id: "section-7",
    title: "07. How to Make the Result Feel More Personal",
  },
  {
    id: "section-8",
    title: "08. What This Trend Tells Us About Marketing",
  },
  {
    id: "section-9",
    title: "09. Frequently Asked Questions",
  },
];

// Blog Posts Data
const blogCards = [
  {
    id: 5,
    image:
      "/assets/blog/singleblogs/clinic-instagram-marketing-strategy.webp",
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
    image:
      "/assets/blog/singleblogs/why-is-my-competitor-getting-more-leads.webp",
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
    q: "What exactly is the 1980s AI photo trend?",
    a: "It's a social media trend where people use AI image tools — like ChatGPT's image generator or Midjourney — to transform their modern photos into realistic-looking vintage portraits styled after the 1980s. The results mimic film grain, warm colour grading, period clothing, and the lighting characteristics of photography from that era.",
  },
  {
    q: "Which AI tools are best for creating 1980s-style photos?",
    a: "ChatGPT with GPT-4o image generation is the most accessible and produces consistently good results for beginners. Midjourney gives you more control over the final aesthetic but has a steeper learning curve. Adobe Firefly and Canva AI are also solid options, particularly if you're already using those tools for other creative work.",
  },
  {
    q: "Is the 1980s AI photo trend just a passing fad, or does it have staying power?",
    a: "Specific versions of the trend will fade, but the underlying behaviour — using AI to recreate vintage aesthetics — is here to stay. We've already seen this with the 1990s polaroid trend, the Y2K digital camera revival, and film photography's ongoing resurgence. Each wave brings new tools and techniques. The 80s moment is particularly strong right now because the visual language of that decade is having a broader cultural revival across fashion, music, and interior design.",
  },
  {
    q: "How can a business use this trend without it looking forced?",
    a: "The key is to make the connection to your brand genuine. If you have a history, use it. If you don't, find a creative angle — your product in a retro setting, your team imagined in the era, a fictional founding story told visually. The brands that look forced are the ones who use the aesthetic without any narrative reason. Give your audience a story, not just a filter.",
  },
  {
    q: "Can a digital marketing agency help brands capitalise on viral trends like this?",
    a: "Yes — and it's one of the more practical reasons to work with one. A good digital marketing agency, whether you're looking for one near you or a top digital marketing company in India, will have people who monitor trend cycles, understand how to adapt them for specific audiences, and can move quickly enough to publish while the trend is still active. Trend-led content has a short window. Speed and relevance matter more than production value.",
  },
  {
    q: "What are the copyright or ethical considerations with AI-generated vintage photos?",
    a: "This is a developing space. Generally, using your own photo as the input source and generating a stylised version is considered acceptable use under most AI platform terms of service. You should avoid creating AI-generated photos of other real people without their consent, and be careful about using the output for commercial advertising without checking the specific terms of the tool you used. When in doubt, consult the platform's content policy or speak to a digital rights professional.",
  },
];

export default function Viral80sAiPhotoTrendBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [postingDate, setPostingDate] = useState("");
  const [readingTime, setReadingTime] = useState("1 min read");
  const articleRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const today = new Date();

    setPostingDate(
      new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(today)
    );

    const articleText = articleRef.current?.innerText ?? "";
    const faqText = faqRef.current?.innerText ?? "";
    const fullBlogText = `${articleText} ${faqText}`.trim();
    const wordCount = fullBlogText
      .split(/\s+/)
      .filter(Boolean).length;

    // Average adult reading speed: approximately 200 words per minute.
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    setReadingTime(`${minutes} min read`);
  }, []);

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
            Viral '80s AI Photo Trend
          </span>
        </div>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <div>
            <h1 className="text-[28px] md:text-[35px] lg:text-[40px] xl:text-[50px] font-bold leading-tight mb-6">
              Viral{" "}
              <span className="text-[#F8BC04]">'80s Trend:</span> Why Is the
              Internet Suddenly Looking Back at the 1980s?
            </h1>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-gray-300 max-w-[75ch] mb-6 text-justify">
              The 1980s AI photo trend is taking over social media. Here&apos;s
              what it is, why everyone&apos;s obsessed, and how your brand can
              use it with real ChatGPT prompts included.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base text-gray-400">
              <span>By Big Beans Digital Team</span>
              <span className="text-gray-600" aria-hidden="true">
                |
              </span>
              <span>
                Date of Posting: {postingDate || "Loading..."}
              </span>
              <span className="text-gray-600" aria-hidden="true">
                |
              </span>
              <span>Reading Time: {readingTime}</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative w-full max-w-[773px] aspect-[773/391] rounded-2xl overflow-hidden border border-white">
            <Image
              src={thumbnail}
              alt="Viral 1980s AI Photo Trend and ChatGPT Prompt"
              fill
              className="object-cover"
              sizes="(max-width: 773px) 100vw, 773px"
              priority
            />
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:block">
          {/* RIGHT SIDEBAR */}
          <aside
            className="order-2 lg:order-none lg:float-right lg:w-[31%] lg:ml-12 lg:mb-8 flex flex-col gap-10"
          >
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

          {/* LEFT CONTENT AREA */}
          <article ref={articleRef} className="order-1 flex flex-col gap-8 lg:block text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-gray-200">
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

            <a
              href="#section-6"
              className="w-full lg:w-[65%] flex items-center justify-center rounded-xl bg-[#F8BC04] text-black font-bold text-base md:text-lg py-3 px-5 mb-8 hover:bg-[#dca900] transition-colors"
            >
              Get The Prompt
            </a>

            <p className="text-justify">
              There&apos;s something strange happening on your feed right now.
            </p>

            <p className="text-justify">
              Scroll through Instagram, TikTok, or X (formerly Twitter) for
              five minutes, and you&apos;ll run into dozens of photos that
              look like they were pulled straight from a 1983 family album —
              grain, warm tones, big hair, soft-focus lenses and all. Except
              they weren&apos;t taken in 1983. They were taken last week. And
              the person in the photo definitely does not own a pair of
              leg warmers.
            </p>

            <p className="text-justify">
              This is the 1980s AI photo trend, and it has completely taken
              over the internet in 2024-25. People are feeding their modern
              selfies into AI tools and getting back images that look like
              they belong to a different era. The results are oddly
              convincing. Warm, soft, slightly faded — like someone found your
              old family photos in a shoebox under the bed.
            </p>

            <p className="text-justify">
              Why is this happening? What&apos;s driving millions of people to
              suddenly want to look like they&apos;re from four decades ago?
              And more importantly — if you run a brand, a blog, or a business
              — what does this trend mean for you?
            </p>

            <p className="text-justify">Let&apos;s get into it.</p>

            {/* SECTION 1 */}
            <h2
              id="section-1"
              className="text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2"
            >
              01. What Is the 1980s AI Photo Trend?
            </h2>

            <p className="text-justify">
              At its simplest, the trend works like this: you take a recent
              photo — a selfie, a portrait, a group shot — and you run it
              through an AI image tool (ChatGPT&apos;s image generator,
              Midjourney, Adobe Firefly, or similar tools). You give it a
              prompt asking for a 1980s-style transformation. The AI then
              recreates the image in a vintage aesthetic — complete with film
              grain, slightly overexposed highlights, period-accurate clothing,
              and hairstyles that scream Reagan-era America.
            </p>

            <p className="text-justify">
              The results often look genuinely old. Not &quot;Instagram
              filter&quot; old. Actually old — the kind of photo that makes
              you double-check whether it might be real.
            </p>

            <p className="text-justify">
              What makes it work technically is that modern AI models have been
              trained on enormous amounts of photographic data, including
              millions of photographs from the 1970s through the 1990s.
              They&apos;ve learned what film photography looks like at
              different speeds, what Kodachrome colour grading looks like, what
              the imperfections of CRT lighting look like on a face. When you
              give the AI a reference image and ask it to apply these
              characteristics, it does so in a way that goes well beyond a
              simple filter.
            </p>

            <p className="text-justify">
              The trend isn&apos;t limited to selfies either. People are
              creating fake 1980s yearbook photos, retro family portraits,
              vintage album covers, faux corporate headshots from the era, and
              even making their pets look like they were photographed at a
              Sears portrait studio in 1987.
            </p>

            {/* SECTION 2 */}
            <h2
              id="section-2"
              className="text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2"
            >
              02. Why Is It So Popular Right Now?
            </h2>

            <p className="text-justify">
              The short answer is that it hits several very different needs at
              once — which is rare for any single trend.
            </p>

            <p className="text-justify">
              <strong className="text-white">It&apos;s emotionally satisfying.</strong>{" "}
              There&apos;s a reason nostalgia marketing works. The 1980s
              occupy a specific cultural sweet spot. People who actually lived
              through the decade have warm memories attached to it. People who
              didn&apos;t — most of Gen Z — have grown up with 80s aesthetics
              recycled through music, film, TV, fashion and video games.
              Stranger Things, synthwave playlists, retro gaming, the whole
              lo-fi aesthetic movement — the 80s never really left. They just
              went underground and kept resurfacing.
            </p>

            <p className="text-justify">
              <strong className="text-white">It&apos;s technically impressive.</strong>{" "}
              When AI does something that genuinely surprises people, they
              share it. The 1980s AI photos are shareable because the gap
              between &quot;this was taken yesterday&quot; and &quot;this looks
              convincingly old&quot; is wide enough to stop people mid-scroll.
              That&apos;s pure virality fuel.
            </p>

            <p className="text-justify">
              <strong className="text-white">It&apos;s personal.</strong>{" "}
              Unlike generating an AI landscape or an abstract image,
              transforming your own face into a vintage portrait makes the
              output feel intimate. People see themselves differently.
              That&apos;s a powerful hook.
            </p>

            <p className="text-justify">
              <strong className="text-white">It&apos;s low-effort with high reward.</strong>{" "}
              You don&apos;t need any design skills. You type a prompt, upload a
              photo, and you get something that looks like it took hours to
              create. This ratio of effort to result is what makes social
              trends spread.
            </p>

            {/* SECTION 3 */}
            <h2
              id="section-3"
              className="text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2"
            >
              03. Why the &apos;80s Aesthetic Is Going Viral (And Not, Say, the
              &apos;70s or &apos;90s)
            </h2>

            <p className="text-justify">
              This is actually worth thinking about.
            </p>

            <p className="text-justify">
              The 1970s are too far back for most people to have personal
              nostalgia for. The 1990s are recent enough that they don&apos;t
              yet feel like &quot;history&quot; to many people — they feel like
              just last week. But the 1980s sit in a perfect middle zone. Far
              enough away to feel genuinely vintage. Close enough to feel warm
              and accessible.
            </p>

            <p className="text-justify">
              There&apos;s also the visual language of the 1980s. That decade
              had a very specific aesthetic — bright colours, strong graphic
              sensibilities, bold type, slightly garish fashion. It was
              maximalist in a way that every subsequent decade moved away from.
              And maximalism is having a moment again right now. The minimalist
              beige-and-white aesthetic that dominated the 2010s is starting
              to feel tired. People want colour, texture, personality.
            </p>

            <p className="text-justify">
              The 1980s also represent a pre-internet era, and there&apos;s
              something quietly appealing about that right now. No
              notifications. No algorithms. No doom-scrolling. A time when a
              photograph was a physical object you kept in a drawer. These
              images carry a kind of analogue peace that people seem to be
              craving.
            </p>

            {/* SECTION 4 */}
            <h2
              id="section-4"
              className="text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2"
            >
              04. How Businesses and Blogs Can Use This Trend
            </h2>

            <p className="text-justify">
              If you&apos;re a brand, a blogger, a content creator, or a
              business trying to stay visible online — this trend is an
              opportunity that&apos;s sitting right in front of you.
            </p>

            <p className="text-justify">
              Here&apos;s how to actually use it rather than just watching from
              the sidelines.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              Build a Social Media Campaign Around It
            </h3>

            <p className="text-justify">
              The 1980s AI photo trend is one of the rare moments when
              user-generated content (UGC) writes itself. Ask your audience to
              share their 80s AI portraits and tag your brand. Create a branded
              hashtag. Feature submissions in your Stories or Reels. This kind
              of campaign has worked brilliantly for brands in lifestyle,
              fashion, food, and entertainment — and the barrier to participate
              is incredibly low.
            </p>

            <p className="text-justify">
              If you&apos;re working with a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/services/social-media-marketing">
                social media marketing agency
              </KeywordLink>{" "}
              or managing content in-house, this is a low-budget,
              high-engagement play that can outperform expensive paid
              campaigns. Many brands working with a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                digital marketing agency in Mumbai
              </KeywordLink>
              ,{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                digital marketing agency Delhi
              </KeywordLink>
              ,{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                digital marketing agency Bangalore
              </KeywordLink>
              , or any other major city have been using trend-led content
              exactly this way to drive organic reach without blowing their
              budgets.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              Use It for Brand Storytelling
            </h3>

            <p className="text-justify">
              If your business has been around since the 1980s, this is an
              obvious win — show your team, your products, or your office
              &quot;then and now.&quot; But even if you launched last year, you
              can use the aesthetic creatively. Create a fake &quot;1985
              founding story&quot; in visual form, a retro version of your
              brand identity, or a vintage-style product shoot.
            </p>

            <p className="text-justify">
              This kind of content works because it&apos;s specific and
              unexpected. It doesn&apos;t look like a sponsored post. It looks
              like something a real human made because they thought it was
              interesting.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              Content Marketing and SEO Play
            </h3>

            <p className="text-justify">
              The trend itself is a search topic right now. If you publish a
              blog post, a Reel, a YouTube Short, or a TikTok that explains the
              trend, shows how to do it, and connects it to your niche,
              you&apos;re capturing that search traffic at the exact moment
              people are looking for it.
            </p>

            <p className="text-justify">
              Brands working with a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                content marketing agency
              </KeywordLink>{" "}
              or a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                digital marketing company
              </KeywordLink>{" "}
              should be looking at this kind of trend-jacking content as a
              standard part of their strategy. It&apos;s time-sensitive, but it
              builds links, drives shares, and brings in new audiences who
              weren&apos;t previously looking for your brand.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              Healthcare, B2B, and &quot;Serious&quot; Industries
            </h3>

            <p className="text-justify">
              Yes, even{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                healthcare digital marketing agencies
              </KeywordLink>{" "}
              and B2B brands can use this. A clinic sharing a &quot;what our
              team would have looked like in 1985&quot; post is charming and
              human. A law firm doing a retro rebrand moment for a week is
              memorable. The key is not to force it — use it in a way that fits
              your brand&apos;s personality.
            </p>

            {/* SECTION 5 */}
            <h2
              id="section-5"
              className="text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2"
            >
              05. How to Create Your Own 1980s AI Look
            </h2>

            <p className="text-justify">
              You don&apos;t need to be a designer or a prompt engineer to get
              good results. Here&apos;s a straightforward process.
            </p>

            <div className="space-y-6">
              <div className="text-justify">
                <strong className="text-white block mb-1">
                  Step 1: Choose your tool.
                </strong>
                <p>
                  ChatGPT with image generation (GPT-4o), Midjourney, Adobe
                  Firefly, and Canva&apos;s AI image tools all work well for
                  this. ChatGPT is currently the most accessible for most
                  people.
                </p>
              </div>

              <div className="text-justify">
                <strong className="text-white block mb-1">
                  Step 2: Take or choose your photo.
                </strong>
                <p>
                  A clear, well-lit portrait works best. Front-facing, neutral
                  expression, minimal background clutter gives the AI the most
                  to work with.
                </p>
              </div>

              <div className="text-justify">
                <strong className="text-white block mb-1">
                  Step 3: Write your prompt.
                </strong>
                <p>
                  This is where the quality of your result is decided. Be
                  specific about the era, the style, and the mood you want.
                </p>
              </div>

              <div className="text-justify">
                <strong className="text-white block mb-1">
                  Step 4: Iterate.
                </strong>
                <p>
                  Your first result may not be exactly what you wanted. Adjust
                  the prompt, try different lighting descriptions, or ask the
                  AI to change specific elements.
                </p>
              </div>
            </div>

            {/* SECTION 6 */}
            <h2
              id="section-6"
              className="scroll-mt-24 text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2"
            >
              06. Sample ChatGPT Prompts for the 1980s AI Photo Trend
            </h2>

            <p className="text-justify">
              These are real, tested prompts that get strong results. Adjust
              them to fit your photo and the specific look you&apos;re going
              for.
            </p>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              For a classic 1980s portrait:
            </h3>

            <blockquote className="border-l-4 border-[#F8BC04] bg-[#111111] rounded-r-xl p-5 md:p-6 text-[15px] md:text-[17px] text-gray-300">
              &quot;Transform this photo into a realistic 1980s professional
              portrait. Use Kodachrome film grain, slightly warm colour
              grading, soft-focus studio lighting typical of a Sears or
              JCPenney portrait studio from 1984. The subject should appear to
              be wearing era-appropriate clothing — perhaps a blazer with
              shoulder pads or a polo shirt. Keep the face accurate to the
              original photo. The background should be a muted blue-grey
              gradient typical of the period.&quot;
            </blockquote>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              For a high school yearbook photo:
            </h3>

            <blockquote className="border-l-4 border-[#F8BC04] bg-[#111111] rounded-r-xl p-5 md:p-6 text-[15px] md:text-[17px] text-gray-300">
              &quot;Convert this image into a 1985 American high school
              yearbook portrait. The photo should look like it was taken with
              a 35mm film camera under fluorescent studio lighting. Add natural
              film imperfections — slight overexposure, soft edges, colour
              shift toward warm tones. Style the hair and clothing to match
              mid-1980s American fashion. The background should be a classic
              yearbook blue or deep burgundy.&quot;
            </blockquote>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              For a retro family photo:
            </h3>

            <blockquote className="border-l-4 border-[#F8BC04] bg-[#111111] rounded-r-xl p-5 md:p-6 text-[15px] md:text-[17px] text-gray-300">
              &quot;Reimagine this photo as a family portrait taken in 1983 in
              a domestic setting. Use the aesthetic of amateur 35mm photography
              from that period — slightly underexposed, warm colour temperature,
              natural grain. The room in the background should look like a
              typical early-1980s American living room with wood panelling or
              wallpaper. Clothing should reflect the early 1980s — corduroys,
              cable-knit sweaters, high-waisted jeans.&quot;
            </blockquote>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              For a retro album cover or artist shot:
            </h3>

            <blockquote className="border-l-4 border-[#F8BC04] bg-[#111111] rounded-r-xl p-5 md:p-6 text-[15px] md:text-[17px] text-gray-300">
              &quot;Transform this photo into an 1980s pop/rock album cover
              portrait. Use the visual language of 1980s music photography —
              dramatic studio lighting, high contrast, slight lens flare, rich
              saturated colours. The subject should appear to have 1980s-era
              styling — big hair, bold makeup, or a leather jacket. Overlay a
              subtle halftone texture to mimic printing from that era.&quot;
            </blockquote>

            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mt-4">
              For a vintage travel or lifestyle photo:
            </h3>

            <blockquote className="border-l-4 border-[#F8BC04] bg-[#111111] rounded-r-xl p-5 md:p-6 text-[15px] md:text-[17px] text-gray-300">
              &quot;Convert this image into a photo that looks like it was
              taken on a family holiday in the early 1980s. Use point-and-shoot
              film camera aesthetics — slight blur in motion areas, warm skin
              tones, natural imperfections, a slightly faded look as if the
              print has aged. The colour palette should lean toward the warm
              amber-yellow tones typical of consumer film from that
              period.&quot;
            </blockquote>

            {/* SECTION 7 */}
            <h2
              id="section-7"
              className="text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2"
            >
              07. How to Make the Result Feel More Personal
            </h2>

            <p className="text-justify">
              Getting a technically good 1980s AI photo is one thing. Making it
              feel genuinely yours is another.
            </p>

            <p className="text-justify">
              <strong className="text-white">
                Reference specific cultural touchpoints.
              </strong>{" "}
              Instead of saying &quot;1980s style,&quot; say &quot;1987 Miami
              Vice aesthetic&quot; or &quot;1984 John Hughes film&quot; or
              &quot;early Madonna era.&quot; The more specific your reference,
              the more personality the result has.
            </p>

            <p className="text-justify">
              <strong className="text-white">Match the setting to your story.</strong>{" "}
              If your family is from India, asking for a generic American 1980s
              portrait won&apos;t feel personal. Instead, try prompts that
              reference South Asian photography studios from the 1980s — their
              colour palettes, backdrops, and lighting are completely different
              and equally evocative.
            </p>

            <p className="text-justify">
              <strong className="text-white">Layer in real details.</strong>{" "}
              Mention the season, the occasion, the mood. &quot;A birthday
              party in the backyard, summer 1986, casual and slightly
              chaotic&quot; produces a very different result than &quot;formal
              portrait.&quot;
            </p>

            <p className="text-justify">
              <strong className="text-white">
                Adjust after the first result.
              </strong>{" "}
              Tell the AI what you liked and what you want changed. Prompt
              engineering is a conversation, not a single command.
            </p>

            <p className="text-justify">
              <strong className="text-white">Use the result as a starting point.</strong>{" "}
              Take the AI output into a tool like Lightroom or VSCO and do
              minor colour tweaks to match a specific film stock you love —
              Kodachrome, Fujifilm 400H, Agfa Vista. This extra step moves the
              image from &quot;AI-generated&quot; to &quot;genuinely
              artistic.&quot;
            </p>

            {/* SECTION 8 */}
            <h2
              id="section-8"
              className="text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2"
            >
              08. What This Trend Tells Us About Where Marketing Is Going
            </h2>

            <p className="text-justify">
              The 1980s AI photo trend is not just a fun moment on the internet.
              It&apos;s a signal.
            </p>

            <p className="text-justify">
              It tells us that people are hungry for content that feels human,
              specific, and imperfect. The polish of corporate content — the
              perfect colours, the clean fonts, the stock photography smiles —
              is getting ignored. What&apos;s cutting through is personality.
              Character. Things that look like a real person made them.
            </p>

            <p className="text-justify">
              If you work with a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                digital marketing agency
              </KeywordLink>{" "}
              — whether that&apos;s a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                digital marketing agency in Pune
              </KeywordLink>
              , a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/services/social-media-marketing">
                social media marketing agency in Delhi
              </KeywordLink>
              , a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/services/branding">
                branding agency
              </KeywordLink>{" "}
              in your city, or even a{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                top creative agency in India
              </KeywordLink>{" "}
              — the lesson here is the same: trends matter, but only if you
              understand why they&apos;re working and how to apply them
              authentically.
            </p>

            <p className="text-justify">
              The brands that will win with this trend are the ones who
              don&apos;t just slap an 80s filter on their logo and call it
              content. They&apos;re the ones who think about what the aesthetic
              means, who their audience is, and what specific story they can
              tell through that lens.
            </p>

            <p className="text-justify">
              That&apos;s the difference between a brand that chases trends and
              a brand that leads culture.
            </p>

            {/* FINAL WORD */}
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#F8BC04] mt-8 mb-2">
              Final Word
            </h2>

            <p className="text-justify">
              The internet is looking back at the 1980s because right now,
              looking back feels better than the relentless churn of the
              present. That&apos;s not cynicism — it&apos;s just human.
              Nostalgia has always been a powerful current in culture, and AI
              has given it a new, surprisingly convincing form.
            </p>

            <p className="text-justify">
              For brands, creators, and marketers, the opportunity is real and
              it&apos;s right now. You don&apos;t need a big budget. You need a
              clear idea, a decent photo, and a willingness to experiment with
              a prompt or two.
            </p>

            <p className="text-justify">
              And if you want help turning a trend like this into an actual
              content strategy — one that builds your brand, drives search
              traffic, and reaches the right audience — that&apos;s exactly
              what we do at{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                Big Beans Digital
              </KeywordLink>
              . We&apos;re a full-service{" "}
              <KeywordLink href="https://www.bigbeansdigital.com/">
                digital marketing agency
              </KeywordLink>{" "}
              working with brands across industries, from early-stage startups
              to established names looking to stay relevant. Reach out, and
              let&apos;s figure out what&apos;s worth building.
            </p>

            <p className="text-justify text-gray-400">
              <em>
                Big Beans Digital is a creative digital marketing agency
                helping brands grow through smart strategy, content, and
                performance marketing. Looking for a digital marketing agency
                near you, or the best digital marketing services in India?{" "}
                <KeywordLink href="https://www.bigbeansdigital.com/connect">
                  Get in touch
                </KeywordLink>
                .
              </em>
            </p>
          </article>
        </div>

        {/* FAQ Section */}
        <section ref={faqRef} id="section-9" className="mt-10 w-full">
          {/* FAQ HEADING */}
          <div className="text-center mb-8">
            <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold leading-tight text-[#F8BC04]">
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
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mt-2 text-[#F8BC04]">
                  Other Popular{" "}
                  <span className="font-serif italic font-normal text-[#F8BC04]">
                    Blogs for You
                  </span>
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
                      <span className="text-[10px] sm:text-[11px] text-white/40 block mb-1.5">
                        {blog.date}
                      </span>

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
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] sm:leading-[1.05] text-[#F8BC04]">
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
              Ready to turn fragmented tactics into a predictable growth
              engine? Book your free strategy session with our digital
              marketing agency now.
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
                Quick WhatsApp Chat{" "}
                <ExternalLink className="w-4 h-4 text-white/60" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}