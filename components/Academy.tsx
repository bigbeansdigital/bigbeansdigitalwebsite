"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Courses from "@/components/academy/Courses";

export default function Academy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const courses = [
    {
      title: "Social Media Marketing  Mastery",
      category: "Social Media Marketing ",
      duration: "4 Months",
      mode: "Offline",
      level: "Beginner",
      oldPrice: "₹39,999",
      price: "₹24,999",
      image: "/assets/courses/course1.jpg",
      description:
        "Master SEO, Google Ads, Meta Ads, AI marketing, content strategy, analytics, and real client projects.",
    },
    {
      title: "Graphic Design Pro",
      category: "Graphic Design",
      duration: "3 Months",
      mode: "Offline",
      level: "Beginner",
      oldPrice: "₹29,999",
      price: "₹18,999",
      image: "/assets/courses/course2.jpg",
      description:
        "Learn Photoshop, Illustrator, Figma, branding, social media creatives and complete portfolio building.",
    },
    {
      title: "Website Development",
      category: "Web Development",
      duration: "5 Months",
      mode: "Offline",
      level: "Intermediate",
      oldPrice: "₹49,999",
      price: "₹31,999",
      image: "/assets/courses/course3.jpg",
      description:
        "Become a modern web developer using HTML, CSS, JavaScript, React, Next.js and live projects.",
    },
    {
      title: "AI Tools For Business",
      category: "Artificial Intelligence",
      duration: "6 Weeks",
      mode: "Online",
      level: "All Levels",
      oldPrice: "₹19,999",
      price: "₹9,999",
      image: "/assets/courses/course4.jpg",
      description:
        "Learn ChatGPT, Midjourney, automation, prompt engineering and AI productivity for professionals.",
    },
    {
      title: "Performance Marketing",
      category: "Advertising",
      duration: "8 Weeks",
      mode: "Hybrid",
      level: "Advanced",
      oldPrice: "₹24,999",
      price: "₹14,999",
      image: "/assets/courses/course5.jpg",
      description:
        "Master Meta Ads, Google Ads, YouTube Ads, remarketing, analytics and campaign optimization.",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Students Trained",
      color: "text-green-500",
    },
    {
      value: "25+",
      label: "Industry Courses",
      color: "text-[#F8BC04]",
    },
    {
      value: "100+",
      label: "Live Projects",
      color: "text-purple-600",
    },
    {
      value: "95%",
      label: "Career Success",
      color: "text-pink-500",
    },
  ];

  const masterclassPoints = [
    "Discover how the Best Social Media Marketing  Course helps businesses generate leads, build brands, and grow online.",
    "Learn how AI Tools are transforming marketing, content creation, productivity, and business workflows.",
    "Explore the fundamentals of Social Media Marketing, Performance Marketing, Google Ads, and Meta Ads used by top brands.",
    "Understand why Graphic Design, Branding, and Content Creation are among the most valuable skills for creators, freelancers, and businesses.",
    "Learn how these in-demand skills can help you build a successful career, start freelancing, or grow your own business.",
    "Get a complete roadmap to choose the right course, build job-ready skills, earn certifications, and confidently begin your digital career.",
  ];

  const features = [
    {
      title: "Live Client Projects",
      description:
        "Work on real business projects that build confidence, practical skills, and an impressive professional portfolio.",
      color: "from-[#FFF3D9] to-[#FFE3A2]",
    },
    {
      title: "AI-Powered Learning",
      description:
        "Learn modern AI tools, automation, prompt engineering, and productivity workflows used across industries.",
      color: "from-[#DFF5FF] to-[#BEE9FF]",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn directly from experienced professionals through practical sessions, personalized guidance, and constructive feedback.",
      color: "from-[#F7E5FF] to-[#EBC9FF]",
    },
    {
      title: "Career Growth Support",
      description:
        "Strengthen your portfolio, improve interview skills, and gain industry-ready experience that helps you confidently pursue your career goals.",
      color: "from-[#E5EAFF] to-[#D4DBFF]",
    },
  ];

  const faqs = [
    {
      q: "Why should I join BIGBEANS Academy?",
      a: "BIGBEANS Academy offers practical, industry-focused training designed for students, professionals, entrepreneurs, and freelancers. Whether you're looking for the Best Social Media Marketing  Course, Best AI Course, or Best Graphic Design Course, our hands-on workshops and certification programs help you build job-ready skills with real-world projects.",
    },
    {
      q: "Which courses are available at BIGBEANS Academy?",
      a: "BIGBEANS Academy offers practical training in Artificial Intelligence (AI), Social Media Marketing , Social Media Marketing, Google Ads, Meta Ads, Performance Marketing, Graphic Design, Branding, and Content Creation. Every course is designed to help learners gain industry-relevant skills and practical experience.",
    },
    {
      q: "Are your courses suitable for beginners?",
      a: "Yes. Our courses are beginner-friendly and require no prior experience. Whether you're a college student, working professional, entrepreneur, or freelancer, our expert trainers guide you from the fundamentals to advanced practical applications.",
    },
    {
      q: "Will I work on real projects during the course?",
      a: "Absolutely. Every learner gains hands-on experience through live projects, practical assignments, real-world case studies, and interactive workshops. This helps you build a professional portfolio while learning the latest digital skills.",
    },
    {
      q: "Do I receive a certificate after completing the course?",
      a: "Yes. Upon successfully completing your course, you'll receive a Professional Certification from BIGBEANS Academy that validates your practical skills in Social Media Marketing , AI, Graphic Design, Social Media Marketing, Google Ads, Meta Ads, Performance Marketing, Branding, or Content Creation.",
    },
    {
      q: "Can these courses help me get a job or internship?",
      a: "Yes. Our programs are designed to help learners become industry-ready by developing practical skills, building portfolios, and understanding real business challenges. These skills improve your chances of securing internships, freelance projects, and full-time opportunities.",
    },
    {
      q: "Do you offer online and offline classes?",
      a: "Yes. BIGBEANS Academy provides both online and offline learning options, allowing students and professionals to choose the format that best suits their schedule while receiving the same practical training and mentorship.",
    },
    {
      q: "Why choose BIGBEANS Academy over other training institutes?",
      a: "BIGBEANS Academy focuses on practical learning instead of theory. As a destination for the Best Social Media Marketing  Course, Best AI Course, and Best Graphic Design Course, our workshops are led by industry professionals and emphasize real-world skills that employers and businesses value.",
    },
    {
      q: "Who can join BIGBEANS Academy?",
      a: "Our courses are ideal for college students, fresh graduates, working professionals, entrepreneurs, business owners, freelancers, and anyone who wants to learn modern digital skills and stay competitive in today's technology-driven world.",
    },
    {
      q: "How do I enroll in a course at BIGBEANS Academy?",
      a: "Getting started is easy. Simply contact the BIGBEANS Academy team, choose the course that matches your career goals, and enroll in our practical training programs to begin your journey toward becoming a skilled digital professional.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFFFF] text-[#171717]">
      {/* =========================================================
          ACADEMY HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-white pb-14 pt-7 sm:pb-16 sm:pt-9 lg:pb-20 lg:pt-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-24 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[110px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] lg:blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.95fr] lg:gap-14 xl:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="inline-flex rounded-full bg-[#F8BC04] px-4 py-2 text-[11px] font-black uppercase tracking-[0.08em] text-[#171717] shadow-lg sm:px-6 sm:py-2 sm:text-sm"
              >
                Big Beans Digital Academy
              </motion.span>

              <h1 className="mt-5 text-[38px] font-black leading-[1.04] tracking-[-0.035em] text-[#171717] sm:mt-7 sm:text-[50px] md:text-[60px] lg:text-[64px] xl:text-[68px]">
                Learn
                <span className="text-[#F8BC04]">
                  {" "}
                  Digital & Tech Skills
                </span>{" "}
                That Build Successful Careers!
              </h1>

              <h3 className="mt-4 text-lg font-bold text-[#171717] sm:mt-5 sm:text-2xl">
                Learn. Practice. Get Hired.
              </h3>

              <div className="mt-5 flex flex-wrap gap-3 sm:mt-6 sm:gap-4">
                <motion.a
                  whileHover={{
                    y: -5,
                    scale: 1.04,
                    boxShadow: "0 20px 40px rgba(23,23,23,.18)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  href="/courses"
                  className="rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white shadow-xl transition-colors duration-300 hover:bg-[#F8BC04] hover:text-[#171717] sm:px-9 sm:py-3.5 sm:text-base"
                >
                  Explore Courses →
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-[650px] lg:max-w-none"
            >
              <motion.div
                whileHover={{
                  rotateY: -5,
                  rotateX: 3,
                  scale: 1.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 18,
                }}
                className="relative overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(0,0,0,.16)] sm:rounded-[32px] lg:rounded-[36px]"
              >
                <Image
                  src="/assets/academy-hero.jpg"
                  alt="BIGBEANS DIGITAL Academy"
                  width={960}
                  height={560}
                  priority
                  className="h-auto w-full object-cover transition duration-700 hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
              </motion.div>

              {/* Rating Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 left-2 z-30 rounded-2xl bg-white px-3.5 py-3 shadow-[0_20px_50px_rgba(0,0,0,.15)] sm:-bottom-6 sm:-left-5 sm:rounded-3xl sm:px-5 sm:py-4 lg:-left-8 lg:px-6 lg:py-5"
              >
                <div className="text-base tracking-[1px] text-[#F8BC04] sm:text-xl">
                  ★★★★★
                </div>

                <h3 className="mt-1 text-sm font-black text-[#171717] sm:mt-2 sm:text-xl">
                  4.9/5 Rating
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-500 sm:mt-1 sm:text-sm">
                  Rated by Our Learners
                </p>
              </motion.div>

              {/* Industry Card */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [-1.5, 1.5, -1.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 right-2 z-30 rounded-2xl bg-[#171717] px-3.5 py-3 text-white shadow-[0_25px_60px_rgba(0,0,0,.2)] sm:-bottom-6 sm:-right-5 sm:rounded-3xl sm:px-5 sm:py-4 lg:-right-8 lg:px-6 lg:py-5"
              >
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#F8BC04] sm:text-xs sm:tracking-[0.3em]">
                  Industry Ready
                </p>

                <h3 className="mt-1 text-xs font-black sm:mt-2 sm:text-xl">
                  Live Project Learning
                </h3>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  x: [0, 7, 0],
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 right-1 z-30 hidden rounded-full bg-white px-5 py-3 shadow-2xl sm:flex lg:-right-10 lg:-top-7"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-[#171717]">
                    Join Workshop Now
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
              ACADEMY INTRO
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-14 max-w-6xl sm:mt-16 lg:mt-20"
          >
            <p className="text-[14px] leading-6 text-gray-600 sm:text-[16px] sm:leading-7 lg:text-justify">
              <span className="font-semibold text-[#F8BC04]">
                BIGBEANS DIGITAL Academy
              </span>{" "}
              a platform for students & professionals develop in-demand{" "}
              <span className="font-semibold text-[#171717]">
                Tech & Digital skills
              </span>{" "}
              through practical workshops and industry-focused training.{" "}
              <span className="font-semibold text-[#171717]">
                Explore our Social Media Marketing Courses, AI Workshops,
                Graphic Design Classes, Branding Programs, Social Media
                Marketing Courses,
              </span>{" "}
              and hands-on learning experiences designed to build real-world
              expertise through live projects and expert mentorship.
              <br />
              <br />
              Whether you want to learn{" "}
              <span className="font-semibold text-[#171717]">
                Best Social Media Marketing Course, Best AI Course, Best
                Graphic Design Course,
              </span>{" "}
              or prepare for a high-growth digital or tech career, BIGBEANS
              DIGITAL Academy provides practical, job-ready classes that helps
              you build a professional portfolio, earn valuable
              certifications, and{" "}
              <span className="font-semibold text-[#171717]">
                stay ahead in today's fast-changing IT world.
              </span>
            </p>
          </motion.div>

          {/* =====================================================
              STATS
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="mt-8 overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,.07)] sm:mt-10 sm:rounded-[30px] lg:rounded-[34px]"
          >
            <div className="grid grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.025,
                  }}
                  className="relative flex min-w-0 flex-col items-center justify-center px-1 py-5 text-center sm:px-3 sm:py-7 lg:py-8"
                >
                  {index !== stats.length - 1 && (
                    <div className="absolute right-0 top-1/2 h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gray-200 to-transparent sm:h-16 lg:h-20" />
                  )}

                  <h3
                    className={`text-[22px] font-black leading-none sm:text-[34px] lg:text-[44px] ${item.color}`}
                  >
                    {item.value}
                  </h3>

                  <p className="mt-2 max-w-[90px] text-[8px] font-bold leading-tight text-[#171717] sm:mt-3 sm:max-w-none sm:text-xs lg:text-lg">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FREE MASTERCLASS
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[-120px] top-20 h-[360px] w-[360px] rounded-full bg-[#F8BC04]/20 blur-[120px] sm:right-[-50px] sm:h-[500px] sm:w-[500px] lg:h-[520px] lg:w-[520px] lg:blur-[170px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="mx-auto max-w-5xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#F8BC04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#171717] shadow-md sm:px-6 sm:py-3 sm:text-sm">
              Free Live AI & Social Media Marketing Masterclass
            </span>

            <h3 className="mt-6 text-[34px] font-black leading-[1.04] tracking-[-0.03em] text-[#171717] sm:mt-8 sm:text-[42px] md:text-[52px]">
              What You'll Learn
              <span className="text-[#F8BC04]">
                {" "}
                During This Masterclass
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-4xl text-sm leading-6 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8 lg:leading-9">
              Get a practical introduction to today's most in-demand digital
              skills through live sessions, real-world examples, and expert
              guidance. Whether you're searching for the Best Social Media
              Marketing Course, Best AI Course, or Best Graphic Design Course,
              this masterclass will help you understand the skills, career
              opportunities, and learning path to succeed in the digital
              industry.
            </p>
          </motion.div>

          <div className="mt-10 grid items-center gap-10 sm:mt-12 lg:mt-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 xl:gap-20">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: -4,
                }}
                className="overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(0,0,0,.15)] sm:rounded-[32px] lg:rounded-[36px]"
              >
                <Image
                  src="/assets/masterclass.jpg"
                  alt="BIGBEANS DIGITAL Masterclass"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </motion.div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85 }}
            >
              <div className="space-y-4 sm:space-y-5">
                {masterclassPoints.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.09 }}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.12,
                      }}
                      transition={{ duration: 0.45 }}
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-sm font-black text-[#171717] shadow-sm sm:h-10 sm:w-10 sm:text-lg"
                    >
                      ✓
                    </motion.div>

                    <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
              >
                <motion.a
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.96 }}
                  href="/connect"
                  className="rounded-full bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-colors hover:bg-[#F8BC04] hover:text-[#171717] sm:px-9 sm:py-4 sm:text-base"
                >
                  Explore Courses →
                </motion.a>

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center rounded-full border border-[#F8BC04]/30 bg-[#F8BC04]/10 px-4 py-3 text-xs sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  <div className="mr-2.5 h-2.5 w-2.5 rounded-full bg-green-500 sm:mr-3 sm:h-3 sm:w-3" />
                  <span className="font-semibold text-[#171717]">
                    Limited Seats Available
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR COURSES
      ========================================================= */}
      <section className="relative overflow-hidden bg-white pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.22, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[120px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] lg:blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="mx-auto mb-10 max-w-5xl text-center sm:mb-14 lg:mb-16"
          >
            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#F8BC04] sm:px-6 sm:py-3 sm:text-sm">
              Professional Courses
            </span>

            <h2 className="mt-5 text-[34px] font-black leading-[1.04] tracking-[-0.03em] text-[#171717] sm:mt-7 sm:text-[45px] md:text-[55px] lg:text-[62px]">
              Choose The Perfect
              <span className="text-[#F8BC04]"> Course</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              For Your Career
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-sm leading-6 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8 lg:leading-9">
              Whether you're starting from scratch or upgrading your existing
              skills, our industry-focused programs combine practical
              learning, AI-powered tools, live projects, and expert mentorship
              to help you build a successful digital career.
            </p>
          </motion.div>

          <Courses />
        </div>
      </section>

      {/* =========================================================
          LIVE CLASS + CERTIFICATE
      ========================================================= */}
      <section className="bg-white pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
            {/* LIVE CLASS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -7 }}
              className="group overflow-hidden rounded-[24px] border border-black/5 bg-[#FAFAFA] shadow-[0_15px_45px_rgba(0,0,0,.06)] transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(0,0,0,.1)] sm:rounded-[30px]"
            >
              <div className="relative aspect-[15/9] overflow-hidden">
                <Image
                  src="/academy/live-class.jpg"
                  alt="Live Social Media Marketing Class"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="p-5 sm:p-7 lg:p-8">
                <h3 className="text-xl font-black text-[#171717] sm:text-2xl">
                  Interactive Live Classes
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                  Learn through live sessions, practical demonstrations, doubt
                  clearing, assignments and real-world case studies.
                </p>
              </div>
            </motion.div>

            {/* CERTIFICATE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -7 }}
              className="group overflow-hidden rounded-[24px] border border-black/5 bg-[#FAFAFA] shadow-[0_15px_45px_rgba(0,0,0,.06)] transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(0,0,0,.1)] sm:rounded-[30px]"
            >
              <div className="relative aspect-[15/9] overflow-hidden">
                <Image
                  src="/academy/certificate.jpg"
                  alt="BIGBEANS Academy Certificate"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="p-5 sm:p-7 lg:p-8">
                <h3 className="text-xl font-black text-[#171717] sm:text-2xl">
                  Course Certificate
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                  Showcase your newly acquired skills with a professional
                  certificate from BIGBEANS DIGITAL.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE OUR ACADEMY
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.08, 0.17, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[120px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] lg:blur-[170px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="mx-auto max-w-5xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#F8BC04] sm:px-6 sm:py-3 sm:text-sm">
              Learn Beyond The Classroom
            </span>

            <h2 className="mt-5 text-[34px] font-black leading-[1.04] tracking-[-0.03em] text-[#171717] sm:mt-7 sm:text-[46px] md:text-[55px] lg:text-[60px]">
              Why Students Choose
              <span className="block text-[#F8BC04]">
                BIGBEANS DIGITAL Academy
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-sm leading-6 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8 lg:leading-9">
              We don't just teach digital skills—we prepare you for the real
              world. Our programs combine practical learning, AI-powered
              workflows, live projects, expert mentorship, and portfolio
              development to help you confidently build a successful career.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="-mx-4 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] sm:-mx-6 sm:mt-12 sm:gap-5 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4 xl:gap-7 [&::-webkit-scrollbar]:hidden">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`group relative min-w-[82vw] snap-center overflow-hidden rounded-[25px] bg-gradient-to-br ${item.color} p-6 shadow-[0_18px_50px_rgba(0,0,0,.07)] sm:min-w-[68vw] sm:rounded-[28px] sm:p-7 md:min-w-0 md:snap-none md:p-7 lg:p-8`}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/40"
                />

                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.12,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg sm:h-16 sm:w-16"
                >
                  <div className="h-5 w-5 rounded-full bg-[#F8BC04] sm:h-6 sm:w-6" />
                </motion.div>

                <h3 className="relative mt-6 text-[23px] font-black leading-tight text-[#171717] sm:mt-7 sm:text-[27px]">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-[14px] leading-6 text-[#171717]/70 sm:mt-5 sm:text-[16px] sm:leading-7">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F8BC04] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          <div className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 md:hidden">
            Swipe to explore →
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-9 text-center sm:mb-12 lg:mb-14"
          >
            <div className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 rounded-full bg-[#F8BC04]/30 blur-[1px] sm:h-24 sm:w-24" />

            <p className="relative text-[9px] font-semibold uppercase tracking-[3px] text-gray-500 sm:text-sm sm:tracking-[6px]">
              BIGBEANS ACADEMY FAQS
            </p>

            <h2 className="relative mt-3 text-[34px] font-black leading-tight text-[#171717] sm:mt-4 sm:text-5xl md:text-6xl">
              Frequently Asked{" "}
              <span className="text-[#F8BC04]">Questions</span>
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: Math.min(index * 0.04, 0.3) }}
                className="overflow-hidden rounded-[17px] border border-gray-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,.025)] transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,.06)] sm:rounded-[20px]"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex min-h-[68px] w-full items-center justify-between gap-3 p-4 text-left sm:min-h-[76px] sm:p-5 lg:p-6"
                >
                  <span className="pr-2 text-sm font-semibold leading-5 text-[#171717] sm:text-base">
                    {faq.q}
                  </span>

                  <motion.span
                    animate={{
                      rotate: openFaq === index ? 45 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#171717] text-lg text-white sm:h-10 sm:w-10 sm:text-xl"
                  >
                    +
                  </motion.span>
                </button>

                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-5 sm:px-5 sm:pb-6 lg:px-6"
                  >
                    <div className="mb-4 h-px bg-gray-100" />
                    <p className="text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL PRESENCE
      ========================================================= */}
      <section className="bg-white pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75 }}
            className="grid items-center gap-8 rounded-[25px] border border-gray-200 bg-white p-5 shadow-[0_15px_50px_rgba(0,0,0,.04)] sm:rounded-[32px] sm:p-8 md:p-10 lg:grid-cols-2 lg:gap-12 lg:rounded-[40px] lg:p-14 xl:p-16"
          >
            {/* LEFT */}
            <div>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[3px] text-gray-500 sm:mb-6 sm:text-sm sm:tracking-[6px]">
                Global Presence
              </p>

              <h2 className="text-[36px] font-black leading-[1.05] tracking-[-0.03em] text-[#171717] sm:text-5xl lg:text-6xl">
                Digital Excellence in{" "}
                <span className="text-[#F8BC04]">12+</span>
                <br />
                Locations
              </h2>

              <p className="mt-5 max-w-[650px] text-sm leading-6 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
                BIGBEANS DIGITAL serves businesses across India and
                international markets. Our strategies are built for local
                relevance and global scalability.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-10 sm:gap-8 lg:mt-12 lg:gap-10">
                <div className="border-r border-black/10 pr-4 sm:pr-8 lg:pr-10">
                  <h3 className="text-base font-bold sm:text-xl">
                    In India
                  </h3>

                  <div className="mb-4 mt-2 h-[2px] w-14 bg-[#F8BC04] sm:mb-5 sm:w-20" />

                  <ul className="space-y-2 text-xs text-gray-700 sm:space-y-3 sm:text-sm lg:text-base">
                    {[
                      "Kolkata",
                      "Delhi",
                      "Bangalore",
                      "Noida",
                      "Tripura",
                      "Mumbai",
                      "Pune",
                    ].map((location) => (
                      <li
                        key={location}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#F8BC04]">●</span>
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold sm:text-xl">
                    International Presence
                  </h3>

                  <div className="mb-4 mt-2 h-[2px] w-14 bg-[#F8BC04] sm:mb-5 sm:w-20" />

                  <ul className="space-y-2 text-xs text-gray-700 sm:space-y-3 sm:text-sm lg:text-base">
                    {[
                      "London",
                      "Singapore",
                      "Canada",
                      "Australia",
                      "Nigeria",
                    ].map((location) => (
                      <li
                        key={location}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#F8BC04]">●</span>
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative mx-auto w-full max-w-[650px]">
              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="h-auto w-full"
              />

              {/* INDIA */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-[67%] top-[42%] h-2.5 w-2.5 rounded-full bg-[#F8BC04] shadow-[0_0_20px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* LONDON */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute left-[44%] top-[27%] h-2.5 w-2.5 rounded-full bg-[#F8BC04] shadow-[0_0_20px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* CANADA */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="absolute left-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#F8BC04] shadow-[0_0_20px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* NIGERIA */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.1, repeat: Infinity }}
                className="absolute left-[47%] top-[50%] h-2.5 w-2.5 rounded-full bg-[#F8BC04] shadow-[0_0_20px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* SINGAPORE */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.3, repeat: Infinity }}
                className="absolute left-[74%] top-[54%] h-2.5 w-2.5 rounded-full bg-[#F8BC04] shadow-[0_0_20px_#F8BC04] sm:h-4 sm:w-4"
              />

              {/* AUSTRALIA */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute left-[84%] top-[65%] h-2.5 w-2.5 rounded-full bg-[#F8BC04] shadow-[0_0_20px_#F8BC04] sm:h-4 sm:w-4"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-[26px] bg-[#171717] px-5 py-9 shadow-[0_25px_70px_rgba(0,0,0,.15)] sm:rounded-[34px] sm:px-8 sm:py-12 md:px-12 lg:rounded-[40px] lg:px-16 lg:py-14">
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#F8BC04]/20 blur-[100px] sm:h-72 sm:w-72"
            />

            <div className="relative z-10 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center lg:gap-10">
              <div className="max-w-3xl">
                <h2 className="text-[30px] font-black leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl md:text-5xl">
                  Ready To Turn Clicks Into
                  <span className="text-[#F8BC04]">
                    {" "}
                    Real Business Growth?
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:mt-5 sm:text-lg sm:leading-8">
                  Partner with BIGBEANS DIGITAL to launch data-driven Social
                  Media Marketing campaigns that generate quality leads,
                  increase conversions and accelerate your business growth.
                </p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "#FFD54A",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full bg-[#F8BC04] px-7 py-4 text-sm font-bold text-[#171717] shadow-[0_20px_50px_rgba(248,188,4,0.3)] transition-all duration-300 sm:w-auto sm:px-9 sm:py-4 sm:text-base lg:shrink-0"
              >
                Book Free Strategy Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}