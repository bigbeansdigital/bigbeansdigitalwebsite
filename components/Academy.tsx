"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Courses from "@/components/academy/Courses";

export default function Academy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

    const courses = [
        {
          title: "Digital Marketing Mastery",
          category: "Digital Marketing",
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
  return (
    <main className="bg-[#FFFFFF] overflow-hidden">

      {/* =========================
            ACADEMY HERO
      ========================= */}

      <section className="relative overflow-hidden bg-white pt-10 pb-24 lg:pt-12 lg:pb-32">

        {/* Background Pattern */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-32 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-20 lg:grid-cols-[1fr_.95fr]">

            {/* ================= LEFT ================= */}

<motion.div
  initial={{
    opacity: 0,
    x: -70,
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

  <span className="inline-flex rounded-full bg-[#F8BC04]/100 px-6 py-1 text-sm font-bold text-[#171717] shadow-lg">
    Big Beans Digital Academy
  </span>

  <h1 className="mt-8 text-[48px] font-black leading-[1.05] text-[#171717] md:text-[64px]">
    Learn
    <span className="text-[#F8BC04]">
      {" "}Digital & Tech Skills
    </span>
    That Build Successful Careers!
  </h1>

  <h3 className="mt-5 text-2xl font-bold text-[#171717]">
    Learn. Practice. Get Hired.
  </h3>

  {/* Buttons */}

  <div className="mt-5 flex flex-wrap gap-4">

    <motion.a
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      whileTap={{
        scale: .96,
      }}
     href="/courses"
      className="rounded-full bg-[#171717] px-10 py-3 font-semibold text-white shadow-xl transition hover:bg-[#F8BC04] hover:text-[#171717]"
    >
      Explore Courses →
    </motion.a>
  </div>

</motion.div>

            {/* ================= RIGHT ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .9,
              }}
              className="relative flex justify-center"
            >

              {/* Main Image */}

              <motion.div
                whileHover={{
                  rotateY: -8,
                  rotateX: 5,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                }}
                className="overflow-hidden rounded-[36px] shadow-[0_40px_80px_rgba(0,0,0,.18)]"
              >

                <Image
                  src="/assets/academy-hero.jpg"
                  alt="BIGBEANS DIGITAL Academy"
                  width={960}
                  height={560}
                  className="transition duration-700 hover:scale-110"
                />

              </motion.div>

              

              {/* Rating Card */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -left-8 z-30 rounded-3xl bg-white px-6 py-5 shadow-[0_25px_60px_rgba(0,0,0,.15)]"
              >

                <div className="flex items-center gap-1 text-xl text-[#F8BC04]">
                  ★★★★★
                </div>

                <h3 className="mt-2 text-xl font-black text-[#171717]">
                  4.9/5 Rating
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Rated by Our Learners
                </p>

              </motion.div>

              {/* Industry Card */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
               className="absolute -bottom-6 -right-8 z-30 rounded-3xl bg-[#171717] px-6 py-5 text-white shadow-[0_30px_70px_rgba(0,0,0,.22)]"
              >

               <p className="text-xs uppercase tracking-[0.3em] text-[#F8BC04]">
                  Industry Ready
                </p>

                <h3 className="mt-2 text-xl font-black">
                  Live Project Learning
                </h3>

              </motion.div>

              {/* Floating Badge */}

              <motion.div
                animate={{
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -left-40 top--10 z-30 rounded-full bg-white px-6 py-4 shadow-2xl"
              >

                <div className="flex items-center gap-3">

                  <div className="h-4 w-4 rounded-full bg-green-500" />

                  <span className="font-semibold text-[#171717]">
                    Join Workshop Now
                  </span>

                </div>

              </motion.div>

            </motion.div>

          </div>


{/* ================= ACADEMY INTRO ================= */}

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
  }}
  className="mt-20 mx-auto max-w-6xl"
>
  <p className="text-[16px] leading-7 text-gray-600 text-justify">
    <span className="font-semibold text-[#F8BC04]">BIGBEANS DIGITAL Academy</span> a platform for students & professionals
    develop in-demand <span className="font-semibold text-[#171717]">Tech & Digital skills</span> through practical
    workshops and industry-focused training. <span className="font-semibold text-[#171717]">Explore our Digital Marketing
    Courses, AI Workshops, Graphic Design Classes, Branding Programs, Social 
    Media Marketing Courses,</span> and hands-on learning experiences designed to 
    build real-world expertise through live projects and expert mentorship.
<br></br><br></br>
    Whether you want to learn <span className="font-semibold text-[#171717]">Best Digital Marketing Course, Best AI Course, Best Graphic Design Course,</span>
    or prepare for a high-growth digital or tech career, BIGBEANS DIGITAL Academy 
    provides practical, job-ready classes that helps you build a professional 
    portfolio, earn valuable certifications, and <span className="font-semibold text-[#171717]">stay ahead in today's fast-changing 
    IT world.</span>
  </p>
</motion.div>
          

          {/* ================= STATS ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .25,
            }}
            className="mt-10 overflow-hidden rounded-[34px] border border-white/60 bg-white shadow-[0_25px_70px_rgba(0,0,0,.08)]"
          >

            <div className="grid grid-cols-2 gap-y-10 py-10 md:grid-cols-4">

              {[
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
              ].map((item, index) => (

                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * .12,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="relative flex flex-col items-center text-center"
                >

                  {index !== 3 && (
                    <div className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gray-300 to-transparent md:block" />
                  )}

                  <h3 className={`text-[44px] font-black ${item.color}`}>
                    {item.value}
                  </h3>

                  <p className="mt-3 text-lg font-semibold text-[#171717]">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================
            FREE MASTERCLASS
      ========================= */}

      <section className="relative overflow-hidden bg-white pt-0 pb-24 lg:pt-0 lg:pb-32">

        {/* Background Pattern */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.24, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute right-24 top-28 h-[520px] w-[520px] rounded-full bg-[#F8BC04]/20 blur-[170px]"
        />

        <div className="relative z-5 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{
              opacity:0,
              y:60,
            }}
            whileInView={{
              opacity:1,
              y:0,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              duration:.8,
            }}
            className="mx-auto mb-01 max-w-5xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/100 px-6 py-3 text-sm font-bold text-[#fffff]">
              Free Live AI & Digital Marketing Masterclass
            </span>
          </motion.div>


           <h3 className="text-[42px] font-black leading-tight text-[#171717] text-center ">
                <br>
              </br>What You'll Learn
                <span className="text-[#F8BC04]">
                  {" "}During This Masterclass
                </span>
              </h3>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                Get a practical introduction to today's most in-demand digital skills through live sessions, real-world examples, and expert 
                guidance. Whether you're searching for the Best Digital Marketing Course, Best AI Course, or Best Graphic Design Course, 
                this masterclass will help you understand the skills, career opportunities, and learning path to succeed in the digital industry.
              </p>

          <div className="grid items-center gap-30 lg:grid-cols-[.9fr_1.1fr]">

            {/* ================= IMAGE ================= */}

            <motion.div
              initial={{
                opacity:0,
                x:-70,
              }}
              whileInView={{
                opacity:1,
                x:0,
              }}
              viewport={{
                once:true,
              }}
              transition={{
                duration:.8,
              }}
              whileHover={{
                rotateY:-6,
                rotateX:5,
                scale:1.03,
              }}
              className="relative"
            >

              <motion.div
                animate={{
                  y:[0,-12,0],
                }}
                transition={{
                  duration:5,
                  repeat:Infinity,
                }}
                className="overflow-hidden rounded-[36px] shadow-[0_40px_90px_rgba(0,0,0,.18)]"
              >

                <Image
                  src="/assets/masterclass.jpg"
                  alt="BIGBEANS DIGITAL Masterclass"
                  width={800}
                  height={600}
                  className="transition duration-700 hover:scale-110"
                />

              </motion.div>

            </motion.div>

            {/* ================= CONTENT ================= */}

            <motion.div
              initial={{
                opacity:0,
                x:70,
              }}
              whileInView={{
                opacity:1,
                x:0,
              }}
              viewport={{
                once:true,
              }}
              transition={{
                duration:.9,
              }}
            >

            

              <div className="mt-10 space-y-6">

                {[
                  "Discover how the Best Digital Marketing Course helps businesses generate leads, build brands, and grow online.",
                  "Learn how AI Tools are transforming marketing, content creation, productivity, and business workflows.",
                  "Explore the fundamentals of Social Media Marketing, Performance Marketing, Google Ads, and Meta Ads used by top brands.",
                  "Understand why Graphic Design, Branding, and Content Creation are among the most valuable skills for creators, freelancers, and businesses.",
                  "Learn how these in-demand skills can help you build a successful career, start freelancing, or grow your own business.",
                  "Get a complete roadmap to choose the right course, build job-ready skills, earn certifications, and confidently begin your digital career.",
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * .12,
                    }}
                    whileHover={{
                      x: 10,
                    }}
                    className="flex items-start gap-5"
                  >

                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.15,
                      }}
                      transition={{
                        duration: .5,
                      }}
                      className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8BC04] text-lg font-black text-[#171717]"
                    >
                      ✓
                    </motion.div>

                    <p className="text-lg leading-8 text-gray-700">
                      {item}
                    </p>

                  </motion.div>

                ))}

              </div>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: .35,
                }}
                className="mt-12 flex flex-wrap gap-5"
              >

                <motion.a
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      whileTap={{
        scale: .96,
      }}
      href="/connect"
      className="rounded-full bg-[#171717] px-10 py-5 font-semibold text-white shadow-xl transition hover:bg-[#F8BC04] hover:text-[#171717]"
    >
      Explore Courses →
    </motion.a>

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="flex items-center rounded-full border border-[#F8BC04]/30 bg-[#F8BC04]/10 px-7 py-4"
                >

                  <div className="mr-4 h-3 w-3 rounded-full bg-green-500" />

                  <span className="font-semibold text-[#171717]">
                    Limited Seats Available
                  </span>

                </motion.div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================
            OUR COURSES
      ========================= */}

      {/* Courses Data */}

      <section className="relative overflow-hidden bg-white pt-4 pb-24 lg:pt-6 lg:pb-32">

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-24 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
            }}
            className="mx-auto mb-20 max-w-5xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04]">
              Professional Courses
            </span>

            <h2 className="mt-8 text-[42px] font-black leading-tight text-[#171717] md:text-[62px]">
              Choose The Perfect
              <span className="text-[#F8BC04]">
                {" "}Course
              </span>
              <br />
              For Your Career
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">
              Whether you're starting from scratch or upgrading your existing
              skills, our industry-focused programs combine practical learning,
              AI-powered tools, live projects, and expert mentorship to help
              you build a successful digital career.
            </p>

          </motion.div>

          

      <Courses />

          

        </div>

      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-1 lg:px-8">
      
          <div className="mx-auto max-w-3xl text-center">
      
           
      
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

      {/* =========================
            WHY CHOOSE OUR ACADEMY
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background Pattern */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.24, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-28 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[170px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{
              opacity:0,
              y:60,
            }}
            whileInView={{
              opacity:1,
              y:0,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              duration:.8,
            }}
            className="mx-auto max-w-5xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04]">
              Learn Beyond The Classroom
            </span>

            <h2 className="mt-8 text-[40px] font-black leading-tight text-[#171717] md:text-[60px]">
              Why Students Choose
              <span className="text-[#F8BC04]">
                {" "}BIGBEANS DIGITAL Academy
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">
              We don't just teach digital skills—we prepare you for the real
              world. Our programs combine practical learning, AI-powered
              workflows, live projects, expert mentorship, and portfolio
              development to help you confidently build a successful career.
            </p>

          </motion.div>

          {/* Feature Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title:"Live Client Projects",
                description:"Work on real business projects that build confidence, practical skills, and an impressive professional portfolio.",
                color:"from-[#FFF3D9] to-[#FFE3A2]",
              },
              {
                title:"AI-Powered Learning",
                description:"Learn modern AI tools, automation, prompt engineering, and productivity workflows used across industries.",
                color:"from-[#DFF5FF] to-[#BEE9FF]",
              },

                            {
                title:"Expert Mentorship",
                description:"Learn directly from experienced professionals through practical sessions, personalized guidance, and constructive feedback.",
                color:"from-[#F7E5FF] to-[#EBC9FF]",
              },
              {
                title:"Career Growth Support",
                description:"Strengthen your portfolio, improve interview skills, and gain industry-ready experience that helps you confidently pursue your career goals.",
                color:"from-[#E5EAFF] to-[#D4DBFF]",
              },
            ].map((item,index)=>(

              <motion.div
                key={item.title}
                initial={{
                  opacity:0,
                  y:50,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index*.15,
                  duration:.8,
                }}
                whileHover={{
                  y:-12,
                  scale:1.03,
                }}
                className={`group relative overflow-hidden rounded-[30px] bg-gradient-to-br ${item.color} p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)]`}
              >

                {/* Floating Glow */}

                <motion.div
                  animate={{
                    rotate:[0,360],
                    scale:[1,1.15,1],
                  }}
                  transition={{
                    duration:10,
                    repeat:Infinity,
                    ease:"linear",
                  }}
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/40"
                />

                <motion.div
                  whileHover={{
                    rotate:360,
                    scale:1.15,
                  }}
                  transition={{
                    duration:.6,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg"
                >
                  <div className="h-6 w-6 rounded-full bg-[#F8BC04]" />
                </motion.div>

                <h3 className="mt-8 text-[28px] font-black leading-tight text-[#171717]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[17px] leading-8 text-[#171717]/70">
                  {item.description}
                </p>

              </motion.div>

            ))}

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
        BIGBEANS ACADEMY FAQS
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
          q: "Why should I join BIGBEANS Academy?",
          a: "BIGBEANS Academy offers practical, industry-focused training designed for students, professionals, entrepreneurs, and freelancers. Whether you're looking for the Best Digital Marketing Course, Best AI Course, or Best Graphic Design Course, our hands-on workshops and certification programs help you build job-ready skills with real-world projects."
        },
        {
          q: "Which courses are available at BIGBEANS Academy?",
          a: "BIGBEANS Academy offers practical training in Artificial Intelligence (AI), Digital Marketing, Social Media Marketing, Google Ads, Meta Ads, Performance Marketing, Graphic Design, Branding, and Content Creation. Every course is designed to help learners gain industry-relevant skills and practical experience."
        },
        {
          q: "Are your courses suitable for beginners?",
          a: "Yes. Our courses are beginner-friendly and require no prior experience. Whether you're a college student, working professional, entrepreneur, or freelancer, our expert trainers guide you from the fundamentals to advanced practical applications."
        },
        {
          q: "Will I work on real projects during the course?",
          a: "Absolutely. Every learner gains hands-on experience through live projects, practical assignments, real-world case studies, and interactive workshops. This helps you build a professional portfolio while learning the latest digital skills."
        },
        {
          q: "Do I receive a certificate after completing the course?",
          a: "Yes. Upon successfully completing your course, you'll receive a Professional Certification from BIGBEANS Academy that validates your practical skills in Digital Marketing, AI, Graphic Design, Social Media Marketing, Google Ads, Meta Ads, Performance Marketing, Branding, or Content Creation."
        },
        {
          q: "Can these courses help me get a job or internship?",
          a: "Yes. Our programs are designed to help learners become industry-ready by developing practical skills, building portfolios, and understanding real business challenges. These skills improve your chances of securing internships, freelance projects, and full-time opportunities."
        },
        {
          q: "Do you offer online and offline classes?",
          a: "Yes. BIGBEANS Academy provides both online and offline learning options, allowing students and professionals to choose the format that best suits their schedule while receiving the same practical training and mentorship."
        },
        {
          q: "Why choose BIGBEANS Academy over other training institutes?",
          a: "BIGBEANS Academy focuses on practical learning instead of theory. As a destination for the Best Digital Marketing Course, Best AI Course, and Best Graphic Design Course, our workshops are led by industry professionals and emphasize real-world skills that employers and businesses value."
        },
        {
          q: "Who can join BIGBEANS Academy?",
          a: "Our courses are ideal for college students, fresh graduates, working professionals, entrepreneurs, business owners, freelancers, and anyone who wants to learn modern digital skills and stay competitive in today's technology-driven world."
        },
        {
          q: "How do I enroll in a course at BIGBEANS Academy?",
          a: "Getting started is easy. Simply contact the BIGBEANS Academy team, choose the course that matches your career goals, and enroll in our practical training programs to begin your journey toward becoming a skilled digital professional."
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