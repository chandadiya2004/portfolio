import { motion } from "framer-motion";
import heroData from "../../data/sections/hero.json";
import profile from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-8"
        >
          <div className="relative">

            {/* Glow Ring */}
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>

            {/* Outer Circle Frame */}
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-purple-500 shadow-xl flex items-center justify-center bg-black overflow-hidden">

              {/* Image */}
              <img
                src={profile}
                alt="Diya Chanda"
                className="w-full h-full object-contain scale-95"
              />

            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
            Hi, I'm <span className="text-purple-500">{heroData.name}</span>
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-300 mb-3">
            {heroData.title}
          </h2>

          <p className="text-gray-400 mb-4">
            {heroData.subtitle}
          </p>

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
