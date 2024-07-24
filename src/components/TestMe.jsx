"use client";
import Image from "next/image";
import Test from "@/components/Test";

export default function AboutMe() {
  return (
    <section id="aboutme" className="flex flex-col md:flex-row p-4 gap-4 items-center">
      <div className="flex-1 flex items-center justify-center">
        <Test />
      </div>

      <div className="md:w-1/2 flex items-center justify-center">
        <div className="relative w-72 h-72">
          <Image src="/pf.png" alt="Profile Picture" fill className="object-contain transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
      </div>
    </section>
  );
}
