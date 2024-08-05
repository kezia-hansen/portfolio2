"use client";

import Typewriter from "typewriter-effect";

export default function Terminal() {
  return (
    <div className="inverse-toggle shadow-lg text-orange-100 text-sm subpixel-antialiased bg-royalBlue-900 pb-6 pt-4 rounded-lg leading-normal overflow-hidden my-2 mx-2 lg:mx-6 lg:ml-0 w-[298px] sm:w-[296px] md:w-[298px] lg:w-[450px] xl:w-[500px] h-[100px] md:h-[150px]">
      <div className="top mb-2 flex pl-2">
        <div className="h-3 w-3 bg-royalBlue-400 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-royalBlue-200 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-royalBlue-100 rounded-full"></div>
      </div>
      <div className="flex flex-row md:flex-col  align-middle">
        <span className="text-tangerine text-sm md:text-xl xl:text-2xl pl-2">creative_coder:~$</span>
        <p className="md:mt-2 text-sm md:text-xl xl:text-2xl font-lato text-tangerine whitespace-pre-line pl-2">
          <Typewriter
            options={{
              strings: ["Velkommen til min portfolio!", "Frontend developer", "UI/UX designer", "Søger praktik 🌟"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
    </div>
  );
}
