"use client";
import Image from "next/image";
import Test from "@/components/Test";

export default function AboutMe() {
  return (
    <section id="aboutme" className="relative flex flex-col md:flex-row p-4 gap-4 items-center">
      {/* Content Wrapper */}
      <div className="flex-1 flex items-center justify-center">
        <Test />
      </div>

      {/* Fixed Image Wrapper */}
      <div className="relative md:w-1/2 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-72 h-72">
            <Image src="/pf.png" alt="Profile Picture" fill className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}
