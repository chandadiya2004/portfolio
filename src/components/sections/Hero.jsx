import { motion } from "framer-motion";
import heroData from "../../data/sections/hero.json";
import ProfileImage from "../../pages/home/ProfileImage";
import TypingSubtitle from "../../pages/home/TypingSubtitle";
import AIParticles from "../common/AIParticles";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: (i) => ({
    opacity: 1,
    rotateX: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease: "backOut" },
  }),
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 2, duration: 0.8 },
  },
};

const bounceVariants = {
  animate: {
    y: [0, 10, 0],
    transition: { repeat: Infinity, duration: 2 },
  },
};

const Hero = () => {
  const nameChars = heroData.name.split("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 overflow-hidden pt-20"
    >
      {/* AI Particle Background */}
      <AIParticles />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center w-full py-8">

        {/* Floating Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <ProfileImage />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Name Heading with Character Animation */}
          <motion.div
            variants={fadeUpVariants}
            custom={0}
            className="mb-5"
            style={{ perspective: 1000 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              <span>Hi, I'm </span>
              <motion.span
                className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text inline-block"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {nameChars.map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            variants={fadeUpVariants}
            custom={1}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
            <motion.span
              className="text-purple-300 text-sm tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              WELCOME
            </motion.span>
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeUpVariants} custom={2} className="mb-5">
            <h2 className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text font-bold">
              {heroData.title}
            </h2>
          </motion.div>

          {/* Typing Subtitle */}
          <motion.div variants={fadeUpVariants} custom={3} className="text-blue-300 mb-6 font-mono text-xs md:text-sm min-h-[28px] font-semibold">
            <TypingSubtitle />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            custom={4}
            className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto text-xs md:text-sm"
          >
            {heroData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            custom={5}
            className="flex gap-3 justify-center flex-wrap mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-xl hover:shadow-purple-500/50 px-6 py-2 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wide text-xs md:text-sm"
            >
              <span className="relative z-10">{heroData.ctaPrimary}</span>
              <motion.span
                className="text-lg"
                group-hover={{}}
              >
                →
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg opacity-0 blur"
                whileHover={{ opacity: 0.4 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative border-2 border-purple-500 hover:border-purple-400 hover:bg-purple-600/20 px-6 py-2 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wide text-xs md:text-sm text-purple-300 hover:text-purple-200"
            >
              {heroData.ctaSecondary}
              <motion.span
                className="text-lg"
                group-hover={{}}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={scrollIndicatorVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            variants={bounceVariants}
            animate="animate"
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs md:text-sm text-gray-400 tracking-wide">Scroll</span>
            <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-purple-500 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
