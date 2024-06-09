import ProjetosDev from "@/components/main/ProjetosDev";
import Hero from "@/components/main/MonkeyDLuffy";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <ProjetosDev />
      </div>
    </main>
  );
}
