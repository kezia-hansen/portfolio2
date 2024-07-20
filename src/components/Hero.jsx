import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-12 p-5 md:p-10 snap-center">
      <div className="flex items-center justify-center mx-auto w-full md:w-auto">
        <div className="w-3/4 md:w-auto md:ml-20 md:mr-[-2rem]">
          <div className="flex justify-center md:justify-end md:mt-24">
            <a href="https://www.linkedin.com/in/keziahansen/">
              <Image alt="cartoon image of me" src="/test.svg" height={500} width={500} className="transition duration-300 ease-in-out transform md:hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-0 md:gap-5 md:mt-40">
        <div className="border-l-4 border-royalBlue-600 pl-2 md:pl-2 ml-20 md:ml-0">
          <p className="text-royalBlue-600 text-3xl md:text-2xl xl:text-4xl mb-4 text-left ml-2 md:ml-0">Hello, I am</p>
          <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl xl:text-8xl whitespace-nowrap text-tangerine ml-2 md:ml-0">Kezia Hansen</h1>
        </div>
        <Terminal />
        <div className="flex gap-2 justify-start self-start md:self-center  ml-[4.3rem] sm:-ml-5 md:mr-40 lg:-ml-32 xl:-ml-80">
          <a href="https://www.linkedin.com/in/keziahansen/" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Linkedin</span>
            <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="linkedin logo" network="linkedin" bgColor="transparent" fgColor="#FF5722" url="https://www.linkedin.com/in/keziahansen/" style={{ height: 45, width: 45 }} />
          </a>
          <a href="https://github.com/kezia-hansen" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Github</span>
            <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="github logo" network="github" bgColor="transparent" fgColor="#FF5722" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
          </a>

          <a href="mailto: kezia.hansen02@gmail.com" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Email</span>
            <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="email logo" network="email" bgColor="transparent" fgColor="#FF5722" url="mailto: kezia.hansen02@gmail.com" style={{ height: 45, width: 45 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
