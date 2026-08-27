"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  CalendarDays,
  ArrowRight,
  ExternalLink,
  Check,
  Clock3,
} from "lucide-react";

export default function Connect() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How can I contact Big Beans Digital?",
      a: "You can easily contact Big Beans Digital through our contact form, email, phone, or WhatsApp. Whether you're looking for a Social Media Marketing Agency for Startups or need expert guidance for your business, our team is ready to help.",
    },
    {
      q: "Can I book a free consultation before starting my project?",
      a: "Yes. We offer a free consultation to understand your business goals, target audience, and marketing requirements. Our experts will recommend the best strategy for your business.",
    },
    {
      q: "Which services can I inquire about through the contact page?",
      a: "You can contact us for Social Media Marketing, Website Development, Logo Design, Branding, Google Ads, Meta Ads, Performance Marketing, and other business growth solutions.",
    },
    {
      q: "Do you work with businesses outside India?",
      a: "Yes. Big Beans Digital works with startups and businesses internationally and provides remote consultations and digital marketing services worldwide.",
    },
    {
      q: "How quickly will your team respond to my inquiry?",
      a: "We aim to respond to enquiries as quickly as possible and ensure prompt and professional communication with every potential client.",
    },
    {
      q: "Can startups and small businesses contact Big Beans Digital?",
      a: "Absolutely. We specialize in helping startups, entrepreneurs, and small businesses build their online presence through affordable and result-driven digital marketing services.",
    },
    {
      q: "Do you provide customized marketing solutions?",
      a: "Yes. Every business is unique, so we create customized strategies based on your industry, business goals, target audience, and budget.",
    },
    {
      q: "Can I request a quotation for my project?",
      a: "Yes. Simply share your project requirements through our contact form, and our team can prepare a customized proposal.",
    },
    {
      q: "Why should I choose Big Beans Digital?",
      a: "Big Beans Digital provides end-to-end digital solutions including Social Media Marketing, Website Development, Branding, Google Ads, Meta Ads, and Performance Marketing.",
    },
    {
      q: "How do I get started with Big Beans Digital?",
      a: "Getting started is simple. Contact our team, schedule your consultation, discuss your business goals, and let our experts help create a customized growth strategy.",
    },
  ];

  const sitemapPages = [
    {
      title: "Best Social Media Marketing Agency in London",
      url: "/",
    },
    {
      title: "About Big Beans Digital Best Social Media Marketing Agency",
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
      title:
        "Best Social Media Marketing Agency | Big Beans Digital | Internship",
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
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* =========================
          BREADCRUMB
      ========================= */}

      <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto flex w-full max-w-7xl justify-center px-3 sm:px-5">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-3 text-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-[14px] lg:px-8 lg:py-4 lg:text-base">
            <Link
              href="/"
              className="text-gray-700 transition-colors duration-300 hover:text-[#F8BC04]"
            >
              Home
            </Link>

            <span className="text-lg text-[#F8BC04]">→</span>

            <span className="font-semibold text-black">
              Connect With Big Beans Digital
            </span>
          </div>
        </div>
      </section>

      {/* =====================================
          BUILD SOMETHING AMAZING SECTION
          COMPACT VERSION
      ===================================== */}

      <section className="bg-white px-1 py-5 sm:px-1 sm:py-1 lg:px-1 lg:py-1">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1500px]"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            {/* LEFT CONTENT */}

            <div className="py-2 lg:py-4">
              {/* SMALL LABEL */}

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F8BC04]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#555] sm:text-xs">
                  Get In Touch
                </span>
              </div>

              {/* HEADING */}

              <h2 className="mt-4 text-[38px] font-black leading-[1.03] tracking-[-0.04em] text-[#171717] sm:text-[46px] md:text-[52px] lg:text-[54px] xl:text-[62px]">
                Let&apos;s Build
                <br />
                Something
                <br />

                <span className="text-[#F8BC04]">Amazing</span>

                <br />
                Together.
              </h2>

              {/* UNDERLINE */}

              <div className="mt-2 h-[2px] w-16 rounded-full bg-[#171717]" />

              {/* DESCRIPTION */}

              <div className="mt-5 max-w-xl">
                <p className="text-sm leading-6 text-[#444] sm:text-base">
                  Have a project in mind or want to grow your business?
                </p>

                <p className="mt-1 text-sm leading-6 text-[#444] sm:text-base">
                  We&apos;d love to hear from you.
                </p>
              </div>

              {/* FEATURES */}

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F8BC04]">
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-[#171717]"
                    />
                  </div>

                  <span className="text-xs font-bold text-[#333] sm:text-sm">
                    Quick Response
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F8BC04]">
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-[#171717]"
                    />
                  </div>

                  <span className="text-xs font-bold text-[#333] sm:text-sm">
                    Expert Advice
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F8BC04]">
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-[#171717]"
                    />
                  </div>

                  <span className="text-xs font-bold text-[#333] sm:text-sm">
                    No Obligation
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE AREA */}

            <div className="relative min-h-[280px] overflow-hidden rounded-[24px] sm:min-h-[340px] sm:rounded-[28px] lg:min-h-[390px] lg:rounded-[32px]">
              {/* BACKGROUND IMAGE */}

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('assets/about/bigbeansdigital.webp')",
                }}
              />

              {/* DARK OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />

              {/* TOP LEFT CONTACT CARD */}

              <div className="absolute left-4 top-4 z-10 w-[190px] rounded-[18px] bg-white/95 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.18)] backdrop-blur-md sm:left-6 sm:top-6 sm:w-[210px] sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8BC04] text-[#171717]">
                  <Phone size={17} strokeWidth={2.6} />
                </div>

                <h3 className="mt-3 text-sm font-bold leading-5 text-[#171717] sm:text-base">
                  Speak With Our
                  <br />
                  Growth Experts
                </h3>

                <p className="mt-4 text-sm font-black text-[#171717] sm:text-base">
                  +91 6289102537
                </p>

                <p className="mt-1.5 text-[10px] leading-4 text-[#777]">
                  Mon - Fri 9:00 AM - 9:00 PM (IST)
                </p>

                <a
                  href="tel:+916289102537"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#D89B00] transition-all hover:gap-3"
                >
                  Call Us
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* FLOATING WHATSAPP BUTTON */}

              <a
                href="https://wa.link/nms9wi"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#F8BC04] text-[#171717] shadow-[0_10px_25px_rgba(248,188,4,0.35)] transition-all duration-300 hover:scale-110 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
                aria-label="Connect on WhatsApp"
              >
                <MessageCircle size={21} strokeWidth={2.4} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================
          CONTACT INFORMATION SECTION
      ========================= */}

      <section className="bg-white px-1 py-1 sm:px-1 sm:py-1 lg:px-1 lg:py-1">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-[1500px]"
        >
          <div className="rounded-[28px] border border-[#E8E8E8] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-8 md:p-10 lg:rounded-[40px] lg:p-14">
            <div className="text-center">
              <h2 className="mt-3 text-[38px] font-black leading-[1.05] tracking-[-0.03em] text-[#171717] sm:text-[50px] md:text-[60px] lg:text-[68px]">
                We’re Here to Help You{" "}
                <span className="relative inline-block text-[#F8BC04]">
                  Grow
                  <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full bg-[#F8BC04]" />
                </span>
              </h2>

             
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
              {/* PHONE CARD */}

              <div className="group rounded-[24px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04] text-[#171717] shadow-[0_8px_20px_rgba(248,188,4,0.25)]">
                  <Phone size={27} strokeWidth={2.5} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#171717]">
                  Phone
                </h3>

                <p className="mt-3 text-base font-bold text-[#555]">
                  +91 6289102537
                </p>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#777]">
                  Mon - Fri 9:00 AM - 9:00 PM (IST)
                </p>

                <a
                  href="tel:+916289102537"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#D89B00] transition-all duration-300 hover:gap-4"
                >
                  Call Us
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* EMAIL CARD */}

              <div className="group rounded-[24px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04] text-[#171717] shadow-[0_8px_20px_rgba(248,188,4,0.25)]">
                  <Mail size={27} strokeWidth={2.5} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#171717]">
                  Email
                </h3>

                <p className="mt-3 break-all text-base font-bold text-[#555]">
                  connect.bigbeans@gmail.com
                </p>
             
                

                <div className="min-h-[48px]" />

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect.bigbeans@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#D89B00] transition-all duration-300 hover:gap-4"
                >
                  Send Email
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* WHATSAPP CARD */}

              <div className="group rounded-[24px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04] text-[#171717] shadow-[0_8px_20px_rgba(248,188,4,0.25)]">
                  <MessageCircle size={27} strokeWidth={2.5} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#171717]">
                  WhatsApp
                </h3>

                <p className="mt-3 text-base font-bold text-[#555]">
                  Chat with our team
                </p>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#777]">
                  Connect with us instantly on WhatsApp.
                </p>

                <a
                  href="https://wa.link/nms9wi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#D89B00] transition-all duration-300 hover:gap-4"
                >
                  Connect on WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* BOOK MEETING CARD */}

              <div className="group rounded-[24px] border border-[#E8E8E8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04] text-[#171717] shadow-[0_8px_20px_rgba(248,188,4,0.25)]">
                  <CalendarDays size={27} strokeWidth={2.5} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#171717]">
                  Book a Meeting
                </h3>

                <p className="mt-3 text-base font-bold text-[#555]">
                  Schedule a free
                </p>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#777]">
                  Consultation call with our team.
                </p>

                <a
                  href="https://wa.link/nms9wi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#D89B00] transition-all duration-300 hover:gap-4"
                >
                  Book Now
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================
            GOOGLE MAP
      ========================= */}

      <section className="bg-white px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
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
          className="mx-auto w-full max-w-[1500px] overflow-hidden rounded-[20px] shadow-[0_25px_60px_rgba(0,0,0,0.12)] sm:rounded-[24px] lg:rounded-[28px]"
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
      </section>

      {/* =========================
            SERVICES SECTION
      ========================= */}

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
            {[
              {
                title: "Social Media Marketing",
                text: "Build a stronger brand presence and connect with your audience.",
                url: "/services/social-media-marketing",
              },
              {
                title: "Website Development",
                text: "Modern, fast and conversion-focused websites for growing businesses.",
                url: "/services/website-development",
              },
              {
                title: "Branding",
                text: "Create a memorable identity that makes your business stand out.",
                url: "/services/branding",
              },
              {
                title: "Google Ads & Meta Ads",
                text: "Performance-driven advertising campaigns focused on growth.",
                url: "/services/google-ads-meta-ads",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[28px] bg-[#F8BC04] shadow-[0_20px_50px_rgba(248,188,4,0.18)]"
              >
                <div className="flex min-h-[270px] flex-col justify-between p-7 sm:p-8">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#F8BC04]">
                      <ArrowRight size={20} />
                    </div>

                    <h3 className="mt-7 text-2xl font-black text-[#171717]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#171717]/75">
                      {service.text}
                    </p>
                  </div>

                  <Link
                    href={service.url}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Explore
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
            FAQ SECTION
      ========================= */}

      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="relative mb-10 text-center sm:mb-12 lg:mb-16">
            <div className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 rounded-full bg-[#F8BC04]/35 sm:h-24 sm:w-24" />

            <p className="relative text-sm font-semibold uppercase tracking-[6px] text-gray-500">
              CONTACT FAQS
            </p>

            <h2 className="relative mt-3 text-[36px] font-black leading-[1.08] text-[#171717] sm:text-5xl md:text-6xl">
              Frequently Asked{" "}
              <span className="text-[#F8BC04]">Questions</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-[20px] border border-gray-300 bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-4 text-left sm:p-6"
                >
                  <span className="min-w-0 pr-2 text-[14px] font-semibold leading-5 text-[#171717] sm:text-[16px] sm:leading-6">
                    {faq.q}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#171717] text-lg text-white sm:h-10 sm:w-10 sm:text-xl">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
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

      {/* =========================
            GLOBAL PRESENCE SECTION
      ========================= */}

      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid items-center gap-10 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-12 lg:rounded-[40px] lg:p-16">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[6px] text-gray-500">
                Global Presence
              </p>

              <h2 className="text-4xl font-black leading-tight text-[#171717] sm:text-5xl lg:text-6xl">
                Digital Excellence in{" "}
                <span className="text-[#F8BC04]">12+</span>
                <br />
                Locations
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                Our team works with businesses across India and international
                markets, helping ambitious brands build stronger digital
                experiences.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-[#171717]">
                    India Presence
                  </h3>

                  <div className="mb-5 mt-2 h-[2px] w-20 bg-[#F8BC04]" />

                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Kolkata",
                      "Delhi",
                      "Bangalore",
                      "Noida",
                      "Tripura",
                      "Mumbai",
                      "Pune",
                    ].map((city) => (
                      <li key={city} className="flex items-center gap-2">
                        <span className="text-[#F8BC04]">●</span>
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#171717]">
                    International Presence
                  </h3>

                  <div className="mb-5 mt-2 h-[2px] w-20 bg-[#F8BC04]" />

                  <ul className="space-y-3 text-gray-700">
                    {[
                      "London",
                      "Singapore",
                      "Canada",
                      "Australia",
                      "Nigeria",
                    ].map((city) => (
                      <li key={city} className="flex items-center gap-2">
                        <span className="text-[#F8BC04]">●</span>
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="h-auto w-full"
              />

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-[67%] top-[42%] h-4 w-4 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute left-[44%] top-[27%] h-4 w-4 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="absolute left-[18%] top-[28%] h-4 w-4 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.1, repeat: Infinity }}
                className="absolute left-[47%] top-[50%] h-4 w-4 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.3, repeat: Infinity }}
                className="absolute left-[74%] top-[54%] h-4 w-4 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute left-[84%] top-[65%] h-4 w-4 rounded-full bg-[#F8BC04] shadow-[0_0_25px_#F8BC04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
            CTA SECTION
      ========================= */}

      <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-[#171717] px-5 py-10 sm:rounded-[36px] sm:px-8 sm:py-12 md:px-16 md:py-16 lg:rounded-[40px]">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F8BC04]/20 blur-[120px]" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-[32px] font-black leading-[1.12] text-white sm:text-4xl md:text-5xl">
                  Ready To Turn Clicks Into
                  <span className="text-[#F8BC04]">
                    {" "}Real Business Growth?
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
                  Partner with Big Beans Digital to launch data-driven digital
                  marketing campaigns that generate quality leads, increase
                  conversions and accelerate your business growth.
                </p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "#FFD54A",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full bg-[#F8BC04] px-7 py-4 text-center text-lg font-bold text-[#171717] shadow-[0_20px_50px_rgba(248,188,4,0.35)] transition-all duration-300 sm:w-auto sm:whitespace-nowrap sm:px-10 sm:py-5"
              >
                Book Free Strategy Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================
            SITEMAP SECTION
      ========================= */}

      <section className="w-full bg-white py-5 sm:py-6 md:py-5">
        <div className="mx-auto w-full max-w-[1650px] px-4 sm:px-7 md:px-8 lg:px-10">
          <h2 className="mb-5 text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#171717] sm:mb-7 sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px]">
            Best Social Media Marketing Agency | Big Beans Digital
          </h2>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-3.5 md:gap-x-4 md:gap-y-4 lg:gap-x-5 lg:gap-y-4">
            {sitemapPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="group inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-[#FFF4C9] px-4 py-2 text-[13px] font-medium leading-none text-[#171717] no-underline transition-all duration-200 hover:bg-[#F8BC04] sm:text-[14px]"
              >
                <ExternalLink
                  size={14}
                  className="shrink-0 text-[#D99E00]"
                />

                <span className="truncate">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}