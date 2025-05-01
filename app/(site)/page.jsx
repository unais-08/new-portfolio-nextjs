import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";

export default async function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}
