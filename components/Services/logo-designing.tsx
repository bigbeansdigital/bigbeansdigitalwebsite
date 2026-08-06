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
          src="/assets/logodesigning/bigbeansdigitalcolorpalate.png"
          alt="BigBeans Digital Best Logo Designer in London"
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
          src="/assets/logodesigning/bigbeansdigitallogoshow.png"
          alt="BigBeans Digital Best Logo Designer in London"
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
          src="/assets/logodesigning/bigbeansdigitalbranding.png"
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
          src="/assets/logodesigning/bigbeansdigitalbranding2.png"
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
          src="/assets/logodesigning/bigbeansdigitalicon.png"
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
          src="/assets/logodesigning/bigbeansdigitalicon1.jpg"
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
    q: "Why is a professional logo important for my business?",
    a: "A professionally designed logo is the foundation of your brand identity. It helps customers recognize your business, builds trust, and creates a strong first impression across your website, social media, packaging, and marketing materials. A memorable logo also helps startups stand out in competitive markets."
  },
  {
    q: "What makes BIGBEANS DIGITAL the best logo design company for startups?",
    a: "BIGBEANS DIGITAL specializes in creating unique, memorable, and strategic logos for startups, entrepreneurs, and growing businesses. Every logo is custom-designed to reflect your brand personality, industry, target audience, and long-term business goals."
  },
  {
    q: "What types of logo design services do you offer?",
    a: "We offer custom logo design, startup logo design, business logo design, minimalist logos, modern logo design, mascot logos, typography logos, icon-based logos, monogram logos, and complete brand identity design tailored to your business."
  },
  {
    q: "How do you create a logo that represents my brand?",
    a: "Our design process begins by understanding your business, industry, competitors, target audience, and brand values. We then create original logo concepts that communicate your brand message while ensuring the design is timeless, scalable, and easy to recognize."
  },
  {
    q: "Will I receive the source files and full ownership of my logo?",
    a: "Yes. Once your logo is finalized, you'll receive high-quality files in multiple formats, including AI, EPS, SVG, PNG, PDF, and JPG. You also receive complete ownership rights for your logo."
  },
  {
    q: "Can you redesign my existing logo?",
    a: "Absolutely. Our logo redesign services help modernize outdated logos while maintaining your brand recognition. We create refreshed, professional designs that better represent your business and today's digital landscape."
  },
  {
    q: "How many logo concepts and revisions do you provide?",
    a: "We provide multiple creative logo concepts based on your requirements along with revision rounds to ensure the final design perfectly matches your vision and business identity."
  },
  {
    q: "Do you design logos for startups and small businesses?",
    a: "Yes. We specialize in logo design for startups, entrepreneurs, local businesses, ecommerce brands, healthcare, real estate, gyms, restaurants, FMCG companies, and service-based businesses looking to establish a strong brand identity."
  },
  {
    q: "How long does a professional logo design project take?",
    a: "Most logo design projects are completed within 3–7 business days, depending on the complexity of the design, revisions, and project requirements."
  },
  {
    q: "Why choose BIGBEANS DIGITAL for logo design?",
    a: "BIGBEANS DIGITAL combines creativity with branding strategy to design logos that do more than just look attractive. We create professional logos that improve brand recognition, build customer trust, and support long-term business growth, making us a trusted Logo Design Company for Startups and Growing Businesses."
  }
]
      .map((faq, index) => (

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