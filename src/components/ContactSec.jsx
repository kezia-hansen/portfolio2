import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-12 md:p-10">
      <div className="flex mx-auto w-full md:w-auto md:ml-[-2rem]"></div>
      <div className="flex flex-col md:items-start text-center md:text-left gap-0 md:gap-5 md:mt-40 md:ml-[-2rem] space-y-20">
        <p className="text-royalBlue-600 text-3xl md:text-2xl xl:text-4xl mb-4 text-center">Connect with</p>
        <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl xl:text-8xl whitespace-nowrap text-center text-tangerine">Me</h1>
        <h1 className="font-bold text-7xl md:text-5xl lg:text-6xl xl:text-8xl whitespace-nowrap text-center text-royalBlue-600 font-moontime">Kezia Hansen</h1>
        <p className="text-tangerine text-3xl md:text-2xl xl:text-4xl mb-4 text-center">+4528193926</p>
      </div>
      <div className="flex gap-2 justify-center self-center ">
        <a href="https://www.linkedin.com/in/keziahansen/" className="text-gray-400 md:hover:text-orange-100">
          <span className="sr-only">Linkedin</span>
          <SocialIcon aria-hidden="true" className="md:hover:scale-150" alt="linkedin logo" network="linkedin" bgColor="transparent" fgColor="#FF5722" url="https://www.linkedin.com/in/keziahansen/" style={{ height: 54, width: 54 }} />
        </a>
        <a href="https://github.com/kezia-hansen" className="text-gray-400 md:hover:text-orange-100">
          <span className="sr-only">Github</span>
          <SocialIcon aria-hidden="true" className="md:hover:scale-150" alt="github logo" network="github" bgColor="transparent" fgColor="#FF5722" url="https://github.com/kezia-hansen" style={{ height: 54, width: 54 }} />
        </a>
        <a href="mailto: kezia.hansen02@gmail.com" className="text-gray-400 md:hover:text-orange-100">
          <span className="sr-only">Email</span>
          <SocialIcon aria-hidden="true" className="md:hover:scale-150" alt="email logo" network="email" bgColor="transparent" fgColor="#FF5722" url="mailto: kezia.hansen02@gmail.com" style={{ height: 54, width: 54 }} />
        </a>
      </div>
    </section>
  );
}
