import Image from "next/image";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-48 p-5 md:p-10 snap-center">
      <div className="flex items-center justify-center mx-auto">
        <div className="w-3/4 md:w-2/3">
          <div className="flex justify-center md:mt-24">
            <a href="https://www.linkedin.com/in/keziahansen/">
              <Image alt="cartoon image of me" src="/cartoonme.png" height={500} width={500} className="transition duration-300 ease-in-out transform md:hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left gap-2 md:gap-5 md:mt-40">
        <div className="border-l-4 border-royalBlue-600 pl-4 ml-10">
          <p className="text-royalBlue-600 text-3xl text-left mb-4">Hello, I am</p>
          <h1 className="font-bold text-5xl md:text-8xl whitespace-nowrap text-[#FF5722]">Kezia Hansen</h1>
        </div>
        <Terminal />
      </div>
    </section>
  );
}
