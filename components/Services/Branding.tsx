// app/page.tsx

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

interface BrandingCard {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface MapPosition {
  top: string;
  left: string;
}

const blogCards: BlogCard[] = [
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
    title:
      "Why Is My Competitor Getting More Leads? | Digital Marketing India",
    description:
      "Your competitor opened later but takes the majority of local leads. Discover how local SEO, reviews, and omnichannel remarketing bridge the gap.",
    link: "/blog/why-is-my-competitor-getting-more-leads",
    readTime: "6 min read",
  },
];

const brandingCards: BrandingCard[] = [
  {
    title: "Corporate Branding:",
    image: "/assets/branding/types/corporate-branding.webp",
    alt: "Corporate Branding",
    description:
      "Establishes the overarching reputation, values, and vision of an entire organization so stakeholders trust you.",
  },
  {
    title: "Product Branding:",
    image: "/assets/branding/types/product-branding.webp",
    alt: "Product Branding",
    description:
      "Gives a specific physical item its own identity, packaging, and emotional hook so buyers choose you.",
  },
  {
    title: "Service Branding:",
    image: "/assets/branding/types/service-branding.webp",
    alt: "Service Branding",
    description:
      "Shapes the client experience and customer interactions so users rely on you.",
  },
  {
    title: "Personal Branding",
    image: "/assets/branding/types/personal-branding.webp",
    alt: "Personal Branding",
    description:
      "Positions an individual's expertise, character, and voice so an audience believes in you.",
  },
  {
    title: "Online Branding",
    image: "/assets/branding/types/online-branding.webp",
    alt: "Online Branding",
    description:
      "Creates a cohesive digital footprint across web, social, and search so internet audiences connect with you.",
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

const mapPositions: MapPosition[] = [
  { top: "42%", left: "67%" },
  { top: "27%", left: "44%" },
  { top: "28%", left: "18%" },
  { top: "54%", left: "74%" },
  { top: "65%", left: "84%" },
];

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
        <span className="flex-1 whitespace-nowrap text-sm font-bold text-white sm:text-base md:text-lg">
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
            <div className="border-t border-white/5 px-5 pb-5 pt-1 text-xs leading-relaxed text-white/70 sm:px-6 sm:pb-6 sm:text-base">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white [&_*]:box-border">
      <style>{`
        h1,
        h2,
        h3,
        p {
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing: normal !important;
        }

        h1 .highlight-font,
        h2 .highlight-font {
          font-family: Georgia, "Times New Roman", serif !important;
          font-style: italic;
          font-weight: 400;
          letter-spacing: normal !important;
        }

        p {
          text-align: justify !important;
          text-align-last: left !important;
          word-spacing: normal;
        }
      `}</style>

      {/* ===========Breadcrum Section=========== */}
      <section className="relative min-h-screen overflow-hidden bg-black">

        <nav
          className="absolute left-1/2 top-[45px] z-20 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap text-sm text-white"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-white no-underline">
            Home
          </Link>

          <span className="text-lg text-[#e5a400]">→</span>

          <span className="font-bold text-white">Branding</span>
        </nav>

        
          {/* ===========Hero Content Section=========== */}
<section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-black px-5 pb-[60px] pt-[120px]">
  <style jsx>{`
    .hero-title {
      position: relative;
      z-index: 10;
      width: 100%;
      margin: 0;
      text-align: center;
      font-size: clamp(24px, 6vw, 42px);
      line-height: 0.95;
      font-weight: 800;
      text-transform: uppercase;
    }

    .hero-subtitle {
      position: relative;
      z-index: 10;
      width: 100%;
      max-width: 850px;
      margin: 18px auto 0;
      padding: 0 10px;
      text-align: center !important;
      font-size: clamp(13px, 1.2vw, 18px);
      line-height: 1.5;
      color: #fff;
    }

    .carousel-area {
      position: relative;
      width: 100%;
      height: 500px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carousel-window {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .carousel {
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      width: max-content;
      gap: 14px;
      transform: translate(-50%, -50%);
      animation: carouselMove 32s linear infinite;
    }

    .carousel-row {
      display: flex;
      flex-shrink: 0;
      gap: 14px;
    }

    .carousel-image {
      display: block;
      width: 138px;
      height: 190px;
      flex-shrink: 0;
      object-fit: cover;
      border: 1px solid #222;
    }

    .side-shade {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 8;
      width: 22%;
      pointer-events: none;
    }

    .side-shade-left {
      left: 0;
      background: linear-gradient(
        to right,
        #000 0%,
        rgba(0, 0, 0, 0.95) 20%,
        rgba(0, 0, 0, 0.7) 50%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    .side-shade-right {
      right: 0;
      background: linear-gradient(
        to left,
        #000 0%,
        rgba(0, 0, 0, 0.95) 20%,
        rgba(0, 0, 0, 0.7) 50%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    .phone-wrapper {
      position: absolute;
      z-index: 15;
      top: 50%;
      left: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .phone-image {
      display: block;
      width: min(620px, 42vw);
      height: auto;
      max-width: 100%;
      object-fit: contain;
    }

    .hero-description {
      position: relative;
      z-index: 10;
      width: 100%;
      max-width: 800px;
      margin: -5px auto 0;
      padding: 0 10px;
      text-align: center;
      font-size: clamp(16px, 1.5vw, 21px);
      line-height: 1.4;
    }

    .cta-wrapper {
      position: relative;
      z-index: 10;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 14px;
      margin-top: 18px;
    }

    .hero-button {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      min-width: 255px;
      height: 56px;
      padding: 0 10px 0 26px;
      border: 1px solid #ffd400;
      border-radius: 999px;
      background: #ffd400;
      color: #000;
      font-size: 15px;
      font-weight: 700;
      text-decoration: none;
      overflow: hidden;
      transition:
        transform 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
    }

    .hero-button:hover {
      transform: translateY(-3px);
      background: #fff;
      box-shadow: 0 10px 30px rgba(255, 212, 0, 0.2);
    }

    .cta-arrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      border-radius: 50%;
      background: #000;
      color: #ffd400;
      font-size: 20px;
      line-height: 1;
      transition:
        transform 0.25s ease,
        background 0.25s ease,
        color 0.25s ease;
    }

    .hero-button:hover .cta-arrow {
      transform: translateX(3px);
      background: #ffd400;
      color: #000;
    }

    @keyframes carouselMove {
      0% {
        transform: translate(-50%, -50%) translateX(-180px);
      }

      50% {
        transform: translate(-50%, -50%) translateX(180px);
      }

      100% {
        transform: translate(-50%, -50%) translateX(-180px);
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: clamp(20px, 5vw, 32px);
        line-height: 1;
      }

      .hero-subtitle {
        width: 100%;
        margin-top: 14px;
        padding: 0 5px;
        font-size: 11px;
        line-height: 1.5;
        text-align: center !important;
      }

      .carousel-area {
        height: 430px;
      }

      .carousel-image {
        width: 105px;
        height: 150px;
      }

      .phone-image {
        width: min(270px, 70vw);
      }

      .hero-description {
        font-size: 15px;
        line-height: 1.5;
      }

      .cta-wrapper {
        width: 100%;
        gap: 12px;
      }

      .hero-button {
        min-width: 230px;
        height: 52px;
        padding-left: 22px;
        font-size: 14px;
      }

      .cta-arrow {
        width: 32px;
        height: 32px;
        font-size: 18px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 22px;
        line-height: 1;
      }

      .hero-subtitle {
        width: 100%;
        font-size: 10px;
        line-height: 1.5;
        text-align: center !important;
      }

      .carousel-area {
        height: 390px;
      }

      .carousel-image {
        width: 85px;
        height: 125px;
      }

      .phone-image {
        width: 235px;
      }

      .hero-description {
        font-size: 14px;
        line-height: 1.5;
      }

      .cta-wrapper {
        flex-direction: column;
        width: 100%;
      }

      .hero-button {
        width: 100%;
        max-width: 320px;
        min-width: 0;
        height: 52px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .carousel {
        animation: none;
      }

      .hero-button,
      .cta-arrow {
        transition: none;
      }
    }
  `}</style>

  <h1 className="hero-title">
    <span className="highlight-font text-[#ffd400]">
      Your Brand's Branding
    </span>
    <br />
    <span
      className="text-white"
      style={{
        textTransform: "none",
        fontWeight: 400,
      }}
    >
      Is the First Thing People Judge Make It Count.
    </span>
  </h1>

  <div className="carousel-area">
    <div className="carousel-window">
      <div className="carousel">
        <div className="carousel-row">
          {Array.from({ length: 13 }).map((_, index) => (
            <img
              key={`carousel-a-${index}`}
              src={`/assets/branding/carousel/${index + 1}.webp`}
              alt=""
              className="carousel-image"
            />
          ))}
        </div>

        <div className="carousel-row">
          {Array.from({ length: 13 }).map((_, index) => (
            <img
              key={`carousel-b-${index}`}
              src={`/assets/branding/carousel/${index + 1}.webp`}
              alt=""
              className="carousel-image"
            />
          ))}
        </div>
      </div>

      <div className="side-shade side-shade-left" />
      <div className="side-shade side-shade-right" />
    </div>

    <div className="phone-wrapper">
      <img
        src="/assets/branding/hero-tablet.webp"
        alt="Big Beans Digital Branding Agency"
        className="phone-image"
      />
    </div>
  </div>

  <p className="hero-description !text-[18px]">
    <strong className="text-[#ffd400]">Big Beans Digital</strong> is a
    digital marketing and branding agency helping startups and growing
    businesses turn ideas into clear, recognisable brands. From logo
    designing and brand identity to packaging, online branding and creative
    design, we build the visual system your business can use across websites,
    social media, advertising and everyday customer interactions.
  </p>

  <div className="cta-wrapper">
    <a
      href="https://www.bigbeansdigital.com"
      className="hero-button"
    >
      <span>See Our Branding Work</span>
      <span className="cta-arrow">→</span>
    </a>

    <a
      href="https://www.bigbeansdigital.com"
      className="hero-button"
    >
      <span>Get a Free Brand's Branding Audit</span>
      <span className="cta-arrow">→</span>
    </a>
  </div>
</section>









        {/* ===========Branding Introduction & Types Section=========== */}
        <section className="relative w-full bg-black px-9 py-5">
          <style jsx>{`
            .branding-intro {
              max-width: 1535px;
              margin: 0 auto 30px;
              display: grid;
              grid-template-columns: 40% 60%;
              gap: 45px;
              align-items: start;
            }

            .branding-heading {
              margin: 0;
              line-height: 0.94;
            }

            .branding-text {
              margin: 0;
              padding-left: 42px;
              border-left: 1px solid #777;
              color: #d7d7d7;
              font-size: clamp(13px, 0.88vw, 16px);
              line-height: 1.4;
              font-weight: 300;
            }

            .branding-cards {
              max-width: 1535px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(5, minmax(0, 1fr));
              gap: 19px;
              align-items: start;
            }

            .branding-card {
              min-width: 0;
              overflow: hidden;
              border: 1px solid #3a3a3a;
              border-radius: 12px;
              background: linear-gradient(
                to bottom,
                #101112 0%,
                #080808 48%,
                #050505 100%
              );
              transition:
                transform 0.35s ease,
                border-color 0.35s ease,
                box-shadow 0.35s ease;
            }

            .branding-card:hover {
              transform: translateY(-8px);
              border-color: #ffd400;
              box-shadow: 0 12px 35px rgba(255, 212, 0, 0.12);
            }

            .branding-card-image {
              width: 100%;
              height: 190px;
              display: block;
              object-fit: cover;
            }

            .branding-card-content {
              padding: 0 21px 20px;
            }

            .branding-card-icon {
              width: 60px;
              height: 60px;
              margin-top: -30px;
              position: relative;
              z-index: 2;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px solid #555;
              border-radius: 50%;
              background: #090909;
              color: #ffd400;
              font-size: 28px;
            }

            .branding-card-title {
              margin: 12px 0 10px;
              line-height: 1.15;
            }

            .branding-card-description {
              margin: 0;
              color: #d0d0d0;
              font-size: clamp(12px, 0.75vw, 15px);
              line-height: 1.5;
            }

            @media (max-width: 1100px) {
              .branding-intro {
                grid-template-columns: 1fr;
              }

              .branding-text {
                padding-left: 25px;
              }

              .branding-cards {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }

            @media (max-width: 768px) {
              .branding-section {
                padding-left: 20px;
                padding-right: 20px;
              }

              .branding-intro {
                margin-bottom: 25px;
                gap: 25px;
              }

              .branding-text {
                padding-left: 18px;
                font-size: 14px;
              }

              .branding-cards {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 14px;
              }

              .branding-card-image {
                height: 170px;
              }

              .branding-card-content {
                padding: 0 16px 18px;
              }

              .branding-card-icon {
                width: 55px;
                height: 55px;
                margin-top: -27px;
                font-size: 25px;
              }

              .branding-card-description {
                font-size: 13px;
              }
            }

            @media (max-width: 480px) {
              .branding-section {
                padding-left: 15px;
                padding-right: 15px;
              }

              .branding-heading {
              }

              .branding-text {
                font-size: 13px;
                line-height: 1.45;
              }

              .branding-cards {
                grid-template-columns: 1fr;
                gap: 14px;
              }

              .branding-card-image {
                height: 220px;
              }

              .branding-card-description {
                font-size: 14px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .branding-card {
                transition: none;
              }
            }
          `}</style>

          

          <div className="branding-intro">
            <h2 className="branding-heading text-1xl font-bold sm:text-3xl md:text-4xl">
              <span className="text-white">Do you need Branding?</span>
              <br /><br />
              <span className="highlight-font block text-[#ffd400]">The Truth no one tells you when you are starting your business</span>
            </h2>

            <p className="branding-text !text-[18px]">
  You feel you do everything right… but your business still feels{" "}
  <span className="font-bold text-[#ffd400]">invisible.</span> You post every day,
  sometimes… you try new ideas and study other businesses at the top.{" "}
  <span className="font-bold text-[#ffd400]">No results.</span> People still ask
  what exactly you offer… and you wonder if they understand your posts and content
  online. <span className="font-bold text-[#ffd400]">Confusion.</span> It is not a
  marketing problem… it is a{" "}
  <span className="font-bold text-[#ffd400]">branding problem.</span> Your business
  lacks <span className="font-bold text-[#ffd400]">clarity.</span> Branding gives
  your business direction. It gives focus and clarity so your target audience does
  not only see you but also understand you. Without branding, your business has no
  soul. People trust businesses they can feel and connect with. When they connect,
  they understand. With branding, your message becomes clearer and intentional.
  The right audience starts taking you very seriously because they feel you. It
  guides the experiences you create and leaves positive scars on your audience.
  So, do you need branding? If your business feels confusing, unstable, or
  invisible,{" "}
  <span className="font-bold text-[#ffd400]">IT IS A BIG YES!</span> Remember,
  branding is simply the perception of a group of people about you. So make them
  perceive you in a way that you stay on their minds, and they can easily recall
  or recognize you.
</p>
          </div>

          <div className="branding-cards">
            {brandingCards.map((card) => (
              <article className="branding-card" key={card.title}>
                <img
                  src={card.image}
                  alt={card.alt}
                  className="branding-card-image"
                />

                <div className="branding-card-content">
                  

                  <h2 className="branding-card-title text-1xl font-bold sm:text-1xl md:text-2xl">
                    {card.title.includes(" ") ? (
                      <>
                        {card.title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-[#ffd400]">
                          {card.title.split(" ").slice(-1)}
                        </span>
                      </>
                    ) : (
                      card.title
                    )}
                  </h2>

                  <p className="branding-card-description !text-[15px]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===========Logo Design Section=========== */}
        <section className="relative w-full bg-black px-10 py-5">
          <style jsx>{`
            .logo-header {
              max-width: 1515px;
              margin: 0 auto 48px;
              display: grid;
              grid-template-columns: 39% 1fr auto;
              gap: 42px;
              align-items: center;
            }

            .logo-heading {
              margin: 0;
              color: #fff;
              line-height: 0.95;
            }

            .logo-description {
              margin: 0;
              padding-left: 32px;
              border-left: 1px solid #777;
              color: #d7d7d7;
              font-size: clamp(15px, 1.15vw, 19px);
              line-height: 1.45;
              font-weight: 300;
            }

            .logo-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 26px;
              min-width: 228px;
              height: 66px;
              padding: 0 30px;
              border-radius: 999px;
              background: #ffd400;
              color: #000;
              text-decoration: none;
              font-size: 18px;
              font-weight: 700;
              white-space: nowrap;
              transition:
                transform 0.25s ease,
                box-shadow 0.25s ease;
            }

            .logo-button:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 28px rgba(255, 212, 0, 0.2);
            }

            .logo-gallery {
              max-width: 1535px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 14px;
            }

            .logo-gallery-card {
              position: relative;
              width: 100%;
              aspect-ratio: 1.42 / 1;
              overflow: hidden;
              border: 1px solid #292929;
              border-radius: 10px;
              background: #0a0a0a;
            }

            .logo-gallery-image {
              width: 100%;
              height: 100%;
              display: block;
              object-fit: cover;
              transition: transform 0.5s ease;
            }

            .logo-gallery-card:hover .logo-gallery-image {
              transform: scale(1.04);
            }

            @media (max-width: 1100px) {
              .logo-header {
                grid-template-columns: 1fr;
                gap: 25px;
              }

              .logo-description {
                padding-left: 25px;
              }

              .logo-button {
                justify-self: start;
              }
            }

            @media (max-width: 768px) {
              .logo-section {
                padding-left: 20px;
                padding-right: 20px;
              }

              .logo-header {
                margin-bottom: 35px;
                gap: 24px;
              }

              .logo-description {
                padding-left: 18px;
                font-size: 14px;
              }

              .logo-button {
                min-width: 205px;
                height: 56px;
                font-size: 16px;
              }

              .logo-gallery {
                grid-template-columns: 1fr;
                gap: 14px;
              }
            }

            @media (max-width: 480px) {
              .logo-section {
                padding-left: 15px;
                padding-right: 15px;
              }

              .logo-description {
                font-size: 13px;
                line-height: 1.5;
              }

              .logo-button {
                min-width: 195px;
                height: 53px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .logo-button,
              .logo-gallery-image {
                transition: none;
              }
            }
          `}</style>

          <div className="logo-header">
            <h2 className="logo-heading text-2xl font-bold sm:text-4xl md:text-5xl">
              Get the perfect
              <br />
              Logo for your
              <span className="highlight-font block text-[#ffd400]">Business</span>
            </h2>

            <p className="logo-description !text-[18px]">
              A great logo isn’t just a symbol — it’s the face of your brand.
              We design timeless, meaningful and versatile logos that capture
              your vision, connect with your audience and leave a lasting
              impression.
            </p>

            <a href="#get-started" className="logo-button">
              <span>Get Started</span>
              <span className="text-[27px] leading-none">→</span>
            </a>
          </div>

          <div className="logo-gallery">
            {["1", "2", "3"].map((number) => (
              <div className="logo-gallery-card" key={number}>
                <img
                  src={`/assets/branding/logo/${number}.webp`}
                  alt={`Logo design example ${number}`}
                  className="logo-gallery-image"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ===========Packaging Design Section=========== */}
        <section className="relative w-full bg-black px-[30px] py-5">
          <style jsx>{`
            .packaging-header {
              max-width: 1535px;
              margin: 0 auto 52px;
              display: grid;
              grid-template-columns: 40% 1fr auto;
              gap: 42px;
              align-items: center;
            }

            .packaging-heading {
              margin: 0;
              color: #fff;
              line-height: 0.95;
            }

            .packaging-description {
              margin: 0;
              padding-left: 38px;
              border-left: 1px solid #777;
              color: #d7d7d7;
              font-size: clamp(15px, 1.12vw, 19px);
              line-height: 1.45;
              font-weight: 300;
              max-width: 650px;
            }

            .packaging-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 26px;
              min-width: 228px;
              height: 66px;
              padding: 0 30px;
              border-radius: 999px;
              background: #ffd400;
              color: #000;
              text-decoration: none;
              font-size: 18px;
              font-weight: 700;
              white-space: nowrap;
              transition:
                transform 0.25s ease,
                box-shadow 0.25s ease;
            }

            .packaging-button:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 28px rgba(255, 212, 0, 0.2);
            }

            .packaging-gallery {
              max-width: 1550px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 19px;
            }

            .packaging-card {
              position: relative;
              overflow: hidden;
              width: 100%;
              aspect-ratio: 1.78 / 1;
              border: 1px solid #303030;
              border-radius: 12px;
              background: #0a0a0a;
              transition:
                transform 0.35s ease,
                border-color 0.35s ease,
                box-shadow 0.35s ease;
            }

            .packaging-card:hover {
              transform: translateY(-7px);
              border-color: #ffd400;
              box-shadow: 0 15px 35px rgba(255, 212, 0, 0.12);
            }

            .packaging-image {
              width: 100%;
              height: 100%;
              display: block;
              object-fit: cover;
              transition: transform 0.5s ease;
            }

            .packaging-card:hover .packaging-image {
              transform: scale(1.035);
            }

            @media (max-width: 1100px) {
              .packaging-header {
                grid-template-columns: 1fr;
                gap: 25px;
              }

              .packaging-description {
                padding-left: 25px;
              }

              .packaging-button {
                justify-self: start;
              }
            }

            @media (max-width: 768px) {
              .packaging-section {
                padding-left: 20px;
                padding-right: 20px;
              }

              .packaging-header {
                margin-bottom: 35px;
                gap: 24px;
              }

              .packaging-description {
                padding-left: 18px;
                font-size: 14px;
              }

              .packaging-button {
                min-width: 205px;
                height: 56px;
                font-size: 16px;
              }

              .packaging-gallery {
                grid-template-columns: 1fr;
                gap: 14px;
              }

              .packaging-card {
                aspect-ratio: 1.55 / 1;
              }
            }

            @media (max-width: 480px) {
              .packaging-section {
                padding-left: 15px;
                padding-right: 15px;
              }

              .packaging-description {
                font-size: 13px;
                line-height: 1.5;
              }

              .packaging-button {
                min-width: 195px;
                height: 53px;
              }

              .packaging-gallery {
                gap: 12px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .packaging-button,
              .packaging-card,
              .packaging-image {
                transition: none;
              }
            }
          `}</style>

          <div className="packaging-header">
            <h2 className="packaging-heading text-2xl font-bold sm:text-4xl md:text-5xl">
              Standout
              <br />
              Packaging for
              <span className="highlight-font block text-[#ffd400]">Bigger Brands</span>
            </h2>

            <p className="packaging-description !text-[18px]">
              Great packaging does more than just protect a product — it tells
              your brand story, grabs attention and influences buying
              decisions. We design packaging that looks amazing, feels premium
              and helps your product stand out on every shelf and screen.
            </p>

            <a href="#get-started" className="packaging-button">
              <span>Get Started</span>
              <span className="text-[27px] leading-none">→</span>
            </a>
          </div>

          <div className="packaging-gallery">
            {["1", "2", "3"].map((number) => (
              <div className="packaging-card" key={number}>
                <img
                  src={`/assets/branding/packaging/${number}.webp`}
                  alt={`Packaging design example ${number}`}
                  className="packaging-image"
                />
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* ===========Our Work Section=========== */}
      <div className="relative z-10">
        <OurWork />
      </div>

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

        <p className="!text-[18px] text-sm font-medium leading-snug text-white/70 sm:text-base">
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

              <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-[13px]">
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

      <p className="mt-4 text-center text-base leading-6 text-white/100 sm:text-lg">
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

          <p className="mt-5 text-base leading-6 text-[#c5cdd4]">
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

          <p className="mt-5 text-base leading-6 text-[#c5cdd4]">
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

          <p className="mt-5 text-base leading-6 text-[#c5cdd4]">
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

        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-white/60 leading-relaxed">
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

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/60 leading-relaxed">
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

    <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
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