import { useState } from "react";
import { IconStarFilled, IconCircleCheckFilled, IconCircleCheck } from "@tabler/icons-react";

export default function TabSec() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs">
      <div className="relative flex border-4 border-royalBlue-50 rounded-full overflow-hidden">
        <input type="radio" name="tab" id="tab1" checked={activeTab === "tab1"} onChange={() => setActiveTab("tab1")} className="hidden" />
        <input type="radio" name="tab" id="tab2" checked={activeTab === "tab2"} onChange={() => setActiveTab("tab2")} className="hidden" />

        {/* Active Indicator */}
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-in-out bg-tangerine rounded-full`}
          style={{
            width: "50%",
            height: "100%",
            transform: activeTab === "tab1" ? "translateX(0)" : "translateX(100%)",
            zIndex: 0, // Ensure the indicator is behind the labels
          }}></div>

        {/* Tab Labels */}
        <label htmlFor="tab1" className={`relative flex-1 cursor-pointer inline-flex items-center justify-center transition-colors duration-200 rounded-full ${activeTab === "tab1" ? "bg-tangerine text-royalBlue-600 z-10" : "bg-transparent text-royalBlue-600"}`} style={{ padding: "0 1.5rem", height: "3rem", zIndex: activeTab === "tab1" ? "10" : "1" }}>
          <IconStarFilled color="#312DE6" size={20} strokeWidth={2} className="mr-2 align-u" />
          <span className="align-middle">Bio</span>
        </label>

        <label htmlFor="tab2" className={`relative flex-1 cursor-pointer inline-flex items-center justify-center transition-colors duration-200 rounded-full ${activeTab === "tab2" ? "bg-tangerine text-royalBlue-600 z-10" : "bg-transparent text-royalBlue-600"}`} style={{ padding: "0 1.5rem", height: "3rem", zIndex: activeTab === "tab2" ? "10" : "1" }}>
          <IconStarFilled color="#312DE6" size={20} strokeWidth={2} className="mr-2 align-middle" />
          <span className="align-middle">Skills</span>
        </label>
      </div>

      <div className={`tab-content-wrapper  bg-transparant ${activeTab === "tab1" ? "rounded-r-lg" : activeTab === "tab2" ? "rounded-lg" : "rounded-lg"}`}>
        <div className={`tab-content p-4  ${activeTab === "tab1" ? "block" : "hidden"}`}>
          <h3 className="text-xl  text-royalBlue-600 mb-4">Creative design and coding in harmony</h3>
          <p className="text-royalBlue-600 mb-4 font-lato "> Hej! Jeg er Kezia Hansen, en 22-årig multimediestuderende på KEA, der brænder for både design og kodning. Jeg søger en praktikplads, hvor jeg kan kombinere min tekniske viden og kreative flair.</p>

          <p className="text-royalBlue-600 mb-4 font-lato ">Jeg er organiseret, god til teamwork og har en struktureret tilgang til projekter.</p>
          <p className="text-royalBlue-600 font-lato  bg-royalBlue-50 p-4 rounded-3xl "> Et højdepunkt i min uddannelse var at designe billetter til et succesfuldt projekt. Jeg ser frem til at bringe min passion og mine færdigheder ind i en spændende praktikmulighed.</p>
        </div>

        <div className={`tab-content p-4 ${activeTab === "tab2" ? "block" : "hidden"}`}>
          <div className="p-6 flex-1 text-center">
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
                  <h3 className="text-royalBlue-800">Javascript</h3>
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
  );
}
