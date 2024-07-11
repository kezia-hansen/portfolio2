"use client";
import Image from "next/image";
import TabSection from "@/components/TabSection";

export default function AboutMe() {
  return (
    <>
      <div id="aboutme" className="flex justify-center gap-5 height-80 h-5/6 my-10 box-content">
        <div className="flex flex-col items-center">
          <p className="text-orange-900 text-3xl ">Meet the</p>
          <h1 className="font-semibold text-xl md:text-6xl whitespace-nowrap pt-2 pb-4 text-orange-950 ">person behind</h1>

          <section className="flex flex-col md:flex-row items-start justify-center gap-5 md:gap-10 p-5 md:p-10">
            <div className="sm:w-3/4 md:w-2/3 text-center md:text-left flex flex-col gap-2 md:gap-5">
              <TabSection />
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <a href="https://www.linkedin.com/in/keziahansen/" className="block w-72 h-72">
                  <Image alt="image of me" src={"/me.png"} layout="fill" objectFit="cover" className="rounded-full transition duration-300 ease-in-out transform md:hover:scale-105" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
