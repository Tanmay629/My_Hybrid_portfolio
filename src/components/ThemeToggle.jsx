import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed z-50 top-3 right-4 p-2 bg-white/20 dark:bg-black/30 backdrop-blur-md rounded-full shadow-md transition hover:scale-110 text-[30px]"
    >
      {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-white" />}
    </button>
  );
}