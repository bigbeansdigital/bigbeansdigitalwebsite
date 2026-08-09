"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Source: :contentReference[oaicite:0]{index=0}

export default function Connect() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="overflow-hidden bg-[#FFFFFF]">

      {/* Breadcrumb */}
      <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto flex w-full max-w-7xl justify-center px-3 sm:px-5">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-3 text-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-[14px] lg:px-8 lg:py-4 lg:text-base">
            <Link
              href="/"
              className="text-gray-700 transition-colors duration-300 hover:text-[#F8BC04]"
            >
              Home
            </Link>

            <span className="text-[#F8BC04] text-lg">→</span>

            <span className="font-semibold text-black">
              Connect With Big Beans Digital
            </span>
          </div>
        </div>
      </section>

      {/* =========================
            CONTACT SECTION
      ========================= */}

      <section
        id="contact-form"
        className="relative overflow-hidden bg-white py-5 sm:py-5 lg:py-5"
      >
        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8BC04]/20 blur-[150px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">

          <div className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7">

            {/* =========================
                  LEFT CONTACT CARD
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full flex-col overflow-hidden rounded-[24px] bg-[#171717] p-5 text-white sm:rounded-[30px] sm:p-7 md:p-9 lg:rounded-[34px] lg:p-10"
            >

              {/* Card Header */}

              <div>

                <div className="w-full">

                  {/* Company */}
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[24px] text-[#F8BC04]">
                      🏛️
                    </div>

                    <h3 className="text-[18px] font-bold text-white">
                      A BRAND OF MADHUSHREE DIGITAL MEDIA
                    </h3>
                  </div>

                  {/* CIN */}
                  <div className="flex gap-4 border-b border-white/10 py-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[22px] text-[#F8BC04]">
                      📄
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-[14px] font-bold text-white">
                        CIN
                      </h4>

                      <p className="mt-1 text-[15px] leading-6 text-white/70">
                        U####################
                        <br />
                        U####################
                      </p>
                    </div>
                  </div>

                  {/* GST */}
                  <div className="flex gap-4 border-b border-white/10 py-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[22px] text-[#F8BC04]">
                      🧾
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-[14px] font-bold text-white">
                        GST
                      </h4>

                      <p className="mt-1 text-[15px] leading-6 text-white/70">
                        19CHSPB4848Q
                      </p>
                    </div>
                  </div>

                  {/* MSME */}
                  <div className="flex gap-4 pt-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[22px] text-[#F8BC04]">
                      🏢
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-[14px] font-bold text-white">
                        MSME Registration No.
                      </h4>

                      <p className="mt-1 text-[15px] leading-6 text-white/70">
                        UDYAM########
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Contact Details */}

              <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6 lg:mt-9">

                {/* Address */}

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group flex gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#F8BC04]/10 text-xl transition-all duration-300 group-hover:bg-[#F8BC04]">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      📍
                    </span>
                  </div>

                  <div className="min-w-0">

                    <h4 className="text-[15px] font-bold text-white sm:text-[16px]">
                      Office Address
                    </h4>

                    <p className="mt-1.5 text-[12px] leading-5 text-white/55 sm:text-[13px] sm:leading-6">
                      Ground Floor, G14, Alapan Apartment
                      <br />
                      Baguihati, Jora Mandir, Kolkata
                      <br />
                      West Bengal 700059
                    </p>

                  </div>

                </motion.div>

                {/* Email */}

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group flex gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#F8BC04]/10 text-xl transition-all duration-300 group-hover:bg-[#F8BC04]">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      ✉️
                    </span>
                  </div>

                  <div className="min-w-0">

                    <h4 className="text-[15px] font-bold text-white sm:text-[16px]">
                      Email Us
                    </h4>

                    <a
                      href="mailto:connect.bigbeans@gmail.com"
                      className="mt-1.5 block break-all text-[12px] text-white/55 transition-colors duration-300 hover:text-[#F8BC04] sm:text-[13px]"
                    >
                      connect.bigbeans@gmail.com
                    </a>

                  </div>

                </motion.div>

                {/* Phone */}

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group flex gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#F8BC04]/10 text-xl transition-all duration-300 group-hover:bg-[#F8BC04]">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      📞
                    </span>
                  </div>

                  <div className="min-w-0">

                    <h4 className="text-[15px] font-bold text-white sm:text-[16px]">
                      Call Us
                    </h4>

                    <a
                      href="tel:+916289102537"
                      className="mt-1.5 block text-[12px] text-white/55 transition-colors duration-300 hover:text-[#F8BC04] sm:text-[13px]"
                    >
                      +91 62891 02537
                    </a>

                  </div>

                </motion.div>

                {/* Working Hours */}

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group flex gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#F8BC04]/10 text-xl transition-all duration-300 group-hover:bg-[#F8BC04]">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      ⏰
                    </span>
                  </div>

                  <div className="min-w-0">

                    <h4 className="text-[15px] font-bold text-white sm:text-[16px]">
                      Working Hours
                    </h4>

                    <p className="mt-1.5 text-[12px] leading-5 text-white/55 sm:text-[13px] sm:leading-6">
                      Monday - Saturday
                      <br />
                      11:00 AM - 8:00 PM
                    </p>

                  </div>

                </motion.div>

              </div>

              {/* Quick Response */}

              <motion.div
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-6 rounded-[18px] border border-[#F8BC04]/10 bg-[#F8BC04]/10 p-4 sm:mt-8 sm:p-6"
              >

                <div className="flex items-center gap-2">

                  <span className="text-base">
                    ⚡
                  </span>

                  <h4 className="text-[14px] font-bold text-[#F8BC04] sm:text-[15px]">
                    Quick Response
                  </h4>

                </div>

                <p className="mt-2 text-[11px] leading-5 text-white/55 sm:text-[12px] sm:leading-6">
                  We usually respond to all enquiries within one business day.
                </p>

              </motion.div>

            </motion.div>


            {/* =========================
                  RIGHT CONSULTATION CARD
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-full flex-col overflow-hidden rounded-[24px] bg-[#F8BC04] p-5 text-[#171717] sm:rounded-[30px] sm:p-7 md:p-9 lg:rounded-[34px] lg:p-10"
            >

              {/* Decorative Glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/20 blur-[70px]" />

              <div className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-white/10 blur-[70px]" />

              {/* Header */}

              <div className="relative z-10">

                <span className="inline-flex rounded-full bg-[#171717] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white sm:px-5 sm:text-[10px]">
                  Let's Connect
                </span>

                <h2 className="mt-5 text-[30px] font-black leading-[1.05] tracking-[-0.03em] sm:mt-6 sm:text-[38px] md:text-[42px] lg:mt-6 lg:text-[44px]">
                  Let's Talk!
                </h2>

                <p className="mt-4 max-w-[470px] text-[13px] leading-5 text-[#171717]/65 sm:mt-5 sm:text-[14px] sm:leading-6 md:text-[15px] md:leading-7">
                  Tell us what you're looking to build, grow or improve. Choose the
                  area you'd like to discuss and connect with our team directly.
                </p>

              </div>

              {/* Consultation Options */}

              <div className="relative z-10 mt-6 space-y-4 sm:mt-8 sm:space-y-5 lg:mt-9">

                {/* Social Media Marketing */}

                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <h3 className="text-[15px] font-bold leading-tight sm:text-[17px]">
                    For Social Media Marketing
                  </h3>

                  <a
                    href="https://wa.me/916289102537?text=Hi%20BIGBEANS%20DIGITAL%2C%20I%20am%20interested%20in%20Social%20Media%20Marketing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2.5 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[11px] bg-white px-3 py-2.5 text-center text-[10px] font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 sm:px-4 sm:text-[11px] md:text-[12px]"
                  >

                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[11px] text-white">
                      ✓
                    </span>

                    <span className="min-w-0">
                      Get Consultation for Social Media Marketing
                    </span>

                    <span className="text-[#F8BC04] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </a>

                </motion.div>


                {/* End To End Branding */}

                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <h3 className="text-[15px] font-bold leading-tight sm:text-[17px]">
                    For End To End Branding
                  </h3>

                  <a
                    href="https://wa.me/916289102537?text=Hi%20BIGBEANS%20DIGITAL%2C%20I%20am%20interested%20in%20End%20To%20End%20Branding."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2.5 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[11px] bg-white px-3 py-2.5 text-center text-[10px] font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] sm:px-4 sm:text-[11px] md:text-[12px]"
                  >

                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[11px] text-white">
                      ✓
                    </span>

                    <span className="min-w-0">
                      Get Consultation for End To End Branding
                    </span>

                    <span className="text-[#F8BC04] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </a>

                </motion.div>


                {/* Website Development */}

                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <h3 className="text-[15px] font-bold leading-tight sm:text-[17px]">
                    For Website Development
                  </h3>

                  <a
                    href="https://wa.me/916289102537?text=Hi%20BIGBEANS%20DIGITAL%2C%20I%20am%20interested%20in%20Website%20Development."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2.5 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[11px] bg-white px-3 py-2.5 text-center text-[10px] font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 sm:px-4 sm:text-[11px] md:text-[12px]"
                  >

                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[11px] text-white">
                      ✓
                    </span>

                    <span className="min-w-0">
                      Get Consultation for Website Development
                    </span>

                    <span className="text-[#F8BC04] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </a>

                </motion.div>


                {/* Joining Our Team */}

                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <h3 className="text-[15px] font-bold leading-tight sm:text-[17px]">
                    For Joining Our Team
                  </h3>

                  <a
                    href="https://wa.me/916289102537?text=Hi%20BIGBEANS%20DIGITAL%2C%20I%20am%20interested%20in%20joining%20your%20team."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2.5 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[11px] bg-white px-3 py-2.5 text-center text-[10px] font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 sm:px-4 sm:text-[11px] md:text-[12px]"
                  >

                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[11px] text-white">
                      ✓
                    </span>

                    <span className="min-w-0">
                      Get Consultation for Joining Our Team
                    </span>

                    <span className="text-[#F8BC04] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </a>

                </motion.div>


                {/* Big Beans Academy */}

                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <h3 className="text-[15px] font-bold leading-tight sm:text-[17px]">
                    For Big Beans Academy
                  </h3>

                  <a
                    href="https://wa.me/916289102537?text=Hi%20BIGBEANS%20DIGITAL%2C%20I%20am%20interested%20in%20Big%20Beans%20Academy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2.5 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[11px] bg-white px-3 py-2.5 text-center text-[10px] font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] sm:px-4 sm:text-[11px] md:text-[12px]"
                  >

                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[11px] text-white">
                      ✓
                    </span>

                    <span className="min-w-0">
                      Get Consultation for Big Beans Academy
                    </span>

                    <span className="text-[#F8BC04] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </a>

                  <div className="mt-4 w-full rounded-[20px] bg-white p-5 shadow-[0_15px_35px_rgba(0,0,0,0.10)]">

                    <div className="flex items-center gap-3">

                      <span className="text-[20px]">🌐</span>

                      <h3 className="text-[18px] font-bold text-[#171717]">
                        Follow Us
                      </h3>

                    </div>

                    <p className="mt-3 text-[14px] leading-6 text-[#36506F]">
                      Stay connected for tips, updates, and success stories.
                    </p>

                    <div className="mt-4 flex items-center gap-3">

                      {/* Facebook */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-[#DCEAFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877F2] text-[18px] font-bold text-white">
                          f
                        </span>
                      </a>

                      {/* Instagram */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-[#DCEAFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#833AB4] text-[17px] font-bold text-white">
                          ◎
                        </span>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-[#DCEAFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-[#0A66C2] text-[13px] font-bold text-white">
                          in
                        </span>
                      </a>

                    </div>

                  </div>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================
            GOOGLE MAP
      ========================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="mx-auto mt-6 w-full overflow-hidden rounded-[20px] shadow-[0_25px_60px_rgba(0,0,0,0.12)] sm:mt-8 sm:rounded-[24px] md:mt-10 lg:mt-12 lg:rounded-[28px]"
      >

        <div className="relative h-[240px] w-full sm:h-[300px] md:h-[360px] lg:h-[430px] xl:h-[460px]">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0690777499103!2d88.4302524!3d22.613895499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41f6101e9088525%3A0xdb3387d1fd241561!2sBig%20Beans%20Digital%20%7C%20Best%20Website%20Development%20%26%20Digital%20Marketing%20Agency%20in%20UK%20%26%20India!5e0!3m2!1sen!2sin!4v1786303207503!5m2!1sen!2sin"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </div>

      </motion.div>


      {/* SERVICES SECTION */}

      <section className="overflow-hidden bg-white py-8 sm:py-10">

        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="mb-8 text-center sm:mb-10">

            <h2 className="text-[36px] font-bold leading-tight text-[#171717] sm:text-[44px] md:text-6xl">
              Our Core Services
            </h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "720px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mx-auto mt-1 h-[3px] w-[80vw] max-w-[720px] rounded-full bg-gradient-to-r from-transparent via-[#F8BC04] to-transparent"
            />

          </div>


          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7 xl:grid-cols-4 xl:gap-8">

            {/* CARD 1 */}

            <motion.div
              whileHover="hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[28px] bg-[#F8BC04] shadow-[0_20px_50px_rgba(248,188,4,.20)] transition-all duration-500 hover:-translate-y-3 hover:bg-white"
            >

              <div className="relative h-[180px] overflow-hidden bg-[#F8BC04] sm:h-[200px] lg:h-[220px]">

                <Image
                  src="/home/ourservice/bigbeansdigitalbranding.png"
                  alt="Branding"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-5 sm:p-6 lg:p-7">

                <h3 className="mb-4 text-[20px] font-bold text-[#171717]">
                  Branding
                </h3>

                <p className="mb-3 leading-5 text-black/75">
                  Strategic branding solutions for startups and businesses.
                </p>

                <Link
                  href="/services/branding"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F8BC04] hover:text-black sm:w-auto sm:px-10 lg:px-16"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>

              </div>

            </motion.div>


            {/* CARD 2 */}

            <motion.div
              whileHover="hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[28px] bg-[#171717] transition-all duration-500 hover:-translate-y-3 hover:bg-white"
            >

              <div className="relative h-[180px] overflow-hidden bg-[#171717] sm:h-[200px] lg:h-[220px]">

                <Image
                  src="home/ourservice/socialmedia.png"
                  alt="Social Media"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-5 sm:p-6 lg:p-7">

                <h3 className="mb-4 text-[20px] font-bold text-white transition-colors group-hover:text-[#171717]">
                  Digital Marketing
                </h3>

                <p className="mb-3 leading-5 text-white/70 transition-colors group-hover:text-black/75">
                  Build visibility, engagement and quality leads.
                </p>

                <Link
                  href="/services/social-media-marketing"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F8BC04] px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 sm:w-auto sm:px-10 lg:px-16"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>

              </div>

            </motion.div>


            {/* CARD 3 */}

            <motion.div
              whileHover="hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[28px] bg-[#F8BC04] shadow-[0_20px_50px_rgba(248,188,4,.20)] transition-all duration-500 hover:-translate-y-3 hover:bg-white"
            >

              <div className="relative h-[180px] overflow-hidden bg-[#F8BC04] sm:h-[200px] lg:h-[220px]">

                <Image
                  src="/home/ourservice/bigbeansdigitalwebsite.png"
                  alt="bigbeansdigitalwebsite"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-5 sm:p-6 lg:p-7">

                <h3 className="mb-4 text-[20px] font-bold text-[#171717]">
                  Website Development
                </h3>

                <p className="mb-3 leading-5 text-black/75">
                  Premium websites designed for business growth.
                </p>

                <Link
                  href="/services/website-development"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F8BC04] hover:text-black sm:w-auto sm:px-10 lg:px-16"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>

              </div>

            </motion.div>


            {/* CARD 4 */}

            <motion.div
              whileHover="hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[28px] bg-[#171717] transition-all duration-500 hover:-translate-y-3 hover:bg-white"
            >

              <div className="relative h-[180px] overflow-hidden bg-[#171717] sm:h-[200px] lg:h-[220px]">

                <Image
                  src="/home/ourservice/bigbeansdigitalperformancemarketing.png"
                  alt="bigbeansdigitalperformancemarketing"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-5 sm:p-6 lg:p-7">

                <h3 className="mb-4 text-[20px] font-bold text-white transition-colors group-hover:text-[#171717]">
                  Performance Marketing
                </h3>

                <p className="mb-3 leading-5 text-white/70 transition-colors group-hover:text-black/75">
                  Professional creatives for every marketing platform.
                </p>

                <Link
                  href="/services/google-ads-meta-ads"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F8BC04] px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 sm:w-auto sm:px-10 lg:px-16"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* FAQ SECTION */}

      <section className="bg-white py-8 sm:py-10">

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

          {/* HEADER */}

          <div className="relative mb-10 text-center sm:mb-12 lg:mb-16">

            <div
              className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                h-16
                w-16
                sm:h-24
                sm:w-24
                rounded-full
                bg-[#F8BC04]/35
              "
            />

            <p
              className="
                relative
                text-sm
                font-semibold
                uppercase
                tracking-[6px]
                text-gray-500
              "
            >
              CONTACT FAQS
            </p>

            <h2
              className="
                relative
                mt-3
                text-[36px]
                leading-[1.08]
                font-black
                text-[#171717]
                sm:text-5xl
                md:text-6xl
              "
            >
              Frequently Asked{" "}
              <span className="text-[#F8BC04]">
                Questions
              </span>
            </h2>

          </div>

          {/* FAQ GRID */}

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">

            {[
              {
                q: "How can I contact BIGBEANS DIGITAL?",
                a: "You can easily contact BIGBEANS DIGITAL through our contact form, email, phone, or WhatsApp. Whether you're looking for the Best Social Media Marketing  Agency for Startups or need expert guidance for your business, our team is ready to help."
              },
              {
                q: "Can I book a free consultation before starting my project?",
                a: "Yes. We offer a free consultation to understand your business goals, target audience, and marketing requirements. Our experts will recommend the best Social Media Marketing  Services, Website Development, Branding, or Social Media Marketing strategy for your business."
              },
              {
                q: "Which services can I inquire about through the contact page?",
                a: "You can contact us for Social Media Marketing , Social Media Marketing, Website Development, Logo Design, Branding, Google Ads, Meta Ads, Performance Marketing, and other business growth solutions tailored to startups and growing businesses."
              },
              {
                q: "Do you work with businesses outside India?",
                a: "Yes. BIGBEANS DIGITAL works with startups and businesses across London, India, USA, and Dubai. Our team provides remote consultations and Social Media Marketing  services to clients worldwide."
              },
              {
                q: "How quickly will your team respond to my inquiry?",
                a: "We aim to respond to all inquiries within 24 business hours. Whether you're looking to Hire a Social Media Marketing  Agency, discuss a new project, or request a quote, our team ensures prompt and professional communication."
              },
              {
                q: "Can startups and small businesses contact BIGBEANS DIGITAL?",
                a: "Absolutely. We specialize in helping startups, entrepreneurs, and small businesses build their online presence through affordable and result-driven Social Media Marketing  Services, Website Development, and Branding Solutions."
              },
              {
                q: "Do you provide customized marketing solutions?",
                a: "Yes. Every business is unique, so we create customized strategies based on your industry, business goals, target audience, and budget. Our tailored Marketing Solutions help maximize ROI and long-term business growth."
              },
              {
                q: "Can I request a quotation for my project?",
                a: "Yes. Simply share your project requirements through our contact form, and our team will prepare a customized proposal with recommended services, estimated timeline, and pricing."
              },
              {
                q: "Why should I choose BIGBEANS DIGITAL?",
                a: "BIGBEANS DIGITAL is a Best Social Media Marketing  Agency for Startups offering end-to-end solutions including Social Media Marketing, Website Development, Branding, Google Ads, Meta Ads, and Performance Marketing. We focus on measurable growth, transparency, and long-term client success."
              },
              {
                q: "How do I get started with BIGBEANS DIGITAL?",
                a: "Getting started is simple. Contact our team, schedule your free consultation, discuss your business goals, and let our experts create a customized digital growth strategy that helps your business attract more customers and achieve sustainable success."
              }
            ].map((faq, index) => (

              <motion.div
                key={index}
                layout
                className="
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-gray-300
                  bg-white
                "
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-4
                    text-left
                    sm:p-6
                  "
                >

                  <span
                    className="
                      min-w-0
                      pr-2
                      text-[14px]
                      font-semibold
                      leading-5
                      text-[#171717]
                      sm:text-[16px]
                      sm:leading-6
                    "
                  >
                    {faq.q}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#171717]
                      text-lg
                      text-white
                      sm:h-10
                      sm:w-10
                      sm:text-xl
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
                    className="px-4 pb-5 sm:px-6 sm:pb-6"
                  >

                    <p className="leading-relaxed text-gray-600">
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

      <section className="bg-[#ffffff] py-8 sm:py-10">

        <div
          className="
            mx-auto
            max-w-[1400px]
            px-4
            sm:px-6
          "
        >

          <div
            className="
              grid
              items-center
              gap-8
              rounded-[28px]
              border
              border-gray-200
              bg-white
              p-5
              sm:gap-10
              sm:rounded-[36px]
              sm:p-8
              lg:grid-cols-2
              lg:gap-12
              lg:rounded-[40px]
              lg:p-16
            "
          >

            {/* LEFT */}

            <div>

              <p
                className="
                  mb-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[6px]
                  text-gray-500
                  sm:mb-6
                "
              >
                Global Presence
              </p>

              <h2
                className="
                  text-[36px]
                  font-black
                  leading-tight
                  text-[#171717]
                  sm:text-5xl
                  lg:text-6xl
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
                  mt-5
                  max-w-[650px]
                  text-[15px]
                  leading-relaxed
                  text-gray-600
                  sm:mt-8
                  sm:text-lg
                "
              >
                BIGBEANS DIGITAL serves businesses across India and international markets.
                Our strategies are built for local relevance and global scalability.
              </p>

              {/* LOCATIONS */}

              <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:gap-10">

                <div className="border-b border-black/20 pb-8 sm:border-b-0 sm:border-r sm:border-black/20 sm:pb-0 sm:pr-6 lg:pr-10">

                  <h3 className="text-xl font-bold">
                    In India
                  </h3>

                  <div className="mb-5 mt-2 h-[2px] w-20 bg-[#F8BC04]"></div>

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

                  <h3 className="text-xl font-bold">
                    International Presence
                  </h3>

                  <div className="mb-5 mt-2 h-[2px] w-20 bg-[#F8BC04]"></div>

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
                className="h-auto w-full"
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
                  h-4
                  w-4
                  rounded-full
                  bg-[#F8BC04]
                  left-[67%]
                  top-[42%]
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
                  h-4
                  w-4
                  rounded-full
                  bg-[#F8BC04]
                  left-[44%]
                  top-[27%]
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
                  h-4
                  w-4
                  rounded-full
                  bg-[#F8BC04]
                  left-[18%]
                  top-[28%]
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
                  h-4
                  w-4
                  rounded-full
                  bg-[#F8BC04]
                  left-[47%]
                  top-[50%]
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
                  h-4
                  w-4
                  rounded-full
                  bg-[#F8BC04]
                  left-[74%]
                  top-[54%]
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
                  h-4
                  w-4
                  rounded-full
                  bg-[#F8BC04]
                  left-[84%]
                  top-[65%]
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

      <section className="relative overflow-hidden bg-[#ffffff] py-14 sm:py-20 lg:py-24">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div
            className="
              relative
              mx-auto
              max-w-7xl
              overflow-hidden
              rounded-[28px]
              bg-[#171717]
              px-5
              py-10
              sm:rounded-[36px]
              sm:px-8
              sm:py-12
              md:px-16
              md:py-16
              lg:rounded-[40px]
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
                gap-7
                sm:gap-10
                lg:flex-row
              "
            >

              {/* Left */}

              <div className="w-full">

                <h2
                  className="
                    max-w-3xl
                    text-[32px]
                    font-black
                    leading-[1.12]
                    text-white
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Ready To Turn Clicks Into
                  <span className="text-[#F8BC04]">
                    {" "}Real Business Growth?
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-[15px]
                    leading-7
                    text-white/80
                    sm:mt-6
                    sm:text-lg
                    sm:leading-8
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
                  w-full
                  rounded-full
                  bg-[#F8BC04]
                  px-7
                  py-4
                  text-center
                  text-lg
                  font-bold
                  text-[#171717]
                  shadow-[0_20px_50px_rgba(248,188,4,0.35)]
                  transition-all
                  duration-300
                  sm:w-auto
                  sm:whitespace-nowrap
                  sm:px-10
                  sm:py-5
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


      {/* =========================
            SITEMAP SECTION
      ========================= */}

      <section className="w-full bg-white py-5 sm:py-6 md:py-5">

        <div className="mx-auto w-full max-w-[1650px] px-4 sm:px-7 md:px-8 lg:px-10">

          {/* Heading */}

          <h2
            className="
              mb-5
              text-[24px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#171717]

              sm:mb-7
              sm:text-[30px]

              md:text-[34px]

              lg:text-[38px]

              xl:text-[42px]
            "
          >
            Best Social Media Marketing Agency | Big Beans Digital
          </h2>


          {/* Sitemap Links */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-3

              sm:gap-x-4
              sm:gap-y-3.5

              md:gap-x-4
              md:gap-y-4

              lg:gap-x-5
              lg:gap-y-4
            "
          >

            {[
              {
                title: "Best Social Media Marketing Agency in London",
                url: "/",
              },
              {
                title: "About Big Beans Digital Beast Social Media Marketing Agency",
                url: "/about",
              },
              {
                title: "Best Online Digital Marketing Course",
                url: "/academy",
              },
              {
                title: "Best Social Media Marketing Agency | Big Beans Digital | Blog",
                url: "/blog",
              },
              {
                title: "Best Social Media Marketing Agency | Big Beans Digital | Connect",
                url: "/connect",
              },
              {
                title: "Best Social Media Marketing Agency | Big Beans Digital | Courses",
                url: "/courses",
              },

              {
                title: "Best Social Media Marketing Agency | Big Beans Digital | Internship",
                url: "/internship",
              },
              {
                title: "Best Social Media Marketing Agency | Big Beans Digital | Our Work",
                url: "/our-work",
              },
              {
                title: "Best Branding Agency for Startups",
                url: "/services/branding",
              },
              {
                title: "Best Performance Marketing Agency",
                url: "/services/google-ads-meta-ads",
              },
              {
                title: "Big Beans Digital Best Logo Designing Agency",
                url: "/services/logo-designing",
              },
              {
                title: "Big Beans Digital Best Social Media Marketing Agency",
                url: "/services/social-media-marketing",
              },
              {
                title: "Big Beans Digital Best Website Development Agency",
                url: "/services/website-development",
              },
            ].map((page) => (

              <Link
                key={page.url}
                href={page.url}
                className="
                  group
                  inline-flex
                  w-fit
                  max-w-full
                  items-center
                  gap-2
                  rounded-full
                  bg-[#FFF4C9]
                  px-4
                  py-2
                  text-[13px]
                  font-medium
                  leading-none
                  text-[#171717]
                  no-underline
                  transition-all
                  duration-200

                  hover:bg-[#F8BC04]
                  hover:text-[#171717]

                  sm:px-4
                  sm:py-2
                  sm:text-[14px]

                  md:px-4
                  md:py-2
                  md:text-[14px]

                  lg:px-5
                  lg:py-2.5
                  lg:text-[15px]
                "
              >

                {/* External Link Icon */}

                <span
                  className="
                    flex
                    h-[15px]
                    w-[15px]
                    shrink-0
                    items-center
                    justify-center
                    text-[#F8BC04]
                    transition-colors
                    duration-200
                    group-hover:text-[#171717]

                    sm:h-[16px]
                    sm:w-[16px]
                  "
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                    aria-hidden="true"
                  >

                    <path
                      d="M14 5H19V10"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M10 14L19 5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M19 14V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H10"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                  </svg>

                </span>

                {/* Link Text */}

                <span className="min-w-0 break-words">
                  {page.title}
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}