import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import data from "../../data/sections/certificates.json";

// Import certificate images
import IEEECert from "../../assets/certificates/IEEE_certificate.png";
import SIHCert from "../../assets/certificates/SIH_certificate.png";
import MeritCert from "../../assets/certificates/Merit_certificate.png";
import SttpCert from "../../assets/certificates/STTP_certificate.png";
import AWSCert from "../../assets/certificates/AWS_certificate.png";
import InternshipCert from "../../assets/certificates/Internship_certificate.png";
import XetaCert from "../../assets/certificates/Xeta_Labs_certificate.png";

// Map certificate IDs to imported images
const certificateImages = {
  1: IEEECert,
  2: SIHCert,
  3: MeritCert,
  4: SttpCert,
  5: AWSCert,
  6: InternshipCert,
  7: XetaCert,
};

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

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {data.certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />

              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-purple-500/50 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-grow">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-4xl flex-shrink-0"
                    >
                      {cert.icon}
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-200 transition break-words">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Details */}
                {cert.article && (
                  <p className="text-purple-300 font-medium mb-2 text-sm">
                    "{cert.article}"
                  </p>
                )}

                {cert.program && (
                  <p className="text-purple-300 font-medium mb-2 text-sm">
                    {cert.program}
                  </p>
                )}

                {cert.event && (
                  <p className="text-purple-300 font-medium mb-2 text-sm">
                    {cert.event}
                  </p>
                )}

                <p className="text-gray-300 mb-2 text-sm">
                  {cert.issuer}
                </p>

                {cert.position && (
                  <p className="text-gray-400 text-xs mb-2">
                    {cert.position}
                  </p>
                )}

                <p className="text-sm text-gray-400 mb-3">
                  Issued {cert.year}
                </p>

                {cert.description && (
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 flex-grow">
                    {cert.description}
                  </p>
                )}

                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-900/40 text-purple-300 px-2 py-1 rounded border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Certificate Button */}
                {certificateImages[cert.id] && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCert(cert)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    <span>📜</span> View Certificate
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg sm:max-w-2xl max-h-[85vh] sm:max-h-[80vh]"
            >
              <img
                src={certificateImages[selectedCert.id]}
                alt={selectedCert.title}
                className="w-full h-auto object-contain rounded-xl shadow-2xl shadow-purple-500/50"
              />
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl transition-all shadow-lg"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
