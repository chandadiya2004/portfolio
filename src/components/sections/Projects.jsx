import { motion } from "framer-motion";
import data from "../../data/sections/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-purple-500 mb-12 text-center"
        >
          {data.heading}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-600/10 border border-purple-500 text-purple-300 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
