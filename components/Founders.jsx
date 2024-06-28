"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Founders() {
  return (
    <div className="px-8  w-full">
      <h2 class="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-4">
        Mission & Vision
      </h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        style={{ height: "50vh" }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-full  rounded-xl flex">
            <div className="w-full h-full flex flex-col p-8  items-start">
              <h3 class="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-4">
                Mission
              </h3>
              <p class="text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec purus.
              </p>
            </div>
            <div className="w-full p-8">
              <div className="w-full rounded-xl h-full bg-cover bg-no-repeat bg-[url('/slider/s1.jpg')]"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full  rounded-xl flex">
            <div className="w-full h-full flex flex-col p-8  items-start">
              <h3 class="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-4">
                Vision
              </h3>
              <p class="text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec purus.
              </p>
            </div>
            <div className="w-full p-8">
              <div className="w-full rounded-xl h-full bg-cover bg-no-repeat bg-[url('/slider/s1.jpg')]"></div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full  rounded-xl flex">
            <div className="w-full h-full flex flex-col p-8  items-start">
              <h3 class="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-4">
                Director's Message
              </h3>
              <p class="text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec purus.
              </p>
            </div>
            <div className="w-full p-8">
              <div className="w-full rounded-xl h-full bg-cover bg-no-repeat bg-[url('/slider/s1.jpg')]"></div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full  rounded-xl flex">
            <div className="w-full h-full flex flex-col p-8  items-start">
              <h3 class="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-4">
                Founder 1
              </h3>
              <p class="text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec purus.
              </p>
            </div>
            <div className="w-full p-8">
              <div className="w-full rounded-xl h-full bg-cover bg-no-repeat bg-[url('/slider/s1.jpg')]"></div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full  rounded-xl flex">
            <div className="w-full h-full flex flex-col p-8  items-start">
              <h3 class="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-4">
                Founder 1
              </h3>
              <p class="text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec purus.
              </p>
            </div>
            <div className="w-full p-8">
              <div className="w-full rounded-xl h-full bg-cover bg-no-repeat bg-[url('/slider/s1.jpg')]"></div>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
