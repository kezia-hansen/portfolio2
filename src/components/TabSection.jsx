import { useRef, useEffect, useState } from "react";
import { IconUser, IconMail, IconSchool, IconBriefcase, IconCalendar, IconCircleCheckFilled } from "@tabler/icons-react";
import RadarChart from "./RadarChart"; // Assuming you have a RadarChart component

const infoData = [
  {
    icon: <IconUser size={20} />,
    text: "Kezia Hansen",
  },
  {
    icon: <IconCalendar size={20} />,
    text: "Born on 10 April, 2002",
  },
  {
    icon: <IconMail size={20} />,
    text: "kezia.hansen02@gmail.com",
  },
  {
    icon: <IconSchool size={20} />,
    text: "AP Degree in Multimedia Design (KEA)",
  },
];

const skillData = [
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "HTML",
    level: "Experienced",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "CSS",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "Tailwind CSS",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "Javascript",
    level: "Basic",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "Astro",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "React",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "NPM",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "Illustrator",
    level: "Intermediate",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "Figma",
    level: "Experienced",
  },
  {
    icon: <IconCircleCheckFilled size={30} stroke={2} />,
    name: "Procreate",
    level: "Experienced",
  },
];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("personal-info");

  const renderPersonalInfoContent = () => (
    <div className="text-center xl:text-left">
      <h3 className="text-xl mb-4 border-b-4 border-orange-950 text-orange-950">Creative design and coding in harmony</h3>
      <div className="max-w-5xl mx-auto">
        <p className="text-orange-100">Jeg hedder Kezia Hansen og studerer Multimediedesign med fokus på Frontend på KEA. Jeg brænder for kreativt design og kodning og søger praktik, hvor jeg kan kombinere mine tekniske færdigheder med min passion.</p>
        <div className="grid grid-cols-1 gap-4 mt-4 border-t-4 border-orange-950">
          {infoData.map((item, index) => (
            <div className="flex items-center gap-x-4 text-orange-100 mt-2 md:whitespace-nowrap" key={index}>
              <div className="text-primary">{item.icon}</div>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderQualificationsContent = () => (
    <div className="text-center xl:text-left flex justify-center items-center h-full">
      <RadarChart /> {/* Assuming you have a RadarChart component */}
    </div>
  );

  const renderSkillsContent = () => (
    <div className="text-center xl:text-left mt-4">
      <div className="grid grid-cols-2 gap-5 mb-12">
        {skillData.map((item, index) => (
          <div className="flex items-center gap-x-4 text-orange-100" key={index}>
            <div className="text-primary">{item.icon}</div>
            <div>
              <div className="font-bold text-orange-800">{item.name}</div> {/* Display skill name */}
              <div className="text-sm text-orange-950">{item.level}</div> {/* Display skill level */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full">
      <div className="ml-0">
        <ul className="flex -mb-px text-sm font-medium text-center text-orange-950" id="tabs-example" role="tablist">
          <li className="me-2" role="presentation">
            <button className={`inline-block rounded-t-lg ${activeTab === "personal-info" ? "text-orange-100 bg-orange-500 " : "border-orange-700"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="personal-info-tab" type="button" role="tab" aria-controls="personal-info-content" aria-selected={activeTab === "personal-info"} onClick={() => setActiveTab("personal-info")}>
              <IconUser className="inline-block mr-2" size={20} />
              Bio
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button className={`inline-block rounded-t-lg ${activeTab === "competences" ? "text-orange-100 bg-orange-500 " : "border-orange-700"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="competences-tab" type="button" role="tab" aria-controls="competences-content" aria-selected={activeTab === "competences"} onClick={() => setActiveTab("competences")}>
              <IconBriefcase className="inline-block mr-2" size={20} />
              Competences
            </button>
          </li>
          <li role="presentation">
            <button className={`inline-block rounded-t-lg ${activeTab === "skills" ? "text-orange-100 bg-orange-500 " : "border-orange-700"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="skills-tab" type="button" role="tab" aria-controls="skills-content" aria-selected={activeTab === "skills"} onClick={() => setActiveTab("skills")}>
              <IconSchool className="inline-block mr-2" size={20} />
              Skills
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample" className="relative mx-auto h-[32rem] flex flex-col">
        <div className={`absolute inset-0 rounded-lg bg-orange-500 p-4 ${activeTab === "personal-info" ? "flex" : "hidden"} flex-col justify-center`} id="personal-info-content" role="tabpanel" aria-labelledby="personal-info-tab">
          {renderPersonalInfoContent()}
        </div>
        <div className={`absolute inset-0 rounded-lg bg-orange-500 p-4 ${activeTab === "competences" ? "flex" : "hidden"} flex-col justify-center`} id="competences-content" role="tabpanel" aria-labelledby="competences-tab">
          {renderQualificationsContent()}
        </div>
        <div className={`absolute inset-0 rounded-lg bg-orange-500 p-4 ${activeTab === "skills" ? "flex" : "hidden"} flex-col justify-center`} id="skills-content" role="tabpanel" aria-labelledby="skills-tab">
          {renderSkillsContent()}
        </div>
      </div>
    </section>
  );
}
