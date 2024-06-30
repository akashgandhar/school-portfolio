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
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/gallery/19.jpeg')] "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/gallery/13.jpeg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/gallery/14.jpeg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/gallery/15.jpeg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/gallery/17.jpeg')]"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
