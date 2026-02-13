import { motion } from "framer-motion";
import aboutData from "../../data/sections/about.json";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
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

const About = () => {
  const { heading, summary, highlights, timeline, mission, values } = aboutData;

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
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

          {/* Animated heading with character-by-character animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-1 mb-6"
            style={{ perspective: 1000 }}
          >
            {heading.split("").map((char, i) => (
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
            className="h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-6 max-w-xs"
          />

          {/* Subtitle with icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 mb-6"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              ✨
            </motion.span>
            <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text">
              Get to Know Me
            </p>
            <motion.span
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              ✨
            </motion.span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg"
          >
            {summary}
          </motion.p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              <div className="relative px-4 py-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-purple-500/40 backdrop-blur-md text-center transition-all duration-300">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-200 group-hover:text-purple-300 transition font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 8 }}
                className="relative pl-8 group"
              >
                {/* Timeline line and dot */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all" />
                <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:scale-125 transition-transform" />
                
                <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-purple-500/40 rounded-lg p-4 backdrop-blur-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs text-purple-400 font-semibold">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-purple-300 transition mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission & Values */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-purple-500/40 rounded-2xl p-8 backdrop-blur-xl transition-all duration-300">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">✨ Mission</h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-sm">{mission}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-5 text-indigo-300">🎯 Core Values</h3>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {values.map((val, i) => (
                    <motion.span
                      key={i}
                      variants={fadeUp}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 hover:border-purple-400/60 text-gray-200 hover:text-purple-300 transition-all cursor-pointer font-medium"
                    >
                      {val}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
