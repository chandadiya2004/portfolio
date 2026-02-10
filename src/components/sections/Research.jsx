import { motion } from "framer-motion";
import data from "../../data/sections/research.json";

const Research = () => {
  return (
    <section
      id="research"
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

        <div className="space-y-8">
          {data.papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {paper.title}
              </h3>

              <p className="text-gray-300">
                {paper.conference} • {paper.year}
              </p>

              <p className="text-gray-400 mt-3 leading-relaxed">
                {paper.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Research;
