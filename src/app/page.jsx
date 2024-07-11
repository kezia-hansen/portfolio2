"use client";
import React from "react";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Me from "@/components/Me";
import Feature from "@/components/Feature";
import ContactMe from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Hero />
      <Works />
      <Me />
      <Feature />
      <ContactMe />
    </main>
  );
}
