import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import ScrollIndicator from "./ScrollIndicator";

export default function Hero({ onLanguageChange }) {
  const phrases = [
    { lang: "en", text: "I'm ", name: "Tanmay Tayal" },
    { lang: "jp", text: "私は ", name: "タンマイ・タイヤルです" },
  ];

  const [index, setIndex] = useState(0);
  const [atTop, setAtTop] = useState(true); // State to show/hide scroll indicator

  useEffect(() => {
    // Cycle name languages
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % phrases.length;
      setIndex(nextIndex);
      onLanguageChange(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, onLanguageChange,phrases.length]);

  useEffect(() => {
    // Scroll listener
    const handleScroll = () => {
      setAtTop(window.scrollY < 50); // Show only near top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi <span role="img" aria-label="wave" className="ani">👋</span>
      </motion.h1>

      <motion.div
        className="text-4xl sm:text-6xl font-bold mb-6"
        key={phrases[index].lang}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {phrases[index].text}
        <span className="gradient-text">{phrases[index].name}</span>
      </motion.div>

      <motion.p
        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        I'm a MERN Stack Developer | Node.js | React.js | Express.js | MongoDB | PHP | MySQL
      </motion.p>

      {/* 👇 Show scroll indicator only when atTop is true */}
      {atTop && <ScrollIndicator />}
    </section>
  );
}