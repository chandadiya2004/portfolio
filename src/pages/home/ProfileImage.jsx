import { motion } from "framer-motion";
import profile from "../../assets/profile.jpeg";

export default function ProfileImage() {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="profile-ring"
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 20px rgba(168, 85, 247, 0.3)",
            "0 0 40px rgba(168, 85, 247, 0.6)",
            "0 0 20px rgba(168, 85, 247, 0.3)",
          ],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="gradient-ring">
          <img src={profile} alt="profile" />
        </div>
      </motion.div>
    </motion.div>
  );
}
