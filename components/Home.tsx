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
    duration: 0.7,
  }}
  whileHover={{
    y: -10,
    scale: 1.03,
}}
      
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        p-8
        min-h-[220px]
        border
        ${
          dark
            ? "bg-[#171717] border-black text-white"
            : "bg-[#F8BC04] border-[#F8BC04] text-black"
        }
      `}
    >
      <div className="flex items-center justify-between">

        <span
          className={`
            text-5xl
            font-black
            ${dark ? "text-[#F8BC04]" : "text-black"}
          `}
        >
          {number}
        </span>

        <motion.div
  animate={{
    y: [0, -5, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {icon}
</motion.div>

      </div>

      <h3 className="mt-8 text-3xl font-bold">
        {title}
      </h3>

      <p
        className={`
          mt-4
          leading-relaxed
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
          bottom-[-25px]
          right-4
          text-[110px]
          font-black
          opacity-10
        "
      >
        {number}
      </span>

    </motion.div>
  );
}
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
];
  return (
    <section className="bg-[#F8F8F8] overflow-hidden pb-20">

      <div className="max-w-[1400px] mx-auto px-0 pt-4">

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

        {/* HERO CARD */}

        <motion.div
          className="relative mt-6"
          initial={{
            opacity: 0,
            y: 120,
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

          {/* BLACK CARD */}

         <div
  className="
  bg-[#171717]
  rounded-[60px]
  overflow-visible
  relative
"
>

            {/* STATS NOTCH */}

            <div className="flex justify-center">

              <div
  className="
  bg-[#F8F8F8]
  w-[700px]
  rounded-b-[40px]
  py-8
  relative
  z-20
              "
              >

                <div className="flex justify-around">

                  <div className="text-center">
                    <h3 className="text-5xl font-extrabold text-black">
                      <Counter end={102} suffix="+" />
                    </h3>
                    <p className="text-gray-500 mt-2">
                      project launched
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-5xl font-extrabold text-black">
                      <Counter end={89} suffix="%" />
                    </h3>
                    <p className="text-gray-500 mt-2">
                      clients worldwide
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl font-extrabold text-black">
                      <Counter end={99} suffix="%" />
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Indian Startups clients 
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-5xl font-extrabold text-black">
                      <Counter end={97} suffix="%" />
                    </h3>
                    <p className="text-gray-500 mt-2">
                      engage rise
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* CONTENT AREA */}

            <div
              className="
              px-20
              py-16
              grid
              md:grid-cols-2
              gap-16
              text-white
              relative
            "
            >

              {/* ANIMATED ARROW */}

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
                text-[380px]
                text-white/5
                font-black
                left-[300px]
                bottom-[-120px]
                rotate-[-35deg]
              "
              >
                ↗
              </motion.div>

              {/* LEFT */}

              <div className="relative z-10">

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-yellow-400 text-lg mb-6"
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
                  text-[62px]
                  font-bold
                  leading-[1.05]
                  max-w-[650px]
                "
                >
                  Helping Startups & Businesses Build Powerful Brands That Grow Faster.
                </motion.h2>

              </div>

              {/* RIGHT */}

              <div
                className="
                flex
                flex-col
                justify-center
                relative
                z-10
              "
              >

                <div className="flex items-center gap-5">

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
    src="/home/rating1.png"
    alt="Happy Client 1"
    className="w-12 h-12 rounded-full border-2 border-white object-cover"
  />

  <img
    src="/home/rating2.png"
    alt="Happy Client 2"
    className="w-12 h-12 rounded-full border-2 border-white object-cover"
  />

  <img
    src="/home/rating3.png"
    alt="Happy Client 3"
    className="w-12 h-12 rounded-full border-2 border-white object-cover"
  />
</motion.div>

                  {/* RATING */}

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

                    <span className="text-6xl font-bold">
                      4.9
                    </span>

                    <span className="text-[#F8BC04] text-4xl">
                      ★
                    </span>

                  </motion.div>

                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-gray-300 text-xl mt-5"
                >
                  Trusted by Startups & Growing Businesses
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="text-white-400 mt-8 text-lg max-w-[500px]"
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
{/* TRUSTED COMPANIES SECTION */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="bg-[#F8F8F8] py-10"
>
  <div className="max-w-[1400px] mx-auto px-1 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
  text-3xl
  md:text-[52px]
  font-bold
  text-[#171717]
  tracking-tight
  whitespace-nowrap
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
        mt-8
        text-lg
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

    <div className="flex items-center gap-6 mt-14">

      <div className="flex-1 h-px bg-gray-300"></div>

      <span
        className="
          text-[11px]
          uppercase
          tracking-[0.25em]
          text-gray-500
          whitespace-nowrap
        "
      >
        TRUSTED DIGITAL GROWTH PARTNER FOR STARTUPS & GROWING BUSINESSES
      </span>

      <div className="flex-1 h-px bg-gray-300"></div>

    </div>

  </div>
</motion.section>

{/* CLIENT LOGOS SECTION */}

<section className="bg-[#F8F8F8] py-1 overflow-hidden">

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
  className="object-contain max-h-[110px] w-auto h-auto"
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
  className="object-contain max-h-[110px] w-auto h-auto"
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
  className="object-contain max-h-[110px] w-auto h-auto"
          />
        </div>
      ))}
    </motion.div>

  </div>

</section>

{/* OUR PROCESS SECTION */}

<section className="bg-[#F8F8F8] py-28">

  <div className="max-w-[1400px] mx-auto px-6">

    <div className="grid lg:grid-cols-4 gap-6">

      {/* LEFT PANEL */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-[#F8BC04]
          min-h-[760px]
          p-12
        "
      >

        <h2 className="text-5xl font-black text-black">
          Our Process
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-black/80 max-w-[500px]">
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
    bottom-[-10px]
    left-[-10px]
    opacity-20
    pointer-events-none
  "
>
  <Image
    src="/assets/growth-arrow.png"
    alt="Growth Arrow"
    width={500}
    height={300}
    className="w-[500px] h-auto"
  />
</motion.div>

      </motion.div>

      {/* RIGHT GRID */}

      <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <ProcessCard
          number="01"
          title="Business Discovery"
          description="We understand your business, target audience, industry, competitors, and growth goals to create a customized digital marketing strategy that delivers measurable results from day one."
          icon={<Search size={28} />}
          dark
        />

        <ProcessCard
          number="02"
          title="Strategy & Growth Planning"
          description="Our experts build a tailored roadmap covering Social Media Marketing, SEO, Performance Marketing, Website Development, Branding, and content strategy to maximize your online growth."
          icon={<FileText size={28} />}
        />

        <ProcessCard
          number="03"
          title="Brand Development"
          description="We create a memorable brand identity with professional branding, graphic design, logo design, and messaging that helps your business stand out and build customer trust."
          icon={<Layout size={28} />}
          dark
        />

        <ProcessCard
          number="04"
          title="Campaign Launch & Management"
          description="From Google Ads, Meta Ads, and Social Media Marketing to SEO and lead generation campaigns, we launch, manage, and optimize every campaign for maximum ROI."
          icon={<Rocket size={28} />}
        />

        <ProcessCard
          number="05"
          title="Performance Optimization"
          description="Using real-time analytics and customer insights, we continuously improve campaigns to increase traffic, generate more qualified leads, boost conversions, and accelerate business growth."
          icon={<BarChart3 size={28} />}
          dark
        />

        <ProcessCard
          number="06"
          title="Transparent Reporting"
          description="Track every campaign with easy-to-understand reports showing traffic, leads, conversions, ROI, and business performance, so you always know how your marketing investment is performing."
          icon={<FileBarChart size={28} />}
        />

      </div>

    </div>

  </div>

</section>

{/* MOVING BRAND TAGS SECTION */}

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
      className="flex gap-4 w-max"
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
            gap-4
            px-6
            py-3
            rounded-full
            bg-[#171717]
            text-white
            whitespace-nowrap
            shadow-xl
            border
            border-[#2a2a2a]
          "
        >
          <span className="text-[#F8BC04] text-lg">✦</span>

          <span className="font-semibold">
            {item}
          </span>
        </motion.div>
      ))}

    </motion.div>
  </div>

</section>

{/* OUR RECENT WORK */}

<section className="bg-[#F8F8F8] py-28">

  <div className="max-w-[1400px] mx-auto px-6">

    {/* HEADER */}

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">

      <div>

        <p className="
          uppercase
          tracking-[6px]
          text-sm
          font-semibold
          text-gray-500
          mb-4
        ">
          SHOWCASING EXCELLENCE
        </p>

        <h2 className="
          text-5xl
          md:text-6xl
          font-black
          text-[#171717]
        ">
          Our Recent{" "}
          <span className="text-[#F8BC04]">
            Work
          </span>
        </h2>

      </div>

      <button
        className="
          mt-8
          lg:mt-0
          bg-[#F8BC04]
          px-8
          py-4
          rounded-full
          font-semibold
          hover:scale-105
          transition
        "
      >
        View All →
      </button>

    </div>

    {/* CARDS */}

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* CARD 1 */}

      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          rounded-[30px]
          overflow-hidden
          shadow-sm
        "
      >

        <div className="overflow-hidden">

          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/projects/ourwork-SocialMedia.jpg"
              alt="Social Media Marketing"
              width={700}
              height={500}
              className="w-full h-[320px] object-cover"
            />
          </motion.div>

        </div>

        <div className="p-8">

          <p className="text-gray-500 mb-3">
            Social Media Marketing
          </p>

          <h3 className="
            text-3xl
            font-bold
            text-[#171717]
          ">
            Social Media Campaigns
          </h3>

          <button
            className="
              mt-6
              flex
              items-center
              gap-3
              font-semibold
              hover:gap-5
              transition-all
            "
          >
            Read More →
          </button>

        </div>

      </motion.div>

      {/* CARD 2 */}

      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          rounded-[30px]
          overflow-hidden
          shadow-sm
        "
      >

        <div className="overflow-hidden">

          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/projects/ourwork-branding.jpg"
              alt="Branding"
              width={700}
              height={500}
              className="w-full h-[320px] object-cover"
            />
          </motion.div>

        </div>

        <div className="p-8">

          <p className="text-gray-500 mb-3">
            Brand Identity & Design
          </p>

          <h3 className="
            text-3xl
            font-bold
            text-[#171717]
          ">
            Branding Projects
          </h3>

          <button
            className="
              mt-6
              flex
              items-center
              gap-3
              font-semibold
              hover:gap-5
              transition-all
            "
          >
            Read More →
          </button>

        </div>

      </motion.div>

      {/* CARD 3 */}

      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          rounded-[30px]
          overflow-hidden
          shadow-sm
        "
      >

        <div className="overflow-hidden">

          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/projects/ourwork-websitedesign.jpg"
              alt="Website Design"
              width={700}
              height={500}
              className="w-full h-[320px] object-cover"
            />
          </motion.div>

        </div>

        <div className="p-8">

          <p className="text-gray-500 mb-3">
            Website Development
          </p>

          <h3 className="
            text-3xl
            font-bold
            text-[#171717]
          ">
            Website Design Projects
          </h3>

          <button
            className="
              mt-6
              flex
              items-center
              gap-3
              font-semibold
              hover:gap-5
              transition-all
            "
          >
            Read More →
          </button>

        </div>

      </motion.div>

    </div>

  </div>

</section>
{/* RESULTS SECTION */}

<section className="bg-[#F8F8F8] py-1">

  <div className="max-w-[1400px] mx-auto px-1">

    {/* TOP HEADING */}

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        text-center
        text-5xl
        md:text-7xl
        font-black
        text-[#171717]
      "
    >
      Built for{" "}
      <span className="text-[#F8BC04]">
        What's Next
      </span>
    </motion.h2>

    {/* STATS */}

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

      {/* CARD 1 */}

      <motion.div
        whileHover={{ y: -8 }}
        className="
          bg-[#F8BC04]
          rounded-[28px]
          p-8
        "
      >
        <TrendingUp
          size={34}
          className="text-white"
        />

        <p className="mt-4 text-sm">
          Performance
        </p>

        <h3 className="text-5xl font-black mt-2">
          3.5x
        </h3>

        <p className="mt-2">
          Higher Campaign Performance 
        </p>

      </motion.div>

      {/* CARD 2 */}

      <motion.div
        whileHover={{ y: -8 }}
        className="
          border-2
          border-[#F8BC04]
          rounded-[28px]
          p-8
        "
      >
        <Users
          size={34}
          className="text-[#F8BC04]"
        />

        <p className="mt-4 text-sm">
          Qualified Leads
        </p>

        <h3 className="text-5xl font-black mt-2">
          10x
        </h3>

        <p className="mt-2">
          More High-Intent Leads 
        </p>

      </motion.div>

      {/* CARD 3 */}

      <motion.div
        whileHover={{ y: -8 }}
        className="
          bg-[#F8BC04]
          rounded-[28px]
          p-8
        "
      >
        <ThumbsUp
          size={34}
          className="text-white"
        />

        <p className="mt-4 text-sm">
          Audience Growth
        </p>

        <h3 className="text-5xl font-black mt-2">
          70%
        </h3>

        <p className="mt-2">
          Stronger Brand Engagement
        </p>

      </motion.div>

      {/* CARD 4 */}

      <motion.div
        whileHover={{ y: -8 }}
        className="
          border-2
          border-[#F8BC04]
          rounded-[28px]
          p-8
        "
      >
        <LineChart
          size={34}
          className="text-[#F8BC04]"
        />

        <p className="mt-4 text-sm">
          Business Growth
        </p>

        <h3 className="text-5xl font-black mt-2">
          60%
        </h3>

        <p className="mt-2">
         Growth in Just 3 Months
        </p>

      </motion.div>

    </div>

    {/* SECOND HEADING */}

    <div className="text-center mt-24 relative">


      <h3
  className="
    relative
    text-4xl
    md:text-5xl
    lg:text-6xl
    font-black
    text-[#171717]
    text-center
  "
>
  Driven by Strategy. Powered by Creativity. {" "}
  <span className="text-[#F8BC04]">
    Built for Growth.
  </span>
</h3>

    </div>

    {/* DESCRIPTION */}

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="
        max-w-4xl
        mx-auto
        text-center
        text-xl
        text-gray-600
        mt-10
        leading-relaxed
      "
    >
      BigBeans Digital is a Social Media Marketing Agency in Kolkata helping startups, 
      entrepreneurs, and growing businesses across India, Dubai, the UAE, and the United Kingdom 
      build brands that stand out. From creative social media marketing and branding to graphic design, 
      website development, and performance marketing, we create tailored digital strategies that increase 
      brand visibility, generate qualified leads, and drive sustainable business growth.
    </motion.p>

    {/* BUTTON */}

    <div className="flex justify-center mt-12">

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

    </div>

  </div>

</section>
{/* BLOG SECTION */}

<section className="bg-[#F8F8F8] py-15">

  <div className="max-w-[1400px] mx-auto px-6">

    {/* HEADER */}

    <div className="text-center mb-20 relative">

     

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
        OUR BLOGS
      </p>

      <h2
        className="
          relative
          mt-4
          text-4xl
          md:text-6xl
          font-black
          text-[#171717]
        "
      >
        Stay Ahead with the Latest in Social Media Marketing {" "}
        <span className="text-[#F8BC04]">
          & Brand Growth
        </span>
      </h2>

      <p
        className="
          max-w-3xl
          mx-auto
          mt-8
          text-lg
          text-gray-600
        "
      >
        Discover actionable insights, social media marketing strategies, branding tips, 
        creative design trends, and digital marketing guides designed for startups, entrepreneurs, 
        and growing businesses. Explore expert articles from BigBeans Digital to help your business 
        grow online, build a stronger brand, and stay ahead of the competition.
      </p>

    </div>

    {/* BLOG CARDS */}

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* BLOG 1 */}

      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          rounded-[30px]
          overflow-hidden
          shadow-md
        "
      >

        <div className="overflow-hidden">

          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/blog/blog1.jpg"
              alt="Blog 1"
              width={700}
              height={450}
              className="w-full h-[260px] object-cover"
            />
          </motion.div>

        </div>

        <div className="p-8">

          <div className="flex justify-between items-center">

            <span className="text-gray-500">
              June 05, 2026
            </span>

            <span className="
              bg-[#F8BC04]/20
              px-4
              py-2
              rounded-full
              text-sm
            ">
              Digital Marketing
            </span>

          </div>

          <h3 className="
            mt-6
            text-2xl
            font-bold
            text-[#171717]
          ">
            Video Marketing Guide: Strategy,
            Examples & Best Practices
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Learn how video marketing helps brands increase
            engagement, build trust and drive conversions.
          </p>

          <button
            className="
              mt-8
              font-bold
              hover:translate-x-2
              transition
            "
          >
            READ MORE →
          </button>

        </div>

      </motion.div>

      {/* BLOG 2 */}

      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          rounded-[30px]
          overflow-hidden
          shadow-md
        "
      >

        <Image
          src="/blog/blog2.jpg"
          alt="Blog 2"
          width={700}
          height={450}
          className="w-full h-[260px] object-cover"
        />

        <div className="p-8">

          <div className="flex justify-between items-center">

            <span className="text-gray-500">
              May 25, 2026
            </span>

            <span className="
              bg-[#F8BC04]/20
              px-4
              py-2
              rounded-full
              text-sm
            ">
              SEO
            </span>

          </div>

          <h3 className="
            mt-6
            text-2xl
            font-bold
            text-[#171717]
          ">
            SEO Pricing in India (2026):
            Complete Cost Comparison Guide
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Compare agency pricing, freelancer costs,
            SEO packages and ROI expectations.
          </p>

          <button
            className="
              mt-8
              font-bold
              hover:translate-x-2
              transition
            "
          >
            READ MORE →
          </button>

        </div>

      </motion.div>

      {/* BLOG 3 */}

      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          rounded-[30px]
          overflow-hidden
          shadow-md
        "
      >

        <Image
          src="/blog/blog3.jpg"
          alt="Blog 3"
          width={700}
          height={450}
          className="w-full h-[260px] object-cover"
        />

        <div className="p-8">

          <div className="flex justify-between items-center">

            <span className="text-gray-500">
              May 20, 2026
            </span>

            <span className="
              bg-[#F8BC04]/20
              px-4
              py-2
              rounded-full
              text-sm
            ">
              Digital Marketing
            </span>

          </div>

          <h3 className="
            mt-6
            text-2xl
            font-bold
            text-[#171717]
          ">
            Google Core Update:
            What Every Business Should Know
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Understand how algorithm updates impact rankings,
            traffic and business visibility.
          </p>

          <button
            className="
              mt-8
              font-bold
              hover:translate-x-2
              transition
            "
          >
            READ MORE →
          </button>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* PRESENCE SECTION */}

<section className="bg-[#F8F8F8] py-5">

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
            text-4xl
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
            mt-8
            text-lg
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
{/* FAQ SECTION */}

<section className="bg-[#F8F8F8] py-10">

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
        ANSWERING YOUR QUERIES
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



    </section>    
  );
}
