"use client";

import Typewriter from "typewriter-effect";

export default function Terminal() {
  return (
    <div className="inverse-toggle shadow-lg text-orange-100 text-sm  subpixel-antialiased bg-royalBlue-900 pb-6 pt-4 rounded-lg leading-normal overflow-hidden my-2 mx-8 md:px-5 px-4 /* ml-20  */">
      <div className="top mb-2 flex">
        <div className="h-3 w-3 bg-royalBlue-400 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-royalBlue-200 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-royalBlue-100 rounded-full"></div>
      </div>
      <div className="flex">
        <span className="text-[#FF5722] text-sm">creative_coder:~$</span>
        <p className="flex-1 typing items-center pl-2 w-52 text-sm font-lato text-[#FF5722]">
          <Typewriter
            options={{
              strings: ["Welcome to my portfolio!", "Frontend developer & UI/UX designer.", "Exploring creativity through code!", "From inspiration to implementation.", "Currently seeking internship opportunities. 🌟"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
    </div>
  );
}
