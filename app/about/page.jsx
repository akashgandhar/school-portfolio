import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="justify-center w-full items-center ">
          {/* <h1 className="justify-center align-center w-full text-center text-4xl py-4 pt-9">
          About Us
        </h1> */}
        </div>
        <div className="flex w-full flex-col justify-center items-center">
          <div className="flex w-full">
            <Image
              className="h-auto w-full object-contain"
              src="/about.png"
              alt="About Us"
              width={4000}
              height={2000}
            />
          </div>

          <div className="flex flex-col max-w-7xl w-full justify-center items-center -mt-[5%]">
            <div className="flex w-full  items-center justify-center shadow-custom ">
              <div className="flex flex-col shadow-custom bg-white p-9">
                <h1 className="justify-center align-center w-full text-center font-semibold text-xl sm:text-4xl md:text-2xl text-[#006269]">
                  Ojas Uchchtar Madhymik Shikshan Evam Prashikshan Sansthan
                  Morandhana
                </h1>
                <h1 className="justify-center align-center w-full text-center px-4 py-3 text-md sm:text-xl text-slate-400">
                  By providing 17 years of educational intervention, Shanti
                  Bhavan's approach is long-term and unprecedented. From their
                  first day of school to their first day of work, and even
                  beyond, Shanti Bhavan supports its children in every facet of
                  their lives.
                </h1>
              </div>
            </div>

            <div className="flex flex-col py-5 gap-5 items-center justify-center w-full">
              <div className="h-[20vh] w-0 border border-black "></div>

              <div className="flex flex-col justify-center items-center w-full p-1 sm:w-[40%]">
                <p className="justify-center align-center items-center w-full text-center text-3xl sm:text-5xl text-[#006269]">
                  Our Philosophy is <br /> Simple
                </p>
                <p className="justify-center align-center items-center w-full text-center text-lg sm:text-xl text-slate-400 ">
                  At our charity school, we believe in creating a nurturing
                  environment where every child can thrive. Our philosophy
                  centers around compassion, empathy, and personalized learning.
                </p>
              </div>
            </div>

            <div className="flex flex-col py-5 gap-5 items-center justify-center w-full">
              <div className="h-[20vh] w-0 border border-black "></div>

              <div className="flex flex-col justify-center items-center w-full p-1 sm:w-[40%]">
                <p className="justify-center align-center items-center w-full text-center text-3xl sm:text-5xl text-[#006269]">
                  Our Philosophy is <br /> Simple
                </p>
                <p className="justify-center align-center items-center w-full text-center text-lg sm:text-xl text-slate-400 ">
                  At our charity school, we believe in creating a nurturing
                  environment where every child can thrive. Our philosophy
                  centers around compassion, empathy, and personalized learning.
                </p>
              </div>
            </div>

            <div className="flex flex-col py-5 gap-5 items-center justify-center w-full">
              <div className="h-[20vh] w-0 border border-black "></div>

              <div className="flex flex-col justify-center items-center w-full p-1 sm:w-[40%]">
                <p className="justify-center align-center items-center w-full text-center text-3xl sm:text-5xl text-[#006269]">
                  Our Philosophy is <br /> Simple
                </p>
                <p className="justify-center align-center items-center w-full text-center text-lg sm:text-xl text-slate-400 ">
                  At our charity school, we believe in creating a nurturing
                  environment where every child can thrive. Our philosophy
                  centers around compassion, empathy, and personalized learning.
                </p>
              </div>
            </div>

            {/* GRID XL:4 LG:3 MD:2 SM:1 XS:1 */}
            <div className="flex flex-wrap justify-center items-center gap-5 w-full">
              <div className="flex flex-col py-5 px-9 items-center">
                <Image
                  src="/images/food.svg"
                  height={100}
                  width={100}
                  alt="Food"
                />
                <p className="text-center py-2 text-3xl">Food</p>
              </div>
              <div className="flex flex-col py-5 px-9 items-center">
                <Image
                  src="/images/house.svg"
                  height={100}
                  width={100}
                  alt="house"
                />
                <p className="text-center py-2 text-3xl">House</p>
              </div>
              <div className="flex flex-col py-5 px-9 items-center">
                <Image
                  src="/images/clothing.svg"
                  height={100}
                  width={100}
                  alt="clothing"
                />
                <p className="text-center py-2 text-3xl">Clothing</p>
              </div>
              <div className="flex flex-col py-5 px-9 items-center">
                <Image
                  src="/images/medical.svg"
                  height={90}
                  width={90}
                  alt="Medical Care"
                />
                <p className="text-center py-2 text-3xl">Medical</p>
              </div>
            </div>

            <div className="flex flex-col py-5 gap-5 items-center justify-center w-full">
              <div className="h-[20vh] w-0 border border-black "></div>

              <div className="flex flex-col justify-center items-center w-full p-1 sm:w-[40%]">
                <p className="justify-center align-center items-center w-full text-center text-3xl sm:text-5xl text-[#006269]">
                  Our Philosophy is <br /> Simple
                </p>
                <p className="justify-center align-center items-center w-full text-center text-lg sm:text-xl text-slate-400 ">
                  At our charity school, we believe in creating a nurturing
                  environment where every child can thrive. Our philosophy
                  centers around compassion, empathy, and personalized learning.
                </p>
              </div>
            </div>

            <div className="flex flex-col py-5 gap-5 items-center justify-center w-full">
              <div className="h-[20vh] w-0 border border-black "></div>

              <div className="flex flex-col justify-center items-center w-full p-1 sm:w-[40%]">
                <p className="justify-center align-center items-center w-full text-center text-3xl sm:text-5xl text-[#006269]">
                  Our Philosophy is <br /> Simple
                </p>
                <p className="justify-center align-center items-center w-full text-center text-lg sm:text-xl text-slate-400 ">
                  At our charity school, we believe in creating a nurturing
                  environment where every child can thrive. Our philosophy
                  centers around compassion, empathy, and personalized learning.
                </p>
              </div>
            </div>

            {/* image  */}

            <div className="flex flex-col py-5 gap-5 items-center justify-center w-full">
              <img
                src="/slider/s2.jpg"
                className=" w-full sm:w-[60vw] h-90 py-8"
                alt="Team"
              />
            </div>
          </div>

          {/* <div className="flex w-full justify-center items-center mt-[-7%] ">
          <div className="flex w-[50%] align-center justify-center shadow-custom ">
            <div className="flex flex-col shadow-custom bg-white p-9">
              <h1 className="justify-center align-center w-full text-center text-base sm:text-4xl md:text-2xl text-[#006269]">
                Ojas Uchchtar Madhymik Shikshan Evam Prashikshan Sansthan
                Morandhana
              </h1>
              <h1 className="justify-center align-center w-full text-center px-4 py-3 text-xl text-slate-400">
                By providing 17 years of educational intervention, Shanti
                Bhavan's approach is long-term and unprecedented. From their
                first day of school to their first day of work, and even beyond,
                Shanti Bhavan supports its children in every facet of their
                lives.
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            className=" py-5"
            src="/images/line.svg"
            height={1}
            width={1}
            alt="line"
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[40%]">
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-5xl text-[#006269]">
            Our Philosophy is <br /> Simple
          </p>
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-xl text-slate-400 ">
            At our charity school, we believe in creating a nurturing
            environment where every child can thrive. Our philosophy centers
            around compassion, empathy, and personalized learning.
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            className=" py-5"
            src="/images/line.svg"
            height={1}
            width={1}
            alt="line"
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[40%]">
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-5xl text-[#006269]">
            Our History is <br /> Achievement
          </p>
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-xl text-slate-400 ">
            Over the years, we’ve celebrated remarkable milestones. From humble
            beginnings, we’ve grown into a beacon of education for children from
            army families. Our alumni have excelled in various fields, embodying
            the spirit of achievement.
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            className=" py-5"
            src="/images/line.svg"
            height={1}
            width={1}
            alt="line"
          />
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[40%]">
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-5xl text-[#006269]">
            Our Mission is Our <br /> Dignity
          </p>
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-xl text-slate-400 ">
            Our mission is clear—to empower young hearts with education,
            instilling dignity and hope. We strive to create an inclusive space
            where every child feels valued and respected.
          </p>
        </div>
        <div className="flex justify-between w-[70vw] pt-9">
          <div className="flex flex-col py-5 px-9 items-center">
          <Image src="/images/food.svg" height={100} width={100} alt="Food" />
          <p className="text-center py-2 text-3xl">Food</p>
          </div>
          <div className="flex flex-col py-5 px-9 items-center">
          <Image src="/images/house.svg" height={100} width={100} alt="house" />
          <p className="text-center py-2 text-3xl">House</p>
          </div>
          <div className="flex flex-col py-5 px-9 items-center">
          <Image src="/images/clothing.svg" height={100} width={100} alt="clothing" />
          <p className="text-center py-2 text-3xl">Clothing</p>
          </div>
          <div className="flex flex-col py-5 px-9 items-center">
          <Image src="/images/medical.svg" height={90} width={90} alt="Medical Care" />
          <p className="text-center py-2 text-3xl">Medical</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            width={1}
            alt="line"
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[40%]">
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-5xl text-[#006269]">
          Our Educational Model is <br /> Unprecedented
          </p>
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-xl text-slate-400 ">
          Our innovative approach combines rigorous academics with character development. We focus on experiential learning, critical thinking, and creativity, ensuring holistic growth.
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            className=" py-5"
            src="/images/line.svg"
            height={1}
            width={1}
            alt="line"
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[40%]">
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-5xl text-[#006269]">
          Our Strength is Our <br /> Team
          </p>
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-xl text-slate-400 ">
          Our dedicated educators, support staff, and volunteers form the backbone of our school. Their passion and commitment drive our success, creating a nurturing environment for our students.
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image className="w-[60vw] h-90 py-8"
            src="/slider/s2.jpg"
            width={300}
            height={100}
            alt="Team"
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[40%]">
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-5xl text-[#006269]">
          Our Success Depends on <br /> You:
          </p>
          <p className="justify-center align-center items-center w-full text-center px-4 py-3 text-xl text-slate-400 ">
          Together, we can make a lasting impact. Whether you’re a parent, donor, or well-wisher, your support fuels our mission. Join us in shaping a brighter future for these young learners! 🌟
          </p>
        </div>
        <div className="flex w-full items-center justify-center pb-9">
        <a href="/donate" className="bg-green-700  px-4 py-3 my-5 rounded-full hover:bg-blue-600 text-white ">
          Donate Now
        </a>
        
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
