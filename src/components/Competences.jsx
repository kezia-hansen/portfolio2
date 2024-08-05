import Image from "next/image";

export default function Competences() {
  return (
    <>
      <div id="competences"></div>

      <div className="h-full min-h-screen w-full pt-12 p-4">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-royalBlue-50 p-6 text-center ">
            <div className="mx-auto flex h-20 w-20 -translate-y-12 transform items-center justify-center rounded-full bg-royalBlue-400 shadow-lg">
              <Image alt="icon of ux/ui design" src={"/icon1.svg"} layout="fixed" height={50} width={50} />
            </div>
            <h1 className=" text-royalBlue-500 mb-3 text-xl font-medium lg:px-14">UI/UX Design</h1>
            <p className="px-4 text-royalBlue-700">Med et skarpt øje for brugercentrerede designprincipper skaber jeg intuitive og engagerende grænseflader, der forbedrer brugeroplevelsen.</p>
          </div>
          <div className="rounded-xl bg-royalBlue-50 p-6 text-center ">
            <div className="mx-auto flex h-20 w-20 -translate-y-12 transform items-center justify-center rounded-full bg-royalBlue-200 shadow-lg">
              <Image alt="icon of Prototyping and Wireframing" src={"/icon2.svg"} layout="fixed" height={50} width={50} />
            </div>
            <h1 className=" text-royalBlue-500 mb-3 text-xl font-medium lg:px-14 md:whitespace-nowrap">Prototyping og Wireframing</h1>
            <p className="px-4 text-royalBlue-700">Erfaren i værktøjer som Canva, Figma og Adobe XD, jeg udarbejder detaljerede prototyper og wireframes, der visualiserer koncepter og strømliner designprocessen.</p>
          </div>
          <div className="rounded-xl bg-royalBlue-50 p-6 text-center ">
            <div className="mx-auto flex h-20 w-20 -translate-y-12 transform items-center justify-center rounded-full bg-royalBlue-100 shadow-lg">
              <Image alt="icon of Frontend Development" src={"/icon3.svg"} layout="fixed" height={50} width={50} />
            </div>
            <h1 className=" text-royalBlue-500 mb-3 text-xl font-medium lg:px-14">Frontend Udvikling</h1>
            <p className="px-4 text-royalBlue-700">Erfaring med HTML, CSS, JavaScript og frameworks som React, bygger jeg responsive og funktionelle frontend-løsninger, der er tilpasset både brugerbehov og forretningsmål.</p>
          </div>
        </div>
      </div>
    </>
  );
}
