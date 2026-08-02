"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function WebsiteDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="bg-[#FFFFFF] overflow-hidden">

      {/* =========================
            WEBSITE SHOWCASE
      ========================= */}

      <section className="relative py-16 lg:py-30">

        {/* Background Blur */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#F8BC04]/20 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto px-6">

          {/* Laptop Showcase */}

          <div className="relative h-[520px] flex items-center justify-center">

            {/* Left Laptop */}

            <motion.div
              initial={{
                x: -180,
                opacity: 0,
                rotate: -12,
                scale: .8,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                rotate: -8,
                scale: .88,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              whileHover={{
                y: -18,
                rotate: -5,
              }}
              className="absolute left-0 bottom-6 z-10"
            >
              <Image
                src="/assets/website1.png"
                alt="Website Design"
                width={520}
                height={330}
                className="drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
              />
            </motion.div>

            {/* Center Laptop */}

            <motion.div
              initial={{
                y: 120,
                opacity: 0,
                scale: .7,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: .2,
              }}
              whileHover={{
                y: -22,
                scale: 1.02,
              }}
              className="relative z-30"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/website2.png"
                  alt="Website Development"
                  width={760}
                  height={470}
                  className="drop-shadow-[0_45px_80px_rgba(0,0,0,0.35)]"
                />
              </motion.div>
            </motion.div>

            {/* Right Laptop */}

            <motion.div
              initial={{
                x: 180,
                opacity: 0,
                rotate: 12,
                scale: .8,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                rotate: 8,
                scale: .88,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              whileHover={{
                y: -18,
                rotate: 5,
              }}
              className="absolute right-0 bottom-6 z-10"
            >
              <Image
                src="/assets/website3.png"
                alt="Business Website"
                width={520}
                height={330}
                className="drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
              />
            </motion.div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-0 right-24 z-40 rounded-2xl bg-white/90 backdrop-blur-xl px-6 py-5 shadow-2xl"
            >
              <p className="text-sm text-gray-500">
                Projects Delivered
              </p>

              <h3 className="text-3xl font-black text-[#171717]">
                250+
              </h3>
            </motion.div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-24 bottom-10 z-40 rounded-2xl bg-white px-6 py-5 shadow-2xl"
            >
              <div className="flex gap-3 items-center">

                <div className="w-4 h-4 rounded-full bg-green-500"/>

                <div>

                  <p className="text-sm text-gray-500">
                    Live Websites
                  </p>

                  <h4 className="font-bold text-[#171717]">
                    Fast • Responsive • Secure
                  </h4>

                </div>

              </div>

            </motion.div>

          </div>

          {/* Content */}

          <motion.div
            initial={{
              opacity:0,
              y:80
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:.9
            }}
            className="max-w-3xl mx-auto text-center mt-12"
          >

            <span className="inline-flex px-5 py-2 rounded-full bg-[#F8BC04]/10 text-[#F8BC04] font-semibold tracking-wide">
              Premium Website Development
            </span>

           <h2 className="mt-5 text-[28px] md:text-[34px] font-bold text-[#171717] leading-tight">
  Creating Websites That Shine
</h2>

            <p className="mt-7 text-[20px] leading-8 text-[#555] max-w-6xl mx-auto">
  We build modern, responsive, and high-performing websites that combine
  exceptional design with seamless functionality. Every website is crafted
  to strengthen your brand, deliver an outstanding user experience, and help
  turn visitors into long-term customers.
</p>

          </motion.div>

        </div>


      {/* =========================
          WHY OUR WEBSITES PERFORM BETTER
      ========================= */}

      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">

        {/* Background Glow */}

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-60 top-20 w-[500px] h-[500px] rounded-full bg-[#F8BC04]/10 blur-[140px]"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, .9, 1.1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-60 bottom-0 w-[520px] h-[520px] rounded-full bg-[#F8BC04]/10 blur-[150px]"
        />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
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
              duration: .9,
            }}
            className="text-center max-w-3xl mx-auto"
          >

            <span className="inline-flex px-5 py-2 rounded-full bg-[#F8BC04]/10 text-[#F8BC04] font-semibold tracking-wider">
              What Makes Us Different
            </span>

            <h2 className="mt-6 text-[32px] md:text-[46px] font-black text-[#171717] leading-tight">
              Every Website Is Designed To Deliver
              <span className="text-[#F8BC04]"> Better Experiences & Better Results</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine creativity, performance, and user psychology to build
              websites that look exceptional, load instantly, and encourage
              visitors to take meaningful action.
            </p>

          </motion.div>

          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {[
              {
                icon: "/assets/focus.png",
                title: "Purpose-Driven Layouts",
                desc: "Every section is strategically structured to guide users toward the information that matters most while reducing unnecessary distractions.",
              },
              {
                icon: "/assets/speed.png",
                title: "Lightning Fast Performance",
                desc: "Optimized code, modern technologies, and performance-focused development ensure your website loads quickly on every device.",
              },
              {
                icon: "/assets/design.png",
                title: "Premium Visual Identity",
                desc: "Elegant interfaces, balanced layouts, and refined interactions create a memorable digital experience that strengthens your brand.",
              },
              {
                icon: "/assets/conversion.png",
                title: "Conversion-Oriented Design",
                desc: "Thoughtfully placed content and user-focused journeys encourage visitors to enquire, purchase, or connect with confidence.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 90,
                  rotateX: -25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .8,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -18,
                  rotateX: 8,
                  rotateY: index % 2 === 0 ? -8 : 8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[32px] bg-white border border-gray-100 p-8 shadow-[0_25px_60px_rgba(0,0,0,.08)] hover:shadow-[0_35px_90px_rgba(248,188,4,.25)] transition-all duration-500"
              >

                {/* Hover Gradient */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: .6,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: .5,
                  }}
                  className="absolute -right-14 -top-14 w-44 h-44 rounded-full bg-[#F8BC04]/20 blur-3xl"
                />

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: [0, -12, 12, 0],
                    scale: 1.15,
                  }}
                  transition={{
                    duration: .7,
                  }}
                  className="relative z-10 flex items-center justify-center w-20 h-20 rounded-3xl bg-[#F8BC04]/10"
                >

                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={42}
                    height={42}
                  />

                </motion.div>

                <h3 className="relative z-10 mt-8 text-2xl font-bold text-[#171717]">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-5 text-gray-600 leading-8">
                  {item.desc}
                </p>

                {/* Bottom Line */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: .45,
                  }}
                  className="absolute left-0 bottom-0 h-[5px] bg-[#F8BC04] rounded-full"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      </section>

      {/* =========================
            ABOUT OUR WEB DEVELOPMENT
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background Glow */}

        <motion.div
          animate={{
            x: [-30, 40, -30],
            y: [20, -30, 20],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-10 top-20 h-[420px] w-[420px] rounded-full bg-[#F8BC04]/15 blur-[120px]"
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
          className="absolute -right-72 -bottom-72 h-[700px] w-[700px] rounded-full border border-[#F8BC04]/10"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              rotateY: -12,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .9,
            }}
            className="relative max-w-[620px] mx-auto"
          >

            {/* Yellow Block */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 -left-8 h-[280px] w-[280px] rounded-[40px] bg-[#F8BC04]"
            />

            {/* Image */}

            <motion.div
              whileHover={{
                rotateY: 8,
                rotateX: 5,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="relative z-20 overflow-hidden rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,.15)]"
            >

              <Image
                src="/assets/about-team.png"
                alt="Website Development Team"
                width={720}
                height={560}
                className="transition duration-700 hover:scale-110"
              />

            </motion.div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-6 top-10 z-30 rounded-3xl bg-white px-6 py-5 shadow-2xl"
            >

              <p className="text-sm text-gray-500">
                Successful Launches
              </p>

              <h3 className="text-4xl font-black text-[#171717]">
                250+
              </h3>

            </motion.div>

          </motion.div>

          {/* CONTENT */}

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
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F8BC04]">
              About BIGBEANS DIGITAL
            </span>

            <h2 className="mt-7 text-[36px] font-black leading-tight text-[#171717] md:text-[54px]">
              Building High-Impact
              <br />
              Websites That Inspire
              <span className="text-[#F8BC04]">
                {" "}Trust & Growth
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Our team combines creative thinking, strategic planning, and
              modern web technologies to create premium websites that are
              visually engaging, lightning-fast, and optimized for long-term
              business success. Every project is built to strengthen your
              digital presence while delivering measurable results.
            </p>

            <div className="mt-12 grid gap-6">

              {[
                {
                  title: "Business-Focused Strategy",
                  text: "Every website starts with understanding your audience, goals, and market to create meaningful digital experiences.",
                },
                {
                  title: "Premium User Experience",
                  text: "Clean layouts, intuitive navigation, and responsive interfaces ensure visitors enjoy every interaction.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * .15,
                  }}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  className="group flex items-start gap-5 rounded-[28px] border border-gray-100 bg-[#fafafa] p-6 transition-all duration-500 hover:border-[#F8BC04]/40 hover:bg-white hover:shadow-xl"
                >

                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.15,
                    }}
                    transition={{
                      duration: .6,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8BC04] text-xl font-bold text-white"
                  >
                    ✓
                  </motion.div>

                  <div>

                    <h3 className="text-xl font-bold text-[#171717]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-8 text-gray-600">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: .95,
              }}
              className="mt-12 rounded-full bg-[#171717] px-9 py-4 font-semibold text-white transition hover:bg-[#F8BC04] hover:text-[#171717]"
            >
              Let's Build Together
            </motion.button>

          </motion.div>

        </div>

      </section>

      {/* =========================
            TECHNOLOGIES WE MASTER
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [.15, .3, .15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#F8BC04]/15 blur-[140px]"
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

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#F8BC04]">
              Modern Technology Stack
            </span>

            <h2 className="mt-6 text-[36px] font-black leading-tight text-[#171717] md:text-[54px]">
              Technologies We
              <span className="text-[#F8BC04]">
                {" "}Work With
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
              We leverage modern frameworks, programming languages, databases,
              and development tools to create fast, scalable, secure, and
              future-ready websites that deliver exceptional user experiences
              across every platform and device.
            </p>

          </motion.div>

          {/* Technologies */}

          {[
            [
              { name: "HTML5", icon: "🌐" },
              { name: "CSS3", icon: "🎨" },
              { name: "JavaScript", icon: "🟨" },
              { name: "TypeScript", icon: "🔷" },
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Tailwind CSS", icon: "💨" },
            ],
            [
              { name: "Node.js", icon: "🟢" },
              { name: "Express.js", icon: "🚀" },
              { name: "PHP", icon: "🐘" },
              { name: "Laravel", icon: "❤️" },
              { name: "Flutter", icon: "🦋" },
              { name: "MongoDB", icon: "🍃" },
              { name: "MySQL", icon: "🗄️" },
            ],
          ].map((row, rowIndex) => (

            <motion.div
              key={rowIndex}
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
                delay: rowIndex * .15,
              }}
              className="mt-14 overflow-hidden"
            >

              <motion.div
                animate={{
                  x: rowIndex === 0
                    ? ["0%", "-18%", "0%"]
                    : ["-18%", "0%", "-18%"],
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max gap-8"
              >

                {[...row, ...row].map((tech, index) => (

                  <motion.div
                    key={`${tech.name}-${index}`}
                    whileHover={{
                      y: -14,
                      rotateY: 10,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="group flex min-w-[220px] items-center gap-5 rounded-[28px] border border-gray-100 bg-white px-7 py-6 shadow-[0_20px_45px_rgba(0,0,0,.08)] transition-all duration-500 hover:border-[#F8BC04]/40 hover:shadow-[0_30px_70px_rgba(248,188,4,.18)]"
                  >

                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{
                        duration: .6,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8BC04]/10 text-3xl"
                    >
                      {tech.icon}
                    </motion.div>

                    <div>

                      <h3 className="text-lg font-bold text-[#171717]">
                        {tech.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Modern Development
                      </p>

                    </div>

                  </motion.div>

                ))}

              </motion.div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* =========================
            WHY YOUR BUSINESS NEEDS A PROFESSIONAL WEBSITE
      ========================= */}

      <section className="relative overflow-hidden bg-[#FFFFFF] py-24 lg:py-32">

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [.15, .3, .15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-10 top-20 h-[420px] w-[420px] rounded-full bg-[#F8BC04]/20 blur-[130px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              rotateY: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
            className="relative max-w-[620px] mx-auto"
          >

            {/* Image */}

            <motion.div
              whileHover={{
                rotateY: 6,
                rotateX: 5,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 170,
              }}
              className="overflow-hidden rounded-[36px] shadow-[0_45px_80px_rgba(0,0,0,.15)]"
            >

              <Image
                src="/assets/business-growth.jpg"
                alt="Website Development"
                width={760}
                height={760}
                className="transition duration-700 hover:scale-110"
              />

            </motion.div>

            {/* Floating Tags */}

            <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">

              {[
                "Responsive",
                "SEO Ready",
                "Secure",
                "Fast",
                "Scalable",
              ].map((tag, index) => (

                <motion.div
                  key={tag}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * .2,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="rounded-full bg-[#171717]/90 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl"
                >
                  {tag}
                </motion.div>

              ))}

            </div>

            {/* Floating CTA */}

          

          </motion.div>

          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F8BC04]">
              Why Your Business Needs One
            </span>

            <h2 className="mt-7 text-[38px] font-black leading-tight text-[#171717] md:text-[58px]">
              Transform Visitors
              <br />
              Into
              <span className="text-[#F8BC04]">
                {" "}Loyal Customers
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Your website is often the first interaction customers have with
              your business. A professionally designed website builds trust,
              improves visibility on search engines, creates better user
              experiences, and helps convert visitors into long-term customers.
            </p>

            <div className="mt-12 space-y-6">

              {[
                {
                  title: "Professional Brand Presence",
                  text: "Create a strong first impression with a modern website that reflects your business identity.",
                },
                {
                  title: "Higher Search Visibility",
                  text: "SEO-friendly development helps your business appear where potential customers are searching.",
                },
                {
                  title: "Better User Experience",
                  text: "Responsive layouts and intuitive navigation keep visitors engaged across every device.",
                },
                {
                  title: "More Leads & Conversions",
                  text: "Strategic layouts and compelling calls-to-action encourage enquiries and sales.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * .15,
                  }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  className="group flex gap-5 rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#F8BC04]/40 hover:shadow-[0_20px_50px_rgba(248,188,4,.18)]"
                >

                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: .7,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8BC04] text-xl font-bold text-white"
                  >
                    ✓
                  </motion.div>

                  <div>

                    <h3 className="text-xl font-bold text-[#171717]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-8 text-gray-600">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================
            FEATURED PROJECTS
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [.15, .3, .15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-[#F8BC04]/20 blur-[140px]"
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
          className="absolute -right-80 bottom-0 h-[750px] w-[750px] rounded-full border border-[#F8BC04]/10"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
            className="mx-auto mb-24 max-w-4xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#F8BC04]">
              Featured Projects
            </span>

            <h2 className="mt-6 text-[36px] font-black leading-tight text-[#171717] md:text-[56px]">
              Real Websites.
              <span className="text-[#F8BC04]">
                {" "}Real Results.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
              Every website we create is tailored around business goals,
              customer experience, performance and long-term growth. Here are
              two recent projects developed by BIGBEANS DIGITAL.
            </p>

          </motion.div>

          {[
            {
              name:"Cake Glory",
              industry:"Bakery Website",
              image:"/assets/project1.png",
              url:"www.cakeglory.com",
              features:[
                "Premium UI Design",
                "Mobile Responsive",
                "SEO Optimized",
                "Fast Loading",
              ],
              reverse:false,
              desc:"Designed for a premium bakery brand, Cake Glory combines elegant visuals, intuitive navigation and optimized performance to deliver a delightful online ordering experience."
            },
            {
              name:"Sleepfree",
              industry:"FMCG Brand Website",
              image:"/assets/project2.png",
              url:"www.sleepfree.com",
              features:[
                "Modern Brand Identity",
                "Conversion Focused",
                "Responsive Design",
                "High Performance",
              ],
              reverse:true,
              desc:"Developed to strengthen brand visibility, Sleepfree delivers a modern digital experience with engaging storytelling, clean layouts and an optimized customer journey."
            }
          ].map((project,index)=>(

            <div
              key={project.name}
              className={`grid items-center gap-16 ${
                project.reverse
                  ? "lg:grid-cols-[1.2fr_0.8fr]"
                  : "lg:grid-cols-[0.8fr_1.2fr]"
              } ${index!==0 && "mt-28"}`}
            >

              {/* TEXT */}

              <motion.div
                initial={{
                  opacity:0,
                  x:project.reverse?80:-80
                }}
                whileInView={{
                  opacity:1,
                  x:0
                }}
                viewport={{
                  once:true
                }}
                transition={{
                  duration:.8
                }}
                className={project.reverse?"lg:order-2":""}
              >

                <span className="inline-flex rounded-full bg-[#171717] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                  {project.industry}
                </span>

                <h3 className="mt-7 text-[34px] font-black text-[#171717] md:text-[52px]">
                  {project.name}
                </h3>

                <p className="mt-8 text-lg leading-9 text-gray-600">
                  {project.desc}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">

                  {project.features.map((feature,i)=>(

                    <motion.div
                      key={feature}
                      whileHover={{
                        x:8,
                        scale:1.03
                      }}
                      className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#fafafa] px-5 py-4"
                    >

                      <motion.div
                        animate={{
                          scale:[1,1.25,1]
                        }}
                        transition={{
                          duration:2,
                          repeat:Infinity,
                          delay:i*.2
                        }}
                        className="h-3 w-3 rounded-full bg-[#F8BC04]"
                      />

                      <span className="font-semibold text-[#171717]">
                        {feature}
                      </span>

                    </motion.div>

                  ))}

                </div>

                <div className="mt-12 flex flex-wrap gap-5">

                  
                  <div className="rounded-full border border-gray-200 px-7 py-4 text-gray-500">
                    {project.url}
                  </div>

                </div>

              </motion.div>

              {/* IMAGE */}

              <motion.div
                initial={{
                  opacity:0,
                  x:project.reverse?-80:80,
                  rotateY:project.reverse?-12:12
                }}
                whileInView={{
                  opacity:1,
                  x:0,
                  rotateY:0
                }}
                viewport={{
                  once:true
                }}
                transition={{
                  duration:.9
                }}
                className={project.reverse?"lg:order-1":""}
              >

                <motion.div
                  whileHover={{
                    rotateY:6,
                    rotateX:5,
                    scale:1.03
                  }}
                  transition={{
                    type:"spring",
                    stiffness:170
                  }}
                  className="relative max-w-[620px] mx-auto"
                >

                  {/* Browser */}

                  <div className="overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_35px_80px_rgba(0,0,0,.12)]">

                    <div className="flex items-center gap-2 border-b bg-gray-50 px-6 py-4">

                      <div className="h-3 w-3 rounded-full bg-red-400"/>

                      <div className="h-3 w-3 rounded-full bg-yellow-400"/>

                      <div className="h-3 w-3 rounded-full bg-green-400"/>

                      <div className="ml-6 rounded-full bg-white px-5 py-2 text-sm text-gray-400">
                        {project.url}
                      </div>

                    </div>

                    <Image
                      src={project.image}
                      alt={project.name}
                      width={900}
                      height={700}
                      className="transition duration-700 hover:scale-105"
                    />

                  </div>

                  {/* Floating Badge */}

               


                </motion.div>

              </motion.div>

            </div>

          ))}

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
        WEBSITE DEVELOPMENT FAQS
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
          q: "Why does my business need a professional website?",
          a: "A professional website is your business's digital storefront. It helps build trust, improve credibility, generate qualified leads, and convert visitors into customers. As the Best Website Development Company for Startups, BIGBEANS DIGITAL creates modern, fast, and SEO-friendly websites that support long-term business growth."
        },
        {
          q: "What website development services does BIGBEANS DIGITAL offer?",
          a: "Our Website Development Services include business website development, startup websites, corporate websites, ecommerce website development, landing pages, custom web applications, portfolio websites, responsive website design, website redesign, and SEO-friendly website development tailored to your business goals."
        },
        {
          q: "Why should I choose BIGBEANS DIGITAL for website development?",
          a: "BIGBEANS DIGITAL is a Best Website Development Company for Startups that builds websites focused on performance, user experience, SEO, and conversions. Every website is custom-designed to help businesses attract more visitors, generate leads, and grow online."
        },
        {
          q: "Will my website be mobile-friendly and responsive?",
          a: "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones. Our responsive website development ensures your business delivers a seamless user experience across all devices."
        },
        {
          q: "Will my website be SEO-friendly?",
          a: "Absolutely. Every project includes SEO-friendly website development with clean code, fast loading speed, mobile responsiveness, optimized page structure, technical SEO best practices, and performance optimization to improve your search engine visibility."
        },
        {
          q: "Can you redesign my existing website?",
          a: "Yes. We provide professional website redesign services for businesses looking to modernize their website, improve user experience, increase loading speed, enhance SEO performance, and generate more leads."
        },
        {
          q: "How long does it take to develop a website?",
          a: "The timeline depends on your project requirements. Most business and startup websites are completed within 2–6 weeks, while larger custom website development projects may require additional time based on functionality and content."
        },
        {
          q: "Can you build websites for startups and small businesses?",
          a: "Yes. We specialize in website development for startups, entrepreneurs, SMEs, ecommerce brands, healthcare businesses, real estate companies, gyms, educational institutes, restaurants, and service-based businesses looking to establish a strong online presence."
        },
        {
          q: "Do you provide website maintenance and support after launch?",
          a: "Yes. We offer ongoing website maintenance, security updates, performance optimization, bug fixes, content updates, and technical support to keep your website secure, fast, and running smoothly after launch."
        },
        {
          q: "Can my website grow as my business grows?",
          a: "Absolutely. We build scalable websites that can easily accommodate new pages, products, services, integrations, and features as your business expands. Our custom website development solutions are designed to support your long-term digital growth and evolving business needs."
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