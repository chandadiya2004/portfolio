import { motion } from "framer-motion";
import heroData from "../../data/sections/hero.json";
import profile from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-purple-500">{heroData.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
            {heroData.title}
          </h2>

          <p className="text-gray-400 mb-6">
            {heroData.subtitle}
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            {heroData.description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-purple-500/20"
            >
              {heroData.ctaPrimary}
            </a>

            <a
              href="#contact"
              className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              {heroData.ctaSecondary}
            </a>
          </div>
        </motion.div>

{/* Profile Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>
  <div className="relative">

    {/* Glow Ring */}
    <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>

    {/* Outer Circle Frame */}
    <div className="w-80 h-80 rounded-full border-4 border-purple-500 shadow-xl flex items-center justify-center bg-black overflow-hidden">

      {/* Image */}
      <img
        src={profile}
        alt="Diya Chanda"
        className="w-full h-full object-contain scale-95"
      />

    </div>
  </div>
</motion.div>


      </div>
    </section>
  );
};

export default Hero;
