"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, ExternalLink } from "lucide-react";

const OurWork = dynamic(() => import("@/components/Recentwork"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[300px] w-full animate-pulse rounded-2xl bg-white/[0.02]" />
  ),
});

interface FAQ {
  q: string;
  a: string;
}

interface BlogCard {
  id: number;
  image: string;
  date: string;
  primaryCategory: string;
  title: string;
  description: string;
  link: string;
  readTime: string;
}

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface MapPosition {
  top: string;
  left: string;
}

interface PlatformContent {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stats: {
    value: string;
    label: string;
  }[];
  cta: string;
  href: string;
}

interface GrowthTabContent {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
  cta: string;
  href: string;
}


/* =========================================================
   BLOG DATA
========================================================= */

const blogCards: BlogCard[] = [
  {
    id: 1,
    image:
      "/assets/blog/singleblogs/clinic-instagram-marketing-strategy.webp",
    date: "August 14, 2026",
    primaryCategory: "Social Media",
    title: "How to Do SMM for a New Clinic in India | BigBeans",
    description:
      "Learn what to post when launching a clinic on Instagram, from educational Reels to trust-building content that attracts regular patients.",
    link: "/blog/clinic-instagram-marketing-strategy",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: "/assets/blog/singleblogs/new-instagram-logo-redesign.webp",
    date: "August 17, 2026",
    primaryCategory: "Social Media",
    title: "New Instagram Logo 2026: Wordmark Redesign & Brand Refresh",
    description:
      "A practical look at Instagram's brand changes and what they mean for businesses building a stronger presence on social media.",
    link: "/blog/new-instagram-logo-redesign",
    readTime: "4 min read",
  },
  {
    id: 3,
    image:
      "/assets/blog/singleblogs/why-is-my-competitor-getting-more-leads.webp",
    date: "August 17, 2026",
    primaryCategory: "Growth Strategy",
    title: "Why Is My Competitor Getting More Leads?",
    description:
      "Understand how content, local visibility, paid campaigns, reviews and remarketing can influence the number of leads a business receives.",
    link: "/blog/why-is-my-competitor-getting-more-leads",
    readTime: "6 min read",
  },
];


// Industries Data
const industries = [
 {
  id: "real-estate",
  title: "Real Estate & Interior Decorators",
  description: "Creating stunning digital experiences for spaces and lifestyles.",
  image: "/industries/Real Estate & Interior Decorators.webp",
  alt: "Real Estate and Interior Decorators",
  href: "/services",
},

{
  id: "travel-tourism",
  title: "Travel and Tourism",
  description: "Inspiring journeys with creative storytelling and digital campaigns.",
  image: "/industries/Travel and Tourism.webp",
  alt: "Travel and Tourism",
  href: "/services",
},

{
  id: "fmcg-brands",
  title: "FMCG Brands",
  description: "Building brands that become household names.",
  image: "/industries/FMCG Brands.webp",
  alt: "FMCG Brands",
  href: "/services",
},

{
  id: "bakery-restaurants",
  title: "Bakery and Restaurants",
  description: "Serving creativity for brands that serve happiness.",
  image: "/industries/Bakery and Restaurants.webp",
  alt: "Bakery and Restaurant Brands",
  href: "/services",
},

{
  id: "ecommerce",
  title: "Ecommerce",
  description: "Driving growth for online stores with scroll-stopping content.",
  image: "/industries/ecommerce.webp",
  alt: "Ecommerce Brands and Online Stores",
  href: "/services",
},

{
  id: "it-consultancy",
  title: "IT & Consultancy",
  description: "Simplifying complex ideas with impactful digital solutions.",
  image: "/industries/IT & Consultancy.webp",
  alt: "IT and Consultancy Services",
  href: "/services",
},
];


/* =========================================================
   USP CARDS
========================================================= */

const uspCards: ServiceCard[] = [
  {
    number: "01",
    title: "Tailored Social Strategy",
    description:
      "We build social media strategies around your business, audience, market and commercial goals instead of applying the same content plan to every brand.",
    image: "/USP/usp-1.webp",
    alt: "Tailored social media marketing strategy",
    href: "/services",
  },
  {
    number: "02",
    title: "Complete Social Media Solutions",
    description:
      "Strategy, content planning, creative design, Reels, publishing, community management, paid campaigns and reporting can work together under one social media plan.",
    image: "/USP/usp-2.webp",
    alt: "Complete social media marketing services",
    href: "/services",
  },
  {
    number: "03",
    title: "Data-Driven Marketing",
    description:
      "We use campaign and audience data to understand what is working, what needs improvement and where the next opportunity lies.",
    image: "/USP/usp-3.webp",
    alt: "Data driven social media marketing",
    href: "/performance-marketing",
  },
  {
    number: "04",
    title: "Visibility That Supports Sales",
    description:
      "The objective is more than posting regularly. We connect content, audience growth and paid campaigns with the actions that matter to your business.",
    image: "/USP/usp-4.webp",
    alt: "Social media visibility and sales",
    href: "/performance-marketing",
  },
  {
    number: "05",
    title: "Local Market Understanding",
    description:
      "We adapt communication, content and campaigns to local audiences across Indian and international markets.",
    image: "/USP/usp-5.webp",
    alt: "Local social media marketing expertise",
    href: "/services",
  },
];


/* =========================================================
   FACEBOOK / INSTAGRAM / LINKEDIN
========================================================= */

const platformContent: PlatformContent[] = [
  {
    id: "facebook",
    label: "Facebook",
    eyebrow: "FACEBOOK MARKETING",
    title: "Our team to atom Facebook Marketing strategy generates sales",
    description:
      "Does your brand leverage Facebook ads to create a revenue-generating advertising strategy? Transforming goals into better decisions and customer experiences so you can improve your returns and spend.",
    image: "/assets/socialmediamarketing/facebook.webp",
    imageAlt: "Facebook marketing campaign",
    stats: [
      {
        value: "01",
        label: "Audience Targeting",
      },
      {
        value: "02",
        label: "Lead Generation",
      },
      {
        value: "03",
        label: "Conversion Campaigns",
      },
    ],
    cta: "Explore Facebook Marketing",
    href: "/performance-marketing",
  },

  {
    id: "instagram",
    label: "Instagram",
    eyebrow: "INSTAGRAM MARKETING",
    title: "Build a Stronger Instagram Presence That Drives Engagement",
    description:
      "Instagram gives brands a direct visual channel to communicate with their audience. We combine Reels, carousels, Stories, creative campaigns and community management to create a consistent presence that encourages people to interact with your brand.",
    image: "/assets/socialmediamarketing/instagram.webp",
    imageAlt: "Instagram marketing campaign",
    stats: [
      {
        value: "01",
        label: "Reels & Content",
      },
      {
        value: "02",
        label: "Audience Growth",
      },
      {
        value: "03",
        label: "Creative Campaigns",
      },
    ],
    cta: "Explore Instagram Marketing",
    href: "/services",
  },

  {
    id: "linkedin",
    label: "LinkedIn",
    eyebrow: "LINKEDIN MARKETING",
    title: "Turn LinkedIn Into a Stronger B2B Brand Channel",
    description:
      "LinkedIn can help businesses build authority, communicate expertise and reach professional audiences. We create company and founder-led content around industry topics, business updates, thought leadership and targeted B2B campaigns.",
    image: "/assets/socialmediamarketing/linkedin.webp",
    imageAlt: "LinkedIn marketing campaign",
    stats: [
      {
        value: "01",
        label: "B2B Audience",
      },
      {
        value: "02",
        label: "Thought Leadership",
      },
      {
        value: "03",
        label: "Lead Generation",
      },
    ],
    cta: "Explore LinkedIn Marketing",
    href: "/services",
  },
];


/* =========================================================
   PAID SOCIAL + BRAND GROWTH
========================================================= */

const growthTabs: GrowthTabContent[] = [
  {
    id: "paid",
    label: "Paid Social Advertising",
    eyebrow: "PAID SOCIAL ADVERTISING",
    title: "Put Your Budget In Front of the Right People",
    description:
      "Paid social gives businesses the ability to reach specific audiences based on location, interests, behaviour, demographics and previous interactions. We plan campaigns around the result you are trying to achieve.",
    image: "/assets/socialmediamarketing/paid-social-1.webp",
    imageAlt: "Paid social media advertising campaign",
    points: [
      "Audience Targeting",
      "Lead Generation",
      "Retargeting",
      "Creative Testing",
      "Conversion Tracking",
      "ROI Analysis",
    ],
    cta: "View Performance Marketing",
    href: "/performance-marketing",
  },

  {
    id: "awareness",
    label: "Brand Awareness",
    eyebrow: "BRAND AWARENESS",
    title: "Get Seen By More of the Right People",
    description:
      "Awareness campaigns help businesses reach people who may not know the brand yet. We combine creative content, paid distribution, audience targeting and retargeting to keep your business visible throughout the customer journey.",
    image: "/assets/socialmediamarketing/brand-awareness-1.webp",
    imageAlt: "Brand awareness social media campaign",
    points: [
      "Strategic Ad Placement",
      "Audience Targeting & Retargeting",
      "Promotional Campaigns",
      "Creative Content Development",
      "Reach & Visibility Tracking",
      "Brand Recall",
    ],
    cta: "Strengthen Your Brand Identity",
    href: "/branding",
  },
];


/* =========================================================
   ORGANIC SOCIAL MEDIA
========================================================= */

const organicSteps = [
  {
    number: "01",
    title: "Find the Right Audience",
    description:
      "Understand who your business needs to reach, what they care about and where they spend time online.",
  },
  {
    number: "02",
    title: "Build the Content Direction",
    description:
      "Create a clear mix of educational, promotional, brand and engagement-led content.",
  },
  {
    number: "03",
    title: "Create for the Platform",
    description:
      "Adapt posts, carousels, Stories and Reels to the format and behaviour of each platform.",
  },
  {
    number: "04",
    title: "Start Conversations",
    description:
      "Maintain an active presence by responding to comments, messages and audience interactions.",
  },
  {
    number: "05",
    title: "Measure the Response",
    description:
      "Review reach, engagement, audience growth, content performance and audience behaviour.",
  },
  {
    number: "06",
    title: "Optimise in Real Time",
    description:
      "Use performance signals to adjust topics, formats, timing and future content decisions.",
  },
];




const leftFaqs: FAQ[] = [
  {
    q: "What social media marketing services do you offer?",
    a: "Big Beans Digital provides full-lifecycle social media solutions for startups and enterprises across India, the US, and the UK. Our scope includes visual feed architecture, algorithm-specific short-form Reels & TikTok production, organic growth strategy, community management, and synchronized paid social campaigns.",
  },
  {
    q: "How do I find the best social media marketing agency near me?",
    a: "Beyond physical proximity, evaluate verified case studies, aesthetic consistency, conversion tracking transparency, and strategic depth. Big Beans Digital operates a distributed agile team delivering high-touch collaboration regardless of whether you are based in London, Kolkata, Delhi, or New York.",
  },
  {
    q: "Why choose Big Beans Digital over traditional agencies?",
    a: "Traditional agencies separate creative thinking from performance metrics. We merge branding, web engineering, and performance marketing into a single unit so every dollar spent directly advances brand equity and customer acquisition.",
  },
  {
    q: "Do you engineer conversion-focused websites for startups?",
    a: "Yes. We build responsive, fast headless websites using modern frameworks (Next.js, Tailwind CSS) optimized for sub-second load times, technical SEO compliance, and conversion funnels designed to turn traffic into pipeline.",
  },
  {
    q: "How does performance marketing work with your team?",
    a: "We deploy rigorous quantitative testing across Google Ads, Meta Ads, and PPC remarketing funnels. We focus on true business levers—CAC, ROAS, and customer lifetime value—rather than vanity impressions.",
  },
  {
    q: "What does an engagement cost?",
    a: "We offer tailored milestone or retainer engagements based on growth objectives, required content cadence, and ad spend scale. Schedule a consultation call to receive an honest, transparent roadmap.",
  },
];

const rightFaqs: FAQ[] = [
  {
    q: "What industries do you work with?",
    a: "We work with businesses across sectors including real estate, healthcare, restaurants, ecommerce, education, professional services, home improvement, gyms, FMCG, and other growth-focused businesses.",
  },
  {
    q: "Can you manage both organic social media and paid advertising?",
    a: "Yes. Our team can manage organic social media strategy and content alongside paid campaigns on platforms such as Meta and Google. This allows creative, audience targeting, messaging, and performance data to work together.",
  },
  {
    q: "How long does it take to see results from social media marketing?",
    a: "The timeline depends on your industry, starting position, content quality, audience, and objectives. Organic growth generally requires consistent execution over time, while paid campaigns can generate measurable traffic and leads much sooner.",
  },
  {
    q: "Do you provide content creation and graphic design?",
    a: "Yes. Our social media services can include creative direction, graphic design, short-form video concepts, social media creatives, campaign content, and platform-specific content planning.",
  },
  {
    q: "Do you provide SEO and website optimization?",
    a: "Yes. We can integrate technical SEO, on-page optimization, content strategy, conversion-focused landing pages, and website improvements into a broader digital marketing strategy.",
  },
  {
    q: "How can I get started with Big Beans Digital?",
    a: "Start by sharing your business, current challenges, goals, target audience, and the services you are looking for. We can then discuss the right approach, scope, milestones, and next steps for your project.",
  },
];


/* =========================================================
   MAP POSITIONS
========================================================= */

const mapPositions: MapPosition[] = [
  { top: "42%", left: "67%" },
  { top: "27%", left: "44%" },
  { top: "28%", left: "18%" },
  { top: "54%", left: "74%" },
  { top: "65%", left: "84%" },
];


/* =========================================================
   FAQ ITEM
========================================================= */

function FAQItem({
  faq,
  index,
  openFaq,
  setOpenFaq,
}: {
  faq: FAQ;
  index: number;
  openFaq: number | null;
  setOpenFaq: (value: number | null) => void;
}) {
  const isOpen = openFaq === index;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20 sm:rounded-2xl">

      <button
        type="button"
        onClick={() => setOpenFaq(isOpen ? null : index)}
        className="flex min-h-[84px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
        aria-expanded={isOpen}
      >

        <span className="flex-1 font-bold text-white">
          {faq.q}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-bold transition-transform duration-300 sm:h-8 sm:w-8 sm:text-sm ${
            isOpen
              ? "rotate-45 bg-[#F8BC04] text-black"
              : "bg-white/5 text-white/80"
          }`}
        >
          +
        </span>

      </button>

      <AnimatePresence initial={false}>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >

            <div className="border-t border-white/5 px-5 pb-5 pt-1 text-white/70 sm:px-6 sm:pb-6">
              {faq.a}
            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}


/* =========================================================
   SERVICE CARD
========================================================= */

function SocialServiceCard({
  card,
}: {
  card: ServiceCard;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:-translate-y-2 hover:border-[#F8BC04]/60"
    >

      <div className="relative h-[230px] overflow-hidden">

        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        

      </div>

      <div className="p-6">

        <h3 className="font-bold leading-tight text-[#FCBB08]">
          {card.title}
        </h3>

        <p className="mt-3 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
          {card.description}
        </p>

        

      </div>

    </div>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

export default function SocialMediaMarketingPage() {

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [activePlatform, setActivePlatform] =
    useState("facebook");

  const [activeGrowthTab, setActiveGrowthTab] =
    useState("paid");


  const activePlatformData =
    platformContent.find(
      (platform) => platform.id === activePlatform
    ) || platformContent[0];


  const activeGrowthData =
    growthTabs.find(
      (tab) => tab.id === activeGrowthTab
    ) || growthTabs[0];


  const trustCarouselImages = [
    "/clientlogo/1.webp",
    "/clientlogo/2.webp",
    "/clientlogo/3.webp",
    "/clientlogo/4.webp",
    "/clientlogo/5.webp",
    "/clientlogo/6.webp",
    "/clientlogo/7.webp",
    "/clientlogo/8.webp",
    "/clientlogo/9.webp",
    "/clientlogo/10.webp",
    "/clientlogo/11.webp",
    "/clientlogo/12.webp",
    "/clientlogo/13.webp",
    "/clientlogo/14.webp",
    "/clientlogo/15.webp",
  ];


  return (

    <main className="min-h-screen bg-black text-white [&_*]:box-border">

      <style>{`

        /* =====================================================
           GLOBAL FONT SIZES
           FINAL TYPOGRAPHY SCALE
        ===================================================== */

        h1 {
          font-size: 50px !important;
        }

        h2 {
          font-size: 30px !important;
        }

        h3,
        h4,
        h5,
        h6 {
          font-size: 20px !important;
        }

        p {
          font-size: 20px !important;
        }


        /* =====================================================
           GLOBAL FONT FAMILY
        ===================================================== */

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing: normal !important;
        }

        p {
          font-family: Inter, sans-serif !important;
          font-size: 14px !important;
          font-weight: 400 !important;
          color: rgba(255,255,255,0.70) !important;
          text-align: left !important;
          letter-spacing: normal !important;
        }

        @media (min-width: 640px) {
          p {
            font-size: 16px !important;
          }
        }

        @media (min-width: 768px) {
          p {
            font-size: 18px !important;
          }
        }


        h1 .highlight-font,
        h2 .highlight-font,
        h3 .highlight-font,
        h4 .highlight-font,
        h5 .highlight-font,
        h6 .highlight-font {
          font-family: Georgia, "Times New Roman", serif !important;
          font-style: italic;
          font-weight: 400;
          letter-spacing: normal !important;
        }


        p {
          text-align: left !important;
        }


        /* =====================================================
           COMMON SECTION SPACING
        ===================================================== */

        .smm-section {
          padding-top: 20px;
          padding-bottom: 20px;
        }


        /* =====================================================
           HERO CAROUSEL
        ===================================================== */

        .hero-social-carousel {
          animation: socialHeroCarousel 28s ease-in-out infinite alternate;
        }

        @keyframes socialHeroCarousel {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-42%);
          }

        }


        /* =====================================================
           HERO HEADING
        ===================================================== */

        .hero-main-heading {
          margin-top: 20px;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 50px !important;
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: -1.5px !important;
        }

        .hero-main-heading .hero-line {
          display: block;
          white-space: nowrap;
        }

        .hero-main-heading .hero-highlight {
          display: block;
          margin-top: 4px;
          color: #F8BC04;
          font-family: Georgia, "Times New Roman", serif !important;
          font-style: italic;
          font-weight: 400;
          font-size: 50px !important;
          letter-spacing: -1.5px !important;
          white-space: nowrap;
        }


        /* =====================================================
           TRUST CAROUSEL
        ===================================================== */

        .trust-carousel-track {
          animation: trustCarousel 35s linear infinite;
          align-items: center;
        }

        .trust-carousel-logo {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 125px;
          height: 125px;
          padding: 14px;
          overflow: hidden;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.10);
          background: #ffffff;
          box-sizing: border-box;
        }

        .trust-carousel-logo img {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          object-position: center !important;
        }

        @keyframes trustCarousel {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }

        }

        .trust-carousel-wrapper:hover .trust-carousel-track {
          animation-play-state: paused;
        }


        /* =====================================================
           ORGANIC PROCESS
        ===================================================== */

        .organic-process-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(248, 188, 4, 0.65) 8%,
            rgba(248, 188, 4, 0.65) 92%,
            transparent 100%
          );
        }

        .organic-step:hover .organic-step-number {
          background: #f8bc04;
          color: #000000;
          transform: scale(1.08);
          box-shadow: 0 0 0 8px rgba(248, 188, 4, 0.08);
        }

        .organic-step:hover .organic-step-title {
          color: #f8bc04;
        }


        /* =====================================================
           PLATFORM TABS
        ===================================================== */

        .platform-section {
          width: 100%;
          overflow: hidden;
        }

        .platform-section-inner {
          width: 100%;
          max-width: 1800px;
          margin: 0 auto;
        }

        .platform-top-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          column-gap: 70px;
          align-items: start;
        }

        .platform-heading {
          margin: 0;
          font-size: 30px !important;
          line-height: 0.94;
          font-weight: 700;
          letter-spacing: -1.5px !important;
        }

        .platform-heading-highlight {
          display: block;
          margin-top: 2px;
          color: #f8bc04;
          font-family: Georgia, "Times New Roman", serif !important;
          font-style: italic;
          font-weight: 400;
          font-size: 30px !important;
          letter-spacing: -1.5px !important;
        }

        .platform-intro {
          max-width: 670px;
          margin-left: 0;
          padding-left: 34px;
          border-left: 1px solid rgba(255,255,255,0.20);
          font-size: 20px !important;
          line-height: 1.48;
          color: rgba(255,255,255,0.68);
        }

        .platform-tabs-wrapper {
          width: 100%;
          margin-top: 36px;
        }

        .platform-tabs {
          display: flex;
          width: 100%;
          max-width: 825px;
          height: 54px;
        }

        .platform-tab {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex: 1;
          min-width: 0;
          height: 54px;
          padding: 0 24px;
          border: none;
          border-radius: 0;
          background: transparent;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 17px;
          line-height: 1;
          font-weight: 600;
          cursor: pointer;
          transition:
            background-color 0.25s ease,
            color 0.25s ease;
        }

        .platform-tab:hover {
          color: #f8bc04;
        }

        .platform-tab.active {
          background: #f8bc04;
          color: #000000;
        }

        .platform-tab.active:hover {
          color: #000000;
        }

        .platform-tabs-line {
          width: 100%;
          max-width: 825px;
          height: 2px;
          background: #f8bc04;
        }

        .platform-content-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(0, 1.08fr);
          column-gap: 70px;
          align-items: center;
          margin-top: 55px;
        }

        .platform-content-left {
          align-self: center;
          padding-bottom: 25px;
        }

        .platform-eyebrow {
          margin-bottom: 20px;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 2px !important;
          color: #f8bc04;
        }

        .platform-content-title {
          max-width: 760px;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 20px !important;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.4px !important;
          color: #ffffff;
        }

        .platform-content-description {
          max-width: 790px;
          margin-top: 20px;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 20px !important;
          line-height: 1.45;
          font-weight: 400;
          color: rgba(255,255,255,0.78);
        }

        .platform-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          max-width: 790px;
          margin-top: 29px;
        }

        .platform-stat {
          min-height: 56px;
          padding-right: 22px;
          padding-top: 11px;
          border-top: 1px solid rgba(255,255,255,0.20);
        }

        .platform-stat:not(:first-child) {
          margin-left: 20px;
        }

        .platform-stat-number {
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          color: #f8bc04;
        }

        .platform-stat-label {
          margin-top: 8px;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 12px;
          line-height: 1.2;
          font-weight: 600;
          color: #ffffff;
        }

        .platform-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 26px;
        }

        .platform-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-height: 42px;
          padding: 0 21px;
          border-radius: 999px;
          background: #f8bc04;
          color: #000000;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
          transition:
            background-color 0.25s ease,
            transform 0.25s ease;
        }

        .platform-primary-button:hover {
          background: #ffffff;
          transform: translateY(-2px);
        }

        .platform-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 21px;
          border: 1px solid rgba(255,255,255,0.20);
          border-radius: 999px;
          background: transparent;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 12px;
          line-height: 1;
          font-weight: 600;
          transition:
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .platform-secondary-button:hover {
          border-color: #f8bc04;
          color: #f8bc04;
        }

        .platform-image-column {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 480px;
          overflow: visible;
        }

        .platform-single-image {
          position: relative;
          width: min(100%, 720px);
          height: 560px;
          margin-left: auto;
          overflow: hidden;
        }

        .platform-single-image img {
          object-fit: contain !important;
          object-position: center center !important;
        }

        .platform-bottom-line {
          margin-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 16px;
        }


        /* =====================================================
           PAID SOCIAL + BRAND GROWTH
        ===================================================== */

        .growth-tab-section {
          width: 100%;
          overflow: hidden;
        }

        .growth-tab-inner {
          width: 100%;
          max-width: 1800px;
          margin: 0 auto;
        }

        .growth-tab-top {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          column-gap: 70px;
          align-items: start;
        }

        .growth-tab-heading {
          margin: 0;
          font-size: 30px !important;
          line-height: 0.94;
          font-weight: 700;
          letter-spacing: -1.5px !important;
        }

        .growth-tab-heading-highlight {
          display: block;
          margin-top: 2px;
          color: #f8bc04;
          font-family: Georgia, "Times New Roman", serif !important;
          font-style: italic;
          font-weight: 400;
          font-size: 30px !important;
          letter-spacing: -1.5px !important;
        }

        .growth-tab-intro {
          max-width: 670px;
          padding-left: 34px;
          border-left: 1px solid rgba(255,255,255,0.20);
          font-size: 20px !important;
          line-height: 1.48;
          color: rgba(255,255,255,0.68);
        }

        .growth-tabs-wrapper {
          width: 100%;
          margin-top: 36px;
        }

        .growth-tabs {
          display: flex;
          width: 100%;
          max-width: 825px;
          height: 54px;
        }

        .growth-tab-button {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex: 1;
          height: 54px;
          padding: 0 24px;
          border: none;
          border-radius: 0;
          background: transparent;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 17px;
          line-height: 1;
          font-weight: 600;
          cursor: pointer;
          transition:
            background-color 0.25s ease,
            color 0.25s ease;
        }

        .growth-tab-button:hover {
          color: #f8bc04;
        }

        .growth-tab-button.active {
          background: #f8bc04;
          color: #000000;
        }

        .growth-tab-button.active:hover {
          color: #000000;
        }

        .growth-tabs-line {
          width: 100%;
          max-width: 825px;
          height: 2px;
          background: #f8bc04;
        }

        .growth-content-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(0, 1.08fr);
          column-gap: 70px;
          align-items: center;
          margin-top: 55px;
        }

        .growth-content-left {
          align-self: center;
          padding-bottom: 25px;
        }

        .growth-eyebrow {
          margin-bottom: 20px;
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 2px !important;
          color: #f8bc04;
        }

        .growth-content-title {
          max-width: 760px;
          margin: 0;
          font-size: 20px !important;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.4px !important;
          color: #ffffff;
        }

        .growth-content-description {
          max-width: 790px;
          margin-top: 20px;
          font-size: 20px !important;
          line-height: 1.45;
          color: rgba(255,255,255,0.78);
        }

        .growth-points {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          max-width: 790px;
          margin-top: 28px;
          gap: 0 22px;
        }

        .growth-point {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 48px;
          border-top: 1px solid rgba(255,255,255,0.16);
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.78);
        }

        .growth-point-number {
          color: #f8bc04;
          font-size: 10px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .growth-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 26px;
        }

        .growth-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-height: 42px;
          padding: 0 21px;
          border-radius: 999px;
          background: #f8bc04;
          color: #000000;
          font-size: 12px;
          font-weight: 700;
          transition:
            background-color 0.25s ease,
            transform 0.25s ease;
        }

        .growth-primary-button:hover {
          background: #ffffff;
          transform: translateY(-2px);
        }

        .growth-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 21px;
          border: 1px solid rgba(255,255,255,0.20);
          border-radius: 999px;
          background: transparent;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          transition:
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .growth-secondary-button:hover {
          border-color: #f8bc04;
          color: #f8bc04;
        }

        .growth-image-column {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 480px;
        }

        .growth-single-image {
          position: relative;
          width: min(100%, 720px);
          height: 560px;
          margin-left: auto;
          overflow: hidden;
        }

        .growth-single-image img {
          object-fit: contain !important;
          object-position: center center !important;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .platform-top-grid,
          .growth-tab-top {
            grid-template-columns: 1fr;
            row-gap: 28px;
          }

          .platform-intro,
          .growth-tab-intro {
            max-width: 750px;
            padding-left: 24px;
          }

          .platform-content-grid,
          .growth-content-grid {
            grid-template-columns: 1fr 1fr;
            column-gap: 35px;
          }

          .platform-single-image,
          .growth-single-image {
            height: 460px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .smm-section {
            padding-top: 18px;
            padding-bottom: 18px;
          }

          h1 {
            font-size: 50px !important;
          }

          h2 {
            font-size: 30px !important;
          }

          h3,
          h4,
          h5,
          h6 {
            font-size: 20px !important;
          }

          p {
            font-size: 20px !important;
          }


          .hero-main-heading {
            font-size: 50px !important;
            line-height: 0.97;
            letter-spacing: -1px !important;
          }

          .hero-main-heading .hero-highlight {
            font-size: 50px !important;
            letter-spacing: -1px !important;
          }


          .platform-section-inner,
          .growth-tab-inner {
            padding-left: 20px;
            padding-right: 20px;
          }


          .platform-top-grid,
          .growth-tab-top {
            grid-template-columns: 1fr;
            gap: 24px;
          }


          .platform-heading,
          .growth-tab-heading {
            font-size: 30px !important;
            line-height: 0.94;
            letter-spacing: -1px !important;
          }


          .platform-heading-highlight,
          .growth-tab-heading-highlight {
            font-size: 30px !important;
            letter-spacing: -1px !important;
          }


          .platform-intro,
          .growth-tab-intro {
            padding-left: 18px;
            font-size: 20px !important;
            line-height: 1.45;
          }


          .platform-tabs-wrapper,
          .growth-tabs-wrapper {
            margin-top: 27px;
          }


          .platform-tabs,
          .growth-tabs {
            height: 52px;
            max-width: none;
          }


          .platform-tab,
          .growth-tab-button {
            height: 52px;
            justify-content: center;
            padding: 0 8px;
            font-size: 14px;
          }


          .platform-tabs-line,
          .growth-tabs-line {
            max-width: none;
          }


          .platform-content-grid,
          .growth-content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 38px;
          }


          .platform-content-left,
          .growth-content-left {
            padding-bottom: 0;
          }


          .platform-content-title,
          .growth-content-title {
            font-size: 20px !important;
            line-height: 1.1;
            letter-spacing: -0.2px !important;
          }


          .platform-content-description,
          .growth-content-description {
            margin-top: 17px;
            font-size: 20px !important;
            line-height: 1.48;
          }


          .platform-stats {
            margin-top: 24px;
          }


          .platform-stat {
            padding-right: 8px;
          }


          .platform-stat:not(:first-child) {
            margin-left: 10px;
          }


          .platform-stat-label {
            font-size: 10px;
          }


          .growth-points {
            grid-template-columns: 1fr;
            margin-top: 23px;
          }


          .growth-point {
            min-height: 44px;
          }


          .platform-buttons,
          .growth-buttons {
            flex-direction: column;
            align-items: stretch;
            margin-top: 23px;
          }


          .platform-primary-button,
          .platform-secondary-button,
          .growth-primary-button,
          .growth-secondary-button {
            width: 100%;
          }


          .platform-image-column,
          .growth-image-column {
            min-height: 370px;
            margin-top: 8px;
          }


          .platform-single-image,
          .growth-single-image {
            width: 100%;
            height: 390px;
            margin: 0 auto;
          }


          .platform-bottom-line {
            margin-top: 0;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .hero-social-carousel,
          .trust-carousel-track {
            animation: none;
          }

        }

      `}</style>


      {/* =========================================================
          1. BREADCRUMB
      ========================================================= */}

      <section className="relative bg-black px-4 py-5">

        <nav
          className="mx-auto flex max-w-[1550px] items-center justify-center gap-4 text-sm text-white"
          aria-label="Breadcrumb"
        >

          <Link
            href="/"
            className="text-white transition-colors hover:text-[#F8BC04]"
          >
            Home
          </Link>

          <span className="text-lg text-[#e5a400]">
            →
          </span>

          <span className="font-bold text-white">
            Social Media Marketing
          </span>

        </nav>

      </section>


      {/* =========================================================
          2. HERO
      ========================================================= */}

      <section className="smm-section relative overflow-hidden bg-black">

        <div className="mx-auto grid max-w-[1550px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">

          <div className="relative z-20 lg:col-span-5">

            <h1 className="hero-main-heading">

              <span className="hero-line text-white">
                Turn Social Media
              </span>

              <span className="hero-highlight">
                Into Business Growth
              </span>

            </h1>


            <p className="mt-6 max-w-[650px] leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
              Social media should do more than fill your feed. Big Beans
              Digital helps businesses build an active audience, create
              recognisable content and use social platforms to support
              visibility, engagement, leads and sales.
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/connect"
                className="inline-flex items-center justify-between gap-6 rounded-full bg-[#F8BC04] px-7 py-3.5 text-sm font-extrabold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
              >

                <span>
                  Get Your Social Media Strategy
                </span>

                <ArrowRight className="h-4 w-4" />

              </Link>


              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#F8BC04] hover:text-[#F8BC04]"
              >

                Explore Our Services

              </Link>

            </div>


            <div className="mt-8 grid max-w-[600px] grid-cols-3 gap-3">

              <div className="border-l border-[#F8BC04] pl-3">

                <div className="text-lg font-bold text-white">
                  Strategy
                </div>

                <div className="mt-1 text-xs text-white/50">
                  Audience-led
                </div>

              </div>


              <div className="border-l border-[#F8BC04] pl-3">

                <div className="text-lg font-bold text-white">
                  Content
                </div>

                <div className="mt-1 text-xs text-white/50">
                  Platform-ready
                </div>

              </div>


              <div className="border-l border-[#F8BC04] pl-3">

                <div className="text-lg font-bold text-white">
                  Performance
                </div>

                <div className="mt-1 text-xs text-white/50">
                  Measurable
                </div>

              </div>

            </div>

          </div>


          <div className="relative h-[500px] overflow-hidden lg:col-span-7">

            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-black/50" />

            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />


            <div className="hero-social-carousel absolute left-0 top-1/2 flex w-max -translate-y-1/2 gap-5">

              {[
                "1",
                "2",
                "3",
                "4",
                "5",
                "1",
                "2",
                "3",
                "4",
                "5",
              ].map((number, index) => (

                <div
                  key={`${number}-${index}`}
                  className="relative h-[300px] w-[240px] shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-[#101010] shadow-2xl"
                >

                  <Image
                    src={`/assets/socialmediamarketing/hero/${number}.webp`}
                    alt={`Social media marketing creative ${number}`}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />


                  

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          3. ABOUT US
      ========================================================= */}

      <section className="smm-section relative bg-black">

        <div className="mx-auto max-w-[1535px] px-5 sm:px-9">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">

            <div className="lg:col-span-4">

              

              <h2 className="mt-5 font-bold leading-[0.95]">

                Your Social
                <br />

                <span className="highlight-font text-[#F8BC04]">
                  Growth Partner
                </span>

              </h2>

            </div>


            <div className="border-l border-white/20 pl-6 lg:col-span-8 lg:pl-12">

              <p className="leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                Big Beans Digital is a digital marketing agency helping
                startups, local businesses and growing brands build stronger
                digital identities. Our social media marketing work combines
                strategy, creative content, audience development and paid
                campaigns around clear business objectives.
              </p>

              <p className="mt-5 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                We look at what your audience wants to see, what your
                competitors are doing, where your brand can stand apart and
                which actions matter commercially. Social media then becomes
                part of a wider digital system that can connect with{" "}
                <Link
                  href="/branding"
                  className="font-bold text-[#F8BC04] hover:text-white"
                >
                  branding
                </Link>
                ,{" "}
                <Link
                  href="/seo"
                  className="font-bold text-[#F8BC04] hover:text-white"
                >
                  SEO
                </Link>{" "}
                and{" "}
                <Link
                  href="/website-development"
                  className="font-bold text-[#F8BC04] hover:text-white"
                >
                  website development
                </Link>
                .
              </p>


              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

                  <div className="text-3xl font-bold text-[#F8BC04]">
                    01
                  </div>

                  <div className="mt-2 font-bold text-white">
                    Understand
                  </div>

                  <p className="mt-2 text-sm sm:text-base md:text-lg font-normal text-white/70">
                    Business, audience and market.
                  </p>

                </div>


                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

                  <div className="text-3xl font-bold text-[#F8BC04]">
                    02
                  </div>

                  <div className="mt-2 font-bold text-white">
                    Create
                  </div>

                  <p className="mt-2 text-sm sm:text-base md:text-lg font-normal text-white/70">
                    Content built for each platform.
                  </p>

                </div>


                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

                  <div className="text-3xl font-bold text-[#F8BC04]">
                    03
                  </div>

                  <div className="mt-2 font-bold text-white">
                    Improve
                  </div>

                  <p className="mt-2 text-sm sm:text-base md:text-lg font-normal text-white/70">
                    Use data to refine performance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          4. USPs
      ========================================================= */}

      <section className="smm-section relative bg-black">

        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">

          <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-4">

              

              <h2 className="mt-4 font-bold leading-[0.95]">

                Social Media
                <br />

                <span className="highlight-font text-[#F8BC04]">
                  Built Around You
                </span>

              </h2>

            </div>


            <div className="border-l border-white/20 pl-6 lg:col-span-8 lg:pl-12">

              <p className="leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                Every business has a different audience, sales cycle,
                competitive environment and communication style. Our approach
                starts there. We build a social media system that fits the
                business instead of forcing the business into a fixed content
                template.
              </p>

            </div>

          </div>


          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">

            {uspCards.map((card) => (
              <SocialServiceCard
                key={card.number}
                card={card}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          5. TRUST / CREDIBILITY
      ========================================================= */}

      <section className="smm-section relative bg-black">

        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#090909]">

            <div className="grid grid-cols-1 lg:grid-cols-12">

              <div className="relative min-h-[430px] lg:col-span-5">

                <Image
                  src="/assets/socialmediamarketing/trust-1.webp"
                  alt="Big Beans Digital Best Digital Marketing Agency"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#090909]" />

              </div>


              <div className="flex flex-col justify-center p-7 sm:p-12 lg:col-span-7">

                

                <h2 className="mt-5 font-bold leading-tight">

                  Why Brands Prefer
                  <br />

                  <span className="highlight-font text-[#F8BC04]">
                    Working With Us
                  </span>

                </h2>

                <p className="mt-5 max-w-[800px] leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                  Social media requires consistency, clear communication and
                  an understanding of what the audience is responding to. We
                  bring strategy and creative execution together so brands can
                  manage their presence without treating every post as an
                  isolated activity.
                </p>

                <p className="mt-5 max-w-[800px] leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                  Our work is built around understanding the brand first,
                  creating relevant content and using performance data to
                  improve the next decision. This allows social media to work
                  alongside wider digital activities such as{" "}
                  <Link
                    href="/branding"
                    className="font-bold text-[#F8BC04] hover:text-white"
                  >
                    branding
                  </Link>
                  ,{" "}
                  <Link
                    href="/seo"
                    className="font-bold text-[#F8BC04] hover:text-white"
                  >
                    SEO
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/performance-marketing"
                    className="font-bold text-[#F8BC04] hover:text-white"
                  >
                    performance marketing
                  </Link>
                  .
                </p>


                <div className="trust-carousel-wrapper relative mt-8 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">

                  <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#090909] to-transparent" />

                  <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#090909] to-transparent" />


                  <div className="trust-carousel-track flex w-max gap-3 p-3">

                    {trustCarouselImages.map((image, index) => (

                      <div
                        key={`trust-${index}`}
                        className="trust-carousel-logo"
                      >

                        <Image
                          src={image}
                          alt={`Big Beans Digital client logo ${index + 1}`}
                          fill
                          sizes="125px"
                          className="object-contain"
                        />

                      </div>

                    ))}


                    {trustCarouselImages.map((image, index) => (

                      <div
                        key={`trust-duplicate-${index}`}
                        className="trust-carousel-logo"
                      >

                        <Image
                          src={image}
                          alt={`Big Beans Digital client logo ${index + 1}`}
                          fill
                          sizes="125px"
                          className="object-contain"
                        />

                      </div>

                    ))}

                  </div>

                </div>


                <div className="mt-6 flex flex-wrap gap-3">

                  <Link
                    href="/connect"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F8BC04] px-6 py-3 font-bold text-black transition-all hover:bg-white"
                  >

                    Talk About Your Brand

                    <ArrowRight className="h-4 w-4" />

                  </Link>


                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:border-[#F8BC04] hover:text-[#F8BC04]"
                  >

                    View Services

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          6. BRAND POSITIONING
      ========================================================= */}

      <section className="smm-section relative bg-black">

        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-6">

              

              <h2 className="mt-5 font-bold leading-[0.95]">

                Social Media Should
                <br />

                <span className="highlight-font text-[#F8BC04]">
                  Move Your Business
                </span>

              </h2>

              <p className="mt-6 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                A large follower count does not automatically create a strong
                business. We look at social media as one part of your customer
                journey. Content should attract attention, explain value,
                create familiarity and give people a reason to take the next
                step.
              </p>

              <p className="mt-5 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                That next step could be a website visit, enquiry, booking,
                product purchase, message or repeat interaction. The strategy
                changes according to the business.
              </p>

              <div className="mt-7">

                <Link
                  href="/performance-marketing"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F8BC04] px-7 py-3.5 font-bold text-black transition-all hover:bg-white"
                >

                  Explore Performance Marketing

                  <ArrowRight className="h-4 w-4" />

                </Link>

              </div>

            </div>


            <div className="relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/10 lg:col-span-6">

              <Image
                src="/assets/socialmediamarketing/value-proposition-1.webp"
                alt="Social media business growth strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />


            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          7. ORGANIC SOCIAL MEDIA
      ========================================================= */}

      <section className="smm-section relative overflow-hidden bg-black">

        <div className="mx-auto max-w-[1550px] px-5 sm:px-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-5">

              <span className="text-xs font-black tracking-[0.25em] text-[#F8BC04]">
                [ ORGANIC SOCIAL MEDIA ]
              </span>

              <h2 className="mt-5 font-bold leading-[0.92]">

                Build an Audience
                <br />

                <span className="highlight-font text-[#F8BC04]">
                  That Stays
                </span>

              </h2>

            </div>


            <div className="lg:col-span-7">

              <p className="max-w-[780px] leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                Organic social media is a continuous process. We start by
                understanding the audience, build the right content direction,
                publish consistently and then use audience response to decide
                what should happen next.
              </p>

              <p className="mt-5 max-w-[780px] leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                Instead of treating a monthly content calendar as a fixed
                checklist, we keep improving the content based on what people
                actually watch, read, share, save and respond to.
              </p>

            </div>

          </div>


          <div className="relative mt-16">

            <div className="organic-process-line absolute left-[8%] right-[8%] top-[29px] hidden h-px lg:block" />

            <div className="organic-process-line absolute bottom-[45px] left-[25px] top-[45px] w-px lg:hidden" />


            <div className="grid grid-cols-1 gap-0 lg:grid-cols-6">

              {organicSteps.map((step) => (

                <div
                  key={step.number}
                  className="organic-step group relative flex gap-5 pb-10 lg:flex-col lg:items-center lg:pb-0 lg:px-4"
                >

                  <div className="relative z-10 shrink-0">

                    <div className="organic-step-number flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#F8BC04]/50 bg-black text-sm font-black text-[#F8BC04] transition-all duration-300">
                      {step.number}
                    </div>

                  </div>


                  <div className="pt-1 lg:pt-7 lg:text-center">

                    <h3 className="organic-step-title font-bold text-white transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                      {step.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          8. SOCIAL MEDIA PLATFORMS
      ========================================================= */}

      <section className="platform-section smm-section relative bg-black">

        <div className="platform-section-inner px-5 sm:px-8 lg:px-[55px]">

          <div className="platform-top-grid">

            <div>

              <h2 className="platform-heading mt-5">

                One Strategy.

                <span className="platform-heading-highlight">
                  Different Platforms.
                </span>

              </h2>

            </div>


            <div className="platform-intro">

              Facebook, Instagram and LinkedIn have different audiences,
              content formats and user behaviour. We adapt the content and
              campaign approach to the platform instead of simply copying the
              same post everywhere.

            </div>

          </div>


          <div className="platform-tabs-wrapper">

            <div
              className="platform-tabs"
              role="tablist"
              aria-label="Social media platforms"
            >

              {platformContent.map((platform) => {

                const isActive =
                  activePlatform === platform.id;

                return (

                  <button
                    key={platform.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() =>
                      setActivePlatform(platform.id)
                    }
                    className={`platform-tab ${
                      isActive ? "active" : ""
                    }`}
                  >

                    {platform.label}

                  </button>

                );

              })}

            </div>


            <div className="platform-tabs-line" />

          </div>


          <AnimatePresence mode="wait">

            <motion.div
              key={activePlatformData.id}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              className="platform-content-grid"
            >

              <div className="platform-content-left">

                <div className="platform-eyebrow">
                  {activePlatformData.eyebrow}
                </div>


                <h3 className="platform-content-title">
                  {activePlatformData.title}
                </h3>


                <p className="platform-content-description text-sm sm:text-base md:text-lg font-normal text-white/70">
                  {activePlatformData.description}
                </p>


                <div className="platform-stats">

                  {activePlatformData.stats.map((stat) => (

                    <div
                      key={stat.value}
                      className="platform-stat"
                    >

                      <div className="platform-stat-number">
                        {stat.value}
                      </div>

                      <div className="platform-stat-label">
                        {stat.label}
                      </div>

                    </div>

                  ))}

                </div>


                <div className="platform-buttons">

                  <Link
                    href={activePlatformData.href}
                    className="platform-primary-button"
                  >

                    {activePlatformData.cta}

                    <ArrowRight className="h-3.5 w-3.5" />

                  </Link>


                  <Link
                    href="/connect"
                    className="platform-secondary-button"
                  >

                    Talk About Your Brand

                  </Link>

                </div>

              </div>


              <div className="platform-image-column">

                <div className="platform-single-image">

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={activePlatformData.image}
                      initial={{
                        opacity: 0,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0"
                    >

                      <Image
                        src={activePlatformData.image}
                        alt={activePlatformData.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 720px"
                        className="object-contain object-center"
                      />

                    </motion.div>

                  </AnimatePresence>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>


      {/* =========================================================
          9. PAID SOCIAL & BRAND GROWTH
          DIRECTLY AFTER SOCIAL MEDIA PLATFORMS
      ========================================================= */}

      <section className="growth-tab-section smm-section relative bg-black">

        <div className="growth-tab-inner px-5 sm:px-8 lg:px-[55px]">

          <div className="growth-tab-top">

            <div>


              <h2 className="growth-tab-heading mt-5">

                Reach More.

                <span className="growth-tab-heading-highlight">
                  Grow Your Brand.
                </span>

              </h2>

            </div>


            <div className="growth-tab-intro">

              Social advertising and brand awareness campaigns serve different
              purposes. We use targeted campaigns to reach specific audiences,
              generate action and improve visibility while keeping the wider
              business objective at the centre of the strategy.

            </div>

          </div>


          <div className="growth-tabs-wrapper">

            <div
              className="growth-tabs"
              role="tablist"
              aria-label="Paid social and brand awareness"
            >

              {growthTabs.map((tab) => {

                const isActive =
                  activeGrowthTab === tab.id;

                return (

                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() =>
                      setActiveGrowthTab(tab.id)
                    }
                    className={`growth-tab-button ${
                      isActive ? "active" : ""
                    }`}
                  >

                    {tab.label}

                  </button>

                );

              })}

            </div>


            <div className="growth-tabs-line" />

          </div>


          <AnimatePresence mode="wait">

            <motion.div
              key={activeGrowthData.id}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              className="growth-content-grid"
            >

              <div className="growth-content-left">

                <div className="growth-eyebrow">
                  {activeGrowthData.eyebrow}
                </div>


                <h3 className="growth-content-title">
                  {activeGrowthData.title}
                </h3>


                <p className="growth-content-description text-sm sm:text-base md:text-lg font-normal text-white/70">
                  {activeGrowthData.description}
                </p>


                <div className="growth-points">

                  {activeGrowthData.points.map((point, index) => (

                    <div
                      key={point}
                      className="growth-point"
                    >

                      <span className="growth-point-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>
                        {point}
                      </span>

                    </div>

                  ))}

                </div>


                <div className="growth-buttons">

                  <Link
                    href={activeGrowthData.href}
                    className="growth-primary-button"
                  >

                    {activeGrowthData.cta}

                    <ArrowRight className="h-3.5 w-3.5" />

                  </Link>


                  <Link
                    href="/connect"
                    className="growth-secondary-button"
                  >

                    Talk About Your Brand

                  </Link>

                </div>

              </div>


              <div className="growth-image-column">

                <div className="growth-single-image">

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={activeGrowthData.image}
                      initial={{
                        opacity: 0,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0"
                    >

                      <Image
                        src={activeGrowthData.image}
                        alt={activeGrowthData.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 720px"
                        className="object-contain object-center"
                      />

                    </motion.div>

                  </AnimatePresence>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>


      {/* =========================================================
          10. OUR RECENT WORK
      ========================================================= */}

      <section className="relative z-10 py-5 text=center">

        <div className="relative">

          <OurWork />

        </div>

      </section>

{/* =========================================================================
    INDUSTRIES WE WORKED WITH SECTION
    ========================================================================= */}
<section className="relative z-10 py-5 sm:py-20">
  <div className="mx-auto max-w-[1550px] px-4 sm:px-8 lg:px-12">
    <div className="grid grid-cols-1 items-start gap-8 lg:gap-10 xl:grid-cols-12">

      {/* =========================
          LEFT COLUMN — INDUSTRIES
      ========================== */}
      <div className="flex flex-col justify-start xl:sticky xl:top-28 xl:col-span-3">
        <h2 className="mt-4 text-2xl font-bold leading-[1.05] sm:mt-5 sm:text-4xl md:text-5xl">
          <span className="block text-white">Industries</span>
          <span className="highlight-font block text-[#F8BC04]">We</span>
          <span className="highlight-font block text-[#F8BC04]">worked</span>
          <span className="highlight-font block text-[#F8BC04]">with</span>
        </h2>

        <div className="mb-4 mt-4 h-1 w-14 rounded-full bg-[#F8BC04] sm:mb-5 sm:mt-6" />

        <p className="!text-[18px] leading-snug text-sm sm:text-base md:text-lg font-normal text-white/70">
          Different industries.
          <br />
          Real impact.
        </p>
      </div>

      {/* =========================
          RIGHT COLUMN — INDUSTRY CARDS
      ========================== */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:col-span-9">
        {industries.map((ind) => (
          <div
            key={ind.id}
            className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] p-5 shadow-xl transition-all duration-300 hover:border-[#F8BC04]/50 sm:min-h-[340px] sm:rounded-3xl sm:p-6"
          >
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center brightness-75 transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30" />
            </div>

            {/* Card Top Spacer */}
            <div className="relative z-10" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-end pt-24 sm:pt-28">
              <h3 className="text-base font-extrabold leading-snug text-white transition-colors group-hover:text-[#F8BC04] sm:text-lg">
                {ind.title}
              </h3>

              <p className="mt-2 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
                {ind.description}
              </p>

              {/* Know More Button */}
              <div className="mt-4 flex justify-end sm:mt-5">
                <Link
                  href={ind.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F8BC04] px-4 py-2 text-xs font-extrabold tracking-tight text-black shadow-[0_0_15px_rgba(248,188,4,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(248,188,4,0.5)] active:scale-95 sm:px-5 sm:text-sm"
                >
                  <span>Know More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* ==================================================
      CASE STUDIES SECTION
  =================================================== */}
  <div className="mx-auto max-w-[1600px] py-10">

    {/* Section Heading */}
    <div className="mx-auto mb-12 max-w-[1600px] px-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Case Studies
      </h2>

      <p className="mt-4 text-center leading-6 text-sm sm:text-base md:text-lg font-normal text-white/70">
        Explore how our digital marketing agency engineers data-driven
        strategies that scale early-stage startups and established businesses.
        From lowering customer acquisition costs to multiplying qualified
        leads, see how our performance marketing agency delivers measurable
        return on investment through real-world client success stories.
      </p>
    </div>

    {/* =========================
        FEATURE CASE STUDY CARDS
    ========================== */}
    <div className="grid grid-cols-1 gap-5 px-4 md:grid-cols-3">

      {/* =========================
          CASE STUDY 1 — ADORING INDIA
      ========================== */}
      <div className="overflow-hidden rounded-[4px] bg-[#101010]">

        {/* Image */}
        <div className="aspect-[1.62/1] w-full bg-[#c5cdd4]">
          <img
            src="/casestudies/BigBeans Case Study 1.webp"
            alt="BigBeans Case Study 1"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-7 py-6 text-center sm:px-8">
          <h3 className="text-2xl font-semibold text-white">
            Adoring India
          </h3>

          <p className="mt-5 leading-6 text-sm sm:text-base md:text-lg font-normal text-white/70">
            We partnered with Adoring India, an NGO dedicated to supporting
            school students, to build digital visibility and expand their
            community impact. By leveraging data-driven storytelling and
            targeted outreach campaigns, our digital marketing agency helped
            increase volunteer engagement, boost corporate sponsorship
            inquiries, and scale their educational awareness initiatives
            across major digital platforms.
          </p>

          <a
            href="https://www.bigbeansdigital.com"
            className="mt-6 inline-flex min-w-[120px] items-center justify-center rounded-[3px] bg-[#F8BC04] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Know More
          </a>
        </div>
      </div>

      {/* =========================
          CASE STUDY 2 — GUPSHUP BHARAT
      ========================== */}
      <div className="overflow-hidden rounded-[4px] bg-[#101010]">

        {/* Image */}
        <div className="aspect-[1.62/1] w-full bg-[#c5cdd4]">
          <img
            src="/casestudies/BigBeans Case Study 2.webp"
            alt="BigBeans Case Study 2"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-7 py-6 text-center sm:px-8">
          <h3 className="text-2xl font-semibold text-white">
            Gupshup Bharat
          </h3>

          <p className="mt-5 leading-6 text-sm sm:text-base md:text-lg font-normal text-white/70">
            To establish Gupshup India as the premier news agency in Tripura,
            we designed an agile content and distribution strategy focused on
            instant reader retention and search visibility. Functioning as
            their growth partner, our social media marketing agency optimized
            news distribution pipelines, expanding their daily reader reach
            and boosting cross-platform audience engagement across regional
            markets.
          </p>

          <a
            href="https://www.bigbeansdigital.com"
            className="mt-6 inline-flex min-w-[120px] items-center justify-center rounded-[3px] bg-[#F8BC04] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Know More
          </a>
        </div>
      </div>

      {/* =========================
          CASE STUDY 3 — ENTIMESSI
      ========================== */}
      <div className="overflow-hidden rounded-[4px] bg-[#101010]">

        {/* Image */}
        <div className="aspect-[1.62/1] w-full bg-[#c5cdd4]">
          <img
            src="/casestudies/BigBeans Case Study 3.webp"
            alt="BigBeans Case Study 3"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-7 py-6 text-center sm:px-8">
          <h3 className="text-2xl font-semibold text-white">
            Entimessi
          </h3>

          <p className="mt-5 leading-6 text-sm sm:text-base md:text-lg font-normal text-white/70">
            For Entimessi, a premium female lingerie brand, we built an
            end-to-end sales engine focused on customer acquisition and brand
            authority. By uniting high-converting visual ad creatives with
            precise audience targeting, our performance marketing agency
            lowered customer acquisition costs (CAC) and maximized return on
            ad spend (ROAS) while scaling direct website sales.
          </p>

          <a
            href="https://www.bigbeansdigital.com"
            className="mt-6 inline-flex min-w-[120px] items-center justify-center rounded-[3px] bg-[#F8BC04] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Know More
          </a>
        </div>
      </div>

    </div>
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
          Stay Ahead with{" "}
          <span className="font-serif italic font-normal text-[#F8BC04]">
            Our Insights
          </span>
        </h2>

        <p className="mt-2.5 sm:mt-3 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
          Actionable playbooks covering high-converting organic reach, branding turnarounds, and performance marketing shifts.
        </p>

      </div>

      <Link
        href="/blog"
        className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-5 py-3 rounded-full hover:border-[#F8BC04] hover:text-[#F8BC04] transition-colors self-start md:self-auto"
      >
        Browse All Articles
        <ArrowRight className="w-3.5 h-3.5" />
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

              <p className="mt-2 line-clamp-3 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
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
    GLOBAL PRESENCE SECTION
    ========================================================================= */}
<section className="relative z-10 py-5">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

    <div className="rounded-2xl sm:rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-14 overflow-hidden relative">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <div className="lg:col-span-6">

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Empowering Brands Across{" "}
            <span className="font-serif italic font-normal text-[#F8BC04]">
              12+ Global Hubs
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
            Headquartered in India with strategic partner nodes across London, North America, Singapore, and Australia. We engineer hyper-localized growth campaigns tailored to diverse consumer behaviors.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-5 sm:pt-6">

            <div>

              <h4 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F8BC04]" />
                India Operations
              </h4>

              <ul className="space-y-1 sm:space-y-1.5 text-xs text-white/60">
                <li>Kolkata</li>
                <li>Delhi NCR &amp; Noida</li>
                <li>Bangalore</li>
                <li>Mumbai &amp; Pune</li>
                <li>Tripura</li>
              </ul>

            </div>

            <div>

              <h4 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F8BC04]" />
                International Operations
              </h4>

              <ul className="space-y-1 sm:space-y-1.5 text-xs text-white/60">
                <li>London, United Kingdom</li>
                <li>Singapore</li>
                <li>Toronto &amp; Vancouver, Canada</li>
                <li>Sydney &amp; Melbourne, Australia</li>
                <li>Lagos, Nigeria</li>
              </ul>

            </div>

          </div>
        </div>

        <div className="lg:col-span-6 relative flex items-center justify-center mt-2 lg:mt-0">

          <div className="relative w-full aspect-[16/10] max-w-[620px]">

            <Image
              src="/maps/world-map.png"
              alt="BigBeans Global Footprint Map"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-contain opacity-70"
            />

            {/* Map Node Dots */}
            {[
              { top: "42%", left: "67%" }, // India
              { top: "27%", left: "44%" }, // UK
              { top: "28%", left: "18%" }, // North America
              { top: "54%", left: "74%" }, // Singapore
              { top: "65%", left: "84%" }, // Australia
            ].map((pos, idx) => (

              <div
                key={idx}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: pos.top, left: pos.left }}
              >

                <span className="relative flex h-2.5 w-2.5 sm:h-3.5 sm:w-3.5">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8BC04] opacity-75" />

                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 bg-[#F8BC04] shadow-[0_0_12px_#F8BC04]" />

                </span>

              </div>

            ))}

          </div>
        </div>

      </div>
    </div>
  </div>
</section>


{/* =========================================================================
    FAQ SECTION
    ========================================================================= */}
<section className="relative z-10 py-5">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">

    <div className="text-center mb-8">

      <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mt-2">
        Frequently Asked{" "}
        <span className="font-serif italic font-normal text-[#F8BC04]">
          Questions
        </span>
      </h2>

    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">

      {/* LEFT COLUMN */}
      <div className="space-y-3 sm:space-y-4">

        {[
          {
            q: "What social media marketing services do you offer?",
            a: "Big Beans Digital provides full-lifecycle social media solutions for startups and enterprises across India, the US, and the UK. Our scope includes visual feed architecture, algorithm-specific short-form Reels & TikTok production, organic growth strategy, community management, and synchronized paid social campaigns.",
          },
          {
            q: "How do I find the best social media marketing agency near me?",
            a: "Beyond physical proximity, evaluate verified case studies, aesthetic consistency, conversion tracking transparency, and strategic depth. Big Beans Digital operates a distributed agile team delivering high-touch collaboration regardless of whether you are based in London, Kolkata, Delhi, or New York.",
          },
          {
            q: "Why choose Big Beans Digital over traditional agencies?",
            a: "Traditional agencies separate creative thinking from performance metrics. We merge branding, web engineering, and performance marketing into a single unit so every dollar spent directly advances brand equity and customer acquisition.",
          },
          {
            q: "Do you engineer conversion-focused websites for startups?",
            a: "Yes. We build responsive, fast headless websites using modern frameworks (Next.js, Tailwind CSS) optimized for sub-second load times, technical SEO compliance, and conversion funnels designed to turn traffic into pipeline.",
          },
          {
            q: "How does performance marketing work with your team?",
            a: "We deploy rigorous quantitative testing across Google Ads, Meta Ads, and PPC remarketing funnels. We focus on true business levers—CAC, ROAS, and customer lifetime value—rather than vanity impressions.",
          },
          {
            q: "What does an engagement cost?",
            a: "We offer tailored milestone or retainer engagements based on growth objectives, required content cadence, and ad spend scale. Schedule a consultation call to receive an honest, transparent roadmap.",
          },
        ].map((faq, idx) => {

          const isOpen = openFaq === idx;

          return (
            <div
              key={idx}
              className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/20"
            >

              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full min-h-[84px] flex items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left"
              >

                <span className="flex-1 whitespace-nowrap text-sm sm:text-base md:text-lg font-bold text-white">
                  {faq.q}
                </span>

                <span
                  className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs sm:text-sm font-bold transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#F8BC04] text-black rotate-45"
                      : "bg-white/5 text-white/80"
                  }`}
                >
                  +
                </span>

              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >

                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-white/70 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-3 sm:space-y-4">

        {[
          {
            q: "What industries do you work with?",
            a: "We work with businesses across sectors including real estate, healthcare, restaurants, ecommerce, education, professional services, home improvement, gyms, FMCG, and other growth-focused businesses.",
          },
          {
            q: "Can you manage both organic social media and paid advertising?",
            a: "Yes. Our team can manage organic social media strategy and content alongside paid campaigns on platforms such as Meta and Google. This allows creative, audience targeting, messaging, and performance data to work together.",
          },
          {
            q: "How long does it take to see results from social media marketing?",
            a: "The timeline depends on your industry, starting position, content quality, audience, and objectives. Organic growth generally requires consistent execution over time, while paid campaigns can generate measurable traffic and leads much sooner.",
          },
          {
            q: "Do you provide content creation and graphic design?",
            a: "Yes. Our social media services can include creative direction, graphic design, short-form video concepts, social media creatives, campaign content, and platform-specific content planning.",
          },
          {
            q: "Do you provide SEO and website optimization?",
            a: "Yes. We can integrate technical SEO, on-page optimization, content strategy, conversion-focused landing pages, and website improvements into a broader digital marketing strategy.",
          },
          {
            q: "How can I get started with Big Beans Digital?",
            a: "Start by sharing your business, current challenges, goals, target audience, and the services you are looking for. We can then discuss the right approach, scope, milestones, and next steps for your project.",
          },
        ].map((faq, idx) => {

          const faqIndex = idx + 6;
          const isOpen = openFaq === faqIndex;

          return (
            <div
              key={faqIndex}
              className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/20"
            >

              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : faqIndex)}
                className="w-full min-h-[84px] flex items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left"
              >

                <span className="flex-1 whitespace-nowrap text-sm sm:text-base md:text-lg font-bold text-white">
                  {faq.q}
                </span>

                <span
                  className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs sm:text-sm font-bold transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#F8BC04] text-black rotate-45"
                      : "bg-white/5 text-white/80"
                  }`}
                >
                  +
                </span>

              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >

                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-white/70 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}

      </div>
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

    <p className="mt-4 sm:mt-6 max-w-xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg font-normal text-white/70">
      Ready to turn fragmented tactics into a predictable growth engine? Book your free strategy session with our digital marketing agency now.
    </p>

    {/* CTA BUTTONS */}
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
        Quick WhatsApp Chat

        <ExternalLink className="w-4 h-4 text-white/60" />
      </Link>

    </div>

    {/* ==================================================
        SERVICE LINKS BELOW CTA BUTTONS
    =================================================== */}
    <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-white/40">

      <Link
        href="/branding"
        className="transition-colors hover:text-[#F8BC04]"
      >
        Branding
      </Link>

      <span>
        •
      </span>

      <Link
        href="/seo"
        className="transition-colors hover:text-[#F8BC04]"
      >
        SEO
      </Link>

      <span>
        •
      </span>

      <Link
        href="/website-development"
        className="transition-colors hover:text-[#F8BC04]"
      >
        Website Development
      </Link>

      <span>
        •
      </span>

      <Link
        href="/performance-marketing"
        className="transition-colors hover:text-[#F8BC04]"
      >
        Performance Marketing
      </Link>

    </div>

  </div>
</section>
      


          

       

     

    </main>
  );
}