"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function Blog() {
 const sortedBlogs = [...blogs].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
  return (
    <main className="overflow-hidden bg-[#FFFFFF]">

      {/* =========================
            BLOG HERO
      ========================= */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background Grid */}

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
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-24 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#F8BC04]/20 blur-[170px]"
        />

        {/* Floating Rings */}

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-24 top-20 h-[320px] w-[320px] rounded-full border border-[#F8BC04]/15"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-24 bottom-20 h-[420px] w-[420px] rounded-full border border-[#F8BC04]/10"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .9,
            }}
            className="mx-auto max-w-5xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04]">
              BIGBEANS DIGITAL Insights
            </span>

            <h1 className="mt-8 text-[48px] font-black leading-tight text-[#171717] md:text-[72px]">
              Ideas, Insights &
              <span className="block text-[#F8BC04]">
                Digital Inspiration
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-600">
              Stay ahead with expert articles on digital marketing, branding,
              website development, artificial intelligence, SEO, business
              growth, and emerging technologies. Every article is crafted to
              help entrepreneurs, students, and businesses make smarter digital
              decisions.
            </p>

            {/* Search */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .35,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="mx-auto mt-14 flex max-w-3xl items-center overflow-hidden rounded-full border border-gray-200 bg-white p-3 shadow-[0_30px_70px_rgba(0,0,0,.08)]"
            >

              <input
                type="text"
                placeholder="Search articles, topics or keywords..."
                className="flex-1 bg-transparent px-6 py-4 text-lg outline-none"
              />

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="rounded-full bg-[#171717] px-8 py-4 font-bold text-white transition-all duration-500 hover:bg-[#F8BC04] hover:text-[#171717]"
              >
                Search
              </motion.button>

            </motion.div>

                     {/* Category Pills */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .55,
              }}
              className="mt-14 flex flex-wrap justify-center gap-4"
            >

              {[
                "All",
                "AI",
                "Digital Marketing",
                "Website",
                "SEO",
                "Branding",
                "Social Media",
                "Business",
              ].map((category, index) => (

                <motion.button
                  key={category}
                  whileHover={{
                    y: -5,
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: .95,
                  }}
                  transition={{
                    delay: index * .05,
                  }}
                  className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                    category === "All"
                      ? "bg-[#171717] text-white"
                      : "border border-gray-200 bg-white text-[#171717] hover:bg-[#F8BC04] hover:border-[#F8BC04]"
                  }`}
                >
                  {category}
                </motion.button>

              ))}

            </motion.div>

            {/* Statistics */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .75,
              }}
              className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4"
            >

              {[
                {
                  value: "100+",
                  label: "Expert Articles",
                },
                {
                  value: "8+",
                  label: "Categories",
                },
                {
                  value: "Weekly",
                  label: "Fresh Content",
                },
                {
                  value: "5 min",
                  label: "Average Read",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                  }}
                  className="rounded-[24px] border border-white/60 bg-white/80 p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,.06)] backdrop-blur-xl"
                >

                  <h3 className="text-[34px] font-black text-[#F8BC04]">
                    {item.value}
                  </h3>

                  <p className="mt-2 font-semibold text-[#171717]">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </motion.div>

          </motion.div>

        </div>

      </section>   


      {/* =========================
            LATEST ARTICLES
      ========================= */}

      <section className="relative bg-[#FFFFFF] py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
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
              duration: .8,
            }}
            className="mb-16 text-center"
          >

            <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-6 py-3 text-sm font-bold text-[#F8BC04]">
              Latest Articles
            </span>

            <h2 className="mt-7 text-[42px] font-black text-[#171717] md:text-[60px]">
              Fresh Insights &
              <span className="text-[#F8BC04]">
                {" "}Expert Guides
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
              Explore our latest articles covering digital marketing,
              branding, AI, SEO, websites, business growth,
              and everything happening in the digital world.
            </p>

          </motion.div>

          {/* Blog Grid */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {sortedBlogs.map((blog, index) => (

              <motion.div
                key={blog.id}
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
                  delay:index*.08,
                }}
              >

                <Link
                  href={`/blog/${blog.slug}`}
                  className="group block overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(0,0,0,.14)]"
                >

                  {/* Image */}

                  <div className="relative overflow-hidden">

                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                                        {/* Category */}

                    <div className="absolute left-5 top-5">

                      <span className="rounded-full bg-[#F8BC04] px-4 py-2 text-xs font-bold text-[#171717] shadow-lg">
                        {blog.category}
                      </span>

                    </div>

                    {/* Reading Time */}

                    <div className="absolute right-5 top-5">

                      <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#171717] backdrop-blur-md">
                        {blog.readTime}
                      </span>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-7">

                    {/* Date */}

                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      <span className="text-[#F8BC04]">●</span>

                      <span>
                        {new Date(blog.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>

                    </div>

                    {/* Title */}

                    <h3 className="mt-5 text-[28px] font-black leading-tight text-[#171717] transition-colors duration-300 group-hover:text-[#F8BC04]">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}

                    <p className="mt-5 line-clamp-3 text-[16px] leading-8 text-gray-600">
                      {blog.excerpt}
                    </p>

                                       {/* Footer */}

                    <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">

                      {/* Author */}

                      <div>

                        <p className="text-sm text-gray-500">
                          By
                        </p>

                        <h4 className="font-bold text-[#171717]">
                          {blog.author}
                        </h4>

                      </div>

                      {/* Read More */}

                      <motion.div
                        whileHover={{
                          x: 6,
                        }}
                        className="flex items-center gap-2 font-bold text-[#171717] transition-all duration-300 group-hover:text-[#F8BC04]"
                      >

                        Read More

                        <motion.span
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          className="text-xl"
                        >
                          →
                        </motion.span>

                      </motion.div>

                    </div>

                  </div>

                </Link>

              </motion.div>

                         ))}

          </div>

          {/* Bottom CTA */}

          <motion.div
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
              delay: .2,
              duration: .8,
            }}
            className="mx-auto mt-20 max-w-4xl text-center"
          >

            <h3 className="text-[34px] font-black text-[#171717] md:text-[48px]">
              Never Miss Our
              <span className="text-[#F8BC04]">
                {" "}Latest Insights
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
              We regularly publish practical articles on digital marketing,
              branding, AI, website development, SEO, business growth, and
              emerging technologies to help you stay ahead in the digital world.
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
              Get In Touch →
            </motion.a>

          </motion.div>

        </div>

      </section>

    </main>
  );
}