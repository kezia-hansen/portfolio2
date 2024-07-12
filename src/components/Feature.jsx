import Image from "next/image";

export default function Feature() {
  return (
    <>
      <p className="text-orange-900 text-3xl">See my</p>
      <h1 className="font-semibold text-xl md:text-6xl whitespace-nowrap pt-2 pb-4 text-orange-950">Strengths</h1>
      <div className="h-full min-h-screen w-full pt-12 p-4">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-20 w-20 -translate-y-12 transform items-center justify-center rounded-full bg-orange-800 shadow-lg">
              <Image alt="icon of ux/ui design" src={"/icon1.png"} layout="fixed" height={50} width={50}  />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">UI/UX Design</h1>
            <p className="px-4 text-gray-500">With a keen eye for user-centered design principles, I create intuitive and engaging interfaces that enhance user experiences</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-20 w-20 -translate-y-12 transform items-center justify-center rounded-full bg-orange-600 shadow-lg">
              <Image alt="icon of Prototyping and Wireframing" src={"/icon2.png"} layout="fixed" height={50} width={50}  />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Prototyping and Wireframing</h1>
            <p className="px-4 text-gray-500">Experienced in tools like Figma and Adobe XD, I craft detailed prototypes and wireframes that visualize concepts and streamline the design process</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-20 w-20 -translate-y-12 transform items-center justify-center rounded-full bg-orange-400 shadow-lg">
              <Image alt="icon of Frontend Development" src={"/icon3.png"} layout="fixed" height={50} width={50}  />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Frontend Development</h1>
            <p className="px-4 text-gray-500">Proficient in HTML, CSS, JavaScript, and frameworks like React, I build responsive and functional frontend solutions tailored to meet both user needs and business goals</p>
          </div>
        </div>
      </div>
    </>
  );
}
