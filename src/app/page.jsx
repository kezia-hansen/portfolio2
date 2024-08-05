"use client";
import React from "react";
import { IconUser, IconBriefcase, IconCircleCheck } from "@tabler/icons-react";
import CTABtn from "@/components/CTABtn";
import Hero from "@/components/Hero";
import Title from "@/components/Title";
import Competences from "@/components/Competences";
import ContactSec from "@/components/ContactSec";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="home" className="flex-shrink-0 snap-start w-full py-16 ">
        <CTABtn />
        <Hero />
      </section>
      <section id="projects" className="flex-shrink-0 snap-start w-full py-24 pl-4 ">
        <Title smallt="Udforsk mine" bigt="Projekter" Icon={IconBriefcase} />
        <Projects />
      </section>
      <section id="about-me" className="flex-shrink-0 snap-start w-full py-10 pl-4 ">
        <Title smallt="Et kig ind i mine" bigt="Ressourcer" Icon={IconUser} />
        <AboutMe />
      </section>
      <section id="competences" className="flex-shrink-0 snap-start w-full py-10 pl-4 ">
        <Title smallt="Hvad" bigt="Jeg Kan Tilbyde" Icon={IconCircleCheck} />
        <Competences />
      </section>
      <section id="contact" className="flex-shrink-0 snap-start w-full  pl-4 md:pl-20 ">
        <ContactSec />
      </section>
    </main>
  );
}
