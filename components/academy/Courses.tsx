"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { courses } from "./coursesData";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="academySwiper !pb-20"
      >
        {[...courses].reverse().map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .academySwiper {
          padding-bottom: 80px;
        }

        .academySwiper .swiper-button-next,
        .academySwiper .swiper-button-prev {
          width: 58px;
          height: 58px;
          border-radius: 999px;
          background: #171717;
          color: #fff;
          transition: 0.3s;
        }

        .academySwiper .swiper-button-next:hover,
        .academySwiper .swiper-button-prev:hover {
          background: #f8bc04;
          color: #171717;
        }

        .academySwiper .swiper-button-next::after,
        .academySwiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: 700;
        }

        .academySwiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }

        .academySwiper .swiper-pagination-bullet-active {
          width: 40px;
          border-radius: 999px;
          background: #f8bc04;
        }

        @media (max-width: 768px) {
          .academySwiper .swiper-button-next,
          .academySwiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </>
  );
}