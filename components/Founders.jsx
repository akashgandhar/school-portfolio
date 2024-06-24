"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Founders() {
  return (
    <div className=" px-8 bg-white w-[100vw]">
      <h2 className="text-2xl font-bold mb-4 bg-white items-center">Our Founders</h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{ height: "50vh" }}
        
      >
        <SwiperSlide>
          <div className="w-full min-h-screen bg-red-200 flex">
          <div className="w-[50vw]">Some text</div>
            <div>image</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-red-200 flex">

          </div>
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
    </div>
  );
}