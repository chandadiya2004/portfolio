import { motion } from "framer-motion";
import skillsData from "../../data/sections/skills.json";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-purple-500 mb-12"
        >
          {skillsData.heading}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-600/10 border border-purple-500 text-purple-300 px-3 py-1 rounded-full text-sm hover:bg-purple-600/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
