import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-10 py-8">
      <div className="flex justify-center w-full md:w-1/2">
        <a href="https://www.linkedin.com/in/keziahansen/" className="block">
          <Image alt="cartoon image of me" src="/me.svg" height={500} width={500} className="transition-transform duration-300 transform md:hover:scale-105" />
        </a>
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
        <div className="border-l-4 border-royalBlue-600 pl-4 md:pl-6 mb-4 md:mb-8">
          <p className="text-royalBlue-600 text-left text-3xl md:text-2xl xl:text-4xl mb-2 md:mb-4 whitespace-nowrap">Hej, jeg er</p>
          <h1 className="font-bold text-4xl md:text-4xl lg:text-6xl xl:text-6xl text-tangerine whitespace-nowrap">Kezia Hansen</h1>
        </div>
        <div className="ml-8 md:-ml-2">
          <Terminal />
        </div>
        <div className="flex gap-2 justify-start md:justify-start mt-4">
          <a href="https://www.linkedin.com/in/keziahansen/" className="text-gray-400 hover:text-orange-100 transition-colors duration-300" aria-label="LinkedIn">
            <SocialIcon aria-hidden="true" className="transition-transform duration-300 transform md:hover:scale-125" network="linkedin" bgColor="transparent" fgColor="#FF5722" url="https://www.linkedin.com/in/keziahansen/" style={{ height: 90, width: 90 }} />
          </a>
          <a href="https://github.com/kezia-hansen" className="text-gray-400 hover:text-orange-100 transition-colors duration-300" aria-label="GitHub">
            <SocialIcon aria-hidden="true" className="transition-transform duration-300 transform md:hover:scale-125" network="github" bgColor="transparent" fgColor="#FF5722" url="https://github.com/kezia-hansen" style={{ height: 90, width: 90 }} />
          </a>
          <a href="mailto:kezia.hansen02@gmail.com" className="text-gray-400 hover:text-orange-100 transition-colors duration-300" aria-label="Email">
            <SocialIcon aria-hidden="true" className="transition-transform duration-300 transform md:hover:scale-125" network="email" bgColor="transparent" fgColor="#FF5722" url="mailto:kezia.hansen02@gmail.com" style={{ height: 90, width: 90 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
