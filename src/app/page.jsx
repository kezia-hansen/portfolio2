import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Hero />
      <About />
      <Works />
    </main>
  );
}
