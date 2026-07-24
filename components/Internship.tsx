"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Internship() {
  return (
    <main className="bg-[#F8F8F8] overflow-hidden">

      {/* =========================
            HERO SECTION
      ========================= */}

      <section className="relative overflow-hidden bg-[#F8F8F8] pt-12 pb-16">

        {/* Animated Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[140px]"
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
                y: [0, -18, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
            />

            <motion.div
              animate={{
                y: [0, 18, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
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
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-white/20"
            />

            <div className="relative z-20 flex flex-col items-center justify-center text-center">

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
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .35,
                }}
                className="mt-8 text-[48px] font-black leading-none text-[#171717] md:text-[72px] lg:text-[88px]"
              >
                Internship
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .5,
                }}
                className="mt-6 max-w-3xl text-lg leading-9 text-[#171717]/80"
              >
                Learn from industry professionals, work on live client
                projects, develop real-world skills, and kickstart your career
                with BIGBEANS DIGITAL's practical internship program.
              </motion.p>

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
                  delay: .7,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="mt-12 flex items-center gap-4 rounded-full bg-white px-8 py-5 shadow-[0_25px_60px_rgba(0,0,0,.18)]"
              >

                <a
                  href="/"
                  className="font-medium text-gray-600 transition hover:text-[#F8BC04]"
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
                  className="text-[#F8BC04] font-bold"
                >
                  →
                </motion.span>

                <span className="font-bold text-[#171717]">
                  Internship
                </span>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================
            ABOUT THE INTERNSHIP
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background Pattern */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8BC04]/10"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-[1fr_.95fr]">

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

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04] shadow-lg">
              Learn • Practice • Grow • Get Industry Ready
            </span>

            <h2 className="mt-8 text-[42px] font-black leading-tight text-[#171717] md:text-[60px]">
              Build Your Career With
              <span className="text-[#F8BC04]">
                {" "}Real Agency
              </span>
              <br />
              Experience
            </h2>

            <h3 className="mt-8 text-3xl font-bold text-[#171717]">
              Trusted By Hundreds Of Future Professionals
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              The BIGBEANS DIGITAL Internship Program is designed to bridge
              the gap between learning and real-world execution. Work on live
              client projects, collaborate with experienced mentors, master
              modern tools, and gain practical exposure that prepares you for
              agency careers, freelancing, entrepreneurship, and corporate
              opportunities.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                href="/connect"
                className="rounded-full bg-[#171717] px-10 py-5 font-semibold text-white shadow-xl transition hover:bg-[#F8BC04] hover:text-[#171717]"
              >
                Apply For Internship →
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                href="/about"
                className="rounded-full border border-gray-300 bg-white px-10 py-5 font-semibold text-[#171717]"
              >
                Learn More
              </motion.a>

            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}

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
              duration: .9,
            }}
            className="relative flex justify-center"
          >

            {/* Main Image */}

            <motion.div
              whileHover={{
                rotateY: -8,
                rotateX: 6,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 170,
              }}
              className="relative overflow-hidden rounded-[34px] shadow-[0_40px_80px_rgba(0,0,0,.18)]"
            >

              <Image
                src="/assets/internship-team.jpg"
                alt="BIGBEANS DIGITAL Internship"
                width={760}
                height={560}
                className="transition duration-700 hover:scale-110"
              />

            </motion.div>

            {/* Yellow Glow */}

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -z-10 h-[420px] w-[420px] rounded-full bg-[#F8BC04]/25 blur-[120px]"
            />

            {/* Floating Rating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 left-0 z-30 rounded-3xl bg-white px-8 py-6 shadow-2xl"
            >

              <div className="flex items-center gap-1 text-[#F8BC04] text-2xl">
                ★★★★★
              </div>

              <p className="mt-3 text-xl font-bold text-[#171717]">
                5.0/5 Learning Experience
              </p>

            </motion.div>

            {/* Floating Partner Card */}

            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 right-0 z-30 rounded-3xl bg-[#171717] px-8 py-6 text-white shadow-[0_30px_70px_rgba(0,0,0,.25)]"
            >

              <p className="text-sm uppercase tracking-[0.2em] text-[#F8BC04]">
                Industry Exposure
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Live Client Projects
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
              className="absolute -left-10 top-14 z-30 rounded-full bg-white px-6 py-4 shadow-2xl"
            >

              <div className="flex items-center gap-3">

                <div className="h-4 w-4 rounded-full bg-green-500" />

                <span className="font-semibold text-[#171717]">
                  Internship Admissions Open
                </span>

              </div>

            </motion.div>

            {/* Floating Experience Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: .4,
              }}
              className="absolute right-8 top-10 z-30 rounded-[28px] bg-white px-7 py-6 shadow-[0_30px_70px_rgba(0,0,0,.18)]"
            >

              <p className="text-sm text-gray-500">
                Practical Learning
              </p>

              <h3 className="mt-2 text-4xl font-black text-[#171717]">
                100%
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Hands-On Experience
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =========================
            OUR SUCCESSFUL INTERNS
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

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
          className="absolute left-1/2 top-32 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{
              opacity:0,
              y:60
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:.8
            }}
            className="mx-auto max-w-4xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04]">
              Success Stories
            </span>

            <h2 className="mt-7 text-[42px] font-black leading-tight text-[#171717] md:text-[60px]">
              Meet Our
              <span className="text-[#F8BC04]">
                {" "}Successful Interns
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
              Every internship journey begins with curiosity and ends with
              confidence. Meet some of the talented students who gained
              practical experience while working on real projects at
              BIGBEANS DIGITAL.
            </p>

          </motion.div>

          {/* Carousel */}

          <div className="relative mt-20 overflow-hidden">

            <motion.div
              animate={{
                x:["0%","-50%"]
              }}
              transition={{
                duration:35,
                repeat:Infinity,
                ease:"linear"
              }}
              className="flex gap-8 w-max"
            >

              {[
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern1.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern2.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern3.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern4.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern5.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern6.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern7.png",
                },

                // duplicate for infinite scrolling

                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern1.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern2.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern3.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern4.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern5.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern6.png",
                },
                {
                  name:"Intern Name",
                  college:"College Name",
                  image:"/assets/interns/intern7.png",
                },

              ].map((intern,index)=>(

                <motion.div
                  key={index}
                  whileHover={{
                    y:-18,
                    scale:1.05
                  }}
                  className="group w-[280px] shrink-0 overflow-hidden rounded-[32px] bg-white shadow-[0_25px_60px_rgba(0,0,0,.12)]"
                >

                             <div className="relative overflow-hidden">

                    <Image
                      src={intern.image}
                      alt={intern.name}
                      width={400}
                      height={520}
                      className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/30 to-transparent"/>

                    {/* Live Badge */}

                    <motion.div
                      animate={{
                        y:[0,-6,0]
                      }}
                      transition={{
                        duration:3,
                        repeat:Infinity
                      }}
                      className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#171717] backdrop-blur-xl"
                    >
                      BIGBEANS INTERN
                    </motion.div>

                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <h3 className="text-2xl font-black text-[#171717]">
                      {intern.name}
                    </h3>

                    <p className="mt-2 text-gray-500">
                      {intern.college}
                    </p>

                    <div className="mt-6 flex items-center justify-between">

                      <span className="rounded-full bg-[#F8BC04]/10 px-4 py-2 text-sm font-semibold text-[#F8BC04]">
                        Internship Completed
                      </span>

                      <motion.div
                        whileHover={{
                          rotate:45
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171717] text-xl text-white"
                      >
                        →
                      </motion.div>

                    </div>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </div>

         

        </div>

      </section>



      {/* =========================
            INTERNSHIP HIGHLIGHTS
      ========================= */}

      <section className="relative overflow-hidden bg-[#F8F8F8] py-8 lg:py-12">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
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
          className="mx-auto max-w-7xl px-6"
        >

          <div className="relative overflow-hidden rounded-[34px] border border-white/60 bg-white shadow-[0_25px_70px_rgba(0,0,0,.08)]">

            {/* Background Glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [.12, .22, .12],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8BC04]/20 blur-[140px]"
            />

            <div className="relative z-10 grid grid-cols-2 gap-y-10 py-10 md:grid-cols-4">

              {[
                {
                  number: "395K+",
                  label: "Students Trained",
                  color: "text-green-500",
                },
                {
                  number: "100%",
                  label: "Practical Learning",
                  color: "text-[#F8BC04]",
                },
                {
                  number: "500+",
                  label: "Live Projects",
                  color: "text-purple-600",
                },
                {
                  number: "98%",
                  label: "Success Rate",
                  color: "text-pink-500",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.label}
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
                    delay: index * .15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="group relative flex flex-col items-center justify-center text-center"
                >

                  {/* Divider */}

                  {index !== 3 && (
                    <div className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gray-300 to-transparent md:block" />
                  )}

                  {/* Number */}

                  <motion.h3
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * .3,
                    }}
                    className={`text-[42px] font-black md:text-[56px] ${item.color}`}
                  >
                    {item.number}
                  </motion.h3>

                  {/* Label */}

                  <p className="mt-3 text-lg font-semibold text-[#171717]">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </section>

      {/* =========================
            WHY JOIN BIGBEANS DIGITAL
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background Pattern */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8BC04]/10"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[.9fr_1.1fr]">

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

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04] shadow-lg">
              Why Students Choose BIGBEANS DIGITAL
            </span>

            <h2 className="mt-8 text-[42px] font-black leading-tight text-[#171717] md:text-[60px]">
              Build Skills That
              <span className="text-[#F8BC04]">
                {" "}Companies
              </span>
              <br />
              Actually Need
            </h2>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                rotateY: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 170,
              }}
              className="relative mt-12 overflow-hidden rounded-[34px] bg-gradient-to-br from-[#F8BC04]/20 to-[#FFE8A3] p-8 shadow-[0_30px_70px_rgba(0,0,0,.08)]"
            >

              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="overflow-hidden rounded-full border-4 border-white shadow-xl"
                >

                  <Image
                    src="/assets/mentor.png"
                    alt="Mentor"
                    width={130}
                    height={130}
                  />

                </motion.div>

                <div>

                  <h3 className="text-[34px] font-black text-[#171717]">
                    Learn From
                    <br />
                    Industry Experts
                  </h3>

                  <p className="mt-3 text-lg text-gray-600">
                    Practical guidance from experienced professionals working
                    on real business projects.
                  </p>

                </div>

              </div>

            </motion.div>

            <div className="mt-10">

              <p className="text-2xl font-bold text-[#171717]">
                Real Learning. Real Projects. Real Career Growth.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                Our internship program is built around practical execution
                rather than theory. You'll collaborate on live assignments,
                understand agency workflows, strengthen problem-solving
                abilities, and develop confidence by working on projects that
                reflect real industry expectations.
              </p>

            </div>

            <motion.div
              whileHover={{
                x: 8,
              }}
              className="mt-10 rounded-[28px] border-l-[6px] border-[#F8BC04] bg-[#FAFAFA] p-7 shadow-lg"
            >

              <p className="text-xl italic leading-9 text-[#171717]">
                "The fastest way to become job-ready is by building real
                experience while you're still learning."
              </p>

            </motion.div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <div className="space-y-8">

            {[
              {
                number: "01",
                title: "Hands-On Client Projects",
                description:
                  "Work on real business websites, branding campaigns, SEO strategies, social media, and digital marketing assignments instead of only practicing on demo tasks.",
              },
              {
                number: "02",
                title: "Experienced Mentorship",
                description:
                  "Receive continuous guidance, practical feedback, and structured learning from professionals who understand current industry standards and workflows.",
              },
              {
                number: "03",
                title: "Industry-Ready Skill Development",
                description:
                  "Master design thinking, communication, teamwork, project execution, AI-powered tools, and modern digital technologies used by leading agencies.",
              },
              {
                number: "04",
                title: "Career & Portfolio Growth",
                description:
                  "Graduate with valuable project experience, a stronger portfolio, greater confidence, and practical skills that help you stand out during placements and freelance opportunities.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.number}
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
                  delay: index * .15,
                  duration: .7,
                }}
                whileHover={{
                  x: 10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,.06)] transition-all duration-500 hover:border-[#F8BC04]/40 hover:shadow-[0_30px_70px_rgba(248,188,4,.18)]"
              >

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F8BC04]/10"
                />

                <div className="flex items-start gap-6">

                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: .6,
                    }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F8BC04] text-2xl font-black text-[#171717]"
                  >
                    {item.number}
                  </motion.div>

                  <div>

                    <h3 className="text-[28px] font-black text-[#171717]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-lg leading-9 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================
            WHY BIGBEANS DIGITAL
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#171717 1px,transparent 1px),linear-gradient(to bottom,#171717 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8BC04]/10"
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
            className="mx-auto mb-16 max-w-5xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04]">
              Why Choose BIGBEANS DIGITAL
            </span>

            <h2 className="mt-8 text-[40px] font-black leading-tight text-[#171717] md:text-[60px]">
              What Makes Our Internship
              <span className="text-[#F8BC04]">
                {" "}Different?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-4xl text-lg leading-9 text-gray-600">
              Unlike conventional internships focused only on observation,
              BIGBEANS DIGITAL gives you practical exposure, live client work,
              modern AI-powered workflows, structured mentorship, and portfolio
              development that prepares you for real industry opportunities.
            </p>

          </motion.div>

          {/* Comparison Table */}

          <motion.div
            initial={{
              opacity: 0,
              scale: .96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
            }}
            className="overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_30px_70px_rgba(0,0,0,.08)]"
          >

            {/* Header */}

            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b bg-[#171717] text-white">

              <div className="px-8 py-6 text-lg font-bold">
                Feature
              </div>

              <div className="border-l border-white/10 px-8 py-6 text-center text-lg font-bold text-[#F8BC04]">
                BIGBEANS DIGITAL
              </div>

              <div className="border-l border-white/10 px-8 py-6 text-center text-lg font-bold">
                Traditional Internships
              </div>

            </div>

            {/* Rows Start */}

                        {[
              {
                feature: "Live Client Projects",
                ours: "Work on real client websites, branding campaigns and digital marketing projects.",
                other: "Mostly practice assignments or observation-based learning.",
              },
              {
                feature: "Experienced Mentorship",
                ours: "One-on-one guidance from professionals working in the digital industry.",
                other: "Limited interaction with mentors and minimal feedback.",
              },
              {
                feature: "AI-Powered Learning",
                ours: "Learn modern AI tools, automation, prompt engineering and productivity workflows.",
                other: "Focuses mainly on traditional learning methods.",
              },
              {
                feature: "Portfolio Development",
                ours: "Build an impressive portfolio with projects you actually worked on.",
                other: "Few or no portfolio-worthy projects.",
              },
              {
                feature: "Industry Exposure",
                ours: "Understand agency operations, client communication and project management.",
                other: "Little exposure to real business environments.",
              },
              {
                feature: "Career Readiness",
                ours: "Interview preparation, resume guidance and professional skill development.",
                other: "Minimal career support after internship completion.",
              },
              {
                feature: "Flexible Learning",
                ours: "Remote collaboration with structured workflows and practical sessions.",
                other: "Rigid schedules with limited flexibility.",
              },
            ].map((row, index) => (

              <motion.div
                key={row.feature}
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
                  delay: index * .08,
                }}
                whileHover={{
                  backgroundColor: "#FFFDF5",
                }}
                className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-gray-200 last:border-none"
              >

                {/* Feature */}

                <div className="flex items-center px-8 py-7">

                  <h3 className="text-lg font-bold text-[#171717]">
                    {row.feature}
                  </h3>

                </div>

                {/* BIGBEANS DIGITAL */}

                <div className="border-l border-gray-200 px-8 py-7">

                  <div className="flex items-start gap-3">

                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </div>

                    <p className="leading-8 text-gray-700">
                      {row.ours}
                    </p>

                  </div>

                </div>

                {/* Traditional */}

                <div className="border-l border-gray-200 px-8 py-7">

                  <div className="flex items-start gap-3">

                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                      ✕
                    </div>

                    <p className="leading-8 text-gray-600">
                      {row.other}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

            {/* =========================
            HOW TO APPLY
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8BC04]/20 blur-[150px]"
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
            className="mx-auto max-w-4xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04]">
              Internship Process
            </span>

            <h2 className="mt-8 text-[40px] font-black leading-tight text-[#171717] md:text-[60px]">
              Start Your Internship
              <span className="text-[#F8BC04]">
                {" "}In 3 Simple Steps
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
              We've made the application process simple and transparent so you
              can focus on preparing for an exciting learning journey with
              BIGBEANS DIGITAL.
            </p>

          </motion.div>

          {/* Steps */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {[
              {
                step: "01",
                title: "Submit Your Application",
                description:
                  "Complete the internship application form with your academic details, skills, and preferred internship domain.",
              },
              {
                step: "02",
                title: "Interview & Evaluation",
                description:
                  "Our team reviews your profile and conducts a short interaction to understand your learning goals and suitability.",
              },
              {
                step: "03",
                title: "Start Your Internship",
                description:
                  "Selected candidates receive onboarding details, mentor allocation, and begin working on real client projects.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.step}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * .15,
                  duration: .8,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[32px] bg-[#171717] p-10 text-white shadow-[0_30px_70px_rgba(0,0,0,.12)] transition-all duration-500 hover:bg-[#F8BC04] hover:text-[#171717]"
              >

                {/* Number */}

                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: .6,
                  }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-3xl font-black backdrop-blur-xl"
                >
                  {item.step}
                </motion.div>

                <h3 className="mt-8 text-[30px] font-black">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-white/80 transition-all duration-500 group-hover:text-[#171717]/80">
                  {item.description}
                </p>

                {/* Decorative Circle */}

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================
            INTERN TESTIMONIALS
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-24 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[160px]"
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
            className="mx-auto max-w-4xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04]">
              Success Stories
            </span>

            <h2 className="mt-7 text-[42px] font-black leading-tight text-[#171717] md:text-[60px]">
              Hear From Our
              <span className="text-[#F8BC04]">
                {" "}Amazing Interns
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
              Discover how our internship program has helped students gain
              practical experience, strengthen their portfolios, and begin
              successful careers in the digital industry.
            </p>

          </motion.div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {[
              {
                name: "Intern Name",
                college: "ABC College",
                image: "/assets/interns/intern1.png",
                review:
                  "Working with BIGBEANS DIGITAL completely transformed my understanding of the industry. I gained confidence, practical skills, and valuable experience by contributing to real client projects.",
              },
              {
                name: "Intern Name",
                college: "XYZ University",
                image: "/assets/interns/intern2.png",
                review:
                  "The mentorship, supportive environment, and hands-on learning helped me improve both technically and professionally. Every task challenged me to think creatively and solve real problems.",
              },
              {
                name: "Intern Name",
                college: "College Name",
                image: "/assets/interns/intern3.png",
                review:
                  "From collaborating with experienced professionals to building my portfolio, this internship prepared me for future opportunities and gave me the confidence to work with real clients.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
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
                  delay: index * .15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,.08)] transition-all duration-500 hover:border-[#F8BC04]/40 hover:shadow-[0_35px_70px_rgba(248,188,4,.18)]"
              >

                {/* Quote */}

                <div className="text-[70px] font-black leading-none text-[#F8BC04]/20">
                  “
                </div>

                {/* Review */}

                <p className="mt-2 text-lg leading-9 text-gray-600">
                  {item.review}
                </p>

                <div className="mt-10 border-t border-gray-200 pt-8">

                  <div className="flex items-center gap-5">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="rounded-full border-4 border-white shadow-lg"
                    />

                    <div>

                      <h3 className="text-2xl font-black text-[#171717]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-gray-500">
                        {item.college}
                      </p>

                      {/* Rating */}

                      <div className="mt-3 flex items-center gap-1 text-[#F8BC04]">

                        {[1, 2, 3, 4, 5].map((star) => (

                          <motion.span
                            key={star}
                            whileHover={{
                              scale: 1.3,
                              rotate: 15,
                            }}
                            className="text-lg"
                          >
                            ★
                          </motion.span>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

          {/* Bottom CTA */}

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
              delay: .2,
            }}
            className="mx-auto mt-20 max-w-4xl text-center"
          >

            <h3 className="text-[34px] font-black text-[#171717] md:text-[46px]">
              Ready To Share
              <span className="text-[#F8BC04]">
                {" "}Your Success Story?
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
              Join our internship program, gain practical industry experience,
              collaborate on live projects, and become the next success story
              featured at BIGBEANS DIGITAL.
            </p>

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: .96,
              }}
              href="/connect"
              className="mt-10 inline-flex rounded-full bg-[#171717] px-10 py-5 text-lg font-bold text-white shadow-[0_25px_60px_rgba(0,0,0,.18)] transition-all duration-500 hover:bg-[#F8BC04] hover:text-[#171717]"
            >
              Apply For Internship →
            </motion.a>

          </motion.div>

        </div>

      </section>















    </main>
  );
}