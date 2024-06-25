import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-orange-950 ">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-orange-100 rounded md:hover:bg-orange-700 hover:scale-105">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-orange-100 rounded md:hover:bg-orange-700 hover:scale-105">
              About Me
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-orange-100 rounded md:hover:bg-orange-700 hover:scale-105">
              Skills
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-orange-100 rounded md:hover:bg-orange-700 hover:scale-105">
              Projects
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-2">
          <a href="#" className="text-gray-400 hover:text-orange-100">
            <span className="sr-only">Linkedin</span>
            <SocialIcon aria-hidden="true" className=" hover:scale-150" alt="linkedin logo" network="linkedin" bgColor="transparent" fgColor="#C2410C" url="https://www.linkedin.com/in/keziahansen/" style={{ height: 90, width: 90 }} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-100">
            <span className="sr-only">Github</span>
            <SocialIcon aria-hidden="true" className=" hover:scale-150" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 90, width: 90 }} />
          </a>

          <a href="#" className="text-gray-400 hover:text-orange-100">
            <span className="sr-only">Email</span>
            <SocialIcon aria-hidden="true" className=" hover:scale-150" alt="email logo" network="email" bgColor="transparent" fgColor="#C2410C" url="mailto: kezia.hansen02@gmail.com" style={{ height: 90, width: 90 }} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-100">
            <span className="sr-only">Pinterest</span>
            <SocialIcon aria-hidden="true" className=" hover:scale-150" alt="Pinterest logo" network="pinterest" bgColor="transparent" fgColor="#C2410C" url="https://dk.pinterest.com/keziahansen/" style={{ height: 90, width: 90 }} />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-orange-100">© 2024 Made by Kezia Hansen. All rights reserved.</p>
      </div>
    </footer>
  );
}
