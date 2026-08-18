"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* =========================================================
   OUR RECENT WORK
========================================================= */

type Category =
  | "All"
  | "Branding"
  | "Social Media"
  | "Website Dev"
  | "Digital Marketing"
  | "Performance Marketing";

type WorkItem = {
  category: Exclude<Category, "All">;
  image: string;
};

const categories: Category[] = [
  "All",
  "Branding",
  "Social Media",
  "Website Dev",
  "Digital Marketing",
  "Performance Marketing",
];

/* =========================================================
   WORK IMAGES
========================================================= */

const workItems: WorkItem[] = [
  ...Array.from({ length: 10 }, (_, i) => ({
    category: "Branding" as const,
    image: `/home/Our-Carousal/Branding/${i + 1}.png`,
  })),

  ...Array.from({ length: 10 }, (_, i) => ({
    category: "Social Media" as const,
    image: `/home/Our-Carousal/Social Media/${i + 1}.png`,
  })),

  ...Array.from({ length: 10 }, (_, i) => ({
    category: "Website Dev" as const,
    image: `/home/Our-Carousal/Website Dev/${i + 1}.png`,
  })),

  ...Array.from({ length: 10 }, (_, i) => ({
    category: "Digital Marketing" as const,
    image: `/home/Our-Carousal/Digital Marketing/${i + 1}.png`,
  })),

  ...Array.from({ length: 10 }, (_, i) => ({
    category: "Performance Marketing" as const,
    image: `/home/Our-Carousal/Performance Marketing/${i + 1}.png`,
  })),
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Recentwork() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [isPaused, setIsPaused] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return workItems;
    }

    return workItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const carouselItems = useMemo(() => {
    return [...filteredItems, ...filteredItems];
  }, [filteredItems]);

  useEffect(() => {
    setIsPaused(false);
  }, [activeCategory]);

  const isLandscapeCategory =
    activeCategory === "Website Dev" ||
    activeCategory === "Digital Marketing" ||
    activeCategory === "Performance Marketing";

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        py-14
        sm:py-16
        lg:py-20
      "
    >

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        <Image
          src="/home/Our-Carousal/ourworkbg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />

        {/* Dark overlay only — NO BLUR */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Very subtle texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.10]
            [background-image:radial-gradient(rgba(255,255,255,0.12)_0.6px,transparent_0.6px)]
            [background-size:5px_5px]
          "
        />

      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

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

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* TITLE */}

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
              whitespace-nowrap
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

          {/* KNOW MORE BUTTON */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="shrink-0"
          >
            <Link
              href="/our-work"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#F8BC04]
                px-7
                py-4
                text-sm
                font-bold
                text-black
                shadow-[0_15px_40px_rgba(248,188,4,0.18)]
                transition-all
                duration-300
                hover:bg-white
                sm:px-8
                sm:py-[18px]
                sm:text-base
              "
            >
              Know More About Our Work

              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </Link>
          </motion.div>

        </div>

        {/* =======================================================
            CATEGORY BUTTONS
        ======================================================= */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-8
            flex
            w-full
            flex-wrap
            gap-3
            sm:mt-9
          "
        >

          {categories.map((category, index) => {
            const active = activeCategory === category;

            return (
              <motion.button
                key={category}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.12 + index * 0.06,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  sm:px-6
                  sm:py-3
                  ${
                    active
                      ? "border-[#F8BC04] bg-[#F8BC04] text-black shadow-[0_10px_30px_rgba(248,188,4,0.18)]"
                      : "border-white/25 bg-white/[0.04] text-white hover:border-[#F8BC04] hover:bg-[#F8BC04] hover:text-black"
                  }
                `}
              >
                {category}
              </motion.button>
            );
          })}

        </motion.div>

      </div>

      {/* =========================================================
          CAROUSEL
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mt-10
          w-full
          overflow-hidden
          sm:mt-12
          lg:mt-14
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >

        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-full
            w-[80px]
            bg-gradient-to-r
            from-black
            via-black/75
            to-transparent
            sm:w-[120px]
            lg:w-[190px]
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-30
            h-full
            w-[80px]
            bg-gradient-to-l
            from-black
            via-black/75
            to-transparent
            sm:w-[120px]
            lg:w-[190px]
          "
        />

        {/* =======================================================
            MOVING TRACK
        ======================================================= */}

        <motion.div
          key={activeCategory}
          initial={{
            x: "0%",
          }}
          animate={{
            x: isPaused
              ? undefined
              : ["0%", "-50%"],
          }}
          transition={{
            /*
             * Very slow / medium-speed continuous movement.
             * Higher duration = slower carousel.
             */
            duration: 140,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            items-center
            gap-5
            sm:gap-6
            lg:gap-7
          "
        >

          {carouselItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              className="
                group
                relative
                shrink-0
                overflow-hidden
                bg-white
              "
              style={{
                width:
                  "clamp(250px, 23vw, 375px)",

                aspectRatio:
                  isLandscapeCategory
                    ? "1350 / 1080"
                    : "1080 / 1350",
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >

              {/* =================================================
                  CAROUSEL IMAGE
              ================================================= */}

              <Image
                src={item.image}
                alt={`${item.category} project`}
                fill
                sizes="
                  (max-width: 640px) 78vw,
                  (max-width: 1024px) 42vw,
                  23vw
                "
                className="
                  object-cover
                  opacity-100
                  blur-0
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
                priority={index < 5}
              />

            </motion.div>
          ))}

        </motion.div>

      </div>

      {/* =========================================================
          MOBILE BUTTON
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mt-10
          flex
          justify-center
          lg:hidden
        "
      >
        <Link
          href="/our-work"
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#F8BC04]
            px-7
            py-3.5
            text-sm
            font-bold
            text-black
            transition-all
            duration-300
            hover:bg-white
          "
        >
          Know More About Our Work

          <span className="text-lg">
            ↗
          </span>
        </Link>
      </div>

    </section>
  );
}