import { motion } from "framer-motion"; //eslint-disable-line
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Hybrid Portfolio",
    description:
      "A responsive, animated React portfolio inspired by Brittany Chiang and Ali Mohsin. Showcases developer skills, animations, and projects.",
    tech: ["React.js", "Framer-Motion", "TailwindCSS"],
    github: "https://github.com/Tanmay629/My_Hybrid_portfolio",
    demo: "https://tt-hybrid-portfolio.vercel.app/",
  },
  {
    title: "EcoMart",
    description:
      "A sustainable e-commerce MERN stack prototype with JWT authentication and mock payment using TailwindCSS.  **CURRENTLY UNDER MAINTENANCE!! **",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Framer-Motion",
      "TailwindCSS",
    ],
    // github: "https://github.com/Tanmay629/ecomart",
    // demo: "https://ecomart-prototype.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold gradient-text mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="mb-12 max-w-2xl mx-auto text-lg font-serif"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Things I've built recently using modern tech stacks.
      </motion.p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass-card p-6 flex flex-col justify-between text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-500 mb-2">
                {project.title}
              </h3>
              <p className="text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white text-gray-400 transition"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white text-gray-400 transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
