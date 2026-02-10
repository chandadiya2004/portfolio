import { motion } from "framer-motion";
import data from "../../data/sections/contact.json";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-purple-500 mb-6">
            {data.heading}
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            {data.description}
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📧 {data.email}</p>
            <p>📞 {data.phone}</p>
            <p>📍 {data.location}</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-black/40 border border-gray-600 rounded-lg outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-black/40 border border-gray-600 rounded-lg outline-none focus:border-purple-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-black/40 border border-gray-600 rounded-lg outline-none focus:border-purple-500"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition w-full"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
