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

import OurWork from "@/components/Recentwork";

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


{
      id: 6,
      image:
        "/assets/blog/singleblogs/new-instagram-logo-redesign.png",
      date: "August 17, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Business",
      title: "New Instagram Logo 2026: Wordmark Redesign & Brand Refresh",
      description:
        "Discover the new Instagram logo 2026, its wordmark redesign, “Instagzam” backlash, typography changes and what Instagram's brand refresh means for marketers.",
      link: "/blog/new-instagram-logo-redesign",
    },


{
      id: 7,
      image:
        "/assets/blog/singleblogs/why-is-my-competitor-getting-more-leads.png",
      date: "August 17, 2026",
      primaryCategory: "Social Media",
      secondaryCategory: "Business",
      title: "Why Is My Competitor Getting More Leads? | Digital Marketing India",
      description:
        "Your competitor opened later but gets more leads. Discover how SEO, Google Business Profile, social media, reviews and local digital marketing can help Indian businesses grow.",
      link: "/blog/why-is-my-competitor-getting-more-leads",
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
          Where Creativity
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
          Meets Strategy 
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
                  Looking for a digital partner that understands startups?
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
                  Helping Startups & Businesses in India, USA & UK Build Brands That Grow High In Their Niece
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
                  At Big Beans Digital, we help startups and growing businesses turn ideas into brands people remember. 
                  Our social media marketing agency service combines creative thinking, strategic planning, and measurable 
                  execution to build visibility, engagement, and long-term growth. From social media marketing services in 
                  India to social media marketing agency London solutions, we create practical digital strategies for businesses 
                  ready to grow. Whether you need a digital marketing service near me, stronger branding, a high-performing website, 
                  or campaigns that convert, our team focuses on what your business actually needs—not one-size-fits-all marketing.
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
            We Are Trusted by 100+ Startups & Businesses
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
            From ambitious startups to growing businesses, Big Beans Digital delivers practical social 
            media marketing services in India and social media marketing agency London solutions designed 
            to build visibility, engagement, and growth. Our team combines digital marketing service expertise, 
            performance marketing, website development, and branding to help businesses connect with the right 
            audience and grow with confidence across India, USA, and the UK.
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
      <section className="pt-6 sm:pt-10 pb-5 sm:pb-5 bg-white overflow-hidden">

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
                  Build a memorable brand with strategic branding solutions designed for startups and growing businesses.
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
                  Grow your online presence with a digital marketing service near me focused on visibility, engagement, and qualified leads.
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
                  Create a fast, modern website that strengthens your brand and turns visitors into potential customers.
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
                  Reach the right audience with social media advertising agency near me solutions built to drive measurable growth..
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

<section
  className="relative overflow-hidden bg-white pb-10 sm:pb-10 py-8 sm:py-10 lg:py-12"
  style={{
    fontFamily: "Roboto, sans-serif",
  }}
>
  {/* =========================
      BACKGROUND GLOW
  ========================= */}

  <motion.div
    animate={{
      scale: [1, 1.18, 1],
      opacity: [0.04, 0.09, 0.04],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div
    
  >

    {/* =====================================================
        HEADING
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto max-w-[1100px] text-center"
    >

      {/* H2 */}

      <h2
        className="
          text-[42px]
          font-black
          leading-none
          tracking-tight
          text-[#171717]
          sm:text-[52px]
          lg:text-[60px]
        "
      >
        Our{" "}
        <span className="text-[#F8BC04]">
          Process
        </span>
      </h2>

      {/* DESCRIPTION */}

      <p
        className="
          mx-auto
          mt-5
          max-w-[1150px]
          text-[13px]
          leading-[1.5]
          text-[#171717]
          sm:mt-6
          sm:text-[15px]
          lg:text-[16px]
          lg:leading-[1.5]
        "
        style={{
          textAlign: "justify",
          textAlignLast: "center",
        }}
      >
        Every successful brand starts with the right strategy. At BIGBEANS DIGITAL, we follow a clear, data-informed process combining 
        social media marketing services in India and digital marketing service near me solutions to help startups and growing businesses 
        build visibility, attract the right audience, and achieve measurable growth.
      </p>

    </motion.div>


    {/* =====================================================
        PROCESS CARDS
    ===================================================== */}

    <div
      className="
        mx-auto
        mt-8
        grid
        max-w-[1250px]
        grid-cols-2
        gap-3
        sm:mt-9
        sm:gap-4
        lg:mt-10
        lg:grid-cols-3
        lg:gap-5
      "
    >

      {[
        {
          number: "01",
          title: "Business Discovery",
          description:
            "We understand your business, audience, competitors, and goals before building a strategy. This helps us create the right social media marketing service India approach alongside a focused digital marketing service near me strategy tailored to your growth objectives.",
          icon: <Search size={18} />,
          dark: true,
        },
        {
          number: "02",
          title: "Strategy & Growth Planning",
          description:
            "We create a tailored roadmap using social media marketing agency service and social media marketing services in India to strengthen your online presence. Our strategy can also bring together branding, SEO, website development, and performance marketing around your business goals.",
          icon: <FileText size={18} />,
          dark: false,
        },
        {
          number: "03",
          title: "Brand Development",
          description:
            "We build distinctive identities through strategic branding and best digital marketing services near me that help businesses communicate consistently. Combined with social media marketing agency for startups expertise, we create a brand presence that earns attention and customer trust.",
          icon: <Layout size={18} />,
          dark: true,
        },
        {
          number: "04",
          title: "Campaign Launch & Management",
          description:
            "From Google Ads, Meta Ads, and Social Media Marketing to SEO and lead generation campaigns, we launch, manage, and optimize every campaign for maximum ROI.",
          icon: <Rocket size={18} />,
          dark: false,
        },
        {
          number: "05",
          title: "Performance Optimization",
          description:
            "We continuously improve campaigns using real performance data, audience behaviour, and creative insights. Our social media marketing agencies near me approach works alongside digital marketing service near me strategies to improve reach, qualified leads, conversions, and overall campaign performance.",
          icon: <BarChart3 size={18} />,
          dark: true,
        },
        {
          number: "06",
          title: "Transparent Reporting",
          description:
            "You deserve to know exactly what your marketing investment is achieving. We provide straightforward reports covering traffic, engagement, leads, conversions, and ROI, giving businesses using our social media marketing services for startups or digital marketing services for startups in India, UK or USA a clear view of progress.",
          icon: <FileBarChart size={18} />,
          dark: false,
        },
      ].map((item, index) => (

        <motion.div
          key={item.number}
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.8,
            delay: index * 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -7,
            scale: 1.015,
          }}
          className={`
            group
            relative
            h-[180px]
            overflow-hidden
            rounded-[20px]
            p-4
            shadow-sm
            transition-shadow
            duration-500
            sm:h-[190px]
            sm:rounded-[22px]
            sm:p-5
            lg:h-[185px]
            lg:p-5
            xl:h-[195px]
            xl:p-6

            ${
              item.dark
                ? "bg-[#171717] text-white"
                : "bg-[#F8BC04] text-black"
            }

            ${
              item.dark
                ? "hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
                : "hover:shadow-[0_20px_50px_rgba(248,188,4,0.25)]"
            }
          `}
        >

          {/* =========================
              CARD NUMBER
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 1 + 0.15,
              ease: "easeOut",
            }}
            className={`
              relative
              z-10
              text-[27px]
              font-black
              leading-none
              sm:text-[30px]
              lg:text-[32px]
              ${
                item.dark
                  ? "text-[#F8BC04]"
                  : "text-black"
              }
            `}
          >
            {item.number}
          </motion.div>


          {/* =========================
              ICON
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              rotate: -25,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 1 + 0.3,
              ease: "backOut",
            }}
            whileHover={{
              rotate: 360,
              scale: 1.15,
            }}
            className={`
              absolute
              right-4
              top-4
              z-20
              sm:right-5
              sm:top-5
              ${
                item.dark
                  ? "text-white"
                  : "text-black"
              }
            `}
          >
            {item.icon}
          </motion.div>


          {/* =========================
              CONTENT
          ========================= */}

          <div className="relative z-10 mt-6 sm:mt-7">

            {/* H3 */}

            <motion.h3
              whileHover={{
                x: 3,
              }}
              className="
                whitespace-nowrap
                text-[11px]
                font-black
                leading-[1.05]
                sm:text-[15px]
                lg:text-[17px]
                xl:text-[18px]
              "
            >
              {item.title}
            </motion.h3>


            {/* PARAGRAPH */}

            <p
              className={`
                mt-3
                max-w-[500px]
                text-[9px]
                leading-[1.45]
                sm:text-[10px]
                sm:leading-[1.5]
                lg:text-[10px]
                xl:text-[11px]

                ${
                  item.dark
                    ? "text-white/80"
                    : "text-black/75"
                }
              `}
              style={{
                textAlign: "justify",
                textAlignLast: "left",
              }}
            >
              {item.description}
            </p>

          </div>


          {/* =========================
              LARGE BACKGROUND NUMBER
          ========================= */}

          <motion.div
            animate={{
              y: [0, -5, 0],
              opacity: [0.06, 0.09, 0.06],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={`
              pointer-events-none
              absolute
              -bottom-8
              right-0
              select-none
              text-[80px]
              font-black
              leading-none
              sm:text-[90px]
              lg:text-[100px]

              ${
                item.dark
                  ? "text-white/[0.07]"
                  : "text-black/[0.07]"
              }
            `}
          >
            {item.number}
          </motion.div>


          {/* =========================
              HOVER SHINE
          ========================= */}

          <motion.div
            initial={{
              x: "-140%",
            }}
            whileHover={{
              x: "180%",
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-[70px]
              rotate-[18deg]
              bg-white/10
              blur-xl
            "
          />

        </motion.div>

      ))}

    </div>

  </div>
</section>



{/* =========================================================
    OUR WORK CROUSAL 
========================================================= */}

<OurWork />



{/* =========================================================
    CTA • THREE CARDS
========================================================= */}

<section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-visible">
  <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        md:gap-6
        lg:gap-8
        items-start
      "
    >

      {/* =====================================================
          CARD 01 — REQUEST A PROPOSAL
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          h-[500px]
          sm:h-[520px]
          lg:h-[500px]
          overflow-visible
          bg-[#F8BC04]
          rounded-tl-[70px]
          rounded-tr-none
          rounded-br-none
          rounded-bl-none
          px-6
          pt-12
          sm:px-7
          sm:pt-12
          lg:px-6
          lg:pt-12
        "
      >

        {/* TEXT */}

        <div className="relative z-30 max-w-[320px]">
          <h3
            className="
              text-[25px]
              sm:text-[26px]
              lg:text-[24px]
              font-normal
              leading-[1.08]
              tracking-[-0.4px]
              text-black
            "
          >
            Looking to grow and be
            next brand everyone’s talking
            about?
            <br />
            <br />
            <br />
            
          </h3>

          <a
            href="/connect"
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              text-[20px]
              sm:text-[21px]
              lg:text-[20px]
              font-extrabold
              leading-[1.2]
              text-black
              transition-all
              duration-300
              hover:gap-3
            "
          >
            Connect With Our Beans 
            <span className="text-[22px] leading-none">↗</span>
          </a>
        </div>

        {/* DECORATIVE ARROW / ILLUSTRATION BEHIND */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            rotate: -8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-[95px]
            left-[8%]
            z-10
            pointer-events-none
            opacity-90
          "
        >
          <svg
            width="190"
            height="150"
            viewBox="0 0 190 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 115C50 112 76 92 105 66C127 47 145 29 174 10"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 9"
              opacity="0.45"
            />

            <path
              d="M158 13L177 9L172 28"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.45"
            />

            <path
              d="M22 35C30 29 41 29 48 35C41 41 30 41 22 35Z"
              stroke="black"
              strokeWidth="2.5"
              opacity="0.35"
            />
          </svg>
        </motion.div>

        {/* CARTOON */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-20
            bottom-[-195px]
            left-1/2
            -translate-x-1/2
            w-[88%]
            sm:w-[90%]
            lg:w-[92%]
            pointer-events-none
          "
        >
          <Image
            src="/home/cartoon1.png"
            alt="Creative character"
            width={600}
            height={700}
            className="
              block
              w-full
              h-auto
              object-contain
            "
          />
        </motion.div>

      </motion.div>


      {/* =====================================================
          CARD 02 — JOIN OUR TEAM
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          h-[500px]
          sm:h-[520px]
          lg:h-[500px]
          overflow-visible
          bg-black
          rounded-tl-[70px]
          rounded-tr-none
          rounded-br-none
          rounded-bl-none
          px-6
          pt-12
          sm:px-7
          sm:pt-12
          lg:px-6
          lg:pt-12
        "
      >

        {/* TEXT */}

        <div className="relative z-30 max-w-[325px]">
          <h3
            className="
              text-[25px]
              sm:text-[26px]
              lg:text-[25px]
              font-normal
              leading-[1.08]
              tracking-[-0.4px]
              text-white
            "
          >
            Dieing to be a part of us?
            <br />
            <br />
            <br />
            <br />
            <br />
           
          </h3>

          <a
            href="/join-our-team"
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              text-[20px]
              sm:text-[21px]
              lg:text-[20px]
              font-extrabold
              leading-[1.2]
              text-white
              transition-all
              duration-300
              hover:gap-3
            "
          >
            Join Our Team of Beans
            <span className="text-[22px] leading-none">↗</span>
          </a>
        </div>

        {/* DECORATIVE SPEECH BUBBLES / ARROW */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            rotate: 6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-[80px]
            left-[7%]
            z-10
            pointer-events-none
          "
        >
          <svg
            width="210"
            height="160"
            viewBox="0 0 210 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 125C51 122 76 101 106 77C132 56 156 31 194 14"
              stroke="#F8BC04"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 9"
              opacity="0.8"
            />

            <path
              d="M178 17L196 13L191 31"
              stroke="#F8BC04"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M28 46C41 37 59 37 71 46C59 55 41 55 28 46Z"
              stroke="#F8BC04"
              strokeWidth="3"
              opacity="0.8"
            />

            <path
              d="M29 46L23 58"
              stroke="#F8BC04"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
        </motion.div>

        {/* CARTOON */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-20
            bottom-[-185px]
            left-1/2
            -translate-x-1/2
            w-[91%]
            sm:w-[93%]
            lg:w-[95%]
            pointer-events-none
          "
        >
          <Image
            src="/home/cartoon2.png"
            alt="Creative team"
            width={600}
            height={700}
            className="
              block
              w-full
              h-auto
              object-contain
            "
          />
        </motion.div>

      </motion.div>


      {/* =====================================================
          CARD 03 — NEWSLETTER / BLOG
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          h-[500px]
          sm:h-[520px]
          lg:h-[500px]
          overflow-visible
          bg-[#F8BC04]
          rounded-tl-[70px]
          rounded-tr-none
          rounded-br-none
          rounded-bl-none
          px-6
          pt-12
          sm:px-7
          sm:pt-12
          lg:px-6
          lg:pt-12
        "
      >

        {/* TEXT */}

        <div className="relative z-30 max-w-[325px]">
          <h3
            className="
              text-[25px]
              sm:text-[26px]
              lg:text-[25px]
              font-normal
              leading-[1.08]
              tracking-[-0.4px]
              text-black
            "
          >
            Want to read something Interesting?
            <br />
            <br />
            <br />
            <br />
            
          </h3>

          <a
            href="/blog"
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              text-[20px]
              sm:text-[21px]
              lg:text-[20px]
              font-extrabold
              leading-[1.2]
              text-black
              transition-all
              duration-300
              hover:gap-3
            "
          >
            Read Our Blogs
            <span className="text-[22px] leading-none">↗</span>
          </a>
        </div>

        {/* DECORATIVE LIGHTBULB / ENVELOPE ELEMENTS */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-[70px]
            right-[5%]
            z-10
            pointer-events-none
          "
        >
          <svg
            width="210"
            height="175"
            viewBox="0 0 210 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 142C54 137 79 116 109 91C140 65 164 35 195 16"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 9"
              opacity="0.45"
            />

            <path
              d="M179 18L197 14L192 32"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.45"
            />

            {/* Light bulb */}

            <path
              d="M58 35C58 23 67 14 79 14C91 14 100 23 100 35C100 43 96 49 91 54C87 58 86 62 86 66H72C72 62 70 58 66 54C61 49 58 43 58 35Z"
              stroke="black"
              strokeWidth="3"
              opacity="0.55"
            />

            <path
              d="M72 72H86"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />

            <path
              d="M74 79H84"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />

            {/* Envelope */}

            <rect
              x="123"
              y="48"
              width="52"
              height="38"
              rx="4"
              stroke="black"
              strokeWidth="3"
              opacity="0.55"
            />

            <path
              d="M126 52L149 70L172 52"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.55"
            />
          </svg>
        </motion.div>

        {/* CARTOON */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-20
            bottom-[-180px]
            left-1/2
            -translate-x-1/2
            w-[94%]
            sm:w-[96%]
            lg:w-[98%]
            pointer-events-none
          "
        >
          <Image
            src="/home/cartoon3.png"
            alt="Creative storyteller"
            width={600}
            height={700}
            className="
              block
              w-full
              h-auto
              object-contain
            "
          />
        </motion.div>

      </motion.div>

    </div>

  </div>
</section>





{/* =========================================================
    STRATEGY • CREATIVITY • GROWTH
========================================================= */}

<section
  className="
    relative
    w-full
    overflow-hidden
    bg-white
    pt-10
    pb-12
    sm:pt-10
    sm:pb-14
    lg:pt-40
    lg:pb-16
  "
  style={{
    fontFamily: "Roboto, sans-serif",
  }}
>

  <div
    className="
      relative
      z-10
      mx-auto
      w-full
      max-w-[1400px]
      px-5
      sm:px-7
      lg:px-10
      xl:px-12
    "
  >
    <div
      className="
        grid
        grid-cols-1
        gap-10
        lg:grid-cols-2
        lg:gap-0
      "
    >

      {/* =====================================================
          LEFT SIDE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
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
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          flex
          flex-col
          justify-center
          lg:pr-10
          xl:pr-14
        "
      >

        {/* H2 */}

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
            delay: 0.15,
          }}
          className="
            max-w-[650px]
            text-[34px]
            font-black
            leading-[1.08]
            tracking-tight
            text-[#171717]
            sm:text-[40px]
            md:text-[44px]
            lg:text-[43px]
            xl:text-[48px]
          "
        >
          <span className="block whitespace-nowrap">
            Driven by{" "}
            <span className="text-[#F8BC04]">
              Strategy.
            </span>
          </span>

          <span className="block whitespace-nowrap">
            Powered by{" "}
            <span className="text-[#F8BC04]">
              Creativity.
            </span>
          </span>

          <span
            className="
              block
              whitespace-nowrap
              text-[32px]
              sm:text-[38px]
              md:text-[42px]
              lg:text-[41px]
              xl:text-[46px]
            "
          >
            Built for Brand&apos;s{" "}
            <span className="text-[#F8BC04]">
              Growth.
            </span>
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
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-6
            max-w-[640px]
            text-[14px]
            leading-[1.55]
            text-[#171717]
            sm:mt-7
            sm:text-[15px]
            sm:leading-[1.6]
            lg:text-[16px]
          "
          style={{
            textAlign: "justify",
            textAlignLast: "left",
          }}
        >
          BigBeans Digital helps ambitious startups and growing businesses turn ideas into memorable brands. We combine creative thinking with practical digital strategies to build a stronger online presence, connect businesses with the right audience, and create marketing that drives meaningful growth.

Whether you're launching a new business or looking to take an existing brand to the next level, our approach brings strategy, creativity, and execution together under one roof.
        </motion.p>


        {/* CONSULTATION BUTTON */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="
            mt-7
            flex
            justify-start
          "
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=916289102537"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -4,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-[#171717]
              bg-[#171717]
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#F8BC04]
              shadow-[0_12px_30px_rgba(0,0,0,0.14)]
              transition-all
              duration-300
              hover:border-[#F8BC04]
              hover:bg-[#F8BC04]
              hover:text-[#171717]
              hover:shadow-[0_18px_40px_rgba(248,188,4,0.28)]
              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            Get Free Consultation
          </motion.a>
        </motion.div>

      </motion.div>


      {/* =====================================================
          RIGHT SIDE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 60,
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
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          flex
          flex-col
          justify-center
          lg:border-l
          lg:border-[#F8BC04]/40
          lg:pl-9
          xl:pl-11
        "
      >

        {/* H3 */}

        <motion.h3
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
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            text-[34px]
            font-normal
            leading-[1.05]
            tracking-tight
            text-[#171717]
            sm:text-[40px]
            md:text-[44px]
            lg:text-[43px]
            xl:text-[48px]
          "
        >
          Built for{" "}
          <span className="font-black text-[#F8BC04]">
            What&apos;s Next
          </span>
        </motion.h3>


        {/* DESCRIPTION */}

        <motion.p
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
            duration: 0.8,
            delay: 0.28,
          }}
          className="
            mt-5
            max-w-[650px]
            text-[13px]
            leading-[1.4]
            text-[#171717]
            sm:text-[14px]
            sm:leading-[1.45]
            lg:text-[15px]
          "
          style={{
            textAlign: "justify",
            textAlignLast: "left",
          }}
        >
          BIGBEANS DIGITAL is a results-driven digital marketing and social media marketing agency helping startups, entrepreneurs, and growing businesses across India and the UK. We create tailored strategies across social media marketing, branding, website development, graphic design, and performance marketing to help businesses increase visibility, generate qualified leads, and grow online.

Looking for a social media marketing agency for startups in India or a trusted digital marketing partner in the UK? Our team builds flexible marketing strategies around your goals, audience, industry, and growth stage rather than relying on one-size-fits-all campaigns.
        </motion.p>


        {/* STATS */}

        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3
            sm:gap-4
            lg:grid-cols-4
            lg:gap-3
            xl:gap-4
          "
        >
          {[
            {
              icon: <TrendingUp size={15} />,
              label: "Higher Campaign ROI",
              value: "4.2x",
              yellow: true,
            },
            {
              icon: <Users size={15} />,
              label: "Qualified Leads",
              value: "8x",
              yellow: false,
            },
            {
              icon: <ThumbsUp size={15} />,
              label: "Audience Growth",
              value: "70%",
              yellow: true,
            },
            {
              icon: <BarChart3 size={15} />,
              label: "Business Growth",
              value: "60%",
              yellow: false,
            },
            {
              icon: <TrendingUp size={15} />,
              label: "Website Launched",
              value: "50+",
              yellow: true,
            },
            {
              icon: <Users size={15} />,
              label: "Performance Marketing Launched",
              value: "500+",
              yellow: false,
            },
            {
              icon: <ThumbsUp size={15} />,
              label: "Branding Designed",
              value: "72+",
              yellow: true,
            },
            {
              icon: <BarChart3 size={15} />,
              label: "Trusted Clients",
              value: "102+",
              description: "Growth in Just 3 Months",
              yellow: false,
            },
          ].map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: 0.4 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                scale: 1.025,
              }}
              className={`
                group
                relative
                min-h-[96px]
                overflow-hidden
                rounded-[13px]
                border
                p-3
                transition-all
                duration-300
                sm:min-h-[105px]
                sm:p-4

                ${
                  stat.yellow
                    ? "border-[#F8BC04] bg-[#F8BC04]"
                    : "border-[#F8BC04]/40 bg-white"
                }

                ${
                  stat.yellow
                    ? "hover:shadow-[0_15px_35px_rgba(248,188,4,0.22)]"
                    : "hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]"
                }
              `}
            >

              {/* ICON */}

              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className={
                  stat.yellow
                    ? "text-white"
                    : "text-[#F8BC04]"
                }
              >
                {stat.icon}
              </motion.div>


              {/* LABEL */}

              <p
                className={`
                  mt-1
                  text-[7px]
                  font-medium
                  uppercase
                  leading-tight
                  sm:text-[8px]

                  ${
                    stat.yellow
                      ? "text-black/70"
                      : "text-[#171717]/60"
                  }
                `}
              >
                {stat.label}
              </p>


              {/* VALUE */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.6,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.55 + index * 0.08,
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                }}
                className={`
                  mt-1
                  text-[24px]
                  font-black
                  leading-none
                  sm:text-[27px]

                  ${
                    stat.yellow
                      ? "text-black"
                      : "text-[#171717]"
                  }
                `}
              >
                {stat.value}
              </motion.div>


              {/* DESCRIPTION */}

              <p
                className={`
                  mt-1
                  text-[6px]
                  leading-tight
                  sm:text-[7px]

                  ${
                    stat.yellow
                      ? "text-black/70"
                      : "text-[#171717]/60"
                  }
                `}
              >
                {stat.description}
              </p>


              {/* HOVER SHINE */}

              <motion.div
                initial={{
                  x: "-140%",
                }}
                whileHover={{
                  x: "180%",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-8
                  rotate-[18deg]
                  bg-white/20
                  blur-lg
                "
              />

            </motion.div>
          ))}
        </div>

      </motion.div>

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
      BLOGS
   ========================================================= */}
<section className="bg-[#FFFFFF] py-10 sm:py-16">

  <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-9 sm:mb-16">

      <div>

       

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
          Explore practical insights on social media marketing, digital marketing, branding, SEO, content strategy, creative design, and business growth. From guides for startups to actionable marketing strategies for established businesses, our blogs help you understand what works, what is changing, and how to build a stronger digital presence in India and the UK.

Discover expert tips, industry trends, and answers to common marketing questions — whether you're researching a social media marketing agency for startups or comparing digital marketing agencies in London to find the right partner for your business.
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
           {blog.primaryCategory}
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
      <section className="bg-[#FFFFFF] py-1 sm:py-1">

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
  q: "What social media marketing services do you offer?",
  a: "Big Beans Digital provides a wide range of social media marketing services for startups in India, USA, and London, including social media strategy, creative content, Reels, profile management, audience growth, community engagement, paid campaigns, and performance analysis. Our social media marketing service is customized according to your industry, target audience, and business goals."
},

{
  q: "How do I find the best social media marketing agency near me?",
  a: "When searching for the best social media marketing agency near me, don't look only at pricing. Consider the agency's experience, creative quality, strategy, communication, reporting, industry knowledge, and ability to generate measurable results. Big Beans Digital works with businesses across India, USA, and London, providing strategy-led social media marketing services, digital marketing solutions, and customized website development."
},

{
  q: "Why should I choose Big Beans Digital for social media marketing?",
  a: "Big Beans Digital combines strategy, creative content, branding, and performance marketing to create complete digital growth solutions. Whether you're comparing social media marketing agencies near me, looking for the best social media marketing company, or exploring social media marketing agencies in London, our focus is on building stronger brands, increasing visibility, attracting qualified leads, and creating sustainable growth."
},

{
  q: "What digital marketing services does Big Beans Digital offer?",
  a: "Big Beans Digital provides complete digital marketing solutions including social media marketing, performance marketing, branding, website development, creative design, content strategy, and paid advertising. Our approach connects different marketing channels to create a consistent online presence and help businesses generate visibility, leads, and growth."
},

{
  q: "Do you offer website development for businesses and startups?",
  a: "Yes. We design and develop modern, responsive websites for startups, small businesses, service providers, and established brands. Our website development approach focuses on user experience, mobile responsiveness, performance, SEO-friendly structure, clear navigation, and conversion-focused design rather than simply creating a website that looks good."
},

{
  q: "What is performance marketing and how can it help my business?",
  a: "Performance marketing focuses on measurable outcomes such as leads, enquiries, sales, conversions, and customer acquisition. BIGBEANS DIGITAL combines audience research, campaign strategy, creative development, paid advertising, conversion tracking, and continuous optimisation to help businesses make better use of their marketing budget."
},

{
  q: "Can you manage both my website and social media marketing?",
  a: "Yes. Managing your website and social media together can create a more consistent customer journey. We can combine website development, content strategy, social media management, SEO, and paid campaigns so that your social channels attract attention while your website helps turn visitors into enquiries or customers."
},

{
  q: "Do you work with startups and new businesses?",
  a: "Yes. Our social media marketing agency for startups approach is designed for businesses that are still building their audience and brand identity. We can help with branding, website development, social media, content creation, and performance marketing based on your stage of growth, target audience, and available budget."
},

{
  q: "How much does social media marketing cost?",
  a: "The cost of social media marketing depends on factors such as the number of platforms, content volume, creative requirements, advertising budget, campaign objectives, and level of management required. Instead of offering one fixed package for every business, Big Beans Digital can recommend a suitable approach based on your goals."
},

{
  q: "Is social media marketing useful for your businesses?",
  a: "Yes. Social media can help any business build awareness, communicate directly with potential customers, showcase their products or services, and generate enquiries. A focused strategy can be particularly useful when a business wants to compete with larger brands without trying to be present on every platform."
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