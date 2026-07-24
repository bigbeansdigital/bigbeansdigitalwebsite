"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const row1 = [
  "/clients/1.png",
  "/clients/2.png",
  "/clients/3.png",
  "/clients/4.png",
  "/clients/5.png",
  "/clients/6.png",
];

const row2 = [
  "/clients/7.png",
  "/clients/8.png",
  "/clients/9.png",
  "/clients/10.png",
  "/clients/11.png",
  "/clients/12.png",
];

const row3 = [
  "/clients/13.png",
  "/clients/14.png",
  "/clients/15.png",
  "/clients/16.png",
  "/clients/17.png",
  "/clients/18.png",
  "/clients/19.png",
  "/clients/20.png",
];

export default function SocialMediaMarketing() {
    const text =
  "Grow Faster with a Social Media Marketing Agency That Delivers Results";

const [displayText, setDisplayText] = useState("");

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    setDisplayText(text.slice(0, index + 1));
    index++;

    if (index >= text.length) {
      clearInterval(interval);
    }
  }, 40);

  return () => clearInterval(interval);
}, []);
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-12 pb-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[40px] bg-[#F8BC04] py-10 md:py-8"
          >

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-white/30 blur-[120px]" />

            <div className="relative z-10 text-center">

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[#171717] text-4xl md:text-6xl lg:text-7xl font-black leading-tight max-w-5xl mx-auto"
              >
                Social Media Marketing
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-10 inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              >
                <span className="text-gray-600 font-medium">
                  Home
                </span>

                <span className="text-[#F8BC04] text-xl">
                  →
                </span>

                <span className="font-bold text-[#171717]">
                  Social Media Marketing
                </span>
              </motion.div>

              

            </div>

          </motion.div>

        </div>

{/* SOCIAL MEDIA SHOWCASE SECTION */}

<section className="py-10 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative flex items-center justify-center min-h-[520px]">

      

      {/* MAIN IMAGE */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -20, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
          },
        }}
        className="relative z-20"
      >
        <Image
  src="/assets/socialmediahuman.png"
  alt="Social Media Marketing"
  width={380}
  height={450}
/>
      </motion.div>

      {/* FLOATING CARD 1 */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-10
          left-0
          bg-white
          rounded-3xl
          px-8
          py-5
          shadow-2xl
          z-30
        "
      >
        <p className="font-bold text-[#171717]">
          Performance-Driven Growth
        </p>
      </motion.div>

      {/* FLOATING CARD 2 */}

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [4, -4, 4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          top-20
          right-0
          bg-white
          rounded-3xl
          px-8
          py-5
          shadow-2xl
          z-30
        "
      >
        <p className="font-bold text-[#171717]">
          100+ Brands Managed
        </p>
      </motion.div>

      {/* FLOATING CARD 3 */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-56
          left-20
          bg-white
          rounded-3xl
          px-8
          py-5
          shadow-2xl
          z-30
        "
      >
        <p className="font-bold text-[#171717]">
          Creative Content That Converts
        </p>
      </motion.div>

      {/* FLOATING CARD 4 */}

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-64
          right-10
          bg-white
          rounded-3xl
          px-8
          py-5
          shadow-2xl
          z-30
        "
      >
        <p className="font-bold text-[#171717]">
          Startup-Focused Strategies
        </p>
      </motion.div>

      {/* CURVED TEXT */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          w-[550px]
          h-[550px]
          z-10
        "
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 250,250
                m -170,0
                a 170,170 0 1,1 340,0
                a 170,170 0 1,1 -340,0
              "
            />
          </defs>

          <text
            fill="#171717"
            fontSize="18"
            fontWeight="700"
            letterSpacing="3"
          >
            <textPath href="#circlePath">
              SOCIAL MEDIA MARKETING • CONTENT CREATION • BRAND AWARENESS • AUDIENCE GROWTH • PERFORMANCE CAMPAIGNS • COMMUNITY BUILDING •
            </textPath>
          </text>
        </svg>
      </motion.div>

    </div>

    {/* CONTENT */}

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center -mt-10"
    >

      <h2 className="text-5xl md:text-4xl font-black text-[#171717] leading-tight mb-8">
        Social Media Marketing Services That Turn Startups into Growing Brands
      </h2>

      <p className="text-x2 text-black-600 leading-relaxed">
        Your customers are already on social media—your brand should be too. At BIGBEANS DIGITAL, 
        we provide Social Media Marketing Services that help startups, small businesses, and growing 
        brands build a strong online presence, attract the right audience, and generate consistent 
        business growth. As a trusted Social Media Marketing Agency serving London, India, USA, and 
        Dubai, we create platform-specific strategies, engaging content, performance-driven campaigns, 
        and data-backed optimizations that increase brand awareness, drive qualified leads, and deliver 
        measurable ROI. Whether you're launching a new startup or scaling an established business, our 
        social media experts help you turn followers into loyal customers.
        </p>

    </motion.div>

  </div>
</section>



{/* COMPANY OVERVIEW SECTION */}
<section className="py-1 bg-[#ffffff]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-start justify-between mb-16">
        
<h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight max-w-4xl min-h-[120px]">
            {displayText}
            <span className="animate-pulse text-[#F8BC04]">|</span>
          </h2>
      

    </div>

    <div className="grid lg:grid-cols-[350px_1fr] gap-8">

      {/* LEFT IMAGE CARD */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#F8BC04] rounded-[28px] h-[410px] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="text-[220px]"
        >
          🚀
        </motion.div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">

          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="bg-[#171717] rounded-[24px] p-8"
          >
            <h3 className="text-white text-5xl font-black">
              8+
            </h3>

            <p className="text-white/70 mt-2">
              Years Of Experience
            </p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="bg-[#F8BC04] rounded-[24px] p-8"
          >
            <h3 className="text-black text-5xl font-black">
              100+
            </h3>

            <p className="text-black/70 mt-2">
              Successful Projects
            </p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="bg-[#171717] rounded-[24px] p-8"
          >
            <h3 className="text-white text-5xl font-black">
              20+
            </h3>

            <p className="text-white/70 mt-2">
              Team Members
            </p>
          </motion.div>

        </div>

        {/* CONTENT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#171717] rounded-[28px] p-10"
        >
          <p className="text-white/80 text-lg leading-relaxed max-w-4xl">
Looking for a Social Media Marketing Agency in India, Dubai, the UAE, or London? BigBeans Digital helps startups and growing businesses build a stronger online presence through strategic Social Media Management, creative content, and performance-driven campaigns. As a trusted Social Media Marketing Agency for Startups, we help increase brand visibility, generate quality leads, and turn engagement into measurable business growth.          </p>
        </motion.div>
      </div>
    </div>
  </div>
</section>

{/* WHY CHOOSE BIGBEANS DIGITAL */}
<section className="py-10 bg-[#ffffff] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">
      <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#F8BC04]/10 text-[#F8BC04] font-semibold mb-6">
        Why BIGBEANS DIGITAL
      </span>

      <h2 className="text-4xl md:text-6xl font-black text-[#171717]">
       Why Choose Our Social Media Marketing Agency
      </h2>
    </div>

    <div className="grid lg:grid-cols-5 gap-6">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{
          y: -15,
          rotate: -2,
          scale: 1.03,
        }}
        className="group bg-white rounded-[24px] p-6 shadow-lg hover:bg-[#F8BC04] transition-all duration-500 cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center text-3xl mx-auto mb-6 transition-all duration-500">
          🎯
        </div>

        <h3 className="text-2xl font-bold text-center text-[#171717] mb-4">
          Strategy First
        </h3>

        <p className="text-center text-gray-600 group-hover:text-[#171717] text-sm leading-relaxed">
          Every strategy is tailored to your business, audience, and growth goals.
        </p>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -15,
          rotate: 2,
          scale: 1.03,
        }}
        className="group bg-white rounded-[24px] p-6 shadow-lg hover:bg-[#F8BC04] transition-all duration-500 cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center text-3xl mx-auto mb-6 transition-all duration-500">
          🚀
        </div>

        <h3 className="text-2xl font-bold text-center text-[#171717] mb-4">
          Complete Social Media Management
        </h3>

        <p className="text-center text-gray-600 group-hover:text-[#171717] text-sm leading-relaxed">
          From content creation to posting, engagement, and reporting—we manage everything.
        </p>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{
          y: -15,
          scale: 1.05,
        }}
        className="group bg-white rounded-[24px] p-6 shadow-lg hover:bg-[#F8BC04] transition-all duration-500 cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center text-3xl mx-auto mb-6 transition-all duration-500">
          📈
        </div>

        <h3 className="text-2xl font-bold text-center text-[#171717] mb-4">
          Growth-Focused Approach
        </h3>

        <p className="text-center text-gray-600 group-hover:text-[#171717] text-sm leading-relaxed">
          Every campaign is designed to increase brand awareness, engagement, and quality leads.
        </p>
      </motion.div>

      {/* CARD 4 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{
          y: -15,
          rotate: -2,
          scale: 1.03,
        }}
        className="group bg-white rounded-[24px] p-6 shadow-lg hover:bg-[#F8BC04] transition-all duration-500 cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center text-3xl mx-auto mb-6 transition-all duration-500">
          📊
        </div>

        <h3 className="text-2xl font-bold text-center text-[#171717] mb-4">
          Data-Driven Decisions
        </h3>

        <p className="text-center text-gray-600 group-hover:text-[#171717] text-sm leading-relaxed">
          Performance insights and analytics guide every optimization for better results.
        </p>
      </motion.div>

      {/* CARD 5 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        whileHover={{
          y: -15,
          rotate: 2,
          scale: 1.03,
        }}
        className="group bg-white rounded-[24px] p-6 shadow-lg hover:bg-[#F8BC04] transition-all duration-500 cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center text-3xl mx-auto mb-6 transition-all duration-500">
          👥
        </div>

        <h3 className="text-2xl font-bold text-center text-[#171717] mb-4">
          Startup-Focused Team
        </h3>

        <p className="text-center text-gray-600 group-hover:text-[#171717] text-sm leading-relaxed">
          Creative experts helping startups and growing businesses build brands that stand out.
        </p>
      </motion.div>

    </div>

  </div>
</section>

{/* BUILD YOUR AUDIENCE SECTION */}
<section className="py-10 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

     {/* LEFT SIDE */}
<motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex items-center justify-center"
>
  <Image
    src="/assets/socialmediamarketing/bigbeansdigitalsmm01.png"
    alt="Social Media Marketing"
    width={750}
    height={750}
    className="w-full max-w-[600px] h-auto object-contain"
    priority
  />
</motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span className="inline-flex px-6 py-3 rounded-full bg-[#F8BC04]/10 text-[#F8BC04] font-semibold mb-6">
          Social Media Growth
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-[#171717] leading-tight">
          Grow Your Audience.
          <br />
          Grow Your Business.
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mt-8">
          As a trusted Social Media Marketing Agency for Startups, we help businesses across India, the UAE, and London build an engaged audience that turns into loyal customers. Through strategic Social Media Management, creative content, and data-driven campaigns, we help increase brand visibility, boost engagement, and generate consistent business growth.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-10 items-stretch">

          {/* CARD 1 */}
          <motion.div
            whileHover={{
              y: -15,
              scale: 1.05,
              rotate: -3,
            }}
          className="bg-[#F8BC04] rounded-[28px] p-8 shadow-xl cursor-pointer flex flex-col items-center h-full"
          >
         

            <h3 className="text-[#171717] text-2xl font-bold text-center">
              Audience
              <br />
              First Strategy
            </h3>

            <p className="text-[#171717]/80 text-sm text-center mt-4">
Content planned around your ideal customers and business goals.            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{
              y: -15,
              scale: 1.05,
              rotate: 3,
            }}
          className="bg-[#F8BC04] rounded-[28px] p-8 shadow-xl cursor-pointer flex flex-col items-center h-full"
          >
          

            <h3 className="text-[#171717] text-2xl font-bold text-center">
              Performance 
              <br />
              Optimization
            </h3>

            <p className="text-[#171717]/80 text-sm text-center mt-4">
Continuous monitoring and optimization to maximize reach, engagement, and results.            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{
              y: -15,
              scale: 1.05,
              rotate: -3,
            }}
          className="bg-[#F8BC04] rounded-[28px] p-8 shadow-xl cursor-pointer flex flex-col items-center h-full"
          >
           

            <h3 className="text-[#171717] text-2xl font-bold text-center">
              Creative
              <br />
              Content
            </h3>

            <p className="text-[#171717]/80 text-sm text-center mt-4">
Scroll-stopping creatives designed to attract, engage, and convert your audience.            </p>
          </motion.div>

        </div>

        <p className="text-gray-600 leading-relaxed mt-10">
         From content planning and community management to performance reporting, our customized Social Media Marketing Services help startups build a strong digital presence that drives long-term growth.
        </p>

      </motion.div>

    </div>

  </div>
</section>
{/* OUR SOCIAL MEDIA SERVICES */}
<section className="py-10 bg-[#ffffff] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >

      <h2 className="text-4xl md:text-6xl font-black text-[#171717] leading-tight">
       Complete Social Media Marketing Services for Startups
       
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg mt-8 leading-relaxed">
        We help businesses grow their online presence through creative
        content, audience engagement, strategic planning and
        performance-focused social media marketing solutions designed
        to increase visibility, leads and conversions.
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -15,
          rotate: -2,
          scale: 1.03,
        }}
        transition={{ duration: 0.5 }}
        className="group bg-white rounded-[30px] p-10 shadow-lg hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
      >
        <div className="text-6xl mb-8 transition-all duration-500 group-hover:scale-125">
          🎨
        </div>

        <h3 className="text-3xl font-bold text-[#171717] mb-5">
          Content Creation
        </h3>

        <p className="text-gray-600 group-hover:text-[#171717] leading-relaxed">
          Eye-catching graphics, engaging captions and creative content
          tailored to strengthen your brand presence across social
          media platforms.
        </p>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -15,
          rotate: 2,
          scale: 1.03,
        }}
        transition={{ duration: 0.6 }}
        className="group bg-white rounded-[30px] p-10 shadow-lg hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
      >
        <div className="text-6xl mb-8 transition-all duration-500 group-hover:rotate-12">
          💬
        </div>

        <h3 className="text-3xl font-bold text-[#171717] mb-5">
          Community Management
        </h3>

        <p className="text-gray-600 group-hover:text-[#171717] leading-relaxed">
          Build stronger relationships with your audience through
          proactive engagement, customer interaction and community
          building.
        </p>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -15,
          scale: 1.05,
        }}
        transition={{ duration: 0.7 }}
        className="group bg-white rounded-[30px] p-10 shadow-lg hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
      >
        <div className="text-6xl mb-8 transition-all duration-500 group-hover:scale-125">
          📈
        </div>

        <h3 className="text-3xl font-bold text-[#171717] mb-5">
          Social Media Strategy
        </h3>

        <p className="text-gray-600 group-hover:text-[#171717] leading-relaxed">
          Data-driven strategies designed to increase reach, improve
          engagement and support long-term business growth.
        </p>
      </motion.div>

      {/* CARD 4 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -15,
          rotate: -2,
          scale: 1.03,
        }}
        transition={{ duration: 0.8 }}
        className="group bg-white rounded-[30px] p-10 shadow-lg hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
      >
        <div className="text-6xl mb-8 transition-all duration-500 group-hover:rotate-12">
          🤝
        </div>

        <h3 className="text-3xl font-bold text-[#171717] mb-5">
          Influencer Marketing
        </h3>

        <p className="text-gray-600 group-hover:text-[#171717] leading-relaxed">
          Connect your brand with trusted creators and influencers to
          expand reach and increase brand credibility.
        </p>
      </motion.div>

      {/* CARD 5 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -15,
          scale: 1.05,
        }}
        transition={{ duration: 0.9 }}
        className="group bg-white rounded-[30px] p-10 shadow-lg hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
      >
        <div className="text-6xl mb-8 transition-all duration-500 group-hover:scale-125">
          📊
        </div>

        <h3 className="text-3xl font-bold text-[#171717] mb-5">
          Analytics & Reporting
        </h3>

        <p className="text-gray-600 group-hover:text-[#171717] leading-relaxed">
          Transparent reporting and detailed insights that help track
          campaign performance and optimize future results.
        </p>
      </motion.div>

      {/* CARD 6 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -15,
          rotate: 2,
          scale: 1.03,
        }}
        transition={{ duration: 1 }}
        className="group bg-white rounded-[30px] p-10 shadow-lg hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
      >
        <div className="text-6xl mb-8 transition-all duration-500 group-hover:scale-125">
          🎥
        </div>

        <h3 className="text-3xl font-bold text-[#171717] mb-5">
          Reels & Video Marketing
        </h3>

        <p className="text-gray-600 group-hover:text-[#171717] leading-relaxed">
          Short-form videos, reels and visual storytelling designed to
          boost engagement and maximize social media reach.
        </p>
      </motion.div>

    </div>

  </div>
</section>

{/* TESTIMONIALS SECTION */}
<section className="py-20 bg-[#171717] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex px-6 py-3 rounded-full bg-[#F8BC04]/20 text-[#F8BC04] font-semibold tracking-wider mb-6">
          CLIENT TESTIMONIALS
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          What Our Clients
          <br />
          Say About Us
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Businesses trust BIGBEANS DIGITAL for creative campaigns,
          strategic marketing and measurable growth. Here's what some
          of our valued clients have to say about working with us.
        </p>

        <motion.button
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F8BC04] text-[#171717] px-8 py-4 rounded-full font-bold shadow-xl"
        >
          View All Reviews
        </motion.button>
      </motion.div>

    </div>

    {/* Testimonials */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{
          y: -15,
          rotate: -2,
        }}
        className="bg-white rounded-[30px] p-10 shadow-2xl relative overflow-hidden"
      >
        <motion.div
          animate={{
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute top-6 right-8 text-7xl text-[#F8BC04]/20 font-black"
        >
          "
        </motion.div>

        <p className="text-gray-600 italic leading-relaxed mb-10">
          BIGBEANS DIGITAL completely transformed our social media
          presence. Our engagement increased significantly and we
          started receiving quality leads consistently.
        </p>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#F8BC04] flex items-center justify-center font-bold text-[#171717]">
            R
          </div>

          <div>
            <h4 className="font-bold text-[#171717]">
              Rahul Sharma
            </h4>

            <p className="text-gray-500 text-sm">
              Startup Founder
            </p>
          </div>
        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{
          y: -15,
          rotate: 2,
        }}
        className="bg-[#F8BC04] rounded-[30px] p-10 shadow-2xl relative overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute top-6 right-8 text-7xl text-white/30 font-black"
        >
          "
        </motion.div>

        <p className="text-[#171717] italic leading-relaxed mb-10">
          Their content strategy and advertising campaigns helped us
          increase brand awareness and improve customer engagement
          across all major social platforms.
        </p>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-[#171717]">
            N
          </div>

          <div>
            <h4 className="font-bold text-[#171717]">
              Neha Agarwal
            </h4>

            <p className="text-[#171717]/70 text-sm">
              Business Owner
            </p>
          </div>
        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        whileHover={{
          y: -15,
          rotate: -2,
        }}
        className="bg-white rounded-[30px] p-10 shadow-2xl relative overflow-hidden"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute top-6 right-8 text-7xl text-[#F8BC04]/20 font-black"
        >
          "
        </motion.div>

        <p className="text-gray-600 italic leading-relaxed mb-10">
          Professional team, creative ideas and excellent execution.
          Working with BIGBEANS DIGITAL has been one of the best
          marketing decisions for our brand.
        </p>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#F8BC04] flex items-center justify-center font-bold text-[#171717]">
            A
          </div>

          <div>
            <h4 className="font-bold text-[#171717]">
              Amit Verma
            </h4>

            <p className="text-gray-500 text-sm">
              E-commerce Brand
            </p>
          </div>
        </div>
      </motion.div>

    </div>

  </div>
</section>

{/* CLIENT LOGOS SECTION */}

<section className="bg-white py-10 overflow-hidden">

  <div className="text-center mb-12">

    <span className="inline-block px-6 py-3 rounded-full bg-[#F8BC04]/10 text-[#F8BC04] font-semibold tracking-[2px]">
      TRUSTED BY 100+ BRANDS
    </span>

    <h2 className="text-4xl md:text-5xl font-black text-[#171717] mt-6">
      Brands We've Worked With
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      From startups to established businesses, we help brands grow
      through strategic social media marketing, creative content and
      performance-driven campaigns.
    </p>

  </div>

  <div className="space-y-6">

    {/* ROW 1 */}

    <motion.div
      className="flex gap-6 w-max"
      animate={{
        x: ["-50%", "0%"],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...row1, ...row1].map((logo, index) => (
        <div
          key={index}
          className="
            w-[220px]
            h-[110px]
            flex
            items-center
            justify-center
            shrink-0
            bg-transparent
          "
        >
          <Image
            src={logo}
            alt="Client Logo"
            width={300}
            height={150}
            className="object-contain max-h-[110px] w-auto h-auto hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </motion.div>

    {/* ROW 2 */}

    <motion.div
      className="flex gap-6 w-max"
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...row2, ...row2].map((logo, index) => (
        <div
          key={index}
          className="
            w-[220px]
            h-[110px]
            flex
            items-center
            justify-center
            shrink-0
            bg-transparent
          "
        >
          <Image
            src={logo}
            alt="Client Logo"
            width={300}
            height={150}
            className="object-contain max-h-[110px] w-auto h-auto hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </motion.div>

    {/* ROW 3 */}

    <motion.div
      className="flex gap-6 w-max"
      animate={{
        x: ["-50%", "0%"],
      }}
      transition={{
        duration: 28,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...row3, ...row3].map((logo, index) => (
        <div
          key={index}
          className="
            w-[220px]
            h-[110px]
            flex
            items-center
            justify-center
            shrink-0
            bg-transparent
          "
        >
          <Image
            src={logo}
            alt="Client Logo"
            width={300}
            height={150}
            className="object-contain max-h-[110px] w-auto h-auto hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </motion.div>

  </div>

</section>

{/* BACKGROUND TITLE */}

        <motion.h2
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
          text-center
          text-[130px]
          font-extrabold
          text-gray-200
          leading-none
          tracking-tight
        "
        >
          where strategy
        </motion.h2>

        {/* MAIN TITLE */}

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
          text-center
          text-[90px]
          font-black
          text-black
          leading-none
          -mt-6
        "
        >
          meets creativity
        </motion.h1>

        {/* BUTTON */}

        <motion.div
          className="flex justify-center mt-10"
          animate={{
            y: [0, -8, 0],
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
      px-8
      py-3
      rounded-full
      font-semibold
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
    "
  >
    Get Free Consultation
  </button>
</Link>
        </motion.div>







      </section>
    </>
  );
}