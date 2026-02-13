import { motion } from "framer-motion";
import data from "../../data/sections/research.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

const Research = () => {
  return (
    <section
      id="research"
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
            {data.heading.split("").map((char, i) => (
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {data.papers.map((paper) => (
            <motion.div
              key={paper.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />

              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 grid md:grid-cols-3 gap-6 p-6">
                
                {/* Research Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="md:col-span-1 relative h-48 md:h-full overflow-hidden rounded-xl bg-gray-900"
                >
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  {/* Header with Icon */}
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-4xl flex-shrink-0"
                      >
                        {paper.icon}
                      </motion.div>
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-purple-300 group-hover:text-purple-200 transition break-words">
                          {paper.title}
                        </h3>
                      </div>
                    </div>

                    {/* Authors */}
                    <p className="text-xs md:text-sm text-gray-400 mb-2">
                      <span className="text-gray-500 font-semibold">Authors:</span> {paper.authors}
                    </p>

                    {/* Conference and Year */}
                    <p className="text-xs md:text-sm text-gray-400 mb-3">
                      <span className="font-semibold text-purple-400">{paper.conference}</span> • {paper.year}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {paper.description}
                    </p>
                  </div>

                  {/* DOI Link */}
                  <motion.a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 w-fit bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold text-sm"
                  >
                    <span>📖</span> View Paper
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
