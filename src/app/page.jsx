import Hero from "@/components/Hero";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Hero />
      <Works />
    </main>
  );
}
