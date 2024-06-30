import React from "react";
import gallery1 from "../public/gallery/1.jpg";
import Image from "next/image";

export default function Gallery_Section() {
  return (
    <div class=" h-full py-6 sm:py-8 lg:py-12 border-b">
      <div class="mx-auto max-w-7xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div class="flex items-center gap-12">
            <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl ">
              Gallery
            </h2>
          </div>

          <a
            href="/gallery"
            class="inline-block rounded-lg border bg-[#255c39]  px-4 py-2 text-center text-sm font-semibold text-white  outline-none ring-indigo-300 transition duration-100 hover:bg-[#255c39]/90 focus-visible:ring md:px-8 md:py-3 md:text-base"
          >
            More
          </a>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="/gallery"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src="/gallery/19.jpeg"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              height={1000}
              width={1000}
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              MP Tours Quiz
            </span>
          </a>

          <a
            href="/gallery"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              src="/gallery/3big.jpg"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              height={1000}
              width={1000}
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Ojas Sikshan and Prasikshan Sansthan
            </span>
          </a>

          <a
            href="/gallery"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              src="/gallery/25.jpeg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              height={1000}
              width={1000}
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Independence Day
            </span>
          </a>

          <a
            href="/gallery"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              src="/gallery/44.jpeg"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              height={1000}
              width={1000}
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Yoga Divas
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
