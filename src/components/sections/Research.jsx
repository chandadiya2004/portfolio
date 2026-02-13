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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition duration-300 group"
            >
              {/* Paper Icon and Title */}
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">📄</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300 transition">
                    {paper.title}
                  </h3>
                </div>
              </div>

              {/* Authors */}
              <p className="text-sm text-gray-400 mb-3 ml-[52px]">
                <span className="text-gray-500">Authors:</span> {paper.authors}
              </p>

              {/* DOI Link */}
              <p className="text-sm text-gray-400 mb-4 ml-[52px]">
                <span className="text-gray-500">DOI:</span>{" "}
                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline transition"
                >
                  {paper.doi}
                </a>
              </p>

              {/* Conference/Journal and Year */}
              <p className="text-sm text-gray-400 mb-4 ml-[52px]">
                <span className="font-semibold text-purple-400">{paper.conference}</span> • {paper.year}
              </p>

              {/* Description */}
              <p className="text-gray-300 mt-4 ml-[52px] leading-relaxed">
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
