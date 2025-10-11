import React from "react";
import {
  FaProjectDiagram, FaServer, FaBullseye, FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion"; // eslint-disable-line

export default function About() {
  return (
    <section id="about" className="pt-10 pb-20 px-4 max-w-6xl mx-auto text-center">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-3 gradient-text">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I'm <span className="font-semibold">Tanmay Tayal</span>, a Full Stack Developer driven by a passion for building responsive and scalable web applications. I bring creative UI/UX thinking, optimized feature development, and seamless product delivery with every project I touch.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <div className="glass-card">
          <div className="flex items-center gap-3 mb-2">
            <FaProjectDiagram className="text-xl text-gray-800 dark:text-white" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">My Approach</h3>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6 space-y-1">
            <li>Clean code, proper architecture</li>
            <li>Security-first authentication</li>
            <li>Real-time, dynamic solutions</li>
            <li>Smooth animations, responsive layout</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="glass-card">
          <div className="flex items-center gap-3 mb-2">
            <FaServer className="text-xl text-gray-800 dark:text-white" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Academic Background</h3>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6 space-y-1">
            <li>B.Tech CSE, DIT University</li>
            <li>Dehradun, India</li>
            <li>Graduating 2026</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="glass-card">
          <div className="flex items-center gap-3 mb-2">
            <FaBullseye className="text-xl text-gray-800 dark:text-white" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Current Focus</h3>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6 space-y-1">
            <li>Backend Mastery(Node|Express|REST APIs) </li>
            <li>3D & animations(Three.js|Framer-Motion)</li>
            <li>UI/UX(Modern Responsive UI|UX patterns)</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="glass-card">
          <div className="flex items-center gap-3 mb-2">
            <FaCheckCircle className="text-xl text-gray-800 dark:text-white" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">What Sets Me Apart</h3>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6 space-y-1">
            <li>Neon-aesthetic| Minimal Mature design sense </li>
            <li>JWT & Bcrypt implementation</li>
            <li>OpenAI Tool Integrations</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}