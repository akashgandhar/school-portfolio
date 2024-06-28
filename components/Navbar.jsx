"use client";

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
        scrolled ? "bg-[#255c39] text-white transition-all duration-300 ease-in-out" : "bg-tranparent text- transition-all duration-300 ease-in-out"
      } lg:px-16 px-4  w-full flex flex-wrap items-center border-b font-black py-3 fixed bg-cover bg-no-repeat top-0 z-[999]`}
    >
      <div className="flex-1 flex justify-between items-center">
        <a href="/" className="text-xl">
          OJAS 
        </a>
      </div>

      <div className="pointer-cursor md:hidden block" onClick={toggleMenu}>
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
              <a className="md:p-4 py-3 px-0 block" href="/about">
                About Us
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block" href="/founders">
                Founders
              </a>
            </li>
            {/* <li>
              <a className="md:p-4 py-3 px-0 block" href="/donate">
                Donate
              </a>
            </li> */}
            <li>
              <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/contactus">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
