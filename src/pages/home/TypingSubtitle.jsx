import { ReactTyped } from "react-typed";

export default function TypingSubtitle() {
  return (
    <ReactTyped
      strings={[
        "AI Enthusiast 🤖",
        "Full Stack Developer 💻",
        "Research Oriented Mind 🔬",
        "Tech Explorer 🚀",
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  );
}
