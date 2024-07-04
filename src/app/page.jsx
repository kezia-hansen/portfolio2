import Hero from "@/components/Hero";
import Works from "@/components/Works";

import Me from "@/components/Me";
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Hero />
      <Me />
      <Works />
    </main>
  );
}
