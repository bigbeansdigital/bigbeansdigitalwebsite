"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";

/* ================================================================
   HEADER ENTRY ANIMATION
================================================================ */

const headerEntry = {
  hidden: {
    opacity: 0,
    y: -40,
    scale: 0.97,
    rotateX: -5,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,

    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/* ================================================================
   NAVIGATION ANIMATION
================================================================ */

const navContainer = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.055,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -10,
    rotateX: -8,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,

    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/* ================================================================
   CTA ANIMATION
================================================================ */

const ctaEntry = {
  hidden: {
    opacity: 0,
    x: 35,
    scale: 0.94,
    rotateY: 7,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,

    transition: {
      duration: 0.75,
      delay: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/* ================================================================
   HEADER
================================================================ */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* ============================================================
     3D MOUSE MOVEMENT
  ============================================================ */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 75,
    damping: 22,
    mass: 0.7,
  });

  const springY = useSpring(mouseY, {
    stiffness: 75,
    damping: 22,
    mass: 0.7,
  });

  const rotateY = useTransform(
    springX,
    [-1, 1],
    [-2.8, 2.8]
  );

  const rotateX = useTransform(
    springY,
    [-1, 1],
    [1.8, -1.8]
  );

  const translateX = useTransform(
    springX,
    [-1, 1],
    [-2.5, 2.5]
  );

  const translateY = useTransform(
    springY,
    [-1, 1],
    [-1.5, 1.5]
  );

  /* ============================================================
     MOUSE HANDLER
  ============================================================ */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-[100]
        w-full
        px-4
        pt-4
        sm:px-6
        sm:pt-5
        lg:px-8
        lg:pt-7
      "
    >
      {/* ========================================================
          MAIN HEADER
          EXACT 5PX SPACE BELOW THE GLASS HEADER
      ======================================================== */}

      <motion.div
        variants={headerEntry}
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformPerspective: 1800,
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          mx-auto
          mb-[5px]
          h-[72px]
          w-full
          max-w-[1895px]
          transform-gpu
          sm:h-[78px]
          lg:h-[92px]
        "
      >
        {/* ======================================================
            OUTER WHITE GLASS CAPSULE
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[50px]
            border
            border-black/[0.06]
            bg-white/[0.88]
            shadow-[0_18px_60px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)]
            backdrop-blur-2xl
          "
        >
          {/* Soft white glass gradient */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[50px]
              bg-gradient-to-b
              from-white
              via-white/[0.90]
              to-[#f8f8f8]/[0.94]
            "
          />

          {/* Top glass reflection */}

          <div
            className="
              pointer-events-none
              absolute
              left-[4%]
              right-[4%]
              top-[1px]
              h-px
              bg-gradient-to-r
              from-transparent
              via-black/[0.08]
              to-transparent
            "
          />

          {/* Upper ambient glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-[25%]
              top-[-150px]
              h-[220px]
              w-[50%]
              rounded-full
              bg-white
              blur-[80px]
            "
          />

          {/* Left glass reflection */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[8%]
              top-[-150%]
              h-[350%]
              w-[28%]
              rotate-[12deg]
              bg-white/[0.80]
              blur-3xl
            "
          />

          {/* Bottom glass reflection */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[10%]
              right-[10%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-black/[0.08]
              to-transparent
            "
          />

          {/* ====================================================
              ANIMATED GLASS REFLECTION
          ==================================================== */}

          <motion.div
            aria-hidden="true"
            initial={{
              x: "-140%",
            }}
            animate={{
              x: "340%",
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-[-40%]
              w-[180px]
              rotate-[18deg]
              bg-gradient-to-r
              from-transparent
              via-black/[0.025]
              to-transparent
              blur-xl
            "
          />

          {/* Very subtle yellow ambient light */}

          <div
            className="
              pointer-events-none
              absolute
              right-[14%]
              top-[-90px]
              h-[170px]
              w-[240px]
              rounded-full
              bg-[#F8BC04]/[0.06]
              blur-[80px]
            "
          />
        </div>

        {/* ======================================================
            HEADER CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            flex
            h-full
            items-center
            justify-between
            px-3
            sm:px-4
            lg:px-5
          "
        >
          {/* ====================================================
              DESKTOP LOGO
          ==================================================== */}

          <motion.div
            whileHover={{
              scale: 1.035,
              rotateY: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="
              relative
              hidden
              h-full
              w-[180px]
              flex-shrink-0
              items-center
              justify-start
              pl-5
              sm:w-[220px]
              sm:pl-7
              lg:flex
              lg:w-[350px]
              lg:pl-7
            "
          >
            <Link
              href="/"
              aria-label="Big Beans Digital Home"
              className="
                relative
                flex
                items-center
                justify-center
              "
            >
              <Image
                src="/bbdlogo.png"
                alt="Big Beans Digital"
                width={220}
                height={70}
                priority
                className="
                  relative
                  z-10
                  h-auto
                  w-[120px]
                  object-contain
                  sm:w-[145px]
                  lg:w-[185px]
                "
              />
            </Link>
          </motion.div>

          {/* ====================================================
              DESKTOP NAVIGATION
          ==================================================== */}

          <motion.nav
            variants={navContainer}
            initial="hidden"
            animate="visible"
            className="
              hidden
              lg:flex
              h-[62px]
              flex-1
              max-w-[1085px]
              items-center
              justify-center
              rounded-full
              border
              border-black/[0.055]
              bg-white/[0.72]
              px-2
              shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_4px_18px_rgba(0,0,0,0.035)]
              backdrop-blur-2xl
            "
          >
            {/* ==================================================
                HOME
                NO YELLOW BACKGROUND
                NO GLOW
                NO SHADOW
            ================================================== */}

            <AnimatedNavItem href="/">
              Home
            </AnimatedNavItem>

            {/* ==================================================
                SERVICES
            ================================================== */}

            <motion.div
              variants={navItem}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className="
                relative
                flex
                h-full
                items-center
              "
            >
              <motion.button
                type="button"
                onClick={() =>
                  setServicesOpen((open) => !open)
                }
                whileHover={{
                  scale: 1.035,
                }}
                className="
                  group
                  flex
                  h-[50px]
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  text-[18px]
                  font-semibold
                  tracking-[-0.02em]
                  text-black/85
                  transition-all
                  duration-300
                  hover:bg-black/[0.035]
                  hover:text-black
                "
              >
                <span>Services</span>

                <motion.span
                  animate={{
                    rotate: servicesOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    mt-[1px]
                    text-[11px]
                    text-black/55
                  "
                >
                  ▾
                </motion.span>
              </motion.button>

              {/* SERVICES DROPDOWN */}

              <motion.div
                initial={false}
                animate={{
                  opacity: servicesOpen ? 1 : 0,
                  y: servicesOpen ? 10 : 18,
                  scale: servicesOpen ? 1 : 0.96,
                  visibility: servicesOpen
                    ? "visible"
                    : "hidden",
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="
                  pointer-events-auto
                  absolute
                  left-1/2
                  top-full
                  z-[200]
                  w-[290px]
                  -translate-x-1/2
                  pt-4
                  origin-top
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-black/[0.07]
                    bg-white/[0.96]
                    shadow-[0_25px_70px_rgba(0,0,0,0.14)]
                    backdrop-blur-2xl
                  "
                >
                  <ServiceLink href="/services/social-media-marketing">
                    Social Media Marketing
                  </ServiceLink>

                  <ServiceLink href="/services/branding">
                    End to End Branding
                  </ServiceLink>

                  <ServiceLink href="/services/google-ads-meta-ads">
                    Performance Marketing
                  </ServiceLink>

                  <ServiceLink href="/services/logo-designing">
                    Logo Designing
                  </ServiceLink>

                  <ServiceLink href="/services/website-development">
                    Website Development
                  </ServiceLink>

                  <ServiceLink href="/services/social-media-marketing">
                    Digital Marketing
                  </ServiceLink>

                  <ServiceLink href="/services/social-media-marketing">
                    SEO & Content Writing
                  </ServiceLink>
                </div>
              </motion.div>
            </motion.div>

            {/* ABOUT */}

            <AnimatedNavItem href="/#">
              About
            </AnimatedNavItem>

            {/* ACADEMY */}

            <AnimatedNavItem href="/academy">
              Academy
            </AnimatedNavItem>

            {/* BLOGS */}

            <AnimatedNavItem href="/blog">
              Blogs
            </AnimatedNavItem>

            {/* CONNECT */}

            <AnimatedNavItem href="/connect">
              Connect
            </AnimatedNavItem>

            {/* JOIN OUR TEAM */}

            <AnimatedNavItem
              href="https://wa.link/pxmrrm"
              external
            >
              Join Our Team
            </AnimatedNavItem>
          </motion.nav>

          {/* ====================================================
              RIGHT CTA
          ==================================================== */}

          <motion.div
            variants={ctaEntry}
            initial="hidden"
            animate="visible"
            className="
              hidden
              lg:flex
              w-[350px]
              flex-shrink-0
              justify-end
            "
          >
            <motion.div
              whileHover={{
                y: -2,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 18,
              }}
            >
              <Link
                href="https://wa.link/rtfeow"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  flex
                  h-[62px]
                  min-w-[290px]
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  border
                  border-[#DFA900]/60
                  bg-[#F8BC04]
                  px-6
                  text-black
                  shadow-[0_8px_30px_rgba(248,188,4,0.20),inset_0_1px_0_rgba(255,255,255,0.55)]
                  transition-all
                  duration-300
                  hover:bg-[#FFD21A]
                  hover:shadow-[0_12px_40px_rgba(248,188,4,0.30),inset_0_1px_0_rgba(255,255,255,0.65)]
                "
              >
                {/* CTA shine */}

                <motion.span
                  aria-hidden="true"
                  initial={{
                    x: "-140%",
                  }}
                  animate={{
                    x: "160%",
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-[-40%]
                    w-[80px]
                    rotate-[18deg]
                    bg-white/[0.38]
                    blur-lg
                  "
                />

                {/* PHONE ICON */}

                <span
                  className="
                    relative
                    z-10
                    flex
                    h-[38px]
                    w-[38px]
                    flex-shrink-0
                    items-center
                    justify-center
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[25px] w-[25px]"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>

                {/* CTA TEXT */}

                <span
                  className="
                    relative
                    z-10
                    whitespace-nowrap
                    text-[17px]
                    font-bold
                    tracking-[-0.025em]
                  "
                >
                  Request For A Quote
                </span>

                {/* CTA ARROW */}

                <motion.span
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    z-10
                    text-[21px]
                    font-medium
                  "
                >
                  →
                </motion.span>

                {/* Hover overlay */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    bg-white/[0.10]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* ====================================================
              MOBILE LOGO
          ==================================================== */}

          <Link
            href="/"
            className="
              absolute
              left-1/2
              flex
              -translate-x-1/2
              items-center
              lg:hidden
            "
          >
            <Image
              src="/bbdlogo.png"
              alt="Big Beans Digital"
              width={180}
              height={55}
              priority
              className="
                h-auto
                w-[125px]
                sm:w-[145px]
              "
            />
          </Link>

          {/* ====================================================
              MOBILE MENU BUTTON
          ==================================================== */}

          <motion.button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            whileTap={{
              scale: 0.9,
            }}
            className="
              ml-auto
              flex
              h-[52px]
              w-[52px]
              flex-shrink-0
              flex-col
              items-center
              justify-center
              gap-[5px]
              rounded-full
              border
              border-black/[0.08]
              bg-black/[0.025]
              backdrop-blur-xl
              lg:hidden
            "
          >
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 7 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                block
                h-[2px]
                w-[21px]
                bg-black
              "
            />

            <motion.span
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
                scaleX: mobileMenuOpen ? 0 : 1,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                block
                h-[2px]
                w-[21px]
                bg-black
              "
            />

            <motion.span
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -7 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                block
                h-[2px]
                w-[21px]
                bg-black
              "
            />
          </motion.button>
        </div>

        {/* ========================================================
            MOBILE MENU
        ======================================================== */}

        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="
            relative
            z-[150]
            overflow-hidden
            lg:hidden
          "
        >
          <div
            className="
              mx-1
              mt-3
              overflow-hidden
              rounded-[28px]
              border
              border-black/[0.07]
              bg-white/[0.97]
              px-5
              pb-5
              pt-3
              shadow-[0_25px_70px_rgba(0,0,0,0.12)]
              backdrop-blur-2xl
            "
          >
            {/* HOME */}

            <MobileNavLink
              href="/"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Home
            </MobileNavLink>

            {/* SERVICES */}

            <div
              className="
                border-b
                border-black/[0.08]
              "
            >
              <button
                type="button"
                onClick={() =>
                  setMobileServicesOpen(
                    !mobileServicesOpen
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-4
                  text-[16px]
                  font-semibold
                  text-black
                "
              >
                <span>Services</span>

                <motion.span
                  animate={{
                    rotate:
                      mobileServicesOpen
                        ? 180
                        : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    text-xs
                    text-black/50
                  "
                >
                  ▾
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height:
                    mobileServicesOpen
                      ? "auto"
                      : 0,
                  opacity:
                    mobileServicesOpen
                      ? 1
                      : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <div className="pb-3">
                  <MobileServiceLink
                    href="/services/social-media-marketing"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Social Media Marketing
                  </MobileServiceLink>

                  <MobileServiceLink
                    href="/services/branding"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    End to End Branding
                  </MobileServiceLink>

                  <MobileServiceLink
                    href="/services/google-ads-meta-ads"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Performance Marketing
                  </MobileServiceLink>

                  <MobileServiceLink
                    href="/services/logo-designing"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Logo Designing
                  </MobileServiceLink>

                  <MobileServiceLink
                    href="/services/website-development"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Website Development
                  </MobileServiceLink>

                  <MobileServiceLink
                    href="/services/social-media-marketing"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Digital Marketing
                  </MobileServiceLink>

                  <MobileServiceLink
                    href="/services/social-media-marketing"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    SEO & Content Writing
                  </MobileServiceLink>
                </div>
              </motion.div>
            </div>

            {/* ABOUT */}

            <MobileNavLink
              href="/#"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              About
            </MobileNavLink>

            {/* ACADEMY */}

            <MobileNavLink
              href="/academy"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Academy
            </MobileNavLink>

            {/* BLOGS */}

            <MobileNavLink
              href="/blog"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Blogs
            </MobileNavLink>

            {/* CONNECT */}

            <MobileNavLink
              href="/connect"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Connect
            </MobileNavLink>

            {/* JOIN OUR TEAM */}

            <MobileNavLink
              href="https://wa.link/pxmrrm"
              external
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Join Our Team
            </MobileNavLink>

            {/* MOBILE CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                y: mobileMenuOpen ? 0 : 12,
              }}
              transition={{
                delay: 0.08,
                duration: 0.3,
              }}
              className="mt-4"
            >
              <Link
                href="https://wa.link/rtfeow"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  relative
                  flex
                  h-[54px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  border
                  border-[#DFA900]/60
                  bg-[#F8BC04]
                  text-[15px]
                  font-bold
                  text-black
                  shadow-[0_8px_25px_rgba(248,188,4,0.18)]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px]"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                </svg>

                Request For A Quote

                <span className="text-[18px]">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}

/* ================================================================
   ANIMATED DESKTOP NAV ITEM
================================================================ */

function AnimatedNavItem({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <motion.div
      variants={navItem}
      whileHover={{
        y: -1,
        scale: 1.025,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className="
        relative
        flex
        h-full
        items-center
      "
    >
      <Link
        href={href}
        target={
          external ? "_blank" : undefined
        }
        rel={
          external
            ? "noopener noreferrer"
            : undefined
        }
        className="
          group
          relative
          flex
          h-[50px]
          items-center
          rounded-full
          px-5
          text-[18px]
          font-semibold
          tracking-[-0.02em]
          text-black/80
          transition-all
          duration-300
          hover:bg-black/[0.035]
          hover:text-black
        "
      >
        {/* Text */}

        <span className="relative z-10 whitespace-nowrap">
          {children}
        </span>

        {/* Subtle black hover background ONLY */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-black/[0.025]
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Subtle hover underline */}

        <motion.span
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileHover={{
            width: "45%",
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            bottom-[5px]
            left-1/2
            h-[1px]
            -translate-x-1/2
            rounded-full
            bg-black/40
          "
        />
      </Link>
    </motion.div>
  );
}

/* ================================================================
   SERVICE LINK
================================================================ */

function ServiceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        block
        overflow-hidden
        border-b
        border-black/[0.06]
        px-5
        py-4
        text-[15px]
        font-semibold
        text-black/70
        transition-all
        duration-300
        last:border-b-0
        hover:bg-black/[0.025]
        hover:text-black
      "
    >
      {/* Moving hover light */}

      <motion.span
        aria-hidden="true"
        initial={{
          x: "-120%",
        }}
        whileHover={{
          x: "120%",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          w-[90px]
          rotate-[15deg]
          bg-[#F8BC04]/[0.12]
          blur-md
        "
      />

      {/* Yellow left indicator */}

      <span
        className="
          absolute
          left-0
          top-0
          h-full
          w-[2px]
          origin-bottom
          scale-y-0
          bg-[#F8BC04]
          transition-transform
          duration-300
          group-hover:scale-y-100
        "
      />

      <span
        className="
          relative
          z-10
        "
      >
        {children}
      </span>
    </Link>
  );
}

/* ================================================================
   MOBILE NAV LINK
================================================================ */

function MobileNavLink({
  href,
  children,
  onClick,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  external?: boolean;
}) {
  return (
    <motion.div
      whileTap={{
        x: 5,
        scale: 0.99,
      }}
    >
      <Link
        href={href}
        target={
          external ? "_blank" : undefined
        }
        rel={
          external
            ? "noopener noreferrer"
            : undefined
        }
        onClick={onClick}
        className="
          block
          border-b
          border-black/[0.08]
          py-4
          text-[16px]
          font-semibold
          text-black/85
          transition-colors
          duration-300
          hover:text-[#D99F00]
        "
      >
        {children}
      </Link>
    </motion.div>
  );
}

/* ================================================================
   MOBILE SERVICE LINK
================================================================ */

function MobileServiceLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileTap={{
        x: 4,
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="
          block
          py-2.5
          pl-3
          text-[15px]
          text-black/55
          transition-colors
          duration-300
          hover:text-[#D99F00]
        "
      >
        {children}
      </Link>
    </motion.div>
  );
}