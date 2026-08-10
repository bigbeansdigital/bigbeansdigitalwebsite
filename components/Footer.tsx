"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
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
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
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
          aria-hidden="true"
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

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Internship", href: "/internship" },
    { label: "Academy", href: "/academy" },
    { label: "Connect", href: "/connect" },
  ];

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

  const industries = [
    "Real Estate",
    "Finance",
    "Lifestyle",
    "Healthcare",
    "Manufacturing",
    "E-Commerce",
    "Education",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#171717] text-white">
      {/* TOP ACCENT */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-[3px] origin-left bg-[#F8BC04]"
      />

      {/* VERY SUBTLE TEXTURE — NO SIDE GLOW */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-9 sm:px-6 sm:py-11 lg:px-8 lg:py-12">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.45fr_1.3fr_0.8fr_1fr_0.85fr] xl:gap-7 2xl:gap-10">
          {/* =====================================================
              COLUMN 1 — BRAND
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="inline-block"
            >
              <Image
                src="/bbdlogo.png"
                alt="BIGBEANS DIGITAL"
                width={220}
                height={70}
                className="h-auto w-[205px] sm:w-[220px]"
              />
            </motion.div>

            <p className="mt-4 max-w-[410px] text-[14px] leading-6 text-gray-400 sm:text-[15px] sm:leading-6">
              Trusted digital growth partner helping
              startups, local businesses and brands
              scale through strategy, creativity and
              performance marketing.
            </p>

            {/* GOOGLE REVIEWS */}

            <motion.div
              whileHover={{ y: -3 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className="mt-5 inline-block rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[3px] text-gray-400">
                Google Reviews
              </h3>

              <div className="mt-1 flex items-center gap-3">
                <span className="text-4xl font-black leading-none text-white">
                  4.9
                </span>

                <span className="text-lg tracking-[1px] text-[#F8BC04]">
                  ★★★★★
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-400">
                Trusted by clients worldwide
              </p>
            </motion.div>

            {/* SOCIAL MEDIA */}

            <div className="mt-5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[3px] text-gray-500">
                Follow Us
              </p>

              <div className="flex gap-2.5">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.35,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.07,
                    }}
                    whileTap={{ scale: 0.92 }}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-400 transition-all duration-300 hover:border-[#F8BC04] hover:bg-[#F8BC04] hover:text-[#171717]"
                  >
                    <span className="transition-transform duration-300 group-hover:rotate-[-6deg]">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              COLUMN 2 — GET IN TOUCH
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

              <h3 className="text-xl font-bold sm:text-[21px]">
                Get In Touch
              </h3>
            </div>

            <div className="space-y-2">
              {/* EMAIL */}

              <motion.a
                href="mailto:connect.bigbeansdigital@gmail.com"
                whileHover={{ x: 4 }}
                className="group -ml-2 flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.035]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F8BC04]/10 text-[#F8BC04] transition-all duration-300 group-hover:bg-[#F8BC04] group-hover:text-[#171717]">
                  <Mail size={17} />
                </span>

                {/* EMAIL WILL STAY ON ONE LINE */}
                <span className="whitespace-nowrap text-[11px] text-gray-300 transition group-hover:text-white sm:text-[12px] 2xl:text-[13px]">
                  connect.bigbeansdigital@gmail.com
                </span>
              </motion.a>

              {/* PHONE */}

              <motion.a
                href="tel:+916289102537"
                whileHover={{ x: 4 }}
                className="group -ml-2 flex items-center gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.035]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F8BC04]/10 text-[#F8BC04] transition-all duration-300 group-hover:bg-[#F8BC04] group-hover:text-[#171717]">
                  <Phone size={17} />
                </span>

                <span className="text-sm text-gray-300 transition group-hover:text-white">
                  +91 62891 02537
                </span>
              </motion.a>

              {/* LOCATION */}

              <motion.div
                whileHover={{ x: 4 }}
                className="group -ml-2 flex items-center gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.035]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F8BC04]/10 text-[#F8BC04] transition-all duration-300 group-hover:bg-[#F8BC04] group-hover:text-[#171717]">
                  <MapPin size={17} />
                </span>

                <span className="whitespace-nowrap text-[13px] text-gray-300 transition group-hover:text-white">
                  kolkata,West Bengal,India
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* =====================================================
              COLUMN 3 — QUICK LINKS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

              <h3 className="text-xl font-bold sm:text-[21px]">
                Quick Links
              </h3>
            </div>

            <ul className="space-y-0.5">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.05,
                    duration: 0.35,
                  }}
                >
                  <Link
                    href={item.href}
                    className="group -ml-3 flex items-center justify-between rounded-lg px-3 py-2 text-[14px] text-gray-400 transition-all duration-300 hover:bg-white/[0.035] hover:text-[#F8BC04]"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={14}
                      className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* =====================================================
              COLUMN 4 — OUR SERVICES
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.24,
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

              <h3 className="text-xl font-bold sm:text-[21px]">
                Our Services
              </h3>
            </div>

            <ul className="space-y-0.5">
              {serviceLinks.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.25 + index * 0.05,
                    duration: 0.35,
                  }}
                >
                  <Link
                    href={item.href}
                    className="group -ml-3 flex items-center justify-between rounded-lg px-3 py-2 text-[14px] text-gray-400 transition-all duration-300 hover:bg-white/[0.035] hover:text-[#F8BC04]"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={14}
                      className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* =====================================================
              COLUMN 5 — INDUSTRIES
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.32,
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-[#F8BC04]" />

              <h3 className="text-xl font-bold sm:text-[21px]">
                Industries
              </h3>
            </div>

            <ul className="space-y-0.5">
              {industries.map((industry, index) => (
                <motion.li
                  key={industry}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.045,
                    duration: 0.35,
                  }}
                >
                  <Link
                    href="/services/social-media-marketing"
                    className="group -ml-3 flex items-center justify-between rounded-lg px-3 py-2 text-[14px] text-gray-400 transition-all duration-300 hover:bg-white/[0.035] hover:text-[#F8BC04]"
                  >
                    <span>{industry}</span>

                    <ArrowUpRight
                      size={14}
                      className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 border-t border-white/10 pt-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* LEGAL */}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 sm:text-[13px]">
              <Link
                  href="/privacypolicy"
                  className="cursor-pointer transition duration-300 hover:text-[#F8BC04]"
                >
                  Privacy Policy
                </Link>

              <span className="h-1 w-1 rounded-full bg-gray-700" />

              <span className="cursor-pointer transition duration-300 hover:text-[#F8BC04]">
                Sitemap
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-700" />

              <span className="cursor-pointer transition duration-300 hover:text-[#F8BC04]">
                Terms & Conditions For Current Clients
              </span>
            </div>

            {/* COPYRIGHT */}

            <div className="text-xs text-gray-400 sm:text-[13px] lg:text-right">
              © 2026 BIGBEANS DIGITAL | All Rights Reserved
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ACCENT */}

      <div className="relative h-[3px] overflow-hidden bg-[#F8BC04]/10">
        <motion.div
          animate={{
            x: ["-100%", "400%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-1/4 bg-[#F8BC04]"
        />
      </div>
    </footer>
  );
}