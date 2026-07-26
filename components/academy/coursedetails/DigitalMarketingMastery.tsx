"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AllCourse from "@/components/academy/AllCourse";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import {
  ChevronRight,
  Star,
  Calendar,
  Globe,
  Play,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const tabs = [
  {
    id: "what you learn",
    label: "what you learn",
  },
  {
    id: "outcomes",
    label: "Outcomes",
  },
  {
    id: "modules",
    label: "Modules",
  },
  {
    id: "Course is for",
    label: "Course is for",
  },
  {
    id: "testimonials",
    label: "Testimonials",
  },
  {
    id: "FAQs",
    label: "FAQs",
  },
];



export default function DigitalMarketingMastery() {

    const faqs = [
        
  {
    question: "Who can join this Digital Marketing Course?",
    answer:
      "This course is perfect for college students, job seekers, freelancers, business owners, entrepreneurs and anyone who wants to build a career in Digital Marketing.",
  },
  {
    question: "Do I need any prior experience?",
    answer:
      "No. The course starts from the fundamentals and gradually moves to advanced Digital Marketing strategies, making it suitable for complete beginners.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes. You will receive a BIGBEANS Academy Certificate after successfully completing the course and assignments.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "The classes are conducted live. Recordings are also provided so you can revise the lessons anytime.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes. Students work on live projects, assignments and practical case studies to gain real-world experience.",
  },
  {
    question: "Do you provide internship opportunities?",
    answer:
      "Yes. Eligible students may receive internship opportunities based on their performance during the course.",
  },
  {
    question: "Which AI tools will be covered?",
    answer:
      "You'll learn ChatGPT, AI content tools, automation tools, prompt engineering and other AI-powered marketing platforms.",
  },
  {
    question: "Will this course help me get a job?",
    answer:
      "Yes. The course focuses on industry-ready skills, portfolio building, interview preparation and practical experience to improve your employability.",
  },
  {
    question: "How long is the course?",
    answer:
      "The complete Digital Marketing Mastery Program runs for approximately 3 months with live practical sessions.",
  },
  {
    question: "How can I enroll?",
    answer:
      "Simply click the Enroll Now button or contact our team through WhatsApp to complete your admission.",
  },
];


const [activeTab, setActiveTab] = useState("about");

const [openFAQ, setOpenFAQ] = useState<number | null>(0);
const [openModule, setOpenModule] = useState(0);

const leftFaqs = faqs.filter((_, index) => index % 2 === 0);
const rightFaqs = faqs.filter((_, index) => index % 2 !== 0);

useEffect(() => {
  const sections = tabs.map((tab) =>
    document.getElementById(tab.id)
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-40% 0px -50% 0px",
    }
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      if (section) observer.unobserve(section);
    });
  };
}, []);

  return (
    <main className="min-h-screen bg-[#FAFAFA]">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="bg-black">

        

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">

         <div className="grid items-start gap-12 lg:grid-cols-[1fr_.95fr]">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >

              {/* Breadcrumb */}

              <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">

                <Link
                  href="/academy"
                  className="font-medium text-[#F8BC04]"
                >
                  Academy
                </Link>

                <ChevronRight className="h-4 w-4 text-gray-500" />

                <span className="text-gray-400">
                  Courses
                </span>

                <ChevronRight className="h-4 w-4 text-gray-500" />

                <span className="text-white">
                  Digital Marketing
                </span>

              </div>

              <span className="inline-flex rounded-full border border-[#F8BC04]/40 bg-[#F8BC04]/10 px-5 py-2 text-sm font-semibold text-[#F8BC04]">

                🚀 Best Selling Digital Marketing Course

              </span>

              <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight text-white lg:text-7xl">

                Digital Marketing
                <br />

                Mastery Program

              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">

                Learn SEO, Google Ads, Meta Ads, Social Media Marketing,
                Branding, AI Marketing, Content Strategy and Client
                Acquisition through live practical training and real
                business projects.

              </p>

           
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              className="lg:pl-6"
            >

              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white shadow-2xl lg:max-w-[520px] lg:ml-auto">

                {/* Preview */}

                <div className="relative aspect-[16/8.5] overflow-hidden bg-gray-200">

                  <Image
                    src="/academy/Digital-Marketing-Mastery-Program-course-preview.jpg"
                    alt="Digital Marketing Course"
                    fill
                    className="object-cover"
                  />

                  
                </div>

                <div className="p-7">

                  <span className="text-sm font-semibold uppercase tracking-[4px] text-gray-500">

                    Course Fee

                  </span>

                  <div className="mt-3 flex items-end gap-4">

                    <span className="text-5xl font-black text-[#171717]">

                      ₹1,999

                    </span>

                    <span className="pb-2 text-lg text-gray-400 line-through">

                      ₹10,999

                    </span>

                  </div>

                  <p className="mt-3 text-green-600 font-semibold">

                    Save 67% Today

                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">

                    {[


  "Live Interactive Classes",
  "Real Client Projects",
  "Internship Opportunity",
  "Industry Certificate",
  "Lifetime Recordings",
  "AI Marketing Tools",
  "Placement Assistance",
  "Community Support",



].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />

                        <span className="font-medium text-gray-700">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                  <button className="mt-8 h-14 w-full rounded-2xl bg-[#171717] text-lg font-bold text-white transition duration-300 hover:bg-[#F8BC04] hover:text-black">

                          Enroll Now

                    </button>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

<section className="sticky top-20 z-40 border-b border-black/10 bg-white/90 backdrop-blur-xl">

  <div className="mx-auto flex justify-center px-6 py-5">

    <div className="flex flex-wrap justify-center gap-3 rounded-2xl border border-black/10 bg-[#FAFAFA] p-2 shadow-sm">

      {tabs.map((tab) => (

        <button
          key={tab.id}
          onClick={() => {
            document
              .getElementById(tab.id)
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
          className={`rounded-xl px-7 py-3 text-[15px] font-semibold transition-all duration-300 ${
            activeTab === tab.id
              ? "bg-[#171717] text-white shadow-md"
              : "text-gray-600 hover:bg-white hover:text-black"
          }`}
        >

          {tab.label}

        </button>

      ))}

    </div>

  </div>

</section>

<section
  id="what you learn"
  className="scroll-mt-36 bg-white"
>

  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

    <div className="bg-white">

  <h2 className="text-4xl font-black text-[#171717]">
    What You'll Learn
  </h2>

  <div className="mt-5 grid gap-x-20 gap-y-6 md:grid-cols-2">

    {[
      "Build a Complete Digital Marketing Strategy",
      "Find Your Target Audience",
      "Drive Organic & Paid Traffic",
      "Analyze Website & Campaign Data",
      "Run High-Converting Facebook & Instagram Ads",
      "Build and Grow Online Communities",
      "Master ChatGPT & AI Prompt Engineering",
      "Create Professional Websites",
      "Build Email Marketing Funnels",
      "Launch Successful Google Ads Campaigns",
      "Create Winning Content Strategies",
      "Learn Organic Social Media Marketing",
    ].map((item) => (

      <div
        key={item}
        className="flex items-start gap-4"
      >

        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">

          ✓

        </div>

        <p className="text-lg leading-8 text-gray-700">

          {item}

        </p>

      </div>

    ))}

  </div>

</div>

    

  </div>

</section>


<section
  id="outcomes"
  className="scroll-mt-36 bg-[#ffffff]"
>

  <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

    <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1fr_.85fr]">

  {/* LEFT */}

  <div>

    <h3 className="text-4xl font-black text-[#171717]">
      Build Your Digital Marketing Expertise
    </h3>

    <p className="mt-8 text-lg leading-9 text-gray-600">
      Learn practical Digital Marketing through live projects, AI-powered
      workflows and industry-focused training. This course prepares you
      for freelancing, agency jobs and business growth with real-world
      implementation.
    </p>

    <ul className="mt-10 space-y-6">

      {[
        "Learn directly from experienced industry professionals.",
        "Develop practical job-ready skills with live projects.",
        "Master SEO, Google Ads, Meta Ads and Social Media Marketing.",
        "Build an impressive portfolio and earn your certificate.",
      ].map((item) => (

        <li
          key={item}
          className="flex items-start gap-4"
        >

          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#171717]" />

          <span className="text-lg leading-8 text-gray-700">

            {item}

          </span>

        </li>

      ))}

    </ul>

  </div>

  {/* RIGHT */}

<div>

  <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-xl">

    <div className="overflow-hidden">

      <Image
        src="/academy/Digital-Marketing-Mastery-Program-course-preview.jpg"
        alt="Digital Marketing Learning"
        width={700}
        height={500}
        className="h-full w-full object-cover transition duration-700 hover:scale-105"
      />

    </div>

    <div className="p-6">

      <button className="h-14 w-full rounded-2xl bg-[#171717] text-lg font-bold text-white transition duration-300 hover:bg-[#F8BC04] hover:text-black">

        Enroll Now

      </button>

    </div>

  </div>

</div>

 

</div>

  </div>

</section>

<section
  id="modules"
  className="scroll-mt-36 bg-white"
>
  
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    <div className="mb-16">

        <h2 className="mt-4 text-4xl font-black text-[#171717]">
            Course Modules
        </h2>

        <p className="mt-6 text-lg leading-9 text-gray-600">
            Learn Digital Marketing step-by-step through practical modules,
            assignments and live projects.
        </p>

    </div>

    <div className="grid gap-12 lg:grid-cols-[1fr_.48fr]">

        {/* LEFT */}

        <div>

            {[
  {
    title: "Introduction to Digital Marketing",
    lessons: 8,
    duration: "2 Hours",
    content: [
      "What is Digital Marketing?",
      "Marketing Funnel",
      "Customer Journey",
      "Business Models",
      "Digital Ecosystem",
      "Career Opportunities",
      "Tools Setup",
      "Assignment",
    ],
  },
  {
    title: "Website Development",
    lessons: 14,
    duration: "6 Hours",
    content: [
      "Domain & Hosting",
      "WordPress",
      "Elementor",
      "Landing Pages",
      "Forms",
      "Website Optimization",
      "SEO Basics",
      "Live Project",
    ],
  },
  {
    title: "Search Engine Optimization (SEO)",
    lessons: 18,
    duration: "10 Hours",
    content: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "Local SEO",
      "Google Search Console",
      "Analytics",
      "Practical Project",
    ],
  },
  {
    title: "Google Ads",
    lessons: 12,
    duration: "7 Hours",
    content: [
      "Search Campaign",
      "Display Campaign",
      "Shopping Ads",
      "Performance Max",
      "Conversion Tracking",
      "Optimization",
    ],
  },
  {
    title: "Meta Ads",
    lessons: 14,
    duration: "8 Hours",
    content: [
      "Business Manager",
      "Pixel",
      "Audience",
      "Lead Generation",
      "Retargeting",
      "Scaling",
    ],
  },
  {
    title: "Social Media Marketing",
    lessons: 20,
    duration: "12 Hours",
    content: [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "Content Calendar",
      "Reels",
      "Growth Strategy",
    ],
  },
  {
    title: "AI Marketing",
    lessons: 16,
    duration: "8 Hours",
    content: [
      "ChatGPT",
      "Prompt Engineering",
      "Image Generation",
      "Automation",
      "AI Content",
      "Workflow",
    ],
  },
  {
    title: "Freelancing & Agency",
    lessons: 10,
    duration: "5 Hours",
    content: [
      "Portfolio",
      "Client Acquisition",
      "Proposal",
      "Pricing",
      "Invoices",
      "Scaling",
    ],
  },
].map((module, index) => (

  <div
    key={index}
    className="overflow-hidden border-b border-black/10"
  >

    <button
      onClick={() =>
        setOpenModule(openModule === index ? -1 : index)
      }
      className="flex w-full items-center justify-between py-6 text-left transition hover:bg-[#FAFAFA]"
    >

      <div>

        <h3 className="text-xl font-bold text-[#171717]">

          {module.title}

        </h3>

      </div>

      <div className="flex items-center gap-8">

        <ChevronDown
          className={`transition duration-300 ${
            openModule === index
              ? "rotate-180"
              : ""
          }`}
        />

      </div>

    </button>

    <AnimatePresence>

      {openModule === index && (

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: .3 }}
          className="overflow-hidden"
        >

          <div className="pb-6">

            <div className="grid gap-4 md:grid-cols-2">

              {module.content.map((lesson) => (

                <div
                  key={lesson}
                  className="flex items-center gap-3 rounded-xl bg-[#FAFAFA] px-5 py-4"
                >

                  <div className="h-2 w-2 rounded-full bg-[#F8BC04]" />

                  <span className="text-gray-700">

                    {lesson}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  </div>

))}

        </div>

        {/* RIGHT */}

        <div>

            <div className="lg:sticky lg:top-28">

  <div className="overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-xl">

    {/* Preview */}

    <div className="relative aspect-video overflow-hidden bg-gray-200">

      <Image
        src="/academy/Digital-Marketing-Mastery-Program-course-preview.jpg"
        alt="Digital Marketing Course"
        fill
        className="object-cover"
      />

    </div>

    <div className="p-7">

      <div className="mt-3 flex items-end gap-3">

        <span className="text-5xl font-black text-[#171717]">
          ₹1,999
        </span>

        <span className="pb-2 text-lg text-gray-400 line-through">
          ₹5,999
        </span>

      </div>

      <p className="mt-2 font-semibold text-green-600">
        Save 67% Today
      </p>

      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">

        {[
          "Live Classes",
          "Real Projects",
          "Internship",
          "Certificate",
          "Lifetime Access",
          "AI Tools",
          "Placement",
          "Community",
        ].map((item) => (

          <div
            key={item}
            className="flex items-center gap-2"
          >

            <CheckCircle2 className="h-4 w-4 text-green-600" />

            <span className="text-sm text-gray-700">

              {item}

            </span>

          </div>

        ))}

      </div>

      <button className="mt-8 h-14 w-full rounded-2xl bg-[#171717] text-lg font-bold text-white transition duration-300 hover:bg-[#F8BC04] hover:text-black">

        Enroll Now

      </button>

    </div>

  </div>

</div>

        </div>

    </div>

</div>

<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-1 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">

      <h2 className="mt-4 text-4xl font-black text-[#171717]">
        See How You'll Learn
      </h2>

    </div>

    <div className="mt-16 grid gap-10 lg:grid-cols-2">

      {/* LIVE CLASS */}

      <div className="group overflow-hidden rounded-[32px] border border-black/5 bg-[#FAFAFA] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative aspect-[15/10] overflow-hidden">

          <Image
            src="/academy/live-class.jpg"
            alt="Live Digital Marketing Class"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

        </div>

        <div className="p-8">

          <h3 className="text-2xl font-black text-[#171717]">
            Interactive Live Classes
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Learn through live sessions, practical demonstrations, doubt clearing, assignments and real-world case studies.
          </p>

        </div>

      </div>

      {/* CERTIFICATE */}

      <div className="group overflow-hidden rounded-[32px] border border-black/5 bg-[#FAFAFA] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative aspect-[15/10] overflow-hidden">

          <Image
            src="/academy/certificate.jpg"
            alt="BIGBEANS Academy Certificate"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          

        </div>

        <div className="p-8">

          <h3 className="text-2xl font-black text-[#171717]">
            Course Certificate
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Showcase your newly acquired skills with a professional certificate from BIGBEANS DIGITAL.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>









</section>

<section
  id="Course is for"
  className="scroll-mt-36 bg-[#FFFFFF]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    <div className="max-w-3xl">

      <h2 className="mt-4 text-4xl font-black text-[#171717]">
        Perfect For Every Career Stage
      </h2>

    </div>

    <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "College Student",
          desc: "Build in-demand digital skills before graduation and become job ready.",
          emoji: "🎓",
        },
        {
          title: "Job Seekers",
          desc: "Gain practical experience and improve your chances of landing marketing roles.",
          emoji: "💼",
        },
        {
          title: "School Student",
          desc: "Learn how to attract clients, price services and scale your freelance business.",
          emoji: "🚀",
        },
        {
          title: "Business Owner",
          desc: "Grow your own brand with proven digital marketing strategies and AI tools.",
          emoji: "📈",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-3xl border border-black/5 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#F8BC04] hover:shadow-xl"
        >

          <div className="text-5xl">

            {item.emoji}

          </div>

          <h3 className="mt-8 text-2xl font-black text-[#171717]">

            {item.title}

          </h3>

          <p className="mt-5 leading-8 text-gray-600">

            {item.desc}

          </p>

        </div>

      ))}

    </div>

  </div>
</section>

<section
  id="testimonials"
  className="scroll-mt-36 bg-white"
>
  <div className="mx-auto max-w-7xl px-6 py-1 lg:px-8">

    <div className="max-w-3xl">

      

      <h2 className="mt-4 text-4xl font-black text-[#171717]">
        Hear From Our Learners
      </h2>

      <p className="mt-6 text-lg leading-9 text-gray-600">
        Students from different backgrounds have transformed their
        careers through our practical learning approach.
      </p>

    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

      {[
        {
          name: "Ananya Sharma",
          role: "College Student",
          review:
            "The live practical sessions helped me understand Digital Marketing much faster than any online videos. I even built my own portfolio before completing the course.",
        },
        {
  name: "Neha Gupta",
  role: "College Student",
  review:
    "The practical assignments and live sessions made learning enjoyable and gave me confidence to start freelancing.",
},
{
  name: "Aman Roy",
  role: "College Student",
  review:
    "I learned SEO, Google Ads and AI tools in one program. It helped me build a strong portfolio for interviews.",
},
        {
          name: "Rahul Das",
          role: "Freelancer",
          review:
            "The AI modules and client projects completely changed the way I work. I got my first freelance client within two months.",
        },
        {
          name: "Priya Kapoor",
          role: "College Student",
          review:
            "Instead of hiring an agency immediately, I learned how to market my own business. The strategies started generating leads within weeks.",
        },
      ].map((item) => (

        <div
          key={item.name}
          className="rounded-2xl border border-black/5 bg-[#FAFAFA] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-lg"
        >

          <div className="flex">

            {Array.from({ length: 5 }).map((_, i) => (

              <Star
                key={i}
                className="h-4 w-4 fill-[#F8BC04] text-[#F8BC04]"
              />

            ))}

          </div>

          <p className="mt-5 text-sm leading-7 text-gray-600">

            "{item.review}"

          </p>

          <div className="mt-6 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8BC04] text-sm font-black text-black">

              {item.name.charAt(0)}

            </div>

            <div>

              <h3 className="text-sm font-bold text-[#171717]">

                {item.name}

              </h3>

              <p className="text-xs text-gray-500">

                {item.role}

              </p>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

<section
  id="FAQs"
  className="scroll-mt-5 bg-[#FFFFFF]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

   <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-4xl font-black text-[#171717]">
        Frequently Asked Questions
      </h2>

      <p className="mt-6 text-lg leading-9 text-gray-600">
        Find answers to the most commonly asked questions about our Digital Marketing Mastery Program.
      </p>

    </div>

    

  <div className="mt-16 grid gap-8 lg:grid-cols-2">

  {/* Left Column */}

  <div>

    <div className="space-y-5">

  {leftFaqs.map((faq, index) => {

    const actualIndex = index * 2;

    return (

      <div
        key={actualIndex}
        className="overflow-hidden rounded-2xl border border-black/10 bg-white"
      >

        <button
          onClick={() =>
            setOpenFAQ(openFAQ === actualIndex ? null : actualIndex)
          }
          className="flex w-full items-center justify-between px-6 py-6 text-left transition hover:bg-[#FAFAFA]"
        >

          <h3 className="pr-6 text-base font-semibold text-[#171717]">

            {faq.question}

          </h3>

          <ChevronDown
            className={`h-5 w-5 transition duration-300 ${
              openFAQ === actualIndex
                ? "rotate-180 text-[#F8BC04]"
                : ""
            }`}
          />

        </button>

        <AnimatePresence>

          {openFAQ === actualIndex && (

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >

              <div className="px-6 pb-6 text-gray-600 leading-8">

                {faq.answer}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    );

  })}

</div>

  </div>

  {/* Right Column */}

  <div>

    <div className="space-y-5">

  {rightFaqs.map((faq, index) => {

    const actualIndex = index * 2 + 1;

    return (

      <div
        key={actualIndex}
        className="overflow-hidden rounded-2xl border border-black/10 bg-white"
      >

        <button
          onClick={() =>
            setOpenFAQ(openFAQ === actualIndex ? null : actualIndex)
          }
          className="flex w-full items-center justify-between px-6 py-6 text-left transition hover:bg-[#FAFAFA]"
        >

          <h3 className="pr-6 text-base font-semibold text-[#171717]">

            {faq.question}

          </h3>

          <ChevronDown
            className={`h-5 w-5 transition duration-300 ${
              openFAQ === actualIndex
                ? "rotate-180 text-[#F8BC04]"
                : ""
            }`}
          />

        </button>

        <AnimatePresence>

          {openFAQ === actualIndex && (

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >

              <div className="px-6 pb-6 text-gray-600 leading-8">

                {faq.answer}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    );

  })}

</div>

  </div>

</div>









  </div>
</section>



{/* ===================================================== */}
{/* MORE COURSES */}
{/* ===================================================== */}

<section className="bg-[#FFFFF] py-1">

  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <AllCourse />

  </div>

</section>

<section className="bg-white">
  
</section>







    </main>
  );
}