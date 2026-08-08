"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function WebsiteDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  
  return (
    
    <main className="w-full overflow-hidden bg-white">

    

{/* Breadcrumb */}
<section className="w-full bg-white py-10">
  <div className="max-w-7xl mx-auto px-6 flex justify-center">
    <div className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <Link
        href="/"
        className="text-gray-700 hover:text-[#F8BC04] transition-colors duration-300"
      >
        Home
      </Link>

      <span className="text-[#F8BC04] text-lg">→</span>

      <span className="font-semibold text-black">
        Website Development
      </span>
    </div>
  </div>
</section>


  {/* =========================
      WEBSITE DEVELOPMENT HERO
  ========================= */}

  <section className="relative w-full bg-white">
    <div
      className="
        mx-auto
        w-full
        max-w-[1600px]
        px-5
        sm:px-8
        md:px-10
        lg:px-12
        xl:px-16
        2xl:px-20
        py-1
        sm:py-1
        md:py-1
        lg:py-1
        xl:py-1
      "
    >

      <div
        className="
          grid
          grid-cols-1
          items-start
          gap-10
          sm:gap-12
          lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]
          lg:gap-12
          xl:grid-cols-[minmax(0,1.2fr)_minmax(420px,0.8fr)]
          xl:gap-16
          2xl:gap-20
        "
      >

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="min-w-0 w-full"
        >

          {/* BADGE */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-[#F8BC04]/40
              bg-[#fec401]/100
              px-4
              py-2
              text-xs
              sm:text-sm
              font-semibold
              text-[#000000]
            "
          >
            <span className="text-base">✦</span>

            <span className="truncate">
              Professional Website Development Company
            </span>
          </motion.div>


          {/* HEADING */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              mt-7
              max-w-[900px]
              text-[42px]
              leading-[1.02]
              font-black
              tracking-[-1.5px]
              text-[#171717]

              sm:text-[50px]

              md:text-[58px]

              lg:text-[60px]

              xl:text-[70px]

              2xl:text-[50px]
            "
          >
            Website Development  Services
            
            {" "}
            <span className="text-[#F8BC04]">
              for Startups Growth
            </span>
          </motion.h1>


          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="
              mt-7
              max-w-[820px]
              text-[16px]
              leading-7
              text-gray-600

              sm:text-[17px]
              sm:leading-8

              md:text-[18px]
              md:leading-8

              lg:text-[18px]
              xl:text-[19px]
              2xl:text-[20px]
            "
          >
            Website Development Services help businesses build a strong
            online presence with fast, SEO-friendly, mobile-responsive,
            and conversion-focused websites. At BIGBEANS DIGITAL, we
            develop custom business websites and eCommerce stores that
            improve search visibility, generate qualified leads, and drive
            sustainable business growth across India.
          </motion.p>


          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-4

              sm:w-auto
              sm:flex-row
            "
          >
            <motion.button
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
  flex
  h-[62px]
  w-full
  items-center
  justify-center
  whitespace-nowrap
  rounded-xl
  border
  border-gray-300
  bg-white
  px-7
  text-base
  font-bold
  text-[#171717]
  shadow-sm
  transition-all
  duration-300
  hover:border-[#F8BC04]
  hover:shadow-lg
  sm:w-auto
  sm:px-8
"
            >
              View Portfolio
            </motion.button>

            {/* WHATSAPP BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                relative
                z-10
                h-[62px]
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#F8BC04]
                px-5
                py-4
                text-sm
                font-bold
                text-[#171717]
                shadow-[0_15px_35px_rgba(248,188,4,0.20)]
                transition-all
                duration-300
                hover:shadow-[0_20px_40px_rgba(248,188,4,0.30)]

                sm:text-base
              "
            >

              <span className="text-xl">
                <svg
  width="30"
  height="30"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <path
    fill="#fff"
    d="M256 18C124.5 18 18 124.5 18 256c0 44 12 85 33 120L18 494l119-32c34 20 75 32 119 32 131.5 0 238-106.5 238-238S387.5 18 256 18z"
  />
  <circle cx="256" cy="256" r="190" fill="#25D366"/>
  <path
    fill="#fff"
    d="M188 154c-9 0-17 5-22 14-9 15-17 34-16 50 2 24 19 53 43 78 27 29 56 51 85 64 21 9 41 13 57 6 12-5 22-16 27-30l6-20c2-7-1-13-7-16l-39-19c-7-3-14-1-19 5l-15 18c-3 4-8 5-13 3-19-8-38-21-54-37-14-14-25-30-32-47-2-5-1-9 3-13l15-17c4-5 5-12 2-18l-10-16c-2-3-6-5-11-5z"
  />
</svg>
              </span>

              Get Consultation for Your Website Development →

            </motion.button>

          </motion.div>

        </motion.div>


        {/* =========================
            RIGHT BUSINESS CARD
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            min-w-0
            w-full
            lg:justify-self-end
          "
        >

          <motion.div
            whileHover={{
              y: -6,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
           className="
  relative
  w-full
  overflow-hidden
  rounded-[24px]
  border
  border-gray-200
  bg-white
  px-6
  pt-6
  pb-3
  sm:px-6
  sm:pt-6
  sm:pb-2
  lg:px-6
  lg:pt-6
  lg:pb-2
  xl:px-7
  xl:pt-7
  xl:pb-2
"         >

            {/* CARD GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-48
                w-48
                rounded-full
                bg-[#F8BC04]/100
                blur-3xl
              "
            />


            {/* CARD TITLE */}

            <div className="relative z-10">

              <h2
                className="
                  text-[24px]
                  leading-tight
                  font-black
                  text-[#171717]

                  sm:text-[27px]

                  xl:text-[30px]
                "
              >
                Why 50+ Businesses
                <br />
                Choosed Us
              </h2>
            </div>


            {/* STATS */}

            <div
  className="
    relative
    z-10
    mt-6
    grid
    grid-cols-4
    gap-2
  "
>

              {[
                {
                  number: "200+",
                  label: "Websites Launched",
                },
                {
                  number: "4.9 ★",
                  label: "Client Rating",
                },
                {
                  number: "3.5x",
                  label: "Avg Lead Growth",
                },
                {
                  number: "10+",
                  label: "Years Experience",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.12,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="
  rounded-xl
  border
  border-gray-200
  bg-white
  px-2
  py-3
  text-center
  shadow-sm
  transition-shadow
  duration-300
  hover:shadow-md
"
                >

                  <div
                    className="
                      text-[20 px]
                      leading-none
                      font-black
                      text-[#F8BC04]

                      sm:text-[20px]

                      xl:text-[30px]
                    "
                  >
                    {item.number}
                  </div>

                  <p
                    className="
                      mt-3
                      text-xs
                      font-medium
                      text-[#171717]

                      sm:text-sm
                    "
                  >
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>


            {/* FEATURES */}

            <div
              className="
                relative
                z-10
                mt-6
                space-y-3
              "
            >

              {[
                "Fast, Responsive, and Mobile-Friendly",
                "Conversion-optimized design",
                "Dedicated in-house team",
                "Transparent pricing, no hidden cost",
                "Post-launch support included",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 1 + index * 0.1,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-[#171717]
                  "
                >

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-green-100
                      text-sm
                      font-bold
                      text-green-600
                    "
                  >
                    ✓
                  </span>

                  <span>
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

            {/* FOOTER INFO */}

            <div
              className="
                relative
                z-10
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-2
                border-t
                border-gray-200
                pt-5
                text-[11px]
                text-gray-500

                sm:text-xs
              "
            >
            </div>

          </motion.div>

        </motion.div>

      </div>

    </div>
  </section>

  {/* =========================
      END WEBSITE DEVELOPMENT HERO
  ========================= */}

{/* =========================
      ABOUT OUR WEB DEVELOPMENT
========================= */}

<section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-16">

  {/* Background Animation */}

  <motion.div
    animate={{
      rotate: [0, 360],
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      -right-72
      -bottom-72
      h-[700px]
      w-[700px]
      rounded-full
      border
      border-[#F8BC04]/10
    "
  />

  <div
    className="
      relative
      z-10
      mx-auto
      grid
      w-full
      max-w-[1600px]
      items-stretch
      gap-10
      px-5
      sm:px-8
      lg:grid-cols-[1.05fr_0.95fr]
      lg:gap-12
      xl:px-12
      2xl:grid-cols-[1.1fr_0.9fr]
      2xl:gap-16
    "
  >

    {/* =========================
          LEFT SIDE
    ========================= */}

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
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="
        flex
        min-w-0
        flex-col
        justify-between
      "
    >

      {/* IMAGE */}

      <motion.div
        whileHover={{
          rotateY: 5,
          rotateX: 3,
          scale: 1.015,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        className="
          relative
          z-20
          w-full
          overflow-hidden
          rounded-[32px]
          sm:rounded-[36px]
          lg:rounded-[40px]
        "
      >

        <Image
          src="/assets/websitedevelopment/website1.png"
          alt="Website Development Team"
          width={720}
          height={560}
          className="
            block
            h-auto
            w-full
            object-cover
            transition
            duration-700
            hover:scale-105
          "
        />

      </motion.div>

    </motion.div>


    {/* =========================
          RIGHT SIDE
    ========================= */}

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
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="
        flex
        min-w-0
        flex-col
      "
    >

      {/* HEADING */}

      <h2
        className="
          text-[30px]
          font-black
          leading-[1.08]
          text-[#171717]
          sm:text-[36px]
          lg:text-[38px]
          xl:text-[42px]
        "
      >
        Building High-Impact
        <br />
        Websites That Inspire
        <span className="text-[#F8BC04]">
          {" "}Trust & Growth
        </span>
      </h2>


      {/* DESCRIPTION */}

      <p
        className="
          mt-6
          text-base
          leading-7
          text-gray-600
          sm:mt-7
          sm:text-lg
          sm:leading-8
          lg:mt-8
          lg:leading-7
        "
      >
        Our team combines creative thinking, strategic planning, and
        modern web technologies to create premium websites that are
        visually engaging, lightning-fast, and optimized for long-term
        business success. Every project is built to strengthen your
        digital presence while delivering measurable results.
      </p>


      {/* =========================
    FEATURE CARDS
========================= */}

<div
  className="
    mt-5
    grid
    gap-4
    sm:mt-6
    sm:gap-4
    lg:mt-5
  "
>
  {[
    {
      title: "Business-Focused Strategy",
      text: "Every website starts with understanding your audience, goals, and market to create meaningful digital experiences.",
    },
    {
      title: "Premium User Experience",
      text: "Clean layouts, intuitive navigation, and responsive interfaces ensure visitors enjoy every interaction.",
    },
  ].map((item, index) => (

    <motion.div
      key={item.title}
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
        delay: index * 0.15,
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{
        x: 6,
        scale: 1.01,
      }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-[20px]
        border
        border-gray-100
        bg-[#fafafa]
        px-4
        py-3
        transition-all
        duration-500
        hover:border-[#F8BC04]/40
        hover:bg-white
        hover:shadow-xl
        sm:gap-4
        sm:rounded-[22px]
        sm:px-4
        sm:py-3
      "
    >

      {/* CHECK ICON */}

      <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.15,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#F8BC04]
          text-lg
          font-bold
          text-white
          sm:h-11
          sm:w-11
        "
      >
        ✓
      </motion.div>


      {/* CARD CONTENT */}

      <div className="min-w-0">

        <h3
          className="
            text-base
            font-bold
            leading-tight
            text-[#171717]
            sm:text-lg
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            leading-5
            text-gray-600
            sm:text-sm
            sm:leading-6
          "
        >
          {item.text}
        </p>

      </div>

    </motion.div>

    

  ))}

  {/* BUTTON */}

      <div className="mt-1 flex left-end sm:mt-1 lg:mt-1">

        <motion.a
  href="https://api.whatsapp.com/send?phone=916289102537"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.05,
    y: -4,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="inline-flex items-center justify-center rounded-full border border-[#171717] bg-[#171717] px-9 py-4 font-semibold text-[#F8BC04] transition-all duration-300 hover:bg-[#F8BC04] hover:text-[#171717]"
>
  Let's Build Together
</motion.a>

      </div>

</div>


    </motion.div>

  </div>

</section>

{/* =========================
      END ABOUT OUR WEB DEVELOPMENT
========================= */}


     
{/* =========================
TECHNOLOGIES WE MASTER
========================= */}

<section className="relative w-full overflow-hidden bg-white py-6 sm:py-8 lg:py-10">

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-20
      h-[350px]
      w-[350px]
      -translate-x-1/2
      rounded-full
      bg-[#F8BC04]/15
      blur-[120px]
      sm:h-[450px]
      sm:w-[450px]
    "
  />

  {/* FULL WIDTH CONTAINER */}

  <div className="relative z-10 w-full">

    {/* HEADING */}

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
        ease: "easeOut",
      }}
      className="
        mx-auto
        w-full
        max-w-5xl
        px-5
        text-center
        sm:px-8
        lg:px-10
      "
    >

      <h2
        className="
          text-[34px]
          font-black
          leading-[1.05]
          tracking-tight
          text-[#171717]
          sm:text-[44px]
          md:text-[52px]
          lg:text-[58px]
        "
      >
        Technologies We{" "}
        <span className="text-[#F8BC04]">
          Work With
        </span>
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-4xl
          text-base
          leading-7
          text-gray-600
          sm:mt-6
          sm:text-lg
          sm:leading-8
          lg:mt-7
          lg:text-lg
          lg:leading-9
        "
      >
        We leverage modern frameworks, programming languages, databases,
        and development tools to create fast, scalable, secure, and
        future-ready websites that deliver exceptional user experiences
        across every platform and device.
      </p>

    </motion.div>


    {/* TECHNOLOGIES */}

    <div className="mt-7 w-full sm:mt-9 lg:mt-10">

      {[
        [
          { name: "HTML5", icon: "🌐" },
          { name: "CSS3", icon: "🎨" },
          { name: "JavaScript", icon: "🟨" },
          { name: "TypeScript", icon: "🔷" },
          { name: "React", icon: "⚛️" },
          { name: "Next.js", icon: "▲" },
          { name: "Tailwind CSS", icon: "💨" },
        ],
        [
          { name: "Node.js", icon: "🟢" },
          { name: "Express.js", icon: "🚀" },
          { name: "PHP", icon: "🐘" },
          { name: "Laravel", icon: "❤️" },
          { name: "Flutter", icon: "🦋" },
          { name: "MongoDB", icon: "🍃" },
          { name: "MySQL", icon: "🗄️" },
        ],
      ].map((row, rowIndex) => (

        <motion.div
          key={rowIndex}
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
            amount: 0.15,
          }}
          transition={{
            delay: rowIndex * 0.15,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            w-full
            overflow-hidden
            py-2
            sm:py-2.5
          "
        >

          <motion.div
            animate={{
              x:
                rowIndex === 0
                  ? ["0%", "-18%", "0%"]
                  : ["-18%", "0%", "-18%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              w-max
              gap-4
              px-4
              sm:gap-5
              sm:px-6
              lg:gap-6
              lg:px-8
            "
          >

            {[...row, ...row].map((tech, index) => (

              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{
                  y: -10,
                  rotateY: 8,
                  scale: 1.04,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                }}
                className="
                  group
                  flex
                  h-[105px]
                  w-[clamp(230px,24vw,340px)]
                  shrink-0
                  items-center
                  gap-4
                  rounded-[22px]
                  border
                  border-gray-100
                  bg-white
                  px-5
                  py-4
                  transition-all
                  duration-500
                  hover:border-[#F8BC04]/40
                  hover:shadow-[0_25px_60px_rgba(248,188,4,.16)]
                  sm:h-[115px]
                  sm:gap-5
                  sm:rounded-[24px]
                  sm:px-6
                "
              >

                {/* ICON */}

                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#F8BC04]/10
                    text-2xl
                    sm:h-16
                    sm:w-16
                    sm:text-3xl
                  "
                >
                  {tech.icon}
                </motion.div>


                {/* TEXT */}

                <div className="min-w-0">

                  <h3
                    className="
                      truncate
                      text-base
                      font-bold
                      text-[#171717]
                      sm:text-lg
                    "
                  >
                    {tech.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      whitespace-nowrap
                      text-xs
                      text-gray-500
                      sm:text-sm
                    "
                  >
                    Modern Development
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
      

      {/* =========================
      INDUSTRIES WE SERVE
========================= */}


{/* =========================
    VERTICAL IMAGE SLIDER
========================= */}

<section className="relative w-full bg-white py-12">

  <div className="mx-auto w-full max-w-[995px] px-4 sm:px-6">

    <div className="relative aspect-[995/552] w-full overflow-hidden rounded-[28px] bg-black">

      {[
        "/assets/websitedevelopment/slider/1.png",
        "/assets/websitedevelopment/slider/2.png",
        "/assets/websitedevelopment/slider/3.png",
        "/assets/websitedevelopment/slider/4.png",
        "/assets/websitedevelopment/slider/5.png",
        "/assets/websitedevelopment/slider/6.png",
        "/assets/websitedevelopment/slider/7.png",
        "/assets/websitedevelopment/slider/8.png",
        "/assets/websitedevelopment/slider/9.png",
        "/assets/websitedevelopment/slider/10.png",
        "/assets/websitedevelopment/slider/11.png",
        "/assets/websitedevelopment/slider/12.png",
      ].map((image, index) => (

        <motion.img
          key={image}
          src={image}
          alt={`Website Development Project ${index + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{
            y: index === 0 ? "0%" : "100%",
          }}
          animate={{
            y: [
              "100%",
              "100%",
              "0%",
              "0%",
              "-100%",
            ],
          }}
          transition={{
            duration: 24,
            delay: index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [
              0,
              0.075,
              0.125,
              0.20,
              0.25,
            ],
          }}
        />

      ))}

    </div>

  </div>

</section>












<section className="relative overflow-hidden bg-white py-10 lg:py-10">

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute left-0 top-10 h-[450px] w-[450px] rounded-full bg-[#F8BC04]/20 blur-[150px]"
  />

  <motion.div
    animate={{
      scale: [1.1, 1, 1.1],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
    }}
    className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-[#F8BC04]/20 blur-[160px]"
  />

  <div className="relative max-w-[1500px] mx-auto px-6">

    {/* Heading */}

    <motion.div
      initial={{
        opacity: 0,
        y: 60,
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
      className="text-center max-w-5xl mx-auto"
    >

      

      <h2 className="mt-1 text-[10px] md:text-[50px] font-black leading-tight text-[#171717]">
         Different Sectors We Served for
        <span className="text-[#F8BC04]">
          {" "}Websites Designing & Development
        </span>
        <br />
        
      </h2>

      <p className="mx-auto mt-4 max-w-8xl text-lg leading-9 text-gray-900">
        Premium website solutions crafted specifically for every industry with
        performance, conversion and exceptional user experience 
      </p>

    </motion.div>

    {/* 6 × 2 Grid */}

    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {[
  {
    title: "Ecommerce",
    desc: "Beautiful shopping experiences that increase trust, engagement and online sales.",
    image: "/assets/websitedevelopment/Sectors/ecommerce.png",
  },
  {
    title: "Education",
    desc: "Interactive websites that make learning engaging for students and institutions.",
    image: "/assets/websitedevelopment/Sectors/education.png",
  },
  {
    title: "Real Estate",
    desc: "Premium property websites that generate enquiries and showcase listings beautifully.",
    image: "/assets/websitedevelopment/Sectors/realestate.png",
  },
  {
    title: "Tech",
    desc: "Modern dashboards and business platforms for data-driven organizations.",
    image: "/assets/websitedevelopment/Sectors/data.png",
  },
 
  {
    title: "Transportation",
    desc: "Responsive websites for logistics, transport and mobility businesses.",
    image: "/assets/websitedevelopment/Sectors/transport.png",
  },
  {
    title: "FMCG",
    desc: "Fast-moving consumer brand websites designed for maximum engagement.",
    image: "/assets/websitedevelopment/Sectors/fmcg.png",
  },
  {
    title: "Travel And Torisum",
    desc: "Professional healthcare websites that build credibility and patient trust.",
    image: "/assets/websitedevelopment/Sectors/TravelAndTorisum.png",
  },
  {
    title: "Hospitality",
    desc: "Luxury hotel and hospitality websites designed to increase bookings.",
    image: "/assets/websitedevelopment/Sectors/hospitality.png",
  },


].map((industry, index) => (

  <motion.div
    key={industry.title}
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
    }}
    transition={{
      duration: .6,
      delay: index * .05,
    }}
    whileHover={{
      y: -10,
      scale: 1.03,
    }}
    className="group rounded-[22px] bg-[#F8BC04] p-4 transition-all duration-500 hover:bg-white shadow-[0_15px_45px_rgba(0,0,0,.08)]"
  >

    <div className="flex h-full flex-col">

      <h3 className="text-[22px] font-black leading-tight text-[#171717]">
        {industry.title}
      </h3>

      <p className="mt-3 text-[14px] leading-6 text-[#171717]">
        {industry.desc}
      </p>

      <div className="mt-5 overflow-hidden rounded-[16px]">

        <Image
          src={industry.image}
          alt={industry.title}
          width={400}
          height={260}
          className="h-[150px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

    </div>

  </motion.div>

))}

    </div>

  </div>

</section>

{/* =========================
      END INDUSTRIES WE SERVE
========================= */}







      {/* =========================
      WEBSITE DESIGN PROCESS
========================= */}

<section className="relative overflow-hidden bg-white py-10 lg:py-10">

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-[#F8BC04]/15 blur-[140px]"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <div className="grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">

      {/* ================= LEFT CONTENT ================= */}

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
        }}
        transition={{
          duration: .8,
        }}
      >

        <h2 className="mt-1 text-[30px] font-black leading-tight text-[#171717] md:text-[45px]">
          Best Website Design &
          <br />
          Development Company 
          <br></br>
          <span className="text-[#F8BC04]">
            {" "}For Startups
          </span>
        </h2>

        <p className="mt-8 text-lg leading-7 text-gray-600 text-justify">
          We design premium websites that combine creativity, strategy,
          performance and user experience. Every project is built to
          strengthen your brand, increase engagement, improve credibility
          and generate measurable business growth.
        </p>

        <div className="mt-10 space-y-8">

          <div>

            <h3 className="text-2xl font-bold text-[#171717]">
              Custom Websites That Work For Your Brand
            </h3>

            <p className="mt-3 text-gray-600 leading-8 text-justify">
              Every business is unique, so every website we build is completely
              custom. We focus on user experience, responsiveness, SEO,
              performance and conversion to ensure your website delivers
              measurable business results.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-[#171717]">
              Smart Design & Seamless Functionality
            </h3>

            <p className="mt-3 text-gray-600 leading-8 text-justify">
              Our websites combine premium UI design with modern development
              technologies to deliver fast loading speeds, intuitive navigation,
              mobile responsiveness and an exceptional experience across every
              device.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-[#171717]">
              Strategic Focus On Business Growth
            </h3>

            <p className="mt-3 text-gray-600 leading-8 text-justify">
              Every layout, section and interaction is carefully designed to
              increase engagement, build trust and convert visitors into
              customers while supporting your long-term business growth.
            </p>

          </div>

        </div>

      </motion.div>

      {/* ================= RIGHT CONTENT ================= */}

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
        }}
        transition={{
          duration: .9,
        }}
        className="space-y-4"
      >

        {/* IMAGE 1 */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="overflow-hidden rounded-[26px] border border-gray-200 bg-white "
        >

          <Image
            src="/assets/websitedevelopment/website2.png"
            alt="Website Design Showcase"
            width={1200}
            height={700}
            className="w-full h-[260px] object-cover transition duration-700 hover:scale-105"
          />

        </motion.div>

        {/* IMAGE 2 */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="overflow-hidden rounded-[26px] border border-gray-200 bg-white "
        >

          <Image
            src="/assets/websitedevelopment/website3.png"
            alt="Website Design Showcase"
            width={1200}
            height={700}
            className="w-full h-[260px] object-cover transition duration-700 hover:scale-105"
          />

        </motion.div>

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="overflow-hidden rounded-[26px] border border-gray-200 bg-white"
        >

          <Image
            src="/assets/websitedevelopment/website4.png"
            alt="Website Design Showcase"
            width={1200}
            height={700}
            className="w-full h-[260px] object-cover transition duration-700 hover:scale-105"
          />

        </motion.div>

      </motion.div>

    </div>

  </div>

</section>

{/* =========================
      END WEBSITE DESIGN PROCESS
========================= */}












      




















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
        WEBSITE DEVELOPMENT FAQS
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
          q: "Why does my business need a professional website?",
          a: "A professional website is your business's digital storefront. It helps build trust, improve credibility, generate qualified leads, and convert visitors into customers. As the Best Website Development Company for Startups, BIGBEANS DIGITAL creates modern, fast, and SEO-friendly websites that support long-term business growth."
        },
        {
          q: "What website development services does BIGBEANS DIGITAL offer?",
          a: "Our Website Development Services include business website development, startup websites, corporate websites, ecommerce website development, landing pages, custom web applications, portfolio websites, responsive website design, website redesign, and SEO-friendly website development tailored to your business goals."
        },
        {
          q: "Why should I choose BIGBEANS DIGITAL for website development?",
          a: "BIGBEANS DIGITAL is a Best Website Development Company for Startups that builds websites focused on performance, user experience, SEO, and conversions. Every website is custom-designed to help businesses attract more visitors, generate leads, and grow online."
        },
        {
          q: "Will my website be mobile-friendly and responsive?",
          a: "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones. Our responsive website development ensures your business delivers a seamless user experience across all devices."
        },
        {
          q: "Will my website be SEO-friendly?",
          a: "Absolutely. Every project includes SEO-friendly website development with clean code, fast loading speed, mobile responsiveness, optimized page structure, technical SEO best practices, and performance optimization to improve your search engine visibility."
        },
        {
          q: "Can you redesign my existing website?",
          a: "Yes. We provide professional website redesign services for businesses looking to modernize their website, improve user experience, increase loading speed, enhance SEO performance, and generate more leads."
        },
        {
          q: "How long does it take to develop a website?",
          a: "The timeline depends on your project requirements. Most business and startup websites are completed within 2–6 weeks, while larger custom website development projects may require additional time based on functionality and content."
        },
        {
          q: "Can you build websites for startups and small businesses?",
          a: "Yes. We specialize in website development for startups, entrepreneurs, SMEs, ecommerce brands, healthcare businesses, real estate companies, gyms, educational institutes, restaurants, and service-based businesses looking to establish a strong online presence."
        },
        {
          q: "Do you provide website maintenance and support after launch?",
          a: "Yes. We offer ongoing website maintenance, security updates, performance optimization, bug fixes, content updates, and technical support to keep your website secure, fast, and running smoothly after launch."
        },
        {
          q: "Can my website grow as my business grows?",
          a: "Absolutely. We build scalable websites that can easily accommodate new pages, products, services, integrations, and features as your business expands. Our custom website development solutions are designed to support your long-term digital growth and evolving business needs."
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
                  data-driven Social Media Marketing  campaigns that
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