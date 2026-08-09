"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GoogleAdsMetaAds() {
  const [activeTab, setActiveTab] = useState("search");

  const tabs = {
    search: {
      title: "Meta Ads",
      heading: "Get More Customers Through Search Ads",
      description:
        "Appear exactly when potential customers are searching for your products or services. Our Google Search Ads campaigns are designed to generate qualified leads, increase conversions and maximize return on ad spend.",
      image: "/assets/performancemarketing/bigbeansdigitalmetaads.png",
    },

    display: {
      title: "Google Ads",
      heading: "Build Brand Awareness At Scale",
      description:
        "Reach your ideal audience across millions of websites, apps and digital platforms. Display advertising helps businesses stay visible, build trust and drive consistent traffic through visually engaging campaigns.",
      image: "/assets/performancemarketing/bigbeansdigitalgoogleads.png",
    },

    video: {
      title: "Youtube Ads",
      heading: "Capture Attention With Video Marketing",
      description:
        "Video advertising helps brands tell compelling stories, increase engagement and generate more conversions. Reach customers across YouTube and premium video networks with highly targeted campaigns.",
      image: "/assets/performancemarketing/bigbeansdigitalyoutubeads.png",
    },
  };

  const [activeWorkTab, setActiveWorkTab] = useState("meta");

  const workTabs = {
    meta: {
      title: "Meta Ads",
      heading: "Meta Ads Campaign",
      description: "Write your description here.",
      image:
        "/assets/performancemarketing/bigbeansdigitalmetaadsresults.png",
    },

    google: {
      title: "Google Ads",
      heading: "Google Ads Campaign",
      description: "Write your description here.",
      image:
        "/assets/performancemarketing/bigbeansdigitalgoogleadsresults.png",
    },

    youtube: {
      title: "YouTube Ads",
      heading: "YouTube Ads Campaign",
      description: "Write your description here.",
      image:
        "/assets/performancemarketing/bigbeansdigitalyoutubeadsresults.png",
    },
  };

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can Google Ads help my business grow?",
      answer:
        "Google Ads connects your business with customers who are actively searching for your products or services. With the right strategy, it increases qualified traffic, generates high-quality leads, improves conversions, and delivers measurable return on investment.",
    },
    {
      question: "Should I choose Google Ads or Meta Ads?",
      answer:
        "Both platforms serve different goals. Google Ads captures users with strong buying intent, while Meta Ads helps build brand awareness, generate demand, and engage highly targeted audiences. Combining both often produces the strongest marketing results.",
    },
    {
      question: "How much should I invest in paid advertising?",
      answer:
        "There is no fixed budget for every business. We recommend a budget based on your industry, competition, objectives, and expected return. Our team creates scalable campaigns that maximize every advertising rupee.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Many campaigns begin generating clicks and leads within the first few days. Meaningful optimization and consistent performance improvements generally occur over the first 30 to 90 days depending on competition and campaign goals.",
    },
    {
      question: "Do you manage existing advertising accounts?",
      answer:
        "Yes. Whether you already have active campaigns or need a completely new setup, we audit your account, improve campaign structure, optimize targeting, reduce wasted spend, and scale profitable campaigns.",
    },
    {
      question: "Can you generate leads for local businesses?",
      answer:
        "Absolutely. We create highly targeted local advertising campaigns using geographic targeting, audience segmentation, and conversion-focused landing strategies to generate quality local enquiries.",
    },
    {
      question: "Will I receive campaign performance reports?",
      answer:
        "Yes. Every client receives transparent reporting with insights into impressions, clicks, conversions, cost per lead, return on ad spend, and continuous optimization recommendations.",
    },
    {
      question: "Do you also create ad creatives?",
      answer:
        "Yes. Our team designs high-converting ad creatives, persuasive copy, compelling visuals, and optimized landing page recommendations to improve campaign performance.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden">
      {/* =========================================================
          BREADCRUMB
      ========================================================= */}

      <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-3 text-sm shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:gap-3 sm:px-8 sm:py-4 sm:text-base">
            <Link
              href="/"
              className="shrink-0 text-gray-700 transition-colors duration-300 hover:text-[#F8BC04]"
            >
              Home
            </Link>

            <span className="shrink-0 text-[#F8BC04] text-lg">→</span>

            <span className="truncate font-semibold text-black">
              Performance Marketing
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          PERFORMANCE MARKETING RESULTS CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-white py-2 sm:py-4 lg:py-6">
        {/* BACKGROUND GLOW */}

        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-20 h-72 w-72 rounded-full bg-[#F8BC04]/10 blur-[100px] sm:-right-24 sm:h-96 sm:w-96 sm:blur-[120px]"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* BADGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#F8BC04]/30 bg-black px-4 py-2 text-xs font-semibold text-[#F8BC04] shadow-sm sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <span className="text-base">👉</span>

                <span>
                  Growing Performance Marketing Agency in London
                </span>
              </motion.div>

              {/* HEADING */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="mt-6 max-w-[680px] text-4xl font-black leading-[1.05] tracking-tight text-[#171717] sm:mt-7 sm:text-5xl lg:text-5xl xl:text-[54px]"
              >
                <span className="block">Performance</span>

                <span className="block">Marketing Agency in India</span>

                <span className="block text-[#F8BC04]">
                  Real ROI, Zero Guesswork
                </span>
              </motion.h2>

              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8"
              >
                BIGBEANS DIGITAL is a performance marketing agency in India
                that builds data-driven ad campaigns across Google, Meta,
                LinkedIn, and YouTube — delivering measurable leads, sales,
                and ROI for 1,500+ brands. We don't just run ads. We build
                profit machines.
              </motion.p>

              {/* METRIC PILLS */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {[
                  {
                    value: "5×",
                    text: "ROAS for E-commerce",
                  },
                  {
                    value: "60%",
                    text: "Higher Conversions",
                  },
                  {
                    value: "35%",
                    text: "Lower CPL",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="min-w-max rounded-xl border border-emerald-200 bg-emerald-50/60 px-3 py-2.5 text-sm sm:px-4 sm:py-3"
                  >
                    <span className="font-black text-emerald-600">
                      {item.value}
                    </span>

                    <span className="ml-2 text-xs text-[#171717]">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* STATS */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="mt-6 grid max-w-lg grid-cols-3 gap-3 sm:gap-5"
              >
                <div>
                  <div className="text-xl font-black text-[#F8BC04] sm:text-2xl">
                    ₹1Cr+
                  </div>

                  <p className="mt-1 text-[10px] text-neutral-500 sm:text-xs">
                    Ad Spend Managed
                  </p>
                </div>

                <div>
                  <div className="text-xl font-black text-[#F8BC04] sm:text-2xl">
                    1500+
                  </div>

                  <p className="mt-1 text-[10px] text-neutral-500 sm:text-xs">
                    Clients Served
                  </p>
                </div>

                <div>
                  <div className="text-xl font-black text-[#F8BC04] sm:text-2xl">
                    93K+
                  </div>

                  <p className="mt-1 text-[10px] text-neutral-500 sm:text-xs">
                    Clicks Delivered
                  </p>
                </div>
              </motion.div>

              {/* BUTTONS */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              >
                {/* GET FREE PERFORMANCE AUDIT */}

                <motion.a
                  href="#"
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                    boxShadow:
                      "0px 20px 45px rgba(248,188,4,0.30)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#F8BC04] px-6 py-3.5 font-bold text-[#171717] transition-all sm:w-auto sm:px-7 sm:py-4"
                >
                  Get Free Performance Audit

                  <span className="ml-2 text-lg">→</span>
                </motion.a>

                {/* SEE REAL RESULTS */}

                <motion.a
                  href="#recent-results"
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                    backgroundColor: "#fffaf0",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[#171717]/30 bg-white px-6 py-3.5 font-bold text-[#171717] transition-all sm:w-auto sm:px-7 sm:py-4"
                >
                  See Real Results
                </motion.a>
              </motion.div>
            </motion.div>

            {/* =====================================================
                RIGHT VISUAL
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex min-h-0 items-center justify-center lg:min-h-[560px]"
            >
              {/* RIGHT DASHBOARD CARD */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[660px] rounded-[28px] border border-slate-300 bg-[#F8FAFC] p-3 sm:rounded-[36px] sm:p-4 lg:rounded-[44px] lg:p-5"
              >
                {/* DASHBOARD HEADER */}

                <div className="flex items-center gap-2 px-1 pb-3 sm:gap-3 sm:pb-4">
                  <motion.span
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                  />

                  <span className="text-xs font-bold text-[#171717] sm:text-sm">
                    Results We Deliver
                  </span>
                </div>

                {/* ROAS CARD */}

                <motion.div
                  whileHover={{
                    scale: 1.015,
                  }}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#F8BC04] to-[#FFD83D] p-4 shadow-sm sm:rounded-2xl sm:p-6"
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.6,
                          }}
                          className="text-2xl font-black tracking-tight text-[#171717] sm:text-4xl"
                        >
                          5.2x ROAS
                        </motion.div>

                        <p className="mt-1 text-xs font-medium text-[#171717] sm:text-sm">
                          Average Client Return
                        </p>
                      </div>

                      <div className="rounded-full bg-white/70 px-2 py-1 text-[8px] font-bold text-[#171717] shadow-sm sm:px-3 sm:py-1.5 sm:text-[10px]">
                        ↗ +32% this month
                      </div>
                    </div>

                    {/* ANIMATED BAR CHART */}

                    <div className="mt-6 flex h-[65px] items-end gap-1.5 sm:mt-10 sm:h-[90px] sm:gap-2">
                      {[30, 48, 62, 57, 82, 70].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          whileInView={{
                            height: `${height}%`,
                            opacity: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          animate={{
                            scaleY: [1, 1.04, 1],
                          }}
                          className="flex-1 origin-bottom rounded-t-lg bg-white/75"
                        />
                      ))}
                    </div>
                  </div>

                  {/* CHART GLOW */}

                  <motion.div
                    animate={{
                      x: ["-100%", "150%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-20 rotate-12 bg-white/20 blur-xl"
                  />
                </motion.div>

                {/* PLATFORM CARDS */}

                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-4">
                  {/* GOOGLE ADS */}

                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-xl border border-[#F8BC04]/30 bg-[#FFF9E8] p-3 shadow-sm sm:rounded-2xl sm:p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-base shadow-sm sm:h-9 sm:w-9 sm:rounded-xl sm:text-lg">
                      🔺
                    </div>

                    <h4 className="mt-3 text-sm font-bold text-[#F8BC04] sm:mt-4 sm:text-base">
                      Google Ads
                    </h4>

                    <p className="mt-1.5 text-[10px] text-[#171717] sm:mt-2 sm:text-xs">
                      93K+ Clicks
                    </p>
                  </motion.div>

                  {/* META ADS */}

                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-xl border border-blue-200 bg-blue-50 p-3 shadow-sm sm:rounded-2xl sm:p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-base font-black text-white shadow-sm sm:h-9 sm:w-9 sm:text-lg">
                      f
                    </div>

                    <h4 className="mt-3 text-sm font-bold text-[#1877F2] sm:mt-4 sm:text-base">
                      Meta Ads
                    </h4>

                    <p className="mt-1.5 text-[10px] text-[#171717] sm:mt-2 sm:text-xs">
                      2.5M Reach
                    </p>
                  </motion.div>
                </div>

                {/* PERFORMANCE METRICS */}

                <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                  {[
                    {
                      value: "35%",
                      label: "Lower CPL",
                    },
                    {
                      value: "60%",
                      label: "Higher Conversion",
                    },
                    {
                      value: "150+",
                      label: "Brands Scaled",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-3 text-center sm:rounded-xl sm:px-3 sm:py-4"
                    >
                      <div className="text-base font-black text-[#171717] sm:text-xl">
                        {item.value}
                      </div>

                      <p className="mt-1 text-[8px] text-slate-500 sm:mt-2 sm:text-[10px]">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR PROCESS
      ========================================================= */}

      <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center sm:mb-10"
          >
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#fff7dc] px-5 py-2 sm:px-6">
              <span className="text-xs font-bold tracking-wide text-[#b98200]">
                OUR PROCESS
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight text-[#0b102b] sm:text-4xl md:text-5xl">
              How We Deliver Results
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#52617d] sm:text-base md:text-lg">
              A proven 4-step methodology that turns ad spend into predictable
              revenue.
            </p>
          </motion.div>

          {/* PROCESS */}

          <div className="relative mx-auto max-w-6xl">
            {/* DESKTOP CONNECTING LINE */}

            <div className="absolute left-[8%] right-[8%] top-[46px] hidden h-[2px] bg-[#d8deea] md:block">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.8,
                  delay: 0.8,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-0 h-full bg-[#F8BC04]"
              />
            </div>

            {/* MOBILE HORIZONTAL PROCESS */}

            <div
              className="
                -mx-4
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                px-4
                pb-5
                scrollbar-hide
                sm:-mx-6
                sm:gap-5
                sm:px-6
                md:mx-0
                md:grid
                md:grid-cols-4
                md:gap-5
                md:overflow-visible
                md:px-0
                md:pb-0
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* STEP 1 */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="min-w-[78vw] snap-center text-center sm:min-w-[60vw] md:min-w-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="relative mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full border-2 border-[#ffe8a0] bg-white sm:h-[70px] sm:w-[70px]"
                >
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F8BC04] shadow-[0_8px_20px_rgba(248,188,4,0.18)] sm:h-[56px] sm:w-[56px]">
                    <span className="text-2xl font-black text-[#0b102b] sm:text-3xl">
                      1
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7,
                  }}
                  className="mx-auto mt-4 flex h-[66px] w-[66px] items-center justify-center rounded-[18px] bg-[#fff9e9] sm:mt-5 sm:h-[72px] sm:w-[72px]"
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle
                      cx="21"
                      cy="21"
                      r="14"
                      stroke="#0b102b"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M31 31L42 42"
                      stroke="#0b102b"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <rect
                      x="14"
                      y="27"
                      width="4"
                      height="5"
                      rx="1"
                      fill="#F8BC04"
                    />

                    <rect
                      x="20"
                      y="23"
                      width="4"
                      height="9"
                      rx="1"
                      fill="#F8BC04"
                    />

                    <rect
                      x="26"
                      y="19"
                      width="4"
                      height="13"
                      rx="1"
                      fill="#F8BC04"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                  }}
                  className="mt-4"
                >
                  <h3 className="text-lg font-black text-[#0b102b] md:text-xl">
                    Research & Strategy
                  </h3>

                  <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-[#52617d] md:text-base">
                    Deep dive into your business, audience, and competitors to
                    craft a winning strategy
                  </p>
                </motion.div>
              </motion.div>

              {/* STEP 2 */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 1.1,
                }}
                className="min-w-[78vw] snap-center text-center sm:min-w-[60vw] md:min-w-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="relative mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full border-2 border-[#ffe8a0] bg-white sm:h-[70px] sm:w-[70px]"
                >
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F8BC04] shadow-[0_8px_20px_rgba(248,188,4,0.18)] sm:h-[56px] sm:w-[56px]">
                    <span className="text-2xl font-black text-[#0b102b] sm:text-3xl">
                      2
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 1.6,
                  }}
                  className="mx-auto mt-4 flex h-[66px] w-[66px] items-center justify-center rounded-[18px] bg-[#fff9e9] sm:mt-5 sm:h-[72px] sm:w-[72px]"
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="15"
                      stroke="#0b102b"
                      strokeWidth="2.5"
                    />

                    <circle
                      cx="24"
                      cy="24"
                      r="8"
                      stroke="#F8BC04"
                      strokeWidth="3"
                    />

                    <path
                      d="M24 24L37 11"
                      stroke="#0b102b"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <path
                      d="M35 11H40V16"
                      stroke="#0b102b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 1.8,
                  }}
                  className="mt-4"
                >
                  <h3 className="text-lg font-black text-[#0b102b] md:text-xl">
                    Campaign Setup
                  </h3>

                  <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-[#52617d] md:text-base">
                    Build campaigns with precise targeting, compelling
                    creatives, and conversion tracking
                  </p>
                </motion.div>
              </motion.div>

              {/* STEP 3 */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 2,
                }}
                className="min-w-[78vw] snap-center text-center sm:min-w-[60vw] md:min-w-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 2.1,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="relative mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full border-2 border-[#ffe8a0] bg-white sm:h-[70px] sm:w-[70px]"
                >
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F8BC04] shadow-[0_8px_20px_rgba(248,188,4,0.18)] sm:h-[56px] sm:w-[56px]">
                    <span className="text-2xl font-black text-[#0b102b] sm:text-3xl">
                      3
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 2.5,
                  }}
                  className="mx-auto mt-4 flex h-[66px] w-[66px] items-center justify-center rounded-[18px] bg-[#fff9e9] sm:mt-5 sm:h-[72px] sm:w-[72px]"
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M11 27C15 19 22 14 34 13C35 24 30 32 21 37L17 31L11 27Z"
                      stroke="#0b102b"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="28"
                      cy="21"
                      r="3"
                      stroke="#0b102b"
                      strokeWidth="2"
                    />

                    <path
                      d="M17 31L12 39"
                      stroke="#F8BC04"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M21 36L17 42"
                      stroke="#F8BC04"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 2.7,
                  }}
                  className="mt-4"
                >
                  <h3 className="text-lg font-black text-[#0b102b] md:text-xl">
                    Launch & Optimize
                  </h3>

                  <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-[#52617d] md:text-base">
                    Go live and continuously optimize based on real-time
                    performance data
                  </p>
                </motion.div>
              </motion.div>

              {/* STEP 4 */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 2.9,
                }}
                className="min-w-[78vw] snap-center text-center sm:min-w-[60vw] md:min-w-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 3,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="relative mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full border-2 border-[#ffe8a0] bg-white sm:h-[70px] sm:w-[70px]"
                >
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F8BC04] shadow-[0_8px_20px_rgba(248,188,4,0.18)] sm:h-[56px] sm:w-[56px]">
                    <span className="text-2xl font-black text-[#0b102b] sm:text-3xl">
                      4
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 3.4,
                  }}
                  className="mx-auto mt-4 flex h-[66px] w-[66px] items-center justify-center rounded-[18px] bg-[#fff9e9] sm:mt-5 sm:h-[72px] sm:w-[72px]"
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M9 36L19 27L26 32L39 16"
                      stroke="#F8BC04"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M34 16H39V21"
                      stroke="#F8BC04"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <rect
                      x="11"
                      y="34"
                      width="6"
                      height="7"
                      rx="1"
                      stroke="#0b102b"
                      strokeWidth="2"
                    />

                    <rect
                      x="21"
                      y="29"
                      width="6"
                      height="12"
                      rx="1"
                      stroke="#0b102b"
                      strokeWidth="2"
                    />

                    <rect
                      x="31"
                      y="23"
                      width="6"
                      height="18"
                      rx="1"
                      stroke="#0b102b"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 3.6,
                  }}
                  className="mt-4"
                >
                  <h3 className="text-lg font-black text-[#0b102b] md:text-xl">
                    Scale & Report
                  </h3>

                  <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-[#52617d] md:text-base">
                    Scale what works, pause what doesn’t, and deliver
                    transparent weekly reports
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* MOBILE INDICATOR */}

            <div className="mt-1 flex justify-center gap-1.5 md:hidden">
              <span className="h-1.5 w-6 rounded-full bg-[#F8BC04]" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR RECENT WORK
      ========================================================= */}

      <section id="recent-results" className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-16 lg:mb-20">
            <h2 className="text-4xl font-black leading-tight text-[#171717] sm:text-5xl">
              Our Recent
              <span className="text-[#F8BC04]"> Result Driven</span> Work
            </h2>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* CONTENT SIDE */}

            <div>
              {/* TABS */}

              <div
                className="-mx-4 mb-7 flex overflow-x-auto border-b-2 border-[#F8BC04] px-4 scrollbar-hide sm:mx-0 sm:mb-10 sm:px-0"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {Object.entries(workTabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveWorkTab(key)}
                    className={`min-w-max px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 sm:py-4 sm:text-base ${
                      activeWorkTab === key
                        ? "bg-[#F8BC04] text-[#171717]"
                        : "text-[#171717] hover:bg-[#fff5cc]"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkTab}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <h4 className="mb-5 text-3xl font-black text-[#171717] sm:mb-6 sm:text-4xl">
                    {
                      workTabs[activeWorkTab as keyof typeof workTabs]
                        .heading
                    }
                  </h4>

                  <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                    {
                      workTabs[activeWorkTab as keyof typeof workTabs]
                        .description
                    }
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* IMAGE SIDE */}

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkTab}
                  initial={{
                    opacity: 0,
                    x: 80,
                    rotate: 5,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -80,
                    rotate: -5,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="relative overflow-hidden rounded-[25px] shadow-2xl sm:rounded-[35px]"
                >
                  <Image
                    src={
                      workTabs[activeWorkTab as keyof typeof workTabs].image
                    }
                    alt=""
                    width={800}
                    height={600}
                    className="h-auto w-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PERFORMANCE MARKETING
      ========================================================= */}

      <section className="relative overflow-hidden bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[42%_58%] lg:gap-8">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pr-0 lg:pr-4"
            >
              <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-[#171717] sm:text-[34px]">
                Performance Marketing
                <br />
                That{" "}
                <span className="text-[#F8BC04]">Clicks Into</span>
                <br />
                Customers
              </h2>

              <p className="mt-4 max-w-[500px] text-[15px] leading-6 text-[#52617d]">
                Our performance marketing strategies are built to attract
                high-intent customers, reduce wasted ad spend and generate
                measurable business growth through Google Ads, Meta Ads and
                conversion focused PPC campaigns.
              </p>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-5 rounded-full bg-[#F8BC04] px-6 py-3 text-sm font-bold text-[#171717] shadow-[0_8px_20px_rgba(248,188,4,0.18)] transition-all sm:px-7"
              >
                Get Free Strategy Call →
              </motion.button>
            </motion.div>

            {/* RIGHT CONTENT */}

            <div
              className="
                -mx-4
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                px-4
                pb-5
                scrollbar-hide
                sm:-mx-6
                sm:gap-5
                sm:px-6
                lg:mx-0
                lg:grid
                lg:gap-4
                lg:overflow-visible
                lg:px-0
                lg:pb-0
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* CARD 01 */}

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                }}
                className="relative min-w-[86vw] snap-center sm:min-w-[70vw] lg:min-w-0"
              >
                {/* CHECK */}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[15px] bg-[#F8BC04] shadow-[0_10px_20px_rgba(0,0,0,0.12)] sm:h-[62px] sm:w-[62px] sm:rounded-[18px]"
                >
                  <span className="text-[26px] font-light leading-none text-white sm:text-[32px]">
                    ✓
                  </span>
                </motion.div>

                {/* CARD */}

                <div className="relative ml-8 min-h-[110px] w-[calc(100%-32px)] overflow-hidden rounded-[22px] bg-white px-5 py-5 pl-8 shadow-[0_12px_28px_rgba(0,0,0,0.12)] sm:ml-[46px] sm:min-h-[118px] sm:w-[calc(100%-46px)] sm:rounded-[25px] sm:px-7 sm:py-5 sm:pl-8">
                  <span className="pointer-events-none absolute bottom-[-5px] right-4 text-[60px] font-black leading-none text-[#fff1c7] sm:right-5 sm:text-[78px]">
                    01
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-xl font-black leading-tight text-[#171717] sm:text-[27px]">
                      ROI Focused Campaign
                    </h3>

                    <p className="mt-1 max-w-[520px] text-[13px] leading-5 text-[#52617d] sm:text-[14px]">
                      Every campaign is optimized around leads, sales and
                      business growth instead of vanity metrics.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CARD 02 */}

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                }}
                className="relative min-w-[86vw] snap-center sm:min-w-[70vw] lg:min-w-0"
              >
                {/* CHECK */}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[15px] bg-[#F8BC04] shadow-[0_10px_20px_rgba(0,0,0,0.12)] sm:h-[62px] sm:w-[62px] sm:rounded-[18px]"
                >
                  <span className="text-[26px] font-light leading-none text-white sm:text-[32px]">
                    ✓
                  </span>
                </motion.div>

                {/* CARD */}

                <div className="relative ml-8 min-h-[110px] w-[calc(100%-32px)] overflow-hidden rounded-[22px] bg-white px-5 py-5 pl-8 shadow-[0_12px_28px_rgba(0,0,0,0.12)] sm:ml-[46px] sm:min-h-[118px] sm:w-[calc(100%-46px)] sm:rounded-[25px] sm:px-7 sm:py-5 sm:pl-8">
                  <span className="pointer-events-none absolute bottom-[-5px] right-4 text-[60px] font-black leading-none text-[#fff1c7] sm:right-5 sm:text-[78px]">
                    02
                  </span>

                  <div className="relative z-10">
                    <h3 className="max-w-[480px] text-xl font-black leading-[1.05] text-[#171717] sm:text-[27px]">
                      Google & Meta Certified Experts
                    </h3>

                    <p className="mt-1 max-w-[520px] text-[13px] leading-5 text-[#52617d] sm:text-[14px]">
                      Our specialists continuously optimize targeting, bidding
                      and ad creatives for better results.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CARD 03 */}

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                }}
                className="relative min-w-[86vw] snap-center sm:min-w-[70vw] lg:min-w-0"
              >
                {/* CHECK */}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.65,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[15px] bg-[#F8BC04] shadow-[0_10px_20px_rgba(0,0,0,0.12)] sm:h-[62px] sm:w-[62px] sm:rounded-[18px]"
                >
                  <span className="text-[26px] font-light leading-none text-white sm:text-[32px]">
                    ✓
                  </span>
                </motion.div>

                {/* CARD */}

                <div className="relative ml-8 min-h-[110px] w-[calc(100%-32px)] overflow-hidden rounded-[22px] bg-white px-5 py-5 pl-8 shadow-[0_12px_28px_rgba(0,0,0,0.12)] sm:ml-[46px] sm:min-h-[118px] sm:w-[calc(100%-46px)] sm:rounded-[25px] sm:px-7 sm:py-5 sm:pl-8">
                  <span className="pointer-events-none absolute bottom-[-5px] right-4 text-[60px] font-black leading-none text-[#fff1c7] sm:right-5 sm:text-[78px]">
                    03
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-xl font-black leading-tight text-[#171717] sm:text-[27px]">
                      Transparent Reporting
                    </h3>

                    <p className="mt-1 max-w-[520px] text-[13px] leading-5 text-[#52617d] sm:text-[14px]">
                      Track every click, lead and conversion with detailed
                      reporting and clear performance insights.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* MOBILE INDICATOR */}

            <div className="mt-1 flex justify-center gap-1.5 lg:hidden">
              <span className="h-1.5 w-6 rounded-full bg-[#F8BC04]" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADS SOLUTIONS
      ========================================================= */}

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-14 lg:mb-20">
            <h2 className="text-4xl font-black leading-tight text-[#171717] sm:text-5xl">
              Ads Solutions That
              <span className="text-[#F8BC04]"> Drive Results</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:mt-8 sm:text-lg">
              From search advertising to display campaigns and video marketing,
              we create high-performing PPC strategies that generate leads,
              increase sales and grow your business.
            </p>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* IMAGE SIDE */}

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{
                    opacity: 0,
                    x: -80,
                    rotate: -5,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 80,
                    rotate: 5,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="relative overflow-hidden rounded-[25px] sm:rounded-[35px]"
                >
                  <Image
                    src={tabs[activeTab as keyof typeof tabs].image}
                    alt=""
                    width={800}
                    height={600}
                    className="h-auto w-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CONTENT SIDE */}

            <div>
              {/* TABS */}

              <div
                className="-mx-4 mb-7 flex overflow-x-auto border-b-2 border-[#F8BC04] px-4 scrollbar-hide sm:mx-0 sm:mb-10 sm:px-0"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {Object.entries(tabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`min-w-max px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 sm:py-4 sm:text-base ${
                      activeTab === key
                        ? "bg-[#F8BC04] text-[#171717]"
                        : "text-[#171717] hover:bg-[#fff5cc]"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <h4 className="mb-5 text-3xl font-black text-[#171717] sm:mb-6 sm:text-4xl">
                    {tabs[activeTab as keyof typeof tabs].heading}
                  </h4>

                  <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                    {tabs[activeTab as keyof typeof tabs].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE BIGBEANS DIGITAL
      ========================================================= */}

      <section className="overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center sm:mb-14 lg:mb-20"
          >
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#171717] sm:text-4xl md:text-5xl">
              Why Brands Choose
              <span className="text-[#F8BC04]"> BIGBEANS DIGITAL</span>
            </h2>

            <p className="mx-auto mt-3 max-w-5xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Performance marketing strategies designed to maximize ROI,
              generate qualified leads and deliver measurable business growth.
            </p>
          </motion.div>

          {/* MOBILE HORIZONTAL / DESKTOP GRID */}

          <div
            className="
              -mx-4
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              px-4
              pb-5
              scrollbar-hide
              sm:-mx-6
              sm:gap-5
              sm:px-6
              lg:mx-0
              lg:grid
              lg:grid-cols-3
              lg:gap-x-12
              lg:gap-y-10
              lg:overflow-visible
              lg:px-0
              lg:pb-0
              xl:gap-x-16
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* 01 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="min-w-[84vw] snap-center rounded-[25px] border border-gray-100 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:min-w-[65vw] sm:p-6 lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="flex gap-4 sm:gap-5">
                <div className="text-6xl font-black leading-none text-[#F8BC04] sm:text-7xl">
                  1
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#171717] sm:text-3xl">
                    ROI Focused
                  </h3>

                  <p className="mt-3 text-base leading-6 text-neutral-600 sm:text-lg">
                    Every advertising campaign is built to maximize return on
                    investment by focusing on qualified leads, sales and
                    measurable business growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 02 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="min-w-[84vw] snap-center rounded-[25px] border border-gray-100 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:min-w-[65vw] sm:p-6 lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="flex gap-4 sm:gap-5">
                <div className="text-6xl font-black leading-none text-[#F8BC04] sm:text-7xl">
                  2
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#171717] sm:text-3xl">
                    ROI Focused
                  </h3>

                  <p className="mt-3 text-base leading-6 text-neutral-600 sm:text-lg">
                    Every advertising campaign is built to maximize return on
                    investment by focusing on qualified leads, sales and
                    measurable business growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 03 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="min-w-[84vw] snap-center rounded-[25px] border border-gray-100 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:min-w-[65vw] sm:p-6 lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="flex gap-4 sm:gap-5">
                <div className="text-6xl font-black leading-none text-[#F8BC04] sm:text-7xl">
                  3
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#171717] sm:text-3xl">
                    ROI Focused
                  </h3>

                  <p className="mt-3 text-base leading-6 text-neutral-600 sm:text-lg">
                    Every advertising campaign is built to maximize return on
                    investment by focusing on qualified leads, sales and
                    measurable business growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 04 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="min-w-[84vw] snap-center rounded-[25px] border border-gray-100 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:min-w-[65vw] sm:p-6 lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="flex gap-4 sm:gap-5">
                <div className="text-6xl font-black leading-none text-[#F8BC04] sm:text-7xl">
                  4
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#171717] sm:text-3xl">
                    ROI Focused
                  </h3>

                  <p className="mt-3 text-base leading-6 text-neutral-600 sm:text-lg">
                    Every advertising campaign is built to maximize return on
                    investment by focusing on qualified leads, sales and
                    measurable business growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 05 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="min-w-[84vw] snap-center rounded-[25px] border border-gray-100 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:min-w-[65vw] sm:p-6 lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="flex gap-4 sm:gap-5">
                <div className="text-6xl font-black leading-none text-[#F8BC04] sm:text-7xl">
                  5
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#171717] sm:text-3xl">
                    ROI Focused
                  </h3>

                  <p className="mt-3 text-base leading-6 text-neutral-600 sm:text-lg">
                    Every advertising campaign is built to maximize return on
                    investment by focusing on qualified leads, sales and
                    measurable business growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 06 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -8 }}
              className="min-w-[84vw] snap-center rounded-[25px] border border-gray-100 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:min-w-[65vw] sm:p-6 lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="flex gap-4 sm:gap-5">
                <div className="text-6xl font-black leading-none text-[#F8BC04] sm:text-7xl">
                  6
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#171717] sm:text-3xl">
                    ROI Focused
                  </h3>

                  <p className="mt-3 text-base leading-6 text-neutral-600 sm:text-lg">
                    Every advertising campaign is built to maximize return on
                    investment by focusing on qualified leads, sales and
                    measurable business growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* MOBILE INDICATOR */}

          <div className="mt-1 flex justify-center gap-1.5 lg:hidden">
            <span className="h-1.5 w-6 rounded-full bg-[#F8BC04]" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#ffffff] py-12 sm:py-16 lg:py-24">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-20 h-36 w-36 -translate-x-1/2 rounded-full bg-[#F8BC04]/10 blur-3xl sm:top-28 sm:h-48 sm:w-48"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center sm:mb-16 lg:mb-20"
          >
            <h2 className="mx-auto mt-4 max-w-6xl text-3xl font-black leading-tight text-[#171717] sm:text-4xl md:text-6xl">
              Everything You Need To Know About
              <span className="text-[#F8BC04]">
                {" "}
                Google Ads & Meta Ads
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-neutral-600 sm:mt-8 sm:text-lg sm:leading-8">
              Find answers to the most common questions about Google Ads, Meta
              Ads, campaign management, lead generation, ROI, budgeting, and
              digital advertising strategies.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="overflow-hidden rounded-[22px] border border-[#ececec] bg-white shadow-lg sm:rounded-[28px]"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-3 px-4 py-5 text-left sm:px-6 sm:py-6 lg:px-8 lg:py-7"
                >
                  <h3 className="pr-2 text-sm font-bold leading-6 text-[#171717] sm:pr-4 sm:text-base lg:pr-8 lg:text-lg">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: openFaq === index ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-lg font-bold text-[#171717] sm:h-10 sm:w-10 sm:text-xl lg:h-12 lg:w-12"
                  >
                    +
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#f3f3f3] px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5 lg:px-8 lg:pb-8 lg:pt-6">
                    <p className="text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRESENCE SECTION
      ========================================================= */}

      <section className="bg-[#ffffff] py-8 sm:py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid items-center gap-8 rounded-[28px] border border-gray-200 bg-white p-5 sm:gap-10 sm:rounded-[40px] sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-16">
            {/* LEFT */}

            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-gray-500 sm:mb-6 sm:tracking-[6px]">
                Global Presence
              </p>

              <h2 className="text-4xl font-black leading-tight text-[#171717] sm:text-5xl lg:text-6xl">
                Digital Excellence in{" "}
                <span className="text-[#F8BC04]">12+</span>
                <br />
                Locations
              </h2>

              <p className="mt-6 max-w-[650px] text-base leading-relaxed text-gray-600 sm:mt-8 sm:text-lg">
                BIGBEANS DIGITAL serves businesses across India and
                international markets. Our strategies are built for local
                relevance and global scalability.
              </p>

              {/* LOCATIONS */}

              <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-12 sm:gap-10">
                <div className="border-r border-black/30 pr-4 sm:pr-10">
                  <h3 className="text-lg font-bold sm:text-xl">In India</h3>

                  <div className="mb-5 mt-2 h-[2px] w-16 bg-[#F8BC04] sm:w-20" />

                  <ul className="space-y-3 text-sm text-gray-700 sm:text-base">
                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Kolkata
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Delhi
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Bangalore
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Noida
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Tripura
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Mumbai
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Pune
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold sm:text-xl">
                    International Presence
                  </h3>

                  <div className="mb-5 mt-2 h-[2px] w-16 bg-[#F8BC04] sm:w-20" />

                  <ul className="space-y-3 text-sm text-gray-700 sm:text-base">
                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      London
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Singapore
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Canada
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Australia
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="text-[#F8BC04]">●</span>
                      Nigeria
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative min-w-0">
              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="h-auto w-full"
              />

              {/* INDIA CLUSTER */}

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute left-[67%] top-[42%] h-3 w-3 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* LONDON */}

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                }}
                className="absolute left-[44%] top-[27%] h-3 w-3 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* CANADA */}

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                }}
                className="absolute left-[18%] top-[28%] h-3 w-3 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* NIGERIA */}

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                }}
                className="absolute left-[47%] top-[50%] h-3 w-3 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* SINGAPORE */}

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                }}
                className="absolute left-[74%] top-[54%] h-3 w-3 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* AUSTRALIA */}

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute left-[84%] top-[65%] h-3 w-3 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04] sm:h-4 sm:w-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#ffffff] py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#171717] px-5 py-10 sm:rounded-[40px] sm:px-8 sm:py-14 md:px-16 md:py-16">
            {/* Glow */}

            <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-[#F8BC04]/20 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

            <div className="relative z-10 flex flex-col items-stretch justify-between gap-8 lg:flex-row lg:items-center lg:gap-10">
              {/* Left */}

              <div>
                <h2 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                  Ready To Turn Clicks Into
                  <span className="text-[#F8BC04]">
                    {" "}
                    Real Business Growth?
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
                  Partner with BIGBEANS DIGITAL to launch data-driven Social
                  Media Marketing campaigns that generate quality leads,
                  increase conversions and accelerate your business growth.
                </p>
              </div>

              {/* Button */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "#FFD54A",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="w-full shrink-0 whitespace-nowrap rounded-full bg-[#F8BC04] px-7 py-4 text-base font-bold text-[#171717] shadow-[0_20px_50px_rgba(248,188,4,0.35)] transition-all duration-300 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                Book Free Strategy Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}