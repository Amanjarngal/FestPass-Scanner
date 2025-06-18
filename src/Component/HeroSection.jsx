import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import FireworksBackground from "./FireworksBackground";

export default function HeroLoader() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowText(false), 4500);
    return () => clearTimeout(timeout);
  }, []);

  const textVariants = useMemo(() => ({
    hidden: { y: -100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.9,
        ease: "easeInOut",
      },
    }),
  }), []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 🎆 Fireworks only in Hero */}
      <FireworksBackground />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black z-10 pointer-events-none" />

      <AnimatePresence mode="wait">
        {showText ? (
          <motion.div
            key="loader"
            className="text-center z-20 space-y-3 sm:space-y-4 md:space-y-6"
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              filter: "blur(10px)",
              transition: { duration: 1.2, ease: "easeInOut" },
            }}
          >
            {["WELCOME", "STUDENT'S", "REGISTRATION", "OPEN", "FOR"].map((line, i) => (
              <motion.h1
                key={i}
                custom={i}
                variants={textVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl will-change-transform"
              >
                {line}
              </motion.h1>
            ))}
          </motion.div>
        ) : (
          <motion.h1
            key="prayas"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black z-20 text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text drop-shadow-[2px_2px_4px_white] text-center px-4"
          >
            PRAYAS 2025
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}
