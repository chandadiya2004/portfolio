import { motion } from "framer-motion";
import data from "../../data/sections/certificates.json";

const Certificates = () => {
  return (
    <section
      id="certificates"
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
          {data.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-300">
                {cert.platform} • {cert.issuer}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
