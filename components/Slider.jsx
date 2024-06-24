"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        style={{ height: "60vh" }}

      >
        <SwiperSlide>
          <div className="w-full min-h-screen bg-red-200"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-red-200"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-red-200"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-red-200"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-red-200"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
