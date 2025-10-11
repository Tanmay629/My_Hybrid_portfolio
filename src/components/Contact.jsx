import React from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact({ langIndex = 0 }) {
  const iconColors = [
    "text-cyan-400",
    "text-pink-400",
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold gradient-text mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className=" mb-10 max-w-xl mx-auto text-xl font-serif"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Whether it's a collaboration, opportunity, or just to say hi — feel
        free to reach out!
      </motion.p>

      {/* All Icons in One Row */}
      <motion.div
        className="flex justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Email Icon */}
        <a
          href="mailto:tanmaytayal4@gmail.com"
          className={`text-4xl ${iconColors[langIndex]} hover:text-red-400 transition-colors`}
        >
          <FaEnvelope />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Tanmay629"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-4xl ${iconColors[langIndex]} hover:text-black transition-colors`}
        >
          <FaGithub />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/tanmay-tayal"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-4xl ${iconColors[langIndex]} hover:text-blue-400 transition-colors`}
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}