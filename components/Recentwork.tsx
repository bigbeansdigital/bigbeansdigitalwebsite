"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type Category =
  | "Branding"
  | "Social Media"
  | "Website Dev"
  | "Performance Marketing"
  | "Digital Marketing";

type WorkItem = {
  category: Category;
  image: string;
};

/* =========================================================
   CATEGORIES
========================================================= */

const categories: Category[] = [
  "Branding",
  "Social Media",
  "Website Dev",
  "Performance Marketing",
  "Digital Marketing",
];

/* =========================================================
   WORK IMAGES
========================================================= */

const workItems: WorkItem[] = [
  ...Array.from({ length: 4 }, (_, i) => ({
    category: "Branding" as const,
    image: `/home/Our-Carousal/Branding/${i + 1}.webp`,
  })),

  ...Array.from({ length: 4 }, (_, i) => ({
    category: "Social Media" as const,
    image: `/home/Our-Carousal/Social Media/${i + 1}.webp`,
  })),

  ...Array.from({ length: 4 }, (_, i) => ({
    category: "Website Dev" as const,
    image: `/home/Our-Carousal/Website Dev/${i + 1}.webp`,
  })),

  ...Array.from({ length: 4 }, (_, i) => ({
    category: "Performance Marketing" as const,
    image: `/home/Our-Carousal/Performance Marketing/${i + 1}.webp`,
  })),

  ...Array.from({ length: 4 }, (_, i) => ({
    category: "Digital Marketing" as const,
    image: `/home/Our-Carousal/Digital Marketing/${i + 1}.webp`,
  })),
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Recentwork() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Branding");

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  /* =======================================================
     FILTER CURRENT CATEGORY
  ======================================================= */

  const filteredItems = useMemo(() => {
    return workItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  /* =======================================================
     RESET WHEN CATEGORY CHANGES
  ======================================================= */

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    if (isPaused || filteredItems.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % filteredItems.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, filteredItems.length]);

  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return (prev + 1) % filteredItems.length;
    });
  };

  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const previousSlide = () => {
    setCurrentIndex((prev) => {
      return (
        (prev - 1 + filteredItems.length) %
        filteredItems.length
      );
    });
  };

  /* =======================================================
     CALCULATE RELATIVE POSITION
  ======================================================= */

  const getRelativePosition = (index: number) => {
    const total = filteredItems.length;

    let difference = index - currentIndex;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    return difference;
  };

  /* =======================================================
     CARD PROPERTIES
  ======================================================= */

  const getCardProperties = (position: number) => {
    switch (position) {
      case -2:
        return {
          x: -560,
          scale: 0.72,
          opacity: 0.38,
          zIndex: 5,
          filter: "grayscale(100%)",
        };

      case -1:
        return {
          x: -330,
          scale: 0.88,
          opacity: 0.62,
          zIndex: 20,
          filter: "grayscale(100%)",
        };

      case 0:
        return {
          x: 0,
          scale: 1,
          opacity: 1,
          zIndex: 100,
          filter: "grayscale(0%)",
        };

      case 1:
        return {
          x: 330,
          scale: 0.88,
          opacity: 0.62,
          zIndex: 20,
          filter: "grayscale(100%)",
        };

      case 2:
        return {
          x: 560,
          scale: 0.72,
          opacity: 0.38,
          zIndex: 5,
          filter: "grayscale(100%)",
        };

      default:
        return {
          x: position < 0 ? -760 : 760,
          scale: 0.6,
          opacity: 0,
          zIndex: 0,
          filter: "grayscale(100%)",
        };
    }
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#000000]/[70%]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* ===================================================
            HEADING + PARAGRAPH + CTA
        =================================================== */}

        <div className="flex w-full flex-col items-center text-center">

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[48px]
              font-black
              leading-[0.95]
              tracking-[-2px]
              text-white
              sm:text-[62px]
              lg:text-[76px]
              xl:text-[84px]
            "
          >
            Our{" "}
            <span className="text-[#F8BC04]">
              Recent Work
            </span>
          </motion.h2>

          {/* =================================================
              PARAGRAPH
          ================================================= */}

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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-5
              max-w-[720px]
              text-[16px]
              leading-[1.65]
              text-white/70
              sm:text-[18px]
            "
          >
            A selection of projects that reflect our creativity,
            strategy, and the impact we create.
          </motion.p>

          {/* =================================================
              BOOK FREE CONSULTATION CTA
          ================================================= */}

          <section className="relative mt-4 w-full">
            <div className="flex w-full items-center justify-center">

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.045,
                  rotateX: -4,
                  rotateY: 2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 17,
                }}
                className="relative inline-block"
              >

                {/* ========================================================
                    MOVING YELLOW GLOW BORDER
                ======================================================== */}

                <svg
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    h-full
                    w-full
                    overflow-visible
                  "
                  viewBox="0 0 1000 160"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter
                      id="yellowGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur
                        stdDeviation="3"
                        result="blur1"
                      />

                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="7"
                        result="blur2"
                      />

                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="14"
                        result="blur3"
                      />

                      <feMerge>
                        <feMergeNode in="blur3" />
                        <feMergeNode in="blur2" />
                        <feMergeNode in="blur1" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <rect
                    x="1.5"
                    y="1.5"
                    width="997"
                    height="157"
                    rx="78.5"
                    ry="78.5"
                    pathLength="1000"
                    fill="none"
                    stroke="#f8bc04"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="55 945"
                    strokeDashoffset="0"
                    filter="url(#yellowGlow)"
                    style={{
                      animation:
                        "yellowBorderMove 6s linear infinite",
                    }}
                  />

                  <style>
                    {`
                      @keyframes yellowBorderMove {
                        0% {
                          stroke-dashoffset: 0;
                        }

                        100% {
                          stroke-dashoffset: -1000;
                        }
                      }
                    `}
                  </style>
                </svg>

                {/* ========================================================
                    OUTER GLASS BORDER
                ======================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -inset-[1px]
                    z-10
                    rounded-full
                    border
                    border-white/30
                  "
                />

                {/* ========================================================
                    MAIN GLASS BUTTON
                ======================================================== */}

                <Link
                  href="/OurWork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative
                    z-10

                    flex
                    items-center
                    justify-center

                    gap-2.5

                    h-[54px]
                    px-7

                    overflow-hidden

                    rounded-full

                    border
                    border-white/30

                    bg-black/40

                    text-white
                    font-bold
                    text-[16px]

                    whitespace-nowrap

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

                    backdrop-blur-2xl
                    backdrop-saturate-150

                    transition-all
                    duration-300

                    hover:border-white/60
                    hover:bg-black/30
                  "
                >

                  {/* ======================================================
                      MOVING WHITE REFLECTION
                  ====================================================== */}

                  <motion.span
                    aria-hidden="true"
                    initial={{
                      x: "-150%",
                    }}
                    animate={{
                      x: "150%",
                    }}
                    transition={{
                      duration: 2.8,
                      delay: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      top-0
                      bottom-0
                      w-16
                      rotate-[18deg]
                      bg-white/20
                      blur-md
                    "
                  />

                  {/* ======================================================
                      BUTTON TEXT
                  ====================================================== */}

                  <span className="relative z-10">
                    Check More Work
                  </span>

                </Link>

              </motion.div>
            </div>
          </section>

        </div>

      </div>

      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div
        id="recent-work-carousel"
        className="
          relative
          z-10
          mx-auto
          mt-12
          h-[500px]
          w-full
          max-w-[1500px]
          sm:mt-14
          sm:h-[530px]
          lg:mt-16
          lg:h-[540px]
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >

        {/* LEFT ARROW */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous project"
          className="
            absolute
            left-2
            top-1/2
            z-[200]
            flex
            h-[54px]
            w-[54px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#F8BC04]
            bg-black
            text-[28px]
            font-light
            text-[#F8BC04]
            transition-all
            duration-300
            hover:bg-[#F8BC04]
            hover:text-black
            sm:left-5
            lg:left-8
          "
        >
          ←
        </button>

        {/* RIGHT ARROW */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next project"
          className="
            absolute
            right-2
            top-1/2
            z-[200]
            flex
            h-[54px]
            w-[54px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#F8BC04]
            bg-black
            text-[28px]
            font-light
            text-[#F8BC04]
            transition-all
            duration-300
            hover:bg-[#F8BC04]
            hover:text-black
            sm:right-5
            lg:right-8
          "
        >
          →
        </button>

        {/* =================================================
            CARDS
        ================================================= */}

        <div className="relative h-full w-full">

          {filteredItems.map((item, index) => {
            const relativePosition =
              getRelativePosition(index);

            const properties =
              getCardProperties(relativePosition);

            const isCenter =
              relativePosition === 0;

            return (
              <motion.div
                key={`${item.image}-${index}`}
                initial={false}
                animate={{
                  x: properties.x,
                  scale: properties.scale,
                  opacity: properties.opacity,
                  filter: properties.filter,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  width: "360px",
                  height: isCenter
                    ? "480px"
                    : "390px",
                  zIndex: properties.zIndex,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[22px]
                  bg-white
                  shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                  will-change-transform
                "
              >
                <Image
                  src={item.image}
                  alt={`${activeCategory} project ${
                    index + 1
                  }`}
                  fill
                  sizes="
                    (max-width: 640px) 280px,
                    (max-width: 1024px) 320px,
                    360px
                  "
                  priority={isCenter}
                  className="object-cover"
                />
              </motion.div>
            );
          })}

        </div>
      </div>

    </section>
  );
}