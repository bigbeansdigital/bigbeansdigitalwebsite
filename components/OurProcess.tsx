"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface Milestone {
  number: string;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    number: "01",
    title: "Audit",
    description:
      "We review your current position and competitors to find what needs fixing and go ahead",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a custom growth plan made specifically for your business goals and budget.",
  },
  {
    number: "03",
    title: "Engineering",
    description:
      "We design your pages, write compelling ad content, start posting and set up your tracking tools.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We launch your ads, social media posts, and search engine campaigns together for maximum impact.",
  },
  {
    number: "05",
    title: "Attribution",
    description:
      "We track your daily campaign performance to see exactly where your best leads and sales are coming from.",
  },
  {
    number: "06",
    title: "Scaling",
    description:
      "We improve high-performing ads, optimize your budget, and expand your campaigns to increase your overall profits.",
  },
];

const TOTAL = MILESTONES.length;

// Alternating layout: index 0 (01) is below, index 1 (02) is above, etc.
const IS_ABOVE = [false, true, false, true, false, true];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function AboutUsJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.25,
  });

  /* Progressive sequential animation (advances 1 step every 900ms) */
  useEffect(() => {
    if (!isInView) return;

    let currentIndex = -1;
    let timer: ReturnType<typeof setTimeout>;

    const advanceStep = () => {
      currentIndex += 1;

      if (currentIndex >= TOTAL) return;

      setActiveIndex(currentIndex);

      if (currentIndex < TOTAL - 1) {
        timer = setTimeout(advanceStep, 900);
      }
    };

    timer = setTimeout(advanceStep, 400);

    return () => clearTimeout(timer);
  }, [isInView]);

  // Line progress from 0% to 100% across the 6 nodes
  const lineProgress =
    activeIndex <= 0 ? 0 : (activeIndex / (TOTAL - 1)) * 100;

  return (
    <section
      ref={containerRef}
      className="relative w-full text-white py-16 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

        {/* ========================================================== */}
        {/* LEFT COLUMN: TWO IMAGE CARDS                               */}
        {/* ========================================================== */}

        <div className="lg:col-span-4 w-full flex items-center justify-center">
          <div className="relative w-full max-w-[470px] h-[520px] sm:h-[580px] lg:h-[620px]">

            {/* ------------------------------------------------------ */}
            {/* IMAGE CARD 01                                           */}
            {/* ------------------------------------------------------ */}

            <motion.div
              initial={{ opacity: 0, x: -35, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="absolute left-0 top-0 w-[63%] h-[72%] rounded-[28px] overflow-hidden bg-[#CBD5E1] shadow-2xl z-10"
            >
              <img
  src="/home/team/tamojyoti.webp"
  alt="Big Beans Digital Tamojyoti Bhowmik"
  className="w-full h-full object-cover"
/>

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            {/* ------------------------------------------------------ */}
            {/* IMAGE CARD 02                                           */}
            {/* ------------------------------------------------------ */}

            <motion.div
              initial={{ opacity: 0, x: 35, y: 35 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="absolute right-0 bottom-0 w-[58%] h-[64%] rounded-[28px] overflow-hidden bg-[#CBD5E1] shadow-2xl z-20"
            >
              <img
  src="/home/team/members.webp"
  alt="Big Beans Digital Marketing Team"
  className="w-full h-full object-cover"
/>

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* RIGHT COLUMN: CONTENT HEADER + HORIZONTAL TIMELINE        */}
        {/* ========================================================== */}

        <div className="lg:col-span-8 flex flex-col justify-center">

          {/* -------------------------------------------------------- */}
          {/* TOP TEXT & BUTTON                                        */}
          {/* -------------------------------------------------------- */}

          <div className="max-w-3xl mb-12">

            <h2 className="text-3xl sm:text-4xl lg:text-[29px] font-extrabold tracking-tight text-white mb-5 leading-tight">
  <span className="text-[#F8BC04]">Who We Are:</span> The Team Behind Scalable Digital Growth
</h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal text-justify">
  Early-stage startups and expanding business owners face a common,
  costly trap: managing fragmented vendors. When your branding
  agency doesn't talk to your performance marketing team, and your
  web developers build without SEO in mind, your budget leaks,
  performance stalls, and lead velocity drops.

  <br></br>
  <br></br>

  Big Beans Digital was founded to eliminate those friction points.
  We are a full-service digital marketing agency, creative ad firm,
  and performance marketing powerhouse built specifically to guide
  ambitious founders and business owners through early-stage
  scaling.

  <br></br>
  <br></br>

  Instead of disconnected tactics, we build integrated growth
  pipelines. Combining creative storytelling, conversion-focused
  web architecture, and data-backed ad management, we serve as a
  dedicated growth partner for brands navigating hyper-competitive
  markets. From key commercial hubs in India including Delhi NCR,
  Mumbai, Bangalore, Kolkata, Pune, and Hyderabad to international
  markets across the UK and USA, we deliver global execution quality
  <span className="text-left">
    {" "}paired with local market precision.
  </span>
</p>

            <a
  href="https://www.bigbeansdigital.com/about"
  className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-black font-semibold text-sm rounded-md shadow hover:bg-zinc-200 transition-colors duration-200"
>
  Click here
</a>

          </div>

          {/* ======================================================== */}
          {/* HORIZONTAL TIMELINE CONTAINER                            */}
          {/* ======================================================== */}

          <div className="relative w-full overflow-x-auto lg:overflow-visible pt-16 pb-20 no-scrollbar">

            <div className="relative min-w-[700px] w-full h-[180px] flex items-center">

              {/* Background Inactive Line */}
              <div className="absolute left-[8%] right-[8%] h-[2.5px] bg-zinc-800 rounded-full" />

              {/* Active Golden Animated Line with Glow */}
              <div className="absolute left-[8%] right-[8%] h-[2.5px] pointer-events-none">

                <motion.div
                  className="h-full bg-gradient-to-r from-[#F8BC04] via-[#FCD34D] to-[#F8BC04] rounded-full"
                  style={{
                    boxShadow:
                      "0 0 12px rgba(248, 188, 4, 0.9), 0 0 24px rgba(248, 188, 4, 0.4)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${lineProgress}%` }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />

              </div>

              {/* Nodes and Milestone Cards */}
              <div className="relative z-10 w-full flex justify-between px-[5%] items-center">

                {MILESTONES.map((milestone, i) => {

                  const hasAppeared = i <= activeIndex;
                  const above = IS_ABOVE[i];

                  return (
                    <div
                      key={milestone.number}
                      className="relative flex flex-col items-center justify-center"
                    >

                      {/* ------------------------------------------- */}
                      {/* NODE MARKER                                  */}
                      {/* ------------------------------------------- */}

                      <div className="relative flex items-center justify-center w-8 h-8">

                        {/* Golden Ambient Blur Glow */}
                        <motion.div
                          className="absolute w-9 h-9 rounded-full bg-[#F8BC04] pointer-events-none"
                          initial={{
                            opacity: 0,
                            scale: 0.3,
                          }}
                          animate={{
                            opacity: hasAppeared ? 0.6 : 0,
                            scale: hasAppeared ? 1.4 : 0.3,
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                          style={{
                            filter: "blur(8px)",
                          }}
                        />

                        {/* Outer Ring */}
                        <motion.div
                          className="relative w-6 h-6 rounded-full bg-[#050505] flex items-center justify-center border-2"
                          initial={{
                            borderColor:
                              "rgba(255,255,255,0.2)",
                          }}
                          animate={{
                            borderColor: hasAppeared
                              ? "#F8BC04"
                              : "rgba(255,255,255,0.2)",

                            boxShadow: hasAppeared
                              ? "0 0 10px rgba(248, 188, 4, 0.8)"
                              : "none",
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                        >

                          {/* Inner Solid Yellow Dot */}
                          <motion.div
                            className="w-2.5 h-2.5 rounded-full bg-[#F8BC04]"
                            initial={{
                              scale: 0,
                              opacity: 0,
                            }}
                            animate={{
                              scale: hasAppeared ? 1 : 0,
                              opacity: hasAppeared ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                          />

                        </motion.div>

                      </div>

                      {/* ------------------------------------------- */}
                      {/* FLOATING CARD                                 */}
                      {/* ------------------------------------------- */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: above ? 15 : -15,
                          scale: 0.94,
                        }}
                        animate={{
                          opacity: hasAppeared ? 1 : 0,

                          y: hasAppeared
                            ? 0
                            : above
                              ? 15
                              : -15,

                          scale: hasAppeared ? 1 : 0.94,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className={`absolute w-[125px] sm:w-[135px] rounded-xl border border-zinc-800/90 bg-[#101012] p-3 text-center shadow-[0_8px_24px_rgba(0,0,0,0.8)] ${
                          above
                            ? "bottom-full mb-3.5"
                            : "top-full mt-3.5"
                        }`}
                      >

                        {/* Number */}
                        <span className="block text-[10px] font-bold text-[#F8BC04] tracking-wider mb-0.5">
                          {milestone.number}
                        </span>

                        {/* Title */}
                        <h4 className="text-[11px] font-bold text-white leading-tight mb-1">
                          {milestone.title}
                        </h4>

                        {/* Description */}
                        <p className="text-[9px] leading-snug text-zinc-400 font-normal">
                          {milestone.description}
                        </p>

                      </motion.div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}