import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-white/10 backdrop-blur-md text-white border-t border-white/20 shadow-[0_4px_30px_rgba(255,255,255,0.2)]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left - Brand */}
        <div>
         
          <h4 className="text-5xl font-extrabold text-center mb-10 text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.6)]">
          Fest Pass <span className="text-cyan-300">Scanner</span>
        </h4>
          <p className="text-sm text-white/80 italic">
            Your one-pass entry to fun, talent & unforgettable college memories.
          </p>
        </div>

        {/* Middle - Links */}
        <div>
          <h4 className="text-xl font-semibold text-cyan-200 mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li><a href="#about" className="hover:text-cyan-300 transition">About</a></li>
            <li><a href="#instructions" className="hover:text-cyan-300 transition">Instructions</a></li>
            <li><a href="#registration" className="hover:text-cyan-300 transition">Registration</a></li>
            <li><a href="#Scanner" className="hover:text-cyan-300 transition">Scanner</a></li>
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <h4 className="text-xl font-semibold text-cyan-200 mb-3">Connect With Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a href="mailto:fest@college.com" className="hover:text-cyan-300 transition"><FaEnvelope /></a>
            <a href="https://github.com/Amanjarngal" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition"><FaGithub /></a>
            <a href="https://linkedin.com/aman-jarngal" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition"><FaLinkedin /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-white/50 py-4 border-t border-white/10">
        © 2025 FestPassScanner | Made By Aman Jarngal
      </div>
    </footer>
  );
};

export default Footer;
