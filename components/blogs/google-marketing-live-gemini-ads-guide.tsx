import Image from "next/image";
import Link from "next/link";

const thumbnail =
  "/assets/blog/singleblogs/google-marketing-live-gemini-ads-guide.webp";

const pageUrl =
  "https://www.bigbeansdigital.com/blog/google-marketing-live-gemini-ads-guide";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build relevant, creative and conversion-focused social media campaigns.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Branding",
    description:
      "Build a memorable brand identity that stays consistent across every platform.",
    href: "/services/branding",
  },
  {
    title: "Google Ads & Meta Ads",
    description:
      "Reach high-intent audiences with targeted performance marketing campaigns.",
    href: "/services/google-ads-meta-ads",
  },
  {
    title: "Logo Designing",
    description:
      "Create a distinctive visual identity that makes your brand recognizable.",
    href: "/services/logo-designing",
  },
  {
    title: "Website Development",
    description:
      "Build modern websites designed to turn attention into meaningful action.",
    href: "/services/website-development",
  },
];

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-[#F8BC04]">{children}</span>;
}

function InternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`font-bold text-[#F8BC04] no-underline hover:text-[#F8BC04] ${className}`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <span className="mt-1 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#F8BC04] px-2 text-[11px] font-black text-black">
        {number}
      </span>

      <h2 className="text-[24px] font-black leading-[1.18] tracking-[-0.7px] text-[#171717] md:text-[29px]">
        {children}
      </h2>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatGPTIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 4.5C12.9 4.5 10.3 6.3 8.7 9.1C5.6 9.3 3.2 11.8 3.2 14.9C3.2 18.1 5.6 20.6 8.7 20.8C10.3 23.6 12.9 25.4 16 25.4C19.1 25.4 21.7 23.6 23.3 20.8C26.4 20.6 28.8 18.1 28.8 14.9C28.8 11.8 26.4 9.3 23.3 9.1C21.7 6.3 19.1 4.5 16 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M11.1 10.2L20.9 19.8M20.9 10.2L11.1 19.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 3C17.7 10.4 21.6 14.3 29 16C21.6 17.7 17.7 21.6 16 29C14.3 21.6 10.4 17.7 3 16C10.4 14.3 14.3 10.4 16 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

const adFormats = [
  {
    title: "Conversational Discovery Ads",
    functionality:
      "Dynamically synthesizes ad creative based on multi-part user prompts.",
    impact:
      "Delivers contextual product solutions during deep consideration research.",
    useCase: "Complex services, B2B SaaS and high-ticket eCommerce.",
  },
  {
    title: "Highlighted Answers",
    functionality:
      "Secures native sponsored spots within AI Mode recommendation lists.",
    impact:
      "Captures top-of-funnel consideration before users click out.",
    useCase: "Startups competing against legacy enterprise brands.",
  },
  {
    title: "AI-Powered Shopping Ads",
    functionality:
      "Evaluates real-time feeds to generate custom product explainers.",
    impact:
      "Explains why a specific product matches exact user parameters.",
    useCase: "D2C retail, consumer electronics and specialized gear.",
  },
  {
    title: "Business Agent for Leads",
    functionality:
      "Embeds a Gemini agent directly inside the ad to answer buyer questions.",
    impact:
      "Qualifies and warms prospects without requiring an immediate landing page bounce.",
    useCase: "Professional services, education and real estate.",
  },
];

const faqItems = [
  {
    question:
      "How do Conversational Discovery Ads differ from traditional search ads?",
    answer:
      "Traditional search ads primarily depend on keyword matching. Conversational Discovery Ads are designed around broader intent and contextual signals from more detailed user queries.",
  },
  {
    question: "What are Highlighted Answers in AI-powered search?",
    answer:
      "Highlighted Answers create opportunities for sponsored brands to appear within AI-generated recommendation and answer experiences when they are relevant to the user's query.",
  },
  {
    question: "What is the Business Agent for Leads?",
    answer:
      "The Business Agent for Leads concept uses a conversational AI experience to answer prospect questions, reduce friction and help qualify potential customers before they move further into the sales journey.",
  },
  {
    question: "Why do SEO, AEO and GEO matter together?",
    answer:
      "SEO improves traditional search visibility, AEO helps content become easier for answer engines to extract and GEO focuses on how generative AI systems understand and represent a brand.",
  },
  {
    question: "How should businesses prepare for Gemini-powered advertising?",
    answer:
      "Businesses should improve their website information, structured data, product or service details, creative assets and overall consistency across performance marketing, social media and brand channels.",
  },
];

export default function GoogleMarketingLiveGeminiAdsGuide() {
  const articleTitle =
    "Google Marketing Live 2026: What Gemini-Powered Ad Formats Mean for Advertisers";

  const postedDate = "August 26, 2026";

  const aiPrompt = encodeURIComponent(
    `Please summarize this Big Beans Digital blog in a clear and practical way. Focus on the most important points, Gemini-powered ad formats, Conversational Discovery Ads, Highlighted Answers, AI-Powered Shopping Ads, Business Agent for Leads, PPC, SEO, AEO and GEO.

Blog title: "${articleTitle}"

Page link: ${pageUrl}`
  );

  return (
    <main className="bg-[#FAFAFA] text-[#171717]">
      {/* BREADCRUMB */}
      <div className="mx-auto flex max-w-[1380px] justify-center px-5 pt-7 md:px-8 lg:px-10">
        <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-[#E8E8E8] bg-white px-5 py-3 text-[12px] shadow-[0_8px_25px_rgba(0,0,0,0.05)] md:text-[13px]">
          <Link href="/" className="shrink-0 no-underline text-[#171717]">
            Home
          </Link>

          <span className="text-[#F8BC04]">→</span>

          <Link href="/blog" className="shrink-0 no-underline text-[#171717]">
            Blogs
          </Link>

          <span className="text-[#F8BC04]">→</span>

          <span className="truncate font-bold">
            Google Marketing Live 2026
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1380px] px-5 pb-12 pt-8 md:px-8 md:pt-12 lg:px-10 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
          <div>
            <h1 className="max-w-[700px] text-[40px] font-black leading-[1.02] tracking-[-1.5px] text-[#171717] md:text-[55px] lg:text-[64px]">
              Google Marketing Live 2026:{" "}
              <Highlight>Gemini Ads Guide</Highlight>
            </h1>

            <p className="mt-7 max-w-[650px] text-[17px] leading-[1.65] text-[#171717] md:text-[18px]">
              Discover how Gemini-powered ad formats from Google Marketing Live
              2026 reshape{" "}
              <InternalLink href="/services/google-ads-meta-ads">
                PPC and performance marketing
              </InternalLink>
              . Learn the key strategies behind Conversational Ads, AEO and GEO
              growth.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-[13px] text-[#171717]">
              <span>{postedDate}</span>

              <span className="h-4 w-px bg-[#BDBDBD]" />

              <span className="font-extrabold tracking-[0.3px] text-[#171717]">
                By Big Beans Digital Team
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] bg-black">
            <div className="relative aspect-[1350/1080] w-full">
              <Image
                src={thumbnail}
                alt={articleTitle}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BLOG AREA */}
      <section className="mx-auto max-w-[1380px] px-5 pb-20 md:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-14">
          {/* LEFT CONTENT */}
          <article className="min-w-0">
            {/* AI SUMMARY */}
            <div className="mb-10 flex min-h-[68px] w-full items-center justify-between gap-5 rounded-[16px] bg-[#111111] px-7 py-4 md:px-7">
              <span className="text-[16px] font-medium text-[#F8BC04] md:text-[18px]">
                Summarize with AI
              </span>

              <div className="flex shrink-0 items-center gap-6">
                <a
                  href={`https://chatgpt.com/?q=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Summarize this blog with ChatGPT"
                  className="flex items-center justify-center text-[#F8BC04] no-underline"
                >
                  <ChatGPTIcon />
                </a>

                <a
                  href={`https://gemini.google.com/app?text=${aiPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Summarize this blog with Gemini"
                  className="flex items-center justify-center text-[#F8BC04] no-underline"
                >
                  <GeminiIcon />
                </a>
              </div>
            </div>

            {/* INTRODUCTION */}
            <section className="mb-14">
              <div className="rounded-[22px] border border-[#ECECEC] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.035)] md:p-9">
                <p className="text-[16px] leading-[1.8] text-[#171717]">
                  Google Marketing Live 2026 marks a major evolution in search
                  advertising. As Google Search moves towards more
                  conversational and generative experiences, traditional
                  keyword-matching campaigns are increasingly giving way to
                  intent-driven and context-aware advertising ecosystems.
                </p>

                <p className="mt-5 text-[16px] leading-[1.8] text-[#171717]">
                  For performance marketers and brand leaders, appearing beside
                  a list of blue links is no longer the only opportunity.
                  Businesses increasingly need to understand how their brand,
                  information and creative assets can become relevant within
                  AI-powered customer journeys.
                </p>

                <div className="my-6 rounded-xl border-l-4 border-[#F8BC04] bg-[#FFF9E8] px-6 py-5">
                  <p className="text-[18px] font-bold leading-[1.55] text-[#171717]">
                    The next era of advertising is less about matching one
                    keyword and more about understanding the complete customer
                    intent behind the conversation.
                  </p>
                </div>

                <p className="text-[16px] leading-[1.8] text-[#171717]">
                  At{" "}
                  <InternalLink href="/">
                    Big Beans Digital
                  </InternalLink>
                  , we look at how these Gemini-powered updates can transform
                  search, social and{" "}
                  <InternalLink href="/services/google-ads-meta-ads">
                    performance marketing
                  </InternalLink>{" "}
                  funnels and what businesses can do to prepare for long-term
                  growth.
                </p>
              </div>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section className="mb-14">
              <SectionTitle number="01">
                Executive Summary: The Architectural Shift in Search Advertising
              </SectionTitle>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                Google&apos;s Gemini-powered advertising direction represents a
                shift from static ad blocks towards more dynamic and
                context-aware experiences.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E7E7E7] bg-white p-6">
                  <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#171717]">
                    Traditional PPC Advertising
                  </span>

                  <div className="mt-5 space-y-3 text-center text-[14px] font-bold text-[#171717]">
                    <div className="rounded-xl border border-[#E8E8E8] p-4">
                      User Keyword Query
                    </div>
                    <div>↓</div>
                    <div className="rounded-xl border border-[#E8E8E8] p-4">
                      Exact Match Ad
                    </div>
                    <div>↓</div>
                    <div className="rounded-xl border border-[#E8E8E8] p-4">
                      Landing Page Form
                    </div>
                    <div>↓</div>
                    <div className="rounded-xl border border-[#E8E8E8] p-4">
                      Delayed Lead
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#171717] p-6">
                  <span className="text-xs font-bold uppercase tracking-[1.3px] text-[#F8BC04]">
                    Gemini AI-Powered Search
                  </span>

                  <div className="mt-5 space-y-3 text-center text-[14px] font-bold text-white">
                    <div className="rounded-xl border border-[#333] p-4">
                      Complex Intent Query
                    </div>
                    <div className="text-[#F8BC04]">↓</div>
                    <div className="rounded-xl border border-[#333] p-4">
                      Gemini Context Processing
                    </div>
                    <div className="text-[#F8BC04]">↓</div>
                    <div className="rounded-xl border border-[#333] p-4">
                      Native Interactive Ad / Lead Agent
                    </div>
                    <div className="text-[#F8BC04]">↓</div>
                    <div className="rounded-xl border border-[#333] p-4">
                      Faster Conversion Journey
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-[#171717] p-6 text-white">
                <p className="text-[15px] leading-[1.8] text-white">
                  Success in this environment requires an integrated growth
                  model connecting{" "}
                  <InternalLink
                    href="/services/google-ads-meta-ads"
                    className="text-[#F8BC04]"
                  >
                    performance ads
                  </InternalLink>
                  , structured information, useful content and{" "}
                  <InternalLink
                    href="/services/social-media-marketing"
                    className="text-[#F8BC04]"
                  >
                    social media authority
                  </InternalLink>
                  .
                </p>
              </div>
            </section>

            {/* AD FORMATS */}
            <section className="mb-14">
              <SectionTitle number="02">
                The 4 New Gemini-Powered Ad Formats at a Glance
              </SectionTitle>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                Google Marketing Live 2026 introduced several advertising
                formats designed around AI Mode and conversational search
                experiences.
              </p>

              <div className="mt-7 space-y-4">
                {adFormats.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 min-w-9 items-center justify-center rounded-full bg-black text-[12px] font-bold text-[#F8BC04]">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="text-[18px] font-extrabold text-[#171717]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-[1.7] text-[#171717]">
                          <strong>AI Functionality:</strong> {item.functionality}
                        </p>

                        <p className="mt-2 text-[14px] leading-[1.7] text-[#171717]">
                          <strong>Commercial Impact:</strong> {item.impact}
                        </p>

                        <p className="mt-2 text-[14px] leading-[1.7] text-[#171717]">
                          <strong>Best Use Case:</strong> {item.useCase}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CONVERSATIONAL DISCOVERY ADS */}
            <section className="mb-14">
              <SectionTitle number="03">
                Conversational Discovery Ads: Context Over Keywords
              </SectionTitle>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                Traditional search ads depend heavily on matching individual
                keywords. Conversational Discovery Ads are designed around a
                broader understanding of customer intent.
              </p>

              <div className="my-7 rounded-2xl border border-[#E8E8E8] bg-white p-6">
                <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#171717]">
                  Example User Query
                </span>

                <p className="mt-4 text-[17px] font-bold italic leading-[1.6] text-[#171717]">
                  “How can my scaling startup expand brand awareness while
                  running cost-effective social media campaigns?”
                </p>
              </div>

              <div className="rounded-2xl bg-[#171717] p-7 text-center text-white">
                <p className="text-[15px] font-bold">Complex User Query</p>
                <div className="my-4 text-[#F8BC04]">↓</div>
                <p className="text-[15px] font-bold">
                  Gemini Evaluates Intent & Context
                </p>
                <div className="my-4 text-[#F8BC04]">↓</div>
                <p className="text-[15px] font-bold">
                  Dynamic Discovery Ad With Relevant Value Proposition
                </p>
              </div>

              <h3 className="mt-8 text-[21px] font-extrabold text-[#171717]">
                Strategic Requirement for Brands
              </h3>

              <p className="mt-3 text-[16px] leading-[1.8] text-[#171717]">
                To support richer AI-powered advertising experiences, businesses
                need strong and detailed asset foundations. If you work with a{" "}
                <InternalLink href="/services/social-media-marketing">
                  social media marketing agency
                </InternalLink>
                , your strategy should include useful service information,
                structured case studies, clear messaging and modular creative
                assets that can support different customer contexts.
              </p>
            </section>

            {/* HIGHLIGHTED ANSWERS */}
            <section className="mb-14">
              <SectionTitle number="04">
                Highlighted Answers: Winning Visibility Inside AI Briefs
              </SectionTitle>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                When users ask for recommendations or strategic guidance,
                Gemini can generate a more complete answer experience.
                Highlighted Answers create opportunities for sponsored brands to
                appear within relevant AI-powered recommendation journeys.
              </p>

              <div className="my-7 overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white">
                <div className="bg-[#171717] px-6 py-4 text-sm font-bold text-[#F8BC04]">
                  AI MODE ANSWER BRIEF
                </div>

                <div className="p-6">
                  <p className="text-[15px] leading-[1.75] text-[#171717]">
                    “To scale brand awareness, businesses require strong
                    creative strategies, clear positioning and search
                    visibility...”
                  </p>

                  <div className="mt-5 rounded-xl border border-[#F8BC04] bg-[#FFF9E8] p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-[#171717]">
                      Sponsored Highlighted Answer
                    </p>

                    <p className="mt-3 text-[16px] font-bold text-[#171717]">
                      Big Beans Digital: Full-funnel social media and search
                      growth.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                Visibility inside these experiences depends on relevance,
                information quality and brand authority. A strong{" "}
                <InternalLink href="/services/website-development">
                  website
                </InternalLink>{" "}
                with clearly structured services and useful content gives
                customers and modern search systems a better understanding of
                what your business actually offers.
              </p>
            </section>

            {/* SHOPPING ADS */}
            <section className="mb-14">
              <SectionTitle number="05">
                AI-Powered Shopping Ads: Contextual eCommerce Guidance
              </SectionTitle>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                Shopping queries are becoming more detailed. Instead of simply
                searching for a product category, customers increasingly explain
                their requirements, budget, preferences and usage situations.
              </p>

              <div className="my-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-[18px] font-bold italic leading-[1.6]">
                  “Which lightweight running shoes offer high arch support for
                  road marathons under £150?”
                </p>
              </div>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                AI-powered Shopping Ads can use richer product information to
                explain why a particular product may be relevant to those
                requirements.
              </p>

              <h3 className="mt-8 text-[21px] font-extrabold text-[#171717]">
                How eCommerce Brands Should Adapt Product Data
              </h3>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-[#E8E8E8] bg-white p-5">
                  <p className="font-bold text-[#171717]">
                    1. Expand Feed Granularity
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#171717]">
                    Go beyond generic product titles and prices. Include
                    detailed materials, usage scenarios, compatibility and
                    relevant customer information.
                  </p>
                </div>

                <div className="rounded-xl border border-[#E8E8E8] bg-white p-5">
                  <p className="font-bold text-[#171717]">
                    2. Align Search and Paid Social
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#171717]">
                    Connect product descriptions, social proof and creative
                    assets across channels with a strong{" "}
                    <InternalLink href="/services/social-media-marketing">
                      social media marketing strategy
                    </InternalLink>
                    .
                  </p>
                </div>

                <div className="rounded-xl border border-[#E8E8E8] bg-white p-5">
                  <p className="font-bold text-[#171717]">
                    3. Optimize for Local Intent
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#171717]">
                    Ensure product availability, offers and location-specific
                    information accurately reflect the markets you serve.
                  </p>
                </div>
              </div>
            </section>

            {/* BUSINESS AGENT */}
            <section className="mb-14">
              <SectionTitle number="06">
                Business Agent for Leads: Conversational Lead Generation
              </SectionTitle>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                Traditional lead capture often relies on landing page forms.
                The Business Agent for Leads concept introduces a conversational
                AI experience directly into the customer journey.
              </p>

              <div className="my-7 rounded-2xl border border-[#E8E8E8] bg-white p-6">
                <div className="grid gap-3 text-center md:grid-cols-4">
                  {[
                    "User Views Search Ad",
                    "Opens Native AI Conversation",
                    "Agent Answers Questions",
                    "Lead Qualified & Moves Forward",
                  ].map((item, index) => (
                    <div key={item}>
                      <div className="rounded-xl bg-black p-4 text-[13px] font-bold text-white">
                        {item}
                      </div>

                      {index < 3 && (
                        <div className="py-3 text-[#F8BC04] md:hidden">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                Prospects can ask questions before reaching your sales team,
                reducing friction and helping businesses understand customer
                intent earlier in the journey.
              </p>

              <div className="mt-6 rounded-2xl bg-[#FFF9E8] p-6">
                <p className="text-[15px] font-bold leading-[1.8] text-[#171717]">
                  This could be particularly valuable for businesses investing
                  in{" "}
                  <InternalLink href="/services/google-ads-meta-ads">
                    lead generation campaigns
                  </InternalLink>{" "}
                  where customers often need answers before submitting an
                  enquiry.
                </p>
              </div>
            </section>

            {/* SEO AEO GEO */}
            <section className="mb-14">
              <SectionTitle number="07">
                The Convergence of SEO, AEO and GEO
              </SectionTitle>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                Google Marketing Live 2026 reinforces the fact that organic
                optimization and paid advertising can no longer be treated as
                completely separate silos.
              </p>

              <div className="my-7 rounded-2xl bg-[#171717] p-7 text-white">
                <p className="text-center text-[13px] font-bold tracking-[1.2px] text-[#F8BC04]">
                  CENTRAL BRAND KNOWLEDGE BASE
                </p>

                <p className="mt-2 text-center text-[14px] text-white">
                  Website • Structured Information • Content • Data • Brand
                  Assets
                </p>

                <div className="my-6 text-center text-[#F8BC04]">↓</div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-[#333] p-5">
                    <p className="font-bold text-[#F8BC04]">SEO</p>
                    <p className="mt-2 text-[13px] text-white">
                      Traditional organic search visibility and topical
                      authority.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#333] p-5">
                    <p className="font-bold text-[#F8BC04]">AEO & GEO</p>
                    <p className="mt-2 text-[13px] text-white">
                      Answer and generative engine understanding.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#333] p-5">
                    <p className="font-bold text-[#F8BC04]">
                      Gemini Ad Formats
                    </p>
                    <p className="mt-2 text-[13px] text-white">
                      Dynamic conversational advertising and lead experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[16px] leading-[1.8] text-[#171717]">
                  <strong>SEO (Search Engine Optimization):</strong> Builds
                  topical authority and technical health across traditional
                  search experiences.
                </p>

                <p className="text-[16px] leading-[1.8] text-[#171717]">
                  <strong>AEO (Answer Engine Optimization):</strong> Helps
                  structure content into clear and direct answers that answer
                  engines can understand and extract.
                </p>

                <p className="text-[16px] leading-[1.8] text-[#171717]">
                  <strong>GEO (Generative Engine Optimization):</strong> Focuses
                  on structuring brand information so generative AI systems can
                  understand, categorize and accurately represent a business.
                </p>
              </div>

              <p className="mt-6 text-[16px] leading-[1.8] text-[#171717]">
                This makes{" "}
                <InternalLink href="/services/website-development">
                  website development
                </InternalLink>{" "}
                increasingly important because your website becomes a central
                source of information for customers, search engines and
                AI-powered discovery experiences.
              </p>
            </section>

            {/* BRANDING */}
            <section className="mb-14">
              <SectionTitle number="08">
                Why Branding Matters in an AI-Powered Advertising World
              </SectionTitle>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                AI can help businesses create more content and more creative
                variations, but it does not remove the need for a clear brand
                identity.
              </p>

              <div className="my-7 rounded-2xl bg-black p-7 text-white">
                <p className="text-[25px] font-black leading-[1.35] text-[#F8BC04]">
                  AI can generate more marketing assets.
                </p>

                <p className="mt-3 text-[19px] font-bold leading-[1.5]">
                  But your brand still needs to give customers a reason to
                  choose you.
                </p>
              </div>

              <p className="text-[16px] leading-[1.8] text-[#171717]">
                A strong{" "}
                <InternalLink href="/services/branding">
                  branding strategy
                </InternalLink>{" "}
                helps businesses remain recognizable across search, social,
                advertising and customer experiences. A consistent identity,
                message and offer become even more valuable when content can be
                generated at greater scale.
              </p>

              <p className="mt-5 text-[16px] leading-[1.8] text-[#171717]">
                Your{" "}
                <InternalLink href="/services/logo-designing">
                  logo and visual identity
                </InternalLink>{" "}
                should also support consistent recognition across every digital
                touchpoint.
              </p>
            </section>

            {/* ACTION PLAN */}
            <section className="mb-14">
              <SectionTitle number="09">
                How Businesses Can Prepare for Gemini-Powered Advertising
              </SectionTitle>

              <div className="space-y-5">
                {[
                  {
                    number: "01",
                    title: "Improve Your Brand Information",
                    text: "Make your services, products, audiences and value proposition clear across your digital presence.",
                  },
                  {
                    number: "02",
                    title: "Strengthen Your Website Foundation",
                    text: "Use clear headings, useful content, structured information and strong conversion paths.",
                  },
                  {
                    number: "03",
                    title: "Connect Your Marketing Channels",
                    text: "Align social media, branding, websites and paid advertising instead of treating them as disconnected activities.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-[#E8E8E8] bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 min-w-10 items-center justify-center rounded-full bg-black text-[12px] font-bold text-[#F8BC04]">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="text-[18px] font-extrabold text-[#171717]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-[1.75] text-[#171717]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section className="mb-14">
              <SectionTitle number="10">
                Lead the Conversational Search Era with Big Beans Digital
              </SectionTitle>

              <div className="rounded-[22px] border border-[#ECECEC] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.035)] md:p-9">
                <p className="text-[16px] leading-[1.8] text-[#171717]">
                  Google Marketing Live 2026 makes one reality clear:
                  advertising is evolving from simple keyword bidding into more
                  intelligent and context-aware customer conversations.
                </p>

                <p className="mt-5 text-[16px] leading-[1.8] text-[#171717]">
                  Businesses that invest in better information, dynamic creative
                  assets and connected multi-channel strategies will be better
                  positioned for the next era of discovery.
                </p>

                <div className="my-7 rounded-2xl bg-black p-7 text-center">
                  <p className="text-[22px] font-black leading-[1.5] text-[#F8BC04]">
                    The future is not just about winning more keywords.
                  </p>

                  <p className="mt-2 text-[20px] font-bold text-white">
                    It is about becoming the most relevant answer.
                  </p>
                </div>

                <p className="text-[16px] leading-[1.8] text-[#171717]">
                  At{" "}
                  <InternalLink href="/">
                    Big Beans Digital
                  </InternalLink>
                  , we help ambitious businesses connect{" "}
                  <InternalLink href="/services/social-media-marketing">
                    social media marketing
                  </InternalLink>
                  ,{" "}
                  <InternalLink href="/services/branding">
                    branding
                  </InternalLink>
                  ,{" "}
                  <InternalLink href="/services/google-ads-meta-ads">
                    performance advertising
                  </InternalLink>{" "}
                  and{" "}
                  <InternalLink href="/services/website-development">
                    website development
                  </InternalLink>{" "}
                  into stronger digital growth strategies.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <SectionTitle number="11">
                Frequently Asked Questions
              </SectionTitle>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[18px] border border-[#D9D9D9] bg-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-6 text-[16px] font-bold text-[#171717]">
                      <span>{item.question}</span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-[20px] text-[#F8BC04]">
                        +
                      </span>
                    </summary>

                    <div className="border-t border-[#E8E8E8] px-6 pb-6 pt-5 text-[15px] leading-[1.8] text-[#171717]">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-[24px] bg-black p-7 text-white md:p-9">
              <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#F8BC04]">
                Ready for the AI Search Era?
              </span>

              <h2 className="mt-3 text-[29px] font-black leading-[1.25] md:text-[36px]">
                Build a smarter digital marketing strategy for the future.
              </h2>

              <p className="mt-5 max-w-[800px] text-[16px] leading-[1.8] text-white">
                Connect your{" "}
                <InternalLink
                  href="/services/social-media-marketing"
                  className="text-[#F8BC04]"
                >
                  social media marketing
                </InternalLink>
                ,{" "}
                <InternalLink
                  href="/services/branding"
                  className="text-[#F8BC04]"
                >
                  branding
                </InternalLink>
                ,{" "}
                <InternalLink
                  href="/services/google-ads-meta-ads"
                  className="text-[#F8BC04]"
                >
                  paid advertising
                </InternalLink>{" "}
                and{" "}
                <InternalLink
                  href="/services/website-development"
                  className="text-[#F8BC04]"
                >
                  website strategy
                </InternalLink>{" "}
                into one connected growth system.
              </p>

              <Link
                href="/connect"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#F8BC04] px-6 py-4 text-sm font-bold text-black no-underline"
              >
                Contact Big Beans Digital
                <ArrowIcon />
              </Link>
            </section>
          </article>

          {/* STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[24px] bg-[#111111] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.09)] md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

                <h2 className="text-[20px] font-extrabold text-white">
                  Services We Provide
                </h2>
              </div>

              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block rounded-2xl bg-white p-5 no-underline"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[14px] font-extrabold text-[#171717]">
                          {service.title}
                        </h3>

                        <p className="mt-2 text-[12px] leading-[1.6] text-[#171717]">
                          {service.description}
                        </p>
                      </div>

                      <span className="mt-1 shrink-0 text-[#F8BC04]">→</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#2B2B2B] bg-[#181818] p-5">
                <p className="text-xs font-bold uppercase tracking-[1.3px] text-[#F8BC04]">
                  Let&apos;s Grow Your Business
                </p>

                <p className="mt-3 text-[15px] font-bold leading-[1.6] text-white">
                  Ready to build a stronger digital strategy for the
                  AI-powered search era?
                </p>

                <Link
                  href="/connect"
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-[#F8BC04] no-underline"
                >
                  Talk to Our Experts
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}