"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  FileText,
  Layout,
  Rocket,
  BarChart3,
  FileBarChart,
  TrendingUp,
  Users,
  ThumbsUp,
  LineChart,
  ArrowRight,
} from "lucide-react";

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function ProcessCard({
  number,
  title,
  description,
  icon,
  dark = false,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  dark?: boolean;
}) {
  return (
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]
        border
        p-4 sm:p-5 lg:p-7
        h-full
        min-h-[270px]
        sm:min-h-[290px]
        lg:min-h-[320px]
        flex
        flex-col
        ${
          dark
            ? "bg-[#171717] border-[#171717] text-white"
            : "bg-[#F8BC04] border-[#F8BC04] text-black"
        }
      `}
    >
      <div className="flex items-start justify-between relative z-10">
        <span
          className={`
            text-[34px] sm:text-[40px] lg:text-[48px]
            leading-none
            font-black
            ${
              dark
                ? "text-[#F8BC04]"
                : "text-black"
            }
          `}
        >
          {number}
        </span>

        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-1"
        >
          {icon}
        </motion.div>
      </div>

      <h3
        className={`
          relative
          z-10
          mt-6 sm:mt-7
          text-[20px] sm:text-[22px] lg:text-[25px]
          leading-[1.15]
          font-bold
          max-w-[230px]
        `}
      >
        {title}
      </h3>

      <p
        className={`
          relative
          z-10
          mt-4
          text-[12px] sm:text-[13px] lg:text-[14px]
          leading-[1.65]
          ${
            dark
              ? "text-gray-300"
              : "text-black/80"
          }
        `}
      >
        {description}
      </p>

      <span
        className="
          absolute
          -bottom-5
          -right-1
          text-[90px] sm:text-[110px]
          leading-none
          font-black
          opacity-[0.07]
          pointer-events-none
        "
      >
        {number}
      </span>
    </motion.div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const carouselImages = [
    "/home/clientlogo/1.png",
    "/home/clientlogo/2.png",
    "/home/clientlogo/3.png",
    "/home/clientlogo/4.png",
    "/home/clientlogo/5.png",
    "/home/clientlogo/6.png",
    "/home/clientlogo/7.png",
    "/home/clientlogo/8.png",
    "/home/clientlogo/9.png",
    "/home/clientlogo/10.png",
    "/home/clientlogo/11.png",
    "/home/clientlogo/12.png",
    "/home/clientlogo/13.png",
    "/home/clientlogo/14.png",
  ];

const blogCards = [
  {
    id: 1,
    image: "/assets/blog/allblogs/demoblog/blogthumbnail1.png",
    date: "JULY 28, 2026",
    category: "Big Beans Digital",
    title: "Scaling Startups into Powerhouses",
    description:
      "In today’s hyper-competitive digital landscape, turning a breakthrough idea into an industry-leading brand requires far more than aesthetic graphics or basic ad campaigns........Click Read More",
    link: "/blog/allblogs/demo",
  },

  {
      id: 2,
      image: "/assets/blog/allblogs/website-seo-audit/website-seo-audit-card.png",
      date: "August 13, 2026",
      category: "Digital Marketing",
      title: "How to Do a Website SEO Audit Before Hiring an Agency",
      description: "Learn how to do a website SEO audit yourself. Use this DIY SEO audit checklist to find speed, indexing, keyword, and technical SEO issues.",
      link: "/blog/allblogs/website-seo-audit",
    },

  {
      id: 3,
      image: "/assets/blog/allblogs/real-time-weather-marketing/real-time-weather-marketing-card.png",
      date: "August 13, 2026",
      category: "AI",
      title: "Real-Time Marketing: Turn Weather Data Into Revenue",
      description: "Learn how agile brands use weather data, AI, and real-time signals to create contextual marketing campaigns that drive revenue.",
      link: "/blog/allblogs/real-time-weather-marketing",
    },

];


  return (
    <section className="bg-[#FFFFFF] overflow-hidden pb-16 sm:pb-20">

      {/* =========================================================
          HERO
      ========================================================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">

        <motion.h2
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
            text-center
            text-[42px]
            sm:text-[56px]
            md:text-[80px]
            lg:text-[110px]
            xl:text-[130px]
            font-extrabold
            text-gray-200
            leading-[0.95]
            tracking-tight
            whitespace-nowrap
          "
        >
          where strategy
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            text-center
            text-[43px]
            sm:text-[58px]
            md:text-[72px]
            lg:text-[84px]
            xl:text-[90px]
            font-black
            text-black
            leading-[0.95]
            -mt-1
            sm:-mt-3
            lg:-mt-5
            whitespace-nowrap
          "
        >
          meets creativity
        </motion.h1>

        <motion.div
          className="flex justify-center mt-7 sm:mt-9 lg:mt-10"
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Link href="https://wa.link/pxmrrm">
            <button
              className="
                bg-[#F8BC04]
                text-black
                px-6 sm:px-8
                py-3
                rounded-full
                font-semibold
                text-sm sm:text-base
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
                min-h-[46px]
              "
            >
              Get Free Consultation
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="relative mt-5 sm:mt-6"
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        >
          <div
            className="
              bg-[#171717]
              rounded-[30px]
              sm:rounded-[42px]
              lg:rounded-[60px]
              overflow-hidden
              relative
            "
          >

            <div className="flex justify-center">
              <div
                className="
                  bg-[#FFFFFF]
                  w-full
                  max-w-[700px]
                  rounded-b-[26px]
                  sm:rounded-b-[38px]
                  px-3
                  sm:px-6
                  py-5
                  sm:py-7
                  relative
                  z-20
                "
              >
                <div
                  className="
                    grid
                    grid-cols-2
                    sm:grid-cols-4
                    gap-y-5
                    gap-x-2
                    sm:gap-3
                    items-start
                  "
                >

                  <div className="text-center">
                    <h3 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold text-black leading-none">
                      <Counter end={102} suffix="+" />
                    </h3>
                    <p className="text-[10px] sm:text-sm text-gray-500 mt-1.5 sm:mt-2">
                      project launched
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold text-black leading-none">
                      <Counter end={89} suffix="%" />
                    </h3>
                    <p className="text-[10px] sm:text-sm text-gray-500 mt-1.5 sm:mt-2">
                      clients worldwide
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold text-black leading-none">
                      <Counter end={99} suffix="%" />
                    </h3>
                    <p className="text-[10px] sm:text-sm text-gray-500 mt-1.5 sm:mt-2">
                      Indian Startups clients
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold text-black leading-none">
                      <Counter end={97} suffix="%" />
                    </h3>
                    <p className="text-[10px] sm:text-sm text-gray-500 mt-1.5 sm:mt-2">
                      engage rise
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <div
              className="
                px-5
                sm:px-8
                md:px-10
                lg:px-20
                py-9
                sm:py-12
                md:py-16
                grid
                md:grid-cols-2
                gap-9
                lg:gap-16
                text-white
                relative
              "
            >

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  text-[180px]
                  sm:text-[260px]
                  lg:text-[380px]
                  text-white/5
                  font-black
                  left-1/2
                  -translate-x-1/2
                  lg:left-[300px]
                  lg:translate-x-0
                  bottom-[-60px]
                  sm:bottom-[-90px]
                  lg:bottom-[-120px]
                  rotate-[-35deg]
                  pointer-events-none
                "
              >
                ↗
              </motion.div>

              <div className="relative z-10">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-yellow-400 text-sm sm:text-lg mb-5 sm:mb-6"
                >
                  ABOUT BIGBEANS DIGITAL
                </motion.p>

                <motion.h2
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.9,
                  }}
                  className="
                    text-[34px]
                    sm:text-[45px]
                    md:text-[52px]
                    lg:text-[62px]
                    font-bold
                    leading-[1.05]
                    max-w-[650px]
                  "
                >
                  Helping Startups & Businesses Build Powerful Brands That Grow Faster.
                </motion.h2>
              </div>

              <div className="flex flex-col justify-center relative z-10">

                <div className="flex flex-wrap items-center gap-4 sm:gap-5">

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 1.1,
                    }}
                    className="flex -space-x-3"
                  >
                    <img
                      src="/home/ratings/rating1.png"
                      alt="Happy Client 1"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                    />

                    <img
                      src="/home/ratings/rating2.png"
                      alt="Happy Client 2"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                    />

                    <img
                      src="/home/ratings/rating3.png"
                      alt="Happy Client 3"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2"
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 1.3,
                      duration: 0.6,
                    }}
                  >
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                      4.9
                    </span>

                    <span className="text-[#F8BC04] text-3xl sm:text-4xl">
                      ★
                    </span>
                  </motion.div>

                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-gray-300 text-sm sm:text-lg lg:text-xl mt-4 sm:mt-5"
                >
                  Trusted by Startups & Growing Businesses
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="text-gray-300 mt-5 sm:mt-8 text-sm sm:text-lg max-w-[500px] leading-relaxed"
                >
                  At BIGBEANS DIGITAL, we help startups transform ideas into successful brands through strategic Digital Marketing,
                  Social Media Marketing, Website Development, Branding, and Performance Marketing. Whether you're launching your
                  first business or scaling your next big venture, our team creates growth-focused strategies that generate leads,
                  increase visibility, and build a strong online presence across London, India, USA, and Dubai.
                </motion.p>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          TRUSTED CLIENTS
      ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-[#FFFFFF] py-9 sm:py-10"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              text-[27px]
              sm:text-3xl
              md:text-[52px]
              font-bold
              text-[#171717]
              tracking-tight
              leading-tight
            "
          >
            Trusted by 100+ Startups & Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              mt-5
              sm:mt-8
              text-sm
              sm:text-lg
              text-gray-600
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            From ambitious startups to growing businesses, BIGBEANS DIGITAL delivers results-driven Digital Marketing,
            Social Media Marketing, Performance Marketing, Website Development, and Branding solutions that help brands
            grow faster. As a trusted Digital Marketing Agency serving clients across London, India, USA, and Dubai,
            we build strategies that increase visibility, generate qualified leads, and create sustainable business growth.
          </motion.p>

          <div className="flex items-center gap-3 sm:gap-6 mt-9 sm:mt-14">
            <div className="flex-1 h-px bg-gray-300" />

            <span
              className="
                text-[7px]
                sm:text-[11px]
                uppercase
                tracking-[0.12em]
                sm:tracking-[0.25em]
                text-gray-500
                text-center
                max-w-[230px]
                sm:max-w-none
              "
            >
              TRUSTED DIGITAL GROWTH PARTNER FOR STARTUPS & GROWING BUSINESSES
            </span>

            <div className="flex-1 h-px bg-gray-300" />
          </div>

        </div>
      </motion.section>

      {/* =========================================================
          CLIENT IMAGE CAROUSEL
      ========================================================= */}
      <section className="pt-1 pb-10 sm:pb-20 overflow-hidden">

        <div className="relative max-w-7xl mx-auto">

          <div
            className="
              relative
              overflow-hidden
              [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]
            "
          >

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 35,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-3 sm:gap-5 lg:gap-8 w-max"
            >
              {[...carouselImages, ...carouselImages].map((image, index) => (
                <div
                  key={index}
                  className="
                    relative
                    w-[125px]
                    sm:w-[180px]
                    md:w-[210px]
                    lg:w-[240px]
                    aspect-square
                    flex-shrink-0
                    overflow-hidden
                    rounded-[18px]
                    sm:rounded-[26px]
                  "
                >
                  <Image
                    src={image}
                    alt={`Carousel ${index + 1}`}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CORE SERVICES
      ========================================================= */}
      <section className="pt-6 sm:pt-10 pb-10 sm:pb-14 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-8 sm:mb-10">

            <h2
              className="
                text-[34px]
                sm:text-5xl
                md:text-6xl
                font-bold
                text-[#171717]
                leading-tight
              "
            >
              Our Core Services
            </h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
                mx-auto
                mt-2
                h-[3px]
                w-full
                max-w-[720px]
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-[#F8BC04]
                to-transparent
              "
            />

          </div>

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-3
              sm:gap-5
              lg:gap-8
              items-stretch
            "
          >

            {/* SERVICE 1 */}
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
              whileHover={{
                y: -6,
              }}
              className="
                group
                rounded-[20px]
                sm:rounded-[28px]
                overflow-hidden
                bg-[#F8BC04]
                transition-all
                duration-500
                shadow-[0_15px_40px_rgba(248,188,4,.16)]
                hover:bg-white
                flex
                flex-col
                h-full
              "
            >

              <div className="relative h-[115px] sm:h-[180px] lg:h-[220px] bg-[#F8BC04] overflow-hidden flex-shrink-0">

                <Image
                  src="/home/ourservice/bigbeansdigitalbranding.png"
                  alt="Branding"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="p-3.5 sm:p-5 lg:p-7 flex flex-col flex-1">

                <h3
                  className="
                    text-[15px]
                    sm:text-[19px]
                    lg:text-[20px]
                    font-bold
                    text-[#171717]
                    mb-2
                    sm:mb-4
                    leading-tight
                  "
                >
                  Branding
                </h3>

                <p
                  className="
                    text-[11px]
                    sm:text-[13px]
                    lg:text-sm
                    text-black/75
                    leading-[1.5]
                    mb-4
                    sm:mb-5
                  "
                >
                  Strategic branding solutions for startups and businesses.
                </p>

                <Link
                  href="/services/branding"
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#171717]
                    text-white
                    px-3
                    sm:px-6
                    lg:px-10
                    py-2
                    sm:py-2.5
                    font-semibold
                    text-[10px]
                    sm:text-sm
                    transition-all
                    duration-300
                    hover:bg-[#F8BC04]
                    hover:text-black
                    whitespace-nowrap
                  "
                >
                  Explore
                  <ArrowRight size={15} />
                </Link>

              </div>
            </motion.div>

            {/* SERVICE 2 */}
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
              whileHover={{
                y: -6,
              }}
              className="
                group
                rounded-[20px]
                sm:rounded-[28px]
                overflow-hidden
                bg-[#171717]
                transition-all
                duration-500
                hover:bg-white
                flex
                flex-col
                h-full
              "
            >

              <div className="relative h-[115px] sm:h-[180px] lg:h-[220px] bg-[#171717] overflow-hidden flex-shrink-0">

                <Image
                  src="/home/ourservice/socialmedia.png"
                  alt="Social Media"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="p-3.5 sm:p-5 lg:p-7 flex flex-col flex-1">

                <h3
                  className="
                    text-[15px]
                    sm:text-[19px]
                    lg:text-[20px]
                    font-bold
                    text-white
                    group-hover:text-[#171717]
                    mb-2
                    sm:mb-4
                    leading-tight
                    transition-colors
                  "
                >
                  Digital Marketing
                </h3>

                <p
                  className="
                    text-[11px]
                    sm:text-[13px]
                    lg:text-sm
                    text-white/70
                    group-hover:text-black/75
                    leading-[1.5]
                    mb-4
                    sm:mb-5
                    transition-colors
                  "
                >
                  Build visibility, engagement and quality leads.
                </p>

                <Link
                  href="/services/social-media-marketing"
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#F8BC04]
                    text-black
                    px-3
                    sm:px-6
                    lg:px-10
                    py-2
                    sm:py-2.5
                    font-semibold
                    text-[10px]
                    sm:text-sm
                    transition-all
                    duration-300
                    whitespace-nowrap
                  "
                >
                  Explore
                  <ArrowRight size={15} />
                </Link>

              </div>
            </motion.div>

            {/* SERVICE 3 */}
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
              whileHover={{
                y: -6,
              }}
              className="
                group
                rounded-[20px]
                sm:rounded-[28px]
                overflow-hidden
                bg-[#F8BC04]
                transition-all
                duration-500
                shadow-[0_15px_40px_rgba(248,188,4,.16)]
                hover:bg-white
                flex
                flex-col
                h-full
              "
            >

              <div className="relative h-[115px] sm:h-[180px] lg:h-[220px] bg-[#F8BC04] overflow-hidden flex-shrink-0">

                <Image
                  src="/home/ourservice/bigbeansdigitalwebsite.png"
                  alt="Website Development"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="p-3.5 sm:p-5 lg:p-7 flex flex-col flex-1">

                <h3
                  className="
                    text-[15px]
                    sm:text-[19px]
                    lg:text-[20px]
                    font-bold
                    text-[#171717]
                    mb-2
                    sm:mb-4
                    leading-tight
                  "
                >
                  Website Development
                </h3>

                <p
                  className="
                    text-[11px]
                    sm:text-[13px]
                    lg:text-sm
                    text-black/75
                    leading-[1.5]
                    mb-4
                    sm:mb-5
                  "
                >
                  Premium websites designed for business growth.
                </p>

                <Link
                  href="/services/website-development"
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#171717]
                    text-white
                    px-3
                    sm:px-6
                    lg:px-10
                    py-2
                    sm:py-2.5
                    font-semibold
                    text-[10px]
                    sm:text-sm
                    transition-all
                    duration-300
                    hover:bg-[#F8BC04]
                    hover:text-black
                    whitespace-nowrap
                  "
                >
                  Explore
                  <ArrowRight size={15} />
                </Link>

              </div>
            </motion.div>

            {/* SERVICE 4 */}
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
              whileHover={{
                y: -6,
              }}
              className="
                group
                rounded-[20px]
                sm:rounded-[28px]
                overflow-hidden
                bg-[#171717]
                transition-all
                duration-500
                hover:bg-white
                flex
                flex-col
                h-full
              "
            >

              <div className="relative h-[115px] sm:h-[180px] lg:h-[220px] bg-[#171717] overflow-hidden flex-shrink-0">

                <Image
                  src="/home/ourservice/bigbeansdigitalperformancemarketing.png"
                  alt="Performance Marketing"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="p-3.5 sm:p-5 lg:p-7 flex flex-col flex-1">

                <h3
                  className="
                    text-[15px]
                    sm:text-[19px]
                    lg:text-[20px]
                    font-bold
                    text-white
                    group-hover:text-[#171717]
                    mb-2
                    sm:mb-4
                    leading-tight
                    transition-colors
                  "
                >
                  Performance Marketing
                </h3>

                <p
                  className="
                    text-[11px]
                    sm:text-[13px]
                    lg:text-sm
                    text-white/70
                    group-hover:text-black/75
                    leading-[1.5]
                    mb-4
                    sm:mb-5
                    transition-colors
                  "
                >
                  Professional creatives for every marketing platform.
                </p>

                <Link
                  href="/services/google-ads-meta-ads"
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#F8BC04]
                    text-black
                    px-3
                    sm:px-6
                    lg:px-10
                    py-2
                    sm:py-2.5
                    font-semibold
                    text-[10px]
                    sm:text-sm
                    transition-all
                    duration-300
                    whitespace-nowrap
                  "
                >
                  Explore
                  <ArrowRight size={15} />
                </Link>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          OUR PROCESS
      ========================================================= */}
      <section className="bg-[#FFFFFF] py-10 sm:py-16 lg:py-28">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          <div
            className="
              grid
              lg:grid-cols-4
              gap-4
              sm:gap-6
              lg:gap-6
              items-stretch
            "
          >

            {/* PROCESS INTRO */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                sm:rounded-[36px]
                lg:rounded-[40px]
                bg-[#F8BC04]
                p-6
                sm:p-8
                lg:p-10
                min-h-[300px]
                sm:min-h-[330px]
                lg:min-h-[720px]
                lg:row-span-2
                flex
                flex-col
              "
            >

              <h2
                className="
                  text-[34px]
                  sm:text-5xl
                  lg:text-[48px]
                  font-black
                  text-black
                  leading-none
                  relative
                  z-10
                "
              >
                Our Process
              </h2>

              <p
                className="
                  mt-6
                  sm:mt-7
                  lg:mt-8
                  text-[13px]
                  sm:text-base
                  lg:text-[16px]
                  leading-[1.7]
                  text-black/80
                  max-w-[600px]
                  relative
                  z-10
                "
              >
                Every successful brand starts with the right strategy. At BIGBEANS DIGITAL, we follow a proven, data-driven process that helps startups and growing businesses build a strong online presence, attract qualified customers, and achieve sustainable business growth through digital marketing.
              </p>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[-5px]
                  left-[-10px]
                  opacity-20
                  pointer-events-none
                  z-0
                "
              >
                <Image
                  src="/assets/growth-arrow.png"
                  alt="Growth Arrow"
                  width={500}
                  height={300}
                  className="
                    w-[280px]
                    sm:w-[380px]
                    lg:w-[500px]
                    h-auto
                  "
                />
              </motion.div>

            </motion.div>

            {/* PROCESS CARDS */}
            <div
              className="
                lg:col-span-3
                grid
                grid-cols-2
                gap-3
                sm:gap-5
                lg:gap-6
                auto-rows-fr
              "
            >

              <ProcessCard
                number="01"
                title="Business Discovery"
                description="We understand your business, target audience, industry, competitors, and growth goals to create a customized digital marketing strategy that delivers measurable results from day one."
                icon={<Search size={22} />}
                dark
              />

              <ProcessCard
                number="02"
                title="Strategy & Growth Planning"
                description="Our experts build a tailored roadmap covering Social Media Marketing, SEO, Performance Marketing, Website Development, Branding, and content strategy to maximize your online growth."
                icon={<FileText size={22} />}
              />

              <ProcessCard
                number="03"
                title="Brand Development"
                description="We create a memorable brand identity with professional branding, graphic design, logo design, and messaging that helps your business stand out and build customer trust."
                icon={<Layout size={22} />}
                dark
              />

              <ProcessCard
                number="04"
                title="Campaign Launch & Management"
                description="From Google Ads, Meta Ads, and Social Media Marketing to SEO and lead generation campaigns, we launch, manage, and optimize every campaign for maximum ROI."
                icon={<Rocket size={22} />}
              />

              <ProcessCard
                number="05"
                title="Performance Optimization"
                description="Using real-time analytics and customer insights, we continuously improve campaigns to increase traffic, generate more qualified leads, boost conversions, and accelerate business growth."
                icon={<BarChart3 size={22} />}
                dark
              />

              <ProcessCard
                number="06"
                title="Transparent Reporting"
                description="Track every campaign with easy-to-understand reports showing traffic, leads, conversions, ROI, and business performance, so you always know how your marketing investment is performing."
                icon={<FileBarChart size={22} />}
              />

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MOVING SERVICES STRIP
      ========================================================= */}
      <section className="py-1 overflow-hidden">

        <div className="relative">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-3 sm:gap-4 w-max"
          >
            {[
              "Logo Design",
              "Brand Identity",
              "Packaging Design",
              "Brand Strategy",
              "Visual Identity",
              "Creative Direction",
              "Startup Branding",
              "Corporate Branding",
              "Brand Guidelines",
              "Rebranding",
              "Brand Positioning",
              "Creative Design",
              "Marketing Assets",
              "Logo Design",
              "Brand Identity",
              "Packaging Design",
              "Brand Strategy",
              "Visual Identity",
              "Creative Direction",
              "Startup Branding",
              "Corporate Branding",
              "Brand Guidelines",
              "Rebranding",
              "Brand Positioning",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  rounded-full
                  bg-[#171717]
                  text-white
                  whitespace-nowrap
                  shadow-xl
                  border
                  border-[#2a2a2a]
                "
              >
                <span className="text-[#F8BC04] text-base sm:text-lg">
                  ✦
                </span>

                <span className="font-semibold text-xs sm:text-sm">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          RECENT WORK
      ========================================================= */}
      <section className="bg-[#FFFFFF] py-14 sm:py-20 lg:py-28">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 sm:mb-16">

            <div>
              <p
                className="
                  uppercase
                  tracking-[4px]
                  sm:tracking-[6px]
                  text-[10px]
                  sm:text-sm
                  font-semibold
                  text-gray-500
                  mb-3
                  sm:mb-4
                "
              >
                SHOWCASING EXCELLENCE
              </p>

              <h2
                className="
                  text-[34px]
                  sm:text-5xl
                  md:text-6xl
                  font-black
                  text-[#171717]
                  leading-tight
                "
              >
                Our Recent{" "}
                <span className="text-[#F8BC04]">
                  Work
                </span>
              </h2>
            </div>

            <button
              className="
                mt-6
                lg:mt-0
                self-start
                lg:self-auto
                bg-[#F8BC04]
                px-6
                sm:px-8
                py-3
                sm:py-4
                rounded-full
                font-semibold
                text-sm
                sm:text-base
                hover:scale-105
                transition
              "
            >
              View All →
            </button>

          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              gap-4
              sm:gap-6
              lg:gap-8
              items-stretch
            "
          >

            {/* WORK 1 */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                bg-white
                rounded-[24px]
                sm:rounded-[30px]
                overflow-hidden
                shadow-sm
                border
                border-gray-100
                h-full
                flex
                flex-col
              "
            >

              <div className="overflow-hidden flex-shrink-0">

                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Image
                    src="/home/ourservice/socialmedia.png"
                    alt="Social Media Marketing"
                    width={700}
                    height={500}
                    className="
                      w-full
                      h-[185px]
                      sm:h-[200px]
                      lg:h-[260px]
                      object-cover
                    "
                  />
                </motion.div>

              </div>

              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">

                <p className="text-[11px] sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  Social Media Marketing
                </p>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-bold
                    text-[#171717]
                    leading-tight
                  "
                >
                  Social Media Campaigns
                </h3>

                <button
                  className="
                    mt-auto
                    pt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    sm:text-sm
                    font-semibold
                    hover:gap-4
                    transition-all
                  "
                >
                  Know About The Service →
                </button>

              </div>

            </motion.div>

            {/* WORK 2 */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                bg-white
                rounded-[24px]
                sm:rounded-[30px]
                overflow-hidden
                shadow-sm
                border
                border-gray-100
                h-full
                flex
                flex-col
              "
            >

              <div className="overflow-hidden flex-shrink-0">

                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Image
                    src="/home/ourservice/bigbeansdigitalbranding.png"
                    alt="Branding"
                    width={700}
                    height={500}
                    className="
                      w-full
                      h-[185px]
                      sm:h-[200px]
                      lg:h-[260px]
                      object-cover
                    "
                  />
                </motion.div>

              </div>

              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">

                <p className="text-[11px] sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  Brand Identity & Design
                </p>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-bold
                    text-[#171717]
                    leading-tight
                  "
                >
                  Branding Projects
                </h3>

                <button
                  className="
                    mt-auto
                    pt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    sm:text-sm
                    font-semibold
                    hover:gap-4
                    transition-all
                  "
                >
                  Know About The Service →
                </button>

              </div>

            </motion.div>

            {/* WORK 3 */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                bg-white
                rounded-[24px]
                sm:rounded-[30px]
                overflow-hidden
                shadow-sm
                border
                border-gray-100
                h-full
                flex
                flex-col
              "
            >

              <div className="overflow-hidden flex-shrink-0">

                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Image
                    src="/home/ourservice/bigbeansdigitalwebsite.png"
                    alt="Website Design"
                    width={700}
                    height={500}
                    className="
                      w-full
                      h-[185px]
                      sm:h-[200px]
                      lg:h-[260px]
                      object-cover
                    "
                  />
                </motion.div>

              </div>

              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">

                <p className="text-[11px] sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  Website Development
                </p>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-bold
                    text-[#171717]
                    leading-tight
                  "
                >
                  Website Design Projects
                </h3>

                <button
                  className="
                    mt-auto
                    pt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    sm:text-sm
                    font-semibold
                    hover:gap-4
                    transition-all
                  "
                >
                  Know About The Service →
                </button>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          RESULTS
      ========================================================= */}
      <section className="bg-[#FFFFFF] py-10 sm:py-16 lg:py-20 overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

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
            }}
            className="
              text-center
              text-[34px]
              sm:text-5xl
              md:text-7xl
              font-black
              text-[#171717]
              leading-tight
            "
          >
            Built for{" "}
            <span className="text-[#F8BC04]">
              What's Next
            </span>
          </motion.h2>

          <div
            className="
              grid
              grid-cols-2
              xl:grid-cols-4
              gap-3
              sm:gap-5
              mt-9
              sm:mt-14
            "
          >

            <motion.div
              whileHover={{
                y: -7,
              }}
              className="
                bg-[#F8BC04]
                rounded-[22px]
                sm:rounded-[28px]
                p-4
                sm:p-7
                lg:p-8
              "
            >
              <TrendingUp
                size={28}
                className="text-white sm:w-[34px] sm:h-[34px]"
              />

              <p className="mt-3 sm:mt-4 text-[10px] sm:text-sm">
                Performance
              </p>

              <h3 className="text-[38px] sm:text-5xl font-black mt-1 sm:mt-2 leading-none">
                3.5x
              </h3>

              <p className="mt-2 text-[11px] sm:text-sm leading-relaxed">
                Higher Campaign Performance
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -7,
              }}
              className="
                border-2
                border-[#F8BC04]
                rounded-[22px]
                sm:rounded-[28px]
                p-4
                sm:p-7
                lg:p-8
              "
            >
              <Users
                size={28}
                className="text-[#F8BC04] sm:w-[34px] sm:h-[34px]"
              />

              <p className="mt-3 sm:mt-4 text-[10px] sm:text-sm">
                Qualified Leads
              </p>

              <h3 className="text-[38px] sm:text-5xl font-black mt-1 sm:mt-2 leading-none">
                10x
              </h3>

              <p className="mt-2 text-[11px] sm:text-sm leading-relaxed">
                More High-Intent Leads
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -7,
              }}
              className="
                bg-[#F8BC04]
                rounded-[22px]
                sm:rounded-[28px]
                p-4
                sm:p-7
                lg:p-8
              "
            >
              <ThumbsUp
                size={28}
                className="text-white sm:w-[34px] sm:h-[34px]"
              />

              <p className="mt-3 sm:mt-4 text-[10px] sm:text-sm">
                Audience Growth
              </p>

              <h3 className="text-[38px] sm:text-5xl font-black mt-1 sm:mt-2 leading-none">
                70%
              </h3>

              <p className="mt-2 text-[11px] sm:text-sm leading-relaxed">
                Stronger Brand Engagement
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -7,
              }}
              className="
                border-2
                border-[#F8BC04]
                rounded-[22px]
                sm:rounded-[28px]
                p-4
                sm:p-7
                lg:p-8
              "
            >
              <LineChart
                size={28}
                className="text-[#F8BC04] sm:w-[34px] sm:h-[34px]"
              />

              <p className="mt-3 sm:mt-4 text-[10px] sm:text-sm">
                Business Growth
              </p>

              <h3 className="text-[38px] sm:text-5xl font-black mt-1 sm:mt-2 leading-none">
                60%
              </h3>

              <p className="mt-2 text-[11px] sm:text-sm leading-relaxed">
                Growth in Just 3 Months
              </p>
            </motion.div>

          </div>

          <div className="text-center mt-16 sm:mt-24 relative">

            <h3
              className="
                relative
                text-[27px]
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                text-[#171717]
                text-center
                leading-tight
              "
            >
              Driven by Strategy. Powered by Creativity.{" "}
              <span className="text-[#F8BC04]">
                Built for Growth.
              </span>
            </h3>

          </div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              max-w-4xl
              mx-auto
              text-center
              text-sm
              sm:text-lg
              lg:text-xl
              text-gray-600
              mt-6
              sm:mt-10
              leading-relaxed
            "
          >
            BigBeans Digital is a Social Media Marketing Agency in Kolkata helping startups,
            entrepreneurs, and growing businesses across India, Dubai, the UAE, and the United Kingdom
            build brands that stand out. From creative social media marketing and branding to graphic design,
            website development, and performance marketing, we create tailored digital strategies that increase
            brand visibility, generate qualified leads, and drive sustainable business growth.
          </motion.p>

          <div className="flex justify-center mt-7 sm:mt-12">

            <Link href="https://wa.link/pxmrrm">
              <button
                className="
                  bg-[#F8BC04]
                  text-black
                  px-6
                  sm:px-8
                  py-3
                  rounded-full
                  font-semibold
                  text-sm
                  sm:text-base
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Get Free Consultation
              </button>
            </Link>

          </div>

        </div>
      </section>

      
{/* =========================================================
      BLOGS
   ========================================================= */}
<section className="bg-[#FFFFFF] py-10 sm:py-16">

  <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-9 sm:mb-16">

      <div>

        <p
          className="
            uppercase
            tracking-[4px]
            sm:tracking-[6px]
            text-[10px]
            sm:text-sm
            font-semibold
            text-gray-500
            mb-3
            sm:mb-4
          "
        >
          OUR BLOGS
        </p>

        <h2
          className="
            text-[34px]
            sm:text-5xl
            md:text-6xl
            font-black
            text-[#171717]
            leading-tight
          "
        >
          Stay Updated with{" "}
          <span className="text-[#F8BC04]">
            Our Blogs
          </span>
        </h2>

        <p
          className="
            max-w-6xl
            mx-auto
            mt-5
            sm:mt-8
            text-sm
            sm:text-lg
            text-gray-600
            leading-relaxed
          "
        >
          Discover actionable insights, social media marketing strategies, branding tips,
          creative design trends, and digital marketing guides designed for startups, entrepreneurs,
          and growing businesses. Explore expert articles from BigBeans Digital to help your business
          grow online, build a stronger brand, and stay ahead of the competition.
        </p>

      </div>

      <Link href="/blog">

        <button
          className="
            mt-6
            lg:mt-25
            bg-[#F8BC04]
            px-6
            sm:px-8
            py-3
            sm:py-4
            rounded-full
            font-semibold
            text-sm
            sm:text-base
            hover:scale-105
            transition
            whitespace-nowrap
          "
        >
          View All Blogs →
        </button>

      </Link>

    </div>

    


<div
  className="
    mt-12
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-8
    items-stretch
  "
>
  {blogCards.map((blog) => (
    <Link
      key={blog.id}
      href={blog.link}
      className="group block h-full"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="
          relative
          bg-white
          rounded-[24px]
          overflow-hidden
          border
          border-gray-200
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
          h-full
          flex
          flex-col
          transition-shadow
          duration-300
        "
      >

        {/* IMAGE */}
        <div className="relative w-full h-[265px] overflow-hidden">

          <motion.img
            src={blog.image}
            alt={blog.title}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="
              w-full
              h-full
              object-cover
              block
            "
          />

          {/* DATE */}
          <div
            className="
              absolute
              bottom-4
              left-5
              text-white
              text-[12px]
              sm:text-[13px]
              font-semibold
              tracking-wide
              drop-shadow-md
            "
          >
            {blog.date}
          </div>

          {/* CATEGORY */}
          <div
            className="
              absolute
              bottom-4
              right-4
              bg-white
              text-[#171717]
              px-5
              py-2
              rounded-full
              text-[11px]
              sm:text-[12px]
              font-medium
              shadow-sm
            "
          >
            {blog.category}
          </div>

        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-col
            flex-1
            px-6
            sm:px-7
            pt-7
            pb-6
          "
        >

          {/* TITLE */}
          <h3
            className="
              text-[21px]
              sm:text-[22px]
              leading-[1.15]
              font-medium
              text-[#171717]
              tracking-[-0.3px]
            "
          >
            {blog.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5
              text-[14px]
              sm:text-[15px]
              leading-[1.65]
              text-gray-500
              font-normal
            "
          >
            {blog.description}
          </p>

          {/* DIVIDER */}
          <div
            className="
              mt-7
              border-t
              border-gray-200
            "
          />

          {/* READ ARTICLE */}
          <div
            className="
              mt-5
              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                text-[12px]
                sm:text-[13px]
                font-semibold
                tracking-[1.5px]
                text-[#171717]
              "
            >
              READ ARTICLE
            </span>

            <span
              className="
                w-9
                h-9
                rounded-full
                bg-[#171717]
                flex
                items-center
                justify-center
                text-white
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

          </div>

        </div>

        {/* YELLOW BOTTOM BORDER */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[3px]
            bg-[#F8BC04]
          "
        />

      </motion.div>
    </Link>
  ))}
</div>


  </div>

</section>



      {/* =========================================================
          GLOBAL PRESENCE
      ========================================================= */}
      <section className="bg-[#FFFFFF] py-8 sm:py-10">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          <div
            className="
              bg-white
              rounded-[28px]
              sm:rounded-[40px]
              border
              border-gray-200
              p-5
              sm:p-8
              lg:p-16
              grid
              lg:grid-cols-2
              gap-8
              lg:gap-12
              items-center
            "
          >

            <div>

              <p
                className="
                  uppercase
                  tracking-[4px]
                  sm:tracking-[6px]
                  text-[10px]
                  sm:text-sm
                  font-semibold
                  text-gray-500
                  mb-5
                  sm:mb-6
                "
              >
                Global Presence
              </p>

              <h2
                className="
                  text-[32px]
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                  text-[#171717]
                  leading-tight
                "
              >
                Empowering Businesses Across{" "}
                <span className="text-[#F8BC04]">
                  12+
                </span>
                <br />
                Locations Currently
              </h2>

              <p
                className="
                  mt-6
                  sm:mt-8
                  text-sm
                  sm:text-lg
                  text-gray-600
                  leading-relaxed
                  max-w-[650px]
                "
              >
                BigBeans Digital partners with startups, entrepreneurs,
                and growing businesses across Kolkata, Delhi, Bangalore, Mumbai, Pune,
                Noida, Tripura, London, Singapore, Canada, Australia, and Nigeria.
                Our creative social media marketing, branding, and digital growth
                strategies are designed to help businesses build a stronger online
                presence, connect with their audience, and achieve sustainable
                growth—wherever they operate.
              </p>

              <div className="grid grid-cols-2 gap-5 sm:gap-10 mt-8 sm:mt-12">

                <div className="sm:border-r sm:border-black/30 sm:pr-10">

                  <h3 className="font-bold text-base sm:text-xl">
                    In India
                  </h3>

                  <div className="w-14 sm:w-20 h-[2px] bg-[#F8BC04] mt-2 mb-4 sm:mb-5"></div>

                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-base text-gray-700">

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

                  <h3 className="font-bold text-base sm:text-xl">
                    International Presence
                  </h3>

                  <div className="w-14 sm:w-20 h-[2px] bg-[#F8BC04] mt-2 mb-4 sm:mb-5"></div>

                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-base text-gray-700">

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

            <div className="relative w-full mt-4 lg:mt-0">

              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="w-full h-auto max-w-full"
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[42%]
                  left-[67%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[27%]
                  left-[44%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[28%]
                  left-[18%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[50%]
                  left-[47%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[54%]
                  left-[74%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
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

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#FFFFFF] py-10 sm:py-16">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          <div className="text-center mb-10 sm:mb-16 relative">

            <div
              className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                w-20
                h-20
                sm:w-24
                sm:h-24
                rounded-full
                bg-[#F8BC04]/35
              "
            />

            <p
              className="
                uppercase
                tracking-[4px]
                sm:tracking-[6px]
                text-[10px]
                sm:text-sm
                font-semibold
                text-gray-500
                relative
              "
            >
              ANSWERING YOUR QUERIES
            </p>

            <h2
              className="
                relative
                mt-3
                sm:mt-4
                text-[34px]
                sm:text-5xl
                md:text-6xl
                font-black
                text-[#171717]
                leading-tight
              "
            >
              Frequently Asked{" "}
              <span className="text-[#F8BC04]">
                Questions
              </span>
            </h2>

          </div>

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-3
              sm:gap-5
            "
          >

            {[
              {
                q: "How do I choose the best Social Media Marketing Agency in India?",
                a: "Choosing the right Social Media Marketing Agency depends on experience, creative quality, strategy, transparency, and proven results. The best agencies don't just post content—they build a social media strategy that increases brand awareness, engages your audience, and generates business growth. At BigBeans Digital, we help startups and growing businesses across India, the UAE, and the UK create impactful social media campaigns backed by creativity and data-driven strategy."
              },
              {
                q: "Is social media marketing worth it for startups and small businesses?",
                a: "Absolutely. Social media marketing is one of the most cost-effective ways for startups and small businesses to build brand awareness, attract customers, and compete with larger brands. With the right content strategy and creative execution, businesses can increase visibility, build trust, and generate quality leads without requiring massive advertising budgets."
              },
              {
                q: "What services does a Social Media Marketing Agency provide?",
                a: "A professional Social Media Marketing Agency typically offers social media management, content creation, graphic design, video creatives, content strategy, paid social media advertising, community management, and performance reporting. BigBeans Digital combines all of these services to help businesses build a consistent and engaging online presence."
              },
              {
                q: "How long does social media marketing take to show results?",
                a: "While every business is different, most brands begin to see improvements in engagement, reach, and audience growth within the first few months of a consistent strategy. Sustainable lead generation and long-term brand growth come from continuous content creation, optimization, and audience engagement.."
              },
              {
                q: "Is digital marketing worth it for small businesses?",
                a: "Absolutely. It helps businesses reach highly targeted audiences while maximizing marketing budgets."
              },
              {
                q: "Can you manage branding, design, and social media together?",
                a: "Yes. BigBeans Digital provides complete brand growth solutions, including Branding, Logo Design, Graphic Design, Social Media Marketing, Content Creation, Website Development, and Performance Marketing, ensuring every aspect of your digital presence works together to support business growth."
              },
              {
                q: "How much does social media marketing cost?",
                a: "Our pricing depends on your business goals, the number of platforms you want to manage, content requirements, advertising budget, and campaign objectives. We offer flexible packages designed for startups, small businesses, and growing brands.."
              },
              {
                q: "Who can benefit from BigBeans Digital's services?",
                a: "Our services are designed for startups, entrepreneurs, small businesses, and growing brands looking to build a strong digital presence. Whether you need social media marketing, branding, creative design, or performance marketing, we help businesses across India, the UAE, and the UK increase brand visibility, attract the right audience, and achieve sustainable business growth."
              },
              {
                q: "Why choose BigBeans Digital as your Social Media Marketing Agency?",
                a: "BigBeans Digital helps startups, entrepreneurs, and growing businesses build a strong online presence through creative social media marketing, branding, graphic design, and performance-driven digital strategies. As a Social Media Marketing Agency based in Kolkata, we work with businesses across India and international markets to create campaigns that drive engagement, generate leads, and support long-term business growth."
              },
              {
                q: "Do you provide customized strategies?",
                a: "Yes. Every business has different goals and challenges. That's why we create customized social media marketing, branding, and creative strategies based on your industry, target audience, competitors, and growth objectives instead of using one-size-fits-all templates."
              },
            ].map((faq, index) => (

              <motion.div
                key={index}
                layout
                className="
                  bg-white
                  border
                  border-gray-300
                  rounded-[18px]
                  sm:rounded-[20px]
                  overflow-hidden
                "
              >

                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index
                        ? null
                        : index
                    )
                  }
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    p-4
                    sm:p-6
                    text-left
                    min-h-[68px]
                  "
                >

                  <span
                    className="
                      font-semibold
                      text-[12px]
                      sm:text-base
                      leading-relaxed
                      text-[#171717]
                      pr-3
                      sm:pr-4
                    "
                  >
                    {faq.q}
                  </span>

                  <span
                    className="
                      w-8
                      h-8
                      sm:w-10
                      sm:h-10
                      flex-shrink-0
                      rounded-full
                      bg-[#171717]
                      text-white
                      flex
                      items-center
                      justify-center
                      text-lg
                      sm:text-xl
                    "
                  >
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>

                {openFaq === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="px-4 sm:px-6 pb-5 sm:pb-6"
                  >
                    <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}

              </motion.div>

            ))}

          </div>

        </div>
      </section>

    </section>
  );
}