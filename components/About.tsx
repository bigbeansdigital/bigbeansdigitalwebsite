"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  BarChart3,
  Handshake,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="bg-[#FFFFFF] overflow-hidden">

      {/* ABOUT BANNER */}
<section className="px-6 lg:px-12 pt-10 pb-20 overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto"
  >
    <div className="relative overflow-hidden rounded-[36px] bg-[#F8BC04] py-14 md:py-16 shadow-[0_25px_80px_rgba(248,188,4,0.35)]">

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-white/30 blur-[120px]"
      />

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 left-0 right-0 h-40 bg-white/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center">

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#171717] text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-4 rounded-full bg-white text-[#171717] px-8 py-4 shadow-xl border border-white/50"
        >
          <span className="text-sm font-medium">
            Home
          </span>

          <span className="text-[#F8BC04] font-bold">
            →
          </span>

          <span className="text-sm font-semibold">
            About Us
          </span>
        </motion.div>

      </div>

    </div>
  </motion.div>
</section>

{/* =======================================================
                ABOUT US
======================================================= */}

<section className="bg-white py-28 overflow-hidden">

  <div className="max-w-[1450px] mx-auto px-6">

    <div className="grid lg:grid-cols-[42%_58%] gap-20 items-center">

      {/* LEFT IMAGE */}

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
        }}
        transition={{
          duration: .8,
        }}
      >

        <div className="overflow-hidden rounded-[35px] shadow-2xl">

          <Image
            src="/assets/guiding-principles.jpg"
            alt="BIGBEANS DIGITAL Team"
            width={800}
            height={900}
            className="w-full h-[700px] object-cover transition duration-700 hover:scale-105"
          />

        </div>

      </motion.div>

      {/* RIGHT CONTENT */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
      >

        {/* Badge */}

        <span
          className="
            inline-flex
            rounded-full
            bg-[#F8BC04]/15
            px-6
            py-3
            text-sm
            font-bold
            uppercase
            tracking-[4px]
            text-[#171717]
          "
        >
          The BIGBEANS DIGITAL
        </span>

        {/* Heading */}

        <h2 className="mt-8 text-[60px] leading-[1.05] font-black text-[#171717]">

          Building

          <span className="text-[#F8BC04]">

            {" "} Better Brands.

          </span>

        </h2>

        {/* Paragraph */}

        <p className="mt-8 text-[18px] leading-9 text-gray-600">

          At BigBeans Digital, we help startups, entrepreneurs, and 
          growing businesses build brands that stand out, connect with the right audience, 
          and drive measurable business growth. As a Social Media Marketing Agency specializing 
          in creative design, branding, performance marketing, and website development, we don't 
          believe in one-size-fits-all strategies.
          <br>  
          </br>
  <br>  
          </br>
Every business has a unique story, and our job is to help you tell it in a way that attracts attention, 
builds trust, and converts customers. Whether you're launching a new business, strengthening your brand,
or looking to scale your online presence, we create customized marketing strategies designed around your 
goals—not generic templates.
  <br>  
          </br>  <br>  
          </br>

Proudly serving businesses across India, the UAE, and the UK, we combine creativity, strategy, and 
data-driven insights to help brands increase visibility, engage their audience, generate quality leads, 
and achieve sustainable long-term growth.

        </p>
                {/* PRINCIPLES */}

        <div className="mt-12 grid grid-cols-2 xl:grid-cols-4 gap-4">

          

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* =========================================================
                    OUR JOURNEY
========================================================= */}

<section className="bg-white py-32 overflow-hidden">

  <div className="max-w-[1450px] mx-auto px-6">

    {/* 2020 */}

    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .8,
      }}
      className="mb-28"
    >

      {/* Year */}

      <div className="flex items-center gap-6">

        <h2
          className="
            text-[70px]
            md:text-[110px]
            font-black
            text-gray-100
            leading-none
            shrink-0
          "
        >
          2020
        </h2>

        <div className="h-px w-full bg-gray-200"></div>

      </div>

      {/* Content */}

      <div className="mt-8 ml-6 lg:ml-12">

        <motion.h3
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
            delay: .2,
            duration: .7,
          }}
          className="
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-black
            leading-tight
            text-[#171717]
          "
        >
          Where It All 
          <span className="text-[#F8BC04]">
            {" "}Began.
            </span>

        </motion.h3>

       <div
          className="
            mt-8
            grid
            lg:grid-cols-1
            gap-8
            text-[17px]
            leading-9
            text-gray-600
          "
        >

          <p>
            BigBeans Digital was founded with a clear vision—to help startups, entrepreneurs, and growing businesses build brands that stand out in today's competitive digital world. As a trusted Social Media Marketing Agency for Startups, we combine strategic branding, creative design, and performance-driven marketing to help businesses strengthen their online presence, connect with the right audience, and achieve sustainable growth. Whether you're launching a new venture or scaling an existing business, our goal is to deliver tailored digital solutions that create lasting business impact across India, the UAE, and the UK.
          </p>
        </div>

      </div>

    </motion.div>

    {/* =========================================================
                        2024
    ========================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .8,
      }}
      className="mb-28"
    >

      {/* Year */}

      <div className="flex items-center gap-6">

        <div className="h-px w-full bg-gray-200"></div>

        <h2
          className="
            text-[70px]
            md:text-[110px]
            font-black
            text-gray-100
            leading-none
            shrink-0
          "
        >
          2024
        </h2>

      </div>

      {/* Content */}

      <div className="mt-8 mr-6 lg:mr-12 text-right">

        <motion.h3
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .2,
            duration: .7,
          }}
          className="
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-black
            leading-tight
            text-[#171717]
          "
        >
          Taking Our

          <span className="text-[#F8BC04]">
            {" "}Creativity Global.
          </span>

        </motion.h3>

       <div
          className="
            mt-8
            grid
            lg:grid-cols-1
            gap-8
            text-[17px]
            leading-9
            text-gray-600
          "
        >

          <p>
            As businesses across India began recognizing BigBeans Digital as a trusted Social Media Marketing Agency for Startups, we expanded our creative expertise to serve brands in the United Kingdom and the UAE. Today, we help businesses looking for a Social Media Marketing Agency in London, a Creative Branding Agency in the UAE, or a reliable digital growth partner build stronger brands through strategic content, creative design, and performance-driven marketing.
          </p>
        </div>

      </div>

    </motion.div>

        {/* =========================================================
                        2025
    ========================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .8,
      }}
    >

      {/* Year */}

      <div className="flex items-center gap-6">

        <h2
          className="
            text-[70px]
            md:text-[110px]
            font-black
            text-gray-100
            leading-none
            shrink-0
          "
        >
          2025
        </h2>

        <div className="h-px w-full bg-gray-200"></div>

      </div>

      {/* Content */}

      <div className="mt-8 ml-6 lg:ml-12">

        <motion.h3
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
            delay: .2,
            duration: .7,
          }}
          className="
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-black
            leading-tight
            text-[#171717]
          "
        >
          100+ Brands.

          <span className="text-[#F8BC04]">
            {" "}One Purpose.
          </span>

        </motion.h3>

        <div
          className="
            mt-8
            grid
            lg:grid-cols-1
            gap-8
            text-[17px]
            leading-9
            text-gray-600
          "
        >

          <p>
            Today, BigBeans Digital has earned the trust of 100+ startups, entrepreneurs, and growing businesses looking for a reliable Social Media Marketing Agency for startups and growing businesses in India, the Dubai, and London and creative growth partner. Through strategic branding, creative content, social media marketing, and performance-driven digital solutions, we've helped businesses strengthen their online presence, reach the right audience, and build brands that inspire trust and drive long-term growth. As we continue expanding across India, the UAE, and the UK, our commitment remains the same—to help ambitious businesses turn ideas into impactful brands.
          </p>
        </div>

      </div>

    </motion.div>

  </div>

</section>






{/* =======================================================
                OUR GUIDING PRINCIPLES
======================================================= */}

<section className="bg-white py-28 overflow-hidden">

  <div className="max-w-[1450px] mx-auto px-6">

    <div className="grid lg:grid-cols-[42%_58%] gap-20 items-center">

      {/* LEFT IMAGE */}

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
        }}
        transition={{
          duration: .8,
        }}
      >

        <div className="overflow-hidden rounded-[35px] shadow-2xl">

          <Image
            src="/assets/guiding-principles.jpg"
            alt="BIGBEANS DIGITAL Team"
            width={800}
            height={900}
            className="w-full h-[700px] object-cover transition duration-700 hover:scale-105"
          />

        </div>

      </motion.div>

      {/* RIGHT CONTENT */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
      >

        {/* Badge */}

        <span
          className="
            inline-flex
            rounded-full
            bg-[#F8BC04]/15
            px-6
            py-3
            text-sm
            font-bold
            uppercase
            tracking-[4px]
            text-[#171717]
          "
        >
          The BIGBEANS Way
        </span>

        {/* Heading */}

        <h2 className="mt-8 text-[60px] leading-[1.05] font-black text-[#171717]">

          Helping Startups Grow Through 

          <span className="text-[#F8BC04]">

            {" "}Social Media Marketing

          </span>

        </h2>

        {/* Paragraph */}

        <p className="mt-8 text-[18px] leading-9 text-gray-600">

          Looking for the Best Social Media Marketing Agency for Startups or a trusted Creative Branding Agency to grow your business? BigBeans Digital helps startups, entrepreneurs, and growing businesses build memorable brands through Social Media Marketing, Creative Design, Branding, Performance Marketing, and Website Development. Whether you're launching a startup in India, scaling your business in the UAE, or expanding your brand in the UK, we create customized marketing strategies that increase brand visibility, attract the right audience, generate quality leads, and deliver measurable business growth. Every strategy we create is built around your business goals—because your success is the true measure of ours.

        </p>
                {/* PRINCIPLES */}

        <div className="mt-12 grid grid-cols-2 xl:grid-cols-4 gap-4">

          {/* Card 1 */}

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-[24px] bg-[#F8BC04] p-5 shadow-lg transition-all duration-300"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white mb-4">

              <BarChart3
                size={24}
                className="text-[#171717]"
              />

            </div>

            <h3 className="text-lg font-bold text-[#171717]">
              Creative Excellence
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-[#171717]/80">
              Designs that make brands unforgettable.
            </p>

          </motion.div>

          {/* Card 2 */}

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-[24px] bg-[#F8BC04] p-5 shadow-lg transition-all duration-300"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white mb-4">

              <Handshake
                size={24}
                className="text-[#171717]"
              />

            </div>

            <h3 className="text-lg font-bold text-[#171717]">
              Customized Strategy
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-[#171717]/80">
              Tailored marketing plans for your business goals.
            </p>

          </motion.div>

          {/* Card 3 */}

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-[24px] bg-[#F8BC04] p-5 shadow-lg transition-all duration-300"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white mb-4">

              <Lightbulb
                size={24}
                className="text-[#171717]"
              />

            </div>

            <h3 className="text-lg font-bold text-[#171717]">
              Dedicated Team
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-[#171717]/80">
              Your growth partners, every step of the way.
            </p>

          </motion.div>

          {/* Card 4 */}

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-[24px] bg-[#F8BC04] p-5 shadow-lg transition-all duration-300"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white mb-4">

              <TrendingUp
                size={24}
                className="text-[#171717]"
              />

            </div>

            <h3 className="text-lg font-bold text-[#171717]">
              Startup-Focused Approach
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-[#171717]/80">
              Built for startups. Designed to scale businesses.
            </p>

          </motion.div>

        </div>



        {/* PART 3 STARTS HERE */}
                {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            delay: 0.2,
          }}
          className="mt-12"
        >

          <Link
            href="/connect"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#171717]
              px-10
              py-5
              text-lg
              font-bold
              text-white
              shadow-[0_20px_50px_rgba(0,0,0,.15)]
              transition-all
              duration-300
              hover:bg-[#F8BC04]
              hover:text-[#171717]
              hover:-translate-y-1
            "
          >

            Let's Build Your Brand

            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>

          </Link>

        </motion.div>

      </motion.div>

    </div>

  </div>

</section>

{/* LEADERSHIP TEAM */}
<section className="py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-24">
      <h2 className="text-[#171717] text-5xl md:text-7xl font-bold leading-tight">
        Fueling Your
        <br />
        Digital Journey
      </h2>
    </div>

    {/* FOUNDER */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mb-16"
    >
      <div className="bg-[#171717] rounded-[28px] border border-[#2A2A2A] min-h-[300px] relative overflow-visible">

        <div className="absolute left-6 bottom-0 w-[300px] h-[360px] z-20">
          <Image
            src="/team/TamojyotiBhowmik.png"
            alt="Tamojyoti Bhowmik"
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div className="pl-[340px] pr-14 py-16">
          <h3 className="text-white text-4xl lg:text-5xl font-bold">
            Tamojyoti Bhowmik
          </h3>

          <p className="text-[#F8BC04] mt-4 font-medium">
            Founder
          </p>

          <p className="text-white/70 mt-6 max-w-xl leading-relaxed">
            Leading BIGBEANS DIGITAL with a vision to combine creativity,
            technology, branding and performance marketing into measurable
            business growth.
          </p>
        </div>

      </div>
    </motion.div>

    {/* TEAM GRID */}
<div className="grid lg:grid-cols-2 gap-10 mt-16">

  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{
    y: -12,
    scale: 1.02,
  }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative bg-[#F8BC04] rounded-[28px] min-h-[300px] overflow-visible shadow-xl"
>
  <div className="absolute right-[-10px] bottom-0 w-[320px] h-[420px] z-20">
    <Image
      src="/team/NehaGupta.png"
      alt="Neha Gupta"
      fill
      className="object-contain object-bottom"
    />
  </div>

  <div className="p-10 max-w-[50%]">
    <h3 className="text-[#171717] text-5xl font-bold leading-tight">
      Neha Gupta
    </h3>

    <p className="text-[#171717]/80 mt-4 text-lg">
      Head of Social Media Marketing
    </p>
  </div>
</motion.div>

  {/* SONIA */}
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{
    y: -12,
    scale: 1.02,
  }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative bg-[#171717] rounded-[28px] min-h-[300px] overflow-visible shadow-xl"
>
  <div className="absolute left-[-10px] bottom-0 w-[320px] h-[420px] z-20">
    <Image
      src="/team/SoniaParveen.png"
      alt="Sonia Parveen"
      fill
      className="object-contain object-bottom"
    />
  </div>

  <div className="pl-[300px] p-10">
    <h3 className="text-white text-5xl font-bold leading-tight">
      Sonia Parveen
    </h3>

    <p className="text-[#F8BC04] mt-4 text-lg">
      Head of Design
    </p>
  </div>
</motion.div>

  {/* HARSHITA */}
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{
    y: -12,
    scale: 1.02,
  }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative bg-[#F8BC04] rounded-[28px] min-h-[300px] overflow-visible shadow-xl"
>
  <div className="absolute right-[-10px] bottom-0 w-[320px] h-[420px] z-20">
    <Image
      src="/team/HarshitaGautam.png"
      alt="Harshita Gautam"
      fill
      className="object-contain object-bottom"
    />
  </div>

  <div className="p-10 max-w-[50%]">
    <h3 className="text-[#171717] text-5xl font-bold leading-tight">
      Harshita
      <br />
      Gautam
    </h3>

    <p className="text-[#171717]/80 mt-4 text-lg">
      Head of Ads Marketing
    </p>
  </div>
</motion.div>

{/* JUI */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{
    y: -12,
    scale: 1.02,
  }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative bg-[#171717] rounded-[28px] min-h-[300px] overflow-visible shadow-xl"
>
  <div className="absolute left-[-10px] bottom-0 w-[280px] h-[420px] z-20">
    <Image
      src="/team/JuiBanerjee.png"
      alt="Jui Banerjee"
      fill
      unoptimized
      priority
      className="object-contain object-bottom"
    />
  </div>

  <div className="pl-[300px] p-10">
    <h3 className="text-white text-5xl font-bold leading-tight">
      Jui
      <br />
      Banerjee
    </h3>

    <p className="text-[#F8BC04] mt-4 text-lg">
      Head of Content & SEO
    </p>
  </div>
</motion.div>

</div>

  </div>
</section>

{/* COMPANY STORY */}
<section className="py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-between items-start mb-20">

      <h2 className="text-[#171717] text-5xl md:text-7xl font-bold leading-tight">
        Your Growth. 
        <br />
        Our Mission.
      </h2>
    </div>

    <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-stretch">

      {/* LEFT VISUAL */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#171717] rounded-[28px] min-h-[420px] overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">

          <motion.div
            animate={{
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[220px]"
          >
            🚀
          </motion.div>

        </div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col gap-6">

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#171717] rounded-[24px] p-8 border border-[#2A2A2A]"
          >
            <h3 className="text-white text-5xl font-bold">
              8+
            </h3>

            <p className="text-white/60 mt-3">
              Years Of Experience
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#171717] rounded-[24px] p-8 border border-[#2A2A2A]"
          >
            <h3 className="text-white text-5xl font-bold">
              100+
            </h3>

            <p className="text-white/60 mt-3">
              Successful Projects
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#171717] rounded-[24px] p-8 border border-[#2A2A2A]"
          >
            <h3 className="text-white text-5xl font-bold">
              26+
            </h3>

            <p className="text-white/60 mt-3">
              Team Members
            </p>
          </motion.div>

        </div>

        {/* STORY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#171717] rounded-[28px] p-10 border border-[#2A2A2A]"
        >
          <p className="text-white/80 text-lg leading-relaxed">
            Finding the right Social Media Marketing Agency for Startups isn't just about choosing an agency—it's about choosing a partner who understands your business goals. At BigBeans Digital, we combine strategic branding, creative social media marketing, and customized digital solutions to help startups, entrepreneurs, and growing businesses build stronger brands, generate quality leads, and achieve sustainable growth. Whether you're looking for a Startup Branding Agency, a Startup Digital Marketing Company, or a trusted partner across India, the UAE, or the UK, our focus is always on delivering measurable business results—not just marketing services.
          </p>

          
        </motion.div>

      </div>

    </div>

  </div>
</section>

{/* SERVICES SECTION */}
<section className="py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <div className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-sm font-medium text-[#171717] mb-6">
        Our Services
      </div>

      <h2 className="text-[#171717] text-5xl md:text-7xl font-bold leading-tight">
        Startup Marketing Services
        <br />
        That Your Brand Needs
      </h2>

    </div>

    <div className="grid grid-cols-12 gap-6">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="col-span-12 lg:col-span-4 bg-[#171717] rounded-[28px] p-8 border border-[#2A2A2A] min-h-[280px]"
      >
        <div className="w-20 h-20 rounded-full bg-[#F8BC04]/20 flex items-center justify-center text-4xl mb-8">
          🎯
        </div>

        <h3 className="text-white text-3xl font-bold mb-4">
          Branding
        </h3>

        <p className="text-white/70 leading-relaxed">
Strategic Startup Branding Services and brand identity design that help startups build trust and stand out.        </p>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="col-span-12 lg:col-span-8 bg-[#171717] rounded-[28px] overflow-hidden min-h-[280px]"
      >
        <div className="grid lg:grid-cols-2 h-full">

          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-white text-4xl font-bold mb-4">
              Social Media
              <br />
              Marketing
            </h3>

            <p className="text-white/70 text-lg">
              Results-driven Social Media Management for Startups by a Social Media Marketing Agency for Startups, designed to increase visibility, engagement, and quality leads.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="text-[180px]"
            >
              📢
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="col-span-12 lg:col-span-8 bg-[#F8BC04] rounded-[28px] overflow-hidden min-h-[280px] relative"
      >
        <div className="grid lg:grid-cols-2 h-full">

          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-[#171717] text-4xl font-bold mb-4">
              Website
              <br />
              Development
            </h3>

            <p className="text-[#171717]/70 text-lg">
High-converting websites by a trusted Startup Website Design Company, built to generate leads and support business growth.            </p>
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="text-[180px]"
            >
              💻
            </motion.div>
          </div>

        </div>
      </motion.div>
      

      {/* CARD 4 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="col-span-12 lg:col-span-4 bg-[#171717] rounded-[28px] p-8 border border-[#2A2A2A] min-h-[280px]"
      >
        <div className="w-20 h-20 rounded-2xl bg-[#F8BC04]/20 flex items-center justify-center text-4xl mb-8">
          🎨
        </div>

        <h3 className="text-white text-3xl font-bold mb-4">
          Graphic
          <br />
          Design
        </h3>

        <p className="text-white/70 leading-relaxed">
Creative visuals and Startup Brand Identity Design that make your business look professional across every platform.        </p>
      </motion.div>

    </div>

  </div>
</section>

{/* FAQ SECTION */}

<section className="bg-white py-10">

  <div className="max-w-[1400px] mx-auto px-6">

    {/* HEADER */}

    <div className="text-center mb-16 relative">

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-24
          h-24
          rounded-full
          bg-[#F8BC04]/35
        "
      />

      <p
        className="
          uppercase
          tracking-[6px]
          text-sm
          font-semibold
          text-gray-500
          relative
        "
      >
        ABOUT BIGBEANS DIGITAL FAQS
      </p>

      <h2
        className="
          relative
          mt-4
          text-5xl
          md:text-6xl
          font-black
          text-[#171717]
        "
      >
        Frequently Asked{" "}
        <span className="text-[#F8BC04]">
          Questions
        </span>
      </h2>

    </div>

    {/* FAQ GRID */}

    <div className="grid lg:grid-cols-2 gap-5">

      {[
        {
          q: "What is BIGBEANS DIGITAL?",
          a: "BIGBEANS DIGITAL is a Best Digital Marketing Agency for Startups that helps businesses grow through Digital Marketing, Social Media Marketing, Website Development, Branding, Google Ads, Meta Ads, Performance Marketing, and creative digital solutions. We work with startups, small businesses, and growing brands across London, India, USA, and Dubai."
        },
        {
          q: "Why choose BIGBEANS DIGITAL over other digital marketing agencies?",
          a: "BIGBEANS DIGITAL combines creativity, strategy, and performance to deliver measurable business growth. As a Digital Marketing Agency for Startups, we focus on building strong brands, generating qualified leads, increasing online visibility, and helping businesses achieve long-term success."
        },
        {
          q: "Which industries does BIGBEANS DIGITAL work with?",
          a: "We work with startups, ecommerce brands, healthcare businesses, real estate companies, FMCG brands, gyms, restaurants, educational institutes, local businesses, and service-based companies. Our customized Digital Marketing Services are tailored to each industry's goals and target audience."
        },
        {
          q: "What services does BIGBEANS DIGITAL provide?",
          a: "We provide complete Digital Marketing Services, including Social Media Marketing, Website Development, Branding, Logo Design, Google Ads, Meta Ads, Performance Marketing, Graphic Design, and business growth strategies designed to help brands grow faster."
        },
        {
          q: "Do you work only with startups?",
          a: "No. While we are known as a Best Digital Marketing Agency for Startups, we also work with small businesses, established companies, entrepreneurs, and growing brands looking to strengthen their online presence and accelerate business growth."
        },
        {
          q: "Which countries do you serve?",
          a: "BIGBEANS DIGITAL proudly serves clients across London, India, USA, and Dubai, helping businesses build their brand, generate leads, and grow through customized digital marketing strategies."
        },
        {
          q: "How does BIGBEANS DIGITAL help businesses grow?",
          a: "We combine Social Media Marketing, Performance Marketing, Website Development, Branding, Google Ads, Meta Ads, and creative content to increase brand awareness, attract qualified customers, generate leads, and improve business revenue through data-driven marketing strategies."
        },
        {
          q: "What makes BIGBEANS DIGITAL different?",
          a: "We don't believe in one-size-fits-all marketing. Every business receives a customized growth strategy based on its goals, audience, industry, and competition. Our focus on creativity, transparency, measurable results, and long-term partnerships makes us a trusted Business Growth Agency."
        },
        {
          q: "Can BIGBEANS DIGITAL handle both branding and marketing?",
          a: "Yes. Unlike many agencies, we provide both Branding and Digital Marketing Services under one roof. From building your brand identity to running high-performing marketing campaigns, we help businesses create a consistent and impactful digital presence."
        },
        {
          q: "How can I get started with BIGBEANS DIGITAL?",
          a: "Getting started is simple. Contact our team for a free consultation, and we'll understand your business goals, analyze your current digital presence, and recommend the best Digital Marketing Services to help your startup or business achieve sustainable growth."
        }
      ].map((faq, index) => (

        <motion.div
          key={index}
          layout
          className="
            bg-white
            border
            border-gray-300
            rounded-[20px]
            overflow-hidden
          "
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="
              w-full
              flex
              justify-between
              items-center
              p-6
              text-left
            "
          >

            <span
              className="
                font-semibold
                text-[#171717]
                pr-4
              "
            >
              {faq.q}
            </span>

            <span
              className="
                w-10
                h-10
                rounded-full
                bg-[#171717]
                text-white
                flex
                items-center
                justify-center
                text-xl
              "
            >
              {openFaq === index ? "−" : "+"}
            </span>

          </button>

          {openFaq === index && (

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6"
            >

              <p className="text-gray-600 leading-relaxed">
                {faq.a}
              </p>

            </motion.div>

          )}

        </motion.div>

      ))}

    </div>

  </div>

</section>



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




















    </main>
  );
}