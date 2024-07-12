"use client";
import { SocialIcon } from "react-social-icons";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import TabSection from "./TabSection";

export default function Works() {
  return (
    <section className="my-10 md:my-32  p-5 md:p-10 space-y-5 flex justify-center gap-5 height-80 h-5/6  box-content" id="aboutme">
      <div className="flex flex-col items-center">
        <p className="text-orange-900 text-3xl ">Meet the</p>
        <h1 className="font-semibold text-xl md:text-6xl whitespace-nowrap pt-2 pb-4 text-orange-950 ">person behind</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div className=" px-5 py-4">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 space-y-2 md:space-y-4">
                <TabSection />
              </div>
            </div>
          </div>

          <div className="  px-5 mt-4 md:mt-10 md:ml-20">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 flex items-center justify-center">
                <Image src="/me.png" alt="" height={300} width={300} className=" sm:block  object-contain transition duration-300 ease-in-out transform md:hover:scale-105 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
