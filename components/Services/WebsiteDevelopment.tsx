"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WebsiteDevelopment() {
  return (
    <main className="bg-[#F8F8F8] overflow-hidden">

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

      <section className="relative overflow-hidden bg-[#F8F8F8] py-24 lg:py-32">

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

      {/* =========================
            FINAL CTA
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Animated Background */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8BC04]/15 blur-[160px]"
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
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8BC04]/10"
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

          <motion.span
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
              duration: .7,
            }}
            className="rounded-full border border-[#F8BC04]/30 bg-[#F8BC04]/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#F8BC04]"
          >
            Let's Create Something Exceptional
          </motion.span>

          <motion.h2
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
              delay: .15,
              duration: .8,
            }}
            className="mt-8 max-w-4xl text-[34px] font-black leading-tight text-[#171717] md:text-[60px]"
          >
            Ready To Build A Website That
            <span className="text-[#F8BC04]">
              {" "}Grows Your Business?
            </span>
          </motion.h2>

          <motion.p
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
              delay: .3,
              duration: .8,
            }}
            className="mt-8 max-w-3xl text-lg leading-9 text-gray-600"
          >
            Whether you're launching a new business, upgrading your existing
            website, or planning your next digital transformation, BIGBEANS
            DIGITAL is ready to create a premium online experience that
            strengthens your brand and delivers measurable results.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              scale: .8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .45,
              duration: .7,
            }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6"
          >

            <motion.a
              whileHover={{
                scale: 1.06,
                y: -5,
              }}
              whileTap={{
                scale: .95,
              }}
              href="/connect"
              className="rounded-full bg-[#F8BC04] px-10 py-5 text-lg font-bold text-[#171717] shadow-[0_20px_45px_rgba(248,188,4,.35)] transition-all duration-500 hover:shadow-[0_35px_70px_rgba(248,188,4,.45)]"
            >
              Start Your Project →
            </motion.a>

           

          </motion.div>

          {/* Floating Elements */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-6, 6, -6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute left-16 top-10 hidden h-7 w-7 rounded-full bg-[#F8BC04] lg:block"
          />

          <motion.div
            animate={{
              y: [0, 14, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute right-24 bottom-12 hidden h-10 w-10 rounded-2xl border border-[#F8BC04]/40 bg-white shadow-xl lg:block"
          />

        </div>

      </section>











    </main>
  );
}