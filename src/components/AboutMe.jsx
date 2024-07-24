"use client";
import Image from "next/image";
import TabSec from "./TabSec";
import Test from "@/components/Test";

export default function AboutMe() {
  return (
    <section id="aboutme" className="flex flex-col md:flex-row md:my-32 p-5 md:p-10 space-y-5 md:space-y-0 gap-5 h-auto md:h-5/6 box-content">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <div className="px-5 py-4 flex-1 space-y-2 md:space-y-4">
          {/* <TabSec /> */}
          <Test />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center md:justify-start">
        <Image src="/pf.png" alt="Profile Picture" height={300} width={300} className="object-contain transition duration-300 ease-in-out transform md:hover:scale-105" />
      </div>
    </section>
  );
}
