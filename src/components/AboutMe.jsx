"use client";
import Image from "next/image";
import TabSec from "./TabSec";

export default function AboutMe() {
  return (
    <section className=" md:my-32  p-5 md:p-10 space-y-5 flex justify-center gap-5 height-80 h-5/6  box-content" id="aboutme">
      <div className="flex flex-col items-center">
        <div className=" px-5 py-4">
          <div className="flex-1 space-y-2 md:space-y-4">
            <TabSec />
          </div>

          <div className="  px-5 mt-4 md:mt-10 md:ml-20">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 flex items-center justify-center">
                <Image src="/pf.png" alt="" height={300} width={300} className=" sm:block  object-contain transition duration-300 ease-in-out transform md:hover:scale-105 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
