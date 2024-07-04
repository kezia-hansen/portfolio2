"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Test() {
  const tabsElement = useRef(null);
  const [activeTab, setActiveTab] = useState("settings");

  useEffect(() => {
    const tabElements = [
      {
        id: "profile",
        triggerEl: tabsElement.current.querySelector("#profile-tab-example"),
        targetEl: tabsElement.current.querySelector("#profile-example"),
      },
      {
        id: "dashboard",
        triggerEl: tabsElement.current.querySelector("#dashboard-tab-example"),
        targetEl: tabsElement.current.querySelector("#dashboard-example"),
      },
      {
        id: "settings",
        triggerEl: tabsElement.current.querySelector("#settings-tab-example"),
        targetEl: tabsElement.current.querySelector("#settings-example"),
      },
      {
        id: "contacts",
        triggerEl: tabsElement.current.querySelector("#contacts-tab-example"),
        targetEl: tabsElement.current.querySelector("#contacts-example"),
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
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <div className="flex items-center">
              <Image src="/me.png" alt="Profile Picture" height={300} width={300} className="mr-2" />
            </div>
            {/*  <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" ref={tabsElement} id="tabs-example" role="tablist">
                <li className="me-2" role="presentation">
                  <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "profile" ? "border-blue-600 dark:border-blue-500" : "border-transparent"} p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300`} id="profile-tab-example" type="button" role="tab" aria-controls="profile-example" aria-selected={activeTab === "profile"}>
                    Profile
                  </button>
                </li>
                <li className="me-2" role="presentation">
                  <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "dashboard" ? "border-blue-600 dark:border-blue-500" : "border-transparent"} p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300`} id="dashboard-tab-example" type="button" role="tab" aria-controls="dashboard-example" aria-selected={activeTab === "dashboard"}>
                    Dashboard
                  </button>
                </li>
                <li className="me-2" role="presentation">
                  <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "settings" ? "border-blue-600 dark:border-blue-500" : "border-transparent"} p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300`} id="settings-tab-example" type="button" role="tab" aria-controls="settings-example" aria-selected={activeTab === "settings"}>
                    Settings
                  </button>
                </li>
                <li role="presentation">
                  <button className={`inline-block rounded-t-lg border-b-2 ${activeTab === "contacts" ? "border-blue-600 dark:border-blue-500" : "border-transparent"} p-4 hover:border-gray-300hover:text-gray-600 dark:hover:text-gray-300`} id="contacts-tab-example" type="button" role="tab" aria-controls="contacts-example" aria-selected={activeTab === "contacts"}>
                    Contacts
                  </button>
                </li>
              </ul>
            </div>
            <div id="tabContentExample">
              <div className={`rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ${activeTab === "profile" ? "" : "hidden"}`} id="profile-example" role="tabpanel" aria-labelledby="profile-tab-example">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the
                  <strong className="font-medium text-gray-800 dark:text-white">Profile tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                </p>
              </div>
              <div className={`rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ${activeTab === "dashboard" ? "" : "hidden"}`} id="dashboard-example" role="tabpanel" aria-labelledby="dashboard-tab-example">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the
                  <strong className="font-medium text-gray-800 dark:text-white">Dashboard tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                </p>
              </div>
              <div className={`rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ${activeTab === "settings" ? "" : "hidden"}`} id="settings-example" role="tabpanel" aria-labelledby="settings-tab-example">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the
                  <strong className="font-medium text-gray-800 dark:text-white">Settings tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                </p>
              </div>
              <div className={`rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ${activeTab === "contacts" ? "" : "hidden"}`} id="contacts-example" role="tabpanel" aria-labelledby="contacts-tab-example">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the
                  <strong className="font-medium text-gray-800 dark:text-white">Contacts tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
