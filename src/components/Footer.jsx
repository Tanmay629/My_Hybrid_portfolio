

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-700 dark:border-gray-800 mt-20">
      <div className="mb-2">
        <a href="#hero" className="hover:underline px-2">
          Home
        </a>
        <a href="#about" className="hover:underline px-2">
          About
        </a>
        <a href="#skills" className="hover:underline px-2">
          Skills
        </a>
        <a href="#projects" className="hover:underline px-2">
          Projects
        </a>
        <a href="#contact" className="hover:underline px-2">
          Contact
        </a>
      </div>
      <p>
        © {new Date().getFullYear()}  |  Tanmay Tayal💜 
      </p>
    </footer>
  );
}