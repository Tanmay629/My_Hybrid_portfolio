import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; //eslint-disable-line

// --- SKILLS ARRAY WITH CATEGORIES ---
const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", projects: 18, proficiency: 80, description: "Declarative UI framework for modern web applications." },
  { name: "JavaScript ES6+", category: "Frontend", projects: 29, proficiency: 88, description: "Core language for interactive and dynamic web experiences." },
  { name: "Tailwind CSS", category: "Frontend", projects: 18, proficiency: 90, description: "Utility-first CSS framework for rapid and custom UI design." },
  { name: "Framer Motion", category: "Frontend", projects: 10, proficiency: 80, description: "React animation library for fluid and engaging user interfaces." },
  // Backend & APIs
  { name: "Node.js", category: "Backend & APIs", projects: 12, proficiency: 68, description: "JavaScript runtime for building scalable server-side applications." },
  { name: "Express.js", category: "Backend & APIs", projects: 3, proficiency: 72, description: "Minimalist web framework for creating robust APIs with Node.js." },
  { name: "PHP", category: "Backend & APIs", projects: 6, proficiency: 78, description: "Server-side scripting language for dynamic web development." },
  { name: "REST API", category: "Backend & APIs", projects: 9, proficiency: 73, description: "Designing and implementing scalable, stateless web services." },
  { name: "JWT Authentication", category: "Backend & APIs", projects: 7, proficiency: 78, description: "Implementing token-based security for stateless user authentication." },
  // Databases
  { name: "MongoDB", category: "Databases", projects: 8, proficiency: 80, description: "NoSQL database for flexible, document-oriented data storage." },
  { name: "MySQL", category: "Databases", projects: 11, proficiency: 80, description: "Relational database system for structured and reliable data management." },
  // Development Tools
  { name: "Git & GitHub", category: "Development Tools", projects: 24, proficiency: 89, description: "Version control system for collaborative and efficient code management." },
  { name: "UI/UX Design", category: "Development Tools", projects: 16, proficiency: 82, description: "Applying user-centered principles for intuitive and effective interfaces." },
];

// --- CATEGORIES AND THEIR COLORS ---
const categories = [
  { name: "All", color: "from-purple-500 to-pink-500" },
  { name: "Frontend", color: "from-sky-400 to-cyan-300" },
  { name: "Backend & APIs", color: "from-emerald-400 to-lime-300" },
  { name: "Databases", color: "from-amber-400 to-orange-300" },
  { name: "Development Tools", color: "from-indigo-400 to-violet-300" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);
      
  const activeColor = categories.find(cat => cat.name === activeCategory)?.color || "from-gray-400 to-gray-500";

  return (
    <section
      id="skills"
      className="py-[120px] px-6 max-w-6xl mx-auto text-center overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold gradient-text mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Technical Stack
      </motion.h2>

      <motion.p
        className="font-serif mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A showcase of my core competencies, from frontend design to backend logic and database management.
      </motion.p>

      {/* --- Category Tabs (Previous Pill Style) --- */}
      {/* --- Category Tabs with Hover Effect --- */}
<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
  {categories.map((category) => (
    // 1. Convert <button> to <motion.button>
    <motion.button
      key={category.name}
      onClick={() => setActiveCategory(category.name)}
      className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
        ${
          activeCategory === category.name
            ? `shadow-lg `
            // 2. Add hover:bg-purple-600 ONLY to the inactive state
            : `hover:bg-white-500 `
        }`}
      
      // 3. Framer Motion animation props
      animate={{ 
        y: activeCategory === category.name ? -5 : 0,
        scale: activeCategory === category.name ? 1.05 : 1,
      }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {category.name}
    </motion.button>
  ))}
</div>
      {/* --- Skills Grid with Animation --- */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="glass-card p-5 relative"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold  text-purple-500">
                  {skill.name}
                </h3>
                <p className="text-sm text-copper-400">
                  {skill.projects} Projects
                </p>
              </div>

              <div className="text-sm text-purple-400 font-medium mb-1">
                Proficiency {skill.proficiency}%
              </div>

              <div className="w-full h-2 bg-gray-800 rounded-full mb-3 relative overflow-hidden">
                <motion.div
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${activeColor}`}
                  initial={{ inlineSize: 0 }}
                  whileInView={{ inlineSize: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              <p className="text-xs">{skill.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}