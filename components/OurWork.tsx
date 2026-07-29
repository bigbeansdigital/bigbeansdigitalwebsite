"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  "Social Media Posts",
  "Social Media Works",
  "Ads Campaigns",
  "Website Works",
  "Branding Works",
];
const portfolioItems = Array.from({ length: 9 }, (_, index) => ({
  category: "Social Media Posts",
  title: `Project ${index + 1}`,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: "/portfolio/sample.jpg",
}));

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("Social Media Posts");

  return (
    <>
      {/* HERO SECTION */}

      <section className="pt-8 pb-12 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#F8BC04]/10 text-[#F8BC04] font-semibold">
              OUR PORTFOLIO
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-[#171717]">
              Our Work Speaks
              <br />
              Louder Than Words
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
              Explore our portfolio of Social Media Marketing,
              Website Development, Branding, Google Ads,
              Meta Ads and Creative Design projects.
            </p>

          </motion.div>

          {/* CATEGORY TABS */}

          <div className="flex flex-wrap justify-center gap-4 mt-16">

            {tabs.map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 border

                ${
                  activeTab === tab
                    ? "bg-[#171717] text-white border-[#171717]"
                    : "bg-white border-gray-300 text-[#171717] hover:border-[#F8BC04] hover:text-[#F8BC04]"
                }`}
              >

                {tab}

              </button>

            ))}

          </div>

        </div>
      </section>

    </>
  );
}