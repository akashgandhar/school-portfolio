import React from "react";
import Image from "next/image";

export default function About_Section() {
  return (
    <div id="about" class="relative  bg-no-repeat overflow-hidden ">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 -z-10"
            fill="#fff"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="30,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div class="pt-1"></div>

          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-10">
            <div class="sm:text-center lg:text-left">
              <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About School
              </h2>

              <p className="">
                Ojas Sikshan and Prasikshan Sansthan, Amla Madhya Pradesh is a
                nonprofit registered society of Ex- servicemen with the
                Registrar of Societies, Madhya Pradesh on 18 Jan 2017. Its
                founding members are Shri Anil Verma and Shri SK Baghel The
                Campus of OSPS will be located in the natural environs of a lush
                and picturesque campus of 5.5 acres in an unpolluted, inspiring
                environment. The wired campus will comprise of 4 lakh sq ft and
                built up area of 30,595 sq ft and will offer the best in terms
                of facilities required to enhance learning outcomes. The
                academic blocks, smart classrooms, sports field, dining hall and
                kitchen, infirmary, science, computer, language and subject
                laboratories, staff residences and the guest-house,
                will form functional areas of safety. The institution will admit
                students in class IX and will progressively increase to XII over
                a period of four years. Initially each class will have 30
                students. Well trained and qualified teachers will form the
                faculty. The academic session will begin from July 2018 with the
                first batch of 30 students.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
        <Image
          height={1080}
          width={1920}
          class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/school1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
