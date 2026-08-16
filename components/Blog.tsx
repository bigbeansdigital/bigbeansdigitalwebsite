"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Filter,
  Layers3,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

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
      id: 1,
      image:
        "/assets/blog/allblogs/website-seo-audit/website-seo-audit-card.png",
      date: "August 13, 2026",
      primaryCategory: "SEO",
      secondaryCategory: "Business",
      title: "How to Do a Website SEO Audit Before Hiring an Agency",
      description:
        "Learn how to do a website SEO audit yourself. Use this DIY SEO audit checklist to find speed, indexing, keyword, and technical SEO issues.",
      link: "/blog/website-seo-audit",
    },

    {
      id: 2,
      image:
        "/assets/blog/allblogs/real-time-weather-marketing/real-time-weather-marketing-card.png",
      date: "August 13, 2026",
      primaryCategory: "AI",
      secondaryCategory: "Business",
      title: "Real-Time Marketing: Turn Weather Data Into Revenue",
      description:
        "Learn how agile brands use weather data, AI, and real-time signals to create contextual marketing campaigns that drive revenue.",
      link: "/blog/real-time-weather-marketing",
    },

    {
      id: 3,
      image: "/assets/blog/allblogs/In-HousevsAgency/card.png",
      date: "August 13, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Start-Ups",
      title: "In-House vs Agency: Social Media for London Startups",
      description:
        "Should your London startup hire in-house or outsource social media? Discover the key signs, costs, benefits and when an agency is the smarter choice for growth.",
      link: "/blog/In-HousevsAgency",
    },

    {
      id: 4,
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
      id: 5,
      image:
        "/assets/blog/singleblogs/clinic-instagram-marketing-strategy.png",
      date: "August 14, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Healthcare",
      title: "How to Do SMM for a New Clinic in India | BigBeans",
      description:
        "Learn what to post when launching a clinic on Instagram, from educational content to trust-building posts that attract patients. Get started with BigBeans Digital.",
      link: "/blog/clinic-instagram-marketing-strategy",
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#171717]">
      {/* =========================================================
          GLOBAL DECORATIVE BACKGROUND
      ========================================================== */}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[80px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F8BC04]/[0.035] blur-[110px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[180px] top-[600px] h-[400px] w-[400px] rounded-full border border-[#F8BC04]/[0.08]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[220px] top-[1100px] h-[450px] w-[450px] rounded-full border border-[#171717]/[0.035]"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =========================================================
          PAGE INTRO
      ========================================================== */}

      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pb-14">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex justify-center"
          >
            <div className="group inline-flex max-w-full items-center gap-2 rounded-full border border-[#EEEEEE] bg-white px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#F8BC04]/40 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] sm:gap-3 sm:px-6 sm:py-3">
              <Link
                href="/"
                className="text-[10px] font-medium text-[#777777] transition-colors duration-300 hover:text-[#F8BC04] sm:text-[11px]"
              >
                Home
              </Link>

              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#F8BC04]"
              >
                →
              </motion.span>

              <span className="truncate text-[10px] font-semibold uppercase tracking-[0.04em] text-[#171717] sm:text-[11px]">
                BIGBEANS DIGITAL BLOGS
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="mx-auto mt-1 max-w-4xl text-center sm:mt-1">
            

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mt-4 text-[36px] font-medium leading-[1.04] tracking-[-0.05em] text-[#171717] sm:text-[46px] md:text-[54px] lg:text-[62px]"
            >
              Ideas that help
              <span className="relative ml-2 inline-block">
                businesses grow.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#F8BC04] sm:-bottom-2"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mx-auto mt-6 max-w-4xl text-[13px] leading-[1.75] text-[#858585] sm:text-[14px] md:text-[15px]"
            >
              Explore practical insights, strategies and ideas across digital
              marketing, social media, AI, branding and business growth.
            </motion.p>

            {/* Animated Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "70px", opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mx-auto mt-7 h-[1px] bg-[#171717]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOG SECTION
      ========================================================== */}

      <section className="relative w-full bg-white py-8 sm:py-5 lg:py-5">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[270px_minmax(0,1fr)] xl:gap-14">
            {/* =====================================================
                DESKTOP CATEGORY SIDEBAR
            ====================================================== */}

            <aside className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="sticky top-28 overflow-hidden rounded-[24px] border border-[#EAEAEA] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.045)]"
              >
                {/* Sidebar Header */}
                <div className="relative overflow-hidden bg-[#171717] px-6 py-6">
                  <motion.div
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-white/10"
                  />

                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.25, 0.5, 0.25],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-3 top-3 h-8 w-8 rounded-full bg-[#F8BC04]/20"
                  />

                  <div className="relative">
                    <h2 className="mt-1 text-[20px] font-medium tracking-[-0.02em] text-white">
                      Explore
                    </h2>
                  </div>
                </div>

                {/* All Blogs */}
                <div className="border-b border-[#EEEEEE] p-3">
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setSelectedCategory("All Blogs")}
                    className={`group flex w-full items-center justify-between rounded-[13px] px-4 py-3 text-left text-[12px] transition-all duration-300 ${
                      selectedCategory === "All Blogs"
                        ? "bg-[#F8BC04] font-semibold text-[#171717] shadow-[0_7px_18px_rgba(248,188,4,0.18)]"
                        : "text-[#000000] hover:bg-[#F8F8F8] hover:text-[#171717]"
                    }`}
                  >
                    <span>All Blogs</span>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
                        selectedCategory === "All Blogs"
                          ? "bg-[#171717] text-white"
                          : "bg-[#F4F4F4] text-[#999999]"
                      }`}
                    >
                      <ArrowRight size={11} strokeWidth={2.5} />
                    </span>
                  </motion.button>
                </div>

                {/* Primary Categories */}
                <div className="px-3 pb-2 pt-4">
                  <div className="mb-2 flex items-center gap-2 px-4">
                    <Layers3 size={12} className="text-[#F8BC04]" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">
                      Domain
                    </p>
                  </div>

                  {primaryCategories.map((category, index) => {
                    const isActive = selectedCategory === category;

                    return (
                      <motion.button
                        key={category}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.04,
                        }}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`group mb-1 flex w-full items-center justify-between rounded-[13px] px-4 py-3 text-left text-[12px] transition-all duration-300 ${
                          isActive
                            ? "bg-[#F8BC04] font-semibold text-[#171717] shadow-[0_7px_18px_rgba(248,188,4,0.18)]"
                            : "text-[#777777] hover:bg-[#F8F8F8] hover:text-[#171717]"
                        }`}
                      >
                        <span>{category}</span>

                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-[#171717] text-white"
                              : "bg-[#F4F4F4] text-[#999999] opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <ArrowRight size={11} strokeWidth={2.5} />
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Secondary Categories */}
                <div className="border-t border-[#EEEEEE] px-3 pb-4 pt-4">
                  <div className="mb-2 flex items-center gap-2 px-4">
                    <Layers3 size={12} className="text-[#F8BC04]" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">
                      Industry
                    </p>
                  </div>

                  {secondaryCategories.map((category, index) => {
                    const isActive = selectedCategory === category;

                    return (
                      <motion.button
                        key={category}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.035,
                        }}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`group mb-1 flex w-full items-center justify-between rounded-[13px] px-4 py-3 text-left text-[12px] transition-all duration-300 last:mb-0 ${
                          isActive
                            ? "bg-[#F8BC04] font-semibold text-[#171717] shadow-[0_7px_18px_rgba(248,188,4,0.18)]"
                            : "text-[#777777] hover:bg-[#F8F8F8] hover:text-[#171717]"
                        }`}
                      >
                        <span>{category}</span>

                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-[#171717] text-white"
                              : "bg-[#F4F4F4] text-[#999999] opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <ArrowRight size={11} strokeWidth={2.5} />
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-[3px] w-full bg-[#F8BC04]"
                />
              </motion.div>
            </aside>

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <main className="min-w-0">
              {/* MOBILE CATEGORY SELECTOR */}
              <div className="mb-7 lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.985 }}
                  type="button"
                  onClick={() =>
                    setMobileCategoriesOpen(!mobileCategoriesOpen)
                  }
                  className="flex w-full items-center justify-between rounded-[17px] border border-[#E6E6E6] bg-white px-4 py-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.045)]"
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{
                        rotate: mobileCategoriesOpen ? 90 : 0,
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-white"
                    >
                      <Filter size={13} />
                    </motion.span>

                    <div className="text-left">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">
                        Browse Categories
                      </p>

                      <p className="mt-0.5 text-[12px] font-semibold text-[#171717]">
                        {selectedCategory}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`text-[#777777] transition-transform duration-300 ${
                      mobileCategoriesOpen ? "rotate-180" : ""
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
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="mt-2 overflow-hidden rounded-[17px] border border-[#E6E6E6] bg-white shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
                    >
                      {/* Mobile All Blogs */}
                      <div className="border-b border-[#EEEEEE] p-2">
                        <button
                          type="button"
                          onClick={() => handleCategoryChange("All Blogs")}
                          className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-[12px] ${
                            selectedCategory === "All Blogs"
                              ? "bg-[#F8BC04] font-semibold text-[#171717]"
                              : "text-[#777777] hover:bg-[#F8F8F8]"
                          }`}
                        >
                          <span>All Blogs</span>

                          {selectedCategory === "All Blogs" && (
                            <span>✓</span>
                          )}
                        </button>
                      </div>

                      {/* Mobile Primary */}
                      <div className="px-2 pb-2 pt-3">
                        <p className="mb-1 px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">
                          Primary Categories
                        </p>

                        {primaryCategories.map((category) => {
                          const isActive = selectedCategory === category;

                          return (
                            <button
                              key={category}
                              type="button"
                              onClick={() => handleCategoryChange(category)}
                              className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-[12px] ${
                                isActive
                                  ? "bg-[#F8BC04] font-semibold text-[#171717]"
                                  : "text-[#777777] hover:bg-[#F8F8F8]"
                              }`}
                            >
                              <span>{category}</span>

                              {isActive && <span>✓</span>}
                            </button>
                          );
                        })}
                      </div>

                      {/* Mobile Secondary */}
                      <div className="border-t border-[#EEEEEE] px-2 pb-3 pt-3">
                        <p className="mb-1 px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">
                          Secondary Categories
                        </p>

                        {secondaryCategories.map((category) => {
                          const isActive = selectedCategory === category;

                          return (
                            <button
                              key={category}
                              type="button"
                              onClick={() => handleCategoryChange(category)}
                              className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-[12px] ${
                                isActive
                                  ? "bg-[#F8BC04] font-semibold text-[#171717]"
                                  : "text-[#777777] hover:bg-[#F8F8F8]"
                              }`}
                            >
                              <span>{category}</span>

                              {isActive && <span>✓</span>}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SECTION HEADING */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6"
              >
                <div>
                  <h2 className="text-[27px] font-medium leading-none tracking-[-0.04em] text-[#171717] sm:text-[32px]">
                    {selectedCategory}
                  </h2>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#999999]"
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
                    className="h-1.5 w-1.5 rounded-full bg-[#F8BC04]"
                  />

                  {filteredBlogs.length}{" "}
                  {filteredBlogs.length === 1 ? "Article" : "Articles"}
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
                    className="mb-6 flex flex-wrap items-center gap-2 overflow-hidden"
                  >
                    <span className="text-[10px] uppercase tracking-[0.12em] text-[#999999]">
                      Showing articles tagged with
                    </span>

                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="rounded-full bg-[#171717] px-3 py-1.5 text-[9px] font-semibold text-white"
                    >
                      {selectedCategory}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =====================================================
                  BLOG GRID
              ====================================================== */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {filteredBlogs.map((blog) => (
                    <motion.article
                      key={blog.id}
                      variants={cardVariants}
                      whileHover={{
                        y: -9,
                        transition: {
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1] as const,
                        },
                      }}
                      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#E9E9E9] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_28px_65px_rgba(0,0,0,0.10)]"
                    >
                      {/* IMAGE */}
                      <Link
                        href={blog.link}
                        className="relative block h-[210px] overflow-hidden bg-[#F1F1F1] sm:h-[205px] xl:h-[220px]"
                      >
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                        {/* Moving Shine */}
                        <motion.div
                          initial={{ x: "-120%" }}
                          whileHover={{ x: "120%" }}
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-y-0 w-[35%] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />

                        {/* Primary Category */}
                        <div className="absolute left-4 top-4">
                          <span className="rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[9px] font-medium text-white backdrop-blur-md">
                            {blog.primaryCategory}
                          </span>
                        </div>

                        {/* Bottom Meta */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                          <span className="text-[9px] font-medium tracking-[0.05em] text-white/90">
                            {blog.date}
                          </span>

                          <motion.span
                            whileHover={{
                              rotate: 45,
                              scale: 1.08,
                            }}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#171717] shadow-lg transition-colors duration-300 group-hover:bg-[#F8BC04]"
                          >
                            <ArrowRight
                              size={14}
                              strokeWidth={2.3}
                            />
                          </motion.span>
                        </div>
                      </Link>

                      {/* CONTENT */}
                      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-5 sm:pb-6">
                        {/* Category Tags */}
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          <motion.span
                            whileHover={{ y: -2 }}
                            className="rounded-full bg-[#FFF6D8] px-2.5 py-1 text-[8px] font-semibold text-[#A87800]"
                          >
                            {blog.primaryCategory}
                          </motion.span>

                          <motion.span
                            whileHover={{ y: -2 }}
                            className="rounded-full bg-[#F3F3F3] px-2.5 py-1 text-[8px] font-medium text-[#777777]"
                          >
                            {blog.secondaryCategory}
                          </motion.span>
                        </div>

                        {/* Title */}
                        <Link href={blog.link}>
                          <h3 className="line-clamp-3 text-[17px] font-semibold leading-[1.25] tracking-[-0.025em] text-[#171717] transition-colors duration-300 group-hover:text-[#E6AC00] sm:text-[18px]">
                            {blog.title}
                          </h3>
                        </Link>

                        {/* Description */}
                        <p className="mt-3 line-clamp-3 text-[11px] leading-[1.7] text-[#8A8A8A] sm:text-[12px]">
                          {blog.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-auto pt-5">
                          <div className="border-t border-[#EEEEEE] pt-4">
                            <Link
                              href={blog.link}
                              className="group/link inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[#171717]"
                            >
                              <span className="relative">
                                Read Article

                                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#F8BC04] transition-all duration-300 group-hover/link:w-full" />
                              </span>

                              <motion.span
                                whileHover={{
                                  scale: 1.1,
                                  rotate: 45,
                                }}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#171717] text-white transition-all duration-300 group-hover/link:bg-[#F8BC04] group-hover/link:text-[#171717]"
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

                      {/* Animated Yellow Accent */}
                      <motion.div
                        initial={{ width: "100%" }}
                        whileHover={{ height: 5 }}
                        transition={{ duration: 0.3 }}
                        className="h-[3px] w-full bg-[#F8BC04]"
                      />
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* =====================================================
                  EMPTY STATE
              ====================================================== */}

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
                  className="flex min-h-[320px] items-center justify-center rounded-[24px] border border-dashed border-[#DCDCDC] bg-white px-6"
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
                      className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F8BC04]/10"
                    >
                      <Filter
                        size={18}
                        className="text-[#F8BC04]"
                      />
                    </motion.div>

                    <p className="mt-4 text-[15px] font-semibold text-[#171717]">
                      No blogs found
                    </p>

                    <p className="mx-auto mt-2 max-w-xs text-[11px] leading-[1.6] text-[#999999]">
                      There are currently no articles available in this
                      category.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.04,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      type="button"
                      onClick={() => setSelectedCategory("All Blogs")}
                      className="mt-5 rounded-full bg-[#171717] px-5 py-2.5 text-[10px] font-semibold text-white transition-colors hover:bg-[#F8BC04] hover:text-[#171717]"
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
          BOTTOM DECORATIVE ELEMENT
      ========================================================== */}

      <div className="pointer-events-none relative flex justify-center overflow-hidden bg-white pb-8 pt-2">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{
            width: "100%",
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="h-px max-w-[1440px] bg-[#EEEEEE]"
        />
      </div>
    </main>
  );
}