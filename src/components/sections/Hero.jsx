import { motion } from "framer-motion";
import heroData from "../../data/sections/hero.json";
import ProfileImage from "../../pages/home/ProfileImage";
import TypingSubtitle from "../../pages/home/TypingSubtitle";
import AIParticles from "../common/AIParticles";

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
        <ProfileImage />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Hi, I'm <span className="text-purple-500">{heroData.name}</span>
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-300 mb-3">
            {heroData.title}
          </h2>

          <div className="text-blue-400 mb-4 font-mono text-sm md:text-base min-h-[26px]">
            <TypingSubtitle />
          </div>

          <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            {heroData.description}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-lg font-semibold shadow-lg shadow-purple-500/30 transition"
            >
              {heroData.ctaPrimary}
            </a>

            <a
              href="#contact"
              className="border border-purple-500 hover:bg-purple-600 px-7 py-3 rounded-lg font-semibold transition"
            >
              {heroData.ctaSecondary}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
