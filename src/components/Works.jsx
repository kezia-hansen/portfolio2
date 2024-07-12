"use client";
import { SocialIcon } from "react-social-icons";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react"; // Import useState hook

export default function Works() {
  // Define projects data
  const projects = [
    {
      title: "Zodiac Dash",
      description: "Et klik-baseret spil til mobil og desktop, hvor du samler point ved at klikke på gode ting og undgår dårlige, der kan koste liv. Spillet inkluderer også en tidsfaktor, hvor målet er at opnå tilstrækkeligt med point inden tiden løber ud eller risikere at tabe.",
      tags: ["HTML", "CSS", "Javascript", "Concept"],
      demoLink: "https://zodiac-dash.netlify.app/",
      githubLink: "https://github.com/kezia-hansen/spil_zodiac-dash",
      imageSrc: "/zodiac.png",
    },
    {
      title: "Redesign of Festival Alive",
      description: "I dette gruppeprojekt har jeg designet billetterne, udviklet konceptet og udført research om festivalen. Vi startede med et tomt Pinterest-board for at finde stilinspiration. Efter at have identificeret 6 nøgleord til vores koncept, tilpassede jeg billetdesignet for at afspejle festivalens visuelle identitet bedre.",
      tags: ["HTML", "CSS", "Javascript", "Concept", "Research"],
      demoLink: "https://eclectic-kheer-f1b185.netlify.app/",
      githubLink: "https://github.com/Rasmusminet/02_redesign",
      imageSrc: "/alive.png",
    },
    {
      title: "Subsite til VildMad",
      description: "I dette projekt udviklede jeg konceptet, udførte research og kodet sæson-siden. Min research fokuserede på børns medieforbrug med særligt fokus på shows som Gumball og børnevenlige hjemmesider. Inspireret af deres farverige og legende design skabte jeg et moodboard til vores side, VildMad. Målet var at skabe en legende, pædagogisk og kreativ oplevelse, der hentede inspiration fra tegnefilm og polaroid-billeder.",
      tags: ["HTML", "CSS", "Javascript", "Concept", "Research"],
      demoLink: "https://vildmad5.netlify.app/",
      githubLink: "https://github.com/kezia-hansen/VildMad",
      imageSrc: "/vildmad.png",
    },
    {
      title: "Redesign of CPH Light Festival",
      description: "I dette projekt har jeg sammen med et andet medlem udviklet konceptet, skabt prototyper og style tile. Jeg stod også for kodningen af program-siden og udførte trend research til at støtte vores designvalg, inspireret af CPH Light Festivals motto Our event speaks without words.",
      tags: ["HTML", "CSS", "Javascript", "Concept", "Research"],
      demoLink: "https://copenhagenlightfestival-gruppe4.netlify.app/",
      githubLink: "https://github.com/livzino/light_festival_liv",
      imageSrc: "/cphlight.png",
    },
    {
      title: "Campaign to CA studiepartner og a-kasse",
      description: "I dette projekt kom jeg op med konceptet til studiekortene, stod for prototyping, research og kodning af footer og cirkler. Vi tilpassede os CAs visuelle identitet ved at undlade en traditionel moodboard og style tile, så vi kunne integrere os sømløst med resten af CAs hjemmeside. Vi ønskede at fremhæve mangfoldigheden blandt studerende ved at vise forskellige ansigter og demonstrere, at CA byder alle typer individer velkommen.",
      tags: ["HTML", "CSS", "Javascript", "Concept", "Research"],
      demoLink: "https://ca-karrierekick.netlify.app/",
      githubLink: "https://github.com/misszarakarim/CA",
      imageSrc: "/ca.png",
    },
    {
      title: "Redesign af The Korner website",
      description: "I dette projekt udviklede jeg konceptet og lavede prototyping sammen med gruppen. Jeg udførte omfattende research gennem surveys, interviews og artikler for at støtte vores designvalg. Vi udforskede pastelfarver, kawaii-æstetik og Y2K-elementer som inspiration til vores design. Vores mål var at tilpasse konceptet til The Korners brandidentitet og butikkens atmosfære, samtidig med at vi skabte en engagerende og brugervenlig hjemmeside.",
      tags: ["HTML", "CSS", "Javascript", "Concept", "Research"],
      demoLink: "https://the-korner.netlify.app/",
      githubLink: "https://github.com/misszarakarim/kpop",
      imageSrc: "/korner.png",
    },
    {
      title: "ToDo list",
      description: "Denne To-Do List hjemmeside bruger HTML, CSS og JavaScript til at tilføje, markere og slette opgaver. Opgaver gemmes i din browser ved brug af Local Storage, så de forbliver gemt, selv efter genstart. Du kan filtrere opgaver efter afkrydsede, ikke afkrydsede og vise alle opgaver.",
      tags: ["HTML", "CSS", "Javascript", "Concept", "Research"],
      demoLink: "https://todobear.netlify.app/",
      githubLink: "https://github.com/kezia-hansen/toDoList",
      imageSrc: "/todo.png",
    },
  ];

  // State to manage the number of projects to display
  const [visibleProjects, setVisibleProjects] = useState(4); // Initial number of projects to display

  const tagColors = {
    HTML: "#f28b82", // Light Red
    CSS: "#aecbfa", // Light Blue
    Javascript: "#fdd663", // Light Yellow
    Concept: "#ccff90", // Light Green
    Research: "#d7aefb", // Light Purple
  };
  // Function to handle "Show More" button click
  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 3); // Increase visible projects by 3
  };

  return (
    <section className="my-10 md:my-32 p-5 md:p-10 space-y-5 flex justify-center gap-5 height-80 h-5/6 box-content" id="works">
      <div className="flex flex-col items-center">
        <p className="text-orange-900 text-3xl">Browse My</p>
        <h1 className="font-semibold text-xl md:text-6xl whitespace-nowrap pt-2 pb-4 text-orange-950">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded px-5 py-4">
              <div className="flex flex-col-reverse sm:flex-row">
                <div className="flex-1 space-y-2 md:space-y-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded" style={{ backgroundColor: tagColors[tag] }}>
                      {tag}
                    </span>
                  ))}
                  <h3 className="font-bold text-2xl text-orange-950">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-orange-950">{project.description}</p>
                  <div className="flex flex-row gap-5">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-orange-500 md:hover:bg-orange-700 md:hover:scale-110 text-orange-100 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                        <div className="w-6 h-6 flex justify-center items-center mr-2">
                          <IconExternalLink stroke={2} />
                        </div>
                        Demo
                      </button>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-orange-200 md:hover:scale-110 text-orange-700 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                        <div className="w-12 h-12 flex justify-center items-center">
                          <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" style={{ height: 45, width: 45 }} />
                        </div>
                        Github
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-end">
                  <a href="https://www.linkedin.com/in/keziahansen/">
                    <Image src={project.imageSrc} alt={project.title} height={300} width={300} className="sm:block h-[150px] object-cover rounded" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-5">
            <button onClick={showMoreProjects} className="bg-orange-500 md:hover:bg-orange-700 text-orange-100 font-bold py-2 px-4 rounded-lg">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
