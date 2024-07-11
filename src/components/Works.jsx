"use client";
import { SocialIcon } from "react-social-icons";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

export default function Works() {
  return (
    <section className="my-10 md:my-32  p-5 md:p-10 space-y-5 flex justify-center gap-5 height-80 h-5/6  box-content" id="works">
      <div className="flex flex-col items-center">
        <p className="text-orange-900 text-3xl ">Browse My</p>
        <h1 className="font-semibold text-xl md:text-6xl whitespace-nowrap pt-2 pb-4 text-orange-950 ">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div className="bg-white shadow-md rounded px-5 py-4">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 space-y-2 md:space-y-4">
                <span className="bg-red-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
                <span className="bg-blue-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
                <span className="bg-yellow-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Javascript</span>
                <span className="bg-orange-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Concept</span>
                <h3 className="font-bold text-2xl text-orange-950">Zodiac Dash</h3>
                <p className="text-xs sm:text-sm text-orange-950">Et klik-baseret spil til mobil og desktop, hvor du samler point ved at klikke på gode ting og undgår dårlige, der kan koste liv. Spillet inkluderer også en tidsfaktor, hvor målet er at opnå tilstrækkeligt med point inden tiden løber ud eller risikere at tabe.</p>
                <div className="flex flex-row gap-5">
                  <a href="https://zodiac-dash.netlify.app/" target="_blank">
                    <button className="bg-orange-500 md:hover:bg-orange-700 md:hover:scale-110 text-orange-100 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-6 h-6 flex justify-center items-center mr-2">
                        <IconExternalLink stroke={2} />
                      </div>
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/kezia-hansen/spil_zodiac-dash" target="_blank">
                    <button className="bg-orange-200  md:hover:scale-110 text-orange-700 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" style={{ height: 45, width: 45 }} />
                      </div>
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <Image src="/zodiac.png" alt="" height={300} width={300} className=" sm:block h-[150px] object-cover rounded" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded px-5 py-4">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 space-y-2 md:space-y-4">
                <span className="bg-red-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
                <span className="bg-blue-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
                <span className="bg-yellow-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Javascript</span>
                <span className="bg-orange-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Concept</span>
                <span className="bg-purple-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Research</span>
                <h3 className="font-bold text-2xl text-orange-950">Redesign of Festival Alive</h3>
                <p className="text-xs sm:text-sm text-orange-950">I dette gruppeprojekt har jeg designet billetterne, udviklet konceptet og udført research om festivalen. Vi startede med et tomt Pinterest-board for at finde stilinspiration. Efter at have identificeret 6 nøgleord til vores koncept, tilpassede jeg billetdesignet for at afspejle festivalens visuelle identitet bedre.</p>
                <div className="flex flex-row gap-5">
                  <a href="https://eclectic-kheer-f1b185.netlify.app/" target="_blank">
                    <button className="bg-orange-500 md:hover:bg-orange-700 md:hover:scale-110 text-orange-100 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-6 h-6 flex justify-center items-center mr-2">
                        <IconExternalLink stroke={2} />
                      </div>
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/Rasmusminet/02_redesign" target="_blank">
                    <button className="bg-orange-200  md:hover:scale-110 text-orange-700 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" style={{ height: 45, width: 45 }} />
                      </div>
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <Image src="/alive.png" alt="" height={300} width={300} className=" sm:block h-[150px] object-cover rounded" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded px-5 py-4">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 space-y-2 md:space-y-4">
                <span className="bg-red-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
                <span className="bg-blue-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
                <span className="bg-yellow-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Javascript</span>
                <span className="bg-orange-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Concept</span>
                <span className="bg-purple-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Research</span>
                <h3 className="font-bold text-2xl text-orange-950">Subsite til VildMad</h3>
                <p className="text-xs sm:text-sm text-orange-950">I dette projekt udviklede jeg konceptet, udførte research og kodet sæson-siden. Min research fokuserede på børns medieforbrug med særligt fokus på shows som Gumball og børnevenlige hjemmesider. Inspireret af deres farverige og legende design skabte jeg et moodboard til vores side, VildMad. Målet var at skabe en legende, pædagogisk og kreativ oplevelse, der hentede inspiration fra tegnefilm og polaroid-billeder.</p>
                <div className="flex flex-row gap-5">
                  <a href="https://vildmad5.netlify.app/" target="_blank">
                    <button className="bg-orange-500 md:hover:bg-orange-700 md:hover:scale-110 text-orange-100 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-6 h-6 flex justify-center items-center mr-2">
                        <IconExternalLink stroke={2} />
                      </div>
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/kezia-hansen/VildMad" target="_blank">
                    <button className="bg-orange-200  md:hover:scale-110 text-orange-700 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" style={{ height: 45, width: 45 }} />
                      </div>
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <Image src="/vildmad.png" alt="" height={300} width={300} className=" sm:block h-[150px] object-cover rounded" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded px-5 py-4">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 space-y-2 md:space-y-4">
                <span className="bg-red-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
                <span className="bg-blue-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
                <span className="bg-yellow-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Javascript</span>
                <span className="bg-orange-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Concept</span>
                <span className="bg-purple-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Research</span>
                <h3 className="font-bold text-2xl text-orange-950">Redesign of CPH Light Festival</h3>
                <p className="text-xs sm:text-sm text-orange-950">
                  I dette projekt har jeg sammen med et andet medlem udviklet konceptet, skabt prototyper og style tile. Jeg stod også for kodningen af program-siden og udførte trend research til at støtte vores designvalg, inspireret af CPH Light Festivals motto <em>Our event speaks without words</em>.
                </p>
                <div className="flex flex-row gap-5">
                  <a href="https://copenhagenlightfestival-gruppe4.netlify.app/" target="_blank">
                    <button className="bg-orange-500 md:hover:bg-orange-700 md:hover:scale-110 text-orange-100 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-6 h-6 flex justify-center items-center mr-2">
                        <IconExternalLink stroke={2} />
                      </div>
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/livzino/light_festival_liv" target="_blank">
                    <button className="bg-orange-200  md:hover:scale-110 text-orange-700 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" style={{ height: 45, width: 45 }} />
                      </div>
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <Image src="/cphlight.png" alt="" height={300} width={300} className=" sm:block h-[150px] object-cover rounded" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded px-5 py-4">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 space-y-2 md:space-y-4">
                <span className="bg-red-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
                <span className="bg-blue-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
                <span className="bg-yellow-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Javascript</span>
                <span className="bg-orange-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Concept</span>
                <span className="bg-purple-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Research</span>
                <h3 className="font-bold text-2xl text-orange-950">Campaign to CA studiepartner og a-kasse </h3>
                <p className="text-xs sm:text-sm text-orange-950">I dette projekt kom jeg op med konceptet til studiekortene , stod for prototyping, research og kodning af footer og cirkler. Vi tilpassede os CAs visuelle identitet ved at undlade en traditionel moodboard og style tile, så vi kunne integrere os sømløst med resten af CAs hjemmeside. Vi ønskede at fremhæve mangfoldigheden blandt studerende ved at vise forskellige ansigter og demonstrere, at CA byder alle typer individer velkommen.</p>
                <div className="flex flex-row gap-5">
                  <a href="https://ca-karrierekick.netlify.app/" target="_blank">
                    <button className="bg-orange-500 md:hover:bg-orange-700 md:hover:scale-110 text-orange-100 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-6 h-6 flex justify-center items-center mr-2">
                        <IconExternalLink stroke={2} />
                      </div>
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/misszarakarim/CA" target="_blank">
                    <button className="bg-orange-200  md:hover:scale-110 text-orange-700 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" style={{ height: 45, width: 45 }} />
                      </div>
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <Image src="/ca.png" alt="" height={300} width={300} className=" sm:block h-[150px] object-cover rounded" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded px-5 py-4">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 space-y-2 md:space-y-4">
                <span className="bg-red-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
                <span className="bg-blue-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
                <span className="bg-yellow-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Javascript</span>
                <span className="bg-orange-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Concept</span>
                <span className="bg-purple-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Research</span>
                <h3 className="font-bold text-2xl text-orange-950">Redesign af The Korner website </h3>
                <p className="text-xs sm:text-sm text-orange-950">I dette projekt udviklede jeg konceptet og lavede prototyping sammen med gruppen. Jeg udførte omfattende research gennem surveys, interviews og artikler for at støtte vores designvalg. Vi udforskede pastelfarver, kawaii-æstetik og Y2K-elementer som inspiration til vores design. Vores mål var at tilpasse konceptet til The Korners brandidentitet og butikkens atmosfære, samtidig med at vi skabte en engagerende og brugervenlig hjemmeside.</p>
                <div className="flex flex-row gap-5">
                  <a href="https://the-korner.netlify.app/" target="_blank">
                    <button className="bg-orange-500 md:hover:bg-orange-700 md:hover:scale-110 text-orange-100 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-6 h-6 flex justify-center items-center mr-2">
                        <IconExternalLink stroke={2} />
                      </div>
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/misszarakarim/kpop" target="_blank">
                    <button className="bg-orange-200  md:hover:scale-110 text-orange-700 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" style={{ height: 45, width: 45 }} />
                      </div>
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <Image src="/korner.png" alt="" height={300} width={300} className=" sm:block h-[150px] object-cover rounded" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded px-5 py-4">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex-1 space-y-2 md:space-y-4">
                <span className="bg-red-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
                <span className="bg-blue-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
                <span className="bg-yellow-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Javascript</span>
                <span className="bg-orange-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Concept</span>
                <span className="bg-purple-300 text-orange-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Research</span>
                <h3 className="font-bold text-2xl text-orange-950">ToDo list </h3>
                <p className="text-xs sm:text-sm text-orange-950">Denne To-Do List hjemmeside bruger HTML, CSS og JavaScript til at tilføje, markere og slette opgaver. Opgaver gemmes i din browser ved brug af Local Storage, så de forbliver gemt, selv efter genstart. Du kan filtrere opgaver efter afkrydsede, ikke afkrydsede og vise alle opgaver.</p>
                <div className="flex flex-row gap-5">
                  <a href="https://todobear.netlify.app/" target="_blank">
                    <button className="bg-orange-500 md:hover:bg-orange-700 md:hover:scale-110 text-orange-100 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-6 h-6 flex justify-center items-center mr-2">
                        <IconExternalLink stroke={2} />
                      </div>
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/kezia-hansen/toDoList" target="_blank">
                    <button className="bg-orange-200  md:hover:scale-110 text-orange-700 font-bold py-2 px-4 rounded-lg whitespace-nowrap flex w-32 h-12 items-center">
                      <div className="w-12 h-12 flex justify-center items-center">
                        <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" style={{ height: 45, width: 45 }} />
                      </div>
                      Github
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <Image src="/todo.png" alt="" height={300} width={300} className=" sm:block h-[150px] object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
