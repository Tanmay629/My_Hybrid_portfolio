import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar({ langIndex }) {
  const colors = [
    "bg-gradient-to-br from-cyan-400 to-purple-500",
    "bg-gradient-to-br from-pink-400 to-indigo-500",
  ];

  const textColors = [
    "bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent",
    "bg-gradient-to-br from-pink-400 to-indigo-500 bg-clip-text text-transparent",
  ];

  const scrollToTop = () => {
    const heroSection = document.getElementById('hero'); // Adjust 'hero' to match your hero section's ID
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to top of page if no hero ID
      window.scrollTo({ insetBlockStart: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full px-6 py-4 fixed top-0 left-0 z-40 flex items-center justify-between bg-transparent text-[35px]">
      {/* 🔵 Left Side: Logo Circle + Name (as one clickable card) */}
      <div 
        className="flex items-center gap-3 cursor-pointer transition-colors hover:animate-bounce"
        onClick={scrollToTop}
      >
        <div className={`w-6 h-6 rounded-full shadow-md ${colors[langIndex]}`}></div>
        <span className={`text-xl font-semibold text-[28px] ${textColors[langIndex]} hover:block`}>
          Tanmay
        </span>
      </div>

      {/* 🌐 Right Side: Social Icons (GitHub & LinkedIn) */}
      <div className="flex items-center gap-5 pr-[50px]">
        {/* GitHub Icon */}
        <a
          href="https://github.com/Tanmay629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper-400 hover:text-white transition text-[35px]"
        >
          <FaGithub />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/tanmay-tayal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper-400 hover:text-blue-400 transition text-[36px]"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}