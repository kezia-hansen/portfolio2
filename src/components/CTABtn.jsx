import { IconArrowRight } from "@tabler/icons-react";

export default function CTABtn() {
  return (
    <a href="#contact" className="fixed top-4 right-4 hidden md:flex">
      <button className="bg-[#FF5722] text-yellow-50 font-bold py-2 px-4 rounded-lg md:hover:scale-110 flex items-center">
        Kontakt mig
        <span className="ml-2 -rotate-45 flex items-center justify-center w-8 h-8 rounded-full bg-[#312DE6]">
          <IconArrowRight size={24} color="#fefce8" strokeWidth={3} />
        </span>
      </button>
    </a>
  );
}
