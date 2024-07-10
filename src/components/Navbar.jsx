"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

let tabs = [
  { id: "home", label: "Home" },
  { id: "aboutme", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Projects" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-950 border-orange-950 sticky top-0 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#home" className="flex items-center space-x-3 rtl:space-x-reverse md:hover:scale-110" onClick={() => setActiveTab("home")}>
          <Image src="../logo.svg" width={100} height={100} className="h-16" alt="Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="mailto: kezia.hansen02@gmail.com">
            <button type="button" className="text-orange-100 bg-orange-500   focus:ring-4 focus:outline-none focus:ring-orange-500  rounded-lg text-sm md:text-xl px-4 py-2 text-center  md:hover:bg-orange-700 md:hover:scale-110">
              Contact me
            </button>
          </Link>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-100 rounded-lg md:hidden md:hover:bg-orange-700 focus:outline-none " aria-controls="navbar-cta" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-cta">
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {tabs.map((tab) => (
              <li key={tab.id} className="md:hover:scale-110">
                <Link href={`#${tab.id}`} onClick={() => setActiveTab(tab.id)}>
                  <span className={`relative rounded-md px-3 py-1.5 text-xl font-medium text-orange-100  md:hover:bg-orange-700  ${activeTab === tab.id ? "bg-orange-700 text-orange-100" : "text-orange-100"} outline-orange-400 transition focus-visible:outline-2`}>
                    {tab.label}
                    {activeTab === tab.id && <motion.span layoutId="bubble" className="absolute inset-0 z-5 bg-orange-700 mix-blend-screen rounded-md" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
