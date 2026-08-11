"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SocialMediaMarketing() {
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");

  const categories = [
    "All Blogs",
    "Digital Marketing",
    "Social Media",
    "Graphic Design",
    "AI",
    "Branding",
    "Big Beans Digital",
    "Website Development",
  ];

  const blogs = [
    {
      id: 1,
      image: "/assets/blog/allblogs/demoblog/blogthumbnail1.png",
      date: "JULY 28, 2026",
      category: "Big Beans Digital",
      title: "Scaling Startups into Powerhouses",
      description: "In today’s hyper-competitive digital landscape, turning a breakthrough idea into an industry-leading brand requires far more than aesthetic graphics or basic ad campaigns........Click Read More",
      link: "/blog/allblogs/demo",
    },

    
    // ADD YOUR NEXT BLOG HERE
    // {
    //   id: 2,
    //   image: "/images/your-image.jpg",
    //   date: "JULY 25, 2026",
    //   category: "Social Media",
    //   title: "Your Blog Title",
    //   description: "Your blog description",
    //   link: "#",
    // },

    // ADD MORE BLOGS HERE
  ];

  const filteredBlogs =
    selectedCategory === "All Blogs"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      {/* Breadcrumb */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto flex max-w-7xl justify-center px-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <Link
              href="/"
              className="text-gray-700 transition-colors duration-300 hover:text-[#F8BC04]"
            >
              Home
            </Link>

            <span className="text-lg text-[#F8BC04]">→</span>

            <span className="font-semibold text-black">
              BIGBEANS DIGITAL BLOGS
            </span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">

            {/* LEFT CATEGORY TABLE */}
            <aside className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[220px]">
              <div className="overflow-hidden rounded-[22px] border border-[#EEEEEE] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)]">

                {/* Category Header */}
                <div className="border-b border-[#EEEEEE] bg-[#171717] px-6 py-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F8BC04]">
                    Explore
                  </p>

                  <h3 className="mt-1 text-[20px] font-medium text-white">
                    Categories
                  </h3>
                </div>

                {/* Categories */}
                <div className="p-3">
                  {categories.map((category) => {
                    const isActive = selectedCategory === category;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`group flex w-full items-center justify-between rounded-[14px] px-4 py-3.5 text-left text-[13px] transition-all duration-300 ${
                          isActive
                            ? "bg-[#F8BC04] font-semibold text-[#171717]"
                            : "text-[#777777] hover:bg-[#FAFAFA] hover:text-[#171717]"
                        }`}
                      >
                        <span>{category}</span>

                        <span
                          className={`text-[16px] transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        >
                          →
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* RIGHT BLOG GRID */}
            <div className="min-w-0 flex-1">

              {/* Selected Category Heading */}
              <div className="mb-8 flex items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F8BC04]">
                    BIGBEANS DIGITAL
                  </p>

                  <h2 className="mt-2 text-[28px] font-medium tracking-[-0.03em] text-[#171717]">
                    {selectedCategory}
                  </h2>
                </div>

                <span className="hidden text-[11px] uppercase tracking-[0.12em] text-[#A0A0A0] sm:block">
                  {filteredBlogs.length}{" "}
                  {filteredBlogs.length === 1 ? "Article" : "Articles"}
                </span>
              </div>

              {/* BLOG CARDS */}
              <motion.div
                layout
                className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
              >
                {filteredBlogs.map((blog) => (
                  <motion.article
                    layout
                    key={blog.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative w-full overflow-hidden rounded-[26px] bg-[#171717] shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
                  >
                    {/* Visual Header */}
                    <div className="relative h-[265px] overflow-hidden bg-[#F8BC04]">

                      {/* Image */}
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />

                      {/* Dark Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                      {/* Date */}
                      <div className="absolute bottom-5 left-5 z-10">
                        <span className="text-[12px] font-medium tracking-[0.08em] text-white/90">
                          {blog.date}
                        </span>
                      </div>

                      {/* Floating Category */}
                      <div className="absolute bottom-5 right-5 z-10">
                        <span className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold text-[#171717] shadow-lg">
                          {blog.category}
                        </span>
                      </div>

                      {/* Decorative Circle */}
                      <div className="absolute -right-10 -top-10 h-[100px] w-[100px] rounded-full border border-white/30 transition-transform duration-700 group-hover:scale-125" />

                      <div className="absolute -right-5 -top-5 h-[40px] w-[40px] rounded-full bg-white/10 backdrop-blur-sm" />
                    </div>

                    {/* Content */}
                    <div className="relative bg-white px-6 pb-7 pt-7">

                      {/* Title */}
                      <h2 className="text-[21px] font-medium leading-[1.13] tracking-[-0.025em] text-[#171717]">
                        {blog.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-5 text-[13px] leading-[1.65] text-[#929292]">
                        {blog.description}
                      </p>

                      {/* Bottom CTA */}
                      <div className="mt-7 flex items-center justify-between border-t border-[#EEEEEE] pt-5">
                        <Link
                          href={blog.link}
                          className="group/link inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#171717]"
                        >
                          <span className="relative">
                            Read Article

                            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#F8BC04] transition-all duration-300 group-hover/link:w-full" />
                          </span>

                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-white transition-all duration-300 group-hover/link:bg-[#F8BC04] group-hover/link:text-[#171717]">
                            <ArrowRight
                              size={15}
                              strokeWidth={2.5}
                              className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Yellow Accent */}
                    <div className="h-[4px] w-full bg-[#F8BC04] transition-all duration-500 group-hover:h-[7px]" />
                  </motion.article>
                ))}
              </motion.div>

              {/* No Blogs */}
              {filteredBlogs.length === 0 && (
                <div className="flex min-h-[300px] items-center justify-center rounded-[26px] border border-dashed border-[#DDDDDD]">
                  <div className="text-center">
                    <p className="text-[14px] font-medium text-[#171717]">
                      No blogs found
                    </p>

                    <p className="mt-2 text-[12px] text-[#999999]">
                      There are currently no articles in this category.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}