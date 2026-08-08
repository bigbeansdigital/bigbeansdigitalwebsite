"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  TrendingUp,
  Target,
} from "lucide-react";


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
    description:
      "Write your description here.",
    image: "/assets/performancemarketing/bigbeansdigitalmetaadsresults.png",
  },

  google: {
    title: "Google Ads",
    heading: "Google Ads Campaign",
    description:
      "Write your description here.",
    image: "/assets/performancemarketing/bigbeansdigitalgoogleadsresults.png",
  },

  youtube: {
    title: "YouTube Ads",
    heading: "YouTube Ads Campaign",
    description:
      "Write your description here.",
    image: "/assets/performancemarketing/bigbeansdigitalyoutubeadsresults.png",
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
    <main>

    {/* Breadcrumb */}
<section className="w-full bg-white py-10">
  <div className="max-w-7xl mx-auto px-6 flex justify-center">
    <div className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <Link
        href="/"
        className="text-gray-700 hover:text-[#F8BC04] transition-colors duration-300"
      >
        Home
      </Link>

      <span className="text-[#F8BC04] text-lg">→</span>

      <span className="font-semibold text-black">
        Performance Marketing
      </span>
    </div>
  </div>
</section>


{/* =========================
    PERFORMANCE MARKETING RESULTS CTA
========================= */}

<section className="relative overflow-visible bg-white py-1 lg:py-1">

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
    className="
      pointer-events-none
      absolute
      right-[-100px]
      top-20
      h-96
      w-96
      rounded-full
      bg-[#F8BC04]/10
      blur-[120px]
    "
  />

  <div className="container mx-auto px-6 lg:px-10">

    <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">

      {/* =========================
          LEFT CONTENT
      ========================= */}

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
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#F8BC04]/30
            bg-black
            px-5
            py-2.5
            text-sm
            font-semibold
            text-[#F8BC04]
            shadow-sm
          "
        >

          <span className="text-base">
           👉
          </span>

          Growing Performance Marketing Agency in London

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
  className="
    mt-7
    max-w-[680px]
    text-4xl
    font-black
    leading-[1.05]
    tracking-tight
    text-[#171717]
    sm:text-5xl
    lg:text-5xl
  "
>
  <span className="block">
    Performance
  </span>

  <span className="block">
    Marketing Agency in India
  </span>

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
          className="
            mt-6
            max-w-xl
            text-base
            leading-7
            text-neutral-600
            lg:text-lg
            lg:leading-8
          "
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
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
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
              className="
                rounded-xl
                border
                border-emerald-200
                bg-emerald-50/60
                px-4
                py-3
                text-sm
              "
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
          className="
            mt-6
            grid
            grid-cols-3
            gap-5
            max-w-lg
          "
        >

          <div>

            <div className="text-2xl font-black text-[#F8BC04]">
              ₹1Cr+
            </div>

            <p className="mt-1 text-xs text-neutral-500">
              Ad Spend Managed
            </p>

          </div>

          <div>

            <div className="text-2xl font-black text-[#F8BC04]">
              1500+
            </div>

            <p className="mt-1 text-xs text-neutral-500">
              Clients Served
            </p>

          </div>

          <div>

            <div className="text-2xl font-black text-[#F8BC04]">
              93K+
            </div>

            <p className="mt-1 text-xs text-neutral-500">
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
          className="
            mt-7
            flex
            flex-wrap
            gap-4
          "
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
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-[#F8BC04]
              px-7
              py-4
              font-bold
              text-[#171717]
              transition-all
            "
          >

            Get Free Performance Audit

            <span className="ml-2 text-lg">
              →
            </span>

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
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              border-[#171717]/30
              bg-white
              px-7
              py-4
              font-bold
              text-[#171717]
              transition-all
            "
          >

            See Real Results

          </motion.a>

        </motion.div>

      </motion.div>

      {/* =========================
          RIGHT VISUAL
      ========================= */}

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
        className="
          relative
          flex
          min-h-[560px]
          items-center
          justify-center
        "
      >

        {/* CONTINUE IN PART 2 */}
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
          className="
            relative
            w-full
            max-w-[660px]
            rounded-[44px]
            border
            border-slate-300
            bg-[#F8FAFC]
            p-5
            
          "
        >

          {/* DASHBOARD HEADER */}

          <div className="flex items-center gap-3 px-1 pb-4">

            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-500
              "
            />

            <span className="text-sm font-bold text-[#171717]">
              Results We Deliver
            </span>

          </div>


          {/* ROAS CARD */}

          <motion.div
            whileHover={{
              scale: 1.015,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-gradient-to-br
              from-[#F8BC04]
              to-[#FFD83D]
              p-6
              shadow-sm
            "
          >

            <div className="relative z-10">

              <div className="flex items-start justify-between">

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
                    className="
                      text-4xl
                      font-black
                      tracking-tight
                      text-[#171717]
                    "
                  >
                    5.2x ROAS
                  </motion.div>

                  <p className="mt-1 text-sm font-medium text-[#171717]">
                    Average Client Return
                  </p>

                </div>

                <div
                  className="
                    rounded-full
                    bg-white/70
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-[#171717]
                    shadow-sm
                  "
                >
                  ↗ +32% this month
                </div>

              </div>

              {/* ANIMATED BAR CHART */}

              <div className="mt-10 flex h-[90px] items-end gap-2">

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
                    className="
                      flex-1
                      origin-bottom
                      rounded-t-lg
                      bg-white/75
                    "
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
              className="
                pointer-events-none
                absolute
                inset-y-0
                w-20
                rotate-12
                bg-white/20
                blur-xl
              "
            />

          </motion.div>


          {/* PLATFORM CARDS */}

          <div className="mt-4 grid grid-cols-2 gap-4">

            {/* GOOGLE ADS */}

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                rounded-2xl
                border
                border-[#F8BC04]/30
                bg-[#FFF9E8]
                p-4
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  text-lg
                  shadow-sm
                "
              >
                🔺
              </div>

              <h4 className="mt-4 text-base font-bold text-[#F8BC04]">
                Google Ads
              </h4>

              <p className="mt-2 text-xs text-[#171717]">
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
              className="
                rounded-2xl
                border
                border-blue-200
                bg-blue-50
                p-4
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1877F2]
                  text-lg
                  font-black
                  text-white
                  shadow-sm
                "
              >
                f
              </div>

              <h4 className="mt-4 text-base font-bold text-[#1877F2]">
                Meta Ads
              </h4>

              <p className="mt-2 text-xs text-[#171717]">
                2.5M Reach
              </p>

            </motion.div>

          </div>


          {/* PERFORMANCE METRICS */}

          <div className="mt-4 grid grid-cols-3 gap-3">

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
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-3
                  py-4
                  text-center
                "
              >

                <div className="text-xl font-black text-[#171717]">
                  {item.value}
                </div>

                <p className="mt-2 text-[10px] text-slate-500">
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

{/* =========================
    END PERFORMANCE MARKETING RESULTS CTA
========================= */}


{/* =========================
    OUR PROCESS
========================= */}

<section className="relative bg-white py-8 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >

      <div className="inline-flex items-center justify-center rounded-full bg-[#fff7dc] px-6 py-2 mb-4">
        <span className="text-[#b98200] text-xs font-bold tracking-wide">
          OUR PROCESS
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-[#0b102b] leading-tight">
        How We Deliver Results
      </h2>

      <p className="mt-3 text-base md:text-lg text-[#52617d]">
        A proven 4-step methodology that turns ad spend into predictable revenue.
      </p>

    </motion.div>


    {/* PROCESS */}

    <div className="relative max-w-6xl mx-auto">

      {/* DESKTOP CONNECTING LINE */}

      <div className="hidden md:block absolute top-[46px] left-[8%] right-[8%] h-[2px] bg-[#d8deea]">

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


      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5 relative">

        {/* =========================
            STEP 1
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="text-center relative"
        >

          {/* NUMBER */}

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
            className="relative mx-auto w-[70px] h-[70px] rounded-full border-2 border-[#ffe8a0] flex items-center justify-center bg-white z-10"
          >

            <div className="w-[56px] h-[56px] rounded-full bg-[#F8BC04] flex items-center justify-center shadow-[0_8px_20px_rgba(248,188,4,0.18)]">

              <span className="text-[#0b102b] text-3xl font-black">
                1
              </span>

            </div>

          </motion.div>


          {/* ICON */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
            className="mx-auto mt-5 w-[72px] h-[72px] rounded-[18px] bg-[#fff9e9] flex items-center justify-center"
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


          {/* CONTENT */}

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

            <h3 className="text-lg md:text-xl font-black text-[#0b102b]">
              Research & Strategy
            </h3>

            <p className="mt-2 text-sm md:text-base leading-6 text-[#52617d] max-w-[250px] mx-auto">
              Deep dive into your business, audience, and competitors to craft a winning strategy
            </p>

          </motion.div>

        </motion.div>


        {/* =========================
            STEP 2
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 1.1,
          }}
          className="text-center relative"
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
            className="relative mx-auto w-[70px] h-[70px] rounded-full border-2 border-[#ffe8a0] flex items-center justify-center bg-white z-10"
          >

            <div className="w-[56px] h-[56px] rounded-full bg-[#F8BC04] flex items-center justify-center shadow-[0_8px_20px_rgba(248,188,4,0.18)]">

              <span className="text-[#0b102b] text-3xl font-black">
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
            className="mx-auto mt-5 w-[72px] h-[72px] rounded-[18px] bg-[#fff9e9] flex items-center justify-center"
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

            <h3 className="text-lg md:text-xl font-black text-[#0b102b]">
              Campaign Setup
            </h3>

            <p className="mt-2 text-sm md:text-base leading-6 text-[#52617d] max-w-[250px] mx-auto">
              Build campaigns with precise targeting, compelling creatives, and conversion tracking
            </p>

          </motion.div>

        </motion.div>


        {/* =========================
            STEP 3
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          className="text-center relative"
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
            className="relative mx-auto w-[70px] h-[70px] rounded-full border-2 border-[#ffe8a0] flex items-center justify-center bg-white z-10"
          >

            <div className="w-[56px] h-[56px] rounded-full bg-[#F8BC04] flex items-center justify-center shadow-[0_8px_20px_rgba(248,188,4,0.18)]">

              <span className="text-[#0b102b] text-3xl font-black">
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
            className="mx-auto mt-5 w-[72px] h-[72px] rounded-[18px] bg-[#fff9e9] flex items-center justify-center"
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

            <h3 className="text-lg md:text-xl font-black text-[#0b102b]">
              Launch & Optimize
            </h3>

            <p className="mt-2 text-sm md:text-base leading-6 text-[#52617d] max-w-[250px] mx-auto">
              Go live and continuously optimize based on real-time performance data
            </p>

          </motion.div>

        </motion.div>


        {/* =========================
            STEP 4
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 2.9,
          }}
          className="text-center relative"
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
            className="relative mx-auto w-[70px] h-[70px] rounded-full border-2 border-[#ffe8a0] flex items-center justify-center bg-white z-10"
          >

            <div className="w-[56px] h-[56px] rounded-full bg-[#F8BC04] flex items-center justify-center shadow-[0_8px_20px_rgba(248,188,4,0.18)]">

              <span className="text-[#0b102b] text-3xl font-black">
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
            className="mx-auto mt-5 w-[72px] h-[72px] rounded-[18px] bg-[#fff9e9] flex items-center justify-center"
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

            <h3 className="text-lg md:text-xl font-black text-[#0b102b]">
              Scale & Report
            </h3>

            <p className="mt-2 text-sm md:text-base leading-6 text-[#52617d] max-w-[250px] mx-auto">
              Scale what works, pause what doesn’t, and deliver transparent weekly reports
            </p>

          </motion.div>

        </motion.div>

      </div>

    </div>

  </div>

</section>

























{/* OUR RECENT WORK */}

<section id="recent-results" className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-5xl mx-auto mb-20">

  <h2 className="text-5xl md:text-5xl font-black text-[#171717] leading-tight">
    Our Recent
    <span className="text-[#F8BC04]">
      {" "}Result Driven
    </span>
    {" "}Work
  </h2>

</div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

  {/* CONTENT SIDE */}

  <div>

    {/* TABS */}

    <div
      className="
        flex
        border-b-2
        border-[#F8BC04]
        mb-10
      "
    >
      {Object.entries(workTabs).map(([key, tab]) => (

        <button
          key={key}
          onClick={() => setActiveWorkTab(key)}
          className={`
            px-8 py-4 font-semibold transition-all duration-300

            ${
              activeWorkTab === key
                ? "bg-[#F8BC04] text-[#171717]"
                : "text-[#171717] hover:bg-[#fff5cc]"
            }
          `}
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

        <h4
          className="
            text-4xl
            font-black
            text-[#171717]
            mb-6
          "
        >
          {workTabs[activeWorkTab as keyof typeof workTabs].heading}
        </h4>

        <p
          className="
            text-lg
            text-gray-600
            leading-relaxed
          "
        >
          {workTabs[activeWorkTab as keyof typeof workTabs].description}
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
        className="
          relative
          rounded-[35px]
          overflow-hidden
          shadow-2xl
        "
      >

        <Image
          src={workTabs[activeWorkTab as keyof typeof workTabs].image}
          alt=""
          width={800}
          height={600}
          className="w-full h-auto"
        />

      </motion.div>

    </AnimatePresence>

  </div>

</div>

      </div>
    </section>


{/* =========================
    PERFORMANCE MARKETING
========================= */}

<section className="relative bg-white py-8 overflow-hidden">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-[42%_58%] gap-8 items-center min-h-[400px]">

      {/* =========================
          LEFT CONTENT
      ========================= */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pr-4"
      >

        <h2 className="text-3xl md:text-[34px] font-black text-[#171717] leading-[1.08] tracking-tight">

          Performance Marketing
          <br />

          That Turn{" "}
          <span className="text-[#F8BC04]">
            Clicks Into
          </span>

          <br />

          Customers

        </h2>


        <p className="mt-4 text-[15px] leading-6 text-[#52617d] max-w-[500px]">

          Our performance marketing strategies are built to attract high-intent
          customers, reduce wasted ad spend and generate measurable business
          growth through Google Ads, Meta Ads and conversion focused PPC campaigns.

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
          className="
            mt-5
            px-7
            py-3
            rounded-full
            bg-[#F8BC04]
            text-[#171717]
            text-sm
            font-bold
            shadow-[0_8px_20px_rgba(248,188,4,0.18)]
            transition-all
          "
        >
          Get Free Strategy Call →
        </motion.button>

      </motion.div>


      {/* =========================
          RIGHT CONTENT
      ========================= */}

      <div className="relative flex flex-col gap-4">

        {/* =========================
            CARD 01
        ========================= */}

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
          className="relative flex items-center"
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
            className="
              absolute
              left-0
              z-20
              w-[62px]
              h-[62px]
              rounded-[18px]
              bg-[#F8BC04]
              flex
              items-center
              justify-center
              shadow-[0_10px_20px_rgba(0,0,0,0.12)]
            "
          >

            <span className="text-white text-[32px] font-light leading-none">
              ✓
            </span>

          </motion.div>


          {/* CARD */}

          <div
            className="
              relative
              ml-[46px]
              w-full
              min-h-[118px]
              rounded-[25px]
              bg-white
              shadow-[0_12px_28px_rgba(0,0,0,0.12)]
              px-7
              py-5
              pl-8
              overflow-hidden
            "
          >

            <span
              className="
                absolute
                right-5
                bottom-[-5px]
                text-[78px]
                leading-none
                font-black
                text-[#fff1c7]
                pointer-events-none
              "
            >
              01
            </span>


            <div className="relative z-10">

              <h3 className="text-[27px] font-black text-[#171717] leading-tight">
                ROI Focused Campaign
              </h3>

              <p className="mt-1 text-[14px] leading-5 text-[#52617d] max-w-[520px]">
                Every campaign is optimized around leads, sales and business
                growth instead of vanity metrics.
              </p>

            </div>

          </div>

        </motion.div>


        {/* =========================
            CARD 02
        ========================= */}

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
          className="relative flex items-center"
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
            className="
              absolute
              left-0
              z-20
              w-[62px]
              h-[62px]
              rounded-[18px]
              bg-[#F8BC04]
              flex
              items-center
              justify-center
              shadow-[0_10px_20px_rgba(0,0,0,0.12)]
            "
          >

            <span className="text-white text-[32px] font-light leading-none">
              ✓
            </span>

          </motion.div>


          {/* CARD */}

          <div
            className="
              relative
              ml-[46px]
              w-full
              min-h-[118px]
              rounded-[25px]
              bg-white
              shadow-[0_12px_28px_rgba(0,0,0,0.12)]
              px-7
              py-5
              pl-8
              overflow-hidden
            "
          >

            <span
              className="
                absolute
                right-5
                bottom-[-5px]
                text-[78px]
                leading-none
                font-black
                text-[#fff1c7]
                pointer-events-none
              "
            >
              02
            </span>


            <div className="relative z-10">

              <h3 className="text-[27px] font-black text-[#171717] leading-[1.05] max-w-[480px]">
                Google & Meta Certified Experts
              </h3>

              <p className="mt-1 text-[14px] leading-5 text-[#52617d] max-w-[520px]">
                Our specialists continuously optimize targeting, bidding and ad
                creatives for better results.
              </p>

            </div>

          </div>

        </motion.div>


        {/* =========================
            CARD 03
        ========================= */}

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
          className="relative flex items-center"
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
            className="
              absolute
              left-0
              z-20
              w-[62px]
              h-[62px]
              rounded-[18px]
              bg-[#F8BC04]
              flex
              items-center
              justify-center
              shadow-[0_10px_20px_rgba(0,0,0,0.12)]
            "
          >

            <span className="text-white text-[32px] font-light leading-none">
              ✓
            </span>

          </motion.div>


          {/* CARD */}

          <div
            className="
              relative
              ml-[46px]
              w-full
              min-h-[118px]
              rounded-[25px]
              bg-white
              shadow-[0_12px_28px_rgba(0,0,0,0.12)]
              px-7
              py-5
              pl-8
              overflow-hidden
            "
          >

            <span
              className="
                absolute
                right-5
                bottom-[-5px]
                text-[78px]
                leading-none
                font-black
                text-[#fff1c7]
                pointer-events-none
              "
            >
              03
            </span>


            <div className="relative z-10">

              <h3 className="text-[27px] font-black text-[#171717] leading-tight">
                Transparent Reporting
              </h3>

              <p className="mt-1 text-[14px] leading-5 text-[#52617d] max-w-[520px]">
                Track every click, lead and conversion with detailed reporting
                and clear performance insights.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  </div>

</section>













<section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-5xl mx-auto mb-20">

          <h2 className="text-5xl md:text-5xl font-black text-[#171717] leading-tight">
            Ads Solutions That
            <span className="text-[#F8BC04]">
              {" "}Drive Results
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            From search advertising to display campaigns and video marketing,
            we create high-performing PPC strategies that generate leads,
            increase sales and grow your business.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

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
                className="
                  relative
                  rounded-[35px]
                  overflow-hidden
                  
                "
              >

                <Image
                  src={tabs[activeTab as keyof typeof tabs].image}
                  alt=""
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />

              </motion.div>

            </AnimatePresence>

          </div>

          {/* CONTENT SIDE */}

          <div>

            

            {/* TABS */}

            <div
              className="
                flex
                border-b-2
                border-[#F8BC04]
                mb-10
              "
            >

              {Object.entries(tabs).map(([key, tab]) => (

                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`
                    px-8 py-4 font-semibold transition-all duration-300

                    ${
                      activeTab === key
                        ? "bg-[#F8BC04] text-[#171717]"
                        : "text-[#171717] hover:bg-[#fff5cc]"
                    }
                  `}
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

                <h4
                  className="
                    text-4xl
                    font-black
                    text-[#171717]
                    mb-6
                  "
                >
                  {tabs[activeTab as keyof typeof tabs].heading}
                </h4>

                <p
                  className="
                    text-lg
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {tabs[activeTab as keyof typeof tabs].description}
                </p>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>


{/* END OUR RECENT WORK  */}

    

























{/* WHY CHOOSE BIGBEANS DIGITAL */}

<section className="py-1 overflow-hidden">

<section className="py-10 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >

      <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-[#171717]">
        Why Brands Choose
        <span className="text-[#F8BC04]">
          {" "}BIGBEANS DIGITAL
        </span>
      </h2>

      <p className="mx-auto mt-2 max-w-5xl text-lg leading-8 text-neutral-600">
        Performance marketing strategies designed to maximize ROI,
        generate qualified leads and deliver measurable business growth.
      </p>

    </motion.div>

    <div className="grid gap-y-8 gap-x-16 lg:grid-cols-3">

      {/* 01 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex gap-5"
      >

        <div className="text-7xl font-black leading-none text-[#F8BC04]">
          1
        </div>

        <div>

          <h3 className="text-3xl font-black text-[#171717]">
            ROI Focused
          </h3>

          <p className="mt-3 text-lg leading-6 text-neutral-600">
            Every advertising campaign is built to maximize return on
            investment by focusing on qualified leads, sales and
            measurable business growth.
          </p>

        </div>

      </motion.div>

      {/* 02 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-5"
      >

        <div className="text-7xl font-black leading-none text-[#F8BC04]">
          2
        </div>

        <div>

          <h3 className="text-3xl font-black text-[#171717]">
            ROI Focused
          </h3>

          <p className="mt-3 text-lg leading-6 text-neutral-600">
            Every advertising campaign is built to maximize return on
            investment by focusing on qualified leads, sales and
            measurable business growth.
          </p>

        </div>

      </motion.div>

      {/* 03 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-5"
      >

        <div className="text-7xl font-black leading-none text-[#F8BC04]">
          3
        </div>

        <div>

          <h3 className="text-3xl font-black text-[#171717]">
            ROI Focused
          </h3>

          <p className="mt-3 text-lg leading-6 text-neutral-600">
            Every advertising campaign is built to maximize return on
            investment by focusing on qualified leads, sales and
            measurable business growth.
          </p>

        </div>

      </motion.div>

      {/* 04 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-5"
      >

        <div className="text-7xl font-black leading-none text-[#F8BC04]">
          4
        </div>

        <div>

          <h3 className="text-3xl font-black text-[#171717]">
            ROI Focused
          </h3>

          <p className="mt-3 text-lg leading-6 text-neutral-600">
            Every advertising campaign is built to maximize return on
            investment by focusing on qualified leads, sales and
            measurable business growth.
          </p>

        </div>

      </motion.div>

      {/* 05 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-5"
      >

        <div className="text-7xl font-black leading-none text-[#F8BC04]">
          5
        </div>

        <div>

          <h3 className="text-3xl font-black text-[#171717]">
            ROI Focused
          </h3>

          <p className="mt-3 text-lg leading-6 text-neutral-600">
            Every advertising campaign is built to maximize return on
            investment by focusing on qualified leads, sales and
            measurable business growth.
          </p>

        </div>

      </motion.div>

      {/* 06 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex gap-5"
      >

        <div className="text-7xl font-black leading-none text-[#F8BC04]">
          6
        </div>

        <div>

          <h3 className="text-3xl font-black text-[#171717]">
            ROI Focused
          </h3>

          <p className="mt-3 text-lg leading-6 text-neutral-600">
            Every advertising campaign is built to maximize return on
            investment by focusing on qualified leads, sales and
            measurable business growth.
          </p>

        </div>

      </motion.div>

          </div>

  </div>

</section>

{/* =========================
        FAQ SECTION
========================= */}












  
{/* =========================
        FAQ SECTION
========================= */}

<section className="relative overflow-hidden bg-[#ffffff] py-24">

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
    className="absolute left-1/2 top-28 h-48 w-48 -translate-x-1/2 rounded-full bg-[#F8BC04]/10 blur-3xl"
  />

  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20 text-center"
    >

      
      <h2 className="mx-auto mt-4 max-w-12xl text-4xl font-black leading-tight text-[#171717] md:text-6xl">
        Everything You Need To Know About
        <span className="text-[#F8BC04]">
          {" "}Google Ads & Meta Ads
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-5xl text-lg leading-8 text-neutral-600">
        Find answers to the most common questions about Google Ads, Meta Ads,
        campaign management, lead generation, ROI, budgeting, and digital
        advertising strategies.
      </p>

    </motion.div>

    <div className="grid gap-8 lg:grid-cols-2">

      {faqs.slice(0, 4).map((faq, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          className="overflow-hidden rounded-[28px] border border-[#ececec] bg-white shadow-lg"
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="flex w-full items-center justify-between px-8 py-7 text-left"
          >

            <h3 className="pr-8 text-lg font-bold text-[#171717]">
              {faq.question}
            </h3>

            <motion.div
              animate={{
                rotate: openFaq === index ? 45 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8BC04] text-xl font-bold text-[#171717]"
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

            <div className="border-t border-[#f3f3f3] px-8 pb-8 pt-6">

              <p className="leading-8 text-neutral-600">
                {faq.answer}
              </p>

            </div>

          </motion.div>

        </motion.div>

      ))}

            {faqs.slice(4).map((faq, index) => {

        const actualIndex = index + 4;

        return (

          <motion.div
            key={actualIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: actualIndex * 0.08,
            }}
            className="overflow-hidden rounded-[28px] border border-[#ececec] bg-white shadow-lg"
          >

            <button
              onClick={() =>
                setOpenFaq(
                  openFaq === actualIndex ? null : actualIndex
                )
              }
              className="flex w-full items-center justify-between px-8 py-7 text-left transition-all duration-300 hover:bg-[#fffdf4]"
            >

              <h3 className="pr-8 text-lg font-bold text-[#171717]">
                {faq.question}
              </h3>

              <motion.div
                animate={{
                  rotate:
                    openFaq === actualIndex
                      ? 45
                      : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F8BC04]
                  text-xl
                  font-bold
                  text-[#171717]
                "
              >
                +
              </motion.div>

            </button>

            <motion.div
              initial={false}
              animate={{
                height:
                  openFaq === actualIndex
                    ? "auto"
                    : 0,
                opacity:
                  openFaq === actualIndex
                    ? 1
                    : 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="overflow-hidden"
            >

              <div className="border-t border-[#f1f1f1] px-8 pb-8 pt-6">

                <p className="leading-8 text-neutral-600">
                  {faq.answer}
                </p>

              </div>

            </motion.div>

          </motion.div>

        );

      })}

    </div>
    
{/* PRESENCE SECTION */}

<section className="bg-[#ffffff] py-10">

  <div
    className="
      max-w-[1400px]
      mx-auto
      px-6
    "
  >

    <div
      className="
        bg-white
        rounded-[40px]
        border
        border-gray-200
        p-10
        lg:p-16
        grid
        lg:grid-cols-2
        gap-12
        items-center
      "
    >

      {/* LEFT */}

      <div>

        <p
          className="
            uppercase
            tracking-[6px]
            text-sm
            font-semibold
            text-gray-500
            mb-6
          "
        >
          Global Presence
        </p>

        <h2
          className="
            text-5xl
            lg:text-6xl
            font-black
            text-[#171717]
            leading-tight
          "
        >
          Digital Excellence in{" "}
          <span className="text-[#F8BC04]">
            12+
          </span>
          <br />
          Locations
        </h2>

        <p
          className="
            mt-8
            text-lg
            text-gray-600
            leading-relaxed
            max-w-[650px]
          "
        >
          BIGBEANS DIGITAL serves businesses across India and international markets.
          Our strategies are built for local relevance and global scalability.
        </p>

        {/* LOCATIONS */}

        <div className="grid grid-cols-2 gap-10 mt-12">

          <div className="border-r border-[##000000]/30 pr-10">

            <h3 className="font-bold text-xl">
               In India
                </h3>

<div className="w-20 h-[2px] bg-[#F8BC04] mt-2 mb-5"></div>

            <ul className="space-y-3 text-gray-700">

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

            <h3 className="font-bold text-xl">
  International Presence
</h3>

<div className="w-20 h-[2px] bg-[#F8BC04] mt-2 mb-5"></div>

            <ul className="space-y-3 text-gray-700">

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

      <div className="relative">

        <Image
          src="/maps/world-map.png"
          alt="World Map"
          width={1200}
          height={700}
          className="w-full h-auto"
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
          className="
            absolute
            w-4
            h-4
            bg-[#F8BC04]
            rounded-full
            top-[42%]
            left-[67%]
            shadow-[0_0_25px_#F8BC04]
          "
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
          className="
            absolute
            w-4
            h-4
            bg-[#F8BC04]
            rounded-full
            top-[27%]
            left-[44%]
            shadow-[0_0_25px_#F8BC04]
          "
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
          className="
            absolute
            w-4
            h-4
            bg-[#F8BC04]
            rounded-full
            top-[28%]
            left-[18%]
            shadow-[0_0_25px_#F8BC04]
          "
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
          className="
            absolute
            w-4
            h-4
            bg-[#F8BC04]
            rounded-full
            top-[50%]
            left-[47%]
            shadow-[0_0_25px_#F8BC04]
          "
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
          className="
            absolute
            w-4
            h-4
            bg-[#F8BC04]
            rounded-full
            top-[54%]
            left-[74%]
            shadow-[0_0_25px_#F8BC04]
          "
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
          className="
            absolute
            w-4
            h-4
            bg-[#F8BC04]
            rounded-full
            top-[65%]
            left-[84%]
            shadow-[0_0_25px_#F8BC04]
          "
        />

      </div>

    </div>

  </div>

</section>

{/* =========================
        CTA SECTION
========================= */}

<section className="relative overflow-hidden bg-[#ffffff] py-24">

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >

    <div
      className="
        relative
        overflow-hidden
        max-w-7xl
        mx-auto
        rounded-[40px]
        bg-[#171717]
        px-8
        py-16
        md:px-16
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-[#F8BC04]/20
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-between
          gap-10
          lg:flex-row
        "
      >

        {/* Left */}

        <div>

          <h2
            className="
              max-w-3xl
              text-4xl
              md:text-5xl
              font-black
              leading-tight
              text-white
            "
          >
            Ready To Turn Clicks Into
            <span className="text-[#F8BC04]">
              {" "}Real Business Growth?
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-white/80
            "
          >
            Partner with BIGBEANS DIGITAL to launch
            data-driven Social Media Marketing  campaigns that
            generate quality leads, increase conversions
            and accelerate your business growth.
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
          className="
            whitespace-nowrap
            rounded-full
            bg-[#F8BC04]
            px-10
            py-5
            text-lg
            font-bold
            text-[#171717]
            shadow-[0_20px_50px_rgba(248,188,4,0.35)]
            transition-all
            duration-300
          "
        >
          Book Free Strategy Call
        </motion.button>

      </div>

    </div>

  </motion.div>

</section>

{/* =========================
      END CTA SECTION
========================= */}


   

  </div>

</section>









</section>
    </main>
  );
}