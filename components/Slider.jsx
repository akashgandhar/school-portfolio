"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="mySwiper "
        style={{ height: "90vh" }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}

      >
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/s1.jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/s2.jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/s3.jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/s4.jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/s5.jpg')]"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
