// src/components/HomePage.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-6"
      >
        Welcome to College Fest 2025 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg sm:text-xl text-center mb-10 text-white/80"
      >
        Join the fun — whether you're an <b>Attendee</b>, <b>Participant</b>, or <b>Contributor</b>!
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link to="/register">
          <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition">
            Register
          </button>
        </Link>
        <Link to="/scan">
          <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg shadow-lg hover:bg-green-400 transition">
            Scan QR Code
          </button>
        </Link>
        <Link to="/generate">
          <button className="px-6 py-3 bg-purple-500 text-black font-semibold rounded-lg shadow-lg hover:bg-purple-400 transition">
            Generate QR Code
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
