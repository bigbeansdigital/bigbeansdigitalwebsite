"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Connect() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="overflow-hidden bg-[#FFFFFF]">

      {/* =========================
            HERO SECTION
      ========================= */}

      <section className="relative overflow-hidden bg-[#FFFFFF] pt-12 pb-16">

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

{/* FAQ SECTION */}

<section className="bg-white py-10">

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
        CONTACT FAQS
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
          q: "How can I contact BIGBEANS DIGITAL?",
          a: "You can easily contact BIGBEANS DIGITAL through our contact form, email, phone, or WhatsApp. Whether you're looking for the Best Digital Marketing Agency for Startups or need expert guidance for your business, our team is ready to help."
        },
        {
          q: "Can I book a free consultation before starting my project?",
          a: "Yes. We offer a free consultation to understand your business goals, target audience, and marketing requirements. Our experts will recommend the best Digital Marketing Services, Website Development, Branding, or Social Media Marketing strategy for your business."
        },
        {
          q: "Which services can I inquire about through the contact page?",
          a: "You can contact us for Digital Marketing, Social Media Marketing, Website Development, Logo Design, Branding, Google Ads, Meta Ads, Performance Marketing, and other business growth solutions tailored to startups and growing businesses."
        },
        {
          q: "Do you work with businesses outside India?",
          a: "Yes. BIGBEANS DIGITAL works with startups and businesses across London, India, USA, and Dubai. Our team provides remote consultations and digital marketing services to clients worldwide."
        },
        {
          q: "How quickly will your team respond to my inquiry?",
          a: "We aim to respond to all inquiries within 24 business hours. Whether you're looking to Hire a Digital Marketing Agency, discuss a new project, or request a quote, our team ensures prompt and professional communication."
        },
        {
          q: "Can startups and small businesses contact BIGBEANS DIGITAL?",
          a: "Absolutely. We specialize in helping startups, entrepreneurs, and small businesses build their online presence through affordable and result-driven Digital Marketing Services, Website Development, and Branding Solutions."
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
          a: "BIGBEANS DIGITAL is a Best Digital Marketing Agency for Startups offering end-to-end solutions including Social Media Marketing, Website Development, Branding, Google Ads, Meta Ads, and Performance Marketing. We focus on measurable growth, transparency, and long-term client success."
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











    </main>
  );
}