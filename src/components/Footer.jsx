export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-700 dark:border-gray-800 mt-20">
      <div className="mb-2 flex flex-wrap justify-center space-x-4">
        {" "}
        {/* Added flex for mobile spacing */}
        <a
          href="#hero"
          className="hover:text-purple-400 transition-colors hover:underline px-2"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-purple-400 transition-colors hover:underline px-2"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:text-purple-400 transition-colors hover:underline px-2"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:text-purple-400 transition-colors hover:underline px-2"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-purple-400 transition-colors hover:underline px-2"
        >
          Contact
        </a>
      </div>
      <p className="flex items-center justify-center gap-1">
        © {currentYear} | Tanmay Tayal💜
      </p>
    </footer>
  );
}
