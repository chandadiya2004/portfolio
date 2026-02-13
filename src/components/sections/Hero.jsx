import { motion } from "framer-motion";
import heroData from "../../data/sections/hero.json";
import ProfileImage from "../../pages/home/ProfileImage";
import TypingSubtitle from "../../pages/home/TypingSubtitle";
import AIParticles from "../common/AIParticles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 overflow-hidden"
    >
      {/* AI Particle Background */}
      <AIParticles />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Floating Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProfileImage />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          {/* Name Heading with Character Animation */}
          <motion.div
            variants={fadeUpVariants}
            className="mb-4"
            style={{ perspective: 1000 }}
          >
            <div className="flex justify-center flex-wrap gap-1">
              <span className="text-3xl md:text-5xl font-bold">Hi, I'm</span>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center flex-wrap gap-1 mt-2"
              style={{ perspective: 1000 }}
            >
              {heroData.name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent inline-block"
                  style={{ originZ: 400 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeUpVariants} className="mb-4">
            <h2 className="text-lg md:text-2xl text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text font-bold">
              {heroData.title}
            </h2>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-transparent"
            />
            <span className="text-2xl">🚀</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-l from-indigo-500 to-transparent"
            />
          </motion.div>

          {/* Typing Subtitle */}
          <motion.div variants={fadeUpVariants} className="text-blue-400 mb-6 font-mono text-sm md:text-base min-h-[26px]">
            <TypingSubtitle />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto text-sm md:text-base"
          >
            {heroData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-xl hover:shadow-purple-500/50 px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wide text-sm md:text-base"
            >
              <span>{heroData.ctaPrimary}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative border-2 border-purple-500 hover:border-purple-400 hover:bg-purple-600/20 px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wide text-sm md:text-base text-purple-300 hover:text-purple-200"
            >
              <span>💬</span>
              <span>{heroData.ctaSecondary}</span>
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 text-gray-400"
          >
            <p className="text-sm mb-2">Scroll to explore</p>
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
