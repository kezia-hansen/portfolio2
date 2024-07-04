"use client";
import { useRef, useEffect, useState } from "react";
import { IconUser, IconBriefcase, IconSchool } from "@tabler/icons-react";

const infoData = [
  {
    icon: <IconUser size={20} />,
    text: "Ryan Davis",
  },
  {
    icon: <IconUser size={20} />,
    text: "+012 345 6789",
  },
  {
    icon: <IconUser size={20} />,
    text: "youremail@email.com",
  },
  {
    icon: <IconUser size={20} />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <IconUser size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <IconUser size={20} />,
    text: "321 Blue Avenue, NY, USA",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        qualification: "Ph.D in Computer Science",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        years: "2018 - 2020",
      },
      {
        company: "XYZ Corporation",
        role: "Senior Developer",
        years: "2020 - 2022",
      },
      {
        company: "Tech Innovators",
        role: "Lead Developer",
        years: "2022 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

export default function Test() {
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
      {/* icons */}
      <div className="grid xl:grid-cols-2 gap-4 mb-12">
        {infoData.map((item, index) => (
          <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
            <div className="text-primary">{item.icon}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      {/* languages */}
      <div className="flex flex-col gap-y-2">
        <div className="text-primary">Language Skill</div>
        <div className="border-b border-border"></div>
        <div>English, French, Spanish, Italian</div>
      </div>
    </div>
  );

  const renderQualificationsContent = () => (
    <div>
      <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
      {/* experience & education wrapper */}
      <div className="grid md:grid-cols-2 gap-y-8">
        {/* experience */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <IconBriefcase />
            <h4 className="capitalize font-medium">{qualificationData[1].title}</h4>
          </div>
          {/* list */}
          <div className="flex flex-col gap-y-8">
            {qualificationData[1].data.map((item, index) => (
              <div className="flex gap-x-8 group" key={index}>
                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                </div>
                <div>
                  <div className="font-semibold text-xl leading-none mb-2">{item.company}</div>
                  <div className="text-lg leading-none text-muted-foreground mb-4">{item.role}</div>
                  <div className="text-base font-medium">{item.years}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* education */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <IconSchool size={28} />
            <h4 className="capitalize font-medium">{qualificationData[0].title}</h4>
          </div>
          {/* list */}
          <div className="flex flex-col gap-y-8">
            {qualificationData[0].data.map((item, index) => (
              <div className="flex gap-x-8 group" key={index}>
                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                </div>
                <div>
                  <div className="font-semibold text-xl leading-none mb-2">{item.university}</div>
                  <div className="text-lg leading-none text-muted-foreground mb-4">{item.qualification}</div>
                  <div className="text-base font-medium">{item.years}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkillsContent = () => (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-8">What I Use Everyday</h3>
      {/* skills */}
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-2">Skills</h4>
        <div className="border-b border-border mb-4"></div>
        {/* skill list */}
        <div>
          {skillData[0].data.map((item, index) => (
            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
              <div className="font-medium">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* tools */}
    </div>
  );

  return (
    <section>
      <div className="mb-4 border-l-4 border-orange-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-orange-950" ref={tabsElement} id="tabs-example" role="tablist">
          <li className="me-2" role="presentation">
            <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "personal-info" ? "text-orange-100 bg-orange-500 " : "border-transparent"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="personal-info-tab" type="button" role="tab" aria-controls="personal-info-content" aria-selected={activeTab === "personal-info"}>
              <IconUser className="inline-block mr-2" size={20} />
              Personal Info
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "competences" ? "text-orange-100 bg-orange-500 " : "border-transparent"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="competences-tab" type="button" role="tab" aria-controls="competences-content" aria-selected={activeTab === "competences"}>
              <IconBriefcase className="inline-block mr-2" size={20} />
              Competences
            </button>
          </li>
          <li role="presentation">
            <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "skills" ? "text-orange-100 bg-orange-500 " : "border-transparent"} p-4 md:hover:bg-orange-700 hover:text-orange-100`} id="skills-tab" type="button" role="tab" aria-controls="skills-content" aria-selected={activeTab === "skills"}>
              <IconSchool className="inline-block mr-2" size={20} />
              Skills
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample">
        <div className={`rounded-lg bg-gray-50 p-4 ${activeTab === "personal-info" ? "" : "hidden"}`} id="personal-info-content" role="tabpanel" aria-labelledby="personal-info-tab">
          {renderPersonalInfoContent()}
        </div>
        <div className={`rounded-lg bg-gray-50 p-4 ${activeTab === "competences" ? "" : "hidden"}`} id="competences-content" role="tabpanel" aria-labelledby="competences-tab">
          {renderQualificationsContent()}
        </div>
        <div className={`rounded-lg bg-gray-50 p-4 ${activeTab === "skills" ? "" : "hidden"}`} id="skills-content" role="tabpanel" aria-labelledby="skills-tab">
          {renderSkillsContent()}
        </div>
      </div>
    </section>
  );
}
