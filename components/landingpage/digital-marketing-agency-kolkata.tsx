"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Megaphone,
  Search,
  Palette,
  Monitor,
  BarChart3,
  ArrowDownRight,
  Target,
  Users,
  Lightbulb,
  MousePointer2,
  ChartNoAxesCombined,
} from "lucide-react";
import { useState } from "react";
import OurWork from "@/components/Recentwork";



function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const keyword = part.slice(2, -2);
          const href = ({
  "digital marketing agency in London":
    "https://www.bigbeansdigital.com/",
  "London SEO agencies": "https://www.bigbeansdigital.com/",
  "SEO London agency": "https://www.bigbeansdigital.com/",
  "SEO agency London UK": "https://www.bigbeansdigital.com/",
  "SEO agencies": "https://www.bigbeansdigital.com/",
  "PPC agency London":
    "https://www.bigbeansdigital.com/services/google-ads-meta-ads",
  "PPC management agency London":
    "https://www.bigbeansdigital.com/services/google-ads-meta-ads",
  "Facebook Ads agency UK":
    "https://www.bigbeansdigital.com/services/google-ads-meta-ads",
  "creative ad agencies London":
    "https://www.bigbeansdigital.com/services/branding",
  "ad agencies London": "https://www.bigbeansdigital.com/services/branding",
  "ad agency London": "https://www.bigbeansdigital.com/services/branding",
  "creative advertising agencies London":
    "https://www.bigbeansdigital.com/services/branding",
  "advertising agency London":
    "https://www.bigbeansdigital.com/services/branding",
  "top digital marketing agencies UK": "https://www.bigbeansdigital.com/",
  "top digital marketing companies in UK":
    "https://www.bigbeansdigital.com/",
  "marketing agency Birmingham UK": "https://www.bigbeansdigital.com/",
} as Record<string, string>)[keyword] || "https://www.bigbeansdigital.com/";

          return (
            <Link
              key={index}
              href={href}
              className="font-semibold text-inherit no-underline transition-opacity hover:opacity-70"
            >
              {keyword}
            </Link>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-white py-5 sm:py-7 lg:py-8 ${className}`}>
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

function SectionTitle({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.035em] text-black sm:text-[32px] lg:text-[38px]">
        {children}
      </h2>
    </motion.div>
  );
}


export default function DigitalMarketingLondonPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main className="overflow-hidden bg-white text-black">
      {/* HERO Section */}
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-14 xl:gap-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-[720px]"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[10px] font-bold tracking-[0.18em] text-black sm:text-[11px]"
            >
              Helping Kolkata Businesses Build Stronger Brands, Reach the Right Audience and Grow Online
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-[700px] text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-black sm:text-[44px] lg:text-[50px] xl:text-[54px]"
            >
              <span className="text-[#F8BC04]">Digital Marketing Agency</span>{" "}
              in London
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-6 max-w-[690px] space-y-7 text-[14px] leading-7 text-black/70 sm:text-[15px] sm:leading-8"
            >
              <p>
                <RichText text="Looking for a **best digital marketing agency Kolkata** businesses can work with for a more strategic and connected online presence? Big Beans Digital helps businesses strengthen their brand, reach relevant audiences, generate meaningful enquiries and build digital marketing strategies around real business goals." />
              </p>

              <p>
                <RichText text="From social media and creative advertising to website development and performance marketing, we help businesses address common challenges such as wasted advertising budgets, inconsistent branding, low-quality leads, websites that fail to convert and marketing activities with no clear direction. As a **Kolkata digital marketing agency**, Big Beans Digital focuses on bringing the right digital activities together to help businesses move towards clearer, more measurable growth." />
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="https://api.whatsapp.com/send?phone=916289102537&text=Hello%20Big%20Beans%20%0AWould%20like%20to%20Book%20Your%20Free%20Strategy%20Call!"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#F8BC04] px-6 text-[13px] font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(248,188,4,0.28)]"
              >
                Book Your Free Strategy Call
                <span className="grid h-6 w-6 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </Link>

              <Link
                href="https://www.bigbeansdigital.com/about"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 bg-white px-7 text-[13px] font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
              >
                Know More About Big Beans
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[760px]"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[1.24/1] min-h-[300px] overflow-hidden rounded-[28px] bg-black shadow-[0_20px_55px_rgba(0,0,0,0.12)] sm:min-h-[420px] lg:min-h-[500px]"
            >
              <Image
                src="/landingpage/hero.webp"
                alt="Digital Marketing Agency in Kolkata"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section>
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
      
      {/* LEFT IMAGE */}
      <motion.div
        variants={fadeUp}
        className="relative min-h-[260px] overflow-hidden rounded-[24px] bg-black sm:min-h-[320px]"
      >
        <Image
          src="/landingpage/notice.webp"
          alt="Digital marketing challenges"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col justify-center"
      >
        {/* HEADING */}
        <h2 className="text-[28px] font-bold leading-tight text-[#171717] sm:text-[34px] lg:text-[40px]">
          Is Your Digital Marketing Helping Your Kolkata Business Grow?
          <span className="text-[#F8BC04]">
            
          </span>
        </h2>

        <p className="mt-5 text-[14px] leading-7 text-black/70 sm:text-[15px]">
          London is one of the most competitive business markets in the UK.
          Customers have more choices, advertising costs can quickly add up
          and simply being present online does not guarantee that the right
          people will find or choose your business.
        </p>

        
        <p className="mt-4 text-[14px] leading-7 text-black/70 sm:text-[15px]">
          Many businesses invest in SEO, social media, PPC and creative
          campaigns without a clear connection between those activities and
          their actual business objectives. The result can be plenty of
          marketing activity but very little clarity about what is working.
        </p>
      </motion.div>

    </div>

    {/* COMMON CHALLENGES */}
    <motion.h3
  variants={fadeUp}
  className="mt-7 text-center text-[18px] font-semibold text-[#F8BC04] sm:text-[20px]"
>
  Common Challenges We See
</motion.h3>

    {/* CARDS */}
    <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Your Business Is Not Reaching the Right Audience",
          text: "Your marketing may be generating visibility, but if it is not reaching people who are genuinely interested in your products or services, that visibility may not translate into meaningful opportunities.",
        },
        {
          title: "Advertising Spend Is Not Delivering Enough Value",
          text: "Businesses can invest heavily in digital advertising without having the right targeting, creative messaging, landing pages or tracking in place.",
        },
        {
          title: "Your Brand Looks Different Across Every Platform",
          text: "When your website, social media, advertisements and other marketing materials communicate inconsistent messages, customers may struggle to clearly understand and remember your brand.",
        },
        {
          title: "Your Social Media Has Activity but No Clear Direction",
          text: "Posting regularly does not automatically create business value. Without a strategy, social media can become a time-consuming activity that produces content without supporting larger marketing goals.",
        },
        {
          title: "Your Website Gets Visitors but Does Not Generate Enough Enquiries",
          text: "Traffic alone is not enough. If visitors cannot quickly understand what your business offers, why they should trust you or what they should do next, opportunities can be lost.",
        },
        {
          title: "You Do Not Have a Clear Picture of What Is Working",
          text: "When different agencies, freelancers or teams handle separate activities without connected reporting, it can become difficult to understand where your marketing budget is going and what deserves further investment.",
        },
      ].map((item, index) => {
        const isYellow = index % 2 === 0;

        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className={`group rounded-[20px] border p-5 transition-all ${
              isYellow
                ? "border-[#F8BC04] bg-[#F8BC04] text-[#171717]"
                : "border-black bg-black text-white"
            }`}
          >
            {/* ICON ROW */}
            <div className="mb-4 flex items-center justify-between">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isYellow ? "bg-black" : "bg-[#F8BC04]"
                }`}
              />

              <ArrowUpRight
                size={16}
                className={`transition-transform group-hover:rotate-45 ${
                  isYellow ? "text-black" : "text-[#F8BC04]"
                }`}
              />
            </div>

            {/* TITLE */}
            <h4 className="text-[15px] font-semibold">
              {item.title}
            </h4>

            {/* DESCRIPTION */}
            <p
              className={`mt-3 text-[13px] leading-6 ${
                isYellow ? "text-black/75" : "text-white/70"
              }`}
            >
              {item.text}
            </p>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
</Section>




      {/* About Big Beans */}
      <Section>
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle>
                A Digital Marketing Partner for Businesses That Want More
                Clarity and Direction
              </SectionTitle>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-[14px] leading-7 text-black/70 sm:text-[15px]"
            >
              Big Beans Digital works with businesses that want a more connected
              approach to digital marketing. Rather than treating SEO, social
              media, advertising, branding and websites as completely separate
              activities, we look at how each part of your digital presence can
              support your wider business goals.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[14px] leading-7 text-black/70 sm:text-[15px]"
            >
              <RichText text="Whether you are searching for a **creative marketing agency in Kolkata**, a **social media marketing agency in Kolkata**, an **ad agency in Kolkata**, an **online marketing agency Kolkata** businesses can rely on, or broader digital marketing support, we begin by understanding your business before recommending the work that makes sense." />
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[14px] leading-7 text-black/70 sm:text-[15px]"
            >
              We believe good marketing should be clear, purposeful and
              accountable. That means focusing on the right audience, the right
              channels and the right priorities instead of adding unnecessary
              activity simply to make a marketing plan look bigger.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[24px] border border-black/10">
              <Image
                src="/landingpage/wedoall.webp"
                alt="Big Beans Digital"
                width={900}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      
{/* Turning Common Marketing Challenges Into Clearer Opportunities  */}
<Section>
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-[28px] border border-black/10 bg-white p-5 sm:p-7 lg:p-10"
  >
    {/* SECTION HEADING */}
    <div className="text-center">
      <h2 className="mt-2 text-2xl font-bold text-[#171717] sm:text-3xl lg:text-4xl">
        Turning Common Marketing Challenges Into Clearer Opportunities
      </h2>
    </div>

    {/* PROCESS TIMELINE */}
    <div className="relative mt-10 lg:mt-14">
      
      {/* DESKTOP CONNECTING LINE */}
      <div className="absolute left-[8%] right-[8%] top-[20px] hidden h-px bg-black/15 lg:block" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
        {[
          {
            number: "01",
            title: "Create a Clearer Marketing Direction",
            text: "If your marketing feels disconnected, we help bring your activities together around a clearer strategy. This helps connect your audience, messaging, channels and business objectives.",
          },
          {
            number: "02",
            title: "Improve Paid Social Advertising",
            text: "We help businesses think more carefully about who they need to reach and how different digital channels can support that goal. Better targeting can help create more relevant engagement and stronger opportunities.",
          },
          {
            number: "03",
            
            title: "Make Advertising More Purposeful",
            text: "Businesses looking for an **advertising agency in Kolkata** need more than attractive campaigns. We help connect advertising strategy, audience targeting, creative communication and performance measurement around meaningful objectives.",
          },
          {
            number: "04",
            title: "Build a More Consistent Brand Presence",
            text: "Our design and branding work helps businesses create stronger consistency across their website, advertising, social media and other customer touchpoints.",
          },
          {
            number: "05",
           
            title: "Improve the Customer Journey",
            text: "We look beyond simply generating clicks or website visits. By considering the journey from first interaction to enquiry or conversion, we identify opportunities to make your digital experience clearer and more effective.",
          },
          {
            number: "06",
            icon: ChartNoAxesCombined,
            title: "Create Better Marketing Clarity",
            text: "We help businesses move away from disconnected marketing activities and towards a clearer understanding of what their digital efforts are designed to achieve.",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 text-center"
            >
              {/* NUMBER + ICON */}
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#F8BC04] text-[11px] font-bold text-black shadow-sm">
                {item.number}
              </div>

              {/* STEP TITLE */}
              <h3 className="mt-5 text-[14px] font-semibold text-[#171717]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-2 max-w-[180px] text-[12px] leading-5 text-black/60">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </motion.div>
</Section>



      {/* SERVICES */}
      
          <Section>
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="rounded-[24px] bg-[#050607] px-5 py-7 sm:rounded-[28px] sm:px-7 sm:py-9 lg:px-10 lg:py-10"
  >
    {/* HEADING */}
    <motion.div variants={fadeUp}>
      <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#F8BC04]">
        Our Digital Marketing Services for Businesses in Kolkata
      </p>

      <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
        Our{" "}
        <span className="text-[#F8BC04]">Digital Marketing</span>{" "}
        Services
      </h2>

      <p className="mt-3 max-w-2xl text-[12px] leading-5 text-white/60 sm:text-[13px]">
        Big Beans Digital provides a complete range of creative and
        performance-focused digital services designed around your business goals.
      </p>
    </motion.div>

    {/* SERVICES */}
    <div className="mt-7 grid gap-4 md:grid-cols-2">
      {[
        {
          title: "Social Media Marketing",
          subtitle: "Build a Social Media Presence With a Clear Purpose",
          text: "As a business working with a **social media marketing agency in Kolkata**, you need more than regular posts. We help create social media strategies designed around your audience, brand communication and wider marketing objectives.",
          items: [
            "Social Media Strategy",
            "Content Creation",
            "Content Planning",
            "Community Management",
            "Social Media Advertising",
            "Campaign Reporting and Optimisation",
          ],
          image: "/landingpage/socialmedia.webp",
          href: "https://www.bigbeansdigital.com/services/social-media-marketing",
        },
        {
          title: "Design & Branding",
          subtitle: "Build a Brand People Can Recognise and Understand",
          text: "Strong creative communication helps businesses stand out in competitive markets. Our design and branding services support businesses that want to create a more recognisable, consistent and purposeful brand presence. For businesses comparing a **creative marketing agency in Kolkata**, **advertising companies in Kolkata** or an **advertising company in Kolkata**, creative work should do more than look attractive—it should communicate the right message to the right audience.",
          items: [
            "Brand Strategy",
            "Brand Identity Design",
            "Logo Design",
            "Creative Advertising Design",
            "Social Media Creative",
            "Marketing Collateral Design",
          ],
          image: "/landingpage/branding.webp",
          href: "https://www.bigbeansdigital.com/services/branding",
        },
        {
          title: "Website Development",
          subtitle: "Build a Website That Supports Your Business Goals",
          text: "Your website is often where potential customers go to learn more about your business after discovering you through social media, advertising or other marketing activities.",
          items: [
            "Business Website Development",
            "Website Landing Page Development",
            "Landing Page Development",
            "E-commerce Website Development",
            "Website Optimisation",
            "Website Maintenance and Support",
          ],
          image: "/landingpage/website.webp",
          href: "https://www.bigbeansdigital.com/services/website-development",
        },
        {
          title: "Performance Marketing",
          subtitle: "Make Your Marketing Investment More Measurable",
          text: "Performance marketing helps businesses connect advertising activity with meaningful objectives. Whether your priority is generating leads, increasing sales, reaching new audiences or driving other measurable actions, campaigns need a clear strategy and ongoing attention.",
          items: [
            "Google Ads Management",
            "PPC Campaign Management",
            "Paid Social Advertising",
            "Facebook and Instagram Advertising",
            "Campaign Strategy and Optimisation",
            "Conversion Tracking and Reporting",
          ],
          image: "/landingpage/marketing.webp",
          href: "https://www.bigbeansdigital.com/services/google-ads-meta-ads",
        },
      ].map((service) => (
        <motion.div
          key={service.title}
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="group flex h-full flex-col rounded-[20px] border border-[#F8BC04] bg-[#F8BC04] p-4 text-black transition-all duration-300 hover:-translate-y-1 sm:p-5"
        >
          {/* IMAGE - INCREASED HEIGHT */}
          <Link
            href={service.href}
            className="relative block h-[120px] overflow-hidden rounded-[12px] sm:h-[145px] lg:h-[165px]"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-black/15" />
          </Link>

          {/* SERVICE TITLE + EXPLORE BUTTON */}
          <div className="mt-5 flex items-center justify-between gap-4">
            <h3 className="text-[16px] font-bold text-black sm:text-[18px]">
              {service.title}
            </h3>

            <Link
              href={service.href}
              className="group/button inline-flex shrink-0 items-center gap-2 rounded-full border border-black/30 bg-black px-3 py-2 text-[10px] font-semibold text-[#F8BC04] transition-all duration-300 hover:bg-white hover:text-black sm:px-4 sm:text-[11px]"
            >
              Explore Service

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* SUBTITLE */}
          <p className="mt-3 text-[10px] font-bold leading-5 text-black sm:text-[11px]">
            {service.subtitle}
          </p>

          {/* DESCRIPTION */}
          <p className="mt-3 text-[11px] leading-5 text-black/75 sm:text-[12px]">
            {service.text}
          </p>

          {/* SERVICES LIST */}
          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 border-t border-black/20 pt-4">
            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-1.5 text-[10px] leading-4 text-black/80 sm:text-[11px]"
              >
                <Check
                  size={12}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-black"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</Section>


{/* =========================================================
          OUR WORK CROUSAL
      ========================================================= */}
        <OurWork />






      {/* PROCESS */}
      
        <Section>
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10"
  >
    {/* LEFT SIDE */}
    <motion.div variants={fadeUp}>
      {/* IMAGE */}
      <div className="relative min-h-[280px] overflow-hidden rounded-[22px] bg-black sm:min-h-[320px] lg:min-h-[315px]">
        <Image
          src="/landingpage/brand.webp"
          alt="How Big Beans Digital works with businesses"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>

      {/* SMALL LABEL */}
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B98200]">
        How We Work
      </p>

      {/* HEADING */}
      <h2 className="mt-3 max-w-[500px] text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#171717] sm:text-[36px] lg:text-[40px]">
        How Big Beans Digital Works With Businesses
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-black/70 sm:text-[15px]">
        Good digital marketing starts with understanding the business behind the
        brief. Our process is designed to create clarity before execution and
        maintain focus as campaigns and priorities evolve.
      </p>
    </motion.div>

    {/* RIGHT SIDE - PROCESS CARDS */}
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        {
          title: "Understand Your Business",
          text: "We begin by learning about your business, objectives, audience, market and the challenges you want to solve.",
        },
        {
          title: "Review Your Current Digital Presence",
          text: "We assess the relevant areas of your digital presence, which may include your website, social media, advertising activity, branding and other marketing channels.",
        },
        {
          title: "Identify the Right Priorities",
          text: "Not every business needs every marketing service at the same time. We identify the areas that are most relevant to your current objectives and opportunities.",
        },
        {
          title: "Build the Strategy",
          text: "We develop a practical approach that connects your marketing priorities, target audience and selected digital activities.",
        },
        {
          title: "Execute and Develop",
          text: "Our team works on the agreed activities, whether that involves social media, creative work, advertising, branding, websites or performance marketing.",
        },
        {
          title: "Measure, Learn and Improve",
          text: "Marketing should evolve as businesses and audiences change. We review performance, identify opportunities and continue improving the approach where required.",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="rounded-[20px] border border-[#E0A900] bg-[#F8BC04] p-5 transition-all duration-300 sm:p-6"
        >
          {/* NUMBER */}
          <span className="text-[13px] font-semibold text-black/70">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* TITLE */}
          <h3 className="mt-4 text-[16px] font-semibold leading-6 text-[#171717]">
            {item.title}
          </h3>

          {/* TEXT */}
          <p className="mt-3 text-[13px] leading-6 text-black/70">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</Section>






      {/* WHY CHOOSE */}
      
         <Section>
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="py-2 sm:py-4"
  >
    {/* SECTION HEADING */}
    <motion.div
      variants={fadeUp}
      className="mx-auto max-w-3xl text-center"
    >
      <SectionTitle center>
        Why Businesses Choose 
        <br></br>Big Beans Digital
      </SectionTitle>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-4 max-w-3xl text-[13px] leading-6 text-black/65 sm:text-[14px] sm:leading-7"
      >
        <RichText text="When businesses search for the **best digital marketing company Kolkata** has to offer or compare different **digital marketing firms in Kolkata**, the right choice should depend on more than broad promises. A good agency should understand your business, communicate clearly and recommend activities that connect to your actual objectives." />
      </motion.p>
    </motion.div>

    {/* CARDS */}
    <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {[
        {
          title: "A More Connected Marketing Approach",
          text: "We look at how different digital activities can support each other instead of treating every channel as completely separate.",
        },
        {
          title: "Creative Thinking With Business Purpose",
          text: "We believe businesses should understand why something is being done before investing in it. Our approach focuses on relevant priorities rather than simply recommending every possible service.",
        },
        {
          title: "Creative Thinking With Business Purpose",
          text: "Creative work should support communication and business objectives. We connect design and advertising with a clearer strategic direction.",
        },
        {
          title: "Audience-Focused Marketing",
          text: "Your marketing should be built around the people you want to reach. We consider your audience and their journey when developing marketing strategies and activities.",
        },
        {
          title: "Clearer Communication and Collaboration",
          text: "We aim to make marketing discussions easier to understand by reducing unnecessary jargon and keeping attention on priorities and objectives.",
        },
        {
          title: "Flexible Support for Different Business Needs",
          text: "Every business is different. Whether you are building a new brand, growing an established business or looking to improve specific areas of your digital presence, we adapt our approach around your requirements. For businesses looking for the **best digital marketing agency Kolkata** has to offer, the most important consideration should be finding a marketing partner whose approach and capabilities genuinely fit your business.",
                  },
      ].map((item, index) => (

  <motion.div
    key={`${item.title}-${index}`}
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        scale: 0.96,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.55,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      },
    }}
    whileHover={{
      y: -8,
      transition: { duration: 0.25 },
    }}
    className="group relative min-h-[230px] overflow-hidden rounded-[10px] border border-black/10 bg-white px-6 py-8 shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)] sm:min-h-[250px] sm:px-7 sm:py-9"
  >
          {/* Subtle top accent animation */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "52px" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08 + 0.2,
            }}
            className="absolute left-1/2 top-0 h-[3px] -translate-x-1/2 bg-[#F8BC04]"
          />

          <div className="flex h-full flex-col items-center text-center">
            {/* SMALL NUMBER */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08 + 0.15,
              }}
              className="text-[11px] font-semibold tracking-[0.18em] text-[#D89E00]"
            >
              0{index + 1}
            </motion.span>

            {/* TITLE */}
            <h3 className="mt-4 text-[16px] font-semibold leading-6 text-[#171717] sm:text-[17px]">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 text-[12px] leading-6 text-black/60 sm:text-[13px]">
              <RichText text={item.text} />
            </p>

            {/* EXTRA CONTENT */}
            {item.extra && (
              <p className="mt-4 text-[12px] leading-6 text-black/60 sm:text-[13px]">
                <RichText text={item.extra} />
              </p>
            )}

            {/* Bottom hover line */}
            <motion.div
              className="mt-auto pt-6"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="h-px w-10 bg-[#F8BC04] transition-all duration-300 group-hover:w-20" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</Section>









      {/* VALUE */}
      <Section>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[28px] bg-yellow-400 p-5 sm:p-7 lg:p-8"
        >
          <SectionTitle>
            What Value Can Big Beans Digital Add to Your Business?
          </SectionTitle>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-3xl text-[14px] leading-7 text-black/70 sm:text-[15px]"
          >
            Big Beans Digital can support businesses that want to improve how
            they are discovered, understood and chosen online. The value we aim
            to add comes from connecting the right digital activities to your
            wider business priorities.
          </motion.p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
  ["Digital Marketing Strategy", "Create a clearer direction for your marketing activities and priorities."],
  ["Social Media Marketing", "Build a more purposeful social media presence around your audience and brand."],
  ["Creative Advertising", "Develop advertising creative that communicates clearly and supports campaign objectives."],
  ["Branding and Design", "Create a more consistent and recognisable brand presence across your digital channels."],
  ["Website Development", "Build a website that helps customers understand your business and take meaningful next steps."],
  ["Performance Marketing", "Connect paid marketing activity with measurable goals and ongoing optimisation."],
  ["Google Ads", "Reach relevant audiences through strategically managed paid advertising campaigns."],
  ["Paid Social Advertising", "Use targeted social campaigns to improve reach and connect with relevant audiences."],
  ["Content Strategy", "Create clearer content directions around your audience, communication and marketing priorities."],
  ["Conversion-Focused Digital Experiences", "Improve the journey from initial interaction to enquiry, lead or another meaningful action."],
].map(([title, text]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[18px] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-black" />
                <h3 className="text-[14px] font-semibold">{title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-black/60">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle center>
            Frequently Asked Questions About Our Digital Marketing Services in
            London
          </SectionTitle>

          <div className="mt-7 grid gap-3 lg:grid-cols-2">
            {[
  {
    q: "Why should I choose Big Beans Digital as my **digital marketing agency in Kolkata**?",
    a: "Big Beans Digital supports businesses looking for a more connected approach across social media marketing, advertising, branding, creative design, website development and performance marketing. We begin by understanding your business objectives and challenges before focusing on the activities that are most relevant to your needs.",
  },
  {
    q: "What services does your **Kolkata digital marketing agency** provide?",
    a: "Our services include social media marketing, creative advertising, branding and design, website development, paid advertising and performance marketing. The right combination of services depends on your business goals, target audience and current marketing priorities.",
  },
  {
    q: "Do you provide social media marketing services for Kolkata businesses?",
    a: "Yes. As a **social media marketing agency in Kolkata**, we help businesses develop social media strategies, plan content, create engaging content, manage communities, run social advertising campaigns and review performance.",
  },
  {
    q: "Can you help my business with advertising campaigns?",
    a: "Yes. Businesses looking for an **ad agency in Kolkata** or an **advertising agency in Kolkata** can work with Big Beans Digital on advertising strategy, campaign creative, paid digital campaigns and performance-focused optimisation.",
  },
  {
    q: "Do you provide branding and creative marketing services?",
    a: "Yes. We support businesses with brand strategy, brand identity, logo design, creative advertising, social media creative and marketing collateral. Our goal is to help businesses create a more consistent and recognisable brand presence.",
  },
  {
    q: "Can you build or improve my business website?",
    a: "Yes. Our website services can include business website development, UI/UX design, landing pages, e-commerce websites, website optimisation and ongoing support.",
  },
  {
    q: "Do you offer performance marketing services?",
    a: "Yes. We support businesses with Google Ads, PPC campaign management, paid social advertising, Meta advertising, campaign optimisation and conversion tracking.",
  },
  {
    q: "How do you decide which digital marketing services my business needs?",
    a: "We start by understanding your business, target audience, goals, existing marketing activities and the challenges you are facing. We then identify the areas that are most relevant to your priorities rather than recommending every service automatically.",
  },
  {
    q: "How do you measure digital marketing performance?",
    a: "The right measures depend on your business objectives. Depending on the activity, we may focus on relevant website traffic, leads, conversions, engagement, campaign performance and other meaningful outcomes.",
  },
  {
    q: "Do you provide SEO services for businesses in Kolkata?",
    a: "Businesses searching for an **SEO agency Kolkata** or **SEO company Kolkata** can discuss their search visibility requirements with our team. We can assess your requirements and help identify the right approach based on your website, target audience and business objectives.",
  },
].map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`overflow-hidden rounded-[18px] border transition-all ${
                    isOpen
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-[13px] font-semibold leading-6">
                      <RichText text={faq.q} />
                    </span>

                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                        isOpen
                          ? "bg-yellow-400 text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { duration: 0.35 },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div className="border-t border-white/15 px-5 pb-5 pt-4 text-[13px] leading-6 text-white/70">
                          <RichText text={faq.a} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* ========================================================= */}
            {/* GLOBAL PRESENCE - PROVIDED CODE */}
            {/* ========================================================= */}
      
            <section className="bg-[#FFFFFF] py-10 sm:py-14 lg:py-12">
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
                        tracking-[2px] sm:tracking-[4px]
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
                      <span className="text-[#F8BC04]">12+            
                      Locations Currently </span>
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
                            "London",
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

      {/* FINAL CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[30px] bg-black px-6 py-8 sm:px-9 lg:px-14 lg:py-11"
        >
          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"
          />

          <div className="relative max-w-4xl">
            <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:text-[38px] lg:text-[46px]">
              Ready to Build a{" "}
              <span className="text-yellow-400">
                Stronger Digital Presence?
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-[14px] leading-7 text-white/65 sm:text-[15px]">
              Whether you are looking for support with SEO, PPC, social media,
              creative advertising, branding, website development or a broader
              digital marketing strategy, Big Beans Digital can help you identify
              the areas that deserve your attention.
            </p>

            <p className="mt-4 max-w-3xl text-[14px] leading-7 text-white/65 sm:text-[15px]">
              If your current marketing feels disconnected, difficult to measure
              or no longer aligned with where your business is heading, it may be
              time for a clearer approach.
            </p>

            <h3 className="mt-7 text-[21px] font-semibold text-white sm:text-[25px]">
              Let’s Explore What Your Business Needs Next.
            </h3>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="https://www.bigbeansdigital.com/about"
                className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-5 py-3 text-[13px] font-semibold text-black transition-all hover:-translate-y-1"
              >
                About BIGBEANS
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://www.bigbeansdigital.com/blog"
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-[13px] font-semibold text-white transition-all hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
              >
                Read Our Blogs
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://www.bigbeansdigital.com/connect"
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-[13px] font-semibold text-white transition-all hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
              >
                Connect With Us
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:rotate-45"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}