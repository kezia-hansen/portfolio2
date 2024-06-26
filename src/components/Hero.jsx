"use client";

import { SocialIcon } from "react-social-icons";
import Terminal from "./Terminal";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div id="home" className=" my-0 md:my-16 text-background  "></div>
      <section className="flex flex-col md:flex-row items-center gap-5 md:gap-10 p-5 md:p-10">
        <div className="sm:w-3/4 md:w-2/3 text-center md:text-left flex flex-col gap-2 md:gap-5">
          <h1 className="font-bold text-3xl md:text-5xl whitespace-nowrap text-orange-950 border-l-4 border-orange-700 px-2">
            Hi, <br /> im Kezia Hansen
          </h1>

          <Terminal />

          <div className="flex gap-2 self-center md:self-start">
            <a href="#" className="text-gray-400 md:hover:text-orange-100">
              <span className="sr-only">Linkedin</span>
              <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="linkedin logo" network="linkedin" bgColor="transparent" fgColor="#C2410C" url="https://www.linkedin.com/in/keziahansen/" style={{ height: 45, width: 45 }} />
            </a>
            <a href="#" className="text-gray-400 md:hover:text-orange-100">
              <span className="sr-only">Github</span>
              <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
            </a>

            <a href="#" className="text-gray-400 md:hover:text-orange-100">
              <span className="sr-only">Email</span>
              <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="email logo" network="email" bgColor="transparent" fgColor="#C2410C" url="mailto: kezia.hansen02@gmail.com" style={{ height: 45, width: 45 }} />
            </a>
            <a href="#" className="text-gray-400 md:hover:text-orange-100">
              <span className="sr-only">Pinterest</span>
              <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="Pinterest logo" network="pinterest" bgColor="transparent" fgColor="#C2410C" url="https://dk.pinterest.com/keziahansen/" style={{ height: 45, width: 45 }} />
            </a>
          </div>
        </div>

        <div className="w-1/2 md:w-2/3">
          <div className="relative">
            <a href="https://www.linkedin.com/in/keziahansen/">
              <Image alt="cartoon image of me" src={"/pf.png"} height={300} width={300} className="transition duration-300 ease-in-out transform md:hover:scale-105" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
