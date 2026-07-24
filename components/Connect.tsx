"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Connect() {
  return (
    <main className="overflow-hidden bg-[#F8F8F8]">

      {/* =========================
            HERO SECTION
      ========================= */}

      <section className="relative overflow-hidden bg-[#F8F8F8] pt-12 pb-16">

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[160px]"
        />

        {/* Decorative Rings */}

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-20 top-20 h-[320px] w-[320px] rounded-full border border-[#F8BC04]/15"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-28 bottom-10 h-[420px] w-[420px] rounded-full border border-[#F8BC04]/10"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 70,
              scale: .96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: .9,
            }}
            className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#F8BC04] via-[#FFC41D] to-[#FFD85A] px-8 py-20 shadow-[0_40px_100px_rgba(248,188,4,.35)] lg:px-16 lg:py-24"
          >

            {/* Floating Shapes */}

            <motion.div
              animate={{
                y: [0, -16, 0],
                rotate: [0, 12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
            />

            <motion.div
              animate={{
                y: [0, 18, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
            />

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-10 top-10 h-28 w-28 rounded-full border border-white/25"
            />

            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-12 right-12 h-40 w-40 rounded-full border border-white/20"
            />

            <div className="relative z-20 flex flex-col items-center text-center">

              <motion.span
                initial={{
                  opacity: 0,
                  y: -30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .2,
                }}
                className="rounded-full border border-white/40 bg-white/15 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#171717] backdrop-blur-xl"
              >
                BIGBEANS DIGITAL
              </motion.span>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .35,
                }}
                className="mt-8 max-w-5xl text-[44px] font-black leading-tight text-[#171717] md:text-[72px] lg:text-[86px]"
              >
                Let's Create Something
                <span className="block">
                  Extraordinary
                  <span className="text-white"> Together</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .5,
                }}
                className="mt-8 max-w-3xl text-lg leading-9 text-[#171717]/80"
              >
                Whether you're looking for branding, website development,
                digital marketing, AI solutions, or creative strategies,
                our team is ready to help transform your ideas into
                meaningful digital experiences that drive real business growth.
              </motion.p>

                            {/* CTA Buttons */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .7,
                }}
                className="mt-12 flex flex-wrap justify-center gap-5"
              >

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                  whileTap={{
                    scale: .96,
                  }}
                  href="#contact-form"
                  className="rounded-full bg-[#171717] px-10 py-5 text-lg font-bold text-white shadow-[0_25px_60px_rgba(0,0,0,.18)] transition-all duration-500 hover:bg-white hover:text-[#171717]"
                >
                  Start Your Project →
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                  whileTap={{
                    scale: .96,
                  }}
                  href="tel:+919999999999"
                  className="rounded-full border-2 border-white/60 bg-white/20 px-10 py-5 text-lg font-bold text-[#171717] backdrop-blur-xl transition-all duration-500 hover:bg-white"
                >
                  Call Our Team
                </motion.a>

              </motion.div>

              {/* Breadcrumb */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: .8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: .9,
                }}
                whileHover={{
                  y: -3,
                }}
                className="mt-12 flex items-center gap-4 rounded-full bg-white px-8 py-5 shadow-[0_25px_60px_rgba(0,0,0,.16)]"
              >

                <a
                  href="/"
                  className="font-semibold text-gray-600 transition hover:text-[#F8BC04]"
                >
                  Home
                </a>

                <motion.span
                  animate={{
                    x: [0, 6, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="font-bold text-[#F8BC04]"
                >
                  →
                </motion.span>

                <span className="font-bold text-[#171717]">
                  Connect
                </span>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================
            CONTACT SECTION
      ========================= */}

      <section
        id="contact-form"
        className="relative overflow-hidden bg-white py-24 lg:py-32"
      >

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-32 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[170px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="grid gap-14 lg:grid-cols-[430px_1fr]">

            {/* ================= LEFT PANEL ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .8,
              }}
              className="rounded-[34px] bg-[#171717] p-10 text-white shadow-[0_35px_80px_rgba(0,0,0,.20)]"
            >

              <span className="inline-flex rounded-full bg-[#F8BC04] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#171717]">
                Contact Us
              </span>

              <h2 className="mt-8 text-[42px] font-black leading-tight">
                Let's Talk
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Whether you have a project in mind, need expert advice,
                or simply want to learn more about our services,
                we'd love to hear from you.
              </p>

              {/* Contact Details */}

              <div className="mt-12 space-y-8">

                {/* Address */}

                <div className="flex gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04]/10 text-3xl">
                    📍
                  </div>

                  <div>

                    <h4 className="text-xl font-bold">
                      Office Address
                    </h4>

                    <p className="mt-2 leading-8 text-gray-300">
                      Ground Floor,G14,Alapan Apartment
                      <br />
                      Baguihati,Jora Mandir,Kolkata
                      <br />
                        West Bengal 700059
                    </p>

                  </div>

                </div>

                {/* Email */}

                <div className="flex gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04]/10 text-3xl">
                    ✉️
                  </div>

                  <div>

                    <h4 className="text-xl font-bold">
                      Email Us
                    </h4>

                    <p className="mt-2 text-gray-300">
                      connect.bigbeans@gmail.com
                    </p>

                  </div>

                </div>

                {/* Phone */}

                <div className="flex gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04]/10 text-3xl">
                    📞
                  </div>

                  <div>

                    <h4 className="text-xl font-bold">
                      Call Us
                    </h4>

                    <p className="mt-2 text-gray-300">
                      +91 62891 02537
                    </p>

                  </div>

                </div>

                {/* Working Hours */}

                <div className="flex gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04]/10 text-3xl">
                    ⏰
                  </div>

                  <div>

                    <h4 className="text-xl font-bold">
                      Working Hours
                    </h4>

                    <p className="mt-2 leading-8 text-gray-300">
                      Monday - Saturday
                      <br />
                      11:00 AM - 8:00 PM
                    </p>

                  </div>

                </div>

              </div>

              {/* Bottom Badge */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="mt-12 rounded-2xl bg-[#F8BC04]/10 p-6"
              >

                <h4 className="text-xl font-bold text-[#F8BC04]">
                  ⚡ Quick Response
                </h4>

                <p className="mt-2 leading-8 text-gray-300">
                  We usually respond to all enquiries within one business day.
                </p>

              </motion.div>

            </motion.div>

                        {/* ================= RIGHT PANEL ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .8,
              }}
              className="rounded-[34px] bg-white p-10 shadow-[0_35px_80px_rgba(0,0,0,.08)]"
            >

              <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-sm font-bold text-[#F8BC04]">
                Get In Touch
              </span>

              <h2 className="mt-6 text-[46px] font-black leading-tight text-[#171717]">
                We'd Love To
                <span className="text-[#F8BC04]">
                  {" "}Hear From You
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">
                Fill in the form below and our team will get back to you as
                soon as possible to discuss your project or answer your
                questions.
              </p>

              {/* Form */}

              <form className="mt-12 space-y-6">

                {/* Row 1 */}

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="h-16 rounded-2xl border border-gray-200 bg-gray-50 px-6 outline-none transition-all duration-300 focus:border-[#F8BC04] focus:bg-white focus:ring-4 focus:ring-[#F8BC04]/20"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="h-16 rounded-2xl border border-gray-200 bg-gray-50 px-6 outline-none transition-all duration-300 focus:border-[#F8BC04] focus:bg-white focus:ring-4 focus:ring-[#F8BC04]/20"
                  />

                </div>

                {/* Row 2 */}

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="h-16 rounded-2xl border border-gray-200 bg-gray-50 px-6 outline-none transition-all duration-300 focus:border-[#F8BC04] focus:bg-white focus:ring-4 focus:ring-[#F8BC04]/20"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="h-16 rounded-2xl border border-gray-200 bg-gray-50 px-6 outline-none transition-all duration-300 focus:border-[#F8BC04] focus:bg-white focus:ring-4 focus:ring-[#F8BC04]/20"
                  />

                </div>

                {/* Service */}

                <select
                  className="h-16 w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 outline-none transition-all duration-300 focus:border-[#F8BC04] focus:bg-white focus:ring-4 focus:ring-[#F8BC04]/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a Service *
                  </option>
                  <option>Website Development</option>
                  <option>Digital Marketing</option>
                  <option>Branding</option>
                  <option>SEO</option>
                  <option>Graphic Design</option>
                  <option>Academy</option>
                  <option>Internship</option>
                  <option>Other</option>
                </select>

                {/* Budget */}

                <select
                  className="h-16 w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 outline-none transition-all duration-300 focus:border-[#F8BC04] focus:bg-white focus:ring-4 focus:ring-[#F8BC04]/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Project Budget (Optional)
                  </option>
                  <option>Below ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>Above ₹1,00,000</option>
                </select>

                {/* Message */}

                <textarea
                  rows={7}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-6 outline-none transition-all duration-300 focus:border-[#F8BC04] focus:bg-white focus:ring-4 focus:ring-[#F8BC04]/20"
                />

                                {/* Submit */}

                <div className="flex flex-col items-start gap-6 pt-4 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-xl text-sm leading-7 text-gray-500">
                    By submitting this form, you agree to be contacted by
                    BIGBEANS DIGITAL regarding your enquiry. We respect your
                    privacy and never share your information with third parties.
                  </p>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}
                    whileTap={{
                      scale: .96,
                    }}
                    className="group inline-flex items-center gap-3 rounded-full bg-[#171717] px-10 py-5 text-lg font-bold text-white shadow-[0_25px_60px_rgba(0,0,0,.18)] transition-all duration-500 hover:bg-[#F8BC04] hover:text-[#171717]"
                  >
                    Send Message

                    <motion.span
                      animate={{
                        x: [0, 6, 0],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                      }}
                      className="text-xl"
                    >
                      →
                    </motion.span>

                  </motion.button>

                </div>

              </form>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}