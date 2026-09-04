"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================================================================
   FOOTER ENTRY ANIMATION
================================================================ */

const footerEntry = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.97,
    rotateX: -8,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,

    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ================================================================
   COLUMN ENTRY ANIMATION
================================================================ */

const columnEntry = {
  hidden: {
    opacity: 0,
    y: 35,
    rotateX: -8,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,

    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ================================================================
   LIST ANIMATION
================================================================ */

const listContainer = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.055,
    },
  },
};

const listItem = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ================================================================
   FOOTER
================================================================ */

export default function Footer() {
  /* ============================================================
     SOCIAL ICONS
  ============================================================ */

  const socialIcons = [
    {
      label: "Instagram",
      href: "#",

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[18px] w-[18px]"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
          />

          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },

    {
      label: "Facebook",
      href: "#",

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[18px] w-[18px]"
        >
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.29-.04-1.28-.13-2.43-.13-2.4 0-4.04 1.46-4.04 4.15V10H7.5v3h2.73v8h3.27Z" />
        </svg>
      ),
    },

    {
      label: "LinkedIn",
      href: "#",

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[18px] w-[18px]"
        >
          <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.2h3.8V21H3.3V9.2Zm6.2 0h3.6v1.61h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V21h-3.8v-5.67c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21H9.5V9.2Z" />
        </svg>
      ),
    },

    {
      label: "Google",
      href: "#",

      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
        >
          <path
            fill="#4285F4"
            d="M21.35 12.23c0-.72-.06-1.25-.2-1.81H12v3.44h5.36c-.11.86-.71 2.16-2.05 3.03l-.02.12 2.98 2.31.21.02c1.94-1.79 3.07-4.43 3.07-7.11Z"
          />

          <path
            fill="#34A853"
            d="M12 21.5c2.61 0 4.8-.86 6.4-2.34l-3.05-2.37c-.82.57-1.92.97-3.35.97-2.55 0-4.71-1.68-5.49-4.01l-.11.01-3.1 2.4-.04.11C4.85 19.36 8.2 21.5 12 21.5Z"
          />

          <path
            fill="#FBBC05"
            d="M6.51 13.75A5.76 5.76 0 0 1 6.2 12c0-.61.11-1.2.3-1.75l-.01-.12-3.14-2.44-.1.05A9.62 9.62 0 0 0 2.5 12c0 1.54.37 2.99 1.03 4.26l2.98-2.31Z"
          />

          <path
            fill="#EA4335"
            d="M12 6.24c1.82 0 3.07.79 3.78 1.45l2.76-2.69C16.79 3.43 14.61 2.5 12 2.5c-3.8 0-7.15 2.14-8.75 5.24l3.24 2.51C7.29 7.92 9.45 6.24 12 6.24Z"
          />
        </svg>
      ),
    },
  ];

  /* ============================================================
     QUICK LINKS
  ============================================================ */

  const quickLinks = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },

    {
      label: "Blogs",
      href: "/blog",
    },

    {
      label: "Internship",
      href: "/internship",
    },

    {
      label: "Academy",
      href: "/academy",
    },

    {
      label: "Connect",
      href: "/connect",
    },
  ];

  /* ============================================================
     SERVICES
  ============================================================ */

  const serviceLinks = [
    {
      label: "Social Media Marketing",
      href: "/services/social-media-marketing",
    },

    {
      label: "Website Development",
      href: "/services/website-development",
    },

    {
      label: "Branding",
      href: "/services/branding",
    },

    {
      label: "Logo Designing",
      href: "/services/logo-designing",
    },

    {
      label: "Digital Ads",
      href: "/services/google-ads-meta-ads",
    },
  ];

  /* ============================================================
     INDUSTRIES
  ============================================================ */

  const industries = [
    "Real Estate",
    "Finance",
    "Lifestyle",
    "Healthcare",
    "Manufacturing",
    "E-Commerce",
    "Education",
  ];

  /* ============================================================
     LOCATIONS
  ============================================================ */

  const locations = [
    "Kolkata",
    "London",
    "Mumbai",
  ];

  /* ============================================================
     RETURN
  ============================================================ */

  return (
    <motion.footer
      variants={footerEntry}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.05,
      }}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#000000]/[70%]
        text-white
      "
      style={{
        backgroundColor: "#000000",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        filter: "none",
      }}
    >

      {/* ==========================================================
          MAIN CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]
          px-5
          py-14
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >

        {/* ========================================================
            MAIN GRID
        ======================================================== */}

        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-[1.45fr_1.3fr_0.8fr_1fr_0.85fr_0.75fr]
            xl:gap-7
            2xl:gap-10
          "
        >

          {/* ======================================================
              BRAND COLUMN
          ====================================================== */}

          <motion.div
            variants={columnEntry}
            className="
              transform-gpu
              perspective-[1200px]
            "
          >

            {/* LOGO */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
                rotateY: -25,
                scale: 0.85,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
              }}

              viewport={{
                once: true,
                amount: 0.1,
              }}

              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}

              whileHover={{
                y: -5,
                rotateY: -6,
                rotateX: 3,
                scale: 1.02,
              }}

              className="
                inline-block
                transform-gpu
              "
            >

              <Image
                src="/bbdlogo.png"
                alt="Big Beans Digital"
                width={220}
                height={70}
                priority
                className="
                  h-auto
                  w-[205px]
                  sm:w-[220px]
                "
              />

            </motion.div>


            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.15,
                duration: 0.55,
              }}

              className="
                mt-5
                max-w-[410px]
                text-[14px]
                leading-6
                text-white/70
                sm:text-[15px]
              "
            >
              Trusted digital growth partner helping
              startups, local businesses and brands
              scale through strategy, creativity and
              performance marketing.
            </motion.p>


            {/* ====================================================
                GOOGLE REVIEWS
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.94,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.25,
                duration: 0.6,
              }}

              whileHover={{
                y: -5,
                scale: 1.02,
              }}

              className="
                mt-6
                inline-block
                rounded-2xl
                border
                border-white/15
                bg-transparent
                px-5
                py-4
                transform-gpu
              "
            >

              <h3
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-white/60
                "
              >
                Google Reviews
              </h3>


              <div
                className="
                  mt-1
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    text-4xl
                    font-black
                    leading-none
                    text-white
                  "
                >
                  4.9
                </span>


                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                  }}

                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}

                  className="
                    text-lg
                    tracking-[1px]
                    text-[#F8BC04]
                  "
                >
                  ★★★★★
                </motion.span>

              </div>


              <p
                className="
                  mt-1
                  text-xs
                  text-white/60
                "
              >
                Trusted by clients worldwide
              </p>

            </motion.div>


            {/* ====================================================
                FOLLOW US
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.35,
                duration: 0.55,
              }}

              className="mt-6"
            >

              <p
                className="
                  mb-3
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-white/60
                "
              >
                Follow Us
              </p>


              <div className="flex gap-2.5">

                {socialIcons.map(
                  (social, index) => (

                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}

                      initial={{
                        opacity: 0,
                        y: 15,
                        rotateY: -15,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                        rotateY: 0,
                      }}

                      viewport={{
                        once: true,
                      }}

                      transition={{
                        delay:
                          0.4 +
                          index * 0.08,
                        duration: 0.45,
                      }}

                      whileHover={{
                        y: -6,
                        rotateY: 10,
                        rotateX: -5,
                        scale: 1.08,
                      }}

                      whileTap={{
                        scale: 0.9,
                      }}

                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/15
                        bg-transparent
                        text-white
                        transform-gpu
                        transition-all
                        duration-300
                        hover:border-[#F8BC04]
                        hover:bg-[#F8BC04]
                        hover:text-black
                      "
                    >
                      {social.icon}
                    </motion.a>

                  )
                )}

              </div>

            </motion.div>

          </motion.div>


          {/* ======================================================
              GET IN TOUCH
          ====================================================== */}

          <motion.div
            variants={columnEntry}
            className="
              transform-gpu
              perspective-[1200px]
            "
          >

            <FooterHeading>
              Get In Touch
            </FooterHeading>


            <div className="space-y-2">

              <ContactItem
                href="mailto:connect.bigbeansdigital@gmail.com"
                icon={<Mail size={17} />}
              >

                <span
                  className="
                    whitespace-nowrap
                    text-[11px]
                    text-white/75
                    sm:text-[12px]
                    2xl:text-[13px]
                  "
                >
                  connect.bigbeansdigital@gmail.com
                </span>

              </ContactItem>


              <ContactItem
                href="tel:+916289102537"
                icon={<Phone size={17} />}
              >

                <span
                  className="
                    text-sm
                    text-white/75
                  "
                >
                  +91 62891 02537
                </span>

              </ContactItem>


              <motion.div
                whileHover={{
                  x: 6,
                }}

                className="
                  group
                  -ml-2
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  p-2
                "
              >

                <motion.span
                  whileHover={{
                    rotateY: 12,
                    rotateX: -6,
                    scale: 1.05,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}

                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/15
                    bg-transparent
                    text-white
                    transition-all
                    duration-300
                    group-hover:border-[#F8BC04]
                    group-hover:bg-[#F8BC04]
                    group-hover:text-black
                  "
                >
                  <MapPin size={17} />
                </motion.span>


                <span
                  className="
                    whitespace-nowrap
                    text-[13px]
                    text-white/75
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  Kolkata, West Bengal, India
                </span>

              </motion.div>

            </div>

          </motion.div>


          {/* ======================================================
              QUICK LINKS
          ====================================================== */}

          <motion.div
            variants={columnEntry}
          >

            <FooterHeading>
              Quick Links
            </FooterHeading>


            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="space-y-0.5"
            >

              {quickLinks.map(
                (item) => (

                  <motion.li
                    key={item.label}
                    variants={listItem}
                  >

                    <FooterLink
                      href={item.href}
                    >
                      {item.label}
                    </FooterLink>

                  </motion.li>

                )
              )}

            </motion.ul>

          </motion.div>


          {/* ======================================================
              OUR SERVICES
          ====================================================== */}

          <motion.div
            variants={columnEntry}
          >

            <FooterHeading>
              Our Services
            </FooterHeading>


            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="space-y-0.5"
            >

              {serviceLinks.map(
                (item) => (

                  <motion.li
                    key={item.label}
                    variants={listItem}
                  >

                    <FooterLink
                      href={item.href}
                    >
                      {item.label}
                    </FooterLink>

                  </motion.li>

                )
              )}

            </motion.ul>

          </motion.div>


          {/* ======================================================
              INDUSTRIES
          ====================================================== */}

          <motion.div
            variants={columnEntry}
          >

            <FooterHeading>
              Industries
            </FooterHeading>


            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="space-y-0.5"
            >

              {industries.map(
                (industry) => (

                  <motion.li
                    key={industry}
                    variants={listItem}
                  >

                    <FooterLink
                      href="/services/social-media-marketing"
                    >
                      {industry}
                    </FooterLink>

                  </motion.li>

                )
              )}

            </motion.ul>

          </motion.div>


          {/* ======================================================
              LOCATION
          ====================================================== */}

          <motion.div
            variants={columnEntry}
          >

            <FooterHeading>
              Location
            </FooterHeading>


            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="space-y-0.5"
            >

              {locations.map(
                (location) => (

                  <motion.li
                    key={location}
                    variants={listItem}
                  >

                    <FooterLink
                      href="#"
                    >
                      {location}
                    </FooterLink>

                  </motion.li>

                )
              )}

            </motion.ul>

          </motion.div>

        </div>


        {/* ========================================================
            BOTTOM BAR
        ======================================================== */}

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
            amount: 0.1,
          }}

          transition={{
            duration: 0.65,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            mt-12
            border-t
            border-white/10
            pt-6
            lg:mt-16
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* ====================================================
                LEGAL LINKS
            ==================================================== */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2
                text-xs
                text-white/60
                sm:text-[13px]
              "
            >

              <FooterLegalLink
                href="/privacypolicy"
              >
                Privacy Policy
              </FooterLegalLink>


              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#F8BC04]
                "
              />


              <FooterLegalLink
                href="/sitemap"
              >
                SiteMap
              </FooterLegalLink>


              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#F8BC04]
                "
              />


              <span
                className="
                  cursor-pointer
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Terms & Conditions For Current Clients
              </span>

            </div>


            {/* ====================================================
                COPYRIGHT
            ==================================================== */}

            <motion.div
              whileHover={{
                x: -3,
              }}

              className="
                text-xs
                text-white/60
                sm:text-[13px]
                lg:text-right
              "
            >
              © 2026 BIGBEANS DIGITAL | All Rights Reserved
            </motion.div>

          </div>

        </motion.div>

      </div>

    </motion.footer>
  );
}


/* ================================================================
   FOOTER HEADING
================================================================ */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.5,
      }}

      className="
        mb-6
        flex
        items-center
        gap-3
      "
    >

      <motion.span
        initial={{
          height: 0,
        }}

        whileInView={{
          height: 28,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.45,
        }}

        className="
          w-1
          rounded-full
          bg-[#F8BC04]
        "
      />


      <h3
        className="
          text-xl
          font-bold
          text-white
          sm:text-[21px]
        "
      >
        {children}
      </h3>

    </motion.div>
  );
}


/* ================================================================
   CONTACT ITEM
================================================================ */

function ContactItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}

      whileHover={{
        x: 6,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}

      className="
        group
        -ml-2
        flex
        min-w-0
        items-center
        gap-3
        rounded-xl
        p-2
      "
    >

      <motion.span
        whileHover={{
          rotateY: 12,
          rotateX: -6,
          scale: 1.05,
        }}

        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}

        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-white/15
          bg-transparent
          text-white
          transform-gpu
          transition-all
          duration-300
          group-hover:border-[#F8BC04]
          group-hover:bg-[#F8BC04]
          group-hover:text-black
        "
      >
        {icon}
      </motion.span>


      {children}

    </motion.a>
  );
}


/* ================================================================
   FOOTER LINK
================================================================ */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        x: 5,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >

      <Link
        href={href}

        className="
          group
          -ml-3
          flex
          items-center
          justify-between
          rounded-lg
          px-3
          py-2
          text-[14px]
          text-white/65
          transition-colors
          duration-300
          hover:text-white
        "
      >

        <span>
          {children}
        </span>


        <motion.span
          initial={{
            opacity: 0,
            x: -5,
          }}

          whileHover={{
            opacity: 1,
            x: 0,
          }}

          className="
            flex
            items-center
            text-[#F8BC04]
          "
        >
          <ArrowUpRight size={14} />
        </motion.span>

      </Link>

    </motion.div>
  );
}


/* ================================================================
   LEGAL LINK
================================================================ */

function FooterLegalLink({
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
        transition-colors
        duration-300
        hover:text-white
      "
    >
      {children}
    </Link>
  );
}