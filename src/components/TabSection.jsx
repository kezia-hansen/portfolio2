"use client";
import { useRef, useEffect, useState } from "react";

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

  return (
    <section>
      <div className="mb-4 border-l-4 border-orange-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-orange-950 " ref={tabsElement} id="tabs-example" role="tablist">
          <li className="me-2" role="presentation">
            <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "personal-info" ? "text-orange-100 bg-orange-500 " : "border-transparent"} p-4 md:hover:bg-orange-700 hover:text-orange-100 `} id="personal-info-tab" type="button" role="tab" aria-controls="personal-info-content" aria-selected={activeTab === "personal-info"}>
              Personal Info
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "competences" ? "text-orange-100 bg-orange-500 " : "border-transparent"} p-4 md:hover:bg-orange-700 hover:text-orange-100 `} id="competences-tab" type="button" role="tab" aria-controls="competences-content" aria-selected={activeTab === "competences"}>
              Competences
            </button>
          </li>
          <li role="presentation">
            <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "skills" ? "text-orange-100 bg-orange-500 " : "border-transparent"} p-4 md:hover:bg-orange-700 hover:text-orange-100 `} id="skills-tab" type="button" role="tab" aria-controls="skills-content" aria-selected={activeTab === "skills"}>
              Skills
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample">
        <div className={`rounded-lg bg-gray-50 p-4  ${activeTab === "personal-info" ? "" : "hidden"}`} id="personal-info-content" role="tabpanel" aria-labelledby="personal-info-tab">
          <p className="text-sm text-gray-500 ">
            This is some placeholder content for the
            <strong className="font-medium text-gray-800 ">Personal Info tab</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
        <div className={`rounded-lg bg-gray-50 p-4  ${activeTab === "competences" ? "" : "hidden"}`} id="competences-content" role="tabpanel" aria-labelledby="competences-tab">
          <p className="text-sm text-gray-500 ">
            This is some placeholder content for the
            <strong className="font-medium text-gray-800 ">Competences tab</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
        <div className={`rounded-lg bg-gray-50 p-4  ${activeTab === "skills" ? "" : "hidden"}`} id="skills-content" role="tabpanel" aria-labelledby="skills-tab">
          <p className="text-sm text-gray-500 ">
            This is some placeholder content for the
            <strong className="font-medium text-gray-800 ">Skills tab</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
      </div>
    </section>
  );
}
