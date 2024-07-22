import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <section id="home" className="flex flex-col items-center justify-center gap-5 md:gap-12 p-5 md:p-10">
      <div className="flex flex-col text-center gap-5 space-y-5">
        <p className="text-royalBlue-600 text-3xl md:text-7xl xl:text-7xl mb-4">Connect with</p>
        <h1 className="font-bold text-5xl md:text-9xl lg:text-7xl xl:text-8xl text-tangerine">Me</h1>
        <h1 className="font-bold text-7xl md:text-6xl lg:text-7xl xl:text-8xl text-royalBlue-600 font-moontime">Kezia Hansen</h1>
        <p className="text-tangerine text-3xl md:text-4xl xl:text-5xl mb-4">+4528193926</p>
      </div>
      <div className="flex gap-2 justify-center mt-5">
        <a href="https://www.linkedin.com/in/keziahansen/" className="text-gray-400 md:hover:text-orange-100">
          <span className="sr-only">Linkedin</span>
          <SocialIcon aria-hidden="true" className="md:hover:scale-150 transition-transform duration-200" alt="linkedin logo" network="linkedin" bgColor="transparent" fgColor="#FF5722" url="https://www.linkedin.com/in/keziahansen/" style={{ height: 54, width: 54 }} />
        </a>
        <a href="https://github.com/kezia-hansen" className="text-gray-400 md:hover:text-orange-100">
          <span className="sr-only">Github</span>
          <SocialIcon aria-hidden="true" className="md:hover:scale-150 transition-transform duration-200" alt="github logo" network="github" bgColor="transparent" fgColor="#FF5722" url="https://github.com/kezia-hansen" style={{ height: 54, width: 54 }} />
        </a>
        <a href="mailto: kezia.hansen02@gmail.com" className="text-gray-400 md:hover:text-orange-100">
          <span className="sr-only">Email</span>
          <SocialIcon aria-hidden="true" className="md:hover:scale-150 transition-transform duration-200" alt="email logo" network="email" bgColor="transparent" fgColor="#FF5722" url="mailto: kezia.hansen02@gmail.com" style={{ height: 54, width: 54 }} />
        </a>
      </div>
    </section>
  );
}
