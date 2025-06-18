import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function AboutPrayas() {
  const { ref, inView } = useInView({
    triggerOnce: false, // 🔁 Re-animate on every scroll into view
    threshold: 0.2,
  });

  const textVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const paraVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
    id="about"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={textVariant}
      className="min-h-screen flex items-center justify-center px-6 bg-black text-white text-center"
    >
      <div className="max-w-6xl">
        <motion.h2
          variants={textVariant}
          className="text-6xl md:text-8xl font-extrabold mb-10 leading-tight drop-shadow-[0_0_20px_white]"
        >
          ABOUT <span className="text-cyan-400">PRAYAS</span>
        </motion.h2>

        <motion.p
          variants={paraVariant}
          className="text-2xl md:text-3xl leading-relaxed text-white/80 font-medium tracking-wide"
        >
          <span className="block mb-6">
            <strong>PRAYAS</strong> is the flagship cultural and technical festival organized by{" "}
            <strong>Amritsar Group of Colleges</strong>, bringing together creativity,
            intellect, and innovation under one roof.
          </span>
          <span>
            Experience the thrill of competitions, the rhythm of performances, and the joy
            of celebration. Be part of{" "}
            <span className="text-cyan-300 font-bold">PRAYAS 2025</span> — where ideas ignite
            and talents shine!
          </span>
        </motion.p>
      </div>
    </motion.section>
  );
}
