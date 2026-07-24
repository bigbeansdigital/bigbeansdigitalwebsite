"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, Clock, BookOpen } from "lucide-react";
import { Course } from "./coursesData";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {/* Image */}

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-[#F8BC04] px-4 py-1 text-xs font-bold text-[#171717]">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="line-clamp-2 text-2xl font-bold text-[#171717]">
          {course.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-[15px] leading-7 text-gray-600">
          {course.description}
        </p>

        <p className="mt-3 text-sm text-gray-500">
          By {course.instructor}
        </p>

        {/* Stats */}

        <div className="mt-5 flex flex-wrap gap-2">

          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1 text-xs">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {course.rating}
          </div>

          <div className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs">
            <Users className="h-4 w-4" />
            {course.students}
          </div>

          <div className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs">
            <Clock className="h-4 w-4" />
            {course.duration}
          </div>

          <div className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs">
            <BookOpen className="h-4 w-4" />
            {course.lessons}
          </div>

          <div className="rounded-md border px-2 py-1 text-xs">
            {course.level}
          </div>

        </div>

        {/* Price */}

        <div className="mt-6 flex items-end gap-3">

          <span className="text-3xl font-black text-[#171717]">
            {course.price}
          </span>

          <span className="text-lg text-red-500 line-through">
            {course.oldPrice}
          </span>

        </div>

        {/* Buttons */}

        <div className="mt-6 grid grid-cols-2 gap-3">

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={course.detailsButtonLink}
            className="flex items-center justify-center rounded-xl border border-[#171717] py-3 text-sm font-semibold text-[#171717] transition hover:bg-[#171717] hover:text-white"
          >
            {course.detailsButtonText}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={course.enrollLink}
            className="flex items-center justify-center rounded-xl bg-[#F8BC04] py-3 text-sm font-semibold text-[#171717] transition hover:bg-[#171717] hover:text-white"
          >
            {course.enrollButtonText}
          </motion.a>

        </div>

      </div>
    </motion.div>
  );
}