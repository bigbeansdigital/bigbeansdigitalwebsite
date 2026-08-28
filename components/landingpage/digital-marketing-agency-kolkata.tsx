"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ArrowDownRight,
  CircleCheck,
  Globe2,
  LayoutDashboard,
  Lightbulb,
  Minus,
  Monitor,
  MousePointerClick,
  Palette,
  Plus,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import OurWork from "@/components/Recentwork";


const processSteps = [
 
  {
    number: "01",
    title: "Research",
    description:
      "Our team researches market opportunities, competitors, audience behaviour, content opportunities and digital positioning.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a customised strategy covering social media planning, content strategy, branding direction, website planning and advertising.",
    icon: Target,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Our creative team brings the strategy to life through social media content, brand designs, campaign creatives and digital experiences.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We implement the agreed strategy through social media management, content publishing, website development, Google Ads and Meta Ads.",
    icon: MousePointerClick,
  },
  {
    number: "05",
    title: "Monitor",
    description:
      "We review relevant indicators including reach, engagement, website traffic, leads, campaign activity and conversion-related data.",
    icon: LayoutDashboard,
  },
  {
    number: "06",
    title: "Optimise",
    description:
      "We use insights to identify opportunities and improve future activity as digital marketing continuously evolves.",
    icon: TrendingUp,
  },
];

const industries = [
  {
    title: "Real Estate",
    description:
      "Digital campaigns and creative communication for property, projects and real estate services.",
  },
  {
    title: "Education & Training",
    description:
      "Content and campaigns for educational institutions, courses and training providers.",
  },
  {
    title: "Fashion & Beauty",
    description:
      "Creative visual storytelling, branding and product communication.",
  },
  {
    title: "Food & Restaurants",
    description:
      "Engaging digital content and campaigns for restaurants, cafés and food brands.",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Creative marketing that communicates experiences, destinations and services.",
  },
  {
    title: "FMCG Products",
    description:
      "Creative marketing that communicates experiences, destinations and services.",
  },
  
  
];

const reasons = [
  {
    title: "Creative Thinking",
    description:
      "We believe powerful creativity helps brands capture attention and become more memorable.",
    icon: Sparkles,
  },
  {
    title: "Strategy-Driven Approach",
    description:
      "Our creative work is supported by clear business objectives.",
    icon: Target,
  },
  {
    title: "Connected Digital Services",
    description:
      "We combine social media marketing, design and branding, website development and performance marketing.",
    icon: Globe2,
  },
  {
    title: "Customised Solutions",
    description:
      "We understand that every business requires a different approach.",
    icon: Lightbulb,
  },
  {
    title: "Brand Consistency",
    description:
      "We help businesses create more consistent communication across their digital channels.",
    icon: CircleCheck,
  },
  {
    title: "Performance-Focused Advertising",
    description:
      "Our Google Ads and Meta Ads strategies are developed around measurable campaign objectives.",
    icon: TrendingUp,
  },
];

const faqs = [
  {
    question: "What does a social media marketing agency in Kolkata do?",
    answer:
      "A social media marketing agency helps businesses develop and manage their presence across relevant social media platforms. Services can include strategy, content planning, creative design, content creation, account management, campaign planning and performance monitoring.",
  },
  {
    question: "Why should I hire a social media marketing agency for my Kolkata business?",
    answer:
      "A professional agency can provide strategic expertise, creative resources and consistent management. This can help businesses build a more professional digital presence while allowing internal teams to focus on their core operations.",
  },
  {
    question: "What social media marketing services does Big Beans Digital provide?",
    answer:
      "Big Beans Digital provides social media strategy, social media management, content planning, creative content, Instagram marketing, Facebook marketing, LinkedIn marketing and customised social media solutions.",
  },
  {
    question: "Does Big Beans Digital provide branding services?",
    answer:
      "Yes. We provide Design & Branding services including brand identity, logo design, visual communication, marketing creatives and social media design.",
  },
  {
    question: "Does Big Beans Digital provide website development services?",
    answer:
      "Yes. We create business websites, corporate websites, landing pages and responsive digital experiences based on business requirements.",
  },
  {
    question: "Do you provide Google Ads services?",
    answer:
      "Yes. Big Beans Digital provides Google Ads services as part of our Performance Marketing solutions.",
  },
  {
    question: "Do you provide Meta Ads services?",
    answer:
      "Yes. We provide Meta Ads services, including advertising campaigns across Facebook and Instagram.",
  },
  {
    question: "How much do social media marketing services cost in Kolkata?",
    answer:
      "The cost depends on your requirements, including the number of platforms, amount of content, creative requirements, campaign objectives and additional services. A customised proposal can be developed based on your business needs.",
  },
  {
    question: "Which social media platform is best for my Kolkata business?",
    answer:
      "The best platform depends on your audience and objectives. Instagram may work well for visual brands, LinkedIn can support B2B communication, while Facebook can support broader communities and audience engagement.",
  },
  {
    question: "Can social media marketing help generate leads?",
    answer:
      "Yes. Social media marketing can support lead generation when combined with appropriate content, targeting, campaigns and a clear conversion journey.",
  },
  {
    question: "How long does it take to see social media marketing results?",
    answer:
      "Results depend on your industry, competition, objectives, existing digital presence and strategy. Organic growth generally requires consistency over time, while paid advertising can provide faster performance data.",
  },
  {
    question: "Does Big Beans Digital work only with Kolkata businesses?",
    answer:
      "No. While we provide services for businesses targeting Kolkata, Big Beans Digital also works with businesses across the Kolkata, India and other markets.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function SocialMediaMarketingKolkata() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-w-0 overflow-x-hidden bg-white text-[#171717]">
      
      
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
                      <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#353535] sm:text-[10px]">
                        Grow Your Brand, Build Meaningful Engagement & Turn Social Media into a Powerful Growth Channel
                      </span>
                    </div>
      
      
                    <h1 className="max-w-[700px] text-[42px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[54px] md:text-[60px] lg:text-[64px] xl:text-[68px] 2xl:text-[72px]">
          <span className="text-[#F8BC04]">Creative Social Media Marketing Agency</span>  in Kolkata
      </h1>
      
                    <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-[#3F3F3F] sm:text-[16px] lg:mt-6 lg:text-[17px]">
                     Big Beans Digital is a creative social media marketing agency in Kolkata helping businesses build strong digital identities, create engaging content and connect with the right audience.

We combine creative thinking, strategic social media marketing, professional design and branding, website development and performance marketing to help businesses build a stronger presence in the digital world.

Whether you are a startup, local business, growing company or established organisation, our team creates customised digital strategies based on your business goals and target audience.
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
      
                    
                  </motion.div>
      
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, x: 35 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="relative mx-auto w-full max-w-[850px] lg:max-w-none"
                  >
                    <div className="relative aspect-[1.3/1] min-h-[360px] overflow-hidden rounded-[26px] sm:min-h-[480px] lg:min-h-[520px] xl:min-h-[610px]">
                      <Image
                        src="/citylandingpage/Kolkata/Kolkata.webp"
                        alt="Kolkata Digital Marketing Agency"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

      {/* ========================================================= */}
      {/* DIGITAL OPPORTUNITY */}
      {/* ========================================================= */}

      <section className="bg-white py-12 sm:py-16 lg:py-10">
        <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#d89f00]">
              The Digital Opportunity
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Your Kolkata Audience Is Already Online. Is Your Brand Reaching Them?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Social media has changed the way people discover businesses,
              explore products and services, compare brands and make purchasing
              decisions.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:-translate-y-5"
            >
              <p className="text-lg leading-relaxed text-gray-600">
                Today, customers do not always wait until they need something to
                search for a business. Instead, they discover brands while
                exploring content online.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Scrolling through Instagram",
                  "Discovering businesses on Facebook",                  
                  "Connecting professionally on LinkedIn",
                  "Searching for products and services online",
                  "Comparing brands with competitors",
                  "Looking for recommendations",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-md"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8BC04]/15">
                      <Check size={15} className="text-[#b98700]" />
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* IMAGE - CHANGE THIS SRC TO YOUR FINAL IMAGE */}
              <div className="relative mt-5 h-[150px] overflow-hidden rounded-2xl sm:h-[180px] lg:h-[200px]">
                <Image
                  src="/images/digital-opportunity.jpg"
                  alt="Digital marketing opportunity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] bg-black p-7 text-white sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8BC04]">
                <Users className="text-black" size={27} />
              </div>

              <h3 className="mt-7 text-3xl font-bold leading-tight">
                Your potential customers may already be online.
              </h3>

              <div className="mt-7 space-y-4">
                {[
                  "They are already visiting websites before making contact.",
                  "They are already visiting websites before making contact.",
                  "They are already visiting websites before making contact.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#F8BC04]" />

                    <p className="text-white/70">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#F8BC04] p-5 text-black">
                <p className="text-sm text-black/60">The question is:</p>

                <h4 className="mt-2 text-xl font-bold">
                  Is Your Brand Creating Enough Attention in a Competitive Digital Market?
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY SOCIAL MEDIA */}
      {/* ========================================================= */}

      <section className="bg-white py-12 sm:py-16 lg:py-10">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* IMAGE - CHANGE THIS SRC TO YOUR FINAL IMAGE */}
              <div className="relative mb-6 h-[180px] overflow-hidden rounded-2xl sm:h-[220px] lg:h-[250px]">
                <Image
                  src="/images/why-it-matters.jpg"
                  alt="Why social media marketing matters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-[4px] text-[#d89f00]">
                Why It Matters
              </p>

              <h2 className="relative z-10 mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Why Social Media Marketing Is Important for Businesses in Kolkata
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                Social media is no longer only a communication platform. It has
                become an important part of the modern business ecosystem.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Who you are and what you offer.",
                "What your brand represents.",
                "Whether you look professional.",
                "Whether your services are relevant to them.",
                "What makes you different.",
                "Whether they can trust your business.",
                "Social media can increase brand awareness and audience engagement.",
                "Creativity and consistency can make a significant difference.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-[#d89f00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ABOUT */}
      {/* ========================================================= */}

      <section className="bg-white py-12 sm:py-16 lg:py-10">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[30px] bg-[#F8BC04] p-8 sm:p-10"
          >

            <p className="relative z-10 mt-9 text-xs font-bold uppercase tracking-[4px] text-black/60">
              About Big Beans Digital
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Big Beans Digital 
              <br></br>Your Creative Digital Marketing Partner for Kolkata
            </h2>

            <p className="relative z-10 mt-5 leading-relaxed text-black/70">
              We help businesses build, communicate and grow their brands in the
              digital world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-600">
              We believe successful digital marketing requires more than simply
              creating posts or running advertisements.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              A strong digital presence requires strategy, creativity,
              consistency, strong branding, professional design, user-friendly
              digital experiences, targeted advertising and performance analysis.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Social Media",
                "Connected Strategy",
                "Website",
                "Connected Strategy",
                "Clear Strategy",
                "Strategic Execution",
                "Connected Strategy",
                "Business Objectives",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium transition-all hover:border-[#F8BC04]"
                >
                  <Check size={16} className="text-[#d89f00]" />

                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      
{/* ========================================================= */}
{/* OUR DIGITAL MARKETING SERVICES */}
{/* ========================================================= */}

<section className="bg-white py-12 sm:py-16 lg:py-10">
  <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
    <div className="rounded-[28px] bg-[#050505] p-6 text-white sm:p-8 lg:p-10">
      
      {/* SECTION HEADER */}
      <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[5px] text-[#F8BC04]">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Our{" "}
            <span className="text-[#F8BC04]">
              Digital Marketing
            </span>{" "}
            Services
          </h2>

          <p className="mt-3 max-w-[650px] text-sm leading-relaxed text-white/60">
            Big Beans Digital provides a complete range of creative and
            performance-focused digital services designed around your business
            goals.
          </p>
        </div>

        {/* KNOW MORE - HOME PAGE */}
        <Link
          href="/"
          className="group flex w-fit items-center gap-2 rounded-full border border-[#F8BC04] bg-[#F8BC04] px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-white"
        >
          Know More
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* SERVICES GRID */}
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        
        {/* 01 SOCIAL MEDIA MARKETING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:p-5"
        >
          <div className="relative h-[120px] overflow-hidden rounded-xl border border-white/10 sm:h-[150px]">
            <Image
              src="/images/social-media-marketing.jpg"
              alt="Social Media Marketing"
              fill
              className="object-cover"
            />
          </div>

          {/* HEADING + KNOW MORE */}
          <div className="mt-5 flex items-center justify-between gap-4">
            <h3 className="text-lg font-bold sm:text-xl">
              Social Media Marketing
            </h3>

            <Link
              href="/services/social-media-marketing"
              className="group flex shrink-0 items-center gap-1 text-sm font-semibold text-[#F8BC04] transition-all hover:text-white"
            >
              Know More
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-3 text-xs font-semibold text-[#F8BC04]">
            Build Visibility and Meaningful Audience Engagement
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/60">
            We create social media strategies and content designed to help
            Kolkata businesses build visibility, engagement and stronger
            audience connections.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Social Media Strategy
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Social Media Management
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Content Planning
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Social Media Calendars
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Creative Content
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Instagram, Facebook & LinkedIn
            </div>
          </div>
        </motion.div>

        {/* 02 DESIGN & BRANDING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:p-5"
        >
          <div className="relative h-[120px] overflow-hidden rounded-xl border border-white/10 sm:h-[150px]">
            <Image
              src="/images/design-branding.jpg"
              alt="Design and Branding"
              fill
              className="object-cover"
            />
          </div>

          

          {/* HEADING + KNOW MORE */}
          <div className="mt-5 flex items-center justify-between gap-4">
            <h3 className="text-lg font-bold sm:text-xl">
              Design & Branding
            </h3>

            <Link
              href="/services/branding"
              className="group flex shrink-0 items-center gap-1 text-sm font-semibold text-[#F8BC04] transition-all hover:text-white"
            >
              Know More
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-3 text-xs font-semibold text-[#F8BC04]">
            Build a Brand That People Recognise
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/60">
            We develop creative visual identities and communication that help
            businesses become more recognisable and consistent.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Brand Identity
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Logo Design
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Visual Communication
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Social Media Design
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Campaign Creatives
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Marketing Design
            </div>
          </div>
        </motion.div>

        {/* 03 WEBSITE DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:p-5"
        >
          <div className="relative h-[120px] overflow-hidden rounded-xl border border-white/10 sm:h-[150px]">
            <Image
              src="/images/website-development.jpg"
              alt="Website Development"
              fill
              className="object-cover"
            />
          </div>

          

          {/* HEADING + KNOW MORE */}
          <div className="mt-5 flex items-center justify-between gap-4">
            <h3 className="text-lg font-bold sm:text-xl">
              Website Development
            </h3>

            <Link
              href="/services/website-development"
              className="group flex shrink-0 items-center gap-1 text-sm font-semibold text-[#F8BC04] transition-all hover:text-white"
            >
              Know More
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-3 text-xs font-semibold text-[#F8BC04]">
            Create a Website That Represents Your Business Professionally
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/60">
            We create professional, responsive and user-focused digital
            experiences that represent your business and support growth.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Business Websites
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Corporate Websites
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Landing Pages
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Service Websites
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Portfolio Websites
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Responsive Development
            </div>
          </div>
        </motion.div>

        {/* 04 PERFORMANCE MARKETING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:p-5"
        >
          <div className="relative h-[120px] overflow-hidden rounded-xl border border-white/10 sm:h-[150px]">
            <Image
              src="/images/performance-marketing.jpg"
              alt="Performance Marketing"
              fill
              className="object-cover"
            />
          </div>

          {/* HEADING + KNOW MORE */}
          <div className="mt-5 flex items-center justify-between gap-4">
            <h3 className="text-lg font-bold sm:text-xl">
              Performance Marketing
            </h3>

            <Link
              href="/services/google-ads-meta-ads"
              className="group flex shrink-0 items-center gap-1 text-sm font-semibold text-[#F8BC04] transition-all hover:text-white"
            >
              Know More
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-3 text-xs font-semibold text-[#F8BC04]">
            Google Ads and Meta Ads for Business Growth
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Paid advertising can help businesses reach targeted audiences more
            quickly and support measurable campaign growth.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Google Ads
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Meta Ads
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Audience Targeting
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Lead Generation Campaigns
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Remarketing
            </div>

            <div className="flex items-center gap-2">
              <Check size={12} className="text-[#F8BC04]" />
              Campaign Optimisation
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>


{/* =========================================================
          OUR WORK CROUSAL
      ========================================================= */}
        <OurWork />


      {/* ========================================================= */}
{/* OUR PROCESS */}
{/* ========================================================= */}

<section className="bg-white py-12 sm:py-16 lg:py-10">
  <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-10">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[5px] text-[#d89f00]">
        Our Process
      </p>

      <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
        How Big Beans Digital{" "}
        <span className="text-[#F8BC04]">
          Works With Your Brand
        </span>
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-gray-600">
        Successful digital marketing starts with understanding the business.
        Our process ensures that strategy, creativity and execution work
        together.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-6">
      {processSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -5 }}
            className="min-w-0 rounded-[24px] border border-gray-200 bg-white p-5 sm:p-6 transition-all hover:border-[#F8BC04] hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-black">
                <Icon size={24} />
              </div>

              <span className="text-2xl font-bold text-gray-200 sm:text-3xl">
                {step.number}
              </span>
            </div>

            <h3 className="mt-7 text-xl font-bold">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* ========================================================= */}
      {/* INDUSTRIES */}
      {/* ========================================================= */}

      <section className="bg-white py-12 sm:py-16 lg:py-10">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[5px] text-[#d89f00]">
                Diverse Experience
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Industries We Have{" "}
                <span className="text-[#F8BC04]">
                  Worked With
                </span>
              </h2>
            </div>

            <p className="max-w-xl leading-relaxed text-gray-600">
              Every industry communicates differently. We create digital and
              creative solutions designed around different audiences, industries
              and business requirements.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-[#F8BC04] hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#d89f00]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
{/* WHY CHOOSE US */}
{/* ========================================================= */}

<section className="bg-white py-12 sm:py-16 lg:py-10">
  <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-10">
    <div className="rounded-[24px] bg-black p-5 text-white sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10 xl:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[5px] text-[#F8BC04]">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Why Choose Big Beans Digital as Your{" "}
          <span className="text-[#F8BC04]">
            Creative Agency for Kolkata?
          </span>
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-white/60">
          Choosing the right agency means choosing a team that understands
          both creativity and business objectives.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3 lg:gap-5 xl:grid-cols-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-[#F8BC04]/60 sm:p-5 lg:p-6"
            >
              <Icon
                className="text-[#F8BC04]"
                size={26}
              />

              <h3 className="mt-5 text-base font-bold sm:text-lg lg:text-xl">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {reason.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      
{/* ========================================================= */}
{/* ONE CREATIVE PARTNER */}
{/* ========================================================= */}

<section className="bg-white py-12 sm:py-16 lg:py-10">
  <div className="mx-auto grid max-w-[1200px] gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
    
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:-translate-y-5"
    >
      
      <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
        One Creative Partner for Your{" "}
        <span className="text-[#F8BC04]">
          Digital Growth
        </span>
      </h2>

      <p className="mt-6 leading-relaxed text-gray-600">
        Many businesses work with separate vendors for social media, design,
        branding, websites, Google Ads and Meta Ads. This can sometimes result
        in inconsistent communication.
      </p>

      <p className="mt-5 leading-relaxed text-gray-600">
        Big Beans Digital brings multiple creative and digital services together
        to help your digital ecosystem work in a more connected way.
      </p>

      {/* IMAGE - CHANGE THIS SRC TO YOUR FINAL IMAGE */}
      <div className="relative mt-6 h-[200px] overflow-hidden rounded-2xl sm:h-[260px] lg:h-[280px]">
        <Image
          src="/images/connected-digital-growth.jpg"
          alt="Connected Digital Growth"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-[30px] border border-gray-200 bg-white p-5 sm:p-8"
    >
      <div className="space-y-4">

        {/* CONNECTED STRATEGY */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          whileHover={{ y: -3 }}
          className="group relative flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-[#F8BC04] hover:shadow-md sm:p-6"
        >
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[#171717]">
              Build Your Social Media Presence
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Make Sure that your brand is visible where your customers are there
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
            <ArrowDownRight size={20} strokeWidth={2.5} />
          </span>
        </motion.a>

        {/* BRAND IDENTITY */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          whileHover={{ y: -3 }}
          className="group relative flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-[#F8BC04] hover:shadow-md sm:p-6"
        >
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[#171717]">
              Brand Identity
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Make Sure that your business looks like a Brand
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
            <ArrowDownRight size={20} strokeWidth={2.5} />
          </span>
        </motion.a>

        {/* DIGITAL GROWTH */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          whileHover={{ y: -3 }}
          className="group relative flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-[#F8BC04] hover:shadow-md sm:p-6"
        >
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[#171717]">
              Digital Precence
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Bring your customers where they can connect and take your service
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
            <ArrowDownRight size={20} strokeWidth={2.5} />
          </span>
        </motion.a>

        {/* ADVERTISING */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          whileHover={{ y: -3 }}
          className="group relative flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-[#F8BC04] hover:shadow-md sm:p-6"
        >
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[#171717]">
              Advertising
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Growing your business and reaching more and more audiance
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
            <ArrowDownRight size={20} strokeWidth={2.5} />
          </span>
        </motion.a>

      </div>
    </motion.div>
  </div>
</section>



{/* ========================================================= */}
{/* LOCAL SEO */}
{/* ========================================================= */}

<section className="bg-white py-12 sm:py-16 lg:py-10">
  <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
    <div className="rounded-[24px] border border-[#F8BC04] bg-[#F8BC04] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        
        <div>
          

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#171717] sm:text-4xl">
            Looking for a Creative Social Media Marketing Agency in{" "}
            <span className="text-white">
              Kolkata?
            </span>
          </h2>

          <p className="mt-5 leading-relaxed text-[#171717]/75">
            We create customised digital solutions based on your business,
            audience and growth objectives.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Creative Social Media Marketing Agency in Kolkata",
            "Social Media Marketing Agency Kolkata",
            "Social Media Management Services Kolkata",
            "Creative Agency Kolkata",
            "Branding Agency Kolkata",
            "Website Development Company Kolkata",
            "Google Ads Agency Kolkata",
            "Meta Ads Agency Kolkata",
            "Performance Marketing Agency Kolkata",
            "Digital Marketing Services Kolkata",
          ].map((keyword) => (
            <div
              key={keyword}
              className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/90 p-4 transition-all hover:bg-white"
            >
              <Check
                size={17}
                className="shrink-0 text-[#b98700]"
              />

              <span className="text-sm font-medium text-gray-700">
                {keyword}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>

      {/* ========================================================= */}
{/* FINAL CONTENT */}
{/* ========================================================= */}

<section className="bg-white py-12 sm:py-16 lg:py-10">
  <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
    <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      
      {/* LEFT IMAGE */}
      <div className="relative min-h-[280px] overflow-hidden rounded-[24px] sm:min-h-[380px] lg:min-h-0">
        <Image
          src="/images/creative-digital-growth-partner.jpg"
          alt="Big Beans Digital Creative Digital Growth Partner"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-center">
        <p className="text-xs font-bold uppercase tracking-[5px] text-[#d89f00]">
          Your Digital Growth Partner
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Your Creative Digital Growth Partner for Kolkata
        </h2>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
          <p>
            If you are looking for a creative social media marketing agency in
            Kolkata that understands the connection between creativity,
            branding, technology and performance, Big Beans Digital can be your
            digital growth partner.
          </p>

          <p>
            From creating engaging social media content to building memorable
            brands, developing professional websites and running targeted Google
            Ads and Meta Ads campaigns, we help businesses create a connected
            digital ecosystem.
          </p>

          <p>
            We do not believe in random marketing activities. We believe in
            understanding the business first, then understanding the audience,
            creating the right strategy and bringing that strategy to life
            through creativity, technology and performance marketing.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ========================================================= */}
      {/* GLOBAL PRESENCE - PROVIDED CODE */}
      {/* ========================================================= */}

      <section className="bg-[#FFFFFF] py-12 sm:py-16 lg:py-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="text-[#F8BC04]">12+</span>
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
                Big Beans Digital partners with startups, entrepreneurs, and
                growing businesses across Kolkata, Delhi, Bangalore, Mumbai,
                Pune, Noida, Tripura, Kolkata, Singapore, Canada, Australia, and
                Nigeria. Our creative social media marketing, branding, and
                digital growth strategies are designed to help businesses build a
                stronger online presence, connect with their audience, and
                achieve sustainable growth—wherever they operate.
              </p>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 mt-8 sm:mt-12">
                <div className="sm:border-r sm:border-black/30 sm:pr-10">
                  <h3 className="font-semibold text-[18px] sm:text-[20px]">
                    In India
                  </h3>

                  <div className="w-14 sm:w-20 h-[2px] bg-[#F8BC04] mt-2 mb-4 sm:mb-5" />

                  <ul className="space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] text-gray-700">
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
                  <h3 className="font-semibold text-[18px] sm:text-[20px]">
                    International Presence
                  </h3>

                  <div className="w-14 sm:w-20 h-[2px] bg-[#F8BC04] mt-2 mb-4 sm:mb-5" />

                  <ul className="space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] text-gray-700">
                    {[
                      "Kolkata",
                      "Singapore",
                      "Canada",
                      "Australia",
                      "Nigeria",
                    ].map((country) => (
                      <li key={country} className="flex items-center gap-2">
                        <span className="text-[#F8BC04]">●</span>
                        {country}
                      </li>
                    ))}
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
      <section className="bg-[#FFFFFF] px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-10 xl:px-10">
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

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="bg-white py-12 sm:py-16 lg:py-10">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[24px] bg-black px-5 py-10 sm:rounded-[28px] sm:px-10 sm:py-14 lg:rounded-[32px] lg:px-20 lg:py-16"
          >
            <div className="absolute right-[-25%] top-[-35%] h-[300px] w-[300px] sm:right-[-10%] sm:top-[-40%] sm:h-[450px] sm:w-[450px] rounded-full bg-[#F8BC04]/15 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[5px] text-[#F8BC04]">
                Ready When You Are
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Ready to Build a{" "}
                <span className="text-[#F8BC04]">
                  Stronger Digital Presence?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
                Your customers are online. Your competitors are creating content.
                Your brand deserves a digital presence that is creative,
                professional and strategically managed.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {[
                  "Social Media Marketing",
                  "Design & Branding",
                  "Website Development",
                  "Google Ads",
                  "Meta Ads",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="mt-9 text-2xl font-bold text-white sm:text-3xl">
                Let&apos;s Create a Digital Strategy That Works for Your{" "}
                <span className="text-[#F8BC04]">
                  Brand.
                </span>
              </h3>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a
                  href="/connect"
                  className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#F8BC04] px-7 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(248,188,4,0.3)]"
                >
                  Request a Call Back

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/connect"
                  className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/20 px-7 text-sm font-bold text-white transition-all hover:bg-white hover:text-black"
                >
                  Get a Free Consultation

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}