import { useState, useEffect } from "react";
import { IconStarFilled, IconCircleCheckFilled } from "@tabler/icons-react";
import Head from "next/head";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("bio");

  useEffect(() => {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.dataset.target;
        showContent(targetId);
      });
    });

    function showContent(id) {
      const contents = document.querySelectorAll(".content");
      contents.forEach((content) => {
        content.classList.add("hidden");
      });

      const element = document.getElementById(id);
      if (element) {
        element.classList.remove("hidden");
      }
    }

    // Cleanup event listeners on component unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", function () {
          const targetId = this.dataset.target;
          showContent(targetId);
        });
      });
    };
  }, []);

  return (
    <>
      <Head>
        <style>
          {`
            .nav-button {
              transition: background-color 0.3s ease;
            }
            .nav-button:hover {
              background-color: #6b46c1; /* darker purple */
            }
            .hidden {
              display: none;
            }
          `}
        </style>
      </Head>
      <div className="tabs">
        <div className="relative flex border-4 border-royalBlue-50 rounded-full overflow-hidden bg-white">
          <input type="radio" name="tab" id="bio" checked={activeTab === "bio"} onChange={() => setActiveTab("bio")} className="hidden" />
          <input type="radio" name="tab" id="skills" checked={activeTab === "skills"} onChange={() => setActiveTab("skills")} className="hidden" />

          {/* Active Indicator */}
          <div
            className={`absolute inset-0 transition-transform duration-300 ease-in-out bg-tangerine rounded-full`}
            style={{
              width: "50%", // Adjust width based on the number of tabs
              height: "100%",
              transform: activeTab === "bio" ? "translateX(0%)" : "translateX(100%)",
              zIndex: 0, // Ensure the indicator is behind the labels
            }}></div>

          {/* Tab Labels */}
          <label
            htmlFor="bio"
            className={`relative flex-1 cursor-pointer inline-flex items-center justify-center transition-colors duration-200 rounded-full ${activeTab === "bio" ? "bg-tangerine text-royalBlue-600 z-10" : "bg-transparent text-royalBlue-600"}`}
            style={{
              padding: "0 1.5rem",
              height: "3rem",
              zIndex: activeTab === "bio" ? "10" : "1",
            }}>
            <IconStarFilled color="#312DE6" size={20} strokeWidth={2} className="mr-2 align-middle" />
            <span className="align-middle text-sm md:text-base">Bio</span>
          </label>
          <label
            htmlFor="skills"
            className={`relative flex-1 cursor-pointer inline-flex items-center justify-center transition-colors duration-200 rounded-full ${activeTab === "skills" ? "bg-tangerine text-royalBlue-600 z-10" : "bg-transparent text-royalBlue-600"}`}
            style={{
              padding: "0 1.5rem",
              height: "3rem",
              zIndex: activeTab === "skills" ? "10" : "1",
            }}>
            <IconStarFilled color="#312DE6" size={20} strokeWidth={2} className="mr-2 align-middle" />
            <span className="align-middle text-sm md:text-base">Skills</span>
          </label>
        </div>

        <div className="tab-content-wrapper bg-transparent p-2">
          <div className={`tab-content ${activeTab === "bio" ? "block" : "hidden"}`}>
            <div className="flex flex-col md:flex-row">
              <div className="md:pr-4">
                <h3 className="text-xl text-royalBlue-600 mb-4">Creative design and coding in harmony</h3>
                <p className="text-royalBlue-600 mb-4 font-lato">Hej! Jeg er Kezia Hansen, en 22-årig multimediestuderende på KEA, der brænder for både design og kodning. Jeg søger en praktikplads, hvor jeg kan kombinere min tekniske viden og kreative flair.</p>

                <p className="text-royalBlue-600 mb-4 font-lato">Jeg er organiseret, god til teamwork og har en struktureret tilgang til projekter.</p>
                <p className="text-royalBlue-600 font-lato bg-royalBlue-50 p-2 rounded-3xl">Et højdepunkt i min uddannelse var at designe billetter til et succesfuldt projekt. Jeg ser frem til at bringe min passion og mine færdigheder ind i en spændende praktikmulighed.</p>
              </div>
            </div>
          </div>
          <div className={`tab-content ${activeTab === "skills" ? "block" : "hidden"}`}>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col items-center w-full">
                <div className="w-full">
                  <div className="p-6 text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {/* Competences section content */}
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">HTML</h3>
                          <p className="text-royalBlue-600">Experienced</p>
                        </div>
                      </article>
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">CSS</h3>
                          <p className="text-royalBlue-600">Intermediate</p>
                        </div>
                      </article>
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">Tailwind CSS</h3>
                          <p className="text-royalBlue-600">Intermediate</p>
                        </div>
                      </article>
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">JavaScript</h3>
                          <p className="text-royalBlue-600">Basic</p>
                        </div>
                      </article>
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">Astro</h3>
                          <p className="text-royalBlue-600">Intermediate</p>
                        </div>
                      </article>
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">React</h3>
                          <p className="text-royalBlue-600">Intermediate</p>
                        </div>
                      </article>
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">Illustrator</h3>
                          <p className="text-royalBlue-600">Intermediate</p>
                        </div>
                      </article>
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">Figma</h3>
                          <p className="text-royalBlue-600">Experienced</p>
                        </div>
                      </article>
                      <article className="flex items-center gap-2 p-2 bg-royalBlue-50 border rounded-lg">
                        <IconCircleCheckFilled size={30} stroke={2} color="#1f1fb3" />
                        <div>
                          <h3 className="text-royalBlue-800">Procreate</h3>
                          <p className="text-royalBlue-600">Experienced</p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
