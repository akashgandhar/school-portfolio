"use client";
import Image from "next/image";
import Link from "next/link";
//ojas shikshan and pariksha sansthan
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled
          ? "bg-[#255c39] text-white transition-all duration-300 ease-in-out"
          : "bg-tranparent text- transition-all duration-300 ease-in-out"
      } lg:px-16 px-4  w-full flex flex-wrap items-center border-b font-black py-3 fixed bg-cover bg-no-repeat top-0 z-[999]`}
    >
      <Link href="/" className="text-xl uppercase">
        <div className="flex-1 flex justify-between items-center">
          <Image
            width={1920}
            height={1080}
            src="/logo.png"
            alt="Logo"
            className="mr-2 w-12 h-12"
          />
        </div>
      </Link>
      <div className="flex-1 flex justify-between items-center sm">
        <Link href="/" className="text-xl hidden sm:block uppercase">
          ojas shikshan and pariksha sansthan
        </Link>
      </div>

      <div className="cursor-pointer sm:hidden block" onClick={toggleMenu}>
        <svg
          className="fill-current "
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </div>

      <div
        className={`md:flex md:items-center md:w-auto w-full ${
          isMenuOpen ? "block" : "hidden"
        }`}
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base  pt-4 md:pt-0">
            <li>
              <Link className="md:p-4 py-3 px-0 block" href="/">
                Home
              </Link>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block" href="/gallery">
                Gallery
              </a>
            </li>
            <li>
              <Link className="md:p-4 py-3 px-0 block" href="/founders">
                Founders
              </Link>
            </li>
           
            <li>
              <Link className="md:p-4 py-3 px-0 block" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-3 px-0 block md:mb-0 mb-2"
                href="/contactus"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
