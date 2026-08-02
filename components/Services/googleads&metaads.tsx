"use client";

import { useState } from "react";
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
      title: "Search Ads",
      heading: "Get More Customers Through Search Ads",
      description:
        "Appear exactly when potential customers are searching for your products or services. Our Google Search Ads campaigns are designed to generate qualified leads, increase conversions and maximize return on ad spend.",
      image: "/assets/searchads.png",
    },

    display: {
      title: "Display Ads",
      heading: "Build Brand Awareness At Scale",
      description:
        "Reach your ideal audience across millions of websites, apps and digital platforms. Display advertising helps businesses stay visible, build trust and drive consistent traffic through visually engaging campaigns.",
      image: "/assets/displayads.png",
    },

    video: {
      title: "Video Ads",
      heading: "Capture Attention With Video Marketing",
      description:
        "Video advertising helps brands tell compelling stories, increase engagement and generate more conversions. Reach customers across YouTube and premium video networks with highly targeted campaigns.",
      image: "/assets/videoads.png",
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

      {/* PAGE HERO */}

      <section className="py-20 px-6">
        <div
          className="
            max-w-7xl
            mx-auto
            bg-[#F8BC04]
            rounded-[40px]
            min-h-[220px]
            flex
            flex-col
            items-center
            justify-center
            text-center
            shadow-[0_20px_80px_rgba(248,188,4,0.35)]
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl
              md:text-7xl
              font-black
              text-[#171717]
            "
          >
            Google Ads & Meta Ads
          </motion.h1>

          <div
            className="
              mt-8
              bg-white
              px-8
              py-4
              rounded-full
              font-semibold
            "
          >
            Home → Google Ads & Meta Ads
          </div>
        </div>
      </section>

{/* GOOGLE ADS HERO SECTION */}

<section className="py-28 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      {/* Floating Badge */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          inline-flex
          items-center
          gap-2
          bg-[#F8BC04]/10
          text-[#F8BC04]
          px-6
          py-3
          rounded-full
          font-bold
          tracking-wider
          mb-8
        "
      >
        🚀 PERFORMANCE MARKETING
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
  text-4xl
  md:text-6xl
  lg:text-7xl
  font-black
  text-[#171717]
  leading-[1.08]
  max-w-[1300px]
  mx-auto
"
      >
        Drive More Leads,
        <span className="relative inline-block">

          <motion.span
            animate={{
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              bg-gradient-to-r
              from-[#F8BC04]
              via-[#ffcf4d]
              to-[#F8BC04]
              bg-[length:200%_200%]
              bg-clip-text
              text-transparent
            "
          >
            Sales & Revenue
          </motion.span>

        </span>

        Through Smart Paid Advertising
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
        className="
          mt-10
          text-lg
          md:text-xl
          text-gray-600
          max-w-5xl
          mx-auto
          leading-relaxed
        "
      >
        BIGBEANS DIGITAL helps businesses generate
        high-quality leads, increase website traffic,
        boost online sales and maximize ROI with
        data-driven Google Ads, Facebook Ads,
        Instagram Ads and advanced performance
        marketing strategies tailored for measurable
        business growth.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="
          flex
          flex-wrap
          justify-center
          gap-6
          mt-14
        "
      >

        <motion.button
          whileHover={{
            scale: 1.08,
            y: -5,
            boxShadow:
              "0px 20px 40px rgba(248,188,4,0.35)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            bg-[#F8BC04]
            text-[#171717]
            font-bold
            px-10
            py-5
            rounded-full
            text-lg
          "
        >
          Get Started With Us
        </motion.button>

   

      </motion.div>

      {/* Floating Stats */}

      <div className="hidden lg:block">

       

      </div>

    </motion.div>

  </div>

</section>

{/* WHY CHOOSE US SECTION */}

<section className="py-28 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            inline-block
            text-[#171717]
            tracking-[6px]
            text-sm
            font-bold
            uppercase
            mb-8
          "
        >
          Why Choose BIGBEANS DIGITAL
        </motion.span>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            text-[#171717]
          "
        >
          PPC Campaigns
          <br />
          That Turn
          <span className="text-[#F8BC04]">
            {" "}Clicks Into
          </span>
          <br />
          Customers
        </h2>

        <p
          className="
            mt-10
            text-lg
            leading-relaxed
            text-gray-600
            max-w-xl
          "
        >
          Our performance marketing strategies are
          built to attract high-intent customers,
          reduce wasted ad spend and generate
          measurable business growth through
          Google Ads, Meta Ads and conversion
          focused PPC campaigns.
        </p>

        <motion.button
          whileHover={{
            scale: 1.08,
            y: -5,
            boxShadow:
              "0px 20px 40px rgba(248,188,4,0.35)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            mt-10
            px-8
            py-4
            rounded-full
            bg-[#F8BC04]
            text-[#171717]
            font-bold
          "
        >
          Get Free Strategy Call →
        </motion.button>

      </motion.div>

      {/* RIGHT SIDE */}

      <div className="space-y-8">

        {[
          {
            number: "01",
            title: "ROI Focused Advertising",
            text: "Every campaign is optimized around leads, sales and business growth instead of vanity metrics."
          },
          {
            number: "02",
            title: "Google & Meta Certified Experts",
            text: "Our specialists continuously optimize targeting, bidding and ad creatives for better results."
          },
          {
            number: "03",
            title: "Transparent Reporting",
            text: "Track every click, lead and conversion with detailed reporting and clear performance insights."
          }
        ].map((item, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.03,
              x: 10,
            }}
            className="
              group
              relative
              flex
              items-center
              gap-6
            "
          >

            {/* ICON */}

            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.15,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                w-20
                h-20
                shrink-0
                rounded-[24px]
                bg-[#F8BC04]
                flex
                items-center
                justify-center
                text-white
                text-3xl
                font-black
                shadow-xl
              "
            >
              ✓
            </motion.div>

            {/* CARD */}

            <div
              className="
                flex-1
                relative
                overflow-hidden
                rounded-[30px]
                p-8
                from-white
                via-[#fff8dc]
                to-[#fff2b3]
                shadow-xl
              "
            >

              {/* Animated Glow */}

              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index,
                }}
                className="
                  absolute
                  top-0
                  left-0
                  w-40
                  h-full
                  bg-white/30
                  blur-2xl
                "
              />

              <div className="relative z-10">

                <h3
                  className="
                    text-3xl
                    font-black
                    text-[#171717]
                    mb-2
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {item.text}
                </p>

              </div>

              <motion.span
                animate={{
                  opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  right-6
                  top-4
                  text-[90px]
                  font-black
                  text-[#F8BC04]
                  pointer-events-none
                "
              >
                {item.number}
              </motion.span>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>

<section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-5xl mx-auto mb-20">

          <h2 className="text-5xl md:text-6xl font-black text-[#171717] leading-tight">
            Google Ads Solutions That
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
                  shadow-2xl
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

            <motion.h3
              key={`title-${activeTab}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-5xl
                font-black
                text-[#171717]
                mb-10
              "
            >
              Google Ads
            </motion.h3>

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

{/* WHY CHOOSE BIGBEANS DIGITAL */}

<section className="py-20 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >

      <span
        className="
          inline-block
          px-5
          py-2
          rounded-full
          bg-[#F8BC04]/10
          text-[#F8BC04]
          font-bold
          tracking-[4px]
          uppercase
          text-xs
          mb-4
        "
      >
        Why Choose Us
      </span>

      <h2
        className="
          text-3xl
          md:text-5xl
          font-black
          text-[#171717]
        "
      >
        Why Brands Choose
        <span className="text-[#F8BC04]">
          {" "}BIGBEANS DIGITAL
        </span>
      </h2>

    </motion.div>

    {/* SINGLE LINE CARDS */}

    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">

      {[
        {
          no: "01",
          title: "ROI Focused",
        },
        {
          no: "02",
          title: "Creative Ads",
        },
        {
          no: "03",
          title: "Smart Targeting",
        },
        {
          no: "04",
          title: "More Leads",
        },
        {
          no: "05",
          title: "Live Reports",
        },
        {
          no: "06",
          title: "Fast Scaling",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -15,
            rotateY: 12,
            scale: 1.08,
          }}
          className="
            group
            relative
            h-[220px]
            rounded-[24px]
            bg-white
            border
            border-gray-100
            overflow-hidden
            cursor-pointer
            shadow-lg
          "
        >

          {/* Animated Background */}

          <motion.div
            className="
              absolute
              inset-0
              bg-[#F8BC04]
            "
            initial={{
              y: "100%",
            }}
            whileHover={{
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          />

          {/* Floating Circle */}

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.3,
            }}
            className="
              absolute
              -top-6
              -right-6
              w-16
              h-16
              rounded-full
              bg-[#F8BC04]/15
            "
          />

          {/* CONTENT */}

          <div className="relative z-10 p-5 h-full flex flex-col justify-between">

            <motion.div
              whileHover={{
                rotate: -10,
                scale: 1.15,
              }}
              className="
                text-5xl
                font-black
                text-[#F8BC04]
                group-hover:text-white
                transition-all
                duration-300
              "
            >
              {item.no}
            </motion.div>

            <div>

              <h3
                className="
                  text-xl
                  font-black
                  leading-tight
                  text-[#171717]
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-gray-600
                  group-hover:text-white/90
                  transition-all
                  duration-300
                "
              >
                Performance-focused
                digital advertising
                strategies that help
                businesses grow faster.
              </p>

            </div>

          </div>

          {/* Shine Effect */}

          <motion.div
            className="
              absolute
              top-0
              left-[-120%]
              w-[50%]
              h-full
              bg-white/40
              skew-x-12
            "
            whileHover={{
              left: "150%",
            }}
            transition={{
              duration: 0.8,
            }}
          />

        </motion.div>

      ))}

    </div>
  </div>

{/* =========================
    STRATEGY CALL CTA SECTION
========================= */}

<section className="relative overflow-hidden bg-white py-16 lg:py-20">
  

  <motion.div
    animate={{
      y: [-20, 20, -20],
      rotate: [-8, 8, -8],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[#F8BC04]/10 blur-[120px]"
  />

  <div className="container mx-auto px-6 lg:px-10">

    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-sm font-semibold text-[#F8BC04]">
          Free Growth Consultation
        </span>

        <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-[#171717] max-w-[600px]">
          Let's Build an
          <span className="block text-[#F8BC04]">
            Advertising Strategy
          </span>
          That Delivers Results.
        </h2>

        <p className="mt-6 max-w-lg text-base leading-8 text-neutral-600">
          Whether you're launching a new brand or scaling an established business,
          our Google Ads and Meta Ads specialists create data-driven campaigns
          designed to attract the right audience, reduce wasted spend, and generate
          consistent, measurable growth.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: "0px 20px 50px rgba(248,188,4,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-3 rounded-full bg-[#F8BC04] px-8 py-5 font-semibold text-[#171717]"
          >
            Schedule Your Call

            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT VISUAL */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center"
      >

        {/* Yellow Background */}

        <motion.div
          animate={{
            rotate: [-2, 2, -2],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-6 h-[520px] w-[420px] rounded-[50px] bg-[#F8BC04]"
        />

        {/* Campaign Preview */}

        <motion.div
          whileHover={{
            y: -8,
            rotate: -2,
          }}
          className="absolute right-0 top-24 z-10 overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          <img
            src="/assets/googleads-ad-preview.webp"
            alt="Google Ads Campaign Preview"
            className="w-[320px]"
          />
        </motion.div>

        {/* Performance Card */}

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-0 top-36 z-20 w-72 rounded-3xl border border-white/50 bg-white/90 p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-500">
                Campaign Performance
              </p>

              <h3 className="mt-1 text-3xl font-bold text-[#171717]">
                +312%
              </h3>
            </div>

            <TrendingUp
              className="text-[#F8BC04]"
              size={34}
            />
          </div>

          <div className="mt-6 flex items-end gap-2">
            {[35, 60, 42, 80, 55, 95, 70].map((height, index) => (
              <motion.div
                key={index}
                animate={{
                  height: [height, height + 18, height],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="w-full rounded-full bg-gradient-to-t from-[#F8BC04] to-yellow-300"
                style={{ height }}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Image */}

        <motion.img
          whileHover={{
            scale: 1.03,
          }}
          src="/assets/googleads-consultant.webp"
          alt="BIGBEANS DIGITAL Advertising Expert"
          className="relative z-30 w-[430px]"
        />

        {/* Floating Lead Card */}

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-0 z-40 rounded-3xl border border-white/50 bg-white/90 p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-[#F8BC04]/15 p-4">
              <Target
                size={22}
                className="text-[#F8BC04]"
              />
            </div>

            <div>
              <h4 className="font-bold text-[#171717]">
                High-Quality Leads
              </h4>

              <p className="text-sm text-neutral-500">
                Optimized for Maximum ROI
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>

    </div>

  </div>
</section>

{/* =========================
    END STRATEGY CALL CTA SECTION
========================= */}
  
{/* =========================
        FAQ SECTION
========================= */}

<section className="relative overflow-hidden bg-[#fafafa] py-24">

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

      <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#F8BC04]">
        Frequently Asked Questions
      </span>

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
            data-driven digital marketing campaigns that
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