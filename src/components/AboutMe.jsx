import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { IconStarFilled, IconCircleCheckFilled } from "@tabler/icons-react"; // Adjust according to your imports

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <>
      <Head>
        <style>
          {`
            .tab-slider {
              transition: transform 0.3s ease;
            }
          `}
        </style>
      </Head>

      <div className="flex flex-col md:flex-row items-start justify-center p-4 min-h-screen">
        {/* Tabs and Content */}
        <div className="flex flex-col flex-grow md:w-3/4">
          <div className="relative flex border-4 border-purple-50 rounded-full overflow-hidden">
            <input type="radio" name="tab" id="bio" checked={activeTab === "bio"} onChange={() => setActiveTab("bio")} className="hidden" />
            <input type="radio" name="tab" id="skills" checked={activeTab === "skills"} onChange={() => setActiveTab("skills")} className="hidden" />

            <div
              className={`absolute inset-0 transition-transform duration-300 ease-in-out bg-tangerine rounded-full tab-slider`}
              style={{
                width: "50%",
                height: "100%",
                transform: activeTab === "bio" ? "translateX(0%)" : "translateX(100%)",
                zIndex: 0,
              }}></div>

            <label
              htmlFor="bio"
              className={`relative flex-1 cursor-pointer flex items-center justify-center transition-colors duration-200 rounded-full ${activeTab === "bio" ? "bg-tangerine text-royalBlue-600 z-10" : "bg-transparent text-royalBlue-600"}`}
              style={{
                padding: "0 1.5rem",
                height: "3rem",
                zIndex: activeTab === "bio" ? "10" : "1",
              }}>
              <IconStarFilled color="#312DE6" size={20} strokeWidth={2} className="mr-2" />
              <span className="text-sm md:text-base">Bio</span>
            </label>
            <label
              htmlFor="skills"
              className={`relative flex-1 cursor-pointer flex items-center justify-center transition-colors duration-200 rounded-full ${activeTab === "skills" ? "bg-tangerine text-royalBlue-600 z-10" : "bg-transparent text-royalBlue-600"}`}
              style={{
                padding: "0 1.5rem",
                height: "3rem",
                zIndex: activeTab === "skills" ? "10" : "1",
              }}>
              <IconStarFilled color="#312DE6" size={20} strokeWidth={2} className="mr-2" />
              <span className="text-sm md:text-base">Skills</span>
            </label>
          </div>

          <div className="mt-4 w-full flex-grow">
            <div className={`tab-content ${activeTab === "bio" ? "block" : "hidden"}`}>
              <div className="flex flex-col md:flex-row items-start w-full">
                <div className="md:pr-4 flex-grow">
                  <h3 className="text-xl text-royalBlue-600 mb-4">Kreativ design and kodning i harmoni</h3>
                  <p className="text-royalBlue-600 mb-4 font-lato">Hej! Jeg er Kezia Hansen, en 22-årig multimediestuderende på KEA, der brænder for både design og kodning. Jeg søger en praktikplads, hvor jeg kan kombinere min tekniske viden og kreative flair.</p>
                  <p className="text-royalBlue-600 mb-4 font-lato">Jeg er organiseret, god til teamwork og har en struktureret tilgang til projekter.</p>
                  <p className="text-royalBlue-600 bg-purple-50 p-2 rounded-3xl font-lato">Under min uddannelse arbejdede jeg på et skoleprojekt, hvor jeg designede billetter, som blev anvendt af en virksomhed i et år. Dette illustrerer ikke blot designets kvalitet, men også dets praktiske værdi. Jeg glæder mig til at bringe denne erfaring og min passion til en ny praktikmulighed</p>
                </div>
              </div>
            </div>
            <div className={`tab-content ${activeTab === "skills" ? "block" : "hidden"}`}>
              <h3 className="text-xl text-royalBlue-600 mb-4">Skills Overblik</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">HTML</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Experienced</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">CSS</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Intermediate</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">JavaScript</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Basic</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">Astro</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Intermediate</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">React</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Intermediate</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">NPM packages</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Intermediate</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">Tailwind CSS</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Intermediate</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">Figma</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Intermediate</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">Canva</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Intermediate</p>
                  </div>
                </div>
                <div className="flex border rounded-lg p-4 bg-royalBlue-50 flex-1 min-w-[150px]">
                  <IconCircleCheckFilled size={24} stroke={2} color="#1f1fb3" />
                  <div className="ml-2 flex-1">
                    <h4 className="font-semibold text-base text-primary text-royalBlue-800 tracking-normal">Illustrator</h4>
                    <p className="text-sm font-normal text-gray tracking-normal text-royalBlue-600">Basic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden flex-shrink-0 mx-auto">
          <Image src="/pf.png" alt="Profile Picture" width={300} height={300} className="object-cover" />
        </div>
      </div>
    </>
  );
}
