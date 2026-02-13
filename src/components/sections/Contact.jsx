import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import data from "../../data/sections/contact.json";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: data.email,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
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
            className="h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-6 max-w-xs"
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
            {"Get In Touch".split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent inline-block"
                style={{ originZ: 400 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {data.description}
          </motion.p>

          {/* Decorative bottom line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto max-w-xs mt-6"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-pink-500/50 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                <div className="flex items-center gap-2 mb-1">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-2xl"
                  >
                    ✉️
                  </motion.div>
                  <span className="text-gray-500 text-sm font-semibold">Email</span>
                </div>
                <a
                  href={`mailto:${data.email}`}
                  className="text-sm font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-purple-300 transition break-all"
                >
                  {data.email}
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-indigo-500/50 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-center gap-2 mb-1">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-2xl"
                  >
                    📱
                  </motion.div>
                  <span className="text-gray-500 text-sm font-semibold">Phone</span>
                </div>
                <a
                  href={`tel:${data.phone}`}
                  className="text-sm font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition"
                >
                  {data.phone}
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-purple-500/50 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex items-center gap-2 mb-1">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-2xl"
                  >
                    📍
                  </motion.div>
                  <span className="text-gray-500 text-sm font-semibold">Location</span>
                </div>
                <p className="text-sm font-semibold text-gray-200">
                  {data.location}
                </p>
              </div>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-blue-500/50 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center gap-2 mb-1">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-2xl"
                  >
                    💼
                  </motion.div>
                  <span className="text-gray-500 text-sm font-semibold">LinkedIn</span>
                </div>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1"
                >
                  Connect
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            {/* Form Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl transition-all duration-300 group-hover:from-purple-600/30 group-hover:to-pink-600/30" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-purple-500/50 rounded-2xl p-8 space-y-5 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Name Input */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-semibold text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <label className="block text-sm font-semibold text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows="5"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:shadow-none"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">⟳</span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>✉️</span>
                    Send Message
                  </span>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-900/30 border border-green-600/50 text-green-400 p-4 rounded-lg text-center text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>✓</span>
                  Message sent successfully!
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-900/30 border border-red-600/50 text-red-400 p-4 rounded-lg text-center text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>✕</span>
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
