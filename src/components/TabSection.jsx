"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { IconUser, IconMail, IconSchool, IconBriefcase, IconCalendar, IconCircleCheck } from "@tabler/icons-react";

const infoData = [
  {
    icon: <IconUser size={20} />,
    text: "Kezia Hansen",
  },

  {
    icon: <IconMail size={20} />,
    text: "kezia.hansen02@gmail.com",
  },
  {
    icon: <IconCalendar size={20} />,
    text: "Born on 10 April, 2002",
  },
  {
    icon: <IconSchool size={20} />,
    text: "AP Degree in Multimedia Design",
  },
];

const qualificationData = {
  icon: "/radarchart.png",
};

const skillData = [
  {
    icon: <IconCircleCheck size={20} stroke={2} />,
    name: "HTML",
    level: "Experienced",
  },
  {
    icon: <IconCircleCheck size={20} stroke={2} />,
    name: "CSS",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheck size={20} stroke={2} />,
    name: "Javascript",
    level: "Basic",
  },
  {
    icon: <IconCircleCheck size={20} stroke={2} />,
    name: "Astro",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheck size={20} stroke={2} />,
    name: "Illustrator",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheck size={20} stroke={2} />,
    name: "Figma",
    level: "Experienced",
  },
  {
    icon: <IconCircleCheck size={20} stroke={2} />,
    name: "Procreate",
    level: "Experienced",
  },
  {
    icon: <IconCircleCheck size={20} stroke={2} />,
    name: "UI/UX",
    level: "Intermediate",
  },
];

export default function TabSec() {
  const tabsElement = useRef(null);
  const [activeTab, setActiveTab] = useState("personal-info");

  useEffect(() => {
    const tabElements = [
      {
        id: "personal-info",
        triggerEl: tabsElement.current.querySelector("#personal-info-tab"),
        targetEl: tabsElement.current.querySelector("#personal-info-content"),
      },
      {
        id: "competences",
        triggerEl: tabsElement.current.querySelector("#competences-tab"),
        targetEl: tabsElement.current.querySelector("#competences-content"),
      },
      {
        id: "skills",
        triggerEl: tabsElement.current.querySelector("#skills-tab"),
        targetEl: tabsElement.current.querySelector("#skills-content"),
      },
    ];

    tabElements.forEach((tab) => {
      tab.triggerEl.addEventListener("click", () => {
        setActiveTab(tab.id);
      });
    });

    return () => {
      tabElements.forEach((tab) => {
        tab.triggerEl.removeEventListener("click", () => {});
      });
    };
  }, [tabsElement]);

  const renderPersonalInfoContent = () => (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-4">Unmatched Service Quality for Over 10 Years</h3>
      <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
      <div className="grid xl:grid-cols-2 gap-4 mb-12">
        {infoData.map((item, index) => (
          <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
            <div className="text-primary">{item.icon}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQualificationsContent = () => (
    <div className="text-center xl:text-left">
      <h3 className="opacity-0">My Awesome Journey</h3>
      <p className="opacity-0 subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
      <div className="flex justify-center  mb-8">
        <Image alt="radar skill chart" src={qualificationData.icon} height={200} width={200} className="w-3/4 h-auto" />
      </div>
    </div>
  );

  const renderSkillsContent = () => (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-4">Unmatched Service Quality for Over 10 Years</h3>
      <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
      <div className="grid xl:grid-cols-2 gap-4 mb-12">
        {skillData.map((item, index) => (
          <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
            <div className="text-primary">{item.icon}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section>
      <div className="ml-0 ">
        <ul className="flex -mb-px text-sm font-medium text-center text-orange-950 " ref={tabsElement} id="tabs-example" role="tablist">
          <li className="me-2" role="presentation">
            <button className={`inline-block rounded-t-lg  ${activeTab === "personal-info" ? "text-orange-100 bg-orange-500 " : "border-orange-700"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="personal-info-tab" type="button" role="tab" aria-controls="personal-info-content" aria-selected={activeTab === "personal-info"}>
              <IconUser className="inline-block mr-2" size={20} />
              Personal Info
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button className={`inline-block rounded-t-lg  ${activeTab === "competences" ? "text-orange-100 bg-orange-500 " : "border-orange-700"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="competences-tab" type="button" role="tab" aria-controls="competences-content" aria-selected={activeTab === "competences"}>
              <IconBriefcase className="inline-block mr-2" size={20} />
              Competences
            </button>
          </li>
          <li role="presentation">
            <button className={`inline-block rounded-t-lg  ${activeTab === "skills" ? "text-orange-100 bg-orange-500 " : "border-orange-700"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="skills-tab" type="button" role="tab" aria-controls="skills-content" aria-selected={activeTab === "skills"}>
              <IconSchool className="inline-block mr-2" size={20} />
              Skills
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample">
        <div className={`rounded-r-lg   bg-orange-500 p-4 ${activeTab === "personal-info" ? "" : "hidden"}`} id="personal-info-content" role="tabpanel" aria-labelledby="personal-info-tab">
          {renderPersonalInfoContent()}
        </div>
        <div className={`rounded-lg   bg-orange-500 p-4 ${activeTab === "competences" ? "" : "hidden"}`} id="competences-content" role="tabpanel" aria-labelledby="competences-tab">
          {renderQualificationsContent()}
        </div>
        <div className={`rounded-l-lg   bg-orange-500 p-4 ${activeTab === "skills" ? "" : "hidden"}`} id="skills-content" role="tabpanel" aria-labelledby="skills-tab">
          {renderSkillsContent()}
        </div>
      </div>
    </section>
  );
}
