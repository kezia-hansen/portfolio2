"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-950 border-orange-950 sticky top-0 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse md:hover:scale-110">
          <Image src="../logo.svg" width={100} height={100} className="h-16" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-orange-100 bg-orange-700 md:hover:bg-orange-500 md:hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2 text-center ">
            Contact me
          </button>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-100 rounded-lg md:hidden md:hover:bg-orange-700 focus:outline-none " aria-controls="navbar-cta" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-cta">
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="/" className="block py-2 px-3 md:p-0 text-orange-100 rounded   md:hover:bg-orange-700 md:hover:scale-105">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-orange-100 rounded   md:hover:bg-orange-700 md:hover:scale-105 ">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-orange-100 rounded   md:hover:bg-orange-700 md:hover:scale-105 ">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-orange-100 rounded   md:hover:bg-orange-700 md:hover:scale-105 ">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
