"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


const carouselImages = [
  "/assets/branding/carousel/1.jpg",
  "/assets/branding/carousel/2.jpg",
  "/assets/branding/carousel/3.jpg",
  "/assets/branding/carousel/4.jpg",
  "/assets/branding/carousel/5.jpg",
  "/assets/branding/carousel/6.jpg",
  "/assets/branding/carousel/7.jpg",
  "/assets/branding/carousel/8.jpg",
  "/assets/branding/carousel/9.jpg",
];




export default function Branding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
     

      <section className="py-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6">
<div className="mb-8 flex justify-center">
  <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
    <span className="text-[#4B5563] font-medium">Home</span>
    <span className="mx-4 text-[#F8BC04] font-semibold">→</span>
    <span className="font-bold text-[#171717]">Branding</span>
  </div>
</div>

<section className="py-3 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

   
<div className="max-w-5xl mx-auto text-center mb-20">

  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="
      text-5xl
      md:text-7xl
      font-light
      leading-[1.05]
      tracking-tight
      text-[#171717]
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
      mt-6
      text-lg
      text-gray-600
      max-w-3xl
      mx-auto
      leading-relaxed
    "
  >
    Build a memorable brand identity with strategic design, creative storytelling and visuals that help your business stand out and grow.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="mt-10 flex justify-center gap-4"
  >
  <Link href="/our-work">
  <button
    className="
      bg-[#171717]
      text-white
      px-8
      py-3
      rounded-full
      font-semibold
      transition-all
      duration-300
      hover:bg-[#F8BC04]
      hover:text-[#171717]
    "
  >
    View Our Work
  </button>
</Link>

    <Link
  href="https://wa.link/gqxvz0"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-[#171717] px-8 py-3 rounded-full font-semibold hover:bg-[#171717] hover:text-white transition">
    Get Consultation
  </button>
</Link>


  </motion.div>

</div>

    {/* Crousal */}
<section className="pt-1 pb-20 overflow-hidden">
<div className="relative max-w-7xl mx-auto">

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
  className="flex gap-8 w-max"
>
{[...carouselImages, ...carouselImages].map((image, index) => (
  <div
    key={index}
    className="relative w-[240px] aspect-square flex-shrink-0 overflow-hidden rounded-[28px]"
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



    {/* CONTENT */}

    <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
        <h2 className="text-4xl md:text-4xl font-black text-[#171717] leading-tight">
          Logo Designs That BuildBrands
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
      </motion.div>

    </div>

  </div>
</section>

{/* PRODUCT PACKAGING SECTION */}

<section className="py-1 overflow-hidden">
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

        

      </motion.div>

    </div>

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
        BRANDING FAQS
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
          q: "What branding services does BIGBEANS DIGITAL offer?",
          a: "BIGBEANS DIGITAL provides complete branding services for startups and businesses, including logo design, brand identity design, brand strategy, color palette selection, typography, social media branding, marketing creatives, brand guidelines, packaging design, and visual identity systems. Our goal is to build a memorable brand that helps your business stand out and grow."
        },
        {
          q: "Why is branding important for startups?",
          a: "Strong branding helps startups build trust, attract customers, and differentiate themselves from competitors. A professional brand identity improves recognition, strengthens credibility, and creates a consistent customer experience across websites, social media, advertisements, and marketing materials."
        },
        {
          q: "How does your branding process work?",
          a: "Our branding process starts with understanding your business, target audience, industry, and goals. We then create a unique brand strategy, logo concepts, visual identity, brand assets, and marketing guidelines before delivering the final brand package ready for online and offline use."
        },
        {
          q: "Do you provide logo design as part of branding?",
          a: "Yes. Every branding project includes a professionally designed logo along with typography, color palette, brand identity elements, and brand usage guidelines to ensure consistency across all marketing platforms."
        },
        {
          q: "Can you redesign or rebrand an existing business?",
          a: "Absolutely. We help businesses refresh outdated brand identities through complete rebranding services, including logo redesign, brand positioning, visual identity, messaging, and marketing assets while maintaining customer trust and brand recognition."
        },
        {
          q: "Which industries do you provide branding services for?",
          a: "We provide branding solutions for startups, small businesses, ecommerce brands, FMCG companies, healthcare businesses, gyms, real estate firms, restaurants, educational institutes, service businesses, and many other industries."
        },
        {
          q: "Will my brand identity be unique?",
          a: "Yes. Every brand identity is designed from scratch after researching your business, competitors, and target audience. We never use templates or copied concepts, ensuring your brand remains original and memorable."
        },
        {
          q: "Do I own the branding and logo after the project is completed?",
          a: "Yes. Once your branding project is completed and approved, you receive full ownership of the final logo and branding assets. All source files and deliverables are provided for future use."
        },
        {
          q: "Why choose BIGBEANS DIGITAL as your branding agency?",
          a: "BIGBEANS DIGITAL is a Branding Agency for Startups focused on creating brands that not only look professional but also drive business growth. Our strategic approach combines branding, graphic design, digital marketing, and customer psychology to build brands that attract, engage, and convert customers."
        },
        {
          q: "How long does a branding project take?",
          a: "The timeline depends on the project scope. Most startup branding projects are completed within 1–3 weeks, while larger branding and rebranding projects may require additional time to ensure every detail aligns with your business goals and long-term vision."
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


















        



        </div>
      
      
      </section>
      
    </>
  );
}

