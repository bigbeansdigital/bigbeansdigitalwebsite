"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoDesigning() {
  return (
    <main>

      {/* CREATIVE CTA SECTION */}

<section className="py-32 overflow-hidden relative">

  {/* GRID BACKGROUND */}

  <div
    className="
      absolute
      inset-0
      bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
      bg-[size:60px_60px]
    "
  />

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
    className="
      absolute
      top-20
      left-20
      text-[#F8BC04]
      text-4xl
    "
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
    className="
      absolute
      bottom-20
      right-20
      text-[#F8BC04]
      text-5xl
    "
  >
    ✦
  </motion.div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      {/* SMALL LABEL */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          inline-block
          px-6
          py-3
          rounded-full
          bg-[#F8BC04]/15
          text-[#F8BC04]
          font-bold
          tracking-wider
          mb-8
        "
      >
        LOGO DESIGN EXPERTS
      </motion.div>

      {/* MAIN HEADING */}

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-black
          text-[#171717]
          leading-none
        "
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
          className="
            inline-block
            mt-4
            bg-[#F8BC04]
            px-8
            py-3
            rounded-[30px]
            text-white
            shadow-2xl
          "
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
        className="
          max-w-3xl
          mx-auto
          mt-10
          text-xl
          text-gray-600
          leading-relaxed
        "
      >
        Transform your business identity with custom logo designs
        that capture attention, build credibility and create a
        powerful first impression across digital and offline platforms.
      </motion.p>

      {/* BUTTONS */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
        }}
        className="
          flex
          flex-wrap
          justify-center
          gap-5
          mt-12
        "
      >

      </motion.div>

    </motion.div>

  </div>

</section>

{/* BRAND STORY GRID SECTION */}

<section className="py-28 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <span
        className="
          inline-block
          px-6
          py-3
          rounded-full
          bg-[#F8BC04]/10
          text-[#F8BC04]
          font-bold
          tracking-widest
          text-sm
          mb-6
        "
      >
        CREATIVE BRANDING
      </span>

      <h2
        className="
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          text-[#171717]
        "
      >
        Branding That
        <br />
        Builds Recognition
      </h2>
    </motion.div>

    <div className="grid grid-cols-12 gap-5 auto-rows-[220px]">

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
        className="
          col-span-12
          md:col-span-4
          rounded-[30px]
          overflow-hidden
          relative
          group
        "
      >
        <Image
          src="/assets/brandingpost3.jpg"
          alt=""
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            to-transparent
          "
        />

        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-white text-3xl font-black">
            Strong Brand Identity
          </h3>
        </div>
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
        className="
          col-span-12
          md:col-span-4
          rounded-[30px]
          overflow-hidden
          relative
          group
        "
      >
        <Image
          src="/assets/brandingpost3.jpg"
          alt=""
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-125
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[#F8BC04]/80
          "
        />

        <div className="absolute inset-0 flex items-center justify-center text-center p-8">
          <h3 className="text-[#171717] text-3xl font-black">
            Premium Visual
            <br />
            Positioning
          </h3>
        </div>
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
        className="
          col-span-12
          md:col-span-4
          row-span-2
          rounded-[30px]
          overflow-hidden
          relative
          group
        "
      >
        <Image
          src="/assets/brandingpost3.jpg"
          alt=""
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-10
            left-8
            right-8
            bg-white/90
            backdrop-blur-md
            rounded-2xl
            p-5
          "
        >
          <h3 className="text-2xl font-black">
            Memorable Branding
          </h3>
        </motion.div>
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
        className="
          col-span-12
          md:col-span-4
          row-span-2
          rounded-[30px]
          overflow-hidden
          relative
          group
        "
      >
        <Image
          src="/assets/brandingpost3.jpg"
          alt=""
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-115
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            to-transparent
          "
        />

        <div className="absolute bottom-8 left-8">
          <h3 className="text-white text-4xl font-black">
            Creative
            <br />
            Direction
          </h3>
        </div>
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
        className="
          col-span-12
          md:col-span-4
          rounded-[30px]
          overflow-hidden
          relative
          group
        "
      >
        <Image
          src="/assets/brandingpost3.jpg"
          alt=""
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-125
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[#171717]/70
          "
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-3xl font-black text-center">
            Brand
            <br />
            Consistency
          </h3>
        </div>
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
        className="
          col-span-12
          md:col-span-4
          rounded-[30px]
          overflow-hidden
          relative
          group
        "
      >
        <Image
          src="/assets/brandingpost3.jpg"
          alt=""
          fill
          className="
            object-cover
            transition-all
            duration-700
            group-hover:scale-120
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#F8BC04]/80
            to-transparent
          "
        />

        <div className="absolute bottom-6 left-6">
          <h3 className="text-[#171717] text-3xl font-black">
            Market Impact
          </h3>
        </div>
      </motion.div>

    </div>

  </div>

</section>
{/* BRAND SHOWCASE CAROUSEL */}

<section className="py-28 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span
        className="
          inline-block
          px-6
          py-3
          rounded-full
          bg-[#F8BC04]/10
          text-[#F8BC04]
          font-bold
          tracking-widest
          text-sm
          mb-6
        "
      >
        OUR WORK
      </span>

      <h2
        className="
          text-5xl
          md:text-7xl
          font-black
          text-[#171717]
          leading-tight
        "
      >
        Branding That
        <span className="text-[#F8BC04]"> Performs</span>
      </h2>
    </motion.div>

    <motion.div
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-6 w-max"
    >

      {[...Array(12)].map((_, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -20,
            rotate: index % 2 === 0 ? -3 : 3,
            scale: 1.05,
          }}
          className="
            relative
            w-[340px]
            h-[240px]
            rounded-[28px]
            overflow-hidden
            shrink-0
            group
            shadow-2xl
          "
        >

          <Image
            src="/assets/brandingpost3.jpg"
            alt="Branding Work"
            fill
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/20
              to-transparent
            "
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="
              absolute
              bottom-6
              left-6
              right-6
            "
          >
            <span
              className="
                inline-block
                bg-[#F8BC04]
                text-[#171717]
                px-4
                py-2
                rounded-full
                text-xs
                font-bold
                mb-3
              "
            >
              BRANDING PROJECT
            </span>

            <h3
              className="
                text-white
                text-2xl
                font-black
              "
            >
              Premium Brand Identity
            </h3>
          </motion.div>

          {/* GLOW EFFECT */}

          <motion.div
            animate={{
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              -bottom-20
              left-1/2
              -translate-x-1/2
              w-[180px]
              h-[180px]
              bg-[#F8BC04]
              blur-[80px]
            "
          />

        </motion.div>

      ))}

    </motion.div>

    {/* SECOND ROW */}

    <motion.div
      animate={{
        x: ["-50%", "0%"],
      }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-6 w-max mt-8"
    >

      {[...Array(12)].map((_, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -15,
            scale: 1.05,
          }}
          className="
            relative
            w-[280px]
            h-[200px]
            rounded-[24px]
            overflow-hidden
            shrink-0
            group
            shadow-xl
          "
        >

          <Image
            src="/assets/brandingpost3.jpg"
            alt="Branding Work"
            fill
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-115
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#171717]/90
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-5
              left-5
            "
          >
            <h4
              className="
                text-white
                text-xl
                font-bold
              "
            >
              Creative Branding
            </h4>
          </div>

        </motion.div>

      ))}

    </motion.div>

  </div>

</section>

{/* CONTACT CTA SECTION */}

<section className="py-28 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        grid
        lg:grid-cols-2
        gap-16
        items-center
      "
    >

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <motion.span
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-[#F8BC04]/10
            text-[#F8BC04]
            font-bold
            tracking-widest
            text-sm
            mb-6
          "
        >
          LET'S BUILD YOUR BRAND
        </motion.span>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-black
            text-[#171717]
            leading-tight
          "
        >
          Let's Create
          <br />
          Something
          <span className="text-[#F8BC04]">
            {" "}Remarkable
          </span>
        </h2>

        <p
          className="
            mt-8
            text-lg
            text-gray-600
            leading-relaxed
            max-w-xl
          "
        >
          Whether you need logo design, branding,
          packaging or a complete visual identity,
          BIGBEANS DIGITAL helps businesses stand
          out, attract attention and leave a lasting
          impression.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              bg-[#F8BC04]
              text-[#171717]
              font-bold
              px-8
              py-4
              rounded-full
              shadow-xl
            "
          >
            Start Your Project →
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              border-2
              border-[#171717]
              text-[#171717]
              font-bold
              px-8
              py-4
              rounded-full
            "
          >
            View Portfolio
          </motion.button>

        </div>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[650px]"
      >

        {/* YELLOW BACKGROUND */}

        <motion.div
          animate={{
            rotate: [-3, 3, -3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[320px]
            h-[620px]
            bg-[#F8BC04]
            rounded-[40px]
          "
        />

        {/* DOODLE CARD */}

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [-6, 6, -6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
            absolute
            left-0
            top-[120px]
            w-[260px]
            h-[180px]
            bg-white
            rounded-[25px]
            shadow-2xl
            z-10
          "
        >
          <div
            className="
              w-full
              h-full
              flex
              items-center
              justify-center
              text-[#171717]
              text-6xl
            "
          >
            ✦
          </div>
        </motion.div>

        {/* PORTFOLIO CARD */}

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [4, -4, 4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
            absolute
            right-0
            top-[80px]
            w-[320px]
            h-[280px]
            rounded-[25px]
            overflow-hidden
            shadow-2xl
            z-20
          "
        >
          <Image
            src="/assets/brandingpost3.jpg"
            alt="Portfolio"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* HUMAN IMAGE */}

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            bottom-0
            -translate-x-1/2
            z-30
          "
        >
          <Image
            src="/assets/socialmediahuman.png"
            alt="Branding Expert"
            width={420}
            height={620}
            className="object-contain"
          />
        </motion.div>

        {/* FLOATING BADGES */}

        <motion.div
          animate={{
            x: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            top-10
            right-10
            bg-white
            px-6
            py-3
            rounded-full
            shadow-xl
            font-bold
            z-40
          "
        >
          100+ Brands
        </motion.div>

        <motion.div
          animate={{
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-40
            left-0
            bg-white
            px-6
            py-3
            rounded-full
            shadow-xl
            font-bold
            z-40
          "
        >
          Creative Branding
        </motion.div>

      </motion.div>

    </motion.div>

  </div>

</section>










      <section>
        ...
      </section>

    </main>
  );
}