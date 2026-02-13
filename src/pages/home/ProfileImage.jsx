import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

export default function ProfileImage() {
  return (
    <motion.div
      className="profile-ring"
      initial={{ opacity: 0, scale: 0.6, y: 30 }}   // start invisible
      animate={{
        opacity: 1,
        scale: [1, 1.05, 1],
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 1.2, ease: "easeOut" },
        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <div className="gradient-ring">
        <img src={profile} alt="profile" />
      </div>
    </motion.div>
  );
}
