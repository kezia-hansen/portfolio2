"use client";
import { SocialIcon } from "react-social-icons";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

export default function Works() {
  return (
    <section className="my-10  p-5 md:p-10 space-y-5" id="works">
      <h1 className="font-semibold text-xl md:text-2xl whitespace-nowrap pt-2 ">Works</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/shuriken2.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/shuriken.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/organizify.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/organizify2.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/shuriken2.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/shuriken.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/organizify.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/organizify2.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>{" "}
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/shuriken2.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/shuriken.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/organizify.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/organizify2.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>{" "}
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/shuriken2.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/shuriken.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/organizify.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/organizify2.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>{" "}
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/shuriken2.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/shuriken.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-5 py-4">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-1 space-y-2 md:space-y-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">lib1</span>
              <h3 className="font-bold text-2xl">Project 1</h3>
              <p className="text-xs sm:text-sm">Project 1 description</p>
              <div className="flex flex-row gap-5">
                <a href="project1_href" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-6 h-6 flex justify-center items-center mr-2">
                      <IconExternalLink stroke={2} />
                    </div>
                    Demo
                  </button>
                </a>
                <a href="project1_source" target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded whitespace-nowrap flex w-32 h-12 items-center">
                    <div className="w-12 h-12 flex justify-center items-center">
                      <SocialIcon aria-hidden="true" alt="github logo" network="github" bgColor="transparent" fgColor="#C2410C" url="https://github.com/kezia-hansen" style={{ height: 45, width: 45 }} />
                    </div>
                    Github
                  </button>
                </a>
              </div>
              <p className="text-xs text-gray-500">Year : 2024</p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image src="/organizify.png" alt="" height={300} width={300} className="hidden sm:block h-[220px] object-cover rounded" />
              <Image src="/organizify2.png" alt="" height={300} width={300} className="block sm:hidden w-full object-cover rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
