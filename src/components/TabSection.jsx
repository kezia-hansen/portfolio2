import { useState } from "react";
import { IconUser, IconMail, IconSchool, IconBriefcase, IconCalendar, IconCircleCheckFilled, IconCircleCheck } from "@tabler/icons-react";
import RadarChart from "./RadarChart";

export default function TabSec() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs">
      <div className="flex flex-wrap">
        <input type="radio" name="tab" id="tab1" checked={activeTab === "tab1"} onChange={() => setActiveTab("tab1")} className="hidden" />
        <label htmlFor="tab1" className={`transition ease-in-out duration-200 inline-block cursor-pointer text-orange-100 w-[22%] sm:w-1/6 md:w-1/5 lg:w-1/4 xl:w-1/5 2xl:w-1/6 h-12 rounded-t-md text-center items-center leading-12 hover:bg-orange-700 hover:text-orange-100 ${activeTab === "tab1" ? "bg-orange-500 text-orange-100" : "bg-transparent text-orange-500"}`}>
          <IconUser size={20} strokeWidth={2} className="inline-block mr-2" />
          Bio
        </label>

        <input type="radio" name="tab" id="tab2" checked={activeTab === "tab2"} onChange={() => setActiveTab("tab2")} className="hidden" />
        <label htmlFor="tab2" className={`transition ease-in-out duration-200 inline-block cursor-pointer text-orange-100 w-[22%] sm:w-1/6 md:w-1/5 lg:w-1/4 xl:w-1/5 2xl:w-1/6 h-12 rounded-t-md text-center items-center leading-12 hover:bg-orange-700 hover:text-orange-100 ${activeTab === "tab2" ? "bg-orange-500 text-orange-100" : "bg-transparent text-orange-500"}`}>
          <IconBriefcase size={20} strokeWidth={2} className="inline-block mr-2" />
          Abilities
        </label>

        <input type="radio" name="tab" id="tab3" checked={activeTab === "tab3"} onChange={() => setActiveTab("tab3")} className="hidden" />
        <label htmlFor="tab3" className={`transition ease-in-out duration-200 inline-block cursor-pointer text-orange-100 w-[22%] sm:w-1/6 md:w-1/5 lg:w-1/4 xl:w-1/5 2xl:w-1/6 h-12 rounded-t-md text-center items-center leading-12 hover:bg-orange-700 hover:text-orange-100 ${activeTab === "tab3" ? "bg-orange-500 text-orange-100" : "bg-transparent text-orange-500"}`}>
          <IconCircleCheck size={20} strokeWidth={2} className="inline-block mr-2" />
          Skills
        </label>
      </div>

      <div className={`tab-content-wrapper  bg-orange-500 ${activeTab === "tab1" ? "rounded-r-lg" : activeTab === "tab2" ? "rounded-lg" : "rounded-lg"}`}>
        <div className={`tab-content p-4  ${activeTab === "tab1" ? "block" : "hidden"}`}>
          <h3 className="text-xl border-b-4 border-orange-950 text-orange-950 mb-4">Creative design and coding in harmony</h3>
          <p className="text-orange-100 border-b-4 border-orange-950">Jeg hedder Kezia Hansen og studerer Multimediedesign med fokus på Frontend på KEA. Jeg brænder for kreativt design og kodning og søger praktik, hvor jeg kan kombinere mine tekniske færdigheder med min passion.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-4 ">
            <div className="flex items-center gap-2">
              <IconUser size={30} color="#FFF7ED" />
              <span className="text-orange-800">Kezia Hansen</span>
            </div>
            <div className="flex items-center gap-2">
              <IconMail size={30} color="#FFF7ED" />
              <span className="text-orange-800">kezia.hansen02@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCalendar size={30} color="#FFF7ED" />
              <span className="text-orange-800">Born on 10 April, 2002</span>
            </div>
            <div className="flex items-center gap-2">
              <IconSchool size={30} color="#FFF7ED" />
              <span className="text-orange-800">AP Degree in Multimedia Design</span>
            </div>
          </div>
        </div>

        <div className={`tab-content p-4 ${activeTab === "tab2" ? "block" : "hidden"}`}>
          <h3 className="text-xl border-b-4 border-orange-950 text-orange-950 mt-0 mb-4">Navigating My competences</h3>
          <div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <p className="text-orange-100">As a dedicated student of Multimedia Design at KEA with a focus on Frontend development, I am passionate about continuous learning and growth, always seeking to expand my skills and knowledge.</p>
              <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-120 lg:h-120 xl:w-140 xl:h-140 mt-0">
                <RadarChart />
              </div>
            </div>
          </div>
        </div>

        <div className={`tab-content p-4  ${activeTab === "tab3" ? "block" : "hidden"}`}>
          <h3 className="text-xl border-b-4 border-orange-950 text-orange-950 mb-4">Creative design and coding in harmony</h3>
          <p className="text-orange-100 mb-4 border-b-4 border-orange-950 ">Jeg hedder Kezia Hansen og studerer Multimediedesign med fokus på Frontend på KEA. Jeg brænder for kreativt design og kodning og søger praktik, hvor jeg kan kombinere mine tekniske færdigheder med min passion.</p>
          <div className="p-6 flex-1 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Competences section content */}
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">HTML</h3>
                  <p className="text-orange-800">Experienced</p>
                </div>
              </article>
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">CSS</h3>
                  <p className="text-orange-800">Intermediate</p>
                </div>
              </article>
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">Tailwind CSS</h3>
                  <p className="text-orange-800">Intermediate</p>
                </div>
              </article>
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">Javascript</h3>
                  <p className="text-orange-800">Basic</p>
                </div>
              </article>
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">Astro</h3>
                  <p className="text-orange-800">Intermediate</p>
                </div>
              </article>
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">React</h3>
                  <p className="text-orange-800">Intermediate</p>
                </div>
              </article>
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">Illustrator</h3>
                  <p className="text-orange-800">Intermediate</p>
                </div>
              </article>
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">Figma</h3>
                  <p className="text-orange-800">Experienced</p>
                </div>
              </article>
              <article className="flex items-center gap-2">
                <IconCircleCheckFilled size={30} stroke={2} color="#FFF7ED" />
                <div>
                  <h3 className="text-orange-900">Procreate</h3>
                  <p className="text-orange-800">Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
