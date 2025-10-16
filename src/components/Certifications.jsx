import React from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

// ⬇️ Your dynamic cert data list
const certifications = [
  {
    title: "Programming in JavaScript",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/VVSZ9AQX0BB3",
  },
  {
    title: "Software Engineering",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/certificate/WRN3TK7IB3BY",
  },
  {
    title: "Microsoft Copilot",
    issuer: "Microsoft",
    link: "https://www.coursera.org/account/accomplishments/certificate/IQE035BMUI3H",
  },
  {
    title: "Python for AI",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/21GEX9AM1LI6",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold gradient-text mb-10 "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>

      {/* Certifications Grid */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="glass-card p-5 flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <FaCertificate className="text-purple-400 text-3xl mt-1" />
            <div className="flex-grow">
              <h4 className="text-purple-600 font-semibold text-base">{cert.title}</h4>
              <p className="text-sm mb-2">Issued by {cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-purple-600 hover:underline"
              >
                View Certificate <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}