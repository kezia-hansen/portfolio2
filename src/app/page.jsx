import Hero from "@/components/Hero";
import Works from "@/components/Works";
import { AboutMe } from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Hero />
      <Works />
      <AboutMe />
    </main>
  );
}
