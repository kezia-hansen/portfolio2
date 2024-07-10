"use client";

import Typewriter from "typewriter-effect";

export default function Terminal() {
  return (
    <div className="inverse-toggle shadow-lg text-orange-100 text-sm  subpixel-antialiased bg-black pb-6 pt-4 rounded-lg leading-normal overflow-hidden my-2 mx-4 md:px-5 px-4 ml-0 ">
      <div className="top mb-2 flex">
        <div className="h-3 w-3 bg-orange-800 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-orange-600 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-orange-200 rounded-full"></div>
      </div>
      <div className="flex">
        <span className="text-orange-400 text-xl">creative_coder:~$</span>
        <p className="flex-1 typing items-center pl-2 w-52 text-lg font-lato">
          <Typewriter
            options={{
              strings: ["Welcome to my portfolio!", "Frontend developer and UI/UX designer.", "Exploring creativity through code!", "From inspiration to implementation.", "Currently seeking internship opportunities. 🌟"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
    </div>
  );
}
