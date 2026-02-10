import { motion } from "framer-motion";
import aboutData from "../../data/sections/about.json";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
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
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {summary}
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center text-sm text-gray-200 hover:border-purple-500/40 transition"
            >
              {item}
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
                className="relative pl-6 border-l border-white/10"
              >
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                <h4 className="text-sm text-purple-400">{item.year}</h4>
                <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission & Values */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-300 leading-relaxed mb-6">{mission}</p>

            <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
            <div className="flex flex-wrap gap-3">
              {values.map((val, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-white/10 text-gray-200"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
