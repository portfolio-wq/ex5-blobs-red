import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Navbare from "@/components/Navbare";
import Projects from "@/components/Projects";
import ScroolTotop from "@/components/ScroolTotop";

export default function Home() {
  return (
    <div className="relative ">
      <Navbare />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ScroolTotop />
    </div>
  );
}
