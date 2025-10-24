import { motion } from "framer-motion"; //eslint-disable-line

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Modern & Stylish Text */}
      <motion.p
        className="text-[13px] font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Scroll to explore
      </motion.p>

      {/* Bouncing Mouse */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-2 h-2 rounded-full bg-cyan-400"
        />
      </motion.div>
    </motion.div>
  );
}