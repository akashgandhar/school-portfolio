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
        Our Founders
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
                Founder 1
              </h3>
              <p className="text-lg text-left">
              The aim of the institution si ot train the students for primarily joining the Armed and Para Military Forces, However every student should eb able to select a career of his choice according ot his ability.
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
                Founder 1
              </h3>
              <p className="text-lg text-left">
              Vision of Ojas Sikshan and Prasikshan Sansthan is to create an educational institution of a very high standard, which will provide an ideal environment for hte under privileged youth of the region ot grow and nurture into fine citizens of the country, who have moral values, wisdom and love for the country.
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
              <p className="text-lg text-left">
              &quot;Welcome to our visionary institution—a beacon of hope and transformation. Our retired senior officers, once stalwarts in the Armed Forces, lead this noble endeavor. In Betul&apso;s serene district, we nurture moral values, national pride, and holistic growth. Alongside academics, specialized courses prepare students for the Armed Forces. Our goal? To build a generation of integrity, resilience, and love for our nation.&quot;
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
