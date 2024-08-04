import Hero from "./home/hero";
import About from "./about/about";
import Experience from "./experience/experience";
import Project from "./project/project";
import Contact from "./contact/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="block md:hidden">
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
