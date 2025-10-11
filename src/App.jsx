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

export default function App() {
  // Language index syncs the animated circle color in the navbar
  const [langIndex, setLangIndex] = useState(0);

  return (
    <main className="relative min-h-screen bg-neutral-100 dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Top Navbar - inset-inline-start: Name + Circle | inset-inline-end: Theme Toggle */}
      <Navbar langIndex={langIndex} />
      <ThemeToggle />

      {/* Animated geometric background */}
      <BackgroundShapes />

      {/* Hero section with dynamic name & scroll indicator */}
      <Hero onLanguageChange={setLangIndex} />

      {/* About Section after Hero */}
      <About />
      <Skills/>
      <Projects/>
      <Experience/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </main>
  );
}