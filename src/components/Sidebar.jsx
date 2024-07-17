import React from "react";
import { IconCircleCheck, IconUser, IconBriefcase, IconCertificate, IconPhone } from "@tabler/icons-react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="fixed flex flex-col items-center w-16 md:w-32 h-screen bg-royalBlue-500 text-white">
      <div className="flex flex-col items-center mt-10">
        <Image src="/logo.png" alt="Logo" width={100} height={100} className=" w-10 h-10 md:w-16 md:h-16 md:hover:scale-110" />
        <div className="w-1 h-80 md:h-70 bg-yellow-50 mt-5"></div>
      </div>
      <div className="flex flex-col items-center space-y-8 mt-5">
        <a className="flex flex-col items-center" href="#projects">
          <IconBriefcase className="w-8 h-8 md:w-14 md:h-14 md:hover:bg-[#FF5722] md:hover:scale-110 rounded-2xl" />
        </a>
        <a className="flex flex-col items-center" href="#about-me">
          <IconUser className="w-8 h-8 md:w-14 md:h-14 md:hover:bg-[#FF5722] md:hover:scale-110 rounded-2xl" />
        </a>
        <a className="flex flex-col items-center" href="#competences">
          <IconCircleCheck className="w-8 h-8 md:w-14 md:h-14 md:hover:bg-[#FF5722] md:hover:scale-110 rounded-2xl" />
        </a>
      </div>
    </div>
  );
}
