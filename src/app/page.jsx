"use client";
import React from "react";
import { IconUser, IconBriefcase, IconCircleCheck } from "@tabler/icons-react";
import CTABtn from "@/components/CTABtn";
import Hero from "@/components/Hero";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="home" className="flex-shrink-0 snap-start w-full min-h-screen flex items-center justify-center">
        <div className="w-full">
          <CTABtn />
          <Hero />
        </div>
      </section>
      <section id="projects" className="flex-shrink-0 snap-start w-full min-h-screen flex items-center justify-center">
        <Title smallt="Browse my" bigt="Projects" Icon={IconBriefcase} />
      </section>
      <section id="about-me" className="flex-shrink-0 snap-start w-full min-h-screen flex items-center justify-center">
        <Title smallt="A Glimpse Into my" bigt="Resources" Icon={IconUser} />
      </section>
      <section id="competences" className="flex-shrink-0 snap-start w-full min-h-screen flex items-center justify-center">
        <Title smallt="Check my" bigt="Competences" Icon={IconCircleCheck} />
      </section>
    </main>
  );
}
