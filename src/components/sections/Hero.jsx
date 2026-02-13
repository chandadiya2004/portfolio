import { motion } from "framer-motion";
import heroData from "../../data/sections/hero.json";
import ProfileImage from "../../pages/home/ProfileImage";
import TypingSubtitle from "../../pages/home/TypingSubtitle";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 overflow-hidden"
    >
      {/* AI Particle Background */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#a855f7" },
            links: {
              enable: true,
              color: "#9333ea",
              distance: 140,
              opacity: 0.15,
            },
            move: { enable: true, speed: 0.6 },
            size: { value: 1.5 },
            opacity: { value: 0.4 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Floating Profile Image */}
        <ProfileImage />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Hi, I'm <span className="text-purple-500">{heroData.name}</span>
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-300 mb-3">
            {heroData.title}
          </h2>

          {/* Typing Subtitle */}
          <div className="text-purple-400 mb-4 font-mono text-sm md:text-base min-h-[26px]">
            <TypingSubtitle />
          </div>

          <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            {heroData.description}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-lg font-semibold transition shadow-lg shadow-purple-500/30"
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
