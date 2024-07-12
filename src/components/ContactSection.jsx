import { SocialIcon } from "react-social-icons";

export default function ContactMe() {
  return (
    <section id="contact" className=" flex justify-center gap-5 height-80 h-5/6 my-10 box-content">
      <p class="text-3xl text-center text-orange-600">Thanks for visiting my page!</p>
      <h1 class="text-5xl text-center text-red-600">Find me here</h1>
      <div class="flex justify-center mb-4">
        <div class="flex items-center justify-center gap-2 mr-4">
          <a href="#" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Github</span>
            <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
          </a>
        </div>
        <div class="flex items-center justify-center gap-2 mr-4">
          <a href="#" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Linkedin</span>
            <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="linkedin logo" network="linkedin" bgColor="transparent" fgColor="#C2410C" url="https://www.linkedin.com/in/keziahansen/" style={{ height: 45, width: 45 }} />
          </a>
        </div>
        <div class="flex items-center justify-center gap-2 mr-4">
          <a href="#" className="text-gray-400 md:hover:text-orange-100">
            <span className="sr-only">Email</span>
            <SocialIcon aria-hidden="true" className=" md:hover:scale-150" alt="email logo" network="email" bgColor="transparent" fgColor="#C2410C" url="mailto: kezia.hansen02@gmail.com" style={{ height: 45, width: 45 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
