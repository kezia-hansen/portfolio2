"use client";
import React from "react";

import CTABtn from "@/components/CTABtn";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen snap-y">
      <CTABtn />
      <Hero />
    </main>
  );
}
