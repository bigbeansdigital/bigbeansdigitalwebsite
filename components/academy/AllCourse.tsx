"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { courses } from "./coursesData";
import CourseCard from "./CourseCard";

const categories = [
  "All",
  "Digital Marketing",
  "Artificial Intelligence",
  "Graphic Design",
  "Web Development",
  "Performance Marketing",
];

export default function AllCourse() {
    const [search, setSearch] = useState("");

const filteredCourses = useMemo(() => {
  return [...courses]
    .reverse()
    .filter((course) => {
      const keyword = search.toLowerCase();

      return (
        course.title.toLowerCase().includes(keyword) ||
        course.category.toLowerCase().includes(keyword) ||
        course.description.toLowerCase().includes(keyword) ||
        course.instructor.toLowerCase().includes(keyword)
      );
    });
}, [search]);

  return (
    <section className="bg-[#FAFAFA] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-[#F8BC04]/10 px-5 py-2 text-sm font-semibold text-[#F8BC04]">
            BIGBEANS DIGITAL Academy
          </span>

          <h1 className="mt-5 text-4xl font-black text-[#171717] lg:text-6xl">
            Explore All Courses
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Discover practical courses designed to help you build industry-ready
            digital skills.
          </p>
        </motion.div>

        <div className="mt-10 mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"> </div>
        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
            />

          ))}

        </div>

      </div>
    </section>
  );
}