import { motion } from "framer-motion";
import skillsData from "../../data/sections/skills.json";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Heading */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Decorative top line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6 max-w-xs"
          />

          {/* Character-by-character animated heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-1 mb-6"
            style={{ perspective: 1000 }}
          >
            {skillsData.heading.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent inline-block"
                style={{ originZ: 400 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Decorative bottom line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto max-w-xs"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                    }}
                    className="group/skill relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover/skill:opacity-20 blur transition-all duration-300" />
                    <div className="relative bg-gray-800/50 border border-gray-700/50 group-hover/skill:border-purple-500/50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-gray-800/80 cursor-pointer">
                      <p className="text-sm font-medium text-gray-300 group-hover/skill:text-purple-300 transition whitespace-nowrap overflow-hidden text-ellipsis">
                        {skill}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
