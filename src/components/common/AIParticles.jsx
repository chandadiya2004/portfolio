import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AIParticles() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 120,
          particles: {
            number: { 
              value: 150,
              density: { enable: true, value_area: 600 }
            },
            color: { 
              value: [
                "#00d4ff", // Cyan
                "#ff006e", // Pink
                "#a78bfa", // Purple
                "#ec4899", // Rose
                "#00f5ff", // Bright Cyan
              ] 
            },
            opacity: { 
              value: { min: 0.3, max: 0.8 },
              animation: { 
                enable: true, 
                speed: 1.2, 
                sync: false 
              }
            },
            size: { 
              value: { min: 2, max: 8 },
              animation: { 
                enable: true, 
                speed: 3, 
                sync: false 
              }
            },
            links: {
              enable: true,
              color: { value: "#00d4ff" },
              distance: 120,
              opacity: { 
                value: 0.4,
                animation: { 
                  enable: true, 
                  speed: 0.8,
                  sync: false
                }
              },
              width: 2,
            },
            move: { 
              enable: true,
              speed: { min: 0.5, max: 2 },
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            },
          },
          interactivity: {
            events: {
              onHover: { 
                enable: true, 
                mode: "grab",
                parallax: { enable: true, force: 60, smooth: 10 }
              },
              onClick: { enable: true, mode: "push" },
              onDiv: { elementId: "tsparticles", enable: false, mode: "push" }
            },
            modes: {
              grab: { 
                distance: 120, 
                links: { 
                  opacity: 0.8,
                  color: "#ff006e"
                }
              },
              push: { quantity: 6 },
              remove: { quantity: 2 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
        id="tsparticles"
      />
      
      {/* Glow Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
}
