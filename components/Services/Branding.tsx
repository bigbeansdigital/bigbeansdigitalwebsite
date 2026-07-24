"use client";

import Image from "next/image";
import { motion } from "framer-motion";



export default function Branding() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              bg-[#F8BC04]
              rounded-[40px]
              h-[260px]
              flex
              flex-col
              items-center
              justify-center
              relative
              overflow-hidden
              shadow-[0_30px_80px_rgba(248,188,4,0.35)]
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                bg-white
                blur-[120px]
              "
            />

            <h1 className="relative text-[#171717] text-5xl md:text-7xl font-black text-center">
              Branding
            </h1>

            <div className="relative mt-8 bg-white rounded-full px-8 py-4 shadow-xl">
              <span className="text-gray-600">Home</span>

              <span className="mx-4 text-[#F8BC04] font-bold">
                →
              </span>

              <span className="font-semibold text-[#171717]">
                Branding
              </span>
            </div>

          </motion.div>

                

{/* BRANDING PROCESS SECTION */}

<section className="py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP IMAGE */}

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="relative flex justify-center mb-24"
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-[#F8BC04]
          rounded-full
          blur-[120px]
          z-0
        "
      />

      {/* Main Image */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="relative z-10"
      >
        <Image
          src="/assets/brandinghero.png"
          alt="Branding Process"
          width={850}
          height={650}
          className="object-contain"
        />
      </motion.div>
    </motion.div>

    {/* CONTENT */}

    <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="
            inline-flex
            px-5
            py-2
            rounded-full
            bg-[#F8BC04]
            text-[#171717]
            font-bold
            mb-8
          "
        >
          BRAND DEVELOPMENT
        </span>

        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            leading-tight
            text-[#171717]
            mb-8
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
            text-xl
            text-gray-600
            leading-relaxed
          "
        >
          At BIGBEANS DIGITAL, branding goes beyond visuals.
          We help businesses create a unique identity, define
          their voice and establish a memorable presence that
          builds trust and attracts the right audience. From
          strategy to execution, every element is designed to
          strengthen recognition and drive long-term growth.
        </p>
      </motion.div>

    </div>

    {/* PROCESS CARDS */}

    <div className="grid md:grid-cols-3 gap-8">

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
          bg-[#171717]
          rounded-[30px]
          p-10
          text-white
          relative
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -right-12
            -top-12
            w-32
            h-32
            rounded-full
            border
            border-[#F8BC04]/30
          "
        />

        <h3 className="text-7xl font-black text-[#F8BC04] mb-6">
          01
        </h3>

        <h4 className="text-3xl font-bold mb-5">
          Discover
        </h4>

        <p className="text-gray-300 leading-relaxed">
          We begin by understanding your business, market,
          audience and goals to uncover what makes your
          brand truly unique.
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
          bg-[#F8BC04]
          rounded-[30px]
          p-10
          text-[#171717]
          relative
          overflow-hidden
        "
      >
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
            right-0
            top-0
            w-40
            h-40
            bg-white/20
            rounded-full
          "
        />

        <h3 className="text-7xl font-black mb-6">
          02
        </h3>

        <h4 className="text-3xl font-bold mb-5">
          Design
        </h4>

        <p className="leading-relaxed">
          Our creative team transforms ideas into powerful
          visual identities, ensuring consistency across
          every customer touchpoint.
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
          bg-[#171717]
          rounded-[30px]
          p-10
          text-white
          relative
          overflow-hidden
        "
      >
        <motion.div
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            absolute
            right-0
            bottom-0
            w-36
            h-36
            bg-[#F8BC04]/10
            rounded-full
          "
        />

        <h3 className="text-7xl font-black text-[#F8BC04] mb-6">
          03
        </h3>

        <h4 className="text-3xl font-bold mb-5">
          Launch
        </h4>

        <p className="text-gray-300 leading-relaxed">
          We bring your brand to life through strategic
          implementation, ensuring maximum impact,
          visibility and audience engagement.
        </p>
      </motion.div>

    </div>

  </div>
</section>

{/* LOGO DESIGN SHOWCASE SECTION */}

<section className="py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP CONTENT */}

    <div className="grid lg:grid-cols-[1fr_2fr_auto] gap-10 items-center mb-16">

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-[#171717] leading-tight">
          Logo Designs
          <br />
          That Build
          <br />
          Strong Brands
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-600 leading-relaxed"
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
          bg-[#F8BC04]
          text-[#171717]
          font-bold
          px-8
          py-4
          rounded-full
          shadow-xl
          whitespace-nowrap
        "
      >
        Explore Designs →
      </motion.button>

    </div>

    {/* LOGO SHOWCASE */}

    <div className="grid md:grid-cols-3 gap-8">

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
        className="group relative overflow-hidden rounded-[30px]"
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
            src="/assets/brandinglogo1.jpg"
            alt="Logo Design"
            width={700}
            height={500}
            className="
              w-full
              h-[380px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />
        </motion.div>

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />

        <motion.div
          initial={{ y: 40 }}
          whileHover={{ y: 0 }}
          className="
            absolute
            bottom-8
            left-8
            text-white
          "
        >
          <h3 className="text-3xl font-black">
            Modern Identity
          </h3>

          <p className="text-white/80 mt-2">
            Clean, memorable and timeless.
          </p>
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
        className="group relative overflow-hidden rounded-[30px]"
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
            src="/assets/brandinglogo2.png"
            alt="Logo Design"
            width={700}
            height={500}
            className="
              w-full
              h-[380px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />
        </motion.div>

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />

        <motion.div
          initial={{ y: 40 }}
          whileHover={{ y: 0 }}
          className="
            absolute
            bottom-8
            left-8
            text-white
          "
        >
          <h3 className="text-3xl font-black">
            Premium Branding
          </h3>

          <p className="text-white/80 mt-2">
            Built for trust and recognition.
          </p>
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
        className="group relative overflow-hidden rounded-[30px]"
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
            src="/assets/brandinglogo3.png"
            alt="Logo Design"
            width={700}
            height={500}
            className="
              w-full
              h-[380px]
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />
        </motion.div>

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />

        <motion.div
          initial={{ y: 40 }}
          whileHover={{ y: 0 }}
          className="
            absolute
            bottom-8
            left-8
            text-white
          "
        >
          <h3 className="text-3xl font-black">
            Signature Logo
          </h3>

          <p className="text-white/80 mt-2">
            Designed to leave a lasting impact.
          </p>
        </motion.div>
      </motion.div>

    </div>

  </div>
</section>

{/* PRODUCT PACKAGING SECTION */}

<section className="py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP CONTENT */}

    <div className="grid lg:grid-cols-[1fr_2fr_auto] gap-10 items-center mb-16">

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-[#171717]">
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
        className="text-lg text-gray-600 leading-relaxed"
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
          bg-[#F8BC04]
          text-[#171717]
          font-bold
          px-8
          py-4
          rounded-full
          shadow-xl
          whitespace-nowrap
        "
      >
        View Portfolio →
      </motion.button>

    </div>

    {/* PACKAGING SHOWCASE */}

    <div className="grid md:grid-cols-3 gap-8">

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
          overflow-hidden
          rounded-[30px]
          bg-[#171717]
          h-[500px]
          shadow-2xl
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
          className="h-full"
        >
          <Image
            src="/assets/branding/brandingpack1.jpg"
            alt="Packaging Design"
            fill
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
            top-0
            left-0
            w-[120px]
            h-full
            bg-white/20
            blur-2xl
            rotate-12
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
            bg-[#F8BC04]/20
          "
        />

        <motion.div
          initial={{ y: 40 }}
          whileHover={{ y: 0 }}
          className="absolute bottom-8 left-8 z-20"
        >
          <h3 className="text-white text-3xl font-black">
            Premium Product
          </h3>

          <p className="text-white/80 mt-2">
            Packaging designed to attract attention.
          </p>
        </motion.div>

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
          overflow-hidden
          rounded-[30px]
          bg-[#171717]
          h-[500px]
          shadow-2xl
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
          className="h-full"
        >
          <Image
            src="/assets/branding/brandingpack2.jpg"
            alt="Packaging Design"
            fill
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
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-40
            h-40
            rounded-full
            bg-[#F8BC04]/20
            blur-3xl
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
            bg-[#F8BC04]/20
          "
        />

        <motion.div
          initial={{ y: 40 }}
          whileHover={{ y: 0 }}
          className="absolute bottom-8 left-8 z-20"
        >
          <h3 className="text-white text-3xl font-black">
            Luxury Packaging
          </h3>

          <p className="text-white/80 mt-2">
            Crafted for memorable brand experiences.
          </p>
        </motion.div>

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
          overflow-hidden
          rounded-[30px]
          bg-[#171717]
          h-[500px]
          shadow-2xl
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
          className="h-full"
        >
          <Image
            src="/assets/branding/brandingpack3.jpg"
            alt="Packaging Design"
            fill
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
            top-0
            left-0
            w-[140px]
            h-full
            bg-white/20
            blur-xl
            rotate-12
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
            bg-[#F8BC04]/20
          "
        />

        <motion.div
          initial={{ y: 40 }}
          whileHover={{ y: 0 }}
          className="absolute bottom-8 left-8 z-20"
        >
          <h3 className="text-white text-3xl font-black">
            Retail Ready
          </h3>

          <p className="text-white/80 mt-2">
            Designed to stand out on every shelf.
          </p>
        </motion.div>

      </motion.div>

    </div>

  </div>
</section>

{/* BRANDING PORTFOLIO SHOWCASE */}

<section className="py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP SECTION */}

    <div className="grid lg:grid-cols-[280px_1fr_auto] gap-10 items-start mb-16">

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-[#171717]">
          Brand
          <br />
          Showcase
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-600 leading-relaxed max-w-3xl"
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
          bg-[#F8BC04]
          text-[#171717]
          font-bold
          px-8
          py-4
          rounded-full
          shadow-xl
          whitespace-nowrap
        "
      >
        Explore Work →
      </motion.button>

    </div>

    {/* PORTFOLIO GRID */}

    <div className="grid lg:grid-cols-3 gap-8">

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
          overflow-hidden
          rounded-[30px]
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
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
          className="relative h-[500px]"
        >
          <Image
            src="/assets/branding/brandingpost1.png"
            alt="Brand Design"
            fill
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
            top-0
            left-0
            w-[120px]
            h-full
            bg-white/40
            blur-xl
            rotate-12
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
          initial={{ y: 50 }}
          whileHover={{ y: 0 }}
          className="absolute bottom-8 left-8 z-20"
        >
          <h3 className="text-white text-3xl font-black">
            Logo Identity
          </h3>

          <p className="text-white/80 mt-2">
            Professional branding systems that build recognition.
          </p>
        </motion.div>

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
          overflow-hidden
          rounded-[30px]
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
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
          className="relative h-[500px]"
        >
          <Image
            src="/assets/branding/brandingpost2.jpg"
            alt="Brand Packaging"
            fill
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
            w-40
            h-40
            rounded-full
            bg-[#F8BC04]/20
            blur-3xl
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
          initial={{ y: 50 }}
          whileHover={{ y: 0 }}
          className="absolute bottom-8 left-8 z-20"
        >
          <h3 className="text-white text-3xl font-black">
            Brand Assets
          </h3>

          <p className="text-white/80 mt-2">
            Consistent visuals that strengthen brand perception.
          </p>
        </motion.div>

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
          overflow-hidden
          rounded-[30px]
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
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
          className="relative h-[500px]"
        >
          <Image
            src="/assets/branding/brandingpost3.jpg"
            alt="Creative Branding"
            fill
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
            top-0
            left-0
            w-[140px]
            h-full
            bg-white/40
            blur-xl
            rotate-12
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
          initial={{ y: 50 }}
          whileHover={{ y: 0 }}
          className="absolute bottom-8 left-8 z-20"
        >
          <h3 className="text-white text-3xl font-black">
            Premium Branding
          </h3>

          <p className="text-white/80 mt-2">
            Designs crafted to leave a lasting impression.
          </p>
        </motion.div>

      </motion.div>

    </div>

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
          <button
            className="
            bg-[#F8BC04]
            text-black
            px-8
            py-3
            rounded-full
            font-semibold
            shadow-lg
          "
          >
            Let's Start a Project
          </button>
        </motion.div>
{/* PRESENCE SECTION */}

<section className="bg-[#F8F8F8] py-28">

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






        </div>
      
      
      </section>
      
    </>
  );
}

