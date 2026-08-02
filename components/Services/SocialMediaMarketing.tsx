"use client";

import { motion, AnimatePresence } from "framer-motion";
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

const card1Images = [
  "/assets/socialmediamarketing/ourworks/card1/1.png",
  "/assets/socialmediamarketing/ourworks/card1/2.png",
  "/assets/socialmediamarketing/ourworks/card1/3.png",
];

const card2Images = [
  "/assets/socialmediamarketing/ourworks/card2/1.png",
  "/assets/socialmediamarketing/ourworks/card2/2.png",
  "/assets/socialmediamarketing/ourworks/card2/3.png",
];

const card3Images = [
  "/assets/socialmediamarketing/ourworks/card3/1.png",
  "/assets/socialmediamarketing/ourworks/card3/2.png",
  "/assets/socialmediamarketing/ourworks/card3/3.png",
];

export default function SocialMediaMarketing() {
   const [openFaq, setOpenFaq] = useState<number | null>(null);
    const text =
  "Grow Faster with a Social Media Marketing Agency That Delivers Results";

const [displayText, setDisplayText] = useState("");

const [card1Index, setCard1Index] = useState(0);
const [card2Index, setCard2Index] = useState(0);
const [card3Index, setCard3Index] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCard1Index((prev) => (prev + 1) % card1Images.length);
    setCard2Index((prev) => (prev + 1) % card2Images.length);
    setCard3Index((prev) => (prev + 1) % card3Images.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);



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

<div className="relative z-10 text-center">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-10 inline-flex items-center gap-4 bg-[#fffff] rounded-full px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              >
                <span className="text-gray-600 font-medium">
                  Home
                </span>

                <span className="text-[#171717] text-xl">
                  →
                </span>

                <span className="font-bold text-[#171717]">
                  Social Media Marketing
                </span>
              </motion.div>
            </div>

    
      {/* HERO SECTION */}
      <section className="pt-2 pb-10 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
          >


            

          </motion.div>

        </div>

{/* SOCIAL MEDIA SHOWCASE SECTION */}

<section className="pt-11 pb-0 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-2 lg:order-1"
      >

        <h1 className="mt-1 text-5xl lg:text-5xl font-black leading-tight text-[#171717]">

          Social Media Marketing Services That Turn

          <span className="text-[#F8BC04]">
            {" "}Startups Into Growing Brands
          </span>

          <br />

        </h1>

        <p className="mt-8 max-w-xl text-[15px] leading-7 text-gray-600">

          Your customers are already on social media your brand should be too.
           

<span className="text-[#F8BC04] font-extrabold">            
  {" "}BIGBEANS DIGITAL {" "} 
          </span>

          helps startups and growing businesses build a strong
          online presence through creative content, strategic campaigns and
          performance-driven social media marketing.We create platform-specific strategies, engaging creatives,
          community-building campaigns and data-driven optimizations that
          increase visibility, generate qualified leads and deliver measurable
          business growth.

        </p>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="mt-10"
>
  <Link href="/our-work">
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{ scale: 0.98 }}
      className="
        inline-flex
        items-center
        gap-3
        px-8
        py-4
        rounded-full
        bg-[#171717]
        text-white
        font-bold
        text-lg
        shadow-xl
        transition-all
      "
    >
      View Our Work

      <span className="text-xl">→</span>
    </motion.button>
  </Link>
</motion.div>

      </motion.div>

                                  <div
                          className="
                            relative
                            order-1
                            lg:order-2
                            flex
                            items-center
                            justify-center
                            min-h-[700px]
                          "
                        >
                          <div className="relative w-[580px] h-[580px]">
                        <Image
                          src="/assets/socialmediamarketing/hero/meta.png"
                          alt="Meta"
                          width={240}
                          height={240}
                          className="
                            absolute
                            left-1/2
                            top-[36%]
                            -translate-x-1/2
                            -translate-y-1/2
                            z-20
                            select-none
                          "
                        />

                        <>
                          <div className="absolute left-1/2 top-[36%] w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8BC04]/60 shadow-[0_0_25px_rgba(248,188,4,0.18)]" />

                        <div className="absolute left-1/2 top-[36%] w-[430px] h-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8BC04]/60 shadow-[0_0_22px_rgba(248,188,4,0.16)]" />

                        <div className="absolute left-1/2 top-[36%] w-[340px] h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8BC04]/60 shadow-[0_0_18px_rgba(248,188,4,0.14)]" />

                        <div className="absolute left-1/2 top-[36%] w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8BC04]/60 shadow-[0_0_15px_rgba(248,188,4,0.12)]" />
                        </>

                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="
                            absolute
                            left-1/2
                            top-[36%]
                            w-[520px]
                            h-[520px]
                            -translate-x-1/2
                            -translate-y-1/2
                            z-10
                          "
                        >
                          <Image
                            src="/assets/socialmediamarketing/hero/instagram.png"
                            alt="Instagram"
                            width={69}
                            height={68}
                            className="
                              absolute
                              left-1/2
                              -translate-x-1/2
                              -top-8
                            "
                          />
                        </motion.div>



                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="
                            absolute
                            left-1/2
                            top-[36%]
                            w-[430px]
                            h-[430px]
                            -translate-x-1/2
                            -translate-y-1/2
                            z-10
                          "
                        >
                          <Image
                            src="/assets/socialmediamarketing/hero/facebook.png"
                            alt="Facebook"
                            width={62}
                            height={62}
                            className="
                              absolute
                              right-[-30px]
                              top-1/2
                              -translate-y-1/2
                            "
                          />
                        </motion.div>

                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="
                            absolute
                            left-1/2
                            top-[36%]
                            w-[340px]
                            h-[340px]
                            -translate-x-1/2
                            -translate-y-1/2
                            z-10
                          "
                        >
                          <Image
                            src="/assets/socialmediamarketing/hero/linkedin.png"
                            alt="LinkedIn"
                            width={58}
                            height={58}
                            className="
                              absolute
                              bottom-[-20px]
                              left-1/2
                              -translate-x-1/2
                            "
                          />
                        </motion.div>

                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="
                            absolute
                            left-1/2
                            top-[36%]
                            w-[250px]
                            h-[250px]
                            -translate-x-1/2
                            -translate-y-1/2
                            z-10
                          "
                        >
                          <Image
                            src="/assets/socialmediamarketing/hero/twitter.png"
                            alt="X"
                            width={52}
                            height={52}
                            className="
                              absolute
                              left-[-26px]
                              top-1/2
                              -translate-y-1/2
                            "
                          />
                        </motion.div>

                        <motion.div
                          animate={{
                            y: [0, -12, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            left-1/2
                            top-[62%]
                            -translate-x-1/2
                            -translate-y-1/2
                            z-30
                          "
                        >
                          <Image
                            src="/assets/socialmediamarketing/hero/dashboard.png"
                            alt="Dashboard"
                            width={420}
                            height={270}
                            className="select-none"
                            priority
                          />
                        </motion.div>

  </div>
</div>     

    </div>
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

    <div className="grid lg:grid-cols-[480px_1fr] gap-8 items-center">

      {/* LEFT IMAGE CARD */}
      
<motion.div
  initial={{ opacity: 0, x: -50, scale: 0.92 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  whileHover={{
    scale: 1.03,
    y: -8,
  }}
  animate={{
    y: [0, -8, 0],
  }}
>
  <motion.div
  animate={{
    y: [0, -12, 0],
    rotate: [-1, 1, -1],
    scale: [1, 1.02, 1],
  }}
  transition={{
    y: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
    rotate: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
    scale: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="flex items-center justify-center"
>
    <Image
  src="/team/big_beans_digital_team.png"
  alt="Team Together"
  width={650}
  height={750}
  className="w-full max-w-[600px] h-auto object-cover rounded-[28px] shadow-2xl"
  priority
/>
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
            className="bg-[#171717] rounded-[24px] px-8 py-6 min-h-[120px] flex flex-col justify-center"
          >
            <h3 className="text-white text-4xl font-black">
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
            className="bg-[#F8BC04] rounded-[24px] px-8 py-6 min-h-[120px] flex flex-col justify-center"
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
Looking for a Social Media Marketing Agency in India, Dubai, the UAE, or London? 
BigBeans Digital helps startups and growing businesses build a stronger online 
presence through strategic Social Media Management, creative content, and 
performance-driven campaigns..          
</p>
        </motion.div>
      </div>
    </div>
  </div>
</section>

{/* WHY CHOOSE BIGBEANS DIGITAL */}
<section className="py-20 bg-[#ffffff] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-15">
      <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#ffc600]/100 text-[#000000] font-extrabold mb-6">
        Why Choose Us 
      </span>

      <h2 className="text-4xl md:text-6xl font-black text-[#171717]">
  For Your Social Media Marketing of {" "}
  <span className="text-[#ffc600] font-extrabold">
    Your Brand
  </span>
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

        

        

        <p className="text-gray-600 text-lg leading-relaxed mt-8">
          As a trusted Social Media Marketing Agency for Startups, we help businesses across India, the UAE, and London build an engaged audience that turns into loyal customers. Through strategic Social Media Management, creative content, and data-driven campaigns, we help increase brand visibility, boost engagement, and generate consistent business growth.
        </p>

        <div className="flex flex-col gap-8 mt-10 w-full max-w-[520px]">

          {/* CARD 1 */}
          <motion.div
  whileHover={{ x: 8 }}
  transition={{ duration: 0.25 }}
  className="flex items-center gap-4"
>
  <div className="text-2xl">
    🎯
  </div>

  <h3 className="text-[18px] font-semibold text-[#171717]">
    Audience First Strategy
  </h3>
</motion.div>

          {/* CARD 2 */}
          <motion.div
  whileHover={{ x: 8 }}
  transition={{ duration: 0.25 }}
  className="flex items-center gap-4"
>
  <div className="text-2xl">
    📈
  </div>

  <h3 className="text-[18px] font-semibold text-[#171717]">
    Performance Optimization
  </h3>
</motion.div>

          {/* CARD 3 */}
          <motion.div
  whileHover={{ x: 8 }}
  transition={{ duration: 0.25 }}
  className="flex items-center gap-4"
>
  <div className="text-2xl">
    🎨
  </div>

  <h3 className="text-[18px] font-semibold text-[#171717]">
    Creative Content
  </h3>
</motion.div>

        </div>

      </motion.div>

    </div>

  </div>
</section>
{/* OUR SOCIAL MEDIA SERVICES */}
<section className="py-1 bg-[#ffffff] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >

      <h2 className="text-4xl md:text-1xl font-black text-[#171717] leading-tight">
       Complete Social Media Marketing Services for Startups
       
      </h2>

      <p className="max-w-1xl mx-auto text-gray-600 text-lg mt-8 leading-relaxed">
        We help businesses grow their online presence through creative
        content, audience engagement, strategic planning and
        performance-focused social media marketing solutions designed
        to increase visibility, leads and conversions.
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-6 gap-4">

      {/* CARD 1 */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{
    y: -8,
    scale: 1.03,
  }}
  transition={{ duration: 0.5 }}
  className="group bg-white rounded-xl p-4 shadow-md hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
>
  <div className="text-4xl mb-4 transition-all duration-500 group-hover:scale-110">
    🎨
  </div>

  <h3 className="text-lg font-bold text-[#171717] mb-2">
    Content Creation
  </h3>

  <p className="text-sm text-gray-600 group-hover:text-[#171717] leading-6">
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
    y: -8,
    scale: 1.03,
  }}
  transition={{ duration: 0.6 }}
  className="group bg-white rounded-xl p-4 shadow-md hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
>
  <div className="text-4xl mb-4 transition-all duration-500 group-hover:rotate-12">
    💬
  </div>

  <h3 className="text-lg font-bold text-[#171717] mb-2">
    Community Management
  </h3>

  <p className="text-sm text-gray-600 group-hover:text-[#171717] leading-6">
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
    y: -8,
    scale: 1.03,
  }}
  transition={{ duration: 0.7 }}
  className="group bg-white rounded-xl p-4 shadow-md hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
>
  <div className="text-4xl mb-4 transition-all duration-500 group-hover:scale-110">
    📈
  </div>

  <h3 className="text-lg font-bold text-[#171717] mb-2">
    Social Media Strategy
  </h3>

  <p className="text-sm text-gray-600 group-hover:text-[#171717] leading-6">
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
    y: -8,
    scale: 1.03,
  }}
  transition={{ duration: 0.8 }}
  className="group bg-white rounded-xl p-4 shadow-md hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
>
  <div className="text-4xl mb-4 transition-all duration-500 group-hover:rotate-12">
    🤝
  </div>

  <h3 className="text-lg font-bold text-[#171717] mb-2">
    Influencer Marketing
  </h3>

  <p className="text-sm text-gray-600 group-hover:text-[#171717] leading-6">
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
    y: -8,
    scale: 1.03,
  }}
  transition={{ duration: 0.9 }}
  className="group bg-white rounded-xl p-4 shadow-md hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
>
  <div className="text-4xl mb-4 transition-all duration-500 group-hover:scale-110">
    📊
  </div>

  <h3 className="text-lg font-bold text-[#171717] mb-2">
    Analytics & Reporting
  </h3>

  <p className="text-sm text-gray-600 group-hover:text-[#171717] leading-6">
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
    y: -8,
    scale: 1.03,
  }}
  transition={{ duration: 1 }}
  className="group bg-white rounded-xl p-4 shadow-md hover:bg-[#F8BC04] cursor-pointer transition-all duration-500"
>
  <div className="text-4xl mb-4 transition-all duration-500 group-hover:scale-110">
    🎥
  </div>

  <h3 className="text-lg font-bold text-[#171717] mb-2">
    Reels & Video Marketing
  </h3>

  <p className="text-sm text-gray-600 group-hover:text-[#171717] leading-6">
    Short-form videos, reels and visual storytelling designed to
    boost engagement and maximize social media reach.
  </p>
</motion.div>
      









    </div>

  </div>
</section>

{/* OUR WORK SLIDER */}

<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      
      <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#171717]">
        Some of Our Recent Work
      </h2>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* CARD 1 */}

      <motion.div
        whileHover={{ y: -10 }}
        className="overflow-hidden rounded-[30px] shadow-2xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={card1Index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={card1Images[card1Index]}
              alt="Our Work 1"
              width={1080}
              height={1350}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* CARD 2 */}

      <motion.div
        whileHover={{ y: -10 }}
        className="overflow-hidden rounded-[30px] shadow-2xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={card2Index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={card2Images[card2Index]}
              alt="Our Work 2"
              width={1080}
              height={1350}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* CARD 3 */}

      <motion.div
        whileHover={{ y: -10 }}
        className="overflow-hidden rounded-[30px] shadow-2xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={card3Index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src={card3Images[card3Index]}
              alt="Our Work 3"
              width={1080}
              height={1350}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

    </div>

  </div>
</section>


















{/* TESTIMONIALS SECTION */}
<section className="py-20 bg-[#ffffff] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex px-6 py-3 rounded-full bg-[#F8BC04]/100 text-[#1a1a1a] font-bold tracking-wider mb-6">
          CLIENT TESTIMONIALS
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-#262626 leading-tight">
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
        <p className="text-black-300 text-lg leading-relaxed mb-8">
          Businesses trust BIGBEANS DIGITAL for creative campaigns,
          strategic marketing and measurable growth. Here's what some
          of our valued clients have to say about working with us.
        </p>

        
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


{/* FAQ SECTION */}

<section className="bg-[#FFFFFF] py-10">

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
        SOCIAL MEDIA MARKETING FAQS
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
          q: "Why should I hire a Social Media Marketing Agency for my startup?",
          a: "Hiring a Social Media Marketing Agency for Startups helps you build brand awareness, attract your ideal customers, generate qualified leads, and grow faster without wasting time or ad budget. At BIGBEANS DIGITAL, we create customized Social Media Marketing Services that focus on measurable business growth and long-term ROI."
        },
        {
          q: "What social media marketing services does BIGBEANS DIGITAL offer?",
          a: "Our Social Media Marketing Services include social media strategy, content creation, graphic design, Instagram Marketing, Facebook Marketing, LinkedIn Marketing, social media management, community management, Meta Ads, campaign optimization, analytics, and performance reporting for startups and growing businesses."
        },
        {
          q: "Which social media platforms are best for my business?",
          a: "The best platform depends on your industry and target audience. As a Social Media Marketing Agency, we help businesses choose the right platforms, including Instagram, Facebook, LinkedIn, X (Twitter), and YouTube, to maximize engagement, lead generation, and business growth."
        },
        {
          q: "How long does Social Media Marketing take to show results?",
          a: "Organic Social Media Marketing is a long-term strategy that typically starts showing consistent results within 3 to 6 months. With the right content strategy, community management, and Performance Marketing, businesses can build stronger brand visibility and generate sustainable growth."
        },
        {
          q: "Can Social Media Marketing generate leads and sales?",
          a: "Yes. A well-planned Social Media Marketing Strategy combined with Meta Ads, engaging content, and audience targeting helps businesses generate qualified leads, increase website traffic, improve conversions, and drive more sales."
        },
        {
          q: "Why choose BIGBEANS DIGITAL as your Social Media Marketing Agency?",
          a: "BIGBEANS DIGITAL is a Best Social Media Marketing Agency for Startups that combines creativity with data-driven strategies. Our team creates engaging content, manages campaigns, and continuously optimizes performance to help businesses grow across London, India, USA, and Dubai."
        },
        {
          q: "Do you create content for social media?",
          a: "Yes. Our Social Media Marketing Services include content planning, copywriting, graphic design, reels, carousel posts, videos, brand storytelling, and content calendars that increase engagement and strengthen your online presence."
        },
        {
          q: "Do you also run Meta Ads with Social Media Marketing?",
          a: "Absolutely. Along with organic Social Media Marketing, we provide Meta Ads Management to help startups and businesses reach the right audience, generate leads, increase conversions, and achieve better ROI through paid social campaigns."
        },
        {
          q: "Is Social Media Marketing suitable for small businesses and startups?",
          a: "Yes. Social Media Marketing for Startups and small businesses is one of the most cost-effective ways to build brand awareness, engage potential customers, and compete with larger brands. Our strategies are tailored to fit your business goals and marketing budget."
        },
        {
          q: "How do I get started with BIGBEANS DIGITAL?",
          a: "Getting started is simple. Contact BIGBEANS DIGITAL for a free consultation, and our experts will create a customized Social Media Marketing Strategy based on your business, target audience, competitors, and growth objectives. Whether you need a Social Media Marketing Agency in London, India, USA, or Dubai, we're here to help your brand grow."
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







      </section>
    </>
  );
}