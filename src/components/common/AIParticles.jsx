import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AIParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000" },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          opacity: { value: 0.15 },
          size: { value: 2 },
          move: { enable: true, speed: 0.6 },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 130,
            opacity: 0.1,
          },
        },
      }}
    />
  );
}
