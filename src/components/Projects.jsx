"use client";
import { SocialIcon } from "react-social-icons";
import { IconExternalLink, IconCirclePlus, IconCircleMinus } from "@tabler/icons-react";
import Image from "next/image";

export default function Projects() {
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

  const tagColors = {
    HTML: "#ffe4e6", // Light Red
    CSS: "#e0e0ff", // Light Blue
    Javascript: "#fef9c3", // Light Yellow
    Concept: "#fed7aa", // Light Green
    Research: "#ecfccb", // Light Purple
  };

  return (
    <section className="my-10  p-5 md:p-10 space-y-5" id="works">
      <div className="flex flex-col items-center border-4 border-royalBlue-600 p-5 w-full">
        <div className=" divide-y-4 divide-royalBlue-600 w-full">
          {projects.map((project, index) => (
            <details key={index} className="group mb-5">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg sm:text-2xl md:text-2xl  font-medium text-tangerine pl-2">
                {project.title}
                <div>
                  <IconCirclePlus className="block h-6 w-6 group-open:hidden md:hover:scale-110" />
                  <IconCircleMinus className="hidden h-6 w-6 group-open:block md:hover:scale-110" />
                </div>
              </summary>
              <div className="pb-4 text-secondary-500 md:flex md:flex-row-reverse md:gap-5">
                <div className="md:w-1/2 md:flex md:justify-center">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Image src={project.imageSrc} alt={project.title} height={300} width={300} className="w-full h-[200px] md:h-auto object-contain rounded mb-4" />
                  </a>
                </div>
                <div className="md:w-1/2">
                  <div className="flex flex-wrap gap-2 mb-4 items-center">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-royalBlue-800 text-xs font-semibold px-2.5 py-0.5 rounded" style={{ backgroundColor: tagColors[tag] }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-royalBlue-800 mb-4">{project.description}</p>
                  <div className="flex flex-row gap-5 items-center">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-tangerine md:hover:scale-110 text-yellow-50 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center justify-center">
                        <IconExternalLink className="mr-2" stroke={2} />
                        Demo
                      </button>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-transparent md:hover:scale-110 text-tangerine border-4 border-tangerine font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center justify-center">
                        <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#FF5722" style={{ height: 45, width: 45 }} />
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
