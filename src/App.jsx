import { useState } from "react";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import BackgroundShapes from "./components/BackgroundShapes";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

export default function App() {
  const [langIndex, setLangIndex] = useState(0);

  return (
    <main className="relative min-h-screen bg-neutral-100 dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-x-hidden">
      <Navbar langIndex={langIndex} />
      <ThemeToggle />

      <BackgroundShapes />

      <Hero onLanguageChange={setLangIndex} />

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
