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
            className="max-w-7xl mx-auto mt-6"
          >

           <div className="grid lg:grid-cols-[0.95fr_1.25fr] items-center gap-20">

  <div>

    <h2 className="text-[64px] lg:text-[76px] font-black leading-[0.95] tracking-[-2px] text-[#171717]">
      Creating
      <br />
      Websites
      <br />
      <span className="text-[#F8BC04]">
        That Shine
      </span>
    </h2>

  </div>

  <div>

    <p className="text-[22px] leading-[1.45] tracking-[0.08em] text-[#171717]">
      We build modern, responsive, and high-performing websites that combine
      exceptional design with seamless functionality. Every website is crafted
      to strengthen your brand, deliver an outstanding user experience, and
      help turn visitors into long-term customers.
    </p>

  </div>

</div>

          </motion.div>

        </div>


      {/* =========================
          WHY OUR WEBSITES PERFORM BETTER
      ========================= */}

      <section className="relative py-10 lg:py-10 bg-white overflow-hidden">

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
            className="text-center max-w-5xl mx-auto"
          >

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 mt-20">

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
                className="group flex flex-col items-center text-center"
              >

                

                {/* Icon */}

                                      <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: .3,
                        }}
                        className="flex items-center justify-center w-16 h-16 mx-auto"
>

                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={42}
                    height={42}
                  />

                </motion.div>

                <h3 className="mt-6 text-[19px] font-bold text-[#171717] leading-tight">
  {item.title}
</h3>

                <p className="mt-2 text-[16px] leading-6 text-gray-900 max-w-[480px] mx-auto text-justify">
  {item.desc}
</p>

                

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      </section>

      {/* =========================
            ABOUT OUR WEB DEVELOPMENT
      ========================= */}

      <section className="relative overflow-hidden bg-white pt-0 pb-1">

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

            <div className="mt-12 flex justify-end">
  <motion.button
    whileHover={{
      scale: 1.05,
      y: -4,
    }}
    whileTap={{
      scale: 0.95,
    }}
    animate={{
  backgroundColor: [
    "#171717",
    "#F9C936",
    "#171717",
  ],
  color: [
    "#FFFFFF",
    "#171717",
    "#FFFFFF",
  ],
}}
transition={{
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut",
}}
  
    className="rounded-full px-9 py-4 font-semibold border border-[#171717] transition-colors"
  >
    Let's Build Together
  </motion.button>
</div>

            

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
              className="absolute -right-6 top-1 z-30 rounded-3xl bg-white px-6 py-5 shadow-2xl"
            >

              <p className="text-sm text-gray-500">
                Successful Launches
              </p>

              <h3 className="text-4xl font-black text-[#f9c936]">
                50+
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

            

            <h2 className="mt-1 text-[36px] font-black leading-tight text-[#171717] md:text-[40px]">
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

            <div className="mt-5 grid gap-6">

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

            

          </motion.div>

        </div>

      </section>

      {/* =========================
            TECHNOLOGIES WE MASTER
      ========================= */}

      <section className="relative overflow-hidden bg-white py-10 lg:py-10">

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


            <h2 className="mt-0 text-[36px] font-black leading-tight text-[#171717] md:text-[54px]">
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
              className="mt-5 overflow-hidden"
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
                    className="group flex min-w-[220px] items-center gap-10 rounded-[28px] border border-gray-100 bg-white px-7 py-6 transition-all duration-500 hover:border-[#F8BC04]/40 hover:shadow-[0_30px_70px_rgba(248,188,4,.18)]"
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
      INDUSTRIES WE SERVE
========================= */}

<section className="relative overflow-hidden bg-white py-10 lg:py-10">

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute left-0 top-10 h-[450px] w-[450px] rounded-full bg-[#F8BC04]/20 blur-[150px]"
  />

  <motion.div
    animate={{
      scale: [1.1, 1, 1.1],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
    }}
    className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-[#F8BC04]/20 blur-[160px]"
  />

  <div className="relative max-w-[1500px] mx-auto px-6">

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
      className="text-center max-w-5xl mx-auto"
    >

      

      <h2 className="mt-1 text-[10px] md:text-[50px] font-black leading-tight text-[#171717]">
         Different Sectors We Served for
        <span className="text-[#F8BC04]">
          {" "}Websites Designing & Development
        </span>
        <br />
        
      </h2>

      <p className="mx-auto mt-4 max-w-8xl text-lg leading-9 text-gray-900">
        Premium website solutions crafted specifically for every industry with
        performance, conversion and exceptional user experience 
      </p>

    </motion.div>

    {/* 6 × 2 Grid */}

    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {[
  {
    title: "Ecommerce",
    desc: "Beautiful shopping experiences that increase trust, engagement and online sales.",
    image: "/assets/websitedevelopment/industries/ecommerce.jpg",
  },
  {
    title: "Education",
    desc: "Interactive websites that make learning engaging for students and institutions.",
    image: "/assets/websitedevelopment/industries/education.jpg",
  },
  {
    title: "Real Estate",
    desc: "Premium property websites that generate enquiries and showcase listings beautifully.",
    image: "/assets/websitedevelopment/industries/realestate.jpg",
  },
  {
    title: "Tech",
    desc: "Modern dashboards and business platforms for data-driven organizations.",
    image: "/assets/websitedevelopment/industries/data.jpg",
  },
  
 
  {
    title: "Transportation",
    desc: "Responsive websites for logistics, transport and mobility businesses.",
    image: "/assets/websitedevelopment/industries/transport.jpg",
  },
  {
    title: "FMCG",
    desc: "Fast-moving consumer brand websites designed for maximum engagement.",
    image: "/assets/websitedevelopment/industries/fmcg.jpg",
  },
  {
    title: "Travel And Torisum",
    desc: "Professional healthcare websites that build credibility and patient trust.",
    image: "/assets/websitedevelopment/industries/TravelAndTorisum.jpg",
  },
  {
    title: "Hospitality",
    desc: "Luxury hotel and hospitality websites designed to increase bookings.",
    image: "/assets/websitedevelopment/industries/hospitality.jpg",
  },


].map((industry, index) => (

  <motion.div
    key={industry.title}
    initial={{
      opacity: 0,
      y: 50,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: .6,
      delay: index * .05,
    }}
    whileHover={{
      y: -10,
      scale: 1.03,
    }}
    className="group rounded-[22px] bg-[#F8BC04] p-4 transition-all duration-500 hover:bg-white shadow-[0_15px_45px_rgba(0,0,0,.08)]"
  >

    <div className="flex h-full flex-col">

      <h3 className="text-[22px] font-black leading-tight text-[#171717]">
        {industry.title}
      </h3>

      <p className="mt-3 text-[14px] leading-6 text-[#171717]">
        {industry.desc}
      </p>

      <div className="mt-5 overflow-hidden rounded-[16px]">

        <Image
          src={industry.image}
          alt={industry.title}
          width={400}
          height={260}
          className="h-[150px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

    </div>

  </motion.div>

))}

    </div>

  </div>

</section>

{/* =========================
      END INDUSTRIES WE SERVE
========================= */}

{/* =========================
      WEBSITE SHOWCASE
========================= */}

<section className="relative overflow-hidden bg-white py-24 lg:py-32">

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F8BC04]/15 blur-[150px]"
  />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

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
      className="mx-auto max-w-5xl text-center"
    >

      <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F8BC04]">
        Premium Website Portfolio
      </span>

      <h2 className="mt-6 text-[40px] md:text-[60px] font-black leading-tight text-[#171717]">
        Leading The Way As The
        <span className="text-[#F8BC04]">
          {" "}Top Website Design
        </span>
        <br />
        Company
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">
        We design premium websites that combine elegant UI, exceptional
        performance, seamless user experience and conversion-focused layouts
        to help businesses establish a powerful online presence.
      </p>

    </motion.div>

        <div className="relative mt-24 flex items-end justify-center h-[520px]">

      {/* Left Laptop */}

      <motion.div
        initial={{
          opacity: 0,
          x: -140,
          rotate: -10,
          scale: .82,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          rotate: -8,
          scale: .9,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .9,
        }}
        whileHover={{
          y: -15,
          rotate: -5,
        }}
        className="absolute left-6 bottom-0 z-10"
      >

        <Image
          src="/assets/showcase-left.png"
          alt="Corporate Website"
          width={520}
          height={330}
          className="drop-shadow-[0_35px_60px_rgba(0,0,0,.20)]"
        />

      </motion.div>

      {/* Center Laptop */}

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
          scale: .8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: .15,
        }}
        className="relative z-30"
      >

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <Image
            src="/assets/showcase-center.png"
            alt="Website Showcase"
            width={760}
            height={470}
            className="drop-shadow-[0_45px_80px_rgba(0,0,0,.25)]"
          />

        </motion.div>

      </motion.div>

      {/* Right Laptop */}

      <motion.div
        initial={{
          opacity: 0,
          x: 140,
          rotate: 10,
          scale: .82,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          rotate: 8,
          scale: .9,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .9,
        }}
        whileHover={{
          y: -15,
          rotate: 5,
        }}
        className="absolute right-6 bottom-0 z-10"
      >

        <Image
          src="/assets/showcase-right.png"
          alt="Luxury Website"
          width={520}
          height={330}
          className="drop-shadow-[0_35px_60px_rgba(0,0,0,.20)]"
        />

      </motion.div>

          {/* Reflection */}

      <div className="absolute bottom-0 left-1/2 h-10 w-[900px] -translate-x-1/2 rounded-full bg-black/10 blur-2xl" />

    </div>

  </div>

</section>

{/* =========================
      END WEBSITE SHOWCASE
========================= */}  

      {/* =========================
      WEBSITE DESIGN PROCESS
========================= */}

<section className="relative overflow-hidden bg-white py-10 lg:py-10">

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-[#F8BC04]/15 blur-[140px]"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <div className="grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">

      {/* ================= LEFT CONTENT ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
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

        <h2 className="mt-1 text-[30px] font-black leading-tight text-[#171717] md:text-[45px]">
          Best Website Design &
          <br />
          Development Company 
          <br></br>
          <span className="text-[#F8BC04]">
            {" "}For Startups
          </span>
        </h2>

        <p className="mt-8 text-lg leading-7 text-gray-600 text-justify">
          We design premium websites that combine creativity, strategy,
          performance and user experience. Every project is built to
          strengthen your brand, increase engagement, improve credibility
          and generate measurable business growth.
        </p>

        <div className="mt-10 space-y-8">

          <div>

            <h3 className="text-2xl font-bold text-[#171717]">
              Custom Websites That Work For Your Brand
            </h3>

            <p className="mt-3 text-gray-600 leading-8 text-justify">
              Every business is unique, so every website we build is completely
              custom. We focus on user experience, responsiveness, SEO,
              performance and conversion to ensure your website delivers
              measurable business results.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-[#171717]">
              Smart Design & Seamless Functionality
            </h3>

            <p className="mt-3 text-gray-600 leading-8 text-justify">
              Our websites combine premium UI design with modern development
              technologies to deliver fast loading speeds, intuitive navigation,
              mobile responsiveness and an exceptional experience across every
              device.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-[#171717]">
              Strategic Focus On Business Growth
            </h3>

            <p className="mt-3 text-gray-600 leading-8 text-justify">
              Every layout, section and interaction is carefully designed to
              increase engagement, build trust and convert visitors into
              customers while supporting your long-term business growth.
            </p>

          </div>

        </div>

      </motion.div>

      {/* ================= RIGHT CONTENT ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 60,
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
        className="space-y-4"
      >

        {/* IMAGE 1 */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="overflow-hidden rounded-[26px] border border-gray-200 bg-white "
        >

          <Image
            src="/assets/website-design-showcase.jpg"
            alt="Website Design Showcase"
            width={1200}
            height={700}
            className="w-full h-[260px] object-cover transition duration-700 hover:scale-105"
          />

        </motion.div>

        {/* IMAGE 2 */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="overflow-hidden rounded-[26px] border border-gray-200 bg-white "
        >

          <Image
            src="/assets/website-design-showcase-2.jpg"
            alt="Website Design Showcase"
            width={1200}
            height={700}
            className="w-full h-[260px] object-cover transition duration-700 hover:scale-105"
          />

        </motion.div>

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="overflow-hidden rounded-[26px] border border-gray-200 bg-white"
        >

          <Image
            src="/assets/website-design-showcase-2.jpg"
            alt="Website Design Showcase"
            width={1200}
            height={700}
            className="w-full h-[260px] object-cover transition duration-700 hover:scale-105"
          />

        </motion.div>

      </motion.div>

    </div>

  </div>

</section>

{/* =========================
      END WEBSITE DESIGN PROCESS
========================= */}












      




















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