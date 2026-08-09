"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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

export default function LogoDesigning() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden">
      {/* =========================================================
          CREATIVE CTA SECTION
      ========================================================= */}

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* FLOATING SHAPES */}

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-3 top-10 text-2xl text-[#F8BC04] sm:left-10 sm:top-16 sm:text-3xl lg:left-20 lg:top-20 lg:text-4xl"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-3 text-3xl text-[#F8BC04] sm:bottom-16 sm:right-10 sm:text-4xl lg:bottom-20 lg:right-20 lg:text-5xl"
        >
          ✦
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* MAIN HEADING */}

            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl font-black leading-none text-[#171717] sm:text-5xl md:text-7xl lg:text-8xl"
            >
              Create A Logo
              <br />

              <motion.span
                animate={{
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="mt-4 inline-block rounded-[30px] bg-[#F8BC04] px-5 py-2.5 text-white shadow-2xl sm:px-8 sm:py-3"
              >
                People Remember
              </motion.span>
            </motion.h2>

            {/* SUBTEXT */}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 1,
              }}
              className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-gray-600 sm:mt-10 sm:text-lg md:text-xl"
            >
              Transform your business identity with custom logo designs that
              capture attention, build credibility and create a powerful first
              impression across digital and offline platforms.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex flex-col items-stretch justify-center gap-3 px-2 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 sm:px-0"
            >
              <Link href="/our-work" className="w-full sm:w-auto">
                <button className="w-full rounded-full bg-[#171717] px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#F8BC04] hover:text-[#171717] sm:w-auto sm:px-8">
                  View Our Work
                </button>
              </Link>

              <Link
                href="https://wa.link/gqxvz0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full rounded-full border border-[#171717] px-7 py-3 font-semibold transition hover:bg-[#171717] hover:text-white sm:w-auto sm:px-8">
                  Get Consultation
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BRAND STORY GRID SECTION
      ========================================================= */}

      <section className="overflow-hidden py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl font-black leading-tight text-[#171717] sm:text-4xl md:text-7xl">
              Logo is the First Impression
              <br />
              That Builds Brand Recognition
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-12 md:auto-rows-[220px]">
            {/* BOX 1 */}

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                rotate: -3,
                scale: 1.04,
                y: -15,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative col-span-1 h-[240px] overflow-hidden rounded-[30px] group sm:col-span-1 sm:h-auto md:col-span-4"
            >
              <Image
                src="/assets/logodesigning/bigbeansdigitalcolorpalate.png"
                alt="BigBeans Digital Best Logo Designer in London"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* BOX 2 */}

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative col-span-1 h-[240px] overflow-hidden rounded-[30px] group sm:col-span-1 sm:h-auto md:col-span-4"
            >
              <Image
                src="/assets/logodesigning/bigbeansdigitallogoshow.png"
                alt="BigBeans Digital Best Logo Designer in London"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-125"
              />
            </motion.div>

            {/* BOX 3 */}

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: -2,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative col-span-1 h-[240px] overflow-hidden rounded-[30px] group sm:col-span-1 sm:h-[500px] md:col-span-4 md:row-span-2 md:h-auto"
            >
              <Image
                src="/assets/logodesigning/bigbeansdigitalbranding.png"
                alt=""
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* BOX 4 */}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.06,
                rotate: -3,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative col-span-1 h-[240px] overflow-hidden rounded-[30px] group sm:col-span-1 sm:h-[500px] md:col-span-4 md:row-span-2 md:h-auto"
            >
              <Image
                src="/assets/logodesigning/bigbeansdigitalbranding2.png"
                alt=""
                fill
                className="object-cover transition-all duration-700 group-hover:scale-115"
              />
            </motion.div>

            {/* BOX 5 */}

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative col-span-1 h-[240px] overflow-hidden rounded-[30px] group sm:col-span-1 sm:h-auto md:col-span-4"
            >
              <Image
                src="/assets/logodesigning/bigbeansdigitalicon.png"
                alt=""
                fill
                className="object-cover transition-all duration-700 group-hover:scale-125"
              />
            </motion.div>

            {/* BOX 6 */}

            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              whileHover={{
                scale: 1.08,
                y: -15,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative col-span-1 h-[240px] overflow-hidden rounded-[30px] group sm:col-span-1 sm:h-auto md:col-span-4"
            >
              <Image
                src="/assets/logodesigning/bigbeansdigitalicon1.jpg"
                alt=""
                fill
                className="object-cover transition-all duration-700 group-hover:scale-120"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND DEVELOPMENT SECTION
      ========================================================= */}

      <section className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* TOP CONTENT */}

          <div className="mb-12 grid items-center gap-8 sm:mb-16 lg:mb-20 lg:grid-cols-2 lg:gap-20">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black leading-tight text-[#171717] sm:text-5xl md:text-6xl">
                Building Brands
                <br />
                That People
                <br />
                Remember
              </h2>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                At BIGBEANS DIGITAL, branding goes beyond visuals. We help
                businesses create a unique identity, define their voice and
                establish a memorable presence that builds trust and attracts
                the right audience. From strategy to execution, every element
                is designed to strengthen recognition and drive long-term
                growth.
              </p>
            </motion.div>
          </div>

          {/* =====================================================
              PROCESS CARDS

              MOBILE:
              Horizontal single-line carousel instead of
              3 vertically stacked cards.
          ===================================================== */}

          <div className="relative -mx-4 sm:-mx-6 md:mx-0">
            <div
              className="
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                px-4
                pb-5
                scrollbar-hide
                sm:gap-5
                sm:px-6
                md:grid
                md:grid-cols-3
                md:gap-8
                md:overflow-visible
                md:px-0
                md:pb-0
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* CARD 1 */}

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  y: -15,
                  rotate: -2,
                  scale: 1.03,
                }}
                className="
                  relative
                  min-w-[82vw]
                  snap-center
                  overflow-hidden
                  rounded-[30px]
                  bg-[#171717]
                  p-7
                  text-white
                  sm:min-w-[65vw]
                  sm:p-8
                  md:min-w-0
                  md:p-10
                "
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-[#F8BC04]/30"
                />

                <h3 className="mb-5 text-6xl font-black text-[#F8BC04] sm:text-7xl">
                  01
                </h3>

                <h4 className="mb-4 text-2xl font-bold sm:mb-5 sm:text-3xl">
                  Discover
                </h4>

                <p className="text-sm leading-7 text-gray-300 sm:text-base">
                  We begin by understanding your business, market, audience
                  and goals to uncover what makes your brand truly unique.
                </p>
              </motion.div>

              {/* CARD 2 */}

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{
                  y: -15,
                  rotate: 2,
                  scale: 1.03,
                }}
                className="
                  relative
                  min-w-[82vw]
                  snap-center
                  overflow-hidden
                  rounded-[30px]
                  bg-[#F8BC04]
                  p-7
                  text-[#171717]
                  sm:min-w-[65vw]
                  sm:p-8
                  md:min-w-0
                  md:p-10
                "
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/20"
                />

                <h3 className="mb-5 text-6xl font-black sm:text-7xl">
                  02
                </h3>

                <h4 className="mb-4 text-2xl font-bold sm:mb-5 sm:text-3xl">
                  Design
                </h4>

                <p className="text-sm leading-7 sm:text-base">
                  Our creative team transforms ideas into powerful visual
                  identities, ensuring consistency across every customer
                  touchpoint.
                </p>
              </motion.div>

              {/* CARD 3 */}

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{
                  y: -15,
                  rotate: -2,
                  scale: 1.03,
                }}
                className="
                  relative
                  min-w-[82vw]
                  snap-center
                  overflow-hidden
                  rounded-[30px]
                  bg-[#171717]
                  p-7
                  text-white
                  sm:min-w-[65vw]
                  sm:p-8
                  md:min-w-0
                  md:p-10
                "
              >
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#F8BC04]/10"
                />

                <h3 className="mb-5 text-6xl font-black text-[#F8BC04] sm:text-7xl">
                  03
                </h3>

                <h4 className="mb-4 text-2xl font-bold sm:mb-5 sm:text-3xl">
                  Launch
                </h4>

                <p className="text-sm leading-7 text-gray-300 sm:text-base">
                  We bring your brand to life through strategic implementation,
                  ensuring maximum impact, visibility and audience engagement.
                </p>
              </motion.div>
            </div>

            {/* MOBILE SWIPE INDICATOR */}

            <div className="mt-1 flex justify-center gap-1.5 md:hidden">
              <span className="h-1.5 w-6 rounded-full bg-[#F8BC04]" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLIENT LOGO CAROUSEL
      ========================================================= */}

      <section className="overflow-hidden pb-12 pt-5 sm:pb-20 sm:pt-8">
        <div className="relative mx-auto max-w-7xl px-0 sm:px-4">
          <div
            className="
              relative
              overflow-hidden
              [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            "
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 35,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex w-max gap-4 sm:gap-6 lg:gap-8"
            >
              {[...carouselImages, ...carouselImages].map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square w-[150px] flex-shrink-0 overflow-hidden rounded-[22px] sm:w-[190px] sm:rounded-[25px] md:w-[220px] lg:w-[240px] lg:rounded-[28px]"
                >
                  <Image
                    src={image}
                    alt={`Carousel ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US SECTION
          
          MOBILE:
          Horizontal single-line card carousel.
          
          DESKTOP:
          Original 6-column arrangement preserved.
      ========================================================= */}

      <section className="overflow-hidden bg-[#FFFFFF] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl font-black leading-tight text-[#171717] sm:text-4xl md:text-5xl">
              Why Brands Choose{" "}
              <span className="text-[#F8BC04]">BIGBEANS DIGITAL</span>
            </h2>
          </motion.div>

          {/* CARDS */}

          <div className="relative -mx-4 sm:-mx-6 md:mx-0">
            <div
              className="
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                px-4
                pb-5
                scrollbar-hide
                sm:gap-5
                sm:px-6
                md:grid
                md:grid-cols-3
                md:gap-6
                md:overflow-visible
                md:px-0
                md:pb-0
                xl:grid-cols-6
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {[
                {
                  number: "01",
                  title: "ROI Focused",
                  desc: "Performance-driven strategies designed to maximize your return on every marketing investment.",
                },
                {
                  number: "02",
                  title: "Creative Ads",
                  desc: "Eye-catching creatives that stop scrolling and convert attention into customers.",
                },
                {
                  number: "03",
                  title: "Smart Targeting",
                  desc: "Reach the right audience using advanced targeting and data-driven campaigns.",
                },
                {
                  number: "04",
                  title: "More Leads",
                  desc: "Generate qualified leads consistently with proven Social Media Marketing  systems.",
                },
                {
                  number: "05",
                  title: "Live Reports",
                  desc: "Stay updated with transparent reporting and real-time campaign insights.",
                },
                {
                  number: "06",
                  title: "Fast Scaling",
                  desc: "Scale your business faster using optimized campaigns and growth strategies.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  className="
                    relative
                    min-w-[82vw]
                    snap-center
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-gray-200
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(0,0,0,0.06)]
                    sm:min-w-[62vw]
                    md:min-w-0
                    xl:min-w-0
                  "
                >
                  {/* Decorative Circle */}

                  <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#F8BC04]/15" />

                  <h3 className="mb-2 text-6xl font-black leading-none text-[#F8BC04]">
                    {item.number}
                  </h3>

                  <h4 className="mb-4 text-2xl font-black leading-tight text-[#171717]">
                    {item.title}
                  </h4>

                  <p className="text-[15px] leading-7 text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* MOBILE SWIPE INDICATOR */}

            <div className="mt-1 flex justify-center gap-1.5 md:hidden">
              <span className="h-1.5 w-6 rounded-full bg-[#F8BC04]" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ SECTION
      ========================================================= */}

      <section className="bg-[#FFFFFF] py-8 sm:py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          {/* HEADER */}

          <div className="relative mb-12 text-center sm:mb-16">
            <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-[#F8BC04]/35" />

            <p className="relative text-sm font-semibold uppercase tracking-[5px] text-gray-500 sm:tracking-[6px]">
              BRANDING FAQS
            </p>

            <h2 className="relative mt-4 text-4xl font-black text-[#171717] sm:text-5xl md:text-6xl">
              Frequently Asked{" "}
              <span className="text-[#F8BC04]">Questions</span>
            </h2>
          </div>

          {/* FAQ GRID */}

          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
            {[
              {
                q: "Why is a professional logo important for my business?",
                a: "A professionally designed logo is the foundation of your brand identity. It helps customers recognize your business, builds trust, and creates a strong first impression across your website, social media, packaging, and marketing materials. A memorable logo also helps startups stand out in competitive markets.",
              },
              {
                q: "What makes BIGBEANS DIGITAL the best logo design company for startups?",
                a: "BIGBEANS DIGITAL specializes in creating unique, memorable, and strategic logos for startups, entrepreneurs, and growing businesses. Every logo is custom-designed to reflect your brand personality, industry, target audience, and long-term business goals.",
              },
              {
                q: "What types of logo design services do you offer?",
                a: "We offer custom logo design, startup logo design, business logo design, minimalist logos, modern logo design, mascot logos, typography logos, icon-based logos, monogram logos, and complete brand identity design tailored to your business.",
              },
              {
                q: "How do you create a logo that represents my brand?",
                a: "Our design process begins by understanding your business, industry, competitors, target audience, and brand values. We then create original logo concepts that communicate your brand message while ensuring the design is timeless, scalable, and easy to recognize.",
              },
              {
                q: "Will I receive the source files and full ownership of my logo?",
                a: "Yes. Once your logo is finalized, you'll receive high-quality files in multiple formats, including AI, EPS, SVG, PNG, PDF, and JPG. You also receive complete ownership rights for your logo.",
              },
              {
                q: "Can you redesign my existing logo?",
                a: "Absolutely. Our logo redesign services help modernize outdated logos while maintaining your brand recognition. We create refreshed, professional designs that better represent your business and today's digital landscape.",
              },
              {
                q: "How many logo concepts and revisions do you provide?",
                a: "We provide multiple creative logo concepts based on your requirements along with revision rounds to ensure the final design perfectly matches your vision and business identity.",
              },
              {
                q: "Do you design logos for startups and small businesses?",
                a: "Yes. We specialize in logo design for startups, entrepreneurs, local businesses, ecommerce brands, healthcare, real estate, gyms, restaurants, FMCG companies, and service-based businesses looking to establish a strong brand identity.",
              },
              {
                q: "How long does a professional logo design project take?",
                a: "Most logo design projects are completed within 3–7 business days, depending on the complexity of the design, revisions, and project requirements.",
              },
              {
                q: "Why choose BIGBEANS DIGITAL for logo design?",
                a: "BIGBEANS DIGITAL combines creativity with branding strategy to design logos that do more than just look attractive. We create professional logos that improve brand recognition, build customer trust, and support long-term business growth, making us a trusted Logo Design Company for Startups and Growing Businesses.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-[20px] border border-gray-300 bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-3 p-4 text-left sm:p-6"
                >
                  <span className="pr-4 font-semibold text-[#171717]">
                    {faq.q}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171717] text-xl text-white">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-5 sm:px-6 sm:pb-6"
                  >
                    <p className="leading-relaxed text-gray-600">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
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
              <p className="mb-6 text-sm font-semibold uppercase tracking-[5px] text-gray-500 sm:tracking-[6px]">
                Global Presence
              </p>

              <h2 className="text-4xl font-black leading-tight text-[#171717] sm:text-5xl lg:text-6xl">
                Digital Excellence in{" "}
                <span className="text-[#F8BC04]">12+</span>
                <br />
                Locations
              </h2>

              <p className="mt-7 max-w-[650px] text-base leading-relaxed text-gray-600 sm:mt-8 sm:text-lg">
                BIGBEANS DIGITAL serves businesses across India and
                international markets. Our strategies are built for local
                relevance and global scalability.
              </p>

              {/* LOCATIONS */}

              <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-12 sm:gap-10">
                <div className="border-r border-[#000000]/30 pr-4 sm:pr-10">
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

            <div className="relative w-full min-w-0">
              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="h-auto w-full max-w-full"
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

      <section className="relative overflow-hidden bg-[#ffffff] py-14 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#171717] px-5 py-10 sm:rounded-[40px] sm:px-8 sm:py-14 md:px-16 md:py-16">
            {/* Glow */}

            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F8BC04]/20 blur-[120px]" />

            <div className="relative z-10 flex flex-col items-stretch justify-between gap-7 sm:gap-10 lg:flex-row lg:items-center">
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
                className="w-full whitespace-nowrap rounded-full bg-[#F8BC04] px-7 py-4 text-base font-bold text-[#171717] shadow-[0_20px_50px_rgba(248,188,4,0.35)] transition-all duration-300 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                Book Free Strategy Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          END CTA SECTION
      ========================================================= */}
    </main>
  );
}