import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-12 md:p-10">
      <div className="flex mx-auto w-full md:w-auto md:ml-[-2rem]">
        <div className="w-3/4  md:w-auto">
          <div className="flex justify-center md:justify-end md:mt-24">
            <a href="https://www.linkedin.com/in/keziahansen/">
              <Image alt="cartoon image of me" src="/me.svg" height={500} width={500} className="transition duration-300 ease-in-out transform md:hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:items-start text-center md:text-left gap-0 md:gap-5 md:mt-40 md:ml-[-2rem]">
        <div className="border-l-4 border-royalBlue-600 pl-4 md:pl-6  md:ml-6">
          <p className="text-royalBlue-600 text-3xl md:text-2xl xl:text-4xl mb-4 text-left">Hello, I am</p>
          <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl xl:text-8xl whitespace-nowrap text-left text-tangerine">Kezia Hansen</h1>
        </div>
        <Terminal />
        <div className="flex gap-2 justify-start self-start ml-4 md:ml-6">
          <a href="https://www.linkedin.com/in/keziahansen/" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Linkedin</span>
            <SocialIcon aria-hidden="true" className="md:hover:scale-150" alt="linkedin logo" network="linkedin" bgColor="transparent" fgColor="#FF5722" url="https://www.linkedin.com/in/keziahansen/" style={{ height: 45, width: 45 }} />
          </a>
          <a href="https://github.com/kezia-hansen" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Github</span>
            <SocialIcon aria-hidden="true" className="md:hover:scale-150" alt="github logo" network="github" bgColor="transparent" fgColor="#FF5722" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
          </a>
          <a href="mailto: kezia.hansen02@gmail.com" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Email</span>
            <SocialIcon aria-hidden="true" className="md:hover:scale-150" alt="email logo" network="email" bgColor="transparent" fgColor="#FF5722" url="mailto: kezia.hansen02@gmail.com" style={{ height: 45, width: 45 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
