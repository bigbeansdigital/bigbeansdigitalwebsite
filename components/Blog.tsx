"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Filter,
  Layers3,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";

export default function SocialMediaMarketing() {
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  const primaryCategories = [
    "Digital Marketing",
    "Social Media",
    "Graphic Design",
    "AI",
    "Branding",
    "SEO",
    "Website Development",
  ];

  const secondaryCategories = [
    "Business",
    "Real Estate",
    "Finance",
    "Lifestyle",
    "Healthcare",
    "Manufacturing",
    "E-Commerce",
    "Education",
    "Start-Ups",
  ];

  const blogs = [
    {
      id: 10,
      image:
        "/assets/blog/singleblogs/how-to-choose-a-business-name-guide-for-startups.webp",
      date: "August 31, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Start-Ups",
      title:
        "How to Choose a Business Name: A Complete Guide for Startups",
      description:
        "A practical, step-by-step guide to choosing a business name — brainstorming methods, legal checks for India and the UK, and a scoring framework to help you commit.",
      link: "/blog/how-to-choose-a-business-name-guide-for-startups",
    },

    {
      id: 9,
      image:
        "/assets/blog/singleblogs/social-media-marketing-cost-india.webp",
      date: "August 31, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Start-Ups",
      title: "Social Media Marketing Cost in India",
      description:
        "Discover social media marketing costs in India, what agencies charge, package pricing, and what affects your budget. Plan smarter with BigBeans Digital.",
      link: "/blog/social-media-marketing-cost-india",
    },

    {
      id: 8,
      image:
        "/assets/blog/singleblogs/Spider-Man-inspired-social-media-marketing-creative.webp",
      date: "August 22, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Start-Ups",
      title:
        "Why Are Brands Suddenly Using Spider-Man in Social Media Marketing?",
      description:
        "Discover why brands are suddenly using Spider-Man-inspired visuals on social media and how moment marketing, viral trends and pop culture are shaping brand creativity in 2026",
      link: "/blog/spider-man-social-media-marketing-trend",
    },

    {
      id: 7,
      image:
        "/assets/blog/singleblogs/real-estate-video-marketing-ideas-for-reels.png",
      date: "August 18, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Real Estate",
      title:
        "Real Estate Video Marketing Ideas By Big Beans Digital",
      description:
        "Discover Real Estate Video Marketing ideas for Reels that generate property leads, site visits and sales. Learn strategies for builders, brokers, developers and realtors in India | Big Beans Digital | Best Social Media Marketing Agency for Real Estate",
      link: "/blog/real-estate-video-marketing-ideas-for-reels",
    },

    {
      id: 6,
      image:
        "/assets/blog/singleblogs/new-instagram-logo-redesign.png",
      date: "August 17, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Business",
      title:
        "New Instagram Logo 2026: Wordmark Redesign & Brand Refresh",
      description:
        "Discover the new Instagram logo 2026, its wordmark redesign, “Instagzam” backlash, typography changes and what Instagram's brand refresh means for marketers.",
      link: "/blog/new-instagram-logo-redesign",
    },

    {
      id: 5,
      image:
        "/assets/blog/singleblogs/why-is-my-competitor-getting-more-leads.png",
      date: "August 17, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Business",
      title:
        "Why Is My Competitor Getting More Leads? | Digital Marketing India",
      description:
        "Your competitor opened later but gets more leads. Discover how SEO, Google Business Profile, social media, reviews and local digital marketing can help Indian businesses grow.",
      link: "/blog/why-is-my-competitor-getting-more-leads",
    },

    {
      id: 4,
      image:
        "/assets/blog/singleblogs/clinic-instagram-marketing-strategy.png",
      date: "August 14, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Healthcare",
      title:
        "How to Do SMM for a New Clinic in India | BigBeans",
      description:
        "Learn what to post when launching a clinic on Instagram, from educational content to trust-building posts that attract patients. Get started with BigBeans Digital.",
      link: "/blog/clinic-instagram-marketing-strategy",
    },

    {
      id: 3,
      image: "/assets/blog/singleblogs/getmorecustomers.png",
      date: "August 14, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Start-Ups",
      title: "Customer Retention for Startups",
      description:
        "Learn how London startups can improve customer retention, build loyalty and keep customers coming back. Read the practical guide today.",
      link: "/blog/getmorecustomers",
    },

    {
      id: 2,
      image:
        "/assets/blog/singleblogs/google-marketing-live-gemini-ads-guide.webp",
      date: "August 13, 2026",
      primaryCategory: "SEO",
      secondaryCategory: "Business",
      title:
        "Google Marketing Live 2026: Gemini Ads Guide",
      description:
        "Discover how Gemini-powered ad formats from Google Marketing Live 2026 reshape PPC. Learn key strategies for Conversational Ads, AEO & GEO growth.",
      link: "/blog/google-marketing-live-gemini-ads-guide",
    },

    {
      id: 1,
      image:
        "/assets/blog/singleblogs/website-seo-audit.webp",
      date: "August 13, 2026",
      primaryCategory: "SEO",
      secondaryCategory: "Business",
      title:
        "How to Do a Website SEO Audit Before Hiring an Agency",
      description:
        "Learn how to do a website SEO audit yourself. Use this DIY SEO audit checklist to find speed, indexing, keyword, and technical SEO issues.",
      link: "/blog/website-seo-audit",
    },
  ];

  const filteredBlogs =
    selectedCategory === "All Blogs"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.primaryCategory === selectedCategory ||
            blog.secondaryCategory === selectedCategory
        );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setMobileCategoriesOpen(false);
  };

  /*
  ================================================================
  CINEMATIC MOUSE MOVEMENT
  ================================================================
  */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /*
  ================================================================
  ANIMATION VARIANTS
  ================================================================
  */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 55,
      scale: 0.94,
      rotateX: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#030303] text-white selection:bg-[#F8BC04] selection:text-black"
    >
      {/* =========================================================
          CINEMATIC GLOBAL BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Base radial atmosphere */}

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(248,188,4,0.08),transparent_32%),radial-gradient(ellipse_at_10%_45%,rgba(255,255,255,0.025),transparent_25%),radial-gradient(ellipse_at_90%_70%,rgba(248,188,4,0.035),transparent_28%)]" />

        {/* Cinematic grid */}

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black, transparent 78%)",
          }}
        />

        {/* Moving light field */}

        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          className="absolute left-1/2 top-[5%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#F8BC04]/[0.045] blur-[140px]"
        />

        {/* Main ambient light */}

        <motion.div
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.28, 0.5, 0.28],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[50%] top-[160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#F8BC04]/[0.035] blur-[120px]"
        />

        {/* Left cinematic light */}

        <motion.div
          animate={{
            x: [-20, 30, -20],
            y: [20, -20, 20],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[230px] top-[600px] h-[480px] w-[480px] rounded-full bg-[#F8BC04]/[0.025] blur-[110px]"
        />

        {/* Right cinematic light */}

        <motion.div
          animate={{
            x: [20, -30, 20],
            y: [-15, 30, -15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[220px] top-[950px] h-[460px] w-[460px] rounded-full bg-white/[0.018] blur-[110px]"
        />

        {/* Fine center light */}

        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[45%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-[#F8BC04]/[0.025] blur-[80px]"
        />

        {/* Noise layer */}

        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* =========================================================
          PAGE INTRO / HERO
      ========================================================== */}

      <section className="relative z-10 w-full overflow-hidden border-b border-white/[0.06] bg-[#030303]">
        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12 lg:pb-24">

          {/* CORRECTED BREADCRUMB WRAPPER */}

          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="group inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:border-[#F8BC04]/30 hover:bg-white/[0.055] sm:gap-3 sm:px-6 sm:py-3"
            >
              <Link
                href="/"
                className="text-[10px] font-medium text-white/45 transition-colors duration-300 hover:text-[#F8BC04] sm:text-[11px]"
              >
                Home
              </Link>

              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#F8BC04]"
              >
                →
              </motion.span>

              <span className="truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-white/85 sm:text-[11px]">
                BIGBEANS DIGITAL BLOGS
              </span>
            </motion.div>
          </div>

          {/* =====================================================
              HERO HEADING
          ====================================================== */}

          <div className="relative mx-auto mt-8 max-w-5xl text-center sm:mt-10">

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-[#F8BC04]/15 bg-[#F8BC04]/[0.045] px-3 py-1.5 backdrop-blur-xl"
            >
              <Sparkles
                size={12}
                className="text-[#F8BC04]"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Insights • Ideas • Growth
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="text-[38px] font-medium leading-[1.02] tracking-[-0.055em] text-white sm:text-[52px] md:text-[66px] lg:text-[78px]"
            >
              Ideas that help{" "}
              <span className="relative inline-block text-white">
                businesses grow.

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: 0.9,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-[#F8BC04] shadow-[0_0_20px_rgba(248,188,4,0.55)] sm:-bottom-3"
                />

                <motion.span
                  animate={{
                    opacity: [0.25, 0.65, 0.25],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-3 left-0 h-[12px] w-full bg-[#F8BC04]/10 blur-[12px]"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mx-auto mt-8 max-w-3xl text-[13px] leading-[1.8] text-white/45 sm:text-[14px] md:text-[15px]"
            >
              Explore practical insights, strategies and ideas
              across digital marketing, social media, AI,
              branding and business growth.
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "90px",
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-[#F8BC04] to-transparent shadow-[0_0_15px_rgba(248,188,4,0.5)]"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="mx-auto mt-8 flex w-fit flex-col items-center gap-2"
            >
              <span className="text-[7px] font-semibold uppercase tracking-[0.3em] text-white/25">
                Explore
              </span>

              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-7 w-px bg-gradient-to-b from-[#F8BC04] to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOG SECTION
      ========================================================== */}

      <section className="relative z-10 w-full bg-[#030303] py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[270px_minmax(0,1fr)] xl:gap-14">

            {/* =====================================================
                DESKTOP CATEGORY SIDEBAR
            ====================================================== */}

            <aside className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="sticky top-28 overflow-hidden rounded-[26px] border border-white/[0.09] bg-white/[0.035] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.08, 0.18, 0.08],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F8BC04]/15 blur-[40px]"
                />

                <div className="relative overflow-hidden border-b border-white/[0.08] bg-gradient-to-br from-white/[0.075] to-white/[0.02] px-6 py-7">
                  <div className="relative">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#F8BC04] shadow-[0_0_10px_rgba(248,188,4,0.8)]" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#F8BC04]/70">
                        Categories
                      </span>
                    </div>

                    <h2 className="text-[21px] font-medium tracking-[-0.025em] text-white">
                      Explore
                    </h2>
                  </div>
                </div>

                <div className="border-b border-white/[0.07] p-3">
                  <motion.button
                    whileHover={{
                      x: 4,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="button"
                    onClick={() =>
                      setSelectedCategory("All Blogs")
                    }
                    className={`group relative flex w-full items-center justify-between overflow-hidden rounded-[14px] px-4 py-3.5 text-left text-[12px] transition-all duration-300 ${
                      selectedCategory === "All Blogs"
                        ? "bg-[#F8BC04] font-semibold text-[#171717] shadow-[0_0_30px_rgba(248,188,4,0.16)]"
                        : "text-white/65 hover:bg-white/[0.055] hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">
                      All Blogs
                    </span>

                    <span
                      className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full transition-all ${
                        selectedCategory === "All Blogs"
                          ? "bg-[#171717] text-white"
                          : "bg-white/[0.08] text-white/35"
                      }`}
                    >
                      <ArrowRight
                        size={11}
                        strokeWidth={2.5}
                      />
                    </span>
                  </motion.button>
                </div>

                <div className="px-3 pb-3 pt-5">
                  <div className="mb-3 flex items-center gap-2 px-4">
                    <Layers3
                      size={12}
                      className="text-[#F8BC04]"
                    />

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                      Domain
                    </p>
                  </div>

                  {primaryCategories.map(
                    (category, index) => {
                      const isActive =
                        selectedCategory === category;

                      return (
                        <motion.button
                          key={category}
                          initial={{
                            opacity: 0,
                            x: -12,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.045,
                          }}
                          whileHover={{
                            x: 4,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          type="button"
                          onClick={() =>
                            setSelectedCategory(category)
                          }
                          className={`group relative mb-1 flex w-full items-center justify-between overflow-hidden rounded-[13px] px-4 py-3 text-left text-[12px] transition-all duration-300 ${
                            isActive
                              ? "font-semibold text-[#171717]"
                              : "text-white/50 hover:bg-white/[0.055] hover:text-white"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeCategory"
                              className="absolute inset-0 bg-[#F8BC04]"
                            />
                          )}

                          <span className="relative z-10">
                            {category}
                          </span>

                          <span
                            className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-[#171717] text-white"
                                : "bg-white/[0.07] text-white/30 opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            <ArrowRight
                              size={11}
                              strokeWidth={2.5}
                            />
                          </span>
                        </motion.button>
                      );
                    }
                  )}
                </div>

                <div className="border-t border-white/[0.07] px-3 pb-5 pt-5">
                  <div className="mb-3 flex items-center gap-2 px-4">
                    <Layers3
                      size={12}
                      className="text-[#F8BC04]"
                    />

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                      Industry
                    </p>
                  </div>

                  {secondaryCategories.map(
                    (category, index) => {
                      const isActive =
                        selectedCategory === category;

                      return (
                        <motion.button
                          key={category}
                          initial={{
                            opacity: 0,
                            x: -12,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.04,
                          }}
                          whileHover={{
                            x: 4,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          type="button"
                          onClick={() =>
                            setSelectedCategory(category)
                          }
                          className={`group relative mb-1 flex w-full items-center justify-between overflow-hidden rounded-[13px] px-4 py-3 text-left text-[12px] transition-all duration-300 last:mb-0 ${
                            isActive
                              ? "font-semibold text-[#171717]"
                              : "text-white/50 hover:bg-white/[0.055] hover:text-white"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeCategory"
                              className="absolute inset-0 bg-[#F8BC04]"
                            />
                          )}

                          <span className="relative z-10">
                            {category}
                          </span>

                          <span
                            className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-[#171717] text-white"
                                : "bg-white/[0.07] text-white/30 opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            <ArrowRight
                              size={11}
                              strokeWidth={2.5}
                            />
                          </span>
                        </motion.button>
                      );
                    }
                  )}
                </div>

                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-[2px] w-full bg-[#F8BC04] shadow-[0_0_15px_rgba(248,188,4,0.8)]"
                />
              </motion.div>
            </aside>

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <main className="min-w-0">

              {/* MOBILE CATEGORY SELECTOR */}

              <div className="mb-8 lg:hidden">
                <motion.button
                  whileTap={{
                    scale: 0.985,
                  }}
                  type="button"
                  onClick={() =>
                    setMobileCategoriesOpen(
                      !mobileCategoriesOpen
                    )
                  }
                  className="flex w-full items-center justify-between rounded-[18px] border border-white/[0.09] bg-white/[0.045] px-4 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{
                        rotate:
                          mobileCategoriesOpen
                            ? 90
                            : 0,
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8BC04] text-[#171717] shadow-[0_0_20px_rgba(248,188,4,0.18)]"
                    >
                      <Filter size={13} />
                    </motion.span>

                    <div className="text-left">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                        Browse Categories
                      </p>

                      <p className="mt-0.5 text-[12px] font-semibold text-white">
                        {selectedCategory}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`text-white/40 transition-transform duration-300 ${
                      mobileCategoriesOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {mobileCategoriesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="mt-2 overflow-hidden rounded-[18px] border border-white/[0.09] bg-[#090909]/95 shadow-[0_30px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
                    >
                      <div className="border-b border-white/[0.07] p-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleCategoryChange(
                              "All Blogs"
                            )
                          }
                          className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-[12px] ${
                            selectedCategory === "All Blogs"
                              ? "bg-[#F8BC04] font-semibold text-[#171717]"
                              : "text-white/55 hover:bg-white/[0.055]"
                          }`}
                        >
                          <span>All Blogs</span>

                          {selectedCategory ===
                            "All Blogs" && (
                            <span>✓</span>
                          )}
                        </button>
                      </div>

                      <div className="px-2 pb-2 pt-3">
                        <p className="mb-1 px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                          Primary Categories
                        </p>

                        {primaryCategories.map(
                          (category) => {
                            const isActive =
                              selectedCategory ===
                              category;

                            return (
                              <button
                                key={category}
                                type="button"
                                onClick={() =>
                                  handleCategoryChange(
                                    category
                                  )
                                }
                                className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-[12px] ${
                                  isActive
                                    ? "bg-[#F8BC04] font-semibold text-[#171717]"
                                    : "text-white/55 hover:bg-white/[0.055]"
                                }`}
                              >
                                <span>{category}</span>

                                {isActive && (
                                  <span>✓</span>
                                )}
                              </button>
                            );
                          }
                        )}
                      </div>

                      <div className="border-t border-white/[0.07] px-2 pb-3 pt-3">
                        <p className="mb-1 px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                          Secondary Categories
                        </p>

                        {secondaryCategories.map(
                          (category) => {
                            const isActive =
                              selectedCategory ===
                              category;

                            return (
                              <button
                                key={category}
                                type="button"
                                onClick={() =>
                                  handleCategoryChange(
                                    category
                                  )
                                }
                                className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-[12px] ${
                                  isActive
                                    ? "bg-[#F8BC04] font-semibold text-[#171717]"
                                    : "text-white/55 hover:bg-white/[0.055]"
                                }`}
                              >
                                <span>{category}</span>

                                {isActive && (
                                  <span>✓</span>
                                )}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SECTION HEADING */}

              <motion.div
                key={selectedCategory}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6"
              >
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <motion.span
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-[#F8BC04] shadow-[0_0_12px_rgba(248,188,4,0.8)]"
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/30">
                      Latest Insights
                    </span>
                  </div>

                  <h2 className="text-[29px] font-medium leading-none tracking-[-0.045em] text-white sm:text-[34px]">
                    {selectedCategory}
                  </h2>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/30"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-[#F8BC04] shadow-[0_0_10px_rgba(248,188,4,0.6)]"
                  />

                  {filteredBlogs.length}{" "}
                  {filteredBlogs.length === 1
                    ? "Article"
                    : "Articles"}
                </motion.div>
              </motion.div>

              {/* ACTIVE CATEGORY INFO */}

              <AnimatePresence mode="wait">
                {selectedCategory !== "All Blogs" && (
                  <motion.div
                    key={selectedCategory}
                    initial={{
                      opacity: 0,
                      height: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="mb-7 flex flex-wrap items-center gap-2 overflow-hidden"
                  >
                    <span className="text-[10px] uppercase tracking-[0.12em] text-white/30">
                      Showing articles tagged with
                    </span>

                    <motion.span
                      initial={{
                        scale: 0.8,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      className="rounded-full border border-white/[0.08] bg-white/[0.06] px-3 py-1.5 text-[9px] font-semibold text-white backdrop-blur-xl"
                    >
                      {selectedCategory}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* BLOG GRID */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {filteredBlogs.map((blog) => (
                    <CinematicBlogCard
                      key={blog.id}
                      blog={blog}
                      variants={cardVariants}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* EMPTY STATE */}

              {filteredBlogs.length === 0 && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="flex min-h-[320px] items-center justify-center rounded-[26px] border border-dashed border-white/[0.12] bg-white/[0.025] px-6 backdrop-blur-xl"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{
                        y: [0, -7, 0],
                        rotate: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#F8BC04]/15 bg-[#F8BC04]/[0.06]"
                    >
                      <Filter
                        size={18}
                        className="text-[#F8BC04]"
                      />
                    </motion.div>

                    <p className="mt-4 text-[15px] font-semibold text-white">
                      No blogs found
                    </p>

                    <p className="mx-auto mt-2 max-w-xs text-[11px] leading-[1.6] text-white/35">
                      There are currently no articles available
                      in this category.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.04,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      type="button"
                      onClick={() =>
                        setSelectedCategory("All Blogs")
                      }
                      className="mt-5 rounded-full bg-[#F8BC04] px-5 py-2.5 text-[10px] font-semibold text-[#171717] shadow-[0_0_25px_rgba(248,188,4,0.18)] transition-all hover:shadow-[0_0_35px_rgba(248,188,4,0.35)]"
                    >
                      View All Blogs
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CINEMATIC ELEMENT
      ========================================================== */}

      <div className="relative z-10 overflow-hidden bg-[#030303] pb-10 pt-2">
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "100%",
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mx-auto h-px max-w-[1440px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mt-[-1px] h-[2px] max-w-[220px] bg-[#F8BC04] blur-[4px]"
        />
      </div>
    </main>
  );
}

/*
====================================================================
CINEMATIC BLOG CARD
====================================================================
*/

function CinematicBlogCard({
  blog,
  variants,
}: {
  blog: {
    id: number;
    image: string;
    date: string;
    primaryCategory: string;
    secondaryCategory: string;
    title: string;
    description: string;
    link: string;
  };
  variants: any;
}) {
  const cardRef = useRef<HTMLElement | null>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 160,
    damping: 20,
    mass: 0.5,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 160,
    damping: 20,
    mass: 0.5,
  });

  const handleCardMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    rotateY.set((x / rect.width) * 7);
    rotateX.set(-(y / rect.height) * 7);
  };

  const handleCardLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={variants}
      onMouseMove={handleCardMove}
      onMouseLeave={handleCardLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 1400,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-[24px] border border-white/[0.09] bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 hover:border-[#F8BC04]/20 hover:shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
    >
      {/* CARD INNER LIGHT */}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 z-0 h-48 w-48 rounded-full bg-[#F8BC04]/[0.055] blur-[45px]"
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* IMAGE */}

      <Link
        href={blog.link}
        className="relative z-10 block h-[225px] overflow-hidden border-b border-white/[0.08] bg-[#080808] sm:h-[205px] xl:h-[220px]"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover opacity-[0.88] transition-all duration-[1000ms] ease-out group-hover:scale-[1.09] group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/20" />

        <motion.div
          initial={{
            x: "-150%",
          }}
          whileHover={{
            x: "150%",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-y-0 left-0 z-20 w-[38%] -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.28] to-transparent"
        />

        <div className="absolute left-4 top-4 z-30">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-medium text-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            {blog.primaryCategory}
          </span>
        </div>

        <div className="pointer-events-none absolute left-3 top-3 h-7 w-7 border-l border-t border-white/25" />

        <div className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 border-b border-r border-[#F8BC04]/45" />

        <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between gap-3">
          <span className="text-[9px] font-medium tracking-[0.05em] text-white/80">
            {blog.date}
          </span>

          <motion.span
            whileHover={{
              rotate: 45,
              scale: 1.1,
            }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.12] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#F8BC04]/40 group-hover:bg-[#F8BC04] group-hover:text-[#171717]"
          >
            <ArrowRight
              size={14}
              strokeWidth={2.3}
            />
          </motion.span>
        </div>
      </Link>

      {/* CONTENT */}

      <div
        className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-5 sm:pb-6"
        style={{
          transform: "translateZ(22px)",
        }}
      >
        <div className="mb-3 flex flex-wrap gap-1.5">
          <motion.span
            whileHover={{
              y: -2,
            }}
            className="rounded-full border border-[#F8BC04]/15 bg-[#F8BC04]/[0.08] px-2.5 py-1 text-[8px] font-semibold text-[#F8BC04]"
          >
            {blog.primaryCategory}
          </motion.span>

          <motion.span
            whileHover={{
              y: -2,
            }}
            className="rounded-full border border-white/[0.08] bg-white/[0.045] px-2.5 py-1 text-[8px] font-medium text-white/45 backdrop-blur-md"
          >
            {blog.secondaryCategory}
          </motion.span>
        </div>

        <Link href={blog.link}>
          <h3 className="line-clamp-3 text-[17px] font-semibold leading-[1.27] tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#F8BC04] sm:text-[18px]">
            {blog.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-[11px] leading-[1.75] text-white/42 sm:text-[12px]">
          {blog.description}
        </p>

        <div className="mt-auto pt-5">
          <div className="border-t border-white/[0.08] pt-4">
            <Link
              href={blog.link}
              className="group/link inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.13em] text-white/80"
            >
              <span className="relative">
                Read Article

                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#F8BC04] shadow-[0_0_8px_rgba(248,188,4,0.7)] transition-all duration-300 group-hover/link:w-full" />
              </span>

              <motion.span
                whileHover={{
                  scale: 1.1,
                  rotate: 45,
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.06] text-white transition-all duration-300 group-hover/link:border-[#F8BC04] group-hover/link:bg-[#F8BC04] group-hover/link:text-[#171717]"
              >
                <ArrowRight
                  size={12}
                  strokeWidth={2.5}
                />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>

      {/* GLASS REFLECTION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 rounded-[24px] bg-gradient-to-br from-white/[0.055] via-transparent to-transparent opacity-60"
      />

      {/* CINEMATIC EDGE */}

      <motion.div
        initial={{
          width: "20%",
          opacity: 0.45,
        }}
        whileHover={{
          width: "100%",
          opacity: 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="absolute bottom-0 left-0 z-40 h-[2px] bg-[#F8BC04] shadow-[0_0_18px_rgba(248,188,4,0.75)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-20 h-20 w-20 bg-[#F8BC04]/[0.025] blur-[30px]"
      />
    </motion.article>
  );
}