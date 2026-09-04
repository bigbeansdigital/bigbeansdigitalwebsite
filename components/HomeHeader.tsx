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
    y: -80,
    scale: 0.88,
    rotateX: -12,
    transformPerspective: 1400,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,

    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ================================================================
   LOGO ENTRY
================================================================ */

const logoEntry = {
  hidden: {
    opacity: 0,
    x: -70,
    rotateY: -35,
    rotateX: 10,
    scale: 0.75,
  },

  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    rotateX: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      delay: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ================================================================
   NAVIGATION CONTAINER
================================================================ */

const navContainer = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.48,
      staggerChildren: 0.075,
    },
  },
};

/* ================================================================
   INDIVIDUAL NAV ITEM
================================================================ */

const navItem = {
  hidden: {
    opacity: 0,
    y: -30,
    rotateX: -25,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ================================================================
   CTA ENTRY
================================================================ */

const ctaEntry = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.7,
    rotateY: 25,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,

    transition: {
      duration: 0.9,
      delay: 1.0,
      ease: [0.16, 1, 0.3, 1],
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
     MOUSE 3D
  ============================================================ */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 18,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 18,
    mass: 0.6,
  });

  const rotateY = useTransform(
    springX,
    [-1, 1],
    [-2, 2]
  );

  const rotateX = useTransform(
    springY,
    [-1, 1],
    [1.5, -1.5]
  );

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
        absolute
        top-0
        left-0
        right-0
        z-50
        w-full
        bg-transparent
      "
    >
      {/* ========================================================
          HEADER WRAPPER
      ======================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1320px]
          px-4
          pt-5
          sm:px-5
          lg:px-0
          lg:pt-7
        "
      >
        {/* ======================================================
            3D HEADER
        ====================================================== */}

        <motion.div
          variants={headerEntry}
          initial="hidden"
          animate="visible"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1400,
          }}
          className="
            relative
            w-full
            rounded-[20px]
            lg:rounded-full
            transform-gpu
          "
        >
          {/* ====================================================
              OUTER GLASS GLOW
          ==================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -inset-[2px]
              rounded-[22px]
              lg:rounded-full
              bg-gradient-to-r
                from-white/60
                via-white/20
                to-white/20
              opacity-80
              blur-[1px]
            "
          />

          {/* ====================================================
              GLASS HEADER BODY
          ==================================================== */}

          <div
            className="
              relative
              overflow-visible
              rounded-[20px]
              lg:rounded-full
              border
              border-white/20
              bg-black/65
              shadow-[0_20px_70px_rgba(0,0,0,0.65)]
              backdrop-blur-2xl
            "
          >
            {/* ==================================================
                INNER GLASS HIGHLIGHT
            ================================================== */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-[2px]
                rounded-[18px]
                lg:rounded-full
                border
                border-white/[0.08]
              "
            />

            {/* ==================================================
                TOP REFLECTION
            ================================================== */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[5%]
                right-[5%]
                top-0
                h-[1px]
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-white/70
                to-transparent
                opacity-70
              "
            />

            {/* ==================================================
                BOTTOM GLASS REFLECTION
            ================================================== */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[8%]
                right-[8%]
                bottom-0
                h-[1px]
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
            />

            {/* ==================================================
                MAIN HEADER
            ================================================== */}

            <div className="relative px-4 sm:px-5 lg:px-8">
              <div className="h-[64px] sm:h-[70px] flex items-center justify-between">

                {/* ==================================================
                    LOGO
                ================================================== */}

                <Link
                  href="/"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="
                    relative
                    flex
                    items-center
                    flex-shrink-0
                    perspective-[1200px]
                  "
                >
                  <motion.div
                    variants={logoEntry}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      y: -5,
                      rotateY: -8,
                      rotateX: 3,
                      scale: 1.035,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 17,
                    }}
                    className="
                      relative
                      transform-gpu
                    "
                  >
                    <Image
                      src="/bbdlogo.png"
                      alt="Big Beans Digital"
                      width={180}
                      height={50}
                      priority
                      className="
                        h-auto
                        w-[112px]
                        sm:w-[135px]
                        md:w-[155px]
                        lg:w-[180px]
                      "
                    />
                  </motion.div>

                  {/* LOGO MICRO FLOAT */}

                  <motion.div
                    aria-hidden="true"
                    animate={{
                      y: [0, -2, 0, 2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                    "
                  />
                </Link>

                {/* ==================================================
                    DESKTOP NAVIGATION
                ================================================== */}

                <motion.nav
                  variants={navContainer}
                  initial="hidden"
                  animate="visible"
                  className="
                    hidden
                    lg:flex
                    items-center
                    gap-9
                    text-[16px]
                    font-medium
                    text-white
                    perspective-[1000px]
                  "
                >
                  <AnimatedNavItem href="/">
                    Home
                  </AnimatedNavItem>

                  {/* =================================================
                      SERVICES
                  ================================================= */}

                  <motion.div
                    variants={navItem}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    className="
                      relative
                      perspective-[1000px]
                    "
                  >
                    <motion.button
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      whileHover={{
                        y: -4,
                        rotateX: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-white
                        transition-colors
                        duration-300
                        hover:text-[#F8BC04]
                        transform-gpu
                      "
                    >
                      Services

                      <motion.span
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-[11px]"
                      >
                        ▾
                      </motion.span>
                    </motion.button>

                    {/* =================================================
                        3D SERVICES DROPDOWN
                    ================================================= */}

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: servicesOpen ? 1 : 0,
                        y: servicesOpen ? 0 : 20,
                        scale: servicesOpen ? 1 : 0.9,
                        visibility: servicesOpen ? "visible" : "hidden",
                      }}
                      transition={{
                        duration: 0.28,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        absolute
                        left-1/2
                        top-full
                        z-50
                        w-64
                        -translate-x-1/2
                        pt-5
                        origin-top
                        pointer-events-auto
                      "
                    >
                      <div
                        className="
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/10
                          bg-black
                          shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                          backdrop-blur-xl
                          transform-gpu
                        "
                      >
                        <ServiceLink
                          href="/services/social-media-marketing"
                        >
                          Social Media Marketing
                        </ServiceLink>

                        <ServiceLink
                          href="/services/branding"
                        >
                          End to End Branding
                        </ServiceLink>

                        <ServiceLink
                          href="/services/google-ads-meta-ads"
                        >
                          Performance Marketing
                        </ServiceLink>

                        <ServiceLink
                          href="/services/logo-designing"
                        >
                          Logo Designing
                        </ServiceLink>

                        <ServiceLink
                          href="/services/website-development"
                        >
                          Website Development
                        </ServiceLink>

                        <ServiceLink
                          href="/services/social-media-marketing"
                        >
                          Digital Marketing
                        </ServiceLink>

                        <ServiceLink
                          href="/services/social-media-marketing"
                        >
                          SEO & Content Writing
                        </ServiceLink>
                      </div>
                    </motion.div>
                  </motion.div>

                  <AnimatedNavItem href="/#">
                    About
                  </AnimatedNavItem>

                  <AnimatedNavItem href="/academy">
                    Academy
                  </AnimatedNavItem>

                  <AnimatedNavItem href="/blog">
                    Blogs
                  </AnimatedNavItem>

                  <AnimatedNavItem href="/connect">
                    Connect
                  </AnimatedNavItem>

                  <AnimatedNavItem
                    href="https://wa.link/pxmrrm"
                    external
                  >
                    Join Our Team
                  </AnimatedNavItem>
                </motion.nav>

                {/* ==================================================
                    DESKTOP CTA
                ================================================== */}

                <motion.div
                  variants={ctaEntry}
                  initial="hidden"
                  animate="visible"
                  className="
                    relative
                    hidden
                    lg:block
                    perspective-[1000px]
                  "
                >
              

                  {/* CTA WHITE GLASS OUTER RING */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -inset-[1px]
                      rounded-full
                      border
                      border-white/30
                    "
                  />

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
                    className="
                      relative
                      transform-gpu
                    "
                  >
                    <Link
                      href="https://wa.link/rtfeow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        relative
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
                        bg-black/70
                        text-white
                        font-bold
                        text-[16px]
                        whitespace-nowrap
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-white/60
                        hover:bg-black/60
                      "
                    >
                     

                      

                      {/* MOVING LIGHT */}

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

                      {/* PHONE ICON */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="
                          relative
                          z-10
                          h-[19px]
                          w-[19px]
                        "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.35-7.35 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.528-.74.417-1.173L6.506 3.9A1.125 1.125 0 0 0 5.416 3H4.5A2.25 2.25 0 0 0 2.25 5.25v1.5Z"
                        />
                      </svg>

                      <span className="relative z-10">
                        Request For A Quote
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* ==================================================
                    MOBILE MENU BUTTON
                ================================================== */}

                <motion.button
                  type="button"
                  aria-label={
                    mobileMenuOpen
                      ? "Close menu"
                      : "Open menu"
                  }
                  aria-expanded={mobileMenuOpen}
                  onClick={() =>
                    setMobileMenuOpen(
                      !mobileMenuOpen
                    )
                  }
                  whileTap={{
                    scale: 0.85,
                    rotate: 3,
                  }}
                  className="
                    lg:hidden
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-[5px]
                    w-[44px]
                    h-[44px]
                    flex-shrink-0
                    rounded-full
                    bg-transparent
                  "
                >
                  <motion.span
                    animate={{
                      rotate:
                        mobileMenuOpen
                          ? 45
                          : 0,
                      y:
                        mobileMenuOpen
                          ? 7
                          : 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      block
                      w-[24px]
                      h-[2px]
                      bg-white
                    "
                  />

                  <motion.span
                    animate={{
                      opacity:
                        mobileMenuOpen
                          ? 0
                          : 1,
                      scaleX:
                        mobileMenuOpen
                          ? 0
                          : 1,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      block
                      w-[24px]
                      h-[2px]
                      bg-white
                    "
                  />

                  <motion.span
                    animate={{
                      rotate:
                        mobileMenuOpen
                          ? -45
                          : 0,
                      y:
                        mobileMenuOpen
                          ? -7
                          : 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      block
                      w-[24px]
                      h-[2px]
                      bg-white
                    "
                  />
                </motion.button>
              </div>
            </div>

            {/* ======================================================
                MOBILE MENU
            ====================================================== */}

            <motion.div
              initial={false}
              animate={{
                height:
                  mobileMenuOpen
                    ? "auto"
                    : 0,

                opacity:
                  mobileMenuOpen
                    ? 1
                    : 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                lg:hidden
                overflow-hidden
                border-t
                border-white/10
              "
            >
              <div
                className="
                  px-4
                  pt-3
                  pb-5
                  sm:px-5
                  sm:pt-4
                  sm:pb-6
                "
              >
                <MobileNavLink
                  href="/"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  Home
                </MobileNavLink>

                {/* MOBILE SERVICES */}

                <div
                  className="
                    border-b
                    border-white/10
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
                      w-full
                      flex
                      items-center
                      justify-between
                      py-3.5
                      text-[16px]
                      font-medium
                      text-white
                    "
                  >
                    <span>
                      Services
                    </span>

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
                      className="text-xs"
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
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-2">
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

                <MobileNavLink
                  href="/#"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  About
                </MobileNavLink>

                <MobileNavLink
                  href="/academy"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  Academy
                </MobileNavLink>

                <MobileNavLink
                  href="/blog"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  Blogs
                </MobileNavLink>

                <MobileNavLink
                  href="/connect"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  Connect
                </MobileNavLink>

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
                    y: 20,
                  }}
                  animate={{
                    opacity:
                      mobileMenuOpen
                        ? 1
                        : 0,

                    y:
                      mobileMenuOpen
                        ? 0
                        : 20,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                  }}
                  className="mt-5"
                >
                  <Link
                    href="https://wa.link/pxmrrm"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      gap-2.5
                      w-full
                      h-[52px]
                      rounded-full
                      border
                      border-white/30
                      bg-black/70
                      text-white
                      font-bold
                      text-[15px]
                      shadow-[0_0_30px_rgba(248,188,4,0.3)]
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-[#F8BC04]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="
                        h-[18px]
                        w-[18px]
                      "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.35-7.35 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.528-.74.417-1.173L6.506 3.9A1.125 1.125 0 0 0 5.416 3H4.5A2.25 2.25 0 0 0 2.25 5.25v1.5Z"
                      />
                    </svg>

                    Book A Enquiry Call
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
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
        y: -4,
        rotateX: 5,
        scale: 1.025,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className="
        transform-gpu
        perspective-[1000px]
      "
    >
      <Link
        href={href}
        target={
          external
            ? "_blank"
            : undefined
        }
        rel={
          external
            ? "noopener noreferrer"
            : undefined
        }
        className="
          relative
          inline-block
          text-white
          transition-colors
          duration-300
          hover:text-[#F8BC04]
        "
      >
        {children}

        {/* Magnetic underline */}

        <motion.span
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileHover={{
            width: "100%",
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            left-1/2
            -bottom-2
            h-[1px]
            -translate-x-1/2
            bg-[#F8BC04]
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
        px-5
        py-3.5
        text-[15px]
        text-white
        transition-all
        duration-300
        hover:text-[#F8BC04]
      "
    >
      {/* Moving hover light */}

      <motion.span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-full
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#F8BC04]/10
          to-transparent
          transition-all
          duration-500
          group-hover:left-full
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
        x: 6,
        scale: 0.99,
      }}
    >
      <Link
        href={href}
        target={
          external
            ? "_blank"
            : undefined
        }
        rel={
          external
            ? "noopener noreferrer"
            : undefined
        }
        onClick={onClick}
        className="
          block
          py-3.5
          text-[16px]
          font-medium
          text-white
          border-b
          border-white/10
          transition-colors
          duration-300
          hover:text-[#F8BC04]
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
        x: 5,
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="
          block
          py-2.5
          pl-4
          text-[15px]
          text-white/70
          transition-colors
          duration-300
          hover:text-[#F8BC04]
        "
      >
        {children}
      </Link>
    </motion.div>
  );
}