"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const carouselImages = [
  "/assets/branding/carousel/1.png",
  "/assets/branding/carousel/2.png",
  "/assets/branding/carousel/3.png",
  "/assets/branding/carousel/4.png",
  "/assets/branding/carousel/5.png",
  "/assets/branding/carousel/6.png",
  "/assets/branding/carousel/7.png",
  "/assets/branding/carousel/8.png",
  "/assets/branding/carousel/9.png",
  "/assets/branding/carousel/9.png",
  "/assets/branding/carousel/9.png",
  "/assets/branding/carousel/9.png",
  "/assets/branding/carousel/9.png",
  "/assets/branding/carousel/9.png",
];

export default function Branding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* =========================================================
          HERO / BREADCRUMB
      ========================================================= */}

      <section className="bg-[#FFFFFF] py-5 sm:py-7 lg:py-8 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="inline-flex max-w-full items-center rounded-full bg-white px-4 py-2.5 sm:px-6 sm:py-3 shadow-md">
              <span className="text-xs sm:text-sm text-[#4B5563] font-medium">
                Home
              </span>

              <span className="mx-2.5 sm:mx-4 text-sm sm:text-base text-[#F8BC04] font-semibold">
                →
              </span>

              <span className="text-xs sm:text-sm font-bold text-[#171717]">
                Branding
              </span>
            </div>
          </div>

          {/* Hero */}
          <section className="overflow-hidden py-1 sm:py-3">
            <div className="mx-auto w-full max-w-7xl">

              <div className="mx-auto mb-12 sm:mb-16 lg:mb-20 max-w-5xl text-center">

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="
                    text-[42px]
                    leading-[1.04]
                    tracking-tight
                    font-light
                    text-[#171717]
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                  "
                >
                  Build your{" "}
                  <span
                    className="
                      italic
                      font-black
                      font-serif
                      text-[#F8BC04]
                    "
                  >
                    Brand
                  </span>{" "}
                  with us
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.8 }}
                  className="
                    mx-auto
                    mt-5
                    max-w-3xl
                    text-[15px]
                    leading-6
                    text-gray-600
                    sm:mt-6
                    sm:text-base
                    sm:leading-7
                    lg:text-lg
                    lg:leading-relaxed
                  "
                >
                  Build a memorable brand identity with strategic design,
                  creative storytelling and visuals that help your business
                  stand out and grow.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="
                    mt-7
                    flex
                    flex-col
                    items-stretch
                    justify-center
                    gap-3
                    sm:mt-10
                    sm:flex-row
                    sm:items-center
                    sm:gap-4
                  "
                >
                  <Link href="/our-work" className="w-full sm:w-auto">
                    <button
                      className="
                        w-full
                        rounded-full
                        bg-[#171717]
                        px-7
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#F8BC04]
                        hover:text-[#171717]
                        sm:w-auto
                        sm:px-8
                        sm:text-base
                      "
                    >
                      View Our Work
                    </button>
                  </Link>

                  <Link
                    href="https://wa.link/gqxvz0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button
                      className="
                        w-full
                        rounded-full
                        border
                        border-[#171717]
                        px-7
                        py-3
                        text-sm
                        font-semibold
                        text-[#171717]
                        transition
                        hover:bg-[#171717]
                        hover:text-white
                        sm:w-auto
                        sm:px-8
                        sm:text-base
                      "
                    >
                      Get Consultation
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* =====================================================
                  AUTO CAROUSEL
              ===================================================== */}

              <section className="overflow-hidden pb-12 pt-1 sm:pb-16 lg:pb-20">
                <div className="relative mx-auto max-w-7xl">
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
                      className="flex w-max gap-3 sm:gap-5 lg:gap-8"
                    >
                      {[...carouselImages, ...carouselImages].map(
                        (image, index) => (
                          <div
                            key={index}
                            className="
                              relative
                              aspect-square
                              w-[145px]
                              flex-shrink-0
                              overflow-hidden
                              rounded-[20px]
                              sm:w-[190px]
                              sm:rounded-[24px]
                              lg:w-[240px]
                              lg:rounded-[28px]
                            "
                          >
                            <Image
                              src={image}
                              alt={`Carousel ${index + 1}`}
                              fill
                              sizes="(max-width: 640px) 145px, (max-width: 1024px) 190px, 240px"
                              className="object-cover"
                            />
                          </div>
                        )
                      )}
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* =====================================================
                  CONTENT
              ===================================================== */}

              <div
                className="
                  mb-14
                  grid
                  grid-cols-1
                  items-center
                  gap-8
                  sm:mb-20
                  sm:gap-10
                  lg:mb-24
                  lg:grid-cols-2
                  lg:gap-20
                "
              >
                {/* LEFT */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2
                    className="
                      text-[38px]
                      font-black
                      leading-[1.04]
                      text-[#171717]
                      sm:text-5xl
                      md:text-6xl
                    "
                  >
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
                  <p
                    className="
                      text-[16px]
                      leading-7
                      text-gray-600
                      sm:text-lg
                      sm:leading-relaxed
                      lg:text-xl
                    "
                  >
                    At BIGBEANS DIGITAL, branding goes beyond visuals. We help
                    businesses create a unique identity, define their voice
                    and establish a memorable presence that builds trust and
                    attracts the right audience. From strategy to execution,
                    every element is designed to strengthen recognition and
                    drive long-term growth.
                  </p>
                </motion.div>
              </div>

              {/* =====================================================
                  PROCESS CARDS
                  MOBILE = HORIZONTAL SCROLL
                  DESKTOP = 3 COLUMNS
              ===================================================== */}

              <div
                className="
                  flex
                  snap-x
                  snap-mandatory
                  gap-4
                  overflow-x-auto
                  pb-5
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                  sm:gap-5
                  lg:grid
                  lg:grid-cols-3
                  lg:gap-8
                  lg:overflow-visible
                  lg:pb-0
                "
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
                    rounded-[25px]
                    bg-[#171717]
                    p-6
                    text-white
                    sm:min-w-[70vw]
                    sm:rounded-[30px]
                    sm:p-8
                    lg:min-w-0
                    lg:p-10
                  "
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      border
                      border-[#F8BC04]/30
                      sm:-right-12
                      sm:-top-12
                      sm:h-32
                      sm:w-32
                    "
                  />

                  <h3
                    className="
                      mb-4
                      text-6xl
                      font-black
                      leading-none
                      text-[#F8BC04]
                      sm:mb-6
                      sm:text-7xl
                    "
                  >
                    01
                  </h3>

                  <h4
                    className="
                      mb-3
                      text-2xl
                      font-bold
                      sm:mb-5
                      sm:text-3xl
                    "
                  >
                    Discover
                  </h4>

                  <p className="text-[15px] leading-6 text-gray-300 sm:leading-relaxed">
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
                    rounded-[25px]
                    bg-[#F8BC04]
                    p-6
                    text-[#171717]
                    sm:min-w-[70vw]
                    sm:rounded-[30px]
                    sm:p-8
                    lg:min-w-0
                    lg:p-10
                  "
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      right-0
                      top-0
                      h-32
                      w-32
                      rounded-full
                      bg-white/20
                      sm:h-40
                      sm:w-40
                    "
                  />

                  <h3
                    className="
                      relative
                      z-10
                      mb-4
                      text-6xl
                      font-black
                      leading-none
                      sm:mb-6
                      sm:text-7xl
                    "
                  >
                    02
                  </h3>

                  <h4
                    className="
                      relative
                      z-10
                      mb-3
                      text-2xl
                      font-bold
                      sm:mb-5
                      sm:text-3xl
                    "
                  >
                    Design
                  </h4>

                  <p className="relative z-10 text-[15px] leading-6 sm:leading-relaxed">
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
                    rounded-[25px]
                    bg-[#171717]
                    p-6
                    text-white
                    sm:min-w-[70vw]
                    sm:rounded-[30px]
                    sm:p-8
                    lg:min-w-0
                    lg:p-10
                  "
                >
                  <motion.div
                    animate={{ x: [0, 20, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-32
                      w-32
                      rounded-full
                      bg-[#F8BC04]/10
                      sm:h-36
                      sm:w-36
                    "
                  />

                  <h3
                    className="
                      mb-4
                      text-6xl
                      font-black
                      leading-none
                      text-[#F8BC04]
                      sm:mb-6
                      sm:text-7xl
                    "
                  >
                    03
                  </h3>

                  <h4
                    className="
                      mb-3
                      text-2xl
                      font-bold
                      sm:mb-5
                      sm:text-3xl
                    "
                  >
                    Launch
                  </h4>

                  <p className="text-[15px] leading-6 text-gray-300 sm:leading-relaxed">
                    We bring your brand to life through strategic
                    implementation, ensuring maximum impact, visibility and
                    audience engagement.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* =============================================================
          LOGO DESIGN SHOWCASE
      ============================================================= */}

      <section className="overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

          {/* TOP CONTENT */}
          <div
            className="
              mb-10
              grid
              grid-cols-1
              items-center
              gap-6
              sm:mb-12
              sm:gap-8
              lg:mb-16
              lg:grid-cols-[1fr_2fr_auto]
              lg:gap-10
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="
                  text-[34px]
                  font-black
                  leading-tight
                  text-[#171717]
                  sm:text-4xl
                "
              >
                Logo Designs That BuildBrands
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                text-[15px]
                leading-6
                text-gray-600
                sm:text-lg
                sm:leading-relaxed
              "
            >
              A logo is often the first impression people have of your
              business. At BIGBEANS DIGITAL, we create distinctive logo
              identities that capture your brand personality, improve
              recognition and help your business stand out in a competitive
              market. Every design is crafted with strategy, creativity and
              long-term brand growth in mind.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                w-full
                rounded-full
                bg-[#F8BC04]
                px-7
                py-3.5
                text-sm
                font-bold
                text-[#171717]
                shadow-xl
                sm:w-fit
                sm:px-8
                sm:py-4
                sm:text-base
              "
            >
              Explore Designs →
            </motion.button>
          </div>

          {/* LOGO SHOWCASE */}
          <div
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:gap-6
              lg:grid
              lg:grid-cols-3
              lg:gap-8
              lg:overflow-visible
              lg:pb-0
            "
          >

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{
                y: -20,
                rotate: -2,
                scale: 1.03,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <Image
                  src="/assets/branding/showcase/brandinglogo1.png"
                  alt="Big Beans Best Logo Desing Company"
                  width={700}
                  height={500}
                  className="
                    h-[330px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                    sm:h-[380px]
                  "
                />
              </motion.div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{
                y: -20,
                rotate: 2,
                scale: 1.03,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <Image
                  src="/assets/branding/showcase/brandinglogo3.png"
                  alt="Big Beans Best Logo Desing Company"
                  width={700}
                  height={500}
                  className="
                    h-[330px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                    sm:h-[380px]
                  "
                />
              </motion.div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{
                y: -20,
                rotate: -2,
                scale: 1.03,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              >
                <Image
                  src="/assets/branding/showcase/brandinglogo2.png"
                  alt="Big Beans Best Logo Desing Company"
                  width={700}
                  height={500}
                  className="
                    h-[330px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                    sm:h-[380px]
                  "
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================================================
          PRODUCT PACKAGING
      ============================================================= */}

      <section className="overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

          {/* TOP CONTENT */}
          <div
            className="
              mb-10
              grid
              grid-cols-1
              items-center
              gap-6
              sm:mb-12
              sm:gap-8
              lg:mb-16
              lg:grid-cols-[1fr_2fr_auto]
              lg:gap-10
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="
                  text-[38px]
                  font-black
                  leading-[1.05]
                  text-[#171717]
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Product
                <br />
                Packaging
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                text-[15px]
                leading-6
                text-gray-600
                sm:text-lg
                sm:leading-relaxed
              "
            >
              Packaging is often the first interaction customers have with
              your product. We create premium packaging designs that combine
              aesthetics, functionality and brand storytelling to increase
              shelf appeal, strengthen recognition and influence purchasing
              decisions.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.08,
                rotate: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                w-full
                rounded-full
                bg-[#F8BC04]
                px-7
                py-3.5
                text-sm
                font-bold
                text-[#171717]
                shadow-xl
                sm:w-fit
                sm:px-8
                sm:py-4
                sm:text-base
              "
            >
              View Portfolio →
            </motion.button>
          </div>

          {/* PACKAGING SHOWCASE */}
          <div
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:gap-6
              lg:grid
              lg:grid-cols-3
              lg:gap-8
              lg:overflow-visible
              lg:pb-0
            "
          >

            {/* CARD 1 */}
            <motion.div
              initial={{
                opacity: 0,
                x: -150,
                rotate: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 70,
              }}
              whileHover={{
                y: -30,
                rotateY: -15,
                rotateX: 10,
                scale: 1.03,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                bg-[#171717]
                shadow-2xl
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative h-[430px] sm:h-[500px]"
              >
                <Image
                  src="/assets/branding/showcase/bigbeansproductpack1.png"
                  alt="BigBeans Digital Best Product Packaging Desing"
                  fill
                  sizes="(max-width: 1024px) 82vw, 33vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{
                  x: ["-200%", "250%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[100px]
                  rotate-12
                  bg-white/20
                  blur-2xl
                  sm:w-[120px]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 150,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              whileHover={{
                scale: 1.06,
                y: -30,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                bg-[#171717]
                shadow-2xl
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
                className="relative h-[430px] sm:h-[500px]"
              >
                <Image
                  src="/assets/branding/showcase/bigbeansproductpack2.png"
                  alt="BigBeans Digital Best Product Packaging Desing"
                  fill
                  sizes="(max-width: 1024px) 82vw, 33vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-32
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#F8BC04]/20
                  blur-3xl
                  sm:h-40
                  sm:w-40
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{
                opacity: 0,
                x: 150,
                rotate: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              whileHover={{
                y: -30,
                rotateY: 15,
                rotateX: 10,
                scale: 1.03,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                bg-[#171717]
                shadow-2xl
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="relative h-[430px] sm:h-[500px]"
              >
                <Image
                  src="/assets/branding/showcase/bigbeansproductpack3.png"
                  alt="BigBeans Digital Best Product Packaging Desing"
                  fill
                  sizes="(max-width: 1024px) 82vw, 33vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{
                  x: ["-200%", "250%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[110px]
                  rotate-12
                  bg-white/20
                  blur-xl
                  sm:w-[140px]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================================================
          DIGITAL POSTS / BRANDING PORTFOLIO
      ============================================================= */}

      <section className="overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

          {/* TOP SECTION */}
          <div
            className="
              mb-10
              grid
              grid-cols-1
              items-start
              gap-6
              sm:mb-12
              sm:gap-8
              lg:mb-16
              lg:grid-cols-[280px_1fr_auto]
              lg:gap-10
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="
                  text-[38px]
                  font-black
                  leading-tight
                  text-[#171717]
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Digital
                <br />
                Posts
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                max-w-3xl
                text-[15px]
                leading-6
                text-gray-600
                sm:text-lg
                sm:leading-relaxed
              "
            >
              Every successful brand starts with a strong visual identity.
              From logo systems and packaging concepts to marketing creatives
              and premium brand assets, we create designs that make businesses
              memorable, recognizable and trusted across every platform.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              className="
                w-full
                rounded-full
                bg-[#F8BC04]
                px-7
                py-3.5
                text-sm
                font-bold
                text-[#171717]
                shadow-xl
                sm:w-fit
                sm:px-8
                sm:py-4
                sm:text-base
              "
            >
              Explore Work →
            </motion.button>
          </div>

          {/* PORTFOLIO GRID */}
          <div
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:gap-6
              lg:grid
              lg:grid-cols-3
              lg:gap-8
              lg:overflow-visible
              lg:pb-0
            "
          >

            {/* CARD 1 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 120,
                rotate: -8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                type: "spring",
              }}
              whileHover={{
                y: -25,
                rotateY: -12,
                rotateX: 8,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="relative h-[430px] sm:h-[500px]"
              >
                <Image
                  src="/assets/branding/showcase/bigbeansdigitalpost1.png"
                  alt="Bigbeans Digital Best Social Media Marketing Agency"
                  fill
                  sizes="(max-width: 1024px) 82vw, 33vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{
                  x: ["-200%", "250%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[100px]
                  rotate-12
                  bg-white/40
                  blur-xl
                  sm:w-[120px]
                "
              />
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
              whileHover={{
                y: -30,
                scale: 1.03,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
                className="relative h-[430px] sm:h-[500px]"
              >
                <Image
                  src="/assets/branding/showcase/bigbeansdigitalpost2.jpg"
                  alt="Bigbeans Digital Best Social Media Marketing Agency"
                  fill
                  sizes="(max-width: 1024px) 82vw, 33vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  inset-0
                  m-auto
                  h-32
                  w-32
                  rounded-full
                  bg-[#F8BC04]/20
                  blur-3xl
                  sm:h-40
                  sm:w-40
                "
              />
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 120,
                rotate: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                type: "spring",
              }}
              whileHover={{
                y: -25,
                rotateY: 12,
                rotateX: 8,
              }}
              className="
                group
                relative
                min-w-[82vw]
                snap-center
                overflow-hidden
                rounded-[25px]
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                sm:min-w-[70vw]
                sm:rounded-[30px]
                lg:min-w-0
              "
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative h-[430px] sm:h-[500px]"
              >
                <Image
                  src="/assets/branding/showcase/bigbeansdigitalpost3.png"
                  alt="Bigbeans Digital Best Social Media Marketing Agency"
                  fill
                  sizes="(max-width: 1024px) 82vw, 33vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{
                  x: ["-200%", "250%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[110px]
                  rotate-12
                  bg-white/40
                  blur-xl
                  sm:w-[140px]
                "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================================================
          FAQ SECTION
      ============================================================= */}

      <section className="bg-[#FFFFFF] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">

          {/* HEADER */}
          <div className="relative mb-10 text-center sm:mb-14 lg:mb-16">
            <div
              className="
                absolute
                left-1/2
                top-0
                h-16
                w-16
                -translate-x-1/2
                rounded-full
                bg-[#F8BC04]/35
                sm:h-20
                sm:w-20
                lg:h-24
                lg:w-24
              "
            />

            <p
              className="
                relative
                text-[10px]
                font-semibold
                uppercase
                tracking-[4px]
                text-gray-500
                sm:text-sm
                sm:tracking-[6px]
              "
            >
              BRANDING FAQS
            </p>

            <h2
              className="
                relative
                mt-3
                text-[34px]
                font-black
                leading-tight
                text-[#171717]
                sm:mt-4
                sm:text-5xl
                md:text-6xl
              "
            >
              Frequently Asked{" "}
              <span className="text-[#F8BC04]">
                Questions
              </span>
            </h2>
          </div>

          {/* FAQ GRID */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {[
              {
                q: "What branding services does BIGBEANS DIGITAL offer?",
                a: "BIGBEANS DIGITAL provides complete branding services for startups and businesses, including logo design, brand identity design, brand strategy, color palette selection, typography, social media branding, marketing creatives, brand guidelines, packaging design, and visual identity systems. Our goal is to build a memorable brand that helps your business stand out and grow.",
              },
              {
                q: "Why is branding important for startups?",
                a: "Strong branding helps startups build trust, attract customers, and differentiate themselves from competitors. A professional brand identity improves recognition, strengthens credibility, and creates a consistent customer experience across websites, social media, advertisements, and marketing materials.",
              },
              {
                q: "How does your branding process work?",
                a: "Our branding process starts with understanding your business, target audience, industry, and goals. We then create a unique brand strategy, logo concepts, visual identity, brand assets, and marketing guidelines before delivering the final brand package ready for online and offline use.",
              },
              {
                q: "Do you provide logo design as part of branding?",
                a: "Yes. Every branding project includes a professionally designed logo along with typography, color palette, brand identity elements, and brand usage guidelines to ensure consistency across all marketing platforms.",
              },
              {
                q: "Can you redesign or rebrand an existing business?",
                a: "Absolutely. We help businesses refresh outdated brand identities through complete rebranding services, including logo redesign, brand positioning, visual identity, messaging, and marketing assets while maintaining customer trust and brand recognition.",
              },
              {
                q: "Which industries do you provide branding services for?",
                a: "We provide branding solutions for startups, small businesses, ecommerce brands, FMCG companies, healthcare businesses, gyms, real estate firms, restaurants, educational institutes, service businesses, and many other industries.",
              },
              {
                q: "Will my brand identity be unique?",
                a: "Yes. Every brand identity is designed from scratch after researching your business, competitors, and target audience. We never use templates or copied concepts, ensuring your brand remains original and memorable.",
              },
              {
                q: "Do I own the branding and logo after the project is completed?",
                a: "Yes. Once your branding project is completed and approved, you receive full ownership of the final logo and branding assets. All source files and deliverables are provided for future use.",
              },
              {
                q: "Why choose BIGBEANS DIGITAL as your branding agency?",
                a: "BIGBEANS DIGITAL is a Branding Agency for Startups focused on creating brands that not only look professional but also drive business growth. Our strategic approach combines branding, graphic design, Social Media Marketing , and customer psychology to build brands that attract, engage, and convert customers.",
              },
              {
                q: "How long does a branding project take?",
                a: "The timeline depends on the project scope. Most startup branding projects are completed within 1–3 weeks, while larger branding and rebranding projects may require additional time to ensure every detail aligns with your business goals and long-term vision.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                layout
                className="
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-gray-300
                  bg-white
                  sm:rounded-[20px]
                "
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    p-4
                    text-left
                    sm:p-6
                  "
                >
                  <span
                    className="
                      pr-2
                      text-[14px]
                      font-semibold
                      leading-5
                      text-[#171717]
                      sm:text-base
                      sm:leading-6
                    "
                  >
                    {faq.q}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#171717]
                      text-lg
                      text-white
                      sm:h-10
                      sm:w-10
                      sm:text-xl
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
                    className="px-4 pb-5 sm:px-6 sm:pb-6"
                  >
                    <p className="text-[14px] leading-6 text-gray-600 sm:text-base sm:leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================
          GLOBAL PRESENCE
      ============================================================= */}

      <section className="bg-[#ffffff] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">

          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-8
              rounded-[28px]
              border
              border-gray-200
              bg-white
              p-5
              sm:rounded-[35px]
              sm:p-8
              md:p-10
              lg:grid-cols-2
              lg:gap-12
              lg:rounded-[40px]
              lg:p-16
            "
          >
            {/* LEFT */}
            <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-gray-500
                  sm:mb-6
                  sm:text-sm
                  sm:tracking-[6px]
                "
              >
                Global Presence
              </p>

              <h2
                className="
                  text-[38px]
                  font-black
                  leading-[1.05]
                  text-[#171717]
                  sm:text-5xl
                  lg:text-6xl
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
                  mt-5
                  max-w-[650px]
                  text-[15px]
                  leading-6
                  text-gray-600
                  sm:mt-8
                  sm:text-lg
                  sm:leading-relaxed
                "
              >
                BIGBEANS DIGITAL serves businesses across India and
                international markets. Our strategies are built for local
                relevance and global scalability.
              </p>

              {/* LOCATIONS */}
              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-5
                  sm:mt-12
                  sm:gap-8
                "
              >
                {/* INDIA */}
                <div className="border-r border-black/20 pr-4 sm:pr-8">
                  <h3 className="text-base font-bold sm:text-xl">
                    In India
                  </h3>

                  <div className="mb-4 mt-2 h-[2px] w-14 bg-[#F8BC04] sm:mb-5 sm:w-20" />

                  <ul className="space-y-2 text-sm text-gray-700 sm:space-y-3 sm:text-base">
                    {[
                      "Kolkata",
                      "Delhi",
                      "Bangalore",
                      "Noida",
                      "Tripura",
                      "Mumbai",
                      "Pune",
                    ].map((city) => (
                      <li
                        key={city}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#F8BC04]">●</span>
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* INTERNATIONAL */}
                <div>
                  <h3 className="text-base font-bold sm:text-xl">
                    International Presence
                  </h3>

                  <div className="mb-4 mt-2 h-[2px] w-14 bg-[#F8BC04] sm:mb-5 sm:w-20" />

                  <ul className="space-y-2 text-sm text-gray-700 sm:space-y-3 sm:text-base">
                    {[
                      "London",
                      "Singapore",
                      "Canada",
                      "Australia",
                      "Nigeria",
                    ].map((city) => (
                      <li
                        key={city}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#F8BC04]">●</span>
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT MAP */}
            <div className="relative mt-4 lg:mt-0">
              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="h-auto w-full"
              />

              {/* INDIA */}
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
                  h-3
                  w-3
                  rounded-full
                  bg-[#F8BC04]
                  shadow-[0_0_20px_#F8BC04]
                  sm:h-4
                  sm:w-4
                  sm:shadow-[0_0_25px_#F8BC04]
                  top-[42%]
                  left-[67%]
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
                  h-3
                  w-3
                  rounded-full
                  bg-[#F8BC04]
                  shadow-[0_0_20px_#F8BC04]
                  sm:h-4
                  sm:w-4
                  sm:shadow-[0_0_25px_#F8BC04]
                  top-[27%]
                  left-[44%]
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
                  h-3
                  w-3
                  rounded-full
                  bg-[#F8BC04]
                  shadow-[0_0_20px_#F8BC04]
                  sm:h-4
                  sm:w-4
                  sm:shadow-[0_0_25px_#F8BC04]
                  top-[28%]
                  left-[18%]
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
                  h-3
                  w-3
                  rounded-full
                  bg-[#F8BC04]
                  shadow-[0_0_20px_#F8BC04]
                  sm:h-4
                  sm:w-4
                  sm:shadow-[0_0_25px_#F8BC04]
                  top-[50%]
                  left-[47%]
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
                  h-3
                  w-3
                  rounded-full
                  bg-[#F8BC04]
                  shadow-[0_0_20px_#F8BC04]
                  sm:h-4
                  sm:w-4
                  sm:shadow-[0_0_25px_#F8BC04]
                  top-[54%]
                  left-[74%]
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
                  h-3
                  w-3
                  rounded-full
                  bg-[#F8BC04]
                  shadow-[0_0_20px_#F8BC04]
                  sm:h-4
                  sm:w-4
                  sm:shadow-[0_0_25px_#F8BC04]
                  top-[65%]
                  left-[84%]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          CTA
      ============================================================= */}

      <section className="relative overflow-hidden bg-[#ffffff] py-14 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="
              relative
              mx-auto
              w-[calc(100%-32px)]
              max-w-7xl
              overflow-hidden
              rounded-[28px]
              bg-[#171717]
              px-5
              py-10
              sm:w-[calc(100%-48px)]
              sm:rounded-[35px]
              sm:px-8
              sm:py-14
              md:px-12
              lg:rounded-[40px]
              lg:px-16
              lg:py-16
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                right-[-80px]
                top-[-80px]
                h-56
                w-56
                rounded-full
                bg-[#F8BC04]/20
                blur-[100px]
                sm:h-72
                sm:w-72
                sm:blur-[120px]
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
                gap-7
                lg:flex-row
                lg:gap-10
              "
            >
              {/* LEFT */}
              <div className="w-full">
                <h2
                  className="
                    max-w-3xl
                    text-[32px]
                    font-black
                    leading-[1.08]
                    text-white
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Ready To Turn Clicks Into
                  <span className="text-[#F8BC04]">
                    {" "}Real Business Growth?
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-[15px]
                    leading-6
                    text-white/80
                    sm:mt-6
                    sm:text-lg
                    sm:leading-8
                  "
                >
                  Partner with BIGBEANS DIGITAL to launch data-driven Social
                  Media Marketing campaigns that generate quality leads,
                  increase conversions and accelerate your business growth.
                </p>
              </div>

              {/* BUTTON */}
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
                  w-full
                  whitespace-nowrap
                  rounded-full
                  bg-[#F8BC04]
                  px-7
                  py-4
                  text-base
                  font-bold
                  text-[#171717]
                  shadow-[0_20px_50px_rgba(248,188,4,0.35)]
                  transition-all
                  duration-300
                  sm:w-auto
                  sm:px-10
                  sm:py-5
                  sm:text-lg
                "
              >
                Book Free Strategy Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}