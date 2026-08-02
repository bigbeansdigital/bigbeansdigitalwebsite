"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const carouselImages = [
  "/assets/logodesigning/carousel/1.jpg",
  "/assets/logodesigning/carousel/2.jpg",
  "/assets/logodesigning/carousel/3.jpg",
  "/assets/logodesigning/carousel/4.jpg",
  "/assets/logodesigning/carousel/5.jpg",
  "/assets/logodesigning/carousel/6.jpg",
  "/assets/logodesigning/carousel/7.jpg",
  "/assets/logodesigning/carousel/8.jpg",
  "/assets/logodesigning/carousel/9.jpg",
];



export default function LogoDesigning() {
  return (
    <main>

      {/* CREATIVE CTA SECTION */}

<section className="py-20 overflow-hidden relative">


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

  <div className="max-w-6xl mx-auto px-1 relative z-10">

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

<section className="py-1 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >

      <h2
        className="
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          text-[#171717]
        "
      >
        Logo is the First Impression 
        <br />
        That Builds Brand Recognition
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
      </motion.div>

    </div>

  </div>

</section>




{/* ========================= BRAND DEVELOPMENT SECTION ========================= */}

<section className="py-1">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP CONTENT */}

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
          At BIGBEANS DIGITAL, branding goes beyond visuals. We help
          businesses create a unique identity, define their voice and
          establish a memorable presence that builds trust and attracts
          the right audience. From strategy to execution, every element
          is designed to strengthen recognition and drive long-term
          growth.
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
          animate={{ rotate: 360 }}
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
          animate={{ scale: [1, 1.3, 1] }}
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
          visual identities, ensuring consistency across every
          customer touchpoint.
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
          animate={{ x: [0, 20, 0] }}
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




{/* Crousal */}
<section className="pt-15 pb-20 overflow-hidden">
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
      <section>
      </section>


{/* ========================= WHY CHOOSE US SECTION ========================= */}

<section className="py-5 bg-[#FFFFF] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
    
      <h2
        className="
          text-4xl
          md:text-5xl
          font-black
          leading-tight
          text-[#171717]
        "
      >
        Why Brands Choose{" "}
        <span className="text-[#F8BC04]">
          BIGBEANS DIGITAL
        </span>
      </h2>
    </motion.div>

    {/* Cards */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

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
          desc: "Generate qualified leads consistently with proven digital marketing systems.",
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
            bg-white
            rounded-[24px]
            p-6
            border
            border-gray-200
            shadow-[0_10px_35px_rgba(0,0,0,0.06)]
            overflow-hidden
          "
        >

          {/* Decorative Circle */}

          <div
            className="
              absolute
              -top-10
              -right-10
              w-20
              h-20
              rounded-full
              bg-[#F8BC04]/15
            "
          />

          <h3
            className="
              text-6xl
              font-black
              text-[#F8BC04]
              leading-none
              mb-2
            "
          >
            {item.number}
          </h3>

          <h4
            className="
              text-2xl
              font-black
              text-[#171717]
              leading-tight
              mb-4
            "
          >
            {item.title}
          </h4>

          <p
            className="
              text-[15px]
              leading-7
              text-gray-600
            "
          >
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>

  </div>
</section>

{/* =========================
        CTA SECTION
========================= */}

<section className="relative overflow-hidden bg-[#fffff] py-24">

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
















    </main>
  );
}