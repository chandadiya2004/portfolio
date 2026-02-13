import { motion } from "framer-motion";
import data from "../../data/sections/projects.json";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3">
            {data.heading}
          </h2>
          <p className="text-gray-400 text-lg">Innovative solutions built with modern tech stack</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-purple-500/50 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-4xl"
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-300 group-hover:text-purple-200 transition">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-purple-400 transition font-semibold">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 group-hover:border-purple-400/60 text-purple-300 group-hover:text-purple-200 px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border-2 border-purple-500 text-purple-300 px-4 py-2.5 rounded-lg hover:bg-purple-600/20 hover:text-purple-200 transition-all font-semibold text-sm text-center flex items-center justify-center gap-2"
                    >
                      <span>→</span> Code
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold text-sm text-center flex items-center justify-center gap-2"
                    >
                      <span>✨</span> Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
