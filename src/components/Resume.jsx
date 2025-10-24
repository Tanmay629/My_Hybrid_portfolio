import { motion } from "framer-motion"; //eslint-disable-line

export default function Resume({ langIndex = 0 }) {
  const buttonGradients = [
    "from-cyan-400 to-purple-500",
    "from-pink-400 to-indigo-500",
  ];

  return (
    <section id="resume" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold gradient-text mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h2>

      <motion.p
        className=" mb-10 max-w-xl mx-auto text-lg font-serif"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        A snapshot of my journey as a Full Stack Developer. Download the full PDF below.
      </motion.p>

      <motion.a
        href="/Tanmay_Tayal_resume.pdf" 
        download="Tanmay_Tayal_resume.pdf" 
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${buttonGradients[langIndex]} text-white font-semibold hover:opacity-90 transition-all`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        Download CV
      </motion.a>
    </section>
  );
}