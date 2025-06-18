import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

export default function FireworksBackground() {
  const particlesInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles-hero"
        init={particlesInit}
        options={{
          preset: "fireworks",
          background: {
            color: "transparent",
          },
          fullScreen: {
            enable: false, // 🔒 Important: disable fullscreen
          },
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
          
        }}
      />
    </div>
  );
}
