"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Search,
  ClipboardList,
  Rocket,
  BarChart3,
  Users,
  Trophy,
  Target,
  Check,
  Quote,
  Plus,
  Minus,
} from "lucide-react";
import OurWork from "@/components/Recentwork";

export default function DigitalMarketingAgencyLondon() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "We take time to understand your business, target audience, goals and challenges, creating the right foundation for effective digital marketing services in London.",
      icon: Search,
    },
    {
      number: "02",
      title: "Strategize",
      description: "Our team develops a customised strategy tailored to your goals, combining creative planning and the best digital marketing services in London to reach the right audience.",
      icon: ClipboardList,
    },
    {
      number: "03",
      title: "Execute",
      description: "We implement, optimise and manage your campaigns with strategic content and data-driven solutions, delivering a professional social media marketing service in London.",
      icon: Rocket,
    },
    {
      number: "04",
      title: "Grow",
      description:
        "We track performance and continuously optimise your strategy to drive stronger engagement, quality leads and sustainable business growth with measurable results.",
      icon: BarChart3,
    },
  ];

  const services = [
    {
      number: "01",
      title: "SEO & Organic Growth",
      description:
        "Rank higher, get found, and drive consistent organic traffic that converts.",
    },
    {
      number: "02",
      title: "Paid Advertising",
      description:
        "High-performing ad campaigns that bring you qualified leads and more sales.",
    },
    {
      number: "03",
      title: "Social Media Marketing",
      description:
        "Build your brand, engage your audience, and turn followers into loyal customers.",
    },
    {
      number: "04",
      title: "Branding & Creative",
      description:
        "Creative that connects. Branding that stands out. Design that leaves an impact.",
    },
  ];

  const reasons = [
    "UK-Based Digital Marketing Experts",
    "Data-Driven Strategies",
    "Transparent Reporting",
    "Results You Can Track",
  ];

  const stats = [
    {
      value: "100+",
      label: "Happy Clients",
      sublabel: "Across the UK",
      icon: Users,
      yellow: true,
    },
    {
      value: "70%",
      label: "Average ROI Increase",
      sublabel: "Month on Month",
      icon: BarChart3,
      yellow: false,
    },
    {
      value: "10+",
      label: "Years of Experience",
      sublabel: "In Digital Marketing",
      icon: Trophy,
      yellow: false,
    },
    {
      value: "250+",
      label: "Successful Campaigns",
      sublabel: "Delivered",
      icon: Target,
      yellow: true,
    },
  ];

  const testimonials = [
    {
      quote:
        "Big Beans Digital completely transformed our social media presence. Our engagement increased significantly and we started receiving quality leads consistently.",
      name: "Rahul Sharma",
      role: "Startup Founder",
      initial: "R",
      featured: false,
    },
    {
      quote:
        "Their content strategy and advertising campaigns helped us increase brand awareness and improve customer engagement across all major social platforms.",
      name: "Neha Agarwal",
      role: "Business Owner",
      initial: "N",
      featured: true,
    },
    {
      quote:
        "Professional team, creative ideas and excellent execution. Working with Big Beans Digital has been one of the best marketing decisions for our brand.",
      name: "Amit Verma",
      role: "E-commerce Brand",
      initial: "A",
      featured: false,
    },
  ];

  const faqs = [
    {
  question: "What social media marketing services do you offer in London?",
  answer:
    "We offer complete social media marketing services including strategy, content creation, social media management, paid campaigns, audience growth and performance reporting through our social media marketing service in London.",
},
{
  question: "How do I find the best social media marketing agency in London?",
  answer:
    "Look for an agency with proven experience, transparent reporting, strong creative work and a strategy tailored to your business goals. Big Beans Digital works with businesses across London and provides a results-focused social media marketing service in London.",
},
{
  question:
    "Why should I choose Big Beans Digital for social media marketing in London?",
  answer:
    "Big Beans Digital combines creative content, data-driven strategy and performance-focused marketing to help businesses build stronger brands and achieve measurable growth as a trusted social media marketing agency London businesses can rely on.",
},
{
  question:
    "What digital marketing services does Big Beans Digital offer in London?",
  answer:
    "Our digital marketing services in London include social media marketing, SEO, paid advertising, branding, creative design, website development and performance marketing, tailored to support business growth.",
},
{
  question:
    "Do you offer website development for London businesses and startups?",
  answer:
    "Yes. We create modern, responsive and conversion-focused websites for London businesses, startups and growing brands as part of our best digital marketing services in London.",
},
{
  question:
    "What is performance marketing and how can it help my London business?",
  answer:
    "Performance marketing focuses on measurable results such as leads, conversions and revenue. As part of our digital marketing services in London, campaigns are tracked and optimised to improve your return on investment.",
},
{
  question:
    "Can you manage both my website and social media marketing in London?",
  answer:
    "Yes. We can manage your website presence alongside your social media strategy to create a consistent digital experience. Our social media marketing service in London helps businesses strengthen visibility and customer engagement.",
},
{
  question: "Do you work with startups and new businesses in London?",
  answer:
    "Yes. We work with London startups and growing businesses to build strong digital foundations, improve online visibility and create scalable strategies through our best digital marketing services in London.",
},
{
  question: "How much does social media marketing cost in London?",
  answer:
    "The cost depends on your goals, platforms, content requirements and campaign scope. We create customised social media marketing service in London strategies based on your specific business needs and objectives.",
},
{
  question: "Is social media marketing useful for small businesses in London?",
  answer:
    "Yes. A strong social media strategy can improve brand awareness, audience engagement, customer trust and lead generation. Working with a social media marketing agency London businesses trust can help create a strategy suited to your goals.",
},
  ];

  return (
    <main className="overflow-hidden bg-[#FFFFFF] text-[#171717]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFFFFF] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-10 xl:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 lg:pb-2"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#353535] sm:text-[12px]">
                  LOOKING FOR THE BEST DIGITAL MARKETING SERVICES IN LONDON?
                </span>
              </div>


              <h1 className="max-w-[700px] text-[42px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[54px] md:text-[60px] lg:text-[64px] xl:text-[68px] 2xl:text-[72px]">
    Social Media & Digital Marketing Agency <span className="text-[#F8BC04]">for UK Businesses</span>
</h1>

              <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-[#3F3F3F] sm:text-[16px] lg:mt-6 lg:text-[17px]">
                Our digital marketing services in London combine data-driven strategy, creative content and performance-focused campaigns to help businesses attract, engage and convert the right audience. As a trusted social media marketing agency in London businesses rely on, we create strategies designed for measurable growth.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                <motion.a
                  href="https://wa.link/nms9wi"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#F8BC04] px-20 text-[17px] font-semibold text-[#171717] shadow-[0_8px_25px_rgba(248,188,4,0.2)] transition-all duration-300"
                >
                  <span>Book Your Free Strategy Call</span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#171717] text-white">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </motion.a>

                <motion.a
  href="/"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="group inline-flex h-12 items-center gap-2 rounded-full border border-[#D7D7D7] bg-white px-10 text-[11px] font-medium text-[#303030] transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
>
  <span>Know More About Us</span>
</motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 sm:mt-12"
              >
                <p className="mb-4 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#5A5A5A] sm:text-[15px]">
                  Trusted by ambitious businesses across the UK
                </p>

                <div className="flex flex-wrap items-center gap-x-7 gap-y-5 sm:gap-x-10 lg:gap-x-7 xl:gap-x-10">
                  <Image
                    src="/citylandingpage/london/client1.webp"
                    alt="Google Partner"
                    width={130}
                    height={55}
                    className="h-auto w-[92px] object-contain sm:w-[105px]"
                  />

                  <Image
                    src="/citylandingpage/london/client2.webp"
                    alt="Meta Business Partner"
                    width={130}
                    height={55}
                    className="h-auto w-[92px] object-contain sm:w-[105px]"
                  />

                  <Image
                    src="/citylandingpage/london/client3.webp"
                    alt="Trustpilot and Clutch"
                    width={190}
                    height={55}
                    className="h-auto w-[150px] object-contain sm:w-[175px]"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 35 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="relative mx-auto w-full max-w-[850px] lg:max-w-none"
            >
              <div className="relative aspect-[1.3/1] min-h-[360px] overflow-hidden rounded-[26px] sm:min-h-[480px] lg:min-h-[520px] xl:min-h-[610px]">
                <Image
                  src="/citylandingpage/london/london.webp"
                  alt="London Digital Marketing Agency"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="absolute bottom-5 left-[52%] z-10 w-[175px] rounded-[18px] bg-white/95 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:bottom-7 sm:left-[52%] sm:w-[220px] sm:p-5 md:bottom-8 md:left-[54%] lg:bottom-8 lg:left-[50%] xl:bottom-10 xl:left-[51%]"
                >
                  <p className="text-[9px] font-semibold text-[#252525] sm:text-[10px]">
                    Real Growth.
                  </p>

                  <p className="mt-1 text-[9px] text-[#565656] sm:text-[10px]">
                    Measurable Results.
                  </p>

                  <div className="mt-4 sm:mt-5">
                    <span className="text-[31px] font-semibold leading-none tracking-[-0.04em] text-[#171717] sm:text-[38px]">
                      90%
                    </span>

                    <p className="mt-1 text-[8px] text-[#656565] sm:text-[9px]">
                      Average ROI Increase for Clients from London
                    </p>
                  </div>

                  <div className="relative mt-4 h-[58px] sm:mt-5 sm:h-[65px]">
                    <svg
                      viewBox="0 0 220 70"
                      className="h-full w-full overflow-visible"
                      fill="none"
                    >
                      <path
                        d="M4 57 L30 43 L58 48 L88 28 L120 33 L150 13 L184 17 L215 0"
                        stroke="#F8BC04"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <circle cx="4" cy="57" r="3.5" fill="#F8BC04" />
                      <circle cx="30" cy="43" r="3.5" fill="#F8BC04" />
                      <circle cx="58" cy="48" r="3.5" fill="#F8BC04" />
                      <circle cx="88" cy="28" r="3.5" fill="#F8BC04" />
                      <circle cx="120" cy="33" r="3.5" fill="#F8BC04" />
                      <circle cx="150" cy="13" r="3.5" fill="#F8BC04" />
                      <circle cx="184" cy="17" r="3.5" fill="#F8BC04" />
                      <circle cx="215" cy="0" r="3.5" fill="#F8BC04" />
                    </svg>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#36A269]" />

                    <span className="text-[8px] text-[#5D5D5D] sm:text-[9px]">
                      In Last 6 Months
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUSTED CLIENTS
      ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-[#FFFFFF] py-12 sm:py-5 lg:py-5"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              text-[30px]
              sm:text-[38px]
              md:text-[46px]
              lg:text-[52px]
              font-semibold
              text-[#171717]
              tracking-tight
              leading-tight
            "
          >
            We Are Trusted by 100+ Startups & Businesses Globally
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              mt-5
              sm:mt-6
              text-[15px]
              sm:text-[16px]
              lg:text-[18px]
              text-gray-600
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            From ambitious startups to established businesses, Big Beans Digital delivers digital marketing services in London designed to increase visibility, engagement and sustainable growth. As a trusted social media marketing agency London businesses rely on, we provide strategic social media marketing, performance marketing, website development and branding solutions for businesses across London, the UK, India, the USA and beyond.
          </motion.p>

        </div>
      </motion.section>

      {/* =========================================================
          PROCESS SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFFFFF] px-4 py-5 sm:px-6 sm:py-5 lg:px-8 lg:py-10 xl:px-10">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[760px] text-center"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#f8bc04] sm:text-[30px]">
              Our Process
            </p>

            <h2 className="mt-3 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#222222] sm:text-[38px] lg:text-[46px] xl:text-[52px]">
              A Simple Process That
              <br />
              Delivers Extraordinary{" "}
              <span className="relative inline-block">
                Results
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#F8BC04]" />
              </span>
            </h2>
          </motion.div>

          <div className="relative mx-auto mt-10 max-w-[1450px] sm:mt-14">
            <div className="absolute left-[11%] right-[11%] top-[29px] hidden h-px bg-[#D9D9D9] lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    className="relative"
                  >
                    <div className="relative z-10 mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#E1E1E1] bg-[#FFFFFF] shadow-[0_8px_22px_rgba(0,0,0,0.06)] sm:h-[64px] sm:w-[64px]">
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="text-[#222222]"
                      />
                    </div>

                    <div className="mt-6 text-center lg:text-left">
                      <div className="flex items-baseline justify-center gap-2 lg:justify-start">
                        <span className="text-[26px] font-semibold text-[#E2A600] sm:text-[30px]">
                          {step.number}
                        </span>

                        <h3 className="text-[17px] font-semibold text-[#303030] sm:text-[18px]">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-[1.75] text-[#5B5B5B] sm:text-[15px] lg:mx-0">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

{/* =========================================================
    SERVICES GRID SECTION
========================================================= */}

<section className="bg-[#FFFFFF] px-4 py-5 sm:px-6 sm:py-5 lg:px-8 lg:py-5">
  <div className="mx-auto max-w-[1500px]">

    {/* HEADING */}
    <div className="mb-6 text-center">
      <p className="text-[50px] font-bold uppercase tracking-[0.18em] text-[#F8BC04]">
        Services We Provide
      </p>

      <h2 className="mt-2 text-[20px] font-semibold text-[#171717] sm:text-[26px]">
        Our Digital Marketing Solutions for{" "}
        <span className="text-[#f8bc04]">London Businesses</span>
      </h2>

      <p className="mx-auto mt-2 max-w-[1100px] text-[9px] leading-relaxed text-[#6B6B6B] sm:text-[19px]">
        From social media marketing and branding to website development and performance marketing, we deliver tailored digital marketing services in London that help businesses increase visibility, engage the right audience and achieve measurable growth.
      </p>
    </div>

    {/* SERVICES GRID */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

      {/* ROW 1 */}

      {/* SOCIAL MEDIA */}
      <div className="flex min-h-[240px] flex-col justify-center rounded-[14px] bg-[#F8BC04] p-6 sm:min-h-[280px] sm:p-8">
        <div className="border-r-2 border-[#171717] pr-4">

          {/* TITLE + BUTTON */}
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-[16px] font-semibold text-[#171717] sm:text-[40px]">
              Social Media Marketing
            </h2>

            <a
              href="services/social-media-marketing"
              className="inline-flex items-center rounded-full bg-[#171717] px-5 py-2 text-[10px] font-semibold text-white transition-all duration-300 hover:scale-105 sm:text-[11px]"
            >
              Know More →
            </a>
          </div>

          <p className="mt-3 text-[10px] leading-relaxed text-[#171717] sm:text-[16px]">
            Build a stronger online presence with our social media marketing service in London, creating engaging content and data-driven strategies that help London businesses reach, connect with and grow their ideal audience.
          </p>

        </div>
      </div>

      {/* IMAGE */}
      <div className="relative min-h-[240px] overflow-hidden rounded-[14px] sm:min-h-[280px]">
        <img
          src="/citylandingpage/services/bigbeansdigitalsocialmedia.webp"
          alt="Social Media Marketing"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>


      {/* ROW 2 */}

      {/* IMAGE */}
      <div className="relative min-h-[240px] overflow-hidden rounded-[14px] sm:min-h-[280px]">
        <img
          src="/citylandingpage/services/bigbeansdigitalbranding.webp"
          alt="Design and Branding"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* DESIGN */}
      <div className="flex min-h-[240px] flex-col justify-center rounded-[14px] bg-[#F8BC04] p-6 sm:min-h-[280px] sm:p-8">
        <div className="border-r-2 border-[#171717] pr-4">

          {/* TITLE + BUTTON */}
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-[16px] font-semibold text-[#171717] sm:text-[40px]">
              Design & Branding
            </h3>

            <a
              href="services/branding"
              className="inline-flex items-center rounded-full bg-[#171717] px-5 py-2 text-[10px] font-semibold text-white transition-all duration-300 hover:scale-105 sm:text-[11px]"
            >
              Know More →
            </a>
          </div>

          <p className="mt-3 text-[10px] leading-relaxed text-[#171717] sm:text-[16px]">
            Create a memorable brand identity that stands out in London’s competitive market. Our creative branding and design solutions help businesses communicate clearly, build recognition and connect with the right audience.
          </p>

        </div>
      </div>


      {/* ROW 3 */}

      {/* WEBSITE DEVELOPMENT */}
      <div className="flex min-h-[240px] flex-col justify-center rounded-[14px] bg-[#F8BC04] p-6 sm:min-h-[280px] sm:p-8">
        <div className="border-r-2 border-[#171717] pr-4">

          {/* TITLE + BUTTON */}
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-[16px] font-semibold text-[#171717] sm:text-[40px]">
              Website Development
            </h3>

            <a
              href="services/website-development"
              className="inline-flex items-center rounded-full bg-[#171717] px-5 py-2 text-[10px] font-semibold text-white transition-all duration-300 hover:scale-105 sm:text-[11px]"
            >
              Know More →
            </a>
          </div>

          <p className="mt-3 text-[10px] leading-relaxed text-[#171717] sm:text-[16px]">
            Our website development solutions are designed to create fast, user-friendly and high-performing websites that support your digital marketing goals and help London businesses turn more visitors into customers.
          </p>

          
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative min-h-[240px] overflow-hidden rounded-[14px] sm:min-h-[280px]">
        <img
          src="/citylandingpage/services/bigbeansdigitalwebsite.webp"
          alt="Website Development"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>


      {/* ROW 4 */}

      {/* IMAGE */}
      <div className="relative min-h-[240px] overflow-hidden rounded-[14px] sm:min-h-[280px]">
        <img
          src="/citylandingpage/services/bigbeansdigitalperformancemarketing.webp"
          alt="Performance Marketing"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* PERFORMANCE MARKETING */}
      <div className="flex min-h-[240px] flex-col justify-center rounded-[14px] bg-[#F8BC04] p-6 sm:min-h-[280px] sm:p-8">
        <div className="border-r-2 border-[#171717] pr-4">

          {/* TITLE + BUTTON */}
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-[16px] font-semibold text-[#171717] sm:text-[40px]">
              Performance Marketing
            </h3>

            <a
              href="services/google-ads-meta-ads"
              className="inline-flex items-center rounded-full bg-[#171717] px-5 py-2 text-[10px] font-semibold text-white transition-all duration-300 hover:scale-105 sm:text-[11px]"
            >
              Know More →
            </a>
          </div>

          <p className="mt-3 text-[10px] leading-relaxed text-[#171717] sm:text-[16px]">
            Drive measurable results with conversion-focused campaigns designed as part of our digital marketing services in London, helping your business reach the right audience, generate quality leads and maximise ROI.
          </p>

         
        </div>
      </div>

    </div>
  </div>
</section>


      {/* =========================================================
          WHY CHOOSE US SECTION
      ========================================================= */}
      <section className="bg-[#FFFFFF] px-4 py-1 sm:px-6 sm:py-1 lg:px-8 lg:py-1 xl:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
<motion.h3
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
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            text-[34px]
            font-normal
            leading-[1.05]
            tracking-tight
            text-[#171717]
            sm:text-[40px]
            md:text-[44px]
            lg:text-[43px]
            xl:text-[48px]
          "
        >
          Built for{" "}
          <span className="font-black text-[#F8BC04]">
            What&apos;s Next
          </span>
        </motion.h3>


        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.28,
          }}
          className="
            mt-5
            max-w-[650px]
            text-[13px]
            leading-[1.4]
            text-[#171717]
            sm:text-[14px]
            sm:leading-[1.45]
            lg:text-[15px]
          "
          style={{
            textAlign: "justify",
            textAlignLast: "left",
          }}
        >
          Big Beans Digital is a results-driven digital marketing and social media marketing agency London businesses can rely on for strategic, measurable growth. We provide tailored digital marketing services in London, helping startups, entrepreneurs and growing businesses strengthen their online presence, reach the right audience and generate valuable leads.
          <br></br>
          <br></br>
          From creative social media marketing and branding to high-performing websites and performance marketing, our team delivers strategies built around your business goals, industry and audience. As a trusted provider of the best digital marketing services in London, we focus on practical solutions that turn visibility into meaningful business growth.
          
          </motion.p>


              <p className="mt-5 max-w-[520px] text-[15px] leading-[1.75] text-[#646464] sm:text-[16px]">
                We combine data, strategy and creativity to deliver campaigns that move your business forward.
              </p>

              <div className="mt-5 space-y-2.5">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#F8BC04] text-[#171717]">
                      <Check size={10} strokeWidth={3} />
                    </span>

                    <span className="text-[14px] font-medium text-[#454545] sm:text-[15px]">
                      {reason}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -4 }}
                    className="flex min-h-[125px] items-center gap-5 rounded-[12px] border border-[#EEEEEE] bg-white px-5 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)] sm:min-h-[135px] sm:px-6"
                  >
                    <div
                      className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full ${
                        stat.yellow
                          ? "bg-[#F8BC04] text-[#171717]"
                          : "bg-[#101112] text-white"
                      }`}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-[27px] font-semibold leading-none tracking-[-0.035em] text-[#202020] sm:text-[31px]">
                        {stat.value}
                      </h3>

                      <p className="mt-2 text-[10px] font-semibold text-[#333333] sm:text-[11px]">
                        {stat.label}
                      </p>

                      <p className="mt-0.5 text-[9px] text-[#777777] sm:text-[10px]">
                        {stat.sublabel}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

{/* =========================================================
     DIGITAL MARKETING SECTION
========================================================= */}

<section className="bg-[#FFFFFF] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
  <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-2 lg:gap-12">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="max-w-[650px] text-[34px] font-semibold leading-[1.15] text-[#24282E] sm:text-[48px] lg:text-[54px]">
        Digital Marketing That
        Helps London Businesses{" "}
        <span className="text-[#F8BC04]">
          Build Visibility &
          Drive Real Growth
        </span>
      </h2>

      <p className="mt-7 max-w-[680px] text-[16px] leading-[1.7] text-[#555B63] sm:text-[18px]">
        In a competitive digital landscape, London businesses need more than just an online presence. They need a clear strategy that helps them reach the right audience, build meaningful engagement and turn digital opportunities into measurable business growth.
      </p>

      <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-[#555B63] sm:text-[18px]">
        As a trusted social media marketing agency London businesses can rely on, Big Beans Digital delivers tailored digital marketing services in London. From social media and branding to websites and performance campaigns, we create data-driven strategies designed to generate visibility, quality leads and long-term growth.
      </p>
    </div>


    {/* RIGHT STATS CARD */}
    <div className="rounded-[16px] bg-gradient-to-br from-[#F8BC04] via-[#FFBD27] to-[#F9A53A] p-6 shadow-sm sm:p-10">

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* ENQUIRIES */}
        <div className="rounded-[12px] bg-white/20 p-5 backdrop-blur-sm sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/85">
            Enquiries Generated
          </p>

          <h3 className="mt-3 text-[30px] font-bold text-white sm:text-[36px]">
            4.9×
          </h3>

          <p className="mt-2 text-[13px] text-white/85">
            Avg. increase in qualified enquiries
          </p>
        </div>


        {/* PROJECTS */}
        <div className="rounded-[12px] bg-white/20 p-5 backdrop-blur-sm sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/85">
            Projects Delivered
          </p>

          <h3 className="mt-3 text-[30px] font-bold text-white sm:text-[36px]">
            100+
          </h3>

          <p className="mt-2 text-[13px] text-white/85">
            Healthcare brands
          </p>
        </div>
      </div>


      {/* ORGANIC TRAFFIC */}
      <div className="relative mt-4 rounded-[12px] bg-white/20 p-5 backdrop-blur-sm sm:p-6">

        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/85">
          Organic Traffic Growth
        </p>

        <div className="mt-3 flex items-center justify-between">
          <h3 className="text-[30px] font-bold text-white sm:text-[36px]">
            +305%
          </h3>

          <span className="text-[32px] font-light text-white/50">
            ↑
          </span>
        </div>


        {/* PROGRESS BAR */}
        <div className="mt-3 h-[10px] overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-[72%] rounded-full bg-white" />
        </div>

      </div>
    </div>

  </div>
</section>


      {/* =========================================================
          OUR WORK CROUSAL
      ========================================================= */}
        <OurWork />

      {/* =======================================================
                      ABOUT US
      ======================================================= */}

      <section className="bg-white py-8 sm:py-10 overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-20 items-center">

            {/* LEFT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
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
            >
              <div className="overflow-hidden rounded-[28px] sm:rounded-[35px]">
                <Image
                  src="/assets/about/bigbeansdigitalteam.png"
                  alt="Big Beans Digital Team"
                  width={800}
                  height={900}
                  className="w-full h-[420px] sm:h-[520px] lg:h-[700px] object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
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
            >

              {/* Heading */}

              <h2 className="mt-6 sm:mt-8 text-[40px] sm:text-[50px] lg:text-[60px] leading-[1.08] font-black text-[#171717]">
                Building
                <span className="text-[#F8BC04]">
                  {" "}Better Brands.
                </span>
              </h2>

              {/* Paragraph */}

              <p className="mt-6 sm:mt-8 text-[16px] sm:text-[17px] lg:text-[18px] leading-7 sm:leading-8 lg:leading-9 text-gray-600">
                At Big Beans Digital, we help ambitious London businesses build stronger brands, increase their online visibility and achieve measurable digital growth. As a results-focused social media marketing agency London businesses can rely on, we combine creativity, strategy and data to create marketing that connects with the right audience.
                <br />
                <br />
                Our digital marketing services in London cover everything from social media marketing and creative branding to website development and performance marketing. We don't believe in one-size-fits-all strategies—every campaign is tailored around your business goals, audience and position in the competitive London market.
                <br />
                <br />
                Whether you're a startup building your presence or an established business looking to scale, our team develops strategies designed to attract attention, build trust and convert audiences into customers. Through the best digital marketing services in London, we focus on practical, measurable solutions that support sustainable business growth.

Big Beans Digital brings together creative thinking, data-driven insights and strategic execution to help businesses across London compete with confidence, engage their ideal customers and build brands ready for what’s next.
              </p>
</motion.div>
          </div>
        </div>
      </section>


{/* =========================================================
    INDUSTRIES WE HAVE WORKED WITH
========================================================= */}

<section className="bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-5">
  <div className="mx-auto max-w-[1500px]">

    {/* HEADING */}
    <div className="text-center">
      <h2 className="text-[32px] font-semibold text-[#303030] sm:text-[42px] lg:text-[48px]">
        Industries We{" "}
        <span className="text-[#F8BC04]">Have Worked With</span>
      </h2>

      <p className="mx-auto mt-8 max-w-[850px] text-[14px] leading-relaxed text-[#303030] sm:text-[16px]">
        We provide tailored digital marketing services in London for businesses across a wide range of industries, creating data-driven strategies that connect with the right audiences, strengthen online visibility and support sustainable growth.
      </p>
    </div>

    {/* INDUSTRIES GRID */}
    <div className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">

      {/* REAL ESTATE */}
      <div className="rounded-[16px] bg-[#171717] p-8 text-center sm:p-10">
        <h3 className="text-[28px] font-semibold text-[#F8BC04] sm:text-[32px]">
          Real Estate
        </h3>

        <p className="mx-auto mt-5 max-w-[300px] text-[13px] leading-relaxed text-[#FFFFFF]/75 sm:text-[14px]">
          Helping real estate businesses build stronger visibility, attract
          potential buyers and generate quality property enquiries online.
        </p>
      </div>

      {/* FINANCE */}
      <div className="rounded-[16px] bg-[#171717] p-8 text-center sm:p-10">
        <h3 className="text-[28px] font-semibold text-[#F8BC04] sm:text-[32px]">
          Shops & Cafes
        </h3>

        <p className="mx-auto mt-5 max-w-[300px] text-[13px] leading-relaxed text-[#FFFFFF]/75 sm:text-[14px]">
          Creating trusted digital experiences that help bakeries,cafes, and restrurent businesses
          improve visibility and connect with the right audience.
        </p>
      </div>

      {/* LIFESTYLE */}
      <div className="rounded-[16px] bg-[#171717] p-8 text-center sm:p-10">
        <h3 className="text-[28px] font-semibold text-[#F8BC04] sm:text-[32px]">
          Lifestyle
        </h3>

        <p className="mx-auto mt-5 max-w-[300px] text-[13px] leading-relaxed text-[#FFFFFF]/75 sm:text-[14px]">
          Building engaging digital identities and campaigns that help
          lifestyle brands connect with modern audiences.
        </p>
      </div>

      {/* HEALTHCARE */}
      <div className="rounded-[16px] bg-[#171717] p-8 text-center sm:p-10">
        <h3 className="text-[28px] font-semibold text-[#F8BC04] sm:text-[32px]">
          Healthcare
        </h3>

        <p className="mx-auto mt-5 max-w-[300px] text-[13px] leading-relaxed text-[#FFFFFF]/75 sm:text-[14px]">
          Helping healthcare brands build trust, improve digital visibility and
          connect with patients through meaningful communication.
        </p>
      </div>

      {/* E-COMMERCE */}
      <div className="rounded-[16px] bg-[#171717] p-8 text-center sm:p-10">
        <h3 className="text-[28px] font-semibold text-[#F8BC04] sm:text-[32px]">
          E-Commerce
        </h3>

        <p className="mx-auto mt-5 max-w-[300px] text-[13px] leading-relaxed text-[#FFFFFF]/75 sm:text-[14px]">
          Driving product visibility, customer engagement and conversions
          through effective digital marketing strategies.
        </p>
      </div>

      {/* EDUCATION */}
      <div className="rounded-[16px] bg-[#171717] p-8 text-center sm:p-10">
        <h3 className="text-[28px] font-semibold text-[#F8BC04] sm:text-[32px]">
          Education
        </h3>

        <p className="mx-auto mt-5 max-w-[300px] text-[13px] leading-relaxed text-[#FFFFFF]/75 sm:text-[14px]">
          Supporting educational institutions with strategies that increase
          awareness, engagement and student enquiries.
        </p>
      </div>

    </div>

  </div>
</section>


{/* =========================================================
    E-COMMERCE WEBSITE SECTION
========================================================= */}

<section className="bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
  <div className="mx-auto max-w-[1200px]">

    {/* TOP CONTENT */}
    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">

      {/* LEFT IMAGE */}
      <div className="overflow-hidden">
        <img
          src="/citylandingpage/london/london.webp"
          alt="E-Commerce Website Design"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="max-w-[520px] text-[28px] font-semibold leading-[1.25] text-[#303030] sm:text-[34px]">
          Digital Marketing Agency
          <br />
          For Businesses In London
        </h2>

        <p className="mt-6 text-[15px] leading-relaxed text-[#4B4B4B] sm:text-[16px]">
          We navigate your online vehicle of trade with our think tank.
        </p>

        <p className="mt-4 text-[15px] leading-[1.6] text-[#4B4B4B] sm:text-[16px]">
          Big Beans Digital is a creative and results-driven digital marketing agency helping London businesses build stronger online brands and achieve meaningful growth. We combine strategy, creativity and data to create digital experiences that help businesses stand out in one of the world’s most competitive markets.
        </p>

        <p className="mt-4 text-[15px] leading-[1.6] text-[#4B4B4B] sm:text-[16px]">
          From social media marketing and brand identity to website development and performance campaigns, our digital marketing services in London are tailored to the unique goals of every business. As a trusted social media marketing agency London businesses can work with, we focus on creating strategies that improve visibility, strengthen audience engagement and support measurable results.
                  </p>
      </div>

    </div>


    {/* BOTTOM CONTENT */}
    <div className="mx-auto mt-10 max-w-[1600px] text-center">

      <h3 className="text-[20px] font-semibold text-[#3A3A3A] sm:text-[20px]">
          We believe successful marketing starts with understanding your business, your audience and your ambitions. That is why our team creates customised solutions rather than one-size-fits-all campaigns—helping startups and established businesses across London build a stronger digital presence and prepare for long-term growth.
      </h3>

      <p className="mt-2 text-[10px] leading-relaxed text-[#555555] sm:text-[13px]">
        With creative thinking, data-driven insights and a results-focused approach, Big Beans Digital delivers the best digital marketing services in London for businesses ready to move forward with confidence.
      </p>

    </div>

  </div>
</section>


      {/* =========================================================
          CLIENT TESTIMONIALS
      ========================================================= */}
      <section className="bg-[#FFFFFF] px-4 py-5 sm:px-6 sm:py-5 lg:px-8 lg:py-5 xl:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="max-w-[620px] text-[30px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#292929] sm:text-[38px] md:text-[46px] lg:text-[52px]">
                What Our Clients
                <br />
                Say About Us
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="flex items-start lg:pt-12 xl:pt-14"
            >
              <p className="max-w-[620px] text-[15px] leading-[1.75] text-[#4D5968] sm:text-[16px] lg:text-[17px]">
                London businesses trust Big Beans Digital for creative, results-driven digital marketing strategies that deliver real value. From social media marketing and branding to website development and performance campaigns, discover what our clients have to say about working with our London-focused digital marketing team.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className={`relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] px-8 py-9 shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.11)] sm:min-h-[320px] sm:px-10 sm:py-10 ${
                  testimonial.featured
                    ? "bg-[#F8BC04] text-[#171717]"
                    : "bg-white text-[#334155]"
                }`}
              >
                <Quote
                  size={38}
                  strokeWidth={2.4}
                  className={`absolute right-8 top-8 sm:right-9 sm:top-9 ${
                    testimonial.featured
                      ? "text-[#FFF1B8]"
                      : "text-[#F8BC04]"
                  }`}
                />

                <p
                  className={`max-w-[310px] text-[15px] italic leading-[1.75] sm:text-[16px] ${
                    testimonial.featured
                      ? "text-[#252525]"
                      : "text-[#526071]"
                  }`}
                >
                  {testimonial.quote}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[17px] font-semibold ${
                      testimonial.featured
                        ? "bg-white text-[#171717]"
                        : "bg-[#F8BC04] text-[#171717]"
                    }`}
                  >
                    {testimonial.initial}
                  </div>

                  <div>
                    <h3
                      className={`text-[17px] font-semibold ${
                        testimonial.featured
                          ? "text-[#171717]"
                          : "text-[#26313F]"
                      }`}
                    >
                      {testimonial.name}
                    </h3>

                    <p
                      className={`mt-1 text-[14px] sm:text-[15px] ${
                        testimonial.featured
                          ? "text-[#5A4610]"
                          : "text-[#657080]"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION
      ========================================================= */}
      <section
        id="services"
        className="bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:px-10"
      >
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[18px] bg-[#08090B] px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-7 xl:px-10"
          >
            <div className="relative grid gap-6 border-b border-white/10 pb-4 lg:grid-cols-[1.25fr_1fr_220px] lg:items-center">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#F8BC04] sm:text-[10px]">
                  Services
                </p>

                <h2 className="mt-3 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#F2F2F2] sm:text-[38px] lg:text-[46px] xl:text-[52px]">
                  Everything You Need.
                  <br />
                  <span className="relative inline-block">
                    Growth
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#F8BC04]" />
                  </span>{" "}
                  You Want.
                </h2>
              </div>

              <p className="max-w-[360px] text-[14px] leading-[1.7] text-[#A7A7A7] sm:text-[20px]">
                We offer end-to-end digital marketing solutions that drive real
                business results.
              </p>

              <div className="hidden justify-end lg:flex">
                <motion.a
  href="/"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/20 px-5 py-2.5 text-[10px] font-medium text-white"
>
  <span className="whitespace-nowrap">View All Services</span>

  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-[#171717]">
    <ArrowRight size={14} strokeWidth={2.5} />
  </span>
</motion.a>
              </div>
            </div>

            <div className="relative mt-4 grid gap-5 lg:grid-cols-[1.68fr_0.72fr] lg:gap-5">
              <div className="relative flex flex-col justify-between border-r-0 border-white/10 lg:min-h-[400px] lg:border-r lg:pr-5">
                <div className="absolute bottom-4 left-[1px] top-4 w-px bg-[#5D4B13]" />

                {services.map((service, index) => (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="relative grid grid-cols-[60px_minmax(0,1fr)_40px] items-center gap-3 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[88px_minmax(0,1fr)_44px] sm:gap-5 lg:grid-cols-[96px_minmax(0,1fr)_44px] lg:py-5"
                  >
                    <span className="absolute -left-[2px] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#F8BC04]" />

                    <div className="pl-6 sm:pl-7">
                      <span className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-[#F8BC04] sm:text-[44px] lg:text-[50px]">
                        {service.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[17px] font-semibold leading-tight text-white sm:text-[18px] lg:text-[20px]">
                        {service.title}
                      </h3>

                      <p className="mt-2 max-w-[500px] text-[14px] leading-[1.7] text-[#A7A7A7] sm:text-[15px]">
                        {service.description}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300 hover:border-[#F8BC04] hover:bg-[#F8BC04] hover:text-[#171717] sm:h-11 sm:w-11"
                    >
                      <ArrowRight size={19} strokeWidth={1.8} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative min-h-[280px] overflow-hidden bg-[#050607] sm:min-h-[420px] lg:min-h-[400px]"
              >
                <Image
                  src="/citylandingpage/london/services.webp"
                  alt="Big Beans Digital Marketing Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </motion.div>
            </div>

            <div className="mt-6 lg:hidden">
              <motion.a
                href="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-[10px] font-medium text-white"
              >
                <span>View All Services</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F8BC04] text-[#171717]">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL PRESENCE
      ========================================================= */}
      <section className="bg-[#FFFFFF] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div
            className="
              bg-white
              rounded-[28px]
              sm:rounded-[40px]
              border
              border-gray-200
              p-5
              sm:p-8
              lg:p-16
              grid
              lg:grid-cols-2
              gap-8
              lg:gap-12
              items-center
            "
          >
            <div>
              <p
                className="
                  uppercase
                  tracking-[4px]
                  sm:tracking-[6px]
                  text-[10px]
                  sm:text-[11px]
                  font-semibold
                  text-gray-500
                  mb-5
                  sm:mb-6
                "
              >
                Global Presence
              </p>

              <h2
                className="
                  text-[30px]
                  sm:text-[38px]
                  lg:text-[46px]
                  xl:text-[52px]
                  font-semibold
                  text-[#171717]
                  leading-tight
                "
              >
                Empowering Businesses Across{" "}
                <span className="text-[#F8BC04]">
                  12+
                </span>
                <br />
                Locations Currently
              </h2>

              <p
                className="
                  mt-6
                  sm:mt-8
                  text-[15px]
                  sm:text-[16px]
                  lg:text-[18px]
                  text-gray-600
                  leading-relaxed
                  max-w-[650px]
                "
              >
                Big Beans Digital partners with startups, entrepreneurs,
                and growing businesses across Kolkata, Delhi, Bangalore, Mumbai, Pune,
                Noida, Tripura, London, Singapore, Canada, Australia, and Nigeria.
                Our creative social media marketing, branding, and digital growth
                strategies are designed to help businesses build a stronger online
                presence, connect with their audience, and achieve sustainable
                growth—wherever they operate.
              </p>

              <div className="grid grid-cols-2 gap-5 sm:gap-10 mt-8 sm:mt-12">

                <div className="sm:border-r sm:border-black/30 sm:pr-10">

                  <h3 className="font-semibold text-[18px] sm:text-[20px]">
                    In India
                  </h3>

                  <div className="w-14 sm:w-20 h-[2px] bg-[#F8BC04] mt-2 mb-4 sm:mb-5"></div>

                  <ul className="space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] text-gray-700">

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

                  <h3 className="font-semibold text-[18px] sm:text-[20px]">
                    International Presence
                  </h3>

                  <div className="w-14 sm:w-20 h-[2px] bg-[#F8BC04] mt-2 mb-4 sm:mb-5"></div>

                  <ul className="space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] text-gray-700">

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

            <div className="relative w-full mt-4 lg:mt-0">

              <Image
                src="/maps/world-map.png"
                alt="World Map"
                width={1200}
                height={700}
                className="w-full h-auto max-w-full"
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[42%]
                  left-[67%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[27%]
                  left-[44%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[28%]
                  left-[18%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[50%]
                  left-[47%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
                  bg-[#F8BC04]
                  rounded-full
                  top-[54%]
                  left-[74%]
                  shadow-[0_0_25px_#F8BC04]
                "
              />

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
                  w-2.5
                  h-2.5
                  sm:w-4
                  sm:h-4
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

      {/* =========================================================
          FAQ SECTION
      ========================================================= */}
      <section className="bg-[#FFFFFF] px-4 py-5 sm:px-6 sm:py-5 lg:px-8 lg:py-5 xl:px-10">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-[1100px] text-center"
          >
            
            <h2 className="relative text-[30px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#292929] sm:text-[38px] md:text-[46px] lg:text-[52px]">
              Frequently Asked{" "}
              <span className="text-[#F8BC04]">Questions</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-x-5 lg:gap-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 2) * 0.08,
                  }}
                  className="overflow-hidden rounded-[20px] border border-[#D8D8D8] bg-white transition-all duration-300 hover:border-[#C8C8C8] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7 sm:py-7"
                  >
                    <span className="text-[17px] font-semibold leading-[1.5] text-[#26313F] sm:text-[17px]">
                      {faq.question}
                    </span>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#202428] text-white">
                      {isOpen ? (
                        <Minus size={20} strokeWidth={2.4} />
                      ) : (
                        <Plus size={20} strokeWidth={2.4} />
                      )}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#E8E8E8] px-6 pb-7 pt-5 sm:px-7">
                      <p className="text-[15px] leading-[1.75] text-[#626D7A] sm:text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          CTA SECTION
      ========================= */}

      <section className="relative overflow-hidden bg-[#FFFFFF] py-12 sm:py-16 lg:py-24">

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
              rounded-[28px] sm:rounded-[40px]
              bg-[#171717]
              px-5 sm:px-8
              py-10 sm:py-12
              md:px-16 md:py-16
            "
          >

            <div
              className="
                absolute
                right-0
                top-0
                h-48 w-48 sm:h-72 sm:w-72
                rounded-full
                bg-[#F8BC04]/20
                blur-[100px] sm:blur-[120px]
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
                gap-8 sm:gap-10
                lg:flex-row
              "
            >

              <div className="w-full text-center lg:text-left">

                <h2
                  className="
                    max-w-3xl
                    text-[30px] sm:text-[38px] md:text-[46px] lg:text-[52px]
                    font-semibold
                    leading-[1.1]
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
                    mt-5 sm:mt-6
                    max-w-2xl
                    text-[15px] sm:text-[16px] lg:text-[18px]
                    leading-7 sm:leading-8
                    text-white/80
                  "
                >
                  Partner with Big Beans Digital to launch
                  data-driven digital marketing campaigns that
                  generate quality leads, increase conversions
                  and accelerate your business growth.
                </p>

              </div>

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
                  rounded-full
                  bg-[#F8BC04]
                  w-full sm:w-auto
                  px-7 sm:px-10
                  py-4 sm:py-5
                  text-base sm:text-lg
                  font-bold
                  text-[#171717]
                  text-center
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

    </main>
  );
}
