import React from "react";
import { motion } from "framer-motion"; //eslint-disable-line

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-6xl mx-auto text-center"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold gradient-text mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Here’s what I’ve done in real-world environments — from backend to frontend to deployment.
      </motion.p>

      {/* Experience Block */}
      <motion.div
        className="glass-card p-6 text-left space-y-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <div>
            <h3 className="text-lg font-semibold">
              Full Stack Developer Intern
            </h3>
            <br />
            <p className="text-[17px] text-purple-600">
              Attero Recycling Pvt. Ltd.
            </p>
          </div>
          <p className="text-s sm:text-right mt-2 sm:mt-0">
            Sep 2025 – Nov 2025 • Noida, India
          </p>
        </div>

        {/* Responsibilities */}
        <ul className="list-disc list-inside  text-sm space-y-1">
          <li>
            Developed a full CRUD notes system using PHP, SQL & AJAX with real-time updates.
          </li>
          <li>
            Built secure auth (signup, login, logout) using MERN, JWT, & Bcrypt.
          </li>
          <li>
            Designed Tailwind-responsive UI + added UX animations using Framer Motion.
          </li>
          <li>
            Learned team collaboration, version control, deployment workflows.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}